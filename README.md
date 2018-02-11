# mediaDownloader
Objects in the browser may initiate downloading media that are not immediately availibe through hypertext links.
Using Chrome Developer mode (F12), and monitoring the network stream tab, these media can be observed downloading.
Often, sites like lynda.com allow you to select the next video. So click all the videos in order, observing them show up in the stream.
There is no need to load the whole video or watch it at all. Only the link to it is needed.
In fact, the quicker the better -- the file can grow quite large and I believe it is sucking up all the data.

This record can be saved as a HAR file for further analysis. Right click in that window showing the network stream, and select 'save as HAR with content'

These scripts parse out a .har file for a particular media type.
It creates a csv that lists the media links.
Then it downloads the files.

Tested with 12 videos at once at skillport.com (used media='.mp4')

Tested twice with 25+ video lessons at lynda.com (used media='mp4') (these all dowload simultaneously -- and I did not get booted...yet..)

Did not get it to work with youtube.

To use the scripts, I simply place them in the same directory as the HAR file, open a command window:
```
C:\Users\user\Downloads\lynda\course1> node
> var vd = require('./vidDown.js')
> vd('lynda.har','mp4')
```
One consideration is that i'm downloading these in the same time period that my credentials did not expire. I am not confident this will work if I wait too long after gathering the HAR file.

**update** udemy does not have unique names for their mp4 files, therfore, I'm now adding a unique number to each file-name as a sequence.

The problem was that nodeJS was simply writing all over the same file and creating an unreadable video.