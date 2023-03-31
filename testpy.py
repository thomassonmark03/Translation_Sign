import os
filelist=os.listdir()
for fil in filelist[:]: 
    if not(fil.endswith(".jpg") or fil.endswith(".png")):
        filelist.remove(fil)
for image in filelist:
	test ="tesseract "+str(image)+ " "+str(image)

	os.system(test)
