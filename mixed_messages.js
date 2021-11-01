
const inspirational_quotes = ["You can do this!",
"Seize the day!",
"Do what you can with what you have where you are",
"The secret of getting ahead is getting started",
"Do one thing every day that scares you",
"Trust the process",
"One day or day one. You decide",
"Everything comes to him who hustles while he waits"]

const mixed_message_object = {

    random_index: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    Author: ["Martin Luther King", "FDR","Albert Eintstein", "Winston Churchill", "Alex Salmond"],
    Event: ["Woodstock", "St Andrews Day", "Jubilee Day"],
    Author_generation: function(){
       console.log( `
        ${mixed_message_object.Author[Math.floor(Math.random() * mixed_message_object.Author.length)]}`)
    }

}

const quote_generator = (lst) => { 
   let first_response = inspirational_quotes[Math.floor(Math.random() * lst.length)]
   let second_response = inspirational_quotes[Math.floor(Math.random() * lst.length)]
   let full_response = first_response + second_response
   if (second_response !== first_response){
       full_response = 
       `${first_response}
    ${second_response}
        `
   } else {
       quote_generator(lst)
   }
    console.log(`
    ---------------------------------
    ${full_response}
    ----------------------------------`)
}  

const message_generator_object = (obj, lst) => {
    let index_number = obj.random_index[Math.floor(Math.random() * obj.random_index.length)]
    let event = obj.Event[Math.floor(Math.random() * obj.Event.length)]
    let Author = obj.Author[Math.floor(Math.random() * obj.Author.length)]

    let first_response = lst[Math.floor(Math.random() * lst.length)]
    let second_response = lst[Math.floor(Math.random() * lst.length)]
    let full_response = first_response + second_response
    if (second_response !== first_response){
       full_response = 
       `"${first_response}" and "${second_response}"
        `
   } else {
       quote_generator(lst)
   }
       
    console.log(`
    ${index_number}: ${Author} at ${event} said ${full_response} at ${event}.
    `.trim())
}
// console.log(inspirational_quotes)
quote_generator(inspirational_quotes)
// message_generator_object(mixed_message_object, inspirational_quotes)
