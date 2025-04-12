## summary on Day-28
**Today's Goal:** 1. Bot symbol implementation in the chat log.
2.while loading the response message i need to include the load animation.
##### Today started to search bot symbols like how to include bot symbols in both the request and response messages.
first i have downloaded the user icon and bot icon and stored it by creating a new folder named assets in my project directory. In the html file created a new div and placed the image source as ,
<img class="chat-icon"src="assets/user.png">
In the css file,
.user-message::before{
    content: ""
saved the file and refreshed the explorer page but it doesnt work. And also i searched for the loadind animation implementation by reading the documents in w3 school website and refered other pages too.
**post lunch:** Again started trying to include bot symbols in my project. so i created a div class under the chat-log as,
<div class="user-message"id="user-message">
</div>
<div class="user-bot-message"id="bot-message">
</div>
saved the file and also in the css in cluded tge image url as,
background-img:url('')
the url i copied from the chatbot animated icons which is free to download. There i searched for the user icon and selected the particular user icon and copied as link to PNG then pasted in the url part in css.
similarly bot-message::before{
    }
saved the file and run it.
Now my user and bot messages are displayed with the bot symbols which i used in the css part. But in the initial stage that is before the user sends the message the symbol is displayed in both the sides.Now i started correcting it.
In the css file ::befoore section
content:"" pati is removed to check whether it is working or not.But it entirely doesnt display the symbol.after spending time in this particular scenario i moved to the next part.
##### Tried  to implement loading animation when the waiting time is longer.
In the **html file** i have included the div tag inside the chat-log as
<div id="loading-container"class="loading">
<div class="loader"></div>
</div>
In the **css file** set the styles for the .loading and .loader and also included @keyframes.spin{
    100%{transform:rotate(360 degree)}
}
In the **javascript file** i included the following lines:
->const loading container=document.getElementByID('loading-container');
-> **show loading()**; is added when the message from  the user goes to the AI it loads until it displays the response as message.
->**hide loading()**; is added in **if** statement.When the response is came back then hide function will works.
Today what i have set as a goal i have completed and i discussed about today's work like what i have implemented in my project with my mentor richy.He also given some inputs to include in my project further.He also told me to change the displaying contents should not in the paragraph.for example in any AI it displays the response message line by line with some bulletin points like that i need to change it.He also told me to keeping refernce of any AI tool what are the other variations can i can do in my project and also to include small small variations like adding button,including files further in my projects.



    



 











 


