import sys
from PySide6.QtWidgets import QApplication, QMainWindow, QLabel, QPushButton, QWidget, QGraphicsView
from PySide6.QtGui import QPixmap, QPainter, QPen, QColor, QFont
from PySide6.QtCore import QSize, Qt, QPoint


import SM_Text




class SM_Display(QLabel):
    #mode, default draw
    mode = 1
    #mode values
    Draw = 0
    Text = 1

    #helpers
    tool = None



    def __init__(self, *args, **kwargs):
        super().__init__()
        #self.setMaximumSize(1024, 768)

        #--test--
        self.setFixedSize(1024, 768)
        canvas = QPixmap(1024, 768)
        canvas.fill(Qt.blue)

        self.setPixmap(canvas)

    """#Events
    def mouseMoveEvent(self, pos):

        canvas = self.pixmap()
        editor = QPainter(canvas)
        if self.mode == self.Draw:
        #if True:
            editor.drawPoint(pos.x(), pos.y())

        editor.end()
        self.setPixmap(canvas)
    """

    def mousePressEvent(self, pos):
        if self.mode == self.Text: 
            print("In text mode")
            
            self.tool = SM_Text.SM_Textbox(parent=self)
            self.tool.move(pos.pos())
            self.tool.show()
            print(pos.pos())
 
            self.drawPoint(pos.pos() + QPoint(128, 128))            
            self.drawPoint( QPoint(128,128))


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
    def drawText(self, pos, text, font):
        print("drawing text")
        canvas = self.pixmap()
        editor = QPainter(canvas)
        editor.setFont(font)
        if self.mode == self.Text: 
            #editor.setFont(font)

            #editor.drawText(pos.x(), pos.y(), text)
            editor.drawText(pos, text, Qt.AlignJustify)




        editor.end()
        self.setPixmap(canvas)


    def text_finished(self):
        if isinstance(self.tool, SM_Text.SM_Textbox):
            
            """posOffset = self.tool.frameGeometry()
            posRect = self.tool.cursorRect()    
            
            pos = posOffset

            print(posRect)
            print(str(self.tool.toPlainText()))
            self.drawText(pos , str(self.tool.toPlainText()),self.tool.font())

            #Might cause memory leak, must checkout
            self.tool.setParent(None)
            self.tool.deleteLater()
            self.tool = None

            """
            #Try
            print("drawing text")
            canvas = self.pixmap()
            editor = QPainter(canvas)
            editor.setViewport(self.tool.geometry())
            self.tool.render(editor, QPoint(0,0), renderFlags=QWidget.RenderFlag(QWidget.RenderFlag.DrawChildren | QWidget.RenderFlag.IgnoreMask ))
            editor.end()
            self.setPixmap(canvas)
            self.tool.setParent(None)
            self.tool.deleteLater()
            self.tool = None
           

        
        else:
            print("Text Finished Error")

    def drawPoint(self, pos, size=100):
        canvas = self.pixmap()
        editor = QPainter(canvas)
        pen = QPen()
        pen.setWidth(size)
        pen.setColor(QColor("black"))
        editor.setPen(pen)
        #editor.drawPoint(pos.x(), pos.y())

        editor.end()
        self.setPixmap(canvas)






    #Mode functions
    def setMode(self, mode):
        self.mode = mode

    def getMode(self):
        return self.mode











