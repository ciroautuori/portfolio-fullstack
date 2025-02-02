from django.db import models


class About(models.Model):
    name = models.CharField(max_length=200)
    img = models.ImageField(upload_to='about/')
    description = models.TextField()
    email = models.EmailField()
    github = models.URLField(default='https://github.com/')
    linkedin = models.URLField(default='https://linkedin.com/in/')
    phone = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created_at']
