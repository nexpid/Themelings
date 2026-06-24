// app/modules/expression_picker/native/ExpressionPickerKeyboard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.KEYBOARD_ANIMATION_CONFIG;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = {};
    var8 = 'function ExpressionPickerKeyboardTsx1(){const{bottomSheetIndex}=this.__closure;return Math.max(bottomSheetIndex.get(),0)>0;}';
    var4['code'] = var8;
    var _closure1_slot7 = var4;
    var4 = {};
    var8 = 'function ExpressionPickerKeyboardTsx2(){const{bottomSheetExpandingOrExpanded,maximum,minimum}=this.__closure;return{height:bottomSheetExpandingOrExpanded.get()?maximum:minimum};}';
    var4['code'] = var8;
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function ExpressionPickerKeyboard(arg1) {
        var1 = arg1;
        var12 = var1.channel;
        var21 = var1.chatInputRef;
        var _closure2_slot0 = var21;
        var24 = var1.onClose;
        var _closure2_slot1 = var24;
        var6 = var1.transitionState;
        var _closure2_slot2 = var6;
        var4 = _closure1_slot0;
        var19 = _closure1_slot2;
        var1 = 4;
        var3 = var19[var1];
        var5 = undefined;
        var8 = var4.bind(var5)(var3);
        var7 = var8.useSharedValue;
        var3 = -1;
        var17 = var7.bind(var8)(var3);
        var _closure2_slot3 = var17;
        var3 = var19[var1];
        var8 = var4.bind(var5)(var3);
        var7 = var8.useSharedValue;
        var3 = 0;
        var22 = var7.bind(var8)(var3);
        var23 = _closure1_slot4;
        var8 = var23.useRef;
        var7 = null;
        var18 = var8.bind(var23)(var7);
        var _closure2_slot4 = var18;
        var7 = 5;
        var7 = var19[var7];
        var8 = var4.bind(var5)(var7);
        var7 = var8.useIsScreenReaderEnabled;
        var7 = var7.bind(var8)();
        var _closure2_slot5 = var7;
        var9 = var23.useState;
        var8 = false;
        var10 = var9.bind(var23)(var8);
        var9 = _closure1_slot3;
        var8 = 2;
        var8 = var9.bind(var5)(var10, var8);
        var25 = var8[var3];
        var _closure2_slot6 = var25;
        var3 = 1;
        var3 = var8[var3];
        var _closure2_slot7 = var3;
        var9 = var23.useCallback;
        var8 = new Array(1);
        var8[0] = var21;
        var3 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure2_slot0;
                var10 = var4.current;
                var8 = var10.insertText;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 6;
                var2 = var9[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var2);
                var2 = arg1;
                var7 = var6.bind(var1)(var2);
                var2 = null;
                var6 = true;
                var6 = var8.bind(var10)(var7, var2, var6);
                var8 = _closure1_slot0;
                var5 = 7;
                var5 = var9[var5];
                var6 = var8.bind(var1)(var5);
                var5 = var6.dismissGlobalKeyboard;
                var5 = var5.bind(var6)();
                var6 = var4.current;
                var5 = var6.openCustomKeyboard;
                var4 = {};
                var7 = 8;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.KeyboardTypes;
                var7 = var7.EXPRESSION;
                var4['type'] = var7;
                var4 = var5.bind(var6)(var4);
                var3 = _closure2_slot4;
                var4 = var3.current;
                if(!(var2 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = var4.snapToIndex;
                var2 = 0;
                var2 = var3.bind(var4)(var2);
case 2:
                return var1;
            }
        };
        var15 = var9.bind(var23)(var3, var8);
        var9 = var23.useCallback;
        var8 = new Array(1);
        var8[0] = var21;
        var3 = function(arg1) {
            var1 = _closure2_slot0;
            var4 = var1.current;
            var3 = var4.handleSelectGIF;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            var2 = var1.current;
            var1 = var2.openSystemKeyboard;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var14 = var9.bind(var23)(var3, var8);
        var9 = var23.useCallback;
        var8 = new Array(1);
        var8[0] = var21;
        var3 = function(arg1) {
            var1 = _closure2_slot0;
            var4 = var1.current;
            var3 = var4.handleSelectSticker;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            var3 = var1.current;
            var2 = var3.openSystemKeyboard;
            var2 = var2.bind(var3)();
            var3 = var1.current;
            var2 = var3.setText;
            var1 = '';
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var13 = var9.bind(var23)(var3, var8);
        var9 = var23.useCallback;
        var8 = new Array(1);
        var8[0] = var21;
        var3 = function() {
            var1 = _closure2_slot0;
            var2 = var1.current;
            var1 = var2.backspace;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var16 = var9.bind(var23)(var3, var8);
        var3 = 9;
        var3 = var19[var3];
        var9 = var4.bind(var5)(var3);
        var8 = var9.useKeyboardContextForType;
        var3 = 8;
        var3 = var19[var3];
        var3 = var4.bind(var5)(var3);
        var3 = var3.KeyboardTypes;
        var3 = var3.EXPRESSION;
        var11 = var8.bind(var9)(var3);
        var9 = _closure1_slot1;
        var3 = 10;
        var3 = var19[var3];
        var3 = var9.bind(var5)(var3);
        var3 = var3.bind(var5)();
        var26 = var3.minimum;
        var _closure2_slot8 = var26;
        var27 = var3.maximum;
        var _closure2_slot9 = var27;
        var3 = var19[var1];
        var10 = var4.bind(var5)(var3);
        var8 = var10.useDerivedValue;
        var3 = function b() {
            var1 = global;
            var4 = var1.Math;
            var3 = var4.max;
            var2 = _closure2_slot3;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var2 = 0;
            var1 = var3.bind(var4)(var1, var2);
            var1 = var1 > var2;
            return var1;
        };
        var28 = {};
        var28['bottomSheetIndex'] = var17;
        var3['__closure'] = var28;
        var28 = 1982988107352.0;
        var3['__workletHash'] = var28;
        var28 = _closure1_slot7;
        var3['__initData'] = var28;
        var28 = var8.bind(var10)(var3);
        var _closure2_slot10 = var28;
        var3 = var19[var1];
        var8 = var4.bind(var5)(var3);
        var4 = var8.useAnimatedStyle;
        var3 = function S() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = {};
                var4 = _closure2_slot10;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = _closure2_slot8;
                _fun0002_ip = 6; continue _fun0002;
case 4:
                var2 = _closure2_slot9;
case 6:
                var1['height'] = var2;
                return var1;
            }
        };
        var10 = {};
        var10['bottomSheetExpandingOrExpanded'] = var28;
        var10['maximum'] = var27;
        var10['minimum'] = var26;
        var3['__closure'] = var10;
        var10 = 13253776832356.0;
        var3['__workletHash'] = var10;
        var10 = _closure1_slot8;
        var3['__initData'] = var10;
        var8 = var4.bind(var8)(var3);
        var10 = var23.useCallback;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var21;
        var3 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = _closure2_slot7;
                var1 = undefined;
                var3 = true;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot5;
                if(!var3) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                var2 = _closure2_slot0;
                var3 = var2.current;
                var2 = var3.openSystemKeyboard;
                var2 = var2.bind(var3)();
case 7:
                return var1;
            }
        };
        var10 = var10.bind(var23)(var3, var4);
        var4 = var23.useEffect;
        var3 = new Array(3);
        var3[0] = var25;
        var3[1] = var24;
        var3[2] = var6;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure2_slot6;
                if(!var2) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                var4 = _closure2_slot2;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 11;
                var5 = var5[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var3 = var3.TransitionStates;
                var3 = var3.YEETED;
                var2 = var4 === var3;
case 9:
                if(!var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0004_ip = 11; continue _fun0004 }
case 13:
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 11:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var23)(var2, var3);
        var4 = _closure1_slot6;
        var2 = 12;
        var2 = var19[var2];
        var3 = var9.bind(var5)(var2);
        var2 = {};
        var2['ref'] = var18;
        var2['animatedIndex'] = var17;
        var2['animatedPosition'] = var22;
        var2['forceMaxHeight'] = var7;
        var2['chatInputRef'] = var21;
        var20 = _closure1_slot5;
        var2['animationConfigs'] = var20;
        var2['onClose'] = var10;
        var10 = true;
        var2['renderExpressionFooter'] = var10;
        var2['transitionState'] = var6;
        var1 = var19[var1];
        var1 = var9.bind(var5)(var1);
        var6 = var1.View;
        var1 = {};
        var20 = 'expression-picker-sheet';
        var1['nativeID'] = var20;
        var1['style'] = var8;
        var8 = 13;
        var8 = var19[var8];
        var9 = var9.bind(var5)(var8);
        var8 = {};
        var8['bottomSheetRef'] = var18;
        var8['bottomSheetIndex'] = var17;
        var8['onBackspace'] = var16;
        var8['onPressEmoji'] = var15;
        var8['onPressGIF'] = var14;
        var8['onPressSticker'] = var13;
        var8['channel'] = var12;
        var8['expressionType'] = var11;
        var8['inPortalKeyboard'] = var10;
        var8 = var4.bind(var5)(var9, var8);
        var1['children'] = var8;
        var1 = var4.bind(var5)(var6, var1);
        var2['children'] = var1;
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var1 = 'expression-picker-';
        var1 = var6.bind(var1)(var7);
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/expression_picker/native/ExpressionPickerKeyboard.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();