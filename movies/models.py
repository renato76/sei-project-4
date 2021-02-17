from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=50)
    image = models.CharField(max_length=150)
    description = models.CharField(max_length=500)
    starring = models.CharField(max_length=100)
    release = models.CharField(max_length=4)
    director = models.CharField(max_length=30)
    duration = models.CharField(max_length=10)
    age_rating = models.CharField(max_length=3)
    trailer = models.CharField(max_length=200)
    genre = models.ManyToManyField(
        'genres.Genre',
        related_name="genres"
    )
    user = models.ForeignKey(
        'jwt_auth.user',
        related_name="created_movies",
        on_delete=models.CASCADE
    )

    liked_by = models.ManyToManyField(
        'jwt_auth.User', 
        related_name='liked_movies', blank=True
    )

    def __str__(self):
        return f'{self.title}'