
import sys
from PySide6.QtWidgets import QApplication, QMainWindow, QLabel, QPushButton, QLineEdit, QTextEdit
from PySide6.QtGui import QPixmap, QFont, QFontMetrics
from PySide6.QtCore import QSize, Qt, QPoint

import SM_Canvas


class SM_Textbox(QTextEdit):
    def __init__(self,*args, **kwargs):
        super(SM_Textbox, self).__init__(*args, **kwargs)
        #self.editingFinished.connect(self.text_finished)
        self.setStyleSheet("* { background-color: rgba(0, 0, 0, 0); }") #Sets the textbox to be transparent
        font = self.font()
        font.setPointSize(12)
        self.setFont(font)
        #self.setDragEnabled(True)

        #Box control
        fm = QFontMetrics(self.font())
        self.setFixedHeight(fm.height() + 2) #+2 makes the lower fonts look better, any higher and the font starts shifting at higher settings.
        #self.setTextMargins(4,0,0,0)
        self.setContentsMargins(0,0,0,0)



    def text_finished(self):
        print("Editing, finished")
        self.parent().text_finished()









