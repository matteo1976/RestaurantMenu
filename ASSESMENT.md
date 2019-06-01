#  RestaurantMenu 

This webapp allows you to select your favorite menu and choose from several dishes throughout the courses.
The user will have the opportunity to browse the menu step by step and go through the different courses. For each course there is a name, an image, a description, allergy factors as well as the spice level.
The user can select or deselect the dishes he/she wants (see selection of the dish), and go to the next course or return to the previous one and correct his/her choice.
The user does not have to choose a dish from every course, but is obliged to choose at least one dish from the main course.
At the end of the selection, the user will have the list of all the dishes he/she has chosen.



# User instructions

  - Press the start-button to start your selection.
  - At the top of the page there is a bar that displays the current course.
  - Each card represent a dish, where you will find all information (name, description, image, allergy factors and spice level). If there are no icons (alert for allergy and pepper for the spice level) it means that the dish is not spicy nor contains particular "allergy ingredients".
  - Move your mouse over a single dish and click to select it. The little heart on the bottom-left of the card will turn red. Click again if you'd like to  deselect.
  - Use the next-button to move to the next course or the return-button to go to the previous course.
  - As a last step, press to finish-button to view the complete list of your choice.
 
# strategic or architectural decisions
I used material-UI because it's a library I'm familiar with.

Flow rates are displayed in steps as required
however, I added two additional steps, that are not visible on the step-bar: "START" and "FINISH".

I have created constants to represent the steps and the type of courses (constat.js)

There is a main page (App.js) where there are different views for each step. 
START: landing page with start-button
FINISH: summary page

For all the other steps, the list of dishes for each course is displayed.
The list is a React component (dishes.js) that is a grid of a dish component. 

The dish component (dish.js) is the basic component, i.e. the single card where all the information of the dish is displayed.

I used a list of selected dishes (an array containing all the id of the selected dishes), and the small heart at the bottom of the card to show if a dish is selected or not, in order to move between the different steps and change your choices.

As I decided to use the heart-icon to visualize the list of the chosen dishes, I have not inserted an extra visual summary at the bottom of each page. It could however be an additional feature.
There is the possibility to select different dishes in the same course but it is not possible to select the same dish more than once. However, it could be an additional feature, i.e. putting a counter instead of the icon + (avatar) at the top of the card.