import { NOT_FOUND, RECORD_NOT_UPDATED } from '../constants/error';
import { customError } from '../utils';

export abstract class BaseProcessor {
  repo: any;
  constructor() {
    this.repo = this.getEntity();

    // Bind methods
    this.create = this.create.bind(this);
    this.getPopulateQuery = this.getPopulateQuery.bind(this);
    this.updateOrCreate = this.updateOrCreate.bind(this);
    this.find = this.find.bind(this);
    this.findOne = this.findOne.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  protected abstract getEntity(): any;

  async create(payload: any) {
    const result = await this.repo.create(payload);
    return result;
  }

  getPopulateQuery(populateTerms: string[] | null) {
    if (populateTerms)
      return populateTerms.map((term: string) => {
        const [entity, selectTerms] = term.split('|');
        return {
          path: entity,
          select: selectTerms,
        };
      });
    return null;
  }

  async updateOrCreate(
    queryObj: any,
    payload: any,
    populateQuery: string[] | null = null,
    selectTerms: string[] | null = null
  ) {
    const resultDocument = await this.repo
      .findOneAndUpdate(queryObj, payload, {
        new: true,
        upsert: true,
      })
      .populate(this.getPopulateQuery(populateQuery))
      .select(selectTerms);
    return {
      data: resultDocument,
      updated: resultDocument.createdAt !== resultDocument.updatedAt,
    };
  }

  async find(
    query: any,
    populateQuery: string[] | null = null,
    selectTerms: string[] | null = null
  ) {
    const result = await this.repo
      .find(query)
      .populate(this.getPopulateQuery(populateQuery))
      .select(selectTerms)
      .sort({ createdAt: -1 });
    return result;
  }

  async findOne(
    query: any,
    populateQuery: string[] | null = null,
    selectTerms: string[] | null = null
  ) {
    const result = await this.repo
      .findOne(query)
      .populate(this.getPopulateQuery(populateQuery))
      .select(selectTerms);
    if (!result) throw customError(NOT_FOUND);
    return result;
  }

  async update(query: any, payload: any) {
    const result = await this.repo.updateOne(query, payload);
    if (!result.matchedCount) throw customError(NOT_FOUND);
    if (!result.modifiedCount) throw customError(RECORD_NOT_UPDATED);
    return result;
  }

  async delete(query: any) {
    const result = await this.repo.deleteOne(query);
    return result;
  }
}
