from ..serializers.common import MovieSerializer
from genres.serializers.common import GenreSerializer
from comments.serializers.common import CommentSerializer

class PopulatedMovieSerializer(MovieSerializer):

    comments = CommentSerializer(many=True)
    genre = GenreSerializer(many=True)
