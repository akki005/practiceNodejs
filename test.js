const { reject } = require("async");

let sample = {
    "id": 983,
    "company_id": 24,
    "store_id": 308,
    "distance": 190.23,
    "customer": {
        "name": "Aman",
        "balance": 108029.12,
        "check":{
            "asd":12233.22
        }
    },
    "city": {
            "name": "Delhi",
            "temperature": 33.6
    }
}

sample.forEach(element => {
    
});


function recur(object) {
    if (!object) {
        return;
    } else {
        for (key in object) {
            if(typeof object[key] == "object"){
                recur(object[key]);
            }else if (typeof object[key] == "number") {
                console.log(object[key]);
                object[key] = parseInt(object[key]);
            }
        }
    }
}

recur(sample);
console.log(sample);
