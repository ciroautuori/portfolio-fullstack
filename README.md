# 🚀 Dynamic Full-Stack Portfolio

A fully containerized full-stack portfolio with an admin panel for managing CV data. Built with **Django**, **React**, **PostgreSQL**, and **Nginx**, this application allows users to dynamically update and showcase their professional experience.

## 📌 Features
✔️ **Dynamic CV Management** – Update and manage CV details via a user-friendly Django admin panel.  
✔️ **Full-Stack Architecture** – Django backend, React frontend, and PostgreSQL database.  
✔️ **Dockerized Development** – Easy setup and environment consistency with Docker.  
✔️ **Reverse Proxy & Static File Handling** – Nginx for optimized request management.  

---

## 📂 Tech Stack
| Technology  | Description |
|-------------|------------|
| **Django**  | Backend framework handling API and admin panel |
| **React**   | Frontend framework for dynamic UI |
| **PostgreSQL** | Database for structured data storage |
| **Nginx**   | Reverse proxy and static file server |
| **Docker**  | Containerization for seamless development |

---

## ⚙️ Services Overview
This project consists of the following Docker services:

| Service   | Description | Port |
|-----------|------------|------|
| **db** | PostgreSQL 15 database | _N/A_ |
| **backend** | Django backend & admin panel | `8000` |
| **frontend** | React frontend | `3000` |
| **nginx** | Reverse proxy for handling requests | `80`, `443` |

---

## 🛠️ Setup & Installation
### 📋 Prerequisites
Ensure you have the following installed:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### 🔧 Development Setup
1️⃣ **Clone the repository**  
```sh
git clone https://github.com/yourusername/yourproject.git
cd yourproject
```
2️⃣ Create a .env.dev file
Configure environment variables for database, Django settings, and allowed hosts.

3️⃣ Start the development environment
```sh
docker-compose up --build
```
4️⃣ Verify running containers
```sh
docker ps
```
🚀 Usage

▶️ Running the Application
	•	Backend API (Django): http://localhost:8000
	•	Django Admin Panel: http://localhost:8000/admin
	•	Frontend (React): http://localhost:3000
	•	Nginx Reverse Proxy: http://localhost

🛠️ Managing the Backend

Run database migrations:

docker-compose exec backend python manage.py migrate

Create a Django superuser:

docker-compose exec backend python manage.py createsuperuser

🔑 Environment Variables

Your .env.dev file should include:

# Database
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
POSTGRES_DB=your_database

# Django
DJANGO_SECRET_KEY=your_secret_key
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1

💾 Data Persistence (Volumes)

The following named volumes store persistent data:
	•	db – PostgreSQL database storage
	•	static – Django static files
	•	media – Django media files

📝 License

This project is licensed under the MIT License.

💡 Feel free to contribute or customize the project to suit your needs!
