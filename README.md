<!-- # [Awesome Landing Page - Free Bootstrap Page](http://demos.creative-tim.com/landing-page) -->

<h1 align="center">
  Image Resizer
  <br>
</h1>

<h4 align="center">An image resizer tool using node and express</h4>

<!-- <div align='center'> 

  <img src='https://img.shields.io/badge/Version-v1.2-gray?style=for-the-badge'>
  
  <a href='https://abdelrahmanhs86.github.io/CreativeAgencyTemplate/' target="_blank">
  
<img src='https://img.shields.io/badge/Live Preview-green?style=for-the-badge'>
  
</a>
  
</div> -->

<br>

<!-- ![alt text](./mobile%20screen%20copy.jpg "Awesome Landing Page") -->
<!-- <p  align="center"><img width="800"  src="https://github.com/AbdelrahmanHs86/Readme-Expreriment/blob/main/iPhone%20copy.jpg" /> </p> -->
<!-- <p  align="center"><img width="800"  src="https://github.com/AbdelrahmanHs86/Readme-Expreriment/blob/main/Web-Showcase-Project-Presentation.jpg" /> </p> -->

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Features:](#features)
- [Tools and Languages:](#tools-and-languages)
- [Quick start](#quick-start)
- [Usage](#usage)
- [Scripts Included](#scripts-included)
- [Files included](#files-included)
- [Useful Links](#useful-links)

<!-- - [Server Rendering](#server-rendering)
- [Components](#components)
- [Optimizations](#optimizations)
- [FAQ](#faq)
- [API](#api)
- [Installation](#installation)
- [See Also](#see-also)
- [Support](#support) -->

## Features:
- Resize images by providing (in the form):
  - filename
  - width
  - height
- Save Resized images locally
- Cache already resized images with the same query

<!-- ## Links:

<a align="center" href='https://projects.colegaw.in/well-app?utm_source=GitHub&utm_medium=readme&utm_campaign=well_app_readme'>
  
<img src='https://img.shields.io/badge/HOMEPAGE-gray?style=for-the-badge'>
  
</a>

+ [Live Preview](https://abdelrahmanhs86.github.io/CreativeAgencyTemplate/) -->

## Tools and Languages:
- Typescript and Jasmine (Type checking and testing)
- Nodejs and express (Running server and logic code)
- Sharp lib (Resizing images)
- Eslint and prettier (Code check and formating)

## Quick start

Quick start options:

- [Download from Github](https://github.com/AbdelrahmanHs86/Image-Resizer.git).
- or clone the repo: `git clone https://github.com/AbdelrahmanHs86/Image-Resizer.git`.
- ``` npm install ```
- ``` npm run start ```
  
## Usage
- At "/api" route you will have an Html form to get in queries
  <p  align="center"><img width="500"  src="https://github.com/AbdelrahmanHs86/Image-Resizer/blob/master/Readme/home_endpoint.png" /> </p>
- Or you can type them manually as wanted
- Url after entering quieries: ``` "/api/resize?filename=img1&width=500&height=500" ```
- result:
    <p  align="center"><img width="500"  src="https://github.com/AbdelrahmanHs86/Image-Resizer/blob/master/Readme/result_endpoint.png" /> </p>

## Scripts Included
```Javascript
"build": compiling typescript to javascript
"start": compiling typescript to javascript then start compiled code
"dev": run and watch the code for any changes using nodemon
"format": applying prettier rules to code
"lint": lint the code using eslint 
"lint:fix": lint the code and fix errors using eslint 
"jasmine": test the compiled code
"test": build then test the compiled code in build folder
```

## Files included

Within the download you'll find the following directories and files:

```
image-resizer/src/
├── Images/
|   ├── Original
|   ├── Resized
├── middlewares/
|   └── imgResizer.ts
├── modules/
|   └── isExist.ts
├── routes/
|   ├── api
|   |   └── resize.ts
|   └── index.ts
├── tests/
|   ├── helper
|   ├── middlewares
|   |   └── imgResizerSpec.ts
|   ├── modules
|   |   └── isExistSpec.ts
|   └── indexSpec.ts
└── index.ts


```

<!-- ### Version logs

V1.2
- Refactored with HTML5 and CSS3
- Added responsiveness for mobile and tablet
- Used flexbox layout system
- Seperated CSS files for reusability

V1.0 - Original Release
- HTML4 and CSS
- No responsiveness  -->

<!-- 
V1.2 20 Jul '15 - Added 2 showcases
- Showcase 1 - Music App Presentation Page, view it here.
- Showcase 2 - Custom Scene Web Presentation Page, view it here.
- bugfixing
- parallax improvements
- gradients changes for a better quality

V1.2.1 25 Feb '16 - Change to confusing PSD text
- text adjustments

V1.2.2 10 Feb '17 [current version]
- switched to MIT license.  -->


<!-- ### License

- Copyright 2017 Creative Tim (http://www.creative-tim.com)
- Licensed under MIT (https://github.com/creativetimofficial/awesome-landing-page/blob/master/LICENSE.md) -->


## Useful Links
Sharp Documentation: https://sharp.pixelplumbing.com/api-constructor

<!-- More products from Creative Tim: <http://www.creative-tim.com/products>

Tutorials: <https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w>

Freebies: <http://www.creative-tim.com/products>

Affiliate Program (earn money): <http://www.creative-tim.com/affiliates/new>

Social Media:

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://instagram.com/creativetimofficial> -->
