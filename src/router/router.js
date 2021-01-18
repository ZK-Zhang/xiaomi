import Home from '../views/Home.vue'
import Product from '../pages/product/Product.vue'
import Index from '../pages/index/Index.vue'
import Login from '../pages/login/Login'

export default [{
  path: '/',
  name: 'Home',
  component: Home,
  redirect: '/index'
},{
  path: '/index',
  name: 'Home',
  component: Home,
  children:[{
    path: '/product/:id',
    name: 'Product',
    component: Product
  },{
    path: '/index',
    name: 'Index',
    component: Index
  }]
},{
  path: '/login',
  name: 'Login',
  component: Login
}]