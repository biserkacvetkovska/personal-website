# Personal website - Third lesson (JavaScript)

## Prerequisites

For this lesson, you will be using Visual Studio Code to create a personal website.
If you do not have Visual Studio Code installed on your computer, please use a text editor like Notepad++ or similar.

❗❗❗ You have to complete the first [**First lesson (HTML)**](./first-lesson.md) and second lesson [**Second lesson (CSS)**](./second-lesson.md), before you start with this third lesson.

## Introduction

JavaScript is a programming language that helps you add interactivity to your website. For example, you can use JavaScript to define what will happen if someone clicks on a button on your website.

In this lesson, you will create a button and code a functionality that will switch between light and dark theme of your website. 

### 📝 Task

In Visual Studio Code, create a new file named `index.js`. You will write your JavaScript code in this file. 

Open your `index.html` in Visual Studio Code and before the closing </body> HTML element, enter the following code. 

```HTML
<script src="./index.js"></script>
```

The `<script>` HTML tag is used to reference the JavaScript file `index.js`. This tag can be placed in the `<head>` or elsewhere in the `<body>`. Putting the `<script>` element at the end of the `<body>` means that all HTML elements will be loaded on the screen first and then the JavaScript code will be executed. This is especially important if you interact with your HTML elements in the `index.js`. In order to interact with your HTML elements, they need to be loaded before the JavaScript code.

### 📝 Task

Create the button that will allow you to switch between dark and light theme. Copy the following HTML tags in your `index.html` inside the `<footer>` tag. 

```HTML
<button id="switch-theme">Switch theme</button>
```

You create buttons using the `<button>` tag. The text between the opening and closing `<button>` tags will be displayed inside your button. You can change this text to whatever you want. 

Since, you will need to interact with the button element, you need to add an `id="switch-theme"` attribute to easily distinguish it from the other HTML elements.

### 📝 Task

Next, create the styles for the dark and light theme.

Let's say that the dark theme will set the background color to black and the font color to white. Where as, the light theme will set the background color to `#FFF2F8` and the font color to black.

Copy the following CSS code to your `index.css` file.

```CSS
.theme-light {
    color: black;
    background-color: #FFF2F8;
}

.theme-dark {
    color: white;
    background-color: black;
}
```

When your body HTML element has a class `theme-light` that means that the CSS class `.theme-light` will be applied to it. When your body element has a class `theme-dark` that means that the CSS class `.theme-dark` will be applied to it.

Now that you have the HTML and CSS ready, you can focus on the JavaScript code that will interact with the button and switch between dark and light theme.

## Variables

Variables store values that can be used and changed throughout your code. You can create a variable by following the syntax [keyword] [name].

1. Keyword - can be `let` or `var`.
2. The variable name, this is a name you choose yourself.

### 📝 Task

Open your `index.js` and create a variable. 

```JS
let switchThemeButton;
```

`switchThemeButton` has now been declared using the `let` keyword. It currently doesn't have a value.

To assign a value, you can use the `=` operator, followed by the expected value.

```JS
let switchThemeButton = 123;
```

Once a variable is declared, you can change its value at any point in your code with the `=` operator and the new value.

In your specific case, you want to locate the button element and assign it a `click` behaviour, so that when you click the button the theme will change. In order to locate the button element in JavaScript, you can use the following code.

```JS
document.getElementById('switch-theme');
```

`document` represents your whole HTML document. `getElementById` will try to find an element on that document with `id` equal to the value specified in the parentheses. If you remember, you set the `id` of you button element to `switch-theme`.

Assign a new value to your `switchThemeButton` variable, like so. 

```JS
let switchThemeButton = document.getElementById('switch-theme');
```

## Event handler

To make the button do something when you select it, you need an event handler in your JavaScript file. For a button, you need an event handler for the `click` event; the event handler function runs when the click event occurs. You create an event handler with the method `addEventListener`.

### 📝 Task

Add the following code in your `index.js` to add an event handler on your button.

```JS
switchThemeButton.addEventListener('click', function () {
});
```

This means that you will create an event handler on your button. The event handler will listen to the `click` event. When the `click` event is executed, the code inside the `function` will execute too.

Next, you want to assign your `theme-dark` or `theme-light` CSS classes to your body, so you can switch between dark and light mode on your website. 

To do so, you will need to locate your body element. In JavaScript, you can use `document.body` to locate your body. 

Then, similar as with the `switchThemeButton` variable, you will create another variable named `className`. Assign this variable to the value of the body's class attribute. Copy the following code inside the `function` in your `index.js` file.

```JS
let className = document.body.className;
```

## Conditionals

*If* the current class of the body element is dark *then* you want to assign the light theme and vice versa. *If* the current theme of the body element is light *then* you want to assign the dark theme.

When you need to implement such conditions, you can use conditionals with `if` and `else`. 

```JS
if(something is true) {
    // then this will execute
} else { // if something is not true
    // then this will execute
}
```

In your specific example, if the theme *is* light then you want to change it to dark. If the theme *is not* light, therefore is black then you want to change it to light. 

```JS
if (className == 'theme-light') {
    // change to dark
}
else {
    // change to light
}
```

The `==` operator compares the value stored in your variable `className` with the text `theme-light`. If the value of the variable is equal to the `theme-light` text, then the condition *is true* and the `if` block will execute. If that is not the case then the condition *is not true* which means that the `else` block will execute.

### 📝 Task

If you remember, the variable `className` contains the class assigned to your body element. To implement the "Switch theme" button, you need to implement the following behaviour:

* When the `className` is equal to `theme-light` and the button "Switch theme" is clicked, you want to remove that class and add the `theme-dark` class. 
* When the `className` is equal to `theme-dark` and the button "Switch theme" is clicked, you want to remove the `theme-dark` class and add the `theme-light` class.

You use `document.body.classList` to add or remove a class from your body element. To implement the above behaviour, copy the following code in your `index.js` file.

```JS
if (className == 'theme-light') {
    document.body.classList.remove('theme-light')
    document.body.classList.add('theme-dark');
}
else {
    document.body.classList.remove('theme-dark')
    document.body.classList.add('theme-light');
}
```

In your browser, right click any element in your website and choose "Inspect...". Watch how the class attribute changes when you click the "Switch theme" button.

![Switch theme](./assets/switcher.gif)

## Functions

A function represents a block of code that you can execute on demand. Let's say that you want to count the number of times you click on the "Switch theme" button.

This is perfect for scenarios where you need to perform the same task multiple times; rather than duplicating the logic in multiple locations (which would make it hard to update when the time comes), you can centralize it in one location, and call it whenever you need the operation performed.

### Create a function 

To create a function in your `index.js`, you can use the following code where `nameOfFunction` can be anything you want.

```JS
function nameOfFunction() { // function definition
 // function definition/body
}
```

### 📝 Task

For example, if you wanted to create a function to display a greeting, you can copy the following code in your `index.js`.

```JS
function displayGreeting() {
  console.log('Hello, world!');
}
```

If you refresh your website, you will see that nothing happens. This is because you have only defined the function but you haven't invoke it yet. Whenever you want to call (or invoke) our function, you use the name of the function followed by ().

```JS
// calling your function
displayGreeting();
```

Refresh your website and right click anywhere. From the menu choose "Inspect...", then open the `Console` tab. You can now see that the `displayGreeting` function was invoked and the text `Hello world!` is displayed in the console.

### 📝 Task

Let's create another function that will be invoked whenever you click on the "Switch theme" button. 

In your `index.js` file copy the following code.

```JS
function countClicks() {
    console.log("You clicked the button!");
}
```

Then invoke the function inside the `eventHandler` which is invoked whenever you click the button. Your `eventHandler` should look like this now.

```JS
switchThemeButton.addEventListener('click', function () {
    countClicks(); // invoke the function countClicks()

    let className = document.body.className;

    if (className == 'theme-dark') {
        ...
    }
    else {
        ...
    }
});
```

In your browser, right click any element in your website and choose "Inspect...". Watch how the console logs every click on the button.

![Switch theme count clicks](./assets/count-clicks.gif)

### 📝 Task

Next, you will display the number of times the theme was changed on your website too not just in the console. 

In your `index.html` create two HTML elements after the "Interests" section.

```HTML
<p>The theme was switched <span id="count-clicks">0</span> times.</p>
```

In your `index.js` file create a new variable which value will be equal to the number of times the theme was switched. 

At the beginning, this number will be 0, so you can initialize the variable to be equal to 0.

```JS
let countSwitches = 0;
```

Every time, you click on the button to switch the theme, you want to increse the value of the `countSwitches` variable by 1. So, let's implement that logic in JavaScript.

Inside your `countClicks` function increase the value of your variable for 1 and then assign the new value to the variable.

```JS
function countClicks() {
    countSwitches = countSwitches + 1;

    console.log("You clicked the button!");
}
```

Another way of writing `countSwitches + 1` is `countSwitches++` or you can even do this: `countSwitches += 1`. All of these do the same thing - the value of the `countSwitches` variable will increase by 1.

Next, let's try to display the value of the `countSwitches` variable on the screen. In your `countClicks` function do the following.

```JS
function countClicks() {
    countSwitches = countSwitches + 1;

    document.getElementById("count-clicks").value = countSwitches;

    console.log("You clicked the button!");
}
```

Watch how the number of theme switches changes on the screen every time you click the "Switch theme" button.

![Switch theme count on display](./assets/count-clicks-display.gif)

That's it for this third lesson!

The result of this third lesson is an HTML file that can be found [here](./third-lesson.html), a CSS file that can be found [here](./third-lesson.css) and a JavaScript file that can be found [here](./third-lesson.js).

In the next lesson you will publish your website on the Internet.




