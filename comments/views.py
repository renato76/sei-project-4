from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers.common import CommentSerializer
# from .models import Comment

class CommentListView(APIView):

    def post(self, request):
        comment_to_create = CommentSerializer(data=request.data)
        if comment_to_create.is_valid():
            comment_to_create.save()
            return Response(comment_to_create.data, status=status.HTTP_201_CREATED)
        return Response(comment_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

