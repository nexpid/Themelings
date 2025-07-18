// app/stores/GameStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var7 = native3;
        var3 = native6;
        var6 = native7;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var6;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                _fun0002_ip = 74; continue _fun0002;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot17 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot17 = var1;
        var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0003_ip = 45; continue _fun0003 }
 30:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
 45:
                if(var2) { _fun0003_ip = 54; continue _fun0003 }
 48:
                var2 = var3.@@iterator;
 54:
                if(var2) { _fun0003_ip = 342; continue _fun0003 }
 60:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0003_ip = 322; continue _fun0003 }
 85:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0003_ip = 282; continue _fun0003 }
 95:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0003_ip = 269; continue _fun0003 }
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
                if(!var7) { _fun0003_ip = 162; continue _fun0003 }
 157:
                var7 = var3.constructor;
 162:
                var10 = var9;
                if(!var7) { _fun0003_ip = 178; continue _fun0003 }
 168:
                var7 = var3.constructor;
                var10 = var7.name;
 178:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0003_ip = 248; continue _fun0003 }
 186:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0003_ip = 248; continue _fun0003 }
 194:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0003_ip = 233; continue _fun0003 }
 204:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0003_ip = 246; continue _fun0003 }
 233:
                var9 = _closure1_slot19;
                var7 = var9.bind(var8)(var3, var8);
 246:
                _fun0003_ip = 264; continue _fun0003;
 248:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
 264:
                var6 = var7;
                _fun0003_ip = 282; continue _fun0003;
 269:
                var7 = _closure1_slot19;
                var6 = var7.bind(var8)(var3, var8);
 282:
                var4 = var6;
                if(var4) { _fun0003_ip = 322; continue _fun0003 }
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
                if(!var4) { _fun0003_ip = 329; continue _fun0003 }
 325:
                _closure2_slot0 = var4;
 329:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0004_ip = 56; continue _fun0004 }
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
                        _fun0004_ip = 67; continue _fun0004;
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
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0005_ip = 23; continue _fun0005 }
 14:
                var2 = var4.length;
                var1 = var3 > var2;
 23:
                var2 = undefined;
                if(!var1) { _fun0005_ip = 33; continue _fun0005 }
 28:
                var2 = var4.length;
 33:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0005_ip = 70; continue _fun0005 }
 55:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0005_ip = 55; continue _fun0005 }
 70:
                return var1;
            }
        };
        var _closure1_slot19 = var1;
        var1 = function convertApplicationRecordToDetectableApplication(arg1) {
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['id'] = var3;
            var3 = var2.name;
            var1['name'] = var3;
            var3 = var2.executables;
            var1['executables'] = var3;
            var3 = var2.overlayWarn;
            var1['overlayWarn'] = var3;
            var3 = var2.overlayCompatibilityHook;
            var1['overlayCompatibilityHook'] = var3;
            var3 = var2.overlay;
            var1['overlay'] = var3;
            var3 = var2.hook;
            var1['hook'] = var3;
            var3 = var2.aliases;
            var1['aliases'] = var3;
            var3 = var2.supportsOutOfProcessOverlay;
            var1['supportsOutOfProcessOverlay'] = var3;
            var3 = new Array(0);
            var1['themes'] = var3;
            var2 = var2.icon;
            var1['icon'] = var2;
            return var1;
        };
        var _closure1_slot20 = var1;
        var1 = function addDetectableGame(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg1;
                var1 = _closure1_slot7;
                var1 = var2 instanceof var1;
                var5 = var2;
                if(!var1) { _fun0006_ip = 31; continue _fun0006 }
 20:
                var3 = _closure1_slot20;
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
 31:
                var4 = _closure1_slot10;
                var3 = var4.set;
                var1 = var2.id;
                var1 = var3.bind(var4)(var1, var5);
                var3 = _closure1_slot11;
                var4 = var2.name;
                var1 = var4.toLowerCase;
                var1 = var1.bind(var4)();
                var3[var1] = var5;
                var4 = _closure1_slot18;
                var3 = var2.aliases;
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var4 = var7.bind(var1)();
                var3 = var4.done;
                if(var3) { _fun0006_ip = 141; continue _fun0006 }
 103:
                var9 = var4.value;
                var8 = _closure1_slot11;
                var3 = var9.toLowerCase;
                var3 = var3.bind(var9)();
                var8[var3] = var5;
                var8 = var7.bind(var1)();
                var3 = var8.done;
                var4 = var8;
                if(!var3) { _fun0006_ip = 103; continue _fun0006 }
 141:
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 9;
                var3 = var7[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.isDesktop;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0006_ip = 234; continue _fun0006 }
 174:
                var3 = _closure1_slot18;
                var2 = var2.executables;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0006_ip = 234; continue _fun0006 }
 201:
                var2 = var3.value;
                var7 = _closure1_slot12;
                var2 = var2.name;
                var7[var2] = var5;
                var7 = var4.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0006_ip = 201; continue _fun0006 }
 234:
                return var1;
            }
        };
        var _closure1_slot21 = var1;
        var1 = global;
        var9 = var1.Object;
        var8 = var9.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var9)(var3, var1, var2);
        var1 = 0;
        var2 = var6[var1];
        var1 = undefined;
        var2 = var7.bind(var1)(var2);
        var _closure1_slot2 = var2;
        var2 = 1;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot3 = var2;
        var2 = 2;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot4 = var2;
        var2 = 3;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot5 = var2;
        var2 = 4;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot6 = var2;
        var2 = 5;
        var8 = var6[var2];
        var8 = var7.bind(var1)(var8);
        var _closure1_slot7 = var8;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.createExecutable;
        var _closure1_slot8 = var2;
        var2 = 6;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var2 = var2.Millis;
        var2 = var2.DAY;
        var _closure1_slot9 = var2;
        var2 = 7;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var8 = var2.prototype;
        var8 = Object.create(var8, {constructor: {value: var2}});
        var13 = var8;
        var2 = new var13[var2](var12);
        var2 = var2 instanceof Object ? var2 : var8;
        var _closure1_slot10 = var2;
        var2 = {};
        var _closure1_slot11 = var2;
        var2 = {};
        var _closure1_slot12 = var2;
        var2 = 8;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var9 = var2.Storage;
        var8 = var9.get;
        var2 = 'GameStoreReportedGames';
        var8 = var8.bind(var9)(var2);
        var2 = null;
        if(!(var2 == var8)) { _fun0001_ip = 333; continue _fun0001 }
 331:
        var8 = {};
 333:
        var _closure1_slot13 = var8;
        var8 = '';
        var _closure1_slot14 = var8;
        var _closure1_slot15 = var1;
        var _closure1_slot16 = var2;
        var2 = 11;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var8 = var2.PersistedStore;
        var2 = function(arg1) {
            var4 = function GameStore() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var4 = this;
                    var3 = undefined;
                    var5 = undefined;
                    var1 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var1 = var1.bind(var3)(var4, var2);
                    var1 = _closure1_slot5;
                    var9 = var1.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var1 = _closure1_slot17;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0007_ip = 69; continue _fun0007 }
 51:
                    var7 = var9.apply;
                    var5 = arguments;
                    var1 = var5;
                    var1 = var7.bind(var9)(var4, var1);
                    _fun0007_ip = 105; continue _fun0007;
 69:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot5;
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
            var5 = _closure1_slot6;
            var3 = undefined;
            var2 = arg1;
            var2 = var5.bind(var3)(var4, var2);
            var2 = _closure1_slot3;
            var5 = {};
            var1 = 'initialize';
            var5['key'] = var1;
            var1 = function value(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0008_ip = 59; continue _fun0008 }
 9:
                    var3 = var2.detectableGamesEtag;
                    if(!(var1 != var3)) { _fun0008_ip = 32; continue _fun0008 }
 19:
                    var4 = var2.detectableGamesEtag;
                    _closure1_slot14 = var4;
 32:
                    var3 = var2.detectableGames;
                    if(!(var1 != var3)) { _fun0008_ip = 59; continue _fun0008 }
 42:
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var3 = _closure1_slot21;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 59:
                    var1 = undefined;
                    return var1;
                }
            };
            var5['value'] = var1;
            var1 = new Array(15);
            var1[0] = var5;
            var5 = {};
            var7 = 'getState';
            var5['key'] = var7;
            var7 = function value() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.isDesktop;
                    var1 = var1.bind(var2)();
                    var2 = {};
                    if(var1) { _fun0009_ip = 63; continue _fun0009 }
 40:
                    var1 = '';
                    var2['detectableGamesEtag'] = var1;
                    var1 = new Array(0);
                    var2['detectableGames'] = var1;
                    var1 = var2;
                    _fun0009_ip = 93; continue _fun0009;
 63:
                    var4 = _closure1_slot14;
                    var2['detectableGamesEtag'] = var4;
                    var4 = _closure1_slot10;
                    var3 = var4.values;
                    var3 = var3.bind(var4)();
                    var2['detectableGames'] = var3;
                    var1 = var2;
 93:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'games';
            var5['key'] = var7;
            var7 = function get() {
                var2 = _closure1_slot10;
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
                var3 = _closure1_slot10;
                var2 = var3.get;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['value'] = var7;
            var1[3] = var5;
            var5 = {};
            var7 = 'getGameByName';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = arg1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0010_ip = 71; continue _fun0010 }
 9:
                    var2 = var3.toLowerCase;
                    var4 = var2.bind(var3)();
                    var2 = global;
                    var2 = var2.Object;
                    var2 = var2.prototype;
                    var6 = var2.hasOwnProperty;
                    var5 = var6.call;
                    var2 = _closure1_slot11;
                    var5 = var5.bind(var6)(var2, var4);
                    var2 = null;
                    if(!var5) { _fun0010_ip = 69; continue _fun0010 }
 61:
                    var3 = _closure1_slot11;
                    var2 = var3[var4];
 69:
                    return var2;
 71:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[4] = var5;
            var5 = {};
            var7 = 'isGameInDatabase';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = arg1;
                    var4 = this;
                    var2 = var4.getGameByName;
                    var1 = var3.name;
                    var2 = var2.bind(var4)(var1);
                    var1 = null;
                    var1 = var1 != var2;
                    if(var1) { _fun0011_ip = 72; continue _fun0011 }
 31:
                    var4 = var3.nativeProcessObserverId;
                    var2 = undefined;
                    var2 = var2 !== var4;
                    if(!var2) { _fun0011_ip = 69; continue _fun0011 }
 46:
                    var4 = var3.nativeProcessObserverId;
                    var3 = 2147483648.0;
                    var3 = var3 & var4;
                    var2 = !var3;
 69:
                    var1 = var2;
 72:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[5] = var5;
            var5 = {};
            var7 = 'fetching';
            var5['key'] = var7;
            var7 = function get() {
                var2 = _closure1_slot15;
                var1 = true;
                var1 = var1 === var2;
                return var1;
            };
            var5['get'] = var7;
            var1[6] = var5;
            var5 = {};
            var7 = 'detectableGamesEtag';
            var5['key'] = var7;
            var7 = function get() {
                var1 = _closure1_slot14;
                return var1;
            };
            var5['get'] = var7;
            var1[7] = var5;
            var5 = {};
            var7 = 'lastFetched';
            var5['key'] = var7;
            var7 = function get() {
                var1 = _closure1_slot16;
                return var1;
            };
            var5['get'] = var7;
            var1[8] = var5;
            var5 = {};
            var7 = 'detectableGamesTtl';
            var5['key'] = var7;
            var7 = function get() {
                var1 = _closure1_slot9;
                return var1;
            };
            var5['get'] = var7;
            var1[9] = var5;
            var5 = {};
            var7 = 'canFetchDetectableGames';
            var5['key'] = var7;
            var7 = function value() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var2 = _closure1_slot15;
                    var1 = true;
                    var1 = var1 !== var2;
                    if(!var1) { _fun0012_ip = 65; continue _fun0012 }
 16:
                    var4 = _closure1_slot16;
                    var2 = null;
                    var2 = var2 == var4;
                    if(var2) { _fun0012_ip = 62; continue _fun0012 }
 29:
                    var4 = global;
                    var5 = var4.Date;
                    var4 = var5.now;
                    var4 = var4.bind(var5)();
                    var5 = _closure1_slot16;
                    var3 = _closure1_slot9;
                    var3 = var5 + var3;
                    var2 = var4 >= var3;
 62:
                    var1 = var2;
 65:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[10] = var5;
            var5 = {};
            var7 = 'getGameByExecutable';
            var5['key'] = var7;
            var7 = function value(arg1) {
                var2 = _closure1_slot12;
                var1 = arg1;
                var1 = var2[var1];
                return var1;
            };
            var5['value'] = var7;
            var1[11] = var5;
            var5 = {};
            var7 = 'getGameByGameData';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var2 = arg1;
                    var7 = this;
                    var3 = var2.exePath;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0013_ip = 235; continue _fun0013 }
 21:
                    var4 = var2.exePath;
                    var3 = var4.split;
                    var6 = '/';
                    var4 = var3.bind(var4)(var6);
                    var3 = var4.pop;
                    var5 = var3.bind(var4)();
                    var4 = var2.exePath;
                    var3 = var4.split;
                    var8 = var3.bind(var4)(var6);
                    var4 = var8.slice;
                    var3 = -2;
                    var4 = var4.bind(var8)(var3);
                    var3 = var4.join;
                    var6 = var3.bind(var4)(var6);
                    var3 = var2.name;
                    var4 = var1 != var3;
                    var3 = undefined;
                    if(!var4) { _fun0013_ip = 198; continue _fun0013 }
 107:
                    var4 = var7.getGameByName;
                    var2 = var2.name;
                    var2 = var4.bind(var7)(var2);
                    if(!(var1 != var2)) { _fun0013_ip = 137; continue _fun0013 }
 127:
                    var4 = var2.executables;
                    if(!(var1 == var4)) { _fun0013_ip = 146; continue _fun0013 }
 137:
                    var3 = var2;
                    if(!(var1 != var3)) { _fun0013_ip = 198; continue _fun0013 }
 144:
                    return var1;
 146:
                    var9 = var2.executables;
                    var8 = var9.map;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.name;
                        return var1;
                    };
                    var8 = var8.bind(var9)(var4);
                    var4 = var8.includes;
                    var4 = var4.bind(var8)(var5);
                    if(var4) { _fun0013_ip = 233; continue _fun0013 }
 182:
                    var4 = var8.includes;
                    var4 = var4.bind(var8)(var6);
                    var3 = var2;
                    if(var4) { _fun0013_ip = 233; continue _fun0013 }
 198:
                    var4 = var7.getGameByExecutable;
                    var4 = var4.bind(var7)(var5);
                    if(!(var1 == var4)) { _fun0013_ip = 224; continue _fun0013 }
 213:
                    var5 = var7.getGameByExecutable;
                    var4 = var5.bind(var7)(var6);
 224:
                    if(!(var1 != var4)) { _fun0013_ip = 231; continue _fun0013 }
 228:
                    var3 = var4;
 231:
                    return var3;
 233:
                    return var2;
 235:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[12] = var5;
            var5 = {};
            var7 = 'shouldReport';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var5 = arg1;
                    var2 = this;
                    var1 = var2.getGameByName;
                    var1 = var1.bind(var2)(var5);
                    var3 = null;
                    var2 = var3 != var1;
                    var1 = _closure1_slot13;
                    var1 = var1[var5];
                    var3 = var3 != var1;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 10;
                    var5 = var5[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var5);
                    var5 = var1.ShowCurrentGame;
                    var1 = var5.getSetting;
                    var1 = var1.bind(var5)();
                    if(!var1) { _fun0014_ip = 86; continue _fun0014 }
 79:
                    var4 = _closure1_slot15;
                    var1 = !var4;
 86:
                    if(!var1) { _fun0014_ip = 98; continue _fun0014 }
 89:
                    if(var2) { _fun0014_ip = 95; continue _fun0014 }
 92:
                    var2 = var3;
 95:
                    var1 = !var2;
 98:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[13] = var5;
            var5 = {};
            var7 = 'markGameReported';
            var5['key'] = var7;
            var6 = function value(arg1) {
                var4 = _closure1_slot13;
                var3 = true;
                var1 = arg1;
                var4[var1] = var3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = var3.Storage;
                var4 = var5.set;
                var3 = _closure1_slot13;
                var2 = 'GameStoreReportedGames';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var5['value'] = var6;
            var1[14] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var8 = var2.bind(var1)(var8);
        var2 = 'GameStore';
        var8['displayName'] = var2;
        var8['persistKey'] = var2;
        var2 = new Array(2);
        var9 = function(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var3 = arg1;
                var4 = null;
                if(!(var4 == var3)) { _fun0015_ip = 31; continue _fun0015 }
 9:
                var1 = {};
                var2 = '';
                var1['detectableGamesEtag'] = var2;
                var2 = new Array(0);
                var1['detectableGames'] = var2;
                _fun0015_ip = 92; continue _fun0015;
 31:
                var2 = {};
                var5 = var3.detectableGamesEtag;
                var2['detectableGamesEtag'] = var5;
                var7 = var3.detectableGames;
                var5 = var4 == var7;
                var3 = undefined;
                if(var5) { _fun0015_ip = 76; continue _fun0015 }
 59:
                var6 = var7.map;
                var5 = function(arg1) {
                    var3 = _closure1_slot20;
                    var4 = _closure1_slot7;
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {constructor: {value: var4}});
                    var5 = arg1;
                    var6 = var2;
                    var1 = new var6[var4](var5, var4);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var3 = var6.bind(var7)(var5);
 76:
                if(!(var4 == var3)) { _fun0015_ip = 84; continue _fun0015 }
 80:
                var3 = new Array(0);
 84:
                var2['detectableGames'] = var3;
                var1 = var2;
 92:
                return var1;
            }
        };
        var2[0] = var9;
        var9 = function(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var1 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isDesktop;
                var2 = var2.bind(var3)();
                if(var2) { _fun0016_ip = 64; continue _fun0016 }
 41:
                var2 = {};
                var3 = '';
                var2['detectableGamesEtag'] = var3;
                var3 = new Array(0);
                var2['detectableGames'] = var3;
                var1 = var2;
 64:
                return var1;
            }
        };
        var2[1] = var9;
        var8['migrations'] = var2;
        var2 = 12;
        var2 = var6[var2];
        var12 = var7.bind(var1)(var2);
        var2 = {};
        var9 = function handleOverlayInitialize(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var1 = arg1;
                var3 = var1.detectableApplications;
                var2 = _closure1_slot18;
                var1 = undefined;
                var4 = var2.bind(var1)(var3);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0017_ip = 66; continue _fun0017 }
 37:
                var6 = _closure1_slot21;
                var2 = var3.value;
                var2 = var6.bind(var1)(var2);
                var6 = var4.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0017_ip = 37; continue _fun0017 }
 66:
                return var1;
            }
        };
        var2['OVERLAY_INITIALIZE'] = var9;
        var9 = function handleApplicationsFetch() {
            var1 = true;
            _closure1_slot15 = var1;
            var1 = undefined;
            return var1;
        };
        var2['GAMES_DATABASE_FETCH'] = var9;
        var9 = function handleApplicationsFetchFail() {
            var1 = false;
            _closure1_slot15 = var1;
            var1 = undefined;
            return var1;
        };
        var2['GAMES_DATABASE_FETCH_FAIL'] = var9;
        var4 = function handleDetectableGamesUpdated(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var1 = arg1;
                var4 = var1.games;
                var2 = var1.etag;
                var6 = null;
                var1 = var6 != var2;
                if(!var1) { _fun0018_ip = 37; continue _fun0018 }
 26:
                var3 = _closure1_slot14;
                var1 = var3 !== var2;
 37:
                if(!var1) { _fun0018_ip = 47; continue _fun0018 }
 40:
                _closure1_slot14 = var2;
 47:
                var2 = _closure1_slot18;
                var1 = undefined;
                var5 = var2.bind(var1)(var4);
                var4 = var5.bind(var1)();
                var2 = var4.done;
                if(var2) { _fun0018_ip = 331; continue _fun0018 }
 76:
                var8 = var4.value;
                var7 = _closure1_slot21;
                var2 = {};
                var9 = var8.id;
                var2['id'] = var9;
                var9 = var8.name;
                var2['name'] = var9;
                var11 = var8.executables;
                if(!(var6 == var11)) { _fun0018_ip = 119; continue _fun0018 }
 115:
                var11 = new Array(0);
 119:
                var10 = var11.map;
                var9 = _closure1_slot8;
                var9 = var10.bind(var11)(var9);
                var2['executables'] = var9;
                var10 = var8.overlay;
                var9 = var6 != var10;
                if(!var9) { _fun0018_ip = 154; continue _fun0018 }
 151:
                var9 = var10;
 154:
                var2['overlay'] = var9;
                var10 = var8.overlay_warn;
                var9 = var6 != var10;
                if(!var9) { _fun0018_ip = 175; continue _fun0018 }
 172:
                var9 = var10;
 175:
                var2['overlayWarn'] = var9;
                var10 = var8.overlay_compatibility_hook;
                var9 = var6 != var10;
                if(!var9) { _fun0018_ip = 196; continue _fun0018 }
 193:
                var9 = var10;
 196:
                var2['overlayCompatibilityHook'] = var9;
                var10 = var8.hook;
                var9 = var6 == var10;
                if(var9) { _fun0018_ip = 217; continue _fun0018 }
 214:
                var9 = var10;
 217:
                var2['hook'] = var9;
                var9 = var8.aliases;
                if(!(var6 == var9)) { _fun0018_ip = 236; continue _fun0018 }
 232:
                var9 = new Array(0);
 236:
                var2['aliases'] = var9;
                var11 = _closure1_slot7;
                var10 = var11.supportsOutOfProcessOverlay;
                var9 = var8.overlay_methods;
                var9 = var10.bind(var11)(var9);
                var2['supportsOutOfProcessOverlay'] = var9;
                var9 = var8.themes;
                if(!(var6 == var9)) { _fun0018_ip = 281; continue _fun0018 }
 277:
                var9 = new Array(0);
 281:
                var2['themes'] = var9;
                var9 = var8.icon_hash;
                var10 = var6 != var9;
                var8 = undefined;
                if(!var10) { _fun0018_ip = 304; continue _fun0018 }
 301:
                var8 = var9;
 304:
                var2['icon'] = var8;
                var2 = var7.bind(var1)(var2);
                var7 = var5.bind(var1)();
                var2 = var7.done;
                var4 = var7;
                if(!var2) { _fun0018_ip = 76; continue _fun0018 }
 331:
                _closure1_slot15 = var1;
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                _closure1_slot16 = var2;
                return var1;
            }
        };
        var2['GAMES_DATABASE_UPDATE'] = var4;
        var4 = var8.prototype;
        var4 = Object.create(var4, {constructor: {value: var8}});
        var13 = var4;
        var11 = var2;
        var2 = new var13[var8](var12, var11, var10);
        var2 = var2 instanceof Object ? var2 : var4;
        var4 = 13;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'stores/GameStore.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();