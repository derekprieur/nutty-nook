import { Toaster } from 'react-hot-toast'

import { Banner, FeaturedProducts, NewsletterSubscription, PopularCategories, ScrollingNotification } from './components'

const Home = () => {
  return (
    <>
      <ScrollingNotification />
      <Banner />
      <FeaturedProducts />
      <PopularCategories />
      <NewsletterSubscription />
      <Toaster />
    </>
  )
}

export default Home