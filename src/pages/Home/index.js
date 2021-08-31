import { React } from 'react';

export const HomePage = ({ className }) => {
    return (
        <div>
        <div className="h-screen p-20 grid grid-cols-2 grid-flow-row justify-items-center">
            <div className="span-cols-1">
                <div className="span-rows-1">
                    <h1 className={className}>Welcome<br/>to<br/>my portfolio</h1>
                </div>
                <div className="span-rows-2 pt-5">
                    <div className="flex space-x-0 grid grid-cols-3 justify-items-center">
                        <a href="https://github.com/panggggg" className="span-cols-1 justify-self-end ml-20"><img src="https://image.flaticon.com/icons/png/512/733/733609.png" width="30px"/></a>
                        <a href="https://www.facebook.com/popang.pawornwan/" className="span-cols-2 justify-self-center mr-40 "><img src="https://image.flaticon.com/icons/png/512/1384/1384005.png" width="30px"/></a>
                        <a href="https://www.instagram.com/_panggggs/" className="span-cols-3 justify-self-start"><img src="https://image.flaticon.com/icons/png/512/1384/1384015.png" width="30px"/></a>
                    </div>
                </div>
            </div>
            <div className="p-20">
            <img className="" src="https://2.bp.blogspot.com/-RwKl7rSsJ7o/WD6hruu-KkI/AAAAAAALo9o/JdUdt-aBuI4SFxOFUK2rhsdPuX1yR9TwwCLcB/s1600/AS002044_03.gif" width="1000px"/>
        </div>
        </div>
        {/* <div className="grid grid-cols-3 justify-items-center pl-64 pr-64">
                <div className="pl-10 pr-10 pb-10">
                    <a href="https://github.com/panggggg"><img src="https://image.flaticon.com/icons/png/512/733/733609.png" width="30px"/></a>
                </div>
                <div className="pl-10 pr-10">
                    <a href="#" className=""><img src="https://image.flaticon.com/icons/png/512/1384/1384005.png" width="30px"/></a>
                </div>
                <div className="pl-10 pr-10">
                    <a href="#" className=""><img src="https://image.flaticon.com/icons/png/512/1384/1384015.png" width="30px"/></a>
                </div>
                </div> */}
        </div>
    )
}