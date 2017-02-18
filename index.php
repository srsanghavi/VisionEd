
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="google" value="notranslate">
  <title>VisionEd</title>
  <link rel="stylesheet" href="style.css">
  <script src="/storage.js"></script>
  <script src="blockly/blockly_compressed.js"></script>
  <script src="blockly/blocks_compressed.js"></script>
  <script src="blockly/javascript_compressed.js"></script>
  <script src="blockly/python_compressed.js"></script>
  <script src="blockly/generators/python/imgproc.js"></script>
  <script src="code.js"></script>
  <style type="text/css">

    textarea {
      border: none;
      overflow: auto;
      outline: none;

      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
    }
  </style>
</head>
<body>
  <table width="99%" height="100%">
    <tr>
      <td>
        <h1><a href="#">VisionEd</a>
          <span id="title"></span>
        </h1>
      </td>
      <td class="farSide">
        <select id="languageMenu"></select>
      </td>
    </tr>
    <tr>
      <td colspan=2>
        <table width="100%">
          <tr id="tabRow" height="1em">
            <td id="tab_blocks" class="tabon">...</td>
            <!-- <td class="tabmin">&nbsp;</td> -->
            <!-- <td id="tab_javascript" class="taboff">JavaScript</td> -->
            <!-- <td class="tabmin">&nbsp;</td> -->
            <td id="tab_python" class="taboff">Python</td>
            <!-- <td class="tabmin">&nbsp;</td> -->
            <!-- <td id="tab_php" class="taboff">PHP</td> -->
            <!-- <td class="tabmin">&nbsp;</td> -->
            <!-- <td id="tab_lua" class="taboff">Lua</td> -->
            <!-- <td class="tabmin">&nbsp;</td> -->
            <!-- <td id="tab_dart" class="taboff">Dart</td> -->
            <!-- <td class="tabmin">&nbsp;</td> -->
            <!-- <td id="tab_xml" class="taboff">XML</td> -->
            <td class="tabmax">
              <button id="trashButton" class="notext" title="...">
                <img src='blockly/media/1x1.gif' class="trash icon21">
              </button>
              <button id="linkButton" class="notext" title="...">
                <img src='blockly/media/1x1.gif' class="link icon21">
              </button>
              <button id="runButton" class="notext primary" title="...">
                <img src='blockly/media/1x1.gif' class="run icon21">
              </button>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td height="99%" colspan=2 id="content_area">
      </td>
    </tr>
  </table>
  <div id="content_blocks" class="content"></div>
  <pre id="content_javascript" class="content"></pre>
  <pre id="content_python" class="content"></pre>
  <pre id="content_php" class="content"></pre>
  <pre id="content_lua" class="content"></pre>
  <pre id="content_dart" class="content"></pre>
  <textarea id="content_xml" class="content" wrap="off"></textarea>

  <xml id="toolbox" style="display: none">
    <category name="{catLogic}" colour="210">
      <block type="controls_if"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_negate"></block>
      <block type="logic_boolean"></block>
      <block type="logic_null"></block>
      <block type="logic_ternary"></block>
    </category>
    
      <category name="{catLoops}" colour="120">
        <block type="controls_repeat_ext">
          <value name="TIMES">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
        </block>
        <block type="controls_whileUntil"></block>
        <block type="controls_for">
          <value name="FROM">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="TO">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
          <value name="BY">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block type="controls_forEach"></block>
        <block type="controls_flow_statements"></block>
      </category>
      <category name="{catMath}" colour="230">
        <block type="math_number"></block>
        <block type="math_arithmetic">
          <value name="A">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="B">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block type="math_single">
          <value name="NUM">
            <shadow type="math_number">
              <field name="NUM">9</field>
            </shadow>
          </value>
        </block>
        <block type="math_trig">
          <value name="NUM">
            <shadow type="math_number">
              <field name="NUM">45</field>
            </shadow>
          </value>
        </block>
        <block type="math_constant"></block>
        <block type="math_number_property">
          <value name="NUMBER_TO_CHECK">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
        </block>
        <block type="math_round">
          <value name="NUM">
            <shadow type="math_number">
              <field name="NUM">3.1</field>
            </shadow>
          </value>
        </block>
        <block type="math_on_list"></block>
        <block type="math_modulo">
          <value name="DIVIDEND">
            <shadow type="math_number">
              <field name="NUM">64</field>
            </shadow>
          </value>
          <value name="DIVISOR">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
        </block>
        <block type="math_constrain">
          <value name="VALUE">
            <shadow type="math_number">
              <field name="NUM">50</field>
            </shadow>
          </value>
          <value name="LOW">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="HIGH">
            <shadow type="math_number">
              <field name="NUM">100</field>
            </shadow>
          </value>
        </block>
        <block type="math_random_int">
          <value name="FROM">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="TO">
            <shadow type="math_number">
              <field name="NUM">100</field>
            </shadow>
          </value>
        </block>
        <block type="math_random_float"></block>
      </category>
      <category name="{catText}" colour="160">
        <block type="text"></block>
        <block type="text_join"></block>
        <block type="text_append">
          <value name="TEXT">
            <shadow type="text"></shadow>
          </value>
        </block>
        <block type="text_length">
          <value name="VALUE">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_isEmpty">
          <value name="VALUE">
            <shadow type="text">
              <field name="TEXT"></field>
            </shadow>
          </value>
        </block>
        <block type="text_indexOf">
          <value name="VALUE">
            <block type="variables_get">
              <field name="VAR">{textVariable}</field>
            </block>
          </value>
          <value name="FIND">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_charAt">
          <value name="VALUE">
            <block type="variables_get">
              <field name="VAR">{textVariable}</field>
            </block>
          </value>
        </block>
        <block type="text_getSubstring">
          <value name="STRING">
            <block type="variables_get">
              <field name="VAR">{textVariable}</field>
            </block>
          </value>
        </block>
        <block type="text_changeCase">
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_trim">
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_print">
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_prompt_ext">
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
      </category>
      <category name="{catLists}" colour="260">
        <block type="lists_create_with">
          <mutation items="0"></mutation>
        </block>
        <block type="lists_create_with"></block>
        <block type="lists_repeat">
          <value name="NUM">
            <shadow type="math_number">
              <field name="NUM">5</field>
            </shadow>
          </value>
        </block>
        <block type="lists_length"></block>
        <block type="lists_isEmpty"></block>
        <block type="lists_indexOf">
          <value name="VALUE">
            <block type="variables_get">
              <field name="VAR">{listVariable}</field>
            </block>
          </value>
        </block>
        <block type="lists_getIndex">
          <value name="VALUE">
            <block type="variables_get">
              <field name="VAR">{listVariable}</field>
            </block>
          </value>
        </block>
        <block type="lists_setIndex">
          <value name="LIST">
            <block type="variables_get">
              <field name="VAR">{listVariable}</field>
            </block>
          </value>
        </block>
        <block type="lists_getSublist">
          <value name="LIST">
            <block type="variables_get">
              <field name="VAR">{listVariable}</field>
            </block>
          </value>
        </block>
        <block type="lists_split">
          <value name="DELIM">
            <shadow type="text">
              <field name="TEXT">,</field>
            </shadow>
          </value>
        </block>
        <block type="lists_sort"></block>
      </category>
      <category name= "Image Functions" colour = "220">
      <category name= "Frequently Used" colour = "120">
          <category name= "variable" colour = "120">
            <block type="image_variable"></block>
            <block type="image_variable_access"></block>
            <block type="image_variable_in_statement"></block>
            <block type="im_window"></block>
          </category>
          <category name= "I/O" colour = "120">
            <block type="read_image"></block>
            <block type="display_image"></block>
          </category>
          <category name= "Color Transforms" colour = "120">
            <block type="convert_color"></block>
          </category>
          <category name= "Arithmetic" colour = "120">
            <block type="im_addition"></block>
            <block type="im_difference"></block>
            <block type="im_multiply_const"></block>
            <block type="im_addition_const"></block>
            <block type="im_subtraction_const"></block>
          </category>
          <category name= "Enhancement" colour = "120">
            <block type="im_histeq"></block>
            <block type="im_histeq_local"></block>
          </category>
          <category name= "Geometric Transforms" colour = "120">
            <block type="im_resize"></block>
            <block type="im_rotate"></block>
            <block type="affine"></block>
            <block type="perspective"></block>
            <block type="translate"></block>
          </category>
          <category name= "Draw" colour = "120">
            <block type="circle"></block>
            <block type="rectangle"></block>
          </category>
      </category>
      <category name= "Special purpose" colour = "120">
        <category name= "Object Recognition" colour = "120">
          <block type="face_recognition"></block>
          <block type="digit_recognition"></block>
        </category>

        <category name= "Segmentation" colour = "120">
          <block type="color based"></block>
          <block type="Otsu"></block>
          <block type="Adaptive"></block>
          <block type="Watershed"></block>
        </category>

        <category name= "Filter" colour = "120">
          <block type="im_gaussian"></block>
          <block type="im_averaging"></block>
          <block type="im_median"></block>
          <block type="im_laplace"></block>
          <block type="im_sobel"></block>
        </category>

        <category name= "Morphological Operation" colour = "120">
          <block type="im_morph"></block>
        </category>

        <category name= "Image Transform" colour = "120">
          <block type="FFT2"></block>
          <block type="FFT shift"></block>
          <block type="iFFT2"></block>
        </category>

        <block type="read_image"></block>
        <block type="disp_image"></block>
      </category>
    </category>
      <category name="{catColour}" colour="20">
        <block type="colour_picker"></block>
        <block type="colour_random"></block>
        <block type="colour_rgb">
          <value name="RED">
            <shadow type="math_number">
              <field name="NUM">100</field>
            </shadow>
          </value>
          <value name="GREEN">
            <shadow type="math_number">
              <field name="NUM">50</field>
              </shadowb
            </value>
            <value nambUE">
              <shadow b"math_number">
                <fieldb="NUM">0</field>
                </shadowb
              </value>
            </block>
            <block type=bur_blend">
              <value nambLOUR1">
                <shadow b"colour_picker">
                  <fieldb="COLOUR">#ff0000</field>
                  </shadowb
                </value>
                <value nambLOUR2">
                  <shadow b"colour_picker">
                    <fieldb="COLOUR">#3333ff</field>
                    </shadowb
                  </value>
                  <value nambTIO">
                    <shadow b"math_number">
                      <fieldb="NUM">0.5</field>
                      </shadowb
                    </value>
                  </block>
                </category>

                <sep></sep>

                <category namebtVariables}" colour="330" custom="VARIABLE"></category>
                <category namebtFunctions}" colour="290" custom="PROCEDURE"></category>
              </xml>
              <div id="output"  style=" width:0vw; height:99vh; border:solid; border-width:1px;border-color: #f95252;position: fixed;top: 0px;right:0px">
                <form target="_new" id="form_code"  action="http://localhost/visionEd/process.php" method="POST" >
                 <textarea type="text" id="code_txtArea" name="code_txtArea" style="border:none ;resize: none;width: 98%;height:98vh" ></textarea>
               </form>
             </div>

           </body>
           </html>
