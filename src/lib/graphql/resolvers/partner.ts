export namespace Partner {

    export function partner( _: any, { id } : { id: number }, context, info) {

        return {
            id: id,
            name: `Partner ${id}`,
            isActive: true,
            premium: false,
        };
        
    }

    export function partners() {
        return [
            {
                id: 1,
                name: 'Partner 1',
                isActive: true,
                premium: false,
            },
            {
                id: 2,
                name: 'Partner 2',
                isActive: true,
                premium: true,
            },
            {
                id: 3,
                name: 'Partner 3',
                isActive: false,
                premium: false,
            }
        ];
    }
    
}