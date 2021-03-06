const postData = async (url, data) => {
    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return res.json();
};

async function getRecources(url){
    let res = await fetch(url);
    if(!res.ok) {
        throw new Error('Could not fetch');
    }
    return await res.json();
}

export {postData};
export {getRecources};