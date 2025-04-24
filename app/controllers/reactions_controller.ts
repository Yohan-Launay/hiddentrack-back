// import type { HttpContext } from '@adonisjs/core/http'

import MusicPost from '#models/music_post'
import Reaction from '#models/reaction'
import { HttpContext } from '@adonisjs/core/http'

export default class ReactionsController {
  async addReaction({ request, params }: HttpContext) {
    const trx = await MusicPost.transaction()
    const paramsReaction = request.only(['type', 'userId'])
    const musicPost = await MusicPost.findOrFail(params.id)
    try {
      const reaction = await Reaction.create({
        type: paramsReaction.type,
        userId: paramsReaction.userId,
        musicPostId: musicPost.id,
      })
      reaction.useTransaction(trx)

      await trx.commit()
      return reaction
    } catch (error) {
      await trx.rollback()
      return {
        error: 'Error adding reaction',
        message: error.message,
      }
    }
  }

  async removeReaction({ params }: HttpContext) {
    const trx = await MusicPost.transaction()
    try {
      const reaction = await Reaction.findOrFail(params.id)
      await reaction.delete()

      await trx.commit()
      return {
        message: 'Reaction removed successfully',
      }
    } catch (error) {
      await trx.rollback()
      return {
        error: 'Error removing reaction',
        message: error.message,
      }
    }
  }
}
