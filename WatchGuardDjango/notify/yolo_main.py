import cv2
import threading
import os
from yolov8 import YOLOv8


class VideoCamera(object):
    def __init__(self) -> None:
        self.video = cv2.VideoCapture(0)
        semodel_path = "./best.onnx"
        self.yolov8_detector = YOLOv8(semodel_path, conf_thres=0.5, iou_thres=0.5)
        (self.grabbed, self.frame) = self.video.read()
        self.recording = True
        threading.Thread(target=self.update, args=()).start()

    def __del__(self):
        self.video.release()

    def get_frame(self):
        # image = self.frame
        self.boxes, self.scores, self.class_ids = self.yolov8_detector(self.frame)

        combined_img = self.yolov8_detector.draw_detections(self.frame)
        _, jpeg = cv2.imencode(".jpg", combined_img)
        return jpeg.tobytes()

    def update(self):

        while self.recording:
            (self.grabbed, self.frame) = self.video.read()

            if not os.path.exists("Sus/Threat.jpg"):
                cv2.imwrite("Sus/Threat.jpg", self.frame)
                #     # self.recording = False
                break  # Stop processing further frames if a face is detected

            # Press key q to stop
            if cv2.waitKey(1) & 0xFF == ord("q"):
                break


def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b"--frame\r\n" b"Content-Type: image/jpeg\r\n\r\n" + frame + b"\r\n\r\n")


# Example usage
# camera = VideoCamera()
# for frame in gen(camera):
#     # Do something with the frame, like sending it over a network
#     pass
