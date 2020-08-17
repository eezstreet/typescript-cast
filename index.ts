export function reinterpretCast<T extends Object>(object:any, options?: any):T {
    let returnValue:T = {...object} as T;
    if(options === undefined) {
        return returnValue;
    }

    Object.keys(options).forEach(key => {
        const value = (returnValue as any)[key];
        if(value !== undefined) {
            switch(options[key]) {
                case "date":
                case "Date":
                    (returnValue as any)[key] = new Date(value);
                    break;
                case "number":
                case "Number":
                    (returnValue as any)[key] = parseInt(value);
                    break;
            }
        }
    });
    return returnValue;
}