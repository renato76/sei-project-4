from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from .models import Movie
from .serializers.common import MovieSerializer
from .serializers.populated import PopulatedMovieSerializer

class MoviesListView(APIView):
    ''' Handles all requests to /movies (Get-Index and Post-Create) '''
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, _request):
        movies_list = Movie.objects.all()
        serialized_movies_list = MovieSerializer(movies_list, many=True)
        return Response(serialized_movies_list.data, status=status.HTTP_200_OK)

    ''' the create request will convert incoming data and validate it '''

    def post(self, request):
        request.data['user'] = request.user.id
        movie_to_create = MovieSerializer(data=request.data)
        if movie_to_create.is_valid():
            movie_to_create.save()
            return Response(movie_to_create.data, status=status.HTTP_201_CREATED)
        return Response(movie_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class MovieDetailView(APIView):
    ''' Handles all requests to /movies/id (Get-Show, Put-Update and Delete-Delete) '''

    permission_classes = (IsAuthenticatedOrReadOnly, )

    # get all movies
    def get_movie(self, pk):
        try:
            return Movie.objects.get(pk=pk)
        except Movie.DoesNotExist:
            raise NotFound()
    # check if user is same as movie owner
    def is_movie_owner(self, movie, user):
        if movie.user.id != user.id:
            raise PermissionDenied()

    # get one movie by its id
    def get(self, request, pk):
        movie = self.get_movie(pk=pk)
        serialized_movie = PopulatedMovieSerializer(movie)
        return Response(serialized_movie.data, status=status.HTTP_200_OK)

    ''' this update request below takes the original data and takes in the incoming update 
    then compares them and validates them '''

    # update one movie if logged in
    def put(self, request, pk):
        movie_to_update = self.get_movie(pk=pk)
        updated_movie = MovieSerializer(movie_to_update, data=request.data)
        if updated_movie.is_valid():
            updated_movie.save()
            return Response(updated_movie.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_movie.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # delete a movie if logged in
    def delete(self, request, pk):
        movie_to_delete = self.get_movie(pk=pk)
        self.is_movie_owner(movie_to_delete, request.user)
        movie_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class MovieLikeView(MovieDetailView):
    
    permission_classes = (IsAuthenticated, )

    def post(self, request, pk):
        movie_to_like = self.get_movie(pk=pk)
        movie_to_like.liked_by.add(request.user.id)
        movie_to_like.save()
        return Response({'Message': f'Like Added To Movie {pk}'}, status=status.HTTP_202_ACCEPTED)

