

## Breakdown of time 

Browser used: Firefox (99.0.1)

Hello I hope your well, I have broken down how I spent the time on this tech test and how I apporached it.
I spent 20 mins looking at Twitter and Artist design website to get an idea of layout and styling as seen in my sketching.
I utilised the layout from Twitter and tried to bring in some of the styling from Artist design like colour pallet and I would like to add animated outline if I find time.
I spent around 2 hours on the building out the cards and arranging the layout and styling and about an 45 mins working on validating and building the form. Finaly I spent by about 30+ mins on Timing however this is an area for personal improment.
Blow I have listed some of the thoughts I had during the procces and why I have done ceritan things.
- I was going to use grid or columns to make it 2 wide however Twitter is only a single column to I replicated that however it would be easy to change the layout to be 2 or more wide.
- I added the form as a Modal, I was unsure how it was desired to be displayed but this seemed like a clean way to implament the form.
- I have used Validation in many apps but for this prject and with the time I just checked that the user has used all inputs however I understad how to check with regex if that have used @ in emails and cuirtain caracters in the password.
- Mesuring time is something newer for me so I had to resarch this and implament somthing simple. This is an area I would be want to learn more about as it is very important to making the site run smoothly.
- Having come back from Typescript I had to check a few things as I went however these were not an issue just a reminder on syntax.

## Set up

This repo is a slightly modified Create React App and an Express server which serves a JSON feed of images.

- Clone the repo and run `npm install`

- `npm run serve` will run the server

- in another terminal window `npm run start` will start CRA

After this, CRA will open a tab with the app running, usually `localhost:3000`. If you look in `src/App.js` you'll see the API call to the server is already made and will console log out the results.

#### Note

- The server and CRA are watching the relevant files and will hot reload if any changes are made.

- Feel free to modify or install whatever code you feel is necessary. If installing packages which are wrappers for native browsers APIs please leave a comment explaining why.

## Tasks

### 1. UI development

Create a responsive UI to display the images returned by the API.

The aim is to demonstrate your experience and knowledge of HTML, CSS, JS and React features; and demonstrate creative thinking in how images can be presented and manipulated.

Images aren't optimised and their dimensions are varied, there are .jpg and .webp versions on s3, so you will need to take this into account.

#### Inspiration:

https://twitter.com/andybarefoot/status/1251844621262602242

http://www.artist-developer.com/

#### Some ideas to get you started:

Resizable thumbnails

Modal to review full size images

Image effects or filters


### 2. Performance

The API that is returning images is rather slow. Show how it can be sped up, and show how you would measure the improvement in performance.


### 3. Forms

One of the oldest yet trickiest parts of web development is forms, so we’d like to see how you handle them.

Add a form to your app with the following fields. The form doesn't need to submit to anywhere, but must validate on the client.

- [ ] Name
- [ ] Email
- [ ] Date of birth
- [ ] Favourite colour
- [ ] Salary (using a range input)


## Time allowed

We appreciate that your time is valuable and recommend you not spend more than 2 hours on these tasks.

## Notes

The goal of the test is to prove your understanding of the concepts of modern HTML/CSS/JS, but not to produce something production ready or pixel perfect.
Your work will be tested in the browser of your choice, so please specify this when submitting. This can include pre-release browsers such as Chrome Canary or Safari Technology Preview if you want to work with experimental features.
