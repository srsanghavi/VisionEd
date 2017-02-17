import cv2
import urllib
import numpy as np
req = urllib.urlopen('https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png')
arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
img = cv2.imdecode(arr,-1)
global_img = img
img=global_img
global_img=img
global_img =  cv2.cvtColor(global_img, cv2.COLOR_BGR2GRAY)
image1 = global_img
global_img = image1-255
cv2.imwrite('temp.jpg',global_img)