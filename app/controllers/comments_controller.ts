import Comment from '#models/comment'
import MusicPost from '#models/music_post'
import { HttpContext } from '@adonisjs/core/http'

export default class CommentsController {
  async index({ params }: HttpContext) {
    return Comment.query()
      .select('id', 'title', 'description', 'user_id', 'music_post_id', 'created_at', 'updated_at')
      .preload('user', (query) => {
        query.select(['id', 'username'])
      })
      .where('music_post_id', params.id)
  }

  async addComment({ request, params }: HttpContext) {
    const trx = await MusicPost.transaction()
    const paramsComment = request.only(['title', 'description', 'userId'])
    const musicPost = await MusicPost.findOrFail(params.id)
    try {
      const comment = await Comment.create({
        title: paramsComment.title,
        description: paramsComment.description,
        userId: paramsComment.userId,
        musicPostId: musicPost.id,
      })
      comment.useTransaction(trx)

      await trx.commit()
      return comment
    } catch (error) {
      await trx.rollback()
      return {
        error: 'Error adding comment',
        message: error.message,
      }
    }
  }
}
