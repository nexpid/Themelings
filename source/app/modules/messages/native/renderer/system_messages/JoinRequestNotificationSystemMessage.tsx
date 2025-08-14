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
 0:
            var3 = arg1;
            var7 = arg2;
            var6 = arg3;
            var1 = _closure1_slot7;
            var1 = var1.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION;
            if(!(var1 !== var3)) { _fun0001_ip = 356; continue _fun0001 }
 29:
            var1 = _closure1_slot7;
            var1 = var1.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION;
            if(!(var1 !== var3)) { _fun0001_ip = 211; continue _fun0001 }
 46:
            var1 = _closure1_slot7;
            var1 = var1.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION;
            if(!(var1 !== var3)) { _fun0001_ip = 66; continue _fun0001 }
 60:
            var1 = '';
            return var1;
 66:
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 76; continue _fun0001 }
 72:
            if(!(var1 == var6)) { _fun0001_ip = 137; continue _fun0001 }
 76:
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
            _fun0001_ip = 209; continue _fun0001;
 137:
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
 209:
            return var1;
 211:
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 221; continue _fun0001 }
 217:
            if(!(var1 == var6)) { _fun0001_ip = 282; continue _fun0001 }
 221:
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
            _fun0001_ip = 354; continue _fun0001;
 282:
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
 354:
            return var1;
 356:
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 366; continue _fun0001 }
 362:
            if(!(var1 == var6)) { _fun0001_ip = 427; continue _fun0001 }
 366:
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
            _fun0001_ip = 499; continue _fun0001;
 427:
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
 499:
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
 0:
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
            if(var1) { _fun0002_ip = 121; continue _fun0002 }
 75:
            var10 = _closure1_slot5;
            var8 = var10.getGuild;
            var1 = var7.guildId;
            var1 = var8.bind(var10)(var1);
            if(!(var5 == var1)) { _fun0002_ip = 118; continue _fun0002 }
 98:
            var11 = _closure1_slot4;
            var10 = var11.getJoinRequestGuild;
            var8 = var7.guildId;
            var1 = var10.bind(var11)(var8);
 118:
            var9 = var1;
 121:
            var10 = _closure1_slot6;
            var8 = var10.getUser;
            var11 = var5 == var7;
            var1 = undefined;
            if(var11) { _fun0002_ip = 145; continue _fun0002 }
 140:
            var1 = var7.userId;
 145:
            var1 = var8.bind(var10)(var1);
            var10 = var5 == var1;
            var8 = undefined;
            if(var10) { _fun0002_ip = 164; continue _fun0002 }
 159:
            var8 = var1.username;
 164:
            if(!(var5 == var8)) { _fun0002_ip = 199; continue _fun0002 }
 168:
            var10 = var5 == var7;
            var1 = undefined;
            if(var10) { _fun0002_ip = 196; continue _fun0002 }
 177:
            var7 = var7.user;
            var10 = var5 == var7;
            var1 = undefined;
            if(var10) { _fun0002_ip = 196; continue _fun0002 }
 191:
            var1 = var7.username;
 196:
            var8 = var1;
 199:
            var1 = {};
            var7 = _closure1_slot8;
            var6 = var6.type;
            var10 = var5 == var9;
            var5 = undefined;
            if(var10) { _fun0002_ip = 224; continue _fun0002 }
 219:
            var5 = var9.name;
 224:
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