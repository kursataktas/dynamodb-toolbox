import type { DeleteItemCommandClass } from '~/entity/actions/commands/deleteItem/deleteItemCommand.js'
import type {
  DeleteItemOptions,
  DeleteItemResponse
} from '~/entity/actions/commands/deleteItem/index.js'
import type { GetItemCommandClass } from '~/entity/actions/commands/getItem/getItemCommand.js'
import type { GetItemOptions, GetItemResponse } from '~/entity/actions/commands/getItem/index.js'
import type {
  PutItemInput,
  PutItemOptions,
  PutItemResponse
} from '~/entity/actions/commands/putItem/index.js'
import type { PutItemCommandClass } from '~/entity/actions/commands/putItem/putItemCommand.js'
import type {
  UpdateItemInput,
  UpdateItemOptions,
  UpdateItemResponse
} from '~/entity/actions/commands/updateItem/index.js'
import type { UpdateItemCommandClass } from '~/entity/actions/commands/updateItem/updateItemCommand.js'
import type { KeyInput } from '~/entity/actions/parse.js'
import type { EntityV2 } from '~/entity/index.js'

import type { ActionMocker } from './actionMocker.js'
import type { CommandResults } from './commandResults.js'
import type { $actionName } from './constants.js'
import type { DeleteItemCommandMock } from './deleteItemCommand.js'
import type { GetItemCommandMock } from './getItemCommand.js'
import type { PutItemCommandMock } from './putItemCommand.js'
import type { UpdateItemCommandMock } from './updateItemCommand.js'

type ClassStaticProperties<CLASSES> = CLASSES extends infer CLASS
  ? {
      [KEY in keyof CLASS as KEY extends 'prototype'
        ? never
        : CLASS[KEY] extends (...args: unknown[]) => unknown
        ? never
        : KEY]: CLASS[KEY]
    }
  : never

type ActionMock =
  | typeof GetItemCommandMock
  | typeof PutItemCommandMock
  | typeof DeleteItemCommandMock
  | typeof UpdateItemCommandMock

export type ActionName = ClassStaticProperties<ActionMock>[$actionName]

export type ActionClassResults<
  ENTITY extends EntityV2,
  ACTION_CLASS extends
    | GetItemCommandClass
    | PutItemCommandClass
    | DeleteItemCommandClass
    | UpdateItemCommandClass
> = ACTION_CLASS extends GetItemCommandClass
  ? CommandResults<KeyInput<ENTITY>, GetItemOptions<ENTITY>>
  : ACTION_CLASS extends PutItemCommandClass
  ? CommandResults<PutItemInput<ENTITY>, PutItemOptions<ENTITY>>
  : ACTION_CLASS extends DeleteItemCommandClass
  ? CommandResults<KeyInput<ENTITY>, DeleteItemOptions<ENTITY>>
  : ACTION_CLASS extends UpdateItemCommandClass
  ? CommandResults<UpdateItemInput<ENTITY>, UpdateItemOptions<ENTITY>>
  : never

export type ActionClassMocker<
  ENTITY extends EntityV2,
  ACTION_CLASS extends
    | GetItemCommandClass
    | PutItemCommandClass
    | DeleteItemCommandClass
    | UpdateItemCommandClass
> = ACTION_CLASS extends GetItemCommandClass
  ? ActionMocker<'get', KeyInput<ENTITY>, GetItemOptions<ENTITY>, Partial<GetItemResponse<ENTITY>>>
  : ACTION_CLASS extends PutItemCommandClass
  ? ActionMocker<
      'put',
      PutItemInput<ENTITY>,
      PutItemOptions<ENTITY>,
      Partial<PutItemResponse<ENTITY>>
    >
  : ACTION_CLASS extends DeleteItemCommandClass
  ? ActionMocker<
      'delete',
      KeyInput<ENTITY>,
      DeleteItemOptions<ENTITY>,
      Partial<DeleteItemResponse<ENTITY>>
    >
  : ACTION_CLASS extends UpdateItemCommandClass
  ? ActionMocker<
      'update',
      UpdateItemInput<ENTITY>,
      UpdateItemOptions<ENTITY>,
      Partial<UpdateItemResponse<ENTITY>>
    >
  : never
