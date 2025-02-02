from rest_framework import generics
from ..models import Project
from ..serializers import ProjectSerializer


class ProjectList(generics.ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        queryset = Project.objects.all()
        featured = self.request.query_params.get('featured', None)
        if featured is not None:
            queryset = queryset.filter(featured=featured.lower() == 'true')
        return queryset


class ProjectDetail(generics.RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
