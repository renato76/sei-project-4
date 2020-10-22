from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Movie
from .serializers.common import MovieSerializer

class MoviesListView(APIView):

    def get(self,request):
        movies_list = Movie.objects.all()
        serialized_movies_list = MovieSerializer(movies_list, many=True)
        return Response(serialized_movies_list.data, status=status.HTTP_200_OK)

# class MovieDetailView(APIView):
    

