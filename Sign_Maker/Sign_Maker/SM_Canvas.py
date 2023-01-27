import sys
from PySide6.QtWidgets import QApplication, QMainWindow, QLabel, QPushButton
from PySide6.QtGui import QPixmap, QPainter, QFont
from PySide6.QtCore import QSize, Qt




class SM_Display(QLabel):
    #mode, default draw
    mode = 0
    #mode values
    Draw = 0
    Text = 1



    def __init__(self, *args, **kwargs):
        super(SM_Display, self).__init__(*args, **kwargs)

        canvas = QPixmap(1920, 1080)
        canvas.fill(Qt.white)

        self.setPixmap(canvas)

    #Events
    def mouseMoveEvent(self, pos):

        canvas = self.pixmap()
        editor = QPainter(canvas)
        if self.mode == self.Draw:
        #if True:
            editor.drawPoint(pos.x(), pos.y())

        editor.end()
        self.setPixmap(canvas)

    def mousePressEvent(self, pos):
        canvas = self.pixmap()
        editor = QPainter(canvas)
        if self.mode == self.Text: 
            font = QFont()
            font.setFamily('Times')
            font.setBold(True)
            font.setPointSize(40)
            editor.drawText(pos.x(), pos.y(), "Whattup")


        editor.end()
        self.setPixmap(canvas)
    


    def drawText(self, pos, text, font):
        canvas = self.pixmap()
        editor = QPainter(canvas)
        if self.mode == self.Text: 
            font = QFont()
            font.setFamily('Times')
            font.setBold(True)
            font.setPointSize(40)
            editor.drawText(pos.x(), pos.y(), text)


        editor.end()
        self.setPixmap(canvas)

    #Mode functions
    def setMode(self, mode):
        self.mode = mode

    def getMode(self):
        return self.mode











