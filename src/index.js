const dogURL = 'http://localhost:3000/dogs'

fetch(dogURL)
.then ( resp => resp.json() )
.then (showDogsArray => showDogsArray.forEach(dogObj => {

    const tableForDogs = document.getElementById('table-body')
    const newDogName = document.createElement('tr')
    newDogName.className = `${dogObj.name}`
    newDogName.innerHTML = `
        <td>${dogObj.name}</td>
        <td>${dogObj.breed}</td>
        <td>${dogObj.sex}</td>
        <td><button>Edit</button></td>
        </tr>`
    tableForDogs.append(newDogName)
    
    const editButton = newDogName.querySelector('button')
    editButton.addEventListener('click', (e) => {
        const topDogForm = document.getElementById('dog-form')
        topDogForm.name.value = dogObj.name
        topDogForm.breed.value = dogObj.breed
        topDogForm.sex.value = dogObj.sex
    })
}))