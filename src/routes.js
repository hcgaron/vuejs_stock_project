import HelloWorld from './components/HelloWorld.vue'
import TestComp from './components/TestComp.vue'
// unimplemented imports
import Header from './components/Header.vue'  // do I need this import here? hmm..
// import HomeScreen from './components/HomeScreen.vue'
// import Portfolio from './components/Portfolio.vue'
// import StocksPage from './components/Stocks.vue'

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
    name: 'hello-world',
    components:{
      default: TestComp
    }
   }
]
