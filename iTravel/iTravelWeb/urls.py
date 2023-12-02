from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register(r'usuarios', UsuarioViewSet)
router.register(r'empresas', EmpresasTransporteViewSet)
router.register(r'buses', BusesViewSet)
router.register(r'boletos', BoletosViewSet)
router.register(r'choferes', ChoferesViewSet)
router.register(r'itinerarios', ItinerariosViewSet)
router.register(r'rutas', RutasViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
