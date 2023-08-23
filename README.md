# Social-Media-Api 📱

# Description 📈

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```
# Acceptance Criteria 📝

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

# Table of Contents 📓

- [Social-Media-Api 📱](#social-media-api-)
- [Description 📈](#description-)
- [Acceptance Criteria 📝](#acceptance-criteria-)
- [Table of Contents 📓](#table-of-contents-)
- [Installation 💻](#installation-)
- [Usage 📎](#usage-)
- [License 📂](#license-)
- [Badges 🛡️](#badges-️)
- [Contributing 🔍](#contributing-)
- [Video Walk-Through Video 🎥](#video-walk-through-video-)
- [Questions ❓📧❔](#questions-)

# Installation 💻

<strong>To install and run the , follow these steps:</strong> <br>

1. Clone the repo: `git clone <repository_url>`
1. Navigate to the project directory: `cd <cloned_repo>`
2. Install the necessary dependencies: `npm install`
3. Seed the database with test data: `npm run seed`
4. Start the application: `npm start`
5. Access the application on Insomnia @ [http://localhost:3001/api/users](http://localhost:3001/api/thoughts)

# Usage 📎

1. In Insomnia Core, use API GET routes to view all categories, products, and tags formatted in JSON.
2. Use Insomnia Core's API POST, PUT, and DELETE routes to create, update, and delete data from the database. <br>
   <strong>Get all users</strong> <br>
   ![All users](/assets/images/getAllUsers.png) <br>
   <strong>Create user</strong> <br>
   ![Create user](/assets/images/createUser.png) <br>
   <strong>Get user by id</strong> <br>
   ![Get user by id](/assets/images/getUserById.png) <br>
   <strong>Update user</strong> <br>
   ![Update user](/assets/images/updateUser.png) <br>
   <strong>Create a thought</strong> <br>
   ![Create a thought](/assets/images/createAThought.png) <br>
   <strong>Get all thoughts</strong> <br>
   ![Get all thoughts](/assets/images/getAllThoughts.png) <br>
   <strong>Get thought by id</strong> <br>
   ![Get thought by id](/assets/images/getThoughtById.png) <br>
   <strong>Update thought</strong> <br>
   ![Update thought](/assets/images/updateThought.png) <br>
   <strong>Add Reaction</strong> <br>
   ![Add Reaction](/assets/images/addReaction.png) <br>
   <strong>Add Friend</strong> <br>
   ![Add friend](/assets/images/addFriend.png) <br>
   <br>

# License 📂

[![GitHub license](https://badgen.net/github/license/Naereen/Strapdown.js)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

# Badges 🛡️

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[![Visual Studio](https://badgen.net/badge/icon/visualstudio?icon=visualstudio&label)](https://visualstudio.microsoft.com)
[![JavaScript](https://badgen.net/badge/icon/javascript?icon=javascript&label)](https://www.javascript.com/)
[![.gitignore](https://badgen.net/badge/icon/git?icon=git&label)](https://git-scm.com/doc)
[![Node.js](https://badgen.net/badge/icon/nodejs?icon=nodejs&label)](https://nodejs.org/)
[![npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://npmjs.com/)
[![Express.js](https://badgen.net/badge/icon/express?icon=express&label)](https://expressjs.com/)
[![MySQL2](https://badgen.net/badge/icon/mysql2?icon=npm&label)](https://www.npmjs.com/package/mysql2)
[![Sequelize](https://badgen.net/badge/icon/sequelize?icon=sequelize&label)](https://sequelize.org/)
[![dotenv](https://badgen.net/badge/icon/dotenv?icon=npm&label)](https://www.npmjs.com/package/dotenv)
[![Inquirer](https://img.shields.io/badge/Inquirer-8.2.4-blue)](https://github.com/SBoudrias/Inquirer.js)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![CodePen](https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white)

# Contributing 🔍

[Contributors Covenant](https://www.contributor-covenant.org/) <br>

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name: `git checkout -b my-branch`
3. Make the necessary changes and commit them: ` git commit -m "Description of changes"`
4. Push your changes to your forked repository: `git push origin my-branch`
   <br>
   [![GitHub commits](https://badgen.net/github/commits/Jheeebert/social-media-api)](https://GitHub.com/Jheeebert/social-media-api/commit/)
   [![GitHub latest commit](https://badgen.net/github/last-commit/Jheeebert/social-media-api)](https://GitHub.com/Jheeebert/social-media-api/commit/)
   [![GitHub forks](https://img.shields.io/github/forks/Jheeebert/social-media-api.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/Jheeebert/social-media-api/network/)
   <br>

# Video Walk-Through Video 🎥

<strong>VS Code Video Walk-Through:</strong> <br>
https://drive.google.com/file/d/15hsn3mrf-VS7aj8IH19IeVm71knUE4ow/view <br>
<strong>Insomnia Video Walk-Through:</strong> <br>
https://drive.google.com/file/d/1KzJAfy_5K_RQdmTxQjLg2-guaKVkJlS2/view

# Questions ❓📧❔

[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Jheeebert/student-stats-backend) <br>
* If you have any questions about the repo, open an issue @ link above or contact me directly at:  📧 wdfuzz8823@gmail.com 📧. <br>
* You can find more of my work at 🔖 [Jheeebert](https://github.com/Jheeebert/) 🔖. <br>
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)