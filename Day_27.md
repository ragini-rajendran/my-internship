summary on Day-27
I have completed my bot project.Richy asked about the project like how did i implemented and process of working in which when the user enters the message how it retrieves the information from the API and displays the message content in the chat log.
Requirements:
1.frontend is html css and javascript
2.backend is node.js
using html and css i created the chatbot webpage and with the javascript when the user enters the message and clicks the send button it goes to the API to get the response and displayed in the chat log.
using the backend node.js i have created the following steps:
->created env file which contains API key and port is set to 3000
->API module is set as gemini 1.5 pro
->api key is created in gemini cloud.
the html and css files are accessed by using the command app.use(express.static(__dirname));
when the API key is not correct then it displays internal server error. when the user sends hi message then the message is taken to the gemini ai and displays the response in the chat log.
I explained the above steps.The core concept of the project is completed.Richy told to improve the design of the UI.
Today’s goal:
1.The gemini chatbot should be in full screen
2.user and response should have bot symbol
3.user messages should be on the right side of the bot
4.response messages should be on the left side of the bot
changes i made today:
->changed the input field placeholder as Ask Anything.In chat container i removed max-width: 400px.After removing max-width the chat-container appeared in full screen.
->Then the input field box is very small which not fits the container.

chat-input-container{
display: flex;
align-items: center;
}
After given,the input field aligned to the center.
->now i want the input field should be displayed on the full screen

chat-input-container{
    width: 85%;
    height: 15vh;
    }
I have included label in the div tag which contains flex-grow: 1;//allows the input to take up the available space.
->send button width and height doesnt changed.while checking in html file i mistakenly given button id=“send-button” instead of button-class=“send-button”.so the send-button in css is not worked.Then changed the button-class and in css,
.send-button{
width: 20%;
height: 17vh;
}
->changed the background and text color of the input field to black and white.
.chat-input-container
{
background-color: white;
}
input{
background-color: white;
color: black;
}
.send-button{
background-color: white;
color: black;
}
2.when the user enters the message it should be displayed on the right side of the container.in css file,
.user-message{
display: flex;
flex-direction: row-reverse
}
3.By default the response message will be displayed on the left side of the container.
4.Displaying message font has been changed.
body{
font-family: arial,helvetrica,sans-serif
}
4.changed the header tag’s width and height as 16% and 5vh,justify-content: center;
then my gemini chatbot header section moves to the left side of the container.
completed today’s task what richy told to work on my project except the bot symbol.

Afternoon session:
In the afternoon session koushik sir and we interns were discussed about static const and final keywords where he told us google about it yesterday.
static: static it indicates that the variable belongs to the class itself.
final: it means that the variable can only be assigned a value once and the value cannot be changed after initialization.
const: once we declared the keyword as const it ensures that the value of the variable is known at the compile time.
inheritance: inheritance is a process of one class inherits properties and behaviour from another class.
encapsulation: encapsulation is the process of wrapping variable and sunction into a single unit.
polymorphism: Polymorphism allows objects of different classes to be treated as objects of a common superclass, but behave differently based on their actual class.
abstraction: Abstraction is all about hiding the internal implementation and showing only the essential features.