
const routes = [
  {
    path: '/',
    component: () => import('src/App.vue'),
    children: [
      { path: '', component: () => import('./') }
    ]
  }
]

export default routes
