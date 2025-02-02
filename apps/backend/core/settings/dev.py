from .base import *
from decouple import config

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-lh1ncmy92b%n!ot3!bnern$hav+sjek-=e=^92(y3=8ma=&rru'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']

# Database
POSTGRES_USER = config('POSTGRES_USER', cast=str)
POSTGRES_PASSWORD = config('POSTGRES_PASSWORD', cast=str)
POSTGRES_DB = config('POSTGRES_DB', cast=str)

if all([POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB]):
    print("Using PostgreSQL")
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': POSTGRES_DB,
            'USER': POSTGRES_USER,
            'PASSWORD': POSTGRES_PASSWORD,
            'HOST': 'db',  # 'db', 'localhost'
            'PORT': 5432,
        }
    }


# CORS
CORS_ALLOW_ALL_ORIGINS = True  # Consente tutte le origini durante lo sviluppo

CORS_ALLOW_CREDENTIALS = True

CORS_ALLOWED_ORIGINS = ['http://localhost:3000']

