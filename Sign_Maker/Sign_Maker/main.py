


import sys
from PySide6.QtWidgets import QApplication, QMainWindow, QLabel, QPushButton, QLineEdit, QVBoxLayout, QWidget, QLayout
from PySide6.QtGui import QPixmap
from PySide6.QtCore import QSize, Qt



import SM_Buttons
import SM_Canvas
import SM_Text

class MainWindow(QMainWindow):

    def __init__(self, *args, **kwargs):
        super(MainWindow, self).__init__()
        self.layout = QVBoxLayout()



        """
        label = QLabel("First Part of Sign Maker")
        label.setAlignment(Qt.AlignCenter)
        """


        #Editor
        self.canvas = SM_Canvas.SM_Display(parent=self)
        self.layout.addWidget(self.canvas)


        self.centraWid = QWidget()

        self.centraWid.setLayout(self.layout)



        self.setCentralWidget(self.centraWid)

    def mouseMoveEvent(self, pos):

        #Text Mode
        print("The press event")



    








app = QApplication(sys.argv)

win = MainWindow()
win.show()


app.exec()

















