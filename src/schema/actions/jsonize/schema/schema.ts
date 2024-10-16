import { record } from '~/attributes/record/index.js'
import { string } from '~/attributes/string/index.js'
import { Parser } from '~/schema/actions/parse/index.js'
import type { FormattedValue } from '~/schema/index.js'
import { schema } from '~/schema/index.js'
import type { Overwrite } from '~/types/overwrite.js'

import { $jsonizedAttrSchema } from './attribute.js'
import type { JSONizedAttr } from './attribute.js'

export const jsonizedSchemaSchema = schema({
  type: string().const('schema'),
  attributes: record(string(), $jsonizedAttrSchema)
})

export type JSONizedSchema = Overwrite<
  FormattedValue<typeof jsonizedSchemaSchema>,
  { attributes: { [x: string]: JSONizedAttr } }
>

export const parseJSONizedSchema = (input: unknown): JSONizedSchema =>
  jsonizedSchemaSchema.build(Parser).parse(input) as JSONizedSchema
