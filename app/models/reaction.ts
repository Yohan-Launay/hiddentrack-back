import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import MusicPost from './music_post.js'

enum ReactionType {
  LIKE = 1,
  DISLIKE = 2,
  LOVE = 3,
  WOUAW = 4,
}

export default class Reaction extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare type: ReactionType

  @column()
  declare userId: number

  @column()
  declare musicPostId: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => MusicPost)
  declare musicPost: BelongsTo<typeof MusicPost>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
