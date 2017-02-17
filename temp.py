import cv2
import urllib
import numpy as np
req = urllib.urlopen('https://www.wired.com/wp-content/uploads/2015/09/google-logo-1200x630.jpg')
arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
img = cv2.imdecode(arr,-1)
global_img = img
cv2.imwrite('temp.jpg',global_img)