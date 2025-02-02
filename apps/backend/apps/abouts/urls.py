from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import AboutList, AboutDetail
from .views import EducationList, EducationDetail
from .views import ExperinenceList, ExperinenceDetail
from .views import SkillList, SkillDetail
from .views import SpeakList, SpeakDetail

app_name = 'abouts'

urlpatterns = [
    path('about/', AboutList.as_view(), name='about-list'),
    path('about/<int:pk>/', AboutDetail.as_view(), name='about-detail'),
    path('education/', EducationList.as_view(), name='education-list'),
    path('education/<int:pk>/', EducationDetail.as_view(), name='education-detail'),
    path('experience/', ExperinenceList.as_view(), name='experience-list'),
    path('experience/<int:pk>/', ExperinenceDetail.as_view(),
         name='experience-detail'),
    path('skill/', SkillList.as_view(), name='skill-list'),
    path('skill/<int:pk>/', SkillDetail.as_view(), name='skill-detail'),
    path('speak/', SpeakList.as_view(), name='speak-list'),
    path('speak/<int:pk>/', SpeakDetail.as_view(), name='speak-detail'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
