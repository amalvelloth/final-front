import React from 'react'
import './Home.css'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

const Home = (props) => {
  return (
    <div>
      

     <Topbar xxx={props.checkLogout}/>
     <h1 className='swe'>WELCOME TO ADMN PANEL</h1>
      <h1 className='wel'> 
      Welcome to Librarian's Lair, where you wield the power to curate the digital shelves of our online bookstore with precision and finesse. As the guardian of our virtual library, you have the authority to add, edit, and upload data to our website, ensuring that every book finds its rightful place in our vast collection. Step into the Librarian's Lair and discover a suite of tools designed to streamline your administrative tasks and empower you to shape the reading experience for our valued patrons.
      <br></br><br></br>

Effortless Catalog Management:
With our intuitive catalog management system, adding new titles and updating existing entries is a breeze. Simply fill in the details—title, author, genre, synopsis, cover image, and more—and watch as each book seamlessly integrates into our digital catalog. Whether it's a classic masterpiece or a contemporary bestseller, every addition enriches our literary landscape and beckons readers to embark on new adventures.
<br></br><br></br>
Streamlined Data Editing:
Empower yourself with the ability to edit and refine book listings with ease. From correcting typos to updating publication information, our streamlined editing tools ensure that every detail is accurate and up-to-date. Whether you're fine-tuning metadata or enhancing book descriptions, your meticulous attention to detail ensures a polished and professional browsing experience for our users.
<br></br><br></br>
Seamless File Uploads:
Bring our digital library to life with seamless file uploads for e-books, audiobooks, and supplementary materials. Whether you're adding a new release or expanding our collection, our file upload feature allows you to effortlessly share literary treasures with our discerning audience. With support for various file formats and sizes, you have the flexibility to enrich our catalog with diverse content that caters to every reader's preferences.
<br></br><br></br>
Version Control and History Tracking:
Keep track of changes and revisions with our robust version control and history tracking features. From tracking who made specific edits to reverting to previous versions, you have full visibility and control over the evolution of our catalog. Whether it's a minor update or a major revision, rest assured that your changes are recorded and accessible for future reference.
<br></br><br></br>
Bulk Import and Export:
Simplify the process of adding or updating multiple book listings with our bulk import and export functionality. Whether you're onboarding a new batch of titles or syncing data with external systems, our flexible import/export tools streamline the process and save you valuable time. With support for common file formats such as CSV and XML, managing large volumes of data has never been easier.
<br></br><br></br>
Secure Access Controls:
Protect sensitive data and maintain the integrity of our digital library with secure access controls. Assign roles and permissions to ensure that only authorized personnel can access and modify catalog data. With granular control over user privileges, you can safeguard our repository of literary treasures and uphold the highest standards of data security and integrity.
<br></br><br></br>
Welcome to Librarian's Lair, where your passion for literature meets the power of digital curation. Embrace your role as a guardian of knowledge and embark on a journey to enrich the minds and souls of readers around the world. Together, let us cultivate a virtual haven where every book finds its place and every reader discovers their next great adventure.





      </h1> 
     
     <Sidebar/>
      </div>
  )
}

export default Home