from django.contrib import admin
from .models import employee
from .models import person
from .models import vacation
admin.site.register(employee)
admin.site.register(person)
admin.site.register(vacation)