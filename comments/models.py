from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator 
from django.db.models import Avg

class Comment(models.Model):
    text = models.TextField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    rating = models.PositiveIntegerField(default=0, validators=[MinValueValidator(1), MaxValueValidator(5)])
    movie = models.ForeignKey(
        'movies.Movie',
        related_name="comments",
        on_delete=models.CASCADE
    )

    # def no_of_ratings(self):
    #     ratings = Comment.objects.filter(movie=self)
    #     return len(ratings)

    # def avg_rating(self):
    #     sum = 0
    #     ratings = Comment.objects.filter(movie=self)
    #     for rating in ratings:
    #         sum += rating.stars
    #     if len(ratings) > 0:
    #         return sum / len(ratings)
    #     else:
    #         return 0


    def __str__(self):
        return f'Comment - {self.id} on Movie - {self.movie}'

