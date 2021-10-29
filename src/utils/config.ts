import Dexie from 'dexie';


const db = new Dexie('ms-db');


db.version(1).stores({
    'ms-config': "id,value",
});

export const getConfigParams = async (name: string) => {
    const data = await db.table('ms-config').where('id').equals(name).first()
    return data?.value
}

export const setConfigParams = async (name: string, value: any) => {
    await db.table('ms-config').put({
        id: name,
        value
    })
}

export const clearConfigParams = async () => {
    await db.table('ms-config').clear()
}