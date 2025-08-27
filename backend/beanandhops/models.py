from django.db import models
import uuid
from django.core.validators import MaxValueValidator, MinValueValidator
from smart_selects.db_fields import ChainedForeignKey


# Create your models here.
def upload_to_menu(instance, filename):
    return f"menu/items/{filename}"  # keeps all item images in one folder

def upload_to_profile(instance, filename):
  return f"profile/{filename}"

def upload_to_review(instance, filename):
  return f"review/{filename}"

class Type(models.Model):
  name = models.CharField(max_length=100)

  def __str__(self):
    return f"{self.name}"

class Category(models.Model):
  type = models.ForeignKey(Type, on_delete=models.CASCADE, related_name="categories")
  name = models.CharField(max_length=100)

  def __str__(self):
    return f"{self.name}"

class Subtype(models.Model):
  category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="subtypes")
  name = models.CharField(max_length=100)

  def __str__(self):
    return f"{self.name}"
  



class MenuItem(models.Model):
  mnu_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
  mnu_type = models.ForeignKey(Type, on_delete=models.CASCADE)
  mnu_category = ChainedForeignKey(
    Category,
    chained_field = 'mnu_type',
    chained_model_field = 'type',
    show_all=False,
    auto_choose=True,
    sort=True, 
    on_delete=models.CASCADE,
    
    )
  
  mnu_subtype = ChainedForeignKey(
    Subtype, 
    chained_field = 'mnu_category',
    chained_model_field = 'category',
    show_all=False,
    auto_choose=True,
    sort=True, 
    on_delete=models.CASCADE, 
    null=True, 
    blank=True)


  mnu_name = models.CharField(max_length=200)
  mnu_image = models.ImageField(upload_to=upload_to_menu, blank=True, null=True)
  mnu_description = models.TextField(max_length=500, null=True, blank=True)


  def __str__(self):
    return f"{self.mnu_name}"
  
  
class Prices(models.Model):
  menu_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE, related_name='mnu_prices')
  label = models.CharField(max_length=50, null=True, blank=True)
  price = models.DecimalField(max_digits=8, decimal_places=2, null=True)

  def __str__(self):
    return f"{self.menu_item.mnu_name} - {self.label}: {self.price}"


class Reviews(models.Model):
  rvw_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
  rvw_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE, null=True, blank=True, related_name="reviews")
  rvw_icon = models.ImageField(upload_to=upload_to_profile, blank=True, null=True)
  rvw_name = models.CharField(max_length=50, default="Anonymous", blank=True, null=True)
  rvw_rate = models.PositiveBigIntegerField( validators=[MinValueValidator(1), MaxValueValidator(5)], blank=True, null=True)
  rvw_text = models.TextField(max_length=2000, default=" ", null=True, blank=True)
  rvw_image = models.ImageField(upload_to=upload_to_review, null=True, blank=True)
  rvw_date = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"{self.rvw_name}"
  
class Reply(models.Model):
  rply_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
  rply_to_person = models.ForeignKey(Reviews, on_delete=models.CASCADE,null=True, blank=True, related_name="rvw_replies")
  rply_name = models.CharField(max_length=100, default="Anonymous")
  rply_icon = models.ImageField(upload_to=upload_to_profile, null=True, blank=True)
  rply_text = models.TextField(max_length=2000)
  rply_date = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"{self.rply_name}"
    