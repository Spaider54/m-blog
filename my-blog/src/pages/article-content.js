
const articles = [
  {
    name: "leran-react",
    title: "Introduction To React JS",
    content: [
      `Why we use ReactJS?`,
      `
The main objective of ReactJS is to develop User Interfaces (UI) that improves the speed of the apps. It uses virtual DOM (JavaScript object), which improves the performance of the app. The JavaScript virtual DOM is faster than the regular DOM. We can use ReactJS on the client and server-side as well as with other frameworks. It uses component and data patterns that improve readability and helps to maintain larger apps.`,
      `
Declarative : 
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
Declarative views make your code more predictable and easier to debug.. 
 `,
      `
Component-Based : 
Build encapsulated components that manage their own state, then compose them to make complex UIs.
Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
 `,
      `
Learn Once, Write Anywhere : 
We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
React can also render on the server using Node and power mobile apps using React Native.
 `,
      `
This Link Can Help you  : https://github.com/enaqx/awesome-react
  `,
    ],
  },
  {
    name: "leran-nodejs",
    title: "Introduction to NodeJS",
    content: [
      `Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!`,
      `Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.`,
      `A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.`,
      `When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.`,
      `This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.`,
      `Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.`,
      `In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.`,
    ],
  },
  {
    name: "leran-mongodb",
    title: "Start Now MongoDb",
    content: [
      `
      A primo, ut opinor, animantium ortu petitur origo summi boni. Cenasti in vita numquam bene, cum omnia in ista Consumis squilla atque acupensere cum decimano. An ea, quae per vinitorem antea consequebatur, per se ipsa curabit? Quantum Aristoxeni ingenium consumptum videmus in musicis? Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Sed ille, ut dixi, vitiose. Quis non odit sordidos, vanos, leves, futtiles? Theophrasti igitur, inquit, tibi liber ille placet de beata vita? 
        `,
    ],
  },
  {
    name: "walid",
    title: "Welcome To MyBlog",
    content: [
      `
      Hi EveryOne , I Will Tell You a Story About Me , I am The Man of HardWorking ,FAST Study and Make Things better for Others , I Will Share With You Some advice  Here
        `,
      `
            * Read A Lot of
      
        `,
      `
            * Take a lot of Course 
      
        `,
      `
          * Write Your Things In a NoteBook
      
        `,
      `
      * Think and Do your Things 
      
        `,
    ],
  },
];

export default articles;
