import Content from '../Content/Content';
import MainImage from './beach-work.jpg';

function Section1() {
    return (
        <div className="flex bg-gray-100">
            <Content />
            <div className="hidden lg:block lg:w-1/2 lg:relative">
                <img className="absolute z-0 inset-0 w-full h-full object-cover object-center" src={MainImage} alt="Woman workcationing on the beach" />
            </div>    
        </div>
    )
}
export default Section1;