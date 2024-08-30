import Vue from 'vue'
import Router from 'vue-router'
import progress from 'nprogress'
// import ga from 'vue-ga'

Vue.use(Router)

const EditorPage = () => import(/* webpackChunkName: "editor-page" */ '@/views/EditorPage.vue')
const NotFound = () => import(/* webpackChunkName: "not-found-page" */ '@/views/NotFound.vue')
const GitHubSuccess = () => import(/* webpackChunkName: "ghlogin-result" */ '@/views/GitHubSuccess.vue')

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/codepan',
      component: EditorPage
    },
    {
      name: 'gist',
      path: '/codepan/gist/:gist',
      component: EditorPage
    },
    {
      name: 'boilerplate',
      path: '/codepan/boilerplate/:boilerplate',
      component: EditorPage
    },
    {
      name: 'github-success',
      path: '/codepan/github_success',
      component: GitHubSuccess
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})


router.beforeEach((to, from, next) => {
  progress.start()
  next()
})

export default router
