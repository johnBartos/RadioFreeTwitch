:construction::construction: UNDER CONSTRUCTION :construction::construction::construction:

[https://i.imgur.com/p1LcIqj.jpg](streamradio)

#What is this?
RFT is a website that splits the audio from Twitch streams and serves it up to you. It's kind of like a radio.

#So hows it work?
Taking advantage of Node streams, RFT makes a few REST call to Twitch's endpoints. It eventually gets a HLS manifest file (.m3u8), which is a block of text with links to the same stream at different quality levels. The last one is conveinently the audio-only stream! When given this link, Flowplayer knows how to handle the rest.

The only glitch is with CORS, or Cross Origin Resource Sharing. Sounds complex, but it's simply an XML file with a bunch of domain names. Before requesting any content from the stream server, video players first check this file to see if they're on a listed domains. If not, a exception is thrown and the player dies. The purpose is to restrict foreign and potentially malicious files from executing. Twitch's CORS file lists their own domains, so any player not on their network is too scared to use the stream. However, ordinary REST calls are more brave. They can get the stream just fine. RFT offers up it's own CORS file and a set of proxy endpoints for the player. It augments each HLS manifest file in real-time to point to the proxies instead of the real ones, tricking the player into thinking the stream comes from a secure place. Sucker.

Unfortunately, Flowplayer is rather finnicky when playing HLS streams. It tends to get stuck on segments that take too long to load, and sometimes the timeout is long enough to halt the radio altogether. My first attempt was to simply axe sluggish requests in Node, which were handled via streams. Flowplayer did not like this. It crashed itself whenever a CONTENT LENGTH MISMATCH occured. My current solution is to return all or nothing, streaming the segment into a buffer and only returning if it's filled within the time limit.

As a bonus, this website works purely in HTML5 (unlike Twitch itself) thanks to Dailymotion's [HLS.js module](https://github.com/dailymotion/hls.js/tree/master).


#Is it done?
Almost! You can pull the source and run it just fine, but the front is a mess.

#To-do
- Replace Angular with React
- Learn how to make pretty websites

