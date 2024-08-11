export const load = async (event) => {
    const data = await event.locals.pb.collection("hosts").getFullList();
    return {
        data: data
    }
}