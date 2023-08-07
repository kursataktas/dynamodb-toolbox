import type { AttributeBasicValue, AttributeValue, SetAttribute } from 'v1/schema'
import type { ExtensionParser, ParsingOptions } from 'v1/validation/parseClonedInput/types'
import type { UpdateItemInputExtension } from 'v1/commands/updateItem/types'
import { parseAttributeClonedInput } from 'v1/validation/parseClonedInput/attribute'
import { $ADD, $DELETE } from 'v1/commands/updateItem/constants'

import { hasAddOperation, hasDeleteOperation } from '../utils'

export const parseSetExtension = (
  attribute: SetAttribute,
  input: AttributeValue<UpdateItemInputExtension> | undefined,
  options: ParsingOptions<UpdateItemInputExtension>
): ReturnType<ExtensionParser<UpdateItemInputExtension>> => {
  const hasAdd = hasAddOperation(input)
  const hasDelete = hasDeleteOperation(input)

  if (hasAdd || hasDelete) {
    const parsedExtension: AttributeValue<UpdateItemInputExtension> = {}

    if (hasAdd) {
      Object.assign(parsedExtension, {
        [$ADD]: parseAttributeClonedInput(attribute, input[$ADD], options)
      })
    }

    if (hasDelete) {
      Object.assign(parsedExtension, {
        [$DELETE]: parseAttributeClonedInput(attribute, input[$DELETE], options)
      })
    }

    return {
      isExtension: true,
      parsedExtension
    }
  }

  return {
    isExtension: false,
    basicInput: input as AttributeBasicValue<UpdateItemInputExtension> | undefined
  }
}
