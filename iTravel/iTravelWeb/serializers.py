from rest_framework import serializers
from .models import *

class EmpresasSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmpresasTransporte
        fields = '__all__'

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = '__all__'

class RutasSerializer(serializers.ModelSerializer):
    empresa = EmpresasSerializer()
    class Meta:
        model = Rutas
        fields = '__all__'

class BusesSerializer(serializers.ModelSerializer):
    empresa = EmpresasSerializer()
    class Meta:
        model = Buses
        fields = '__all__'

class BoletosSerializer(serializers.ModelSerializer):
    bus = BusesSerializer()
    usuario=UsuarioSerializer()
    class Meta:
        model = Boletos
        fields = '__all__'

class ChoferesSerializer(serializers.ModelSerializer):
    bus=BusesSerializer()
    class Meta:
        model = Choferes
        fields = '__all__'

class ItinerariosSerializer(serializers.ModelSerializer):
    boleto=BoletosSerializer()
    class Meta:
        model = Itinerarios
        fields = '__all__'
