console.log('person1 : shows ticket');
console.log('person2 : shows ticket');


//ASYNC AWAIT

const preMovie = async () => {


    const promiseWifeBringsTicket = new Promise( (resolve,reject) => {
        setTimeout(() => resolve('ticket'), 3000) 
    });

    const getPopcorn = new Promise( (resolve,reject) => resolve(`popcorn`)); 

    const getButter = new Promise( (resolve,reject) => resolve('butter'));

    const getCoolDrinks = new Promise( (resolve,reject) => resolve('cool drink'));

    let ticket = await promiseWifeBringsTicket;

    console.log(`wife : i have the ${ticket}`)
    console.log('Husband: we should go in');
    console.log('wife : no iam hungry');

    let popcorn = await getPopcorn;

    console.log(`husband : i got the ${popcorn}`);
    console.log('Husband: we should go in');
    console.log('wife : no i need butter for my popcorn');

    let butter = await getButter;

    console.log(`husband : i got some ${butter} on popcorn`);
    console.log('husband : anything else darling?');
    console.log('wife : it would be great if we have any drink');

    let drink = await getCoolDrinks;
    console.log(`husband : here's your ${drink} can we go now?`);
    console.log('wife : lets go we are getting late');
    console.log('husband : Thankyou for reminding me *grins*');

    //promise.all

    // let [popcorn,butter,coke] = await Promise.all([getPopcorn,getButter,getCoolDrinks]);

    // console.log(`${popcorn} ${butter} ${candy}`);

    return ticket;


}

preMovie().then((m) => console.log(`person3 : shows ${m}`));
console.log('person4 : shows ticket');
console.log('person5 : shows ticket');


//PROMISES

// const promiseWifeBringsTicket = new Promise( (resolve,reject) => {
//     setTimeout(() => {
//         resolve('ticket');
//     }, 3000);
// })

// const getPopcorn = promiseWifeBringsTicket.then( (t) => {
//     console.log('wife : i have the tickets')
//     console.log('Husband: we should go in');
//     console.log('wife : no iam hungry');
//     return new Promise( (resolve,reject) => resolve(`${t} popcorn`)); 
// })

// const getButter = getPopcorn.then ((t) => {
//     console.log('husband : i got the popcorn');
//     console.log('Husband: we should go in');
//     console.log('wife : no i need butter for my popcorn');
//     return new Promise( (resolve,reject) => resolve(`${t} butter`)); 
// })


// getButter. then( (t) => console.log(t))
