# project Name: Scope match

# Objective: 
## this web app uses a game-like approach to practice scope and closure

# GamePlay

- the screen display two areas : `code snippet` and `Variable match`
- the code snippet area shows a pre-written js code with functions and variable within different scopes [global,function,block]
- the 'variable match' area displays a list of variables used in the code snippet.
- on the right side ,there are several boxes representing different scopes [global,function1,function2,etc depending on the code snippet]
- users drag and drog the variables from the list to the corresponding scope boxes where they are accessible.
- when a variable is placed in the correct scope box,it snaps into place,provide visual confirmation
- if a variable is placed in the wrong scope, it doesnot snap and a message appears explaining why it is incorrect.
- the app keeps track of user's choice and provide a 'next code' button to proceed to new challenges with different scenarios

Benefits:

- The drag-and-drop interaction is simple and intuitive.
- Immediate feedback helps users identify correct and incorrect placements.

- Progressing through different code snippets provides exposure to various scope situations.







# Technologies:

You can build this app using HTML, CSS, and JavaScript. Here are some libraries that might be useful:
jQuery UI: For drag-and-drop functionality.
JavaScript templating libraries: Like Handlebars or Mustache, to dynamically generate the code snippets and variable lists.






# Additional Ideas:

- Implement a timer for each challenge, adding a time-based scoring element.
- Offer a "Hint" button that reveals the correct scope for a specific variable (limited uses to encourage active learning).

- Include a "Level Up" system where challenges become more complex with nested functions and closures.



This "Scope Match" web app provides a simple yet engaging way to practice and understand scope and closure concepts. The drag-and-drop interaction and immediate feedback contribute to a fun and effective learning experience