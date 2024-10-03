const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve("Resolved promise!")}, 500)
    })
}   

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {reject("Rejected promise...")})
    })
}

resolvedPromise().then((m) => console.log(m))
rejectedPromise().then((m) => console.log(m))
                .catch((e) => console.log(e))
