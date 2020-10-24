from ..serializers.common import UserSerializer
from movies.serializers.common import MovieSerializer
from comments.serializers.common import CommentSerializer

class PopulatedUserSerializer(UserSerializer):

    created_movies = MovieSerializer(many=True)
    posted_comments = CommentSerializer(many=True)

    