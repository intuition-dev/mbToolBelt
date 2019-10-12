
### Web Animations API

With the Web Animations API, we can move interactive animations from stylesheets to JavaScript, separating presentation from behavior.
Before this API that is built into the browser, we would use GSAP.

### How to:

1. The first thing we need is to create a animation code.
   Move the block from right to the left by X axis:
`
   var moveTrack = [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' },
   ];
`

2. We’ll also need to create an object of timing properties
   The Web Animations API takes milliseconds
`
   var trackTiming = {
      duration: 3000,
      iterations: Infinity
   }
`

3. Bring the pieces together
   Now it’s time to bring them both together with the Element.animate() method:
`
   document.getElementById("your_moving_track").animate(
      moveTrack,
      trackTiming
   )
`

#### And boom: the animation is playing

Dive deeper:
- http://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats 
- https://keyframes.app/editor
