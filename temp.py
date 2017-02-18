import cv2
import urllib
import numpy as np
(req = urllib.urlopen('https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png')
arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
img = cv2.imdecode(arr,-1)
global_img = img

image = global_img
win_height = window.x
win_width = window.y
clahe = cv2.createCLAHE(clipLimit=2, tileGridSize=(win_height, win_width))
if image.shape[2] == 3:
 image= cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
global_img = clahe.apply(image))
img=global_img
global_img=img
cv2.imwrite('temp.jpg',global_img)