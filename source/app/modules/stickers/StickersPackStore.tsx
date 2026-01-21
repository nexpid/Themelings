// app/modules/stickers/StickersPackStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot16;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot16;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 39:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 39; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function parseServerPackSticker(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var3 = var2.tags;
        var1['tags'] = var3;
        var3 = var2.type;
        var1['type'] = var3;
        var3 = var2.name;
        var1['name'] = var3;
        var3 = var2.description;
        var1['description'] = var3;
        var3 = var2.format_type;
        var1['format_type'] = var3;
        var2 = var2.pack_id;
        var1['pack_id'] = var2;
        var3 = _closure1_slot8;
        var2 = 'PackSticker';
        var1[var3] = var2;
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function deriveStickerMetadata(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg2;
            var1 = new Array(0);
            var3 = {};
            var6 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 9;
            var2 = var2[var8];
            var7 = undefined;
            var2 = var6.bind(var7)(var2);
            var2 = var2.StickerMetadataTypes;
            var2 = var2.STICKER_NAME;
            var3['type'] = var2;
            var2 = arg1;
            var6 = var2.name;
            var2 = var6.trim;
            var6 = var2.bind(var6)();
            var2 = var6.toLocaleLowerCase;
            var2 = var2.bind(var6)();
            var3['value'] = var2;
            var2 = var1.push;
            var2 = var2.bind(var1)(var3);
            var2 = null;
            if(!(var2 != var4)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var3 = var1.push;
            var2 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.StickerMetadataTypes;
            var5 = var5.PACK_NAME;
            var2['type'] = var5;
            var4 = var4.name;
            var2['value'] = var4;
            var2 = var3.bind(var1)(var2);
case 40:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function ingestStickerPack(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var4 = _closure1_slot9;
            var3 = var4.set;
            var2 = var1.id;
            var2 = var3.bind(var4)(var2, var1);
            var2 = arg3;
            if(!var2) { _fun0006_ip = 39; continue _fun0006 }
case 42:
            var4 = _closure1_slot10;
            var3 = var4.set;
            var2 = var1.id;
            var2 = var3.bind(var4)(var2, var1);
case 39:
            var4 = var5.setPartition;
            var3 = var1.id;
            var7 = var1.stickers;
            var2 = {};
            var6 = _closure1_slot15;
            var1 = undefined;
            var8 = var6.bind(var1)(var7);
            var7 = var8.bind(var1)();
            var6 = var7.done;
            if(var6) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var11 = var7.value;
            var10 = var11.id;
            var6 = _closure1_slot17;
            var6 = var6.bind(var1)(var11);
            var2[var10] = var6;
            var10 = var8.bind(var1)();
            var6 = var10.done;
            var7 = var10;
            if(!var6) { _fun0006_ip = 44; continue _fun0006 }
case 43:
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.TypeTag;
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.KkvStore;
    var9 = var4.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var14 = var10;
    var9 = new var14[var9](var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot9 = var9;
    var4 = var4.Map;
    var9 = var4.prototype;
    var9 = Object.create(var9, {constructor: {value: var4}});
    var14 = var9;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot10 = var4;
    var4 = false;
    var _closure1_slot11 = var4;
    var4 = null;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.HOUR;
    var _closure1_slot13 = var4;
    var4 = function(arg1) {
        var4 = function StickersPackStore(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var4)();
                if(var1) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0007_ip = 47; continue _fun0007;
case 45:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 47:
                var1 = var3.bind(var4)(var5, var1);
                var4 = var1.memoized;
                var3 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var8 = arg1;
                        var7 = global;
                        var1 = var7.Map;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {constructor: {value: var1}});
                        var16 = var2;
                        var1 = new var16[var1](var15);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var5 = var8;
                        for(var2 in var5)
case 48:
                        {
case 49:
                            var11 = var2;
                            var10 = var1.set;
                            var13 = var7.Object;
                            var12 = var13.values;
                            var9 = var8[var11];
                            var9 = var9.root;
                            var9 = var12.bind(var13)(var9);
                            var9 = var10.bind(var1)(var11, var9);
                            _fun0008_ip = 48; continue _fun0008;
                        }
case 50:
                        return var1;
                    }
                };
                var3 = var4.bind(var1)(var3);
                var1['getAllPackStickers'] = var3;
                var4 = var1.memoized;
                var3 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var17 = arg1;
                        var16 = global;
                        var1 = var16.Map;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {constructor: {value: var1}});
                        var24 = var2;
                        var1 = new var24[var1](var23);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var14 = var17;
                        var10 = 0;
                        var8 = undefined;
                        var7 = 2;
                        var6 = 1;
                        for(var11 in var14)
case 51:
                        {
case 34:
                            var5 = var11;
                            var4 = var16.Object;
                            var3 = var4.entries;
                            var2 = var17[var5];
                            var2 = var2.root;
                            var4 = var3.bind(var4)(var2);
                            var2 = var4.length;
                            var2 = var10 < var2;
                            var3 = 0;
                            if(!var2) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                            var18 = var4[var3];
                            var2 = _closure1_slot2;
                            var2 = var2.bind(var8)(var18, var7);
                            var19 = var2[var10];
                            var21 = var2[var6];
                            var18 = _closure1_slot9;
                            var2 = var18.get;
                            var20 = var2.bind(var18)(var5);
                            var18 = var1.set;
                            var2 = _closure1_slot18;
                            var2 = var2.bind(var8)(var21, var20);
                            var2 = var18.bind(var1)(var19, var2);
                            var3 = var3 + 1;
                            var2 = var4.length;
                            if(var3 < var2) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                            _fun0009_ip = 51; continue _fun0009;
                        }
case 54:
                        return var1;
                    }
                };
                var3 = var4.bind(var1)(var3);
                var1['getStickerMetadataMap'] = var3;
                var3 = var1.memoizedSecondaryIndex;
                var3 = var3.bind(var1)();
                var1['getStickerById'] = var3;
                var3 = var1.memoized;
                var2 = function() {
                    var1 = global;
                    var3 = var1.Array;
                    var2 = var3.from;
                    var4 = _closure1_slot10;
                    var1 = var4.values;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                var1['getPremiumPacks'] = var2;
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
        var1 = 'isFetchingStickerPacks';
        var5['key'] = var1;
        var1 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasLoadedStickerPacks';
        var5['key'] = var7;
        var7 = function get() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = _closure1_slot12;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0010_ip = 55; continue _fun0010 }
case 56:
                var3 = _closure1_slot12;
                var2 = _closure1_slot13;
                var3 = var3 + var2;
                var2 = global;
                var4 = var2.performance;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                var1 = var3 > var2;
case 55:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isPremiumPack';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot10;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getStickerPack';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot9;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var7);
    var4 = 'StickersPackStore';
    var8['displayName'] = var4;
    var7 = {};
    var4 = function LOGOUT(arg1, arg2) {
        var2 = arg2;
        var4 = _closure1_slot9;
        var3 = var4.clear;
        var3 = var3.bind(var4)();
        var3 = _closure1_slot10;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = var2.reset;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var7['LOGOUT'] = var4;
    var4 = function STICKER_PACK_FETCH_SUCCESS(arg1, arg2) {
        var1 = arg1;
        var5 = var1.pack;
        var4 = _closure1_slot19;
        var1 = undefined;
        var3 = arg2;
        var2 = false;
        var2 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var7['STICKER_PACK_FETCH_SUCCESS'] = var4;
    var4 = function STICKER_PACKS_FETCH_START() {
        var1 = true;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var7['STICKER_PACKS_FETCH_START'] = var4;
    var4 = function STICKER_PACKS_FETCH_SUCCESS(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var7 = arg2;
            var1 = arg1;
            var3 = var1.packs;
            var1 = false;
            _closure1_slot11 = var1;
            var1 = global;
            var2 = var1.performance;
            var1 = var2.now;
            var1 = var1.bind(var2)();
            _closure1_slot12 = var1;
            var2 = _closure1_slot15;
            var1 = undefined;
            var5 = var2.bind(var1)(var3);
            var3 = var5.bind(var1)();
            var2 = var3.done;
            var4 = true;
            if(var2) { _fun0011_ip = 41; continue _fun0011 }
case 34:
            var8 = _closure1_slot19;
            var2 = var3.value;
            var2 = var8.bind(var1)(var2, var7, var4);
            var8 = var5.bind(var1)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0011_ip = 34; continue _fun0011 }
case 41:
            return var1;
        }
    };
    var7['STICKER_PACKS_FETCH_SUCCESS'] = var4;
    var2 = function PACK_STICKER_FETCH_SUCCESS(arg1, arg2) {
        var6 = arg2;
        var1 = arg1;
        var7 = var1.sticker;
        var5 = var6.set;
        var4 = var7.pack_id;
        var3 = var7.id;
        var2 = _closure1_slot17;
        var1 = undefined;
        var2 = var2.bind(var1)(var7);
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var7['PACK_STICKER_FETCH_SUCCESS'] = var2;
    var2 = var8.prototype;
    var4 = Object.create(var2, {constructor: {value: var8}});
    var12 = 'typescript';
    var14 = var4;
    var13 = var7;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/StickersPackStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();