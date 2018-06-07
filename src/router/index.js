import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/Landing';
import Products from '@/components/Products';
import Product from '@/components/Product';
import ProductForm from '@/components/ProductForm';
import Create from '@/components/Create';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
     {
      path: '/products',
      name: 'Products',
      component: Products,
    },
      {
      path: '/products/create',
      name: 'Create',
      component: Create,
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product,
    },
   
  ]
})
