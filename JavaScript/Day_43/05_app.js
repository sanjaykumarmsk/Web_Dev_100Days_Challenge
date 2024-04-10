let h1 = document.querySelector("h1");

function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10 ) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}


savetoDb(
    "apna college",
    () => {
        console.log("success : your data was saved");
        savetoDb("hello world", () => {
            console.log("success2 : data2 saved");
            savetoDb("msk", () => {
                console.log("success3 : data3 saved");
            }, () => {
                console.log("failure3 : data3 not saved. weak connection");
            })
        }, () => {
            console.log("failure2 : data2 not saved. weak connection");
        })
    },
    () => {
        console.log("failure : weak connection, data not saved");
    }
);
 