// import Sidebar from './../Navbar/sidebar';
// import Header from './../Header/header';
import Sidebar from '../Navbar/sidebar';
import Header from '../Header/header';

const DashboardLayout = ({children}) => {
    return (
        <div >
      <Sidebar />
      
        <Header />
        <div className='bg-red-500'>
            {children}
        </div>

 
        
    </div>
    );
};

export default DashboardLayout;