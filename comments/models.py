from django.db import models

class Comment(models.Model):
    text = models.TextField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    movie = models.ForeignKey(
        'movies.Movie',
        related_name="comments",
        on_delete=models.CASCADE
    )


    def __str__(self):
        return f'Comment - {self.id} on Movie - {self.movie}'

