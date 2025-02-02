from rest_framework import generics
from ..models import Education
from ..serializers import EducationSerializer


class EducationList(generics.ListAPIView):
    serializer_class = EducationSerializer

    def get_queryset(self):
        queryset = Education.objects.all()
        return queryset


class EducationDetail(generics.RetrieveAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
