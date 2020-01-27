
 let momIsHappy = false;

 function tryPromise (momIsHappy) { 
	return new Promise((resolve, reject) => {

        if(momIsHappy) {
            resolve('Lego köpt!');
        } else {
            reject('No lego for you!');
        }
    });
 }

 tryPromise(momIsHappy).then((data)=>{ 
    console.log(data); // “Promise resolved!”
 }).catch(function(err) {
    console.log(err);
 });