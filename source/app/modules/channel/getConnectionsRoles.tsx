// app/modules/channel/getConnectionsRoles.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var8 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.ChannelTypes;
    var4 = var4.Permissions;
    var10 = var9.GUILD_TEXT;
    var7 = new Array(6);
    var7[0] = var10;
    var10 = var9.GUILD_VOICE;
    var7[1] = var10;
    var10 = var9.GUILD_ANNOUNCEMENT;
    var7[2] = var10;
    var10 = var9.GUILD_FORUM;
    var7[3] = var10;
    var10 = var9.PUBLIC_THREAD;
    var7[4] = var10;
    var9 = var9.PRIVATE_THREAD;
    var7[5] = var9;
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var6[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.combine;
    var7 = var4.VIEW_CHANNEL;
    var4 = var4.SEND_MESSAGES;
    var4 = var8.bind(var9)(var7, var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/getConnectionsRoles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getConnectionsRoles(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = null;
            if(!(var4 != var2)) { _fun0001_ip = 143; continue _fun0001 }
 14:
            var7 = _closure1_slot4;
            var6 = var7.includes;
            var5 = var2.type;
            var5 = var6.bind(var7)(var5);
            if(!var5) { _fun0001_ip = 143; continue _fun0001 }
 39:
            var6 = _closure1_slot3;
            var5 = var6.getGuild;
            var3 = var2.guild_id;
            var3 = var5.bind(var6)(var3);
            var _closure2_slot0 = var3;
            if(!(var4 != var3)) { _fun0001_ip = 137; continue _fun0001 }
 66:
            var3 = global;
            var4 = var3.Object;
            var3 = var4.values;
            var2 = var2.permissionOverwrites;
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.type;
                    var1 = 0;
                    var1 = var1 === var2;
                    if(!var1) { _fun0002_ip = 89; continue _fun0002 }
 17:
                    var6 = _closure1_slot2;
                    var5 = var6.getRole;
                    var2 = _closure2_slot0;
                    var4 = var2.id;
                    var2 = var3.id;
                    var5 = var5.bind(var6)(var4, var2);
                    var4 = null;
                    var6 = var4 == var5;
                    var2 = undefined;
                    if(var6) { _fun0002_ip = 85; continue _fun0002 }
 64:
                    var5 = var5.tags;
                    var6 = var4 == var5;
                    var2 = undefined;
                    if(var6) { _fun0002_ip = 85; continue _fun0002 }
 79:
                    var2 = var5.guild_connections;
 85:
                    var1 = var4 === var2;
 89:
                    if(!var1) { _fun0002_ip = 142; continue _fun0002 }
 92:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 3;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.hasAny;
                    var3 = var3.deny;
                    var2 = _closure1_slot5;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = !var2;
 142:
                    return var1;
                }
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.map;
            var2 = function(arg1) {
                var4 = _closure1_slot2;
                var3 = var4.getRole;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = arg1;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            _fun0001_ip = 141; continue _fun0001;
 137:
            var1 = new Array(0);
 141:
            return var1;
 143:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();