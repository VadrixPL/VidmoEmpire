/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/vidmologo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "Vidmo";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/loading1.png"
];

/*Random background images order?*/
var l_bgImagesRandom = false;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = false;

/*Display actual song's name?*/
var l_musicDisplay = false;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{ogg: "songs/music1.ogg", name: "Vidmo: Soundtrack #1"},
	//{youtube: "9lI976ZyUl0", name: "Vidmo: Test #2"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 8;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Projekt Vidmo prowadzony jest przez twórców Serwerów takich jak Frytkolandia, Międzygwiezdna i NextLevel",
"Uwaga, w czasach imperium kara śmierci jest na początku dziennym!",
"Pamiętaj, to właśnie Ty stoisz na straży porządku w Galaktyce!",
"Ktoś trolluje? Masz problem na serwerze? Powiadom administrację pisząc na @ Powód",
"Wzywa Cię ciemna strona mocy? Dołącz do graczy Premium!",
"Na naszym serwerze został wprowadzony nowatorski system szkolenia oparty na metodyce stosowanej w Wojsku Polskim",
"Wybierz Mundur, załaduj Broń i walcz dla twojej Ojczyzny - Wielkiego Galaktycznego Imperium!",
"Pamiętaj o drodze służbowej! Lord Vader nie chce słuchać o tym, że ktoś był dla ciebie nie miły...",
"Bezpieczeństwo, Prządek, Imperium!",
"Pamiętaj Kadecie, jeżeli masz jakieś pytania każdy Trener z chęcią na nie odpowie!"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;