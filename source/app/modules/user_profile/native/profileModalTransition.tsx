// app/modules/user_profile/native/profileModalTransition.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function setTransitioningModalCount(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = global;
            var4 = var1.Math;
            var3 = var4.max;
            var2 = 0;
            var1 = arg1;
            var2 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot3;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            _closure1_slot3 = var2;
            var3 = _closure1_slot4;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var1 = var2.bind(var3)(var1);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var7 = 0;
    var9 = var6[var7];
    var8 = metroImportAll;
    var1 = undefined;
    var8 = var8.bind(var1)(var9);
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var7;
    var4 = var4.Set;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var13 = var7;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/profileModalTransition.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useReportProfileModalTransition() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 1;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.useNavigation;
        var6 = var4.bind(var5)();
        var _closure2_slot0 = var6;
        var5 = _closure1_slot2;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var6 = function leave() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure3_slot0;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = false;
                    _closure3_slot0 = var1;
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot3;
                    var1 = 1;
                    var2 = var2 - var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var _closure3_slot2 = var6;
            var2 = false;
            var _closure3_slot0 = var2;
            var5 = _closure2_slot0;
            var4 = var5.addListener;
            var3 = 'transitionStart';
            var2 = function enter() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure3_slot0;
                    if(var1) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var1 = true;
                    _closure3_slot0 = var1;
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot3;
                    var1 = 1;
                    var2 = var2 + var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3, var2);
            var2 = new Array(3);
            var2[0] = var3;
            var4 = var5.addListener;
            var3 = 'transitionEnd';
            var3 = var4.bind(var5)(var3, var6);
            var2[1] = var3;
            var4 = var5.addListener;
            var3 = 'gestureCancel';
            var3 = var4.bind(var5)(var3, var6);
            var2[2] = var3;
            var _closure3_slot1 = var2;
            var1 = function() {
                var4 = _closure3_slot1;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var2 = _closure3_slot2;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useReportProfileModalTransition'] = var4;
    var2 = function useIsProfileModalTransitioning() {
        var4 = _closure1_slot2;
        var3 = var4.useSyncExternalStore;
        var2 = function(arg1) {
            var4 = arg1;
            var _closure3_slot0 = var4;
            var3 = _closure1_slot4;
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.delete;
                var1 = _closure3_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var1;
        };
        var1 = function() {
            var2 = _closure1_slot3;
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsProfileModalTransitioning'] = var2;
    return var1;
})();