import Header from '../../../../component/header/index.jsx';
import Footer from '../../../../component/footer/index.jsx';


const MasterLayout = ({ children, ...props}) => {
    return (
      <div  {...props}>
        <Header/>
        <main className="w-full">
          {children}
        </main>
        <Footer/>
      </div>
    );
  };
  export default MasterLayout;