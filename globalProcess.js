// process.argv object
//console.log(process.argv)

// Destructuring
// const [,,arg3,arg4] = process.argv

// console.log(`Arguments: ${arg3} ${arg4}`)

// grab argument flags
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1
    return process.argv[indexAfterFlag]
}

const greeting = grab("--greeting")
const user = grab("--user")

console.log(`${greeting}${user}`)