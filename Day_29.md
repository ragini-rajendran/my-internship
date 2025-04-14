### summary on Day-29:
**Today's Goal:**
->need to change the version of API model.
->need to change the font format.
->displaying contents should be changed like it should not be in paragraph.
**1->** i have changed the gemini version from gemini 1.5 pro to gemini 2.0 flash.
**2->** i have chaged the font style.first it displays the response message in bold and the font-family is different then i removed the font-family and then i removed the color: black; after changing the font is displayed in a normal text.
**3->** The user message and the bot messages are to be differiated.The user message should be displayed in light blue so i included the follwing code:
     .user-message{
     background-color: #e0f7fa;
     }
similarly,the bot-message should be displayed in grey,
     .bot-message
     {
         background-color: #f0f0f0;
     }
Then i want a space between user and bot messages so i included 
   margin-bottom: 15px; in both  the user-message and bot-message.
To display the request and response message in the right and left side of the container i used  align-self: flex-start and flex-end property in css file but it is not working.further i need to work on it.
  **post lunch:**
 Today richy assigned me a new project where i have to create a webpage say for an example a car webpage which contains a list of car images with details of the car if the user wants a specific detail about the car he can get the information from the AI chatbot widget by asking the particular detail of the car. so i need to create a webpage using frontend tools like html,css and javascript then i need to create a chatbot widget with inbuild questions and answers for the car.
  Then i searched for the website with AI chatbot for a reference to take as a input for  my project.  
  In domino's website,the AI chatbot is prompted for ordering and tracking of an order.
  Taken a reference website for my understanding.example in hdfc banking website. In that a small AI animation is rendered on the right side of the container. when the user clicks the AI then it displays the small screen with some questions.The questions and answers are set by us initially in the code.If the question is raised the desired response should made.Using this concept i have to create a small webpage with AI chatbot.Like this searched for many websites like school websites,banking websites,uber,domino's website with AI chatbot for the reference.
  I had some doubts regarding this chatbot widget in the webpage.I asked to my mentor richy then he given me a task whether we can able to get a response within the webpage itself or not.If yes means how it could be possible and if no means then any other way is there to retrive the messages within the website.
  for example, he showed me a surfboard payments  website. In that i need to create a products menu.Under that menu i have to create seven submenus.Each menu should contain some information regarding payments.In that website i need to create a chatbot widget. when the user searchs for a particular statement then the AI should displays its content within the webpage. 
  