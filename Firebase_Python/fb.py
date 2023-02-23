# For more info: 
#https://www.analyticsvidhya.com/blog/2022/07/introduction-to-google-firebase-firestore-using-python/#:~:text=To%20connect%20to%20Firestore%2C%20Firebase,and%20copy%20the%20code%20snippet.

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


# Download json key from firebase, put path to that file here.
pathToJsonCred = r"path\key.json"

cred = credentials.Certificate(pathToJsonCred)
app = firebase_admin.initialize_app(cred)

db = firestore.client()

# Example list of languages supported
langs = ['es', 'kr', 'fr', 'zh', 'ar']

# Example english text (pulled from OCR?)
enText = "Dont drown pls"

# One time input for board name (document name in firebase)
print("Enter board name: ")
boardName = input()

# Push up english text along with any one time uploads such as img file, title, etc.
data = {
        u'%s'%("en"): u'%s'%(enText),
        u'img': u'%s'%("example.pdf"),
        u'title': u'%s'%("The best board")
    }
db.collection(u'Board').document(u'%s'%(boardName)).set(data)

# Loop through languages, add fields with language and the translated text into the firebase document
for lang in langs:
    # Use translation API here, can get desired language from the lang variable
    translatedText = "Hi I'm a different language now!" + " %s" %(lang) # text.Translate
    # Upload into firebase
    board_ref = db.collection(u'Board').document(u'%s'%(boardName))
    board_ref.set({
        u'%s'%(lang): u'%s'%(translatedText)
    }, merge=True)
    
