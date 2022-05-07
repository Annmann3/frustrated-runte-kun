import loadSnd from 'audio-loader'
import playSnd from 'audio-play'

const snds = {}
const load = name => {
  loadSnd(`/snd/${name}.mp3`).then(a => { snds[name] = a })
}
load('btn')
load('jump')

const playSound = name => {
  const audio = snds[name]
  if (!audio) {
    console.warn(`No sound for: ${name}`)
    return
  }
  playSnd(audio)
}

export default playSound
