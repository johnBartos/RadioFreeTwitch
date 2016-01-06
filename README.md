:construction::construction: UNDER CONSTRUCTION :construction::construction::construction:

#What is this?
RFT is a website that splits the audio from Twitch streams and serves it up to you. It's kind of like a radio.

#So hows it work?
Taking advantage of Node streams, RFT makes a few REST call to Twitch's endpoints. It eventually gets a HLS manifest file (.m3u8), which is a block of text with links to the same stream at different quality levels. The last one is conveinently the audio-only stream!. When given this link, Flowplayer knows how to handle the rest.

The only glitch is with CORS, or Cross Origin Resource Sharing. It's a file stored on a server which lists the domains where the stream can be played. Video players use this file to restrict foreign and potentially malicious files from executing from within. Twitch has theirs set to their own domains, so any players not on their network are too scared to use the stream. However, ordinary REST calls are more brave. They can get the stream just fine. RFT offers up it's own CORS file and a set of proxy endpoints for the player. It augments each HLS manifest file in real-time to point to the proxies instead of the real ones, tricking the videoplayer into thinking the stream comes from a secure place. Sucker.

#Does it work?
Yep! The front end is a mess though, and I'm still working up the strength to fix it.

#Will it ever be finished?
Maybe. It's 
