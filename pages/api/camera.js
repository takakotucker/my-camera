import { default as cameraData } from './data/cameralist.json'

export default (req, res) => {
    res.statusCode = 200
    res.json({ cameraData })
  }