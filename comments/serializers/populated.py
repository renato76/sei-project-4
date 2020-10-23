from ..serializers.common import CommentSerializer
from jwt_auth.serializers.nested import NestedUserSerializer

class PopulatedCommentSerializer(CommentSerializer):

    user = NestedUserSerializer()