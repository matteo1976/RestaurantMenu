#  RestaurantMenu 

his webapp allows you to select your favorite menu and choose from several dishes in the many courses.
The user will have the opportunity to browse the menu step by step through the different courses. For each course there is a name, an image, a description, if there are any allergy factors, the level of spices.
The user can select or deselect the dishes he wants (see selection of the dish), and go to the next dish or return to the previous one and correct his choice.
The user is obliged to choose at least one dish from the main course.
At the end of the selection, the user will have the list of all the dishes he has chosen.



# User instructions

  - press start to start your selection
  - at the top of the page there is a bar that displays the current course
  - Each card rappresent a dishe you will find all information( name, description, image, allergy and spice level) if there are not it mean there is not allergy factor or no spice.
  - Go on ower a single dishe and click to select it, the little hart on the buttom-left of the card will be red, click again for deselect
  - Use the next button to move to the next course and return to the previous course.
  - On last step press finish buttom to view the complete list of your choice
 
# strategic or architectural decisions
I used material-UI component because it's a library I'm familiar with.

Flow rates are displayed in steps as required
there are two more steps, one START and one FINISH.

I have created constants to represent the steps and the type courses (constat.js)

There is a main page (App.js) where there are different views for each step. 
START- landing page with start button
FINISH - summary page

For all the other steps,  is displayed the list of dishes for that course.
The list is a React component (dishes.js) is a grid of Dishe component. 

The Dishe component (dishe.js ) is the basic component, i.e. the single card where all the dish info is displayed.

I used a list of selected dishes, (an array containing all the id of the selected dishes), and the small heart at the bottom of the card to show if a dish is selected or not, in this way you can move between the different steps and change your choices.

I have not inserted at the end of the page a visual summary that can be added later.
There is the possibility to select different dishes in the same course but there is the possibility to select more times the same dish, a function that could be implemented using icon + (avatar) at the top of the card.