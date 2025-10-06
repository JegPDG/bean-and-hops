# backend/settings/production.py
from .base import *

DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'

import dj_database_url
from django.core.files.storage import default_storage
from django.conf import settings
from django.core.files.storage import storages
import cloudinary

print("=" * 60)
print("PRINT AT THE START OF PRODUCTION.PY")
print("CLOUDINARY DEBUG INFO")
print("CLOUDINARY_CLOUD_NAME:", os.environ.get("CLOUDINARY_CLOUD_NAME"))
print("CLOUDINARY_API_KEY:", os.environ.get("CLOUDINARY_API_KEY"))
print("CLOUDINARY_API_SECRET:", os.environ.get("CLOUDINARY_API_SECRET"))

print("Cloudinary config:", cloudinary.config().cloud_name)

print("=" * 60)

print(f"Storage backend: {type(default_storage)}")
print(f"Storage class: {default_storage.__class__.__module__}.{default_storage.__class__.__name__}")
print("=" * 60)

print("=" * 60)
print("AFTER setting DEFAULT_FILE_STORAGE")
print("settings.DEFAULT_FILE_STORAGE:", settings.DEFAULT_FILE_STORAGE)
print("storages.backends:", storages.backends.keys())
print("default_storage:", type(default_storage))
print("=" * 60)

DEBUG = False

# Get from environment variable
ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', '').split(',')

# CORS for production
CORS_ALLOWED_ORIGINS = os.environ.get('CORS_ALLOWED_ORIGINS', '').split(',')
CORS_ALLOW_CREDENTIALS = True

# Security Settings
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
X_FRAME_OPTIONS = 'DENY'
SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True

# CSRF Trusted Origins
CSRF_TRUSTED_ORIGINS = os.environ.get('CSRF_TRUSTED_ORIGINS', '').split(',')

# Database - PostgreSQL on Render
DATABASES = {
    'default': dj_database_url.config(
        default=os.environ.get('DATABASE_URL'),
        conn_max_age=600,
        conn_health_checks=True,
    )
}

# Static files - WhiteNoise
# STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATIC_URL = '/static/'

# Media files - Use cloud storage in production (AWS S3, Cloudinary, etc.)
# DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'

# MEDIA_URL = '/media/'

STORAGES = {
    "default": {
        "BACKEND": "cloudinary_storage.storage.MediaCloudinaryStorage",
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}
# MEDIA_URL = None
# For now, use local storage (not recommended for production long-term)

# Email backend for production
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = os.environ.get('EMAIL_HOST', 'smtp.gmail.com')
EMAIL_PORT = int(os.environ.get('EMAIL_PORT', 587))
EMAIL_USE_TLS = True
EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD')

# Logging
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module} {message}',
            'style': '{',
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'verbose',
        },
    },
    'root': {
        'handlers': ['console'],
        'level': 'INFO',
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'level': 'INFO',
            'propagate': False,
        },
    },
}

# DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'
# print("DEFAULT_FILE_STORAGE from production.py:", DEFAULT_FILE_STORAGE)

MEDIA_URL = '/media/'


# Cloudinary URLs (automatic)
# MEDIA_URL = '/media/'  # Cloudinary handles the actual URL

print("=" * 60)
print("PRINT AT THE END")
print(f"Storage backend: {type(default_storage)}")
print(f"Storage class: {default_storage.__class__.__module__}.{default_storage.__class__.__name__}")
print("=" * 60)
