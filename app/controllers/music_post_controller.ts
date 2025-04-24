import MusicPost from '#models/music_post'
import type { HttpContext } from '@adonisjs/core/http'

export default class MusicPostController {
  async index({}: HttpContext) {
    return MusicPost.query()
      .select('id', 'url', 'user_id', 'created_at', 'updated_at')
      .preload('user', (query) => {
        query.select(['id', 'username'])
      })
      .preload('reactions', (query) => {
        query.select(['id', 'type'])
      })
      .preload('tags', (query) => {
        query.select(['id', 'name'])
      })
  }

  async show({ params }: HttpContext) {
    return MusicPost.query()
      .select('id', 'url', 'user_id', 'created_at', 'updated_at')
      .preload('user', (query) => {
        query.select(['id', 'username'])
      })
      .preload('reactions', (query) => {
        query.select(['id', 'type'])
      })
      .preload('tags', (query) => {
        query.select(['id', 'name'])
      })
      .where('id', params.id)
  }

  async store({ request }: HttpContext) {
    const trx = await MusicPost.transaction()
    const params = request.only(['url', 'userId'])

    try {
      const createMusicPost = await MusicPost.create({
        url: params.url,
        userId: params.userId,
      })
      createMusicPost.useTransaction(trx)

      await trx.commit()
      return createMusicPost
    } catch (error) {
      await trx.rollback()
      return {
        error: 'Error creating music post',
        message: error.message,
      }
    }
  }

  async update({ request, params }: HttpContext) {
    const trx = await MusicPost.transaction()
    const paramsMusicPost = request.only(['url', 'userId'])
    const musicPost = await MusicPost.findOrFail(params.id)
    try {
      musicPost.url = paramsMusicPost.url
      if (paramsMusicPost.userId) {
        musicPost.userId = paramsMusicPost.userId
      }
      musicPost.userId = paramsMusicPost.userId
      await musicPost.save()
      await trx.commit()
      return musicPost
    } catch (error) {
      await trx.rollback()
      return {
        error: 'Error updating music post',
        message: error.message,
      }
    }
  }

  async destroy({ params, response }: HttpContext) {
    const trx = await MusicPost.transaction()

    try {
      const musicPost = await MusicPost.findOrFail(params.id)
      musicPost.useTransaction(trx)

      await musicPost.related('tags').detach()

      await musicPost.delete()

      await trx.commit()

      return { message: 'Music post deleted successfully' }
    } catch (error) {
      await trx.rollback()
      response.status(400)
      return {
        error: 'Error deleting music post',
        message: error.message,
      }
    }
  }
}
