/*
! 1. What is Emmet?
?-> Emmet is a web-developer’s toolkit that can greatly improve HTML & CSS workflow.

! 2. Difference between a Library and Framework?
?-> 1. A library is a collection of functions developers can call at will and still control the flow of the software application. The operations performed to be performed by libraries are precisely and specifically defined.
?   2. A framework is a structure in which the application defines the content of the operation by asking the developer to fill in the spaces. The framework defines the concept with the functionality itself is defined by the developer with the end-user in mind.
?   3.Frameworks and libraries are code written by third parties to solve regular/common problems or to optimise performance. A key difference between the two is the inversion of control. When using a library, the control remains with the developer who tells the application when to call library functions. When using a framework, the control is reversed, which means that the framework tells the developer where code needs to be provided and calls it as it requires.

! What is CDN? Why do we use it?
? A Content Delivery Network or a CDN is a globally-distributed network of servers that helps provide high-availability, faster performance, and security to websites distributing their content via it.
? A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content. A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos.
! Why do we use it?
? 1. Increasing Availability - For simplicity, availability can be considered a simple measure of how long your website and its functions remain accessible in a given period.With a CDN coming into the picture, it does two things. One, a lot of traffic doesn't even come to your servers. The edge server of the CDN serves a lot of content from its cache. So, you need a slightly fewer number of servers.
? Second, as long as the content is available in the CDNs cache, even if your actual servers are not working, the CDN will keep serving the content. This gives you some buffer time to fix issues on your servers while the CDN serves whatever content it can from its cache.
? 2. Website Security 
! For detailed info go to this link https://imagekit.io/blog/what-is-content-delivery-network-cdn-guide/

! ● Why is React known as React?
? React was developed for applications (Facebook) that have constantly changing data. Since React is a front-end framework or the “View” in MVC, this means that as the user clicks around and changes the app's data, the view should “react” or change with those user events.

! ● What is crossorigin in script tag?
? The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.
? CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

! ● What is diference between React and ReactDOM ?
? React is a JavaScript library for building User Interfaces whereas ReactDOM is also JavaScript library that allows React to interact with the DOM. The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().

! ● What is difference between react.development.js and react.production.js files via CDN ?
? Development is the stage of an application before it's made public while production is the term used for the same application when it's made public.

! ● What is async and defer? 
? async and defer both load JavaScript asynchronously without render blocking, but async executes as soon as possible while defer runs in sequence toward the end of the loading process, just before the DOMContentLoaded event.
? Any given resource on a page is first downloaded and then applied to or run on the page. While the loading behavior of async and defer are the same - loading in the background without render blocking - the difference lies in their behavior when executing.
? JavaScript files with the async attribute will run in no particular order as soon as they're loaded, whereas defer'd resources run in sequence (in the order they appear in the HTML) toward the end of the initial loading process, right before the DOMContentLoaded event.

Coding -
● Set up all the tools in your laptop
○ VS Code
○ Chrome
○ Extensions of Chrome
● Create a new Git repo
● Build your first Hello World program using,
○ Using just HTML
○ Using JS to manipulate the DOM
○ Using React
■ use CDN Links
■ Create an Element
■ Create nested React Elements
■ Use root.render
● Push code to Github (Theory as well as code)
● Learn about Arrow Functions before the next class

*/
