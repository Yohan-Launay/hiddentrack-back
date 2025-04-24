/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const MusicPostController = () => import('#controllers/music_post_controller')
const ReactionsController = () => import('#controllers/reactions_controller')
const CommentsController = () => import('#controllers/comments_controller')
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    router.get('/music-posts', [MusicPostController, 'index'])
    router.get('/music-posts/:id', [MusicPostController, 'show'])
    router.post('/music-posts', [MusicPostController, 'store'])
    router.delete('/music-posts/:id', [MusicPostController, 'destroy'])

    /**
     * Reactions
     */
    router.post('/music-posts/:id/reactions', [ReactionsController, 'addReaction'])
    router.delete('/music-posts/:id/reactions', [ReactionsController, 'removeReaction'])

    /**
     * Comments
     */
    router.get('/music-posts/:id/comments', [CommentsController, 'index'])
    router.post('/music-posts/:id/comments', [CommentsController, 'addComment'])
  })
  .prefix('/api/v1')
