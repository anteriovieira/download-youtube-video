const fs = require('fs')
const yt = require('ytdl-core')

yt('https://www.youtube.com/watch?v=skNYeAYBOE4')
.pipe(fs.createWriteStream('videos/video.mp4'))
