// app/modules/messages/native/renderer/system_messages/JoinRequestNotificationSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function getMessageContent(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var7 = arg2;
            var6 = arg3;
            var1 = _closure1_slot7;
            var1 = var1.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION;
            if(!(var1 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot7;
            var1 = var1.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION;
            if(!(var1 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot7;
            var1 = var1.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION;
            if(!(var1 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = '';
            return var1;
case 6:
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(!(var1 == var6)) { _fun0001_ip = 10; continue _fun0001 }
case 8:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 5;
            var3 = var9[var1];
            var5 = undefined;
            var3 = var8.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.BMlbEx;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 11; continue _fun0001;
case 10:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 5;
            var5 = var10[var3];
            var4 = undefined;
            var5 = var9.bind(var4)(var5);
            var8 = var5.intl;
            var5 = var8.formatToParts;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            var4 = var3.u4movb;
            var3 = {};
            var3['username'] = var7;
            var3['guildName'] = var6;
            var1 = var5.bind(var8)(var4, var3);
case 11:
            return var1;
case 4:
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            if(!(var1 == var6)) { _fun0001_ip = 14; continue _fun0001 }
case 12:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 5;
            var3 = var9[var1];
            var5 = undefined;
            var3 = var8.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.FVF6qa;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 15; continue _fun0001;
case 14:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 5;
            var5 = var10[var3];
            var4 = undefined;
            var5 = var9.bind(var4)(var5);
            var8 = var5.intl;
            var5 = var8.formatToParts;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var3 = var3.t;
            var4 = var3.UGN/Y2;
            var3 = {};
            var3['username'] = var7;
            var3['guildName'] = var6;
            var1 = var5.bind(var8)(var4, var3);
case 15:
            return var1;
case 2:
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            if(!(var1 == var6)) { _fun0001_ip = 18; continue _fun0001 }
case 16:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 5;
            var3 = var9[var1];
            var5 = undefined;
            var3 = var8.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var9[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.2VLV0d;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 19; continue _fun0001;
case 18:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 5;
            var4 = var9[var2];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToParts;
            var2 = var9[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.EloBGx;
            var2 = {};
            var2['username'] = var7;
            var2['guildName'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 19:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageTypes;
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/JoinRequestNotificationSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createJoinRequestNotificationSystemMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var6 = var4.message;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var3 = undefined;
            var7 = var5.bind(var3)(var1);
            var5 = var7.cast;
            var1 = var6.channel_id;
            var7 = var5.bind(var7)(var1);
            var5 = _closure1_slot3;
            var1 = var5.getRequest;
            var7 = var1.bind(var5)(var7);
            var5 = null;
            var1 = var5 == var7;
            var9 = undefined;
            if(var1) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var10 = _closure1_slot5;
            var8 = var10.getGuild;
            var1 = var7.guildId;
            var1 = var8.bind(var10)(var1);
            if(!(var5 == var1)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var11 = _closure1_slot4;
            var10 = var11.getJoinRequestGuild;
            var8 = var7.guildId;
            var1 = var10.bind(var11)(var8);
case 22:
            var9 = var1;
case 20:
            var10 = _closure1_slot6;
            var8 = var10.getUser;
            var11 = var5 == var7;
            var1 = undefined;
            if(var11) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var1 = var7.userId;
case 24:
            var1 = var8.bind(var10)(var1);
            var10 = var5 == var1;
            var8 = undefined;
            if(var10) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var8 = var1.username;
case 26:
            if(!(var5 == var8)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var10 = var5 == var7;
            var1 = undefined;
            if(var10) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var7 = var7.user;
            var10 = var5 == var7;
            var1 = undefined;
            if(var10) { _fun0002_ip = 30; continue _fun0002 }
case 32:
            var1 = var7.username;
case 30:
            var8 = var1;
case 28:
            var1 = {};
            var7 = _closure1_slot8;
            var6 = var6.type;
            var10 = var5 == var9;
            var5 = undefined;
            if(var10) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var5 = var9.name;
case 33:
            var5 = var7.bind(var3)(var6, var8, var5);
            var1['content'] = var5;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var13 = var2.bind(var3)(var4);
            var14 = var1;
            var2 = copyDataProperties(var14, var13);
            return var1;
        }
    };
    var3['createJoinRequestNotificationSystemMessage'] = var2;
    return var1;
})();