from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import TechnologyList, ProjectList, ProjectDetail

app_name = 'projects'

urlpatterns = [
    path('technologies/', TechnologyList.as_view(), name='technology-list'),
    path('technologies/<int:pk>/', TechnologyList.as_view(),
         name='technology-detail'),
    path('projects/', ProjectList.as_view(), name='project-list'),
    path('projects/<int:pk>/', ProjectDetail.as_view(), name='project-detail'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
