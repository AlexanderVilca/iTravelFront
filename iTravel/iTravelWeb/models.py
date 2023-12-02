from django.db import models

from django.db import models

class Usuarios(models.Model):
    uid = models.CharField(max_length=255)
    rol = models.IntegerField()
    foto = models.CharField(max_length=255)
    nombrecompleto = models.CharField(max_length=250)
    telefono = models.CharField(max_length=45)
    estado = models.IntegerField()

    def __str__(self):
        return self.nombrecompleto

class EmpresasTransporte(models.Model):
    nombre = models.CharField(max_length=255)
    direccion = models.CharField(max_length=255)
    telefono = models.CharField(max_length=20)
    rutas = models.IntegerField()

    def __str__(self):
        return self.nombre
    
class Buses(models.Model):
    placa = models.CharField(max_length=10)
    numeroasientos = models.IntegerField()
    empresa = models.ForeignKey(EmpresasTransporte, on_delete=models.CASCADE, related_name='buses_empresa')

    def __str__(self):
        return self.id

class Boletos(models.Model):
    bus = models.ForeignKey(Buses, on_delete=models.CASCADE, related_name='boletos_bus')
    usuario = models.ForeignKey(Usuarios, on_delete=models.CASCADE, related_name='boletos_usuario')
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    fechacompra = models.CharField(max_length=200)
    estado = models.IntegerField()

    def __str__(self):
        return f"Boleto {self.id}"

    
class Choferes(models.Model):
    nombre = models.CharField(max_length=255)
    dni = models.CharField(max_length=10)
    bus = models.ForeignKey(Buses, on_delete=models.CASCADE, related_name='choferes_bus')

    def __str__(self):
        return f"Chofer {self.nombre}"

    
class Itinerarios(models.Model):
    boleto = models.ForeignKey(Boletos, on_delete=models.CASCADE, related_name='itinerarios_boleto')
    horasalida = models.CharField(max_length=250)
    horallegada = models.CharField(max_length=250)
    estado = models.IntegerField()

    def __str__(self):
        return f"Itinerario {self.id}"
    
class Rutas(models.Model):
    origenciudad = models.CharField(max_length=255)
    destinociudad = models.CharField(max_length=255)
    duracionviaje = models.CharField(max_length=255)
    distancia = models.DecimalField(max_digits=10, decimal_places=2)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    empresa = models.ForeignKey(EmpresasTransporte, on_delete=models.CASCADE, related_name='rutas_empresa')

    def __str__(self):
        return f"Ruta {self.id}"
