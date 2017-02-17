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