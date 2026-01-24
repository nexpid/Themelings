// app/modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx
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
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = {};
    var8 = 'function ChannelSafeAreaBottomAnimatedAndroidTsx1(){const{heightSharedValue}=this.__closure;return heightSharedValue.get().toFixed(2);}';
    var4['code'] = var8;
    var _closure1_slot6 = var4;
    var4 = {};
    var8 = 'function ChannelSafeAreaBottomAnimatedAndroidTsx2(height,lastHeight){const{runOnJS,handleCheckTimer}=this.__closure;if(height===lastHeight)return;runOnJS(handleCheckTimer)();}';
    var4['code'] = var8;
    var _closure1_slot7 = var4;
    var4 = {};
    var8 = 'function ChannelSafeAreaBottomAnimatedAndroidTsx3(){const{heightSharedValue}=this.__closure;return{height:heightSharedValue.get()};}';
    var4['code'] = var8;
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function ChannelSafeAreaBottom(arg1) {
        var1 = arg1;
        var8 = var1.channelId;
        var2 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 5;
        var1 = var7[var1];
        var5 = undefined;
        var1 = var2.bind(var5)(var1);
        var6 = var1.bind(var5)();
        var _closure2_slot0 = var6;
        var1 = 6;
        var1 = var7[var1];
        var1 = var2.bind(var5)(var1);
        var9 = var1.bind(var5)(var8);
        var10 = _closure1_slot0;
        var1 = 3;
        var8 = var7[var1];
        var11 = var10.bind(var5)(var8);
        var10 = var11.useAnimatedStyle;
        var8 = function c() {
            var1 = {};
            var3 = _closure2_slot0;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var1['height'] = var2;
            return var1;
        };
        var12 = {};
        var12['heightSharedValue'] = var6;
        var8['__closure'] = var12;
        var12 = 15841472600439.0;
        var8['__workletHash'] = var12;
        var12 = _closure1_slot8;
        var8['__initData'] = var12;
        var8 = var10.bind(var11)(var8);
        var4 = function useSelfHealingLayoutMonitor(arg1) {
            var14 = arg1;
            var _closure3_slot0 = var14;
            var8 = _closure1_slot4;
            var2 = var8.useState;
            var5 = 0;
            var4 = var2.bind(var8)(var5);
            var3 = _closure1_slot3;
            var12 = undefined;
            var2 = 2;
            var4 = var3.bind(var12)(var4, var2);
            var3 = var4[var5];
            var2 = 1;
            var2 = var4[var2];
            var _closure3_slot1 = var2;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 3;
            var2 = var13[var10];
            var4 = var11.bind(var12)(var2);
            var2 = var4.useSharedValue;
            var4 = var2.bind(var4)(var5);
            var _closure3_slot2 = var4;
            var5 = var8.useRef;
            var2 = null;
            var2 = var5.bind(var8)(var2);
            var _closure3_slot3 = var2;
            var6 = var8.useCallback;
            var5 = new Array(2);
            var5[0] = var14;
            var5[1] = var4;
            var2 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.layout;
                    var3 = var1.height;
                    var4 = _closure3_slot2;
                    var2 = var4.set;
                    var2 = var2.bind(var4)(var3);
                    var2 = var3.toFixed;
                    var5 = 2;
                    var3 = var2.bind(var3)(var5);
                    var4 = _closure3_slot0;
                    var2 = var4.get;
                    var4 = var2.bind(var4)();
                    var2 = var4.toFixed;
                    var2 = var2.bind(var4)(var5);
                    if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure3_slot1;
                    var2 = undefined;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = 1;
                        var1 = var2 + var1;
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var8)(var2, var5);
            var6 = var8.useCallback;
            var5 = new Array(2);
            var5[0] = var14;
            var5[1] = var4;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure3_slot3;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var2 = _closure3_slot3;
                    var3 = var2.current;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
case 4:
                    var3 = _closure3_slot3;
                    var1 = global;
                    var5 = var1.setTimeout;
                    var1 = undefined;
                    var4 = function() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var3 = _closure3_slot2;
                            var2 = var3.get;
                            var4 = var2.bind(var3)();
                            var2 = var4.toFixed;
                            var6 = 2;
                            var3 = var2.bind(var4)(var6);
                            var5 = _closure3_slot0;
                            var2 = var5.get;
                            var5 = var2.bind(var5)();
                            var2 = var5.toFixed;
                            var2 = var2.bind(var5)(var6);
                            if(!(var3 === var2)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 4;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var5.bind(var2)(var3);
                            var2 = var3.channelSafeAreaBottomLayoutHeightChanged;
                            var2 = var2.bind(var3)(var4);
                            _fun0003_ip = 8; continue _fun0003;
case 6:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 4;
                            var2 = var3[var2];
                            var3 = undefined;
                            var6 = var4.bind(var3)(var2);
                            var5 = var6.channelSafeAreaBottomLayoutHeightMismatch;
                            var4 = _closure3_slot2;
                            var2 = var4.get;
                            var4 = var2.bind(var4)();
                            var7 = _closure3_slot0;
                            var2 = var7.get;
                            var2 = var2.bind(var7)();
                            var2 = var5.bind(var6)(var4, var2);
                            var2 = _closure3_slot1;
                            var1 = function(arg1) {
                                var2 = arg1;
                                var1 = 1;
                                var1 = var2 + var1;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
case 8:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = 200;
                    var2 = var5.bind(var1)(var4, var2);
                    var3['current'] = var2;
                    return var1;
                }
            };
            var9 = var6.bind(var8)(var4, var5);
            var _closure3_slot4 = var9;
            var6 = var8.useEffect;
            var5 = function() {
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var1 = _closure3_slot3;
                    var2 = var1.current;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var4 = new Array(0);
            var4 = var6.bind(var8)(var5, var4);
            var4 = var13[var10];
            var6 = var11.bind(var12)(var4);
            var5 = var6.useAnimatedReaction;
            var4 = function s() {
                var2 = _closure3_slot0;
                var1 = var2.get;
                var3 = var1.bind(var2)();
                var2 = var3.toFixed;
                var1 = 2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = {};
            var8['heightSharedValue'] = var14;
            var4['__closure'] = var8;
            var8 = 7538286970630.0;
            var4['__workletHash'] = var8;
            var8 = _closure1_slot6;
            var4['__initData'] = var8;
            var1 = function l(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var1 = arg2;
                    if(!(var2 !== var1)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure3_slot4;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
case 9:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = {};
            var10 = var13[var10];
            var10 = var11.bind(var12)(var10);
            var10 = var10.runOnJS;
            var8['runOnJS'] = var10;
            var8['handleCheckTimer'] = var9;
            var1['__closure'] = var8;
            var8 = 5948315632356.0;
            var1['__workletHash'] = var8;
            var7 = _closure1_slot7;
            var1['__initData'] = var7;
            var1 = var5.bind(var6)(var4, var1);
            var1 = {};
            var1['layoutKey'] = var3;
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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();