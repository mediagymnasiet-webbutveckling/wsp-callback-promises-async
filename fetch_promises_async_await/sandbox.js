/* fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
})    // Funktionen fetch körs direkt
.then(function(response) {
    // Den här koden körs när servern svarar
    console.log(response);
    return response.json();  // ett promise, gör om svaret till ett objekt
})
.then(function(data) {  // objekt
    // Den här koden körs när svaret gjorts om till ett objekt
    console.log(data)
}).catch(function(error) {
    console.error(error); // Denna kod körs om det blir fel exempelvis att servern inte svarar
}); */

async function getDadJokes() {

   let response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
    });
    let data = await response.json();
    console.log(data);

}


getDadJokes().then(function(data) {
    console.log('resolved:', data);
}).catch(function(err) {
    console.log(err);
});