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
    var4 = function(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var7 = arg3;
            var1 = {};
            var2 = {};
            var9 = _closure1_slot1;
            var5 = _closure1_slot2;
            var6 = 3;
            var8 = var5[var6];
            var5 = undefined;
            var8 = var9.bind(var5)(var8);
            var9 = var8.radii;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var9.round;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var8 = var9.sm;
case 4:
            var2['borderRadius'] = var8;
            var2['height'] = var7;
            var2['width'] = var7;
            if(var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = {};
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var9 = var7[var6];
            var9 = var8.bind(var5)(var9);
            var9 = var9.modules;
            var9 = var9.mobile;
            var9 = var9.CHAT_INPUT_PILL_PADDING;
            var4['paddingHorizontal'] = var9;
            var7 = var7[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.CHAT_INPUT_PILL_PADDING;
            var4['paddingVertical'] = var7;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var4 = {'alignItems': 'center', 'justifyContent': 'center'};
case 7:
            var12 = var2;
            var11 = var4;
            var4 = copyDataProperties(var12, var11);
            var1['expressionButton'] = var2;
            var2 = {};
            var4 = 'absolute';
            var2['position'] = var4;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.CHAT_INPUT_EXPRESSION_OFFSET_LEFT;
            var2['left'] = var7;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.modules;
            var7 = var7.mobile;
            var7 = var7.CHAT_INPUT_EXPRESSION_OFFSET_TOP;
            var2['top'] = var7;
            var1['expressionButtonIconPosition'] = var2;
            var2 = {};
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.CHAT_INPUT_ICON_DEFAULT_TINT;
            var2['tintColor'] = var3;
            var1['expressionButtonIconTint'] = var2;
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
            var14 = var2.style;
            var7 = var2.active;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var7 = false;
case 8:
            var6 = var2.onPress;
            var _closure2_slot0 = var6;
            var11 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 4;
            var2 = var16[var2];
            var5 = var11.bind(var4)(var2);
            var3 = var5.useMobileVisualRefreshConfig;
            var2 = {};
            var8 = 'ChatInputExpressionButton';
            var2['location'] = var8;
            var2 = var3.bind(var5)(var2);
            var8 = var2.enabled;
            var5 = var2.chatInputFloating;
            var3 = 5;
            var2 = var16[var3];
            var13 = var11.bind(var4)(var2);
            var12 = var13.useToken;
            var15 = _closure1_slot1;
            var2 = 3;
            var10 = var16[var2];
            var10 = var15.bind(var4)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.CHAT_INPUT_ACTION_BUTTON_SIZE;
            var12 = var12.bind(var13)(var10);
            var10 = var16[var3];
            var17 = var11.bind(var4)(var10);
            var13 = var17.useToken;
            var10 = var16[var2];
            var10 = var15.bind(var4)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.CHAT_INPUT_PILL_PADDING;
            var13 = var13.bind(var17)(var10);
            var10 = var16[var3];
            var18 = var11.bind(var4)(var10);
            var17 = var18.useToken;
            var10 = var16[var2];
            var10 = var15.bind(var4)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.CHAT_INPUT_PILL_BORDER_WIDTH;
            var10 = var17.bind(var18)(var10);
            var3 = var16[var3];
            var11 = var11.bind(var4)(var3);
            var3 = var11.useToken;
            var2 = var16[var2];
            var2 = var15.bind(var4)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.CHAT_INPUT_ICON_SIZE;
            var11 = var3.bind(var11)(var2);
            var3 = _closure1_slot5;
            var2 = var12;
            if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var13 = var13 + var10;
            var10 = 2;
            var10 = var10 * var13;
            var2 = var12 - var10;
case 10:
            var10 = var3.bind(var4)(var8, var5, var2);
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
            var13 = var2.bind(var3)(var1);
            var3 = _closure1_slot4;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 6;
            var1 = var12[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var1['ref'] = var13;
            var15 = var10.expressionButton;
            var13 = new Array(2);
            var13[0] = var15;
            var13[1] = var14;
            var1['style'] = var13;
            var13 = 'button';
            var1['accessibilityRole'] = var13;
            var13 = 7;
            var14 = var12[var13];
            var14 = var6.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var12[var13];
            var13 = var6.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.iZ7Mz9;
            var13 = var14.bind(var15)(var13);
            var1['accessibilityLabel'] = var13;
            var13 = {};
            var13['expanded'] = var7;
            var1['accessibilityState'] = var13;
            var1['onPress'] = var5;
            var5 = 8;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Icon;
            var5 = {};
            var5['size'] = var11;
            var11 = !var8;
            if(!var11) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var11 = var10.expressionButtonIconPosition;
case 12:
            var8 = new Array(2);
            var8[0] = var11;
            var10 = var10.expressionButtonIconTint;
            var8[1] = var10;
            var5['style'] = var8;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            if(var7) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var7 = 10;
            var7 = var10[var7];
            _fun0002_ip = 16; continue _fun0002;
case 14:
            var9 = 9;
            var7 = var10[var9];
case 16:
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