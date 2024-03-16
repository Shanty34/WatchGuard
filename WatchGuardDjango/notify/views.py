from django.shortcuts import render, redirect
from django.http import StreamingHttpResponse, HttpResponse
import pywhatkit
from . import streaming
import os

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


def alert(request):
    if os.path.exists("Sus/Threat.jpg"):
        # pywhatkit.sendwhats_image("+918750970535", "Sus/Threat.jpg", "Threat Detected!")
        return HttpResponse("Threat Detected.")
    else:
        return HttpResponse("No problem")


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
