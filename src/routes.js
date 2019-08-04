// unimplemented imports
import HomeScreen from './components/HomeScreen.vue'
import Portfolio from './components/Portfolio.vue'
import StocksPage from './components/Stocks.vue'

// because we are exporting route objects declared with const,
// those exports will not be hoisted, so this export must come
// at bottom of script!
export const routes = [
  /*
    {
    each route should be an object
        path: '...',
        name: '...', 
        components: {
          default: '...',
          'named-router-view': NameOfComponent 
    }
  */     
   {
    path: '',
    name: 'home',
    components:{
      default: HomeScreen
    }
   },
   {
    path: '/portfolio',
    name: 'portfolio',
    components:{
      default: Portfolio
   }
  },
  {
    path: '/stocks',
    name: 'stocks',
    components:{
      default: StocksPage
   }
  }
]
