#### summary on Day-34:
**Today's Goal:**
In my project when i clicks the chat with gemini button it should opens a chatbot widget in the same page.
- So i started working on it.The front end was completed.I have included the chat button in the front end.
- To include chat button window in the webpage:
  1.I have created the server.js file for the backend process. In that file i have included express,body-parser and node-fetch packages.
- Today i have created the chatbot widget in the same page by adding code in html,css and javascript
 **Requirements:**
- 1.frontend is html css and javascript
2.backend is node.js
using html and css i created the chatbot webpage and with the javascript when the user enters the message and clicks the send button it goes to the API to get the response and displayed in the chat log.
using the backend node.js i have created the following steps:
->created env file which contains API key and port is set to 3000
->API module is set as gemini 1.5 pro
->api key is created in gemini cloud.
the html and css files are accessed by using the command app.use(express.static(__dirname));
when the API key is not correct then it displays internal server error. when the user sends hi message then the message is taken to the gemini ai and displays the response in the chat log.
- In html file created a div container then in that i have created another div container for header section then chat messages and chat input.Then the button is created.
- In css file  styled the chatbot-widget window.
- In javascript file,
 const openchatbot Button=document.getElementByID('chatbot-toggle');
for each div created in the html i created a javascript file to get the elements like chatbot widget,chatmessages,chatinput and chatsendbutton.
- Then added event listener when we clicks the button it opens the chatbot widget.
- for sending and receiving the messages i have created a function named appendfunction.
**Afternoon session:**
we had a class on firebase .sriram took the class.He then explains about the firebase basics.
**Analytics:** It compares our project with another and give the graphical representaion.
- It shows how many users used the code for how many times.
 **Real time database:**
**Rule:** whenever the URL is clicked the user only have the credits for accessing the code. so we need the code in the rule.
-There is a free access to the database in the firebase.
- In cloud storage it gives 1GB of data can be used.
- In real time database itt gives 5GB of data cab be used.
 **Firestore:** In firestore we can store any type of data here. In firebase using index concept we can add the files.
**Hosting:**
He explains about hosting and we started hosting out project in firbase.