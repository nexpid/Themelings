// app/modules/guild_home/useActiveChannels.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
            var5 = arg1;
            var3 = arguments[1];
            var6 = undefined;
            if(!(var3 === var6)) { _fun0001_ip = 56; continue _fun0001 }
 14:
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
 56:
            var8 = var3;
            var2 = var8[Symbol.iterator];
            var8 = var2().next;
            var4 = var8().value;
            var3 = var2;
            var7 = var3 === var6;
            var3 = undefined;
            if(var7) { _fun0001_ip = 81; continue _fun0001 }
 78:
            var3 = var4;
 81:
            var _closure2_slot0 = var3;
            var3 = undefined;
            if(var7) { _fun0001_ip = 115; continue _fun0001 }
 90:
            var9 = var8().value;
            var4 = var2;
            var4 = var4 === var6;
            var3 = undefined;
            var7 = var4;
            if(var4) { _fun0001_ip = 115; continue _fun0001 }
 109:
            var3 = var9;
            var7 = var4;
 115:
            var _closure2_slot1 = var3;
            var4 = undefined;
            if(var7) { _fun0001_ip = 149; continue _fun0001 }
 124:
            var9 = var8().value;
            var3 = var2;
            var3 = var3 === var6;
            var4 = undefined;
            var7 = var3;
            if(var3) { _fun0001_ip = 149; continue _fun0001 }
 143:
            var4 = var9;
            var7 = var3;
 149:
            var3 = undefined;
            if(var7) { _fun0001_ip = 179; continue _fun0001 }
 154:
            var9 = var8().value;
            var8 = var2;
            var8 = var8 === var6;
            var3 = undefined;
            var7 = var8;
            if(var8) { _fun0001_ip = 179; continue _fun0001 }
 173:
            var3 = var9;
            var7 = var8;
 179:
            if(var7) { _fun0001_ip = 185; continue _fun0001 }
 182:
            var2.return();
 185:
            var _closure2_slot2 = var6;
            var2 = var4.getActiveChannelIds;
            var8 = var2.bind(var4)(var5);
            var2 = null;
            if(!(var2 == var8)) { _fun0001_ip = 212; continue _fun0001 }
 206:
            var4 = new Array(0);
            _fun0001_ip = 230; continue _fun0001;
 212:
            var2 = global;
            var7 = var2.Array;
            var2 = var7.from;
            var4 = var2.bind(var7)(var8);
 230:
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
 0:
                    var5 = arg1;
                    var3 = null;
                    if(!(var3 != var5)) { _fun0002_ip = 39; continue _fun0002 }
 9:
                    var2 = var5.hasFlag;
                    var1 = _closure1_slot8;
                    var1 = var1.ACTIVE_CHANNELS_REMOVED;
                    var1 = var2.bind(var5)(var1);
                    if(var1) { _fun0002_ip = 243; continue _fun0002 }
 39:
                    var6 = _closure1_slot2;
                    var4 = var5.type;
                    var1 = undefined;
                    var1 = var6.bind(var1)(var4);
                    if(var1) { _fun0002_ip = 65; continue _fun0002 }
 61:
                    var1 = false;
                    return var1;
 65:
                    var7 = _closure2_slot2;
                    var6 = var7.has;
                    var4 = var5.id;
                    var4 = var6.bind(var7)(var4);
                    if(var4) { _fun0002_ip = 239; continue _fun0002 }
 93:
                    var4 = var5.parent_id;
                    if(!(var3 != var4)) { _fun0002_ip = 126; continue _fun0002 }
 103:
                    var7 = _closure2_slot2;
                    var6 = var7.has;
                    var4 = var5.parent_id;
                    var4 = var6.bind(var7)(var4);
                    if(var4) { _fun0002_ip = 235; continue _fun0002 }
 126:
                    var7 = _closure2_slot1;
                    var6 = var7.can;
                    var4 = _closure1_slot7;
                    var4 = var4.VIEW_CHANNEL;
                    var4 = var6.bind(var7)(var4, var5);
                    if(var4) { _fun0002_ip = 159; continue _fun0002 }
 155:
                    var4 = false;
                    return var4;
 159:
                    var6 = _closure2_slot0;
                    var4 = var6.getChannel;
                    var1 = var5.parent_id;
                    var4 = var4.bind(var6)(var1);
                    var1 = var5.isThread;
                    var1 = var1.bind(var5)();
                    var1 = !var1;
                    if(var1) { _fun0002_ip = 199; continue _fun0002 }
 195:
                    var1 = var3 == var4;
 199:
                    if(var1) { _fun0002_ip = 206; continue _fun0002 }
 202:
                    var1 = var3 == var4;
 206:
                    if(var1) { _fun0002_ip = 233; continue _fun0002 }
 209:
                    var3 = var4.hasFlag;
                    var2 = _closure1_slot8;
                    var2 = var2.ACTIVE_CHANNELS_REMOVED;
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
 233:
                    return var1;
 235:
                    var1 = false;
                    return var1;
 239:
                    var1 = false;
                    return var1;
 243:
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