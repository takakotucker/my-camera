
import { default as cameraData } from './data/cameralist.json'

const getCameras = () => {
  return cameraData
}

const resolvers = {
  Query: {
    cameras: (camera) => {
      return getCameras().filter((item) => item.camera.include(camera))
    }
  },
};

export default resolvers;
