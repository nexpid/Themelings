// app/modules/stage_channels/useLiveStageChannels.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function useAllVisibleChannels(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 4;
        var8 = var7[var3];
        var4 = undefined;
        var11 = var5.bind(var4)(var8);
        var10 = var11.useStateFromStoresArray;
        var8 = _closure1_slot3;
        var9 = new Array(1);
        var9[0] = var8;
        var8 = new Array(1);
        var8[0] = var6;
        var6 = function() {
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.isNotNullish;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var10.bind(var11)(var9, var6, var8);
        var _closure2_slot1 = var6;
        var3 = var7[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useStateFromStoresArray;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var3 = _closure2_slot1;
            var2 = var3.filter;
            var1 = function(arg1) {
                var4 = _closure1_slot4;
                var3 = var4.can;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var2 = var1.JOIN_VOCAL_CHANNEL_PERMISSIONS;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/useLiveStageChannels.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useLiveStageChannels(arg1) {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var3 = _closure1_slot6;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 4;
        var5 = var5[var2];
        var2 = undefined;
        var7 = var6.bind(var2)(var5);
        var6 = var7.useStateFromStoresArray;
        var4 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = new Array(1);
        var4[0] = var8;
        var1 = function() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.keys;
            var5 = _closure1_slot5;
            var4 = var5.getStageInstancesByGuild;
            var1 = _closure2_slot0;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var6.bind(var7)(var5, var1, var4);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['default'] = var4;
    var4 = function getAllLiveStageChannels() {
        var2 = _closure1_slot5;
        var1 = var2.getAllStageInstances;
        var4 = var1.bind(var2)();
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var5 = _closure1_slot3;
                var3 = var5.getChannel;
                var2 = arg2;
                var2 = var2.channel_id;
                var3 = var3.bind(var5)(var2);
                var2 = null;
                var2 = var2 != var3;
                if(!var2) { _fun0001_ip = 81; continue _fun0001 }
 37:
                var6 = _closure1_slot4;
                var5 = var6.can;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 3;
                var7 = var7[var4];
                var4 = undefined;
                var4 = var8.bind(var4)(var7);
                var4 = var4.JOIN_VOCAL_CHANNEL_PERMISSIONS;
                var2 = var5.bind(var6)(var4, var3);
 81:
                if(!var2) { _fun0001_ip = 94; continue _fun0001 }
 84:
                var2 = var1.push;
                var2 = var2.bind(var1)(var3);
 94:
                return var1;
            }
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getAllLiveStageChannels'] = var4;
    var2 = function useAllLiveStageChannels() {
        var3 = _closure1_slot6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 4;
        var4 = var4[var2];
        var2 = undefined;
        var7 = var5.bind(var2)(var4);
        var6 = var7.useStateFromStores;
        var1 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var1;
        var4 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getAllStageInstances;
            var3 = var1.bind(var2)();
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel_id;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = new Array(0);
        var1 = var6.bind(var7)(var5, var4, var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useAllLiveStageChannels'] = var2;
    return var1;
})();