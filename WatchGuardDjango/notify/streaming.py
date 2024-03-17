import cv2
import threading
import os
import datetime


class VideoCamera(object):
    def __init__(self) -> None:
        self.video = cv2.VideoCapture(0)
        (self.grabbed, self.frame) = self.video.read()
        self.recording = True
        threading.Thread(target=self.update, args=()).start()

    def __del__(self):
        self.video.release()

    def get_frame(self):
        image = self.frame
        _, jpeg = cv2.imencode(".jpg", image)
        return jpeg.tobytes()

    def update(self):
        face_cascade = cv2.CascadeClassifier(
            cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
        )
        while self.recording:
            (self.grabbed, self.frame) = self.video.read()
            gray = cv2.cvtColor(self.frame, cv2.COLOR_BGR2GRAY)
            faces = face_cascade.detectMultiScale(
                gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30)
            )
            for x, y, w, h in faces:
                cv2.rectangle(self.frame, (x, y), (x + w, y + h), (255, 0, 0), 2)
                datetime.datetime.now().strftime("%A %d %B %Y %I:%M:%S%p")
                cv2.putText(
                    self.frame,
                    datetime.datetime.now().strftime("%A %d %B %Y %I:%M:%S%p"),
                    (10, self.frame.shape[0] - 10),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    0.35,
                    (0, 0, 255),
                    1,
                )
                # Save the frame as an image

                if not os.path.exists("Sus/Threat.jpg"):
                    cv2.imwrite("Sus/Threat.jpg", self.frame)
                # self.recording = False
                break  # Stop processing further frames if a face is detected


def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b"--frame\r\n" b"Content-Type: image/jpeg\r\n\r\n" + frame + b"\r\n\r\n")


# Example usage
# camera = VideoCamera()
# for frame in gen(camera):
#     # Do something with the frame, like sending it over a network
#     pass
