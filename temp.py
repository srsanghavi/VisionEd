import cv2
import urllib
import numpy as np
from matplotlib import pyplot as plt
req = urllib.urlopen('http://www.hack4fun.org/h4f/sites/default/files/bindump/lena.bmp')
arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
img = cv2.imdecode(arr,-1)
global_img = img
pt_x=0
pt_y=0
array_point = [pt_x,pt_y]
pt1 = array_point
pt_x=500
pt_y=0
array_point = [pt_x,pt_y]
pt2 = array_point
pt_x=0
pt_y=500
array_point = [pt_x,pt_y]
pt3 = array_point
pt_x=500
pt_y=500
array_point = [pt_x,pt_y]
pt4 = array_point
array_point = [pt1,pt2,pt3,pt4]
input_pts = array_point
pt_x=0
pt_y=0
array_point = [pt_x,pt_y]
pt1 = array_point
pt_x=500
pt_y=0
array_point = [pt_x,pt_y]
pt2 = array_point
pt_x=100
pt_y=400
array_point = [pt_x,pt_y]
pt3 = array_point
pt_x=412
pt_y=400
array_point = [pt_x,pt_y]
pt4 = array_point
array_point = [pt1,pt2,pt3,pt4]
output_pts = array_point
image = global_img
rows,cols,ch = image.shape
pts1 = np.float32(input_pts)
pts2 = np.float32(output_pts)
M = cv2.getPerspectiveTransform(pts1,pts2)
dst = cv2.warpPerspective(image,M,(cols,rows))
global_img = dst
cv2.imwrite('temp.jpg',global_img)