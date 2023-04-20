import sys
from PySide6.QtWidgets import (QApplication, QMainWindow, QLabel, QPushButton, QLineEdit, QVBoxLayout, QWidget, QLayout,
    QGraphicsScene, QGraphicsView, QGraphicsTextItem
)
from PySide6.QtGui import QPixmap
from PySide6.QtCore import QSize, Qt


class SM_ConvertButton(QPushButton):

    language = "Spanish"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)





