import React from 'react';

const Faq = () => {


    return (
        <div className='space-y-2 max-w-[1100px] mx-auto my-16'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p><span className='font-bold'>Access Token:</span><br />
                        An access token is a credential that is used to access protected resources on behalf of an authenticated user. It is typically a string of characters that represents the authorization granted to the user after successful authentication. Access tokens have a limited lifespan and are used to authenticate and authorize API requests. They are commonly used in scenarios like web APIs, single sign-on (SSO) systems, and OAuth-based authentication.</p> <br />

                    <p><span className='font-bold'>Refresh Token:</span>
                        A refresh token is a long-lived credential that is used to obtain a new access token without requiring the user to reauthenticate. While access tokens have a short lifespan, refresh tokens have a longer validity period and are used to renew access tokens when they expire.</p> <br />

                    <p>Access tokens and refresh tokens are used in client-server authentication flows. When a user authenticates, the server generates an access token and a refresh token. The access token is sent back to the client and is typically stored on the client-side in memory or as an HTTP-only cookie. Storing it in memory is common for single-page applications, while using an HTTP-only cookie adds extra security by preventing client-side scripts from accessing the token.</p> <br />

                    <p>
                        On the other hand, refresh tokens have a longer lifespan and are used to obtain new access tokens without requiring the user to reauthenticate. They should be securely stored on the client-side. One approach is to store them in an HTTP-only cookie, which provides better security by preventing client-side scripts from accessing the token. Another option is to store them in local storage, although additional security measures may be needed to protect against cross-site scripting (XSS) attacks.
                    </p>

                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>SQL databases follow a structured data model based on tables with predefined schemas. They use relational database models, organizing data into rows and columns and establishing relationships between tables through keys. SQL databases are typically vertically scalable, allowing for increased workloads by adding resources to a single server.</p><br />
                    <p>
                        In contrast, NoSQL databases offer flexibility through various data models such as key-value, document, columnar, and graph. They are known as non-relational databases and are designed for horizontal scalability. NoSQL databases distribute data across multiple servers, enabling them to handle high workloads by adding more servers to the database cluster.
                    </p><br />
                    <p>SQL databases prioritize data consistency and enforce ACID properties for maintaining data integrity. They use SQL as the query language, allowing for complex queries, joins, and data manipulation operations. On the other hand, NoSQL databases often prioritize high availability and partition tolerance, providing eventual consistency. They may have their query languages specific to the data model they support.</p> <br />

                    <p>SQL databases are well-suited for applications with structured and predefined schemas, complex relationships, and the need for strict data consistency. They are commonly used in transactional systems and relational data scenarios. NoSQL databases excel in handling large volumes of rapidly changing, unstructured, or semi-structured data. They are popular in real-time analytics, content management systems, and applications requiring high scalability and flexible schemas.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What is express js? What is Nest JS?
                </div>
                <div className="collapse-content">
                    <p>Express.js is a minimalistic and flexible web framework for Node.js. It provides a straightforward API for building web applications and APIs. With Express.js, developers have full control over the application structure and middleware configuration. It offers features such as routing for defining URL endpoints, middleware for request handling, support for various templating engines, and extensibility through third-party middleware and plugins. Express.js is lightweight, fast, and widely used, making it a popular choice for building APIs and web applications, especially for smaller projects and rapid prototyping.</p><br />
                    <p>On the other hand, Nest.js is a progressive and opinionated web application framework built on top of Express.js (or Fastify) and TypeScript. It aims to provide a robust architecture for scalable and maintainable server-side applications. Inspired by Angular, Nest.js promotes a modular structure, leveraging decorators and dependency injection. It offers a powerful CLI for scaffolding components and supports TypeScript, allowing for static typing and advanced JavaScript features. Nest.js provides middleware and interceptors, along with built-in testing capabilities. It is well-suited for building complex, scalable applications, making it a popular choice for larger projects and teams.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content">
                    <p>The MongoDB aggregate framework is a powerful tool for processing and analyzing data in MongoDB. It allows you to perform complex aggregation operations on collections, such as grouping, filtering, sorting, joining, and transforming data. The framework operates through a series of pipeline stages, where each stage applies a specific operation to the input documents and passes the transformed output to the next stage.</p><br />
                    <p>During the aggregation process, each document in the collection goes through the pipeline stages in sequence. At each stage, you can use various operators and expressions to shape and manipulate the data. MongoDB provides a comprehensive set of pipeline operators, including $match for filtering documents, $group for grouping and aggregating data, $sort for sorting results, $project for selecting and transforming fields, $lookup for performing joins, and more.</p> <br />
                    <p>Once the pipeline stages are processed, the result is returned as a cursor. You can iterate over the cursor to access the aggregated data. To optimize performance, you can utilize indexes on the fields used in the aggregation pipeline. Proper indexing can greatly improve the speed of the aggregation process.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;