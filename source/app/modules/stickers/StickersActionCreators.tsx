// app/modules/stickers/StickersActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _fetchStickerPack() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var2 = 8;
                    var2 = var10[var2];
                    var6 = undefined;
                    var5 = var9.bind(var6)(var2);
                    var3 = var5.httpGetWithCountryCodeQuery;
                    var2 = {};
                    var11 = _closure1_slot9;
                    var8 = var11.STICKER_PACK;
                    var8 = var8.bind(var11)(var7);
                    var2['url'] = var8;
                    var8 = 9;
                    var8 = var10[var8];
                    var9 = var9.bind(var6)(var8);
                    var8 = var9.rejectWithMigratedError;
                    var8 = var8.bind(var9)();
                    var2['rejectWithError'] = var8;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=100);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
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
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _fetchStickerPacks() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 3:
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var2 = {};
case 9:
                    var13 = var2.locale;
                    if(!(var13 === var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var2 = _closure1_slot5;
                    var13 = var2.locale;
case 11:
                    SaveGenerator(address=48);
case 13:
                    return var3;
case 14:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var4 = _closure1_slot8;
                    var4 = var4.isFetchingStickerPacks;
                    if(var4) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var4 = _closure1_slot8;
                    var4 = var4.hasLoadedStickerPacks;
                    if(var4) { _fun0002_ip = 17; continue _fun0002 }
case 19:
                    var6 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 10;
                    var4 = var11[var7];
                    var8 = var6.bind(var3)(var4);
                    var6 = var8.wait;
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
                    var4 = var6.bind(var8)(var4);
                    var10 = _closure1_slot0;
                    var9 = 9;
                    var4 = var11[var9];
                    var4 = var10.bind(var3)(var4);
                    var8 = var4.HTTP;
                    var6 = var8.get;
                    var4 = {};
                    var12 = _closure1_slot9;
                    var12 = var12.STICKER_PACKS;
                    var4['url'] = var12;
                    var12 = {};
                    var12['locale'] = var13;
                    var4['query'] = var12;
                    var9 = var11[var9];
                    var10 = var10.bind(var3)(var9);
                    var9 = var10.rejectWithMigratedError;
                    var9 = var9.bind(var10)();
                    var4['rejectWithError'] = var9;
                    var4 = var6.bind(var8)(var4);
                    SaveGenerator(address=218);
case 20:
                    return var4;
case 21:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 22; continue _fun0002 }
case 23:
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
                    _fun0002_ip = 17; continue _fun0002;
case 22:
                    return var4;
case 17:
                    return var3;
case 15:
                    return var2;
case 8:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _fetchSticker() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 9;
                    var2 = var9[var7];
                    var3 = undefined;
                    var2 = var8.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.get;
                    var2 = {};
                    var12 = _closure1_slot9;
                    var11 = var12.STICKER;
                    var10 = arg1;
                    var10 = var11.bind(var12)(var10);
                    var2['url'] = var10;
                    var7 = var9[var7];
                    var8 = var8.bind(var3)(var7);
                    var7 = var8.rejectWithMigratedError;
                    var7 = var7.bind(var8)();
                    var2['rejectWithError'] = var7;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=101);
case 26:
                    return var2;
case 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var7 = var2.body;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var8 = 11;
                    var5 = var5[var8];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.isGuildSticker;
                    var5 = var5.bind(var6)(var7);
                    if(var5) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.isStandardSticker;
                    var5 = var5.bind(var6)(var7);
                    if(var5) { _fun0003_ip = 20; continue _fun0003 }
case 32:
                    var5 = global;
                    var8 = var5.Error;
                    var5 = var8.prototype;
                    var6 = Object.create(var5, {constructor: {value: var8}});
                    var13 = 'Invalid sticker type';
                    var14 = var6;
                    var5 = new var14[var8](var13, var12);
                    var5 = var5 instanceof Object ? var5 : var6;
                    throw var5;
case 20:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 10;
                    var5 = var8[var5];
                    var8 = var6.bind(var3)(var5);
                    var6 = var8.dispatch;
                    var5 = {};
                    var9 = 'PACK_STICKER_FETCH_SUCCESS';
                    var5['type'] = var9;
                    var5['sticker'] = var7;
                    var5 = var6.bind(var8)(var5);
                    _fun0003_ip = 33; continue _fun0003;
case 30:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 10;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'GUILD_STICKER_FETCH_SUCCESS';
                    var4['type'] = var8;
                    var4['sticker'] = var7;
                    var4 = var5.bind(var6)(var4);
case 33:
                    return var3;
case 28:
                    return var2;
case 24:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _fetchGuildStickersWithCreator() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 34; continue _fun0004 }
case 3:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 9;
                    var2 = var10[var8];
                    var3 = undefined;
                    var2 = var9.bind(var3)(var2);
                    var6 = var2.HTTP;
                    var5 = var6.get;
                    var2 = {};
                    var12 = _closure1_slot9;
                    var11 = var12.GUILD_STICKER_PACKS;
                    var11 = var11.bind(var12)(var7);
                    var2['url'] = var11;
                    var8 = var10[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = var9.rejectWithMigratedError;
                    var8 = var8.bind(var9)();
                    var2['rejectWithError'] = var8;
                    var8 = arg2;
                    var2['signal'] = var8;
                    var2 = var5.bind(var6)(var2);
                    SaveGenerator(address=109);
case 35:
                    return var2;
case 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 37; continue _fun0004 }
case 38:
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
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var3 = arg1;
                            var4 = var3.user;
                            var2 = null;
                            var1 = var3;
                            if(!(var2 != var4)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                            var2 = {};
                            var7 = var2;
                            var6 = var3;
                            var4 = copyDataProperties(var7, var6);
                            var4 = var3.user;
                            var5 = var4.id;
                            var4 = 'user_id';
                            var2[3] = var5;
                            var4 = var3.user;
                            var3 = 'user';
                            var2[2] = var4;
                            var1 = var2;
case 39:
                            return var1;
                        }
                    };
                    var7 = var8.bind(var9)(var7);
                    var4['stickers'] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 37:
                    return var2;
case 34:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _deleteGuildSticker() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 41; continue _fun0006 }
case 25:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 9;
                    var2 = var8[var6];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.del;
                    var2 = {};
                    var12 = _closure1_slot9;
                    var11 = var12.GUILD_STICKER;
                    var10 = var9.guild_id;
                    var9 = var9.id;
                    var9 = var11.bind(var12)(var10, var9);
                    var2['url'] = var9;
                    var6 = var8[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.rejectWithMigratedError;
                    var6 = var6.bind(var7)();
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=110);
case 42:
                    return var2;
case 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    return var3;
case 43:
                    return var2;
case 41:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _createGuildSticker() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 45; continue _fun0007 }
case 3:
                    var6 = var9.guildId;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var10 = 9;
                    var2 = var2[var10];
                    var8 = undefined;
                    var2 = var3.bind(var8)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var11 = _closure1_slot9;
                    var5 = var11.GUILD_STICKER_PACKS;
                    var5 = var5.bind(var11)(var6);
                    var2['url'] = var5;
                    var12 = var9.platform;
                    var11 = 'web';
                    var5 = undefined;
                    if(!(var11 === var12)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                    var5 = var9.body;
case 46:
                    var2['body'] = var5;
                    var11 = var9.platform;
                    var12 = 'mobile';
                    var5 = undefined;
                    if(!(var12 === var11)) { _fun0007_ip = 48; continue _fun0007 }
case 44:
                    var13 = {};
                    var11 = 'name';
                    var13['name'] = var11;
                    var11 = var9.name;
                    var13['value'] = var11;
                    var11 = new Array(3);
                    var11[0] = var13;
                    var13 = {};
                    var14 = 'tags';
                    var13['name'] = var14;
                    var14 = var9.tags;
                    var13['value'] = var14;
                    var11[1] = var13;
                    var13 = {};
                    var14 = 'description';
                    var13['name'] = var14;
                    var14 = var9.description;
                    var13['value'] = var14;
                    var11[2] = var13;
                    var5 = var11;
case 48:
                    var2['fields'] = var5;
                    var11 = var9.platform;
                    var5 = undefined;
                    if(!(var12 === var11)) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                    var12 = {};
                    var11 = 'file';
                    var12['name'] = var11;
                    var11 = {};
                    var13 = var9.uri;
                    var11['uri'] = var13;
                    var13 = var9.name;
                    var11['name'] = var13;
                    var13 = var9.mimeType;
                    var11['type'] = var13;
                    var12['file'] = var11;
                    var11 = new Array(1);
                    var11[0] = var12;
                    var5 = var11;
case 49:
                    var2['attachments'] = var5;
                    var12 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var11 = 12;
                    var11 = var5[var11];
                    var12 = var12.bind(var8)(var11);
                    var11 = var12.buildHeadersForMd5;
                    var9 = var9.originalMd5;
                    var9 = var11.bind(var12)(var9);
                    var2['headers'] = var9;
                    var9 = _closure1_slot0;
                    var5 = var5[var10];
                    var9 = var9.bind(var8)(var5);
                    var5 = var9.rejectWithMigratedError;
                    var5 = var5.bind(var9)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=349);
case 51:
                    return var2;
case 52:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var3 = var5[var3];
                    var5 = var4.bind(var8)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var9 = 'GUILD_STICKERS_CREATE_SUCCESS';
                    var3['type'] = var9;
                    var3['guildId'] = var6;
                    var6 = {};
                    var15 = var2.body;
                    var16 = var6;
                    var9 = copyDataProperties(var16, var15);
                    var9 = _closure1_slot7;
                    var7 = var9.getCurrentUser;
                    var7 = var7.bind(var9)();
                    var9 = null;
                    var9 = var9 == var7;
                    var8 = undefined;
                    if(var9) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                    var8 = var7.id;
case 55:
                    var7 = 'user_id';
                    var6[6] = var8;
                    var3['sticker'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = var2.body;
                    return var3;
case 53:
                    return var2;
case 45:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function _updateGuildSticker() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 9;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.patch;
                    var2 = {};
                    var12 = _closure1_slot9;
                    var11 = var12.GUILD_STICKER;
                    var10 = arg1;
                    var9 = arg2;
                    var9 = var11.bind(var12)(var10, var9);
                    var2['url'] = var9;
                    var9 = arg3;
                    var2['body'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=110);
case 42:
                    return var2;
case 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 59; continue _fun0008 }
case 44:
                    var3 = var2.body;
                    return var3;
case 59:
                    return var2;
case 57:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function cleanFavoriteStickers(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot6;
            var4 = var1.totalUnavailableGuilds;
            var3 = 0;
            var1 = var5;
            if(!(!(var4 > var3))) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            var3 = _closure1_slot4;
            var2 = var3.isConnected;
            var3 = var2.bind(var3)();
            var2 = var5;
            if(!var3) { _fun0009_ip = 62; continue _fun0009 }
case 63:
            var4 = var5.filter;
            var3 = function(arg1) {
                var3 = _closure1_slot8;
                var2 = var3.getStickerById;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var2 = var4.bind(var5)(var3);
case 62:
            var1 = var2;
case 60:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MAX_FAVORITES;
    var _closure1_slot10 = var7;
    var4 = var4.UserSettingsDelay;
    var _closure1_slot11 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/StickersActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchStickerPack() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchStickerPack'] = var4;
    var4 = function fetchStickerPacks() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchStickerPacks'] = var4;
    var4 = function fetchSticker() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchSticker'] = var4;
    var4 = function fetchGuildStickersWithCreator() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchGuildStickersWithCreator'] = var4;
    var4 = function deleteGuildSticker() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['deleteGuildSticker'] = var4;
    var4 = function createGuildSticker() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createGuildSticker'] = var4;
    var4 = function updateGuildSticker() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
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
        var1 = 13;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var6 = var4.FrecencyUserSettingsActionCreators;
        var5 = var6.updateAsync;
        var3 = _closure1_slot11;
        var4 = var3.INFREQUENT_USER_ACTION;
        var3 = 'favoriteStickers';
        var2 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = arg1;
                var2 = _closure1_slot19;
                var1 = var3.stickerIds;
                var10 = undefined;
                var1 = var2.bind(var10)(var1);
                var3['stickerIds'] = var1;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 14;
                var1 = var4[var1];
                var4 = var2.bind(var10)(var1);
                var2 = var4.size;
                var1 = var3.stickerIds;
                var2 = var2.bind(var4)(var1);
                var1 = _closure1_slot10;
                if(!(!(var2 >= var1))) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                var5 = var3.stickerIds;
                var4 = var5.includes;
                var1 = _closure2_slot0;
                var1 = var4.bind(var5)(var1);
                var1 = !var1;
                if(!var1) { _fun0010_ip = 59; continue _fun0010 }
case 66:
                var4 = var3.stickerIds;
                var3 = var4.push;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                var1 = undefined;
case 59:
                _fun0010_ip = 67; continue _fun0010;
case 64:
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 15;
                var2 = var11[var2];
                var4 = var3.bind(var10)(var2);
                var3 = var4.show;
                var2 = {};
                var6 = _closure1_slot0;
                var5 = 16;
                var7 = var11[var5];
                var7 = var6.bind(var10)(var7);
                var12 = var7.intl;
                var8 = var12.string;
                var7 = var11[var5];
                var7 = var6.bind(var10)(var7);
                var7 = var7.t;
                var7 = var7["+XYXtZ"];
                var7 = var8.bind(var12)(var7);
                var2['title'] = var7;
                var7 = var11[var5];
                var7 = var6.bind(var10)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var5 = var11[var5];
                var5 = var6.bind(var10)(var5);
                var5 = var5.t;
                var6 = var5.JaIyFi;
                var5 = {};
                var9 = _closure1_slot10;
                var5['count'] = var9;
                var5 = var7.bind(var8)(var6, var5);
                var2['body'] = var5;
                var2 = var3.bind(var4)(var2);
                var1 = false;
case 67:
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
        var1 = 13;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var6 = var4.FrecencyUserSettingsActionCreators;
        var5 = var6.updateAsync;
        var3 = _closure1_slot11;
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
            var4 = _closure1_slot19;
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