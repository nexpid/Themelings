// app/modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function identityHook(arg1) {
        var1 = arg1;
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function getRoleSubscriptionPurchaseContentCommonData(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg2;
            var3 = _closure1_slot3;
            var2 = var3.getGuild;
            var1 = arg1;
            var7 = var2.bind(var3)(var1);
            var2 = null;
            var5 = var2 == var4;
            var1 = undefined;
            if(var5) { _fun0001_ip = 40; continue _fun0001 }
 34:
            var1 = var4.total_months_subscribed;
 40:
            var8 = var2 != var1;
            var6 = 0;
            var5 = 0;
            if(!var8) { _fun0001_ip = 54; continue _fun0001 }
 51:
            var5 = var1;
 54:
            var1 = {};
            var1['guild'] = var7;
            var1['totalMonthsSubscribed'] = var5;
            var5 = var5 > var6;
            var1['showWithDuration'] = var5;
            var5 = var2 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 91; continue _fun0001 }
 83:
            var3 = var4.is_renewal;
 91:
            var2 = var2 != var3;
            if(!var2) { _fun0001_ip = 101; continue _fun0001 }
 98:
            var2 = var3;
 101:
            var1['isRenewal'] = var2;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function getRoleSubscriptionPurchaseSystemMessageContent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var8 = var1.username;
            var6 = var1.usernameOnClickHandler;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0002_ip = 27; continue _fun0002 }
 20:
            var6 = _closure1_slot10;
 27:
            var7 = var1.roleSubscriptionOnClickHandler;
            if(!(var7 === var4)) { _fun0002_ip = 44; continue _fun0002 }
 37:
            var7 = _closure1_slot9;
 44:
            var2 = var1.guildId;
            var5 = var1.roleSubscriptionData;
            var1 = _closure1_slot11;
            var1 = var1.bind(var4)(var2, var5);
            var9 = var1.guild;
            var3 = var1.totalMonthsSubscribed;
            var2 = var1.showWithDuration;
            var10 = var1.isRenewal;
            var1 = {};
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 5;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            if(var2) { _fun0002_ip = 144; continue _fun0002 }
 121:
            if(var10) { _fun0002_ip = 134; continue _fun0002 }
 124:
            var2 = var11.mYjFFx;
            _fun0002_ip = 142; continue _fun0002;
 134:
            var2 = var11.mPTTdn;
 142:
            _fun0002_ip = 168; continue _fun0002;
 144:
            if(var10) { _fun0002_ip = 157; continue _fun0002 }
 147:
            var10 = var11.eCgb2d;
            _fun0002_ip = 165; continue _fun0002;
 157:
            var10 = var11.Iy66Mz;
 165:
            var2 = var10;
 168:
            var1['content'] = var2;
            var2 = {};
            var2['username'] = var8;
            var2['usernameHook'] = var6;
            var6 = null;
            var10 = var6 == var9;
            var8 = undefined;
            if(var10) { _fun0002_ip = 199; continue _fun0002 }
 194:
            var8 = var9.name;
 199:
            var2['guildName'] = var8;
            var2['handleGuildNameClick'] = var7;
            var6 = var6 == var5;
            var4 = undefined;
            if(var6) { _fun0002_ip = 226; continue _fun0002 }
 220:
            var4 = var5.tier_name;
 226:
            var2['tierName'] = var4;
            var2['months'] = var3;
            var1['formatParams'] = var2;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.getJoinButtonLabels;
    var _closure1_slot5 = var7;
    var7 = var4.getRenewButtonLabels;
    var _closure1_slot6 = var7;
    var4 = var4.STICKERS;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot8 = var7;
    var4 = var4.NOOP;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function pickRoleSubscriptionPurchaseSticker(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot4;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = null;
            var4 = var2 == var3;
            var5 = undefined;
            var6 = undefined;
            if(var4) { _fun0003_ip = 34; continue _fun0003 }
 29:
            var6 = var3.id;
 34:
            var2 = var2 != var6;
            var3 = 0;
            if(!var2) { _fun0003_ip = 74; continue _fun0003 }
 43:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 4;
            var2 = var7[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.extractTimestamp;
            var3 = var2.bind(var4)(var6);
 74:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var5 = var4.bind(var5)(var2);
            var4 = var5.extractTimestamp;
            var2 = arg1;
            var2 = var4.bind(var5)(var2);
            var3 = var3 + var2;
            var2 = _closure1_slot7;
            var1 = var2.length;
            var1 = var3 % var1;
            var1 = var2[var1];
            return var1;
        }
    };
    var3['pickRoleSubscriptionPurchaseSticker'] = var4;
    var4 = function getRoleSubscriptionPurchaseStickerCTA(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg2;
            if(var2) { _fun0004_ip = 21; continue _fun0004 }
 9:
            var3 = _closure1_slot5;
            var2 = undefined;
            var2 = var3.bind(var2)();
            _fun0004_ip = 31; continue _fun0004;
 21:
            var4 = _closure1_slot6;
            var3 = undefined;
            var2 = var4.bind(var3)();
 31:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.extractTimestamp;
            var1 = arg1;
            var3 = var3.bind(var4)(var1);
            var1 = var2.length;
            var1 = var3 % var1;
            var1 = var2[var1];
            return var1;
        }
    };
    var3['getRoleSubscriptionPurchaseStickerCTA'] = var4;
    var4 = function getRoleSubscriptionPurchaseSystemMessageFormattedContent(arg1) {
        var1 = arg1;
        var8 = var1.username;
        var7 = var1.usernameOnClickHandler;
        var6 = var1.roleSubscriptionOnClickHandler;
        var5 = var1.guildId;
        var4 = var1.roleSubscriptionData;
        var3 = _closure1_slot12;
        var2 = {};
        var2['username'] = var8;
        var2['usernameOnClickHandler'] = var7;
        var2['roleSubscriptionOnClickHandler'] = var6;
        var2['guildId'] = var5;
        var2['roleSubscriptionData'] = var4;
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var4 = var2.content;
        var3 = var2.formatParams;
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 5;
        var1 = var6[var1];
        var1 = var2.bind(var5)(var1);
        var2 = var1.intl;
        var1 = var2.format;
        var1 = var1.bind(var2)(var4, var3);
        return var1;
    };
    var3['getRoleSubscriptionPurchaseSystemMessageFormattedContent'] = var4;
    var4 = function getRoleSubscriptionPurchaseSystemMessageAstFormattedContent(arg1) {
        var1 = arg1;
        var8 = var1.username;
        var7 = var1.usernameOnClickHandler;
        var6 = var1.roleSubscriptionOnClickHandler;
        var5 = var1.guildId;
        var4 = var1.roleSubscriptionData;
        var3 = _closure1_slot12;
        var2 = {};
        var2['username'] = var8;
        var2['usernameOnClickHandler'] = var7;
        var2['roleSubscriptionOnClickHandler'] = var6;
        var2['guildId'] = var5;
        var2['roleSubscriptionData'] = var4;
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var4 = var2.content;
        var3 = var2.formatParams;
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 5;
        var1 = var6[var1];
        var1 = var2.bind(var5)(var1);
        var2 = var1.intl;
        var1 = var2.formatToParts;
        var1 = var1.bind(var2)(var4, var3);
        return var1;
    };
    var3['getRoleSubscriptionPurchaseSystemMessageAstFormattedContent'] = var4;
    var4 = function getRoleSubscriptionPurchaseSystemMessageContentMobile(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var8 = var1.username;
            var7 = var1.usernameOnClickHandler;
            var9 = undefined;
            if(!(var7 === var9)) { _fun0005_ip = 27; continue _fun0005 }
 20:
            var7 = _closure1_slot10;
 27:
            var6 = var1.roleSubscriptionOnClickHandler;
            if(!(var6 === var9)) { _fun0005_ip = 44; continue _fun0005 }
 37:
            var6 = _closure1_slot9;
 44:
            var3 = var1.guildId;
            var10 = var1.roleSubscriptionData;
            var2 = _closure1_slot11;
            var2 = var2.bind(var9)(var3, var10);
            var13 = var2.guild;
            var5 = var2.totalMonthsSubscribed;
            var4 = var2.showWithDuration;
            var2 = var2.isRenewal;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 5;
            var11 = var11[var3];
            var11 = var12.bind(var9)(var11);
            var11 = var11.t;
            if(var4) { _fun0005_ip = 142; continue _fun0005 }
 119:
            if(var2) { _fun0005_ip = 132; continue _fun0005 }
 122:
            var4 = var11.6Z1E+/;
            _fun0005_ip = 140; continue _fun0005;
 132:
            var4 = var11.OxP1ND;
 140:
            _fun0005_ip = 166; continue _fun0005;
 142:
            if(var2) { _fun0005_ip = 155; continue _fun0005 }
 145:
            var2 = var11.+N9bxs;
            _fun0005_ip = 163; continue _fun0005;
 155:
            var2 = var11.OQ0OU1;
 163:
            var4 = var2;
 166:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var2.bind(var9)(var1);
            var3 = var1.intl;
            var2 = var3.formatToParts;
            var1 = {};
            var11 = null;
            var14 = var11 == var13;
            var12 = undefined;
            if(var14) { _fun0005_ip = 212; continue _fun0005 }
 207:
            var12 = var13.name;
 212:
            var1['guildName'] = var12;
            var11 = var11 == var10;
            var9 = undefined;
            if(var11) { _fun0005_ip = 232; continue _fun0005 }
 226:
            var9 = var10.tier_name;
 232:
            var1['tierName'] = var9;
            var1['username'] = var8;
            var1['usernameOnClick'] = var7;
            var1['roleSubscriptionOnClick'] = var6;
            var1['months'] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var3['getRoleSubscriptionPurchaseSystemMessageContentMobile'] = var4;
    var4 = function isEligibleForRoleSubscriptionPurchaseSystemMessageSettings(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.isCreatorMonetizationEnabledGuild;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isEligibleForRoleSubscriptionPurchaseSystemMessageSettings'] = var4;
    var4 = function trackRoleSubscriptionPurchaseMessageTierClick(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot8;
            var3 = var2.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED;
            var2 = {};
            var7 = arg1;
            var2['guild_id'] = var7;
            var7 = _closure1_slot4;
            var6 = var7.getCurrentUser;
            var7 = var6.bind(var7)();
            var6 = null;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0006_ip = 79; continue _fun0006 }
 74:
            var6 = var7.id;
 79:
            var2['user_id'] = var6;
            var6 = arg2;
            var2['channel_id'] = var6;
            var6 = arg3;
            var2['message_id'] = var6;
            var6 = arg4;
            var2['role_subscription_listing_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['trackRoleSubscriptionPurchaseMessageTierClick'] = var4;
    var2 = function getRoleSubscriptionPurchaseSystemMessageEventProperties(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var1 = {};
            var4 = var3.guild_id;
            var1['guild_id'] = var4;
            var5 = _closure1_slot4;
            var4 = var5.getCurrentUser;
            var5 = var4.bind(var5)();
            var4 = null;
            var6 = var4 == var5;
            var4 = undefined;
            if(var6) { _fun0007_ip = 49; continue _fun0007 }
 44:
            var4 = var5.id;
 49:
            var1['sender'] = var4;
            var4 = var2.author;
            var4 = var4.id;
            var1['target_user'] = var4;
            var3 = var3.id;
            var1['channel_id'] = var3;
            var2 = var2.id;
            var1['message_id'] = var2;
            return var1;
        }
    };
    var3['getRoleSubscriptionPurchaseSystemMessageEventProperties'] = var2;
    return var1;
})();