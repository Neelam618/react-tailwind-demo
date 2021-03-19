import './App.css';
import Logo from './img/logo.svg';
import MainImage from './img/beach-work.jpg';

function App() {
  return (
    <div id="app" className="bg-gray-300">
      <div className="flex bg-gray-100">
        <div className="px-8 py-12 lg:px-12 lg:py-24 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2">
          <div className="xl:max-w-lg xl:ml-auto">
            <img className="h-10" src={Logo} alt="Workcation" />
            <img className="mt-6 sm:mt-8 sm:h-72 sm:w-full sm:object-cover sm:object-center rounded-lg shadow-xl lg:hidden" src={MainImage} alt="Woman workcationing on the beach" />
            <h1 className="mt-6 sm:mt-8 text-2xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">You can work from anywhere. 
              <br className="hidden lg:inline" /><span class="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-2 sm:mt-4 text-gray-600 sm:text-xl">Workcation helps you find work-friendly rentals in beautiful locations  so you can enjoy some nice weather even when you're not on vacation.</p>
            <div className="mt-4 sm:mt-6">
              <a href="#" className="btn btn-indigo sm:text-base shadow-lg">Book your escape</a>
            </div>    
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img className="absolute inset-0 w-full h-full object-cover object-center" src={MainImage} alt="Woman workcationing on the beach" />
        </div>    
      </div>
    </div>
  );
}

export default App;
