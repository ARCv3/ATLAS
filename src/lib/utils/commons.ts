import fs from 'fs'

export namespace Commons {

    /**
     * Traverse through the JSON object and execute a callback for each entry.
     * 
     * @param jsonNode - The JSON object to traverse.
     * @param path - The current path in the JSON object.
     * @param callback - The function to call for each entry, receiving the path and value.
     * @param shouldContinueOnArrayOfObjects - If true, will continue traversing into arrays of objects.
     */
    export function traverseJsonEntries( jsonNode: any, path: string[], callback:any, shouldContinueOnArrayOfObjects?: boolean ) {

        if ( path.length > 0 && isEmptyObject( jsonNode ) ) {
            // if a node is empty, we still want it to be processed and added to the json files
            callback(path, jsonNode);
        }

        for (const key in jsonNode) {
            let attributeValue = jsonNode[key];
            let newPath = cloneAndPush( path, key );
            
            if (isArrayOfObjects( attributeValue ) && shouldContinueOnArrayOfObjects) {
                for ( let i = 0; i < attributeValue.length; i++ ) {
                    traverseJsonEntries (
                        attributeValue[ i ],
                        cloneAndPush ( newPath, i.toString() ),
                        callback,
                        shouldContinueOnArrayOfObjects );
                }
            }

            else if ( isPrimitiveValue( attributeValue ) || Array.isArray( attributeValue ) ) {
                callback(newPath, attributeValue);
            }
            
            else {
                traverseJsonEntries(attributeValue, newPath, callback, shouldContinueOnArrayOfObjects);
            }
        }

    }

    /**
     * Check if the directory exist, if not create it
     */
    export function ensureDirectoryExist( directoryName: string ) {
        if ( !fs.existsSync ( directoryName ) ) {
            fs.mkdirSync ( directoryName, { recursive: true } );
        }
    }

    function isPrimitiveValue(value: any) {
        return !(value instanceof Object);
    }

    /**
     * Determine if this is an array of object or not.
     * [1,2,3] => false
     * [{a: 1}, {a: 2}] => true
     * 1 => false
     * [] => false
     */
    export function isArrayOfObjects( value: any ) {
        if ( Array.isArray ( value ) && value.length > 0 ) {
        return value[ 0 ] instanceof Object;
        } else {
        return false;
        }
    }

    /**
     * check if an object is empty.
     * Example of empty object: {}
     */
    export function isEmptyObject( configNode: Object ) {
        return configNode instanceof Object && Object.keys ( configNode ).length === 0;
    }

    /**
     * Clone table and push a new element
     */
    export function cloneAndPush( table: string[], element: string ) {
        const tableCloned = Object.assign ( [], table );
        tableCloned.push ( element );
        return tableCloned;
    }

    /**
     * Set a value in a nested object based on the provided path.
     * 
     * @param object - The object to modify.
     * @param path - An array of strings representing the path to the value.
     * @param value - The value to set at the specified path.
     */
    export function setValue(object: Object, path: string[], value: any) {
        
        let parentNode: object | undefined = undefined;
        let currentNode: any = object;

        for ( let i = 0; i < path.length - 1; i++ ) {
            let pathElement = path [ i ];
            parentNode = currentNode;

            if ( currentNode[ pathElement ] === undefined ) {
                currentNode[ pathElement ] = {};
            }
            currentNode = currentNode[ pathElement ];
        }

        let lastElementOfPathArray = path[ path.length - 1 ];
        currentNode[ lastElementOfPathArray ] = value;

    }

    export function stringToByteArray(str: string): Uint8Array {
        const encoder = new TextEncoder();
        return encoder.encode(str);
    }

    export function javaCompareToString(value: string, other: string): number {
        
        return javaCompareTo(
            stringToByteArray(value),
            stringToByteArray(other)
        );
    
    }

    function javaCompareTo(value: Uint8Array, other: Uint8Array): number {
        const len1 = value.length;
        const len2 = other.length;
        return byteArrayCompare(value, other, len1, len2);
    }

    function byteArrayCompare(value: Uint8Array, other: Uint8Array, len1: number, len2: number): number {
        const lim = Math.min(len1, len2);
        for ( let i = 0; i < lim; i++ ) {
            if (value[ i ] != other[ i ] ) {
                return value[ i ] - other[ i ];
            }
        }
        return len1 - len2;
    }

}