from django.db import models

class Speak(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to='speaks/')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Speaks'