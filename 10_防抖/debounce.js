function debounce(func,awit,immediate){
    var timeout,result;
    var debounce = function(){
        var context = this;
        var args = arguments;

        if(timeout) clearTimeout(timeout)
        if(immediate){
            var callNow = !timeout;
            if(callNow) result = func.apply(context,args)
            timeout = setTimeout(function(){
                timeout = null
            },awit)
        }else{
            timeout = setTimeout(function(){
                func.apply(context,args)
            })
        }
        return result;
    };
    debounce.cancell = function(){
        clearTimeout(timeout);
        timeout = null
    } ;
    return debounce;
}