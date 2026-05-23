// app/modules/chat_input/native/FloatingChatInputContainer.tsx
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
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var9 = 1;
    var7 = var6[var9];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Easing;
    var7 = var8.bezier;
    var14 = 0.2;
    var15 = var8;
    var13 = 0;
    var12 = 0;
    var11 = var9;
    var4 = var15[var7](var14, var13, var12, var11, var10);
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function FloatingChatInputContainerTsx1(){const{paddingSV}=this.__closure;return{paddingBottom:paddingSV.get()};}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/FloatingChatInputContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FloatingChatInputContainer(arg1) {
        var1 = arg1;
        var9 = var1.style;
        var6 = var1.onLayout;
        var5 = var1.children;
        var1 = function useKeyboardOpenPaddingStyle() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var3 = 4;
                var3 = var11[var3];
                var4 = undefined;
                var6 = var8.bind(var4)(var3);
                var5 = var6.useToken;
                var12 = _closure1_slot1;
                var3 = 5;
                var3 = var11[var3];
                var3 = var12.bind(var4)(var3);
                var3 = var3.modules;
                var3 = var3.mobile;
                var3 = var3.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL;
                var9 = var5.bind(var6)(var3);
                var _closure3_slot0 = var9;
                var13 = _closure1_slot4;
                var5 = var13.useState;
                var3 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 6;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.KeyboardController;
                        var1 = var2.state;
                        var2 = var1.bind(var2)();
                        var1 = null;
                        var4 = var1 == var2;
                        if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var3 = var2.height;
case 2:
                        var4 = var1 != var3;
                        var2 = 0;
                        var1 = 0;
                        if(!var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var1 = var3;
case 4:
                        var1 = var1 > var2;
                        return var1;
                    }
                };
                var6 = var5.bind(var13)(var3);
                var5 = _closure1_slot3;
                var3 = 2;
                var5 = var5.bind(var4)(var6, var3);
                var7 = 0;
                var10 = var5[var7];
                var3 = 1;
                var3 = var5[var3];
                var _closure3_slot1 = var3;
                var6 = var13.useEffect;
                var5 = function() {
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var6 = var5[var2];
                    var3 = undefined;
                    var6 = var4.bind(var3)(var6);
                    var9 = var6.KeyboardEvents;
                    var8 = var9.addListener;
                    var7 = 'keyboardWillShow';
                    var6 = function() {
                        var3 = _closure3_slot1;
                        var2 = undefined;
                        var1 = true;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var6 = var8.bind(var9)(var7, var6);
                    var _closure4_slot0 = var6;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.KeyboardEvents;
                    var4 = var5.addListener;
                    var3 = 'keyboardWillHide';
                    var2 = function() {
                        var3 = _closure3_slot1;
                        var2 = undefined;
                        var1 = false;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure4_slot1 = var2;
                    var1 = function() {
                        var3 = _closure4_slot0;
                        var2 = var3.remove;
                        var2 = var2.bind(var3)();
                        var2 = _closure4_slot1;
                        var1 = var2.remove;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                };
                var3 = new Array(0);
                var3 = var6.bind(var13)(var5, var3);
                var6 = 7;
                var3 = var11[var6];
                var14 = var8.bind(var4)(var3);
                var13 = var14.useKeyboardContextForType;
                var3 = 8;
                var5 = var11[var3];
                var5 = var8.bind(var4)(var5);
                var5 = var5.KeyboardTypes;
                var5 = var5.SYSTEM;
                var5 = var13.bind(var14)(var5);
                var13 = var5.keyboardWillOpen;
                var5 = true;
                var5 = var5 === var13;
                var6 = var11[var6];
                var6 = var12.bind(var4)(var6);
                var6 = var6.bind(var4)();
                var3 = var11[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.KeyboardTypes;
                var3 = var3.SYSTEM;
                var3 = var6 !== var3;
                if(var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var10 = var5;
case 6:
                if(var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var10 = var3;
case 8:
                var _closure3_slot2 = var10;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = 3;
                var3 = var3[var5];
                var6 = var6.bind(var4)(var3);
                var3 = var6.useSharedValue;
                var7 = 0;
                if(!var10) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var7 = var9;
case 10:
                var3 = var3.bind(var6)(var7);
                var _closure3_slot3 = var3;
                var8 = _closure1_slot4;
                var7 = var8.useEffect;
                var6 = new Array(3);
                var6[0] = var10;
                var6[1] = var9;
                var6[2] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = _closure3_slot3;
                        var3 = var4.set;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 9;
                        var5 = var5[var1];
                        var1 = undefined;
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.withTiming;
                        var9 = _closure3_slot2;
                        var5 = 0;
                        if(!var9) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var5 = _closure3_slot0;
case 12:
                        var2 = {};
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var9 = 10;
                        var9 = var11[var9];
                        var9 = var10.bind(var1)(var9);
                        var9 = var9.timingStandardDuration;
                        var2['duration'] = var9;
                        var8 = _closure1_slot6;
                        var2['easing'] = var8;
                        var2 = var6.bind(var7)(var5, var2);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var3 = var7.bind(var8)(var3, var6);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useAnimatedStyle;
                var1 = function() {
                    var1 = function FloatingChatInputContainerTsx1() {
                        var1 = {};
                        var3 = _closure3_slot3;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var1['paddingBottom'] = var2;
                        return var1;
                    };
                    var2 = {};
                    var3 = _closure3_slot3;
                    var2['paddingSV'] = var3;
                    var1['__closure'] = var2;
                    var2 = 5673482424037.0;
                    var1['__workletHash'] = var2;
                    var2 = _closure1_slot7;
                    var1['__initData'] = var2;
                    return var1;
                };
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot5;
        var2 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 3;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.View;
        var1 = {};
        var7 = new Array(2);
        var7[0] = var9;
        var7[1] = var8;
        var1['style'] = var7;
        var1['onLayout'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();