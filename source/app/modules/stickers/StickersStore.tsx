// app/modules/stickers/StickersStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot28 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot30;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot30;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                    _fun0003_ip = 67; continue _fun0003;
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
    var _closure1_slot29 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function ingestCreatedGuild(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var6 = _closure1_slot12;
            var5 = var6.getGuild;
            var2 = var1.id;
            var2 = var5.bind(var6)(var2);
            var _closure2_slot0 = var2;
            var7 = null;
            var5 = var7 != var2;
            if(!var5) { _fun0005_ip = 56; continue _fun0005 }
 40:
            var6 = var1.stickers;
            var6 = var6.items;
            var5 = var7 != var6;
 56:
            if(!var5) { _fun0005_ip = 115; continue _fun0005 }
 59:
            var5 = var1.stickers;
            var6 = var5.items;
            var5 = var6.forEach;
            var4 = function(arg1) {
                var5 = _closure1_slot25;
                var4 = _closure2_slot0;
                var3 = undefined;
                var2 = arg1;
                var1 = true;
                var1 = var5.bind(var3)(var2, var1, var4);
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            var4 = _closure1_slot22;
            var3 = var2.id;
            var1 = var1.stickers;
            var2 = var1.items;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
 115:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var12 = 0;
    var8 = var6[var12];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var11 = 1;
    var8 = var6[var11];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var10 = 2;
    var8 = var6[var10];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = {};
    var8['Unloaded'] = var12;
    var9 = 'Unloaded';
    var8[var12] = var9;
    var8['MaybeLoaded'] = var11;
    var9 = 'MaybeLoaded';
    var8[var11] = var9;
    var8['Loaded'] = var10;
    var9 = 'Loaded';
    var8[var10] = var9;
    var _closure1_slot13 = var8;
    var8 = var8.Unloaded;
    var _closure1_slot14 = var8;
    var8 = var2.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var16 = var9;
    var8 = new var16[var8](var15);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot15 = var8;
    var8 = var2.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var16 = var9;
    var8 = new var16[var8](var15);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot16 = var8;
    var8 = null;
    var _closure1_slot17 = var8;
    var9 = new Array(0);
    var _closure1_slot18 = var9;
    var _closure1_slot19 = var8;
    var8 = false;
    var _closure1_slot20 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var16 = var8;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot21 = var2;
    var2 = function setGuildStickersByGuildId(arg1, arg2) {
        var1 = global;
        var4 = var1.Map;
        var6 = _closure1_slot21;
        var5 = var6.set;
        var3 = arg1;
        var1 = arg2;
        var8 = var5.bind(var6)(var3, var1);
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var9 = var3;
        var1 = new var9[var4](var8, var7);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot21 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot22 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.Millis;
    var2 = var2.HOUR;
    var _closure1_slot23 = var2;
    var2 = function() {
        var4 = _closure1_slot9;
        var3 = undefined;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 206; continue _fun0006 }
 12:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var6 = _closure1_slot14;
                    var5 = _closure1_slot13;
                    var5 = var5.Unloaded;
                    if(!(var6 === var5)) { _fun0006_ip = 200; continue _fun0006 }
 42:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 11;
                    var5 = var7[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.database;
                    var6 = var5.bind(var6)();
                    _closure4_slot0 = var6;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0006_ip = 200; continue _fun0006 }
 82:
                    var6 = _closure1_slot13;
                    var6 = var6.Loaded;
                    _closure1_slot14 = var6;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 12;
                    var6 = var8[var6];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.tryLoadOrResetCacheGatewayAsync;
                    var6 = 'StickerStore.loadSavedGuildStickers';
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.timeAsync;
                        var3 = '💾';
                        var2 = 'loadSavedGuildStickers';
                        var1 = function() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getAsync;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var1;
                    };
                    var2 = var7.bind(var8)(var6, var2);
                    SaveGenerator(address=143);
 141:
                    return var2;
 143:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0006_ip = 203; continue _fun0006 }
 149:
                    if(!(var5 != var2)) { _fun0006_ip = 200; continue _fun0006 }
 153:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 15;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'CACHED_STICKERS_LOADED';
                    var4['type'] = var7;
                    var4['stickers'] = var2;
                    var4 = var5.bind(var6)(var4);
 200:
                    return var3;
 203:
                    return var2;
 206:
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
    var2 = var2.bind(var1)();
    var _closure1_slot24 = var2;
    var2 = function ingestSticker(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var5 = arguments[1];
            var3 = arguments[2];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0007_ip = 17; continue _fun0007 }
 15:
            var5 = true;
 17:
            if(!(var3 === var1)) { _fun0007_ip = 23; continue _fun0007 }
 21:
            var3 = null;
 23:
            var8 = _closure1_slot16;
            var7 = var8.set;
            var6 = var4.id;
            var6 = var7.bind(var8)(var6, var4);
            if(!var5) { _fun0007_ip = 59; continue _fun0007 }
 49:
            var2 = _closure1_slot26;
            var2 = var2.bind(var1)(var4, var3);
 59:
            return var1;
        }
    };
    var _closure1_slot25 = var2;
    var2 = function ingestStickerMetadata(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var5 = arguments[1];
            var _closure2_slot0 = var2;
            var1 = undefined;
            if(!(var5 === var1)) { _fun0008_ip = 20; continue _fun0008 }
 18:
            var5 = null;
 20:
            var _closure2_slot1 = var1;
            var7 = _closure1_slot17;
            var4 = null;
            if(!(var4 != var7)) { _fun0008_ip = 665; continue _fun0008 }
 40:
            var8 = var2.tags;
            var9 = {};
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var10 = 16;
            var12 = var7[var10];
            var12 = var11.bind(var1)(var12);
            var12 = var12.StickerMetadataTypes;
            var12 = var12.STICKER_NAME;
            var9['type'] = var12;
            var13 = var2.name;
            var12 = var13.trim;
            var13 = var12.bind(var13)();
            var12 = var13.toLocaleLowerCase;
            var12 = var12.bind(var13)();
            var9['value'] = var12;
            var12 = 17;
            var7 = var7[var12];
            var11 = var11.bind(var1)(var7);
            var7 = var11.isStandardSticker;
            var7 = var7.bind(var11)(var2);
            if(var7) { _fun0008_ip = 506; continue _fun0008 }
 142:
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var12];
            var11 = var11.bind(var1)(var7);
            var7 = var11.isGuildSticker;
            var7 = var7.bind(var11)(var2);
            if(!var7) { _fun0008_ip = 665; continue _fun0008 }
 176:
            if(!(var4 != var8)) { _fun0008_ip = 665; continue _fun0008 }
 183:
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 18;
            var7 = var13[var7];
            var11 = var11.bind(var1)(var7);
            var7 = var11.getByName;
            var11 = var7.bind(var11)(var8);
            var12 = new Array(2);
            var12[0] = var9;
            var7 = {};
            var14 = _closure1_slot0;
            var13 = var13[var10];
            var13 = var14.bind(var1)(var13);
            var13 = var13.StickerMetadataTypes;
            var13 = var13.TAG;
            var7['type'] = var13;
            var13 = var8.trim;
            var14 = var13.bind(var8)();
            var13 = var14.toLocaleLowerCase;
            var13 = var13.bind(var14)();
            var7['value'] = var13;
            var12[1] = var7;
            _closure2_slot1 = var12;
            if(!(var4 != var5)) { _fun0008_ip = 381; continue _fun0008 }
 289:
            var7 = var5.name;
            var5 = var7.trim;
            var7 = var5.bind(var7)();
            var5 = var7.toLocaleLowerCase;
            var13 = var5.bind(var7)();
            var5 = var4 != var13;
            if(!var5) { _fun0008_ip = 329; continue _fun0008 }
 321:
            var7 = '';
            var5 = var7 !== var13;
 329:
            if(!var5) { _fun0008_ip = 381; continue _fun0008 }
 332:
            var7 = var12.push;
            var5 = {};
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var10];
            var14 = var15.bind(var1)(var14);
            var14 = var14.StickerMetadataTypes;
            var14 = var14.GUILD_NAME;
            var5['type'] = var14;
            var5['value'] = var13;
            var5 = var7.bind(var12)(var5);
 381:
            if(!(var4 != var11)) { _fun0008_ip = 482; continue _fun0008 }
 385:
            var7 = var12.push;
            var5 = {};
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var10];
            var13 = var14.bind(var1)(var13);
            var13 = var13.StickerMetadataTypes;
            var13 = var13.CORRELATED_EMOJI;
            var5['type'] = var13;
            var13 = var11.surrogates;
            var5['value'] = var13;
            var5 = var7.bind(var12)(var5);
            var7 = var11.forEachDiversity;
            var5 = function(arg1) {
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 16;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                var4 = var4.StickerMetadataTypes;
                var4 = var4.CORRELATED_EMOJI;
                var1['type'] = var4;
                var4 = arg1;
                var4 = var4.surrogates;
                var1['value'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var7.bind(var11)(var5);
            var11 = _closure1_slot17;
            var7 = var11.set;
            var5 = var2.id;
            var5 = var7.bind(var11)(var5, var12);
            _fun0008_ip = 665; continue _fun0008;
 482:
            var11 = _closure1_slot17;
            var7 = var11.set;
            var5 = var2.id;
            var5 = var7.bind(var11)(var5, var12);
            var5 = undefined;
            return var5;
 506:
            var11 = _closure1_slot18;
            var7 = var11.find;
            var5 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.pack_id;
                var1 = var2 === var1;
                return var1;
            };
            var7 = var7.bind(var11)(var5);
            var5 = new Array(1);
            var5[0] = var9;
            var9 = var4 != var8;
            var11 = '';
            if(!var9) { _fun0008_ip = 548; continue _fun0008 }
 545:
            var11 = var8;
 548:
            var9 = var11.split;
            var8 = ',';
            var9 = var9.bind(var11)(var8);
            var8 = var9.map;
            var6 = function(arg1) {
                var3 = arg1;
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 16;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.StickerMetadataTypes;
                var2 = var2.TAG;
                var1['type'] = var2;
                var2 = var3.trim;
                var3 = var2.bind(var3)();
                var2 = var3.toLocaleLowerCase;
                var2 = var2.bind(var3)();
                var1['value'] = var2;
                return var1;
            };
            var17 = var8.bind(var9)(var6);
            var16 = 1;
            var18 = var5;
            var6 = arraySpread(var18, var17, var16);
            if(!(var4 != var7)) { _fun0008_ip = 645; continue _fun0008 }
 591:
            var6 = var5.push;
            var4 = {};
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var1)(var8);
            var8 = var8.StickerMetadataTypes;
            var8 = var8.PACK_NAME;
            var4['type'] = var8;
            var7 = var7.name;
            var4['value'] = var7;
            var4 = var6.bind(var5)(var4);
 645:
            var4 = _closure1_slot17;
            var3 = var4.set;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2, var5);
 665:
            return var1;
        }
    };
    var _closure1_slot26 = var2;
    var2 = function ingestStickerPack(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = arg1;
            var3 = arg2;
            var4 = arg3;
            var _closure2_slot0 = var2;
            var8 = _closure1_slot15;
            var7 = var8.set;
            var5 = var2.id;
            var5 = var7.bind(var8)(var5, var2);
            var10 = _closure1_slot18;
            var5 = new Array(0);
            var9 = 0;
            var11 = var5;
            var7 = arraySpread(var11, var10, var9);
            if(!var3) { _fun0009_ip = 104; continue _fun0009 }
 58:
            var8 = var5.findIndex;
            var7 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 === var1;
                return var1;
            };
            var7 = var8.bind(var5)(var7);
            var8 = -1;
            if(!(var8 === var7)) { _fun0009_ip = 96; continue _fun0009 }
 84:
            var8 = var5.push;
            var8 = var8.bind(var5)(var2);
            _fun0009_ip = 100; continue _fun0009;
 96:
            var5[var7] = var2;
 100:
            _closure1_slot18 = var5;
 104:
            if(var3) { _fun0009_ip = 110; continue _fun0009 }
 107:
            var3 = var4;
 110:
            if(!var3) { _fun0009_ip = 134; continue _fun0009 }
 113:
            var3 = var2.stickers;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var3 = _closure1_slot25;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 134:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot27 = var2;
    var2 = 19;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function StickersStore() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot28;
                var1 = var1.bind(var3)();
                if(var1) { _fun0010_ip = 69; continue _fun0010 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0010_ip = 105; continue _fun0010;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function initialize() {
            var6 = this;
            var5 = var6.waitFor;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = _closure1_slot11;
            var2 = _closure1_slot12;
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(14);
        var1[0] = var5;
        var5 = {};
        var7 = 'isLoaded';
        var5['key'] = var7;
        var7 = function get() {
            var2 = _closure1_slot14;
            var1 = _closure1_slot13;
            var1 = var1.Unloaded;
            var1 = var2 !== var1;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'loadState';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'stickerMetadata';
        var5['key'] = var7;
        var7 = function get() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var4 = _closure1_slot24;
                var3 = undefined;
                var3 = var4.bind(var3)();
                var4 = _closure1_slot17;
                var3 = null;
                if(!(var3 == var4)) { _fun0011_ip = 95; continue _fun0011 }
 25:
                var3 = global;
                var3 = var3.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var7 = var4;
                var3 = new var7[var3](var6);
                var3 = var3 instanceof Object ? var3 : var4;
                _closure1_slot17 = var3;
                var5 = _closure1_slot21;
                var4 = var5.forEach;
                var3 = function(arg1, arg2) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var3 = arg1;
                        var5 = _closure1_slot12;
                        var4 = var5.getGuild;
                        var2 = arg2;
                        var4 = var4.bind(var5)(var2);
                        var _closure4_slot0 = var4;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0012_ip = 50; continue _fun0012 }
 35:
                        var2 = var3.forEach;
                        var1 = function(arg1) {
                            var4 = _closure1_slot26;
                            var3 = _closure4_slot0;
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var2)(var1, var3);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
 50:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot18;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var1 = arg1;
                    var3 = var1.stickers;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var3 = _closure1_slot26;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
 95:
                var1 = _closure1_slot17;
                return var1;
            }
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasLoadedStickerPacks';
        var5['key'] = var7;
        var7 = function get() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var3 = _closure1_slot19;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0013_ip = 49; continue _fun0013 }
 16:
                var3 = _closure1_slot19;
                var2 = _closure1_slot23;
                var3 = var3 + var2;
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var1 = var3 > var2;
 49:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isFetchingStickerPacks';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getStickerById';
        var5['key'] = var7;
        var7 = function getStickerById(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var3 = arg1;
                var4 = _closure1_slot16;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if(var2) { _fun0014_ip = 33; continue _fun0014 }
 23:
                var4 = _closure1_slot24;
                var2 = undefined;
                var2 = var4.bind(var2)();
 33:
                var2 = _closure1_slot16;
                var1 = var2.get;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getStickerPack';
        var5['key'] = var7;
        var7 = function getStickerPack(arg1) {
            var3 = _closure1_slot15;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getPremiumPacks';
        var5['key'] = var7;
        var7 = function getPremiumPacks() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isPremiumPack';
        var5['key'] = var7;
        var7 = function isPremiumPack(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure1_slot18;
            var2 = var3.some;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getRawStickersByGuild';
        var5['key'] = var7;
        var7 = function getRawStickersByGuild() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getAllStickersIterator';
        var5['key'] = var7;
        var7 = function getAllStickersIterator() {
            var3 = _closure1_slot24;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var2 = _closure1_slot16;
            var1 = var2.values;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getAllGuildStickers';
        var5['key'] = var7;
        var7 = function getAllGuildStickers() {
            var3 = _closure1_slot24;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getStickersByGuildId';
        var5['key'] = var7;
        var6 = function getStickersByGuildId(arg1) {
            var3 = _closure1_slot24;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var3 = _closure1_slot21;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[13] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'StickersStore';
    var8['displayName'] = var2;
    var2 = 15;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function BACKGROUND_SYNC() {
        var1 = null;
        _closure1_slot17 = var1;
        var1 = global;
        var3 = var1.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot16 = var3;
        var1 = var1.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var5 = var3;
        var1 = new var5[var1](var4);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot21 = var1;
        var1 = _closure1_slot13;
        var1 = var1.Unloaded;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var2['BACKGROUND_SYNC'] = var9;
    var9 = function CONNECTION_OPEN(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var4 = var1.guilds;
            var1 = null;
            _closure1_slot17 = var1;
            var1 = global;
            var3 = var1.Map;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var7 = var5;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var5;
            _closure1_slot16 = var3;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var7 = var3;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var3;
            _closure1_slot21 = var1;
            var3 = var4.forEach;
            var1 = _closure1_slot31;
            var1 = var3.bind(var4)(var1);
            var3 = var4.every;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.stickers;
                var2 = var1.items;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var3 = _closure1_slot13;
            if(var1) { _fun0015_ip = 127; continue _fun0015 }
 119:
            var1 = var3.Unloaded;
            _fun0015_ip = 133; continue _fun0015;
 127:
            var1 = var3.MaybeLoaded;
 133:
            _closure1_slot14 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleGuildCreate(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var3 = var1.guild;
            var5 = _closure1_slot10;
            var4 = var5.isLurking;
            var1 = var3.id;
            var1 = var4.bind(var5)(var1);
            if(var1) { _fun0016_ip = 123; continue _fun0016 }
 34:
            var4 = _closure1_slot31;
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var4 = _closure1_slot14;
            var1 = _closure1_slot13;
            var1 = var1.MaybeLoaded;
            var1 = var4 === var1;
            if(!var1) { _fun0016_ip = 85; continue _fun0016 }
 66:
            var4 = var3.stickers;
            var5 = var4.op;
            var4 = 'update';
            var1 = var4 === var5;
 85:
            if(!var1) { _fun0016_ip = 106; continue _fun0016 }
 88:
            var3 = var3.stickers;
            var4 = var3.items;
            var3 = null;
            var1 = var3 == var4;
 106:
            if(!var1) { _fun0016_ip = 123; continue _fun0016 }
 109:
            var1 = _closure1_slot13;
            var1 = var1.Unloaded;
            _closure1_slot14 = var1;
 123:
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_CREATE'] = var9;
    var9 = function handleGuildDelete(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var5 = _closure1_slot21;
            var4 = var5.get;
            var3 = var1.id;
            var5 = var4.bind(var5)(var3);
            var3 = null;
            if(!(var3 == var5)) { _fun0017_ip = 40; continue _fun0017 }
 36:
            var5 = new Array(0);
 40:
            var4 = var5.forEach;
            var3 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var1 = arg1;
                    var4 = _closure1_slot17;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0018_ip = 35; continue _fun0018 }
 16:
                    var5 = _closure1_slot17;
                    var4 = var5.delete;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
 35:
                    var3 = _closure1_slot16;
                    var2 = var3.delete;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot21;
            var3 = var4.delete;
            var1 = var1.id;
            var1 = var3.bind(var4)(var1);
            var1 = global;
            var4 = var1.Map;
            var6 = _closure1_slot21;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var7 = var3;
            var1 = new var7[var4](var6, var5);
            var1 = var1 instanceof Object ? var1 : var3;
            _closure1_slot21 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['GUILD_DELETE'] = var9;
    var9 = function LOGOUT() {
        var1 = _closure1_slot13;
        var1 = var1.Unloaded;
        _closure1_slot14 = var1;
        var1 = new Array(0);
        _closure1_slot18 = var1;
        var3 = _closure1_slot16;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot15;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = null;
        _closure1_slot17 = var1;
        var4 = _closure1_slot21;
        var3 = var4.clear;
        var3 = var3.bind(var4)();
        var3 = global;
        var5 = var3.Map;
        var6 = _closure1_slot21;
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var7 = var4;
        var3 = new var7[var5](var6, var5);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot21 = var3;
        var3 = false;
        _closure1_slot20 = var3;
        _closure1_slot19 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var9;
    var9 = function STICKER_PACKS_FETCH_START() {
        var1 = true;
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var2['STICKER_PACKS_FETCH_START'] = var9;
    var9 = function STICKER_PACKS_FETCH_SUCCESS(arg1) {
        var1 = arg1;
        var3 = var1.packs;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var4 = _closure1_slot27;
            var3 = undefined;
            var2 = arg1;
            var1 = true;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = global;
        var2 = var1.Date;
        var1 = var2.now;
        var1 = var1.bind(var2)();
        _closure1_slot19 = var1;
        var1 = false;
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var2['STICKER_PACKS_FETCH_SUCCESS'] = var9;
    var9 = function STICKER_PACK_FETCH_SUCCESS(arg1) {
        var1 = arg1;
        var5 = var1.pack;
        var4 = var1.ingestStickers;
        var3 = _closure1_slot27;
        var1 = undefined;
        var2 = false;
        var2 = var3.bind(var1)(var5, var2, var4);
        return var1;
    };
    var2['STICKER_PACK_FETCH_SUCCESS'] = var9;
    var9 = function GUILD_STICKERS_FETCH_SUCCESS(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var3 = var1.stickers;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot25;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var2 = _closure1_slot22;
        var1 = undefined;
        var2 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var2['GUILD_STICKERS_FETCH_SUCCESS'] = var9;
    var9 = function GUILD_STICKERS_CREATE_SUCCESS(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var1 = arg1;
            var6 = var1.guildId;
            var3 = var1.sticker;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot21;
            var1 = var5.get;
            var8 = var1.bind(var5)(var6);
            var1 = null;
            if(!(var1 == var8)) { _fun0019_ip = 47; continue _fun0019 }
 43:
            var8 = new Array(0);
 47:
            var5 = _closure1_slot22;
            var7 = var8.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2 !== var1;
                return var1;
            };
            var7 = var7.bind(var8)(var4);
            if(!(var1 == var7)) { _fun0019_ip = 74; continue _fun0019 }
 70:
            var7 = new Array(0);
 74:
            var4 = new Array(1);
            var9 = 0;
            var11 = var4;
            var10 = var7;
            var7 = arraySpread(var11, var10, var9);
            var4[var7] = var3;
            var1 = 1;
            var1 = var7 + var1;
            var1 = undefined;
            var4 = var5.bind(var1)(var6, var4);
            var2 = _closure1_slot25;
            var2 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var2['GUILD_STICKERS_CREATE_SUCCESS'] = var9;
    var9 = function STICKER_FETCH_SUCCESS(arg1) {
        var1 = arg1;
        var4 = var1.sticker;
        var3 = _closure1_slot25;
        var1 = undefined;
        var2 = false;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var2['STICKER_FETCH_SUCCESS'] = var9;
    var9 = function GUILD_STICKERS_UPDATE(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildId;
            var6 = var1.stickers;
            var _closure2_slot0 = var6;
            var5 = _closure1_slot21;
            var3 = var5.get;
            var7 = var3.bind(var5)(var4);
            var3 = null;
            if(!(var3 == var7)) { _fun0020_ip = 47; continue _fun0020 }
 43:
            var7 = new Array(0);
 47:
            var5 = var7.filter;
            var3 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = _closure2_slot0;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var1.id;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 == var2;
                return var1;
            };
            var7 = var5.bind(var7)(var3);
            var5 = var7.forEach;
            var3 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var1 = arg1;
                    var5 = _closure1_slot16;
                    var4 = var5.delete;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure1_slot17;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0021_ip = 54; continue _fun0021 }
 35:
                    var3 = _closure1_slot17;
                    var2 = var3.delete;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var5.bind(var7)(var3);
            var5 = var6.map;
            var3 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var2 = arg1;
                    var5 = _closure1_slot16;
                    var4 = var5.get;
                    var3 = var2.id;
                    var4 = var4.bind(var5)(var3);
                    var6 = null;
                    var5 = var6 != var4;
                    if(!var5) { _fun0022_ip = 67; continue _fun0022 }
 34:
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var7.bind(var1)(var3);
                    var1 = var3.isGuildSticker;
                    var5 = var1.bind(var3)(var4);
 67:
                    var3 = undefined;
                    if(!var5) { _fun0022_ip = 94; continue _fun0022 }
 72:
                    var5 = var4.user;
                    var5 = var6 != var5;
                    var1 = undefined;
                    if(!var5) { _fun0022_ip = 91; continue _fun0022 }
 86:
                    var1 = var4.user;
 91:
                    var3 = var1;
 94:
                    var1 = {};
                    var9 = var1;
                    var8 = var2;
                    var2 = copyDataProperties(var9, var8);
                    var2 = 'user';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var3);
            var5 = var3.forEach;
            var2 = function(arg1) {
                var3 = _closure1_slot25;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2 = var5.bind(var3)(var2);
            var2 = _closure1_slot22;
            var1 = undefined;
            var2 = var2.bind(var1)(var4, var3);
            return var1;
        }
    };
    var2['GUILD_STICKERS_UPDATE'] = var9;
    var4 = function handleCachedStickersLoaded(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var1 = arg1;
            var3 = var1.stickers;
            var2 = _closure1_slot29;
            var1 = undefined;
            var11 = var2.bind(var1)(var3);
            var3 = var11.bind(var1)();
            var2 = var3.done;
            var10 = true;
            var9 = 2;
            var8 = 0;
            var7 = 1;
            var6 = var3;
            var5 = undefined;
            var4 = undefined;
            var3 = undefined;
            if(var2) { _fun0023_ip = 254; continue _fun0023 }
 57:
            var13 = var6.value;
            var2 = _closure1_slot8;
            var2 = var2.bind(var1)(var13, var9);
            var20 = var2[var8];
            var19 = var2[var7];
            var13 = _closure1_slot11;
            var2 = var13.isMember;
            var2 = var2.bind(var13)(var20);
            var15 = var5;
            var14 = var4;
            var13 = var3;
            if(!var2) { _fun0023_ip = 227; continue _fun0023 }
 107:
            var16 = _closure1_slot21;
            var2 = var16.has;
            var2 = var2.bind(var16)(var20);
            var15 = var5;
            var14 = var4;
            var13 = var3;
            if(var2) { _fun0023_ip = 227; continue _fun0023 }
 133:
            var16 = _closure1_slot12;
            var2 = var16.getGuild;
            var16 = var2.bind(var16)(var20);
            var2 = _closure1_slot29;
            var2 = var2.bind(var1)(var19);
            var17 = var2.bind(var1)();
            var18 = var17.done;
            var21 = var17;
            var17 = var21;
            if(var18) { _fun0023_ip = 208; continue _fun0023 }
 174:
            var22 = var21.value;
            var18 = _closure1_slot25;
            var18 = var18.bind(var1)(var22, var10, var16);
            var22 = var2.bind(var1)();
            var18 = var22.done;
            var21 = var22;
            var17 = var21;
            if(!var18) { _fun0023_ip = 174; continue _fun0023 }
 208:
            var18 = _closure1_slot22;
            var18 = var18.bind(var1)(var20, var19);
            var15 = var17;
            var14 = var16;
            var13 = var2;
 227:
            var16 = var11.bind(var1)();
            var2 = var16.done;
            var5 = var15;
            var4 = var14;
            var3 = var13;
            var6 = var16;
            if(!var2) { _fun0023_ip = 57; continue _fun0023 }
 254:
            return var1;
        }
    };
    var2['CACHED_STICKERS_LOADED'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/StickersStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();