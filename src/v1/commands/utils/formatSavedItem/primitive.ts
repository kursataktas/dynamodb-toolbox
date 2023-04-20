import type {
  PrimitiveAttribute,
  PossiblyUndefinedResolvedAttribute,
  ResolvedPrimitiveAttribute
} from 'v1/item'
import { validatorsByPrimitiveType } from 'v1/utils/validation'

export const parseSavedPrimitiveAttribute = (
  primitiveAttribute: PrimitiveAttribute,
  input: PossiblyUndefinedResolvedAttribute
): PossiblyUndefinedResolvedAttribute => {
  const validator = validatorsByPrimitiveType[primitiveAttribute.type]
  if (!validator(input)) {
    // TODO
    throw new Error()
    // throw new DynamoDBToolboxError('putItemCommand.invalidAttributeInput', {
    //   message: `Attribute ${primitiveAttribute.path} should be a ${primitiveAttribute.type}`,
    //   path: primitiveAttribute.path,
    //   payload: {
    //     received: input,
    //     expected: primitiveAttribute.type
    //   }
    // })
  }

  if (
    primitiveAttribute.enum !== undefined &&
    !primitiveAttribute.enum.includes(input as ResolvedPrimitiveAttribute)
  ) {
    // TODO
    throw new Error()
    // throw new DynamoDBToolboxError('putItemCommand.invalidAttributeInput', {
    //   message: `Attribute ${
    //     primitiveAttribute.path
    //   } should be one of: ${primitiveAttribute.enum.map(String).join(', ')}`,
    //   path: primitiveAttribute.path,
    //   payload: {
    //     received: input,
    //     expected: primitiveAttribute.enum
    //   }
    // })
  }

  return input
}
