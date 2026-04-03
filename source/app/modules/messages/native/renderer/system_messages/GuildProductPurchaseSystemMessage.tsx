// app/modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx
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
    var4 = var4.MessageTypes;
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createGuildProductPurchaseSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = {};
            var20 = var5;
            var19 = var2;
            var1 = copyDataProperties(var20, var19);
            var4 = _closure1_slot3;
            var20 = var2.message;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var21 = var3;
            var1 = new var21[var4](var20, var19);
            var3 = var1 instanceof Object ? var1 : var3;
            var1 = 'message';
            var5[0] = var3;
            var3 = var5.message;
            var1 = _closure1_slot5;
            var1 = var1.ROLE_SUBSCRIPTION_PURCHASE;
            var3['type'] = var1;
            var1 = var5.message;
            var3 = var1.purchaseNotification;
            var1 = null;
            var7 = var1 == var3;
            var4 = undefined;
            var13 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var3.guild_product_purchase;
            var7 = var1 == var3;
            var13 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var13 = var3.product_name;
case 2:
            if(!(var1 != var13)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var17 = var5.message;
            var16 = var2.roleStyle;
            var12 = var17.author;
            var7 = _closure1_slot4;
            var3 = var7.getChannel;
            var2 = var17.getChannelId;
            var2 = var2.bind(var17)();
            var3 = var3.bind(var7)(var2);
            var2 = var1 == var3;
            var14 = undefined;
            if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var3.getGuildId;
            var14 = var2.bind(var3)();
case 7:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var8 = var3.bind(var4)(var2);
            var2 = var8.getMessageAuthor;
            var2 = var2.bind(var8)(var17);
            var15 = var2.guildMemberAvatar;
            var2 = 4;
            var2 = var7[var2];
            var8 = var3.bind(var4)(var2);
            var2 = var8.getMessageAuthorWithProcessedColor;
            var8 = var2.bind(var8)(var17);
            var2 = 5;
            var2 = var7[var2];
            var7 = var3.bind(var4)(var2);
            var3 = var7.ensureAvatarSource;
            if(!(var1 != var15)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(!(var1 == var14)) { _fun0001_ip = 11; continue _fun0001 }
case 9:
            var2 = var12.getAvatarSource;
            var2 = var2.bind(var12)(var4);
            _fun0001_ip = 12; continue _fun0001;
case 11:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 6;
            var9 = var11[var9];
            var11 = var10.bind(var4)(var9);
            var10 = var11.getGuildMemberAvatarSource;
            var9 = {};
            var18 = var12.id;
            var9['userId'] = var18;
            var9['avatar'] = var15;
            var9['guildId'] = var14;
            var2 = var10.bind(var11)(var9, var12);
case 12:
            var3 = var3.bind(var7)(var2);
            var2 = {};
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var9 = 7;
            var9 = var7[var9];
            var12 = var10.bind(var4)(var9);
            var11 = var12.getGuildProductPurchaseSystemMessageContentMobile;
            var9 = {};
            var14 = var8.nick;
            var9['username'] = var14;
            var6 = _closure1_slot1;
            var14 = 8;
            var14 = var7[var14];
            var15 = var6.bind(var4)(var14);
            var14 = {};
            var14['message'] = var17;
            var14['author'] = var8;
            var14['roleStyle'] = var16;
            var14 = var15.bind(var4)(var14);
            var9['usernameOnClickHandler'] = var14;
            var9['productName'] = var13;
            var9 = var11.bind(var12)(var9);
            var2['content'] = var9;
            var9 = 0;
            var2['totalMonthsSubscribed'] = var9;
            var8 = var8.nick;
            var2['username'] = var8;
            var3 = var3.uri;
            var2['avatarURL'] = var3;
            var3 = 9;
            var8 = var7[var3];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var7[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.s2N5HS;
            var3 = var8.bind(var9)(var3);
            var2['welcomeLabel'] = var3;
            var3 = 10;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var19 = var3.bind(var4)(var5);
            var20 = var2;
            var3 = copyDataProperties(var20, var19);
            return var2;
case 5:
            return var1;
        }
    };
    var3['createGuildProductPurchaseSystemMessage'] = var2;
    return var1;
})();