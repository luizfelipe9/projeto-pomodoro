/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

  Route.post('/post', 'ChecklistsController.store')

  Route.get('/get', 'ChecklistsController.index')

  Route.delete('/delete/:id', 'ChecklistsController.destroy')

  Route.put('/update/:id', 'ChecklistsController.update')



  Route.get('/', async () => {
    return { easter: 'egg' }
  })

  Route.resource("  ", "ChecklistsController").apiOnly()

}).prefix('/api')
