export const getData = () => {
    return fetch('https://sb-cats.herokuapp.com/api/2/exci258/show')
        .then((response) => response.json())
        .then((cats) => cats.data);
};

export const deleteData = (id) => {
    return fetch('https://sb-cats.herokuapp.com/api/2/exci258/delete/' + id, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((response) => response.message);
};

export const editData = (info) => {
    return fetch(
        'https://sb-cats.herokuapp.com/api/2/exci258/update/' + info.id,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                img_link: info.img_link,
                age: info.age,
                rate: info.rate,
                description: info.description,
                favourite: info.favourite,
            }),
        }
    );
};

export const addData = (info) => {
    return fetch('https://sb-cats.herokuapp.com/api/2/exci258/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
    });
};
