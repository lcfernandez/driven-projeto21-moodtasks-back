import { duplicatedProjectError, forbiddenError, projectNotFoundError } from "../errors";
import { projectRepository } from "../repositories/projectsRepository";

async function create(name: string, userId: number) {
  const projectNameExists = await projectRepository.findByName(name, userId);
  
  if (projectNameExists) throw duplicatedProjectError();
  
  return await projectRepository.create(name, userId);
}

async function findAll(id: number) {
  return await projectRepository.findAll(id);
}

async function remove(id: number, userId: number) {
  if (isNaN(id)) throw projectNotFoundError();

  const projectExists = await projectRepository.findById(id);
  
  if (!projectExists) throw projectNotFoundError();

  if (projectExists.user_id !== userId) throw forbiddenError();

  await projectRepository.remove(id);
}

async function update(id: number, name: string, userId: number) {
  if (isNaN(id)) throw projectNotFoundError();

  const projectExists = await projectRepository.findById(id);
  
  if (!projectExists) throw projectNotFoundError();

  if (projectExists.user_id !== userId) throw forbiddenError();

  const projectNameExists = await projectRepository.findByName(name, userId);
  
  if (projectNameExists && projectNameExists.id !== id) throw duplicatedProjectError();
  
  await projectRepository.update(id, name);
}

export const projectsService = {
  create,
  findAll,
  remove,
  update
};
