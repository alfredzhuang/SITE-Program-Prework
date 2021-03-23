# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Alfred Zhuang**

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/odd-shrouded-butter

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Add a level counter
- [ ] Add high scores
- [ ] Allow users to choose the specified length of the game

## Video Walkthrough

Here's a walkthrough of the memory game:
![](http://g.recordit.co/JDjDpHy0Ln.gif)
Created using <a href="https://recordit.co/">Recordit</a>

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. <br><br>
To help complete my submission, I used resources such as <a href="w3schools.com">W3Schools</a> and <a href="stackoverflow.com">Stack Overflow</a> to either figure out how some of the functions worked that were required to tackle certain problems or to troubleshoot how to remove/change an encountered unwanted functionality of the program.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) <br><br>
A challenge I encountered in creating the submission was trying to figure out how to approach the way I wanted to implement some of the optional features of the program. For example, for speeding up the game, I was never sure how quick the game should progress by, and so I had to test around with a lot of numbers before I found the one that felt the most comfortable to increase the speed by for each round. Another example would be when I was working on the timer functionality of the game, I had to figure out how long the timer should be and in the game when do I need to be clearing or restarting the timer for the next round. To overcome this problem, I tried stopping and starting the timer at many different scenarios in the game until I felt that it felt the most natural, and once I got that problem down, I decided the length of the timer by playing the game myself a lot until I felt that there was a time that fit that felt both challenging for the player and doable. I think that looking back, when it came down to how to overcome the challenges, it was very effective to first think about what the problem was and then tackle it one step at a time, simplifying the problem and its intricacies. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) <br><br>
After completing my submission, I wondered how maybe different frameworks or different libraries could have been used to come up with the same exact game, and how it would have compared to the code I wrote in terms of simplicity or speed. On top of that, because things like the timer were created using the interval commands from Javascript, I wondered if there was a simpler approach to the one that I used and if it would have been quicker in terms of implementation or load times. I also wondered how I could possibly create a multiplayer game out of this, where users could be able to start a match against one another, where each game would start at the same time but the one who makes it to the higher level would win. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) <br><br>
If I had a few more hours to work on this project, I would spend them on adding features that would make the user experience more enjoyable. For example, things that I put under additional features like a high score or a multiplayer version of the game would be fun to implement and would help to add a level of fun to the gameplay experience for the player. As for the code itself, I think that to improve it, with the extra time I probably would have spent some of it tidying up the code or refactoring the code, because I think that it is not as neat as it could be.

## License

    Copyright Alfred Zhuang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
