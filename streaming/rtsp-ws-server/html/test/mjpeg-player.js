const { pipelines } = window.mediaStreamLibrary

const play = (host) => {
  // Grab a reference to the video element
  const mediaElement = document.querySelector('canvas')

  // Setup a new pipeline
  const pipeline = new pipelines.Html5CanvasPipeline({
    ws: { uri: `ws://${host}:8854/` },
    //ws: { uri: `ws://${host}:8888/mjpeg` },
    rtsp: { uri: `rtsp://localhost:8555/test` },
    // rtsp: { uri: `rtsp://39.107.242.97/live/badminton.mp4` },
    //rtsp: { uri: `rtsp://39.107.242.97/live/test1.mp4` },
    mediaElement,
  })
  pipeline.ready.then(() => {
    pipeline.rtsp.play()
  })
}

play(window.location.hostname)
