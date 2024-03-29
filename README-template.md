# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

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

**Note: These are just examples. Delete this note and replace the list above with your own choices**

## What I learned

### Webpack

Webpack is a module bundler that put all your assets (HTML, CSS, JS, images, fonts) in a few files.

### Configure the webpack

html-webpack-plugin - create a html template file

clean-webpack-plugin - clear out anything in the dist folder after each build. This is important to ensure no old data gets left behind.

sass-loader - Load SCSS files and compile to CSS

- sass

postcss-loader

- postcss
- postcss-preset-env - a plugins pack for PostCSS

css-loader

style-loader

### Using Sass with Web components

### Shadow DOM

Important part of Web components is the encapsulation. Separate the code of a component from the other part of code making the component clean and easier to testt

The Shadow DOM is a isoled DOM.

It is used to encapsulate the inner structure of an element.

The difference with the DOM is that none of the code inside a shadow DOM can affect anything outside it, allowing for handy encapsulation.

[Using Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Margin collapsing

To make the component `shorten-link` overlapping, we apply a top negative margin to move the component up:

```html
<section class="shorten-link-section">
    <section class="shorten-link-section__content">
      <section class="shorten-link">  <!-- Apply the top margin here -->
          <!-- Some code...-->
      </section>
    </section>
</section>

<style>
  .shorten-link {
    margin: -80px 0 0 0;
  }
</style>
```

The problem is the whole container `shorten-link-section` is moving up instead of moving the component up.
The negative margin is transferred to the container `shorten-link-section` because of margin collapse between the parent and child element. 

To prevent margin from collapsing, we apply `display: flex` to the parent `shorten-link-section__content` or `shorten-link-section` : 
```css
.shorten-link-section__content {
    display: flex;
    flex-flow: column wrap;
```

Source: [How to disable margin-collapsing? - StackOverflow](https://stackoverflow.com/questions/19718634/how-to-disable-margin-collapsing)

## Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

## Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
