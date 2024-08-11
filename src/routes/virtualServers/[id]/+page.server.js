export const load = async (event) => {
    const {params} = event;
    const data = await event.locals.pb.collection("virtual_servers").getOne(params.id, {expand: "locations"});    

    return {
        vserve: data
    }
}