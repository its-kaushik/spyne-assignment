import { SerializerType } from '../../middlewares/serializer.middleware';

export const createUserSerializer: SerializerType = {
  select: ['-__v'],
};

export const getAllUserSerializer: SerializerType = {
  queryTransform(query) {
    if (query.name) {
      query.name = {
        $regex: query.name,
        $options: 'i',
      };
    }

    return query;
  },
};
