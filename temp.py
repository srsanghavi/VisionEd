import cv2
import urllib
import numpy as np
req = urllib.urlopen('http://docs.opencv.org/3.0-beta/_images/fft4.jpg')
arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
img = cv2.imdecode(arr,-1)
global_img = img
array_dimension = [8,3]
image = global_img
global_img = cv2.Sobel(image,cv2.CV_64F,1,0,array_dimension[0])
cv2.imwrite('temp.jpg',global_img)