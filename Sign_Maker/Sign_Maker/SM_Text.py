
import sys
from PySide6.QtWidgets import QApplication, QMainWindow, QLabel, QPushButton, QLineEdit, QTextEdit, QGraphicsTextItem
from PySide6.QtGui import QPixmap, QFont, QFontMetrics, QTextCursor 
from PySide6.QtCore import QSize, Qt, QPoint

import SM_Canvas


class SM_Textbox(QGraphicsTextItem):
    def __init__(self,*args, **kwargs):
        super().__init__()
        font = self.font()
        font.setPointSize(12)
        self.setFont(font)
        self.setTextInteractionFlags(Qt.TextInteractionFlag.TextEditorInteraction)
        #self.setPlainText("Enter text here")
        self.setFocus() #Sets cursor to edit this textbox
        self.textCursor().select(QTextCursor.Document) 

        #Box control
        fm = QFontMetrics(self.font())


    def focusInEvent(self, event):
        self.parent().toolFocus()
        super().focusInEvent(event) #Calls parent focus in event function

    def focusOutEvent(self, event):
        self.parent().toolUnfocus()

        #Adding to text list
        text = self.toPlainText()
        text_no_space = text.replace(" ", "") #Temporary code, ideally regex that checks for all non-seeable characters
        if(text_no_space != ""):
            print(f"{text} added to list")
            self.parent().addTxtToList(self)


        
        super().focusOutEvent(event) #Calls parent focus in event function










