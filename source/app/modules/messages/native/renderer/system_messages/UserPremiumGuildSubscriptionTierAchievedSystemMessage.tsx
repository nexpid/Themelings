// app/modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function UserPremiumGuildSubscriptionTierAchievedSystemMessageInner(arg1) {
        var1 = arg1;
        var6 = var1.row;
        var11 = var1.tier;
        var _closure2_slot0 = var11;
        var14 = var1.guildName;
        var _closure2_slot1 = var14;
        var8 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 12;
        var2 = var7[var2];
        var4 = undefined;
        var12 = var8.bind(var4)(var2);
        var10 = var12.useStateFromStores;
        var2 = _closure1_slot4;
        var9 = new Array(1);
        var9[0] = var2;
        var5 = function() {
            var1 = _closure1_slot4;
            var1 = var1.roleStyle;
            return var1;
        };
        var2 = new Array(0);
        var15 = var10.bind(var12)(var9, var5, var2);
        var _closure2_slot2 = var15;
        var16 = var6.message;
        var _closure2_slot3 = var16;
        var5 = var16.author;
        var _closure2_slot4 = var5;
        var2 = 7;
        var2 = var7[var2];
        var8 = var8.bind(var4)(var2);
        var2 = var8.useMessageAuthorWithProcessedColor;
        var2 = var2.bind(var8)(var16);
        var13 = var2.nick;
        var _closure2_slot5 = var13;
        var17 = var2.colorString;
        var _closure2_slot6 = var17;
        var2 = _closure1_slot1;
        var8 = 6;
        var8 = var7[var8];
        var8 = var2.bind(var4)(var8);
        var12 = var8.bind(var4)(var16);
        var _closure2_slot7 = var12;
        var10 = _closure1_slot3;
        var9 = var10.useMemo;
        var8 = new Array(4);
        var8[0] = var17;
        var16 = var16.channel_id;
        var8[1] = var16;
        var8[2] = var15;
        var5 = var5.id;
        var8[3] = var5;
        var5 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = {};
                var2 = 'bindUserMenu';
                var1['action'] = var2;
                var3 = _closure2_slot4;
                var3 = var3.id;
                var1['userId'] = var3;
                var3 = _closure2_slot6;
                var1['colorString'] = var3;
                var6 = _closure2_slot2;
                var5 = null;
                var4 = 'username';
                var3 = null;
                if(!(var4 === var6)) { _fun0001_ip = 57; continue _fun0001 }
 53:
                var3 = _closure2_slot6;
 57:
                var1['linkColor'] = var3;
                var3 = _closure2_slot6;
                var1['roleColor'] = var3;
                var4 = _closure2_slot2;
                var3 = 'dot';
                var3 = var3 === var4;
                if(!var3) { _fun0001_ip = 94; continue _fun0001 }
 86:
                var4 = _closure2_slot6;
                var3 = var5 != var4;
 94:
                var1['shouldShowRoleDot'] = var3;
                var2 = _closure2_slot3;
                var2 = var2.channel_id;
                var1['messageChannelId'] = var2;
                var2 = true;
                var1['medium'] = var2;
                return var1;
            }
        };
        var10 = var9.bind(var10)(var5, var8);
        var _closure2_slot8 = var10;
        var9 = _closure1_slot3;
        var8 = var9.useMemo;
        var5 = new Array(5);
        var5[0] = var14;
        var5[1] = var13;
        var5[2] = var12;
        var5[3] = var11;
        var5[4] = var10;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = _closure2_slot7;
                var1 = 1;
                if(!(!(var2 > var1))) { _fun0002_ip = 144; continue _fun0002 }
 17:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 9;
                var2 = var9[var1];
                var7 = undefined;
                var2 = var8.bind(var7)(var2);
                var4 = var2.intl;
                var3 = var4.formatToParts;
                var1 = var9[var1];
                var1 = var8.bind(var7)(var1);
                var1 = var1.t;
                var2 = var1.oAYAPz;
                var1 = {};
                var5 = _closure2_slot5;
                var1['username'] = var5;
                var5 = _closure2_slot8;
                var1['usernameOnClick'] = var5;
                var5 = _closure2_slot1;
                var1['guildName'] = var5;
                var5 = 10;
                var5 = var9[var5];
                var8 = var8.bind(var7)(var5);
                var7 = var8.getTierName;
                var5 = _closure2_slot0;
                var5 = var7.bind(var8)(var5);
                var1['newTierName'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                _fun0002_ip = 275; continue _fun0002;
 144:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 9;
                var3 = var10[var2];
                var8 = undefined;
                var3 = var9.bind(var8)(var3);
                var5 = var3.intl;
                var4 = var5.formatToParts;
                var2 = var10[var2];
                var2 = var9.bind(var8)(var2);
                var2 = var2.t;
                var3 = var2.GjNvr6;
                var2 = {};
                var7 = _closure2_slot5;
                var2['username'] = var7;
                var7 = _closure2_slot8;
                var2['usernameOnClick'] = var7;
                var7 = _closure2_slot1;
                var2['guildName'] = var7;
                var7 = 10;
                var7 = var10[var7];
                var9 = var9.bind(var8)(var7);
                var8 = var9.getTierName;
                var7 = _closure2_slot0;
                var7 = var8.bind(var9)(var7);
                var2['newTierName'] = var7;
                var6 = _closure2_slot7;
                var2['numSubscriptions'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 275:
                return var1;
            }
        };
        var5 = var8.bind(var9)(var3, var5);
        var3 = _closure1_slot7;
        var1 = 13;
        var1 = var7[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['row'] = var6;
        var1['content'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
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
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
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
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function UserPremiumGuildSubscriptionTierAchievedSystemMessage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var8 = var1.row;
            var7 = var1.tier;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var2 = var8.message;
            var1 = var2.getChannelId;
            var1 = var1.bind(var2)();
            var _closure2_slot0 = var1;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var9 = 12;
            var4 = var4[var9];
            var11 = var6.bind(var5)(var4);
            var10 = var11.useStateFromStores;
            var4 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var10.bind(var11)(var6, var1, var4);
            var1 = null;
            var4 = var1 == var6;
            var11 = undefined;
            if(var4) { _fun0003_ip = 125; continue _fun0003 }
 115:
            var4 = var6.getGuildId;
            var11 = var4.bind(var6)();
 125:
            _closure2_slot1 = var11;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var10 = var6.bind(var5)(var4);
            var9 = var10.useStateFromStores;
            var4 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = new Array(1);
            var4[0] = var11;
            var3 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var9.bind(var10)(var6, var3, var4);
            if(!(var1 == var6)) { _fun0003_ip = 228; continue _fun0003 }
 189:
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 5;
            var1 = var9[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['row'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 264; continue _fun0003;
 228:
            var4 = _closure1_slot7;
            var3 = _closure1_slot8;
            var2 = {};
            var2['row'] = var8;
            var2['tier'] = var7;
            var6 = var6.name;
            var2['guildName'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 264:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createUserPremiumGuildSubscriptionTierAchievedSystemMessage(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var13 = arg2;
            var14 = var3.message;
            var18 = var3.roleStyle;
            var15 = var14.author;
            var5 = _closure1_slot5;
            var4 = var5.getChannel;
            var2 = var14.getChannelId;
            var2 = var2.bind(var14)();
            var6 = var4.bind(var5)(var2);
            var17 = null;
            if(!(var17 != var6)) { _fun0004_ip = 710; continue _fun0004 }
 59:
            var5 = _closure1_slot6;
            var4 = var5.getGuild;
            var2 = var6.getGuildId;
            var2 = var2.bind(var6)();
            var11 = var4.bind(var5)(var2);
            if(!(var17 != var11)) { _fun0004_ip = 675; continue _fun0004 }
 90:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var10 = var2.bind(var5)(var14);
            var4 = _closure1_slot0;
            var2 = 7;
            var2 = var6[var2];
            var7 = var4.bind(var5)(var2);
            var2 = var7.getMessageAuthorWithProcessedColor;
            var2 = var2.bind(var7)(var14);
            var12 = var2.nick;
            var16 = var2.colorString;
            var19 = var2.colorStrings;
            var7 = var2.guildId;
            var2 = 8;
            var2 = var6[var2];
            var6 = var4.bind(var5)(var2);
            var4 = var6.isNativeMessageEligibleForEnhancedRoleColors;
            var2 = var15.id;
            var20 = var4.bind(var6)(var7, var2, var18);
            var2 = {};
            var4 = 1;
            if(!(!(var10 > var4))) { _fun0004_ip = 419; continue _fun0004 }
 209:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 9;
            var7 = var9[var4];
            var7 = var6.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.formatToParts;
            var4 = var9[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.t;
            var6 = var4.oAYAPz;
            var4 = {};
            var4['username'] = var12;
            var9 = {};
            var21 = 'bindUserMenu';
            var9['action'] = var21;
            var21 = var15.id;
            var9['userId'] = var21;
            var9['colorString'] = var16;
            var22 = 'username';
            var21 = null;
            if(!(var22 === var18)) { _fun0004_ip = 305; continue _fun0004 }
 302:
            var21 = var16;
 305:
            var9['linkColor'] = var21;
            var9['roleColor'] = var16;
            var9['roleColors'] = var19;
            var21 = 'dot';
            var21 = var21 === var18;
            if(!var21) { _fun0004_ip = 335; continue _fun0004 }
 331:
            var21 = var17 != var16;
 335:
            var9['shouldShowRoleDot'] = var21;
            var21 = var14.channel_id;
            var9['messageChannelId'] = var21;
            var21 = true;
            var9['medium'] = var21;
            var4['usernameOnClick'] = var9;
            var9 = var11.name;
            var4['guildName'] = var9;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var9 = 10;
            var9 = var22[var9];
            var21 = var21.bind(var5)(var9);
            var9 = var21.getTierName;
            var9 = var9.bind(var21)(var13);
            var4['newTierName'] = var9;
            var4 = var7.bind(var8)(var6, var4);
            _fun0004_ip = 637; continue _fun0004;
 419:
            var7 = _closure1_slot0;
            var21 = _closure1_slot2;
            var6 = 9;
            var8 = var21[var6];
            var8 = var7.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.formatToParts;
            var6 = var21[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.t;
            var7 = var6.GjNvr6;
            var6 = {};
            var6['username'] = var12;
            var12 = {};
            var21 = 'bindUserMenu';
            var12['action'] = var21;
            var15 = var15.id;
            var12['userId'] = var15;
            var12['colorString'] = var16;
            var21 = 'username';
            var15 = null;
            if(!(var21 === var18)) { _fun0004_ip = 515; continue _fun0004 }
 512:
            var15 = var16;
 515:
            var12['linkColor'] = var15;
            var12['roleColor'] = var16;
            var15 = null;
            if(!var20) { _fun0004_ip = 533; continue _fun0004 }
 530:
            var15 = var19;
 533:
            var12['roleColors'] = var15;
            var15 = 'dot';
            var15 = var15 === var18;
            if(!var15) { _fun0004_ip = 553; continue _fun0004 }
 549:
            var15 = var17 != var16;
 553:
            var12['shouldShowRoleDot'] = var15;
            var14 = var14.channel_id;
            var12['messageChannelId'] = var14;
            var14 = true;
            var12['medium'] = var14;
            var6['usernameOnClick'] = var12;
            var11 = var11.name;
            var6['guildName'] = var11;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 10;
            var11 = var14[var11];
            var12 = var12.bind(var5)(var11);
            var11 = var12.getTierName;
            var11 = var11.bind(var12)(var13);
            var6['newTierName'] = var11;
            var6['numSubscriptions'] = var10;
            var4 = var8.bind(var9)(var7, var6);
 637:
            var2['content'] = var4;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 11;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var24 = var4.bind(var5)(var3);
            var25 = var2;
            var4 = copyDataProperties(var25, var24);
            return var2;
 675:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 5;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createUserPremiumGuildSubscriptionSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
 710:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.createUserPremiumGuildSubscriptionSystemMessage;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['createUserPremiumGuildSubscriptionTierAchievedSystemMessage'] = var2;
    return var1;
})();