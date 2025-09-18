from django.db import models
import uuid
from django.core.validators import MaxValueValidator, MinValueValidator
from smart_selects.db_fields import ChainedForeignKey
from library.models import Type, Subtype, Category
from django.contrib.auth.models import User


# Create your models here.
def upload_to_menu(instance, filename):
    return f"menu/items/{filename}"  # keeps all item images in one folder

def upload_to_profile(instance, filename):
  return f"profile/{filename}"

def upload_to_review(instance, filename):
  return f"review/{filename}"

def upload_to_post(instance, filename):
  return f"posts/{filename}"



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
  
  class Meta: 
    verbose_name_plural = 'Menu Items'
    verbose_name = 'Menu Item'
  
  
class Prices(models.Model):
  menu_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE, related_name='mnu_prices')
  label = models.CharField(max_length=50, null=True, blank=True)
  price = models.DecimalField(max_digits=8, decimal_places=0, null=True)

  def __str__(self):
    return f"{self.menu_item.mnu_name} - {self.label}: {self.price}"
  
  class Meta: 
    verbose_name_plural = 'Prices'
    verbose_name = 'Price'





# REVIEW AND REPLIES MODELS 

class Reviews(models.Model):
  rvw_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
  rvw_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE, null=True, blank=True, related_name="reviews")
  rvw_user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
  rvw_icon = models.ImageField(upload_to=upload_to_profile, blank=True, null=True)
  rvw_name = models.CharField(max_length=50, default="Anonymous", blank=True, null=True)
  rvw_rate = models.PositiveBigIntegerField( validators=[MinValueValidator(1), MaxValueValidator(5)], blank=True, null=True)
  rvw_text = models.TextField(max_length=2000, default=" ", null=True, blank=True)
  rvw_image = models.ImageField(upload_to=upload_to_review, null=True, blank=True)
  rvw_date = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"{self.rvw_name}"
  
  def get_display_name(self):
    if self.rvw_user:
        return f"{self.rvw_user.first_name} {self.rvw_user.last_name}".strip() or self.rvw_user.email
    return self.rvw_name or "Anonymous"

  class Meta: 
    verbose_name_plural = 'Reviews'
    verbose_name = 'Review'
  
class Reply(models.Model):
  rply_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
  rply_user = models.ForeignKey(User, models.CASCADE, null=True, blank=True)
  rply_to_person = models.ForeignKey(Reviews, on_delete=models.CASCADE,null=True, blank=True, related_name="rvw_replies")
  rply_name = models.CharField(max_length=100, default="Anonymous")
  rply_icon = models.ImageField(upload_to=upload_to_profile, null=True, blank=True)
  rply_text = models.TextField(max_length=2000)
  rply_date = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"{self.rply_name}"
  
  def get_display_name(self):
    if self.rply_user:
        return f"{self.rply_user.first_name} {self.rply_user.last_name}".strip() or self.rply_user.email
    return self.rply_name or "Anonymous"
  
  class Meta: 
    verbose_name_plural = 'Replies'
    verbose_name = 'Reply'

class Like(models.Model):
  like_id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
  like_user= models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
  like_review= models.ForeignKey(Reviews, on_delete=models.CASCADE, related_name="rvw_likes")
  like_date = models.DateTimeField(auto_now_add=True)

  class Meta:
    unique_together = ('like_user', 'like_review')  # One like per user per review
    verbose_name_plural = 'Likes'
    verbose_name = 'Like'
    
  def __str__(self):
    return f"{self.like_user.email} liked {self.like_review.get_display_name()}'s review"


# POST MODEL 
class Post(models.Model):

  pst_id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
  pst_image = models.ImageField(upload_to=upload_to_post)
  pst_created_at = models.DateTimeField(auto_now_add=True)
  pst_caption = models.TextField(max_length=1000)
  pst_menu_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE, null=True, blank=True, related_name="pst_menu")

  def __str__(self):
    return f"{self.pst_id}"
  
  class Meta: 
    verbose_name_plural = 'Posts'
    verbose_name = 'Post'
  
