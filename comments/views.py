from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .serializers.common import CommentSerializer
from .models import Comment

class CommentListView(APIView):

    permission_classes = (IsAuthenticated, )

    def post(self, request):
        request.data['user'] = request.user.id
        comment_to_create = CommentSerializer(data=request.data)
        if comment_to_create.is_valid():
            comment_to_create.save()
            return Response(comment_to_create.data, status=status.HTTP_201_CREATED)
        return Response(comment_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class CommentDetailView(APIView):

    permission_classes = (IsAuthenticated, )

    def get_comment(self, pk):
        try: 
            return Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise NotFound()

    def is_comment_owner(self, comment, user):
        if comment.user.id != user.id:
            raise PermissionDenied()

    def delete(self, request, pk):
        comment_to_delete = self.get_comment(pk=pk)
        self.is_comment_owner(commeny_to_delete, request.user)
        comment_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

        

