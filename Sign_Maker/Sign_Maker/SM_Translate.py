import dl_translate as dlt


def translate_func(txt, language):
        #print(self.txt_in.text())
        txt_translated = ""
        translateObj = dlt.TranslationModel()
        if(language == "Spanish"):
            print("Spanish used")
            txt_translated = translateObj.translate(txt, source = dlt.lang.ENGLISH, target = dlt.lang.SPANISH)
        elif(language == "Hindi"):
            print("Hindi used")
            txt_translated = translateObj.translate(txt, source = dlt.lang.ENGLISH, target = dlt.lang.HINDI)
        else:
            pass

        return txt_translated