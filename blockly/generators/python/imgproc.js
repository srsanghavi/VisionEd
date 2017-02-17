'use strict';

goog.provide('Blockly.Python.variables');

goog.require('Blockly.Python');

Blockly.Blocks['read_image'] = {
  init: function() {
    this.appendValueInput("image_url")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Read Image")
        .appendField(new Blockly.FieldDropdown([["in gray","read_gray"], ["in color","read_color"]]), "image type");
    this.setInputsInline(false);
    this.setOutput(true, "jpeg");
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['export_image'] = {
  init: function() {
    this.appendValueInput("image")
        .setCheck("jpeg")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("export Image");
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};




Blockly.Python['read_image'] = function(block) {
  var dropdown_image_type = block.getFieldValue('image type');
  var value_read_image = Blockly.Python.valueToCode(block, 'image_url', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "req = urllib.urlopen("+value_read_image+")";
  code = code +"\n" +"arr = np.asarray(bytearray(req.read()), dtype=np.uint8)"+"\n"+"img = cv2.imdecode(arr,-1)";
  code = code + "\n" + "img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)"
  code = code +"\n"+"cv2.imwrite('temp.jpg', img)";

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['export_image'] = function(block) {
  var value_read_image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "imshow"+value_read_image;
  return code;
};