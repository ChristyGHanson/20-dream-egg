import React,{useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import "./index.css"
// navbar is not imported


function App() {
  // default value is 'about'
  // 
  const [page,setPage]=useState('about');
  return (
    <div className="App">
     <div className="content-box">
      {/* send variable and function. header can see what page we are on. */}
      <Header page={page} setPage={setPage}></Header> 
      
      {/* Main content of the page */}
      {/* Main does not have the permission to set the variable values. It can only see what is stored in the page variable. */}
      <Main page={page}></Main>


{/* Don't put anything here yet. */}
<Footer></Footer>
</div>

    </div>
  );
}

export default App;
