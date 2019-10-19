import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header' 
import Nav from '../components/Nav'

// const layoutStyle = {
//   display: "flex",
//   flexDirection: "column",
//   height: "100%",
//   width: "100%"
// };

// const blogContentStyle = {
  
//   flex: 1,
//   display: "flex",
//   flexDirection: "column"
// };

const Blog =  ({ children, title = 'Applied Action Consulting' }) => (
  <div className="Layout" >
    <Head>
      <title>{title}</title>
    </Head>
    <Header />

    <blog className="BlogContent" >
      {children}
    </blog>

    <Footer>
      Footer
    </Footer>
    <style jsx global>{`* {
        box-sizing: border-box;
    }

    html,
    body,
      #__next {
        height: 100%;
      width: 100%;
    }

      body {
        margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

      .Layout {
        display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
    }

      .Content {
        flex: 1;
      display: flex;
      flex-direction: column;
      font-family: Arial;
    }
    `}</style>
  </div>
)

export default Blog