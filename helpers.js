/*
* usage :
* array =  arrayRemove(array, value);
* example :
*/
function arrayRemove(arr, value) {
   return arr.filter(function(ele){
       return ele != value;
   });
}
