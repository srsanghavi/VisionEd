import cv2
import urllib
import numpy as np
req = urllib.urlopen('http://answers.opencv.org/upfiles/1432333105327698.jpg')
arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
img = cv2.imdecode(arr,-1)
global_img = img
myImg=global_img
global_img=myImg
global_img =  cv2.cvtColor(global_img, cv2.COLOR_BGR2GRAY)
cv2.imwrite('temp.jpg',global_img)