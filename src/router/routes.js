
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'sign_up',
        name: 'sign_up',
        component: () => import('pages/SignUp.vue')
      },
      {
        path: 'sign_in',
        name: 'sign_in',
        component: () => import('pages/SignIn.vue')
      },
      {
        path: 'recipe/new',
        name: 'add_recipe',
        component: () => import('pages/AddRecipe.vue'),
      },
      {
        path: 'recipe/new/md',
        name: 'add_recipe_with_markdown',
        component: () => import('pages/AddRecipeWithMarkdown.vue'),
      },
      {
        path: 'recipe/:slug',
        name: 'recipe',
        component: () => import('pages/Recipe.vue'),
      },
    ]
  },

  {
    path: '/404',
    name: 'not_found',
    component: () => import('pages/Error404.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  }
]

export default routes
