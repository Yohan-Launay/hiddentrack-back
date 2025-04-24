import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        username: 'user1',
        email: 'user1@user.fr',
        password: 'user1',
        avatarUrl: 'https://example.com/avatar1.jpg',
      },
      {
        username: 'user2',
        email: 'user2@user.fr',
        password: 'user2',
        avatarUrl: 'https://example.com/avatar2.jpg',
      },
    ])
  }
}
