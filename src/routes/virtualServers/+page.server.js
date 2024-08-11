export const load = async (event) => {
    const data = await event.locals.pb.collection("virtual_servers").getFullList();    
    return {
        data: data
    }
}