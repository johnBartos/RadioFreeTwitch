:construction::construction: UNDER CONSTRUCTION :construction::construction::construction:

#What is this?
RFT is a website that splits the audio from Twitch streams and serves it up to you. It's kind of like a radio.

#So hows it work?
Taking advantage of Node streams, RFT makes a few REST call to Twitch's endpoints. It eventually gets a HLS manifest file (.m3u8), which is a block of text with links to the same stream at different quality levels. The last one is conveinently the audio-only stream! When given this link, Flowplayer knows how to handle the rest.

The only glitch is with CORS, or Cross Origin Resource Sharing. Sounds complex, but it's simply an XML file with a bunch of domain names. Before requesting any content from the stream server, video players first check this file to see if they're on any of the listed domains. If they're not, a painful exception is thrown. The purpose is to restrict foreign and potentially malicious files from executing within the player. Twitch's CORS file lists their own domains, so any players not on their network are too scared to use the stream. However, ordinary REST calls are more brave. They can get the stream just fine. RFT offers up it's own CORS file and a set of proxy endpoints for the player. It augments each HLS manifest file in real-time to point to the proxies instead of the real ones, tricking the videoplayer into thinking the stream comes from a secure place. Sucker.

There's also some magic around the final Node endpoint, which retrieves the stream files themselves.

#Does it work?
Yep! The front end is a mess though, and I'm still working up the strength to fix it. Angular was a mistake. 

#Will it ever be finished?


