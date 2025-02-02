from rest_framework import serializers
from ..models import Project
from .technology import TechnologySerializer


class ProjectSerializer(serializers.ModelSerializer):
    technologies = TechnologySerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = [
            'id', 'title', 'description', 'image',
            'url', 'github_url', 'technologies',
            'featured', 'created_at', 'updated_at'
        ]
