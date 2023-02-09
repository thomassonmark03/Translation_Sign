
import sys
from PySide6.QtWidgets import QApplication, QMainWindow, QLabel, QPushButton, QLineEdit
from PySide6.QtGui import QPixmap, QFont
from PySide6.QtCore import QSize, Qt, QPoint

import SM_Canvas


class SM_Textbox(QLineEdit):
    def __init__(self,*args, **kwargs):
        super(SM_Textbox, self).__init__(*args, **kwargs)
        self.editingFinished.connect(self.text_finished)
        self.setDragEnabled(True)



    def text_finished(self):
        print("Editing, finished")
        self.parent().text_finished()









