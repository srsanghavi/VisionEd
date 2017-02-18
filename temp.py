import cv2
import urllib
import numpy as np
from matplotlib import pyplot as plt
req = urllib.urlopen('https://pbs.twimg.com/media/BVvNNn3CUAE0LLY.jpg')
arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
img = cv2.imdecode(arr,-1)
global_img = img
global_img =  cv2.cvtColor(global_img, cv2.COLOR_BGR2GRAY)
array_dimension = [15,15]
image = global_img
win_height = array_dimension[0]
win_width = array_dimension[1]
clahe = cv2.createCLAHE(clipLimit=2, tileGridSize=(win_height, win_width))
global_img = clahe.apply(image)
array_dimension = [3,3]
image = global_img
global_img = cv2.GaussianBlur(image,(array_dimension[0],array_dimension[1]),0)
array_dimension = [15,15]
image = global_img
global_img = cv2.adaptiveThreshold(image,255,cv2.ADAPTIVE_THRESH_GAUSSIAN_C,cv2.THRESH_BINARY,array_dimension[0],array_dimension[1])
cv2.imwrite('temp.jpg',global_img)