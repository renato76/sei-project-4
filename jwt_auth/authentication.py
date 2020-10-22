from rest_framework.authentication import BasicAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt_auth

User = get_user_model()

class JWTAuthentication(BasicAuthentication):
    

