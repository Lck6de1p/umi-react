export function getLists(value) {
    return fetch('/api/getListsASync?value=' + value)
    .then(res => res.json())
    .catch(err => {
        console.log(err);
    })
}