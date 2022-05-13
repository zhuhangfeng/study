
//时间戳写法
// function throttle(func,wait){
//     var context,args;
//     var previous = 0;
     
//     return function(){
//         var now = +new Date()
//         console.log(now);
//         context = this;
//         args = arguments;
//         if(now - previous > wait){
//             func.apply(context,args);
//             previous = now;
//         }
//     }
// }

//定时器写法
function throttle(func,wait){
    var timeout,context,args;
    var previous = 0;

    return function(){
        context = this;
        args = arguments;
        if(!timeout){
            timeout = setTimeout(function(){
                timeout = null;
                func.apply(context,args)
            },wait)
        }
    }
}