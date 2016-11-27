/**
 * Created by arnoc on 27/11/2016.
 */
var accounts = [

    {name:"john", balance:10},
    {name:"jack", balance:20}
];

//creating accounts
function createAccount(person,amount) {
    var account= {};
    account.name= person;
    account.balance= amount;
    accounts.push(account);
};

createAccount({name:"fred", balance:40});
createAccount({name:"barney", balance:50});

//deposit
function deposit (person, amount){
    if (typeof amount === 'number'){
        person.balance = person.balance + amount;
    }
    else {
        console.log("please only fill in numbers in field amount")
    }
};

//withdraw
function withdraw (person, amount){
    if (typeof amount === 'number' && (person.balance - amount) >= 0){
        person.balance = person.balance - amount;
    }
    else {
        console.log("not enough money in account")
    }
};







getBalance(account);
deposit(account,100);
getBalance(account);
withdraw(account,-50);
getBalance(account);