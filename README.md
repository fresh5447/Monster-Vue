# Checklist

----

1) Setup basic project structure to include an `index.html`, `style.css`, and `app.js`

- Setup the basic HTML
- Add a test to the `style.css` to make sure it is hooked up
- Add a test to `app.js` to ensure it is hooked up.
- Connect `bootstrap`
- Connect `Vue`

----

2) Create the Monster Connector and pass the data to Vue.
*Be sure to do lot's of smoke tests along the way*

- Define the monster constructor.
- Use the constructor to make several monster.
- Store the monsters in an Array
- Create a Vue app
- Display the monsters using the Vue app.
- Do some minimal CSS

*Be sure to do lot's of smoke tests along the way*

__yes I said that twice 😜__

----

3) Use flexbox to create a card style layout.

- Define a card to be 1/3 of the screen.
- Use the margin `calc` trick to get some nice spacing.
- Layout the cards using flexbox.
- Apply flexbox so that the Card items get flex layout.
- Ditch the `li`, and use span tags instead, so we can lay them out using flexbox.

*I had to fix the vampire img in this commit*

4) Submit a new Monster Part 1: Form Setup

- Grab a form from bootstrap
- Update the fields to be name, image, and diet

5) Submit a new Monster Part 2: Form Submit

- Attach an onSubmit function to the form (be sure to attach it to the `Form` tag)
- Create the method in your Vue Model
- Start with a console.log to ensure it is working.
- Attach v-models to each of the input fields to caputre the information
- Use the information captured to construct a new monster
- Push the new monster to the monsters data

*Tip: You can not use lamda functions for the `methods` section.
