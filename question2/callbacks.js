// Josephine Snyder - 101150792
// Question 2

const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve({'message': 'delayed success!'})}, 500)
    })
}   

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {reject({'error': 'delayed exception!'})}, 500)
    })
}

// promise calls
resolvedPromise().then((m) => console.log(m))
rejectedPromise().then((m) => console.log(m))
                .catch((e) => console.log(e))
