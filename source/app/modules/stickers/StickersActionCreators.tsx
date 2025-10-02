// app/modules/stickers/StickersActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var12 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var13;
    var1 = function cleanFavoriteStickers(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot7;
            var4 = var1.totalUnavailableGuilds;
            var3 = 0;
            var1 = var5;
            if(!(!(var4 > var3))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot4;
            var2 = var3.isConnected;
            var3 = var2.bind(var3)();
            var2 = var5;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var5.filter;
            var3 = function(arg1) {
                var3 = _closure1_slot9;
                var2 = var3.getStickerById;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var2 = var4.bind(var5)(var3);
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var13[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var13[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var13[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var13[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var13[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var13[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var13[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var13[var4];
    var4 = var12.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var13[var4];
    var4 = var12.bind(var1)(var4);
    var5 = var4.MAX_FAVORITES;
    var _closure1_slot11 = var5;
    var4 = var4.UserSettingsDelay;
    var _closure1_slot12 = var4;
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 9;
                    var2 = var5[var2];
                    var6 = undefined;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.httpGetWithCountryCodeQuery;
                    var2 = {};
                    var9 = _closure1_slot10;
                    var8 = var9.STICKER_PACK;
                    var8 = var8.bind(var9)(var7);
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=80);
case 8:
                    return var2;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = var2.body;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 10;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'STICKER_PACK_FETCH_SUCCESS';
                    var4['type'] = var8;
                    var4['packId'] = var7;
                    var4['pack'] = var3;
                    var7 = arg2;
                    var4['ingestStickers'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 10:
                    return var2;
case 6:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var10 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 12; continue _fun0003 }
case 7:
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var2 = {};
case 13:
                    var10 = var2.locale;
                    if(!(var10 === var3)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var2 = _closure1_slot5;
                    var10 = var2.locale;
case 15:
                    SaveGenerator(address=48);
case 17:
                    return var3;
case 18:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var4 = _closure1_slot9;
                    var4 = var4.isFetchingStickerPacks;
                    if(var4) { _fun0003_ip = 21; continue _fun0003 }
case 8:
                    var4 = _closure1_slot9;
                    var4 = var4.hasLoadedStickerPacks;
                    if(var4) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var7 = 10;
                    var4 = var8[var7];
                    var9 = var6.bind(var3)(var4);
                    var6 = var9.wait;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'STICKER_PACKS_FETCH_START';
                        var2['type'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4 = var6.bind(var9)(var4);
                    var6 = _closure1_slot0;
                    var4 = 11;
                    var4 = var8[var4];
                    var4 = var6.bind(var3)(var4);
                    var8 = var4.HTTP;
                    var6 = var8.get;
                    var4 = {};
                    var9 = _closure1_slot10;
                    var9 = var9.STICKER_PACKS;
                    var4['url'] = var9;
                    var9 = {};
                    var9['locale'] = var10;
                    var4['query'] = var9;
                    var9 = false;
                    var4['rejectWithError'] = var9;
                    var4 = var6.bind(var8)(var4);
                    SaveGenerator(address=203);
case 23:
                    return var4;
case 24:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var6 = var4.body;
                    var8 = var6.sticker_packs;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var9 = 'STICKER_PACKS_FETCH_SUCCESS';
                    var5['type'] = var9;
                    var5['packs'] = var8;
                    var5 = var6.bind(var7)(var5);
                    _fun0003_ip = 21; continue _fun0003;
case 25:
                    return var4;
case 21:
                    return var3;
case 19:
                    return var2;
case 12:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var9 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.get;
                    var2 = {};
                    var9 = _closure1_slot10;
                    var8 = var9.STICKER;
                    var7 = arg1;
                    var7 = var8.bind(var9)(var7);
                    var2['url'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=84);
case 29:
                    return var2;
case 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var7 = var2.body;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 10;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'STICKER_FETCH_SUCCESS';
                    var4['type'] = var8;
                    var4['sticker'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 31:
                    return var2;
case 27:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var8 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 33; continue _fun0005 }
case 7:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.get;
                    var2 = {};
                    var9 = _closure1_slot10;
                    var8 = var9.GUILD_STICKER_PACKS;
                    var8 = var8.bind(var9)(var7);
                    var2['url'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=84);
case 29:
                    return var2;
case 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 34; continue _fun0005 }
case 32:
                    var9 = var2.body;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 10;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'GUILD_STICKERS_FETCH_SUCCESS';
                    var4['type'] = var8;
                    var4['guildId'] = var7;
                    var8 = var9.map;
                    var7 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var3 = arg1;
                            var4 = var3.user;
                            var2 = null;
                            var1 = var3;
                            if(!(var2 != var4)) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                            var2 = {};
                            var7 = var2;
                            var6 = var3;
                            var4 = copyDataProperties(var7, var6);
                            var5 = _closure1_slot6;
                            var7 = var3.user;
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {constructor: {value: var5}});
                            var8 = var4;
                            var3 = new var8[var5](var7, var6);
                            var4 = var3 instanceof Object ? var3 : var4;
                            var3 = 'user';
                            var2[var3] = var4;
                            var1 = var2;
case 35:
                            return var1;
                        }
                    };
                    var7 = var8.bind(var9)(var7);
                    var4['stickers'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 34:
                    return var2;
case 33:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var7 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 37; continue _fun0007 }
case 28:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.del;
                    var2 = {};
                    var9 = _closure1_slot10;
                    var8 = var9.GUILD_STICKER;
                    var7 = var6.guild_id;
                    var6 = var6.id;
                    var6 = var8.bind(var9)(var7, var6);
                    var2['url'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=93);
case 38:
                    return var2;
case 39:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                    return var3;
case 40:
                    return var2;
case 37:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var6 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var11 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 42; continue _fun0008 }
case 7:
                    var6 = var11.guildId;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var5 = undefined;
                    var2 = var3.bind(var5)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var9 = _closure1_slot10;
                    var8 = var9.GUILD_STICKER_PACKS;
                    var8 = var8.bind(var9)(var6);
                    var2['url'] = var8;
                    var10 = var11.platform;
                    var9 = 'web';
                    var8 = undefined;
                    if(!(var9 === var10)) { _fun0008_ip = 43; continue _fun0008 }
case 38:
                    var8 = var11.body;
case 43:
                    var2['body'] = var8;
                    var9 = var11.platform;
                    var10 = 'mobile';
                    var8 = undefined;
                    if(!(var10 === var9)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                    var12 = {};
                    var9 = 'name';
                    var12['name'] = var9;
                    var9 = var11.name;
                    var12['value'] = var9;
                    var9 = new Array(3);
                    var9[0] = var12;
                    var12 = {};
                    var13 = 'tags';
                    var12['name'] = var13;
                    var13 = var11.tags;
                    var12['value'] = var13;
                    var9[1] = var12;
                    var12 = {};
                    var13 = 'description';
                    var12['name'] = var13;
                    var13 = var11.description;
                    var12['value'] = var13;
                    var9[2] = var12;
                    var8 = var9;
case 44:
                    var2['fields'] = var8;
                    var9 = var11.platform;
                    var8 = undefined;
                    if(!(var10 === var9)) { _fun0008_ip = 46; continue _fun0008 }
case 47:
                    var10 = {};
                    var9 = 'file';
                    var10['name'] = var9;
                    var9 = {};
                    var12 = var11.uri;
                    var9['uri'] = var12;
                    var12 = var11.name;
                    var9['name'] = var12;
                    var11 = var11.mimeType;
                    var9['type'] = var11;
                    var10['file'] = var9;
                    var9 = new Array(1);
                    var9[0] = var10;
                    var8 = var9;
case 46:
                    var2['attachments'] = var8;
                    var8 = false;
                    var2['rejectWithError'] = var8;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=286);
case 48:
                    return var2;
case 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 10;
                    var3 = var8[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var8 = 'GUILD_STICKERS_CREATE_SUCCESS';
                    var3['type'] = var8;
                    var3['guildId'] = var6;
                    var6 = {};
                    var14 = var2.body;
                    var15 = var6;
                    var8 = copyDataProperties(var15, var14);
                    var8 = _closure1_slot8;
                    var7 = var8.getCurrentUser;
                    var8 = var7.bind(var8)();
                    var7 = 'user';
                    var6[var7] = var8;
                    var3['sticker'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = var2.body;
                    return var3;
case 50:
                    return var2;
case 42:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var5 = var4.bind(var1)();
    var4 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 11;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.patch;
                    var2 = {};
                    var8 = _closure1_slot10;
                    var7 = var8.GUILD_STICKER;
                    var6 = arg1;
                    var5 = arg2;
                    var5 = var7.bind(var8)(var6, var5);
                    var2['url'] = var5;
                    var5 = arg3;
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=93);
case 38:
                    return var2;
case 39:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 54; continue _fun0009 }
case 41:
                    var3 = var2.body;
                    return var3;
case 54:
                    return var2;
case 52:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var11 = 16;
    var11 = var13[var11];
    var13 = var12.bind(var1)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/stickers/StickersActionCreators.tsx';
    var11 = var12.bind(var13)(var11);
    var3['fetchStickerPack'] = var10;
    var3['fetchStickerPacks'] = var9;
    var3['fetchSticker'] = var8;
    var3['fetchGuildStickers'] = var7;
    var3['deleteGuildSticker'] = var6;
    var3['createGuildSticker'] = var5;
    var3['updateGuildSticker'] = var4;
    var4 = function addStickerPreview(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'ADD_STICKER_PREVIEW';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['sticker'] = var5;
        var5 = arg3;
        var2['draftType'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['addStickerPreview'] = var4;
    var4 = function clearStickerPreview(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 10;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CLEAR_STICKER_PREVIEW';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['draftType'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearStickerPreview'] = var4;
    var4 = function favoriteSticker(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 12;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var6 = var4.FrecencyUserSettingsActionCreators;
        var5 = var6.updateAsync;
        var3 = _closure1_slot12;
        var4 = var3.INFREQUENT_USER_ACTION;
        var3 = 'favoriteStickers';
        var2 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = arg1;
                var2 = _closure1_slot13;
                var1 = var3.stickerIds;
                var10 = undefined;
                var1 = var2.bind(var10)(var1);
                var3['stickerIds'] = var1;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 13;
                var1 = var4[var1];
                var4 = var2.bind(var10)(var1);
                var2 = var4.size;
                var1 = var3.stickerIds;
                var2 = var2.bind(var4)(var1);
                var1 = _closure1_slot11;
                if(!(!(var2 >= var1))) { _fun0010_ip = 55; continue _fun0010 }
case 35:
                var5 = var3.stickerIds;
                var4 = var5.includes;
                var1 = _closure2_slot0;
                var1 = var4.bind(var5)(var1);
                var1 = !var1;
                if(!var1) { _fun0010_ip = 56; continue _fun0010 }
case 40:
                var4 = var3.stickerIds;
                var3 = var4.push;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                var1 = undefined;
case 56:
                _fun0010_ip = 57; continue _fun0010;
case 55:
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 14;
                var2 = var11[var2];
                var4 = var3.bind(var10)(var2);
                var3 = var4.show;
                var2 = {};
                var6 = _closure1_slot0;
                var5 = 15;
                var7 = var11[var5];
                var7 = var6.bind(var10)(var7);
                var12 = var7.intl;
                var8 = var12.string;
                var7 = var11[var5];
                var7 = var6.bind(var10)(var7);
                var7 = var7.t;
                var7 = var7.+XYXtb;
                var7 = var8.bind(var12)(var7);
                var2['title'] = var7;
                var7 = var11[var5];
                var7 = var6.bind(var10)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var5 = var11[var5];
                var5 = var6.bind(var10)(var5);
                var5 = var5.t;
                var6 = var5.JaIyFh;
                var5 = {};
                var9 = _closure1_slot11;
                var5['count'] = var9;
                var5 = var7.bind(var8)(var6, var5);
                var2['body'] = var5;
                var2 = var3.bind(var4)(var2);
                var1 = false;
case 57:
                return var1;
            }
        };
        var2 = var5.bind(var6)(var3, var2, var4);
        return var1;
    };
    var3['favoriteSticker'] = var4;
    var2 = function unfavoriteSticker(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 12;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var6 = var4.FrecencyUserSettingsActionCreators;
        var5 = var6.updateAsync;
        var3 = _closure1_slot12;
        var4 = var3.INFREQUENT_USER_ACTION;
        var3 = 'favoriteStickers';
        var2 = function(arg1) {
            var3 = arg1;
            var4 = var3.stickerIds;
            var2 = var4.filter;
            var1 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var2.bind(var4)(var1);
            var3['stickerIds'] = var1;
            var4 = _closure1_slot13;
            var2 = var3.stickerIds;
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var3['stickerIds'] = var2;
            return var1;
        };
        var2 = var5.bind(var6)(var3, var2, var4);
        return var1;
    };
    var3['unfavoriteSticker'] = var2;
    return var1;
})();