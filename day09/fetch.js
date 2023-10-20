// fitch() function in java


fetch('https://api.github.com/users/arman')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))