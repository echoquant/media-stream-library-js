const { pipelines } = window.mediaStreamLibrary

const play = () => {
  const host = window.location.hostname
  // Grab a reference to the video element
  const mediaElement = document.querySelector('video')
  const rtsp_stream = document.getElementById('stream').value
  const url = new URL(rtsp_stream)
  const rtsp_host = url.hostname
  const rtsp_port = url.port || '554'

    //alert(`playing...${rtsp_stream}, host: ${rtsp_host}, port: ${rtsp_port}`)

  // Setup a new pipeline
  const pipeline = new pipelines.Html5VideoPipeline({
    ws: { uri: `ws://${host}:8888/websockify/?ip=${rtsp_host}&port=${rtsp_port}` },
//    rtsp: { uri: `rtsp://localhost:554/badminton.mp4` },
    rtsp: { uri: rtsp_stream },
    mediaElement,
  })
  pipeline.ready.then(() => {
    pipeline.rtsp.play()
  })
  pipeline.onSourceOpen = (mse) => {
    // Setting a duration of zero seems to force lower latency
    // on Firefox, and doesn't seem to affect Chromium.
    mse.duration = 0
  }
}

//play(window.location.hostname)
