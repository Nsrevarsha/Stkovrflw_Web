export const load = async (event) => {
    const data = await event.locals.pb.collection("firewall_rules").getFullList();
    return {
        data: data
    }
}

