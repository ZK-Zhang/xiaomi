import Home from '../views/Home.vue'
import Product from '../pages/product/Product.vue'
import Login from '../pages/login/Login'

export default [{
  path: '/',
  name: 'Home',
  component: Home,
},{
  path: '/product/:id',
  name: 'Product',
  component: Product
},{
  path: '/login',
  name: 'Login',
  component: Login
}]