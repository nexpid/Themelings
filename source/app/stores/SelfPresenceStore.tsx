// app/stores/SelfPresenceStore.tsx
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
            _closure1_slot32 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot32 = var1;
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
            var9 = _closure1_slot34;
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
            var7 = _closure1_slot34;
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
    var _closure1_slot33 = var1;
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
    var _closure1_slot34 = var1;
    var1 = function filterPlayingActivities(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var2 = var1.length;
            var7 = 0;
            if(!(var7 !== var2)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var3 = new Array(0);
            var4 = new Array(0);
            var5 = _closure1_slot33;
            var9 = undefined;
            var8 = var5.bind(var9)(var1);
            var6 = var8.bind(var9)();
            var5 = var6.done;
            if(var5) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var10 = var6.value;
            var11 = var10.type;
            var5 = _closure1_slot19;
            var5 = var5.PLAYING;
            if(!(var11 !== var5)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var5 = var3.push;
            var5 = var5.bind(var3)(var10);
            _fun0005_ip = 45; continue _fun0005;
case 43:
            var5 = var4.push;
            var5 = var5.bind(var4)(var10);
case 45:
            var10 = var8.bind(var9)();
            var5 = var10.done;
            var6 = var10;
            if(!var5) { _fun0005_ip = 42; continue _fun0005 }
case 41:
            var5 = var4.length;
            if(!(var7 !== var5)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var6 = var4.length;
            var5 = 1;
            if(!(var5 !== var6)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var8 = new Array(0);
            var14 = var8;
            var13 = var4;
            var12 = 0;
            var4 = arraySpread(var14, var13, var12);
            var6 = var8.sort;
            var4 = _closure1_slot15;
            var4 = var6.bind(var8)(var4);
            var6 = var4[var7];
            var4 = new Array(1);
            var14 = var4;
            var13 = var3;
            var3 = arraySpread(var14, var13, var12);
            var4[var3] = var6;
            var3 = var3 + var5;
            var3 = var4.sort;
            var2 = _closure1_slot15;
            var2 = var3.bind(var4)(var2);
            return var2;
case 48:
            return var1;
case 46:
            return var1;
case 39:
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function shouldShowApplicationActivity(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 14;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.shouldShareApplicationActivity;
        var2 = _closure1_slot12;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot36 = var1;
    var1 = function shouldShowActivity(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var1 = var5[var1];
            var5 = undefined;
            var8 = var4.bind(var5)(var1);
            var7 = var8.hasFlag;
            var1 = var3.flags;
            var4 = null;
            var9 = var4 != var1;
            var6 = 0;
            if(!var9) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var6 = var1;
case 50:
            var1 = _closure1_slot18;
            var1 = var1.CONTEXTLESS;
            var1 = var7.bind(var8)(var6, var1);
            if(var1) { _fun0006_ip = 52; continue _fun0006 }
case 44:
            var6 = var3.type;
            var1 = _closure1_slot19;
            var1 = var1.LISTENING;
            if(!(var1 !== var6)) { _fun0006_ip = 16; continue _fun0006 }
case 45:
            var1 = _closure1_slot19;
            var1 = var1.PLAYING;
            if(!(var1 !== var6)) { _fun0006_ip = 53; continue _fun0006 }
case 54:
            var1 = _closure1_slot19;
            var1 = var1.STREAMING;
            if(!(var1 !== var6)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var1 = _closure1_slot19;
            var1 = var1.WATCHING;
case 55:
            var1 = var3.application_id;
            var1 = var4 == var1;
            if(var1) { _fun0006_ip = 18; continue _fun0006 }
case 57:
            var7 = _closure1_slot36;
            var6 = var3.application_id;
            var1 = var7.bind(var5)(var6);
case 18:
            return var1;
case 53:
            var1 = var3.application_id;
            if(!(var4 == var1)) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var7 = var3.name;
            var6 = _closure1_slot10;
            var1 = var6.getGameByName;
            var6 = var1.bind(var6)(var7);
            if(!(var4 == var6)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 15;
            var1 = var8[var1];
            var1 = var7.bind(var5)(var1);
            var7 = var1.ShowCurrentGame;
            var1 = var7.getSetting;
            var1 = var1.bind(var7)();
            _fun0006_ip = 62; continue _fun0006;
case 60:
            var7 = _closure1_slot36;
            var6 = var6.id;
            var1 = var7.bind(var5)(var6);
case 62:
            _fun0006_ip = 63; continue _fun0006;
case 58:
            var7 = _closure1_slot36;
            var6 = var3.application_id;
            var1 = var7.bind(var5)(var6);
case 63:
            return var1;
case 16:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 17;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.bind(var5)(var3);
            if(var1) { _fun0006_ip = 64; continue _fun0006 }
case 65:
            var1 = var3.application_id;
            var1 = var4 != var1;
            if(!var1) { _fun0006_ip = 31; continue _fun0006 }
case 66:
            var4 = _closure1_slot36;
            var3 = var3.application_id;
            var1 = var4.bind(var5)(var3);
case 31:
            _fun0006_ip = 67; continue _fun0006;
case 64:
            var3 = _closure1_slot8;
            var2 = var3.shouldShowActivity;
            var1 = var2.bind(var3)();
case 67:
            return var1;
case 52:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var9 = function handleUpdate() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = _closure1_slot11;
            var1 = var4.getIdleSince;
            var4 = var1.bind(var4)();
            var1 = null;
            var5 = var1 != var4;
            var6 = 0;
            var1 = 0;
            if(!var5) { _fun0007_ip = 68; continue _fun0007 }
case 69:
            var1 = var4;
case 68:
            _closure1_slot23 = var1;
            var4 = _closure1_slot11;
            var1 = var4.isAFK;
            var1 = var1.bind(var4)();
            _closure1_slot26 = var1;
            var1 = _closure1_slot27;
            if(var1) { _fun0007_ip = 70; continue _fun0007 }
case 71:
            var1 = _closure1_slot20;
            if(var1) { _fun0007_ip = 72; continue _fun0007 }
case 73:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 15;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var4 = var1.StatusSetting;
            var1 = var4.getSetting;
            var1 = var1.bind(var4)();
            var4 = _closure1_slot17;
            var4 = var4.UNKNOWN;
            if(!(var1 === var4)) { _fun0007_ip = 49; continue _fun0007 }
case 74:
            var4 = _closure1_slot17;
            var1 = var4.ONLINE;
case 49:
            _closure1_slot21 = var1;
            _fun0007_ip = 18; continue _fun0007;
case 72:
            var1 = _closure1_slot17;
            var1 = var1.INVISIBLE;
            _closure1_slot21 = var1;
            _fun0007_ip = 18; continue _fun0007;
case 70:
            var1 = _closure1_slot22;
            _closure1_slot21 = var1;
case 18:
            var4 = _closure1_slot21;
            var1 = _closure1_slot17;
            var1 = var1.ONLINE;
            var1 = var4 === var1;
            if(!var1) { _fun0007_ip = 75; continue _fun0007 }
case 76:
            var4 = _closure1_slot23;
            var1 = var4 > var6;
case 75:
            if(!var1) { _fun0007_ip = 77; continue _fun0007 }
case 24:
            var1 = _closure1_slot17;
            var1 = var1.IDLE;
            _closure1_slot21 = var1;
case 77:
            var1 = _closure1_slot27;
            if(var1) { _fun0007_ip = 78; continue _fun0007 }
case 79:
            var4 = _closure1_slot21;
            var1 = _closure1_slot17;
            var1 = var1.INVISIBLE;
            if(!(var4 !== var1)) { _fun0007_ip = 78; continue _fun0007 }
case 25:
            var4 = _closure1_slot13;
            var1 = var4.getActivities;
            var5 = var1.bind(var4)();
            var4 = var5.filter;
            var1 = _closure1_slot37;
            var7 = var4.bind(var5)(var1);
            _fun0007_ip = 63; continue _fun0007;
case 78:
            var7 = new Array(0);
case 63:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 18;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = _closure1_slot24;
            var5 = var5.bind(var1)(var4, var7);
            var4 = false;
            if(var5) { _fun0007_ip = 80; continue _fun0007 }
case 81:
            _closure1_slot24 = var7;
            var5 = _closure1_slot35;
            var5 = var5.bind(var1)(var7);
            _closure1_slot25 = var5;
            var4 = true;
case 80:
            var7 = _closure1_slot16;
            var5 = var7.getRemoteActivities;
            var5 = var5.bind(var7)();
            var7 = _closure1_slot28;
            if(!(var7 !== var5)) { _fun0007_ip = 82; continue _fun0007 }
case 83:
            _closure1_slot28 = var5;
            var4 = true;
case 82:
            var7 = _closure1_slot16;
            var5 = var7.getHiddenActivities;
            var5 = var5.bind(var7)();
            var7 = _closure1_slot29;
            if(!(var7 !== var5)) { _fun0007_ip = 84; continue _fun0007 }
case 85:
            _closure1_slot29 = var5;
case 84:
            if(!var4) { _fun0007_ip = 86; continue _fun0007 }
case 87:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 19;
            var4 = var7[var4];
            var5 = var5.bind(var1)(var4);
            var11 = _closure1_slot24;
            var7 = new Array(0);
            var12 = var7;
            var10 = 0;
            var10 = arraySpread(var12, var11, var10);
            var9 = _closure1_slot28;
            var8 = var9.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var1 = _closure1_slot19;
                var1 = var1.CUSTOM_STATUS;
                var1 = var2 !== var1;
                return var1;
            };
            var11 = var8.bind(var9)(var4);
            var12 = var7;
            var4 = arraySpread(var12, var11, var10);
            var6 = var7.sort;
            var4 = _closure1_slot15;
            var4 = var6.bind(var7)(var4);
            var5 = var5.bind(var1)(var4);
            var4 = var5.uniqBy;
            var2 = function(arg1) {
                var1 = arg1;
                var11 = var1.type;
                var9 = var1.application_id;
                var7 = var1.name;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var12 = '';
                var1 = ':';
                var10 = var1;
                var8 = var1;
                var1 = var12[var3](var11, var10, var9, var8, var7, var6);
                return var1;
            };
            var4 = var4.bind(var5)(var2);
            var2 = var4.value;
            var4 = var2.bind(var4)();
            _closure1_slot30 = var4;
            var2 = _closure1_slot35;
            var2 = var2.bind(var1)(var4);
            _closure1_slot31 = var2;
case 86:
            return var1;
        }
    };
    var _closure1_slot38 = var9;
    var10 = function handleConnectionOpen() {
        var1 = false;
        _closure1_slot27 = var1;
        var1 = _closure1_slot17;
        var1 = var1.UNKNOWN;
        _closure1_slot22 = var1;
        var3 = _closure1_slot38;
        var1 = undefined;
        var3 = var3.bind(var1)();
        var5 = _closure1_slot14;
        var4 = var5.setCurrentUserOnConnectionOpen;
        var3 = _closure1_slot21;
        var2 = _closure1_slot30;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot39 = var10;
    var2 = global;
    var13 = var2.Object;
    var12 = var13.defineProperty;
    var11 = {};
    var8 = true;
    var11['value'] = var8;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var11);
    var12 = 0;
    var11 = var6[var12];
    var1 = undefined;
    var11 = var7.bind(var1)(var11);
    var _closure1_slot3 = var11;
    var11 = 1;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot4 = var11;
    var11 = 2;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot5 = var11;
    var11 = 3;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot6 = var11;
    var11 = 4;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot7 = var11;
    var11 = 5;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot8 = var11;
    var11 = 6;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot9 = var11;
    var11 = 7;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot10 = var11;
    var11 = 8;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot11 = var11;
    var11 = 9;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot12 = var11;
    var11 = 10;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot13 = var11;
    var11 = 11;
    var13 = var6[var11];
    var13 = var7.bind(var1)(var13);
    var _closure1_slot14 = var13;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.sortActivity;
    var _closure1_slot15 = var11;
    var11 = 12;
    var11 = var6[var11];
    var11 = var7.bind(var1)(var11);
    var _closure1_slot16 = var11;
    var11 = 13;
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var13 = var11.StatusTypes;
    var _closure1_slot17 = var13;
    var14 = var11.ActivityFlags;
    var _closure1_slot18 = var14;
    var11 = var11.ActivityTypes;
    var _closure1_slot19 = var11;
    var11 = false;
    var _closure1_slot20 = var11;
    var14 = var13.ONLINE;
    var _closure1_slot21 = var14;
    var13 = var13.UNKNOWN;
    var _closure1_slot22 = var13;
    var _closure1_slot23 = var12;
    var12 = new Array(0);
    var _closure1_slot24 = var12;
    var12 = new Array(0);
    var _closure1_slot25 = var12;
    var _closure1_slot26 = var11;
    var _closure1_slot27 = var8;
    var12 = var2.Object;
    var11 = var12.freeze;
    var8 = new Array(0);
    var8 = var11.bind(var12)(var8);
    var _closure1_slot28 = var8;
    var11 = var2.Object;
    var8 = var11.freeze;
    var2 = new Array(0);
    var2 = var8.bind(var11)(var2);
    var _closure1_slot29 = var2;
    var2 = new Array(0);
    var _closure1_slot30 = var2;
    var2 = new Array(0);
    var _closure1_slot31 = var2;
    var2 = 20;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function SelfPresenceStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                var1 = _closure1_slot32;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 88; continue _fun0008 }
case 42:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 89; continue _fun0008;
case 88:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 89:
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
        var1 = function value() {
            var4 = this;
            var9 = var4.waitFor;
            var15 = _closure1_slot11;
            var14 = _closure1_slot9;
            var13 = _closure1_slot13;
            var12 = _closure1_slot16;
            var11 = _closure1_slot12;
            var10 = _closure1_slot10;
            var16 = var4;
            var2 = var16[var9](var15, var14, var13, var12, var11, var10, var9);
            var3 = var4.syncWith;
            var5 = _closure1_slot13;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot38;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getLocalPresence';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var3 = _closure1_slot21;
            var1['status'] = var3;
            var3 = _closure1_slot23;
            var1['since'] = var3;
            var3 = _closure1_slot25;
            var1['activities'] = var3;
            var2 = _closure1_slot26;
            var1['afk'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getStatus';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getActivities';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arguments[0];
                var2 = undefined;
                if(!(var1 === var2)) { _fun0009_ip = 90; continue _fun0009 }
case 91:
                var1 = true;
case 90:
                if(var1) { _fun0009_ip = 35; continue _fun0009 }
case 40:
                var1 = _closure1_slot25;
                _fun0009_ip = 92; continue _fun0009;
case 35:
                var1 = _closure1_slot31;
case 92:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getUnfilteredActivities';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = arguments[0];
                var2 = undefined;
                if(!(var1 === var2)) { _fun0010_ip = 90; continue _fun0010 }
case 91:
                var1 = true;
case 90:
                if(var1) { _fun0010_ip = 35; continue _fun0010 }
case 40:
                var1 = _closure1_slot24;
                _fun0010_ip = 92; continue _fun0010;
case 35:
                var1 = _closure1_slot30;
case 92:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getHiddenActivities';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot29;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getPrimaryActivity';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = arguments[0];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0011_ip = 36; continue _fun0011 }
case 93:
                var3 = true;
case 36:
                var1 = var2.getActivities;
                var2 = var1.bind(var2)(var3);
                var1 = 0;
                var1 = var2[var1];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getApplicationActivity';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = arguments[1];
                var3 = this;
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = undefined;
                if(!(var4 === var2)) { _fun0012_ip = 35; continue _fun0012 }
case 94:
                var4 = true;
case 35:
                var2 = var3.findActivity;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.application_id;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'findActivity';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = arguments[1];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0013_ip = 36; continue _fun0013 }
case 93:
                var3 = true;
case 36:
                var1 = var2.getActivities;
                var3 = var1.bind(var2)(var3);
                var2 = var3.find;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SelfPresenceStore';
    var8['displayName'] = var2;
    var2 = 21;
    var2 = var6[var2];
    var17 = var7.bind(var1)(var2);
    var2 = {};
    var2['START_SESSION'] = var9;
    var11 = function handleConnectionOpenTracked() {
        var2 = _closure1_slot39;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['CONNECTION_OPEN'] = var11;
    var2['CONNECTION_OPEN_SUPPLEMENTAL'] = var10;
    var2['OVERLAY_INITIALIZE'] = var10;
    var2['CONNECTION_CLOSED'] = var9;
    var2['IDLE'] = var9;
    var2['AFK'] = var9;
    var2['RUNNING_GAMES_CHANGE'] = var9;
    var2['STREAMING_UPDATE'] = var9;
    var2['USER_SETTINGS_PROTO_UPDATE'] = var9;
    var2['LOCAL_ACTIVITY_UPDATE'] = var9;
    var2['SPOTIFY_PLAYER_STATE'] = var9;
    var2['SPOTIFY_PLAYER_PLAY'] = var9;
    var2['USER_CONNECTIONS_UPDATE'] = var9;
    var2['SESSIONS_REPLACE'] = var9;
    var2['RPC_APP_DISCONNECTED'] = var9;
    var2['LIBRARY_FETCH_SUCCESS'] = var9;
    var2['LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS'] = var9;
    var9 = function handleLogout() {
        var2 = true;
        _closure1_slot27 = var2;
        var2 = _closure1_slot21;
        _closure1_slot22 = var2;
        var2 = _closure1_slot38;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['LOGOUT'] = var9;
    var9 = function handleForceInvisible(arg1) {
        var1 = arg1;
        var2 = var1.invisible;
        _closure1_slot20 = var2;
        var2 = _closure1_slot38;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['FORCE_INVISIBLE'] = var9;
    var4 = function handleWindowFocus() {
        var2 = false;
        _closure1_slot20 = var2;
        var2 = _closure1_slot38;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['WINDOW_FOCUS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var18 = var4;
    var16 = var2;
    var2 = new var18[var8](var17, var16, var15);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/SelfPresenceStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();