import { Toaster } from 'react-hot-toast'

import { Banner, FeaturedProducts, Header, NewsletterSubscription, PopularCategories } from './components'

const Home = () => {
  return (
    <>
      <Banner />
      <FeaturedProducts />
      <PopularCategories />
      <NewsletterSubscription />
      <Toaster />
    </>
  )
}

export default Home