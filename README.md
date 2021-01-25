
- **App Title**: Happy Space Day
- **App Description**: Access photo of the day from NASA API to display the photo of a users chosen day, as well as a description of the photo.
- **API**: 
1. I plan to use the NASA APOD API to fetch photos and descriptions.
[Link to API](https://api.nasa.gov/)
- **API Snippet**:
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
- **Wireframes**:
![Wireframe of mobile app](https://res.cloudinary.com/dpbzq29kr/image/upload/c_scale,w_222/v1611609482/Screen_Shot_2021-01-25_at_4.17.39_PM_vxivvq.png)

- **MVP**
1. Access photos and descriptions from NASA API
2. Append photos to the dom in a visually pleasing manner
3. Grab users input to find the photo on that day
4. Reset photo if another date is searched

- **Post-MVP**: 
1. CSS animations/warp speed to your photo
2. Enable full screen mode for immersiveness 
3. Possible saving of the photos you liked.
- **Goals**: 

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Jan 26| Project Approval | Incomplete
|Jan 27| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Jan 28| Initial Clickable Model  | Incomplete
|Jan 29| MVP | Incomplete
|Feb 1| Presentations/Project Submission | Incomplete

- **Priority Matrix**
![Priority Matrix](https://res.cloudinary.com/dpbzq29kr/image/upload/c_scale,w_700/v1611607939/Priority_matrix_oqpqrp.jpg)


- **Timeframes**: 


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Grabbing input data to choose API Data to render on DOM | H | 3hrs| 0|0|
| Basic HTML and CSS| H | 1hrs|0 | 0 |
|Reset DOM if another date is searched, so no stacked photos|M|1hr|0|0|
|Media Queries for responsive design|L|3hrs|0|0|
|Add CSS animations|L|3hrs|0|0|
|Further CSS styling|L|3hrs|0|0|
|Utilize second API for full screen mode|L|2hrs|0|0|
| Total |H|17hrs|0|0 |
