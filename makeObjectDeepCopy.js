function makeObjectDeepCopy(object) {
        if(typeof object !=="object" || object === null){
            return object
        }
           const initialResult = Array.isArray(object) ? [] : {};

            for(let key of Object.values(object)){
                if(typeof key === 'function'){
                    console.log('1', 'func')
                    Object.values(key).reduce((acc, keys) => {
                        acc[keys] = makeObjectDeepCopy(object[keys]);
                        return acc
                       }, initialResult)
                    }
            }

           return Object.keys(object).reduce((acc, key) => {
            acc[key] = makeObjectDeepCopy(object[key]);
            return acc
           }, initialResult)
}