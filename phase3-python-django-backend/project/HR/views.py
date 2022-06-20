from django.shortcuts import redirect, render
from .models import person
from .models import employee
from .models import vacation
# Create your views here.
def login(request):
    if request.method=="POST":
        email=request.POST.get('email')
        password=request.POST.get('password')
        data=person(email=email,password=password)
        data.save()
    return render(request,'pages/home.html')

def add(request):
    if request.method=="POST":
        name=request.POST.get('name')
        counts=request.POST.get('count')
        email=request.POST.get('email')
        address=request.POST.get('address')
        phone=request.POST.get('phone')
        gender=request.POST.get('gender')
        status=request.POST.get('status')
        vacation=request.POST.get('vacation')
        salary=request.POST.get('salary')
        date=request.POST.get('date')
        datas=employee(name=name,count=counts,email=email,address=address,phone=phone,gender=gender,status=status,vacation=vacation,salary=salary,date=date)
        datas.save()
    return render(request,'pages/Add.html')

def MainHome(request):
    return render(request,'pages/MainHome.html')

def Vacations(request):
    e=employee.objects.all()
    p=vacation.objects.all()
    return render(request,'pages/Vacations_review.html',{'vacation':p or e})    

def vacationForm(request):
    FROM=request.GET.get('start')
    TO=request.GET.get('end')
    REASON=request.GET.get('reason')
    data=vacation(start=FROM,end=TO,reason=REASON)
    data.save()
    return render(request,'pages/vacation_form.html')

def search(request):
    pro=employee.objects.all()
    return render(request,'pages/search.html',{'employ':pro})

def update(request):
    pro=employee.objects.all()
    return render(request,'pages/Update.html')

def ids(request,count):
    emp=add.objects.get(count)
    emp.save()
    return redirect(request,'pages/Vacations_review.html')