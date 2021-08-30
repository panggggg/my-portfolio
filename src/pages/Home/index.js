import { React } from 'react';

export const HomePage = ({ className }) => {
    return (
        <div>
        <div className="h-screen p-20 grid grid-cols-2">
            <img className="mx-20" src="https://i.pinimg.com/originals/df/8e/1f/df8e1f9ea838b37140515ddd9208cac1.gif" width="550px" />
            <h1 className={className} mt-10>Welcome<br/>to<br/>my portfolio</h1>
        </div>
        <div className="grid grid-cols-3 gap-0 justify-center">
                <button className="mb-20">GitHub</button>
                <button className="mb-20">GitHub</button>
                <button className="mb-20">GitHub</button>
            </div>
        </div>
    )
}