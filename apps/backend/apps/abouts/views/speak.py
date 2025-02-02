from rest_framework import generics
from ..models import Speak
from ..serializers import SpeakSerializer

class SpeakList(generics.ListAPIView):
    queryset = Speak.objects.all()
    serializer_class = SpeakSerializer  
    
class SpeakDetail(generics.RetrieveAPIView):
    queryset = Speak.objects.all()
    serializer_class = SpeakSerializer