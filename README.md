# TDDnD Dice Roller

Howdy. This is a small Test Driven Dice Roller Application that I created as a coding sample. I built this application as a way to showcase what I believe is good code, which includes Test Driven Development, File Organization, and Passion.

## Getting Started and Running Tests

The site is currently hosted [here](https://hidden-forest-72429.herokuapp.com/) with TravisCI implemented for testing.

However, you can go ahead and copy and paste the following code into your terminal to checkout the code itself. This is also where you can find the code coverage using Istanbul.

git clone https://github.com/aaronleebrooks/tdd_dice_roller.git
npm install
npm test

## Test Driven Development 

First off, I believe that Test Driven Development is the best way to code. Everything can't go according to plan if there is no plan. I typically start by thinking of very high level design of the application. I think about broad user stories. 

I use those high level designs to create lots of low level designs. This is where I hone in on what features I should implement and how. 

After I have the low level designs, I think about psuedo code and get a feel for how the application should work. I use these low level designs to create my tests. I work test by test, writing a test, watching it fail, and then making it pass through coding the specific function.

At every step, I can confidently continue knowing that my code is giving me exactly what I expect to receive. I like working from test to test and feature to feature. These checkpoints keep me focused and productive. This process also helps me debug and ask questions better because I know exactly what isn't working and why.

In this application, I also made sure to include my coding coverage. I know how important code coverage is to large applications and making your tests are relevant to a functioning application.

## File Organization

The best part of any video game is inventory management. Just kidding. However, file management is incredibly important, especially when you are working with larger applications with dozens of components, hundreds of assets, and lots and lots of code.

Components that are going to be used across many different components, such as buttons, text inputs, or navigation bars, should be separate components so that can be reached from other larger components.

Assets should also go in specific folders named so that they can be easily found and referenced throughout the application. 

## Passion

Lastly, and most importantly, your code should come from a place of passion. I built this application because I am a Dungeon Master for two different Dungeons and Dragons games, and I love pretty much anything with a sword or wizards.

But in addition to being a total nerd, I am passionate about software development. Currently, I have been a full-time software developer for less than a month. However, I feel like an absolute wizard. I am using all of the skills that I learned through my coding bootcamp, and getting better and better every day. I can feel myself becoming more fluent with my code and overcoming obstacles quicker. I am figuring out what questions I need to ask and what technologies I need to learn in order to reach that next milestone quicker. I have jumped head-first into the technology pool, and realizing that I have the skills to swim.

## Built With

* [React](https://reactjs.org/docs/hello-world.html) - The web framework used
* [create-react-app](https://github.com/facebook/create-react-app) - Used to bootstrap the application
* [Enzyme](http://airbnb.io/enzyme/) and [Jest](https://facebook.github.io/jest/)- Used for testing

## Authors

* **Aaron Brooks**