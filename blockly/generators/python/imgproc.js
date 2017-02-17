'use strict';

goog.provide('Blockly.Python.variables');

goog.require('Blockly.Python');

Blockly.Blocks['read_image'] = {
  init: function() {
    this.appendValueInput("url")
    .setCheck("String")
    .appendField("Read Image")
    .appendField("Image URL");
    this.setOutput(true, "mat");
    this.setColour(0);
    this.setTooltip('Please provide URL of input image');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['display_image'] = {
  init: function() {
    this.appendValueInput("image")
    .setCheck("mat")
    .appendField("Display Image");
    this.setColour(0);
    this.setTooltip('Please provide URL of input image');
    this.setHelpUrl('');
  }
};


Blockly.Python['read_image'] = function(block) {
  var dropdown_image_type = block.getFieldValue('image type');
  var value_read_image = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);

  //read image from url
  var code = "req = urllib.urlopen("+value_read_image+")";
  code = code +"\n" +"arr = np.asarray(bytearray(req.read()), dtype=np.uint8)"+"\n"+"img = cv2.imdecode(arr,-1)";
  
  //define global image
  code = code + "\n" + "global_img = img";
  return [code];
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
    this.setColour(180);
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
    this.setColour(230);
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
    this.setColour(230);
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
    this.setColour(230);
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
    this.setColour(230);
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
    this.setColour(230);
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
    this.setColour(75);
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
    this.setColour(75);
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
    this.setColour(75);
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