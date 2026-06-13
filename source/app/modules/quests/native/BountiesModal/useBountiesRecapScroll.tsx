// app/modules/quests/native/BountiesModal/useBountiesRecapScroll.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var4);
    var1 = 0;
    var5 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot0 = var4;
    var4 = {};
    var5 = 'function getRevealProgress_useBountiesRecapScrollTsx1(scrollOffset,startOffset,revealHeight){if(revealHeight<=0){return 0;}return(scrollOffset-startOffset)/revealHeight;}';
    var4['code'] = var5;
    var _closure1_slot1 = var4;
    var4 = function() {
        var1 = function getRevealProgress(arg1, arg2, arg3) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = arg3;
                var1 = 0;
                var2 = var3 <= var1;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = arg1;
                var2 = arg2;
                var2 = var4 - var2;
                var1 = var2 / var3;
case 2:
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 9769647749947.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot1;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot2 = var4;
    var5 = 1;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/native/BountiesModal/useBountiesRecapScroll.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 2;
    var3['RECAP_SNAP_EPSILON'] = var5;
    var3['getRevealProgress'] = var4;
    var2 = function useBountiesRecapScroll(arg1) {
        var3 = arg1;
        var1 = var3.listRef;
        var _closure2_slot0 = var1;
        var7 = var3.enabled;
        var _closure2_slot1 = var7;
        var8 = var3.offsets;
        var _closure2_slot2 = var8;
        var5 = _closure1_slot0;
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot0;
                var3 = var2.current;
                var2 = null;
                if(!(var2 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var1 = _closure2_slot0;
                var3 = var1.current;
                var2 = var3.scrollToOffset;
                var1 = {};
                var4 = arg1;
                var1['offset'] = var4;
                var4 = true;
                var1['animated'] = var4;
                var1 = var2.bind(var3)(var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var1, var3);
        var _closure2_slot3 = var1;
        var6 = var5.useCallback;
        var3 = var8.lastBounty;
        var4 = new Array(2);
        var4[0] = var3;
        var4[1] = var1;
        var3 = function() {
            var3 = _closure2_slot3;
            var1 = _closure2_slot2;
            var2 = var1.lastBounty;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = var6.bind(var5)(var3, var4);
        var6 = var5.useCallback;
        var4 = new Array(5);
        var4[0] = var7;
        var9 = var8.fullRecap;
        var4[1] = var9;
        var9 = var8.lastBounty;
        var4[2] = var9;
        var8 = var8.revealHeight;
        var4[3] = var8;
        var4[4] = var1;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = arg1;
                var2 = _closure2_slot1;
                if(!var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var2 = _closure2_slot2;
                var2 = var2.lastBounty;
                if(!(!(var4 <= var2))) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                var6 = _closure1_slot2;
                var2 = _closure2_slot2;
                var5 = var2.lastBounty;
                var2 = var2.revealHeight;
                var3 = undefined;
                var5 = var6.bind(var3)(var4, var5, var2);
                var2 = 0.25;
                if(!(!(var5 >= var2))) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var2 = _closure2_slot2;
                var2 = var2.lastBounty;
                _fun0003_ip = 11; continue _fun0003;
case 9:
                var5 = _closure2_slot2;
                var2 = var5.fullRecap;
case 11:
                var5 = global;
                var6 = var5.Math;
                var5 = var6.abs;
                var4 = var4 - var2;
                var5 = var5.bind(var6)(var4);
                var4 = 2;
                if(!(!(var5 < var4))) { _fun0003_ip = 6; continue _fun0003 }
case 12:
                var1 = _closure2_slot3;
                var1 = var1.bind(var3)(var2);
case 6:
                var1 = undefined;
                return var1;
            }
        };
        var6 = var6.bind(var5)(var1, var4);
        var _closure2_slot4 = var6;
        var1 = {};
        var1['scrollToLastBounty'] = var3;
        var4 = var5.useCallback;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure2_slot1;
                if(!var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var3 = _closure2_slot4;
                var1 = arg1;
                var1 = var1.contentOffset;
                var2 = var1.y;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 13:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['handleRecapMomentumEnd'] = var2;
        return var1;
    };
    var3['useBountiesRecapScroll'] = var2;
    return var1;
})();