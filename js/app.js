
var prevoiusRandomNo =-1;
var quoteAry =[
    { quote :'Be yourself; everyone else is already taken.', auther :'Oscar Wilde'},
    { quote :'Live as if you were to die tomorrow. Learn as if you were to live forever.', auther :'Mahatma Gandhi'},
    { quote :'So many books, so little time.', auther :'Frank Zappa'},
    { quote :'A room without books is like a body without a soul.', auther :'Marcus Tullius Cicero'},
    { quote :'You only live once, but if you do it right, once is enough.', auther :'Mae West'},
    { quote :'Be the change that you wish to see in the world.', auther :'Mahatma Gandhi'},
    { quote :'In three words I can sum up everything I\'ve learned about life: it goes on.', auther :'Robert Frost'},
    { quote :'If you tell the truth, you don\'t have to remember anything.', auther :'Mark Twain'},
    { quote :'A friend is someone who knows all about you and still loves you.', auther :'Elbert Hubbard'},
    { quote :'To live is the rarest thing in the world. Most people exist, that is all.', auther :'Oscar Wilde'},
]


function getRandomNumber(){
    var newRandomNo = Math.floor( Math.random() * (quoteAry.length));
    getQuote(newRandomNo);
}

function getQuote(index) {
    
   
    if (prevoiusRandomNo == index){
        getRandomNumber();
    }
    else{
       document.getElementById('quoteText').innerHTML= `\" ${quoteAry[index].quote} \"`;
       
       document.getElementById('quoteAuther').innerHTML= `\" ${quoteAry[index].auther} \"`;
    }

    prevoiusRandomNo =index;
}

window.onload = function() {
    getQuote(1);
  };