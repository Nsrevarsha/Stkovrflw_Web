import PocketBase from 'pocketbase';

export const handle = async ({ event, resolve }) => {
    const pb = new PocketBase('http://10.147.20.69:8080');

    console.log("aslfdalsdflsadfasld;fjasld;kflaskjflaskdfj")

    pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
    try {
        if (pb.authStore.isValid) {
            await pb.collection('users').authRefresh();
        }
    } catch (_) {
        pb.authStore.clear();
    }

    event.locals.pb = pb
    event.locals.user = pb.authStore.model;

    const response = await resolve(event);

    response.headers.set('set-cookie', pb.authStore.exportToCookie({ httpOnly: false, secure: false }));

    return response;
};