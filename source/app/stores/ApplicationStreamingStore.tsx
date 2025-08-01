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
            _closure1_slot33 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot33 = var1;
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
            var9 = _closure1_slot35;
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
            var7 = _closure1_slot35;
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
    var _closure1_slot34 = var1;
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
    var _closure1_slot35 = var1;
    var4 = function reset() {
        var1 = global;
        var1 = var1.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {constructor: {value: var1}});
        var3 = var2;
        var1 = new var3[var1](var2);
        var1 = var1 instanceof Object ? var1 : var2;
        var _closure1_slot3 = var1;
        var1 = {};
        var _closure1_slot4 = var1;
        var1 = {};
        var _closure1_slot5 = var1;
        var1 = {};
        var _closure1_slot6 = var1;
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
    var _closure1_slot36 = var1;
    var1 = function getAllStreams() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = new Array(0);
            var12 = _closure1_slot4;
            for(var8 in var12)
 19:
            {
 28:
                var7 = var8;
                var2 = _closure1_slot4;
                var2 = var2[var7];
                var5 = var2;
                ForInLoopInit(obj_props_register=5, obj_register=4, iter_index_register=3, iter_size_register=2);
                if(var6 === undefined) { _fun0005_ip = 19; continue _fun0005 }
 50:
                ForInLoopNextIter(next_value_register=1, obj_props_register=5, obj_register=4, iter_index_register=3, iter_size_register=2);
                if(var2 === undefined) { _fun0005_ip = 19; continue _fun0005 }
 59:
                var16 = var2;
                var15 = var1.push;
                var14 = _closure1_slot4;
                var14 = var14[var7];
                var14 = var14[var16];
                var14 = var15.bind(var1)(var14);
                _fun0005_ip = 50; continue _fun0005;
            }
 86:
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var10 = function handleStreamUpdate(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = var1.streamKey;
            var6 = var1.region;
            var5 = var1.viewerIds;
            var10 = var1.paused;
            var8 = _closure1_slot3;
            var7 = var8.set;
            var3 = {};
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 17;
            var9 = var9[var1];
            var1 = undefined;
            var11 = var11.bind(var1)(var9);
            var9 = var11.decodeStreamKey;
            var12 = var9.bind(var11)(var4);
            var13 = var3;
            var9 = copyDataProperties(var13, var12);
            var9 = _closure1_slot22;
            if(var10) { _fun0006_ip = 96; continue _fun0006 }
 88:
            var10 = var9.ACTIVE;
            _fun0006_ip = 102; continue _fun0006;
 96:
            var10 = var9.PAUSED;
 102:
            var9 = 'state';
            var3[var9] = var10;
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
 0:
            var4 = _closure1_slot15;
            var2 = var4.getBasicChannel;
            var1 = arg2;
            var6 = var2.bind(var4)(var1);
            var1 = _closure1_slot27;
            var2 = var1.CALL;
            var1 = arg1;
            var1 = var1 === var2;
            if(var1) { _fun0007_ip = 79; continue _fun0007 }
 41:
            var2 = null;
            var2 = var2 != var6;
            if(!var2) { _fun0007_ip = 76; continue _fun0007 }
 50:
            var5 = _closure1_slot18;
            var4 = var5.canBasicChannel;
            var3 = _closure1_slot26;
            var3 = var3.VIEW_CHANNEL;
            var2 = var4.bind(var5)(var3, var6);
 76:
            var1 = var2;
 79:
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function isWatchableStream(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var6 = _closure1_slot38;
            var4 = var1.streamType;
            var3 = var1.channelId;
            var5 = undefined;
            var3 = var6.bind(var5)(var4, var3);
            if(var3) { _fun0008_ip = 121; continue _fun0008 }
 32:
            var4 = _closure1_slot15;
            var3 = var4.getBasicChannel;
            var1 = var1.channelId;
            var8 = var3.bind(var4)(var1);
            var1 = null;
            var1 = var1 != var8;
            if(!var1) { _fun0008_ip = 119; continue _fun0008 }
 61:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 22;
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
 119:
            return var1;
 121:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot39 = var1;
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
    var2 = 10;
    var2 = var6[var2];
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
    var8 = var2.ApplicationStreamStates;
    var _closure1_slot22 = var8;
    var8 = var2.RTCConnectionStates;
    var _closure1_slot23 = var8;
    var8 = var2.ApplicationStreamDeleteReasons;
    var _closure1_slot24 = var8;
    var8 = var2.NULL_STRING_GUILD_ID;
    var _closure1_slot25 = var8;
    var2 = var2.BasicPermissions;
    var _closure1_slot26 = var2;
    var2 = 16;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.StreamTypes;
    var _closure1_slot27 = var2;
    var2 = null;
    var _closure1_slot28 = var2;
    var8 = {};
    var _closure1_slot29 = var8;
    var _closure1_slot30 = var2;
    var2 = var4.bind(var1)();
    var _closure1_slot31 = var1;
    var _closure1_slot32 = var1;
    var2 = 24;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function ApplicationStreamingStore() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot7;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot10;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot9;
                var1 = _closure1_slot33;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 69; continue _fun0009 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 105; continue _fun0009;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot10;
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
 0:
                var6 = arg1;
                var5 = this;
                var4 = var5.syncWith;
                var1 = _closure1_slot18;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    var1 = true;
                    return var1;
                };
                var1 = var4.bind(var5)(var2, var1);
                var4 = var5.waitFor;
                var2 = _closure1_slot13;
                var1 = _closure1_slot18;
                var1 = var4.bind(var5)(var2, var1);
                var2 = null;
                var5 = var2 == var6;
                var1 = undefined;
                var4 = undefined;
                if(var5) { _fun0010_ip = 79; continue _fun0010 }
 73:
                var4 = var6.selfStreamParticipantsHidden;
 79:
                if(!(var1 !== var4)) { _fun0010_ip = 121; continue _fun0010 }
 83:
                var4 = global;
                var5 = var4.Object;
                var4 = var5.assign;
                var3 = _closure1_slot29;
                var7 = var2 == var6;
                var2 = undefined;
                if(var7) { _fun0010_ip = 115; continue _fun0010 }
 109:
                var2 = var6.selfStreamParticipantsHidden;
 115:
                var2 = var4.bind(var5)(var3, var2);
 121:
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
            var1 = {};
            var2 = _closure1_slot29;
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
 0:
                var2 = _closure1_slot29;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0011_ip = 26; continue _fun0011 }
 23:
                var1 = var2;
 26:
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
 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 23;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = _closure1_slot17;
                var3 = var3.bind(var4)(var1);
                var4 = null;
                var1 = null;
                if(!var3) { _fun0012_ip = 94; continue _fun0012 }
 41:
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
                if(!var3) { _fun0012_ip = 94; continue _fun0012 }
 91:
                var1 = var2;
 94:
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
 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 23;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = _closure1_slot17;
                var1 = var3.bind(var4)(var1);
                if(var1) { _fun0013_ip = 43; continue _fun0013 }
 37:
                var1 = new Array(0);
                _fun0013_ip = 74; continue _fun0013;
 43:
                var3 = global;
                var4 = var3.Array;
                var3 = var4.from;
                var5 = _closure1_slot3;
                var2 = var5.values;
                var2 = var2.bind(var5)();
                var1 = var3.bind(var4)(var2);
 74:
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
 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 23;
                var1 = var5[var1];
                var5 = undefined;
                var4 = var4.bind(var5)(var1);
                var1 = _closure1_slot17;
                var1 = var4.bind(var5)(var1);
                if(var1) { _fun0014_ip = 52; continue _fun0014 }
 46:
                var1 = new Array(0);
                _fun0014_ip = 98; continue _fun0014;
 52:
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
 98:
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
 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 23;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = _closure1_slot17;
                var3 = var3.bind(var4)(var1);
                var4 = null;
                var1 = null;
                if(!var3) { _fun0015_ip = 70; continue _fun0015 }
 41:
                var5 = _closure1_slot3;
                var3 = var5.get;
                var2 = arg1;
                var2 = var3.bind(var5)(var2);
                var3 = var4 != var2;
                var1 = null;
                if(!var3) { _fun0015_ip = 70; continue _fun0015 }
 67:
                var1 = var2;
 70:
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
 0:
                var5 = arg1;
                var4 = this;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 23;
                var1 = var6[var1];
                var6 = undefined;
                var3 = var3.bind(var6)(var1);
                var1 = _closure1_slot17;
                var1 = var3.bind(var6)(var1);
                if(!var1) { _fun0016_ip = 105; continue _fun0016 }
 43:
                var1 = null;
                if(!(var1 != var5)) { _fun0016_ip = 105; continue _fun0016 }
 49:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 17;
                var2 = var7[var2];
                var3 = var3.bind(var6)(var2);
                var2 = var3.encodeStreamKey;
                var3 = var2.bind(var3)(var5);
                var2 = var4.getActiveStreamForStreamKey;
                var2 = var2.bind(var4)(var3);
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0016_ip = 103; continue _fun0016 }
 100:
                var1 = var2;
 103:
                return var1;
 105:
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
 0:
                var5 = this;
                var3 = _closure1_slot20;
                var1 = var3.getVoiceChannelId;
                var4 = var1.bind(var3)();
                var3 = _closure1_slot15;
                var1 = var3.getChannel;
                var6 = var1.bind(var3)(var4);
                var1 = null;
                var3 = var1 == var6;
                if(var3) { _fun0017_ip = 79; continue _fun0017 }
 43:
                var4 = var5.getActiveStreamForUser;
                var3 = _closure1_slot14;
                var2 = var3.getId;
                var3 = var2.bind(var3)();
                var2 = var6.getGuildId;
                var2 = var2.bind(var6)();
                var1 = var4.bind(var5)(var3, var2);
 79:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getActiveStreamForUser';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var5 = arg1;
                var4 = this;
                var _closure3_slot0 = var5;
                var3 = var4.getStreamForUser;
                var1 = arg2;
                var3 = var3.bind(var4)(var5, var1);
                var1 = null;
                if(!(var1 == var3)) { _fun0018_ip = 73; continue _fun0018 }
 33:
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
 68:
                var1 = var2;
 71:
                _fun0018_ip = 86; continue _fun0018;
 73:
                var2 = var4.getActiveStreamForApplicationStream;
                var1 = var2.bind(var4)(var3);
 86:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getStreamerActiveStreamMetadata';
        var5['key'] = var7;
        var7 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var6 = this;
                var2 = _closure1_slot20;
                var1 = var2.getVoiceChannelId;
                var4 = var1.bind(var2)();
                var2 = _closure1_slot15;
                var1 = var2.getChannel;
                var7 = var1.bind(var2)(var4);
                var1 = null;
                if(!(var1 != var7)) { _fun0019_ip = 143; continue _fun0019 }
 40:
                var5 = var6.getActiveStreamForUser;
                var4 = _closure1_slot14;
                var2 = var4.getId;
                var4 = var2.bind(var4)();
                var2 = var7.getGuildId;
                var2 = var2.bind(var7)();
                var6 = var5.bind(var6)(var4, var2);
                var4 = var1 == var6;
                var2 = null;
                if(var4) { _fun0019_ip = 141; continue _fun0019 }
 85:
                var4 = _closure1_slot6;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 17;
                var5 = var5[var3];
                var3 = undefined;
                var5 = var7.bind(var3)(var5);
                var3 = var5.encodeStreamKey;
                var3 = var3.bind(var5)(var6);
                var4 = var4[var3];
                var5 = var1 != var4;
                var3 = null;
                if(!var5) { _fun0019_ip = 138; continue _fun0019 }
 135:
                var3 = var4;
 138:
                var2 = var3;
 141:
                return var2;
 143:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getStreamerActiveStreamMetadataForStream';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var2 = _closure1_slot6;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0020_ip = 26; continue _fun0020 }
 23:
                var1 = var2;
 26:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getIsActiveStreamPreviewDisabled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var2 = _closure1_slot6;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0021_ip = 31; continue _fun0021 }
 25:
                var2 = var3.previewDisabled;
 31:
                var1 = var1 != var2;
                if(!var1) { _fun0021_ip = 41; continue _fun0021 }
 38:
                var1 = var2;
 41:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getAnyStreamForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 23;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = _closure1_slot17;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                if(var3) { _fun0022_ip = 41; continue _fun0022 }
 39:
                return var2;
 41:
                var3 = _closure1_slot4;
                var1 = arg1;
                var5 = var3[var1];
                var3 = var2 == var5;
                var1 = null;
                if(var3) { _fun0022_ip = 112; continue _fun0022 }
 61:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.values;
                var5 = var3.bind(var4)(var5);
                var4 = var5.find;
                var3 = function(arg1) {
                    var3 = _closure1_slot39;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0022_ip = 109; continue _fun0022 }
 106:
                var2 = var3;
 109:
                var1 = var2;
 112:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getAnyDiscoverableStreamForUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 23;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = _closure1_slot17;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                if(var3) { _fun0023_ip = 41; continue _fun0023 }
 39:
                return var2;
 41:
                var3 = _closure1_slot4;
                var1 = arg1;
                var5 = var3[var1];
                var3 = var2 == var5;
                var1 = null;
                if(var3) { _fun0023_ip = 112; continue _fun0023 }
 61:
                var3 = global;
                var4 = var3.Object;
                var3 = var4.values;
                var5 = var3.bind(var4)(var5);
                var4 = var5.find;
                var3 = function(arg1) {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                        var2 = arg1;
                        var3 = _closure1_slot39;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        if(!var1) { _fun0024_ip = 32; continue _fun0024 }
 20:
                        var3 = var2.discoverable;
                        var2 = false;
                        var1 = var2 !== var3;
 32:
                        return var1;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0023_ip = 109; continue _fun0023 }
 106:
                var2 = var3;
 109:
                var1 = var2;
 112:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getStreamForUser';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var6 = arg2;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 23;
                var1 = var3[var1];
                var5 = undefined;
                var2 = var2.bind(var5)(var1);
                var1 = _closure1_slot17;
                var1 = var2.bind(var5)(var1);
                var2 = null;
                if(var1) { _fun0025_ip = 44; continue _fun0025 }
 42:
                return var2;
 44:
                var3 = _closure1_slot4;
                var1 = arg1;
                var1 = var3[var1];
                var7 = var2 == var1;
                var3 = undefined;
                if(var7) { _fun0025_ip = 76; continue _fun0025 }
 64:
                if(!(var2 == var6)) { _fun0025_ip = 72; continue _fun0025 }
 68:
                var6 = _closure1_slot25;
 72:
                var3 = var1[var6];
 76:
                var6 = var2 == var3;
                var1 = null;
                if(var6) { _fun0025_ip = 105; continue _fun0025 }
 85:
                var4 = _closure1_slot39;
                var4 = var4.bind(var5)(var3);
                var2 = null;
                if(!var4) { _fun0025_ip = 102; continue _fun0025 }
 99:
                var2 = var3;
 102:
                var1 = var2;
 105:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getRTCStream';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 23;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = _closure1_slot17;
                var3 = var3.bind(var4)(var1);
                var4 = null;
                var1 = null;
                if(!var3) { _fun0026_ip = 64; continue _fun0026 }
 41:
                var3 = _closure1_slot5;
                var2 = arg1;
                var2 = var3[var2];
                var3 = var4 != var2;
                var1 = null;
                if(!var3) { _fun0026_ip = 64; continue _fun0026 }
 61:
                var1 = var2;
 64:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'getAllApplicationStreams';
        var5['key'] = var7;
        var7 = function value() {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 23;
                var1 = var3[var1];
                var3 = undefined;
                var4 = var4.bind(var3)(var1);
                var1 = _closure1_slot17;
                var1 = var4.bind(var3)(var1);
                if(var1) { _fun0027_ip = 43; continue _fun0027 }
 37:
                var1 = new Array(0);
                _fun0027_ip = 68; continue _fun0027;
 43:
                var2 = _closure1_slot37;
                var4 = var2.bind(var3)();
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                        var2 = arg1;
                        var1 = null;
                        var1 = var1 != var2;
                        if(!var1) { _fun0028_ip = 38; continue _fun0028 }
 12:
                        var5 = _closure1_slot38;
                        var4 = var2.streamType;
                        var3 = var2.channelId;
                        var2 = undefined;
                        var1 = var5.bind(var2)(var4, var3);
 38:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
 68:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getAllApplicationStreamsForChannel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 23;
                var1 = var4[var1];
                var4 = undefined;
                var5 = var5.bind(var4)(var1);
                var1 = _closure1_slot17;
                var1 = var5.bind(var4)(var1);
                if(var1) { _fun0029_ip = 52; continue _fun0029 }
 46:
                var1 = new Array(0);
                _fun0029_ip = 75; continue _fun0029;
 52:
                var3 = _closure1_slot37;
                var4 = var3.bind(var4)();
                var3 = var4.filter;
                var2 = function(arg1) {
                    _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                        var2 = arg1;
                        var1 = null;
                        var1 = var1 != var2;
                        if(!var1) { _fun0030_ip = 28; continue _fun0030 }
 12:
                        var4 = var2.channelId;
                        var3 = _closure3_slot0;
                        var1 = var4 === var3;
 28:
                        if(!var1) { _fun0030_ip = 57; continue _fun0030 }
 31:
                        var5 = _closure1_slot38;
                        var4 = var2.streamType;
                        var3 = var2.channelId;
                        var2 = undefined;
                        var1 = var5.bind(var2)(var4, var3);
 57:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2);
 75:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getViewerIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                var5 = arg1;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 23;
                var1 = var4[var1];
                var6 = undefined;
                var2 = var2.bind(var6)(var1);
                var1 = _closure1_slot17;
                var1 = var2.bind(var6)(var1);
                if(var1) { _fun0031_ip = 46; continue _fun0031 }
 40:
                var1 = new Array(0);
                return var1;
 46:
                var2 = 'string';
                var1 = typeof var5;
                var4 = var5;
                if(!(var2 !== var1)) { _fun0031_ip = 91; continue _fun0031 }
 60:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 17;
                var1 = var7[var1];
                var2 = var2.bind(var6)(var1);
                var1 = var2.encodeStreamKey;
                var4 = var1.bind(var2)(var5);
 91:
                var1 = null;
                var5 = var1 != var4;
                var2 = null;
                if(!var5) { _fun0031_ip = 110; continue _fun0031 }
 102:
                var3 = _closure1_slot5;
                var2 = var3[var4];
 110:
                if(!(var1 == var2)) { _fun0031_ip = 120; continue _fun0031 }
 114:
                var1 = new Array(0);
                _fun0031_ip = 126; continue _fun0031;
 120:
                var1 = var2.viewerIds;
 126:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'getCurrentAppIntent';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot30;
            return var1;
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'getStreamingState';
        var5['key'] = var7;
        var6 = function value() {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 23;
                var1 = var4[var1];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = _closure1_slot17;
                var1 = var2.bind(var4)(var1);
                var2 = {};
                if(var1) { _fun0032_ip = 74; continue _fun0032 }
 39:
                var1 = new Array(0);
                var2['activeStreams'] = var1;
                var1 = {};
                var2['streamsByUserAndGuild'] = var1;
                var1 = {};
                var2['rtcStreams'] = var1;
                var1 = {};
                var2['streamerActiveStreamMetadatas'] = var1;
                var1 = var2;
                _fun0032_ip = 141; continue _fun0032;
 74:
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
 141:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[21] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ApplicationStreamingStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 25;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleSetGoLiveSource(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
            var1 = arg1;
            var2 = var1.settings;
            var15 = var1.endReason;
            var14 = var1.errorCode;
            var13 = null;
            var4 = var13 == var2;
            var3 = undefined;
            if(var4) { _fun0033_ip = 38; continue _fun0033 }
 32:
            var3 = var2.desktopSettings;
 38:
            if(!(var13 == var3)) { _fun0033_ip = 200; continue _fun0033 }
 45:
            var3 = var13 == var2;
            var1 = undefined;
            if(var3) { _fun0033_ip = 60; continue _fun0033 }
 54:
            var1 = var2.cameraSettings;
 60:
            if(!(var13 == var1)) { _fun0033_ip = 200; continue _fun0033 }
 67:
            if(!(var13 != var14)) { _fun0033_ip = 196; continue _fun0033 }
 74:
            var11 = _closure1_slot6;
            var2 = false;
            var6 = 'state';
            var5 = 'endReason';
            var4 = 'errorCode';
            var1 = false;
            for(var7 in var11)
 105:
            {
                var1 = var2;
 117:
                var19 = var7;
                var17 = _closure1_slot3;
                var16 = var17.get;
                var20 = var16.bind(var17)(var19);
                if(var13 == var20) { _fun0033_ip = 105; continue _fun0033 }
 138:
                var18 = _closure1_slot3;
                var17 = var18.set;
                var16 = {};
                var22 = var16;
                var21 = var20;
                var20 = copyDataProperties(var22, var21);
                var20 = _closure1_slot22;
                var20 = var20.FAILED;
                var16[var6] = var20;
                var16[var5] = var15;
                var16[var4] = var14;
                var16 = var17.bind(var18)(var19, var16);
                var2 = true;
                _fun0033_ip = 105; continue _fun0033;
            }
 194:
            return var1;
 196:
            var1 = false;
            return var1;
 200:
            var1 = false;
            return var1;
        }
    };
    var2['MEDIA_ENGINE_SET_GO_LIVE_SOURCE'] = var11;
    var11 = function handleNativePickerUpdate(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
            var2 = arg1;
            var1 = var2.existing;
            var3 = var2.content;
            var12 = null;
            if(!(var12 != var3)) { _fun0034_ip = 421; continue _fun0034 }
 23:
            var5 = _closure1_slot34;
            var4 = var3.applications;
            var2 = undefined;
            var7 = var5.bind(var2)(var4);
            var5 = var7.bind(var2)();
            var4 = var5.done;
            var6 = var5;
            if(var4) { _fun0034_ip = 102; continue _fun0034 }
 58:
            var4 = var6.value;
            var8 = _closure1_slot13;
            var5 = var8.getGameForPID;
            var4 = var4.id;
            var5 = var5.bind(var8)(var4);
            if(!(var12 == var5)) { _fun0034_ip = 201; continue _fun0034 }
 87:
            var8 = var7.bind(var2)();
            var4 = var8.done;
            var6 = var8;
            if(!var4) { _fun0034_ip = 58; continue _fun0034 }
 102:
            var6 = _closure1_slot34;
            var4 = var3.windows;
            var8 = var6.bind(var2)(var4);
            var6 = var8.bind(var2)();
            var4 = var6.done;
            var7 = var6;
            var6 = undefined;
            var5 = undefined;
            if(var4) { _fun0034_ip = 201; continue _fun0034 }
 136:
            var4 = var7.value;
            var9 = var4.owningApplication;
            if(!(var12 != var9)) { _fun0034_ip = 184; continue _fun0034 }
 151:
            var10 = _closure1_slot13;
            var9 = var10.getGameForPID;
            var4 = var4.owningApplication;
            var4 = var4.id;
            var6 = var9.bind(var10)(var4);
            var5 = var6;
            if(!(var12 == var5)) { _fun0034_ip = 201; continue _fun0034 }
 184:
            var9 = var8.bind(var2)();
            var4 = var9.done;
            var7 = var9;
            var5 = undefined;
            if(!var4) { _fun0034_ip = 136; continue _fun0034 }
 201:
            _closure1_slot32 = var5;
            var6 = var12 == var5;
            var4 = undefined;
            if(var6) { _fun0034_ip = 220; continue _fun0034 }
 214:
            var4 = var5.pid;
 220:
            _closure1_slot31 = var4;
            if(var1) { _fun0034_ip = 231; continue _fun0034 }
 227:
            var1 = false;
            return var1;
 231:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 19;
            var1 = var5[var1];
            var1 = var4.bind(var2)(var1);
            var1 = var1.bind(var2)(var3);
            var10 = {};
            var3 = _closure1_slot31;
            var10['pid'] = var3;
            var3 = _closure1_slot32;
            var4 = var12 == var3;
            var2 = undefined;
            if(var4) { _fun0034_ip = 285; continue _fun0034 }
 280:
            var2 = var3.id;
 285:
            var10['id'] = var2;
            if(!(var12 != var1)) { _fun0034_ip = 299; continue _fun0034 }
 293:
            var10['sourceName'] = var1;
 299:
            var8 = _closure1_slot6;
            var2 = false;
            var3 = 'prepicked:';
            var1 = false;
            for(var5 in var8)
 321:
            {
                var1 = var2;
 333:
                var15 = var5;
                var13 = _closure1_slot6;
                var14 = var13[var15];
                var13 = var12 != var14;
                var16 = var14;
                if(!var13) { _fun0034_ip = 367; continue _fun0034 }
 354:
                var14 = var14.sourceId;
                var13 = var12 != var14;
                var16 = var14;
 367:
                if(!var13) { _fun0034_ip = 381; continue _fun0034 }
 370:
                var14 = var16.startsWith;
                var13 = var14.bind(var16)(var3);
 381:
                if(!var13) { _fun0034_ip = 321; continue _fun0034 }
 384:
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
                _fun0034_ip = 321; continue _fun0034;
            }
 419:
            return var1;
 421:
            var1 = false;
            return var1;
        }
    };
    var2['NATIVE_SCREEN_SHARE_PICKER_UPDATE'] = var11;
    var11 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var1 = var1.applicationStreamState;
        var3 = var1.streamsByUserAndGuild;
        _closure1_slot4 = var3;
        var3 = global;
        var5 = var3.Map;
        var6 = var1.activeStreams;
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var7 = var4;
        var3 = new var7[var5](var6, var5);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot3 = var3;
        var3 = var1.rtcStreams;
        _closure1_slot5 = var3;
        var1 = var1.streamerActiveStreamMetadatas;
        _closure1_slot6 = var1;
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
 0:
                var8 = arg1;
                var1 = arg2;
                var6 = var1.userId;
                var4 = var1.guildId;
                var2 = var1.channelId;
                var7 = var1.sessionId;
                var3 = var1.selfStream;
                var1 = var1.discoverable;
                if(!var3) { _fun0035_ip = 51; continue _fun0035 }
 42:
                var5 = null;
                if(!(var5 == var2)) { _fun0035_ip = 175; continue _fun0035 }
 51:
                var11 = _closure1_slot14;
                var3 = var11.getSessionId;
                var3 = var3.bind(var11)();
                var10 = var11.getId;
                var10 = var10.bind(var11)();
                if(!(var6 === var10)) { _fun0035_ip = 109; continue _fun0035 }
 82:
                if(!(var7 !== var3)) { _fun0035_ip = 109; continue _fun0035 }
 86:
                var7 = _closure1_slot19;
                var3 = var7.getChannelId;
                var10 = var3.bind(var7)();
                var7 = null;
                var3 = var8;
                if(!(var7 == var10)) { _fun0035_ip = 173; continue _fun0035 }
 109:
                var11 = null;
                var10 = var4;
                if(!(var11 == var10)) { _fun0035_ip = 122; continue _fun0035 }
 118:
                var10 = _closure1_slot25;
 122:
                var7 = _closure1_slot4;
                var12 = var7[var6];
                var13 = var11 == var12;
                var7 = undefined;
                if(var13) { _fun0035_ip = 143; continue _fun0035 }
 139:
                var7 = var12[var10];
 143:
                var7 = var11 != var7;
                if(!var7) { _fun0035_ip = 164; continue _fun0035 }
 150:
                var9 = _closure1_slot4;
                var9 = var9[var6];
                var9 = delete var9[var10];
                var7 = true;
 164:
                if(var7) { _fun0035_ip = 170; continue _fun0035 }
 167:
                var7 = var8;
 170:
                var3 = var7;
 173:
                return var3;
 175:
                var3 = {};
                if(!(var5 == var4)) { _fun0035_ip = 196; continue _fun0035 }
 181:
                var7 = _closure1_slot27;
                var7 = var7.CALL;
                _fun0035_ip = 209; continue _fun0035;
 196:
                var8 = _closure1_slot27;
                var7 = var8.GUILD;
 209:
                var3['streamType'] = var7;
                var3['ownerId'] = var6;
                var3['guildId'] = var4;
                var3['channelId'] = var2;
                var3['discoverable'] = var1;
                var2 = _closure1_slot4;
                var1 = var3.ownerId;
                var1 = var2[var1];
                if(!(var5 == var1)) { _fun0035_ip = 269; continue _fun0035 }
 253:
                var6 = _closure1_slot4;
                var2 = var3.ownerId;
                var1 = {};
                var6[var2] = var1;
 269:
                var2 = _closure1_slot4;
                var1 = var3.ownerId;
                var2 = var2[var1];
                var1 = var3.guildId;
                if(!(var5 == var1)) { _fun0035_ip = 296; continue _fun0035 }
 292:
                var1 = _closure1_slot25;
 296:
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
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
            var1 = arg1;
            var7 = var1.streamKey;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 17;
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
            var4[var8] = var9;
            var4 = var5.bind(var6)(var7, var4);
            var5 = var2.ownerId;
            var6 = _closure1_slot14;
            var4 = var6.getId;
            var4 = var4.bind(var6)();
            if(!(var5 === var4)) { _fun0036_ip = 144; continue _fun0036 }
 129:
            var4 = _closure1_slot29;
            var3 = var2.channelId;
            var2 = false;
            var4[var3] = var2;
 144:
            return var1;
        }
    };
    var2['STREAM_WATCH'] = var11;
    var11 = function handleStreamStart(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
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
            var1 = 17;
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
            if(!var2) { _fun0037_ip = 151; continue _fun0037 }
 134:
            var16 = var4.startsWith;
            var15 = 'prepicked:';
            var2 = var16.bind(var4)(var15);
 151:
            if(!var2) { _fun0037_ip = 158; continue _fun0037 }
 154:
            var2 = var14 == var13;
 158:
            if(!var2) { _fun0037_ip = 165; continue _fun0037 }
 161:
            var13 = _closure1_slot31;
 165:
            if(!(var14 != var4)) { _fun0037_ip = 197; continue _fun0037 }
 169:
            var15 = var4.startsWith;
            var2 = 'prepicked:';
            var2 = var15.bind(var4)(var2);
            if(!var2) { _fun0037_ip = 197; continue _fun0037 }
 189:
            var2 = _closure1_slot32;
            if(!(var14 == var2)) { _fun0037_ip = 261; continue _fun0037 }
 197:
            if(!(var14 == var13)) { _fun0037_ip = 244; continue _fun0037 }
 201:
            var15 = var14 != var4;
            var2 = null;
            if(!var15) { _fun0037_ip = 242; continue _fun0037 }
 210:
            var16 = _closure1_slot13;
            var15 = var16.getRunningGames;
            var16 = var15.bind(var16)();
            var15 = var16.find;
            var3 = function(arg1) {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 18;
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
 242:
            _fun0037_ip = 259; continue _fun0037;
 244:
            var15 = _closure1_slot13;
            var3 = var15.getGameForPID;
            var2 = var3.bind(var15)(var13);
 259:
            _fun0037_ip = 265; continue _fun0037;
 261:
            var2 = _closure1_slot32;
 265:
            var3 = var14 != var2;
            var15 = null;
            if(!var3) { _fun0037_ip = 277; continue _fun0037 }
 274:
            var15 = var2;
 277:
            var3 = _closure1_slot6;
            var2 = {};
            var16 = var14 == var15;
            var14 = undefined;
            if(var16) { _fun0037_ip = 297; continue _fun0037 }
 292:
            var14 = var15.id;
 297:
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
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
            var1 = arg1;
            var4 = var1.streamKey;
            var2 = _closure1_slot3;
            var1 = var2.get;
            var6 = var1.bind(var2)(var4);
            var1 = null;
            if(!(var1 != var6)) { _fun0038_ip = 82; continue _fun0038 }
 32:
            var3 = _closure1_slot3;
            var2 = var3.set;
            var1 = {};
            var8 = var1;
            var7 = var6;
            var6 = copyDataProperties(var8, var7);
            var5 = _closure1_slot22;
            var6 = var5.FAILED;
            var5 = 'state';
            var1[var5] = var6;
            var1 = var2.bind(var3)(var4, var1);
            var1 = undefined;
            return var1;
 82:
            var1 = false;
            return var1;
        }
    };
    var2['STREAM_TIMED_OUT'] = var10;
    var10 = function handleStreamDelete(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
            var1 = arg1;
            var3 = var1.streamKey;
            var6 = var1.unavailable;
            var9 = var1.reason;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var5 = _closure1_slot5;
            var5 = delete var5[var3];
            var7 = _closure1_slot3;
            var5 = var7.get;
            var8 = var5.bind(var7)(var3);
            var5 = null;
            if(!(var5 != var8)) { _fun0039_ip = 358; continue _fun0039 }
 63:
            var5 = _closure1_slot22;
            var5 = var5.ENDED;
            if(var6) { _fun0039_ip = 273; continue _fun0039 }
 79:
            var6 = _closure1_slot24;
            var6 = var6.UNAUTHORIZED;
            if(!(var9 !== var6)) { _fun0039_ip = 261; continue _fun0039 }
 96:
            var6 = _closure1_slot24;
            var6 = var6.SAFETY_GUILD_RATE_LIMITED;
            if(!(var9 !== var6)) { _fun0039_ip = 164; continue _fun0039 }
 110:
            var7 = var8.state;
            var6 = _closure1_slot22;
            var6 = var6.FAILED;
            var6 = var7 === var6;
            if(!var6) { _fun0039_ip = 146; continue _fun0039 }
 132:
            var7 = _closure1_slot24;
            var7 = var7.USER_REQUESTED;
            var6 = var9 === var7;
 146:
            if(!var6) { _fun0039_ip = 283; continue _fun0039 }
 152:
            var6 = _closure1_slot22;
            var5 = var6.FAILED;
            _fun0039_ip = 283; continue _fun0039;
 164:
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = 17;
            var7 = var6[var7];
            var10 = var9.bind(var1)(var7);
            var7 = var10.decodeStreamKey;
            var7 = var7.bind(var10)(var3);
            var7 = var7.guildId;
            _closure2_slot0 = var7;
            var7 = 21;
            var7 = var6[var7];
            var9 = var9.bind(var1)(var7);
            var7 = 20;
            var7 = var6[var7];
            var6 = var6.paths;
            var7 = var9.bind(var1)(var7, var6);
            var6 = var7.then;
            var4 = function(arg1) {
                var1 = arg1;
                var3 = var1.default;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = var6.bind(var7)(var4);
            var4 = _closure1_slot22;
            var5 = var4.ENDED;
            _fun0039_ip = 283; continue _fun0039;
 261:
            var4 = _closure1_slot22;
            var5 = var4.FAILED;
            _fun0039_ip = 283; continue _fun0039;
 273:
            var4 = _closure1_slot22;
            var5 = var4.RECONNECTING;
 283:
            var7 = _closure1_slot3;
            var6 = var7.set;
            var4 = {};
            var12 = var4;
            var11 = var8;
            var8 = copyDataProperties(var12, var11);
            var8 = 'state';
            var4[var8] = var5;
            var4 = var6.bind(var7)(var3, var4);
            var4 = _closure1_slot22;
            var4 = var4.ENDED;
            var4 = var5 === var4;
            if(!var4) { _fun0039_ip = 344; continue _fun0039 }
 336:
            var5 = _closure1_slot28;
            var4 = var5 !== var3;
 344:
            if(!var4) { _fun0039_ip = 356; continue _fun0039 }
 347:
            var2 = _closure1_slot36;
            var2 = var2.bind(var1)(var3);
 356:
            return var1;
 358:
            var1 = false;
            return var1;
        }
    };
    var2['STREAM_DELETE'] = var10;
    var10 = function handleStreamClose(arg1) {
        var1 = arg1;
        var3 = var1.streamKey;
        var2 = _closure1_slot36;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['STREAM_CLOSE'] = var10;
    var10 = function handleUpdateSelfStreamHidden(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = var1.selfStreamHidden;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 17;
            var5 = var5[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var5);
            var6 = var7.isStreamKey;
            var5 = _closure1_slot28;
            var5 = var6.bind(var7)(var5);
            var8 = undefined;
            if(!var5) { _fun0040_ip = 72; continue _fun0040 }
 59:
            var6 = _closure1_slot28;
            var7 = null;
            var5 = var7 != var6;
            var8 = var6;
 72:
            if(!var5) { _fun0040_ip = 99; continue _fun0040 }
 75:
            var7 = var8.includes;
            var9 = _closure1_slot14;
            var6 = var9.getId;
            var6 = var6.bind(var9)();
            var5 = var7.bind(var8)(var6);
 99:
            if(!var5) { _fun0040_ip = 116; continue _fun0040 }
 102:
            var6 = _closure1_slot29;
            var7 = var6[var4];
            var6 = false;
            var5 = var6 === var7;
 116:
            if(!var5) { _fun0040_ip = 125; continue _fun0040 }
 119:
            var6 = true;
            var5 = var6 === var3;
 125:
            if(!var5) { _fun0040_ip = 134; continue _fun0040 }
 128:
            var5 = null;
            _closure1_slot28 = var5;
 134:
            var2 = _closure1_slot29;
            var2[var4] = var3;
            return var1;
        }
    };
    var2['STREAM_UPDATE_SELF_HIDDEN'] = var10;
    var10 = function handleStreamSetAppIntent(arg1) {
        var1 = arg1;
        var2 = var1.intent;
        _closure1_slot30 = var2;
        var1 = undefined;
        return var1;
    };
    var2['SET_STREAM_APP_INTENT'] = var10;
    var10 = function handleRTCConnectionState(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
            var1 = arg1;
            var4 = var1.streamKey;
            var3 = var1.state;
            var2 = null;
            if(!(var2 != var4)) { _fun0041_ip = 228; continue _fun0041 }
 23:
            var6 = _closure1_slot3;
            var5 = var6.get;
            var5 = var5.bind(var6)(var4);
            if(!(var2 != var5)) { _fun0041_ip = 224; continue _fun0041 }
 47:
            var6 = var5.state;
            var2 = _closure1_slot22;
            var2 = var2.ENDED;
            if(!(var6 !== var2)) { _fun0041_ip = 224; continue _fun0041 }
 69:
            var6 = var5.state;
            var2 = _closure1_slot22;
            var2 = var2.FAILED;
            if(!(var6 === var2)) { _fun0041_ip = 112; continue _fun0041 }
 88:
            var6 = var5.ownerId;
            var7 = _closure1_slot14;
            var2 = var7.getId;
            var2 = var2.bind(var7)();
            if(!(var6 !== var2)) { _fun0041_ip = 220; continue _fun0041 }
 112:
            var6 = var5.state;
            var2 = _closure1_slot23;
            var2 = var2.DISCONNECTED;
            if(!(var2 !== var3)) { _fun0041_ip = 157; continue _fun0041 }
 131:
            var2 = _closure1_slot23;
            var2 = var2.RTC_CONNECTED;
            if(!(var2 === var3)) { _fun0041_ip = 167; continue _fun0041 }
 145:
            var2 = _closure1_slot22;
            var6 = var2.ACTIVE;
            _fun0041_ip = 167; continue _fun0041;
 157:
            var2 = _closure1_slot22;
            var6 = var2.RECONNECTING;
 167:
            var2 = var5.state;
            if(!(var6 !== var2)) { _fun0041_ip = 216; continue _fun0041 }
 176:
            var3 = _closure1_slot3;
            var2 = var3.set;
            var1 = {};
            var9 = var1;
            var8 = var5;
            var5 = copyDataProperties(var9, var8);
            var5 = 'state';
            var1[var5] = var6;
            var1 = var2.bind(var3)(var4, var1);
            var1 = undefined;
            return var1;
 216:
            var1 = false;
            return var1;
 220:
            var1 = false;
            return var1;
 224:
            var1 = false;
            return var1;
 228:
            var1 = false;
            return var1;
        }
    };
    var2['RTC_CONNECTION_STATE'] = var10;
    var9 = function handleStreamCloseAll(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
            var1 = arg1;
            var6 = var1.id;
            var3 = var1.channelId;
            _closure1_slot28 = var6;
            var2 = global;
            var5 = var2.Array;
            var4 = var5.from;
            var7 = _closure1_slot3;
            var2 = var7.values;
            var2 = var2.bind(var7)();
            var5 = var4.bind(var5)(var2);
            var4 = var5.forEach;
            var2 = function(arg1) {
                _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
                    var5 = arg1;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 17;
                    var3 = var1[var6];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.encodeStreamKey;
                    var4 = var3.bind(var4)(var5);
                    var3 = _closure1_slot28;
                    var3 = var4 !== var3;
                    if(!var3) { _fun0043_ip = 69; continue _fun0043 }
 50:
                    var7 = var5.state;
                    var4 = _closure1_slot22;
                    var4 = var4.ENDED;
                    var3 = var7 === var4;
 69:
                    if(!var3) { _fun0043_ip = 109; continue _fun0043 }
 72:
                    var3 = _closure1_slot36;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.encodeStreamKey;
                    var2 = var2.bind(var4)(var5);
                    var2 = var3.bind(var1)(var2);
 109:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var2 = null;
            var2 = var2 != var6;
            if(!var2) { _fun0042_ip = 110; continue _fun0042 }
 77:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 17;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var7.bind(var4)(var5);
            var4 = var5.isStreamKey;
            var2 = var4.bind(var5)(var6);
 110:
            if(!var2) { _fun0042_ip = 137; continue _fun0042 }
 113:
            var5 = var6.includes;
            var7 = _closure1_slot14;
            var4 = var7.getId;
            var4 = var4.bind(var7)();
            var2 = var5.bind(var6)(var4);
 137:
            if(!var2) { _fun0042_ip = 150; continue _fun0042 }
 140:
            var2 = _closure1_slot29;
            var1 = false;
            var2[var3] = var1;
 150:
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
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/ApplicationStreamingStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();