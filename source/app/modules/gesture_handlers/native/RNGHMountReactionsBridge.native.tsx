// app/modules/gesture_handlers/native/RNGHMountReactionsBridge.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var1 = global;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
    var1 = metroImportDefault;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = false;
    var _closure1_slot4 = var1;
    var1 = 0;
    var _closure1_slot5 = var1;
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/gesture_handlers/native/RNGHMountReactionsBridge.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function installRNGHMountReactionsBridge() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot4;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var3 = 0;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var5 = var3.RNGHMountReactionsEffectExperiment;
            var4 = var5.getConfig;
            var3 = {};
            var6 = 'rngh-mount-reactions';
            var3['location'] = var6;
            var3 = var4.bind(var5)(var3);
            var4 = var3.useLayoutEffect;
            var3 = 'useEffect';
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = 'useLayoutEffect';
case 4:
            var _closure2_slot0 = var3;
            var3 = _closure1_slot0;
            var3['__DISCORD_RNGH_USE_LAYOUT_EFFECT__'] = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var2 = var1.bind(var2)();
                    var3 = _closure1_slot5;
                    var4 = var2 - var3;
                    var3 = 60000;
                    if(!(!(var4 < var3))) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    _closure1_slot5 = var2;
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.captureMessage;
                    var2 = {};
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1['rngh_effect'] = var5;
                    var2['tags'] = var1;
                    var1 = 'rngh_mount_reactions_stale_mount_guard';
                    var1 = var3.bind(var4)(var1, var2);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['__DISCORD_RNGH_ON_STALE_MOUNT__'] = var1;
            var1 = true;
            _closure1_slot4 = var1;
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['installRNGHMountReactionsBridge'] = var2;
    return var1;
})();