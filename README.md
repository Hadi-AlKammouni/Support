<img src="./readme/title1.svg"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available.  

**[PROJECT PHILOSOPHY](#-project-philosophy) • [WIREFRAMES](#-wireframes) • [TECH STACK](#-tech-stack) • [IMPLEMENTATION](#-impplementation) • [HOW TO RUN?](#-how-to-run)**
</div>

<br><br>

<img src="./readme/title2.svg" id="-project-philosophy"/>

<br>

> Support project is implemented to provide the following services: forecast info 🌦, voice recognition 🎙, translation 📖, and generating qr code 🔲.

### User Stories
- As a user, I want to own an account and login whenever I want.
- As a user, I want to view the forecast info of any city.
- As a user, I want to replace typing by voice recognition.
- As a user, I want to translate the result of the voice recognition.
- As a user, I want to generate qr code.

<br><br>

<img src="./readme/title3.svg" id="-wireframes"/>

<!-- > This design was planned before on paper, then moved to Figma app for the fine details.
Note that i didn't use any styling library or theme, all from scratch and using pure css modules
<br>
(Please note that pictures make take few seconds to open due to high quality) -->

<!-- ### User Mobile App Wireframes 📱

| Grocery  | Stock  | My Cart  |
| -----------------| -----| -----|
| <img src="./readme/wireframes/user/user-grocery.png" /> | <img src="./readme/wireframes/user/user-items.png"/> | <img src="./readme/wireframes/user/user-cart.png"/> |

| Splash Screen  | Login  | Account  |
| -----------------| -----| -----|
| <img src="./readme/wireframes/user/user-splash.png"/> | <img src="./readme/wireframes/user/user-login.png"/> | <img src="./readme/wireframes/user/user-account.png"/> |

| Signup One  | Signup Two  | Signup Three  |
| -----------------| -----| -----|
| <img src="./readme/wireframes/user/user-signup-one.png"/> | <img src="./readme/wireframes/user/user-signup-two.png"/> | <img src="./readme/wireframes/user/user-signup-three.png"/> |

| Home  | Track  |
| -----------------| -----|
| <img src="./readme/wireframes/user/user-home.png"/> | <img src="./readme/wireframes/user/user-track.png"/> |

### Seller Web Wireframes 💻

| Reviews  | Add to Stock  |
| -----------------| -----|
| <img src="./readme/wireframes/seller/seller-reviews.png"/> | <img src="./readme/wireframes/seller/seller-add-to-stock.png"/> |

| View Stock  | Edit Account  |
| -----------------| -----|
| <img src="./readme/wireframes/seller/seller-view-stock.png"/> | <img src="./readme/wireframes/seller/seller-edit-account.png"/> |

| Signup  | Login  |
| -----------------| -----|
| <img src="./readme/wireframes/seller/seller-signup.png"/> | <img src="./readme/wireframes/seller/seller-login.png"/> |

| Manage Orders  |
| -----------------|
| <img src="./readme/wireframes/seller/seller-manage-orders.png"/> | -->


<br><br>

<img src="./readme/title4.svg" id="-tech-stack"/>

Here's a brief high-level overview of the tech stack the Support app uses:

- For persistent storage (database), the project uses the [MySQL](https://www.mysql.com/) which is a widely used relational database management system (RDBMS). It is free and open-source. MySQL is ideal for both small and large applications.
- [Laravel](https://laravel.com/) was used as backend of this project. Where Laravel is a web application php framework with expressive, elegant syntax.

- This project uses the [Angular framework](https://angular.io/guide/what-is-angular). Angular is a development platform, built on Typescript. As a platform, Angular includes: A component-based framework for building scalable web applications / A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more / A suite of developer tools to help you develop, build, test, and update your code.

<br><br>
<img src="./readme/title5.svg" id="-impplementation"/>

<!-- > Using the above mentioned tech stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app
<br>
(Please note that the following are gifs and may take few seconds to open)

<br>

### User Mobile App Implementation 📱

| Signup One   | Signup Two  | Signup Three  |
| -----------------| -----| -----|
| <img src="./readme/gifs/user/user-signup-step-one.gif"/> | <img src="./readme/gifs/user/user-signup-step-two.gif"/> | <img src="./readme/gifs/user/user-signup-step-three.gif"/> |

| Login   | View Nearby Groceries  | Logout  |
| -----------------| -----| -----|
| <img src="./readme/gifs/user/user-login.gif"/> | <img src="./readme/gifs/user/user-view-nearby-groceries.gif"/> | <img src="./readme/gifs/user/user-logout.gif"/> |

| View Grocery From Marker or Card   | View Recent Reviews | Submit Review  |
| -----------------| -----| -----|
| <img src="./readme/gifs/user/user-view-grocery-from-marker-or-card.gif"/> | <img src="./readme/gifs/user/user-view-recent-reviews.gif"/> | <img src="./readme/gifs/user/user-submit-review.gif"/> |

| Update Profile   | Add Item to Cart | Remove Item From Cart  |
| -----------------| -----| -----|
| <img src="./readme/gifs/user/user-update-profile.gif"/> | <img src="./readme/gifs/user/user-add-to-order.gif"/> | <img src="./readme/gifs/user/user-remove-from-order.gif"/> |

| Try to Over-Ride Existing Order   | Firebase Notification Upon Making an Order  |
| -----------------|-----|
| <img src="./readme/gifs/user/user-override-old-order.gif"/> | <img src="./readme/gifs/user/user-firebase-notification-upon-ordering.gif"/> |

<br>

### Seller Web Implementation 💻

| Optical Character Recognition Technology Registration
| -----------------|
| <img src="./readme/gifs/seller/seller-ocr-registration.gif"/>

| Socket Real Time Chat
| -----------------|
| <img src="./readme/gifs/seller/seller-socket-chat.gif"/> 

| Add Item to Stock |
| -----------------|
| <img src="./readme/gifs/seller/seller-add-item-to-stock.gif"/> |

| Manage Orders
| -----------------|
| <img src="./readme/gifs/seller/seller-manage-orders.gif"/> 

| Edit Stock
| -----------------|
| <img src="./readme/gifs/seller/seller-edit-stock.gif"/> 

| Remove Item From Stock
| -----------------|
| <img src="./readme/gifs/seller/seller-remove-item-from-stock.gif"/> 

| Update Account
| -----------------|
| <img src="./readme/gifs/seller/seller-update-account.gif"/> 

| Login
| -----------------|
| <img src="./readme/gifs/seller/seller-login.gif"/> 

| Logout
| -----------------|
| <img src="./readme/gifs/seller/seller-logout.gif"/> 

| View Users' Reviews
| -----------------|
| <img src="./readme/gifs/seller/seller-view-users-reviews.gif" jus/>  -->

<br><br>
<img src="./readme/title6.svg" id="-how-to-run"/>


> This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/Hadi-AlKammouni/Support.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. To run the laravel folder 
   ```
   php artisan serve
   ```
4. To run the angular folder 
   ```
   ng serve
   ```
5. Rapid API_KEY in .env file for angular folder
   ```js
   Rapid_API_KEY = 'Enter The API KEY';
   ```