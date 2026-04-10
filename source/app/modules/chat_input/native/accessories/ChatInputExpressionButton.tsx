// app/modules/chat_input/native/accessories/ChatInputExpressionButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var1 = {};
            var2 = {};
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var8 = 3;
            var6 = var6[var8];
            var7 = undefined;
            var6 = var9.bind(var7)(var6);
            var9 = var6.radii;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var9.round;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var6 = var9.sm;
case 4:
            var2['borderRadius'] = var6;
            var2['height'] = var4;
            var2['width'] = var4;
            if(var3) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = {};
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var10 = var6[var8];
            var10 = var9.bind(var7)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.CHAT_INPUT_PILL_PADDING;
            var4['paddingHorizontal'] = var10;
            var6 = var6[var8];
            var6 = var9.bind(var7)(var6);
            var6 = var6.modules;
            var6 = var6.mobile;
            var6 = var6.CHAT_INPUT_PILL_PADDING;
            var4['paddingVertical'] = var6;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var4 = {'alignItems': 'center', 'justifyContent': 'center'};
case 7:
            var12 = var2;
            var11 = var4;
            var4 = copyDataProperties(var12, var11);
            var1['expressionButton'] = var2;
            var2 = {};
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = {};
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var9 = var4[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.colors;
            var9 = var9.INTERACTIVE_TEXT_DEFAULT;
            var3['tintColor'] = var9;
            var9 = 'absolute';
            var3['position'] = var9;
            var9 = var4[var8];
            var9 = var6.bind(var7)(var9);
            var9 = var9.modules;
            var9 = var9.mobile;
            var9 = var9.CHAT_INPUT_EXPRESSION_OFFSET_LEFT;
            var3['left'] = var9;
            var4 = var4[var8];
            var4 = var6.bind(var7)(var4);
            var4 = var4.modules;
            var4 = var4.mobile;
            var4 = var4.CHAT_INPUT_EXPRESSION_OFFSET_TOP;
            var3['top'] = var4;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var4 = {};
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.colors;
            var5 = var5.INTERACTIVE_ICON_DEFAULT;
            var4['tintColor'] = var5;
            var3 = var4;
case 10:
            var12 = var2;
            var11 = var3;
            var3 = copyDataProperties(var12, var11);
            var1['expressionButtonIcon'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var13 = var2.style;
            var7 = var2.active;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var7 = false;
case 11:
            var6 = var2.onPress;
            var _closure2_slot0 = var6;
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 4;
            var2 = var14[var2];
            var3 = var10.bind(var4)(var2);
            var2 = 'ChatInputExpressionButton';
            var5 = var3.bind(var4)(var2);
            var8 = _closure1_slot0;
            var3 = 5;
            var2 = var14[var3];
            var15 = var8.bind(var4)(var2);
            var12 = var15.useToken;
            var2 = 3;
            var11 = var14[var2];
            var11 = var10.bind(var4)(var11);
            var11 = var11.modules;
            var11 = var11.mobile;
            var11 = var11.CHAT_INPUT_ACTION_BUTTON_SIZE;
            var11 = var12.bind(var15)(var11);
            var12 = var14[var3];
            var16 = var8.bind(var4)(var12);
            var15 = var16.useToken;
            var12 = var14[var2];
            var12 = var10.bind(var4)(var12);
            var12 = var12.modules;
            var12 = var12.mobile;
            var12 = var12.CHAT_INPUT_PILL_PADDING;
            var12 = var15.bind(var16)(var12);
            var3 = var14[var3];
            var8 = var8.bind(var4)(var3);
            var3 = var8.useToken;
            var2 = var14[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.CHAT_INPUT_ICON_SIZE;
            var10 = var3.bind(var8)(var2);
            var3 = _closure1_slot5;
            var2 = var11;
            if(var5) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var8 = 2;
            var8 = var8 * var12;
            var2 = var11 - var8;
case 13:
            var8 = var3.bind(var4)(var5, var2);
            var3 = _closure1_slot3;
            var5 = var3.useCallback;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)(var1);
                return var1;
            };
            var5 = var5.bind(var3)(var1, var2);
            var2 = var3.useRef;
            var1 = null;
            var12 = var2.bind(var3)(var1);
            var3 = _closure1_slot4;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 6;
            var1 = var11[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var1['ref'] = var12;
            var14 = var8.expressionButton;
            var12 = new Array(2);
            var12[0] = var14;
            var12[1] = var13;
            var1['style'] = var12;
            var12 = 'button';
            var1['accessibilityRole'] = var12;
            var12 = 7;
            var13 = var11[var12];
            var13 = var6.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var11[var12];
            var12 = var6.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.iZ7Mz9;
            var12 = var13.bind(var14)(var12);
            var1['accessibilityLabel'] = var12;
            var12 = {};
            var12['expanded'] = var7;
            var1['accessibilityState'] = var12;
            var1['onPress'] = var5;
            var5 = 8;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Icon;
            var5 = {};
            var5['size'] = var10;
            var8 = var8.expressionButtonIcon;
            var5['style'] = var8;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            if(var7) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var7 = 10;
            var7 = var10[var7];
            _fun0002_ip = 17; continue _fun0002;
case 15:
            var9 = 9;
            var7 = var10[var9];
case 17:
            var7 = var8.bind(var4)(var7);
            var5['source'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/accessories/ChatInputExpressionButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();