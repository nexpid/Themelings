// app/modules/remixing/native/hooks/TextHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRemixingEditorStore;
    var _closure1_slot6 = var4;
    var4 = 3;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_TEXT_COLOR;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRemixingTextStore;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RemixMode;
    var _closure1_slot10 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/hooks/TextHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var15 = var1.canvasSize;
            var _closure2_slot0 = var15;
            var14 = var1.scaleFactor;
            var _closure2_slot1 = var14;
            var22 = undefined;
            var _closure2_slot12 = var22;
            var _closure2_slot13 = var22;
            var _closure2_slot14 = var22;
            var4 = _closure1_slot6;
            var6 = _closure1_slot0;
            var13 = _closure1_slot3;
            var1 = 6;
            var1 = var13[var1];
            var1 = var6.bind(var22)(var1);
            var2 = var1.shallow;
            var1 = function(arg1) {
                var2 = arg1;
                var3 = var2.editingComponent;
                var1 = new Array(3);
                var1[0] = var3;
                var3 = var2.setEditingComponent;
                var1[1] = var3;
                var2 = var2.setCurrentMode;
                var1[2] = var2;
                return var1;
            };
            var4 = var4.bind(var22)(var1, var2);
            var2 = _closure1_slot4;
            var1 = 3;
            var4 = var2.bind(var22)(var4, var1);
            var1 = 0;
            var2 = var4[var1];
            var _closure2_slot2 = var2;
            var1 = 1;
            var12 = var4[var1];
            var _closure2_slot3 = var12;
            var1 = 2;
            var8 = var4[var1];
            var _closure2_slot4 = var8;
            var1 = _closure1_slot9;
            var1 = var1.bind(var22)();
            var11 = var1.setText;
            var _closure2_slot5 = var11;
            var10 = var1.setTextBackgroundColor;
            var _closure2_slot6 = var10;
            var7 = var1.setTextTransform;
            var _closure2_slot7 = var7;
            var9 = var1.setFontSize;
            var _closure2_slot8 = var9;
            var16 = var1.fontSize;
            var1 = var1.reset;
            var _closure2_slot9 = var1;
            var17 = _closure1_slot1;
            var4 = 7;
            var4 = var13[var4];
            var4 = var17.bind(var22)(var4);
            var4 = var4.bind(var22)(var16);
            var17 = var4.font;
            var _closure2_slot10 = var17;
            var16 = var4.fontSource;
            var _closure2_slot11 = var16;
            var4 = 8;
            var4 = var13[var4];
            var13 = var6.bind(var22)(var4);
            var6 = var13.useSupportedTextFilter;
            var20 = null;
            var18 = var20 != var2;
            var4 = null;
            if(!var18) { _fun0001_ip = 314; continue _fun0001 }
 266:
            var19 = var2.type;
            var21 = _closure1_slot0;
            var23 = _closure1_slot3;
            var18 = 9;
            var18 = var23[var18];
            var18 = var21.bind(var22)(var18);
            var18 = var18.RemixElement;
            var18 = var18.TEXT;
            var4 = null;
            if(!(var19 === var18)) { _fun0001_ip = 314; continue _fun0001 }
 309:
            var4 = var2.id;
 314:
            var4 = var6.bind(var13)(var4, var17);
            _closure2_slot12 = var4;
            var6 = _closure1_slot5;
            var13 = var6.useCallback;
            var5 = new Array(3);
            var5[0] = var17;
            var5[1] = var16;
            var5[2] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot7;
                    var1 = var3.getTextState;
                    var1 = var1.bind(var3)();
                    var7 = var1.textColor;
                    var3 = _closure1_slot9;
                    var1 = var3.getState;
                    var1 = var1.bind(var3)();
                    var15 = var1.text;
                    var9 = var1.fontSize;
                    var14 = var1.textWidth;
                    var10 = var1.textBackgroundColor;
                    var3 = _closure2_slot10;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0002_ip = 114; continue _fun0002 }
 73:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 10;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.captureMessage;
                    var1 = 'remix: createTextParams is failed because the font is null';
                    var1 = var3.bind(var4)(var1);
                    _fun0002_ip = 133; continue _fun0002;
 114:
                    var1 = _closure2_slot12;
                    var4 = undefined;
                    var1 = var1.bind(var4)(var15);
                    var3 = '';
                    if(!(var3 === var1)) { _fun0002_ip = 137; continue _fun0002 }
 133:
                    var1 = undefined;
                    return var1;
 137:
                    var1 = {};
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var11 = 11;
                    var11 = var6[var11];
                    var13 = var8.bind(var4)(var11);
                    var12 = var13.wrapText;
                    var11 = _closure2_slot10;
                    var11 = var12.bind(var13)(var11, var15, var14);
                    var1['lines'] = var11;
                    var1['color'] = var7;
                    var1['backgroundColor'] = var10;
                    var1['fontSize'] = var9;
                    var5 = _closure2_slot11;
                    var1['fontSource'] = var5;
                    var5 = 9;
                    var6 = var6[var5];
                    var6 = var8.bind(var4)(var6);
                    var6 = var6.RemixShader;
                    var6 = var6.RAINBOW;
                    if(!(var7 === var6)) { _fun0002_ip = 272; continue _fun0002 }
 231:
                    var1['color'] = var3;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.RemixShader;
                    var2 = var2.RAINBOW;
                    var1['shader'] = var2;
 272:
                    return var1;
                }
            };
            var13 = var13.bind(var6)(var4, var5);
            _closure2_slot13 = var13;
            var5 = var6.useCallback;
            var4 = new Array(5);
            var4[0] = var15;
            var4[1] = var14;
            var4[2] = var13;
            var4[3] = var2;
            var4[4] = var12;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot13;
                    var1 = undefined;
                    var10 = var3.bind(var1)();
                    var3 = null;
                    if(!(var3 != var10)) { _fun0003_ip = 334; continue _fun0003 }
 22:
                    var6 = _closure1_slot9;
                    var5 = var6.getState;
                    var5 = var5.bind(var6)();
                    var9 = var5.textTransform;
                    var13 = var5.addTextPosition;
                    var5 = _closure2_slot2;
                    if(!(var3 != var5)) { _fun0003_ip = 104; continue _fun0003 }
 59:
                    var5 = _closure2_slot2;
                    var6 = var5.type;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 9;
                    var5 = var8[var5];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.RemixElement;
                    var5 = var5.TEXT;
                    if(!(var6 !== var5)) { _fun0003_ip = 204; continue _fun0003 }
 104:
                    var6 = _closure1_slot2;
                    var12 = _closure1_slot3;
                    var5 = 12;
                    var5 = var12[var5];
                    var8 = var6.bind(var1)(var5);
                    var7 = var8.addText;
                    var6 = {};
                    var18 = _closure2_slot0;
                    var19 = var6;
                    var5 = copyDataProperties(var19, var18);
                    var11 = _closure1_slot0;
                    var5 = 11;
                    var5 = var12[var5];
                    var14 = var11.bind(var1)(var5);
                    var12 = var14.scalePoint;
                    var11 = {};
                    var5 = 0;
                    var11['x'] = var5;
                    var5 = var13.y;
                    var11['y'] = var5;
                    var5 = _closure2_slot1;
                    var5 = var12.bind(var14)(var11, var5);
                    var5 = var7.bind(var8)(var10, var6, var5);
                    _fun0003_ip = 334; continue _fun0003;
 204:
                    var6 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var5 = 12;
                    var5 = var7[var5];
                    var8 = var6.bind(var1)(var5);
                    var7 = var8.updateText;
                    var11 = _closure2_slot2;
                    var6 = var11.id;
                    var5 = {};
                    var18 = _closure2_slot0;
                    var19 = var5;
                    var12 = copyDataProperties(var19, var18);
                    if(!(var3 == var11)) { _fun0003_ip = 294; continue _fun0003 }
 256:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot3;
                    var4 = 11;
                    var4 = var12[var4];
                    var12 = var11.bind(var1)(var4);
                    var11 = var12.scalePoint;
                    var4 = _closure2_slot1;
                    var4 = var11.bind(var12)(var13, var4);
                    _fun0003_ip = 303; continue _fun0003;
 294:
                    var11 = _closure2_slot2;
                    var4 = var11.position;
 303:
                    var20 = var8;
                    var19 = var6;
                    var18 = var10;
                    var17 = var5;
                    var16 = var4;
                    var15 = var9;
                    var4 = var20[var7](var19, var18, var17, var16, var15, var14);
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)(var3);
 334:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var2, var4);
            _closure2_slot14 = var5;
            var4 = var6.useCallback;
            var2 = new Array(2);
            var2[0] = var5;
            var2[1] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 13;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.dismissKeyboard;
                    var3 = var3.bind(var4)();
                    var3 = _closure1_slot9;
                    var2 = var3.getState;
                    var2 = var2.bind(var3)();
                    var2 = var2.shouldSaveText;
                    if(!var2) { _fun0004_ip = 69; continue _fun0004 }
 58:
                    var2 = _closure2_slot14;
                    var2 = var2.bind(var1)();
 69:
                    var2 = _closure2_slot9;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var2 = var4.bind(var6)(var1, var2);
            var1 = {};
            var5 = var6.useCallback;
            var4 = new Array(6);
            var4[0] = var12;
            var4[1] = var11;
            var4[2] = var10;
            var4[3] = var9;
            var4[4] = var8;
            var4[5] = var7;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = arg1;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 14;
                    var6 = var5[var3];
                    var1 = undefined;
                    var8 = var7.bind(var1)(var6);
                    var6 = var8.triggerHapticFeedback;
                    var3 = var5[var3];
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.HapticFeedbackTypes;
                    var3 = var3.IMPACT_MEDIUM;
                    var3 = var6.bind(var8)(var3);
                    var6 = _closure2_slot3;
                    var6 = var6.bind(var1)(var4);
                    var8 = _closure2_slot5;
                    var6 = var4.textParams;
                    var10 = var6.lines;
                    var9 = var10.join;
                    var6 = '\n';
                    var6 = var9.bind(var10)(var6);
                    var6 = var8.bind(var1)(var6);
                    var6 = 12;
                    var5 = var5[var6];
                    var9 = var7.bind(var1)(var5);
                    var8 = var9.setTextColor;
                    var5 = var4.textParams;
                    var7 = var5.color;
                    var5 = null;
                    if(!(var5 == var7)) { _fun0005_ip = 146; continue _fun0005 }
 142:
                    var7 = _closure1_slot8;
 146:
                    var7 = var8.bind(var9)(var7);
                    var5 = var5 == var4;
                    var7 = undefined;
                    if(var5) { _fun0005_ip = 166; continue _fun0005 }
 160:
                    var7 = var4.shader;
 166:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var9 = 9;
                    var5 = var5[var9];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.RemixShader;
                    var5 = var5.RAINBOW;
                    if(!(var7 === var5)) { _fun0005_ip = 251; continue _fun0005 }
 202:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var6 = var5[var6];
                    var7 = var8.bind(var1)(var6);
                    var6 = var7.setTextColor;
                    var5 = var5[var9];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.RemixShader;
                    var5 = var5.RAINBOW;
                    var5 = var6.bind(var7)(var5);
 251:
                    var6 = _closure2_slot6;
                    var5 = var4.textParams;
                    var5 = var5.backgroundColor;
                    var5 = var6.bind(var1)(var5);
                    var6 = _closure2_slot7;
                    var5 = var4.transform;
                    var5 = var6.bind(var1)(var5);
                    var5 = _closure2_slot8;
                    var4 = var4.textParams;
                    var4 = var4.fontSize;
                    var4 = var5.bind(var1)(var4);
                    var3 = _closure2_slot4;
                    var2 = _closure1_slot10;
                    var2 = var2.TEXT_MODE;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3, var4);
            var1['editText'] = var3;
            var1['onUnmount'] = var2;
            return var1;
        }
    };
    var3['useTextHooks'] = var2;
    return var1;
})();