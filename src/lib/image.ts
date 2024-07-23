import * as config from '../../config.mjs'

export const imagePath = (filename: string) =>
  [config.basePath, filename].join('/')
