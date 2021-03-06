
#  **App Title**:
A day in Space

[Link to live site](https://ginestah.github.io/A-day-in-Space/)

# **App Description**:
Access photo of the day from NASA API to display the photo of a users chosen day, as well as a description of the photo.
# **API**: 
1. I plan to use the NASA APOD API to fetch photos and descriptions.
[Link to API](https://api.nasa.gov/)
# **API Snippet**:
```{
    "date": "2018-05-12",
    "explanation": "A recent informal poll found that astronomers don't yet have a good collective noun for a group of black holes, but they need one. The red circles in this Chandra Observatory X-ray image identify a group of a dozen black holes that are members of binary star systems. With 5 to 30 times the mass of the Sun, the black hole binaries are swarming within about 3 light-years of the center of our galaxy where the supermassive black hole identified as Sagittarius A* (Sgr A*) resides. Yellow circles indicate X-ray sources that are likely less massive neutron stars or white dwarf stars in binary star systems. Alone, black holes would be invisible, but as part of a binary star system they accrete material from their normal companion star and generate X-rays. At the distance of the galactic center Chandra can detect only the brighter of these black hole binary systems as point-like sources of X-rays, hinting that many fainter X-ray emitting black hole binaries should exist there, as yet undetected.",
    "hdurl": "https://apod.nasa.gov/apod/image/1805/sgra_swarm_sources.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "A Plurality of Singularities at the Galactic Center",
    "url": "https://apod.nasa.gov/apod/image/1805/sgra_swarm_sources.jpg"
}
```
# **Wireframes**:
![Wireframe of mobile app](https://res.cloudinary.com/dpbzq29kr/image/upload/c_scale,w_222/v1611609482/Screen_Shot_2021-01-25_at_4.17.39_PM_vxivvq.png)

# **MVP**
1. Access photos and descriptions from NASA API
2. Append photos to the dom in a visually pleasing manner
3. Grab users input to find the photo on that day
4. Reset photo if another date is searched

# **Post-MVP**: 
1. CSS animations/warp speed to your photo
2. Enable full screen mode for immersiveness 
3. Possible saving of the photos you liked.
# **Goals**: 

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Jan 26| Project Approval + Pseudocode | Complete
|Jan 27| MVP | Complete
|Jan 28| Advanced styling| Complete
|Jan 29| Desktop styling | Complete
|Feb 1| Presentations/Project Submission | Incomplete

# **Priority Matrix**
![Priority Matrix](https://res.cloudinary.com/dpbzq29kr/image/upload/c_scale,w_700/v1611607939/Priority_matrix_oqpqrp.jpg)


# **Timeframes**: 


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Render applicable content to the DOM | H | 3hrs| 3hr|3hr|
| User search picture by date| H | 3hrs| 30mins|30mins|
| Adjust time for dates pre 1995|M|3hrs|3hrs|3hrs|
| Basic HTML and CSS| H | 2hrs|2hrs | 2hrs |
| Define flex items and containers| H | 2hrs|2hrs| 2hrs |
|Reset DOM if another date is searched, so no stacked photos|M|2hr|2hrs|2hrs|
|Media Queries for responsive design|L|3hrs|3hrs|3hrs|
|Further CSS styling|L|3hrs|3hr|3hr|
|Conditional to render video to DOM|H|2hrs|2hrs|2hrs|
|Allow session saving of photos|M|3hr|2hrs|2hrs|
|Disable search button if input field is blank|L|3hr|1hr|1hr|
| Total |H|32hrs|23.5hrs|21.5hrs|

# Code-Snippet
 display the photo description and copyright. The conditional checks to see if there is a copyright on the image, if undefined copyright is given to NASA APOD, otherwise the photographer is shown as copyright holder.

``` 
  // This if statement checks to see if there is an hdurl, if undefined it means there is a video, and so the video is shown.

if (data.hdurl == undefined) {
    let nasaVideo = `
    <iframe width='350vw' height='auto' src='${data.url}' allowfullscreen='allowfullscreen'>
    <p id="photo-explanation">${data.explanation}</p>
    <div class='copyright'>&copy;${data.copyright}</div>
    `
    let explanationContainer = document.querySelector('#explanation-container')
    explanationContainer.insertAdjacentHTML('beforeend', nasaVideo)
  } else {
  //if instead there is a photo the photo is appended with a description and the copyright info
    let nasaDescription = `
  <a href="${data.hdurl}" target="_blank"><img src="${data.hdurl}" alt="displayed photo" height='auto' width='50%'></a><br>
  <button id="save">Save Photo for Session</button>
  <p id="photo-explanation">${data.explanation}</p>
  <div class='copyright'>&copy;${data.copyright}</div>
```

# Change-log
Decided not to display the image as a background because it either came out distorted or didn't fit.

Switched back to flexbox

Renamed app to "A day in Space"

After shown a date that doesn't work realized some of the APOD data were videos instead of photos, implemented a conditional to check if video and imbed the youtube video into the page, with widescreen capabilities.

Some interesting dates for examples:
2-13-2011
8-13-2013
9-20-2011 (video)
2-5-2012


