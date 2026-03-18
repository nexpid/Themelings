// app/stores/DetectableGameStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var8 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var8;
        var _closure1_slot2 = var7;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                _fun0002_ip = 4; continue _fun0002;
case 5: // catch_target0
                CatchBlockStart(arg_register=1);
case 4:
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
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
case 6:
                if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var2 = var3.@@iterator;
case 8:
                if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0003_ip = 16; continue _fun0003 }
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
                if(!var7) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var7 = var3.constructor;
case 18:
                var10 = var9;
                if(!var7) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var7 = var3.constructor;
                var10 = var7.name;
case 20:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0003_ip = 22; continue _fun0003 }
case 24:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0003_ip = 27; continue _fun0003 }
case 25:
                var9 = _closure1_slot30;
                var7 = var9.bind(var8)(var3, var8);
case 27:
                _fun0003_ip = 28; continue _fun0003;
case 22:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
case 28:
                var6 = var7;
                _fun0003_ip = 14; continue _fun0003;
case 16:
                var7 = _closure1_slot30;
                var6 = var7.bind(var8)(var3, var8);
case 14:
                var4 = var6;
                if(var4) { _fun0003_ip = 12; continue _fun0003 }
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
                if(!var4) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                _closure2_slot0 = var4;
case 30:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0004_ip = 32; continue _fun0004 }
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
                        _fun0004_ip = 34; continue _fun0004;
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
        var _closure1_slot29 = var1;
        var1 = function _arrayLikeToArray(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                var2 = var4.length;
                var1 = var3 > var2;
case 35:
                var2 = undefined;
                if(!var1) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                var2 = var4.length;
case 37:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0005_ip = 3; continue _fun0005 }
case 8:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0005_ip = 8; continue _fun0005 }
case 3:
                return var1;
            }
        };
        var _closure1_slot30 = var1;
        var2 = function gameFromServer(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var1 = {};
                var2 = var3.id;
                var1['id'] = var2;
                var2 = var3.name;
                var1['name'] = var2;
                var7 = var3.executables;
                var4 = null;
                if(!(var4 == var7)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                var7 = new Array(0);
case 39:
                var6 = var7.map;
                var5 = _closure1_slot9;
                var5 = var6.bind(var7)(var5);
                var1['executables'] = var5;
                var6 = var3.overlay;
                var5 = var4 != var6;
                if(!var5) { _fun0006_ip = 41; continue _fun0006 }
case 4:
                var5 = var6;
case 41:
                var1['overlay'] = var5;
                var6 = var3.overlay_warn;
                var5 = var4 != var6;
                if(!var5) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                var5 = var6;
case 42:
                var1['overlayWarn'] = var5;
                var6 = var3.overlay_compatibility_hook;
                var5 = var4 != var6;
                if(!var5) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var5 = var6;
case 44:
                var1['overlayCompatibilityHook'] = var5;
                var6 = var3.hook;
                var5 = var4 == var6;
                if(var5) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                var5 = var6;
case 46:
                var1['hook'] = var5;
                var5 = var3.aliases;
                if(!(var4 == var5)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                var5 = new Array(0);
case 48:
                var1['aliases'] = var5;
                var6 = _closure1_slot8;
                var5 = var6.supportsOutOfProcessOverlay;
                var2 = var3.overlay_methods;
                var2 = var5.bind(var6)(var2);
                var1['supportsOutOfProcessOverlay'] = var2;
                var2 = var3.themes;
                if(!(var4 == var2)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                var2 = new Array(0);
case 50:
                var1['themes'] = var2;
                var6 = var3.icon_hash;
                var7 = var4 != var6;
                var5 = undefined;
                if(!var7) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                var5 = var6;
case 52:
                var1['icon'] = var5;
                var5 = var3.third_party_skus;
                if(!(var4 == var5)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                var5 = new Array(0);
case 54:
                var1['thirdPartySkus'] = var5;
                var6 = var3.cover_image_hash;
                var7 = var4 != var6;
                var5 = undefined;
                if(!var7) { _fun0006_ip = 56; continue _fun0006 }
case 28:
                var5 = var6;
case 56:
                var1['cover_image_hash'] = var5;
                var3 = var3.content_classification;
                var4 = var4 != var3;
                var2 = undefined;
                if(!var4) { _fun0006_ip = 57; continue _fun0006 }
case 58:
                var2 = var3;
case 57:
                var1['content_classification'] = var2;
                return var1;
            }
        };
        var _closure1_slot31 = var2;
        var1 = function convertGameRecordToGame(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var1 = {};
                var2 = var3.id;
                var1['id'] = var2;
                var2 = var3.name;
                var1['name'] = var2;
                var2 = var3.executables;
                var1['executables'] = var2;
                var2 = var3.overlayWarn;
                var1['overlayWarn'] = var2;
                var2 = var3.overlayCompatibilityHook;
                var1['overlayCompatibilityHook'] = var2;
                var2 = var3.overlay;
                var1['overlay'] = var2;
                var2 = var3.hook;
                var1['hook'] = var2;
                var2 = var3.aliases;
                var1['aliases'] = var2;
                var2 = var3.supportsOutOfProcessOverlay;
                var1['supportsOutOfProcessOverlay'] = var2;
                var2 = var3.themes;
                var4 = null;
                if(!(var4 == var2)) { _fun0007_ip = 45; continue _fun0007 }
case 59:
                var2 = new Array(0);
case 45:
                var1['themes'] = var2;
                var2 = var3.icon;
                var1['icon'] = var2;
                var2 = var3.thirdPartySkus;
                if(!(var4 == var2)) { _fun0007_ip = 60; continue _fun0007 }
case 46:
                var2 = new Array(0);
case 60:
                var1['thirdPartySkus'] = var2;
                var6 = var3.cover_image_hash;
                var7 = var4 != var6;
                var5 = undefined;
                if(!var7) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                var5 = var6;
case 61:
                var1['cover_image_hash'] = var5;
                var3 = var3.content_classification;
                var4 = var4 != var3;
                var2 = undefined;
                if(!var4) { _fun0007_ip = 63; continue _fun0007 }
case 23:
                var2 = var3;
case 63:
                var1['content_classification'] = var2;
                return var1;
            }
        };
        var _closure1_slot32 = var1;
        var1 = function addGameIdToNameCache(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg2;
                var3 = _closure1_slot14;
                var4 = var3[var2];
                var3 = null;
                if(!(var3 == var4)) { _fun0008_ip = 64; continue _fun0008 }
case 33:
                var4 = _closure1_slot14;
                var3 = new Array(0);
                var4[var2] = var3;
case 64:
                var1 = _closure1_slot14;
                var3 = var1[var2];
                var2 = var3.push;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var _closure1_slot33 = var1;
        var1 = function addDetectableGame(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.DetectableGameRecord;
                var3 = var2 instanceof var3;
                var5 = var2;
                if(!var3) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                var3 = _closure1_slot32;
                var5 = var3.bind(var1)(var2);
case 65:
                var7 = _closure1_slot13;
                var4 = var7.set;
                var3 = var2.id;
                var3 = var4.bind(var7)(var3, var5);
                var7 = _closure1_slot33;
                var4 = var5.id;
                var8 = var5.name;
                var3 = var8.toLowerCase;
                var3 = var3.bind(var8)();
                var3 = var7.bind(var1)(var4, var3);
                var4 = _closure1_slot29;
                var3 = var2.aliases;
                var7 = var4.bind(var1)(var3);
                var4 = var7.bind(var1)();
                var3 = var4.done;
                if(var3) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                var10 = var4.value;
                var9 = _closure1_slot33;
                var8 = var5.id;
                var3 = var10.toLowerCase;
                var3 = var3.bind(var10)();
                var3 = var9.bind(var1)(var8, var3);
                var8 = var7.bind(var1)();
                var3 = var8.done;
                var4 = var8;
                if(!var3) { _fun0009_ip = 68; continue _fun0009 }
case 67:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 12;
                var3 = var7[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.isDesktop;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                var3 = _closure1_slot29;
                var2 = var2.executables;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0009_ip = 69; continue _fun0009 }
case 71:
                var2 = var3.value;
                var8 = _closure1_slot15;
                var7 = var2.name;
                var2 = var5.id;
                var8[var7] = var2;
                var7 = var4.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0009_ip = 71; continue _fun0009 }
case 69:
                return var1;
            }
        };
        var _closure1_slot34 = var1;
        var9 = global;
        var11 = var9.Object;
        var10 = var11.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var10.bind(var11)(var3, var1, var4);
        var1 = 0;
        var4 = var7[var1];
        var1 = undefined;
        var4 = var8.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var4 = var7[var4];
        var4 = var8.bind(var1)(var4);
        var _closure1_slot4 = var4;
        var4 = 2;
        var4 = var7[var4];
        var4 = var8.bind(var1)(var4);
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var7[var4];
        var4 = var8.bind(var1)(var4);
        var _closure1_slot6 = var4;
        var4 = 4;
        var4 = var7[var4];
        var4 = var8.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var4 = 5;
        var10 = var7[var4];
        var10 = var8.bind(var1)(var10);
        var _closure1_slot8 = var10;
        var4 = var7[var4];
        var4 = var6.bind(var1)(var4);
        var4 = var4.createExecutable;
        var _closure1_slot9 = var4;
        var4 = 6;
        var4 = var7[var4];
        var4 = var6.bind(var1)(var4);
        var4 = var4.AnalyticEvents;
        var _closure1_slot10 = var4;
        var4 = 7;
        var4 = var7[var4];
        var4 = var6.bind(var1)(var4);
        var4 = var4.ApplicationTypes;
        var _closure1_slot11 = var4;
        var4 = 8;
        var10 = var7[var4];
        var10 = var8.bind(var1)(var10);
        var10 = var10.Millis;
        var10 = var10.DAY;
        var _closure1_slot12 = var10;
        var10 = 9;
        var10 = var7[var10];
        var10 = var8.bind(var1)(var10);
        var11 = var10.prototype;
        var11 = Object.create(var11, {constructor: {value: var10}});
        var17 = var11;
        var10 = new var17[var10](var16);
        var10 = var10 instanceof Object ? var10 : var11;
        var _closure1_slot13 = var10;
        var11 = var9.Object;
        var10 = var11.create;
        var12 = null;
        var10 = var10.bind(var11)(var12);
        var _closure1_slot14 = var10;
        var11 = var9.Object;
        var10 = var11.create;
        var10 = var10.bind(var11)(var12);
        var _closure1_slot15 = var10;
        var10 = 10;
        var10 = var7[var10];
        var10 = var6.bind(var1)(var10);
        var13 = var10.Storage;
        var11 = var13.get;
        var10 = 'GameStoreReportedGames';
        var10 = var11.bind(var13)(var10);
        if(!(var12 == var10)) { _fun0001_ip = 72; continue _fun0001 }
case 73:
        var13 = var9.Object;
        var11 = var13.create;
        var10 = var11.bind(var13)(var12);
case 72:
        var _closure1_slot16 = var10;
        var10 = '';
        var _closure1_slot17 = var10;
        var _closure1_slot18 = var1;
        var _closure1_slot19 = var12;
        var11 = false;
        var _closure1_slot20 = var11;
        var _closure1_slot21 = var12;
        var _closure1_slot22 = var11;
        var _closure1_slot23 = var10;
        var10 = new Array(0);
        var _closure1_slot24 = var10;
        var10 = new Array(0);
        var _closure1_slot25 = var10;
        var9 = var9.Map;
        var10 = var9.prototype;
        var10 = Object.create(var10, {constructor: {value: var9}});
        var17 = var10;
        var9 = new var17[var9](var16);
        var9 = var9 instanceof Object ? var9 : var10;
        var _closure1_slot26 = var9;
        var4 = var7[var4];
        var4 = var8.bind(var1)(var4);
        var4 = var4.Millis;
        var4 = var4.HOUR;
        var _closure1_slot27 = var4;
        var4 = 19;
        var4 = var7[var4];
        var4 = var8.bind(var1)(var4);
        var9 = var4.PersistedStore;
        var4 = function(arg1) {
            var4 = function DetectableGameStore() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
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
                    if(var1) { _fun0010_ip = 74; continue _fun0010 }
case 75:
                    var7 = var9.apply;
                    var5 = arguments;
                    var1 = var5;
                    var1 = var7.bind(var9)(var4, var1);
                    _fun0010_ip = 76; continue _fun0010;
case 74:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var3)(var4);
                    var6 = var6.constructor;
                    var5 = arguments;
                    var1 = var7.bind(var8)(var9, var5, var6);
case 76:
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
            var1 = function value(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = arg1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0011_ip = 77; continue _fun0011 }
case 36:
                    var4 = var3.detectableGamesEtag;
                    if(!(var2 != var4)) { _fun0011_ip = 78; continue _fun0011 }
case 79:
                    var5 = var3.detectableGamesEtag;
                    _closure1_slot17 = var5;
case 78:
                    var4 = var3.blocklistEtag;
                    if(!(var2 != var4)) { _fun0011_ip = 80; continue _fun0011 }
case 81:
                    var5 = var3.blocklistEtag;
                    _closure1_slot23 = var5;
case 80:
                    var4 = var3.blocklistExecutables;
                    if(!(var2 != var4)) { _fun0011_ip = 82; continue _fun0011 }
case 3:
                    var5 = var3.blocklistExecutables;
                    _closure1_slot24 = var5;
case 82:
                    var4 = var3.blocklistPatterns;
                    if(!(var2 != var4)) { _fun0011_ip = 83; continue _fun0011 }
case 84:
                    var6 = var3.blocklistPatterns;
                    var5 = var6.map;
                    var4 = function(arg1) {
                        var1 = global;
                        var4 = var1.RegExp;
                        var1 = var4.prototype;
                        var2 = Object.create(var1, {constructor: {value: var4}});
                        var6 = arg1;
                        var5 = 'i';
                        var7 = var2;
                        var1 = new var7[var4](var6, var5, var4);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    };
                    var5 = var5.bind(var6)(var4);
                    _closure1_slot25 = var5;
case 83:
                    var3 = var3.detectableGames;
                    if(!(var2 != var3)) { _fun0011_ip = 77; continue _fun0011 }
case 85:
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var3 = _closure1_slot34;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 77:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var1;
            var1 = new Array(22);
            var1[0] = var5;
            var5 = {};
            var7 = 'getState';
            var5['key'] = var7;
            var7 = function value() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.isDesktop;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0012_ip = 86; continue _fun0012 }
case 87:
                    var1 = {'detectableGamesEtag': '', 'detectableGames': null, 'blocklistEtag': ''};
                    var2 = new Array(0);
                    var1['detectableGames'] = var2;
                    var2 = new Array(0);
                    var1['blocklistExecutables'] = var2;
                    var2 = new Array(0);
                    var1['blocklistPatterns'] = var2;
                    _fun0012_ip = 19; continue _fun0012;
case 86:
                    var2 = {};
                    var4 = _closure1_slot17;
                    var2['detectableGamesEtag'] = var4;
                    var5 = _closure1_slot13;
                    var4 = var5.values;
                    var4 = var4.bind(var5)();
                    var2['detectableGames'] = var4;
                    var4 = _closure1_slot23;
                    var2['blocklistEtag'] = var4;
                    var4 = _closure1_slot24;
                    var2['blocklistExecutables'] = var4;
                    var5 = _closure1_slot25;
                    var4 = var5.map;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.source;
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    var2['blocklistPatterns'] = var3;
                    var1 = var2;
case 19:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'games';
            var5['key'] = var7;
            var7 = function get() {
                var2 = _closure1_slot13;
                var1 = var2.values;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5['get'] = var7;
            var1[2] = var5;
            var5 = {};
            var7 = 'getDetectableGame';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var3 = _closure1_slot13;
                var2 = var3.get;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 13;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.cast;
                var1 = arg1;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[3] = var5;
            var5 = {};
            var7 = 'searchGamesByName';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0013_ip = 88; continue _fun0013 }
case 89:
                    var1 = var2.toLowerCase;
                    var3 = var1.bind(var2)();
                    var1 = global;
                    var1 = var1.Object;
                    var1 = var1.prototype;
                    var5 = var1.hasOwnProperty;
                    var4 = var5.call;
                    var1 = _closure1_slot14;
                    var1 = var4.bind(var5)(var1, var3);
                    if(var1) { _fun0013_ip = 90; continue _fun0013 }
case 91:
                    var1 = new Array(0);
                    _fun0013_ip = 92; continue _fun0013;
case 90:
                    var2 = _closure1_slot14;
                    var1 = var2[var3];
case 92:
                    return var1;
case 88:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[4] = var5;
            var5 = {};
            var7 = 'findGame';
            var5['key'] = var7;
            var7 = function value(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var6 = arg1;
                    var7 = this;
                    var _closure3_slot0 = var6;
                    var1 = arg2;
                    var _closure3_slot1 = var1;
                    var _closure3_slot3 = var7;
                    var2 = var7.getDetectableGame;
                    var1 = var6.id;
                    var1 = var2.bind(var7)(var1);
                    var5 = null;
                    if(!(var5 == var1)) { _fun0014_ip = 93; continue _fun0014 }
case 94:
                    var2 = var6.name;
                    if(!(var5 != var2)) { _fun0014_ip = 95; continue _fun0014 }
case 96:
                    var12 = function _loop() {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var5 = _closure3_slot3;
                            var4 = var5.getDetectableGame;
                            var3 = _closure3_slot4;
                            var3 = var4.bind(var5)(var3);
                            var5 = null;
                            if(!(var5 != var3)) { _fun0015_ip = 97; continue _fun0015 }
case 37:
                            var4 = _closure3_slot1;
                            if(!(var5 == var4)) { _fun0015_ip = 98; continue _fun0015 }
case 66:
                            var4 = _closure3_slot0;
                            var4 = var4.exePath;
                            if(!(var5 != var4)) { _fun0015_ip = 99; continue _fun0015 }
case 100:
                            var4 = var3.executables;
                            if(!(var5 != var4)) { _fun0015_ip = 99; continue _fun0015 }
case 101:
                            var4 = _closure3_slot0;
                            var6 = var4.exePath;
                            var5 = var6.split;
                            var4 = '/';
                            var6 = var5.bind(var6)(var4);
                            var5 = var6.filter;
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 14;
                            var7 = var7[var4];
                            var4 = undefined;
                            var4 = var8.bind(var4)(var7);
                            var4 = var4.isNotNullish;
                            var5 = var5.bind(var6)(var4);
                            var4 = var5.pop;
                            var4 = var4.bind(var5)();
                            var _closure4_slot0 = var4;
                            var5 = var3.executables;
                            var4 = var5.some;
                            var2 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.name;
                                var1 = _closure4_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var2 = var4.bind(var5)(var2);
                            if(var2) { _fun0015_ip = 102; continue _fun0015 }
case 99:
                            var _closure3_slot2 = var3;
                            var2 = undefined;
                            return var2;
case 102:
                            var2 = {};
                            var2['v'] = var3;
                            return var2;
case 98:
                            var2 = _closure3_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            var1 = 0;
                            return var1;
case 97:
                            var1 = 0;
                            return var1;
                        }
                    };
                    var3 = _closure1_slot29;
                    var8 = var7.searchGamesByName;
                    var2 = var6.name;
                    var2 = var8.bind(var7)(var2);
                    var11 = undefined;
                    var10 = var3.bind(var11)(var2);
                    var3 = var10.bind(var11)();
                    var2 = var3.done;
                    var9 = 0;
                    var8 = var3;
                    if(var2) { _fun0014_ip = 95; continue _fun0014 }
case 103:
                    var2 = var8.value;
                    var _closure3_slot4 = var2;
                    var2 = var12.bind(var11)();
                    if(!(var9 !== var2)) { _fun0014_ip = 104; continue _fun0014 }
case 105:
                    if(var2) { _fun0014_ip = 77; continue _fun0014 }
case 104:
                    var13 = var10.bind(var11)();
                    var3 = var13.done;
                    var8 = var13;
                    if(var3) { _fun0014_ip = 95; continue _fun0014 }
case 60:
                    _fun0014_ip = 103; continue _fun0014;
case 77:
                    var2 = var2.v;
                    return var2;
case 95:
                    var2 = var6.exePath;
                    if(!(var5 != var2)) { _fun0014_ip = 106; continue _fun0014 }
case 107:
                    var3 = var6.exePath;
                    var2 = var3.split;
                    var8 = '/';
                    var10 = var2.bind(var3)(var8);
                    var9 = var10.filter;
                    var13 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var12 = 14;
                    var2 = var2[var12];
                    var11 = undefined;
                    var2 = var13.bind(var11)(var2);
                    var2 = var2.isNotNullish;
                    var9 = var9.bind(var10)(var2);
                    var2 = var9.pop;
                    var9 = var2.bind(var9)();
                    var2 = var7.getGameByExecutable;
                    var2 = var2.bind(var7)(var9);
                    if(!(var5 == var2)) { _fun0014_ip = 108; continue _fun0014 }
case 109:
                    var9 = var6.exePath;
                    var6 = var9.split;
                    var9 = var6.bind(var9)(var8);
                    var6 = var9.filter;
                    var10 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var12];
                    var3 = var10.bind(var11)(var3);
                    var3 = var3.isNotNullish;
                    var9 = var6.bind(var9)(var3);
                    var6 = var9.slice;
                    var3 = -2;
                    var6 = var6.bind(var9)(var3);
                    var3 = var6.join;
                    var6 = var3.bind(var6)(var8);
                    var3 = var7.getGameByExecutable;
                    var3 = var3.bind(var7)(var6);
                    if(!(var5 == var3)) { _fun0014_ip = 110; continue _fun0014 }
case 106:
                    var4 = _closure3_slot2;
                    return var4;
case 110:
                    return var3;
case 108:
                    return var2;
case 93:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[5] = var5;
            var5 = {};
            var7 = 'getOfficialGame';
            var5['key'] = var7;
            var7 = function getOfficialGame(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = arg1;
                    var5 = this;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0016_ip = 103; continue _fun0016 }
case 111:
                    var4 = var2.type;
                    var3 = _closure1_slot11;
                    var3 = var3.GAME;
                    if(!(var4 !== var3)) { _fun0016_ip = 86; continue _fun0016 }
case 112:
                    var8 = var2.linkedGames;
                    var3 = var1 == var8;
                    var4 = undefined;
                    if(var3) { _fun0016_ip = 113; continue _fun0016 }
case 9:
                    var6 = var8.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 15;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.GameLinkTypes;
                        var1 = var1.OFFICIAL;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var6.bind(var8)(var3);
                    var6 = var1 == var3;
                    var4 = undefined;
                    if(var6) { _fun0016_ip = 113; continue _fun0016 }
case 88:
                    var4 = var3.id;
case 113:
                    _fun0016_ip = 114; continue _fun0016;
case 86:
                    var4 = var2.id;
case 114:
                    var3 = var1 == var4;
                    var2 = null;
                    if(var3) { _fun0016_ip = 115; continue _fun0016 }
case 15:
                    var3 = var5.getDetectableGame;
                    var2 = var3.bind(var5)(var4);
case 115:
                    return var2;
case 103:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[6] = var5;
            var5 = {};
            var7 = 'getGameByApplication';
            var5['key'] = var7;
            var7 = function getGameByApplication(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var3 = arg1;
                    var5 = this;
                    var _closure3_slot0 = var5;
                    var4 = var5.getDetectableGame;
                    var1 = var3.id;
                    var1 = var4.bind(var5)(var1);
                    var10 = null;
                    if(!(var10 == var1)) { _fun0017_ip = 67; continue _fun0017 }
case 78:
                    var4 = var3.linkedGames;
                    if(!(var10 != var4)) { _fun0017_ip = 105; continue _fun0017 }
case 81:
                    var6 = _closure1_slot29;
                    var4 = var3.linkedGames;
                    var9 = undefined;
                    var8 = var6.bind(var9)(var4);
                    var6 = var8.bind(var9)();
                    var4 = var6.done;
                    var7 = var6;
                    if(var4) { _fun0017_ip = 105; continue _fun0017 }
case 86:
                    var4 = var7.value;
                    var6 = var5.getDetectableGame;
                    var4 = var4.id;
                    var4 = var6.bind(var5)(var4);
                    if(!(var10 == var4)) { _fun0017_ip = 116; continue _fun0017 }
case 115:
                    var11 = var8.bind(var9)();
                    var6 = var11.done;
                    var7 = var11;
                    if(var6) { _fun0017_ip = 105; continue _fun0017 }
case 117:
                    _fun0017_ip = 86; continue _fun0017;
case 116:
                    return var4;
case 105:
                    var4 = var5.searchGamesByName;
                    var3 = var3.name;
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = var3.getDetectableGame;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.reverse;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    var2 = var3[var2];
                    return var2;
case 67:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[7] = var5;
            var5 = {};
            var7 = 'isGameInDatabase';
            var5['key'] = var7;
            var7 = function isGameInDatabase(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = arg1;
                    var2 = this;
                    var1 = var2.findGame;
                    var2 = var1.bind(var2)(var3);
                    var1 = null;
                    var1 = var1 != var2;
                    if(var1) { _fun0018_ip = 34; continue _fun0018 }
case 118:
                    var4 = var3.nativeProcessObserverId;
                    var2 = undefined;
                    var2 = var2 !== var4;
                    if(!var2) { _fun0018_ip = 119; continue _fun0018 }
case 120:
                    var4 = var3.nativeProcessObserverId;
                    var3 = 2147483648.0;
                    var3 = var3 & var4;
                    var2 = !var3;
case 119:
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[8] = var5;
            var5 = {};
            var7 = 'fetching';
            var5['key'] = var7;
            var7 = function get() {
                var2 = _closure1_slot18;
                var1 = true;
                var1 = var1 === var2;
                return var1;
            };
            var5['get'] = var7;
            var1[9] = var5;
            var5 = {};
            var7 = 'detectableGamesEtag';
            var5['key'] = var7;
            var7 = function get() {
                var1 = _closure1_slot17;
                return var1;
            };
            var5['get'] = var7;
            var1[10] = var5;
            var5 = {};
            var7 = 'blocklistEtag';
            var5['key'] = var7;
            var7 = function get() {
                var1 = _closure1_slot23;
                return var1;
            };
            var5['get'] = var7;
            var1[11] = var5;
            var5 = {};
            var7 = 'lastFetched';
            var5['key'] = var7;
            var7 = function get() {
                var1 = _closure1_slot19;
                return var1;
            };
            var5['get'] = var7;
            var1[12] = var5;
            var5 = {};
            var7 = 'hasAttemptedFetch';
            var5['key'] = var7;
            var7 = function get() {
                var1 = _closure1_slot20;
                return var1;
            };
            var5['get'] = var7;
            var1[13] = var5;
            var5 = {};
            var7 = 'detectableGamesTtl';
            var5['key'] = var7;
            var7 = function get() {
                var1 = _closure1_slot12;
                return var1;
            };
            var5['get'] = var7;
            var1[14] = var5;
            var5 = {};
            var7 = 'canFetchDetectableGames';
            var5['key'] = var7;
            var7 = function canFetchDetectableGames() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = _closure1_slot18;
                    var1 = true;
                    var1 = var1 !== var2;
                    if(!var1) { _fun0019_ip = 90; continue _fun0019 }
case 121:
                    var4 = _closure1_slot19;
                    var2 = null;
                    var2 = var2 == var4;
                    if(var2) { _fun0019_ip = 122; continue _fun0019 }
case 123:
                    var4 = global;
                    var5 = var4.Date;
                    var4 = var5.now;
                    var4 = var4.bind(var5)();
                    var5 = _closure1_slot19;
                    var3 = _closure1_slot12;
                    var3 = var5 + var3;
                    var2 = var4 >= var3;
case 122:
                    var1 = var2;
case 90:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[15] = var5;
            var5 = {};
            var7 = 'canFetchExecutableBlocklist';
            var5['key'] = var7;
            var7 = function canFetchExecutableBlocklist() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.GameBlocklistExperiment;
                    var2 = var3.getConfig;
                    var1 = {};
                    var5 = 'GameStore.shouldBlock';
                    var1['location'] = var5;
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.enabled;
                    var2 = !var1;
                    var1 = !var2;
                    if(var2) { _fun0020_ip = 68; continue _fun0020 }
case 101:
                    var3 = _closure1_slot22;
                    var2 = !var3;
                    if(var3) { _fun0020_ip = 124; continue _fun0020 }
case 125:
                    var5 = _closure1_slot21;
                    var3 = null;
                    var3 = var3 == var5;
                    if(var3) { _fun0020_ip = 116; continue _fun0020 }
case 126:
                    var5 = global;
                    var6 = var5.Date;
                    var5 = var6.now;
                    var5 = var5.bind(var6)();
                    var6 = _closure1_slot21;
                    var4 = _closure1_slot12;
                    var4 = var6 + var4;
                    var3 = var5 >= var4;
case 116:
                    var2 = var3;
case 124:
                    var1 = var2;
case 68:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[16] = var5;
            var5 = {};
            var7 = 'getGameByExecutable';
            var5['key'] = var7;
            var7 = function getGameByExecutable(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var2 = arg1;
                    var3 = this;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0021_ip = 121; continue _fun0021 }
case 111:
                    var1 = undefined;
                    return var1;
case 121:
                    var1 = _closure1_slot15;
                    var2 = var1[var2];
                    var1 = var3.getDetectableGame;
                    var1 = var1.bind(var3)(var2);
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[17] = var5;
            var5 = {};
            var7 = 'shouldBlock';
            var5['key'] = var7;
            var7 = function shouldBlock(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var5 = arg1;
                    var4 = this;
                    var _closure3_slot0 = var5;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var7.bind(var1)(var3);
                    var7 = var1.GameBlocklistExperiment;
                    var3 = var7.getConfig;
                    var1 = {};
                    var8 = 'GameStore.shouldBlock';
                    var1['location'] = var8;
                    var1 = var3.bind(var7)(var1);
                    var1 = var1.enabled;
                    if(var1) { _fun0022_ip = 125; continue _fun0022 }
case 4:
                    var1 = false;
                    return var1;
case 125:
                    var3 = var5.exePath;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0022_ip = 52; continue _fun0022 }
case 84:
                    var7 = var5.exePath;
                    var3 = '';
                    if(!(var3 !== var7)) { _fun0022_ip = 52; continue _fun0022 }
case 115:
                    var7 = var5.exePath;
                    var3 = var7.toLowerCase;
                    var3 = var3.bind(var7)();
                    var _closure3_slot1 = var3;
                    var8 = _closure1_slot24;
                    var7 = var8.find;
                    var3 = function(arg1) {
                        var3 = _closure3_slot1;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var7.bind(var8)(var3);
                    if(!(var1 == var3)) { _fun0022_ip = 50; continue _fun0022 }
case 127:
                    var7 = _closure1_slot25;
                    var6 = var7.find;
                    var2 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.test;
                        var1 = _closure3_slot0;
                        var1 = var1.exePath;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var6.bind(var7)(var2);
                    var1 = var1 != var2;
                    if(!var1) { _fun0022_ip = 128; continue _fun0022 }
case 129:
                    var7 = var4.maybeTrackBlock;
                    var6 = var2.source;
                    var2 = 'pattern_match';
                    var2 = var7.bind(var4)(var5, var2, var6);
                    var1 = true;
case 128:
                    return var1;
case 50:
                    var2 = var4.maybeTrackBlock;
                    var1 = 'explicit_list';
                    var1 = var2.bind(var4)(var5, var1, var3);
                    var1 = true;
                    return var1;
case 52:
                    var1 = false;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[18] = var5;
            var5 = {};
            var7 = 'maybeTrackBlock';
            var5['key'] = var7;
            var7 = function maybeTrackBlock(arg1, arg2, arg3) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var7 = arg1;
                    var3 = var7.exePath;
                    var2 = var3.split;
                    var1 = /[\/\\]/;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    var8 = null;
                    var2 = var8 != var1;
                    var5 = 'unknown';
                    if(!var2) { _fun0023_ip = 91; continue _fun0023 }
case 32:
                    var5 = var1;
case 91:
                    var3 = _closure1_slot26;
                    var2 = var3.get;
                    var3 = var2.bind(var3)(var5);
                    var2 = global;
                    var4 = var2.Date;
                    var2 = var4.now;
                    var4 = var2.bind(var4)();
                    var2 = var8 == var3;
                    if(var2) { _fun0023_ip = 59; continue _fun0023 }
case 130:
                    var6 = var4 - var3;
                    var3 = _closure1_slot27;
                    var2 = var6 >= var3;
case 59:
                    if(!var2) { _fun0023_ip = 131; continue _fun0023 }
case 132:
                    var3 = _closure1_slot26;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var5, var4);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 17;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot10;
                    var2 = var1.GAME_BLOCKLIST_TRIGGERED;
                    var1 = {};
                    var6 = arg2;
                    var1['block_type'] = var6;
                    var6 = arg3;
                    var1['matched_entry'] = var6;
                    var6 = var7.gameName;
                    if(!(var8 == var6)) { _fun0023_ip = 26; continue _fun0023 }
case 133:
                    var6 = var7.origGameName;
case 26:
                    var1['game_name'] = var6;
                    var1['executable_name'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 131:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[19] = var5;
            var5 = {};
            var7 = 'shouldReport';
            var5['key'] = var7;
            var7 = function shouldReport(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var1 = arg1;
                    var3 = this;
                    var2 = var3.shouldBlock;
                    var2 = var2.bind(var3)(var1);
                    if(var2) { _fun0024_ip = 134; continue _fun0024 }
case 135:
                    var2 = var3.findGame;
                    var2 = var2.bind(var3)(var1);
                    var4 = null;
                    var2 = var4 != var2;
                    var3 = var1.name;
                    var3 = var4 != var3;
                    if(!var3) { _fun0024_ip = 136; continue _fun0024 }
case 75:
                    var5 = _closure1_slot16;
                    var1 = var1.name;
                    var1 = var5[var1];
                    var3 = var4 != var1;
case 136:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 18;
                    var5 = var5[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var5);
                    var5 = var1.ShowCurrentGame;
                    var1 = var5.getSetting;
                    var1 = var1.bind(var5)();
                    if(!var1) { _fun0024_ip = 117; continue _fun0024 }
case 132:
                    var4 = _closure1_slot18;
                    var1 = !var4;
case 117:
                    if(!var1) { _fun0024_ip = 137; continue _fun0024 }
case 138:
                    if(var2) { _fun0024_ip = 85; continue _fun0024 }
case 139:
                    var2 = var3;
case 85:
                    var1 = !var2;
case 137:
                    return var1;
case 134:
                    var1 = false;
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[20] = var5;
            var5 = {};
            var7 = 'markGameReported';
            var5['key'] = var7;
            var6 = function markGameReported(arg1) {
                var4 = _closure1_slot16;
                var3 = true;
                var1 = arg1;
                var4[var1] = var3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = var3.Storage;
                var4 = var5.set;
                var3 = _closure1_slot16;
                var2 = 'GameStoreReportedGames';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var5['value'] = var6;
            var1[21] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var9 = var4.bind(var1)(var9);
        var4 = 'GameStore';
        var9['displayName'] = var4;
        var9['persistKey'] = var4;
        var4 = new Array(4);
        var10 = function(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var3 = arg1;
                var4 = null;
                if(!(var4 == var3)) { _fun0025_ip = 140; continue _fun0025 }
case 89:
                var1 = {};
                var2 = '';
                var1['detectableGamesEtag'] = var2;
                var2 = new Array(0);
                var1['detectableGames'] = var2;
                _fun0025_ip = 141; continue _fun0025;
case 140:
                var2 = {};
                var5 = var3.detectableGamesEtag;
                var2['detectableGamesEtag'] = var5;
                var7 = var3.detectableGames;
                var5 = var4 == var7;
                var3 = undefined;
                if(var5) { _fun0025_ip = 142; continue _fun0025 }
case 91:
                var6 = var7.map;
                var5 = function(arg1) {
                    var3 = _closure1_slot32;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var5 = var1.DetectableGameRecord;
                    var1 = var5.prototype;
                    var4 = Object.create(var1, {constructor: {value: var5}});
                    var6 = arg1;
                    var7 = var4;
                    var1 = new var7[var5](var6, var5);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var3 = var6.bind(var7)(var5);
case 142:
                if(!(var4 == var3)) { _fun0025_ip = 143; continue _fun0025 }
case 113:
                var3 = new Array(0);
case 143:
                var2['detectableGames'] = var3;
                var1 = var2;
case 141:
                return var1;
            }
        };
        var4[0] = var10;
        var10 = function(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var1 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 12;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isDesktop;
                var2 = var2.bind(var3)();
                if(var2) { _fun0026_ip = 119; continue _fun0026 }
case 120:
                var2 = {};
                var3 = '';
                var2['detectableGamesEtag'] = var3;
                var3 = new Array(0);
                var2['detectableGames'] = var3;
                var1 = var2;
case 119:
                return var1;
            }
        };
        var4[1] = var10;
        var10 = function() {
            var1 = {};
            var2 = '';
            var1['detectableGamesEtag'] = var2;
            var2 = new Array(0);
            var1['detectableGames'] = var2;
            return var1;
        };
        var4[2] = var10;
        var10 = function(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var3 = arg1;
                var1 = {};
                var8 = var1;
                var7 = var3;
                var2 = copyDataProperties(var8, var7);
                var4 = var3.blocklistEtag;
                var2 = null;
                var6 = var2 != var4;
                var5 = '';
                if(!var6) { _fun0027_ip = 78; continue _fun0027 }
case 112:
                var5 = var4;
case 78:
                var4 = 'blocklistEtag';
                var1[var4] = var5;
                var5 = var3.blocklistExecutables;
                if(!(var2 == var5)) { _fun0027_ip = 80; continue _fun0027 }
case 32:
                var5 = new Array(0);
case 80:
                var4 = 'blocklistExecutables';
                var1[var4] = var5;
                var3 = var3.blocklistPatterns;
                if(!(var2 == var3)) { _fun0027_ip = 82; continue _fun0027 }
case 144:
                var3 = new Array(0);
case 82:
                var2 = 'blocklistPatterns';
                var1[var2] = var3;
                return var1;
            }
        };
        var4[3] = var10;
        var9['migrations'] = var4;
        var4 = 20;
        var4 = var7[var4];
        var16 = var8.bind(var1)(var4);
        var4 = {};
        var10 = function handleOverlayInitialize(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var1 = arg1;
                var3 = var1.detectableApplications;
                var2 = _closure1_slot13;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
                var1 = global;
                var6 = var1.Object;
                var2 = var6.create;
                var4 = null;
                var2 = var2.bind(var6)(var4);
                _closure1_slot14 = var2;
                var2 = var1.Object;
                var1 = var2.create;
                var1 = var1.bind(var2)(var4);
                _closure1_slot15 = var1;
                var2 = _closure1_slot29;
                var1 = undefined;
                var4 = var2.bind(var1)(var3);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0028_ip = 116; continue _fun0028 }
case 43:
                var6 = _closure1_slot34;
                var2 = var3.value;
                var2 = var6.bind(var1)(var2);
                var6 = var4.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0028_ip = 43; continue _fun0028 }
case 116:
                return var1;
            }
        };
        var4['OVERLAY_INITIALIZE'] = var10;
        var10 = function handleApplicationsFetch() {
            var1 = true;
            _closure1_slot18 = var1;
            var1 = undefined;
            return var1;
        };
        var4['GAMES_DATABASE_FETCH'] = var10;
        var10 = function handleApplicationsFetchFail() {
            var1 = false;
            _closure1_slot18 = var1;
            var1 = true;
            _closure1_slot20 = var1;
            var1 = undefined;
            return var1;
        };
        var4['GAMES_DATABASE_FETCH_FAIL'] = var10;
        var10 = function handleDetectableGamesUpdated(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var1 = arg1;
                var4 = var1.games;
                var2 = var1.etag;
                var6 = null;
                var1 = var6 != var2;
                if(!var1) { _fun0029_ip = 40; continue _fun0029 }
case 79:
                var3 = _closure1_slot17;
                var1 = var3 !== var2;
case 40:
                if(!var1) { _fun0029_ip = 145; continue _fun0029 }
case 87:
                var5 = _closure1_slot13;
                var3 = var5.clear;
                var3 = var3.bind(var5)();
                var3 = global;
                var7 = var3.Object;
                var5 = var7.create;
                var5 = var5.bind(var7)(var6);
                _closure1_slot14 = var5;
                var5 = var3.Object;
                var3 = var5.create;
                var3 = var3.bind(var5)(var6);
                _closure1_slot15 = var3;
                _closure1_slot17 = var2;
case 145:
                var2 = _closure1_slot29;
                var1 = undefined;
                var5 = var2.bind(var1)(var4);
                var4 = var5.bind(var1)();
                var2 = var4.done;
                if(var2) { _fun0029_ip = 146; continue _fun0029 }
case 124:
                var6 = _closure1_slot34;
                var7 = _closure1_slot31;
                var2 = var4.value;
                var2 = var7.bind(var1)(var2);
                var2 = var6.bind(var1)(var2);
                var6 = var5.bind(var1)();
                var2 = var6.done;
                var4 = var6;
                if(!var2) { _fun0029_ip = 124; continue _fun0029 }
case 146:
                _closure1_slot18 = var1;
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                _closure1_slot19 = var2;
                var2 = true;
                _closure1_slot20 = var2;
                return var1;
            }
        };
        var4['GAMES_DATABASE_UPDATE'] = var10;
        var10 = function handleGamesBlocklistFetch() {
            var1 = true;
            _closure1_slot22 = var1;
            var1 = undefined;
            return var1;
        };
        var4['GAMES_BLOCKLIST_FETCH'] = var10;
        var10 = function handleGamesBlocklistFetchFail() {
            var1 = false;
            _closure1_slot22 = var1;
            var1 = undefined;
            return var1;
        };
        var4['GAMES_BLOCKLIST_FETCH_FAIL'] = var10;
        var5 = function handleGamesBlocklistUpdated(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var2 = arg1;
                var6 = var2.executables;
                var4 = var2.patterns;
                var3 = var2.etag;
                var2 = null;
                var2 = var2 != var3;
                if(!var2) { _fun0030_ip = 147; continue _fun0030 }
case 64:
                var5 = _closure1_slot23;
                var2 = var5 !== var3;
case 147:
                if(!var2) { _fun0030_ip = 126; continue _fun0030 }
case 6:
                _closure1_slot23 = var3;
                var5 = var6.map;
                var3 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.toLowerCase;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3 = var5.bind(var6)(var3);
                _closure1_slot24 = var3;
                var3 = var4.map;
                var1 = function(arg1) {
                    var1 = global;
                    var4 = var1.RegExp;
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {constructor: {value: var4}});
                    var6 = arg1;
                    var5 = 'i';
                    var7 = var2;
                    var1 = new var7[var4](var6, var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                _closure1_slot25 = var1;
case 126:
                var1 = false;
                _closure1_slot22 = var1;
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                _closure1_slot21 = var1;
                var1 = undefined;
                return var1;
            }
        };
        var4['GAMES_BLOCKLIST_UPDATE'] = var5;
        var5 = var9.prototype;
        var5 = Object.create(var5, {constructor: {value: var9}});
        var17 = var5;
        var15 = var4;
        var4 = new var17[var9](var16, var15, var14);
        var4 = var4 instanceof Object ? var4 : var5;
        var5 = 21;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'stores/DetectableGameStore.tsx';
        var5 = var6.bind(var7)(var5);
        var3['default'] = var4;
        var3['gameFromServer'] = var2;
        return var1;
    }
})();