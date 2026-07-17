// app/modules/gesture_handlers/native/RNGHMountReactionsBridge.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var1 = global;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = false;
    var _closure1_slot3 = var1;
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gesture_handlers/native/RNGHMountReactionsBridge.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function installRNGHMountReactionsBridge() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot3;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 0;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var4 = var1.RNGHMountReactionsEffectExperiment;
            var3 = var4.getConfig;
            var1 = {};
            var5 = 'rngh-mount-reactions';
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            var1 = var1.useLayoutEffect;
            var3 = _closure1_slot0;
            var3['__DISCORD_RNGH_USE_LAYOUT_EFFECT__'] = var1;
            var1 = function() {
                var1 = undefined;
                return var1;
            };
            var3['__DISCORD_RNGH_ON_STALE_MOUNT__'] = var1;
            var1 = true;
            _closure1_slot3 = var1;
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['installRNGHMountReactionsBridge'] = var2;
    return var1;
})();