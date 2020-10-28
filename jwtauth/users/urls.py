from django.urls import path, include
from .views import CreateUserAPIView, UserRetrieveUpdateAPIView, authenticate_user

urlpatterns = [
    path('create/', CreateUserAPIView.as_view()),
    path('update/', UserRetrieveUpdateAPIView.as_view()),
    path('login/', authenticate_user),
]
