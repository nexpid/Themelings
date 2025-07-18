// app/modules/launchpad/native/useLaunchPadPullTabMinimized.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var3 = native6;
        var6 = native7;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var6;
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
        var4 = native4;
        var1 = undefined;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot2 = var4;
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var9 = var4.NativeEventEmitter;
        var4 = var4.NativeModules;
        var7 = var4.DCDScrollTracker;
        var4 = undefined;
        if(!var7) { _fun0001_ip = 131; continue _fun0001 }
 108:
        var8 = var9.prototype;
        var8 = Object.create(var8, {constructor: {value: var9}});
        var13 = var8;
        var12 = var7;
        var7 = new var13[var9](var12, var11);
        var4 = var7 instanceof Object ? var7 : var8;
 131:
        var _closure1_slot3 = var4;
        var4 = {};
        var7 = 'function useLaunchPadPullTabMinimizedTsx1(){const{launchPadPullTabState,isVoicePanelOpen,launchPadSharedState,isMinimizedDuringScroll}=this.__closure;const isMinimized=(launchPadPullTabState.get().minimized||isVoicePanelOpen)&&launchPadSharedState.get()<=0;return isMinimized||isMinimizedDuringScroll.get();}';
        var4['code'] = var7;
        var _closure1_slot4 = var4;
        var4 = 4;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/launchpad/native/useLaunchPadPullTabMinimized.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function useLaunchPadPullTabMinimized(arg1) {
            var2 = arg1;
            var7 = var2.launchPadSharedState;
            var _closure2_slot0 = var7;
            var9 = var2.launchPadPullTabState;
            var _closure2_slot1 = var9;
            var5 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 3;
            var2 = var10[var2];
            var3 = undefined;
            var6 = var5.bind(var3)(var2);
            var2 = var6.useIsVoicePanelFullscreen;
            var8 = var2.bind(var6)();
            var _closure2_slot2 = var8;
            var2 = function useIsMinimizedDuringScroll() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.useSharedValue;
                var1 = false;
                var1 = var4.bind(var5)(var1);
                var _closure3_slot0 = var1;
                var5 = _closure1_slot2;
                var4 = var5.useEffect;
                var3 = new Array(1);
                var3[0] = var1;
                var2 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = -1;
                        var _closure4_slot0 = var2;
                        var4 = _closure1_slot3;
                        var2 = null;
                        var4 = var2 == var4;
                        var2 = undefined;
                        if(var4) { _fun0002_ip = 59; continue _fun0002 }
 30:
                        var6 = _closure1_slot3;
                        var5 = var6.addListener;
                        var4 = 'isScrollingOrDragging';
                        var3 = function(arg1) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                var1 = arg1;
                                var4 = var1.isScrollingOrDragging;
                                var2 = global;
                                var6 = var2.clearTimeout;
                                var5 = _closure4_slot0;
                                var1 = undefined;
                                var5 = var6.bind(var1)(var5);
                                if(var4) { _fun0003_ip = 69; continue _fun0003 }
 36:
                                var5 = var2.setTimeout;
                                var4 = function() {
                                    var3 = _closure3_slot0;
                                    var2 = var3.set;
                                    var1 = false;
                                    var1 = var2.bind(var3)(var1);
                                    var1 = undefined;
                                    return var1;
                                };
                                var2 = 1000;
                                var2 = var5.bind(var1)(var4, var2);
                                _closure4_slot0 = var2;
                                _fun0003_ip = 88; continue _fun0003;
 69:
                                var4 = _closure3_slot0;
                                var3 = var4.set;
                                var2 = true;
                                var2 = var3.bind(var4)(var2);
 88:
                                return var1;
                            }
                        };
                        var2 = var5.bind(var6)(var4, var3);
 59:
                        var _closure4_slot1 = var2;
                        var1 = function() {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                var1 = global;
                                var4 = var1.clearTimeout;
                                var3 = _closure4_slot0;
                                var1 = undefined;
                                var3 = var4.bind(var1)(var3);
                                var4 = _closure4_slot1;
                                var3 = null;
                                if(!(var3 != var4)) { _fun0004_ip = 46; continue _fun0004 }
 32:
                                var3 = _closure4_slot1;
                                var2 = var3.remove;
                                var2 = var2.bind(var3)();
 46:
                                return var1;
                            }
                        };
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var6 = var2.bind(var3)();
            var _closure2_slot3 = var6;
            var2 = 2;
            var2 = var10[var2];
            var3 = var5.bind(var3)(var2);
            var2 = var3.useDerivedValue;
            var1 = function u() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var1 = var1.minimized;
                    if(var1) { _fun0005_ip = 29; continue _fun0005 }
 25:
                    var1 = _closure2_slot2;
 29:
                    if(!var1) { _fun0005_ip = 51; continue _fun0005 }
 32:
                    var4 = _closure2_slot0;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = 0;
                    var1 = var4 <= var3;
 51:
                    if(var1) { _fun0005_ip = 67; continue _fun0005 }
 54:
                    var3 = _closure2_slot3;
                    var2 = var3.get;
                    var1 = var2.bind(var3)();
 67:
                    return var1;
                }
            };
            var5 = {};
            var5['launchPadPullTabState'] = var9;
            var5['isVoicePanelOpen'] = var8;
            var5['launchPadSharedState'] = var7;
            var5['isMinimizedDuringScroll'] = var6;
            var1['__closure'] = var5;
            var5 = 14263056934448.0;
            var1['__workletHash'] = var5;
            var4 = _closure1_slot4;
            var1['__initData'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3['default'] = var2;
        return var1;
    }
})();