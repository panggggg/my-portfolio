import { React } from 'react';


export const SkillPage = ({ className, fontSkill }) => {

    const skillList = [
        {
            name: "Python3",
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"
        },
        {
            name: "Javascript",
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
        },
        {
            name: "Java",
            picture: "https://logoeps.com/wp-content/uploads/2011/06/java-logo-vector.png"
        },
        {
            name: "PHP",
            picture: "https://icon-library.com/images/php-icon/php-icon-19.jpg"
        },
        {
            name: "HTML",
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
        },
        {
            name: "CSS",
            picture: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
        },
        {
            name: "Typescript",
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
        },
        {
            name: "Bootstrap",
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
        },
        {
            name: "Tailwind CSS",
            picture: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
        },
        {
            name: "ReactJs",
            picture: "data:image/png;base64,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"
        },
        {
            name: "Flutter",
            picture: "https://logowik.com/content/uploads/images/flutter5786.jpg"
        },
        {
            name: "NodeJS",
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
        },
        {
            name: "MongoDB",
            picture: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png"
        },
        {
            name: "Microsoft SQL Server",
            picture: "https://wearetechnology.com/wp-content/uploads/2012/12/MicrosoftSQLServer.png"
        },
        {
            name: "Postman",
            picture: "https://i2.wp.com/nextflow.in.th/wp-content/uploads/postman-logo.png?ssl=1"
        },
        {
            name: "Docker",
            picture: "https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png"
        },
        {
            name: "Kubernetes",
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png"
        },
        {
            name: "RabbitMQ",
            picture: "https://herve.beraud.io/images/blog/rabbitmq.png"
        },
        {
            name: "Redis",
            picture: "https://seeklogo.com/images/R/redis-logo-E403D4DD6A-seeklogo.com.png"
        },
        {
            name: "Test-Drive Development",
            picture: "https://marsner.com/wp-content/uploads/test-driven-development-TDD.png"
        },
    ]


    return (
        <div className="">
            <h1 className={className}>My Skill</h1>
            <div className="grid md:grid-cols-5 pt-4 pb-2 ">
            {skillList.map((value) => {
                return (

            <div className="p-8">
            <div className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500 p-8">
                <div className="p-4">
                <img className="rounded-xl" src={value.picture} alt={value.name} />
                </div>
                <div className="flex justify-between p-6">
                <div className={fontSkill}>
                <div className="flex justify-items-center space-x-4">
                    <h1 className="text-lg text-gray-900 font-bold">{value.name}</h1>
                </div>
                </div>
                </div>
            </div>
            </div>    
                )
            }
            )
        }
        </div>
         </div>
                
    )
}