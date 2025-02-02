from django.db import models


class Education(models.Model):
    school = models.CharField(max_length=200)
    icon = models.ImageField(upload_to='education/', blank=True)
    degree = models.CharField(max_length=200)
    field_of_study = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.degree

    class Meta:
        ordering = ['-end_date', '-start_date']
