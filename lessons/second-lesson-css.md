# Personal website - Second lesson (CSS)

## Prerequisites

For this lesson, we will be using Visual Studio Code to create a personal website.
If you do not have Visual Studio Code installed on your computer, please use a text editor like Notepad++ or similar.

❗❗❗ You have to complete the first lesson: **First lesson (HTML)**, before you start with this second lesson.

## Introduction

CSS, or Cascading Stype Sheets is a language that we use to style HTML elements.

In this lesson, you will learn to change the font, apply styles and position HTML elements.

### 📝 Task

Create a new file in Visual Studio Code and name it `index.css`. In this newly created file, you will write the code that is necessary to style the HTML elements you created in the first lesson. 

Since, the CSS code is in different file than the HTML code, you will need to connect these two together. You can do that by creating a reference to the `index.css` file inside you `index.html`. You can do that with the help of the `<link>` tag.

The `<link>` tag accepts an attribute called `href` that you can use to set the path to the `index.css` file.

Copy the following HTML tags inside the `<head>` tag.

```HTML
<head>
    <link rel="stylesheet" href="./index.css" />
</head>
```

## CSS selectors

In order to apply a certain style to your HTML elements, you first need to locate that HTML element in your website. The way we do it is by using CSS selectors. We will have a look at three CSS selectors.

1. `id` selectors
    You can use this selector if the HTML element you want to style has the `id` attribute. The style will apply to this element only.

    ```HTML
    <div id="content">
    </div>
    ```

    ```CSS
    #content {
        color: black;
    }
    ```

2. `class` selectors
    You can use this selector if the HTML element you want to style has the `class` attribute. The style will apply to all elements that have this class. 

    ```HTML
    <div class="content">
    </div>
    ```

    ```CSS
    .content {
        color: black;
    }
    ```

3. element selectors
    You can use this selector if you want to style a group of the same type of HTML elements. For example, if you want to style all headings, or all links, or all images, etc.

    Let's say that you want to set the color of all h1 headings on your website to be black. You can do something like this:

    ```CSS
    h1 {
        color: black;
    }
    ```

    Or, to set all headings to black, you can do this:

    ```CSS
    h1, h2, h3, h4, h5, h6 {
        color: black;
    }
    ```

If you want to learn more about CSS selectors, [here](https://www.freecodecamp.org/news/css-selectors-cheat-sheet/) is a cheat sheet of common selectors.

### Font

You can easily apply a different font to your whole website if you set the `font-family` CSS property. For example, in the code below 

```CSS
font-family: Arial;
```

If you want to create a custom font that is not supported by default, you will need to create a `font-family` first and the set the `font-family` CSS property. 

### 📝 Task

In Visual Studio Code, create a folder named `fonts`. Go to [Google Fonts](https://fonts.google.com/), choose a font that you like and download all files associated with that font. 

Copy the font files in the newly creatd `fonts` folder.

You can create a `font-family` by using the CSS `@font-face` selector. Copy the following code in your `index.css` file. 

The `@font-face` selector has the following properties: 
* `font-family` through which you set the name of the family, and 
* `src` through which you add a reference to the font's source files

Use the following code to create two font families named: 'Sora' and 'SoraBold'. Copy the following code in your `index.css` file.

```CSS
@font-face {
    font-family: Sora;
    src: url(./fonts/Sora-Regular.ttf);
}
@font-face {
    font-family: SoraBold;
    src: url(./fonts/Sora-Bold.ttf);
}
```

After you created the new font families using `@font-face`, you can use those font families in your `index.css` file to set the font for your website.

In order to set the font for your whole website, you can use the CSS `body` selector. All of the important HTML elements that display your content are inside the `body` tag.

Copy the following code in your `index.css` file.

```CSS
body {
    font-family: Sora;
}
```

### 📝 Task - Font

OK, let's try some of the things you have learned so far. 

To set a background color for your whole website, you can use the `background-color` property. 

Copy the following code in the `body` element selector in `index.css`.

>You can use a different [color palette](https://coolors.co/palettes/trending) for you website, if you do not like the colors in these guidelines.

```CSS
body {
    font-family: Sora;
    background-color: FFF2F8;
    margin: 0;
}
```

### 📝 Task - Font size

Now, that we have our background color, let's set the size of the h1 headings. You can do that by setting the `font-size` property.

Copy the following code in the `index.css` file.

```CSS
h1 {
    font-size: 4vw;
}
```
### Background and background images 

### 📝 Task - Banner image
Let's  style our banner next. You can set a background image for your banner by setting the `background-image` property.

In Visual Studio Code, create a new folder named `assets` and copy there an image that you want to use as a background image for your banner.

Once you have than, you can copy the following code in the `index.css` file to set the background image. 

The `background-image` property accepts a `url` value, which is the path to your image. In this case, you have your image inside the `assets` folder, therefore you can use: `url(./assets/baner.png);` where `banner.png` is the name of your image.

Copy the following code in your `index.css` file.

✅ What would happen if you set different `background-position` or `background-size` inside the `#banner` CSS selector?
You can read more on that [here](https://developer.mozilla.org/en-US/docs/Web/CSS/background).

✅ What would happen if you change the `background-image` property to `url(./assets/baner-2.png)`?

```CSS
#banner {
    background-image: url(./assets/baner.png);
    background-position: center;
    background-size: cover;
    font-family: SoraBold;
}
```

### 📝 Task - Image size

The avatar image inside the banner is currently too large. Let's change that.

If you remember, we have the following HTML elements with which we define the banner and then the `img` element with which we define the image inside the banner.

```HTML
<div id="banner">
    <div>
        <h1>Hello world, I am [type your name here]</h1>
        <img src="./assets/avatar.svg" />
    </div>
</div>
```

In order to change the size of the image inside the banner, you will have to add a CSS selector to identify the `img` element and then apply the `width` property. You can also adapt the height of the image by setting the `height` property.

Add the `id="avatar-image"` attribute to the `img` tag.

```HTML
<img id="avatar-image" src="./assets/avatar.svg" />
```

Then set the `max-width` property inside the `avatar-image` CSS selector. The `max-width` property means that the maximum width of the image must be equal to the value provided. 

```CSS
#avatar-image {
    max-width: 25rem;
    margin-left: 0;
    margin-right: 0;
}
```

✅ What would happen if you set different `max-width`?

✅ What would happen if you set different `margin-left` or `margin-right`? We use these two properties to set space between different HTML elements.

### Positioning

We can position different HTML elements to be displayed however we want. For example, the text and the image inside the banner are currently displayed one above the other. 

Let's position them side by side, so that they do not take that much space. 

To position your elements, you will use `flex`.
>You can read more on flex [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

### 📝 Task - Position

Add `id="banner-center"` attribute to the `<div>` element containing both the text and image elements, so we can easily style it.

Your `<div>` element for the banner will look like this.

```HTML
<div id="banner">
    <div id="banner-center">
        <h1>Hello world, I am [type your name here]</h1>
        <img id="avatar-image" src="./assets/avatar.svg" />
    </div>
</div>
```

Let's call the <div id="banner-center"> element the parent element. This means that the `<h1>` and `<img>` elements are called children. If you set `display: flex;` for the parent element, the children will be displayed side by side in a horizontal layout.

To do so, add the following CSS code inside `index.css`.

```CSS
#banner-center {
    display: flex;
    margin-left: 0;
    margin-right: 0;
    align-items: center;
}
```

The `align-items: center;` property will align the children elements vertically, so they are displayed in the middle of the baner.

### Text alignment

You can also change text alignment on your website. Let's try it out on a paragraph.

Add the `id="short-description"` attribute to the following `<p>` tag.

```HTML
<p id="short-description">I am a high school student interested in science, technology and design.</p>
```

Then create a CSS selector and set the `text-align` property to `center` if you want to center the text.

```CSS
#short-description{
    text-align: center;
}
```

✅ What would happen if you set the `text-align` property to `left` or `right`?

### Task

Set an attribute `id="interests"` to the `<div>` tag inside your 'Interests' section. 

```HTML
<h2>Interests</h2>            
    <div id="interests">
        ...
```

Copy the following CSS code in your `index.css` file.

```CSS
#interests {
    display: flex;
    justify-content: space-around;
}
```

### Padding

Padding allows you to create, well... padding inside a certain HTML element.

###  📝 Task - Padding

Let's look at the `<div>` element for the banner again. Copy the following code `padding: 0 200;` inside the `#banner-center` selector inside `index.css`.

What do you see?

```CSS
#banner-center {
    display: flex;
    margin-left: 0;
    margin-right: 0;
    align-items: center;
    padding: 0 200;
}
```
You can also use padding for the `<div id="content">` element.

Copy the following code inside your `index.css` file.

```CSS
#content {
    padding: 0 300;
}
```

### Borders

You can create borders aroung different HTML elements using the CSS property `border`. You can also specifically set the top, right, left or bottom border. 

###  📝 Task - Borders

Let's create a visible seperation between the different sections. For example, we will seperate each section, so your visitiors can easily spot different sections.

Copy the following HTML tags where you want to puth a seperation line in your `index.html`.

```HTML
 <div class="center-horizontal-line"></div>
```

Then style the `<div>` element like so. So, we say that we are going to create a new `<div>` element that will seperate the other elements and we will use the property `border-bottom` to create a solid border with size: 1rem and color: `#e3426d`.

Copy the following CSS code in your `index.css` file.

```CSS
.center-horizontal-line {
    border-bottom: .1rem solid #e3426d;
}
```

You can also create a vertical seperation between two `<div>` elements. Copy the following HTML in your `index.html` file.

```HTML
<div class="center-vertical-line"></div>
```

Then, copy the following CSS in your `index.css` file.

```CSS
.center-vertical-line {
    border-right: .1rem solid #e3426d;
}
```

###  Styling span elements

###  📝 Task

You can emphasize parts of text using an inline `span` tag. For example, let's say that we want to emphasize the words 'high school student' in the following `<p>` tag.

```HTML
<div>
    <p id="short-description">I am a high school student interested in science, technology and design.</p>
</div>
```

Wrap the words 'high school student' inside a `span` tag and define a `class` attribute on the `span` tag in your `index.css`. Replace the above html tags with the following in your `index.html`.

```HTML
<div>
    <p id="short-description">I am a <span class="text-emphasize">high school student</span> interested in science, technology and design.</p>
</div>
```

Finally, define the CSS code for the class `text-emphasize` selector. Copy the following code in your `index.css` file.

```CSS
.text-emphasize {
    color: #e3426d;
    font-family: SoraBold;
}
```

✅ You can emphasize different parts of text anywhere on your website by using the same technique.

###  📝 ✨✨✨ Advanced Task ✨✨✨ 

You can also emphasize different texts on your website by creating a tag like behaviour. 

Copy the following code in your `index.css`.

```CSS
.text-tag {
    background-color: #e3426d;
    color: white;
    padding: 5px;
    margin: 5 0;
    display: inline-block;
    letter-spacing: 0.1vw;
    position: relative;
}
```

The apply the class attribute to some of the `<span>` elements you have in `index.html`. 

For example, in your projects' sections.

First project html:

```HTML
<span class="text-tag">biology</span>
<span class="text-tag">chemical elements</span>
<span class="text-tag">invisible ink</span>
```

and second project html:

```HTML
<span class="text-tag">adobe XD</span>
<span class="text-tag">adobe illustrator</span>
```

###  📝 ✨✨✨ Advanced Task ✨✨✨ 

Another way to highlight your text is by creating a gradient. A gradient is actually a transation between two or more colors along a straight line.  

Wrap the word inside a `<span>` tag and set a class selector `text-highlight` on the `<span>` tag.

```HTML
<h1>Hello world, I am <span class="text-highlight">[type your name here]</span></h1>
```

With this CSS code you will create a gradient going from top to bottom with `f7cad0` and turning `#e3426d` at 30%. 

Copy the following CSS code in your `index.css`.

```CSS
.text-highlight {
    background: linear-gradient(180deg, #f7cad0 70%, #e3426d 30%);
}
```
✅ What will happen if you change `180deg` to `0deg`?

You can try creating different gradients using the following [link](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient).

###  📝 ✨✨✨ Advanced Task ✨✨✨ 

Let's try something even cooler. You are going to animate the `<span>` elements you were styling previously. 

The following CSS code tells the `<span>` elements with `class="text-tag"` to change the color from `#f7cad0` to `#e3426d` in 3 seconds. Also, to change the position from a certain position to another. The position is specified with the `top` property.

Copy the following code to your `index.css` file inside the existing style for the `text-tag` selector.

```CSS
.text-tag {
    background-color: #e3426d;
    color: white;
    padding: 5px;
    margin: 5 0;
    display: inline-block;
    letter-spacing: 0.1vw;
    position: relative;

    /* ANIMATIONS */
    animation-name: change-tag-background;
    animation-duration: 3s;
    top: 0;
}
```

You can define the animation `change-tag-background` with the following CSS code. 

We use the `from` property to define the background color and position of the text tag before the animation starts. We use the `to` property to define the background colod and position of the text tag after the animation is finished.

The animation will last for 3 seconds as defined with the property `animation-duration`.

```CSS
/* ANIMATIONS */
@keyframes change-tag-background {
    from {
        background-color: #f7cad0;
        top: -20;
    }
    to {
        background-color: #e3426d;
        top: 0;
    }
}
```









