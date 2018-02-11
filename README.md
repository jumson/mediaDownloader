# mediaDownloader
Objects in the browser may initiate downloading media tat are not immediately availibe through hypertext links.
Using Chrome Developer mode, and monitoring the network stream, these media can be observed downloading.
Often, sitres like lynda.com allow you to select the next video. So clink all the videos in order, observing them show up in the stream.
There is no need to load the viedo or watch it at all. Only the link to it is needed.

This record can be saved as a HAR file for further analysis.

These scripts parse out a .har file for a particular media type.
It creates a csv that lists the media links.
Then it downloads the files.
Tested with 12 videos at once at skillport.com (used media='.mp4')
Tested with a 10 video lesson at lynda.com (used media='mp4')

To use the scripts, I simply place them in the same directory as the HAR file, open a command window:
```
C:\Users\user\Downloads\lynda\course1> node
> var vd = require('./vidDown.js')
> vd('lynda.har','mp4')
```
