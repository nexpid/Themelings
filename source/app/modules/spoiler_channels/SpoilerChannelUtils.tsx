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
    var4 = function getSpoilerGatingChannelId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = arguments[1];
            var6 = arguments[2];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot3;
case 2:
            if(!(var6 === var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = _closure1_slot2;
case 4:
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3.isSpoilerChannel;
            var2 = var2.bind(var3)();
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var3.parent_id;
            if(!(var1 != var2)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = var6.getChannel;
            var2 = var3.parent_id;
            var2 = var4.bind(var6)(var2);
            if(!(var1 != var2)) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var4 = var2.isSpoilerChannel;
            var4 = var4.bind(var2)();
            if(!var4) { _fun0001_ip = 10; continue _fun0001 }
case 13:
            var6 = var5.didAgree;
            var4 = var2.id;
            var4 = var6.bind(var5)(var4);
            if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 14:
            var2 = var2.id;
            return var2;
case 10:
            return var1;
case 8:
            var4 = var5.didAgree;
            var2 = var3.id;
            var4 = var4.bind(var5)(var2);
            var2 = null;
            if(var4) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var2 = var3.id;
case 15:
            return var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var4 = function isChannelSpoilerGated(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arguments[1];
            var4 = arguments[2];
            var3 = undefined;
            if(!(var5 === var3)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var5 = _closure1_slot3;
case 17:
            if(!(var4 === var3)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var4 = _closure1_slot2;
case 19:
            var2 = _closure1_slot4;
            var1 = arg1;
            var2 = var2.bind(var3)(var1, var5, var4);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/spoiler_channels/SpoilerChannelUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useGetSpoilerGatingChannelId(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot3;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot2;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var5 = _closure1_slot4;
            var4 = _closure2_slot0;
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGetSpoilerGatingChannelId'] = var5;
    var3['isChannelSpoilerGated'] = var4;
    var4 = function useIsChannelSpoilerGated(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot3;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot2;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var5 = _closure1_slot5;
            var4 = _closure2_slot0;
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useIsChannelSpoilerGated'] = var4;
    var4 = function useShouldShowSpoilerGateForChannelId(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot2;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot3;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var5 = _closure1_slot2;
            var3 = var5.getChannel;
            var2 = _closure2_slot0;
            var4 = var3.bind(var5)(var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = undefined;
            var1 = var3.bind(var1)(var4, var2, var5);
            return var1;
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useShouldShowSpoilerGateForChannelId'] = var4;
    var2 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0003_ip = 7; continue _fun0003 }
case 21:
            var3 = _closure1_slot2;
            var2 = var3.getChannel;
            var3 = var2.bind(var3)(var4);
            var2 = _closure1_slot5;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
case 7:
            var1 = false;
            return var1;
        }
    };
    var3['shouldShowSpoilerGateForChannelId'] = var2;
    return var1;
})();