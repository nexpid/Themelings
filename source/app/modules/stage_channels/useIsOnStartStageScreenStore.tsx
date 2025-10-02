// app/modules/stage_channels/useIsOnStartStageScreenStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var4 = function setIsOnStartStageScreen(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot6;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1['isOnStartStageScreen'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var8[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var8[var5];
    var9 = var7.bind(var1)(var5);
    var6 = var9.create;
    var5 = function() {
        var1 = {};
        var2 = true;
        var1['isOnStartStageScreen'] = var2;
        return var1;
    };
    var5 = var6.bind(var9)(var5);
    var _closure1_slot6 = var5;
    var6 = 8;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/stage_channels/useIsOnStartStageScreenStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['setIsOnStartStageScreen'] = var4;
    var2 = function useUpdateIsOnStartStageScreenEffect(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 5;
            var7 = var9[var5];
            var1 = undefined;
            var11 = var6.bind(var1)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getVoiceChannelId;
                var2 = var1.bind(var2)();
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var7 = var10.bind(var11)(var8, var7);
            var _closure2_slot1 = var7;
            var5 = var9[var5];
            var11 = var6.bind(var1)(var5);
            var10 = var11.useStateFromStores;
            var5 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var5;
            var6 = new Array(1);
            var6[0] = var4;
            var5 = function() {
                var4 = _closure1_slot4;
                var3 = var4.can;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var2);
                var2 = var1.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var5 = var10.bind(var11)(var8, var5, var6);
            var8 = _closure1_slot1;
            var6 = 7;
            var6 = var9[var6];
            var6 = var8.bind(var1)(var6);
            var4 = var4.id;
            var4 = var6.bind(var1)(var4);
            var6 = var5;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = !var4;
case 2:
            var _closure2_slot2 = var6;
            var5 = _closure1_slot3;
            var4 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot7;
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure1_slot7;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useUpdateIsOnStartStageScreenEffect'] = var2;
    return var1;
})();