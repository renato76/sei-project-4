from django.urls import path
from .views import MoviesListView, MovieDetailView

urlpatterns = [
    path('', MoviesListView.as_view()),
    path('<int:pk>/', MovieDetailView.as_view())
]