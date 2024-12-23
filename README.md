# Dream Log

**DreamLog** is a full-stack web application that allows users to log and manage their dreams. Users can create, edit, delete, and view their personal dream logs while also exploring public entries from other users for inspiration or entertainment.

###### See it live here: https://dreamlog.onrender.com/

## **Features**

* **User Authentication:** Secure login and registration using Google OAuth 2.0.
* **Dream Management:**
  * **Create:** Add a new dream entry with a title and description.
  * **Edit:** Update the details of your dream entries.
  * **Delete:** Remove dreams that are no longer relevant.
* **Public Dream Feed:** View and explore dreams shared by other users for curiosity and inspiration.
* **Responsive Design:** Optimized for viewing on both mobile and desktop devices.

## **Tech Stack**

* **Frontend:** Handlebars.js for templating
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (with`connect-mongo` for session storage)
* **Authentication:** Passport.js with Google OAuth 2.0
* **Styling:** Materialize CSS, Custom CSS
* **Utilities:** Moment.js for formatting timestamps, **Method-Override:** Enabling PUT/DELETE methods in HTML forms.

## **Getting Started**

Follow these steps to set up and run DreamLog on your local machine:

### **1. Clone the Repository:**

`git clone https://github.com/your-username/dreamlog.git`

### 2. Install Dependencies:

*Make sure Node is downloaded

```js
cd dreamlog  
npm install
```

### 3. Create config folder with your .env, database.js and passport.js file

Here's what you should have in your .env file:

```env
PORT = PORT_NUMBER
MONGO_URI=<your-mongodb-uri>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
```

### 4. Run the program with localhost:PORT

```js
npm run dev //for development mode
npm run start //for production mode
```



That's it! Have fun exploring! 😊


## Explore More 🚀🌠

##### Other Projects:

Edu Resources: https://github.com/jolyssa/edu-resources

Moji Static Studios: https://github.com/jolyssa/live-portfolio

My Portfolio: https://github.com/jolyssa/live-portfolio
