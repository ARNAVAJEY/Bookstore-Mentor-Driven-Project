const products = [
  {
    name: 'Express.JS - Deep API reference',
    image: '/images/express1.jpg',
    description:
      'Express.js Deep API Reference is your short, concise guide to Express.js APIs. This flexible Node.js web application framework provides a robust set of features for building single, multi-page, and hybrid web applications. Express.js API reference, quick start guides, 20+ meticulously explained examples and tutorials',
    brand: 'Azat Mardan',
    category: 'Express',
    price: 250,
    countInStock: 12,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Pro Express. JS',
    image: '/images/express2.jpg',
    description:
      'Master Express.js—The Node.js Framework For Your Web Development. Pro Express.js is for the reader who wants to quickly get up-to-speed with Express.js, the flexible Node.js framework. Author Azat Mardan clearly explains how to start developing with Express.js with a basic Hello World, and then delves into a deep API reference, before looking at common and abstract development problems. Lastly, you will learn how to build a series of real-world apps in order to cement your knowledge.',
    brand: 'Azat Mardan',
    category: 'Express',
    price: 200,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Express.JS ',
    image: '/images/express3.jpg',
    description:
      'Express js is closely related to Node.js, and it is solely based on the latter. Most of the codes used in the two platforms are almost the same. Those who are familiar with the Node.js framework will find it easy for them to read and understand this book. However, even for beginners, this book is easy to read and understand. This is also how the platform express js is. The framework makes it easy for developers to create an MVC structure for their apps, whether web or mobile, and especially on the server side.',
    brand: 'Daniel Green',
    category: 'Express',
    price: 175,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Mastering Node.js',
    image: '/images/node1.jpg',
    description:
      'Expert techniques for building fast servers and scalable, real-time network applications with minimal effort; rewritten for Node.js 8 and Node.js 9 About This Book * Packed with practical examples and explanations, Mastering Node.js contains everything you need to take your applications to the next level.This book contains an extensive set of practical examples and an easy-to-follow approach to creating 3D objects.This book is great for anyone who already knows JavaScript and who wants to start creating 3D graphics that run in any browser. You dont need to know anything about advanced math or WebGL; all that is needed is a general knowledge of JavaScript and HTML. The required materials and examples can be freely downloaded and all tools used in this book are open source. ',
    brand: 'Kevin Faaborg',
    category: 'Node',
    price: 400,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Practical Node.js',
    image: '/images/node2.jpg',
    description:
      'Learn how to build a wide range of scalable real-world web applications using a professional development toolkit.  If you already know the basics of Node.js, now is the time to discover how to bring it to production level by leveraging its vast ecosystem of packages.With this book, youll work with a varied collection of standards and frameworks and see how all those pieces fit together. ',
    brand: 'Azat Mardan',
    category: 'Node',
    price: 350,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Node.Js Web Development',
    image: '/images/node3.jpg',
    description:
      'Create real-time applications using Node.js 10, Docker, MySQL, MongoDB, and Socket.IO with this practical guide The book starts with an introduction to HTTP server and client objects to help you build functional real-time applications. Youll then understand how you can integrate Socket.io for effective communication between objects. As you advance, youll even be able to implement data storage in your application using SQL and MongoDB. With the help of practical examples, youll cover a variety of such as adding themes using Bootstrap and deploying your microservices with Docker. Once youve built and deployed your applications, youll learn how to add authentication against third-party services using OAuth to enable security for your Express applications.',
    brand: 'David Herron',
    category: 'Node',
    price: 375,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'MongoDB Fundamentals',
    image: '/images/mongo1.jpg',
    description:
      'You will discover how to modify existing data, add new data into a database, and handle complex queries by creating aggregation pipelines.You will get an overview of MongoDB and how to leverage its strengths, with relevant use cases. You will learn how to query MongoDB effectively, how storage systems and hardware can affect performance, along with tips to handle scaling.',
    brand: 'Amit Phaltankar',
    category: 'MongoDB',
    price: 380,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'The Definitive Guide to MongoDB',
    image: '/images/mongo2.jpg',
    description:
      'MongoDB, a cross-platform NoSQL database, is the fastest-growing new database in the world. MongoDB provides a rich document-oriented structure with dynamic queries he Definitive Guide to MongoDB, Second Edition, is updated for the latest version and includes all of the latest MongoDB features, including the aggregation framework introduced in version 2.2 and hashed indexes in version 2.4. MongoDB is the most popular of the "Big Data" NoSQL database technologies, and its still growing.',
    brand: 'Peter Membrey',
    category: 'MongoDB',
    price: 385,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'The Definitive Guide to MongoDB',
    image: '/images/mongo3.jpg',
    description:
      'The Definitive Guide to MongoDB, Second Edition, is updated for the latest version and includes all of the latest MongoDB features, including the aggregation framework introduced in version 2.2 and hashed indexes in version 2.4. MongoDB, a cross-platform NoSQL database, is the fastest-growing new database in the world. MongoDB provides a rich document-oriented structure with dynamic queries he Definitive Guide to MongoDB, Second Edition, is updated for the latest version and includes all of the latest MongoDB features, including the aggregation framework introduced in version 2.2 and hashed indexes in version 2.4. MongoDB is the most popular of the "Big Data" NoSQL database technologies ',
    brand: 'Hawkins T.',
    category: 'MongoDB',
    price: 400,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'React',
    image: '/images/react1.jpg',
    description:
      'Learn ReactJS framework from scratch very easily The only book on the market that helps you get your first React app up and running in just minutes, Learning React is chock-full of colorful illustrations to help you visualize difficult concepts and practical step-by-step examples to show you how to apply what you learn.',
    brand: 'Lionel Lopez',
    category: 'React',
    price: 420,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Learning React',
    image: '/images/react2.jpg',
    description:
      'Learn ReactJS framework easily from scratch As far as new web frameworks and libraries go, React is quite the runaway success. It not only deals with the most common problems developers face when building complex apps, it throws in a few additional tricks that make building the visuals for such apps much, much easier.',
    brand: 'Azat Mardan',
    category: 'React ',
    price: 422,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    
    name: 'Easy React JS for Beginner Developers',
    image: '/images/react3.jpg',
    description:
      'This book teaches you to build real-world applications with a lot of examples, ou will learn the basics of React in full, and everything needed to build a powerful React application. Some reviewers say that the combination of this book and ReactJS online documentation makes you React proficient shortly. This is the best book for learning ReactJS beginners. It is effortless to understand, and the author succeeds in giving an excellent and straightforward tutorial. ',
    brand: 'Ibas marcus',
    category: 'React',
    price: 425,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
]

export default products
