from rest_framework import generics
from ..models import Experinence
from ..serializers import ExperienceSerializer


class ExperinenceList(generics.ListAPIView):
    serializer_class = ExperienceSerializer

    def get_queryset(self):
        queryset = Experinence.objects.all()
        return queryset


class ExperinenceDetail(generics.RetrieveAPIView):
    queryset = Experinence.objects.all()
    serializer_class = ExperienceSerializer
