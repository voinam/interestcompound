
//To calculate compound interest.

// Formula: A = P(1 + r/n)^(nt)
// P is principal, r is rate of interest, n is number of times interest is compounded per year, t is time(in years). 
//result is the principal amount + interest
//interest rate is in decimal form, so 2% = 0.02

const  P=10000, r=.02, t=2, n=2;
let result = 0;

result =  P*(1+(r/n))**(n*t);

// console.log(result);
console.log("The Compound interest after", n, "years is ", result);