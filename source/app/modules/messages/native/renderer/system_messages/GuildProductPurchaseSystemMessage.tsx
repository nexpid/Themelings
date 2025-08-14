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
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createGuildProductPurchaseSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = {};
            var19 = var5;
            var18 = var1;
            var2 = copyDataProperties(var19, var18);
            var4 = _closure1_slot3;
            var19 = var1.message;
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var20 = var2;
            var1 = new var20[var4](var19, var18);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = 'message';
            var5[var1] = var2;
            var2 = var5.message;
            var1 = _closure1_slot5;
            var1 = var1.ROLE_SUBSCRIPTION_PURCHASE;
            var2['type'] = var1;
            var1 = var5.message;
            var2 = var1.purchaseNotification;
            var1 = null;
            var6 = var1 == var2;
            var4 = undefined;
            var13 = undefined;
            if(var6) { _fun0001_ip = 122; continue _fun0001 }
 101:
            var2 = var2.guild_product_purchase;
            var6 = var1 == var2;
            var13 = undefined;
            if(var6) { _fun0001_ip = 122; continue _fun0001 }
 116:
            var13 = var2.product_name;
 122:
            if(!(var1 != var13)) { _fun0001_ip = 512; continue _fun0001 }
 129:
            var2 = var5.message;
            var7 = var2.author;
            var9 = _closure1_slot4;
            var8 = var9.getChannel;
            var6 = var2.getChannelId;
            var6 = var6.bind(var2)();
            var8 = var8.bind(var9)(var6);
            var6 = var1 == var8;
            var15 = undefined;
            if(var6) { _fun0001_ip = 183; continue _fun0001 }
 173:
            var6 = var8.getGuildId;
            var15 = var6.bind(var8)();
 183:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 3;
            var6 = var10[var6];
            var8 = var9.bind(var4)(var6);
            var6 = var8.getMessageAuthor;
            var6 = var6.bind(var8)(var2);
            var8 = var6.nick;
            var16 = var6.guildMemberAvatar;
            var6 = 4;
            var6 = var10[var6];
            var10 = var9.bind(var4)(var6);
            var9 = var10.ensureAvatarSource;
            if(!(var1 != var16)) { _fun0001_ip = 252; continue _fun0001 }
 248:
            if(!(var1 == var15)) { _fun0001_ip = 265; continue _fun0001 }
 252:
            var6 = var7.getAvatarSource;
            var6 = var6.bind(var7)(var4);
            _fun0001_ip = 317; continue _fun0001;
 265:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 5;
            var11 = var14[var11];
            var14 = var12.bind(var4)(var11);
            var12 = var14.getGuildMemberAvatarSource;
            var11 = {};
            var17 = var7.id;
            var11['userId'] = var17;
            var11['guildMemberAvatar'] = var16;
            var11['guildId'] = var15;
            var6 = var12.bind(var14)(var11, var7);
 317:
            var6 = var9.bind(var10)(var6);
            var14 = {};
            var9 = 'bindUserMenu';
            var14['action'] = var9;
            var7 = var7.id;
            var14['userId'] = var7;
            var2 = var2.channel_id;
            var14['messageChannelId'] = var2;
            var2 = {};
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var9 = 6;
            var9 = var7[var9];
            var12 = var10.bind(var4)(var9);
            var11 = var12.getGuildProductPurchaseSystemMessageContentMobile;
            var9 = {};
            var9['username'] = var8;
            var9['usernameOnClickHandler'] = var14;
            var9['productName'] = var13;
            var9 = var11.bind(var12)(var9);
            var2['content'] = var9;
            var9 = 0;
            var2['totalMonthsSubscribed'] = var9;
            var2['username'] = var8;
            var6 = var6.uri;
            var2['avatarURL'] = var6;
            var6 = 7;
            var8 = var7[var6];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var6 = var7[var6];
            var6 = var10.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.s2N5HR;
            var6 = var8.bind(var9)(var6);
            var2['welcomeLabel'] = var6;
            var6 = _closure1_slot1;
            var3 = 8;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var18 = var3.bind(var4)(var5);
            var19 = var2;
            var3 = copyDataProperties(var19, var18);
            return var2;
 512:
            return var1;
        }
    };
    var3['createGuildProductPurchaseSystemMessage'] = var2;
    return var1;
})();