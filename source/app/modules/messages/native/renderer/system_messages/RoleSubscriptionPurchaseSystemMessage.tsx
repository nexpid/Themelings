// app/modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function RoleSubscriptionPurchaseSystemMessageInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var14 = var2.row;
            var12 = var2.roleSubscriptionData;
            var _closure2_slot0 = var12;
            var15 = var2.guildId;
            var _closure2_slot1 = var15;
            var5 = var14.message;
            var _closure2_slot2 = var5;
            var13 = var5.author;
            var _closure2_slot3 = var13;
            var2 = var5.getChannelId;
            var16 = var2.bind(var5)();
            var _closure2_slot4 = var16;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 5;
            var2 = var9[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var2 = var6.useNullableMessageAuthor;
            var2 = var2.bind(var6)(var5);
            var11 = var2.nick;
            var _closure2_slot5 = var11;
            var19 = var2.guildMemberAvatar;
            var6 = _closure1_slot1;
            var2 = 6;
            var2 = var9[var2];
            var2 = var6.bind(var4)(var2);
            var10 = var2.bind(var4)(var5);
            var2 = 7;
            var2 = var9[var2];
            var8 = var6.bind(var4)(var2);
            var2 = {};
            var6 = 8;
            var17 = var9[var6];
            var20 = var3.bind(var4)(var17);
            var18 = var20.pickRoleSubscriptionPurchaseSticker;
            var17 = var5.id;
            var17 = var18.bind(var20)(var17);
            var2['sticker'] = var17;
            var2['isStickerReplyEnabled'] = var10;
            var8 = var8.bind(var4)(var2);
            var2 = 9;
            var2 = var9[var2];
            var9 = var3.bind(var4)(var2);
            var3 = var9.ensureAvatarSource;
            var2 = null;
            if(!(var2 != var19)) { _fun0001_ip = 221; continue _fun0001 }
 217:
            if(!(var2 == var15)) { _fun0001_ip = 234; continue _fun0001 }
 221:
            var2 = var13.getAvatarSource;
            var2 = var2.bind(var13)(var4);
            _fun0001_ip = 286; continue _fun0001;
 234:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 10;
            var10 = var18[var10];
            var18 = var17.bind(var4)(var10);
            var17 = var18.getGuildMemberAvatarSource;
            var10 = {};
            var20 = var13.id;
            var10['userId'] = var20;
            var10['guildMemberAvatar'] = var19;
            var10['guildId'] = var15;
            var2 = var17.bind(var18)(var10, var13);
 286:
            var10 = var3.bind(var9)(var2);
            var9 = _closure1_slot3;
            var3 = var9.useMemo;
            var2 = new Array(6);
            var2[0] = var16;
            var2[1] = var15;
            var15 = var5.id;
            var2[2] = var15;
            var2[3] = var11;
            var2[4] = var12;
            var13 = var13.id;
            var2[5] = var13;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getRoleSubscriptionPurchaseSystemMessageContentMobile;
                var1 = {};
                var5 = _closure2_slot5;
                var1['username'] = var5;
                var7 = _closure2_slot1;
                var1['guildId'] = var7;
                var5 = {};
                var6 = 'bindUserMenu';
                var5['action'] = var6;
                var6 = _closure2_slot3;
                var6 = var6.id;
                var5['userId'] = var6;
                var6 = _closure2_slot4;
                var5['messageChannelId'] = var6;
                var1['usernameOnClickHandler'] = var5;
                var5 = {};
                var8 = 'bindOpenRoleSubscriptionOverview';
                var5['action'] = var8;
                var5['guildId'] = var7;
                var7 = _closure2_slot2;
                var7 = var7.id;
                var5['messageId'] = var7;
                var5['channelId'] = var6;
                var4 = _closure2_slot0;
                var6 = var4.role_subscription_listing_id;
                var5['roleSubscriptionListingId'] = var6;
                var1['roleSubscriptionOnClickHandler'] = var5;
                var1['roleSubscriptionData'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 13;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['row'] = var14;
            var1['content'] = var13;
            var12 = var12.total_months_subscribed;
            var1['totalMonthsSubscribed'] = var12;
            var1['username'] = var11;
            var10 = var10.uri;
            var1['avatarURL'] = var10;
            var1['sticker'] = var8;
            var8 = _closure1_slot0;
            var6 = var9[var6];
            var10 = var8.bind(var4)(var6);
            var7 = var10.getRoleSubscriptionPurchaseStickerCTA;
            var6 = var5.id;
            var5 = false;
            var5 = var7.bind(var10)(var6, var5);
            var1['stickerLabel'] = var5;
            var5 = 11;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.piPHvb;
            var5 = var6.bind(var7)(var5);
            var1['welcomeLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
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
    var8 = var6[var1];
    var4 = metroImportAll;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.SystemChannelFlags;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function RoleSubscriptionPurchaseSystemMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var8 = var2.row;
            var3 = var8.message;
            var2 = var3.getChannelId;
            var10 = var2.bind(var3)();
            var _closure2_slot0 = var10;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 14;
            var4 = var5[var4];
            var5 = undefined;
            var9 = var6.bind(var5)(var4);
            var7 = var9.useStateFromStores;
            var4 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = new Array(1);
            var4[0] = var10;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var7.bind(var9)(var6, var1, var4);
            var1 = null;
            var6 = var1 == var7;
            var4 = undefined;
            if(var6) { _fun0002_ip = 115; continue _fun0002 }
 105:
            var6 = var7.getGuildId;
            var4 = var6.bind(var7)();
 115:
            var7 = var1 != var4;
            var6 = undefined;
            if(!var7) { _fun0002_ip = 127; continue _fun0002 }
 124:
            var6 = var4;
 127:
            var7 = var3.roleSubscriptionData;
            var3 = var1 == var7;
            var1 = null;
            if(var3) { _fun0002_ip = 172; continue _fun0002 }
 142:
            var4 = _closure1_slot7;
            var3 = _closure1_slot8;
            var2 = {};
            var2['row'] = var8;
            var2['roleSubscriptionData'] = var7;
            var2['guildId'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 172:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createRoleSubscriptionPurchaseSystemMessage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var6 = var5.message;
            var11 = var6.roleSubscriptionData;
            var1 = null;
            if(!(var1 != var11)) { _fun0003_ip = 732; continue _fun0003 }
 23:
            var2 = var6.author;
            var8 = _closure1_slot4;
            var7 = var8.getChannel;
            var4 = var6.getChannelId;
            var4 = var4.bind(var6)();
            var12 = var7.bind(var8)(var4);
            var8 = var1 == var12;
            var4 = undefined;
            var7 = undefined;
            if(var8) { _fun0003_ip = 77; continue _fun0003 }
 67:
            var8 = var12.getGuildId;
            var7 = var8.bind(var12)();
 77:
            var9 = _closure1_slot5;
            var8 = var9.getGuild;
            var8 = var8.bind(var9)(var7);
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 5;
            var9 = var13[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.getMessageAuthor;
            var9 = var9.bind(var10)(var6);
            var10 = var9.nick;
            var17 = var9.guildMemberAvatar;
            var9 = var1 != var7;
            var18 = var7;
            var7 = undefined;
            if(!var9) { _fun0003_ip = 300; continue _fun0003 }
 149:
            var9 = var1 != var12;
            var7 = undefined;
            if(!var9) { _fun0003_ip = 300; continue _fun0003 }
 161:
            var13 = var1 != var8;
            if(!var13) { _fun0003_ip = 191; continue _fun0003 }
 168:
            var9 = var8.systemChannelFlags;
            var8 = _closure1_slot6;
            var8 = var8.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES;
            var8 = var9 & var8;
            var13 = !var8;
 191:
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 6;
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
            if(!var8) { _fun0003_ip = 300; continue _fun0003 }
 241:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var8 = 7;
            var8 = var15[var8];
            var13 = var14.bind(var4)(var8);
            var9 = var13.transformSticker;
            var8 = 8;
            var8 = var15[var8];
            var15 = var14.bind(var4)(var8);
            var14 = var15.pickRoleSubscriptionPurchaseSticker;
            var8 = var6.id;
            var8 = var14.bind(var15)(var8);
            var7 = var9.bind(var13)(var8);
 300:
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 9;
            var8 = var13[var8];
            var13 = var9.bind(var4)(var8);
            var9 = var13.ensureAvatarSource;
            if(!(var1 != var17)) { _fun0003_ip = 334; continue _fun0003 }
 330:
            if(!(var1 == var18)) { _fun0003_ip = 347; continue _fun0003 }
 334:
            var8 = var2.getAvatarSource;
            var8 = var8.bind(var2)(var4);
            _fun0003_ip = 399; continue _fun0003;
 347:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var14 = 10;
            var14 = var16[var14];
            var16 = var15.bind(var4)(var14);
            var15 = var16.getGuildMemberAvatarSource;
            var14 = {};
            var19 = var2.id;
            var14['userId'] = var19;
            var14['guildMemberAvatar'] = var17;
            var14['guildId'] = var18;
            var8 = var15.bind(var16)(var14, var2);
 399:
            var9 = var9.bind(var13)(var8);
            var15 = {};
            var8 = 'bindOpenRoleSubscriptionOverview';
            var15['action'] = var8;
            var15['guildId'] = var18;
            var8 = var6.id;
            var15['messageId'] = var8;
            var13 = var1 == var12;
            var8 = undefined;
            if(var13) { _fun0003_ip = 443; continue _fun0003 }
 438:
            var8 = var12.id;
 443:
            var15['channelId'] = var8;
            var12 = var6.roleSubscriptionData;
            var13 = var1 == var12;
            var8 = undefined;
            if(var13) { _fun0003_ip = 468; continue _fun0003 }
 462:
            var8 = var12.role_subscription_listing_id;
 468:
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
            var8 = 8;
            var12 = var12[var8];
            var14 = var13.bind(var4)(var12);
            var13 = var14.getRoleSubscriptionPurchaseSystemMessageContentMobile;
            var12 = {};
            var12['username'] = var10;
            var19 = var1 != var18;
            var17 = undefined;
            if(!var19) { _fun0003_ip = 550; continue _fun0003 }
 547:
            var17 = var18;
 550:
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
            var6 = 11;
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
            var3 = 12;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var22 = var3.bind(var4)(var5);
            var23 = var2;
            var3 = copyDataProperties(var23, var22);
            return var2;
 732:
            return var1;
        }
    };
    var3['createRoleSubscriptionPurchaseSystemMessage'] = var2;
    return var1;
})();