// app/utils/EmojiUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var11 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot19;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot19;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
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
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
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
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var5 = function isCustomEmoji(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            if(var1) { _fun0004_ip = 63; continue _fun0004 }
 52:
            var3 = var2.guildId;
            var2 = null;
            var1 = var2 != var3;
 63:
            return var1;
        }
    };
    var _closure1_slot20 = var5;
    var9 = function isInternalEmojiForGuildId(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var4 = arg2;
            var2 = null;
            var1 = var2 != var3;
            if(!var1) { _fun0005_ip = 19; continue _fun0005 }
 15:
            var1 = var2 != var4;
 19:
            if(!var1) { _fun0005_ip = 54; continue _fun0005 }
 22:
            var5 = _closure1_slot20;
            var2 = undefined;
            var5 = var5.bind(var2)(var3);
            var2 = !var5;
            if(!var5) { _fun0005_ip = 51; continue _fun0005 }
 42:
            var3 = var3.guildId;
            var2 = var4 === var3;
 51:
            var1 = var2;
 54:
            return var1;
        }
    };
    var _closure1_slot21 = var9;
    var8 = function getEmojiUnavailableReason(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var3 = var1.emoji;
            var14 = var1.channel;
            var12 = var1.guildId;
            var8 = undefined;
            if(!(var12 === var8)) { _fun0006_ip = 49; continue _fun0006 }
 25:
            var2 = null;
            var4 = var2 == var14;
            var2 = undefined;
            if(var4) { _fun0006_ip = 46; continue _fun0006 }
 36:
            var4 = var14.getGuildId;
            var2 = var4.bind(var14)();
 46:
            var12 = var2;
 49:
            var6 = var1.intention;
            var10 = var1.forceIncludeExternalGuilds;
            var2 = _closure1_slot20;
            var2 = var2.bind(var8)(var3);
            if(var2) { _fun0006_ip = 80; continue _fun0006 }
 76:
            var2 = null;
            return var2;
 80:
            var2 = _closure1_slot13;
            var2 = var2.GUILD_PROFILE;
            if(!(var6 !== var2)) { _fun0006_ip = 618; continue _fun0006 }
 97:
            var2 = null;
            var9 = var2 != var14;
            if(!var9) { _fun0006_ip = 120; continue _fun0006 }
 106:
            var5 = _closure1_slot4;
            var4 = var14.type;
            var9 = var5.bind(var8)(var4);
 120:
            var7 = var2 != var14;
            if(!var7) { _fun0006_ip = 141; continue _fun0006 }
 127:
            var5 = _closure1_slot5;
            var4 = var14.type;
            var7 = var5.bind(var8)(var4);
 141:
            var4 = _closure1_slot21;
            var4 = var4.bind(var8)(var3, var12);
            var13 = _closure1_slot6;
            var11 = var13.can;
            var5 = _closure1_slot8;
            var5 = var5.USE_EXTERNAL_EMOJIS;
            var5 = var11.bind(var13)(var5, var14);
            var11 = _closure1_slot13;
            var11 = var11.COMMUNITY_CONTENT;
            if(!(var6 !== var11)) { _fun0006_ip = 583; continue _fun0006 }
 194:
            var11 = _closure1_slot14;
            var11 = var11.bind(var8)(var6);
            if(var11) { _fun0006_ip = 234; continue _fun0006 }
 206:
            var11 = _closure1_slot21;
            var11 = var11.bind(var8)(var3, var12);
            if(var11) { _fun0006_ip = 234; continue _fun0006 }
 219:
            if(var10) { _fun0006_ip = 234; continue _fun0006 }
 222:
            var10 = _closure1_slot12;
            var10 = var10.DISALLOW_EXTERNAL;
            return var10;
 234:
            if(var9) { _fun0006_ip = 240; continue _fun0006 }
 237:
            if(!var7) { _fun0006_ip = 258; continue _fun0006 }
 240:
            if(var4) { _fun0006_ip = 258; continue _fun0006 }
 243:
            if(var5) { _fun0006_ip = 258; continue _fun0006 }
 246:
            var5 = _closure1_slot12;
            var5 = var5.DISALLOW_EXTERNAL;
            return var5;
 258:
            var5 = var3.id;
            if(!(var2 != var5)) { _fun0006_ip = 288; continue _fun0006 }
 267:
            var5 = var3.available;
            if(var5) { _fun0006_ip = 288; continue _fun0006 }
 276:
            var5 = _closure1_slot12;
            var5 = var5.GUILD_SUBSCRIPTION_UNAVAILABLE;
            return var5;
 288:
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
            if(var5) { _fun0006_ip = 385; continue _fun0006 }
 335:
            if(var4) { _fun0006_ip = 385; continue _fun0006 }
 338:
            var5 = _closure1_slot13;
            var5 = var5.STATUS;
            if(!(var6 !== var5)) { _fun0006_ip = 373; continue _fun0006 }
 352:
            var5 = var3.managed;
            if(var5) { _fun0006_ip = 385; continue _fun0006 }
 361:
            var5 = _closure1_slot12;
            var5 = var5.PREMIUM_LOCKED;
            return var5;
 373:
            var5 = _closure1_slot12;
            var5 = var5.PREMIUM_LOCKED;
            return var5;
 385:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var9 = 8;
            var5 = var5[var9];
            var7 = var6.bind(var8)(var5);
            var6 = var7.isUnusableRoleSubscriptionEmoji;
            var13 = var2 != var12;
            var5 = undefined;
            if(!var13) { _fun0006_ip = 423; continue _fun0006 }
 420:
            var5 = var12;
 423:
            var5 = var6.bind(var7)(var3, var5);
            if(var5) { _fun0006_ip = 521; continue _fun0006 }
 432:
            var6 = var3.animated;
            var5 = null;
            if(!var6) { _fun0006_ip = 519; continue _fun0006 }
 443:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var11];
            var7 = var7.bind(var8)(var6);
            var6 = var7.canUseAnimatedEmojis;
            var6 = var6.bind(var7)(var10);
            var5 = null;
            if(var6) { _fun0006_ip = 519; continue _fun0006 }
 476:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var7 = var7.bind(var8)(var6);
            var6 = var7.isPurchasableRoleSubscriptionEmoji;
            var6 = var6.bind(var7)(var3);
            var5 = null;
            if(var6) { _fun0006_ip = 519; continue _fun0006 }
 509:
            var6 = _closure1_slot12;
            var5 = var6.PREMIUM_LOCKED;
 519:
            _fun0006_ip = 581; continue _fun0006;
 521:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 9;
            var6 = var9[var6];
            var8 = var7.bind(var8)(var6);
            var7 = var8.shouldHideGuildPurchaseEntryPoints;
            var6 = var3.guildId;
            var6 = var7.bind(var8)(var6);
            var7 = _closure1_slot12;
            if(var6) { _fun0006_ip = 572; continue _fun0006 }
 564:
            var6 = var7.ROLE_SUBSCRIPTION_LOCKED;
            _fun0006_ip = 578; continue _fun0006;
 572:
            var6 = var7.ROLE_SUBSCRIPTION_UNAVAILABLE;
 578:
            var5 = var6;
 581:
            return var5;
 583:
            if(!var4) { _fun0006_ip = 606; continue _fun0006 }
 586:
            var4 = var3.guildId;
            if(!(var2 != var4)) { _fun0006_ip = 606; continue _fun0006 }
 595:
            var3 = var3.available;
            var2 = null;
            if(var3) { _fun0006_ip = 616; continue _fun0006 }
 606:
            var3 = _closure1_slot12;
            var2 = var3.DISALLOW_EXTERNAL;
 616:
            return var2;
 618:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 62; continue _fun0007 }
 7:
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
 48:
                    return var2;
 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 59; continue _fun0007 }
 56:
                    return var2;
 59:
                    return var2;
 62:
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
 0:
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
            if(!(var2 < var4)) { _fun0008_ip = 83; continue _fun0008 }
 64:
            var6 = var3 + var5;
            var2 = var6.length;
            var3 = var6;
            var1 = var3;
            if(var2 < var4) { _fun0008_ip = 64; continue _fun0008 }
 83:
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
 0:
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
            if(var1) { _fun0009_ip = 322; continue _fun0009 }
 99:
            var1 = var8.value;
            var18 = _closure1_slot22;
            var17 = {};
            var17['emoji'] = var1;
            var17['channel'] = var16;
            var17['guildId'] = var15;
            var17['intention'] = var14;
            var22 = var18.bind(var12)(var17);
            if(!(var9 == var22)) { _fun0009_ip = 158; continue _fun0009 }
 137:
            var17 = var4.push;
            var17 = var17.bind(var4)(var1);
            var18 = var7;
            var17 = var6;
            _fun0009_ip = 292; continue _fun0009;
 158:
            var20 = _closure1_slot17;
            var19 = var20.has;
            var19 = var19.bind(var20)(var22);
            if(var19) { _fun0009_ip = 185; continue _fun0009 }
 175:
            var19 = var4.push;
            var19 = var19.bind(var4)(var1);
 185:
            var20 = _closure1_slot16;
            var19 = var20.has;
            var19 = var19.bind(var20)(var22);
            var18 = var7;
            var17 = var6;
            if(!var19) { _fun0009_ip = 292; continue _fun0009 }
 208:
            var19 = var1.id;
            if(!(var9 != var19)) { _fun0009_ip = 232; continue _fun0009 }
 217:
            var19 = var5.add;
            var1 = var1.id;
            var1 = var19.bind(var5)(var1);
 232:
            var19 = _closure1_slot15;
            var1 = var19.has;
            var20 = var1.bind(var19)(var22);
            var19 = var7;
            var1 = var6;
            if(!var20) { _fun0009_ip = 286; continue _fun0009 }
 255:
            var20 = var6;
            if(var6) { _fun0009_ip = 275; continue _fun0009 }
 261:
            var21 = _closure1_slot12;
            var21 = var21.PREMIUM_LOCKED;
            var20 = var22 !== var21;
 275:
            if(var20) { _fun0009_ip = 280; continue _fun0009 }
 278:
            var6 = true;
 280:
            var19 = var7 + 1;
            var1 = var6;
 286:
            var18 = var19;
            var17 = var1;
 292:
            var19 = var11.bind(var12)();
            var1 = var19.done;
            var7 = var18;
            var6 = var17;
            var8 = var19;
            var3 = var7;
            var2 = var6;
            if(!var1) { _fun0009_ip = 99; continue _fun0009 }
 322:
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
 0:
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
            if(var4) { _fun0010_ip = 170; continue _fun0010 }
 62:
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
            if(!(var17 !== var4)) { _fun0010_ip = 138; continue _fun0010 }
 110:
            var4 = _closure1_slot12;
            var4 = var4.GUILD_SUBSCRIPTION_UNAVAILABLE;
            var16 = var6;
            var15 = var5;
            if(!(var17 === var4)) { _fun0010_ip = 143; continue _fun0010 }
 130:
            var15 = var5 + 1;
            var16 = var6;
            _fun0010_ip = 143; continue _fun0010;
 138:
            var15 = var5 + 1;
            var16 = true;
 143:
            var17 = var9.bind(var10)();
            var4 = var17.done;
            var6 = var16;
            var5 = var15;
            var7 = var17;
            var1 = var6;
            var3 = var5;
            if(!var4) { _fun0010_ip = 62; continue _fun0010 }
 170:
            if(!var1) { _fun0010_ip = 182; continue _fun0010 }
 173:
            var2 = var2.length;
            var1 = var3 === var2;
 182:
            return var1;
        }
    };
    var4['isEmojiCategoryNitroLocked'] = var5;
    var5 = function isEmojiFilteredOrLocked(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = arg1;
            var3 = this;
            var1 = var3.isEmojiFiltered;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0011_ip = 31; continue _fun0011 }
 20:
            var2 = var3.isEmojiPremiumLocked;
            var1 = var2.bind(var3)(var4);
 31:
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
 0:
                var1 = arg1;
                var3 = var1.id;
                var2 = null;
                if(!(var2 == var3)) { _fun0012_ip = 33; continue _fun0012 }
 14:
                var2 = _closure2_slot1;
                var2 = var2 + 1;
                _closure2_slot1 = var2;
                _fun0012_ip = 186; continue _fun0012;
 33:
                var3 = var1.type;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.EmojiTypes;
                var2 = var2.GUILD;
                if(!(var3 === var2)) { _fun0012_ip = 163; continue _fun0012 }
 79:
                var4 = var1.guildId;
                var2 = _closure2_slot0;
                if(!(var4 !== var2)) { _fun0012_ip = 130; continue _fun0012 }
 95:
                var2 = var1.managed;
                if(var2) { _fun0012_ip = 117; continue _fun0012 }
 104:
                var2 = _closure2_slot3;
                var2 = var2 + 1;
                _closure2_slot3 = var2;
                _fun0012_ip = 163; continue _fun0012;
 117:
                var2 = _closure2_slot5;
                var2 = var2 + 1;
                _closure2_slot5 = var2;
                _fun0012_ip = 163; continue _fun0012;
 130:
                var2 = var1.managed;
                if(var2) { _fun0012_ip = 152; continue _fun0012 }
 139:
                var2 = _closure2_slot2;
                var2 = var2 + 1;
                _closure2_slot2 = var2;
                _fun0012_ip = 163; continue _fun0012;
 152:
                var2 = _closure2_slot4;
                var2 = var2 + 1;
                _closure2_slot4 = var2;
 163:
                var1 = var1.animated;
                if(!var1) { _fun0012_ip = 186; continue _fun0012 }
 172:
                var1 = _closure2_slot6;
                var1 = var1 + 1;
                _closure2_slot6 = var1;
 186:
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
    var2 = function getEmojiUrl(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var7 = arguments[1];
            var4 = undefined;
            if(!(var7 === var4)) { _fun0013_ip = 15; continue _fun0013 }
 12:
            var7 = 32;
 15:
            var8 = var1.id;
            var3 = var1.name;
            var6 = var1.animated;
            var5 = null;
            if(!(var5 == var8)) { _fun0013_ip = 73; continue _fun0013 }
 37:
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getURL;
            var1 = var1.bind(var2)(var3);
            _fun0013_ip = 132; continue _fun0013;
 73:
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
            if(!var5) { _fun0013_ip = 122; continue _fun0013 }
 119:
            var5 = var6;
 122:
            var2['animated'] = var5;
            var1 = var3.bind(var4)(var2);
 132:
            return var1;
        }
    };
    var3['getEmojiUrl'] = var2;
    return var1;
})();