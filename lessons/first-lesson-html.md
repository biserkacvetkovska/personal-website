# Personal website - First lesson (HTML)

## Prerequisites

For this lesson, we will be using Visual Studio Code to create a personal website.
If you do not have Visual Studio Code installed on your computer, please use a text editor like Notepad++ or similar.

## Introduction

HTML, or HyperText Markup Language is the body or the so called "skeleton" of your website. You will later see that the HTML's syntax even reflects that idea, as it is always consisted of the following tags: "head", "body", and "footer".

In this lesson, we're going to use HTML to create the "skeleton" of your personal website. 
Your personal website will be consisted of:
- A banner
- A single row that will give a short presentation of yourself
- A "Projects" section that will showcase the projects you have worked on
- An "Education" section that will contain your education
- Two additinal columns that will contain your interests
- Footer that will contain links to your social accounts (Instagram, TikTok, Twitter, ...)


To better visualize the website that you will be building, take a look at the following GIF.👇 
![This is the website you will build](../photos/personal-website-gif.gif)


🌟 By the end of this lesson, you will be able to see the rows and columns, but the website will look a little strange; don't worry, in the next lesson you will add CSS styles to the website to make it look better.

### 📝 Task

On your computer, create a folder called 'personal-website'. 

Open Visual Studio Code and from the File menu choose 'Open Folder...'. In the dialog window, navigate to the 'personal-website' folder and click 'Open'. From the File menu then choose 'New File' and create a new file named 'index.html'.

## HTML Tags

### The `html` tag

The first line in the HTML "skeleton" is the `<html>` opening tag, followed by its closing tag `</html>`. These tags are the root elements of your website. It is important to note that HTML tags are always used in pairs: an opening tag `<>` and a closing tag `</>`.

For example: `<p>Hello</p>` to indicate a paragraph.

### 📝 Task

Add these lines at the top of your `index.html` file:

```HTML
<html></html>
```

### The `head` tag

The 'head' area of the HTML document includes crucial information about your web page, also known as [metadata](https://developer.mozilla.org/docs/Web/HTML/Element/meta). In our case, we will define the following four things:

-   the page's title
-   page metadata including:
    -   the 'character set', telling about what character encoding is used in the page
    -   browser information, including `x-ua-compatible` which indicates that the IE=edge browser is supported
    -   information about how the viewport should behave when it is loaded. Setting the viewport to have an initial scale of 1 controls the zoom level when the page is first loaded.

### 📝 Task

Add a 'head' block to your document in between the opening and closing `<html>` tags.

```html
<head>
	<title>Personal website - [type your name here]</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

✅ What would happen if you set a viewport meta tag like this: `<meta name="viewport" content="width=600">`? 
Read more about the [viewport](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

### The `body` tag

Create your websites's body by adding a set of `<body>` tags inside the `<html>` tag pair; your markup now looks like this:

### 📝 Task

```html
<html>
	<head>
		<title>Personal website - [type your name here]</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

Now, you can start building the elements that will represent your banner, short introduction, projects, interests, etc. Normally, you use `<div>` tags to create the separate elements. We'll create a series of `<div>` elements inside the `<body>` tag. 

`<div>` elements are so called block elements which means that is always starts on a new line, and the browsers automatically add some space (a margin) before and after that element.

Inside each `<div>` element, you can create other HTML elements. The `<div>` element acts as a container or a holder for the other elements. 

### 📝 Task

The website you are building will be consisted of two main elements: one is the banner the second is the content. Let's create the `<div>` elements representing the banner and the content.

Add the following tags inside the `<body>` tag.

```html
    <div id="banner"></div>
    <div id="content"></div>
```

The `id` attribute uniquely identifies an HTML element. If we look at the above example, this means that, there will only be one element in the whole HTML with `id="banner"`.

Let's add some text in the banner element. 

### Headings

Headings are used to display text. There are 6 different headings that can be used from `<h1>` to `<h6>` depending on the importance of the text you want to display.

For example, we use `<h1>` to display main text such as titles.

### 📝 Task

Insert the following tags inside the `<div id="banner">` tag.

```html
    <div id="banner">
        <div>
            <h1>Hello world, I am [type your name here]</h1>
        </div>
    </div>
```

Both `id` and `class` attributes allow us to apply different styles or behaviours on the html element that contain those attributes. These especially come in handy when using CSS to style the website or using JavaScript to make the website 'alive'. 

### Images

Adding images is done through the `<img>` tag. The `<img>` tag accepts the `src` parameter, which defines the path of the image that we want to display. 

### 📝 Task

Insert the following tags inside the `<div id="banner">` tag.

```html
    <div id="banner">
        <div>
            <h1>Hello world, I am [type your name here]</h1>
            <img src="./assets/avatar.svg" />
        </div>
    </div>
```

Now that we have the banner, let's create the content.

Let's create the first row which will contain a short description about yourself.

### 📝 Task

Insert the following tags inside the `<div id="content">` tag. 

The `<p>` tag is used to define a paragraph and is also a block element, meaning that will always start in a new line. You can change the text inside the paragraph to something you like.

You can also see that we use here another heading tag `<h2>` and the of the text is significantly smaller than the main text wrapped inside the `<h1>` tag.

```html
    <div id="content">
        <p>I am a high school student interested in science, technology and design.</p>
    </div>
```

✅ What would happen if you set change the text in the paragraph tag? This is an example text, you can replace this text with whatever text you want. 

After the single row that will showcase a short description about yourself, we will create two different elements that will represent two different projects on which you have worked.

### 📝 Task

Insert the following tags inside the `<div id="content">` tag after the first `div` element.

In the html code below, you will also use the `<span>` tag. The `<span>` tag is an inline element that can be used as part of a `<p>` element to mark up a part of a text and can be easily styled with CSS.

```html
    <div id="content">
        <div>
            <p>I am a high school student interested in science, technology and design.</p>
        </div>

        <h2>Projects</h2>
        <div>
            <h3>Science project - Invisible ink</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dolor justo. Etiam rutrum odio vitae
                libero luctus, eget varius velit ornare. Duis dapibus feugiat odio.
                Cras semper faucibus nibh nec dapibus. Maecenas lacinia nisi et quam laoreet, vel lacinia urna
                facilisis. Proin auctor mi quis quam suscipit facilisis.
            </p>
            <p>
                <span>biology</span>
                <span>chemical elements</span>
                <span>invisible ink</span>
            </p>
        </div>

        <div>
            <h3>Design project - Personal portfolio</h3>
            <p>
                Nam in sapien augue. Maecenas in lorem viverra, viverra justo non, posuere libero. Duis quis metus
                convallis, maximus justo eu, posuere velit. Proin purus nunc, interdum at tortor a, aliquam
                facilisis sem. Vivamus leo justo, sollicitudin sit amet elit id, tincidunt auctor ligula. Mauris ac
                aliquam lorem. Proin auctor mi quis quam suscipit facilisis.
            </p>
            <p>
                <span>adobe XD</span>
                <span>adobe illustrator</span>
            </p>
        </div> 
    </div>
```

### 📝 Task

Let's display your education next. 

Copy the following tags inside the `<div id="content">` tag after the last closing `</div>` tag.

```html
    <div>
        <h2>Education</h2>

        <div>
            <h3>Master of Science</h3>
            <p>May 2016 - Sep 2018 University of Ljubljana</p>
            <p>Pellentesque pellentesque a neque eu efficitur. Quisque id vehicula justo. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras a nisl sapien.
            </p>

            <h3>Bachelor of Science</h3>
            <p>May 2012 - Sep 2016 University of Ljubljana</p>
            <p>Pellentesque pellentesque a neque eu efficitur. Quisque id vehicula justo. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras a nisl sapien.
            </p>
        </div>
    </div>
```

### 📝 Task

Lastly, to showcase your interests, we will use a list. 

The html tag for list is `<ul>`. Inside every list we have list items which are represented with the `<li>` tag.
For example, if you want to create the following list in HTML:

* List item 1
* List item 2
* List item 3

Copy the following HTML in you `index.html` file.

```html
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
```

Let's add two lists for your interests inside the `<div id="content">` tag after the last closing `</div>` tag.

```html
<div>
    <h2>Interests</h2>
    
    <div>
        <ul>
            <li>Skiing</li>
            <li>Swimming</li>
            <li>Mountaineering with friends</li>
        </ul>
    </div>

    <div>
        <ul>
            <li>Rotary club member</li>
            <li>Science club</li>
            <li>Tutoring math</li>
        </ul>
    </div>
</div>
```

### 📝 Task 

If you remember, at the beginning of this first lesson, we said that the HTML "skeleton" is consisted of: 
* head
* body
* footer

So far, you have created the head and the body. Let's create the footer now. To create the footer, you will use the `<footer>` tag. 

Copy the following HTML tags in your `index.html` right before the closing `</body>` tag.

```HTML
<footer>
</footer>
```

### 📝 Task

In the footer you will display links to your favourite social network accounts (Instagram, TikTok, Twitter, ...).

To create a link on your website, you will use the `<a>` tag. The `<a>` tag needs an `href` attribute which specifies the destination of your link. 

For example, if you want to create a link that goes to Twitter, you will do something like this:

```HTML
<a href="https://twitter.com/">Go to Twitter</a>
```

The text "Go to Twitter" can be changed to whatever you want to display on your website. 

To create three links on your website inside the footer, copy the following HTML tags inside the `<footer>` tag in your `index.html`.

```HTML
<footer>
    <a href="https://twitter.com/">Twitter</a>
    <a href="https://instagram.com/">Instagram</a>
    <a href="https://tiktok.com/">TikTok</a>
</footer>
```

That's it for this first lesson! Bravo! 👏 👏 👏

Now you have the content and most of the elements required to build your personal website. 🎉 🎉 🎉 

In the next lesson we will change the font, apply coloring 🎨, position and 💫 style 💫 everything properly.