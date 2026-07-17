// app/modules/parent_tools/hooks/useIsOnMainSurface.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function getActiveRoute(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            if(!(var4 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.routes;
            var2 = var1.length;
            var1 = 0;
            if(!(var1 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var1 = undefined;
            return var1;
case 4:
            var2 = var3.routes;
            var1 = var3.index;
            if(!(var4 == var1)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var3 = var3.routes;
            var4 = var3.length;
            var3 = 1;
            var1 = var4 - var3;
case 5:
            var1 = var2[var1];
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function getIsOnMainSurface() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.getRootNavigationRef;
            var6 = var1.bind(var2)();
            var1 = null;
            if(!(var1 != var6)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var2 = var6.isReady;
            var2 = var2.bind(var6)();
            if(!var2) { _fun0002_ip = 7; continue _fun0002 }
case 9:
            var4 = _closure1_slot5;
            var2 = var6.getRootState;
            var2 = var2.bind(var6)();
            var2 = var4.bind(var5)(var2);
            var4 = var1 == var2;
            var6 = undefined;
            if(var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var2.name;
case 10:
            var4 = 'main';
            if(!(var4 === var6)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = _closure1_slot5;
            var2 = var2.state;
            var2 = var4.bind(var5)(var2);
            var1 = var1 != var2;
            if(!var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var4 = _closure1_slot4;
            var3 = var4.has;
            var2 = var2.name;
            var1 = var3.bind(var4)(var2);
case 14:
            return var1;
case 12:
            var1 = false;
            return var1;
case 7:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var8 = var6[var1];
    var7 = metroImportDefault;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot2 = var7;
    var7 = 1;
    var8 = var6[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var8 = var4.Set;
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = ['tabs', 'channel'];
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/hooks/useIsOnMainSurface.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsOnMainSurface() {
        var5 = _closure1_slot3;
        var4 = var5.useState;
        var3 = _closure1_slot6;
        var6 = var4.bind(var5)(var3);
        var4 = _closure1_slot2;
        var3 = undefined;
        var1 = 2;
        var4 = var4.bind(var3)(var6, var1);
        var1 = 0;
        var1 = var4[var1];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot0 = var3;
        var4 = var5.useEffect;
        var3 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = function handleNavigationChange() {
                    var3 = _closure2_slot0;
                    var1 = _closure1_slot6;
                    var2 = undefined;
                    var1 = var1.bind(var2)();
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var _closure3_slot1 = var5;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getRootNavigationRef;
                var4 = var3.bind(var4)();
                var _closure3_slot0 = var4;
                var3 = null;
                if(!(var3 == var4)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                return var2;
case 16:
                var2 = var5.bind(var2)();
                var3 = var4.addListener;
                var2 = 'state';
                var2 = var3.bind(var4)(var2, var5);
                var1 = function() {
                    var4 = _closure3_slot0;
                    var3 = var4.removeListener;
                    var2 = _closure3_slot1;
                    var1 = 'state';
                    var1 = var3.bind(var4)(var1, var2);
                    var1 = undefined;
                    return var1;
                };
                return var1;
            }
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['useIsOnMainSurface'] = var2;
    return var1;
})();