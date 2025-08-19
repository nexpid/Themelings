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
 0:
            var8 = arg1;
            var10 = arg2;
            var4 = arg3;
            var3 = _closure1_slot2;
            var1 = var3.getInvite;
            var11 = var1.bind(var3)(var10);
            var1 = null;
            if(!(var1 != var11)) { _fun0001_ip = 803; continue _fun0001 }
 36:
            var5 = _closure1_slot3;
            var3 = var5.getCurrentUser;
            var3 = var3.bind(var5)();
            var6 = var1 == var3;
            var5 = undefined;
            var9 = undefined;
            if(var6) { _fun0001_ip = 65; continue _fun0001 }
 60:
            var9 = var3.id;
 65:
            var3 = var8.author;
            var3 = var3.id;
            var7 = var9 === var3;
            var6 = var11.state;
            var3 = _closure1_slot4;
            var3 = var3.RESOLVING;
            if(!(var6 !== var3)) { _fun0001_ip = 770; continue _fun0001 }
 102:
            var6 = var11.state;
            var3 = _closure1_slot4;
            var3 = var3.EXPIRED;
            if(!(var6 !== var3)) { _fun0001_ip = 735; continue _fun0001 }
 124:
            var6 = var11.state;
            var3 = _closure1_slot4;
            var3 = var3.BANNED;
            if(!(var6 !== var3)) { _fun0001_ip = 735; continue _fun0001 }
 146:
            var6 = var11.state;
            var3 = _closure1_slot4;
            var3 = var3.ERROR;
            if(!(var6 !== var3)) { _fun0001_ip = 593; continue _fun0001 }
 168:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var13 = 5;
            var3 = var3[var13];
            var6 = var6.bind(var5)(var3);
            var3 = var6.getInviteType;
            var6 = var3.bind(var6)(var11);
            var3 = _closure1_slot6;
            var3 = var3.GROUP_DM;
            if(!(var3 !== var6)) { _fun0001_ip = 558; continue _fun0001 }
 216:
            var3 = _closure1_slot6;
            var3 = var3.FRIEND;
            if(!(var3 !== var6)) { _fun0001_ip = 511; continue _fun0001 }
 233:
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
            if(!(var3 !== var6)) { _fun0001_ip = 477; continue _fun0001 }
 292:
            var12 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var13];
            var3 = var12.bind(var5)(var3);
            var3 = var3.GuildInviteExtendedType;
            var3 = var3.APPLICATION;
            if(!(var3 !== var6)) { _fun0001_ip = 427; continue _fun0001 }
 325:
            var12 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var13];
            var3 = var12.bind(var5)(var3);
            var3 = var3.GuildInviteExtendedType;
            var3 = var3.PROFILE;
            if(!(var3 !== var6)) { _fun0001_ip = 393; continue _fun0001 }
 358:
            var6 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 4;
            var3 = var12[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createGuildInvite;
            var3 = var3.bind(var6)(var11, var7, var4);
            return var3;
 393:
            var6 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 10;
            var3 = var12[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createGuildProfileInvite;
            var3 = var3.bind(var6)(var11, var4);
            return var3;
 427:
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
 477:
            var6 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 8;
            var3 = var12[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createGuildScheduledEventInviteEmbed;
            var3 = var3.bind(var6)(var11, var4);
            return var3;
 511:
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
 558:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 6;
            var3 = var9[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createGroupDMInvite;
            var3 = var3.bind(var6)(var11, var7, var4);
            return var3;
 593:
            var6 = _closure1_slot2;
            var3 = var6.getInviteError;
            var3 = var3.bind(var6)(var10);
            if(!(var1 != var3)) { _fun0001_ip = 700; continue _fun0001 }
 612:
            var6 = var3.code;
            var3 = _closure1_slot5;
            var3 = var3.INVITES_DISABLED;
            if(!(var6 !== var3)) { _fun0001_ip = 666; continue _fun0001 }
 631:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 4;
            var3 = var9[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createErroredGuildInvite;
            var3 = var3.bind(var6)(var10, var7, var4);
            _fun0001_ip = 698; continue _fun0001;
 666:
            var9 = _closure1_slot0;
            var12 = _closure1_slot1;
            var6 = 4;
            var6 = var12[var6];
            var9 = var9.bind(var5)(var6);
            var6 = var9.createDisabledGuildInvite;
            var3 = var6.bind(var9)(var11, var4);
 698:
            _fun0001_ip = 733; continue _fun0001;
 700:
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var6 = 4;
            var6 = var11[var6];
            var9 = var9.bind(var5)(var6);
            var6 = var9.createErroredGuildInvite;
            var3 = var6.bind(var9)(var10, var7, var4);
 733:
            return var3;
 735:
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 4;
            var3 = var9[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createExpiredGuildInvite;
            var3 = var3.bind(var6)(var8, var7, var4);
            return var3;
 770:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 4;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.createResolvingGuildInvite;
            var2 = var2.bind(var3)(var4);
            return var2;
 803:
            return var1;
        }
    };
    var3['createInviteEmbed'] = var2;
    return var1;
})();