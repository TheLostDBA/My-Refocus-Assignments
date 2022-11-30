/* M1, L2, HA
    Objects and Functions

    Dev Riri - 10.27.2022
*/

//Time and Date Today:
const time = Date.now();
const today = new Date(time).toLocaleDateString();

//Task 1: Create Bank Account
let bankAccount = {
    bankAccountID: function(){ 
                let baID = (Math.floor(Math.random() * 100));
                //console.log(`Bank Account ID: BA`+ baID);
                return ('BA'+baID)
                },
    accountNumber: 5123245,
    credentials: [
                {username: 'riri01', password: 'riring0', pin : 2314},
                ],
    balance: 3000,
    createdAt: new Date(2022, 9, 27).toLocaleDateString('en-US')
}

//Task 2: Create User Account
let userAccount = {
    bankAccountID2 : {...bankAccount.bankAccountID},
    debitCard : '3214-2128-6587-0682',
    firstName : 'Riri',
    lastName : 'Potato',
    birthDate : new Date('October 1, 2000'),
    validID : [
        {type_of_ID : 'Passport', IDnumber : 254646},
        {type_of_ID : 'Drivers License', IDnumber : 12300858},
    ],
    address : 'Tsunugu, Japan'
} 

//Task 3: Add functionality to the system
function getBankAccountDetails(username, password){
    let x = bankAccount.bankAccountID();
    if(username == bankAccount.credentials[0].username && password == bankAccount.credentials[0].password){
        console.log(`[${today}] 
    Hello ${userAccount.firstName} ${userAccount.lastName},
    Here are your bank details:
        Bank Account ID: ${x}
        Created: ${bankAccount.createdAt}
        Debit Card: ${userAccount.debitCard}
        Account Number: ${bankAccount.accountNumber}
        Valid ID: ${userAccount.validID[0].type_of_ID}
        Current Balance: ${bankAccount.balance} \n`);
        
    } else {
        console.log(`Invalid Login`);
    }

    function withdrawMoney(withdrawAmount){
            if(bankAccount.accountNumber==5123245){
                if(withdrawAmount <= bankAccount.balance){
                    bankAccount.balance -= withdrawAmount
                    console.log(`You have successfully withdrawed ${withdrawAmount}. Your new balance is ${bankAccount.balance}`);
                } else if(withdrawAmount > bankAccount.balance)
                console.log(`Insufficient Balance`); {
            }
        }
    }

    function depositMoney(depositAmount){
        if(bankAccount.accountNumber==5123245){
            bankAccount.balance += depositAmount
            console.log(`You have deposited ${depositAmount}. Your new balance is ${bankAccount.balance}`);
        }
    }

    return {
        withdrawMoney,
        depositMoney,
    }
}

//Testing:
//bankAccount.bankAccountID();
// console.log(`${bankAccount.createdAt}`);
// console.log(`${userAccount.birthDate}`);
//console.log(`${bankAccount.credentials[0].username}, ${bankAccount.credentials[0].password}`);

const myBank = getBankAccountDetails('riri01','riring0');
myBank.withdrawMoney(500);
myBank.depositMoney(800);