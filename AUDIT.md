# Performance matters audit

This audit contains the benefits of optimizing a website to perform better for an user. A copy of the Bootstrap site was made with a few modifications.

## Challenge
All the tests were done on a slow internet connection Regular 2g (300ms, 250kb/s download, 50kb/s upload). These slow internet speed tests emulate how people with a slow connection experience a website.

### Before
The site took 42 seconds to completely load and 19.59s to load the DOM(Document Object Model HTML) contents.

![Before](https://github.com/eltongonc/performance-matters/blob/master/screenshots/begin-unedit.png)

As seen on the picture above, the images and fonts are the biggest in size and take the most time to load.

### After
The site currently loads all assets depending the size of the screen in about 10 seconds and  takes about 5 seconds to load the DOM content.
![After](https://github.com/eltongonc/performance-matters/blob/master/screenshots/last.png)
To achieve these results I
- Added critical css the load style async above the screen fold.
- Made four versions of the images: Small, Medium, Large and an .webp format.
- Wrapped images in a picture element. This renders an image depending on the width of the screen.
- Made the custom fonts load async.
- Minified and compressed all CSS and JavaScript.
- Used gulp to bundle files.

With all these optimization i received a score of 100/100 for both mobile and desktop on [Google's Pagespeeds insight](https://developers.google.com/speed/pagespeed/insights/)
![After](https://github.com/eltongonc/performance-matters/blob/master/screenshots/page-insight.png)

and an 98% speed on [GTmetrix](https://gtmetrix.com/)
[GTmetrix](https://developers.google.com/speed/pagespeed/insights/)
![After](https://github.com/eltongonc/performance-matters/blob/master/screenshots/gtmetric.png)

### View
To view the difference change to `branch features`
run `npm install && npm start` in the commandline.
View the difference in the developer tools

## Authors
A copy of the Boostrap site was made by [Declan](https://github.com/decrek) and optimized [me](https://github.com/eltongonc)
