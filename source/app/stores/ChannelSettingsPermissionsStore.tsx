// app/stores/ChannelSettingsPermissionsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
                _closure1_slot26 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot26 = var1;
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
                var9 = _closure1_slot28;
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
                var7 = _closure1_slot28;
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
        var _closure1_slot27 = var1;
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
                if(!var5) { _fun0005_ip = 39; continue _fun0005 }
case 8:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0005_ip = 8; continue _fun0005 }
case 39:
                return var1;
            }
        };
        var _closure1_slot28 = var1;
        var1 = function getPermissionOverwrites(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg1;
                var1 = var2.getGuildId;
                var3 = var1.bind(var2)();
                var1 = {};
                var6 = var2.permissionOverwrites;
                var7 = var1;
                var2 = copyDataProperties(var7, var6);
                var5 = null;
                var2 = var5 != var3;
                if(!var2) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                var4 = var1[var3];
                var2 = var5 == var4;
case 40:
                if(!var2) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var2 = 10;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var2 = var4.makeEveryoneOverwrite;
                var2 = var2.bind(var4)(var3);
                var1[var3] = var2;
case 42:
                return var1;
            }
        };
        var _closure1_slot29 = var1;
        var9 = function init() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
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
                if(!(var3 != var1)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
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
                if(!(var3 == var5)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                _closure1_slot23 = var4;
case 46:
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
case 44:
                var1 = false;
                return var1;
            }
        };
        var _closure1_slot30 = var9;
        var1 = function syncChannelUpdates(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var5 = arg1;
                var1 = _closure1_slot21;
                var3 = null;
                if(!(var3 != var1)) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                var1 = _closure1_slot21;
                var1 = var1.id;
                if(!(var1 === var5)) { _fun0008_ip = 48; continue _fun0008 }
case 41:
                var4 = _closure1_slot10;
                var1 = var4.getChannel;
                var1 = var1.bind(var4)(var5);
                _closure1_slot21 = var1;
                if(!(var3 != var1)) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                var4 = _closure1_slot9;
                var1 = var4.getCategory;
                var1 = var1.bind(var4)();
                _closure1_slot22 = var1;
                var4 = _closure1_slot21;
                var1 = var4.getGuildId;
                var1 = var1.bind(var4)();
                if(!(var3 != var1)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
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
case 0:
                        var3 = arg1;
                        var4 = _closure1_slot19;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                        var2 = _closure2_slot0;
                        var1 = _closure1_slot19;
                        var1 = var1[var3];
                        var2[var3] = var1;
case 54:
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = var7.bind(var8)(var6);
                var6 = var5[var1];
                var6 = var3 == var6;
                if(!var6) { _fun0008_ip = 56; continue _fun0008 }
case 19:
                var7 = _closure1_slot21;
                var7 = var7.permissionOverwrites;
                var7 = var7[var1];
                var6 = var3 == var7;
case 56:
                if(!var6) { _fun0008_ip = 57; continue _fun0008 }
case 20:
                var7 = _closure1_slot2;
                var8 = _closure1_slot3;
                var6 = 10;
                var6 = var8[var6];
                var7 = var7.bind(var4)(var6);
                var6 = var7.makeEveryoneOverwrite;
                var6 = var6.bind(var7)(var1);
                var5[var1] = var6;
case 57:
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
                if(!(var3 != var5)) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                var5 = _closure1_slot24;
                var5 = var3 != var5;
                if(!var5) { _fun0008_ip = 60; continue _fun0008 }
case 16:
                var7 = _closure1_slot19;
                var6 = _closure1_slot24;
                var6 = var7[var6];
                var5 = var3 != var6;
case 60:
                if(!var5) { _fun0008_ip = 61; continue _fun0008 }
case 29:
                var5 = _closure1_slot24;
                _closure1_slot23 = var5;
                _closure1_slot24 = var3;
                _fun0008_ip = 61; continue _fun0008;
case 58:
                _closure1_slot23 = var1;
case 61:
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
case 52:
                var1 = false;
                return var1;
case 50:
                var1 = false;
                return var1;
case 48:
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
        if(var2) { _fun0001_ip = 62; continue _fun0001 }
case 63:
        var2 = false;
case 62:
        var _closure1_slot25 = var2;
        var2 = 12;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var8 = var2.Store;
        var2 = function(arg1) {
            var4 = function ChannelSettingsPermissionsStore() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
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
                    if(var1) { _fun0010_ip = 64; continue _fun0010 }
case 45:
                    var7 = var9.apply;
                    var5 = arguments;
                    var1 = var5;
                    var1 = var7.bind(var9)(var4, var1);
                    _fun0010_ip = 65; continue _fun0010;
case 64:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot7;
                    var6 = var6.bind(var3)(var4);
                    var6 = var6.constructor;
                    var5 = arguments;
                    var1 = var7.bind(var8)(var9, var5, var6);
case 65:
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
case 0:
                    var3 = _closure1_slot19;
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                    var2 = arg1;
                    var1 = var3[var2];
case 66:
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
case 0:
                var1 = arg1;
                var3 = var1.section;
                var4 = _closure1_slot21;
                var2 = null;
                if(!(var2 == var4)) { _fun0012_ip = 68; continue _fun0012 }
case 49:
                var2 = _closure1_slot11;
                var2 = var2.PERMISSIONS;
                if(!(var3 === var2)) { _fun0012_ip = 68; continue _fun0012 }
case 54:
                var2 = _closure1_slot30;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
case 68:
                var1 = false;
                return var1;
            }
        };
        var2['CHANNEL_SETTINGS_SET_SECTION'] = var10;
        var2['CHANNEL_SETTINGS_PERMISSIONS_INIT'] = var9;
        var9 = function handleUpdatePermission(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = arg1;
                var5 = var1.id;
                var7 = var1.allow;
                var6 = var1.deny;
                var4 = _closure1_slot19;
                var8 = null;
                var9 = var8 == var4;
                var1 = undefined;
                var2 = undefined;
                if(var9) { _fun0013_ip = 69; continue _fun0013 }
case 70:
                var2 = var4[var5];
case 69:
                if(!(var8 != var2)) { _fun0013_ip = 71; continue _fun0013 }
case 45:
                var4 = _closure1_slot21;
                if(!(var8 != var4)) { _fun0013_ip = 71; continue _fun0013 }
case 51:
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
case 71:
                var1 = false;
                return var1;
            }
        };
        var2['CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION'] = var9;
        var9 = function handleSelectPermission(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var2 = var1.id;
                var3 = _closure1_slot19;
                var4 = null;
                if(!(var4 != var3)) { _fun0014_ip = 37; continue _fun0014 }
case 49:
                var3 = _closure1_slot19;
                var3 = var3[var2];
                if(!(var4 == var3)) { _fun0014_ip = 45; continue _fun0014 }
case 37:
                var3 = _closure1_slot21;
                if(!(var4 != var3)) { _fun0014_ip = 68; continue _fun0014 }
case 72:
                _closure1_slot24 = var2;
                _fun0014_ip = 8; continue _fun0014;
case 68:
                var3 = false;
                return var3;
case 45:
                _closure1_slot23 = var2;
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var2['CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION'] = var9;
        var9 = function handleInit() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = _closure1_slot9;
                var2 = var3.getSection;
                var3 = var2.bind(var3)();
                var2 = _closure1_slot11;
                var2 = var2.PERMISSIONS;
                if(!(var3 === var2)) { _fun0015_ip = 72; continue _fun0015 }
case 73:
                var2 = _closure1_slot30;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 72:
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
case 0:
                var1 = arg1;
                var2 = var1.channels;
                var3 = _closure1_slot21;
                var1 = null;
                if(!(var1 != var3)) { _fun0016_ip = 74; continue _fun0016 }
case 75:
                var1 = _closure1_slot27;
                var8 = undefined;
                var7 = var1.bind(var8)(var2);
                var1 = var7.bind(var8)();
                var2 = var1.done;
                var6 = false;
                var4 = var1;
                var3 = false;
                var1 = false;
                if(var2) { _fun0016_ip = 76; continue _fun0016 }
case 77:
                var10 = _closure1_slot31;
                var2 = var4.value;
                var2 = var2.id;
                var2 = var10.bind(var8)(var2);
                if(!(var6 !== var2)) { _fun0016_ip = 78; continue _fun0016 }
case 79:
                var3 = true;
case 78:
                var11 = var7.bind(var8)();
                var2 = var11.done;
                var4 = var11;
                var1 = var3;
                if(!var2) { _fun0016_ip = 77; continue _fun0016 }
case 76:
                return var1;
case 74:
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
case 0:
                var1 = arg1;
                var3 = var1.silent;
                var1 = _closure1_slot12;
                if(var3) { _fun0017_ip = 72; continue _fun0017 }
case 80:
                var3 = var1.CLOSED;
                _closure1_slot17 = var3;
                var4 = _closure1_slot30;
                var3 = undefined;
                var3 = var4.bind(var3)();
                _fun0017_ip = 45; continue _fun0017;
case 72:
                var1 = var1.OPEN;
                _closure1_slot17 = var1;
case 45:
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