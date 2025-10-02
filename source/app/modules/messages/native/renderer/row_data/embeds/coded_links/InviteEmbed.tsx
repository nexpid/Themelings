// app/modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.InviteStates;
    var _closure1_slot4 = var7;
    var4 = var4.AbortCodes;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot6 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createInviteEmbed(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var10 = arg2;
            var4 = arg3;
            var3 = _closure1_slot2;
            var1 = var3.getInvite;
            var11 = var1.bind(var3)(var10);
            var1 = null;
            if(!(var1 != var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot3;
            var3 = var5.getCurrentUser;
            var3 = var3.bind(var5)();
            var6 = var1 == var3;
            var5 = undefined;
            var9 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var3.id;
case 4:
            var3 = var8.author;
            var3 = var3.id;
            var7 = var9 === var3;
            var6 = var11.state;
            var3 = _closure1_slot4;
            var3 = var3.RESOLVING;
            if(!(var6 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var11.state;
            var3 = _closure1_slot4;
            var3 = var3.EXPIRED;
            if(!(var6 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var11.state;
            var3 = _closure1_slot4;
            var3 = var3.BANNED;
            if(!(var6 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var6 = var11.state;
            var3 = _closure1_slot4;
            var3 = var3.ERROR;
            if(!(var6 !== var3)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var13 = 5;
            var3 = var3[var13];
            var6 = var6.bind(var5)(var3);
            var3 = var6.getInviteType;
            var6 = var3.bind(var6)(var11);
            var3 = _closure1_slot6;
            var3 = var3.GROUP_DM;
            if(!(var3 !== var6)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = _closure1_slot6;
            var3 = var3.FRIEND;
            if(!(var3 !== var6)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var12 = _closure1_slot0;
            var3 = _closure1_slot1;
            var6 = var3[var13];
            var15 = var12.bind(var5)(var6);
            var14 = var15.getGuildInviteExtendedType;
            var6 = true;
            var6 = var14.bind(var15)(var11, var6);
            var3 = var3[var13];
            var3 = var12.bind(var5)(var3);
            var3 = var3.GuildInviteExtendedType;
            var3 = var3.EVENT;
            if(!(var3 !== var6)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var12 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var13];
            var3 = var12.bind(var5)(var3);
            var3 = var3.GuildInviteExtendedType;
            var3 = var3.APPLICATION;
            if(!(var3 !== var6)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var12 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var13];
            var3 = var12.bind(var5)(var3);
            var3 = var3.GuildInviteExtendedType;
            var3 = var3.PROFILE;
            if(!(var3 !== var6)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var6 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 4;
            var3 = var12[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createGuildInvite;
            var3 = var3.bind(var6)(var11, var7, var4);
            return var3;
case 21:
            var6 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 10;
            var3 = var12[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createGuildProfileInvite;
            var3 = var3.bind(var6)(var11, var4);
            return var3;
case 19:
            var6 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 9;
            var3 = var12[var3];
            var12 = var6.bind(var5)(var3);
            var6 = var12.createEmbeddedActivityInviteEmbed;
            var3 = {};
            var13 = var11.code;
            var3['inviteCode'] = var13;
            var3['theme'] = var4;
            var3 = var6.bind(var12)(var3);
            return var3;
case 17:
            var6 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 8;
            var3 = var12[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createGuildScheduledEventInviteEmbed;
            var3 = var3.bind(var6)(var11, var4);
            return var3;
case 15:
            var6 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 7;
            var3 = var12[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createFriendInvite;
            var20 = var6;
            var19 = var11;
            var18 = var7;
            var17 = var9;
            var16 = var4;
            var3 = var20[var3](var19, var18, var17, var16, var15);
            return var3;
case 13:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 6;
            var3 = var9[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createGroupDMInvite;
            var3 = var3.bind(var6)(var11, var7, var4);
            return var3;
case 11:
            var6 = _closure1_slot2;
            var3 = var6.getInviteError;
            var3 = var3.bind(var6)(var10);
            if(!(var1 != var3)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var6 = var3.code;
            var3 = _closure1_slot5;
            var3 = var3.INVITES_DISABLED;
            if(!(var6 !== var3)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 4;
            var3 = var9[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createErroredGuildInvite;
            var3 = var3.bind(var6)(var10, var7, var4);
            _fun0001_ip = 27; continue _fun0001;
case 25:
            var9 = _closure1_slot0;
            var12 = _closure1_slot1;
            var6 = 4;
            var6 = var12[var6];
            var9 = var9.bind(var5)(var6);
            var6 = var9.createDisabledGuildInvite;
            var3 = var6.bind(var9)(var11, var4);
case 27:
            _fun0001_ip = 28; continue _fun0001;
case 23:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 4;
            var6 = var11[var6];
            var9 = var9.bind(var5)(var6);
            var6 = var9.createErroredGuildInvite;
            var3 = var6.bind(var9)(var10, var7, var4);
case 28:
            return var3;
case 8:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 4;
            var3 = var9[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createExpiredGuildInvite;
            var3 = var3.bind(var6)(var8, var7, var4);
            return var3;
case 6:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 4;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.createResolvingGuildInvite;
            var2 = var2.bind(var3)(var4);
            return var2;
case 2:
            return var1;
        }
    };
    var3['createInviteEmbed'] = var2;
    return var1;
})();