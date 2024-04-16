// https://edabit.com/user/HBM2bXtgCMdiDjgub
// Convert Key, Values in an Object to Array
const obj1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  var arr1=(Object.keys(obj1))
  var arr2=(Object.values(obj1))
  var arr3=[]
  for(var i=0;i<arr1.length;i++){
      arr3.push([arr1[i],arr2[i]])
  }
  console.log(arr3)


//   Filter out Strings from an Array

  var arr=[1,2,'hh',3,'az']
var arrint=[]
for (var i=0;i<arr.length;i++){
    if(typeof arr[i] !=='string'){
        arrint.push(arr[i])
    }
}
console.log(arrint)

// Absolute Sum

var arr=[1,2,3,9,-6,7,6,4,-6]
var abs =0
for(var i=0 ;i<arr.length;i++){
    if (arr[i]<=0){
        arr[i]*=-1
    }
    abs+=arr[i]
    
}
console.log (abs)