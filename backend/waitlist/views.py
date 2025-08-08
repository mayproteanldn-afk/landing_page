from rest_framework import generics
from .models import Waitlist
from .serializers import WaitlistSerializer
from rest_framework.response import Response
from rest_framework import status
from .waitlist_email import send_waitlist_email  

class WaitlistListCreateView(generics.ListCreateAPIView):
    queryset = Waitlist.objects.all()
    serializer_class = WaitlistSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        # Enviar email después de crear el usuario en la waitlist
        email_address = serializer.data.get('email')
        if email_address:
            send_waitlist_email(email_address)

        return Response({
            "status": "success",
            "message": "User successfully added to the waitlist.",
            "data": serializer.data
        }, status=status.HTTP_201_CREATED)
