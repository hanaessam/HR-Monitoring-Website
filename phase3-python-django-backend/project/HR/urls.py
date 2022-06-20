from django.urls import URLPattern, path
from . import views
urlpatterns = [
    path('home',views.login),
    path('',views.MainHome,name='MainHome'),
    path('home/add',views.add,name='add'),
    path('home/review',views.Vacations,name='Vacations'),
    path('home/vacationForm',views.vacationForm,name='vForm'),
    path('home/search',views.search,name='search'),
    path('home/update',views.update),
    path('ids/<int:count>',views.ids,name='ids')
    
]