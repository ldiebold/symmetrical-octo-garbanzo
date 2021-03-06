
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'list/:todoListId',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'date',
        component: () => import('pages/DatePage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404Page.vue')
  }
]

export default routes
