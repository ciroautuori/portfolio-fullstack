# 🚀 Dynamic Full-Stack Portfolio

[![Django](https://img.shields.io/badge/django-5.1.5-green.svg?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![React](https://img.shields.io/badge/react-18.0.0-blue.svg?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/postgresql-15-blue.svg?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Nginx](https://img.shields.io/badge/nginx-1.21.3-brightgreen.svg?style=for-the-badge&logo=nginx&logoColor=white)](https://www.nginx.com/)
[![Docker](https://img.shields.io/badge/docker-20.10.8-blue.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-3.0.0-blue.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

A fully containerized full-stack portfolio with an admin panel for managing CV data. Built with **Django**, **React**, **PostgreSQL**, and **Nginx**, this application allows users to dynamically update and showcase their professional experience.


## 📌 Features

✔️ **Dynamic CV Management** – Update and manage CV details via a user-friendly Django admin panel.  
✔️ **Full-Stack Architecture** – Django backend, React frontend, and PostgreSQL database.  
✔️ **Dockerized Development** – Easy setup and environment consistency with Docker.  
✔️ **Reverse Proxy & Static File Handling** – Nginx for optimized request management.  

---

## ⚙️ Services Overview

This project consists of the following Docker services:

| Service     | Description                        | Port  |
|-------------|------------------------------------|-------|
| **db**      | PostgreSQL 15 database             | _N/A_ |
| **backend** | Django backend & admin panel       | `8000`|
| **frontend**| React frontend                     | `3000`|
| **nginx**   | Reverse proxy for handling requests| `80`, `443`|

---

## 🛠️ Setup & Installation

### 📋 Prerequisites

Ensure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### 🔧 Development Setup

1. **Clone the repository**

   ```sh
   git clone https://github.com/yourusername/yourproject.git
   cd yourproject
   ```

2. **Create a `.env.dev` file**

   Configure environment variables for database, Django settings, and allowed hosts.

3. **Start the development environment**

   ```sh
   docker-compose up --build
   ```

4. **Verify running containers**

   ```sh
   docker ps
   ```

## 🚀 Usage

### ▶️ Running the Application

- **Backend API (Django)**: [http://localhost:8000](http://localhost:8000)
- **Django Admin Panel**: [http://localhost:8000/admin](http://localhost:8000/admin)
- **Frontend (React)**: [http://localhost:3000](http://localhost:3000)
- **Nginx Reverse Proxy**: [http://localhost](http://localhost)

### 🛠️ Managing the Backend

- **Run database migrations**:

  ```sh
  docker-compose exec backend python manage.py migrate
  ```

- **Create a Django superuser**:

  ```sh
  docker-compose exec backend python manage.py createsuperuser
  ```

### 🔑 Environment Variables

Your `.env.dev` file should include:

```env
# Database
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
POSTGRES_DB=your_database

# Django
DJANGO_SECRET_KEY=your_secret_key
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1
```

### 💾 Data Persistence (Volumes)

The following named volumes store persistent data:

- **db** – PostgreSQL database storage
- **static** – Django static files
- **media** – Django media files

---

## 📝 License

This project is licensed under the MIT License.

---

💡 Feel free to contribute or customize the project to suit your needs!
