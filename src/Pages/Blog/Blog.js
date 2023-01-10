import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-5xl text-center py-10 font-bold text-violet-600'>Blog</h1>

            <div className='mx-48'>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content rounded-xl">
                        Differences between SQL and NoSQL ?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content rounded-xl mt-3">
                        <p><span className='font-bold text-lime-200'>Answer:</span> The Main Differences: <br />
                            <span className='font-semibold text-black'>1.</span> Type - SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. <br />
                            <span className='font-semibold text-black'>2.</span> Language –
                            SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. <br />
                            <span className='font-semibold text-black'>3.</span> Scalability –
                            In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD.
                        </p>
                    </div>
                </div>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content rounded-xl mt-2">
                        What is JWT, and how does it work?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content rounded-xl mt-3">
                        <p><span className='font-bold text-lime-200'>Answer:</span><br />
                            <span className='font-semibold text-black'>JSON:</span> For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.</p>
                        <p className='py-2'><span className='font-semibold text-black'>How JWT Works:</span> JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                        </p>
                    </div>
                </div>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content rounded-xl mt-2">
                        What is the difference between javascript and Node JS?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content rounded-xl mt-3">
                        <p><span className='font-bold text-lime-200'>Answer:</span></p>
                        <div className="overflow-x-auto container">
                            <table className=" w-full">
                                <thead className='' >
                                    <tr className='bg-black' >

                                        <th className=''>Javascript</th>
                                        <th className=''>Node JS</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr className='bg-white text-black'>

                                        <td className='pt-2'>1. Javascript is a programming language that is used for writing scripts on the website. </td>
                                        <td className='pt-2'>1. NodeJS is a Javascript runtime environment.</td>
                                    </tr>
                                    <tr className="hover bg-white text-black">

                                        <td className='pt-2'>2. Javascript can only be run in the browsers.</td>
                                        <td className='pt-2'>2. We can run Javascript outside the browser with the help of NodeJS.</td>

                                    </tr>

                                    <tr className='bg-white text-black'>

                                        <td className='pt-2'>3. It is basically used on the client-side.</td>
                                        <td className='pt-2'>3. It is mostly used on the server-side.</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content rounded-xl mt-2">
                        How does NodeJS handle multiple requests at the same time?
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content rounded-xl mt-3">
                        <p><span className='font-bold text-lime-200'>Answer:</span><br />
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Blog;