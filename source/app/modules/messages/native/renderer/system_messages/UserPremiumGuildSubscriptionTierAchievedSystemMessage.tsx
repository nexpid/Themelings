// app/modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createUserPremiumGuildSubscriptionTierAchievedSystemMessage(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var13 = arg2;
            var14 = var3.message;
            var18 = var3.roleStyle;
            var15 = var14.author;
            var5 = _closure1_slot3;
            var4 = var5.getChannel;
            var2 = var14.getChannelId;
            var2 = var2.bind(var14)();
            var6 = var4.bind(var5)(var2);
            var17 = null;
            if(!(var17 != var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot4;
            var4 = var5.getGuild;
            var2 = var6.getGuildId;
            var2 = var2.bind(var6)();
            var11 = var4.bind(var5)(var2);
            if(!(var17 != var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var10 = var2.bind(var5)(var14);
            var4 = _closure1_slot0;
            var2 = 4;
            var2 = var6[var2];
            var7 = var4.bind(var5)(var2);
            var2 = var7.getMessageAuthorWithProcessedColor;
            var2 = var2.bind(var7)(var14);
            var12 = var2.nick;
            var16 = var2.colorString;
            var19 = var2.colorStrings;
            var7 = var2.guildId;
            var2 = 5;
            var2 = var6[var2];
            var6 = var4.bind(var5)(var2);
            var4 = var6.isNativeMessageEligibleForEnhancedRoleColors;
            var2 = var15.id;
            var20 = var4.bind(var6)(var7, var2, var18);
            var2 = {};
            var4 = 1;
            if(!(!(var10 > var4))) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 6;
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
            if(!(var22 === var18)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var21 = var16;
case 8:
            var9['linkColor'] = var21;
            var9['roleColor'] = var16;
            var9['roleColors'] = var19;
            var21 = 'dot';
            var21 = var21 === var18;
            if(!var21) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var21 = var17 != var16;
case 10:
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
            var9 = 7;
            var9 = var22[var9];
            var21 = var21.bind(var5)(var9);
            var9 = var21.getTierName;
            var9 = var9.bind(var21)(var13);
            var4['newTierName'] = var9;
            var4 = var7.bind(var8)(var6, var4);
            _fun0001_ip = 12; continue _fun0001;
case 6:
            var7 = _closure1_slot0;
            var21 = _closure1_slot2;
            var6 = 6;
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
            if(!(var21 === var18)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var15 = var16;
case 13:
            var12['linkColor'] = var15;
            var12['roleColor'] = var16;
            var15 = null;
            if(!var20) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var15 = var19;
case 15:
            var12['roleColors'] = var15;
            var15 = 'dot';
            var15 = var15 === var18;
            if(!var15) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var15 = var17 != var16;
case 17:
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
            var11 = 7;
            var11 = var14[var11];
            var12 = var12.bind(var5)(var11);
            var11 = var12.getTierName;
            var11 = var11.bind(var12)(var13);
            var6['newTierName'] = var11;
            var6['numSubscriptions'] = var10;
            var4 = var8.bind(var9)(var7, var6);
case 12:
            var2['content'] = var4;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 8;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var24 = var4.bind(var5)(var3);
            var25 = var2;
            var4 = copyDataProperties(var25, var24);
            return var2;
case 4:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.createUserPremiumGuildSubscriptionSystemMessage;
            var2 = var2.bind(var4)(var3);
            return var2;
case 2:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 2;
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