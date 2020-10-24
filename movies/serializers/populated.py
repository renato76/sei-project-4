from jwt_auth.serializers.nested import NestedUserSerializer
from ..serializers.common import MovieSerializer
from genres.serializers.common import GenreSerializer
from comments.serializers.populated import PopulatedCommentSerializer

class PopulatedMovieSerializer(MovieSerializer):

    comments = PopulatedCommentSerializer(many=True)
    genre = GenreSerializer(many=True)
    user = NestedUserSerializer()
    liked_by = NestedUserSerializer(many=True)
