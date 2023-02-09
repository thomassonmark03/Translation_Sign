#trs = translate


from PySide6.QtWidgets import QApplication, QMainWindow, QLineEdit, QComboBox, QVBoxLayout, QHBoxLayout, QPushButton, QLabel, QWidget


import dl_translate as dlt
import sys


class MainWindow(QMainWindow):

    def __init__(self, *args, **kwargs):
        super(MainWindow, self).__init__()

        #Translation Variables
        self.translateObj = dlt.TranslationModel()
        self.language = "Spanish"


        #Users input
        self.txt_in = QLineEdit()
        self.txt_in.setPlaceholderText("Enter text to translate")

        #Translated Text
        self.txt_trs= QLineEdit()
        self.txt_trs.setReadOnly(True)


        #options
        self.opt_list = QComboBox()
        self.opt_list.addItems(["Spanish", "Hindi"])
        self.opt_list.currentTextChanged.connect(self.change_language)

        self.trs_btn = QPushButton("Translate")
        self.trs_btn.clicked.connect(self.translate_func)




        optionsLayout = QHBoxLayout()
        optionsLayout.addWidget(self.opt_list)
        optionsLayout.addWidget(self.trs_btn)

        centraLayout = QVBoxLayout()
        centraLayout.addWidget(self.txt_in)
        centraLayout.addWidget(self.txt_trs)
        centraLayout.addLayout(optionsLayout)


        centraWidget = QWidget()
        centraWidget.setLayout(centraLayout)


        self.setCentralWidget(centraWidget)

    def translate_func(self):
        print(self.txt_in.text())
        txt = ""
        if(self.language == "Spanish"):
            print("Spanish used")
            txt = self.translateObj.translate(self.txt_in.text(), source = dlt.lang.ENGLISH, target = dlt.lang.SPANISH)
        elif(self.language == "Hindi"):
            print("Hindi used")
            txt = self.translateObj.translate(self.txt_in.text(), source = dlt.lang.ENGLISH, target = dlt.lang.HINDI)
        else:
            pass

        self.txt_trs.setText(txt)

    def change_language(self, lang):
        self.language = lang







app = QApplication(sys.argv)

win = MainWindow()
win.show()


app.exec()

"""
mt = dlt.TranslationModel()
txt = "Coast guard approved personal floatation devices must be worn in water beyond this point"

txt_transl = mt.translate(txt, source=dlt.lang.ENGLISH, target=dlt.lang.VIETNAMESE)

print(txt)
print(txt_transl)
"""









