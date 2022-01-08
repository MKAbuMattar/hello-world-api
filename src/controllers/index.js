import * as helloWorldConterallerV1 from './helloWorld.conteraller.v1'
import * as helloWorldConterallerV2 from './helloWorld.conteraller.v2'

//api v1
export const getHelloWorldV1 = helloWorldConterallerV1.getHelloWorld
export const getHelloWorldRandomV1 = helloWorldConterallerV1.getHelloWorldRandom
export const outV1 = helloWorldConterallerV1.out

// api v2
export const getHelloWorldV2 = helloWorldConterallerV2.getHelloWorld

export default {
  getHelloWorldV1,
  getHelloWorldRandomV1,
  outV1,
  getHelloWorldV2,
}
