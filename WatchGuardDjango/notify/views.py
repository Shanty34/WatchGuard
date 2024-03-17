from django.shortcuts import render, redirect
from django.http import StreamingHttpResponse, HttpResponse, JsonResponse
import pywhatkit
from . import streaming
import os
from django.views.decorators.csrf import csrf_exempt

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

    # if os.path.exists("Sus/Threat.jpg"):
    return render(request, "index.html")


from django.http import JsonResponse
import os


def alert(request):
    if os.path.exists("Sus/Threat.jpg"):
        import winsound

        frequency = 2500  # Set Frequency To 2500 Hertz
        duration = 500
        # Set Duration To 1000 ms == 1 second

        winsound.Beep(frequency, duration)
        # response = 1
        return JsonResponse({"status": 1})

    else:
        return JsonResponse({"status": 0})


@csrf_exempt
def log(request):
    if request.method == "POST":
        with open("alerts.json", "a+") as file:
            file.write("Alert Triggered")
    return HttpResponse(200)


def video_feed(request):
    cam = streaming.VideoCamera()
    try:
        return StreamingHttpResponse(
            streaming.gen(cam), content_type="multipart/x-mixed-replace;boundary=frame"
        )
    except:
        print("Some Error Occurred")


def inform(request):
    if os.path.exists("Sus/Threat.jpg"):
        pywhatkit.sendwhats_image("+918750970535", "Sus/Threat.jpg", "Threat Detected!")
    return HttpResponse(200)
