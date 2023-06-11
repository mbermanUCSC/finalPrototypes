# Core Gameplay
A demonstration of different scenes from 'The Report' including  

Audio:
    Continuously looping background sound: our game and prototype will show off two separate looping sounds. One is played when the player is being chased, the other is played when the player is wondering around or is in a safe area.
    Sound effects: we have sounds effects for a wide variety of inputs from the player consisting of, opening and closing closets, writing to the desk, opening and closing file cabinet, walking around, heartbeat when hiding, door creak for monster entering room, and picking up an item

Visual:
    image-based assets: we have a sprite sheet for the player animations in order to have seemless movement. We also have multiple sprite sheets for the player and monster dialogue in order for multiple emotions.
    A shader based visual effect: we have multiple shader implementations. Firstly we have the background and walls change color whenever the player is hiding in order to give the perspective of being inside a dark closet. Secondly when we interact with the desk the background becomes grayscaled and the game is paused. Finally the file cabinet and the item both display an item and when these are displayed the background is gray scaled and paused as well.

Motion:
    For motion we allow our character to have 4 directions they are able to move around in based on physics movement. These motions are matched with an animation to help the player feel like they are moving from one point to another.

Progression:
    The progression that was implemented in the prototype is a simplified version of the games overall progression. In the game itself you will need to obtain up to 12 notes which correspond to four different questions with three possible answers each. In the prototype it is limited to one of the four questions. The notes themselves are one of the forms of the progression as without the notes you will not get those answers in the desk. The prototype has all three of the available notes before the desk to show the progression quickly. The items are shown in the bottom right and can be looked at in the file cabinet in order to review what you have collected.

Prehabs:
    Creation of Scene subclasses: We have multiple different kinds of scenes. Specifically all three of our unique endings which are based on a karma system are unique



All image assets, audio assets, and code were created by:  
Jackson Nadler-Block, Miles Berman, Nicholas Schetman, and Finn Depuy