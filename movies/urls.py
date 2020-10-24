from django.urls import path
from .views import MoviesListView, MovieDetailView, MovieLikeView

urlpatterns = [
    path('', MoviesListView.as_view()),
    path('<int:pk>/', MovieDetailView.as_view()),
    path('<int:pk>/likes/', MovieLikeView.as_view())
]