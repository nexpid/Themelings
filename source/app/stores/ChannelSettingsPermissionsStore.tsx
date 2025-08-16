// app/stores/ChannelSettingsPermissionsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var7;
        var1 = metroImportAll;
        var _closure1_slot2 = var1;
        var _closure1_slot3 = var6;
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
 72: // try_end0
                _fun0002_ip = 76; continue _fun0002;
 74: // catch_target0
                CatchBlockStart(arg_register=1);
 76:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot26 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot26 = var1;
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
                if(!var2) { _fun0003_ip = 46; continue _fun0003 }
 30:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
 46:
                if(var2) { _fun0003_ip = 55; continue _fun0003 }
 49:
                var2 = var3.@@iterator;
 55:
                if(var2) { _fun0003_ip = 345; continue _fun0003 }
 61:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0003_ip = 323; continue _fun0003 }
 86:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0003_ip = 283; continue _fun0003 }
 96:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0003_ip = 270; continue _fun0003 }
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
                if(!var7) { _fun0003_ip = 163; continue _fun0003 }
 158:
                var7 = var3.constructor;
 163:
                var10 = var9;
                if(!var7) { _fun0003_ip = 179; continue _fun0003 }
 169:
                var7 = var3.constructor;
                var10 = var7.name;
 179:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0003_ip = 249; continue _fun0003 }
 187:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0003_ip = 249; continue _fun0003 }
 195:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0003_ip = 234; continue _fun0003 }
 205:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0003_ip = 247; continue _fun0003 }
 234:
                var9 = _closure1_slot28;
                var7 = var9.bind(var8)(var3, var8);
 247:
                _fun0003_ip = 265; continue _fun0003;
 249:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
 265:
                var6 = var7;
                _fun0003_ip = 283; continue _fun0003;
 270:
                var7 = _closure1_slot28;
                var6 = var7.bind(var8)(var3, var8);
 283:
                var4 = var6;
                if(var4) { _fun0003_ip = 323; continue _fun0003 }
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
                if(!var4) { _fun0003_ip = 330; continue _fun0003 }
 326:
                _closure2_slot0 = var4;
 330:
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
 345:
                var1 = var2.call;
                var3 = var1.bind(var2)(var3);
                var2 = var3.next;
                var1 = var2.bind;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var _closure1_slot27 = var1;
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
        var _closure1_slot28 = var1;
        var1 = function getPermissionOverwrites(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg1;
                var1 = var2.getGuildId;
                var3 = var1.bind(var2)();
                var1 = {};
                var6 = var2.permissionOverwrites;
                var7 = var1;
                var2 = copyDataProperties(var7, var6);
                var5 = null;
                var2 = var5 != var3;
                if(!var2) { _fun0006_ip = 45; continue _fun0006 }
 37:
                var4 = var1[var3];
                var2 = var5 == var4;
 45:
                if(!var2) { _fun0006_ip = 88; continue _fun0006 }
 48:
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var2 = 10;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var2 = var4.makeEveryoneOverwrite;
                var2 = var2.bind(var4)(var3);
                var1[var3] = var2;
 88:
                return var1;
            }
        };
        var _closure1_slot29 = var1;
        var9 = function init() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = _closure1_slot9;
                var1 = var3.getChannel;
                var1 = var1.bind(var3)();
                _closure1_slot21 = var1;
                var3 = _closure1_slot9;
                var1 = var3.getCategory;
                var1 = var1.bind(var3)();
                _closure1_slot22 = var1;
                var1 = _closure1_slot21;
                var3 = null;
                if(!(var3 != var1)) { _fun0007_ip = 200; continue _fun0007 }
 51:
                var4 = _closure1_slot21;
                var1 = var4.getGuildId;
                var4 = var1.bind(var4)();
                var6 = _closure1_slot29;
                var5 = _closure1_slot21;
                var1 = undefined;
                var6 = var6.bind(var1)(var5);
                _closure1_slot19 = var6;
                _closure1_slot20 = var6;
                var5 = _closure1_slot23;
                var5 = var6[var5];
                if(!(var3 == var5)) { _fun0007_ip = 104; continue _fun0007 }
 100:
                _closure1_slot23 = var4;
 104:
                var4 = _closure1_slot22;
                var4 = var3 != var4;
                var _closure1_slot15 = var4;
                var5 = _closure1_slot2;
                var6 = _closure1_slot3;
                var4 = 10;
                var4 = var6[var4];
                var7 = var5.bind(var1)(var4);
                var6 = var7.areChannelsLocked;
                var5 = _closure1_slot21;
                var4 = _closure1_slot22;
                var4 = var6.bind(var7)(var5, var4);
                var _closure1_slot14 = var4;
                _closure1_slot24 = var3;
                var3 = false;
                _closure1_slot18 = var3;
                var3 = _closure1_slot12;
                var3 = var3.CLOSED;
                _closure1_slot17 = var3;
                var3 = _closure1_slot16;
                var2 = var3.clear;
                var2 = var2.bind(var3)();
                return var1;
 200:
                var1 = false;
                return var1;
            }
        };
        var _closure1_slot30 = var9;
        var1 = function syncChannelUpdates(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var5 = arg1;
                var1 = _closure1_slot21;
                var3 = null;
                if(!(var3 != var1)) { _fun0008_ip = 363; continue _fun0008 }
 21:
                var1 = _closure1_slot21;
                var1 = var1.id;
                if(!(var1 === var5)) { _fun0008_ip = 363; continue _fun0008 }
 37:
                var4 = _closure1_slot10;
                var1 = var4.getChannel;
                var1 = var1.bind(var4)(var5);
                _closure1_slot21 = var1;
                if(!(var3 != var1)) { _fun0008_ip = 359; continue _fun0008 }
 62:
                var4 = _closure1_slot9;
                var1 = var4.getCategory;
                var1 = var1.bind(var4)();
                _closure1_slot22 = var1;
                var4 = _closure1_slot21;
                var1 = var4.getGuildId;
                var1 = var1.bind(var4)();
                if(!(var3 != var1)) { _fun0008_ip = 355; continue _fun0008 }
 101:
                var7 = _closure1_slot29;
                var5 = _closure1_slot21;
                var4 = undefined;
                var5 = var7.bind(var4)(var5);
                _closure1_slot20 = var5;
                var5 = {};
                var _closure2_slot0 = var5;
                var8 = _closure1_slot16;
                var7 = var8.forEach;
                var6 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var3 = arg1;
                        var4 = _closure1_slot19;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0009_ip = 35; continue _fun0009 }
 16:
                        var2 = _closure2_slot0;
                        var1 = _closure1_slot19;
                        var1 = var1[var3];
                        var2[var3] = var1;
 35:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = var7.bind(var8)(var6);
                var6 = var5[var1];
                var6 = var3 == var6;
                if(!var6) { _fun0008_ip = 176; continue _fun0008 }
 158:
                var7 = _closure1_slot21;
                var7 = var7.permissionOverwrites;
                var7 = var7[var1];
                var6 = var3 == var7;
 176:
                if(!var6) { _fun0008_ip = 214; continue _fun0008 }
 179:
                var7 = _closure1_slot2;
                var8 = _closure1_slot3;
                var6 = 10;
                var6 = var8[var6];
                var7 = var7.bind(var4)(var6);
                var6 = var7.makeEveryoneOverwrite;
                var6 = var6.bind(var7)(var1);
                var5[var1] = var6;
 214:
                var6 = {};
                var7 = _closure1_slot21;
                var9 = var7.permissionOverwrites;
                var10 = var6;
                var7 = copyDataProperties(var10, var9);
                var10 = var6;
                var9 = var5;
                var5 = copyDataProperties(var10, var9);
                _closure1_slot19 = var6;
                var5 = _closure1_slot23;
                var5 = var6[var5];
                if(!(var3 != var5)) { _fun0008_ip = 303; continue _fun0008 }
 259:
                var5 = _closure1_slot24;
                var5 = var3 != var5;
                if(!var5) { _fun0008_ip = 286; continue _fun0008 }
 270:
                var7 = _closure1_slot19;
                var6 = _closure1_slot24;
                var6 = var7[var6];
                var5 = var3 != var6;
 286:
                if(!var5) { _fun0008_ip = 307; continue _fun0008 }
 289:
                var5 = _closure1_slot24;
                _closure1_slot23 = var5;
                _closure1_slot24 = var3;
                _fun0008_ip = 307; continue _fun0008;
 303:
                _closure1_slot23 = var1;
 307:
                var3 = _closure1_slot2;
                var5 = _closure1_slot3;
                var1 = 10;
                var1 = var5[var1];
                var5 = var3.bind(var4)(var1);
                var4 = var5.areChannelsLocked;
                var3 = _closure1_slot21;
                var1 = _closure1_slot22;
                var1 = var4.bind(var5)(var3, var1);
                _closure1_slot14 = var1;
                var1 = true;
                return var1;
 355:
                var1 = false;
                return var1;
 359:
                var1 = false;
                return var1;
 363:
                var1 = false;
                return var1;
            }
        };
        var _closure1_slot31 = var1;
        var8 = global;
        var11 = var8.Object;
        var10 = var11.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var10.bind(var11)(var3, var1, var2);
        var1 = 0;
        var2 = var6[var1];
        var1 = undefined;
        var2 = var7.bind(var1)(var2);
        var _closure1_slot4 = var2;
        var2 = 1;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot5 = var2;
        var2 = 2;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot6 = var2;
        var2 = 3;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot7 = var2;
        var2 = 4;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot8 = var2;
        var2 = 5;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot9 = var2;
        var2 = 6;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot10 = var2;
        var2 = 7;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var10 = var2.ChannelSettingsSections;
        var _closure1_slot11 = var10;
        var2 = var2.FormStates;
        var _closure1_slot12 = var2;
        var10 = 8;
        var10 = var6[var10];
        var10 = var5.bind(var1)(var10);
        var11 = var10.ADVANCED_MODE_ON_KEY;
        var _closure1_slot13 = var11;
        var8 = var8.Set;
        var10 = var8.prototype;
        var10 = Object.create(var10, {constructor: {value: var8}});
        var15 = var10;
        var8 = new var15[var8](var14);
        var8 = var8 instanceof Object ? var8 : var10;
        var _closure1_slot16 = var8;
        var2 = var2.CLOSED;
        var _closure1_slot17 = var2;
        var8 = false;
        var _closure1_slot18 = var8;
        var2 = null;
        var _closure1_slot19 = var2;
        var _closure1_slot20 = var2;
        var _closure1_slot21 = var2;
        var _closure1_slot22 = var2;
        var _closure1_slot23 = var2;
        var _closure1_slot24 = var2;
        var2 = 9;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var10 = var2.Storage;
        var2 = var10.get;
        var2 = var2.bind(var10)(var11);
        if(var2) { _fun0001_ip = 403; continue _fun0001 }
 401:
        var2 = false;
 403:
        var _closure1_slot25 = var2;
        var2 = 12;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var8 = var2.Store;
        var2 = function(arg1) {
            var4 = function ChannelSettingsPermissionsStore() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = this;
                    var3 = undefined;
                    var5 = undefined;
                    var1 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var1 = var1.bind(var3)(var4, var2);
                    var1 = _closure1_slot7;
                    var9 = var1.bind(var3)(var2);
                    var2 = _closure1_slot6;
                    var1 = _closure1_slot26;
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
                    var6 = _closure1_slot7;
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
            var5 = _closure1_slot8;
            var3 = undefined;
            var2 = arg1;
            var2 = var5.bind(var3)(var4, var2);
            var2 = _closure1_slot5;
            var5 = {};
            var1 = 'initialize';
            var5['key'] = var1;
            var1 = function value() {
                var4 = this;
                var3 = var4.waitFor;
                var2 = _closure1_slot9;
                var1 = _closure1_slot10;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var5['value'] = var1;
            var1 = new Array(13);
            var1[0] = var5;
            var5 = {};
            var7 = 'hasChanges';
            var5['key'] = var7;
            var7 = function value() {
                var1 = _closure1_slot18;
                return var1;
            };
            var5['value'] = var7;
            var1[1] = var5;
            var5 = {};
            var7 = 'showNotice';
            var5['key'] = var7;
            var7 = function value() {
                var2 = this;
                var1 = var2.hasChanges;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5['value'] = var7;
            var1[2] = var5;
            var5 = {};
            var7 = 'getPermissionOverwrite';
            var5['key'] = var7;
            var7 = function value(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var3 = _closure1_slot19;
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0011_ip = 25; continue _fun0011 }
 18:
                    var2 = arg1;
                    var1 = var3[var2];
 25:
                    return var1;
                }
            };
            var5['value'] = var7;
            var1[3] = var5;
            var5 = {};
            var7 = 'editedPermissionIds';
            var5['key'] = var7;
            var7 = function get() {
                var1 = global;
                var3 = var1.Array;
                var2 = var3.from;
                var1 = _closure1_slot16;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['get'] = var7;
            var1[4] = var5;
            var5 = {};
            var7 = 'permissionOverwrites';
            var5['key'] = var7;
            var7 = function get() {
                var1 = _closure1_slot19;
                return var1;
            };
            var5['get'] = var7;
            var1[5] = var5;
            var5 = {};
            var7 = 'selectedOverwriteId';
            var5['key'] = var7;
            var7 = function get() {
                var1 = _closure1_slot23;
                return var1;
            };
            var5['get'] = var7;
            var1[6] = var5;
            var5 = {};
            var7 = 'formState';
            var5['key'] = var7;
            var7 = function get() {
                var1 = _closure1_slot17;
                return var1;
            };
            var5['get'] = var7;
            var1[7] = var5;
            var5 = {};
            var7 = 'isLockable';
            var5['key'] = var7;
            var7 = function get() {
                var1 = _closure1_slot15;
                return var1;
            };
            var5['get'] = var7;
            var1[8] = var5;
            var5 = {};
            var7 = 'locked';
            var5['key'] = var7;
            var7 = function get() {
                var1 = _closure1_slot14;
                return var1;
            };
            var5['get'] = var7;
            var1[9] = var5;
            var5 = {};
            var7 = 'channel';
            var5['key'] = var7;
            var7 = function get() {
                var1 = _closure1_slot21;
                return var1;
            };
            var5['get'] = var7;
            var1[10] = var5;
            var5 = {};
            var7 = 'category';
            var5['key'] = var7;
            var7 = function get() {
                var1 = _closure1_slot22;
                return var1;
            };
            var5['get'] = var7;
            var1[11] = var5;
            var5 = {};
            var7 = 'advancedMode';
            var5['key'] = var7;
            var6 = function get() {
                var1 = _closure1_slot25;
                return var1;
            };
            var5['get'] = var6;
            var1[12] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var8 = var2.bind(var1)(var8);
        var2 = 'ChannelSettingsPermissionsStore';
        var8['displayName'] = var2;
        var2 = 13;
        var2 = var6[var2];
        var14 = var7.bind(var1)(var2);
        var2 = {};
        var10 = function handleSetSection(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var1 = arg1;
                var3 = var1.section;
                var4 = _closure1_slot21;
                var2 = null;
                if(!(var2 == var4)) { _fun0012_ip = 47; continue _fun0012 }
 21:
                var2 = _closure1_slot11;
                var2 = var2.PERMISSIONS;
                if(!(var3 === var2)) { _fun0012_ip = 47; continue _fun0012 }
 35:
                var2 = _closure1_slot30;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
 47:
                var1 = false;
                return var1;
            }
        };
        var2['CHANNEL_SETTINGS_SET_SECTION'] = var10;
        var2['CHANNEL_SETTINGS_PERMISSIONS_INIT'] = var9;
        var9 = function handleUpdatePermission(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var1 = arg1;
                var5 = var1.id;
                var7 = var1.allow;
                var6 = var1.deny;
                var4 = _closure1_slot19;
                var8 = null;
                var9 = var8 == var4;
                var1 = undefined;
                var2 = undefined;
                if(var9) { _fun0013_ip = 44; continue _fun0013 }
 40:
                var2 = var4[var5];
 44:
                if(!(var8 != var2)) { _fun0013_ip = 231; continue _fun0013 }
 51:
                var4 = _closure1_slot21;
                if(!(var8 != var4)) { _fun0013_ip = 231; continue _fun0013 }
 62:
                var4 = {};
                var11 = var4;
                var10 = var2;
                var2 = copyDataProperties(var11, var10);
                var2 = 'allow';
                var4[var2] = var7;
                var2 = 'deny';
                var4[var2] = var6;
                var2 = {};
                var10 = _closure1_slot19;
                var11 = var2;
                var6 = copyDataProperties(var11, var10);
                var2[var5] = var4;
                _closure1_slot19 = var2;
                var4 = _closure1_slot16;
                var2 = var4.add;
                var2 = var2.bind(var4)(var5);
                var2 = _closure1_slot12;
                var2 = var2.OPEN;
                _closure1_slot17 = var2;
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 11;
                var2 = var5[var2];
                var7 = var4.bind(var1)(var2);
                var6 = var7.isEqual;
                var4 = _closure1_slot19;
                var2 = _closure1_slot20;
                var2 = var6.bind(var7)(var4, var2);
                var2 = !var2;
                _closure1_slot18 = var2;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var5[var2];
                var6 = var4.bind(var1)(var2);
                var5 = var6.areChannelsLocked;
                var4 = _closure1_slot21;
                var2 = _closure1_slot22;
                var2 = var5.bind(var6)(var4, var2);
                _closure1_slot14 = var2;
                return var1;
 231:
                var1 = false;
                return var1;
            }
        };
        var2['CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION'] = var9;
        var9 = function handleSelectPermission(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var1 = arg1;
                var2 = var1.id;
                var3 = _closure1_slot19;
                var4 = null;
                if(!(var4 != var3)) { _fun0014_ip = 33; continue _fun0014 }
 21:
                var3 = _closure1_slot19;
                var3 = var3[var2];
                if(!(var4 == var3)) { _fun0014_ip = 51; continue _fun0014 }
 33:
                var3 = _closure1_slot21;
                if(!(var4 != var3)) { _fun0014_ip = 47; continue _fun0014 }
 41:
                _closure1_slot24 = var2;
                _fun0014_ip = 55; continue _fun0014;
 47:
                var3 = false;
                return var3;
 51:
                _closure1_slot23 = var2;
 55:
                var1 = undefined;
                return var1;
            }
        };
        var2['CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION'] = var9;
        var9 = function handleInit() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var3 = _closure1_slot9;
                var2 = var3.getSection;
                var3 = var2.bind(var3)();
                var2 = _closure1_slot11;
                var2 = var2.PERMISSIONS;
                if(!(var3 === var2)) { _fun0015_ip = 41; continue _fun0015 }
 31:
                var2 = _closure1_slot30;
                var1 = undefined;
                var1 = var2.bind(var1)();
 41:
                var1 = undefined;
                return var1;
            }
        };
        var2['CHANNEL_SETTINGS_INIT'] = var9;
        var9 = function handleClose() {
            var1 = _closure1_slot12;
            var1 = var1.CLOSED;
            _closure1_slot17 = var1;
            var1 = null;
            _closure1_slot19 = var1;
            _closure1_slot20 = var1;
            _closure1_slot21 = var1;
            _closure1_slot22 = var1;
            var3 = false;
            _closure1_slot18 = var3;
            var4 = _closure1_slot16;
            var3 = var4.clear;
            var3 = var3.bind(var4)();
            _closure1_slot23 = var1;
            _closure1_slot24 = var1;
            var1 = undefined;
            return var1;
        };
        var2['CHANNEL_SETTINGS_CLOSE'] = var9;
        var9 = function handleChannelUpdates(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var1 = arg1;
                var2 = var1.channels;
                var3 = _closure1_slot21;
                var1 = null;
                if(!(var1 != var3)) { _fun0016_ip = 99; continue _fun0016 }
 22:
                var1 = _closure1_slot27;
                var8 = undefined;
                var7 = var1.bind(var8)(var2);
                var1 = var7.bind(var8)();
                var2 = var1.done;
                var6 = false;
                var4 = var1;
                var3 = false;
                var1 = false;
                if(var2) { _fun0016_ip = 97; continue _fun0016 }
 54:
                var10 = _closure1_slot31;
                var2 = var4.value;
                var2 = var2.id;
                var2 = var10.bind(var8)(var2);
                if(!(var6 !== var2)) { _fun0016_ip = 79; continue _fun0016 }
 77:
                var3 = true;
 79:
                var11 = var7.bind(var8)();
                var2 = var11.done;
                var4 = var11;
                var1 = var3;
                if(!var2) { _fun0016_ip = 54; continue _fun0016 }
 97:
                return var1;
 99:
                var1 = false;
                return var1;
            }
        };
        var2['CHANNEL_UPDATES'] = var9;
        var9 = function handleSubmitting() {
            var1 = _closure1_slot12;
            var1 = var1.SUBMITTING;
            _closure1_slot17 = var1;
            var1 = undefined;
            return var1;
        };
        var2['CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING'] = var9;
        var9 = function handleSaveSuccess(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var1 = arg1;
                var3 = var1.silent;
                var1 = _closure1_slot12;
                if(var3) { _fun0017_ip = 41; continue _fun0017 }
 19:
                var3 = var1.CLOSED;
                _closure1_slot17 = var3;
                var4 = _closure1_slot30;
                var3 = undefined;
                var3 = var4.bind(var3)();
                _fun0017_ip = 51; continue _fun0017;
 41:
                var1 = var1.OPEN;
                _closure1_slot17 = var1;
 51:
                var1 = undefined;
                return var1;
            }
        };
        var2['CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS'] = var9;
        var4 = function handleSetAdvancedMode(arg1) {
            var1 = arg1;
            var5 = var1.advancedMode;
            _closure1_slot25 = var5;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var4 = var3.Storage;
            var3 = var4.set;
            var2 = _closure1_slot13;
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        };
        var2['CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE'] = var4;
        var4 = var8.prototype;
        var4 = Object.create(var4, {constructor: {value: var8}});
        var15 = var4;
        var13 = var2;
        var2 = new var15[var8](var14, var13, var12);
        var2 = var2 instanceof Object ? var2 : var4;
        var4 = 14;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'stores/ChannelSettingsPermissionsStore.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();