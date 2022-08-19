import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  {
    name:'disco',
    path:'/discover',
    component:()=>import(/*webpackChunkName:'discover'*/"../pages/Discover"),
    children:[
      {
        path:'artist',
        component:()=>import(/*webpackChunkName:'artist'*/"../pages/Discover/Artist")
      },
      {
        path:'rank',
        component:()=>import(/*webpackChunkName:'rank'*/"../pages/Discover/Rank")
      },
      {
        name:"rec",
        path:'recomand',
        component:()=>import(/*webpackChunkName:'rank'*/"../pages/Discover/Recomand")
      }
    ]
  },
  {
    name:"fri",
    path:'/friend',
    components:{
      // 'jyfy':()=>import(/*webpackChunkName:'jyfy'*/"../pages/Friend"),
      default:()=>import(/*webpackChunkName:'jyfy'*/"../pages/Friend"),
      // 'fuck':()=>import(/*webpackChunkName:'fuck'*/"../pages/Ohter")
    }
  },
  {  
    name:'li',
    path:'/list',
    component:()=>import(/*webpackChunkName:'list'*/"../pages/List")
  },
  {
    name:'plist',
    path:'/playerlist',
    component:()=>import(/*webpackChunkName:'playerlist'*/"../pages/Playerlist")
  },
  {
    name:"deta",
    path:'/detail',
    // path:'/detail/:id',   用params传用动态路由
    props:true,
    component:()=>import(/*webpackChunkName:'detail'*/"../pages/Detail")
  },
  {
    path:'*',
    component:()=>import(/*webpackChunkName:'page404'*/"../pages/Page404")
  },
  {
    path:'/',
    // component:()
    redirect:'/discover'
  }
  
];

const router = new VueRouter({
  
  routes,
});

export default router;
