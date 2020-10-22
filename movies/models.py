from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=50)
    image = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    genre = models.CharField(max_length=50)
    starring = models.CharField(max_length=100)
    release = models.CharField(max_length=4)
    director = models.CharField(max_length=30)
    duration = models.CharField(max_length=10)
    age_rating = models.CharField(max_length=3)

    def __str__(self):
        return f'{self.title}'