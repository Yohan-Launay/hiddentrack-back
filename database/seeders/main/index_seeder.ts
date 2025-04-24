import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class IndexSeeder extends BaseSeeder {
  private async seed(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run()
  }

  async run() {
    await this.seed(await import('#database/seeders/user_seeder'))
    await this.seed(await import('#database/seeders/music_post_seeder'))
    await this.seed(await import('#database/seeders/comment_seeder'))
    await this.seed(await import('#database/seeders/reaction_seeder'))
    await this.seed(await import('#database/seeders/tag_seeder'))
    await this.seed(await import('#database/seeders/music_post_tag_seeder'))
  }
}
