import { React } from 'react';

export const SkillPage = ({ className, border }) => {
    return (
        <div className="h-screen">
            <h1 className={className}>My Skill</h1>
            <div className="pt-10">
                <h1>Experienced</h1>
            </div>
            <div className="grid grid-cols-6 ml-40 mr-40 ">
                <div className="span-cols-1">
                <img className="pl-20 pt-20 place-items-center" src="http://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png" width="150px"/>
                </div>

                <div className="span-cols-3">
                <img className="pl-20 pt-20 place-items-center" src="https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png" width="200px"/>
                </div>

                <div className="span-cols-4">
                    <img className="pl-20 pt-20 place-items-center" src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png" width="240px"/>
                </div>

                <div className="span-cols-4">
                    <img className="pl-20 pt-20 place-items-center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" width="160px"/>
                </div>

                <div className="span-cols-4">
                    <img className="pl-20 pt-20 place-items-center" src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png" width="240px"/>
                </div>

                <div className="span-cols-5">
                    <img className="pl-20 pt-20 place-items-center" src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" width="240px"/>
                </div>

                <div className="span-cols-5">
                    <img className="pl-20 pt-20 place-items-center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" width="240px"/>
                </div>

                <div className="span-cols-5">
                    <img className="pl-20 pt-20 place-items-center" src="https://aleson-itc.com/wp-content/uploads/2020/03/sql-server-2017.png" width="240px"/>
                </div>

                <div className="span-cols-2">
                <img className="pl-20 pt-20 place-items-center" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" width="200px"/>
                </div>

                <div className="span-cols-2">
                <img className="pl-20 pt-20 place-items-center" src="https://cdn.freelogovectors.net/wp-content/uploads/2020/12/postman-logo.png" width="200px"/>
                </div>

                <div className="span-cols-2">
                <img className="pl-20 pt-20 place-items-center" src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png" width="200px"/>
                </div>

                <div className="span-cols-2">
                <img className="pl-20 pt-20 place-items-center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/RabbitMQ_logo.svg/1200px-RabbitMQ_logo.svg.png" width="200px"/>
                </div>

                <div className="span-cols-2">
                <img className="pl-20 pt-20 place-items-center" src="https://download.logo.wine/logo/Redis/Redis-Logo.wine.png" width="200px"/>
                </div>


                </div>
        
        </div>
                
    )
}