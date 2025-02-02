from django.db import models


class Experinence(models.Model):
    company = models.CharField(max_length=200)
    img = models.ImageField(upload_to='work_exp/', blank=True)
    title = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    description = models.TextField()

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-end_date', '-start_date']
