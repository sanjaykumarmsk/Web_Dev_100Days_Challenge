function savetoDb(data) {
    return new Promise((resolve,  reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success: data was saved");
        } else {
            reject("failure : weak connection");
        }
    });
}

// let request = savetoDb("apna college"); //req = promise object
// request 
// .then(() => {
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(() => {
//     console.log("promise was rejected");
//     console.log(request);
// });

// savetoDb("apna college")
// .then(() => {
//     console.log("data1 saved.");
//     return savetoDb("helloworld");
//     })
//     .then(() => {
//         console.log("data2 saved.");
//         return savetoDb("msk");
//     })
//     .then(() => {
//         console.log("data3 saved.");
//     })
// .catch(() => {
//     console.log("promise was rejected");
// });


savetoDb("apna college")
.then((result) => {
    console.log("data1 saved.");
    console.log("result of promise : ", result);
    return savetoDb("helloworld");
    })
    .then((result) => {
        console.log("data2 saved.");
        console.log("result of promise : ", result);
        return savetoDb("msk");
    })
    .then((result) => {
        console.log("data3 saved.");
        console.log("result of promise : ", result);
    })
.catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise : ", result);
});
