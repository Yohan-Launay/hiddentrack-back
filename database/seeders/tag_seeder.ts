import Tag from '#models/tag'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Tag.createMany([
      {
        name: 'Pop',
      },
      {
        name: 'Rock',
      },
      {
        name: 'Jazz',
      },
      {
        name: 'Classical',
      },
      {
        name: 'Hip-Hop',
      },
      {
        name: 'Electronic',
      },
      {
        name: 'Reggae',
      },
      {
        name: 'Country',
      },
      {
        name: 'Blues',
      },
      {
        name: 'Folk',
      },
      {
        name: 'R&B',
      },
      {
        name: 'Metal',
      },
      {
        name: 'Punk',
      },
      {
        name: 'Indie',
      },
      {
        name: 'Alternative',
      },
      {
        name: 'Latin',
      },
    ])
  }
}
