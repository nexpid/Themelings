// app/modules/stage_channels/useCanSpeakInChannel.tsx
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
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/useCanSpeakInChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCanCurrentUserSpeakInChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 1;
            var1 = var7[var1];
            var5 = undefined;
            var8 = var4.bind(var5)(var1);
            var6 = var8.useStateFromStores;
            var1 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var6.bind(var8)(var3, var1);
            var3 = _closure1_slot1;
            var6 = 2;
            var1 = var7[var6];
            var3 = var3.bind(var5)(var1);
            var1 = arg1;
            var3 = var3.bind(var5)(var8, var1);
            var1 = 3;
            var1 = var7[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useIsStageSpeakingDisabledForCurrentUser;
            var1 = var1.bind(var4)();
            var1 = !var1;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.RequestToSpeakStates;
            var2 = var2.ON_STAGE;
            var1 = var3 === var2;
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();