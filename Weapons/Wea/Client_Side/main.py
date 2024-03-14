from PyQt5.QtWidgets import QApplication
import sys
from login_window import LoginWindow
from detection_window import DetectionWindow
# Starting the application
app = QApplication(sys.argv)
mainwindow = LoginWindow()

# Exiting
try:
	sys.exit(app.exec_())
except: 
	print("Exiting")