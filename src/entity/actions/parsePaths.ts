import { Entity, EntityAction } from '~/entity/index.js'
import { PathParser, Paths } from '~/schema/actions/parsePaths/index.js'

const $pathParser = Symbol('$pathParser')
type $pathParser = typeof $pathParser

export class EntityPathParser<ENTITY extends Entity = Entity> extends EntityAction<ENTITY> {
  static actionName: 'parsePaths';
  [$pathParser]: PathParser<ENTITY['schema']>

  constructor(entity: ENTITY, id = '') {
    super(entity)
    this[$pathParser] = new PathParser(entity.schema, id)
  }

  setId(nextId: string): this {
    this[$pathParser].setId(nextId)
    return this
  }

  parse = (attributes: string[]): this => {
    this[$pathParser].parse(attributes)
    return this
  }

  toCommandOptions(): {
    ProjectionExpression: string
    ExpressionAttributeNames: Record<string, string>
  } {
    return this[$pathParser].toCommandOptions()
  }
}

export type EntityPaths<ENTITY extends Entity = Entity> = Paths<ENTITY['schema']>

export type EntityPathsIntersection<
  ENTITIES extends Entity[] = Entity[],
  RESULTS extends string = string
> = ENTITIES extends [infer ENTITIES_HEAD, ...infer ENTITIES_TAIL]
  ? ENTITIES_HEAD extends Entity
    ? ENTITIES_TAIL extends Entity[]
      ? EntityPathsIntersection<ENTITIES_TAIL, RESULTS & EntityPaths<ENTITIES_HEAD>>
      : never
    : never
  : RESULTS
