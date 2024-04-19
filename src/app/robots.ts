import { MetadataRoute } from 'next'
 
export default (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    }
  }
}