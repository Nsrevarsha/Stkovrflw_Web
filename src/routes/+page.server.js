import { redirect } from "@sveltejs/kit";

export const load = async (event) => {
    const { params } = event;

    

    // event.locals.pb.collection('users').authWithPassword(username, password)
    
    // console.log(JSON.stringify(event.locals.pb.authStore));

    return {
        // name: 'saambu',
        // role: 'nigger',
        // things: event.locals.pb.collection('hostss').getFullList()
        // easy: easy
    };
};

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const username = data.get('username')
        const password = data.get('password')

        console.log(username, password)

        const res = await event.locals.pb.collection("users").authWithPassword(username, password);
        console.log(res)

        console.log(event.locals.pb.authStore.isValid)
        redirect(302,"/firewall")

    }
}