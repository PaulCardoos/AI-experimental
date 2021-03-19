# README
Visit the application here on https://recogniz.herokuapp.com/

This is a simple project that was built to get familiar with uising rails and react on the frontend. It uses the 
tensorflow COCO-SSD and BERT models 

The how it works page is a description of the models used. That is self explanitory. The object detectection tab
on the sidebar takes and image and will accuratley predict what is in the image using a model 
from tensorflow.

<img src="./objDetectionModelEx.png">

The second model takes in any passage and allow you to ask question about it. I chose a passage about eliud
kipchoge for the example but it really can be anything. 

<img src="./nlpExample.png">

In the example above I ask the model about Tom Brady. Sometime the model does not understand what the question is
and I admit that I need to find a better way to display that no results were found which is easy to do, just being 
lazy. Also, sometime the model does recognize the questiojn. AI is not perfect...yet.


This project uses Ruby version 2.7.2. You can build the project by cloning the repository and 
running 
```
npm i 
rails server
```
Warning: The models are large and take a few seconds to load

feel free to fork the repository and contribute