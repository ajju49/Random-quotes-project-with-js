const abc = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'Its not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
]

const pqr = document.querySelector('#quotebtn')
const Quote = document.querySelector('#Quote')
const QuoteAuthor = document.querySelector('#QuoteAuthor')

pqr.addEventListener('click', xyz)

function xyz() {
    let number = Math.floor(Math.random() * abc.length)
    QuoteAuthor.innerHTML = abc[number].author
    Quote.innerHTML = abc[number].quote
}