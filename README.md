# mediaDownloader
Objects in the browser may initiate downloading media tat are not immediately availibe through hypertext links.
Using Chrome Developer mode, and monitoring the network stream, these media can be observed downloading.
This record can be saved as a HAR file for further analysis.

These scripts parse out a .har file for a particular media type.
It creates a csv that lists the media links.
Then it downloads the files.
Tested with 12 videos at once.