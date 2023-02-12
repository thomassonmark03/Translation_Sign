


import sys
from PySide6.QtWidgets import (QApplication, QMainWindow, QLabel, QPushButton, QLineEdit, QVBoxLayout, QWidget, QLayout,
    QGraphicsScene, QGraphicsView, QGraphicsTextItem
)
from PySide6.QtGui import QPixmap
from PySide6.QtCore import QSize, Qt



import SM_Buttons
import SM_Canvas
import SM_Text

from PySide6.QtWidgets import QScrollArea

class MainWindow(QMainWindow):

    def __init__(self, *args, **kwargs):
        super(MainWindow, self).__init__()
        self.layout = QVBoxLayout()
        #self.layout.setSizeConstraint(QLayout.SetMinimumSize)


        """
        label = QLabel("First Part of Sign Maker")
        label.setAlignment(Qt.AlignCenter)
        """


        #Canvas setup
        self.canvas = SM_Canvas.SM_Display()
        self.canvas.setParent(self)
        self.canvas_scrolling = QScrollArea()       #Makes the canvas scrollable instead of a constant size
        self.centraWid = QWidget()

        self.canvas_scrolling.setWidget(self.canvas)
        self.layout.addWidget(self.canvas_scrolling)

        #Setting up convert button
        self.convert_btn = SM_Buttons.SM_ConvertButton("Convert All")
        self.convert_btn.clicked.connect(self.convert)
        self.layout.addWidget(self.convert_btn)

        #Setting up display
        self.centraWid.setLayout(self.layout)
        self.setCentralWidget(self.centraWid)


    def convert(self):
        self.canvas.convert(self.convert_btn.language)



    








app = QApplication(sys.argv)

win = MainWindow()
win.show()


app.exec()

















