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
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createRoleSubscriptionPurchaseSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var6 = var5.message;
            var11 = var6.roleSubscriptionData;
            var1 = null;
            if(!(var1 != var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var6.author;
            var8 = _closure1_slot3;
            var7 = var8.getChannel;
            var4 = var6.getChannelId;
            var4 = var4.bind(var6)();
            var12 = var7.bind(var8)(var4);
            var8 = var1 == var12;
            var4 = undefined;
            var7 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var12.getGuildId;
            var7 = var8.bind(var12)();
case 4:
            var9 = _closure1_slot4;
            var8 = var9.getGuild;
            var8 = var8.bind(var9)(var7);
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 3;
            var9 = var13[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.getMessageAuthor;
            var9 = var9.bind(var10)(var6);
            var10 = var9.nick;
            var17 = var9.guildMemberAvatar;
            var9 = var1 != var7;
            var18 = var7;
            var7 = undefined;
            if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var1 != var12;
            var7 = undefined;
            if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var13 = var1 != var8;
            if(!var13) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var9 = var8.systemChannelFlags;
            var8 = _closure1_slot5;
            var8 = var8.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES;
            var8 = var9 & var8;
            var13 = !var8;
case 9:
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 4;
            var8 = var14[var8];
            var9 = var9.bind(var4)(var8);
            var8 = var9.computeIsStickerReplyEnabled;
            var24 = var9;
            var23 = var18;
            var22 = var12;
            var21 = var6;
            var20 = var13;
            var8 = var24[var8](var23, var22, var21, var20, var19);
            var7 = undefined;
            if(!var8) { _fun0001_ip = 6; continue _fun0001 }
case 11:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 5;
            var8 = var15[var8];
            var13 = var14.bind(var4)(var8);
            var9 = var13.transformSticker;
            var8 = 6;
            var8 = var15[var8];
            var15 = var14.bind(var4)(var8);
            var14 = var15.pickRoleSubscriptionPurchaseSticker;
            var8 = var6.id;
            var8 = var14.bind(var15)(var8);
            var7 = var9.bind(var13)(var8);
case 6:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 7;
            var8 = var13[var8];
            var13 = var9.bind(var4)(var8);
            var9 = var13.ensureAvatarSource;
            if(!(var1 != var17)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            if(!(var1 == var18)) { _fun0001_ip = 14; continue _fun0001 }
case 12:
            var8 = var2.getAvatarSource;
            var8 = var8.bind(var2)(var4);
            _fun0001_ip = 15; continue _fun0001;
case 14:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 8;
            var14 = var16[var14];
            var16 = var15.bind(var4)(var14);
            var15 = var16.getGuildMemberAvatarSource;
            var14 = {};
            var19 = var2.id;
            var14['userId'] = var19;
            var14['avatar'] = var17;
            var14['guildId'] = var18;
            var8 = var15.bind(var16)(var14, var2);
case 15:
            var9 = var9.bind(var13)(var8);
            var15 = {};
            var8 = 'bindOpenRoleSubscriptionOverview';
            var15['action'] = var8;
            var15['guildId'] = var18;
            var8 = var6.id;
            var15['messageId'] = var8;
            var13 = var1 == var12;
            var8 = undefined;
            if(var13) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = var12.id;
case 16:
            var15['channelId'] = var8;
            var12 = var6.roleSubscriptionData;
            var13 = var1 == var12;
            var8 = undefined;
            if(var13) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var8 = var12.role_subscription_listing_id;
case 18:
            var15['roleSubscriptionListingId'] = var8;
            var16 = {};
            var8 = 'bindUserMenu';
            var16['action'] = var8;
            var2 = var2.id;
            var16['userId'] = var2;
            var2 = var6.channel_id;
            var16['messageChannelId'] = var2;
            var2 = {};
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 6;
            var12 = var12[var8];
            var14 = var13.bind(var4)(var12);
            var13 = var14.getRoleSubscriptionPurchaseSystemMessageContentMobile;
            var12 = {};
            var12['username'] = var10;
            var19 = var1 != var18;
            var17 = undefined;
            if(!var19) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var17 = var18;
case 20:
            var12['guildId'] = var17;
            var12['usernameOnClickHandler'] = var16;
            var12['roleSubscriptionOnClickHandler'] = var15;
            var12['roleSubscriptionData'] = var11;
            var12 = var13.bind(var14)(var12);
            var2['content'] = var12;
            var11 = var11.total_months_subscribed;
            var2['totalMonthsSubscribed'] = var11;
            var2['username'] = var10;
            var9 = var9.uri;
            var2['avatarURL'] = var9;
            var2['sticker'] = var7;
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = var7[var8];
            var11 = var10.bind(var4)(var8);
            var9 = var11.getRoleSubscriptionPurchaseStickerCTA;
            var8 = var6.id;
            var6 = false;
            var6 = var9.bind(var11)(var8, var6);
            var2['stickerLabel'] = var6;
            var6 = 9;
            var8 = var7[var6];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var6 = var7[var6];
            var6 = var10.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.piPHvb;
            var6 = var8.bind(var9)(var6);
            var2['welcomeLabel'] = var6;
            var6 = _closure1_slot1;
            var3 = 10;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var22 = var3.bind(var4)(var5);
            var23 = var2;
            var3 = copyDataProperties(var23, var22);
            return var2;
case 2:
            return var1;
        }
    };
    var3['createRoleSubscriptionPurchaseSystemMessage'] = var2;
    return var1;
})();