import { deepCopy } from 'deep-copy-ts'; 
import { Commons } from './commons';

import fs from 'fs';

const { traverseJsonEntries, setValue } = Commons;

export namespace Merge {

    export function mergeAndWrite( outputFile: string, level0: any, level1: any) {
        
        let merged = mergeJson(level0, level1);

        fs.writeFileSync ( 
            outputFile,
            JSON.stringify(merged, null, 2),
            'utf8' );

    }

    export function mergeJson(level0: any, level1: any) {
        
        let mergedObject = deepCopy( level0 );

        traverseJsonEntries(level1, [], (path: string[], value: any) => { 
            setValue( mergedObject, path, value );
        } );

        return mergedObject;

    }

}