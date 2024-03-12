from django.shortcuts import render, redirect
import pywhatkit

number = "+91xx"


# Create your views here.
def homepage(request):
    if request.method == "POST":
        message = request.POST["message"]
        print()
        print(message)
        print()
        pywhatkit.sendwhatmsg_instantly(number, message, wait_time=10)
        return redirect("/")
    return render(request, "notify/index.html")
