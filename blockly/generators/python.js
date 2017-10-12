'use strict';

goog.provide('Blockly.Python.variables');


/*
 Read Image from external URL
 Input : Text
 Output: Mat_RGB
*/

goog.require('Blockly.Python');
Blockly.Blocks['read_image'] = {
  init: function() {
    this.appendValueInput("url")
    .setCheck("String")
    .appendField("Read Image")
    .appendField("Image URL");
    this.setOutput(true, "mat_rgb");
    this.setColour(25);
    this.setTooltip('Please provide URL of an input image');
    this.setHelpUrl('');
  }
};

/*Python Generator code
  Read Image from external source
  Check the whether input image is RGBor grayscale
  Convert image into RGB if not
*/

Blockly.Python['read_image'] = function(block) {
  var dropdown_image_type = block.getFieldValue('image type');
  var value_read_image = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);

  //read image from url
  var code = "req = urllib.urlopen("+value_read_image+")";
  code = code +"\n" +"arr = np.asarray(bytearray(req.read()), dtype=np.uint8)";
  code = code +"\n" +"img = cv2.imdecode(arr,-1)";
  code = code +"\n" +""
  //define universal global image "vcv_globalImg"
  
  code = code + "\n" + "vcv_globalImg = img";

  return [code];
};




Blockly.Blocks['display_image'] = {
  init: function() {
    this.appendValueInput("image")
    .setCheck("mat")
    .appendField("Display Image");
    this.setColour(25);
    this.setTooltip('Please provide URL of input image');
    this.setHelpUrl('');
  }
};



Blockly.Python['display_image'] = function(block) {
  var value_read_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);

  var code = value_read_image;
  code = code + "\n" + "cv2.imwrite('temp.jpg',global_img)";
  // TODO: Assemble Python into code variable.
  return [code];
};




Blockly.Blocks['convert_color'] = {
  init: function() {
    this.appendValueInput("image")
    .setCheck("mat")
    .appendField("Convert color")
    .appendField(new Blockly.FieldDropdown([["RGB2GRAY","rgb2gray"], ["RGB2HSV","rgb2hsv"]]), "from2to");
    this.setInputsInline(false);
    this.setOutput(true, "mat");
    this.setColour(50);
    this.setTooltip('Please provide input image');
    this.setHelpUrl('');
  }
};

Blockly.Python['convert_color'] = function(block) {
  var dropdown_from2to = block.getFieldValue('from2to');
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_image;
  code = code +'\n' ;
  if(dropdown_from2to=="rgb2gray"){
    code = code + "global_img =  cv2.cvtColor(global_img, cv2.COLOR_BGR2GRAY)";
  }
  else if (dropdown_from2to=="rgb2hsv"){
    code = code + "global_img =  cv2.cvtColor(global_img, cv2.COLOR_BGR2HSV)";
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

// arithmatic functions

Blockly.Blocks['im_difference'] = {
  init: function() {
    this.appendValueInput("image_1")
    .setCheck("mat")
    .appendField("Image 1");
    this.appendValueInput("image_2")
    .setCheck("mat")
    .appendField("\"minus\"")
    .appendField("Image 2");
    this.setInputsInline(true);
    this.setOutput(true, "mat");
    this.setColour(85);
    this.setTooltip('Use this block to subtract image 2 from image 1');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['im_addition'] = {
  init: function() {
    this.appendValueInput("image_1")
    .setCheck("mat")
    .appendField("Image 1");
    this.appendValueInput("image_2")
    .setCheck("mat")
    .appendField("\"plus\"")
    .appendField("Image 2");
    this.setInputsInline(true);
    this.setOutput(true, "mat");
    this.setColour(85);
    this.setTooltip('Use this block to subtract image 2 from image 1');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['im_multiply_const'] = {
  init: function() {
    this.appendValueInput("image_1")
    .setCheck("mat")
    .appendField("Input image");
    this.appendValueInput("const")
    .setCheck("Number")
    .appendField("X constant");
    this.setInputsInline(true);
    this.setOutput(true, "mat");
    this.setColour(85);
    this.setTooltip('Use this block to multiply the input image with a constant ');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['im_addition_const'] = {
  init: function() {
    this.appendValueInput("image_1")
    .setCheck("mat")
    .appendField("Input image");
    this.appendValueInput("const")
    .setCheck("Number")
    .appendField("+ constant");
    this.setInputsInline(true);
    this.setOutput(true, "mat");
    this.setColour(85);
    this.setTooltip('Use this block to add a constant to the input image');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['im_subtraction_const'] = {
  init: function() {
    this.appendValueInput("image_1")
    .setCheck("mat")
    .appendField("Input image");
    this.appendValueInput("const")
    .setCheck("Number")
    .appendField("- constant");
    this.setInputsInline(true);
    this.setOutput(true, "mat");
    this.setColour(85);
    this.setTooltip('Use this block to subtract a constant from the input image');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_difference'] = function(block) {
  var value_image_1 = Blockly.Python.valueToCode(block, 'image_1', Blockly.Python.ORDER_ATOMIC);
  var value_image_2 = Blockly.Python.valueToCode(block, 'image_2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_image_1 + "\n";
  code = code +"\n" +"image1 = global_img";
  code = code +"\n" + value_image_2;
  code = code +"\n" +"image2 = global_img";
  code = code +"\n" +"height1, width1, channels1 = image1.shape";
  code = code +"\n" +"height2, width2, channels2 = image2.shape";

  code = code +"\n" +"if ((channels1 != channels2) or (height1 != height2) or (width1 != width2)):";
  code = code +"\n" +"  temp = np.zeros([height1,width1,channels1],np.uint8)";
  code = code +"\n" +"  for c in xrange(channels1):";
  code = code +"\n" +"    if c>=channels2:";
  code = code +"\n" +"     break;";
  code = code +"\n" +"    for h in xrange(height1):";
  code = code +"\n" +"      if h>=height2:";
  code = code +"\n" +"        break;";
  code = code +"\n" +"      for w in xrange(width1):";
  code = code +"\n" +"        if w >= width2:";
  code = code +"\n" +"          break;";
  code = code +"\n" +"        temp[h,w,c]=image2[h,w,c]";

  code = code +"\n" +"image2 = temp";
  code = code +"\n" + "global_img = cv2.subtract(image1,image2)";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};
Blockly.Python['im_addition'] = function(block) {
  var value_image_1 = Blockly.Python.valueToCode(block, 'image_1', Blockly.Python.ORDER_ATOMIC);
  var value_image_2 = Blockly.Python.valueToCode(block, 'image_2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_image_1 + "\n";
  code = code +"\n" +"image1 = global_img";
  code = code +"\n" + value_image_2;
  code = code +"\n" +"image2 = global_img";
  code = code +"\n" +"height1, width1, channels1 = image1.shape";
  code = code +"\n" +"height2, width2, channels2 = image2.shape";

  code = code +"\n" +"if ((channels1 != channels2) or (height1 != height2) or (width1 != width2)):";
  code = code +"\n" +"  temp = np.zeros([height1,width1,channels1],np.uint8)";
  code = code +"\n" +"  for c in xrange(channels1):";
  code = code +"\n" +"    if c>=channels2:";
  code = code +"\n" +"     break;";
  code = code +"\n" +"    for h in xrange(height1):";
  code = code +"\n" +"      if h>=height2:";
  code = code +"\n" +"        break;";
  code = code +"\n" +"      for w in xrange(width1):";
  code = code +"\n" +"        if w >= width2:";
  code = code +"\n" +"          break;";
  code = code +"\n" +"        temp[h,w,c]=image2[h,w,c]";

  code = code +"\n" +"image2 = temp";
  code = code +"\n" + "global_img = cv2.add(image1,image2)";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};
Blockly.Python['im_multiply_const'] = function(block) {
  var value_image_1 = Blockly.Python.valueToCode(block, 'image_1', Blockly.Python.ORDER_ATOMIC);
  var value_const = Blockly.Python.valueToCode(block, 'const', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_image_1 + "\n";
  code = code +  "image1 = global_img";
  code = code + "\n" + "global_img = image1*"+value_const;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};
Blockly.Python['im_addition_const'] = function(block) {
   var value_image_1 = Blockly.Python.valueToCode(block, 'image_1', Blockly.Python.ORDER_ATOMIC);
  var value_const = Blockly.Python.valueToCode(block, 'const', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_image_1 + "\n";
  code = code +  "image1 = global_img";
  code = code + "\n" + "global_img = image1+"+value_const;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};
Blockly.Python['im_subtraction_const'] = function(block) {
   var value_image_1 = Blockly.Python.valueToCode(block, 'image_1', Blockly.Python.ORDER_ATOMIC);
  var value_const = Blockly.Python.valueToCode(block, 'const', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_image_1 + "\n";
  code = code +  "image1 = global_img";
  code = code + "\n" + "global_img = image1-"+value_const;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};



/* define variables for image*/
Blockly.Blocks['image_variable'] = {
  init: function() {
    this.appendValueInput("NAME")
    .setCheck("mat")
    .appendField("Image")
    .appendField(new Blockly.FieldTextInput("img"), "image_variable");
    this.setColour(5);
    this.setTooltip('define image variable');
    this.setHelpUrl('');
  }
};

Blockly.Python['image_variable'] = function(block) {
  var text_image_variable = block.getFieldValue('image_variable');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name + '\n';
  code = code  + text_image_variable + "=global_img";

  return code;
};

Blockly.Blocks['image_variable_access'] = {
  init: function() {
    this.appendDummyInput()
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(new Blockly.FieldTextInput("img"), "variable_img");
    this.setOutput(true, "mat");
    this.setColour(5);
    this.setTooltip('define image variable');
    this.setHelpUrl('');
  }
};

Blockly.Python['image_variable_access'] = function(block) {
  var text_variable_img = block.getFieldValue('variable_img');
  // TODO: Assemble Python into code variable.
  var code  = "global_img=" + text_variable_img;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

Blockly.Blocks['image_variable_in_statement'] = {
  init: function() {
    this.appendValueInput("NAME")
    .setCheck("mat")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("variable")
    .appendField(new Blockly.FieldTextInput("img"), "variable_img");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(5);
    this.setTooltip('define image variable');
    this.setHelpUrl('');
  }
};

Blockly.Python['image_variable_in_statement'] = function(block) {
  var text_variable_img = block.getFieldValue('variable_img');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Blocks['im_rotate'] = {
  init: function() {
    this.appendValueInput("input_image")
        .setCheck("mat")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Rotate image");
    this.appendValueInput("angle")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Angle");
    this.setInputsInline(false);
    this.setOutput(true, "mat");
    this.setColour(150);
    this.setTooltip('Use this block to rotate the input image by a fixed angle in anticlockwise direction');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_rotate'] = function(block) {
  var value_input_image = Blockly.Python.valueToCode(block, 'input_image', Blockly.Python.ORDER_ATOMIC);
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_input_image + "\n";
  code = code +"image = global_img";
  code = code + "\n" + "(h, w) = image.shape[:2]";
  code = code + "\n" + "center = (w / 2, h / 2)";
  code = code + "\n" + "angle = " + value_angle;
  code = code + "\n" + "M = cv2.getRotationMatrix2D(center, angle, 1.0)";
  code = code + "\n" + "global_img = cv2.warpAffine(image, M, (w, h))";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code,];
};

Blockly.Blocks['im_erode'] = {
  init: function() {
    this.appendValueInput("input_image")
        .setCheck("mat")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Erode Image");
    this.appendValueInput("window")
        .setCheck("window")
        .appendField("Window");
    this.setOutput(true, "mat");
    this.setColour(345);
    this.setTooltip('Morphology operator : ERODE');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_erode'] = function(block) {
  var value_input_image = Blockly.Python.valueToCode(block, 'input_image', Blockly.Python.ORDER_ATOMIC);
  var value_window = Blockly.Python.valueToCode(block, 'window', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['im_dilate'] = {
  init: function() {
    this.appendValueInput("input_image")
        .setCheck("mat")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Dilate Image");
    this.appendValueInput("Window")
        .setCheck("window")
        .appendField("Window");
    this.setOutput(true, "mat");
    this.setColour(345);
    this.setTooltip('Morphology operator : DILATE');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_dilate'] = function(block) {
  var value_input_image = Blockly.Python.valueToCode(block, 'input_image', Blockly.Python.ORDER_ATOMIC);
  var value_window = Blockly.Python.valueToCode(block, 'Window', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['im_open'] = {
  init: function() {
    this.appendValueInput("input image")
        .setCheck("mat")
        .appendField("open image");
    this.setOutput(true, "mat");
    this.setColour(230);
    this.setTooltip('Morphology operator : OPEN');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_open'] = function(block) {
  var value_input_image = Blockly.Python.valueToCode(block, 'input image', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['im_close'] = {
  init: function() {
    this.appendValueInput("input image")
        .setCheck("mat")
        .appendField("close image");
    this.setOutput(true, "mat");
    this.setColour(230);
    this.setTooltip('Morphology operator : CLOSE');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_close'] = function(block) {
  var value_input_image = Blockly.Python.valueToCode(block, 'input image', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['im_region_max'] = {
  init: function() {
    this.appendValueInput("input image")
        .setCheck("mat")
        .appendField("Region Max");
    this.appendValueInput("window")
        .setCheck("window")
        .appendField("Window");
    this.setOutput(true, "mat");
    this.setColour(230);
    this.setTooltip('Morphology operator : Region Max');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_region_max'] = function(block) {
  var value_input_image = Blockly.Python.valueToCode(block, 'input image', Blockly.Python.ORDER_ATOMIC);
  var value_window = Blockly.Python.valueToCode(block, 'window', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['im_region_min'] = {
  init: function() {
    this.appendValueInput("input image")
        .setCheck("mat")
        .appendField("Region Min");
    this.appendValueInput("window")
        .setCheck("mat")
        .appendField("Window");
    this.setOutput(true, "mat");
    this.setColour(230);
    this.setTooltip('Morphology operator : Region Min');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_region_min'] = function(block) {
  var value_input_image = Blockly.Python.valueToCode(block, 'input image', Blockly.Python.ORDER_ATOMIC);
  var value_window = Blockly.Python.valueToCode(block, 'window', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['im_resize'] = {
  init: function() {
    this.appendValueInput("input_image")
        .setCheck("mat")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Resize image");
    this.appendValueInput("scale")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Scale (Positive)");
    this.setInputsInline(false);
    this.setOutput(true, "mat");
    this.setColour(150);
    this.setTooltip('Use this block to resize the image by a given scaling factor');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_resize'] = function(block) {
  var value_input_image = Blockly.Python.valueToCode(block, 'input_image', Blockly.Python.ORDER_ATOMIC);
  var value_scale = Blockly.Python.valueToCode(block, 'scale', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_input_image + "\n";
  code = code + "\n" + "image=global_img";
  code = code + "\n" + "var ="+ value_scale;
  code = code + "\n" + "dim = ( int(image.shape[0]*var) , int(image.shape[1]*var))";
  code = code + "\n" + "global_img = cv2.resize(image, dim, interpolation = cv2.INTER_AREA)";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

// Blockly.Blocks['im_histeq_local'] = {
//   init: function() {
//     this.appendValueInput("x")
//         .setCheck("mat")
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField("Apply Histogram Equilization on");
//     this.appendValueInput("Window")
//         .setCheck("window")
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField("Window");
//     this.setOutput(true, "mat");
//     this.setColour(120);
//     this.setTooltip('CLAHE (Contrast Limited Adaptive Histogram Equalization)');
//     this.setHelpUrl('');
//   }
// };

Blockly.Blocks['im_histeq'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck("mat")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Apply Histogram Equilization on");
    this.setOutput(true, "mat");
    this.setColour(120);
    this.setTooltip('Histogram Equilization');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_histeq'] = function(block) {
  var value_image = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_window = Blockly.Python.valueToCode(block, 'Window', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_image + "\n";
  code = code + "\n" + "image = global_img";
  code = code +"\n"+"if image.shape[2] == 3:";
  code = code +"\n"+" img_yuv = cv2.cvtColor(image, cv2.COLOR_BGR2YUV)";
  code = code +"\n"+" img_yuv[:,:,0] = cv2.equalizeHist(img_yuv[:,:,0])";
  code = code +"\n"+" global_img = cv2.cvtColor(img_yuv, cv2.COLOR_YUV2BGR)";

  code = code +"\n"+"else:";
  code = code +"\n"+" global_img = cv2.equalizeHist(image)";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

Blockly.Blocks['im_window'] = {
  init: function() {
    this.appendValueInput("height")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Height");
    this.appendValueInput("width")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Width");
    this.setInputsInline(true);
    this.setOutput(true, "window");
    this.setColour(5);
    this.setTooltip('Window Size');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_window'] = function(block) {
  var value_height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC);
  var value_width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "array_dimension = [" + value_height +"," + value_width + "]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

Blockly.Blocks['im_histeq_local'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck("mat")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Apply CLAHE on");
    this.appendValueInput("window")
        .setCheck("window")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Window");
    this.setOutput(true, "mat");
    this.setColour(120);
    this.setTooltip('CLAHE Histogram Equilization');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_histeq_local'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_window = Blockly.Python.valueToCode(block, 'window', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_x + "\n";
  code = code + value_window;
  code = code + "\n" + "image = global_img";
  code = code + "\n" + "win_height = array_dimension[0]";
  code = code + "\n" + "win_width = array_dimension[1]";
  code = code + "\n" + "clahe = cv2.createCLAHE(clipLimit=2, tileGridSize=(win_height, win_width))";
  // code = code + "\n" + "if image.shape[2] == 3:";
  // code = code + "\n" + " image= cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)";
  code = code + "\n" + "global_img = clahe.apply(image)";

  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

// Blockly.Blocks['im_dimension'] = {
//   init: function() {
//     this.appendValueInput("height")
//         .setCheck("Number")
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField("Height");
//     this.appendValueInput("width")
//         .setCheck("Number")
//         .setAlign(Blockly.ALIGN_RIGHT)
//         .appendField("Width");
//     this.setInputsInline(true);
//     this.setOutput(true, "dimension");
//     this.setColour(230);
//     this.setTooltip('Use this block to input the dimensions');
//     this.setHelpUrl('');
//   }
// };

// Blockly.Python['im_dimension'] = function(block) {
//   var value_height = Blockly.Python.valueToCode(block, 'height', Blockly.Python.ORDER_ATOMIC);
//   var value_width = Blockly.Python.valueToCode(block, 'width', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble Python into code variable.
//   var code = "array_dimension = [" + value_height +"," + value_width + "]";
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.Python.ORDER_NONE];
// };

Blockly.Blocks['im_morph'] = {
  init: function() {
    this.appendValueInput("image")
        .setCheck("mat")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Perform")
        .appendField(new Blockly.FieldDropdown([["Erosion","im_erode"], ["Dilation","im_dilate"], ["Opening","im_open"], ["Closing","im_close"], ["Gradient","im_gradient"], ["Top Hat","im_tophat"], ["Black Hat","im_blackhat"]]), "Morphological")
        .appendField("on Image");
    this.appendValueInput("window")
        .setCheck("window")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Window");
    this.setOutput(true, "mat");
    this.setColour(300);
    this.setTooltip('Perform Morphological Transformations');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_morph'] = function(block) {
  var dropdown_morphological = block.getFieldValue('Morphological');
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var value_window = Blockly.Python.valueToCode(block, 'window', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_image + "\n";
  code = code + value_window;
  code = code + "\n" + "image = global_img";
  code = code + "\n" + "kernel = np.ones((array_dimension[0],array_dimension[1]),np.uint8)";

  if(dropdown_morphological == "im_erode"){
    code = code + "\n" + "global_img = cv2.erode(image,kernel,iterations = 1)";
  }
  else if(dropdown_morphological == "im_dilate"){
    code = code + "\n" + "global_img = cv2.dilate(image,kernel,iterations = 1)";
  }
  else if(dropdown_morphological == "im_open"){
    code = code + "\n" + "global_img = cv2.morphologyEx(image, cv2.MORPH_OPEN, kernel)";
  }
  else if(dropdown_morphological == "im_close"){
    code = code + "\n" + "global_img = cv2.morphologyEx(image, cv2.MORPH_CLOSE, kernel)";
  }
  else if(dropdown_morphological == "im_gradient"){
    code = code + "\n" + "global_img = cv2.morphologyEx(image, cv2.MORPH_GRADIENT, kernel)";
  }
  else if(dropdown_morphological == "im_tophat"){
    code = code + "\n" + "global_img = cv2.morphologyEx(image, cv2.MORPH_TOPHAT, kernel)";
  }
  else if(dropdown_morphological == "im_blackhat"){
    code = code + "\n" + "global_img = cv2.morphologyEx(image, cv2.MORPH_BLACKHAT, kernel)";
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

Blockly.Blocks['im_averaging'] = {
  init: function() {
    this.appendValueInput("image")
        .setCheck("mat")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Averaging blur on");
    this.appendValueInput("window")
        .setCheck("window")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Window");
    this.setOutput(true, "mat");
    this.setColour(175);
    this.setTooltip('Averaging Blur Filter');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_averaging'] = function(block) {
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var value_window = Blockly.Python.valueToCode(block, 'window', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_image + "\n";
  code = code + value_window;
  code = code + "\n" + "image = global_img";
  code = code + "\n" + "global_img = cv2.blur(image,(array_dimension[0],array_dimension[1]),0)";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

Blockly.Blocks['im_gaussian'] = {
  init: function() {
    this.appendValueInput("image")
        .setCheck("mat")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Gaussian blur on");
    this.appendValueInput("window")
        .setCheck("window")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Window");
    this.setOutput(true, "mat");
    this.setColour(175);
    this.setTooltip('Gaussian Blur Filter');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_gaussian'] = function(block) {
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var value_window = Blockly.Python.valueToCode(block, 'window', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_image + "\n";
  code = code + value_window;
  code = code + "\n" + "image = global_img";
  code = code + "\n" + "global_img = cv2.GaussianBlur(image,(array_dimension[0],array_dimension[1]),0)";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

Blockly.Blocks['im_median'] = {
  init: function() {
    this.appendValueInput("image")
        .setCheck("mat")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Median blur on");
    this.appendValueInput("window")
        .setCheck("window")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Window");
    this.setOutput(true, "mat");
    this.setColour(175);
    this.setTooltip('Median Blur Filter');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_median'] = function(block) {
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var value_window = Blockly.Python.valueToCode(block, 'window', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_image + "\n";
  code = code + value_window;
  code = code + "\n" + "image = global_img";
  code = code + "\n" + "global_img = cv2.medianBlur(image,array_dimension[0])";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

Blockly.Blocks['im_laplace'] = {
  init: function() {
    this.appendValueInput("image")
        .setCheck("mat")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Laplacian filter on");
    this.appendValueInput("window")
        .setCheck("window")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Window");
    this.setOutput(true, "mat");
    this.setColour(175);
    this.setTooltip('Laplacian filter');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_laplace'] = function(block) {
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var value_window = Blockly.Python.valueToCode(block, 'window', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_image + "\n";
  code = code + value_window;
  code = code + "\n" + "image = global_img";
  code = code + "\n" + "global_img = cv2.Laplacian(image,cv2.CV_64F,array_dimension[0])";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

Blockly.Blocks['im_sobel'] = {
  init: function() {
    this.appendValueInput("image")
        .setCheck("mat")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sobel filter on")
        .appendField(new Blockly.FieldDropdown([["x","x"], ["y","y"]]), "axis")
        .appendField("on Image");
    this.appendValueInput("window")
        .setCheck("window")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("window");
    this.setOutput(true, "mat");
    this.setColour(175);
    this.setTooltip('detect edges on the horizontal or vertical direction');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_sobel'] = function(block) {
  var dropdown_axis = block.getFieldValue('axis');
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var value_window = Blockly.Python.valueToCode(block, 'window', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_image + "\n";
  code = code + value_window;
  code = code + "\n" + "image = global_img";
  if(dropdown_axis == "x"){
    code = code + "\n" + "global_img = cv2.Sobel(image,cv2.CV_64F,1,0,array_dimension[0])";
  }
  else if(dropdown_axis == "y"){
    code = code + "\n" + "global_img = cv2.Sobel(image,cv2.CV_64F,0,1,array_dimension[0])";

  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

Blockly.Blocks['im_fft2'] = {
  init: function() {
    this.appendValueInput("image")
        .setCheck("mat")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Apply Fast Fourier Transform on");
    this.setOutput(true, "mat");
    this.setColour(300);
    this.setTooltip('Fast Fourier Transform');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_fft2'] = function(block) {
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_image + "\n";
  code = code + "\n" + "image = global_img";
  // code = code + "\n" + "global_img = cv2.dft(np.float32(image),flags = cv2.DFT_COMPLEX_OUTPUT)";
  code = code + "\n" + "global_img = np.fft.fft2(image)";
  
  code = code + "\n" + "image = cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)";
  code = code + "\n" + "dft = cv2.dft(np.float32(image),flags = cv2.DFT_COMPLEX_OUTPUT)";
  code = code + "\n" + "dft_shift = np.fft.fftshift(dft)";

  code = code + "\n" + "magnitude_spectrum = 20*np.log(cv2.magnitude(dft_shift[:,:,0],dft_shift[:,:,1]))";

  code = code + "\n" + "plt.imshow(magnitude_spectrum, cmap = 'gray')";
  code = code + "\n" + "plt.title('Magnitude Spectrum'), plt.xticks([]), plt.yticks([])";
  code = code + "\n" + "plt.show()";

  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

/*Blockly.Blocks['im_watershed'] = {
  init: function() {
    this.appendValueInput("image")
        .setCheck("mat")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Image");
    this.appendValueInput("window")
        .setCheck("window")
        .appendField("Window");
    this.setColour(330);
    this.setOutput(true, "mat");
    this.setTooltip('Image Segmentation with Watershed Algorithm');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_watershed'] = function(block) {
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var value_window = Blockly.Python.valueToCode(block, 'window', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_image + "\n";
  code = code + value_window;
  code = code + "\n" + "image = global_img";
  code = code + "\n" + "gray = cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)";
  code = code + "\n" + "ret, thresh = cv2.threshold(gray,0,255,cv2.THRESH_BINARY_INV+cv2.THRESH_OTSU)";
  code = code + "\n" + "kernel = np.ones((array_dimension[0],array_dimension[1]),np.uint8)";
  code = code + "\n" + "opening = cv2.morphologyEx(thresh,cv2.MORPH_OPEN,kernel, iterations = 2)";
  code = code + "\n" + "sure_bg = cv2.dilate(opening,kernel,iterations=3)";
  code = code + "\n" + "dist_transform = cv2.distanceTransform(opening,cv2.cv.CV_DIST_L2,5)";
  code = code + "\n" + "ret, sure_fg = cv2.threshold(dist_transform,0.7*dist_transform.max(),255,0)";
  code = code + "\n" + "sure_fg = np.uint8(sure_fg)";
  code = code + "\n" + "unknown = cv2.subtract(sure_bg,sure_fg)";
  code = code + "\n" + "ret, markers = cv2.connectedComponents(sure_fg)";
  code = code + "\n" + "markers = markers+1";
  code = code + "\n" + "markers[unknown==255] = 0";
  code = code + "\n" + "markers = cv2.watershed(image,markers)";
  code = code + "\n" + "image[markers == -1] = [255,0,0]";
  return [code];
};*/

Blockly.Blocks['im_binarization'] = {
  init: function() {
    this.appendValueInput("image")
        .setCheck("mat")
        .appendField("Apply Binarization on Image");
    this.setOutput(true, "mat");
    this.setColour(350);
    this.setTooltip('Binarization');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_binarization'] = function(block) {
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_image + "\n";
  code = code + "\n" + "image = global_img";
  code = code + "\n" + "ret,global_img = cv2.threshold(image,127,255,cv2.THRESH_BINARY)";
  // code = code + "\n" + "th3 = cv2.adaptiveThreshold(img,255,cv2.ADAPTIVE_THRESH_GAUSSIAN_C,cv2.THRESH_BINARY,11,2)";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

Blockly.Blocks['im_binarization_adaptive'] = {
  init: function() {
    this.appendValueInput("image")
        .setCheck("mat")
        .appendField("Apply Adaptive Binarization on Image");
    this.appendValueInput("window")
        .setCheck("window")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("window");
    this.setOutput(true, "mat");
    this.setColour(350);
    this.setTooltip('Adaptive Binarization');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_binarization_adaptive'] = function(block) {
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var value_window = Blockly.Python.valueToCode(block, 'window', Blockly.Python.ORDER_ATOMIC);

  // TODO: Assemble Python into code variable.
  var code = value_image + "\n";
  code = code + value_window;
  code = code + "\n" + "image = global_img";
  // code = code + "\n" + "ret,thresh1 = cv2.threshold(image,127,255,cv2.THRESH_BINARY)";
  code = code + "\n" + "global_img = cv2.adaptiveThreshold(image,255,cv2.ADAPTIVE_THRESH_GAUSSIAN_C,cv2.THRESH_BINARY,array_dimension[0],array_dimension[1])";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};


Blockly.Blocks['im_affine'] = {
  init: function() {
    this.appendValueInput("image")
        .setCheck("mat")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Apply affine transform on image");
    this.appendValueInput("input_points")
        .setCheck("four_point")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("On points (coordinates)");
    this.appendValueInput("output_points")
        .setCheck("four_point")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Which are mapped to points");
    this.setOutput(true, "mat");
    this.setColour(150);
    this.setTooltip('Apply affine transform to the input image');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_affine'] = function(block) {
  var value_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var value_input_points = Blockly.Python.valueToCode(block, 'input_points', Blockly.Python.ORDER_ATOMIC);
  var value_output_points = Blockly.Python.valueToCode(block, 'output_points', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_image + "\n";
  code = code + value_input_points;
  code = code +"\n" + "input_pts = array_point";
  code = code +"\n" + value_output_points;
    code = code +"\n" + "output_pts = array_point";
  code = code + "\n" + "image = global_img";
  code = code + "\n" + "rows,cols = image.shape";
  code = code + "\n" + "pts1 = np.float32(input_pts)";
  code = code + "\n" + "pts2 = np.float32(output_pts)";
  code = code + "\n" + "M = cv2.getPerspectiveTransform(pts1,pts2)";
  code = code + "\n" + "dst = cv2.warpPerspective(image,M,(cols,rows))";
  code = code + "\n" + "global_img = dst";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

Blockly.Blocks['im_point'] = {
  init: function() {
    this.appendValueInput("in_point_1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("in_point_2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(", Y");
    this.setInputsInline(true);
    this.setOutput(true, "point");
    this.setColour(5);
    this.setTooltip('Input image point');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_point'] = function(block) {
  var value_in_point_1 = Blockly.Python.valueToCode(block, 'in_point_1', Blockly.Python.ORDER_ATOMIC);
  var value_in_point_2 = Blockly.Python.valueToCode(block, 'in_point_2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "pt_x="+value_in_point_1;
  code = code + "\n" +"pt_y="+value_in_point_2;
   code = code + "\n" + "array_point = [pt_x,pt_y]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

Blockly.Blocks['im_three_point'] = {
  init: function() {
    this.appendValueInput("in_point_1")
        .setCheck("point")
        .appendField("Input point 1");
    this.appendValueInput("in_point_2")
        .setCheck("point")
        .appendField("Input point 2");
    this.appendValueInput("in_point_3")
        .setCheck("point")
        .appendField("Input point 3");
    this.appendValueInput("in_point_4")
        .setCheck("point")
        .appendField("Input point 4");
    this.setOutput(true, "four_point");
    this.setColour(5);
    this.setTooltip('Input three points');
    this.setHelpUrl('');
  }
};

Blockly.Python['im_three_point'] = function(block) {
  var value_in_point_1 = Blockly.Python.valueToCode(block, 'in_point_1', Blockly.Python.ORDER_ATOMIC);
  var value_in_point_2 = Blockly.Python.valueToCode(block, 'in_point_2', Blockly.Python.ORDER_ATOMIC);
  var value_in_point_3 = Blockly.Python.valueToCode(block, 'in_point_3', Blockly.Python.ORDER_ATOMIC);
  var value_in_point_4 = Blockly.Python.valueToCode(block, 'in_point_4', Blockly.Python.ORDER_ATOMIC);

  // TODO: Assemble Python into code variable.
  var code = value_in_point_1 + "\n";
  code = code + "pt1 = array_point";
  code = code + "\n" + value_in_point_2;
  code = code + "\n" + "pt2 = array_point";
  code = code + "\n" + value_in_point_3;
  code = code + "\n" + "pt3 = array_point";
  code = code + "\n" + value_in_point_4;
  code = code + "\n" + "pt4 = array_point";
  code = code + "\n" + "array_point = [pt1,pt2,pt3,pt4]";

  //var code = "array_point = [[" + value_in_point_1[0] +"," + value_in_point_1[1] + "],"+"[" + value_in_point_2[0] +"," + value_in_point_2[1] + "],"+"[" + value_in_point_3[0] +"," + value_in_point_3[1] + "]"+"]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};
