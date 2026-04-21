// app/modules/channel/useChannelStatus.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/useChannelStatus.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useChannelStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var _closure2_slot0 = var9;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 4;
            var6 = var5[var1];
            var8 = undefined;
            var11 = var4.bind(var8)(var6);
            var10 = var11.useStateFromStores;
            var6 = _closure1_slot3;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot3;
                    var2 = var3.isUnavailable;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure2_slot0;
                    var1 = var4.guild_id;
case 2:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var6 = var10.bind(var11)(var7, var6);
            var _closure2_slot1 = var6;
            var1 = var5[var1];
            var7 = var4.bind(var8)(var1);
            var5 = var7.useStateFromStoresObject;
            var1 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot0;
                    var3 = null;
                    var3 = var3 != var4;
                    if(!var3) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var6 = _closure1_slot4;
                    var5 = var6.hasRequestedStatuses;
                    var4 = _closure2_slot0;
                    var4 = var4.guild_id;
                    var3 = var5.bind(var6)(var4);
case 4:
                    var1['hasRequestedStatuses'] = var3;
                    var4 = _closure1_slot4;
                    var3 = var4.getChannelStatus;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    var1['status'] = var2;
                    return var1;
                }
            };
            var1 = var5.bind(var7)(var4, var1);
            var7 = var1.hasRequestedStatuses;
            var _closure2_slot2 = var7;
            var1 = var1.status;
            var10 = null;
            var4 = var10 == var9;
            var5 = undefined;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var9.type;
case 6:
            var4 = _closure1_slot5;
            var4 = var4.GUILD_VOICE;
            var11 = var5 === var4;
            var _closure2_slot3 = var11;
            var5 = _closure1_slot2;
            var4 = var5.useEffect;
            var3 = new Array(4);
            var3[0] = var11;
            var10 = var10 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var9.guild_id;
case 8:
            var3[1] = var8;
            var3[2] = var7;
            var3[3] = var6;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var3 = _closure2_slot3;
                    var2 = !var3;
case 10:
                    if(var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var2 = _closure2_slot1;
case 12:
                    if(var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.fetchChannelInfo;
                    var1 = _closure2_slot0;
                    var1 = var1.guild_id;
                    var1 = var2.bind(var3)(var1);
case 14:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['useChannelStatus'] = var2;
    return var1;
})();