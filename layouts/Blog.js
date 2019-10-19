import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header' 
import Nav from '../components/Nav'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    
    

    <blog>
      {children}
    </blog>

    <Footer>
      Footer
    </Footer>
  </div>
)