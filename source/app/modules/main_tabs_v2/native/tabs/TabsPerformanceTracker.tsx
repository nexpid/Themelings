// app/modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function trackForScreen(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = arg2;
            var2 = var1.uiTime;
            var4 = null;
            var2 = var4 != var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.layoutUITime;
            var2 = var4 != var3;
case 2:
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 3;
            var4 = var4[var3];
            var3 = undefined;
            var7 = var5.bind(var3)(var4);
            var5 = var7.track;
            var3 = _closure1_slot4;
            var4 = var3.REDESIGN_NAV_BAR_RENDERED;
            var3 = {};
            var3['tab'] = var6;
            var8 = var1.startTime;
            var3['start_time'] = var8;
            var8 = var1.layoutEffectTime;
            var3['layout_effect_time'] = var8;
            var8 = var1.layoutUITime;
            var3['layout_ui_thread_time'] = var8;
            var8 = var1.effectTime;
            var3['effect_time'] = var8;
            var8 = var1.uiTime;
            var3['ui_thread_time'] = var8;
            var3 = var5.bind(var7)(var4, var3);
            var5 = _closure1_slot5;
            var4 = var5.info;
            var3 = {};
            var7 = var1.layoutEffectTime;
            var2 = var1.startTime;
            var2 = var7 - var2;
            var3['layoutEffectDuration'] = var2;
            var7 = var1.effectTime;
            var2 = var1.startTime;
            var2 = var7 - var2;
            var3['effectDuration'] = var2;
            var7 = var1.layoutUITime;
            var2 = var1.startTime;
            var2 = var7 - var2;
            var3['layoutUIDuration'] = var2;
            var2 = var1.uiTime;
            var1 = var1.startTime;
            var1 = var2 - var1;
            var3['uiDuration'] = var1;
            var12 = 'First navigation to';
            var10 = 'took';
            var13 = var5;
            var11 = var6;
            var9 = var3;
            var1 = var13[var4](var12, var11, var10, var9, var8);
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'TabsPerformanceTracker';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot5 = var4;
    var4 = {};
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function TabsPerformanceTrackerTsx1(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'function TabsPerformanceTrackerTsx2(){const{runOnJS,log}=this.__closure;return runOnJS(log)();}';
    var4['code'] = var7;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/TabsPerformanceTracker.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function trackTabPressed(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot6;
            var4 = var2[var3];
            var2 = null;
            if(!(var2 == var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = _closure1_slot6;
            var1 = {};
            var4 = global;
            var5 = var4.performance;
            var4 = var5.now;
            var4 = var4.bind(var5)();
            var1['startTime'] = var4;
            var2[var3] = var1;
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var3['trackTabPressed'] = var4;
    var2 = function useTrackTabPerformance(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var6 = var4.useLayoutEffect;
        var3 = new Array(1);
        var3[0] = var5;
        var2 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = _closure1_slot6;
                var3 = _closure2_slot0;
                var3 = var4[var3];
                var _closure3_slot0 = var3;
                var7 = null;
                if(!(var7 != var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var4 = var3.startTime;
                if(!(var7 == var4)) { _fun0003_ip = 10; continue _fun0003 }
case 8:
                var6 = _closure1_slot6;
                var4 = _closure2_slot0;
                var2 = var6[var4];
                if(!(var7 == var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var2 = {};
case 11:
                var6[var4] = var2;
                _fun0003_ip = 13; continue _fun0003;
case 10:
                var2 = global;
                var4 = var2.performance;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var3['layoutEffectTime'] = var2;
                var7 = function log() {
                    var4 = _closure3_slot0;
                    var1 = global;
                    var2 = var1.performance;
                    var1 = var2.now;
                    var1 = var1.bind(var2)();
                    var4['layoutUITime'] = var1;
                    var3 = _closure1_slot9;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2, var4);
                    return var1;
                };
                var _closure3_slot1 = var7;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 4;
                var3 = var10[var8];
                var2 = undefined;
                var4 = var9.bind(var2)(var3);
                var3 = var4.runOnUI;
                var1 = function o() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure3_slot1;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var6 = {};
                var8 = var10[var8];
                var8 = var9.bind(var2)(var8);
                var8 = var8.runOnJS;
                var6['runOnJS'] = var8;
                var6['log'] = var7;
                var1['__closure'] = var6;
                var6 = 7114578957129.0;
                var1['__workletHash'] = var6;
                var5 = _closure1_slot7;
                var1['__initData'] = var5;
                var1 = var3.bind(var4)(var1);
                var1 = var1.bind(var2)();
case 13:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var6.bind(var4)(var2, var3);
        var3 = var4.useEffect;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = _closure1_slot6;
                var3 = _closure2_slot0;
                var3 = var4[var3];
                var _closure3_slot0 = var3;
                var7 = null;
                if(!(var7 != var3)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                var4 = var3.startTime;
                if(!(var7 == var4)) { _fun0004_ip = 10; continue _fun0004 }
case 8:
                var6 = _closure1_slot6;
                var4 = _closure2_slot0;
                var2 = var6[var4];
                if(!(var7 == var2)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var2 = {};
case 11:
                var6[var4] = var2;
                _fun0004_ip = 13; continue _fun0004;
case 10:
                var2 = global;
                var4 = var2.performance;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var3['effectTime'] = var2;
                var7 = function log() {
                    var4 = _closure3_slot0;
                    var1 = global;
                    var2 = var1.performance;
                    var1 = var2.now;
                    var1 = var1.bind(var2)();
                    var4['uiTime'] = var1;
                    var3 = _closure1_slot9;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2, var4);
                    return var1;
                };
                var _closure3_slot1 = var7;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 4;
                var3 = var10[var8];
                var2 = undefined;
                var4 = var9.bind(var2)(var3);
                var3 = var4.runOnUI;
                var1 = function o() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var3.bind(var2)(var1);
                    var3 = var4.runOnJS;
                    var1 = _closure3_slot1;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var6 = {};
                var8 = var10[var8];
                var8 = var9.bind(var2)(var8);
                var8 = var8.runOnJS;
                var6['runOnJS'] = var8;
                var6['log'] = var7;
                var1['__closure'] = var6;
                var6 = 331508196106.0;
                var1['__workletHash'] = var6;
                var5 = _closure1_slot8;
                var1['__initData'] = var5;
                var1 = var3.bind(var4)(var1);
                var1 = var1.bind(var2)();
case 13:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var3['useTrackTabPerformance'] = var2;
    return var1;
})();