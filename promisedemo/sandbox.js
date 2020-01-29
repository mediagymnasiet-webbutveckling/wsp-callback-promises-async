
 let momIsHappy = false;

 function tryPromise(momIsHappy) { 
	return new Promise(function(resolve, reject) {
        if(momIsHappy) {
            resolve('Lego köpt!');
        } else {
            reject('No lego for you!');
        }
    });
 }

 tryPromise(momIsHappy).then(function(data) { 
    console.log(data); // “Promise resolved!”
 }).catch(function(err) {
    console.log(err);
 });

