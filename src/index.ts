interface Message {
  date: Date
  text: string
}

const hello: Message = {
  date: new Date(),
  text: "Hello world"
}

const { date, text } = hello

console.log(`${date} - ${text}`)