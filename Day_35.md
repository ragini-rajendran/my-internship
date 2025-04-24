#### Summary on Day-35:
In chat bot widget when i enter the message there is no response from the server. It displays sorry,i could'nt connect to the AI service.
**Today's Goal:**
- So today i need to work on this part and make AI to response for my message. So that i started checking on API key which i created is correct or not.
- Then i have checked the .env files and again i have created a new .env files and run the following command as
          type nul>.env
          notepad .env
This will create an empty file named .env there i have created the environment variables.
Then i run the code,again it displays the same thing.
Then i included app.use(cors()); in the server.js file.I have initialized the cors() in the variable named cors but i didnt call it in the app function.After implementing this line i got the response from the server.
- Now the response it displaying in a paragraph format. so i need to work on it to display in line by line.
- Then i have modified the code in the html file. Now the response is displaying in line by line.
- Finally my project is working in all aspects.I have also completed today's goal what i thought of completing it.
 **About the project:**
I have created the front end page which is similar to the surfboard payments webpage. When i clicks the product it displays 8 products in a column wise. Under that when i clicks surf-touch it should display its content in the same page. Similarly i have developed all the produc with its description.
-> The main concept of this project is i need to create a chatbot widget there the user can ask questions related to the surf board payments and the response is made in the chat bot window. I made this request and response using the gemini api module. When the vertex sends the req it goes to the gemini API and finally the response is made.
**Requirements:**
-Html
-css
-javascript as frontend.
-Node.js as backend framework.
Then i have run the project in the terminal node server.js and in the explorer i have copied the html file url and run the program.I showed this project to richy he then told me to develop with one more task. In that task,when the user enters the context in  the request message whether the API will response to that context or not. He told me to check on this.
->Whether it is working means i need to add one more script file for the specifications in backend and calls the file in the server page as context: and user prompt: 
So that the response will made related to the context.
->If it is not working means what are the ways to make it work need to check on it.
**Afternoon session:**
In this session jerfin took class on **Testing**.
First he gave the introduction about testing and its types. Usually testing works on the debugging part.
**Lifecycle of testing:**
- Request analysis
- test plan
- test case development
- test case environment setup
**Types of testing:**
1.Manual testing
2.Automated testing
In manual testing we need to check the errros and correct it manually.
In automated testing test case is written in javascript for testing.
Advantages of automated testing is **time consuming**.
Disadvantages is not everything is automated.
**Bug defect Lifecycle:**
New->Assigned->Open->Fixed->Pending retest->Retest->Verified->closed.
Lifecycle of testing and Bug defect lifecycle are the main concepts to be followed in testing.