// app/modules/guild_profile/GuildProfileBuilders.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot6;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot6;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var _closure1_slot6 = var1;
    var1 = function getEmoji(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var6 = var1.emojiId;
            var8 = var1.emojiName;
            var2 = _closure1_slot3;
            var1 = var2.get;
            var5 = var1.bind(var2)(var3);
            var3 = null;
            if(!(var3 == var6)) { _fun0004_ip = 52; continue _fun0004 }
 43:
            var2 = var3 == var8;
            var1 = null;
            if(var2) { _fun0004_ip = 126; continue _fun0004 }
 52:
            if(!(var3 == var6)) { _fun0004_ip = 100; continue _fun0004 }
 56:
            var7 = var3 != var8;
            var2 = null;
            if(!var7) { _fun0004_ip = 98; continue _fun0004 }
 65:
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 1;
            var7 = var7[var4];
            var4 = undefined;
            var7 = var9.bind(var4)(var7);
            var4 = var7.getByName;
            var2 = var4.bind(var7)(var8);
 98:
            _fun0004_ip = 123; continue _fun0004;
 100:
            var4 = var3 != var5;
            var3 = null;
            if(!var4) { _fun0004_ip = 120; continue _fun0004 }
 109:
            var4 = var5.getById;
            var3 = var4.bind(var5)(var6);
 120:
            var2 = var3;
 123:
            var1 = var2;
 126:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function buildGuildProfileTraitsFromServer(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var11 = arg1;
            var1 = global;
            var3 = var1.Array;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 2;
            var1 = var1[var9];
            var8 = undefined;
            var1 = var2.bind(var8)(var1);
            var17 = var1.MAX_TRAITS;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var18 = var2;
            var1 = new var18[var3](var17, var16);
            var3 = var1 instanceof Object ? var1 : var2;
            var2 = var3.fill;
            var1 = _closure1_slot4;
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot5;
            var2 = arg2;
            var7 = var3.bind(var8)(var2);
            var3 = var7.bind(var8)();
            var2 = var3.done;
            var6 = null;
            var5 = 0;
            var4 = var3;
            var3 = undefined;
            if(var2) { _fun0005_ip = 259; continue _fun0005 }
 113:
            var15 = var4.value;
            var2 = var15.position;
            var2 = var2 < var5;
            if(var2) { _fun0005_ip = 162; continue _fun0005 }
 130:
            var13 = var15.position;
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var12 = var12.MAX_TRAITS;
            var2 = var13 >= var12;
 162:
            if(var2) { _fun0005_ip = 241; continue _fun0005 }
 165:
            var13 = var15.position;
            var12 = {};
            var2 = var15.label;
            var12['label'] = var2;
            var14 = _closure1_slot7;
            var2 = {};
            var2['guildId'] = var11;
            var16 = var15.emoji_id;
            var2['emojiId'] = var16;
            var15 = var15.emoji_name;
            var2['emojiName'] = var15;
            var2 = var14.bind(var8)(var2);
            var15 = var6 != var2;
            var14 = undefined;
            if(!var15) { _fun0005_ip = 230; continue _fun0005 }
 227:
            var14 = var2;
 230:
            var12['emoji'] = var14;
            var1[var13] = var12;
            var3 = var2;
 241:
            var12 = var7.bind(var8)();
            var2 = var12.done;
            var4 = var12;
            if(!var2) { _fun0005_ip = 113; continue _fun0005 }
 259:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var4 = function buildGuildProfileFromServer(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['id'] = var3;
            var3 = var2.name;
            var1['name'] = var3;
            var5 = var2.description;
            var4 = null;
            var7 = var4 != var5;
            var6 = '';
            var3 = var6;
            if(!var7) { _fun0006_ip = 47; continue _fun0006 }
 44:
            var3 = var5;
 47:
            var1['description'] = var3;
            var3 = var2.icon_hash;
            var1['icon'] = var3;
            var3 = var2.custom_banner_hash;
            var1['customBanner'] = var3;
            var3 = var2.online_count;
            var1['onlineCount'] = var3;
            var3 = var2.member_count;
            var1['memberCount'] = var3;
            var5 = var2.brand_color_primary;
            var7 = var4 == var5;
            var3 = null;
            if(var7) { _fun0006_ip = 118; continue _fun0006 }
 109:
            var3 = null;
            if(!(var6 !== var5)) { _fun0006_ip = 118; continue _fun0006 }
 115:
            var3 = var5;
 118:
            var1['brandColorPrimary'] = var3;
            var3 = var2.visibility;
            var1['visibility'] = var3;
            var7 = _closure1_slot8;
            var6 = var2.id;
            var5 = var2.traits;
            if(!(var4 == var5)) { _fun0006_ip = 160; continue _fun0006 }
 156:
            var5 = new Array(0);
 160:
            var3 = undefined;
            var3 = var7.bind(var3)(var6, var5);
            var1['traits'] = var3;
            var3 = var2.game_application_ids;
            if(!(var4 == var3)) { _fun0006_ip = 187; continue _fun0006 }
 183:
            var3 = new Array(0);
 187:
            var1['gameApplicationIds'] = var3;
            var6 = var2.game_activity;
            if(!(var4 != var6)) { _fun0006_ip = 246; continue _fun0006 }
 204:
            var3 = global;
            var5 = var3.Object;
            var3 = var5.entries;
            var7 = var3.bind(var5)(var6);
            var6 = var7.reduce;
            var5 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var6 = arg2;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var4 = var6().value;
                    var3 = var2;
                    var8 = undefined;
                    var5 = var3 === var8;
                    var3 = undefined;
                    if(var5) { _fun0007_ip = 30; continue _fun0007 }
 27:
                    var3 = var4;
 30:
                    var4 = undefined;
                    if(var5) { _fun0007_ip = 60; continue _fun0007 }
 35:
                    var7 = var6().value;
                    var6 = var2;
                    var6 = var6 === var8;
                    var4 = undefined;
                    var5 = var6;
                    if(var6) { _fun0007_ip = 60; continue _fun0007 }
 54:
                    var4 = var7;
                    var5 = var6;
 60:
                    if(var5) { _fun0007_ip = 66; continue _fun0007 }
 63:
                    var2.return();
 66:
                    var2 = var3.toString;
                    var3 = var2.bind(var3)();
                    var2 = {};
                    var5 = var4.activity_level;
                    var2['level'] = var5;
                    var4 = var4.activity_score;
                    var2['score'] = var4;
                    var1[var3] = var2;
                    return var1;
                }
            };
            var3 = {};
            var3 = var6.bind(var7)(var5, var3);
            _fun0006_ip = 248; continue _fun0006;
 246:
            var3 = {};
 248:
            var1['gameActivity'] = var3;
            var3 = var2.features;
            if(!(var4 == var3)) { _fun0006_ip = 267; continue _fun0006 }
 263:
            var3 = new Array(0);
 267:
            var1['features'] = var3;
            var3 = var2.tag;
            var1['tag'] = var3;
            var3 = var2.badge;
            var1['badge'] = var3;
            var3 = var2.badge_color_primary;
            var1['badgeColorPrimary'] = var3;
            var3 = var2.badge_color_secondary;
            var1['badgeColorSecondary'] = var3;
            var3 = var2.badge_hash;
            var1['badgeHash'] = var3;
            var3 = var2.premium_subscription_count;
            var1['premiumSubscriberCount'] = var3;
            var2 = var2.premium_tier;
            var1['premiumTier'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.EmojiDisambiguations;
    var _closure1_slot3 = var5;
    var5 = {};
    var8 = '';
    var5['label'] = var8;
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_profile/GuildProfileBuilders.tsx';
    var5 = var6.bind(var7)(var5);
    var3['buildGuildProfileFromServer'] = var4;
    var4 = function buildGuildProfileUpdateForServer(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.name;
            var5 = null;
            if(!(var5 != var3)) { _fun0008_ip = 27; continue _fun0008 }
 16:
            var3 = var2.name;
            var1['name'] = var3;
 27:
            var3 = var2.description;
            if(!(var5 != var3)) { _fun0008_ip = 47; continue _fun0008 }
 36:
            var3 = var2.description;
            var1['description'] = var3;
 47:
            var3 = var2.icon;
            var4 = undefined;
            if(!(var4 !== var3)) { _fun0008_ip = 69; continue _fun0008 }
 58:
            var3 = var2.icon;
            var1['icon'] = var3;
 69:
            var3 = var2.customBanner;
            if(!(var4 !== var3)) { _fun0008_ip = 93; continue _fun0008 }
 79:
            var3 = var2.customBanner;
            var1['custom_banner'] = var3;
 93:
            var3 = var2.visibility;
            if(!(var5 != var3)) { _fun0008_ip = 115; continue _fun0008 }
 103:
            var3 = var2.visibility;
            var1['visibility'] = var3;
 115:
            var3 = var2.brandColorPrimary;
            if(!(var4 !== var3)) { _fun0008_ip = 137; continue _fun0008 }
 125:
            var3 = var2.brandColorPrimary;
            var1['brand_color_primary'] = var3;
 137:
            var3 = var2.traits;
            if(!(var5 != var3)) { _fun0008_ip = 215; continue _fun0008 }
 147:
            var7 = var2.traits;
            var6 = var7.map;
            var3 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var4 = arg1;
                    var5 = null;
                    var2 = var5 == var4;
                    var1 = undefined;
                    if(var2) { _fun0009_ip = 19; continue _fun0009 }
 14:
                    var1 = var4.label;
 19:
                    var2 = var5 == var1;
                    var1 = null;
                    if(var2) { _fun0009_ip = 143; continue _fun0009 }
 28:
                    var2 = var4.label;
                    var6 = var2.length;
                    var2 = 0;
                    var2 = var6 <= var2;
                    var1 = null;
                    if(var2) { _fun0009_ip = 143; continue _fun0009 }
 49:
                    var2 = {};
                    var6 = var4.label;
                    var2['label'] = var6;
                    var6 = arg2;
                    var2['position'] = var6;
                    var7 = var4.emoji;
                    var8 = var5 == var7;
                    var6 = undefined;
                    if(var8) { _fun0009_ip = 86; continue _fun0009 }
 81:
                    var6 = var7.id;
 86:
                    var2['emoji_id'] = var6;
                    var7 = var4.emoji;
                    var8 = var5 == var7;
                    var6 = undefined;
                    if(var8) { _fun0009_ip = 110; continue _fun0009 }
 105:
                    var6 = var7.name;
 110:
                    var2['emoji_name'] = var6;
                    var4 = var4.emoji;
                    var5 = var5 == var4;
                    var3 = undefined;
                    if(var5) { _fun0009_ip = 135; continue _fun0009 }
 129:
                    var3 = var4.animated;
 135:
                    var2['emoji_animated'] = var3;
                    var1 = var2;
 143:
                    return var1;
                }
            };
            var7 = var6.bind(var7)(var3);
            var6 = var7.filter;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 3;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.isNotNullish;
            var3 = var6.bind(var7)(var3);
            var1['traits'] = var3;
 215:
            var3 = var2.gameApplicationIds;
            if(!(var5 != var3)) { _fun0008_ip = 237; continue _fun0008 }
 225:
            var3 = var2.gameApplicationIds;
            var1['game_application_ids'] = var3;
 237:
            var3 = var2.tag;
            if(!(var4 !== var3)) { _fun0008_ip = 257; continue _fun0008 }
 246:
            var3 = var2.tag;
            var1['tag'] = var3;
 257:
            var3 = var2.badge;
            if(!(var4 !== var3)) { _fun0008_ip = 279; continue _fun0008 }
 267:
            var3 = var2.badge;
            var1['badge'] = var3;
 279:
            var3 = var2.badgeColorPrimary;
            if(!(var4 !== var3)) { _fun0008_ip = 301; continue _fun0008 }
 289:
            var3 = var2.badgeColorPrimary;
            var1['badge_color_primary'] = var3;
 301:
            var3 = var2.badgeColorSecondary;
            if(!(var4 !== var3)) { _fun0008_ip = 323; continue _fun0008 }
 311:
            var2 = var2.badgeColorSecondary;
            var1['badge_color_secondary'] = var2;
 323:
            return var1;
        }
    };
    var3['buildGuildProfileUpdateForServer'] = var4;
    var4 = function buildTopGamesFromServer(arg1) {
        var4 = arg1;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            var1 = arg1;
            var4 = arg2;
            var3 = var4.game_application_id;
            var2 = {};
            var5 = var4.activity_level;
            var2['level'] = var5;
            var4 = var4.activity_score;
            var2['score'] = var4;
            var1[var3] = var2;
            return var1;
        };
        var1 = {};
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['buildTopGamesFromServer'] = var4;
    var2 = function buildGuildProfileFromInvite(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var8 = arg1;
            var4 = var8.guild;
            var6 = var8.profile;
            var5 = null;
            var2 = var5 != var6;
            var1 = null;
            if(!var2) { _fun0010_ip = 39; continue _fun0010 }
 25:
            var3 = _closure1_slot9;
            var2 = undefined;
            var1 = var3.bind(var2)(var6);
 39:
            if(!(var5 == var1)) { _fun0010_ip = 330; continue _fun0010 }
 46:
            var3 = var5 == var4;
            var2 = null;
            if(var3) { _fun0010_ip = 327; continue _fun0010 }
 58:
            var3 = {};
            var6 = var4.id;
            var3['id'] = var6;
            var6 = var4.name;
            var3['name'] = var6;
            var7 = var4.description;
            var9 = var5 != var7;
            var6 = '';
            if(!var9) { _fun0010_ip = 97; continue _fun0010 }
 94:
            var6 = var7;
 97:
            var3['description'] = var6;
            var6 = var4.icon;
            var3['icon'] = var6;
            var6 = var4.banner;
            var3['customBanner'] = var6;
            var9 = var4.approximate_presence_count;
            if(!(var5 == var9)) { _fun0010_ip = 137; continue _fun0010 }
 131:
            var9 = var8.approximate_presence_count;
 137:
            var10 = var5 != var9;
            var7 = 0;
            if(!var10) { _fun0010_ip = 149; continue _fun0010 }
 146:
            var7 = var9;
 149:
            var3['onlineCount'] = var7;
            var7 = var4.approximate_member_count;
            if(!(var5 == var7)) { _fun0010_ip = 170; continue _fun0010 }
 164:
            var7 = var8.approximate_member_count;
 170:
            var8 = var5 != var7;
            var6 = 0;
            if(!var8) { _fun0010_ip = 182; continue _fun0010 }
 179:
            var6 = var7;
 182:
            var3['memberCount'] = var6;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 4;
            var7 = var7[var6];
            var6 = undefined;
            var6 = var8.bind(var6)(var7);
            var6 = var6.GuildProfileVisibility;
            var6 = var6.NOT_SPECIFIED;
            var3['visibility'] = var6;
            var6 = new Array(0);
            var3['traits'] = var6;
            var6 = new Array(0);
            var3['gameApplicationIds'] = var6;
            var6 = {};
            var3['gameActivity'] = var6;
            var6 = var4.features;
            if(!(var5 == var6)) { _fun0010_ip = 268; continue _fun0010 }
 264:
            var6 = new Array(0);
 268:
            var3['features'] = var6;
            var3['brandColorPrimary'] = var5;
            var3['tag'] = var5;
            var3['badge'] = var5;
            var3['badgeHash'] = var5;
            var3['badgeColorPrimary'] = var5;
            var3['badgeColorSecondary'] = var5;
            var5 = var4.premium_subscription_count;
            var3['premiumSubscriberCount'] = var5;
            var4 = var4.premium_tier;
            var3['premiumTier'] = var4;
            var2 = var3;
 327:
            var1 = var2;
 330:
            return var1;
        }
    };
    var3['buildGuildProfileFromInvite'] = var2;
    return var1;
})();