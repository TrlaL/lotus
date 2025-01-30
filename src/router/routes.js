export default [
  {
    component: () => import('@/views/Date'),
    name: 'Date',
    path: '/'
  },
  {
    component: () => import('@/views/Lotus'),
    name: 'Lotus',
    path: '/lotus'
  },
  {
    component: () => import('@/views/Revelation'),
    name: 'Revelation',
    path: '/revelation'
  }
]