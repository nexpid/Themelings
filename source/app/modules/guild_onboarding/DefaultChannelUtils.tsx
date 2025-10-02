// app/modules/guild_onboarding/DefaultChannelUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportAll;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function getDefaultPermissionsForChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot5;
            var4 = var3.GUILD_VOCAL;
            var3 = var4.has;
            var1 = var1.type;
            var1 = var3.bind(var4)(var1);
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var1 = _closure1_slot6;
            var1 = var1.VIEW_CHANNEL;
            _fun0001_ip = 5; continue _fun0001;
case 4:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 3;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.combine;
            var3 = _closure1_slot6;
            var3 = var3.VIEW_CHANNEL;
            var2 = _closure1_slot6;
            var2 = var2.CONNECT;
            var1 = var4.bind(var5)(var3, var2);
case 5:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelTypesSets;
    var _closure1_slot5 = var7;
    var4 = var4.Permissions;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/DefaultChannelUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useCanChannelBeDefault(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot3;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot4;
        var2[1] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = _closure1_slot4;
                var3 = var4.getChannel;
                var8 = _closure2_slot1;
                var5 = var3.bind(var4)(var8);
                var3 = _closure1_slot7;
                var6 = undefined;
                var4 = var3.bind(var6)(var5);
                var7 = _closure1_slot3;
                var3 = var7.isChannelGated;
                var1 = _closure2_slot0;
                var1 = var3.bind(var7)(var1, var8);
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 5;
                var2 = var7[var2];
                var3 = var3.bind(var6)(var2);
                var2 = var3.canEveryoneRole;
                var1 = var2.bind(var3)(var4, var5);
case 6:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCanChannelBeDefault'] = var4;
    var2 = function canChannelBeDefault(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = arg2;
            var3 = _closure1_slot7;
            var4 = _closure1_slot4;
            var1 = var4.getChannel;
            var1 = var1.bind(var4)(var7);
            var6 = undefined;
            var5 = var3.bind(var6)(var1);
            var4 = _closure1_slot3;
            var3 = var4.isChannelGated;
            var1 = arg1;
            var1 = var3.bind(var4)(var1, var7);
            if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 5;
            var3 = var8[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.canEveryoneRole;
            var6 = _closure1_slot4;
            var2 = var6.getChannel;
            var2 = var2.bind(var6)(var7);
            var1 = var3.bind(var4)(var5, var2);
case 8:
            return var1;
        }
    };
    var3['canChannelBeDefault'] = var2;
    return var1;
})();