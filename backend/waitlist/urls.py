from django.urls import path
from .views import WaitlistListCreateView

urlpatterns = [
    path('waitlist/', WaitlistListCreateView.as_view(), name='waitlist-list-create'),
]
