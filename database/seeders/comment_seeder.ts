import Comment from '#models/comment'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Comment.createMany([
      {
        userId: 1,
        musicPostId: 1,
        description: 'Comment 1 on Music Post 1',
      },
      {
        userId: 2,
        musicPostId: 1,
        description: 'Comment 2 on Music Post 1',
      },
      {
        userId: 1,
        musicPostId: 2,
        description: 'Comment 1 on Music Post 2',
      },
      {
        userId: 2,
        musicPostId: 2,
        description: 'Comment 2 on Music Post 2',
      },
      {
        userId: 1,
        musicPostId: 3,
        description: 'Comment 1 on Music Post 3',
      },
    ])
  }
}
