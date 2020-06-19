export const getJwtToken = () => {
    // return authorization header with jwt token
    let token = localStorage.getItem('cool-jwt');

    if (token) {
        return { 'Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
}