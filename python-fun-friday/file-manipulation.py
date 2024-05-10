import os
import shutil

def rename_photos():
    path = "/Users/cwpwa/OneDrive/Desktop/Photos_Coding"
    prefix = "photo"
    i = 1
    files = os.listdir(path)
    files.sort() 

    for filename in files:
        extension = filename.split(".")[1].lower()

        if extension in ["jpg", "png", "gif", "bmp", "svg", "webp", "tiff", "avif"]:
            source = path + "/" + filename
            destination = path + "/" + prefix + str(i) + "." + extension
            os.rename(source, destination)
            i += 1

def copy_file():
    original = '/Users/cwpwa/OneDrive/Desktop/Photos_Coding/photo2.avif'
    filename, extension = original.split('.')
    for i in range(5):
        copy_filename = filename + ' - Copy' + str(i + 1) + '.' + extension
        print(copy_filename)
        shutil.copyfile(original, copy_filename)

copy_file()