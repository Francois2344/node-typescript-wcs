import Skill from "../models/Skill";
import Wilder from "../models/Wilder";
import mongoose, { Schema, model } from "mongoose";

const WilderSchema = new Schema<Wilder>({
  name: {type: String, unique: true},
  city: String,
  skills: [{ title: String, votes: Number }],
});

const WilderModel = model<Wilder>("wilder", WilderSchema);

const wildersRepository = {
  /**
   * Return an array of all wilders.
   * @returns {Promise<Array<Wilder>>} a Promise which contains an array of wilders
   */
  findAll: (): Promise<Wilder[]> => {
    return WilderModel.find().exec();
  },
  /**
   * Return the wilder relative to the id in parameter.
   * @param id wilder id
   * @returns {Promise<Wilder | null>} a Promise which contains a
   * single wilder
   */
  findById: (id: string): Promise<Wilder | null> => {
    return WilderModel.findById(id).exec();
  },
  /**
   * Create a wilder document with its name, city and skills.
   * @param wilderName wilder name
   * @param city  wilder city
   * @param skills wilder wkills
   * @returns {Promise<Document<any, any, unknown> & Require_id<unknown>>} a Promise
   */
  create: (wilderName: string, city: string, skills: Array<Skill>): Promise<Wilder> => {
    return WilderModel.init().then(() => {
      const wilder = new WilderModel({
        name: wilderName,
        city,
        skills
      });
      return wilder.save();
    });
  },
  /**
   * Update a single wilder
   * @param id wilder id
   * @param name wilder name
   * @param city wilder city
   * @param skills wilder skills
   * @returns {Promise<(Document<any, any, unknown> & Require_id<unknown>) | null>} a Promise which contains the updated
   * wilder.
   */
  update: async (id: string, name: string, city: string, skills: Array<Skill>): Promise<Wilder | null> => {
    await WilderModel.updateOne({ _id: id }, {
      name,
      city,
      skills
    });
    return WilderModel.findById(id).exec();
  },
  /**
   * Delete a wilder relative to its id in parameter.
   * @param id wilder id
   * @returns {Promise<(Document<any, any, unknown> & Require_id<unknown>) | null>} a Promise
   */
  delete: (id: string): Promise<Wilder | null> => {
    return WilderModel.findByIdAndDelete(id).exec();
  }

}

export default wildersRepository;