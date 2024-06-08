[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ex6pWDJu)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15138695&assignment_repo_type=AssignmentRepo)
## Creative Coding 2: Custom Pixel

Data Mapping: AI Camera

I was immediately inspired by the idea that this could be a sort of IQ test for AI. My initial idea was inspired by an interview featuring Geoffrey Hinton, who spoke about feeding a model training data with 50% error (ie. incorrect, misleading information). I wondered how this might be implemented within this assignment, and what effects it might produce. For instance, if I used dogs as my subject, I wondered what would happen if half of the photos’ masks might feature dogs highlighted and the other half featured other random elements highlighted (and not the dogs). This would require plenty of trial and error - unfortunately, sickness meant that I wasn’t able to use the university computers as much as I would have liked, so I moved on and parked this idea.

My next idea was to purposely use a very vague or general theme. I still liked the idea of conducting an ‘AI IQ test,’ so I decided to collect a range of images where an element is askew or unusual (but there is no visual commonality between them apart from this). Sets of tiles or other tessellated objects (where one tile is misplaced) seemed like particularly good visual examples. I thought that this concept could be shown visually by inverting the pictures’ colours in the area where a misplaced object is identified. 

I ran this, and the AI was unable to identify my concept (and hence make masks). I thought that this was interesting, and figured that I would need to provide simpler examples. Tom suggested using inputs where the objects that are out of place are differently coloured or larger. He then (kindly) added that he’d be able to run a few files for me, so I decided to move back to my idea of feeding the AI semi-erroneous data, as this really fascinated me. 

I used my watch as the ‘semantic layer’ to be identified, reasoning that it’s a relatively simple object. I took various photographs of it, making sure that it was always in the same position and lighting, but with different objects next to it. I then fed the AI three masks that highlighted the watch, and two that highlighted other objects near the watch (a red dot and my wallet). Once again, the AI was unable to provide a masked output that fit my theme. 

I then provided a new input image, which featured my watch (in the same sort of position and lighting) and a computer mouse. I fed it to the AI and… it got it wrong. It masked the mouse. Perfectly. Once again, the AI’s mistake proved to be just as interesting as a correct output would have been. 

I then fed the AI a new set, once again with a mixture of ‘correct’ and ‘incorrect’ masks… and this time it got it right! This was exciting! I decided that somehow showcasing this improvement would fit my ‘AI IQ test’ theme - what I had found was that although it had struggled initially, it had learnt over time to distinguish what it should be identifying, in the same way a human might.  

While I experimented with this, I began working on the code - how the imagery is presented. I was still enamoured by the idea of inverting the selected elements, and found that this effect looked best in greyscale (using HSB with no saturation). I achieved the ‘inversion’ effect using a technique showcased in class, where the mask image is used to conditionally invert the brightness of the source image's pixels. If a pixel in the mask image’s red channel value is greater than 128 (ie. the semantic layer/the mask’s white ‘highlight’), its brightness is inverted and a new colour is created with this new, inverted brightness, which is applied to the source image pixel. If the mask image pixel’s red channel value is not greater than 128, a new colour is created with the same hue and brightness but zero saturation, and this pixel is set to this new colour (ie. the rest of the image is grayscale). This is done 40 horizontal lines at a time until the image’s 1080 pixels are processed. 





