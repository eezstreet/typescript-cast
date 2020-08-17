export function reinterpret_cast<T extends Object>(object:Object, options?: Object):T {
    let returnValue:T = {...object} as T;
    if(options === undefined) {
        return returnValue;
    }

    const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];
    Object.keys(options).forEach(key => {
        if(returnValue[key] !== undefined) {
            switch(options[key]) {
                case "date":
                case "Date":
                    returnValue[key] = new Date(returnValue[key]);
                    break;
                case "number":
                case "Number":
                    returnValue[key] = parseInt(returnValue[key]);
                    break;
            }
        }
    });
    return returnValue;
}