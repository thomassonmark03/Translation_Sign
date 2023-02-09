import sys
from PySide6.QtWidgets import QApplication, QMainWindow, QLabel, QPushButton
from PySide6.QtGui import QPixmap, QPainter, QFont
from PySide6.QtCore import QSize, Qt


import SM_Text




class SM_Display(QLabel):
    #mode, default draw
    mode = 1
    #mode values
    Draw = 0
    Text = 1

    #helpers
    tool = None
    toolx = 0
    tooly = 0



    def __init__(self, *args, **kwargs):
        super(SM_Display, self).__init__(*args, **kwargs)
        self.setFixedSize(1024, 768)
        canvas = QPixmap(1024, 768)
        canvas.fill(Qt.white)

        self.setPixmap(canvas)

    #Events
    def mouseMoveEvent(self, pos):

        canvas = self.pixmap()
        editor = QPainter(canvas, parent= self)
        if self.mode == self.Draw:
        #if True:
            editor.drawPoint(pos.x(), pos.y())

        editor.end()
        self.setPixmap(canvas)

    def mousePressEvent(self, pos):
        if self.mode == self.Text: 
            print("In text mode")
            
            self.tool = SM_Text.SM_Textbox(parent=self)
            self.toolx = pos.pos().x
            self.tooly = pos.pos().y
            self.tool.move(pos.pos())
            self.tool.show()
            print(pos.pos())
            


            #debug
            """canvas = self.pixmap()
            editor = QPainter(canvas, parent=self)
            editor.drawText(pos.x(), pos.y(), "hello")
            editor.end()
            self.setPixmap(canvas)
            """

            #self.drawText(pos, "hello")
             

            print(pos.pos())


    

    #Text Mode Functions
    def drawText(self, pos, text):
        print("drawing text")
        canvas = self.pixmap()
        editor = QPainter(canvas, parent=self)
        if self.mode == self.Text: 
            #editor.setFont(font)
            editor.drawText(pos.x(), pos.y(), text)


        editor.end()
        self.setPixmap(canvas)


    def text_finished(self):
        if isinstance(self.tool, SM_Text.SM_Textbox):
            pos = self.mapTo(self, self.tool.pos())
            print(pos)
            print(self.tool.text())
            self.drawText(pos ,self.tool.text())

            #Might cause memory leak, must checkout
            self.tool.setParent(None)
            self.tool.deleteLater()
            self.tool = None
        
        else:
            print("Text Finished Error")





    #Mode functions
    def setMode(self, mode):
        self.mode = mode

    def getMode(self):
        return self.mode











