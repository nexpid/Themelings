// app/modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoReanimated.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = function setKeyboardOpenedHeight(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 0;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var4.bind(var1)(var3);
        var5 = var3.Storage;
        var4 = var5.set;
        var3 = _closure1_slot3;
        var2 = arg1;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 'keyboardOpenedHeight';
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = 'function useSafeAreaBottomKeyboardInfoReanimatedTsx1(){const{keyboardHeight,keyboardState,KeyboardState}=this.__closure;return(keyboardHeight.get()>0||keyboardState.get()===KeyboardState.OPENING)&&keyboardState.get()!==KeyboardState.CLOSING;}';
    var1['code'] = var6;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = 'function useSafeAreaBottomKeyboardInfoReanimatedTsx2(){const{keyboardState,KeyboardState,keyboardHeight}=this.__closure;const openingOrClosing=keyboardState.get()===KeyboardState.OPENING||keyboardState.get()===KeyboardState.CLOSING;return!openingOrClosing?keyboardHeight.get():undefined;}';
    var1['code'] = var6;
    var _closure1_slot5 = var1;
    var1 = {};
    var6 = 'function useSafeAreaBottomKeyboardInfoReanimatedTsx3(keyboardHeight){const{keyboardOpenedHeight,runOnJS,setKeyboardOpenedHeight}=this.__closure;if(keyboardHeight!=null&&keyboardHeight>0){keyboardOpenedHeight.set(keyboardHeight);runOnJS(setKeyboardOpenedHeight)(keyboardHeight);}}';
    var1['code'] = var6;
    var _closure1_slot6 = var1;
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoReanimated.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSafeAreaBottomKeyboardInfoReanimated() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 1;
            var2 = var12[var2];
            var11 = undefined;
            var2 = var3.bind(var11)(var2);
            var14 = var2.bind(var11)();
            var _closure2_slot0 = var14;
            var2 = 2;
            var2 = var12[var2];
            var2 = var3.bind(var11)(var2);
            var13 = var2.bind(var11)();
            var _closure2_slot1 = var13;
            var10 = _closure1_slot0;
            var9 = 3;
            var2 = var12[var9];
            var4 = var10.bind(var11)(var2);
            var3 = var4.useSharedValue;
            var2 = 0;
            var5 = var12[var2];
            var5 = var10.bind(var11)(var5);
            var8 = var5.Storage;
            var6 = var8.get;
            var5 = _closure1_slot3;
            var5 = var6.bind(var8)(var5);
            var6 = null;
            var6 = var6 != var5;
            if(!var6) { _fun0001_ip = 119; continue _fun0001 }
 116:
            var2 = var5;
 119:
            var2 = var3.bind(var4)(var2);
            var _closure2_slot2 = var2;
            var3 = var12[var9];
            var5 = var10.bind(var11)(var3);
            var4 = var5.useDerivedValue;
            var3 = function y() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = 0;
                    var1 = var3 > var1;
                    if(var1) { _fun0002_ip = 79; continue _fun0002 }
 25:
                    var4 = _closure2_slot0;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var3 = var3.KeyboardState;
                    var3 = var3.OPENING;
                    var1 = var4 === var3;
 79:
                    if(!var1) { _fun0002_ip = 136; continue _fun0002 }
 82:
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 3;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.KeyboardState;
                    var2 = var2.CLOSING;
                    var1 = var3 !== var2;
 136:
                    return var1;
                }
            };
            var6 = {};
            var6['keyboardHeight'] = var13;
            var6['keyboardState'] = var14;
            var8 = var12[var9];
            var8 = var10.bind(var11)(var8);
            var8 = var8.KeyboardState;
            var6['KeyboardState'] = var8;
            var3['__closure'] = var6;
            var6 = 16271174052077.0;
            var3['__workletHash'] = var6;
            var6 = _closure1_slot4;
            var3['__initData'] = var6;
            var3 = var4.bind(var5)(var3);
            var4 = var12[var9];
            var6 = var10.bind(var11)(var4);
            var5 = var6.useAnimatedReaction;
            var4 = function u() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = var3.get;
                    var6 = var1.bind(var3)();
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 3;
                    var1 = var1[var7];
                    var5 = undefined;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.KeyboardState;
                    var4 = var1.OPENING;
                    var1 = undefined;
                    if(!(var6 !== var4)) { _fun0003_ip = 120; continue _fun0003 }
 59:
                    var6 = _closure2_slot0;
                    var4 = var6.get;
                    var4 = var4.bind(var6)();
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.KeyboardState;
                    var3 = var3.CLOSING;
                    var1 = undefined;
                    if(!(var4 !== var3)) { _fun0003_ip = 120; continue _fun0003 }
 107:
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var1 = var2.bind(var3)();
 120:
                    return var1;
                }
            };
            var8 = {};
            var8['keyboardState'] = var14;
            var14 = var12[var9];
            var14 = var10.bind(var11)(var14);
            var14 = var14.KeyboardState;
            var8['KeyboardState'] = var14;
            var8['keyboardHeight'] = var13;
            var4['__closure'] = var8;
            var8 = 12153051306272.0;
            var4['__workletHash'] = var8;
            var8 = _closure1_slot5;
            var4['__initData'] = var8;
            var1 = function s(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0004_ip = 18; continue _fun0004 }
 12:
                    var2 = 0;
                    var1 = var3 > var2;
 18:
                    if(!var1) { _fun0004_ip = 82; continue _fun0004 }
 21:
                    var2 = _closure2_slot2;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3);
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 3;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.runOnJS;
                    var1 = _closure1_slot7;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
 82:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = {};
            var8['keyboardOpenedHeight'] = var2;
            var9 = var12[var9];
            var9 = var10.bind(var11)(var9);
            var9 = var9.runOnJS;
            var8['runOnJS'] = var9;
            var9 = _closure1_slot7;
            var8['setKeyboardOpenedHeight'] = var9;
            var1['__closure'] = var8;
            var8 = 3130193429965.0;
            var1['__workletHash'] = var8;
            var7 = _closure1_slot6;
            var1['__initData'] = var7;
            var1 = var5.bind(var6)(var4, var1);
            var1 = {};
            var1['keyboardOpenOrOpening'] = var3;
            var1['keyboardOpenedHeight'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();