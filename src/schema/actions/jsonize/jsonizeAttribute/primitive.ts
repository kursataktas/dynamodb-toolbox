import type {
  BinaryAttribute,
  BooleanAttribute,
  NullAttribute,
  NumberAttribute,
  StringAttribute
} from '~/attributes/index.js'
import { $transformerId } from '~/attributes/primitive/constants.js'
import type { JSONizableTransformer } from '~/attributes/primitive/types.js'
import { isEmpty } from '~/utils/isEmpty.js'
import { isObject } from '~/utils/validation/isObject.js'

import type { JSONizedAttr } from '../schema/index.js'
import { jsonizeDefaults } from './utils.js'

const isJSONizableTransformer = (transformer: unknown): transformer is JSONizableTransformer =>
  isObject(transformer) && $transformerId in transformer && 'jsonize' in transformer

/**
 * @debt feature "handle JSONizable defaults, links & validators"
 */
export const jsonizePrimitiveAttribute = (
  attr: NullAttribute | BooleanAttribute | NumberAttribute | StringAttribute | BinaryAttribute
): JSONizedAttr => {
  const jsonizedDefaults = jsonizeDefaults(attr)

  const jsonizedAttr = {
    type: attr.type,
    ...(attr.required !== 'atLeastOnce' ? { required: attr.required } : {}),
    ...(attr.hidden !== false ? { hidden: attr.hidden } : {}),
    ...(attr.key !== false ? { key: attr.key } : {}),
    ...(attr.savedAs !== undefined ? { savedAs: attr.savedAs } : {}),
    ...(attr.transform !== undefined
      ? {
          transform: isJSONizableTransformer(attr.transform)
            ? attr.transform.jsonize()
            : { transformerId: 'custom' }
        }
      : {}),
    ...(!isEmpty(jsonizedDefaults) ? { defaults: jsonizedDefaults } : {})
    // We need to cast as `.enum` is not coupled to `.type`
  } as Extract<JSONizedAttr, { type: 'null' | 'boolean' | 'number' | 'string' | 'binary' }>

  if (attr.enum) {
    if (attr.type === 'binary') {
      const textDecoder = new TextDecoder('utf8')
      jsonizedAttr.enum = (attr.enum as Uint8Array[]).map(value => btoa(textDecoder.decode(value)))
    } else {
      jsonizedAttr.enum = attr.enum
    }
  }

  return jsonizedAttr
}
