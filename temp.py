import cv2
import urllib
import numpy as np
from matplotlib import pyplot as plt
req = urllib.urlopen('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxD2QTPxW4NROWV9CB2J7DigMhpjVkCbh4FlUUt6LchrTKCP7cxxy3nU2E')
arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
img = cv2.imdecode(arr,-1)
global_img = img
global_img =  cv2.cvtColor(global_img, cv2.COLOR_BGR2HSV)
pt_x=10
pt_y=10
array_point = [pt_x,pt_y]
pt1 = array_point
pt_x=220
pt_y=10
array_point = [pt_x,pt_y]
pt2 = array_point
pt_x=10
pt_y=220
array_point = [pt_x,pt_y]
pt3 = array_point
pt_x=220
pt_y=220
array_point = [pt_x,pt_y]
pt4 = array_point
array_point = [pt1,pt2,pt3,pt4]
input_pts = array_point
pt_x=0
pt_y=0
array_point = [pt_x,pt_y]
pt1 = array_point
pt_x=250
pt_y=20
array_point = [pt_x,pt_y]
pt2 = array_point
pt_x=20
pt_y=250
array_point = [pt_x,pt_y]
pt3 = array_point
pt_x=230
pt_y=230
array_point = [pt_x,pt_y]
pt4 = array_point
array_point = [pt1,pt2,pt3,pt4]
output_pts = array_point
image = global_img
rows,cols = image.shape
pts1 = np.float32(input_pts)
pts2 = np.float32(output_pts)
M = cv2.getPerspectiveTransform(pts1,pts2)
dst = cv2.warpPerspective(image,M,(cols,rows))
global_img = dst
cv2.imwrite('temp.jpg',global_img)