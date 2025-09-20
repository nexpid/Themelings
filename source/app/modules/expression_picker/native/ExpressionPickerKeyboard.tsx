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
    var8 = 'function ExpressionPickerKeyboardTsx1(){const{animatedSheetIndex}=this.__closure;return Math.max(animatedSheetIndex.get(),0)>0;}';
    var4['code'] = var8;
    var _closure1_slot7 = var4;
    var4 = {};
    var8 = 'function ExpressionPickerKeyboardTsx2(){const{bottomSheetExpandingOrExpanded,maximum,minimum}=this.__closure;return{height:bottomSheetExpandingOrExpanded.get()?maximum:minimum};}';
    var4['code'] = var8;
    var _closure1_slot8 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        var1 = arg1;
        var8 = var1.channel;
        var1 = var1.chatInputRef;
        var _closure2_slot0 = var1;
        var7 = _closure1_slot4;
        var6 = var7.useContext;
        var14 = _closure1_slot0;
        var13 = _closure1_slot2;
        var4 = 4;
        var5 = var13[var4];
        var4 = undefined;
        var5 = var14.bind(var4)(var5);
        var5 = var5.PortalKeyboardContext;
        var5 = var6.bind(var7)(var5);
        var20 = var5.animatedSheetIndex;
        var _closure2_slot1 = var20;
        var5 = var5.bottomSheetRefs;
        var _closure2_slot2 = var5;
        var9 = var7.useCallback;
        var5 = var5.expression;
        var6 = new Array(2);
        var6[0] = var5;
        var6[1] = var1;
        var5 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure2_slot0;
                var10 = var4.current;
                var8 = var10.insertText;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 5;
                var2 = var9[var1];
                var1 = undefined;
                var6 = var6.bind(var1)(var2);
                var2 = arg1;
                var7 = var6.bind(var1)(var2);
                var2 = null;
                var6 = true;
                var6 = var8.bind(var10)(var7, var2, var6);
                var8 = _closure1_slot0;
                var5 = 6;
                var5 = var9[var5];
                var6 = var8.bind(var1)(var5);
                var5 = var6.dismissGlobalKeyboard;
                var5 = var5.bind(var6)();
                var6 = var4.current;
                var5 = var6.openCustomKeyboard;
                var4 = {};
                var7 = 7;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.KeyboardTypes;
                var7 = var7.EXPRESSION;
                var4['type'] = var7;
                var4 = var5.bind(var6)(var4);
                var3 = _closure2_slot2;
                var3 = var3.expression;
                var4 = var3.current;
                if(!(var2 != var4)) { _fun0001_ip = 166; continue _fun0001 }
 153:
                var3 = var4.snapToIndex;
                var2 = 0;
                var2 = var3.bind(var4)(var2);
 166:
                return var1;
            }
        };
        var11 = var9.bind(var7)(var5, var6);
        var9 = var7.useCallback;
        var6 = new Array(1);
        var6[0] = var1;
        var5 = function(arg1) {
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
        var10 = var9.bind(var7)(var5, var6);
        var9 = var7.useCallback;
        var6 = new Array(1);
        var6[0] = var1;
        var5 = function(arg1) {
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
        var9 = var9.bind(var7)(var5, var6);
        var6 = var7.useCallback;
        var5 = new Array(1);
        var5[0] = var1;
        var1 = function() {
            var1 = _closure2_slot0;
            var2 = var1.current;
            var1 = var2.backspace;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var12 = var6.bind(var7)(var1, var5);
        var1 = 8;
        var1 = var13[var1];
        var6 = var14.bind(var4)(var1);
        var5 = var6.useKeyboardContextForType;
        var1 = 7;
        var1 = var13[var1];
        var1 = var14.bind(var4)(var1);
        var1 = var1.KeyboardTypes;
        var1 = var1.EXPRESSION;
        var7 = var5.bind(var6)(var1);
        var6 = _closure1_slot1;
        var1 = 9;
        var1 = var13[var1];
        var1 = var6.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var16 = var1.minimum;
        var _closure2_slot3 = var16;
        var17 = var1.maximum;
        var _closure2_slot4 = var17;
        var1 = 10;
        var5 = var13[var1];
        var18 = var14.bind(var4)(var5);
        var15 = var18.useDerivedValue;
        var5 = function l() {
            var1 = global;
            var4 = var1.Math;
            var3 = var4.max;
            var2 = _closure2_slot1;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var2 = 0;
            var1 = var3.bind(var4)(var1, var2);
            var1 = var1 > var2;
            return var1;
        };
        var19 = {};
        var19['animatedSheetIndex'] = var20;
        var5['__closure'] = var19;
        var19 = 9820130506520.0;
        var5['__workletHash'] = var19;
        var19 = _closure1_slot7;
        var5['__initData'] = var19;
        var18 = var15.bind(var18)(var5);
        var _closure2_slot5 = var18;
        var5 = var13[var1];
        var14 = var14.bind(var4)(var5);
        var5 = var14.useAnimatedStyle;
        var3 = function x() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = {};
                var4 = _closure2_slot5;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                if(var2) { _fun0002_ip = 27; continue _fun0002 }
 21:
                var2 = _closure2_slot3;
                _fun0002_ip = 31; continue _fun0002;
 27:
                var2 = _closure2_slot4;
 31:
                var1['height'] = var2;
                return var1;
            }
        };
        var15 = {};
        var15['bottomSheetExpandingOrExpanded'] = var18;
        var15['maximum'] = var17;
        var15['minimum'] = var16;
        var3['__closure'] = var15;
        var15 = 13253776832356.0;
        var3['__workletHash'] = var15;
        var15 = _closure1_slot8;
        var3['__initData'] = var15;
        var5 = var5.bind(var14)(var3);
        var3 = _closure1_slot6;
        var1 = var13[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var14 = 'expression-picker-sheet';
        var1['nativeID'] = var14;
        var1['style'] = var5;
        var5 = 11;
        var5 = var13[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['onBackspace'] = var12;
        var5['onPressEmoji'] = var11;
        var5['onPressGIF'] = var10;
        var5['onPressSticker'] = var9;
        var5['channel'] = var8;
        var5['expressionType'] = var7;
        var7 = true;
        var5['inActionSheet'] = var7;
        var5['inPortalKeyboard'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var2 = function ExpressionPickerKeyboard(arg1) {
        var3 = arg1;
        var2 = var3.channel;
        var _closure2_slot0 = var2;
        var10 = var3.chatInputRef;
        var _closure2_slot1 = var10;
        var2 = var3.onClose;
        var _closure2_slot2 = var2;
        var6 = var3.transitionState;
        var _closure2_slot3 = var6;
        var12 = _closure1_slot4;
        var7 = var12.useContext;
        var4 = _closure1_slot0;
        var11 = _closure1_slot2;
        var3 = 4;
        var3 = var11[var3];
        var5 = undefined;
        var3 = var4.bind(var5)(var3);
        var3 = var3.PortalKeyboardContext;
        var3 = var7.bind(var12)(var3);
        var3 = var3.bottomSheetRefs;
        var3 = var3.expression;
        var _closure2_slot4 = var3;
        var3 = 12;
        var3 = var11[var3];
        var4 = var4.bind(var5)(var3);
        var3 = var4.useIsScreenReaderEnabled;
        var7 = var3.bind(var4)();
        var _closure2_slot5 = var7;
        var4 = var12.useState;
        var3 = false;
        var8 = var4.bind(var12)(var3);
        var4 = _closure1_slot3;
        var3 = 2;
        var4 = var4.bind(var5)(var8, var3);
        var3 = 0;
        var13 = var4[var3];
        var _closure2_slot6 = var13;
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot7 = var3;
        var8 = var12.useCallback;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var10;
        var3 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = _closure2_slot7;
                var1 = undefined;
                var3 = true;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot5;
                if(!var3) { _fun0003_ip = 42; continue _fun0003 }
 23:
                var2 = _closure2_slot1;
                var3 = var2.current;
                var2 = var3.openSystemKeyboard;
                var2 = var2.bind(var3)();
 42:
                return var1;
            }
        };
        var8 = var8.bind(var12)(var3, var4);
        var4 = var12.useEffect;
        var3 = new Array(3);
        var3[0] = var13;
        var3[1] = var2;
        var3[2] = var6;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure2_slot6;
                if(!var2) { _fun0004_ip = 55; continue _fun0004 }
 10:
                var4 = _closure2_slot3;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 13;
                var5 = var5[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var3 = var3.TransitionStates;
                var3 = var3.YEETED;
                var2 = var4 === var3;
 55:
                if(!var2) { _fun0004_ip = 78; continue _fun0004 }
 58:
                var3 = _closure2_slot2;
                var2 = null;
                if(!(var2 != var3)) { _fun0004_ip = 78; continue _fun0004 }
 68:
                var2 = _closure2_slot2;
                var1 = undefined;
                var1 = var2.bind(var1)();
 78:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var12)(var2, var3);
        var4 = _closure1_slot6;
        var3 = _closure1_slot1;
        var2 = 14;
        var2 = var11[var2];
        var3 = var3.bind(var5)(var2);
        var2 = {};
        var2['forceMaxHeight'] = var7;
        var2['chatInputRef'] = var10;
        var9 = _closure1_slot5;
        var2['animationConfigs'] = var9;
        var2['onClose'] = var8;
        var2['transitionState'] = var6;
        var6 = 'expression';
        var2['refKey'] = var6;
        var1 = function children(arg1) {
            var3 = _closure2_slot4;
            var2 = arg1;
            var2 = var2.current;
            var3['current'] = var2;
            var4 = _closure1_slot6;
            var3 = _closure1_slot9;
            var2 = {};
            var5 = _closure2_slot0;
            var2['channel'] = var5;
            var1 = _closure2_slot1;
            var2['chatInputRef'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
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
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/expression_picker/native/ExpressionPickerKeyboard.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();