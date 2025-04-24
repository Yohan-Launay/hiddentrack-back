import MusicPost from '#models/music_post'
import Tag from '#models/tag'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  public async run() {
    const user3 = await User.firstOrCreate(
      {
        id: 3,
      },
      {
        username: 'user3',
        email: 'user3@user.fr',
        password: 'user3',
        avatarUrl: 'https://example.com/avatar3.jpg',
      }
    )

    const track8888 = await MusicPost.firstOrCreate(
      {
        id: 1,
      },
      {
        userId: user3.id,
        url: 'https://open.spotify.com/track/8888',
      }
    )

    const tag1 = await Tag.firstOrCreate(
      {
        id: 1,
      },
      {
        name: 'Tag 1',
      }
    )

    await track8888.related('tags').attach([tag1.id])
  }
}
