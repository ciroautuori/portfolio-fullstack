from django.db import models


class Technology(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to='technologies/')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Technologies'
