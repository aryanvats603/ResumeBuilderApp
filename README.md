# Resume Builder App 📝



A **full-stack Resume Builder application** that allows users to create professional resumes with live previews, customize themes, save resumes, download PDFs, and share them with recruiters. Built with **React** on the frontend and **Spring Boot** on the backend.  

---

## 💡 Key Features

### Frontend
- Responsive **landing page** with hero section and CTA buttons  
- **Interactive resume builder** with live preview  
- Multiple **themes** and custom color palette  
- **User dashboard** for saved resumes and thumbnails  
- **PDF export** and **email-to-recruiter** functionality  
- Unlock **premium features** via **Razorpay payments**  

### Backend
- **15+ REST APIs** with Spring Boot  
- **JWT-based authentication** and role-based authorization  
- **Cloud storage** for profile images (Cloudinary)  
- **Email verification** & notification system  
- Clean architecture following **industry best practices**  

### What You’ll Learn
- Full Stack App Development using **React + Spring Boot**  
- **REST API design** and implementation  
- **Authentication & Authorization** with Spring Security + JWT  
- **Email automation** using Spring Mail  
- Cloud image uploads with **Cloudinary**  
- **Payment Gateway Integration** with Razorpay  
- **PDF generation** and download of resumes  
- **MongoDB** integration for data persistence  
- Deployment to production  

---

## 🚀 Technologies Used
- **Frontend:** React, Bootstrap, HTML5, CSS3  
- **Backend:** Spring Boot, Spring Security, Spring Mail  
- **Database:** MongoDB  
- **Cloud Storage:** Cloudinary  
- **Payment Gateway:** Razorpay  
- **Other:** JWT, Maven, REST APIs  

---

## ⚙️ Configuration  

Before running the application, configure the following in `application.properties` or `application.yml`:  

### 1. MongoDB
```properties
spring.data.mongodb.uri=mongodb://localhost:27017/resume_builder


Ensure MongoDB is running locally or provide a remote URI.

2. Email
spring.mail.host=smtp-relay.brevo.com
spring.mail.port=587
spring.mail.username=your_email@example.com
spring.mail.password=your_email_password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.starttls.enable=true
spring.mail.protocol=smtp
spring.mail.properties.mail.smtp.from=your_email@example.com


Replace placeholders with your actual SMTP credentials.

3. Cloudinary
cloudinary.cloud-name=your_cloud_name
cloudinary.api-key=your_api_key
cloudinary.api-secret=your_api_secret

4. JWT
jwt.secret=your_jwt_secret_key
jwt.expiration=604800000  # 7 days in milliseconds

5. Razorpay
razorpay.key.id=your_razorpay_key_id
razorpay.key.secret=your_razorpay_key_secret

6. Application Base URL
app.base.url=http://localhost:8080


The property:
spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration
disables Spring Boot’s default user configuration so your custom authentication works correctly.

📥 Getting Started
Prerequisites

Node.js >= 18

Java 17+

Maven

MongoDB

Installation

Clone the repository:

git clone https://github.com/yourusername/ResumeBuilderApp.git
cd resume_builder


Setup Backend:

cd backend
./mvnw spring-boot:run


Setup Frontend:

cd frontend
npm install
npm start


Open the app in your browser: http://localhost:PORTNUM

📸 Screenshots
<img width="1911" height="1021" alt="Screenshot 2025-12-06 174743" src="https://github.com/user-attachments/assets/5eb9a165-a6e6-416a-bdb9-df4230d67f38" />







