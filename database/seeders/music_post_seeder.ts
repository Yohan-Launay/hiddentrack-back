import MusicPost from '#models/music_post'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await MusicPost.createMany([
      // Create MusicPost url via spotify
      {
        userId: 1,
        url: 'https://open.spotify.com/track/1',
      },
      {
        userId: 2,
        url: 'https://open.spotify.com/track/2',
      },
      {
        userId: 1,
        url: 'https://open.spotify.com/track/3',
      },
      {
        userId: 2,
        url: 'https://open.spotify.com/track/4',
      },
      {
        userId: 1,
        url: 'https://open.spotify.com/track/5',
      },
    ])
  }
}
