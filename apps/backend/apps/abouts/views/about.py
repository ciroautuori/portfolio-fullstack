from rest_framework import generics
from ..models import About
from ..serializers import AboutSerializer


class AboutList(generics.ListAPIView):
    serializer_class = AboutSerializer

    def get_queryset(self):
        queryset = About.objects.all()
        return queryset


class AboutDetail(generics.RetrieveAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer
