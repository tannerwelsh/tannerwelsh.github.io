// Because github pages deploys to this path, need to include as
// prefix when fetching images
const basePath = '/tannerwelsh.github.io'

export const imagePath = (filename: string) => [basePath, filename].join('/')
