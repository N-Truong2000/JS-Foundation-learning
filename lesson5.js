let arr=[1,4,2,43]

// function sumOfArray(arr){
//     if(arr instanceof Array){
//         let result=0;
//         let i=0;
//         while(i< arr.length){
//             result += arr[i];
//             i++;
//         }
//         return result;
//      }
//      return null;
// }
// console.log(sumOfArray(arr));


// function haiOfArray(arr){
//     if(arr instanceof Array && arr.length>0){
//         let result=[];
//         let i=0;
//         while(i< arr.length){
//          if(arr[i]%2==0){
//             result.push(arr[i]);
//           }
//           i++;
//         }
//         return result;
//      }
//      return null;
// }
// console.log(haiOfArray(arr));


    //    function sumOfArray(arr){
    //     if(arr instanceof Array){
    //         let result=0;
    //         let i=0;
    //        do{
    //          result +=arr[i];
    //          i++;
    //        }
    //        while(i<arr.length);
    //         return result;
    //      }
    //      return null;
    // }
    // console.log(sumOfArray(arr));
   
    function findNumber(...n){
        let result =[];
            do{                
               if(n%2===0){
                    result.push(n);
                }
                n--;
            }while(n.length<0)
            return result;
    }
    console.log(findNumber(1,2,3,4,5,6,7,5,44));
    // console.log(findNumber(51));
    // function sum(n) {
    //     let sum = 0;
    //     for (let i = 6; i < n; i+=3) {
    //         if ( i % 2 === 0 && i % 3 === 0) {
    //             sum += i;
    //         }
    //     }
    //     return sum;
    // }
    // console.log(sum(20));


    // let n=20;
    // while(n>0){
    //     console.log(n);
    //     n-=3;
    //     if(n%2==0){
    //         break;
    //     }
    // }


    // function find5(...arr) {
    //     if(arr.length>0, arr instanceof Array){
    //         let result=0;
    //         for (let i = 0; i < arr.length; i++) {
    //             if (arr[i] % 5 === 0) {
    //                     result= arr[i];
    //                 break;
    //             }
    //         }
    //         return result ;
    //     }
    //     return null; 
    // }


    // function find51(...arr) {
    //     if(arr.length>0, arr instanceof Array){
    //         for (let i = 0; i < arr.length; i++) {
    //             if (arr[i] % 5 === 0) {
    //                 return arr[i];
    //                 ;
    //             }
    //         }
    //     }
    //     return null; 
    // }
    
    // console.log(find51(3, 7, 10, 12, 15, 20));



   //  let abc=[123,32,124,54,64,43232,3243,5];

   //  for(let k in abc){
   //     console.log(abc[k]);
   //  }


    
   //  for(let k of abc){
   //      console.log(k);
   //   }
    
 
    