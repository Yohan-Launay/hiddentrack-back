import Reaction from '#models/reaction'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Reaction.createMany([
      {
        userId: 1,
        musicPostId: 1,
        type: 1,
      },
      {
        userId: 2,
        musicPostId: 1,
        type: 1,
      },
      {
        userId: 1,
        musicPostId: 2,
        type: 3,
      },
      {
        userId: 2,
        musicPostId: 2,
        type: 4,
      },
      {
        userId: 1,
        musicPostId: 3,
        type: 1,
      },
      {
        userId: 2,
        musicPostId: 3,
        type: 2,
      },
      {
        userId: 1,
        musicPostId: 4,
        type: 3,
      },
      {
        userId: 2,
        musicPostId: 4,
        type: 4,
      },
      {
        userId: 1,
        musicPostId: 5,
        type: 1,
      },
      {
        userId: 2,
        musicPostId: 5,
        type: 2,
      },
    ])
  }
}
