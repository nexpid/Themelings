// app/modules/chat_input/native/accessories/ChatInputExpressionButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = {};
    var10 = {'borderRadius': null, 'paddingHorizontal': 6, 'paddingVertical': 6, 'height': 36, 'width': 36};
    var11 = 3;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var4['expressionButton'] = var10;
    var10 = {'tintColor': null, 'position': 'absolute', 'left': 6, 'top': 6};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_NORMAL;
    var10['tintColor'] = var11;
    var4['expressionButtonIcon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var11 = var2.style;
            var7 = var2.active;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 24; continue _fun0001 }
 22:
            var7 = false;
 24:
            var6 = var2.onPress;
            var _closure2_slot0 = var6;
            var2 = _closure1_slot5;
            var10 = var2.bind(var4)();
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
            var8 = var2.bind(var3)(var1);
            var3 = _closure1_slot4;
            var13 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 4;
            var1 = var6[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var1['ref'] = var8;
            var12 = var10.expressionButton;
            var8 = new Array(2);
            var8[0] = var12;
            var8[1] = var11;
            var1['style'] = var8;
            var8 = 'button';
            var1['accessibilityRole'] = var8;
            var8 = 5;
            var11 = var6[var8];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var6[var8];
            var8 = var13.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.iZ7Mz8;
            var8 = var11.bind(var12)(var8);
            var1['accessibilityLabel'] = var8;
            var1['onPress'] = var5;
            var8 = _closure1_slot1;
            var5 = 6;
            var5 = var6[var5];
            var6 = var8.bind(var4)(var5);
            var5 = {};
            var10 = var10.expressionButtonIcon;
            var5['style'] = var10;
            var10 = _closure1_slot2;
            if(var7) { _fun0001_ip = 251; continue _fun0001 }
 242:
            var7 = 8;
            var7 = var10[var7];
            _fun0001_ip = 258; continue _fun0001;
 251:
            var9 = 7;
            var7 = var10[var9];
 258:
            var7 = var8.bind(var4)(var7);
            var5['source'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/accessories/ChatInputExpressionButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();