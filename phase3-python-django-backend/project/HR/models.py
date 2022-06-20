from django.db import models

# Create your models here.
class person(models.Model):
    email=models.EmailField(verbose_name='email',null='false')
    password=models.TextField(verbose_name='password',null='false')

class vacation(models.Model):
    start=models.DateField(null='true')
    end=models.DateField(null='true')
    reason=models.TextField(max_length=500,null='true')

class employee(models.Model):
    x=[
        ('Male','Male'),
        ('Female','Female'),
    ]
    y=[
        ('Single','Single'),
        ('Married','Married')
    ]
    name=models.CharField(max_length=30,null='false',default='null')
    count=models.BigIntegerField(verbose_name='ID',null='false',unique='true',default='0')
    email=models.EmailField(max_length=30,null='TRUE')
    address=models.CharField(max_length=55,null='TRUE')
    phone=models.IntegerField(verbose_name='phone number',null='TRUE')
    gender=models.CharField(max_length=10,choices=x,null='TRUE')
    status=models.CharField(max_length=10,verbose_name='Martial Status',choices=y,null='TRUE')
    vacation=models.IntegerField(verbose_name='vacation days',null='TRUE')
    salary=models.DecimalField(max_digits=8, decimal_places=2,null='TRUE')
    date=models.DateField(null='TRUE')
    
                            

