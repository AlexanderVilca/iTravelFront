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

    def create(self, validated_data):
        empresa_data = validated_data.pop('empresa', None)

        if empresa_data:
            empresa_instance, _ = EmpresasTransporte.objects.get_or_create(**empresa_data)
            validated_data['empresa'] = empresa_instance

        rutas_instance = Rutas.objects.create(**validated_data)
        return rutas_instance

class BusesSerializer(serializers.ModelSerializer):

    empresa = EmpresasSerializer()

    class Meta:
        model = Buses
        fields = '__all__'

    def create(self, validated_data):
        empresa_data = validated_data.pop('empresa', None)

        if empresa_data:
            empresa_instance = EmpresasTransporte.objects.create(**empresa_data)
            validated_data['empresa'] = empresa_instance

        buses_instance = Buses.objects.create(**validated_data)
        return buses_instance

class BoletosSerializer(serializers.ModelSerializer):

    bus = BusesSerializer()
    usuario = UsuarioSerializer()

    class Meta:
        model = Boletos
        fields = '__all__'

    def create(self, validated_data):

        bus_data = validated_data.pop('bus', None)
        usuario_data = validated_data.pop('usuario', None)

        if bus_data:

            empresa_data = bus_data.pop('empresa', None)

            if empresa_data:

                empresa_instance, _ = EmpresasTransporte.objects.get_or_create(**empresa_data)
                bus_data['empresa'] = empresa_instance

            bus_instance, _ = Buses.objects.get_or_create(**bus_data)
            validated_data['bus'] = bus_instance

        if usuario_data:

            usuario_instance, _ = Usuarios.objects.get_or_create(**usuario_data)
            validated_data['usuario'] = usuario_instance

        boletos_instance = Boletos.objects.create(**validated_data)
        return boletos_instance

class ChoferesSerializer(serializers.ModelSerializer):

    bus=BusesSerializer()
    class Meta:
        model = Choferes
        fields = '__all__'

    def create(self, validated_data):
        
        bus_data = validated_data.pop('bus', None)

        if bus_data:
            
            empresa_data = bus_data.pop('empresa', None)

            if empresa_data:
                empresa_instance, _ = EmpresasTransporte.objects.get_or_create(**empresa_data)
                bus_data['empresa'] = empresa_instance

            bus_instance, _ = Buses.objects.get_or_create(**bus_data)
            validated_data['bus'] = bus_instance

        choferes_instance = Choferes.objects.create(**validated_data)
        return choferes_instance
    
class ItinerariosSerializer(serializers.ModelSerializer):
    boleto=BoletosSerializer()
    class Meta:
        model = Itinerarios
        fields = '__all__'

    def create(self, validated_data):
        
        boleto_data = validated_data.pop('boleto', None)

        if boleto_data:
            
            bus_data = boleto_data.pop('bus', None)
            usuario_data = boleto_data.pop('usuario', None)

            if bus_data:

                empresa_data = bus_data.pop('empresa', None)

                if empresa_data:
                    empresa_instance, _ = EmpresasTransporte.objects.get_or_create(**empresa_data)
                    bus_data['empresa'] = empresa_instance

                bus_instance, _ = Buses.objects.get_or_create(**bus_data)
                boleto_data['bus'] = bus_instance

            if usuario_data:
                usuario_instance, _ = Usuarios.objects.get_or_create(**usuario_data)
                boleto_data['usuario'] = usuario_instance

            boleto_instance, _ = Boletos.objects.get_or_create(**boleto_data)
            validated_data['boleto'] = boleto_instance

        itinerarios_instance = Itinerarios.objects.create(**validated_data)
        return itinerarios_instance
