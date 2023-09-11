// separate the numbers into two different arrays that contains even and odd numbers

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]
// number1%number2 = 0
// 1. i will use a for loop
// for(let number=0 ; number <= 5; number++)
// create two empty arrays for odd and even numbers
//traverse or loop through the array
//check for each element in the array if it is odd or even
//push the number in each of the empty arrays depending on the value
const evenNumber =[]
const oddNumber=[]

for(let i=0;i< numbers.length;i++){
     if(numbers[i]%2==0){
        evenNumber.push(numbers[i])
     }else{ oddNumber.push(numbers[i])}
}

console.log(evenNumber)
console.log(oddNumber)

// strings leter
//1. Check if the two words are a palidrome
//2. Turn all the first letter of a sentence in capital letters
//3. Check the number of characters in a string
//4. Use for loop to reverse the letters in a string
//5. Find the longest longest word in a sentence
//6. sum all the numbers in an array