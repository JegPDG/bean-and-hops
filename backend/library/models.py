from django.db import models

# Create your models here.
class Type(models.Model):
  name = models.CharField(max_length=100)

  def __str__(self):
    return f"{self.name}"

class Category(models.Model):
  type = models.ForeignKey(Type, on_delete=models.CASCADE, related_name="categories")
  name = models.CharField(max_length=100)

  def __str__(self):
    return f"{self.name}"
  
  class Meta: 
    db_table = 'tbl_Category'
    verbose_name_plural = 'Categories'
    verbose_name = 'Category'

class Subtype(models.Model):
  category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="subtypes")
  name = models.CharField(max_length=100)

  def __str__(self):
    return f"{self.name}"