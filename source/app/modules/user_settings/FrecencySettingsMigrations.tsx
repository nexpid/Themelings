// app/modules/user_settings/FrecencySettingsMigrations.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
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
            var9 = _closure1_slot7;
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
            var7 = _closure1_slot7;
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
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var _closure1_slot7 = var1;
    var1 = function readFavoriteGIFs(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = 1;
            var _closure2_slot0 = var2;
            var2 = {};
            var3 = 'IMAGE';
            var2['IMAGE'] = var3;
            var3 = 'VIDEO';
            var2['VIDEO'] = var3;
            var _closure2_slot1 = var2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var5 = var2.PersistedStore;
            var4 = var5.migrateAndReadStoreState;
            var3 = new Array(2);
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0005_ip = 52; continue _fun0005 }
 9:
                    var1 = global;
                    var2 = var1.Array;
                    var1 = var2.isArray;
                    var2 = var1.bind(var2)(var3);
                    var1 = var3;
                    if(!var2) { _fun0005_ip = 50; continue _fun0005 }
 33:
                    var2 = {};
                    var2['favorites'] = var3;
                    var3 = 0;
                    var2['timesFavorited'] = var3;
                    var1 = var2;
 50:
                    _fun0005_ip = 73; continue _fun0005;
 52:
                    var2 = {};
                    var3 = new Array(0);
                    var2['favorites'] = var3;
                    var3 = 0;
                    var2['timesFavorited'] = var3;
                    var1 = var2;
 73:
                    return var1;
                }
            };
            var3[0] = var2;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = arg1;
                    var2 = global;
                    var4 = var2.Array;
                    var3 = var4.isArray;
                    var2 = var1.favorites;
                    var2 = var3.bind(var4)(var2);
                    if(var2) { _fun0006_ip = 51; continue _fun0006 }
 30:
                    var2 = {};
                    var3 = new Array(0);
                    var2['favorites'] = var3;
                    var3 = 0;
                    var2['timesFavorited'] = var3;
                    var1 = var2;
 51:
                    return var1;
                }
            };
            var3[1] = var2;
            var2 = 'GIFFavoritesStore';
            var2 = var4.bind(var5)(var2, var3);
            var2 = var2.state;
            var _closure2_slot2 = var2;
            var3 = null;
            if(!(var3 != var2)) { _fun0004_ip = 167; continue _fun0004 }
 125:
            var3 = var2.favorites;
            var4 = var3.length;
            var3 = 0;
            if(!(var3 !== var4)) { _fun0004_ip = 167; continue _fun0004 }
 142:
            var3 = var2.favorites;
            var2 = var3.map;
            var1 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = arg1;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 3;
                    var1 = var1[var8];
                    var7 = undefined;
                    var1 = var2.bind(var7)(var1);
                    var2 = var1.FavoriteGIF;
                    var1 = var2.create;
                    var2 = var1.bind(var2)();
                    var6 = var3.format;
                    var4 = _closure2_slot1;
                    var4 = var4.IMAGE;
                    if(!(var6 !== var4)) { _fun0007_ip = 146; continue _fun0007 }
 65:
                    var6 = var3.format;
                    var4 = _closure2_slot1;
                    var4 = var4.VIDEO;
                    if(!(var6 !== var4)) { _fun0007_ip = 115; continue _fun0007 }
 84:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.GIFType;
                    var4 = var4.NONE;
                    _fun0007_ip = 144; continue _fun0007;
 115:
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var6 = var9.bind(var7)(var6);
                    var6 = var6.GIFType;
                    var4 = var6.VIDEO;
 144:
                    _fun0007_ip = 175; continue _fun0007;
 146:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var8];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.GIFType;
                    var4 = var5.IMAGE;
 175:
                    var2['format'] = var4;
                    var4 = var3.src;
                    var2['src'] = var4;
                    var4 = var3.width;
                    var2['width'] = var4;
                    var4 = var3.height;
                    var2['height'] = var4;
                    var4 = _closure2_slot2;
                    var4 = var4.favorites;
                    var5 = var4.length;
                    var4 = arg2;
                    var4 = var5 - var4;
                    var1 = _closure2_slot0;
                    var1 = var4 + var1;
                    var2['order'] = var1;
                    var1 = {};
                    var3 = var3.url;
                    var1['url'] = var3;
                    var1['favorite'] = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            _fun0004_ip = 171; continue _fun0004;
 167:
            var1 = new Array(0);
 171:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var4 = var2.MAX_FAVORITES;
    var _closure1_slot3 = var4;
    var2 = var2.MAX_FAVORITE_GIFS_SIZE;
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ID_REGEX;
    var _closure1_slot5 = var2;
    var4 = {};
    var2 = 2;
    var4['version'] = var2;
    var2 = function run(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var4 = _closure1_slot8;
            var6 = undefined;
            var1 = 1;
            var1 = var4.bind(var6)(var1);
            var5 = var1.length;
            var4 = 0;
            if(!(var4 !== var5)) { _fun0008_ip = 197; continue _fun0008 }
 34:
            var5 = var2.favoriteGifs;
            var4 = null;
            if(!(var4 == var5)) { _fun0008_ip = 87; continue _fun0008 }
 46:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 3;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var5 = var4.FavoriteGIFs;
            var4 = var5.create;
            var4 = var4.bind(var5)();
            var2['favoriteGifs'] = var4;
 87:
            var5 = var2.favoriteGifs;
            var4 = {};
            var5['gifs'] = var4;
            var3 = _closure1_slot6;
            var5 = var3.bind(var6)(var1);
            var4 = var5.bind(var6)();
            var3 = var4.done;
            if(var3) { _fun0008_ip = 169; continue _fun0008 }
 122:
            var3 = var4.value;
            var8 = var3.url;
            var7 = var3.favorite;
            var3 = var2.favoriteGifs;
            var3 = var3.gifs;
            var3[var8] = var7;
            var7 = var5.bind(var6)();
            var3 = var7.done;
            var4 = var7;
            if(!var3) { _fun0008_ip = 122; continue _fun0008 }
 169:
            var2 = var2.favoriteGifs;
            var3 = var1.length;
            var1 = 2;
            var1 = var3 > var1;
            var2['hideTooltip'] = var1;
            var1 = true;
            return var1;
 197:
            var1 = false;
            return var1;
        }
    };
    var4['run'] = var2;
    var2 = function cleanup() {
        var1 = undefined;
        return var1;
    };
    var4['cleanup'] = var2;
    var2 = new Array(8);
    var2[0] = var4;
    var4 = {};
    var7 = 3;
    var4['version'] = var7;
    var7 = function run(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var3 = arg1;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var6 = undefined;
            var2 = var5.bind(var6)(var2);
            var7 = var2.PersistedStore;
            var5 = var7.migrateAndReadStoreState;
            var2 = new Array(2);
            var8 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg1;
                    var2 = null;
                    if(!(var2 != var1)) { _fun0010_ip = 38; continue _fun0010 }
 9:
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.keys;
                    var2 = var2.bind(var3)(var1);
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 === var3)) { _fun0010_ip = 59; continue _fun0010 }
 38:
                    var2 = {};
                    var3 = {};
                    var2['usageHistory'] = var3;
                    var3 = new Array(0);
                    var2['favorites'] = var3;
                    var1 = var2;
 59:
                    return var1;
                }
            };
            var2[0] = var8;
            var1 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = arg1;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0011_ip = 66; continue _fun0011 }
 9:
                    var1 = global;
                    var3 = var1.Object;
                    var1 = var3.keys;
                    var1 = var1.bind(var3)(var2);
                    var3 = var1.length;
                    var1 = 0;
                    if(!(var1 !== var3)) { _fun0011_ip = 66; continue _fun0011 }
 38:
                    var3 = var2.favorites;
                    var1 = var2;
                    if(!(var4 == var3)) { _fun0011_ip = 87; continue _fun0011 }
 51:
                    var3 = new Array(0);
                    var2['favorites'] = var3;
                    var1 = var2;
                    _fun0011_ip = 87; continue _fun0011;
 66:
                    var2 = {};
                    var3 = {};
                    var2['usageHistory'] = var3;
                    var3 = new Array(0);
                    var2['favorites'] = var3;
                    var1 = var2;
 87:
                    return var1;
                }
            };
            var2[1] = var1;
            var1 = 'StickersPersistedStore';
            var1 = var5.bind(var7)(var1, var2);
            var2 = var1.state;
            var1 = null;
            if(!(var1 != var2)) { _fun0009_ip = 349; continue _fun0009 }
 94:
            var1 = var2.favorites;
            var1 = var1.length;
            var7 = 0;
            var5 = var1 > var7;
            var1 = false;
            if(!var5) { _fun0009_ip = 219; continue _fun0009 }
 116:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 3;
            var5 = var10[var5];
            var5 = var8.bind(var6)(var5);
            var8 = var5.FavoriteStickers;
            var5 = var8.create;
            var5 = var5.bind(var8)();
            var3['favoriteStickers'] = var5;
            var8 = var3.favoriteStickers;
            var9 = _closure1_slot1;
            var5 = 4;
            var5 = var10[var5];
            var10 = var9.bind(var6)(var5);
            var9 = var10.uniq;
            var5 = var2.favorites;
            var10 = var9.bind(var10)(var5);
            var9 = var10.slice;
            var5 = _closure1_slot3;
            var5 = var9.bind(var10)(var7, var5);
            var8['stickerIds'] = var5;
            var1 = true;
 219:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 4;
            var5 = var9[var5];
            var9 = var8.bind(var6)(var5);
            var8 = var9.size;
            var5 = var2.usageHistory;
            var5 = var8.bind(var9)(var5);
            if(!(var5 > var7)) { _fun0009_ip = 347; continue _fun0009 }
 259:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 3;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var8 = var4.StickerFrecency;
            var4 = var8.create;
            var4 = var4.bind(var8)();
            var3['stickerFrecency'] = var4;
            var3 = var3.stickerFrecency;
            var4 = 5;
            var4 = var7[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.serializeUsageHistory;
            var4 = var2.usageHistory;
            var2 = 100;
            var2 = var5.bind(var6)(var4, var2);
            var3['stickers'] = var2;
            var1 = true;
 347:
            return var1;
 349:
            var1 = false;
            return var1;
        }
    };
    var4['run'] = var7;
    var7 = function cleanup() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.Storage;
        var3 = var4.remove;
        var2 = 'StickersPersistedStore';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['cleanup'] = var7;
    var2[1] = var4;
    var4 = {};
    var7 = 4;
    var4['version'] = var7;
    var7 = function run(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var6 = undefined;
            var1 = var2.bind(var6)(var1);
            var7 = var1.PersistedStore;
            var5 = var7.migrateAndReadStoreState;
            var2 = new Array(1);
            var1 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.Storage;
                    var3 = var4.get;
                    var2 = 'EmojiUsageHistory';
                    var2 = var3.bind(var4)(var2);
                    if(var2) { _fun0013_ip = 54; continue _fun0013 }
 52:
                    var2 = {};
 54:
                    var1['usageHistory'] = var2;
                    return var1;
                }
            };
            var2[0] = var1;
            var1 = 'EmojiStore';
            var1 = var5.bind(var7)(var1, var2);
            var2 = var1.state;
            var5 = null;
            if(!(var5 != var2)) { _fun0012_ip = 355; continue _fun0012 }
 83:
            var1 = var2.favorites;
            var5 = var5 != var1;
            if(!var5) { _fun0012_ip = 113; continue _fun0012 }
 96:
            var1 = var2.favorites;
            var7 = var1.length;
            var1 = 0;
            var5 = var7 > var1;
 113:
            var1 = false;
            if(!var5) { _fun0012_ip = 223; continue _fun0012 }
 118:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 3;
            var5 = var9[var5];
            var5 = var7.bind(var6)(var5);
            var7 = var5.FavoriteEmojis;
            var5 = var7.create;
            var5 = var5.bind(var7)();
            var3['favoriteEmojis'] = var5;
            var7 = var3.favoriteEmojis;
            var8 = _closure1_slot1;
            var5 = 4;
            var5 = var9[var5];
            var9 = var8.bind(var6)(var5);
            var8 = var9.uniq;
            var5 = var2.favorites;
            var10 = var8.bind(var9)(var5);
            var9 = var10.slice;
            var8 = _closure1_slot3;
            var5 = 0;
            var5 = var9.bind(var10)(var5, var8);
            var7['emojis'] = var5;
            var1 = true;
 223:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 4;
            var5 = var8[var5];
            var8 = var7.bind(var6)(var5);
            var7 = var8.size;
            var5 = var2.usageHistory;
            var7 = var7.bind(var8)(var5);
            var5 = 0;
            if(!(var7 > var5)) { _fun0012_ip = 353; continue _fun0012 }
 265:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 3;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var8 = var4.EmojiFrecency;
            var4 = var8.create;
            var4 = var4.bind(var8)();
            var3['emojiFrecency'] = var4;
            var3 = var3.emojiFrecency;
            var4 = 5;
            var4 = var7[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.serializeUsageHistory;
            var4 = var2.usageHistory;
            var2 = 100;
            var2 = var5.bind(var6)(var4, var2);
            var3['emojis'] = var2;
            var1 = true;
 353:
            return var1;
 355:
            var1 = false;
            return var1;
        }
    };
    var4['run'] = var7;
    var7 = function cleanup() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 6;
        var5 = var4[var2];
        var1 = undefined;
        var5 = var3.bind(var1)(var5);
        var7 = var5.Storage;
        var6 = var7.remove;
        var5 = 'EmojiStore';
        var5 = var6.bind(var7)(var5);
        var5 = var4[var2];
        var5 = var3.bind(var1)(var5);
        var7 = var5.Storage;
        var6 = var7.remove;
        var5 = 'EmojiUsageHistory';
        var5 = var6.bind(var7)(var5);
        var2 = var4[var2];
        var2 = var3.bind(var1)(var2);
        var4 = var2.Storage;
        var3 = var4.remove;
        var2 = 'EmojiDiversitySurrogate';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['cleanup'] = var7;
    var2[2] = var4;
    var4 = {};
    var7 = 6;
    var4['version'] = var7;
    var7 = function run(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var8 = arg1;
            var1 = var8.favoriteGifs;
            var3 = null;
            if(!(var3 == var1)) { _fun0014_ip = 63; continue _fun0014 }
 17:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var4 = var1.FavoriteGIFs;
            var1 = var4.create;
            var1 = var1.bind(var4)();
            var8['favoriteGifs'] = var1;
 63:
            var1 = var8.favoriteGifs;
            var1 = var1.gifs;
            if(!(var3 == var1)) { _fun0014_ip = 93; continue _fun0014 }
 79:
            var3 = var8.favoriteGifs;
            var1 = {};
            var3['gifs'] = var1;
 93:
            var3 = _closure1_slot8;
            var6 = undefined;
            var1 = 1;
            var13 = var3.bind(var6)(var1);
            var _closure2_slot0 = var13;
            var1 = var13.length;
            var5 = 0;
            if(!(var5 !== var1)) { _fun0014_ip = 660; continue _fun0014 }
 128:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 4;
            var3 = var1[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var8.favoriteGifs;
            var3 = var3.gifs;
            var4 = var4.bind(var6)(var3);
            var3 = var4.values;
            var9 = var3.bind(var4)();
            var4 = var9.sortBy;
            var3 = 'order';
            var4 = var4.bind(var9)(var3);
            var3 = var4.forEach;
            var2 = function(arg1, arg2) {
                var1 = _closure2_slot0;
                var2 = var1.length;
                var1 = 1;
                var2 = var2 + var1;
                var1 = arg2;
                var1 = var2 + var1;
                var2 = arg1;
                var2['order'] = var1;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var2 = _closure1_slot0;
            var4 = 3;
            var1 = var1[var4];
            var1 = var2.bind(var6)(var1);
            var3 = var1.FavoriteGIFs;
            var2 = var3.toBinary;
            var1 = var8.favoriteGifs;
            var1 = var2.bind(var3)(var1);
            var12 = var1.length;
            var1 = _closure1_slot6;
            var11 = var1.bind(var6)(var13);
            var2 = var11.bind(var6)();
            var1 = var2.done;
            var10 = 7;
            var9 = var2;
            var3 = 0;
            var2 = undefined;
            if(var1) { _fun0014_ip = 490; continue _fun0014 }
 284:
            var1 = var9.value;
            var17 = var1.url;
            var1 = var1.favorite;
            var14 = var13.length;
            var14 = var14 - var3;
            var1['order'] = var14;
            var3 = var3 + 1;
            var14 = var8.favoriteGifs;
            var14 = var14.gifs;
            var14 = var17 in var14;
            if(var14) { _fun0014_ip = 432; continue _fun0014 }
 337:
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var4];
            var14 = var15.bind(var6)(var14);
            var15 = var14.FavoriteGIF;
            var14 = var15.toBinary;
            var14 = var14.bind(var15)(var1);
            var15 = var14.length;
            var14 = var17.length;
            var14 = var15 + var14;
            var16 = var14 + var10;
            var19 = var12 + var16;
            var18 = _closure1_slot4;
            var15 = var12;
            var14 = var16;
            if(!(!(var19 > var18))) { _fun0014_ip = 466; continue _fun0014 }
 407:
            var15 = var12 + var16;
            var19 = var8.favoriteGifs;
            var19 = var19.gifs;
            var19[var17] = var1;
            var14 = var16;
            _fun0014_ip = 466; continue _fun0014;
 432:
            var16 = var8.favoriteGifs;
            var16 = var16.gifs;
            var16 = var16[var17];
            var1 = var1.order;
            var16['order'] = var1;
            var15 = var12;
            var14 = var2;
 466:
            var16 = var11.bind(var6)();
            var1 = var16.done;
            var12 = var15;
            var2 = var14;
            var9 = var16;
            if(!var1) { _fun0014_ip = 284; continue _fun0014 }
 490:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var1 = var2.bind(var6)(var1);
            var3 = var1.FavoriteGIFs;
            var2 = var3.toBinary;
            var1 = var8.favoriteGifs;
            var1 = var2.bind(var3)(var1);
            var2 = var1.length;
            var1 = _closure1_slot4;
            var3 = 10;
            if(!(var2 > var1)) { _fun0014_ip = 656; continue _fun0014 }
 546:
            var1 = var8.favoriteGifs;
            var11 = var1.gifs;
            var1 = 0;
            for(var2 in var11)
 568:
            {
 577:
                var14 = var2;
                var13 = var8.favoriteGifs;
                var13 = var13.gifs;
                var13 = delete var13[var14];
                var1 = var1 + 1;
                if(!(var1 >= var3)) { _fun0014_ip = 568; continue _fun0014 }
            }
 603:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var1 = var2.bind(var6)(var1);
            var9 = var1.FavoriteGIFs;
            var2 = var9.toBinary;
            var1 = var8.favoriteGifs;
            var1 = var2.bind(var9)(var1);
            var2 = var1.length;
            var1 = _closure1_slot4;
            if(var2 > var1) { _fun0014_ip = 546; continue _fun0014 }
 656:
            var1 = true;
            return var1;
 660:
            var1 = false;
            return var1;
        }
    };
    var4['run'] = var7;
    var7 = function cleanup() {
        var1 = undefined;
        return var1;
    };
    var4['cleanup'] = var7;
    var2[3] = var4;
    var4 = {};
    var7 = 7;
    var4['version'] = var7;
    var7 = function run(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var6 = undefined;
            var1 = var2.bind(var6)(var1);
            var7 = var1.PersistedStore;
            var5 = var7.migrateAndReadStoreState;
            var2 = 'ApplicationCommandFrecency';
            var1 = new Array(0);
            var1 = var5.bind(var7)(var2, var1);
            var2 = var1.state;
            var1 = null;
            if(!(var1 != var2)) { _fun0015_ip = 208; continue _fun0015 }
 68:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var7 = var5.bind(var6)(var1);
            var5 = var7.size;
            var1 = var2.usageHistory;
            var5 = var5.bind(var7)(var1);
            var1 = 0;
            var5 = var5 > var1;
            var1 = false;
            if(!var5) { _fun0015_ip = 206; continue _fun0015 }
 115:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 3;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var8 = var4.ApplicationCommandFrecency;
            var4 = var8.create;
            var4 = var4.bind(var8)();
            var3['applicationCommandFrecency'] = var4;
            var3 = var3.applicationCommandFrecency;
            var4 = 5;
            var4 = var7[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.serializeUsageHistory;
            var4 = var2.usageHistory;
            var2 = 500;
            var2 = var5.bind(var6)(var4, var2);
            var3['applicationCommands'] = var2;
            var1 = true;
 206:
            return var1;
 208:
            var1 = false;
            return var1;
        }
    };
    var4['run'] = var7;
    var7 = function cleanup() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.Storage;
        var3 = var4.remove;
        var2 = 'ApplicationCommandFrecency';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['cleanup'] = var7;
    var2[4] = var4;
    var7 = {};
    var4 = 8;
    var7['version'] = var4;
    var9 = function run(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var7 = var1.PersistedStore;
            var5 = var7.migrateAndReadStoreState;
            var3 = 'SoundboardFavoriteStore';
            var1 = new Array(0);
            var1 = var5.bind(var7)(var3, var1);
            var3 = var1.state;
            var _closure2_slot1 = var3;
            var1 = null;
            if(!(var1 != var3)) { _fun0016_ip = 221; continue _fun0016 }
 80:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var7 = var5.bind(var6)(var1);
            var5 = var7.size;
            var1 = var3.favoriteSounds;
            var5 = var5.bind(var7)(var1);
            var1 = 0;
            var5 = var5 > var1;
            var1 = false;
            if(!var5) { _fun0016_ip = 219; continue _fun0016 }
 127:
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 3;
            var5 = var7[var5];
            var5 = var9.bind(var6)(var5);
            var9 = var5.FavoriteSoundboardSounds;
            var5 = var9.create;
            var5 = var5.bind(var9)();
            var8['favoriteSoundboardSounds'] = var5;
            var5 = _closure1_slot1;
            var4 = 7;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.keys;
            var3 = var3.favoriteSounds;
            var4 = var4.bind(var5)(var3);
            var3 = var4.forEach;
            var2 = function(arg1) {
                var1 = global;
                var3 = var1.Set;
                var1 = _closure2_slot1;
                var2 = var1.favoriteSounds;
                var1 = arg1;
                var4 = var2[var1];
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var3 = var1 instanceof Object ? var1 : var2;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        var1 = _closure2_slot0;
                        var1 = var1.favoriteSoundboardSounds;
                        var2 = null;
                        if(!(var2 != var1)) { _fun0017_ip = 38; continue _fun0017 }
 19:
                        var3 = var1.soundIds;
                        var2 = var3.push;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
 38:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var1 = true;
 219:
            return var1;
 221:
            var1 = false;
            return var1;
        }
    };
    var7['run'] = var9;
    var9 = function cleanup() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.Storage;
        var3 = var4.remove;
        var2 = 'SoundboardFavoriteStore';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var7['cleanup'] = var9;
    var2[5] = var7;
    var7 = {};
    var9 = 9;
    var7['version'] = var9;
    var9 = function run(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 6;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var6 = var3.Storage;
            var5 = var6.get;
            var3 = 'selectedChannelGuildFrecency';
            var5 = var5.bind(var6)(var3);
            var3 = null;
            if(!(var3 != var5)) { _fun0018_ip = 189; continue _fun0018 }
 59:
            var8 = var5;
            for(var3 in var8)
 70:
            {
 79:
                var10 = var3;
                var12 = _closure1_slot5;
                var11 = var12.test;
                var11 = var11.bind(var12)(var10);
                if(var11) { _fun0018_ip = 70; continue _fun0018 }
 99:
                var10 = delete var5[var10];
                _fun0018_ip = 70; continue _fun0018;
            }
 105:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var7 = var2.GuildAndChannelFrecency;
            var2 = var7.create;
            var2 = var2.bind(var7)();
            var1['guildAndChannelFrecency'] = var2;
            var2 = var1.guildAndChannelFrecency;
            var1 = 5;
            var1 = var6[var1];
            var4 = var3.bind(var4)(var1);
            var3 = var4.serializeUsageHistory;
            var1 = 100;
            var1 = var3.bind(var4)(var5, var1);
            var2['guildAndChannels'] = var1;
            var1 = true;
            return var1;
 189:
            var1 = false;
            return var1;
        }
    };
    var7['run'] = var9;
    var9 = function cleanup() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.Storage;
        var3 = var4.remove;
        var2 = 'selectedChannelGuildFrecency';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var7['cleanup'] = var9;
    var2[6] = var7;
    var7 = {};
    var9 = 10;
    var7['version'] = var9;
    var9 = function run(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var3 = arg1;
            var1 = var3.emojiFrecency;
            var8 = null;
            if(!(var8 != var1)) { _fun0019_ip = 214; continue _fun0019 }
 18:
            var1 = var3.emojiFrecency;
            var5 = var1.emojis;
            if(!(var8 == var5)) { _fun0019_ip = 36; continue _fun0019 }
 34:
            var5 = {};
 36:
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 4;
            var1 = var6[var1];
            var6 = undefined;
            var2 = var2.bind(var6)(var1);
            var1 = var2.size;
            var2 = var1.bind(var2)(var5);
            var1 = 0;
            var2 = var2 > var1;
            var1 = false;
            if(!var2) { _fun0019_ip = 212; continue _fun0019 }
 85:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 3;
            var2 = var5[var7];
            var2 = var9.bind(var6)(var2);
            var10 = var2.EmojiFrecency;
            var2 = var10.create;
            var2 = var2.bind(var10)();
            var5 = var5[var7];
            var5 = var9.bind(var6)(var5);
            var10 = var5.EmojiFrecency;
            var9 = var10.mergePartial;
            var5 = var3.emojiFrecency;
            var5 = var9.bind(var10)(var2, var5);
            var5 = var3.emojiReactionFrecency;
            if(!(var8 != var5)) { _fun0019_ip = 204; continue _fun0019 }
 163:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var6 = var4.EmojiFrecency;
            var5 = var6.mergePartial;
            var4 = var3.emojiReactionFrecency;
            var4 = var5.bind(var6)(var2, var4);
 204:
            var3['emojiReactionFrecency'] = var2;
            var1 = true;
 212:
            return var1;
 214:
            var1 = false;
            return var1;
        }
    };
    var7['run'] = var9;
    var8 = function cleanup() {
        var1 = undefined;
        return var1;
    };
    var7['cleanup'] = var8;
    var2[7] = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/FrecencySettingsMigrations.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();