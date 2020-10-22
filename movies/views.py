from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework.exceptions import NotFound

from .models import Movie
from .serializers.common import MovieSerializer

class MoviesListView(APIView):

    def get(self, _request):
        movies_list = Movie.objects.all()
        serialized_movies_list = MovieSerializer(movies_list, many=True)
        return Response(serialized_movies_list.data, status=status.HTTP_200_OK)

class MovieDetailView(APIView):

    def get_movie(self, pk):
        try:
            return Movie.objects.get(pk=pk)
        except Movie.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        movie = self.get_movie(pk=pk)
        serialized_movie = MovieSerializer(movie)
        return Response(serialized_movie.data, status=status.HTTP_200_OK)
