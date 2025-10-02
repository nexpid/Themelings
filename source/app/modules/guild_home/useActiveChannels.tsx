// app/modules/guild_home/useActiveChannels.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.isTextChannel;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelFlags;
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_home/useActiveChannels.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = arguments[1];
            var6 = undefined;
            if(!(var3 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot3;
            var2 = new Array(4);
            var2[0] = var7;
            var7 = _closure1_slot4;
            var2[1] = var7;
            var7 = _closure1_slot6;
            var2[2] = var7;
            var4 = _closure1_slot5;
            var2[3] = var4;
            var3 = var2;
case 2:
            var8 = var3;
            var2 = var8[Symbol.iterator];
            var8 = var2().next;
            var4 = var8().value;
            var3 = var2;
            var7 = var3 === var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var4;
case 4:
            var _closure2_slot0 = var3;
            var3 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var8().value;
            var4 = var2;
            var4 = var4 === var6;
            var3 = undefined;
            var7 = var4;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var3 = var9;
            var7 = var4;
case 6:
            var _closure2_slot1 = var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var9 = var8().value;
            var3 = var2;
            var3 = var3 === var6;
            var4 = undefined;
            var7 = var3;
            if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 11:
            var4 = var9;
            var7 = var3;
case 9:
            var3 = undefined;
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = var8().value;
            var8 = var2;
            var8 = var8 === var6;
            var3 = undefined;
            var7 = var8;
            if(var8) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var3 = var9;
            var7 = var8;
case 12:
            if(var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var2.return();
case 15:
            var _closure2_slot2 = var6;
            var2 = var4.getActiveChannelIds;
            var8 = var2.bind(var4)(var5);
            var2 = null;
            if(!(var2 == var8)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var4 = new Array(0);
            _fun0001_ip = 19; continue _fun0001;
case 17:
            var2 = global;
            var7 = var2.Array;
            var2 = var7.from;
            var4 = var2.bind(var7)(var8);
case 19:
            var2 = var3.getMutedChannels;
            var2 = var2.bind(var3)(var5);
            _closure2_slot2 = var2;
            var3 = var4.map;
            var2 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.getChannel;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 7;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.isNotNullish;
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var3 = null;
                    if(!(var3 != var5)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var2 = var5.hasFlag;
                    var1 = _closure1_slot8;
                    var1 = var1.ACTIVE_CHANNELS_REMOVED;
                    var1 = var2.bind(var5)(var1);
                    if(var1) { _fun0002_ip = 22; continue _fun0002 }
case 20:
                    var6 = _closure1_slot2;
                    var4 = var5.type;
                    var1 = undefined;
                    var1 = var6.bind(var1)(var4);
                    if(var1) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var1 = false;
                    return var1;
case 23:
                    var7 = _closure2_slot2;
                    var6 = var7.has;
                    var4 = var5.id;
                    var4 = var6.bind(var7)(var4);
                    if(var4) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var4 = var5.parent_id;
                    if(!(var3 != var4)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var7 = _closure2_slot2;
                    var6 = var7.has;
                    var4 = var5.parent_id;
                    var4 = var6.bind(var7)(var4);
                    if(var4) { _fun0002_ip = 29; continue _fun0002 }
case 27:
                    var7 = _closure2_slot1;
                    var6 = var7.can;
                    var4 = _closure1_slot7;
                    var4 = var4.VIEW_CHANNEL;
                    var4 = var6.bind(var7)(var4, var5);
                    if(var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var4 = false;
                    return var4;
case 30:
                    var6 = _closure2_slot0;
                    var4 = var6.getChannel;
                    var1 = var5.parent_id;
                    var4 = var4.bind(var6)(var1);
                    var1 = var5.isThread;
                    var1 = var1.bind(var5)();
                    var1 = !var1;
                    if(var1) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var1 = var3 == var4;
case 32:
                    if(var1) { _fun0002_ip = 18; continue _fun0002 }
case 34:
                    var1 = var3 == var4;
case 18:
                    if(var1) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                    var3 = var4.hasFlag;
                    var2 = _closure1_slot8;
                    var2 = var2.ACTIVE_CHANNELS_REMOVED;
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
case 35:
                    return var1;
case 29:
                    var1 = false;
                    return var1;
case 25:
                    var1 = false;
                    return var1;
case 22:
                    var1 = false;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getActiveTextChannels'] = var2;
    return var1;
})();