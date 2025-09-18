# your_original_app/migrations/000X_update_menuitem_fk_data.py
from django.db import migrations

def update_menuitem_fks_forward(apps, schema_editor):
    # Get the models
    MenuItem = apps.get_model('beanandhops', 'MenuItem')
    
    # Get library models
    LibType = apps.get_model('library', 'Type')
    LibCategory = apps.get_model('library', 'Category')
    LibSubtype = apps.get_model('library', 'Subtype')
    
    print("Updating MenuItem foreign keys...")
    
    # Update each MenuItem to point to the corresponding library records
    for menu_item in MenuItem.objects.all():
        updated = False
        
        # Find matching Type by name
        if menu_item.mnu_type_id:
            try:
                # Get the old type name (this might fail if the old models are already deleted)
                # In that case, we'll need to match by ID instead
                old_type_name = menu_item.mnu_type.name
                new_type = LibType.objects.get(name=old_type_name)
                menu_item.mnu_type_id = new_type.id
                updated = True
            except:
                print(f"Could not update type for MenuItem {menu_item.mnu_name}")
        
        # Find matching Category by name
        if menu_item.mnu_category_id:
            try:
                old_category_name = menu_item.mnu_category.name
                new_category = LibCategory.objects.get(name=old_category_name)
                menu_item.mnu_category_id = new_category.id
                updated = True
            except:
                print(f"Could not update category for MenuItem {menu_item.mnu_name}")
        
        # Find matching Subtype by name
        if menu_item.mnu_subtype_id:
            try:
                old_subtype_name = menu_item.mnu_subtype.name
                new_subtype = LibSubtype.objects.get(name=old_subtype_name)
                menu_item.mnu_subtype_id = new_subtype.id
                updated = True
            except:
                print(f"Could not update subtype for MenuItem {menu_item.mnu_name}")
        
        if updated:
            menu_item.save()
            print(f"  Updated MenuItem: {menu_item.mnu_name}")
    
    print("MenuItem foreign key update completed!")

def update_menuitem_fks_reverse(apps, schema_editor):
    # This would be complex to reverse, so we'll just pass
    pass

class Migration(migrations.Migration):
    dependencies = [
        ('library', '0002_transfer_data'),
        ('beanandhops', '0008_alter_menuitem_mnu_category_remove_subtype_category_and_more'),  # Your actual migration
    ]

    operations = [
        migrations.RunPython(update_menuitem_fks_forward, update_menuitem_fks_reverse),
    ]