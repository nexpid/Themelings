// app/utils/EmojiUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot19;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot19;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var5 = function isCustomEmoji(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var3 = var2.type;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.EmojiTypes;
            var1 = var1.GUILD;
            var1 = var3 === var1;
            if(var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = var2.guildId;
            var2 = null;
            var1 = var2 != var3;
case 36:
            return var1;
        }
    };
    var _closure1_slot20 = var5;
    var9 = function isInternalEmojiForGuildId(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var2 = null;
            var1 = var2 != var3;
            if(!var1) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var1 = var2 != var4;
case 38:
            if(!var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var5 = _closure1_slot20;
            var2 = undefined;
            var5 = var5.bind(var2)(var3);
            var2 = !var5;
            if(!var5) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var3 = var3.guildId;
            var2 = var4 === var3;
case 42:
            var1 = var2;
case 40:
            return var1;
        }
    };
    var _closure1_slot21 = var9;
    var8 = function getEmojiUnavailableReason(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = var1.emoji;
            var14 = var1.channel;
            var12 = var1.guildId;
            var8 = undefined;
            if(!(var12 === var8)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var2 = null;
            var4 = var2 == var14;
            var2 = undefined;
            if(var4) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var4 = var14.getGuildId;
            var2 = var4.bind(var14)();
case 46:
            var12 = var2;
case 44:
            var6 = var1.intention;
            var10 = var1.forceIncludeExternalGuilds;
            var2 = _closure1_slot20;
            var2 = var2.bind(var8)(var3);
            if(var2) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var2 = null;
            return var2;
case 48:
            var2 = _closure1_slot13;
            var2 = var2.GUILD_PROFILE;
            if(!(var6 !== var2)) { _fun0006_ip = 50; continue _fun0006 }
case 11:
            var2 = null;
            var9 = var2 != var14;
            if(!var9) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var5 = _closure1_slot4;
            var4 = var14.type;
            var9 = var5.bind(var8)(var4);
case 51:
            var7 = var2 != var14;
            if(!var7) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var5 = _closure1_slot5;
            var4 = var14.type;
            var7 = var5.bind(var8)(var4);
case 53:
            var4 = _closure1_slot21;
            var4 = var4.bind(var8)(var3, var12);
            var13 = _closure1_slot6;
            var11 = var13.can;
            var5 = _closure1_slot8;
            var5 = var5.USE_EXTERNAL_EMOJIS;
            var5 = var11.bind(var13)(var5, var14);
            var11 = _closure1_slot13;
            var11 = var11.COMMUNITY_CONTENT;
            if(!(var6 !== var11)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var11 = _closure1_slot14;
            var11 = var11.bind(var8)(var6);
            if(var11) { _fun0006_ip = 57; continue _fun0006 }
case 22:
            var11 = _closure1_slot21;
            var11 = var11.bind(var8)(var3, var12);
            if(var11) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            if(var10) { _fun0006_ip = 57; continue _fun0006 }
case 59:
            var10 = _closure1_slot12;
            var10 = var10.DISALLOW_EXTERNAL;
            return var10;
case 57:
            if(var9) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            if(!var7) { _fun0006_ip = 62; continue _fun0006 }
case 60:
            if(var4) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            if(var5) { _fun0006_ip = 62; continue _fun0006 }
case 64:
            var5 = _closure1_slot12;
            var5 = var5.DISALLOW_EXTERNAL;
            return var5;
case 62:
            var5 = var3.id;
            if(!(var2 != var5)) { _fun0006_ip = 65; continue _fun0006 }
case 66:
            var5 = var3.available;
            if(var5) { _fun0006_ip = 65; continue _fun0006 }
case 67:
            var5 = _closure1_slot12;
            var5 = var5.GUILD_SUBSCRIPTION_UNAVAILABLE;
            return var5;
case 65:
            var7 = _closure1_slot7;
            var5 = var7.getCurrentUser;
            var10 = var5.bind(var7)();
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var11 = 7;
            var5 = var5[var11];
            var7 = var7.bind(var8)(var5);
            var5 = var7.canUseEmojisEverywhere;
            var5 = var5.bind(var7)(var10);
            if(var5) { _fun0006_ip = 68; continue _fun0006 }
case 69:
            if(var4) { _fun0006_ip = 68; continue _fun0006 }
case 70:
            var5 = _closure1_slot13;
            var5 = var5.STATUS;
            if(!(var6 !== var5)) { _fun0006_ip = 71; continue _fun0006 }
case 72:
            var5 = var3.managed;
            if(var5) { _fun0006_ip = 68; continue _fun0006 }
case 73:
            var5 = _closure1_slot12;
            var5 = var5.PREMIUM_LOCKED;
            return var5;
case 71:
            var5 = _closure1_slot12;
            var5 = var5.PREMIUM_LOCKED;
            return var5;
case 68:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var9 = 8;
            var5 = var5[var9];
            var7 = var6.bind(var8)(var5);
            var6 = var7.isUnusableRoleSubscriptionEmoji;
            var13 = var2 != var12;
            var5 = undefined;
            if(!var13) { _fun0006_ip = 74; continue _fun0006 }
case 75:
            var5 = var12;
case 74:
            var5 = var6.bind(var7)(var3, var5);
            if(var5) { _fun0006_ip = 76; continue _fun0006 }
case 77:
            var6 = var3.animated;
            var5 = null;
            if(!var6) { _fun0006_ip = 78; continue _fun0006 }
case 79:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var11];
            var7 = var7.bind(var8)(var6);
            var6 = var7.canUseAnimatedEmojis;
            var6 = var6.bind(var7)(var10);
            var5 = null;
            if(var6) { _fun0006_ip = 78; continue _fun0006 }
case 80:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var7 = var7.bind(var8)(var6);
            var6 = var7.isPurchasableRoleSubscriptionEmoji;
            var6 = var6.bind(var7)(var3);
            var5 = null;
            if(var6) { _fun0006_ip = 78; continue _fun0006 }
case 81:
            var6 = _closure1_slot12;
            var5 = var6.PREMIUM_LOCKED;
case 78:
            _fun0006_ip = 82; continue _fun0006;
case 76:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 9;
            var6 = var9[var6];
            var8 = var7.bind(var8)(var6);
            var7 = var8.shouldHideGuildPurchaseEntryPoints;
            var6 = var3.guildId;
            var6 = var7.bind(var8)(var6);
            var7 = _closure1_slot12;
            if(var6) { _fun0006_ip = 83; continue _fun0006 }
case 84:
            var6 = var7.ROLE_SUBSCRIPTION_LOCKED;
            _fun0006_ip = 85; continue _fun0006;
case 83:
            var6 = var7.ROLE_SUBSCRIPTION_UNAVAILABLE;
case 85:
            var5 = var6;
case 82:
            return var5;
case 55:
            if(!var4) { _fun0006_ip = 86; continue _fun0006 }
case 87:
            var4 = var3.guildId;
            if(!(var2 != var4)) { _fun0006_ip = 86; continue _fun0006 }
case 88:
            var3 = var3.available;
            var2 = null;
            if(var3) { _fun0006_ip = 89; continue _fun0006 }
case 86:
            var3 = _closure1_slot12;
            var2 = var3.DISALLOW_EXTERNAL;
case 89:
            return var2;
case 50:
            var1 = _closure1_slot12;
            var1 = var1.DISALLOW_CUSTOM;
            return var1;
        }
    };
    var _closure1_slot22 = var8;
    var1 = function _getEmojiColors() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 90; continue _fun0007 }
case 91:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 10;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getEmojiColors;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=50);
case 44:
                    return var2;
case 92:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 93; continue _fun0007 }
case 28:
                    return var2;
case 93:
                    return var2;
case 90:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot23 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var1;
    var4 = global;
    var13 = var4.Object;
    var12 = var13.defineProperty;
    var10 = {};
    var1 = true;
    var10['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var10);
    var16 = 0;
    var10 = var7[var16];
    var1 = undefined;
    var10 = var11.bind(var1)(var10);
    var _closure1_slot3 = var10;
    var15 = 1;
    var10 = var7[var15];
    var10 = var6.bind(var1)(var10);
    var12 = var10.isGuildTextChannelType;
    var _closure1_slot4 = var12;
    var10 = var10.isGuildVocalChannelType;
    var _closure1_slot5 = var10;
    var10 = 2;
    var10 = var7[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot6 = var10;
    var10 = 3;
    var10 = var7[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot7 = var10;
    var10 = 4;
    var10 = var7[var10];
    var10 = var6.bind(var1)(var10);
    var10 = var10.Permissions;
    var _closure1_slot8 = var10;
    var10 = 5;
    var10 = var7[var10];
    var12 = var6.bind(var1)(var10);
    var10 = var12.EMOJI_MAX_FILESIZE;
    var _closure1_slot9 = var10;
    var10 = var12.EMOJI_MAX_LENGTH;
    var _closure1_slot10 = var10;
    var10 = var12.EMOJI_RE;
    var _closure1_slot11 = var10;
    var10 = var12.EmojiDisabledReasons;
    var _closure1_slot12 = var10;
    var13 = var12.EmojiIntention;
    var _closure1_slot13 = var13;
    var12 = var12.isExternalEmojiAllowedForIntention;
    var _closure1_slot14 = var12;
    var14 = var4.Set;
    var13 = var10.PREMIUM_LOCKED;
    var12 = new Array(2);
    var12[0] = var13;
    var13 = var10.ROLE_SUBSCRIPTION_LOCKED;
    var12[1] = var13;
    var13 = var14.prototype;
    var13 = Object.create(var13, {constructor: {value: var14}});
    var20 = var13;
    var19 = var12;
    var12 = new var20[var14](var19, var18);
    var13 = var12 instanceof Object ? var12 : var13;
    var _closure1_slot15 = var13;
    var14 = var4.Set;
    var12 = new Array(2);
    var19 = var12;
    var18 = var13;
    var17 = 0;
    var13 = arraySpread(var19, var18, var17);
    var16 = var10.GUILD_SUBSCRIPTION_UNAVAILABLE;
    var12[var13] = var16;
    var15 = var13 + var15;
    var13 = var10.ROLE_SUBSCRIPTION_UNAVAILABLE;
    var12[var15] = var13;
    var13 = var14.prototype;
    var13 = Object.create(var13, {constructor: {value: var14}});
    var20 = var13;
    var19 = var12;
    var12 = new var20[var14](var19, var18);
    var12 = var12 instanceof Object ? var12 : var13;
    var _closure1_slot16 = var12;
    var12 = var4.Set;
    var13 = var10.DISALLOW_CUSTOM;
    var4 = new Array(4);
    var4[0] = var13;
    var13 = var10.DISALLOW_EXTERNAL;
    var4[1] = var13;
    var13 = var10.GUILD_SUBSCRIPTION_UNAVAILABLE;
    var4[2] = var13;
    var10 = var10.ONLY_GUILD_EMOJIS_ALLOWED;
    var4[3] = var10;
    var10 = var12.prototype;
    var10 = Object.create(var10, {constructor: {value: var12}});
    var20 = var10;
    var19 = var4;
    var4 = new var20[var12](var19, var18);
    var4 = var4 instanceof Object ? var4 : var10;
    var _closure1_slot17 = var4;
    var4 = {};
    var10 = function sanitizeEmojiName(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var4 = var5.replace;
            var3 = _closure1_slot11;
            var2 = '';
            var4 = var4.bind(var5)(var3, var2);
            var3 = var4.slice;
            var2 = _closure1_slot10;
            var1 = 0;
            var1 = var3.bind(var4)(var1, var2);
            var2 = var1.length;
            var5 = '_';
            var4 = 2;
            var3 = var1;
            var1 = var3;
            if(!(var2 < var4)) { _fun0008_ip = 94; continue _fun0008 }
case 95:
            var6 = var3 + var5;
            var2 = var6.length;
            var3 = var6;
            var1 = var3;
            if(var2 < var4) { _fun0008_ip = 95; continue _fun0008 }
case 94:
            return var1;
        }
    };
    var4['sanitizeEmojiName'] = var10;
    var10 = 10;
    var12 = var7[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.filterUnsupportedEmojis;
    var4['filterUnsupportedEmojis'] = var12;
    var10 = var7[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.getURL;
    var4['getURL'] = var10;
    var4['isInternalEmojiForGuildId'] = var9;
    var4['getEmojiUnavailableReason'] = var8;
    var4['isCustomEmoji'] = var5;
    var5 = function getEmojiUnavailableReasons(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var2 = var1.categoryEmojis;
            var16 = var1.channel;
            var15 = var1.guildId;
            var14 = var1.intention;
            var1 = global;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var24 = var3;
            var1 = new var24[var1](var23);
            var5 = var1 instanceof Object ? var1 : var3;
            var4 = new Array(0);
            var1 = _closure1_slot18;
            var12 = undefined;
            var11 = var1.bind(var12)(var2);
            var6 = var11.bind(var12)();
            var1 = var6.done;
            var7 = 0;
            var9 = null;
            var8 = var6;
            var6 = false;
            var3 = 0;
            var2 = false;
            if(var1) { _fun0009_ip = 96; continue _fun0009 }
case 97:
            var1 = var8.value;
            var18 = _closure1_slot22;
            var17 = {};
            var17['emoji'] = var1;
            var17['channel'] = var16;
            var17['guildId'] = var15;
            var17['intention'] = var14;
            var22 = var18.bind(var12)(var17);
            if(!(var9 == var22)) { _fun0009_ip = 98; continue _fun0009 }
case 99:
            var17 = var4.push;
            var17 = var17.bind(var4)(var1);
            var18 = var7;
            var17 = var6;
            _fun0009_ip = 100; continue _fun0009;
case 98:
            var20 = _closure1_slot17;
            var19 = var20.has;
            var19 = var19.bind(var20)(var22);
            if(var19) { _fun0009_ip = 101; continue _fun0009 }
case 102:
            var19 = var4.push;
            var19 = var19.bind(var4)(var1);
case 101:
            var20 = _closure1_slot16;
            var19 = var20.has;
            var19 = var19.bind(var20)(var22);
            var18 = var7;
            var17 = var6;
            if(!var19) { _fun0009_ip = 100; continue _fun0009 }
case 103:
            var19 = var1.id;
            if(!(var9 != var19)) { _fun0009_ip = 104; continue _fun0009 }
case 105:
            var19 = var5.add;
            var1 = var1.id;
            var1 = var19.bind(var5)(var1);
case 104:
            var19 = _closure1_slot15;
            var1 = var19.has;
            var20 = var1.bind(var19)(var22);
            var19 = var7;
            var1 = var6;
            if(!var20) { _fun0009_ip = 106; continue _fun0009 }
case 107:
            var20 = var6;
            if(var6) { _fun0009_ip = 108; continue _fun0009 }
case 109:
            var21 = _closure1_slot12;
            var21 = var21.PREMIUM_LOCKED;
            var20 = var22 !== var21;
case 108:
            if(var20) { _fun0009_ip = 110; continue _fun0009 }
case 111:
            var6 = true;
case 110:
            var19 = var7 + 1;
            var1 = var6;
case 106:
            var18 = var19;
            var17 = var1;
case 100:
            var19 = var11.bind(var12)();
            var1 = var19.done;
            var7 = var18;
            var6 = var17;
            var8 = var19;
            var3 = var7;
            var2 = var6;
            if(!var1) { _fun0009_ip = 97; continue _fun0009 }
case 96:
            var1 = {};
            var1['emojisDisabled'] = var5;
            var1['emojisUnfiltered'] = var4;
            var1['emojisPremiumLockedCount'] = var3;
            var1['emojiNitroLocked'] = var2;
            return var1;
        }
    };
    var4['getEmojiUnavailableReasons'] = var5;
    var5 = function isEmojiFiltered(arg1) {
        var4 = _closure1_slot22;
        var3 = undefined;
        var2 = arg1;
        var3 = var4.bind(var3)(var2);
        var2 = _closure1_slot17;
        var1 = var2.has;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var4['isEmojiFiltered'] = var5;
    var5 = function isEmojiPremiumLocked(arg1) {
        var4 = _closure1_slot22;
        var3 = undefined;
        var2 = arg1;
        var3 = var4.bind(var3)(var2);
        var2 = _closure1_slot15;
        var1 = var2.has;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var4['isEmojiPremiumLocked'] = var5;
    var5 = function isEmojiCategoryNitroLocked(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var2 = var1.categoryEmojis;
            var14 = var1.channel;
            var13 = var1.guildId;
            var12 = var1.intention;
            var1 = _closure1_slot18;
            var10 = undefined;
            var9 = var1.bind(var10)(var2);
            var5 = var9.bind(var10)();
            var4 = var5.done;
            var6 = false;
            var7 = var5;
            var5 = 0;
            var1 = false;
            var3 = 0;
            if(var4) { _fun0010_ip = 17; continue _fun0010 }
case 90:
            var15 = _closure1_slot22;
            var4 = {};
            var16 = var7.value;
            var4['emoji'] = var16;
            var4['channel'] = var14;
            var4['intention'] = var12;
            var4['guildId'] = var13;
            var17 = var15.bind(var10)(var4);
            var4 = _closure1_slot12;
            var4 = var4.PREMIUM_LOCKED;
            if(!(var17 !== var4)) { _fun0010_ip = 112; continue _fun0010 }
case 113:
            var4 = _closure1_slot12;
            var4 = var4.GUILD_SUBSCRIPTION_UNAVAILABLE;
            var16 = var6;
            var15 = var5;
            if(!(var17 === var4)) { _fun0010_ip = 114; continue _fun0010 }
case 115:
            var15 = var5 + 1;
            var16 = var6;
            _fun0010_ip = 114; continue _fun0010;
case 112:
            var15 = var5 + 1;
            var16 = true;
case 114:
            var17 = var9.bind(var10)();
            var4 = var17.done;
            var6 = var16;
            var5 = var15;
            var7 = var17;
            var1 = var6;
            var3 = var5;
            if(!var4) { _fun0010_ip = 90; continue _fun0010 }
case 17:
            if(!var1) { _fun0010_ip = 116; continue _fun0010 }
case 117:
            var2 = var2.length;
            var1 = var3 === var2;
case 116:
            return var1;
        }
    };
    var4['isEmojiCategoryNitroLocked'] = var5;
    var5 = function isEmojiFilteredOrLocked(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg1;
            var3 = this;
            var1 = var3.isEmojiFiltered;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0011_ip = 118; continue _fun0011 }
case 29:
            var2 = var3.isEmojiPremiumLocked;
            var1 = var2.bind(var3)(var4);
case 118:
            return var1;
        }
    };
    var4['isEmojiFilteredOrLocked'] = var5;
    var5 = function isEmojiDisabled(arg1) {
        var4 = _closure1_slot22;
        var3 = undefined;
        var2 = arg1;
        var3 = var4.bind(var3)(var2);
        var2 = _closure1_slot16;
        var1 = var2.has;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var4['isEmojiDisabled'] = var5;
    var5 = function isFileTooBig(arg1) {
        var1 = arg1;
        var2 = var1.size;
        var1 = 2097152;
        var1 = var2 > var1;
        return var1;
    };
    var4['isFileTooBig'] = var5;
    var5 = function isDataTooBig(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 11;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.dataUriFileSize;
        var2 = arg1;
        var2 = var3.bind(var4)(var2);
        var1 = _closure1_slot9;
        var1 = var2 > var1;
        return var1;
    };
    var4['isDataTooBig'] = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/EmojiUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function countEmoji(arg1, arg2) {
        var4 = arg1;
        var1 = arg2;
        var _closure2_slot0 = var1;
        var1 = 0;
        var _closure2_slot1 = var1;
        var _closure2_slot2 = var1;
        var _closure2_slot3 = var1;
        var _closure2_slot4 = var1;
        var _closure2_slot5 = var1;
        var _closure2_slot6 = var1;
        var3 = var4.forEach;
        var1 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = arg1;
                var3 = var1.id;
                var2 = null;
                if(!(var2 == var3)) { _fun0012_ip = 33; continue _fun0012 }
case 32:
                var2 = _closure2_slot1;
                var2 = var2 + 1;
                _closure2_slot1 = var2;
                _fun0012_ip = 119; continue _fun0012;
case 33:
                var3 = var1.type;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.EmojiTypes;
                var2 = var2.GUILD;
                if(!(var3 === var2)) { _fun0012_ip = 14; continue _fun0012 }
case 48:
                var4 = var1.guildId;
                var2 = _closure2_slot0;
                if(!(var4 !== var2)) { _fun0012_ip = 120; continue _fun0012 }
case 121:
                var2 = var1.managed;
                if(var2) { _fun0012_ip = 122; continue _fun0012 }
case 123:
                var2 = _closure2_slot3;
                var2 = var2 + 1;
                _closure2_slot3 = var2;
                _fun0012_ip = 14; continue _fun0012;
case 122:
                var2 = _closure2_slot5;
                var2 = var2 + 1;
                _closure2_slot5 = var2;
                _fun0012_ip = 14; continue _fun0012;
case 120:
                var2 = var1.managed;
                if(var2) { _fun0012_ip = 124; continue _fun0012 }
case 125:
                var2 = _closure2_slot2;
                var2 = var2 + 1;
                _closure2_slot2 = var2;
                _fun0012_ip = 14; continue _fun0012;
case 124:
                var2 = _closure2_slot4;
                var2 = var2 + 1;
                _closure2_slot4 = var2;
case 14:
                var1 = var1.animated;
                if(!var1) { _fun0012_ip = 119; continue _fun0012 }
case 117:
                var1 = _closure2_slot6;
                var1 = var1 + 1;
                _closure2_slot6 = var1;
case 119:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1);
        var1 = {};
        var3 = _closure2_slot1;
        var1['unicode'] = var3;
        var3 = _closure2_slot2;
        var1['custom'] = var3;
        var3 = _closure2_slot3;
        var1['customExternal'] = var3;
        var3 = _closure2_slot4;
        var1['managed'] = var3;
        var3 = _closure2_slot5;
        var1['managedExternal'] = var3;
        var2 = _closure2_slot6;
        var1['animated'] = var2;
        return var1;
    };
    var3['countEmoji'] = var4;
    var4 = function getEmojiColors() {
        var1 = undefined;
        var4 = _closure1_slot23;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getEmojiColors'] = var4;
    var4 = function getEmojiUrl(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var7 = arguments[1];
            var4 = undefined;
            if(!(var7 === var4)) { _fun0013_ip = 39; continue _fun0013 }
case 126:
            var7 = 32;
case 39:
            var8 = var1.id;
            var3 = var1.name;
            var6 = var1.animated;
            var5 = null;
            if(!(var5 == var8)) { _fun0013_ip = 127; continue _fun0013 }
case 128:
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getURL;
            var1 = var1.bind(var2)(var3);
            _fun0013_ip = 129; continue _fun0013;
case 127:
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 12;
            var2 = var9[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.getEmojiURL;
            var2 = {};
            var2['id'] = var8;
            var2['size'] = var7;
            var5 = var5 != var6;
            if(!var5) { _fun0013_ip = 130; continue _fun0013 }
case 51:
            var5 = var6;
case 130:
            var2['animated'] = var5;
            var1 = var3.bind(var4)(var2);
case 129:
            return var1;
        }
    };
    var3['getEmojiUrl'] = var4;
    var2 = function getAllEmojiNamesString(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var1 = 'allNamesString';
            var1 = var1 in var2;
            if(var1) { _fun0014_ip = 2; continue _fun0014 }
case 131:
            var4 = var2.name;
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var1 = ':';
            var1 = var3.bind(var1)(var4, var1);
            _fun0014_ip = 40; continue _fun0014;
case 2:
            var1 = var2.allNamesString;
case 40:
            return var1;
        }
    };
    var3['getAllEmojiNamesString'] = var2;
    return var1;
})();