**Efficiently Manage Projects and Technologies**  

[![Python](https://img.shields.io/badge/python-3.11-blue.svg?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Django](https://img.shields.io/badge/django-4.2-green.svg?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![PostgreSQL](https://img.shields.io/badge/postgresql-15-blue.svg?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

Welcome to the official repository of our Django-based backend project. This application serves as a robust solution for managing projects and their associated technologies through RESTful APIs. Designed with scalability and performance in mind, it is the ideal choice for developers and organizations.

---

## **Key Features**

- **Project Management**: Enables users to create, list, and retrieve detailed information about projects, including their associated technologies.
- **Technology Management**: Provides functionality to list and retrieve information about various technologies.
- **RESTful API**: Built using Django REST Framework for scalable and standardized API development.
- **CORS Support**: Configured with Django CORS Headers to enable secure cross-origin requests from specified frontend applications.

---

## **System Requirements**

Ensure you have the following software installed on your system:

- **Python**: Version 3.8 or higher
- **Django**: Version 4.2.18
- **PostgreSQL**: Database system for data persistence
- **Django REST Framework**: For API development
- **Django CORS Headers**: For managing cross-origin requests

---

## **Setup Instructions**

### **1. Clone the Repository**

Download the project files by cloning the Git repository:

```bash
git clone https://github.com/ciroautuori/Django-based-backend.git
cd Django-based-backend/
```

### **2. Create a Virtual Environment**

Set up a virtual environment to isolate dependencies:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: `venv\Scripts\activate`
```

### **3. Install Dependencies**

Install the required Python packages listed in `requirements/local.txt`:

```bash
pip install -r requirements/local.txt
```

### **4. Configure Environment Variables**

- Copy the example environment file:

  ```bash
  cp .env.example .env
  ```

- Open the `.env` file and provide the necessary details:

  ```env
  SECRET_KEY=<your-django-secret-key>
  DEBUG=True
  ALLOWED_HOSTS=localhost,127.0.0.1
  DB_NAME=<your-database-name>
  DB_USER=<your-database-user>
  DB_PASSWORD=<your-database-password>
  DB_HOST=localhost
  DB_PORT=5432
  FRONTEND_URL=http://localhost:5173
  ```

### **5. Apply Database Migrations**

Set up the database schema by running migrations:

```bash
python manage.py makemigrations
python manage.py migrate
```

### **6. Create a Superuser**

Create an admin account for accessing the Django admin interface:

```bash
python manage.py createsuperuser
```

### **7. Start the Development Server**

Run the local development server:

```bash
python manage.py runserver
```

Access the API at: [http://localhost:8000/](http://localhost:8000/)

---

## **Deployment Instructions**

### **1. Production Configuration**

For deployment, ensure the following environment variables are set:

- `DJANGO_SECRET_KEY`: A secure, unique key for the Django project.
- `DEBUG`: Set to `False` in production.
- `ALLOWED_HOSTS`: A comma-separated list of domains serving the application.
- `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT`: Production database credentials.
- `CORS_ALLOWED_ORIGINS`: List of frontend domains authorized for API access.

### **2. Install Production Dependencies**

Install the required dependencies from `requirements/prod.txt`:

```bash
pip install -r requirements/prod.txt
```

### **3. Use a WSGI Server**

Use a production-grade WSGI server like Gunicorn:

```bash
pip install gunicorn
```

Run the server:

```bash
gunicorn core.wsgi:application --bind 0.0.0.0:8000
```

### **4. Reverse Proxy with Nginx**

Set up Nginx as a reverse proxy for Gunicorn to handle requests efficiently. Configure SSL for secure connections.

---

## **Folder Structure Overview**

```
project-name/
├── backend/               # Django backend source code
│   ├── apps/              # Django applications
│   ├── core/              # Core settings and configurations
│   └── manage.py          # Django management script
├── requirements/          # Dependency files
└── .env.example           # Example environment configuration
```

---

## **Testing the Application**

Run tests to ensure everything works as expected:

```bash
python manage.py test
```

---

## **Contributing**

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your commit message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
