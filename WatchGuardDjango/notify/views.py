from django.shortcuts import render, redirect
from django.http import StreamingHttpResponse, HttpResponse
import pywhatkit
from . import streaming

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

    return render(request, "index.html")


def alert(request):
    return HttpResponse("This is from backend")


def video_feed(request):
    cam = streaming.VideoCamera()
    try:
        return StreamingHttpResponse(
            streaming.gen(cam), content_type="multipart/x-mixed-replace;boundary=frame"
        )
    except:
        print("Some Error Occurred")