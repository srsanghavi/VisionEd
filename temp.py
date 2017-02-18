import cv2
import urllib
import numpy as np
req = urllib.urlopen('https://upload.wikimedia.org/wikipedia/en/2/24/Lenna.png')
arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
img = cv2.imdecode(arr,-1)
global_img = img
img=global_img
global_img=img
global_img =  cv2.cvtColor(global_img, cv2.COLOR_BGR2HSV)
image = global_img
(h, w) = image.shape[:2]
center = (w / 2, h / 2)
angle = 180
M = cv2.getRotationMatrix2D(center, angle, 1.0)
global_img = cv2.warpAffine(image, M, (w, h))
cv2.imwrite('temp.jpg',global_img)