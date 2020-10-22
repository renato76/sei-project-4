from ..serializers.common import MovieSerializer
from comments.serializers.common import CommentSerializer

class PopulatedMovieSerializer(MovieSerializer):

    comments = CommentSerializer(many=True)
