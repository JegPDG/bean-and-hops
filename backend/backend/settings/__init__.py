# backend/settings/__init__.py
import os

ENV = os.environ.get('DJANGO_ENV', 'development')

if ENV == 'production':
    from .production import *
elif ENV == 'staging':
    from .staging import *
else:
    from .development import *
