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
            var7 = var3.message;
            var6 = var3.roleStyle;
            var5 = _closure1_slot3;
            var4 = var5.getChannel;
            var2 = var7.getChannelId;
            var2 = var2.bind(var7)();
            var9 = var4.bind(var5)(var2);
            var2 = null;
            if(!(var2 != var9)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = _closure1_slot4;
            var5 = var8.getGuild;
            var4 = var9.getGuildId;
            var4 = var4.bind(var9)();
            var11 = var5.bind(var8)(var4);
            if(!(var2 != var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 3;
            var2 = var8[var2];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var10 = var2.bind(var5)(var7);
            var9 = _closure1_slot0;
            var2 = 4;
            var2 = var8[var2];
            var9 = var9.bind(var5)(var2);
            var2 = var9.getMessageAuthorWithProcessedColor;
            var16 = var2.bind(var9)(var7);
            var2 = 5;
            var2 = var8[var2];
            var4 = var4.bind(var5)(var2);
            var2 = {};
            var2['message'] = var7;
            var2['author'] = var16;
            var2['roleStyle'] = var6;
            var15 = var4.bind(var5)(var2);
            var2 = {};
            var4 = 1;
            if(!(!(var10 > var4))) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 6;
            var6 = var14[var4];
            var6 = var12.bind(var5)(var6);
            var8 = var6.intl;
            var7 = var8.formatToParts;
            var4 = var14[var4];
            var4 = var12.bind(var5)(var4);
            var4 = var4.t;
            var6 = var4.oAYAP7;
            var4 = {};
            var9 = var16.nick;
            var4['username'] = var9;
            var4['usernameOnClick'] = var15;
            var9 = var11.name;
            var4['guildName'] = var9;
            var9 = 7;
            var9 = var14[var9];
            var12 = var12.bind(var5)(var9);
            var9 = var12.getTierName;
            var9 = var9.bind(var12)(var13);
            var4['newTierName'] = var9;
            var4 = var7.bind(var8)(var6, var4);
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 6;
            var7 = var14[var6];
            var7 = var12.bind(var5)(var7);
            var9 = var7.intl;
            var8 = var9.formatToParts;
            var6 = var14[var6];
            var6 = var12.bind(var5)(var6);
            var6 = var6.t;
            var7 = var6.GjNvr7;
            var6 = {};
            var16 = var16.nick;
            var6['username'] = var16;
            var6['usernameOnClick'] = var15;
            var11 = var11.name;
            var6['guildName'] = var11;
            var11 = 7;
            var11 = var14[var11];
            var12 = var12.bind(var5)(var11);
            var11 = var12.getTierName;
            var11 = var11.bind(var12)(var13);
            var6['newTierName'] = var11;
            var6['numSubscriptions'] = var10;
            var4 = var8.bind(var9)(var7, var6);
case 8:
            var2['content'] = var4;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 8;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var17 = var4.bind(var5)(var3);
            var18 = var2;
            var4 = copyDataProperties(var18, var17);
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