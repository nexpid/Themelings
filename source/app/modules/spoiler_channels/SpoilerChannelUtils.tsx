// app/modules/spoiler_channels/SpoilerChannelUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = function isChannelSpoilerGated(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot3;
case 2:
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.isSpoilerChannel;
            var2 = var2.bind(var3)();
            var4 = !var2;
            var2 = !var4;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var5.didAgree;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3);
            var2 = !var3;
case 6:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/spoiler_channels/SpoilerChannelUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useIsChannelSpoilerGated(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = _closure1_slot4;
            var3 = _closure2_slot0;
            var2 = _closure1_slot3;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsChannelSpoilerGated'] = var5;
    var3['isChannelSpoilerGated'] = var4;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = _closure1_slot2;
            var2 = var3.getChannel;
            var3 = var2.bind(var3)(var4);
            var2 = _closure1_slot4;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var3['shouldShowSpoilerGateForChannelId'] = var2;
    return var1;
})();