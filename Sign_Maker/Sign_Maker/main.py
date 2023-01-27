


import sys
from PySide6.QtWidgets import QApplication, QMainWindow, QLabel, QPushButton
from PySide6.QtGui import QPixmap
from PySide6.QtCore import QSize, Qt



import SM_Buttons
import SM_Canvas

class MainWindow(QMainWindow):

    def __init__(self, *args, **kwargs):
        super(MainWindow, self).__init__()




        """
        label = QLabel("First Part of Sign Maker")
        label.setAlignment(Qt.AlignCenter)
        """


        #Editor
        self.canvas = SM_Canvas.SM_Display()






        self.setCentralWidget(self.canvas)











app = QApplication(sys.argv)

win = MainWindow()
win.show()


app.exec()

















