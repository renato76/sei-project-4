from django.urls import path
from .views import MoviesListView

urlpatterns = [
    path('', MoviesListView.as_view())
]