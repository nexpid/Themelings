// app/modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function GuildProductPurchaseSystemMessageInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var10 = var2.row;
            var11 = var2.productName;
            var _closure2_slot0 = var11;
            var13 = var2.guildId;
            var6 = var10.message;
            var _closure2_slot1 = var6;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 5;
            var7 = var3[var4];
            var4 = undefined;
            var8 = var2.bind(var4)(var7);
            var7 = var8.useNullableMessageAuthor;
            var8 = var7.bind(var8)(var6);
            var7 = var8.nick;
            var _closure2_slot2 = var7;
            var14 = var8.guildMemberAvatar;
            var12 = var6.author;
            var _closure2_slot3 = var12;
            var9 = _closure1_slot3;
            var8 = var9.useMemo;
            var15 = var6.channel_id;
            var6 = new Array(4);
            var6[0] = var15;
            var6[1] = var7;
            var6[2] = var11;
            var11 = var12.id;
            var6[3] = var11;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getGuildProductPurchaseSystemMessageContentMobile;
                var1 = {};
                var5 = _closure2_slot2;
                var1['username'] = var5;
                var5 = {};
                var6 = 'bindUserMenu';
                var5['action'] = var6;
                var6 = _closure2_slot3;
                var6 = var6.id;
                var5['userId'] = var6;
                var6 = _closure2_slot1;
                var6 = var6.channel_id;
                var5['messageChannelId'] = var6;
                var1['usernameOnClickHandler'] = var5;
                var4 = _closure2_slot0;
                var1['productName'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var9)(var1, var6);
            var1 = 6;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.ensureAvatarSource;
            var1 = null;
            if(!(var1 != var14)) { _fun0001_ip = 177; continue _fun0001 }
 173:
            if(!(var1 == var13)) { _fun0001_ip = 190; continue _fun0001 }
 177:
            var1 = var12.getAvatarSource;
            var1 = var1.bind(var12)(var4);
            _fun0001_ip = 242; continue _fun0001;
 190:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 7;
            var6 = var11[var6];
            var11 = var9.bind(var4)(var6);
            var9 = var11.getGuildMemberAvatarSource;
            var6 = {};
            var15 = var12.id;
            var6['userId'] = var15;
            var6['guildMemberAvatar'] = var14;
            var6['guildId'] = var13;
            var1 = var9.bind(var11)(var6, var12);
 242:
            var6 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 11;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['row'] = var10;
            var1['content'] = var8;
            var8 = 0;
            var1['totalMonthsSubscribed'] = var8;
            var1['username'] = var7;
            var6 = var6.uri;
            var1['avatarURL'] = var6;
            var8 = _closure1_slot0;
            var5 = 9;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageTypes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function createGuildProductPurchaseSystemMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = {};
            var19 = var5;
            var18 = var1;
            var2 = copyDataProperties(var19, var18);
            var4 = _closure1_slot4;
            var19 = var1.message;
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var20 = var2;
            var1 = new var20[var4](var19, var18);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = 'message';
            var5[var1] = var2;
            var2 = var5.message;
            var1 = _closure1_slot6;
            var1 = var1.ROLE_SUBSCRIPTION_PURCHASE;
            var2['type'] = var1;
            var1 = var5.message;
            var2 = var1.purchaseNotification;
            var1 = null;
            var6 = var1 == var2;
            var4 = undefined;
            var13 = undefined;
            if(var6) { _fun0002_ip = 122; continue _fun0002 }
 101:
            var2 = var2.guild_product_purchase;
            var6 = var1 == var2;
            var13 = undefined;
            if(var6) { _fun0002_ip = 122; continue _fun0002 }
 116:
            var13 = var2.product_name;
 122:
            if(!(var1 != var13)) { _fun0002_ip = 512; continue _fun0002 }
 129:
            var2 = var5.message;
            var7 = var2.author;
            var9 = _closure1_slot5;
            var8 = var9.getChannel;
            var6 = var2.getChannelId;
            var6 = var6.bind(var2)();
            var8 = var8.bind(var9)(var6);
            var6 = var1 == var8;
            var15 = undefined;
            if(var6) { _fun0002_ip = 183; continue _fun0002 }
 173:
            var6 = var8.getGuildId;
            var15 = var6.bind(var8)();
 183:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 5;
            var6 = var10[var6];
            var8 = var9.bind(var4)(var6);
            var6 = var8.getMessageAuthor;
            var6 = var6.bind(var8)(var2);
            var8 = var6.nick;
            var16 = var6.guildMemberAvatar;
            var6 = 6;
            var6 = var10[var6];
            var10 = var9.bind(var4)(var6);
            var9 = var10.ensureAvatarSource;
            if(!(var1 != var16)) { _fun0002_ip = 252; continue _fun0002 }
 248:
            if(!(var1 == var15)) { _fun0002_ip = 265; continue _fun0002 }
 252:
            var6 = var7.getAvatarSource;
            var6 = var6.bind(var7)(var4);
            _fun0002_ip = 317; continue _fun0002;
 265:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 7;
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
            var9 = 8;
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
            var6 = 9;
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
            var3 = 10;
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
    var3['createGuildProductPurchaseSystemMessage'] = var4;
    var2 = function GuildProductPurchaseSystemMessage(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var11 = var2.row;
            var8 = {};
            var12 = var8;
            var2 = copyDataProperties(var12, var11);
            var4 = var8.message;
            var3 = _closure1_slot6;
            var3 = var3.ROLE_SUBSCRIPTION_PURCHASE;
            var4['type'] = var3;
            var4 = var8.message;
            var3 = var4.getChannelId;
            var9 = var3.bind(var4)();
            var _closure2_slot0 = var9;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 12;
            var3 = var5[var3];
            var5 = undefined;
            var7 = var4.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = new Array(1);
            var3[0] = var9;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var6.bind(var7)(var4, var1, var3);
            var1 = null;
            var4 = var1 == var6;
            var3 = undefined;
            if(var4) { _fun0003_ip = 145; continue _fun0003 }
 135:
            var4 = var6.getGuildId;
            var3 = var4.bind(var6)();
 145:
            var4 = var1 != var3;
            var6 = undefined;
            if(!var4) { _fun0003_ip = 157; continue _fun0003 }
 154:
            var6 = var3;
 157:
            var3 = var8.message;
            var3 = var3.purchaseNotification;
            var4 = var1 == var3;
            var7 = undefined;
            if(var4) { _fun0003_ip = 198; continue _fun0003 }
 177:
            var3 = var3.guild_product_purchase;
            var4 = var1 == var3;
            var7 = undefined;
            if(var4) { _fun0003_ip = 198; continue _fun0003 }
 192:
            var7 = var3.product_name;
 198:
            var3 = var1 == var7;
            var1 = null;
            if(var3) { _fun0003_ip = 237; continue _fun0003 }
 207:
            var4 = _closure1_slot7;
            var3 = _closure1_slot8;
            var2 = {};
            var2['row'] = var8;
            var2['productName'] = var7;
            var2['guildId'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 237:
            return var1;
        }
    };
    var3['GuildProductPurchaseSystemMessage'] = var2;
    return var1;
})();