from rest_framework import serializers
from ..models import Experinence


class ExperienceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Experinence
        fields = '__all__'
