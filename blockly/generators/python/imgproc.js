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
  return code;
};