// app/stores/ApplicationStreamingStore.tsx
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
            _closure1_slot35 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot35 = var1;
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
            var9 = _closure1_slot37;
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
            var7 = _closure1_slot37;
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
    var _closure1_slot36 = var1;
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
    var _closure1_slot37 = var1;
    var4 = function reset() {
        var1 = global;
        var2 = var1.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var4 = var3;
        var2 = new var4[var2](var3);
        var3 = var2 instanceof Object ? var2 : var3;
        var _closure1_slot3 = var3;
        var3 = {};
        var _closure1_slot4 = var3;
        var3 = {};
        var _closure1_slot5 = var3;
        var3 = {};
        var _closure1_slot6 = var3;
        var1 = var1.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var4 = var3;
        var1 = new var4[var1](var3);
        var1 = var1 instanceof Object ? var1 : var3;
        var _closure1_slot28 = var1;
        var1 = undefined;
        return var1;
    };
    var1 = function closeActiveStream(arg1) {
        var3 = _closure1_slot3;
        var2 = var3.delete;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot38 = var1;
    var1 = function getAllStreams() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = new Array(0);
            var12 = _closure1_slot4;
            for(var8 in var12)
case 39:
            {
case 38:
                var7 = var8;
                var2 = _closure1_slot4;
                var2 = var2[var7];
                var5 = var2;
                ForInLoopInit(obj_props_register=5, obj_register=4, iter_index_register=3, iter_size_register=2);
                if(var6 === undefined) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                ForInLoopNextIter(next_value_register=1, obj_props_register=5, obj_register=4, iter_index_register=3, iter_size_register=2);
                if(var2 === undefined) { _fun0005_ip = 39; continue _fun0005 }
case 41:
                var16 = var2;
                var15 = var1.push;
                var14 = _closure1_slot4;
                var14 = var14[var7];
                var14 = var14[var16];
                var14 = var15.bind(var1)(var14);
                _fun0005_ip = 40; continue _fun0005;
            }
case 13:
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var10 = function handleStreamUpdate(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var4 = var1.streamKey;
            var6 = var1.region;
            var5 = var1.viewerIds;
            var10 = var1.paused;
            var3 = _closure1_slot28;
            var1 = var3.get;
            var7 = var1.bind(var3)(var4);
            var1 = null;
            var3 = var1 == var7;
            if(var3) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var1 = global;
            var8 = var1.Date;
            var1 = var8.now;
            var1 = var1.bind(var8)();
            var7 = var1 - var7;
            var1 = _closure1_slot32;
            var3 = var7 < var1;
case 42:
            var1 = !var3;
            if(var3) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var7 = _closure1_slot28;
            var3 = var7.delete;
            var1 = var3.bind(var7)(var4);
case 44:
            var1 = !var1;
            var8 = _closure1_slot3;
            var7 = var8.set;
            var3 = {};
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 18;
            var9 = var9[var1];
            var1 = undefined;
            var11 = var11.bind(var1)(var9);
            var9 = var11.decodeStreamKey;
            var12 = var9.bind(var11)(var4);
            var13 = var3;
            var9 = copyDataProperties(var13, var12);
            var9 = _closure1_slot22;
            if(var10) { _fun0006_ip = 46; continue _fun0006 }
case 18:
            var10 = var9.ACTIVE;
            _fun0006_ip = 47; continue _fun0006;
case 46:
            var10 = var9.PAUSED;
case 47:
            var9 = 'state';
            var3[8] = var10;
            var3 = var7.bind(var8)(var4, var3);
            var3 = _closure1_slot5;
            var2 = {};
            var2['streamKey'] = var4;
            var2['region'] = var6;
            var2['viewerIds'] = var5;
            var3[var4] = var2;
            return var1;
        }
    };
    var1 = function canViewChannel(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = _closure1_slot15;
            var2 = var4.getBasicChannel;
            var1 = arg2;
            var6 = var2.bind(var4)(var1);
            var1 = _closure1_slot27;
            var2 = var1.CALL;
            var1 = arg1;
            var1 = var1 === var2;
            if(var1) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var2 = null;
            var2 = var2 != var6;
            if(!var2) { _fun0007_ip = 50; continue _fun0007 }
case 40:
            var5 = _closure1_slot18;
            var4 = var5.canBasicChannel;
            var3 = _closure1_slot26;
            var3 = var3.VIEW_CHANNEL;
            var2 = var4.bind(var5)(var3, var6);
case 50:
            var1 = var2;
case 48:
            return var1;
        }
    };
    var _closure1_slot40 = var1;
    var1 = function isWatchableStream(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var6 = _closure1_slot40;
            var4 = var1.streamType;
            var3 = var1.channelId;
            var5 = undefined;
            var3 = var6.bind(var5)(var4, var3);
            if(var3) { _fun0008_ip = 51; continue _fun0008 }
case 52:
            var4 = _closure1_slot15;
            var3 = var4.getBasicChannel;
            var1 = var1.channelId;
            var8 = var3.bind(var4)(var1);
            var1 = null;
            var1 = var1 != var8;
            if(!var1) { _fun0008_ip = 53; continue _fun0008 }
case 11:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 23;
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var6 = var7.canWatchStream;
            var12 = _closure1_slot21;
            var11 = _closure1_slot16;
            var10 = _closure1_slot18;
            var9 = _closure1_slot12;
            var14 = var7;
            var13 = var8;
            var3 = var14[var6](var13, var12, var11, var10, var9, var8);
            var2 = 0;
            var1 = var3[var2];
case 53:
            return var1;
case 51:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot41 = var1;
    var1 = global;
    var11 = var1.Object;
    var8 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var8 = 10;
    var2 = var6[var8];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot17 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot18 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot19 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot20 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot21 = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var11 = var2.ApplicationStreamStates;
    var _closure1_slot22 = var11;
    var11 = var2.RTCConnectionStates;
    var _closure1_slot23 = var11;
    var11 = var2.ApplicationStreamDeleteReasons;
    var _closure1_slot24 = var11;
    var11 = var2.NULL_STRING_GUILD_ID;
    var _closure1_slot25 = var11;
    var2 = var2.BasicPermissions;
    var _closure1_slot26 = var2;
    var2 = 16;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.StreamTypes;
    var _closure1_slot27 = var2;
    var2 = null;
    var _closure1_slot29 = var2;
    var11 = {};
    var _closure1_slot30 = var11;
    var _closure1_slot31 = var2;
    var2 = 17;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.Millis;
    var2 = var2.SECOND;
    var2 = var8 * var2;
    var _closure1_slot32 = var2;
    var2 = var4.bind(var1)();
    var _closure1_slot33 = var1;
    var _closure1_slot34 = var1;
    var2 = 25;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function ApplicationStreamingStore() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot7;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot10;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot9;
                var1 = _closure1_slot35;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 56; continue _fun0009;
case 54:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot10;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 56:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot11;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var6 = arg1;
                var10 = this;
                var4 = var10.syncWith;
                var1 = _closure1_slot18;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    var1 = true;
                    return var1;
                };
                var1 = var4.bind(var10)(var2, var1);
                var9 = var10.waitFor;
                var16 = _closure1_slot14;
                var15 = _closure1_slot15;
                var14 = _closure1_slot18;
                var13 = _closure1_slot19;
                var12 = _closure1_slot13;
                var11 = _closure1_slot20;
                var17 = var10;
                var1 = var17[var9](var16, var15, var14, var13, var12, var11, var10);
                var2 = null;
                var5 = var2 == var6;
                var1 = undefined;
                var4 = undefined;
                if(var5) { _fun0010_ip = 15; continue _fun0010 }
case 57:
                var4 = var6.selfStreamParticipantsHidden;
case 15:
                if(!(var1 !== var4)) { _fun0010_ip = 58; continue _fun0010 }
case 59:
                var4 = global;
                var5 = var4.Object;
                var4 = var5.assign;
                var3 = _closure1_slot30;
                var7 = var2 == var6;
                var2 = undefined;
                if(var7) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                var2 = var6.selfStreamParticipantsHidden;
case 60:
                var2 = var4.bind(var5)(var3, var2);
case 58:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(23);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var2 = _closure1_slot30;
            var1['selfStreamParticipantsHidden'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isSelfStreamHidden';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = _closure1_slot30;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0011_ip = 62; continue _fun0011 }
case 35:
                var1 = var2;
case 62:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getLastActiveStream';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 24;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = _closure1_slot17;
                var3 = var3.bind(var4)(var1);
                var4 = null;
                var1 = null;
                if(!var3) { _fun0012_ip = 63; continue _fun0012 }
case 49:
                var3 = global;
                var5 = var3.Array;
                var3 = var5.from;
                var6 = _closure1_slot3;
                var2 = var6.values;
                var2 = var2.bind(var6)();
                var3 = var3.bind(var5)(var2);
                var2 = var3.pop;
                var2 = var2.bind(var3)();
                var3 = var4 != var2;
                var1 = null;
                if(!var3) { _fun0012_ip = 63; continue _fun0012 }
case 64:
                var1 = var2;
case 63:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getAllActiveStreams';
        var5['key'] = var7;
        var7 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 24;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = _closure1_slot17;
                var1 = var3.bind(var4)(var1);
                if(var1) { _fun0013_ip = 65; continue _fun0013 }
case 66:
                var1 = new Array(0);
                _fun0013_ip = 4; continue _fun0013;
case 65:
                var3 = global;
                var4 = var3.Array;
                var3 = var4.from;
                var5 = _closure1_slot3;
                var2 = var5.values;
                var2 = var2.bind(var5)();
                var1 = var3.bind(var4)(var2);
case 4:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getAllActiveStreamsForChannel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 24;
                var1 = var5[var1];
                var5 = undefined;
                var4 = var4.bind(var5)(var1);
                var1 = _closure1_slot17;
                var1 = var4.bind(var5)(var1);
                if(var1) { _fun0014_ip = 67; continue _fun0014 }
case 6:
                var1 = new Array(0);
                _fun0014_ip = 68; continue _fun0014;
case 67:
                var4 = global;
                var5 = var4.Array;
                var4 = var5.from;
                var6 = _closure1_slot3;
                var3 = var6.values;
                var3 = var3.bind(var6)();
                var4 = var4.bind(var5)(var3);
                var3 = var4.filter;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.channelId;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 68:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getActiveStreamForStreamKey';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 24;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = _closure1_slot17;
                var3 = var3.bind(var4)(var1);
                var4 = null;
                var1 = null;
                if(!var3) { _fun0015_ip = 3; continue _fun0015 }
case 49:
                var5 = _closure1_slot3;
                var3 = var5.get;
                var2 = arg1;
                var2 = var3.bind(var5)(var2);
                var3 = var4 != var2;
                var1 = null;
                if(!var3) { _fun0015_ip = 3; continue _fun0015 }
case 34:
                var1 = var2;
case 3:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getActiveStreamForApplicationStream';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 24;
                var1 = var6[var1];
                var6 = undefined;
                var3 = var3.bind(var6)(var1);
                var1 = _closure1_slot17;
                var1 = var3.bind(var6)(var1);
                if(!var1) { _fun0016_ip = 56; continue _fun0016 }
case 65:
                var1 = null;
                if(!(var1 != var5)) { _fun0016_ip = 56; continue _fun0016 }
case 9:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 18;
                var2 = var7[var2];
                var3 = var3.bind(var6)(var2);
                var2 = var3.encodeStreamKey;
                var3 = var2.bind(var3)(var5);
                var2 = var4.getActiveStreamForStreamKey;
                var2 = var2.bind(var4)(var3);
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0016_ip = 69; continue _fun0016 }
case 59:
                var1 = var2;
case 69:
                return var1;
case 56:
                var1 = null;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getCurrentUserActiveStream';
        var5['key'] = var7;
        var7 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var5 = this;
                var3 = _closure1_slot20;
                var1 = var3.getVoiceChannelId;
                var4 = var1.bind(var3)();
                var3 = _closure1_slot15;
                var1 = var3.getChannel;
                var6 = var1.bind(var3)(var4);
                var1 = null;
                var3 = var1 == var6;
                if(var3) { _fun0017_ip = 48; continue _fun0017 }
case 65:
                var4 = var5.getActiveStreamForUser;
                var3 = _closure1_slot14;
                var2 = var3.getId;
                var3 = var2.bind(var3)();
                var2 = var6.getGuildId;
                var2 = var2.bind(var6)();
                var1 = var4.bind(var5)(var3, var2);
case 48:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isStreamMarkedFull';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot28;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getActiveStreamForUser';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var _closure3_slot0 = var5;
                var3 = var4.getStreamForUser;
                var1 = arg2;
                var3 = var3.bind(var4)(var5, var1);
                var1 = null;
                if(!(var1 == var3)) { _fun0018_ip = 70; continue _fun0018 }
case 37:
                var5 = var4.getAllActiveStreams;
                var6 = var5.bind(var4)();
                var5 = var6.find;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.ownerId;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var5.bind(var6)(var2);
                var5 = var1 != var2;
                var1 = null;
                if(!var5) { _fun0018_ip = 71; continue _fun0018 }
case 72:
                var1 = var2;
case 71:
                _fun0018_ip = 13; continue _fun0018;
case 70:
                var2 = var4.getActiveStreamForApplicationStream;
                var1 = var2.bind(var4)(var3);
case 13:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getStreamerActiveStreamMetadata';
        var5['key'] = var7;
        var7 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var6 = this;
                var2 = _closure1_slot20;
                var1 = var2.getVoiceChannelId;
                var4 = var1.bind(var2)();
                var2 = _closure1_slot15;
                var1 = var2.getChannel;
                var7 = var1.bind(var2)(var4);
                var1 = null;
                if(!(var1 != var7)) { _fun0019_ip = 73; continue _fun0019 }
case 74:
                var5 = var6.getActiveStreamForUser;
                var4 = _closure1_slot14;
                var2 = var4.getId;
                var4 = var2.bind(var4)();
                var2 = var7.getGuildId;
                var2 = var2.bind(var7)();
                var6 = var5.bind(var6)(var4, var2);
                var4 = var1 == var6;
                var2 = null;
                if(var4) { _fun0019_ip = 75; continue _fun0019 }
case 76:
                var4 = _closure1_slot6;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 18;
                var5 = var5[var3];
                var3 = undefined;
                var5 = var7.bind(var3)(var5);
                var3 = var5.encodeStreamKey;
                var3 = var3.bind(var5)(var6);
                var4 = var4[var3];
                var5 = var1 != var4;
                var3 = null;
                if(!var5) { _fun0019_ip = 58; continue _fun0019 }
case 77:
                var3 = var4;
case 58:
                var2 = var3;
case 75:
                return var2;
case 73:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getStreamerActiveStreamMetadataForStream';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var2 = _closure1_slot6;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0020_ip = 62; continue _fun0020 }
case 35:
                var1 = var2;
case 62:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getIsActiveStreamPreviewDisabled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var2 = _closure1_slot6;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0021_ip = 78; continue _fun0021 }
case 79:
                var2 = var3.previewDisabled;
case 78:
                var1 = var1 != var2;
                if(!var1) { _fun0021_ip = 49; continue _fun0021 }
case 80:
                var1 = var2;
case 49:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getAnyStreamForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 24;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = _closure1_slot17;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                if(var3) { _fun0022_ip = 49; continue _fun0022 }
case 81:
                return var2;
case 49:
                var3 = _closure1_slot4;
                var1 = arg1;
                var5 = var3[var1];
                var3 = var2 == var5;
                var1 = null;
                if(var3) { _fun0022_ip = 82; continue _fun0022 }
case 11:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.values;
                var5 = var3.bind(var4)(var5);
                var4 = var5.find;
                var3 = function(arg1) {
                    var3 = _closure1_slot41;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0022_ip = 83; continue _fun0022 }
case 84:
                var2 = var3;
case 83:
                var1 = var2;
case 82:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getAnyDiscoverableStreamForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 24;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = _closure1_slot17;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                if(var3) { _fun0023_ip = 49; continue _fun0023 }
case 81:
                return var2;
case 49:
                var3 = _closure1_slot4;
                var1 = arg1;
                var5 = var3[var1];
                var3 = var2 == var5;
                var1 = null;
                if(var3) { _fun0023_ip = 82; continue _fun0023 }
case 11:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.values;
                var5 = var3.bind(var4)(var5);
                var4 = var5.find;
                var3 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var2 = arg1;
                        var3 = _closure1_slot41;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        if(!var1) { _fun0024_ip = 52; continue _fun0024 }
case 33:
                        var3 = var2.discoverable;
                        var2 = false;
                        var1 = var2 !== var3;
case 52:
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0023_ip = 83; continue _fun0023 }
case 84:
                var2 = var3;
case 83:
                var1 = var2;
case 82:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getStreamForUser';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var6 = arg2;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 24;
                var1 = var3[var1];
                var5 = undefined;
                var2 = var2.bind(var5)(var1);
                var1 = _closure1_slot17;
                var1 = var2.bind(var5)(var1);
                var2 = null;
                if(var1) { _fun0025_ip = 85; continue _fun0025 }
case 86:
                return var2;
case 85:
                var3 = _closure1_slot4;
                var1 = arg1;
                var1 = var3[var1];
                var7 = var2 == var1;
                var3 = undefined;
                if(var7) { _fun0025_ip = 50; continue _fun0025 }
case 87:
                if(!(var2 == var6)) { _fun0025_ip = 5; continue _fun0025 }
case 72:
                var6 = _closure1_slot25;
case 5:
                var3 = var1[var6];
case 50:
                var6 = var2 == var3;
                var1 = null;
                if(var6) { _fun0025_ip = 56; continue _fun0025 }
case 76:
                var4 = _closure1_slot41;
                var4 = var4.bind(var5)(var3);
                var2 = null;
                if(!var4) { _fun0025_ip = 44; continue _fun0025 }
case 88:
                var2 = var3;
case 44:
                var1 = var2;
case 56:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getRTCStream';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 24;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = _closure1_slot17;
                var3 = var3.bind(var4)(var1);
                var4 = null;
                var1 = null;
                if(!var3) { _fun0026_ip = 87; continue _fun0026 }
case 49:
                var3 = _closure1_slot5;
                var2 = arg1;
                var2 = var3[var2];
                var3 = var4 != var2;
                var1 = null;
                if(!var3) { _fun0026_ip = 87; continue _fun0026 }
case 11:
                var1 = var2;
case 87:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getAllApplicationStreams';
        var5['key'] = var7;
        var7 = function value() {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 24;
                var1 = var3[var1];
                var3 = undefined;
                var4 = var4.bind(var3)(var1);
                var1 = _closure1_slot17;
                var1 = var4.bind(var3)(var1);
                if(var1) { _fun0027_ip = 65; continue _fun0027 }
case 66:
                var1 = new Array(0);
                _fun0027_ip = 72; continue _fun0027;
case 65:
                var2 = _closure1_slot39;
                var4 = var2.bind(var3)();
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                        var2 = arg1;
                        var1 = null;
                        var1 = var1 != var2;
                        if(!var1) { _fun0028_ip = 80; continue _fun0028 }
case 89:
                        var5 = _closure1_slot40;
                        var4 = var2.streamType;
                        var3 = var2.channelId;
                        var2 = undefined;
                        var1 = var5.bind(var2)(var4, var3);
case 80:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
case 72:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getAllApplicationStreamsForChannel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 24;
                var1 = var4[var1];
                var4 = undefined;
                var5 = var5.bind(var4)(var1);
                var1 = _closure1_slot17;
                var1 = var5.bind(var4)(var1);
                if(var1) { _fun0029_ip = 67; continue _fun0029 }
case 6:
                var1 = new Array(0);
                _fun0029_ip = 90; continue _fun0029;
case 67:
                var3 = _closure1_slot39;
                var4 = var3.bind(var4)();
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                        var2 = arg1;
                        var1 = null;
                        var1 = var1 != var2;
                        if(!var1) { _fun0030_ip = 38; continue _fun0030 }
case 89:
                        var4 = var2.channelId;
                        var3 = _closure3_slot0;
                        var1 = var4 === var3;
case 38:
                        if(!var1) { _fun0030_ip = 91; continue _fun0030 }
case 78:
                        var5 = _closure1_slot40;
                        var4 = var2.streamType;
                        var3 = var2.channelId;
                        var2 = undefined;
                        var1 = var5.bind(var2)(var4, var3);
case 91:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
case 90:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getViewerIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var5 = arg1;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 24;
                var1 = var4[var1];
                var6 = undefined;
                var2 = var2.bind(var6)(var1);
                var1 = _closure1_slot17;
                var1 = var2.bind(var6)(var1);
                if(var1) { _fun0031_ip = 6; continue _fun0031 }
case 74:
                var1 = new Array(0);
                return var1;
case 6:
                var2 = 'string';
                var1 = typeof var5;
                var4 = var5;
                if(!(var2 !== var1)) { _fun0031_ip = 64; continue _fun0031 }
case 92:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 18;
                var1 = var7[var1];
                var2 = var2.bind(var6)(var1);
                var1 = var2.encodeStreamKey;
                var4 = var1.bind(var2)(var5);
case 64:
                var1 = null;
                var5 = var1 != var4;
                var2 = null;
                if(!var5) { _fun0031_ip = 17; continue _fun0031 }
case 44:
                var3 = _closure1_slot5;
                var2 = var3[var4];
case 17:
                if(!(var1 == var2)) { _fun0031_ip = 93; continue _fun0031 }
case 94:
                var1 = new Array(0);
                _fun0031_ip = 61; continue _fun0031;
case 93:
                var1 = var2.viewerIds;
case 61:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getCurrentAppIntent';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot31;
            return var1;
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'getStreamingState';
        var5['key'] = var7;
        var6 = function value() {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 24;
                var1 = var4[var1];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = _closure1_slot17;
                var1 = var2.bind(var4)(var1);
                var2 = {};
                if(var1) { _fun0032_ip = 4; continue _fun0032 }
case 81:
                var1 = new Array(0);
                var2['activeStreams'] = var1;
                var1 = {};
                var2['streamsByUserAndGuild'] = var1;
                var1 = {};
                var2['rtcStreams'] = var1;
                var1 = {};
                var2['streamerActiveStreamMetadatas'] = var1;
                var1 = var2;
                _fun0032_ip = 75; continue _fun0032;
case 4:
                var4 = global;
                var6 = var4.Array;
                var5 = var6.from;
                var7 = _closure1_slot3;
                var4 = var7.entries;
                var4 = var4.bind(var7)();
                var4 = var5.bind(var6)(var4);
                var2['activeStreams'] = var4;
                var4 = _closure1_slot4;
                var2['streamsByUserAndGuild'] = var4;
                var4 = _closure1_slot5;
                var2['rtcStreams'] = var4;
                var3 = _closure1_slot6;
                var2['streamerActiveStreamMetadatas'] = var3;
                var1 = var2;
case 75:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[22] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ApplicationStreamingStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 26;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleSetGoLiveSource(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var1 = arg1;
            var2 = var1.settings;
            var15 = var1.endReason;
            var14 = var1.errorCode;
            var13 = null;
            var4 = var13 == var2;
            var3 = undefined;
            if(var4) { _fun0033_ip = 80; continue _fun0033 }
case 52:
            var3 = var2.desktopSettings;
case 80:
            if(!(var13 == var3)) { _fun0033_ip = 95; continue _fun0033 }
case 96:
            var3 = var13 == var2;
            var1 = undefined;
            if(var3) { _fun0033_ip = 92; continue _fun0033 }
case 97:
            var1 = var2.cameraSettings;
case 92:
            if(!(var13 == var1)) { _fun0033_ip = 95; continue _fun0033 }
case 34:
            if(!(var13 != var14)) { _fun0033_ip = 98; continue _fun0033 }
case 4:
            var11 = _closure1_slot6;
            var2 = false;
            var6 = 'state';
            var5 = 'endReason';
            var4 = 'errorCode';
            var1 = false;
            for(var7 in var11)
case 56:
            {
                var1 = var2;
case 99:
                var19 = var7;
                var17 = _closure1_slot3;
                var16 = var17.get;
                var20 = var16.bind(var17)(var19);
                if(var13 == var20) { _fun0033_ip = 56; continue _fun0033 }
case 58:
                var18 = _closure1_slot3;
                var17 = var18.set;
                var16 = {};
                var22 = var16;
                var21 = var20;
                var20 = copyDataProperties(var22, var21);
                var20 = _closure1_slot22;
                var20 = var20.FAILED;
                var16[5] = var20;
                var16[4] = var15;
                var16[3] = var14;
                var16 = var17.bind(var18)(var19, var16);
                var2 = true;
                _fun0033_ip = 56; continue _fun0033;
            }
case 100:
            return var1;
case 98:
            var1 = false;
            return var1;
case 95:
            var1 = false;
            return var1;
        }
    };
    var2['MEDIA_ENGINE_SET_GO_LIVE_SOURCE'] = var11;
    var11 = function handleNativePickerUpdate(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var2 = arg1;
            var1 = var2.existing;
            var3 = var2.content;
            var12 = null;
            if(!(var12 != var3)) { _fun0034_ip = 101; continue _fun0034 }
case 35:
            var5 = _closure1_slot36;
            var4 = var3.applications;
            var2 = undefined;
            var7 = var5.bind(var2)(var4);
            var5 = var7.bind(var2)();
            var4 = var5.done;
            var6 = var5;
            if(var4) { _fun0034_ip = 44; continue _fun0034 }
case 102:
            var4 = var6.value;
            var8 = _closure1_slot13;
            var5 = var8.getGameForPID;
            var4 = var4.id;
            var5 = var5.bind(var8)(var4);
            if(!(var12 == var5)) { _fun0034_ip = 103; continue _fun0034 }
case 104:
            var8 = var7.bind(var2)();
            var4 = var8.done;
            var6 = var8;
            if(!var4) { _fun0034_ip = 102; continue _fun0034 }
case 44:
            var6 = _closure1_slot36;
            var4 = var3.windows;
            var8 = var6.bind(var2)(var4);
            var6 = var8.bind(var2)();
            var4 = var6.done;
            var7 = var6;
            var6 = undefined;
            var5 = undefined;
            if(var4) { _fun0034_ip = 103; continue _fun0034 }
case 105:
            var4 = var7.value;
            var9 = var4.owningApplication;
            if(!(var12 != var9)) { _fun0034_ip = 106; continue _fun0034 }
case 107:
            var10 = _closure1_slot13;
            var9 = var10.getGameForPID;
            var4 = var4.owningApplication;
            var4 = var4.id;
            var6 = var9.bind(var10)(var4);
            var5 = var6;
            if(!(var12 == var5)) { _fun0034_ip = 103; continue _fun0034 }
case 106:
            var9 = var8.bind(var2)();
            var4 = var9.done;
            var7 = var9;
            var5 = undefined;
            if(!var4) { _fun0034_ip = 105; continue _fun0034 }
case 103:
            _closure1_slot34 = var5;
            var6 = var12 == var5;
            var4 = undefined;
            if(var6) { _fun0034_ip = 108; continue _fun0034 }
case 109:
            var4 = var5.pid;
case 108:
            _closure1_slot33 = var4;
            if(var1) { _fun0034_ip = 110; continue _fun0034 }
case 111:
            var1 = false;
            return var1;
case 110:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 20;
            var1 = var5[var1];
            var1 = var4.bind(var2)(var1);
            var1 = var1.bind(var2)(var3);
            var10 = {};
            var3 = _closure1_slot33;
            var10['pid'] = var3;
            var3 = _closure1_slot34;
            var4 = var12 == var3;
            var2 = undefined;
            if(var4) { _fun0034_ip = 112; continue _fun0034 }
case 113:
            var2 = var3.id;
case 112:
            var10['id'] = var2;
            if(!(var12 != var1)) { _fun0034_ip = 114; continue _fun0034 }
case 115:
            var10['sourceName'] = var1;
case 114:
            var8 = _closure1_slot6;
            var2 = false;
            var3 = 'prepicked:';
            var1 = false;
            for(var5 in var8)
case 116:
            {
                var1 = var2;
case 117:
                var15 = var5;
                var13 = _closure1_slot6;
                var14 = var13[var15];
                var13 = var12 != var14;
                var16 = var14;
                if(!var13) { _fun0034_ip = 118; continue _fun0034 }
case 119:
                var14 = var14.sourceId;
                var13 = var12 != var14;
                var16 = var14;
case 118:
                if(!var13) { _fun0034_ip = 120; continue _fun0034 }
case 121:
                var14 = var16.startsWith;
                var13 = var14.bind(var16)(var3);
case 120:
                if(!var13) { _fun0034_ip = 116; continue _fun0034 }
case 122:
                var14 = _closure1_slot6;
                var13 = {};
                var18 = var14[var15];
                var19 = var13;
                var16 = copyDataProperties(var19, var18);
                var19 = var13;
                var18 = var10;
                var16 = copyDataProperties(var19, var18);
                var14[var15] = var13;
                var2 = true;
                _fun0034_ip = 116; continue _fun0034;
            }
case 123:
            return var1;
case 101:
            var1 = false;
            return var1;
        }
    };
    var2['NATIVE_SCREEN_SHARE_PICKER_UPDATE'] = var11;
    var11 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var3 = var1.applicationStreamState;
        var1 = var3.streamsByUserAndGuild;
        _closure1_slot4 = var1;
        var1 = global;
        var6 = var1.Map;
        var7 = var3.activeStreams;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var8 = var5;
        var4 = new var8[var6](var7, var6);
        var4 = var4 instanceof Object ? var4 : var5;
        _closure1_slot3 = var4;
        var4 = var3.rtcStreams;
        _closure1_slot5 = var4;
        var3 = var3.streamerActiveStreamMetadatas;
        _closure1_slot6 = var3;
        var1 = var1.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var8 = var3;
        var1 = new var8[var1](var7);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot28 = var1;
        var1 = undefined;
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var11;
    var11 = function handleVoiceStateUpdates(arg1) {
        var1 = arg1;
        var4 = var1.voiceStates;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var3 = arg1;
                var1 = arg2;
                var6 = var1.userId;
                var4 = var1.guildId;
                var2 = var1.channelId;
                var8 = var1.sessionId;
                var5 = var1.selfStream;
                var1 = var1.discoverable;
                if(!var5) { _fun0035_ip = 55; continue _fun0035 }
case 86:
                var5 = null;
                if(!(var5 == var2)) { _fun0035_ip = 124; continue _fun0035 }
case 55:
                var11 = _closure1_slot14;
                var7 = var11.getId;
                var10 = var7.bind(var11)();
                var7 = var11.getSessionId;
                var7 = var7.bind(var11)();
                if(!(var6 === var10)) { _fun0035_ip = 84; continue _fun0035 }
case 42:
                if(!(var8 !== var7)) { _fun0035_ip = 84; continue _fun0035 }
case 13:
                var8 = _closure1_slot19;
                var7 = var8.getChannelId;
                var8 = var7.bind(var8)();
                var7 = null;
                if(!(var7 == var8)) { _fun0035_ip = 125; continue _fun0035 }
case 84:
                var8 = function clearFullStreamsForOwner(arg1, arg2) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var2 = arg2;
                    var _closure4_slot1 = var2;
                    var2 = false;
                    var _closure4_slot2 = var2;
                    var4 = _closure1_slot28;
                    var3 = var4.forEach;
                    var2 = function(arg1, arg2) {
                        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                            var5 = arg2;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 18;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.decodeStreamKey;
                            var6 = var3.bind(var4)(var5);
                            var7 = var6.ownerId;
                            var4 = _closure4_slot0;
                            var4 = var7 === var4;
                            if(!var4) { _fun0036_ip = 88; continue _fun0036 }
case 41:
                            var8 = var6.guildId;
                            var7 = null;
                            var9 = var7 != var8;
                            var6 = null;
                            if(!var9) { _fun0036_ip = 126; continue _fun0036 }
case 90:
                            var6 = var8;
case 126:
                            var8 = _closure4_slot1;
                            var8 = var7 != var8;
                            var7 = null;
                            if(!var8) { _fun0036_ip = 127; continue _fun0036 }
case 64:
                            var7 = _closure4_slot1;
case 127:
                            var4 = var6 === var7;
case 88:
                            if(!var4) { _fun0036_ip = 128; continue _fun0036 }
case 44:
                            var4 = _closure1_slot28;
                            var2 = var4.delete;
                            var2 = var2.bind(var4)(var5);
                            if(var2) { _fun0036_ip = 129; continue _fun0036 }
case 53:
                            var2 = _closure4_slot2;
case 129:
                            _closure4_slot2 = var2;
case 128:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure4_slot2;
                    return var1;
                };
                var7 = undefined;
                var8 = var8.bind(var7)(var6, var4);
                var11 = null;
                var10 = var4;
                if(!(var11 == var10)) { _fun0035_ip = 130; continue _fun0035 }
case 131:
                var10 = _closure1_slot25;
case 130:
                var12 = _closure1_slot4;
                var12 = var12[var6];
                var13 = var11 == var12;
                var7 = undefined;
                if(var13) { _fun0035_ip = 132; continue _fun0035 }
case 107:
                var7 = var12[var10];
case 132:
                var7 = var11 != var7;
                if(!var7) { _fun0035_ip = 133; continue _fun0035 }
case 134:
                var9 = _closure1_slot4;
                var9 = var9[var6];
                var9 = delete var9[var10];
                var7 = true;
case 133:
                if(var7) { _fun0035_ip = 135; continue _fun0035 }
case 20:
                var7 = var8;
case 135:
                if(var7) { _fun0035_ip = 136; continue _fun0035 }
case 137:
                var7 = var3;
case 136:
                return var7;
case 125:
                return var3;
case 124:
                var3 = {};
                if(!(var5 == var4)) { _fun0035_ip = 138; continue _fun0035 }
case 139:
                var7 = _closure1_slot27;
                var7 = var7.CALL;
                _fun0035_ip = 140; continue _fun0035;
case 138:
                var8 = _closure1_slot27;
                var7 = var8.GUILD;
case 140:
                var3['streamType'] = var7;
                var3['ownerId'] = var6;
                var3['guildId'] = var4;
                var3['channelId'] = var2;
                var3['discoverable'] = var1;
                var2 = _closure1_slot4;
                var1 = var3.ownerId;
                var1 = var2[var1];
                if(!(var5 == var1)) { _fun0035_ip = 141; continue _fun0035 }
case 16:
                var6 = _closure1_slot4;
                var2 = var3.ownerId;
                var1 = {};
                var6[var2] = var1;
case 141:
                var2 = _closure1_slot4;
                var1 = var3.ownerId;
                var2 = var2[var1];
                var1 = var3.guildId;
                if(!(var5 == var1)) { _fun0035_ip = 142; continue _fun0035 }
case 143:
                var1 = _closure1_slot25;
case 142:
                var2[var1] = var3;
                var1 = true;
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['VOICE_STATE_UPDATES'] = var11;
    var11 = function handleStreamWatch(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var1 = arg1;
            var7 = var1.streamKey;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.decodeStreamKey;
            var2 = var2.bind(var4)(var7);
            var5 = _closure1_slot3;
            var4 = var5.delete;
            var4 = var4.bind(var5)(var7);
            var6 = _closure1_slot3;
            var5 = var6.set;
            var4 = {};
            var11 = var4;
            var10 = var2;
            var8 = copyDataProperties(var11, var10);
            var8 = _closure1_slot22;
            var9 = var8.CONNECTING;
            var8 = 'state';
            var4[7] = var9;
            var4 = var5.bind(var6)(var7, var4);
            var5 = var2.ownerId;
            var6 = _closure1_slot14;
            var4 = var6.getId;
            var4 = var4.bind(var6)();
            if(!(var5 === var4)) { _fun0037_ip = 144; continue _fun0037 }
case 145:
            var4 = _closure1_slot30;
            var3 = var2.channelId;
            var2 = false;
            var4[var3] = var2;
case 144:
            return var1;
        }
    };
    var2['STREAM_WATCH'] = var11;
    var11 = function handleStreamStart(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var1 = arg1;
            var9 = var1.streamType;
            var8 = var1.guildId;
            var7 = var1.channelId;
            var13 = var1.pid;
            var12 = var1.sourceName;
            var4 = var1.sourceId;
            var _closure2_slot0 = var4;
            var10 = var1.sourceIcon;
            var11 = var1.previewDisabled;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var14 = var5.bind(var1)(var2);
            var5 = var14.encodeStreamKey;
            var2 = {};
            var2['streamType'] = var9;
            var2['guildId'] = var8;
            var2['channelId'] = var7;
            var16 = _closure1_slot14;
            var15 = var16.getId;
            var15 = var15.bind(var16)();
            var2['ownerId'] = var15;
            var5 = var5.bind(var14)(var2);
            var14 = null;
            var2 = var14 != var4;
            if(!var2) { _fun0038_ip = 107; continue _fun0038 }
case 130:
            var16 = var4.startsWith;
            var15 = 'prepicked:';
            var2 = var16.bind(var4)(var15);
case 107:
            if(!var2) { _fun0038_ip = 19; continue _fun0038 }
case 146:
            var2 = var14 == var13;
case 19:
            if(!var2) { _fun0038_ip = 147; continue _fun0038 }
case 148:
            var13 = _closure1_slot33;
case 147:
            if(!(var14 != var4)) { _fun0038_ip = 149; continue _fun0038 }
case 21:
            var15 = var4.startsWith;
            var2 = 'prepicked:';
            var2 = var15.bind(var4)(var2);
            if(!var2) { _fun0038_ip = 149; continue _fun0038 }
case 150:
            var2 = _closure1_slot34;
            if(!(var14 == var2)) { _fun0038_ip = 151; continue _fun0038 }
case 149:
            if(!(var14 == var13)) { _fun0038_ip = 152; continue _fun0038 }
case 103:
            var15 = var14 != var4;
            var2 = null;
            if(!var15) { _fun0038_ip = 153; continue _fun0038 }
case 154:
            var16 = _closure1_slot13;
            var15 = var16.getRunningGames;
            var16 = var15.bind(var16)();
            var15 = var16.find;
            var3 = function(arg1) {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1.windowHandle;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var15.bind(var16)(var3);
case 153:
            _fun0038_ip = 155; continue _fun0038;
case 152:
            var15 = _closure1_slot13;
            var3 = var15.getGameForPID;
            var2 = var3.bind(var15)(var13);
case 155:
            _fun0038_ip = 156; continue _fun0038;
case 151:
            var2 = _closure1_slot34;
case 156:
            var3 = var14 != var2;
            var15 = null;
            if(!var3) { _fun0038_ip = 157; continue _fun0038 }
case 158:
            var15 = var2;
case 157:
            var3 = _closure1_slot6;
            var2 = {};
            var16 = var14 == var15;
            var14 = undefined;
            if(var16) { _fun0038_ip = 159; continue _fun0038 }
case 160:
            var14 = var15.id;
case 159:
            var2['id'] = var14;
            var2['pid'] = var13;
            var2['sourceName'] = var12;
            var2['previewDisabled'] = var11;
            var2['sourceIcon'] = var10;
            var2['sourceId'] = var4;
            var3[var5] = var2;
            var3 = _closure1_slot3;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var5);
            var4 = _closure1_slot3;
            var3 = var4.set;
            var2 = {};
            var2['streamType'] = var9;
            var2['guildId'] = var8;
            var2['channelId'] = var7;
            var8 = _closure1_slot14;
            var7 = var8.getId;
            var7 = var7.bind(var8)();
            var2['ownerId'] = var7;
            var6 = _closure1_slot22;
            var6 = var6.CONNECTING;
            var2['state'] = var6;
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        }
    };
    var2['STREAM_START'] = var11;
    var11 = function handleStreamStop(arg1) {
        var1 = arg1;
        var3 = var1.streamKey;
        var2 = _closure1_slot6;
        var1 = null;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var2['STREAM_STOP'] = var11;
    var2['STREAM_CREATE'] = var10;
    var2['STREAM_UPDATE'] = var10;
    var10 = function handleStreamTimedOut(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var1 = arg1;
            var4 = var1.streamKey;
            var2 = _closure1_slot3;
            var1 = var2.get;
            var6 = var1.bind(var2)(var4);
            var1 = null;
            if(!(var1 != var6)) { _fun0039_ip = 42; continue _fun0039 }
case 52:
            var3 = _closure1_slot3;
            var2 = var3.set;
            var1 = {};
            var8 = var1;
            var7 = var6;
            var6 = copyDataProperties(var8, var7);
            var5 = _closure1_slot22;
            var6 = var5.FAILED;
            var5 = 'state';
            var1[4] = var6;
            var1 = var2.bind(var3)(var4, var1);
            var1 = undefined;
            return var1;
case 42:
            var1 = false;
            return var1;
        }
    };
    var2['STREAM_TIMED_OUT'] = var10;
    var10 = function handleStreamDelete(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var1 = arg1;
            var4 = var1.streamKey;
            var7 = var1.unavailable;
            var10 = var1.reason;
            var2 = undefined;
            var _closure2_slot0 = var2;
            var1 = _closure1_slot5;
            var1 = delete var1[var4];
            var1 = _closure1_slot24;
            var6 = var1.STREAM_FULL;
            var1 = false;
            if(!(var10 === var6)) { _fun0040_ip = 56; continue _fun0040 }
case 32:
            var8 = _closure1_slot28;
            var6 = var8.has;
            var6 = var6.bind(var8)(var4);
            var1 = !var6;
            var11 = _closure1_slot28;
            var9 = var11.set;
            var8 = global;
            var12 = var8.Date;
            var8 = var12.now;
            var8 = var8.bind(var12)();
            var8 = var9.bind(var11)(var4, var8);
case 56:
            var8 = _closure1_slot3;
            var6 = var8.get;
            var9 = var6.bind(var8)(var4);
            var6 = null;
            if(!(var6 != var9)) { _fun0040_ip = 161; continue _fun0040 }
case 162:
            var6 = _closure1_slot22;
            var6 = var6.ENDED;
            if(var7) { _fun0040_ip = 163; continue _fun0040 }
case 144:
            var7 = _closure1_slot24;
            var7 = var7.UNAUTHORIZED;
            if(!(var10 !== var7)) { _fun0040_ip = 31; continue _fun0040 }
case 148:
            var7 = _closure1_slot24;
            var7 = var7.SAFETY_GUILD_RATE_LIMITED;
            if(!(var10 !== var7)) { _fun0040_ip = 164; continue _fun0040 }
case 165:
            var8 = var9.state;
            var7 = _closure1_slot22;
            var7 = var7.FAILED;
            var7 = var8 === var7;
            if(!var7) { _fun0040_ip = 166; continue _fun0040 }
case 149:
            var8 = _closure1_slot24;
            var8 = var8.USER_REQUESTED;
            var7 = var10 === var8;
case 166:
            if(!var7) { _fun0040_ip = 167; continue _fun0040 }
case 168:
            var7 = _closure1_slot22;
            var6 = var7.FAILED;
            _fun0040_ip = 167; continue _fun0040;
case 164:
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = 18;
            var8 = var7[var8];
            var11 = var10.bind(var2)(var8);
            var8 = var11.decodeStreamKey;
            var8 = var8.bind(var11)(var4);
            var8 = var8.guildId;
            _closure2_slot0 = var8;
            var8 = 22;
            var8 = var7[var8];
            var10 = var10.bind(var2)(var8);
            var8 = 21;
            var8 = var7[var8];
            var7 = var7.paths;
            var8 = var10.bind(var2)(var8, var7);
            var7 = var8.then;
            var5 = function(arg1) {
                var1 = arg1;
                var3 = var1.default;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var7.bind(var8)(var5);
            var5 = _closure1_slot22;
            var6 = var5.ENDED;
            _fun0040_ip = 167; continue _fun0040;
case 31:
            var5 = _closure1_slot22;
            var6 = var5.FAILED;
            _fun0040_ip = 167; continue _fun0040;
case 163:
            var5 = _closure1_slot22;
            var6 = var5.RECONNECTING;
case 167:
            var8 = _closure1_slot3;
            var7 = var8.set;
            var5 = {};
            var14 = var5;
            var13 = var9;
            var9 = copyDataProperties(var14, var13);
            var9 = 'state';
            var5[8] = var6;
            var5 = var7.bind(var8)(var4, var5);
            var5 = _closure1_slot22;
            var5 = var5.ENDED;
            var5 = var6 === var5;
            if(!var5) { _fun0040_ip = 169; continue _fun0040 }
case 170:
            var6 = _closure1_slot29;
            var5 = var6 !== var4;
case 169:
            if(!var5) { _fun0040_ip = 101; continue _fun0040 }
case 171:
            var3 = _closure1_slot38;
            var3 = var3.bind(var2)(var4);
case 101:
            return var2;
case 161:
            return var1;
        }
    };
    var2['STREAM_DELETE'] = var10;
    var10 = function handleStreamClose(arg1) {
        var1 = arg1;
        var3 = var1.streamKey;
        var2 = _closure1_slot38;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['STREAM_CLOSE'] = var10;
    var10 = function handleUpdateSelfStreamHidden(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = var1.selfStreamHidden;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 18;
            var5 = var5[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var5);
            var6 = var7.isStreamKey;
            var5 = _closure1_slot29;
            var5 = var6.bind(var7)(var5);
            var8 = undefined;
            if(!var5) { _fun0041_ip = 5; continue _fun0041 }
case 41:
            var6 = _closure1_slot29;
            var7 = null;
            var5 = var7 != var6;
            var8 = var6;
case 5:
            if(!var5) { _fun0041_ip = 88; continue _fun0041 }
case 90:
            var7 = var8.includes;
            var9 = _closure1_slot14;
            var6 = var9.getId;
            var6 = var6.bind(var9)();
            var5 = var7.bind(var8)(var6);
case 88:
            if(!var5) { _fun0041_ip = 172; continue _fun0041 }
case 44:
            var6 = _closure1_slot30;
            var7 = var6[var4];
            var6 = false;
            var5 = var6 === var7;
case 172:
            if(!var5) { _fun0041_ip = 173; continue _fun0041 }
case 53:
            var6 = true;
            var5 = var6 === var3;
case 173:
            if(!var5) { _fun0041_ip = 130; continue _fun0041 }
case 162:
            var5 = null;
            _closure1_slot29 = var5;
case 130:
            var2 = _closure1_slot30;
            var2[var4] = var3;
            return var1;
        }
    };
    var2['STREAM_UPDATE_SELF_HIDDEN'] = var10;
    var10 = function handleVoiceChannelSelectForFullStreams(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channelId;
            var _closure2_slot0 = var3;
            var2 = undefined;
            var _closure2_slot1 = var2;
            var2 = null;
            if(!(var2 != var3)) { _fun0042_ip = 92; continue _fun0042 }
case 62:
            var2 = false;
            _closure2_slot1 = var2;
            var4 = _closure1_slot28;
            var3 = var4.forEach;
            var2 = function(arg1, arg2) {
                _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                    var5 = arg2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 18;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.decodeStreamKey;
                    var3 = var3.bind(var4)(var5);
                    var6 = var3.channelId;
                    var4 = _closure2_slot0;
                    if(!(var6 !== var4)) { _fun0043_ip = 174; continue _fun0043 }
case 8:
                    var4 = _closure1_slot28;
                    var2 = var4.delete;
                    var2 = var2.bind(var4)(var5);
                    if(var2) { _fun0043_ip = 50; continue _fun0043 }
case 5:
                    var2 = _closure2_slot1;
case 50:
                    _closure2_slot1 = var2;
case 174:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1 = _closure2_slot1;
            return var1;
case 92:
            var1 = false;
            return var1;
        }
    };
    var2['VOICE_CHANNEL_SELECT'] = var10;
    var10 = function handleStreamSetAppIntent(arg1) {
        var1 = arg1;
        var2 = var1.intent;
        _closure1_slot31 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SET_STREAM_APP_INTENT'] = var10;
    var10 = function handleRTCConnectionState(arg1) {
        _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
            var1 = arg1;
            var4 = var1.streamKey;
            var3 = var1.state;
            var2 = null;
            if(!(var2 != var4)) { _fun0044_ip = 175; continue _fun0044 }
case 35:
            var6 = _closure1_slot3;
            var5 = var6.get;
            var5 = var5.bind(var6)(var4);
            if(!(var2 != var5)) { _fun0044_ip = 176; continue _fun0044 }
case 177:
            var6 = var5.state;
            var2 = _closure1_slot22;
            var2 = var2.ENDED;
            if(!(var6 !== var2)) { _fun0044_ip = 176; continue _fun0044 }
case 54:
            var6 = var5.state;
            var2 = _closure1_slot22;
            var2 = var2.FAILED;
            if(!(var6 === var2)) { _fun0044_ip = 82; continue _fun0044 }
case 45:
            var6 = var5.ownerId;
            var7 = _closure1_slot14;
            var2 = var7.getId;
            var2 = var2.bind(var7)();
            if(!(var6 !== var2)) { _fun0044_ip = 108; continue _fun0044 }
case 82:
            var6 = var5.state;
            var2 = _closure1_slot23;
            var2 = var2.DISCONNECTED;
            if(!(var2 !== var3)) { _fun0044_ip = 178; continue _fun0044 }
case 179:
            var2 = _closure1_slot23;
            var2 = var2.RTC_CONNECTED;
            if(!(var2 === var3)) { _fun0044_ip = 180; continue _fun0044 }
case 181:
            var2 = _closure1_slot22;
            var6 = var2.ACTIVE;
            _fun0044_ip = 180; continue _fun0044;
case 178:
            var2 = _closure1_slot22;
            var6 = var2.RECONNECTING;
case 180:
            var2 = var5.state;
            if(!(var6 !== var2)) { _fun0044_ip = 182; continue _fun0044 }
case 133:
            var3 = _closure1_slot3;
            var2 = var3.set;
            var1 = {};
            var9 = var1;
            var8 = var5;
            var5 = copyDataProperties(var9, var8);
            var5 = 'state';
            var1[4] = var6;
            var1 = var2.bind(var3)(var4, var1);
            var1 = undefined;
            return var1;
case 182:
            var1 = false;
            return var1;
case 108:
            var1 = false;
            return var1;
case 176:
            var1 = false;
            return var1;
case 175:
            var1 = false;
            return var1;
        }
    };
    var2['RTC_CONNECTION_STATE'] = var10;
    var9 = function handleStreamCloseAll(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var1 = arg1;
            var6 = var1.id;
            var3 = var1.channelId;
            _closure1_slot29 = var6;
            var2 = global;
            var5 = var2.Array;
            var4 = var5.from;
            var7 = _closure1_slot3;
            var2 = var7.values;
            var2 = var2.bind(var7)();
            var5 = var4.bind(var5)(var2);
            var4 = var5.forEach;
            var2 = function(arg1) {
                _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                    var5 = arg1;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 18;
                    var3 = var1[var6];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.encodeStreamKey;
                    var4 = var3.bind(var4)(var5);
                    var3 = _closure1_slot29;
                    var3 = var4 !== var3;
                    if(!var3) { _fun0046_ip = 54; continue _fun0046 }
case 40:
                    var7 = var5.state;
                    var4 = _closure1_slot22;
                    var4 = var4.ENDED;
                    var3 = var7 === var4;
case 54:
                    if(!var3) { _fun0046_ip = 83; continue _fun0046 }
case 5:
                    var3 = _closure1_slot38;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.encodeStreamKey;
                    var2 = var2.bind(var4)(var5);
                    var2 = var3.bind(var1)(var2);
case 83:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var2 = null;
            var2 = var2 != var6;
            if(!var2) { _fun0045_ip = 17; continue _fun0045 }
case 183:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 18;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var7.bind(var4)(var5);
            var4 = var5.isStreamKey;
            var2 = var4.bind(var5)(var6);
case 17:
            if(!var2) { _fun0045_ip = 184; continue _fun0045 }
case 185:
            var5 = var6.includes;
            var7 = _closure1_slot14;
            var4 = var7.getId;
            var4 = var4.bind(var7)();
            var2 = var5.bind(var6)(var4);
case 184:
            if(!var2) { _fun0045_ip = 186; continue _fun0045 }
case 187:
            var2 = _closure1_slot30;
            var1 = false;
            var2[var3] = var1;
case 186:
            var1 = undefined;
            return var1;
        }
    };
    var2['CHANNEL_RTC_SELECT_PARTICIPANT'] = var9;
    var2['CONNECTION_OPEN'] = var4;
    var2['CONNECTION_CLOSED'] = var4;
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/ApplicationStreamingStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();