from django.shortcuts import render

from .models import *
from .serializers import *
from rest_framework import viewsets

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuarios.objects.all()
    serializer_class = UsuarioSerializer

class EmpresasTransporteViewSet(viewsets.ModelViewSet):
    queryset = EmpresasTransporte.objects.all()
    serializer_class = EmpresasSerializer

class BusesViewSet(viewsets.ModelViewSet):
    queryset = Buses.objects.all()
    serializer_class = BusesSerializer

class BoletosViewSet(viewsets.ModelViewSet):
    queryset = Boletos.objects.all()
    serializer_class = BoletosSerializer

class ChoferesViewSet(viewsets.ModelViewSet):
    queryset = Choferes.objects.all()
    serializer_class = ChoferesSerializer

class ItinerariosViewSet(viewsets.ModelViewSet):
    queryset = Itinerarios.objects.all()
    serializer_class = ItinerariosSerializer

class RutasViewSet(viewsets.ModelViewSet):
    queryset = Rutas.objects.all()
    serializer_class = RutasSerializer

