 export default {
     install(vue) {
         vue.filter('myslice', function(value) {
             return value.slice(0, 4)
         })

     }

 }