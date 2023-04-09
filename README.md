# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![Desktop Light](./assets/design/desktop-design-light.jpg)
![Desktop Dark](./assets/design/desktop-design-dark.jpg)
![Mobile light](./assets/design/mobile-design-light.jpg)
![Mobile Dark](./assets/design/mobile-design-dark.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
-javascript


### What I learned

In this project I learned how to use the not selector in css!

Below is the code snippet:

```html
<li class="menu__list">
            <a href="#" id="all" class="menu__item active">All</a>  
          </li>
          <li class="menu__list">
            <a href="#" id="active" class="menu__item">Active</a>  
          </li>
```
```css
.menu__item:hover:not(.active){
    color:hsl(235, 19%, 35%);
}
```


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@wan0805](https://www.frontendmentor.io/profile/wan0805)
- Instagram - [@wanderson.duartee](https://www.instagram.com/wanderson.duartee)


## Acknowledgments

I want to thank God for giving me wisdom and patience to complete the project and also thank FrontEnd Mentor for the challenges as they help a lot in our development

