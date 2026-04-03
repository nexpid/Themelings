// app/modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx
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
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SystemChannelFlags;
    var _closure1_slot5 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createRoleSubscriptionPurchaseSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = var5.message;
            var20 = var5.roleStyle;
            var13 = var3.roleSubscriptionData;
            var1 = null;
            if(!(var1 != var13)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var17 = var3.author;
            var6 = _closure1_slot3;
            var4 = var6.getChannel;
            var2 = var3.getChannelId;
            var2 = var2.bind(var3)();
            var6 = var4.bind(var6)(var2);
            var2 = var1 == var6;
            var4 = undefined;
            var7 = undefined;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var6.getGuildId;
            var7 = var2.bind(var6)();
case 4:
            var8 = _closure1_slot4;
            var2 = var8.getGuild;
            var2 = var2.bind(var8)(var7);
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 3;
            var8 = var11[var8];
            var12 = var10.bind(var4)(var8);
            var8 = var12.getMessageAuthor;
            var8 = var8.bind(var12)(var3);
            var18 = var8.guildMemberAvatar;
            var8 = 4;
            var8 = var11[var8];
            var10 = var10.bind(var4)(var8);
            var8 = var10.getMessageAuthorWithProcessedColor;
            var12 = var8.bind(var10)(var3);
            var8 = var1 != var7;
            var10 = undefined;
            if(!var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var1 != var6;
            var10 = undefined;
            if(!var8) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var11 = var1 != var2;
            if(!var11) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var8 = var2.systemChannelFlags;
            var2 = _closure1_slot5;
            var2 = var2.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES;
            var2 = var8 & var2;
            var11 = !var2;
case 9:
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 5;
            var2 = var14[var2];
            var8 = var8.bind(var4)(var2);
            var2 = var8.computeIsStickerReplyEnabled;
            var26 = var8;
            var25 = var7;
            var24 = var6;
            var23 = var3;
            var22 = var11;
            var2 = var26[var2](var25, var24, var23, var22, var21);
            var10 = undefined;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 11:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 6;
            var2 = var15[var2];
            var11 = var14.bind(var4)(var2);
            var8 = var11.transformSticker;
            var2 = 7;
            var2 = var15[var2];
            var15 = var14.bind(var4)(var2);
            var14 = var15.pickRoleSubscriptionPurchaseSticker;
            var2 = var3.id;
            var2 = var14.bind(var15)(var2);
            var10 = var8.bind(var11)(var2);
case 6:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 8;
            var2 = var11[var2];
            var11 = var8.bind(var4)(var2);
            var8 = var11.ensureAvatarSource;
            if(!(var1 != var18)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            if(!(var1 == var7)) { _fun0001_ip = 14; continue _fun0001 }
case 12:
            var2 = var17.getAvatarSource;
            var2 = var2.bind(var17)(var4);
            _fun0001_ip = 15; continue _fun0001;
case 14:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 9;
            var14 = var16[var14];
            var16 = var15.bind(var4)(var14);
            var15 = var16.getGuildMemberAvatarSource;
            var14 = {};
            var19 = var17.id;
            var14['userId'] = var19;
            var14['avatar'] = var18;
            var14['guildId'] = var7;
            var2 = var15.bind(var16)(var14, var17);
case 15:
            var11 = var8.bind(var11)(var2);
            var17 = {};
            var2 = 'bindOpenRoleSubscriptionOverview';
            var17['action'] = var2;
            var17['guildId'] = var7;
            var2 = var3.id;
            var17['messageId'] = var2;
            var8 = var1 == var6;
            var2 = undefined;
            if(var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var6.id;
case 16:
            var17['channelId'] = var2;
            var6 = var3.roleSubscriptionData;
            var8 = var1 == var6;
            var2 = undefined;
            if(var8) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = var6.role_subscription_listing_id;
case 18:
            var17['roleSubscriptionListingId'] = var2;
            var2 = {};
            var14 = _closure1_slot0;
            var6 = _closure1_slot2;
            var8 = 7;
            var6 = var6[var8];
            var16 = var14.bind(var4)(var6);
            var15 = var16.getRoleSubscriptionPurchaseSystemMessageContentMobile;
            var14 = {};
            var6 = var12.nick;
            var14['username'] = var6;
            var18 = var1 != var7;
            var6 = undefined;
            if(!var18) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var6 = var7;
case 20:
            var14['guildId'] = var6;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var18 = 10;
            var18 = var7[var18];
            var19 = var6.bind(var4)(var18);
            var18 = {};
            var18['message'] = var3;
            var18['author'] = var12;
            var18['roleStyle'] = var20;
            var18 = var19.bind(var4)(var18);
            var14['usernameOnClickHandler'] = var18;
            var14['roleSubscriptionOnClickHandler'] = var17;
            var14['roleSubscriptionData'] = var13;
            var14 = var15.bind(var16)(var14);
            var2['content'] = var14;
            var13 = var13.total_months_subscribed;
            var2['totalMonthsSubscribed'] = var13;
            var12 = var12.nick;
            var2['username'] = var12;
            var11 = var11.uri;
            var2['avatarURL'] = var11;
            var2['sticker'] = var10;
            var10 = _closure1_slot0;
            var8 = var7[var8];
            var11 = var10.bind(var4)(var8);
            var9 = var11.getRoleSubscriptionPurchaseStickerCTA;
            var8 = var3.id;
            var3 = false;
            var3 = var9.bind(var11)(var8, var3);
            var2['stickerLabel'] = var3;
            var3 = 11;
            var8 = var7[var3];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var7[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.piPHvY;
            var3 = var8.bind(var9)(var3);
            var2['welcomeLabel'] = var3;
            var3 = 12;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var24 = var3.bind(var4)(var5);
            var25 = var2;
            var3 = copyDataProperties(var25, var24);
            return var2;
case 2:
            return var1;
        }
    };
    var3['createRoleSubscriptionPurchaseSystemMessage'] = var2;
    return var1;
})();