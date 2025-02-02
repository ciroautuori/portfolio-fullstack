import os

# Leggi l'ambiente corrente
ENVIRONMENT = os.getenv('DJANGO_ENV', 'development')

if ENVIRONMENT == 'production':
    from .prod import *
else:
    from .dev import *
