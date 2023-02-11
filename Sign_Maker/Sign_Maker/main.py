


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


        #Canvas
        #self.canvas = SM_Canvas.SM_Display(parent=self)
        #self.canvas_scrolling = QScrollArea()
        #self.centraWid = QWidget()

        #self.canvas_scrolling.setWidget(self.canvas)
        #self.layout.addWidget(self.canvas_scrolling)
        #self.centraWid.setLayout(self.layout)

        self.scene = QGraphicsScene()
        self.text = QGraphicsTextItem("Wassup")
        self.text.setTextInteractionFlags(Qt.TextInteractionFlag.TextEditorInteraction)
        self.scene.addItem(self.text)
        self.view = QGraphicsView(self.scene)




        self.setCentralWidget(self.view)

    def mouseMoveEvent(self, pos):

        #Text Mode
        print("The press event")



    








app = QApplication(sys.argv)

win = MainWindow()
win.show()


app.exec()

















