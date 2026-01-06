// app/modules/premium/powerups/native/hooks/useGuildPowerupOnActivate.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/hooks/useGuildPowerupOnActivate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGuildPowerupOnActivate(arg1, arg2) {
        var10 = arg1;
        var11 = arg2;
        var _closure2_slot0 = var10;
        var _closure2_slot1 = var11;
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 3;
        var1 = var8[var1];
        var6 = undefined;
        var1 = var7.bind(var6)(var1);
        var1 = var1.bind(var6)(var10, var11);
        var12 = var1.onToggle;
        var _closure2_slot2 = var12;
        var3 = var1.isLoading;
        var2 = var1.error;
        var9 = _closure1_slot0;
        var1 = 4;
        var1 = var8[var1];
        var14 = var9.bind(var6)(var1);
        var13 = var14.useStateFromStores;
        var1 = _closure1_slot4;
        var9 = new Array(1);
        var9[0] = var1;
        var1 = function() {
            var3 = _closure1_slot4;
            var2 = var3.getGuild;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var9 = var13.bind(var14)(var9, var1);
        var _closure2_slot3 = var9;
        var1 = 5;
        var1 = var8[var1];
        var1 = var7.bind(var6)(var1);
        var10 = var1.bind(var6)(var10, var11);
        var _closure2_slot4 = var10;
        var1 = 6;
        var1 = var8[var1];
        var1 = var7.bind(var6)(var1);
        var1 = var1.bind(var6)();
        var8 = var1.analyticsLocations;
        var _closure2_slot5 = var8;
        var1 = {};
        var7 = _closure1_slot3;
        var6 = var7.useCallback;
        var5 = new Array(5);
        var5[0] = var12;
        var5[1] = var11;
        var5[2] = var10;
        var5[3] = var9;
        var5[4] = var8;
        var4 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot3;
                var3 = null;
                if(!(var3 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot1;
                if(!(var3 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var3 = _closure2_slot4;
                var2 = _closure2_slot1;
                var2 = var2.cost;
                if(!(!(var3 >= var2))) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                var2 = _closure2_slot1;
                var3 = var2.cost;
                var2 = _closure2_slot4;
                var7 = var3 - var2;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 8;
                var3 = var4[var3];
                var4 = undefined;
                var6 = var5.bind(var4)(var3);
                var5 = var6.getAvailableGuildBoostSlots;
                var3 = _closure1_slot5;
                var3 = var3.boostSlots;
                var6 = var5.bind(var6)(var3);
                var3 = var6.length;
                if(!(!(var3 >= var7))) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 10;
                var3 = var8[var3];
                var9 = var5.bind(var4)(var3);
                var8 = var9.launchGuildBoostFlowOrAlert;
                var5 = _closure2_slot5;
                var3 = {'page': 'Guild Powerups', 'section': 'Powerup Activation'};
                var3 = var8.bind(var9)(var3, var5);
                _fun0001_ip = 2; continue _fun0001;
case 7:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 9;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var4 = var5.openTransferModal;
                var3 = var6.slice;
                var2 = 0;
                var3 = var3.bind(var6)(var2, var7);
                var2 = _closure2_slot3;
                var2 = var2.id;
                var2 = var4.bind(var5)(var3, var2);
                _fun0001_ip = 2; continue _fun0001;
case 5:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 7;
                var2 = var3[var2];
                var3 = undefined;
                var5 = var4.bind(var3)(var2);
                var4 = var5.getGuildPowerupsBoostCount;
                var2 = _closure2_slot3;
                var2 = var2.id;
                var2 = var4.bind(var5)(var2);
                var4 = var2.available;
                var2 = _closure2_slot1;
                var2 = var2.cost;
                if(!(var4 >= var2)) { _fun0001_ip = 2; continue _fun0001 }
case 9:
                var2 = _closure2_slot2;
                var1 = true;
                var1 = var2.bind(var3)(var1);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var4 = var6.bind(var7)(var4, var5);
        var1['onActivate'] = var4;
        var1['isLoading'] = var3;
        var1['error'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();