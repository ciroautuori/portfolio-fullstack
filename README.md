# 🚀 Dynamic Full-Stack Portfolio

[![Django](https://img.shields.io/badge/django-5.1.5-green.svg?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)  
[![React](https://img.shields.io/badge/react-18.0.0-blue.svg?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)  
[![PostgreSQL](https://img.shields.io/badge/postgresql-15-blue.svg?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)  
[![Nginx](https://img.shields.io/badge/nginx-1.21.3-brightgreen.svg?style=for-the-badge&logo=nginx&logoColor=white)](https://www.nginx.com/)  
[![Docker](https://img.shields.io/badge/docker-20.10.8-blue.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)  
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-3.0.0-blue.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Dynamic Full-Stack Portfolio** is a fully containerized portfolio application designed to showcase and manage your professional experience dynamically. Built with a robust full-stack architecture that includes **Django**, **React**, **PostgreSQL**, and **Nginx**, this project offers a seamless and modern solution for updating and presenting your CV.

---

## 📌 Key Features

- **Dynamic CV Management**  
  Effortlessly update and manage your curriculum vitae using a comprehensive Django admin interface.

- **Modern Full-Stack Architecture**  
  Leverage a robust Django backend, a responsive React frontend, and a reliable PostgreSQL database.

- **Containerized Environment**  
  Simplify development and deployment with Docker and Docker Compose, ensuring consistency across environments.

- **Optimized Request Handling**  
  Benefit from Nginx acting as a reverse proxy for efficient static file serving and secure request management.

---

## ⚙️ System Architecture & Services

This project is comprised of the following Docker services:

| **Service**  | **Description**                                  | **Port**     |
|--------------|--------------------------------------------------|--------------|
| **db**       | PostgreSQL 15 database                           | *Internal*   |
| **backend**  | Django backend with an admin panel               | `8000`       |
| **frontend** | React-based frontend application                 | `3000`       |
| **nginx**    | Nginx reverse proxy for request routing          | `80`, `443`  |

---

## 🛠️ Installation & Configuration

### 📋 Prerequisites

Before you begin, ensure that you have installed the following on your system:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### 🔧 Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/yourproject.git
   cd yourproject
   ```

2. **Configure Environment Variables**

   Create a file named `.env.dev` in the project root and specify the necessary environment variables. For example:

   ```env
   # PostgreSQL Database Configuration
   POSTGRES_USER=your_user
   POSTGRES_PASSWORD=your_password
   POSTGRES_DB=your_database

   # Django Configuration
   DJANGO_SECRET_KEY=your_secret_key
   DJANGO_DEBUG=True
   DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1
   ```

3. **Start the Development Environment**

   Build and run the Docker containers with:

   ```bash
   docker-compose up --build
   ```

4. **Verify Container Status**

   Confirm that all services are up and running:

   ```bash
   docker ps
   ```

---

## 🚀 Usage

### Accessing the Application

- **Django API & Backend**: [http://localhost:8000](http://localhost:8000)
- **Django Admin Panel**: [http://localhost:8000/admin](http://localhost:8000/admin)
- **React Frontend**: [http://localhost:3000](http://localhost:3000)
- **Nginx Reverse Proxy**: [http://localhost](http://localhost)

### Managing the Backend

- **Run Database Migrations**

  Apply the necessary database migrations by executing:

  ```bash
  docker-compose exec backend python manage.py migrate
  ```

- **Create a Django Superuser**

  Set up an administrator account to access the Django admin panel:

  ```bash
  docker-compose exec backend python manage.py createsuperuser
  ```

---

## 💾 Data Persistence

Docker volumes are employed to ensure data persistence across container restarts:

- **db**: Stores PostgreSQL database data.
- **static**: Holds Django static files.
- **media**: Contains Django media uploads.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request with any improvements or suggestions.

---

Thank you for exploring **Dynamic Full-Stack Portfolio**. Happy coding!
