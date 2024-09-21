import type {
  BinaryAttribute,
  BooleanAttribute,
  NullAttribute,
  NumberAttribute,
  StringAttribute
} from '~/attributes/index.js'

export type FormattedPrimitiveAttrV2JSONSchema<
  ATTRIBUTE extends
    | NullAttribute
    | BooleanAttribute
    | NumberAttribute
    | StringAttribute
    | BinaryAttribute
> = ATTRIBUTE extends BinaryAttribute ? { type: 'string' } : { type: ATTRIBUTE['type'] }

export const getFormattedPrimitiveAttrV2JSONSchema = <
  ATTRIBUTE extends
    | NullAttribute
    | BooleanAttribute
    | NumberAttribute
    | StringAttribute
    | BinaryAttribute
>(
  attr: ATTRIBUTE
): FormattedPrimitiveAttrV2JSONSchema<ATTRIBUTE> => {
  type Response = FormattedPrimitiveAttrV2JSONSchema<ATTRIBUTE>

  if (attr.type === 'binary') {
    return { type: 'string' } as Response
  }

  return { type: attr.type } as Response
}
