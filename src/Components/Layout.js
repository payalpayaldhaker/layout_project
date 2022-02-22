
import Footer from './Footer'
import Header from './Header'

export default function Layout(props) {
  return (
      <> 
      
      <hr/>
      <Header/>
      <hr/>
      <br/>
      <br/>
    
      <br/>
      {props.childern}
      <br/>
      <br/>
      <br/>
        <hr/>
        <Footer/>
        <hr/>
      </>
    
  )
}
 