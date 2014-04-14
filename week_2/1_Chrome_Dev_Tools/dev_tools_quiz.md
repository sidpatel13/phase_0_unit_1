#### Include an inline screenshot of your codeschool's points from the profile page:

Here is a screenshot:
http://min.us/i/Cia8aFIZDY4K

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS- Elements tab
  * Javascript Debugging- Console tab
  * Performance Optimization- PageSpeed(suggestions on how to improve page performance), Closure Compiler (Combine multiple JavaScript/Jquery pages into one), and Network(Check timeline to see how long it takes each one of your files to load and in what order) 

* What's the quick key for your OS to spawn the Dev Tools inspector?

Right click on the element and choose inspect element.

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)

hex color-#0b0f11
In RGB color space, hex #0b0f11 is composed of 4.3% red, 5.9% green and 6.7% blue.


  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/

  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

http://min.us/i/50HD0f3javFA (Screen Shot)
http://min.us/i/XeKqvQOZsUOB (Screen Shot w/ hover)


* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

“The most important things are not things” is part of the background image. It is an image on which the text is written.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website?

The background image for the logo for tickets wizard is the largest. 
	 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

I looked at the page and out of the images I saw, I noticed the tickets wizard logo seemed to be the largest. I inspected the element and by clicking on the html tab I was able to see what the css code was. As I inspected #Header, I saw that the background-image had width of 980px and height was 165px. It was the largest.


* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest
 hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?

There are many: Minimize request size, Specify image dimension, specify a cache validator, etc. The easiest it seems would be putting the CSS in the document lead. 