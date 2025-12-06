// app/modules/checkpoint/useMaybeFetchCheckpointData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.useEffect;
    var _closure1_slot3 = var7;
    var4 = var4.useMemo;
    var _closure1_slot4 = var4;
    var4 = 1;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchStates;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EntitlementTypes;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkpoint/useMaybeFetchCheckpointData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMaybeFetchCheckpointData() {
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var6 = 3;
        var1 = var8[var6];
        var5 = undefined;
        var11 = var7.bind(var5)(var1);
        var10 = var11.useStateFromStores;
        var4 = _closure1_slot5;
        var9 = new Array(1);
        var9[0] = var4;
        var1 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getFetchState;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var10.bind(var11)(var9, var1);
        var _closure2_slot0 = var1;
        var6 = var8[var6];
        var8 = var7.bind(var5)(var6);
        var7 = var8.useStateFromStores;
        var6 = new Array(1);
        var6[0] = var4;
        var4 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getCheckpointData;
            var1 = var1.bind(var2)();
            return var1;
        };
        var4 = var7.bind(var8)(var6, var4);
        var _closure2_slot1 = var4;
        var7 = _closure1_slot4;
        var4 = var4.applications;
        var6 = new Array(1);
        var6[0] = var4;
        var4 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot1;
                var3 = var1.applications;
                var1 = null;
                if(!(var1 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = new Array(0);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var2 = _closure2_slot1;
                var2 = var2.applications;
                var4 = var2.applications;
                var3 = var4.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.game;
                    var1 = var1.id;
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 4:
                return var1;
            }
        };
        var6 = var7.bind(var5)(var4, var6);
        var _closure2_slot2 = var6;
        var4 = _closure1_slot3;
        var7 = new Array(1);
        var7[0] = var1;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = _closure1_slot6;
                var1 = var1.INIT;
                if(!(var2 === var1)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var2 = undefined;
                var6 = var3.bind(var2)(var1);
                var1 = var6.fetchCheckpointData;
                var1 = var1.bind(var6)();
                var1 = 5;
                var1 = var5[var1];
                var3 = var3.bind(var2)(var1);
                var2 = var3.fetchUserEntitlements;
                var1 = {};
                var4 = _closure1_slot7;
                var4 = var4.FREE_PURCHASE;
                var1['entitlementType'] = var4;
                var1 = var2.bind(var3)(var1);
case 5:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var4.bind(var5)(var3, var7);
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.getDetectableGamesSupplemental;
            var2 = _closure2_slot2;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useMaybeFetchCheckpointData'] = var2;
    return var1;
})();