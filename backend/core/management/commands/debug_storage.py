from django.core.management.base import BaseCommand
from django.core.files.storage import default_storage

class Command(BaseCommand):
    help = "Print current storage backend info"

    def handle(self, *args, **options):
        print("Storage backend:", default_storage.__class__)
        print("Storage module:", default_storage.__class__.__module__)
        print("Storage name:", default_storage.__class__.__name__)
