import wilderRepository from '../repositories/wildersRepository';
import Skill from '../models/Skill';
import Wilder from '../models/Wilder';

const wilderService = {
  /**
   * Return all wilders.
   * @returns {Promise<Array<EnforceDocument<unknown, {}>>>}
   */
  read: (): Promise<Wilder[]> => {
    return wilderRepository.findAll();
  },
  /**
   * Read one wilder relative to the id in parameter
   * @param id wilder id
   * @returns {Promise<Array<EnforceDocument<unknown, {}>>>}
   */
  readOne: (id: string): Promise<Wilder | null> => {
    return wilderRepository.findById(id);
  },
  /**
   * Insert a new wilder relative to the wilder name, the city,
   * the skills
   * @param name wilder name
   * @param city wilder city
   * @param skills wilder skills
   * @returns {Promise<*>} a Promise which contains the created wilder
   */
  create: (name: string, city: string, skills: Array<Skill>): Promise<Wilder> => {
    if (!name && !city) {
      throw new Error("Name and city are required");
    }

    if (name.length > 30) {
      throw new Error("Name should have at least one character and max 30");
    }

    return wilderRepository.create(name, city, skills);
  },
  /**
   * Update an existing wilder.
   * @param id wilder id
   * @param wilderName wilder name
   * @param city wilder city
   * @param skills wilder skills
   * @returns {Promise<(Document<*, *, *>&Require_id<*>)|null>} a Promise which contains
   */
  update: (id: string, wilderName: string, city: string, skills: Array<Skill>): Promise<Wilder | null> => {
    return wilderRepository.update(id, wilderName, city, skills);
  },
  /**
   * Delete a wilder relative to its id in parameter
   * @param id wilder id
   * @returns {Promise<(Document<*, *, *>&Require_id<*>)|null>} a Promise
   */
  delete: (id: string): Promise<Wilder | null> => {
    return wilderRepository.delete(id);
  }
}

export default wilderService;