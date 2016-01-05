:construction::construction:UNDER CONSTRUCTION:construction::construction::construction:

#What is this?
RFT is a website that splits the audio from Twitch streams and serves it up to you. It's kind of like a radio.

#So hows it work?
Taking advantage of Node streams, RFT makes a few REST call to Twitch's endpoints. It eventually gets a HLS manifest file. It's a block of text with links to the same stream at different quality levels. The last happens to conveinently be audio only. When given this link, Flowplayer knows how to handle the rest.

The only problem is CORS

#Does it work?
Yep! The front end is a mess though, and I'm still working up the strength to fix it.

#Will it ever be finished?
Maybe. It's 
