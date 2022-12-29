Array.prototype.myFilter = function(callback, thisArg){
    if(!(this instanceof Array || this instanceof String)){
        throw new TypeError('Array.prototype.myFilter was called on wrong type')
    }

    if(typeof callback !== 'function'){
        throw new TypeError(`Array.prototype.myFilter ${callback} is not a function`)
    }

    let context = this
    if(arguments.length >1){
        context = thisArg
    }

    const result = []
    for(let i = 0; i < context.length; i++){
        if(callback(this[i], i, context)){
            result.push(this[i])
        }
    }
    return result
}