# Week 4 Example 1: Getting Over It Story

## Setup and Interaction Instructions

Setup Instructions
To run this multi-file game locally without hitting browser security blocks or layout clipping, follow these steps:

Flatten the Directory: Ensure all 15 .html files, 15 .js files, scenes.js, and game.js are sitting directly in the main root folder of your project. Do not place them inside subfolders.

Open in VS Code: Launch VS Code and open your project folder (File > Open Folder...).

Launch Live Server:

If you haven't already, install the Live Server extension in VS Code.

Right-click on your entry file—index.html—and select Open with Live Server.

Maximize the Browser Window: Make sure your web browser window is maximized/full screen. Because the game is vertically centered, a tiny window will slice off the canvas and hide your choice buttons.

Interaction Instructions
Once the game is running in your browser, here is how a player interacts with the world:

The Canvas Window: The entire narrative takes place within a centered, 800x450 canvas window styled to resemble the punishing, atmospheric sunset mountains of Getting Over It.

Reading the Narrative: Each screen presents a short story text at the top detailing your current altitude, obstacles (like branches, chimneys, or lanterns), and immediate dangers.

Hovering for Feedback: Move your mouse cursor over the two action choices at the bottom of the screen. The buttons are programmed with interactive hover logic: they will shift from dark rusted iron to a lighter steel tone with an orange border to show they are clickable.

Making a Move: Left-click a button to make your choice. The game uses instant, smooth client-side routing to load the next branch of the story without any jarring loading screens.

Navigating Endings:

If you find a path to the summit, you will hit a Victory Ending Screen celebrating your success.

If you make a mistake, you will hit one of the Failure Ending Screens. These will display a punishing, randomized philosophical quote from Bennett Foddy to match the frustration of the original game.

Restarting: Every final ending screen contains a single button ("Start Over" or "Play Again"). Clicking this button wipes the slate clean and seamlessly throws you right back to index.html inside your cast-iron cauldron at the base of the mountain.


## Assets

No external assets used.

## References

N/A
