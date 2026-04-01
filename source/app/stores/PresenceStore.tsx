// app/stores/PresenceStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
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
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
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
            var2 = var3["@@iterator"];
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
            var9 = _closure1_slot27;
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
            var7 = _closure1_slot27;
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
    var _closure1_slot26 = var1;
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
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function getPresence(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = _closure1_slot16;
            var1 = arg1;
            var3 = var2[var1];
            var1 = null;
            var2 = var1 != var3;
            if(!var2) { _fun0005_ip = 7; continue _fun0005 }
case 35:
            var2 = arg2;
            var1 = var3[var2];
case 7:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var2 = function sortActivity(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var1 = _closure1_slot23;
            var6 = undefined;
            var5 = var1.bind(var6)(var2);
            var1 = _closure1_slot23;
            var1 = var1.bind(var6)(var4);
            var1 = var5 - var1;
            if(var1) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var5 = _closure1_slot24;
            var5 = var5.bind(var6)(var2);
            var3 = _closure1_slot24;
            var3 = var3.bind(var6)(var4);
            var1 = var5 - var3;
case 39:
            if(var1) { _fun0006_ip = 41; continue _fun0006 }
case 11:
            var6 = var2.created_at;
            var5 = null;
            var7 = var5 != var6;
            var2 = 0;
            if(!var7) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var2 = var6;
case 42:
            var4 = var4.created_at;
            var5 = var5 != var4;
            var3 = 0;
            if(!var5) { _fun0006_ip = 44; continue _fun0006 }
case 15:
            var3 = var4;
case 44:
            var1 = var2 - var3;
case 41:
            return var1;
        }
    };
    var _closure1_slot29 = var2;
    var1 = function filterPlayingActivities(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.length;
            var7 = 0;
            if(!(var7 !== var2)) { _fun0007_ip = 45; continue _fun0007 }
case 46:
            var2 = new Array(0);
            var3 = new Array(0);
            var5 = _closure1_slot26;
            var9 = undefined;
            var8 = var5.bind(var9)(var1);
            var6 = var8.bind(var9)();
            var5 = var6.done;
            if(var5) { _fun0007_ip = 47; continue _fun0007 }
case 48:
            var10 = var6.value;
            var11 = var10.type;
            var5 = _closure1_slot11;
            var5 = var5.PLAYING;
            if(!(var11 !== var5)) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var5 = var2.push;
            var5 = var5.bind(var2)(var10);
            _fun0007_ip = 51; continue _fun0007;
case 49:
            var5 = var3.push;
            var5 = var5.bind(var3)(var10);
case 51:
            var10 = var8.bind(var9)();
            var5 = var10.done;
            var6 = var10;
            if(!var5) { _fun0007_ip = 48; continue _fun0007 }
case 47:
            var6 = var3.length;
            var5 = 1;
            if(!(!(var6 <= var5))) { _fun0007_ip = 24; continue _fun0007 }
case 52:
            var6 = new Array(0);
            var14 = var6;
            var13 = var3;
            var12 = 0;
            var3 = arraySpread(var14, var13, var12);
            var3 = var6.sort;
            var4 = _closure1_slot29;
            var3 = var3.bind(var6)(var4);
            var6 = var3[var7];
            var3 = new Array(1);
            var14 = var3;
            var13 = var2;
            var2 = arraySpread(var14, var13, var12);
            var3[1] = var6;
            var2 = var2 + var5;
            var2 = var3.sort;
            var2 = var2.bind(var3)(var4);
            return var2;
case 24:
            return var1;
case 45:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function setActivitiesForUser(arg1, arg2) {
        var4 = arg1;
        var5 = arg2;
        var2 = _closure1_slot18;
        var2[var4] = var5;
        var3 = _closure1_slot19;
        var2 = _closure1_slot30;
        var1 = undefined;
        var2 = var2.bind(var1)(var5);
        var3[var4] = var2;
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = function flattenPresence(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot17;
            var1 = delete var1[var3];
            var1 = _closure1_slot18;
            var1 = delete var1[var3];
            var1 = _closure1_slot19;
            var1 = delete var1[var3];
            var1 = _closure1_slot20;
            var1 = delete var1[var3];
            var1 = _closure1_slot21;
            var1 = delete var1[var3];
            var1 = _closure1_slot16;
            var1 = var1[var3];
            var5 = null;
            if(!(var5 != var1)) { _fun0008_ip = 53; continue _fun0008 }
case 54:
            var9 = global;
            var7 = var9.Object;
            var6 = var7.values;
            var1 = _closure1_slot16;
            var1 = var1[var3];
            var11 = var6.bind(var7)(var1);
            var8 = var11.reduce;
            var7 = 0;
            var6 = var11[var7];
            var1 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var5 = arg1;
                    var2 = arg2;
                    var7 = var2.processedAtTimestamp;
                    var6 = var5.processedAtTimestamp;
                    var1 = var2.activities;
                    var8 = null;
                    var1 = var8 != var1;
                    var3 = 0;
                    if(!var1) { _fun0009_ip = 6; continue _fun0009 }
case 55:
                    var1 = var2.activities;
                    var3 = var1.length;
case 6:
                    var1 = var5.activities;
                    var1 = var8 != var1;
                    var4 = 0;
                    if(!var1) { _fun0009_ip = 5; continue _fun0009 }
case 11:
                    var1 = var5.activities;
                    var4 = var1.length;
case 5:
                    if(!(!(var7 > var6))) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                    var1 = var5;
                    if(!(var7 === var6)) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                    var1 = var5;
                    if(!(var3 > var4)) { _fun0009_ip = 58; continue _fun0009 }
case 56:
                    var1 = var2;
case 58:
                    return var1;
                }
            };
            var1 = var8.bind(var11)(var1, var6);
            var8 = var1.status;
            var6 = _closure1_slot10;
            var6 = var6.OFFLINE;
            if(!(var8 === var6)) { _fun0008_ip = 60; continue _fun0008 }
case 61:
            var6 = var1.hiddenActivities;
            if(!(var5 != var6)) { _fun0008_ip = 62; continue _fun0008 }
case 63:
            var6 = var1.hiddenActivities;
            var6 = var6.length;
            if(!(!(var6 > var7))) { _fun0008_ip = 60; continue _fun0008 }
case 62:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var6 = 10;
            var6 = var8[var6];
            var10 = undefined;
            var12 = var7.bind(var10)(var6);
            var8 = var12.every;
            var6 = _closure1_slot16;
            var7 = var6[var3];
            var6 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.status;
                    var1 = _closure1_slot10;
                    var1 = var1.OFFLINE;
                    var1 = var2 === var1;
                    if(!var1) { _fun0010_ip = 64; continue _fun0010 }
case 38:
                    var4 = var3.hiddenActivities;
                    var2 = null;
                    var2 = var2 == var4;
                    if(var2) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                    var3 = var3.hiddenActivities;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var3 === var4;
case 65:
                    var1 = var2;
case 64:
                    return var1;
                }
            };
            var6 = var8.bind(var12)(var7, var6);
            if(var6) { _fun0008_ip = 67; continue _fun0008 }
case 68:
            var7 = var1.status;
            var6 = _closure1_slot10;
            var6 = var6.OFFLINE;
            if(!(var7 === var6)) { _fun0008_ip = 53; continue _fun0008 }
case 69:
            var7 = var11.some;
            var6 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.hiddenActivities;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0011_ip = 55; continue _fun0011 }
case 70:
                    var2 = var2.hiddenActivities;
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
case 55:
                    return var1;
                }
            };
            var6 = var7.bind(var11)(var6);
            if(!var6) { _fun0008_ip = 53; continue _fun0008 }
case 71:
            var7 = _closure1_slot20;
            var8 = _closure1_slot33;
            var12 = var9.Object;
            var6 = var12.values;
            var13 = var6.bind(var12)(var11);
            var12 = var13.flatMap;
            var6 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.hiddenActivities;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0012_ip = 72; continue _fun0012 }
case 73:
                    var1 = new Array(0);
case 72:
                    return var1;
                }
            };
            var6 = var12.bind(var13)(var6);
            var6 = var8.bind(var10)(var6);
            var7[var3] = var6;
            _fun0008_ip = 53; continue _fun0008;
case 67:
            var6 = _closure1_slot16;
            var6 = delete var6[var3];
            _fun0008_ip = 53; continue _fun0008;
case 60:
            var7 = _closure1_slot17;
            var6 = var1.status;
            var7[var3] = var6;
            var7 = _closure1_slot31;
            var6 = var1.activities;
            var8 = undefined;
            var6 = var7.bind(var8)(var3, var6);
            var6 = _closure1_slot20;
            var7 = _closure1_slot33;
            var10 = var9.Object;
            var9 = var10.values;
            var10 = var9.bind(var10)(var11);
            var9 = var10.flatMap;
            var4 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.hiddenActivities;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0013_ip = 72; continue _fun0013 }
case 73:
                    var1 = new Array(0);
case 72:
                    return var1;
                }
            };
            var4 = var9.bind(var10)(var4);
            var4 = var7.bind(var8)(var4);
            var6[var3] = var4;
            var4 = var1.clientStatus;
            if(!(var5 != var4)) { _fun0008_ip = 53; continue _fun0008 }
case 74:
            var2 = _closure1_slot21;
            var1 = var1.clientStatus;
            var2[var3] = var1;
case 53:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function dedupeHiddenActivities(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var2 = var1.length;
            var4 = 0;
            if(!(var4 !== var2)) { _fun0014_ip = 75; continue _fun0014 }
case 36:
            var3 = new Array(0);
            var9 = var3;
            var8 = var1;
            var7 = 0;
            var2 = arraySpread(var9, var8, var7);
            var2 = var3.reverse;
            var6 = var2.bind(var3)();
            var2 = global;
            var5 = var2.Map;
            var3 = var6.map;
            var2 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = arg1;
                    var6 = var2.application_id;
                    var1 = var2.party;
                    var3 = null;
                    var3 = var3 == var1;
                    var5 = undefined;
                    if(var3) { _fun0015_ip = 76; continue _fun0015 }
case 77:
                    var5 = var1.id;
case 76:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var3 = '';
                    var1 = ':';
                    var3 = var4.bind(var3)(var6, var1, var5);
                    var1 = new Array(2);
                    var1[0] = var3;
                    var1[1] = var2;
                    return var1;
                }
            };
            var9 = var3.bind(var6)(var2);
            var3 = var5.prototype;
            var3 = Object.create(var3, {constructor: {value: var5}});
            var10 = var3;
            var2 = new var10[var5](var9, var8);
            var3 = var2 instanceof Object ? var2 : var3;
            var2 = var3.values;
            var8 = var2.bind(var3)();
            var2 = new Array(0);
            var9 = var2;
            var3 = arraySpread(var9, var8, var7);
            return var2;
case 75:
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function flattenPresenceInConnectionOpen(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot16;
            var9 = var1[var3];
            var5 = null;
            if(!(var5 != var9)) { _fun0016_ip = 78; continue _fun0016 }
case 35:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 10;
            var1 = var6[var1];
            var7 = undefined;
            var8 = var4.bind(var7)(var1);
            var6 = var8.maxBy;
            var1 = global;
            var4 = var1.Object;
            var1 = var4.values;
            var4 = var1.bind(var4)(var9);
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.processedAtTimestamp;
                return var1;
            };
            var1 = var6.bind(var8)(var4, var1);
            var6 = var1.status;
            var4 = _closure1_slot10;
            var4 = var4.OFFLINE;
            if(!(var6 === var4)) { _fun0016_ip = 79; continue _fun0016 }
case 80:
            var4 = var1.hiddenActivities;
            if(!(var5 != var4)) { _fun0016_ip = 78; continue _fun0016 }
case 81:
            var4 = var1.hiddenActivities;
            var6 = var4.length;
            var4 = 0;
            if(!(var6 > var4)) { _fun0016_ip = 78; continue _fun0016 }
case 79:
            var6 = _closure1_slot17;
            var4 = var1.status;
            var6[var3] = var4;
            var6 = _closure1_slot31;
            var4 = var1.activities;
            var4 = var6.bind(var7)(var3, var4);
            var6 = _closure1_slot20;
            var4 = var1.hiddenActivities;
            if(!(var5 == var4)) { _fun0016_ip = 82; continue _fun0016 }
case 83:
            var4 = new Array(0);
case 82:
            var6[var3] = var4;
            var4 = var1.clientStatus;
            if(!(var5 != var4)) { _fun0016_ip = 78; continue _fun0016 }
case 84:
            var2 = _closure1_slot21;
            var1 = var1.clientStatus;
            var2[var3] = var1;
case 78:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function updatePresence(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guildId;
            var3 = var1.userId;
            var8 = var1.status;
            var7 = var1.clientStatus;
            var10 = var1.activities;
            var9 = var1.hiddenActivities;
            var6 = var1.processedAtTimestamp;
            var4 = _closure1_slot8;
            var2 = var4.getId;
            var2 = var2.bind(var4)();
            if(!(var3 !== var2)) { _fun0017_ip = 85; continue _fun0017 }
case 86:
            var2 = _closure1_slot10;
            var2 = var2.OFFLINE;
            var2 = var8 === var2;
            if(!var2) { _fun0017_ip = 87; continue _fun0017 }
case 59:
            var4 = null;
            var4 = var4 == var9;
            if(var4) { _fun0017_ip = 41; continue _fun0017 }
case 88:
            var12 = var9.length;
            var11 = 0;
            var4 = var11 === var12;
case 41:
            var2 = var4;
case 87:
            var4 = _closure1_slot16;
            var4 = var4[var3];
            var11 = null;
            if(!(var11 == var4)) { _fun0017_ip = 89; continue _fun0017 }
case 90:
            if(var2) { _fun0017_ip = 91; continue _fun0017 }
case 92:
            var13 = _closure1_slot16;
            var12 = {};
            var13[var3] = var12;
            var4 = var12;
case 89:
            if(var2) { _fun0017_ip = 93; continue _fun0017 }
case 94:
            var13 = var10.length;
            var2 = 1;
            var12 = var10;
            if(!(var13 > var2)) { _fun0017_ip = 95; continue _fun0017 }
case 96:
            var13 = new Array(0);
            var16 = 0;
            var18 = var13;
            var17 = var10;
            var2 = arraySpread(var18, var17, var16);
            var10 = var13.sort;
            var2 = _closure1_slot29;
            var12 = var10.bind(var13)(var2);
case 95:
            var2 = _closure1_slot33;
            if(!(var11 == var9)) { _fun0017_ip = 78; continue _fun0017 }
case 97:
            var9 = new Array(0);
case 78:
            var14 = undefined;
            var9 = var2.bind(var14)(var9);
            var2 = var4[var5];
            var10 = var12;
            if(!(var11 != var2)) { _fun0017_ip = 28; continue _fun0017 }
case 98:
            var13 = _closure1_slot0;
            var15 = _closure1_slot1;
            var11 = 11;
            var11 = var15[var11];
            var13 = var13.bind(var14)(var11);
            var11 = var2.activities;
            var11 = var13.bind(var14)(var11, var12);
            var10 = var12;
            if(!var11) { _fun0017_ip = 28; continue _fun0017 }
case 99:
            var10 = var2.activities;
case 28:
            var2 = {};
            var2['status'] = var8;
            var2['clientStatus'] = var7;
            var2['activities'] = var10;
            var2['hiddenActivities'] = var9;
            var2['processedAtTimestamp'] = var6;
            var4[var5] = var2;
            _fun0017_ip = 100; continue _fun0017;
case 93:
            var2 = {};
            var2['status'] = var8;
            var2['clientStatus'] = var7;
            var7 = _closure1_slot15;
            var2['activities'] = var7;
            var7 = _closure1_slot15;
            var2['hiddenActivities'] = var7;
            var2['processedAtTimestamp'] = var6;
            var4[var5] = var2;
case 100:
            var2 = _closure1_slot22;
            var2 = delete var2[var3];
            var2 = _closure1_slot32;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            var1 = true;
            return var1;
case 91:
            var1 = false;
            return var1;
case 85:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function updatePresenceInConnectionOpen(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var13 = var1.userId;
            var7 = var1.status;
            var6 = var1.clientStatus;
            var11 = var1.activities;
            var10 = var1.hiddenActivities;
            var4 = var1.processedAtTimestamp;
            var2 = _closure1_slot8;
            var1 = var2.getId;
            var1 = var1.bind(var2)();
            if(!(var13 !== var1)) { _fun0018_ip = 101; continue _fun0018 }
case 86:
            var1 = _closure1_slot10;
            var1 = var1.OFFLINE;
            var8 = var7 === var1;
            if(!var8) { _fun0018_ip = 87; continue _fun0018 }
case 59:
            var1 = null;
            var1 = var1 == var10;
            if(var1) { _fun0018_ip = 41; continue _fun0018 }
case 88:
            var9 = var10.length;
            var2 = 0;
            var1 = var2 === var9;
case 41:
            var8 = var1;
case 87:
            var1 = _closure1_slot16;
            var2 = var1[var13];
            var1 = null;
            if(!(var1 == var2)) { _fun0018_ip = 89; continue _fun0018 }
case 90:
            if(var8) { _fun0018_ip = 102; continue _fun0018 }
case 92:
            var12 = _closure1_slot16;
            var9 = {};
            var12[var13] = var9;
            var2 = var9;
case 89:
            if(var8) { _fun0018_ip = 103; continue _fun0018 }
case 104:
            var12 = var11.length;
            var8 = 1;
            var9 = var11;
            if(!(var12 > var8)) { _fun0018_ip = 105; continue _fun0018 }
case 106:
            var12 = new Array(0);
            var14 = 0;
            var16 = var12;
            var15 = var11;
            var8 = arraySpread(var16, var15, var14);
            var11 = var12.sort;
            var8 = _closure1_slot29;
            var9 = var11.bind(var12)(var8);
case 105:
            var8 = _closure1_slot33;
            if(!(var1 == var10)) { _fun0018_ip = 107; continue _fun0018 }
case 108:
            var10 = new Array(0);
case 107:
            var1 = undefined;
            var8 = var8.bind(var1)(var10);
            var1 = {};
            var1['status'] = var7;
            var1['clientStatus'] = var6;
            var1['activities'] = var9;
            var1['hiddenActivities'] = var8;
            var1['processedAtTimestamp'] = var4;
            var2[var3] = var1;
            _fun0018_ip = 101; continue _fun0018;
case 103:
            var1 = {};
            var1['status'] = var7;
            var1['clientStatus'] = var6;
            var6 = _closure1_slot15;
            var1['activities'] = var6;
            var5 = _closure1_slot15;
            var1['hiddenActivities'] = var5;
            var1['processedAtTimestamp'] = var4;
            var2[var3] = var1;
case 101:
            var1 = undefined;
            return var1;
case 102:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function clearPresence(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var5 = _closure1_slot8;
            var4 = var5.getId;
            var4 = var4.bind(var5)();
            if(!(var3 !== var4)) { _fun0019_ip = 75; continue _fun0019 }
case 109:
            var4 = _closure1_slot16;
            var5 = var4[var3];
            var6 = null;
            if(!(var6 != var5)) { _fun0019_ip = 41; continue _fun0019 }
case 110:
            var4 = var5[var2];
            if(!(var6 != var4)) { _fun0019_ip = 41; continue _fun0019 }
case 9:
            var2 = delete var5[var2];
            var2 = global;
            var4 = var2.Object;
            var2 = var4.keys;
            var2 = var2.bind(var4)(var5);
            var4 = var2.length;
            var2 = 0;
            if(!(var2 === var4)) { _fun0019_ip = 56; continue _fun0019 }
case 111:
            var2 = _closure1_slot16;
            var2 = delete var2[var3];
case 56:
            var2 = _closure1_slot32;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
case 41:
            var1 = false;
            return var1;
case 75:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function clearPresences(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot26;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var2);
            var4 = var7.keys;
            var2 = _closure1_slot16;
            var2 = var4.bind(var7)(var2);
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0020_ip = 58; continue _fun0020 }
case 64:
            var7 = _closure1_slot37;
            var2 = var3.value;
            var2 = var7.bind(var1)(var6, var2);
            var7 = var4.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0020_ip = 64; continue _fun0020 }
case 58:
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var4 = global;
    var11 = var4.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var9);
    var1 = 0;
    var9 = var7[var1];
    var1 = undefined;
    var9 = var8.bind(var1)(var9);
    var _closure1_slot2 = var9;
    var9 = 1;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 2;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 3;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 4;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 5;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 6;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 7;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var9 = 8;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var10 = var9.StatusTypes;
    var _closure1_slot10 = var10;
    var10 = var9.ActivityTypes;
    var _closure1_slot11 = var10;
    var10 = var9.ClientTypes;
    var _closure1_slot12 = var10;
    var10 = var9.ME;
    var _closure1_slot13 = var10;
    var9 = var9.UserFlags;
    var _closure1_slot14 = var9;
    var10 = var4.Object;
    var9 = var10.freeze;
    var4 = new Array(0);
    var4 = var9.bind(var10)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var _closure1_slot16 = var4;
    var4 = {};
    var _closure1_slot17 = var4;
    var4 = {};
    var _closure1_slot18 = var4;
    var4 = {};
    var _closure1_slot19 = var4;
    var4 = {};
    var _closure1_slot20 = var4;
    var4 = {};
    var _closure1_slot21 = var4;
    var4 = {};
    var _closure1_slot22 = var4;
    var4 = function typeScore(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var2 = var1.type;
            var3 = _closure1_slot11;
            var3 = var3.CUSTOM_STATUS;
            if(!(var3 !== var2)) { _fun0021_ip = 13; continue _fun0021 }
case 112:
            var3 = _closure1_slot11;
            var3 = var3.COMPETING;
            if(!(var3 !== var2)) { _fun0021_ip = 42; continue _fun0021 }
case 113:
            var3 = _closure1_slot11;
            var3 = var3.STREAMING;
            if(!(var3 !== var2)) { _fun0021_ip = 57; continue _fun0021 }
case 114:
            var1 = _closure1_slot11;
            var1 = var1.PLAYING;
            if(!(var1 !== var2)) { _fun0021_ip = 115; continue _fun0021 }
case 34:
            var1 = 0;
            return var1;
case 115:
            var1 = 1;
            return var1;
case 57:
            var1 = 2;
            return var1;
case 42:
            var1 = 3;
            return var1;
case 13:
            var1 = 4;
            return var1;
        }
    };
    var _closure1_slot23 = var4;
    var4 = function richnessScore(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 9;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = 0;
            if(!var2) { _fun0022_ip = 110; continue _fun0022 }
case 116:
            var1 = 1;
case 110:
            return var1;
        }
    };
    var _closure1_slot24 = var4;
    var4 = 13;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function PresenceStore() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot25;
                var1 = var1.bind(var3)();
                if(var1) { _fun0023_ip = 117; continue _fun0023 }
case 48:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0023_ip = 118; continue _fun0023;
case 117:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 118:
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
        var1 = function value() {
            var5 = this;
            var4 = var5.waitFor;
            var3 = _closure1_slot8;
            var2 = _closure1_slot7;
            var1 = _closure1_slot9;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(16);
        var1[0] = var5;
        var5 = {};
        var7 = 'setCurrentUserOnConnectionOpen';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = _closure1_slot17;
            var3 = _closure1_slot8;
            var2 = var3.getId;
            var3 = var2.bind(var3)();
            var2 = arg1;
            var4[var3] = var2;
            var4 = _closure1_slot31;
            var3 = _closure1_slot8;
            var2 = var3.getId;
            var3 = var2.bind(var3)();
            var5 = new Array(0);
            var8 = arg2;
            var7 = 0;
            var9 = var5;
            var2 = arraySpread(var9, var8, var7);
            var2 = var5.sort;
            var1 = _closure1_slot29;
            var2 = var2.bind(var5)(var1);
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getStatus';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var4 = arg1;
                var7 = arguments[1];
                var1 = arguments[2];
                var6 = undefined;
                if(!(var7 === var6)) { _fun0024_ip = 46; continue _fun0024 }
case 73:
                var7 = null;
case 46:
                if(!(var1 === var6)) { _fun0024_ip = 119; continue _fun0024 }
case 120:
                var2 = _closure1_slot10;
                var1 = var2.OFFLINE;
case 119:
                var5 = _closure1_slot9;
                var3 = var5.getUser;
                var10 = var3.bind(var5)(var4);
                var3 = null;
                var5 = var3 != var10;
                if(!var5) { _fun0024_ip = 111; continue _fun0024 }
case 11:
                var9 = var10.hasFlag;
                var8 = _closure1_slot14;
                var8 = var8.BOT_HTTP_INTERACTIONS;
                var5 = var9.bind(var10)(var8);
case 111:
                if(!var5) { _fun0024_ip = 121; continue _fun0024 }
case 122:
                var5 = _closure1_slot10;
                var1 = var5.UNKNOWN;
case 121:
                if(!(var3 != var7)) { _fun0024_ip = 123; continue _fun0024 }
case 44:
                var5 = _closure1_slot28;
                var5 = var5.bind(var6)(var4, var7);
                var7 = var3 == var5;
                var6 = undefined;
                if(var7) { _fun0024_ip = 124; continue _fun0024 }
case 125:
                var6 = var5.status;
case 124:
                var5 = var1;
                if(!(var3 != var6)) { _fun0024_ip = 126; continue _fun0024 }
case 127:
                var5 = var6;
case 126:
                return var5;
case 123:
                var2 = _closure1_slot17;
                var2 = var2[var4];
                if(!(var3 != var2)) { _fun0024_ip = 128; continue _fun0024 }
case 129:
                var1 = var2;
case 128:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getActivities';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var4 = arg1;
                var5 = arguments[1];
                var6 = undefined;
                if(!(var5 === var6)) { _fun0025_ip = 36; continue _fun0025 }
case 130:
                var5 = null;
case 36:
                var3 = null;
                if(!(var3 != var5)) { _fun0025_ip = 3; continue _fun0025 }
case 33:
                var1 = _closure1_slot28;
                var1 = var1.bind(var6)(var4, var5);
                if(!(var3 != var1)) { _fun0025_ip = 131; continue _fun0025 }
case 132:
                var5 = var1.activities;
                if(!(var3 != var5)) { _fun0025_ip = 131; continue _fun0025 }
case 133:
                var5 = _closure1_slot30;
                var1 = var1.activities;
                var1 = var5.bind(var6)(var1);
                _fun0025_ip = 134; continue _fun0025;
case 131:
                var1 = _closure1_slot15;
case 134:
                return var1;
case 3:
                var1 = _closure1_slot19;
                var1 = var1[var4];
                if(!(var3 == var1)) { _fun0025_ip = 135; continue _fun0025 }
case 122:
                var1 = _closure1_slot15;
case 135:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getUnfilteredActivities';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var4 = arg1;
                var6 = arguments[1];
                var5 = undefined;
                if(!(var6 === var5)) { _fun0026_ip = 36; continue _fun0026 }
case 130:
                var6 = null;
case 36:
                var3 = null;
                if(!(var3 != var6)) { _fun0026_ip = 11; continue _fun0026 }
case 33:
                var1 = _closure1_slot28;
                var1 = var1.bind(var5)(var4, var6);
                if(!(var3 != var1)) { _fun0026_ip = 8; continue _fun0026 }
case 132:
                var5 = var1.activities;
                if(!(var3 != var5)) { _fun0026_ip = 8; continue _fun0026 }
case 133:
                var1 = var1.activities;
                _fun0026_ip = 136; continue _fun0026;
case 8:
                var1 = _closure1_slot15;
case 136:
                return var1;
case 11:
                var1 = _closure1_slot18;
                var1 = var1[var4];
                if(!(var3 == var1)) { _fun0026_ip = 137; continue _fun0026 }
case 57:
                var1 = _closure1_slot15;
case 137:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getHiddenActivities';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var5 = arg1;
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0027_ip = 36; continue _fun0027 }
case 130:
                var6 = null;
case 36:
                var4 = null;
                if(!(var4 != var6)) { _fun0027_ip = 39; continue _fun0027 }
case 33:
                var3 = _closure1_slot28;
                var3 = var3.bind(var1)(var5, var6);
                var6 = var4 == var3;
                var1 = undefined;
                if(var6) { _fun0027_ip = 138; continue _fun0027 }
case 139:
                var1 = var3.hiddenActivities;
case 138:
                if(!(var4 == var1)) { _fun0027_ip = 32; continue _fun0027 }
case 140:
                var1 = _closure1_slot15;
case 32:
                _fun0027_ip = 137; continue _fun0027;
case 39:
                var2 = _closure1_slot20;
                var2 = var2[var5];
                if(!(var4 == var2)) { _fun0027_ip = 141; continue _fun0027 }
case 142:
                var2 = _closure1_slot15;
case 141:
                var1 = var2;
case 137:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getPrimaryActivity';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var4 = arguments[1];
                var3 = this;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0028_ip = 36; continue _fun0028 }
case 130:
                var4 = null;
case 36:
                var2 = var3.getActivities;
                var1 = arg1;
                var3 = var2.bind(var3)(var1, var4);
                var2 = var3.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot11;
                    var1 = var1.HANG_STATUS;
                    var1 = var2 !== var1;
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                var1 = 0;
                var1 = var2[var1];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getAllApplicationActivities';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var8 = arg1;
                var1 = new Array(0);
                var3 = _closure1_slot26;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 12;
                var2 = var5[var2];
                var6 = undefined;
                var5 = var4.bind(var6)(var2);
                var4 = var5.keys;
                var2 = _closure1_slot19;
                var2 = var4.bind(var5)(var2);
                var5 = var3.bind(var6)(var2);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var4 = var3;
                var3 = undefined;
                if(var2) { _fun0029_ip = 82; continue _fun0029 }
case 5:
                var11 = var4.value;
                var9 = _closure1_slot26;
                var2 = _closure1_slot19;
                var2 = var2[var11];
                var10 = var9.bind(var6)(var2);
                var9 = var10.bind(var6)();
                var2 = var9.done;
                if(var2) { _fun0029_ip = 96; continue _fun0029 }
case 87:
                var12 = var9.value;
                var2 = var12.application_id;
                if(!(var2 === var8)) { _fun0029_ip = 104; continue _fun0029 }
case 143:
                var13 = var1.push;
                var2 = {};
                var2['userId'] = var11;
                var2['activity'] = var12;
                var2 = var13.bind(var1)(var2);
case 104:
                var13 = var10.bind(var6)();
                var2 = var13.done;
                var9 = var13;
                var3 = var12;
                if(!var2) { _fun0029_ip = 87; continue _fun0029 }
case 96:
                var9 = var5.bind(var6)();
                var2 = var9.done;
                var4 = var9;
                if(!var2) { _fun0029_ip = 5; continue _fun0029 }
case 82:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getApplicationActivity';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var6 = arguments[2];
                var5 = this;
                var2 = arg2;
                var _closure3_slot0 = var2;
                var2 = undefined;
                if(!(var6 === var2)) { _fun0030_ip = 35; continue _fun0030 }
case 120:
                var6 = null;
case 35:
                var4 = var5.findActivity;
                var10 = arg1;
                var9 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.application_id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var7 = true;
                var11 = var5;
                var8 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'findActivity';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var7 = arg1;
                var6 = arguments[2];
                var2 = arguments[3];
                var5 = this;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0031_ip = 33; continue _fun0031 }
case 70:
                var6 = null;
case 33:
                if(!(var2 === var1)) { _fun0031_ip = 77; continue _fun0031 }
case 144:
                var2 = false;
case 77:
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0031_ip = 116; continue _fun0031 }
case 55:
                var1 = var2;
case 116:
                var2 = var5.getActivities;
                var4 = var2.bind(var5)(var7, var6);
                var3 = var4;
                if(!var1) { _fun0031_ip = 43; continue _fun0031 }
case 32:
                var2 = var4.concat;
                var1 = var5.getHiddenActivities;
                var1 = var1.bind(var5)(var7, var6);
                var3 = var2.bind(var4)(var1);
case 43:
                var2 = var3.find;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getActivityMetadata';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot22;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getUserIds';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.keys;
            var1 = _closure1_slot18;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'isMobileOnline';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var3 = _closure1_slot21;
                var1 = arg1;
                var4 = var3[var1];
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0032_ip = 48; continue _fun0032 }
case 35:
                var3 = _closure1_slot12;
                var3 = var3.MOBILE;
                var5 = var4[var3];
                var3 = _closure1_slot10;
                var3 = var3.ONLINE;
                var1 = var5 === var3;
case 48:
                if(!var1) { _fun0032_ip = 111; continue _fun0032 }
case 145:
                var3 = _closure1_slot12;
                var3 = var3.DESKTOP;
                var5 = var4[var3];
                var3 = _closure1_slot10;
                var3 = var3.ONLINE;
                var1 = var5 !== var3;
case 111:
                if(!var1) { _fun0032_ip = 146; continue _fun0032 }
case 122:
                var3 = _closure1_slot12;
                var3 = var3.VR;
                var3 = var4[var3];
                var2 = _closure1_slot10;
                var2 = var2.ONLINE;
                var1 = var3 !== var2;
case 146:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'isVROnline';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var3 = _closure1_slot21;
                var1 = arg1;
                var4 = var3[var1];
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0033_ip = 48; continue _fun0033 }
case 35:
                var3 = _closure1_slot12;
                var3 = var3.VR;
                var3 = var4[var3];
                var2 = _closure1_slot10;
                var2 = var2.ONLINE;
                var1 = var3 === var2;
case 48:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getClientStatus';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot21;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var3 = _closure1_slot16;
            var1['presencesForGuilds'] = var3;
            var3 = _closure1_slot17;
            var1['statuses'] = var3;
            var3 = _closure1_slot18;
            var1['activities'] = var3;
            var3 = _closure1_slot19;
            var1['filteredActivities'] = var3;
            var3 = _closure1_slot20;
            var1['hiddenActivities'] = var3;
            var3 = _closure1_slot22;
            var1['activityMetadata'] = var3;
            var2 = _closure1_slot21;
            var1['clientStatuses'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[15] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'PresenceStore';
    var9['displayName'] = var4;
    var4 = 14;
    var4 = var7[var4];
    var14 = var8.bind(var1)(var4);
    var4 = {};
    var10 = function handleConnectionOpen() {
        var1 = true;
        return var1;
    };
    var4['CONNECTION_OPEN'] = var10;
    var10 = function handleConnectionOpenSupplemental(arg1) {
        var1 = arg1;
        var8 = var1.guilds;
        var6 = var1.presences;
        var4 = _closure1_slot8;
        var3 = var4.getId;
        var4 = var3.bind(var4)();
        var3 = {};
        _closure1_slot16 = var3;
        var3 = {};
        _closure1_slot22 = var3;
        var3 = {};
        var5 = _closure1_slot17;
        var5 = var5[var4];
        var3[3] = var5;
        _closure1_slot17 = var3;
        var3 = {};
        var5 = _closure1_slot18;
        var5 = var5[var4];
        var3[3] = var5;
        _closure1_slot18 = var3;
        var3 = {};
        var5 = _closure1_slot19;
        var5 = var5[var4];
        var3[3] = var5;
        _closure1_slot19 = var3;
        var3 = {};
        var5 = _closure1_slot20;
        var5 = var5[var4];
        var3[3] = var5;
        _closure1_slot20 = var3;
        var3 = {};
        var5 = {};
        var3[3] = var5;
        _closure1_slot21 = var3;
        var3 = global;
        var3 = var3.Set;
        var5 = var3.prototype;
        var5 = Object.create(var5, {constructor: {value: var3}});
        var10 = var5;
        var3 = new var10[var3](var9);
        var3 = var3 instanceof Object ? var3 : var5;
        var _closure2_slot0 = var3;
        var7 = var8.forEach;
        var5 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = var2.presences;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.user;
                var8 = var1.status;
                var7 = var1.clientStatus;
                var6 = var1.activities;
                var5 = var1.hiddenActivities;
                var1 = var1.processedAtTimestamp;
                var4 = _closure1_slot36;
                var3 = {};
                var9 = _closure3_slot0;
                var9 = var9.id;
                var3['guildId'] = var9;
                var9 = var2.id;
                var3['userId'] = var9;
                var3['status'] = var8;
                var3['clientStatus'] = var7;
                var3['activities'] = var6;
                var3['hiddenActivities'] = var5;
                var3['processedAtTimestamp'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure2_slot0;
                var3 = var4.add;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5 = var7.bind(var8)(var5);
        var5 = var6.forEach;
        var2 = function(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var2 = arg1;
                var1 = var2.user;
                var8 = var2.status;
                var7 = var2.clientStatus;
                var6 = var2.activities;
                var5 = var2.hiddenActivities;
                var2 = var2.processedAtTimestamp;
                var3 = null;
                if(!(var3 != var1)) { _fun0034_ip = 147; continue _fun0034 }
case 66:
                var4 = _closure1_slot36;
                var3 = {};
                var9 = _closure1_slot13;
                var3['guildId'] = var9;
                var9 = var1.id;
                var3['userId'] = var9;
                var3['status'] = var8;
                var3['clientStatus'] = var7;
                var3['activities'] = var6;
                var3['hiddenActivities'] = var5;
                var3['processedAtTimestamp'] = var2;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var3 = _closure2_slot0;
                var2 = var3.add;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
case 147:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var5.bind(var6)(var2);
        var2 = var3.delete;
        var2 = var2.bind(var3)(var4);
        var2 = var3.forEach;
        var1 = _closure1_slot34;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4['CONNECTION_OPEN_SUPPLEMENTAL'] = var10;
    var10 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var1 = var1.presences;
        var3 = var1.presencesForGuilds;
        _closure1_slot16 = var3;
        var3 = var1.statuses;
        _closure1_slot17 = var3;
        var3 = var1.activities;
        _closure1_slot18 = var3;
        var3 = var1.hiddenActivities;
        _closure1_slot20 = var3;
        var1 = var1.activityMetadata;
        _closure1_slot22 = var1;
        var1 = undefined;
        return var1;
    };
    var4['OVERLAY_INITIALIZE'] = var10;
    var10 = function handleGuildCreate(arg1) {
        var2 = arg1;
        var2 = var2.guild;
        var _closure2_slot0 = var2;
        var3 = var2.presences;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var8 = var1.user;
            var7 = var1.status;
            var6 = var1.clientStatus;
            var5 = var1.activities;
            var4 = var1.hiddenActivities;
            var1 = var1.processedAtTimestamp;
            var3 = _closure1_slot35;
            var2 = {};
            var9 = _closure2_slot0;
            var9 = var9.id;
            var2['guildId'] = var9;
            var8 = var8.id;
            var2['userId'] = var8;
            var2['status'] = var7;
            var2['clientStatus'] = var6;
            var2['activities'] = var5;
            var2['hiddenActivities'] = var4;
            var2['processedAtTimestamp'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4['GUILD_CREATE'] = var10;
    var10 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = _closure1_slot38;
        var2 = var1.id;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var4['GUILD_DELETE'] = var10;
    var10 = function handleGuildMemberRemove(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var1 = var1.user;
        var3 = _closure1_slot37;
        var2 = var1.id;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var4['GUILD_MEMBER_REMOVE'] = var10;
    var10 = function handlePresenceUpdates(arg1) {
        var2 = arg1;
        var4 = var2.updates;
        var3 = var4.map;
        var2 = function(arg1) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var1 = arg1;
                var9 = var1.guildId;
                var8 = var1.user;
                var7 = var1.status;
                var6 = var1.clientStatus;
                var5 = var1.activities;
                var4 = var1.hiddenActivities;
                var1 = var1.processedAtTimestamp;
                var3 = _closure1_slot35;
                var2 = {};
                var11 = null;
                if(!(var11 == var9)) { _fun0035_ip = 11; continue _fun0035 }
case 148:
                var9 = _closure1_slot13;
case 11:
                var2['guildId'] = var9;
                var8 = var8.id;
                var2['userId'] = var8;
                var2['status'] = var7;
                var2['clientStatus'] = var6;
                var2['activities'] = var5;
                var2['hiddenActivities'] = var4;
                var2['processedAtTimestamp'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['PRESENCE_UPDATES'] = var10;
    var10 = function handlePresenceReplace(arg1) {
        var1 = arg1;
        var4 = var1.presences;
        var3 = _closure1_slot38;
        var2 = _closure1_slot13;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var1 = arg1;
                var8 = var1.user;
                var7 = var1.status;
                var6 = var1.clientStatus;
                var5 = var1.activities;
                var4 = var1.hiddenActivities;
                var1 = var1.processedAtTimestamp;
                var2 = null;
                if(!(var2 != var8)) { _fun0036_ip = 149; continue _fun0036 }
case 66:
                var3 = _closure1_slot35;
                var2 = {};
                var9 = _closure1_slot13;
                var2['guildId'] = var9;
                var8 = var8.id;
                var2['userId'] = var8;
                var2['status'] = var7;
                var2['clientStatus'] = var6;
                var2['activities'] = var5;
                var2['hiddenActivities'] = var4;
                var2['processedAtTimestamp'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 149:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var4['PRESENCES_REPLACE'] = var10;
    var10 = function handleActivityMetadataUpdate(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var2 = var1.metadata;
        var1 = _closure1_slot22;
        var1[var3] = var2;
        var1 = false;
        return var1;
    };
    var4['ACTIVITY_METADATA_UPDATE'] = var10;
    var10 = function handleThreadMemberListUpdate(arg1) {
        var2 = arg1;
        var3 = var2.guildId;
        var _closure2_slot0 = var3;
        var3 = var2.members;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var1 = arg1;
                var3 = var1.presence;
                var2 = null;
                if(!(var2 != var3)) { _fun0037_ip = 123; continue _fun0037 }
case 73:
                var3 = _closure1_slot35;
                var2 = {};
                var4 = _closure2_slot0;
                var2['guildId'] = var4;
                var4 = var1.user_id;
                var2['userId'] = var4;
                var4 = var1.presence;
                var4 = var4.status;
                var2['status'] = var4;
                var4 = var1.presence;
                var4 = var4.clientStatus;
                var2['clientStatus'] = var4;
                var4 = var1.presence;
                var4 = var4.activities;
                var2['activities'] = var4;
                var4 = var1.presence;
                var4 = var4.hiddenActivities;
                var2['hiddenActivities'] = var4;
                var1 = var1.presence;
                var1 = var1.processedAtTimestamp;
                var2['processedAtTimestamp'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 123:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4['THREAD_MEMBER_LIST_UPDATE'] = var10;
    var10 = function handleThreadMembersUpdate(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var3 = var2.addedMembers;
            var2 = null;
            if(!(var2 != var3)) { _fun0038_ip = 110; continue _fun0038 }
case 77:
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.presence;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0039_ip = 150; continue _fun0039 }
case 73:
                    var3 = _closure1_slot35;
                    var2 = {};
                    var4 = _closure2_slot0;
                    var2['guildId'] = var4;
                    var4 = var1.userId;
                    var2['userId'] = var4;
                    var4 = var1.presence;
                    var4 = var4.status;
                    var2['status'] = var4;
                    var4 = var1.presence;
                    var4 = var4.clientStatus;
                    var2['clientStatus'] = var4;
                    var4 = var1.presence;
                    var4 = var4.activities;
                    var2['activities'] = var4;
                    var4 = var1.presence;
                    var4 = var4.hiddenActivities;
                    var2['hiddenActivities'] = var4;
                    var1 = var1.presence;
                    var1 = var1.processedAtTimestamp;
                    var2['processedAtTimestamp'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 150:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
case 110:
            var1 = undefined;
            return var1;
        }
    };
    var4['THREAD_MEMBERS_UPDATE'] = var10;
    var5 = function handleCurrentUserPresenceUpdate(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot8;
            var1 = var3.getId;
            var3 = var1.bind(var3)();
            var1 = _closure1_slot17;
            var5 = var1[var3];
            var1 = var4.status;
            if(!(var5 === var1)) { _fun0040_ip = 142; continue _fun0040 }
case 132:
            var1 = _closure1_slot18;
            var5 = var1[var3];
            var1 = var4.activities;
            if(!(var5 === var1)) { _fun0040_ip = 142; continue _fun0040 }
case 8:
            var1 = _closure1_slot20;
            var5 = var1[var3];
            var1 = var4.hiddenActivities;
            if(!(var5 !== var1)) { _fun0040_ip = 151; continue _fun0040 }
case 142:
            var5 = _closure1_slot17;
            var1 = var4.status;
            var5[var3] = var1;
            var6 = _closure1_slot31;
            var10 = var4.activities;
            var5 = new Array(0);
            var11 = var5;
            var9 = 0;
            var1 = arraySpread(var11, var10, var9);
            var1 = var5.sort;
            var7 = _closure1_slot29;
            var5 = var1.bind(var5)(var7);
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = _closure1_slot20;
            var10 = var4.hiddenActivities;
            var6 = new Array(0);
            var11 = var6;
            var4 = arraySpread(var11, var10, var9);
            var4 = var6.sort;
            var4 = var4.bind(var6)(var7);
            var5[var3] = var4;
            var2 = _closure1_slot22;
            var2 = delete var2[var3];
            return var1;
case 151:
            var1 = false;
            return var1;
        }
    };
    var4['SELF_PRESENCE_STORE_UPDATE'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var9](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/PresenceStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['sortActivity'] = var2;
    return var1;
})();