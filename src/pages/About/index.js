import { React } from 'react';

export const AboutPage = ({ className, header, about }) => {
    return (
        <div className="h-screen">
            <div className="grid grid-cols-2 grid-flow-row pt-20">
                <div className="span-row-1">
                    <div className="pl-64">
                        <img className="pr-20 pt-10 rounded-full flex items-center justify-center " src="https://scontent.fbkk8-4.fna.fbcdn.net/v/t1.6435-9/90055791_1559958094179692_2144726979075637248_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHP7o_nXfQYXs4cFIeMflmdZ5ZYtOsm0mdnlli06ybSZ5R408uFJoyHQVkUZ3zyIn_4XR1XylvZWbG24UR3JAeB&_nc_ohc=nxjfnxe0NNcAX8bsDWj&tn=yi1BwWuK7xF4zIaA&_nc_ht=scontent.fbkk8-4.fna&oh=00e590f7eae490b431fafaead3b3c0e2&oe=61515391" width="600px" />
                    </div>
                </div>
                <div className="span-row-2">
                    <div className="">
                        <div className={className}>
                            <br/>
                        <h1 className={header}>PROFILE</h1>
                        <div className="text-left pl-10 text-xl">
                            <h2 className={about}>Name: Pawornwan Sriprathung</h2>
                            <h2 className={about}>Nickname: Pang</h2>
                            <h2 className={about}>Age: 21</h2>
                            <h2 className={about}>Date of birth: 20 December 1999</h2>
                        </div>
                        <br/>
                        <h1 className={header}>EDUCATION</h1>
                            <div className="text-left pl-10 text-xl">
                                <h1 className={about}>2015 - 2018</h1>
                                <h1 className={about}>Certification of high school(Science - Math)</h1>
                                <h1 className={about}>Darasamutr Sriracha School</h1>
                                <br/>
                                <h1 className={about}>2018 - Present</h1>
                                <h1 className={about}>Bachelor of Science in Information technology</h1>
                                <h1 className={about}>at Kasetsart University Sriracha campus</h1>
                            </div>
                        </div>
                        <br/>
                        </div>
                    </div>
                </div>
            </div>
    )
}