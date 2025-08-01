// app/modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.InviteStates;
    var _closure1_slot6 = var7;
    var4 = var4.AbortCodes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function InviteEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var8 = var2.message;
            var7 = var2.code;
            var _closure2_slot0 = var7;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 15;
            var9 = var6[var3];
            var5 = undefined;
            var12 = var4.bind(var5)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot4;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getInvite;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var11.bind(var12)(var10, var7, var9);
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = new Array(0);
            var11 = var6.bind(var7)(var4, var3, var1);
            var1 = var8.author;
            var1 = var1.id;
            var7 = var11 === var1;
            var1 = null;
            if(!(var1 != var9)) { _fun0001_ip = 846; continue _fun0001 }
 147:
            var4 = var9.state;
            var3 = _closure1_slot6;
            var3 = var3.RESOLVING;
            if(!(var4 !== var3)) { _fun0001_ip = 806; continue _fun0001 }
 169:
            var4 = var9.state;
            var3 = _closure1_slot6;
            var3 = var3.EXPIRED;
            if(!(var4 !== var3)) { _fun0001_ip = 757; continue _fun0001 }
 191:
            var4 = var9.state;
            var3 = _closure1_slot6;
            var3 = var3.BANNED;
            if(!(var4 !== var3)) { _fun0001_ip = 757; continue _fun0001 }
 213:
            var4 = var9.state;
            var3 = _closure1_slot6;
            var3 = var3.ERROR;
            if(!(var4 !== var3)) { _fun0001_ip = 707; continue _fun0001 }
 235:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 8;
            var3 = var3[var6];
            var4 = var4.bind(var5)(var3);
            var3 = var4.getInviteType;
            var4 = var3.bind(var4)(var9);
            var3 = _closure1_slot8;
            var3 = var3.GROUP_DM;
            if(!(var4 !== var3)) { _fun0001_ip = 663; continue _fun0001 }
 283:
            var3 = _closure1_slot8;
            var3 = var3.FRIEND;
            if(!(var4 !== var3)) { _fun0001_ip = 614; continue _fun0001 }
 300:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isStageInviteEmbed;
            var3 = var3.bind(var4)(var9);
            if(var3) { _fun0001_ip = 575; continue _fun0001 }
 334:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var4 = var4.bind(var5)(var3);
            var3 = var4.isGuildScheduledEventInviteEmbed;
            var3 = var3.bind(var4)(var9);
            if(var3) { _fun0001_ip = 530; continue _fun0001 }
 368:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 16;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.guildInviteCanEmbedProfile;
            var3 = var3.bind(var4)(var9);
            if(!var3) { _fun0001_ip = 480; continue _fun0001 }
 402:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 17;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.getGuildProfileInviteEmbedHoldoutEnabled;
            var3 = var3.bind(var4)();
            if(var3) { _fun0001_ip = 480; continue _fun0001 }
 435:
            var6 = _closure1_slot9;
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 14;
            var3 = var10[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.GuildProfileInvite;
            var3 = {};
            var3['invite'] = var9;
            var3 = var6.bind(var5)(var4, var3);
            _fun0001_ip = 528; continue _fun0001;
 480:
            var10 = _closure1_slot9;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 7;
            var4 = var12[var4];
            var4 = var6.bind(var5)(var4);
            var6 = var4.GuildInvite;
            var4 = {};
            var4['invite'] = var9;
            var4['isOwnInvite'] = var7;
            var3 = var10.bind(var5)(var6, var4);
 528:
            _fun0001_ip = 573; continue _fun0001;
 530:
            var10 = _closure1_slot9;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 12;
            var4 = var12[var4];
            var4 = var6.bind(var5)(var4);
            var6 = var4.GuildScheduledEventInviteEmbed;
            var4 = {};
            var4['invite'] = var9;
            var3 = var10.bind(var5)(var6, var4);
 573:
            _fun0001_ip = 612; continue _fun0001;
 575:
            var10 = _closure1_slot9;
            var6 = _closure1_slot1;
            var12 = _closure1_slot2;
            var4 = 11;
            var4 = var12[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['invite'] = var9;
            var3 = var10.bind(var5)(var6, var4);
 612:
            _fun0001_ip = 661; continue _fun0001;
 614:
            var10 = _closure1_slot9;
            var6 = _closure1_slot1;
            var12 = _closure1_slot2;
            var4 = 10;
            var4 = var12[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['invite'] = var9;
            var4['isOwnInvite'] = var7;
            var4['currentUserId'] = var11;
            var3 = var10.bind(var5)(var6, var4);
 661:
            _fun0001_ip = 705; continue _fun0001;
 663:
            var10 = _closure1_slot9;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 9;
            var4 = var11[var4];
            var6 = var6.bind(var5)(var4);
            var4 = {};
            var4['invite'] = var9;
            var4['isOwnInvite'] = var7;
            var3 = var10.bind(var5)(var6, var4);
 705:
            return var3;
 707:
            var6 = _closure1_slot9;
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 7;
            var3 = var10[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.GuildInviteErrored;
            var3 = {};
            var3['invite'] = var9;
            var3['isOwnInvite'] = var7;
            var3 = var6.bind(var5)(var4, var3);
            return var3;
 757:
            var6 = _closure1_slot9;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 7;
            var3 = var9[var3];
            var3 = var4.bind(var5)(var3);
            var4 = var3.GuildInviteExpired;
            var3 = {};
            var3['message'] = var8;
            var3['isOwnInvite'] = var7;
            var3 = var6.bind(var5)(var4, var3);
            return var3;
 806:
            var4 = _closure1_slot9;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.GuildInviteResolving;
            var2 = {};
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 846:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createInviteEmbed(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var8 = arg1;
            var10 = arg2;
            var4 = arg3;
            var3 = _closure1_slot4;
            var1 = var3.getInvite;
            var11 = var1.bind(var3)(var10);
            var1 = null;
            if(!(var1 != var11)) { _fun0002_ip = 872; continue _fun0002 }
 36:
            var5 = _closure1_slot5;
            var3 = var5.getCurrentUser;
            var3 = var3.bind(var5)();
            var6 = var1 == var3;
            var5 = undefined;
            var9 = undefined;
            if(var6) { _fun0002_ip = 65; continue _fun0002 }
 60:
            var9 = var3.id;
 65:
            var3 = var8.author;
            var3 = var3.id;
            var7 = var9 === var3;
            var6 = var11.state;
            var3 = _closure1_slot6;
            var3 = var3.RESOLVING;
            if(!(var6 !== var3)) { _fun0002_ip = 839; continue _fun0002 }
 102:
            var6 = var11.state;
            var3 = _closure1_slot6;
            var3 = var3.EXPIRED;
            if(!(var6 !== var3)) { _fun0002_ip = 804; continue _fun0002 }
 124:
            var6 = var11.state;
            var3 = _closure1_slot6;
            var3 = var3.BANNED;
            if(!(var6 !== var3)) { _fun0002_ip = 804; continue _fun0002 }
 146:
            var6 = var11.state;
            var3 = _closure1_slot6;
            var3 = var3.ERROR;
            if(!(var6 !== var3)) { _fun0002_ip = 662; continue _fun0002 }
 168:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var13 = 8;
            var3 = var3[var13];
            var6 = var6.bind(var5)(var3);
            var3 = var6.getInviteType;
            var6 = var3.bind(var6)(var11);
            var3 = _closure1_slot8;
            var3 = var3.GROUP_DM;
            if(!(var3 !== var6)) { _fun0002_ip = 627; continue _fun0002 }
 216:
            var3 = _closure1_slot8;
            var3 = var3.FRIEND;
            if(!(var3 !== var6)) { _fun0002_ip = 580; continue _fun0002 }
 233:
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = var3[var13];
            var15 = var12.bind(var5)(var6);
            var14 = var15.getGuildInviteExtendedType;
            var6 = true;
            var6 = var14.bind(var15)(var11, var6);
            var3 = var3[var13];
            var3 = var12.bind(var5)(var3);
            var3 = var3.GuildInviteExtendedType;
            var3 = var3.STAGE;
            if(!(var3 !== var6)) { _fun0002_ip = 546; continue _fun0002 }
 292:
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var3 = var12.bind(var5)(var3);
            var3 = var3.GuildInviteExtendedType;
            var3 = var3.EVENT;
            if(!(var3 !== var6)) { _fun0002_ip = 512; continue _fun0002 }
 328:
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var3 = var12.bind(var5)(var3);
            var3 = var3.GuildInviteExtendedType;
            var3 = var3.APPLICATION;
            if(!(var3 !== var6)) { _fun0002_ip = 463; continue _fun0002 }
 361:
            var12 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var13];
            var3 = var12.bind(var5)(var3);
            var3 = var3.GuildInviteExtendedType;
            var3 = var3.PROFILE;
            if(!(var3 !== var6)) { _fun0002_ip = 429; continue _fun0002 }
 394:
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 7;
            var3 = var12[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createGuildInvite;
            var3 = var3.bind(var6)(var11, var7, var4);
            return var3;
 429:
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 14;
            var3 = var12[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createGuildProfileInvite;
            var3 = var3.bind(var6)(var11, var4);
            return var3;
 463:
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 13;
            var3 = var12[var3];
            var12 = var6.bind(var5)(var3);
            var6 = var12.createEmbeddedActivityInviteEmbed;
            var3 = {};
            var13 = var11.code;
            var3['inviteCode'] = var13;
            var3['theme'] = var4;
            var3 = var6.bind(var12)(var3);
            return var3;
 512:
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 12;
            var3 = var12[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createGuildScheduledEventInviteEmbed;
            var3 = var3.bind(var6)(var11, var4);
            return var3;
 546:
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 11;
            var3 = var12[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createStageInviteEmbed;
            var3 = var3.bind(var6)(var11, var4);
            return var3;
 580:
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 10;
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
 627:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 9;
            var3 = var9[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createGroupDMInvite;
            var3 = var3.bind(var6)(var11, var7, var4);
            return var3;
 662:
            var6 = _closure1_slot4;
            var3 = var6.getInviteError;
            var3 = var3.bind(var6)(var10);
            if(!(var1 != var3)) { _fun0002_ip = 769; continue _fun0002 }
 681:
            var6 = var3.code;
            var3 = _closure1_slot7;
            var3 = var3.INVITES_DISABLED;
            if(!(var6 !== var3)) { _fun0002_ip = 735; continue _fun0002 }
 700:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 7;
            var3 = var9[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createErroredGuildInvite;
            var3 = var3.bind(var6)(var10, var7, var4);
            _fun0002_ip = 767; continue _fun0002;
 735:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 7;
            var6 = var12[var6];
            var9 = var9.bind(var5)(var6);
            var6 = var9.createDisabledGuildInvite;
            var3 = var6.bind(var9)(var11, var4);
 767:
            _fun0002_ip = 802; continue _fun0002;
 769:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 7;
            var6 = var11[var6];
            var9 = var9.bind(var5)(var6);
            var6 = var9.createErroredGuildInvite;
            var3 = var6.bind(var9)(var10, var7, var4);
 802:
            return var3;
 804:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 7;
            var3 = var9[var3];
            var6 = var6.bind(var5)(var3);
            var3 = var6.createExpiredGuildInvite;
            var3 = var3.bind(var6)(var8, var7, var4);
            return var3;
 839:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.createResolvingGuildInvite;
            var2 = var2.bind(var3)(var4);
            return var2;
 872:
            return var1;
        }
    };
    var3['createInviteEmbed'] = var2;
    return var1;
})();