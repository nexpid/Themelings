// app/modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var9 = native3;
        var3 = native6;
        var6 = native7;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var9;
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
        var4 = var6[var1];
        var1 = undefined;
        var4 = var9.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var7 = var6[var4];
        var4 = native4;
        var7 = var4.bind(var1)(var7);
        var _closure1_slot4 = var7;
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.jsx;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var4 = var8.isReanimatedKeyboardEnabled;
        var4 = var4.bind(var8)();
        if(var4) { _fun0001_ip = 154; continue _fun0001 }
 140:
        var4 = 5;
        var4 = var6[var4];
        var4 = var9.bind(var1)(var4);
        _fun0001_ip = 166; continue _fun0001;
 154:
        var8 = 4;
        var8 = var6[var8];
        var4 = var9.bind(var1)(var8);
 166:
        var _closure1_slot6 = var4;
        var4 = {};
        var8 = 'function ChannelSafeAreaBottomAnimatedAndroidTsx1(){const{keyboardOpenOrOpening,keyboardWillOpenSharedValue,keyboardOpenedHeight,keyboardTypeSharedValue,KeyboardTypes,insets,customKeyboardHeight}=this.__closure;const height=keyboardOpenOrOpening.get()||keyboardWillOpenSharedValue.get()?keyboardOpenedHeight.get():keyboardTypeSharedValue.get()===KeyboardTypes.SYSTEM?insets.get().bottom:insets.get().bottom+customKeyboardHeight;return height;}';
        var4['code'] = var8;
        var _closure1_slot7 = var4;
        var4 = {};
        var8 = 'function ChannelSafeAreaBottomAnimatedAndroidTsx2(){const{heightSharedValue}=this.__closure;return{height:heightSharedValue.get()};}';
        var4['code'] = var8;
        var _closure1_slot8 = var4;
        var4 = var7.memo;
        var2 = function ChannelSafeAreaBottom(arg1) {
            var1 = arg1;
            var9 = var1.channelId;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var5 = undefined;
            var1 = var2.bind(var5)(var1);
            var14 = var1.bind(var5)();
            var _closure2_slot0 = var14;
            var1 = _closure1_slot6;
            var1 = var1.bind(var5)();
            var15 = var1.keyboardOpenOrOpening;
            var _closure2_slot1 = var15;
            var16 = var1.keyboardOpenedHeight;
            var _closure2_slot2 = var16;
            var1 = 7;
            var1 = var7[var1];
            var1 = var2.bind(var5)(var1);
            var13 = var1.bind(var5)();
            var _closure2_slot3 = var13;
            var10 = _closure1_slot0;
            var1 = 8;
            var6 = var7[var1];
            var11 = var10.bind(var5)(var6);
            var8 = var11.useDerivedValue;
            var6 = function s() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0002_ip = 173; continue _fun0002 }
 22:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 9;
                    var4 = var4[var1];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var4);
                    var6 = var4.keyboardWillOpenSharedValue;
                    var4 = var6.get;
                    var4 = var4.bind(var6)();
                    if(var4) { _fun0002_ip = 173; continue _fun0002 }
 65:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var3 = var1.keyboardTypeSharedValue;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = 10;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.KeyboardTypes;
                    var1 = var1.SYSTEM;
                    if(!(var3 !== var1)) { _fun0002_ip = 153; continue _fun0002 }
 125:
                    var3 = _closure2_slot0;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var3 = var1.bottom;
                    var1 = _closure2_slot3;
                    var1 = var3 + var1;
                    _fun0002_ip = 171; continue _fun0002;
 153:
                    var4 = _closure2_slot0;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var1 = var3.bottom;
 171:
                    _fun0002_ip = 186; continue _fun0002;
 173:
                    var3 = _closure2_slot2;
                    var2 = var3.get;
                    var1 = var2.bind(var3)();
 186:
                    return var1;
                }
            };
            var12 = {};
            var12['keyboardOpenOrOpening'] = var15;
            var15 = 9;
            var17 = var7[var15];
            var17 = var10.bind(var5)(var17);
            var17 = var17.keyboardWillOpenSharedValue;
            var12['keyboardWillOpenSharedValue'] = var17;
            var12['keyboardOpenedHeight'] = var16;
            var15 = var7[var15];
            var15 = var10.bind(var5)(var15);
            var15 = var15.keyboardTypeSharedValue;
            var12['keyboardTypeSharedValue'] = var15;
            var15 = 10;
            var15 = var7[var15];
            var15 = var10.bind(var5)(var15);
            var15 = var15.KeyboardTypes;
            var12['KeyboardTypes'] = var15;
            var12['insets'] = var14;
            var12['customKeyboardHeight'] = var13;
            var6['__closure'] = var12;
            var12 = 11852669645127.0;
            var6['__workletHash'] = var12;
            var12 = _closure1_slot7;
            var6['__initData'] = var12;
            var6 = var8.bind(var11)(var6);
            var _closure2_slot4 = var6;
            var8 = 11;
            var8 = var7[var8];
            var8 = var2.bind(var5)(var8);
            var9 = var8.bind(var5)(var9);
            var8 = var7[var1];
            var11 = var10.bind(var5)(var8);
            var10 = var11.useAnimatedStyle;
            var8 = function b() {
                var1 = {};
                var3 = _closure2_slot4;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1['height'] = var2;
                return var1;
            };
            var12 = {};
            var12['heightSharedValue'] = var6;
            var8['__closure'] = var12;
            var12 = 15913264108790.0;
            var8['__workletHash'] = var12;
            var12 = _closure1_slot8;
            var8['__initData'] = var12;
            var8 = var10.bind(var11)(var8);
            var4 = function useSelfHealingLayoutMonitor(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot4;
                var4 = var5.useState;
                var1 = 0;
                var8 = var4.bind(var5)(var1);
                var7 = _closure1_slot3;
                var4 = undefined;
                var3 = 2;
                var4 = var7.bind(var4)(var8, var3);
                var3 = var4[var1];
                var1 = 1;
                var1 = var4[var1];
                var _closure3_slot1 = var1;
                var1 = {};
                var1['layoutKey'] = var3;
                var4 = var5.useCallback;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var1 = var1.layout;
                        var2 = var1.height;
                        var1 = var2.toFixed;
                        var5 = 2;
                        var3 = var1.bind(var2)(var5);
                        var4 = _closure3_slot0;
                        var2 = var4.get;
                        var4 = var2.bind(var4)();
                        var2 = var4.toFixed;
                        var2 = var2.bind(var4)(var5);
                        if(!(var3 !== var2)) { _fun0003_ip = 84; continue _fun0003 }
 64:
                        var3 = _closure3_slot1;
                        var2 = undefined;
                        var1 = function(arg1) {
                            var2 = arg1;
                            var1 = 1;
                            var1 = var2 + var1;
                            return var1;
                        };
                        var1 = var3.bind(var2)(var1);
 84:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                var1['handleLayout'] = var2;
                return var1;
            };
            var6 = var4.bind(var5)(var6);
            var4 = var6.layoutKey;
            var6 = var6.handleLayout;
            var3 = _closure1_slot5;
            var1 = var7[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.View;
            var1 = {};
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var1['style'] = var7;
            var1['onLayout'] = var6;
            var1 = var3.bind(var5)(var2, var1, var4);
            return var1;
        };
        var2 = var4.bind(var7)(var2);
        var4 = 12;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();