// app/modules/voice_filters/VoiceFilterStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
            if(var2) { _fun0002_ip = 344; continue _fun0002 }
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
            var9 = _closure1_slot15;
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
            var7 = _closure1_slot15;
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
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var _closure1_slot15 = var1;
    var1 = function getVoicePriority(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var3 = var2.available;
            var1 = 0;
            if(var3) { _fun0005_ip = 32; continue _fun0005 }
 14:
            var3 = var2.temporarilyAvailable;
            var2 = 2;
            if(!var3) { _fun0005_ip = 29; continue _fun0005 }
 26:
            var2 = 1;
 29:
            var1 = var2;
 32:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function getCurrentTemporarilyAvailableVoices(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0006_ip = 186; continue _fun0006 }
 12:
            var4 = global;
            var1 = var4.Date;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var10 = var2;
            var1 = new var10[var1](var9);
            var1 = var1 instanceof Object ? var1 : var2;
            var6 = var4.Date;
            var9 = var3.current_set_start;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var10 = var5;
            var2 = new var10[var6](var9, var8);
            var6 = var2 instanceof Object ? var2 : var5;
            var7 = var4.Date;
            var9 = var3.current_set_end;
            var5 = var7.prototype;
            var5 = Object.create(var5, {constructor: {value: var7}});
            var10 = var5;
            var2 = new var10[var7](var9, var8);
            var2 = var2 instanceof Object ? var2 : var5;
            var8 = var4.Date;
            var9 = var3.next_set_start;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var10 = var7;
            var5 = new var10[var8](var9, var8);
            var5 = var5 instanceof Object ? var5 : var7;
            var8 = var4.Date;
            var9 = var3.next_set_end;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var10 = var7;
            var4 = new var10[var8](var9, var8);
            var4 = var4 instanceof Object ? var4 : var7;
            if(!(var1 >= var6)) { _fun0006_ip = 178; continue _fun0006 }
 174:
            if(!(!(var1 < var2))) { _fun0006_ip = 228; continue _fun0006 }
 178:
            if(!(var1 >= var5)) { _fun0006_ip = 186; continue _fun0006 }
 182:
            if(!(!(var1 < var4))) { _fun0006_ip = 206; continue _fun0006 }
 186:
            var1 = {};
            var5 = new Array(0);
            var1['currentSet'] = var5;
            var5 = undefined;
            var1['catalogUpdateTime'] = var5;
            return var1;
 206:
            var1 = {};
            var5 = var3.next_set;
            var1['currentSet'] = var5;
            var1['catalogUpdateTime'] = var4;
            return var1;
 228:
            var1 = {};
            var3 = var3.current_set;
            var1['currentSet'] = var3;
            var1['catalogUpdateTime'] = var2;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function sortVoiceFilters(arg1) {
        var2 = global;
        var4 = var2.Object;
        var3 = var4.entries;
        var2 = arg1;
        var4 = var3.bind(var4)(var2);
        var3 = var4.sort;
        var2 = function(arg1, arg2) {
            var4 = _closure1_slot16;
            var1 = arg1;
            var5 = 1;
            var1 = var1[var5];
            var3 = undefined;
            var2 = var4.bind(var3)(var1);
            var1 = arg2;
            var1 = var1[var5];
            var1 = var4.bind(var3)(var1);
            var1 = var2 - var1;
            return var1;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = arg1;
                var2 = var1[Symbol.iterator];
                var1 = var2().next;
                var4 = var1().value;
                var3 = var2;
                var1 = undefined;
                var3 = var3 === var1;
                if(var3) { _fun0007_ip = 25; continue _fun0007 }
 22:
                var1 = var4;
 25:
                if(var3) { _fun0007_ip = 31; continue _fun0007 }
 28:
                var2.return();
 31:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot18 = var1;
    var10 = function handleUpdateLimitedTimeVoices() {
        var5 = _closure1_slot17;
        var1 = _closure1_slot11;
        var4 = var1.limitedTimeVoices;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var _closure2_slot0 = var4;
        var5 = _closure1_slot11;
        var4 = var4.catalogUpdateTime;
        var5['catalogUpdateTime'] = var4;
        var4 = global;
        var6 = var4.Object;
        var5 = var6.keys;
        var4 = _closure1_slot11;
        var4 = var4.voiceFilters;
        var5 = var5.bind(var6)(var4);
        var4 = var5.forEach;
        var3 = function(arg1) {
            var4 = arg1;
            var1 = _closure1_slot11;
            var1 = var1.voiceFilters;
            var2 = var1[var4];
            var1 = _closure2_slot0;
            var3 = var1.currentSet;
            var1 = var3.includes;
            var1 = var1.bind(var3)(var4);
            var2['temporarilyAvailable'] = var1;
            var1 = undefined;
            return var1;
        };
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot11;
        var4 = _closure1_slot18;
        var2 = var3.voiceFilters;
        var2 = var4.bind(var1)(var2);
        var3['sortedVoiceFilters'] = var2;
        return var1;
    };
    var _closure1_slot19 = var10;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.voiceFilterContent;
    var _closure1_slot8 = var2;
    var2 = {};
    var4 = 'ERROR_DOWNLOADING_DEPENDENCY';
    var2['ERROR_DOWNLOADING_DEPENDENCY'] = var4;
    var4 = 'ERROR_ACTIVATING_VOICE_FILTER';
    var2['ERROR_ACTIVATING_VOICE_FILTER'] = var4;
    var _closure1_slot9 = var2;
    var4 = 6;
    var4 = var7[var4];
    var9 = var8.bind(var1)(var4);
    var4 = var9.prototype;
    var11 = Object.create(var4, {constructor: {value: var9}});
    var4 = 'VoiceFilterStore';
    var16 = var11;
    var15 = var4;
    var9 = new var16[var9](var15, var14);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot10 = var9;
    var11 = {};
    var9 = 7;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var9 = var9.VoiceFilterNativeModuleState;
    var9 = var9.UNINITIALIZED;
    var11['nativeVoiceFilterModuleState'] = var9;
    var9 = {};
    var11['models'] = var9;
    var9 = {};
    var11['voiceFilters'] = var9;
    var9 = {};
    var11['modelState'] = var9;
    var9 = new Array(0);
    var11['sortedVoiceFilters'] = var9;
    var9 = false;
    var11['catalogFetchFailed'] = var9;
    var11['catalogLastFetchTime'] = var1;
    var11['catalogUpdateTime'] = var1;
    var11['limitedTimeVoices'] = var1;
    var9 = null;
    var11['error'] = var9;
    var _closure1_slot11 = var11;
    var _closure1_slot12 = var9;
    var9 = 10;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var11 = var9.Store;
    var9 = function(arg1) {
        var4 = function VoiceFilterStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 69; continue _fun0008 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 105; continue _fun0008;
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
        var1 = 'getVoiceFilterModels';
        var5['key'] = var1;
        var1 = function value() {
            var1 = _closure1_slot11;
            var1 = var1.models;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(17);
        var1[0] = var5;
        var5 = {};
        var7 = 'getVoiceFilters';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            var1 = var1.voiceFilters;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getVoiceFilter';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = _closure1_slot11;
            var2 = var1.voiceFilters;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getModelState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = _closure1_slot11;
            var2 = var1.modelState;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getOngoingDownloads';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.fromEntries;
            var5 = var1.Object;
            var4 = var5.entries;
            var1 = _closure1_slot11;
            var1 = var1.modelState;
            var5 = var4.bind(var5)(var1);
            var4 = var5.filter;
            var1 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var6 = arg1;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var7 = undefined;
                    var3 = undefined;
                    var5 = undefined;
                    var8 = var6().value;
                    var9 = var2;
                    var9 = var9 === var7;
                    var3 = var9;
                    if(var9) { _fun0009_ip = 32; continue _fun0009 }
 29:
                    var5 = var8;
 32:
                    var5 = undefined;
                    var8 = var3;
                    if(var8) { _fun0009_ip = 60; continue _fun0009 }
 40:
                    var6 = var6().value;
                    var8 = var2;
                    var8 = var8 === var7;
                    var3 = var8;
                    if(var8) { _fun0009_ip = 60; continue _fun0009 }
 57:
                    var5 = var6;
 60: // try_start_0
                    var4 = var5.status;
 65: // try_end0
                    var5 = var3;
                    if(var5) { _fun0009_ip = 74; continue _fun0009 }
 71:
                    var2.return();
 74:
                    var5 = var4;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 7;
                    var4 = var8[var4];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.VoiceFilterModelStatus;
                    var4 = var4.DOWNLOADING;
                    var4 = var5 === var4;
                    return var4;
 118: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _fun0009_ip = 124; continue _fun0009;
 122:
                    CatchBlockStart(arg_register=0);
 124:
                    if(var3) { _fun0009_ip = 130; continue _fun0009 }
 127:
                    var2.return();
 130:
                    throw var1;
                }
            };
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isVoiceFilterDownloaded';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.values;
                var1 = _closure1_slot11;
                var4 = var1.voiceFilters;
                var1 = arg1;
                var5 = var4[var1];
                var4 = null;
                var6 = var4 == var5;
                var1 = undefined;
                if(var6) { _fun0010_ip = 52; continue _fun0010 }
 44:
                var1 = var5.modelIds;
 52:
                if(!(var4 == var1)) { _fun0010_ip = 58; continue _fun0010 }
 56:
                var1 = {};
 58:
                var3 = var2.bind(var3)(var1);
                var2 = var3.every;
                var1 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var2 = _closure1_slot11;
                        var3 = var2.modelState;
                        var2 = arg1;
                        var3 = var3[var2];
                        var2 = null;
                        var5 = var2 == var3;
                        var4 = undefined;
                        var2 = undefined;
                        if(var5) { _fun0011_ip = 38; continue _fun0011 }
 33:
                        var2 = var3.status;
 38:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 7;
                        var1 = var5[var1];
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.VoiceFilterModelStatus;
                        var1 = var1.DOWNLOADED;
                        var1 = var2 === var1;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isModelDownloaded';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var2 = _closure1_slot11;
                var3 = var2.modelState;
                var2 = arg1;
                var3 = var3[var2];
                var2 = null;
                var5 = var2 == var3;
                var4 = undefined;
                var2 = undefined;
                if(var5) { _fun0012_ip = 38; continue _fun0012 }
 33:
                var2 = var3.status;
 38:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.VoiceFilterModelStatus;
                var1 = var1.DOWNLOADED;
                var1 = var2 === var1;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getSortedVoiceFilters';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            var3 = var1.sortedVoiceFilters;
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = _closure1_slot11;
                var2 = var1.voiceFilters;
                var1 = arg1;
                var1 = var2[var1];
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getCatalogLastFetchTime';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            var1 = var1.catalogLastFetchTime;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getCatalogUpdateTime';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            var1 = var1.catalogUpdateTime;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getLimitedTimeVoices';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            var1 = var1.limitedTimeVoices;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'isNativeModuleLoaded';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot11;
            var2 = var2.nativeVoiceFilterModuleState;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.VoiceFilterNativeModuleState;
            var1 = var1.LOADED;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'isNativeModuleLoading';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot11;
            var2 = var2.nativeVoiceFilterModuleState;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.VoiceFilterNativeModuleState;
            var1 = var1.LOADING;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'hasNativeModuleFailed';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot11;
            var2 = var2.nativeVoiceFilterModuleState;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.VoiceFilterNativeModuleState;
            var1 = var1.FAILED;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getCatalogFetchFailed';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            var1 = var1.catalogFetchFailed;
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getError';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            var1 = var1.error;
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getLastReportedLagTimestamp';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var6;
        var1[16] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var9.bind(var1)(var11);
    var9['displayName'] = var4;
    var4 = 11;
    var4 = var7[var4];
    var15 = var8.bind(var1)(var4);
    var4 = {};
    var11 = function handleVoiceFilterDownloadStarted(arg1) {
        var1 = arg1;
        var4 = var1.modelId;
        var2 = _closure1_slot11;
        var3 = var2.modelState;
        var2 = {};
        var5 = _closure1_slot11;
        var5 = var5.modelState;
        var7 = var5[var4];
        var8 = var2;
        var5 = copyDataProperties(var8, var7);
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 7;
        var5 = var5[var1];
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var5 = var5.VoiceFilterModelStatus;
        var6 = var5.DOWNLOADING;
        var5 = 'status';
        var2[var5] = var6;
        var6 = 0;
        var5 = 'downloadedBytes';
        var2[var5] = var6;
        var3[var4] = var2;
        return var1;
    };
    var4['VOICE_FILTER_DOWNLOAD_STARTED'] = var11;
    var11 = function handleVoiceFilterDownloadProgress(arg1) {
        var1 = arg1;
        var3 = var1.modelId;
        var6 = var1.downloadedBytes;
        var5 = var1.totalBytes;
        var1 = _closure1_slot11;
        var2 = var1.modelState;
        var1 = {};
        var4 = _closure1_slot11;
        var4 = var4.modelState;
        var7 = var4[var3];
        var8 = var1;
        var4 = copyDataProperties(var8, var7);
        var4 = 'downloadedBytes';
        var1[var4] = var6;
        var4 = 'totalBytes';
        var1[var4] = var5;
        var2[var3] = var1;
        var1 = undefined;
        return var1;
    };
    var4['VOICE_FILTER_DOWNLOAD_PROGRESS'] = var11;
    var11 = function handleVoiceFilterDownloadFailed(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var7 = var1.modelId;
            var4 = var1.error;
            var1 = _closure1_slot11;
            var1 = var1.modelState;
            var5 = var1[var7];
            var3 = null;
            var8 = var3 == var5;
            var1 = undefined;
            var6 = undefined;
            if(var8) { _fun0013_ip = 49; continue _fun0013 }
 44:
            var6 = var5.status;
 49:
            var8 = _closure1_slot0;
            var5 = _closure1_slot2;
            var10 = 7;
            var5 = var5[var10];
            var5 = var8.bind(var1)(var5);
            var5 = var5.VoiceFilterModelStatus;
            var5 = var5.DOWNLOADED;
            if(!(var6 !== var5)) { _fun0013_ip = 199; continue _fun0013 }
 85:
            var5 = _closure1_slot11;
            var6 = var5.modelState;
            var5 = {};
            var8 = _closure1_slot11;
            var8 = var8.modelState;
            var11 = var8[var7];
            var12 = var5;
            var8 = copyDataProperties(var12, var11);
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var1)(var8);
            var8 = var8.VoiceFilterModelStatus;
            var9 = var8.MISSING;
            var8 = 'status';
            var5[var8] = var9;
            var6[var7] = var5;
            if(!(var3 == var4)) { _fun0013_ip = 166; continue _fun0013 }
 164:
            var4 = {};
 166:
            var3 = 'USER_CANCELED_DOWNLOAD';
            var3 = var3 in var4;
            if(var3) { _fun0013_ip = 199; continue _fun0013 }
 179:
            var3 = _closure1_slot11;
            var2 = _closure1_slot9;
            var2 = var2.ERROR_DOWNLOADING_DEPENDENCY;
            var3['error'] = var2;
 199:
            return var1;
        }
    };
    var4['VOICE_FILTER_DOWNLOAD_FAILED'] = var11;
    var11 = function handleVoiceFilterFileReady(arg1) {
        var1 = arg1;
        var4 = var1.modelId;
        var2 = _closure1_slot11;
        var3 = var2.modelState;
        var2 = {};
        var5 = _closure1_slot11;
        var5 = var5.modelState;
        var7 = var5[var4];
        var8 = var2;
        var5 = copyDataProperties(var8, var7);
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 7;
        var5 = var5[var1];
        var1 = undefined;
        var5 = var6.bind(var1)(var5);
        var5 = var5.VoiceFilterModelStatus;
        var6 = var5.DOWNLOADED;
        var5 = 'status';
        var2[var5] = var6;
        var5 = 'downloadedBytes';
        var2[var5] = var1;
        var3[var4] = var2;
        return var1;
    };
    var4['VOICE_FILTER_FILE_READY'] = var11;
    var11 = function handleVoiceFilterCatalogFetch(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var4 = var1.catalog;
            var3 = var1.initialModelState;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var9 = 8;
            var5 = var1[var9];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = null;
            var6 = var5 == var6;
            var7 = undefined;
            if(var6) { _fun0014_ip = 84; continue _fun0014 }
 51:
            var8 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var6 = var8.bind(var1)(var6);
            var8 = var6.remoteApp;
            var6 = var8.getVersion;
            var7 = var6.bind(var8)();
 84:
            var6 = '0.0.0';
            var16 = var6 === var7;
            var7 = _closure1_slot11;
            var6 = false;
            var7['catalogFetchFailed'] = var6;
            var7 = _closure1_slot11;
            var6 = var4.models;
            var7['models'] = var6;
            var7 = _closure1_slot11;
            var6 = var4.limited_time_voices;
            var7['limitedTimeVoices'] = var6;
            var7 = {};
            var8 = _closure1_slot17;
            var6 = _closure1_slot11;
            var6 = var6.limitedTimeVoices;
            var15 = var8.bind(var1)(var6);
            var8 = _closure1_slot11;
            var6 = var15.catalogUpdateTime;
            var8['catalogUpdateTime'] = var6;
            if(!var16) { _fun0014_ip = 284; continue _fun0014 }
 180:
            var6 = global;
            var9 = var6.Object;
            var8 = var9.keys;
            var6 = _closure1_slot8;
            var13 = var8.bind(var9)(var6);
            var6 = var13.length;
            var12 = 0;
            var6 = var12 < var6;
            var11 = 'id';
            var10 = 'modelIds';
            var9 = true;
            var8 = 'available';
            if(!var6) { _fun0014_ip = 284; continue _fun0014 }
 232:
            var14 = var13[var12];
            var6 = {};
            var17 = _closure1_slot8;
            var22 = var17[var14];
            var23 = var6;
            var17 = copyDataProperties(var23, var22);
            var6[var11] = var14;
            var6[var10] = var1;
            var6[var8] = var9;
            var7[var14] = var6;
            var12 = var12 + 1;
            var6 = var13.length;
            if(var12 < var6) { _fun0014_ip = 232; continue _fun0014 }
 284:
            var6 = _closure1_slot14;
            var4 = var4.voices;
            var14 = var6.bind(var1)(var4);
            var8 = var14.bind(var1)();
            var6 = var8.done;
            var13 = 'available';
            var12 = 'temporarilyAvailable';
            var11 = 'id';
            var10 = 'modelIds';
            var4 = !var16;
            var9 = !var4;
            var4 = global;
            if(var6) { _fun0014_ip = 470; continue _fun0014 }
 342:
            var6 = var8.value;
            var17 = var6.id;
            var18 = var6.models;
            var19 = var6.available;
            var21 = var4.Object;
            var20 = var21.hasOwn;
            var6 = _closure1_slot8;
            var6 = var20.bind(var21)(var6, var17);
            if(!var6) { _fun0014_ip = 455; continue _fun0014 }
 389:
            var6 = {};
            var20 = _closure1_slot8;
            var22 = var20[var17];
            var23 = var6;
            var20 = copyDataProperties(var23, var22);
            var6[var11] = var17;
            var6[var10] = var18;
            var18 = var9;
            if(var16) { _fun0014_ip = 425; continue _fun0014 }
 422:
            var18 = var19;
 425:
            var6[var13] = var18;
            var19 = var15.currentSet;
            var18 = var19.includes;
            var18 = var18.bind(var19)(var17);
            var6[var12] = var18;
            var7[var17] = var6;
 455:
            var17 = var14.bind(var1)();
            var6 = var17.done;
            var8 = var17;
            if(!var6) { _fun0014_ip = 342; continue _fun0014 }
 470:
            var6 = _closure1_slot11;
            var6['voiceFilters'] = var7;
            var7 = _closure1_slot11;
            var8 = _closure1_slot18;
            var6 = var7.voiceFilters;
            var6 = var8.bind(var1)(var6);
            var7['sortedVoiceFilters'] = var6;
            var7 = _closure1_slot11;
            var6 = var4.Date;
            var8 = var6.prototype;
            var8 = Object.create(var8, {constructor: {value: var6}});
            var24 = var8;
            var6 = new var24[var6](var23);
            var6 = var6 instanceof Object ? var6 : var8;
            var7['catalogLastFetchTime'] = var6;
            if(!(var5 != var3)) { _fun0014_ip = 614; continue _fun0014 }
 545:
            var6 = var4.Object;
            var5 = var6.keys;
            var4 = _closure1_slot11;
            var4 = var4.modelState;
            var4 = var5.bind(var6)(var4);
            var5 = var4.length;
            var4 = 0;
            if(!(!(var5 > var4))) { _fun0014_ip = 604; continue _fun0014 }
 582:
            var6 = _closure1_slot10;
            var5 = var6.warn;
            var4 = 'Attempted to replace existing model state with initial model state';
            var4 = var5.bind(var6)(var4);
            _fun0014_ip = 614; continue _fun0014;
 604:
            var2 = _closure1_slot11;
            var2['modelState'] = var3;
 614:
            return var1;
        }
    };
    var4['VOICE_FILTER_CATALOG_FETCH_SUCCESS'] = var11;
    var11 = function handleVoiceFilterCatalogFailure() {
        var2 = _closure1_slot11;
        var1 = true;
        var2['catalogFetchFailed'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['VOICE_FILTER_CATALOG_FETCH_FAILED'] = var11;
    var4['VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES'] = var10;
    var10 = function handleDevToolsUpdateLimitedTimeVoices(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var7 = var1.timeInSeconds;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 9;
            var3 = var1[var6];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.addSeconds;
            var3 = global;
            var3 = var3.Date;
            var8 = var3.prototype;
            var8 = Object.create(var8, {constructor: {value: var3}});
            var11 = var8;
            var3 = new var11[var3](var10);
            var3 = var3 instanceof Object ? var3 : var8;
            var7 = var4.bind(var5)(var3, var7);
            var3 = _closure1_slot11;
            var4 = var3.limitedTimeVoices;
            var3 = null;
            if(!(var3 == var4)) { _fun0015_ip = 114; continue _fun0015 }
 92:
            var5 = _closure1_slot10;
            var4 = var5.warn;
            var3 = 'No limited time voices available to update';
            var3 = var4.bind(var5)(var3);
            _fun0015_ip = 232; continue _fun0015;
 114:
            var3 = _closure1_slot11;
            var4 = var3.limitedTimeVoices;
            var3 = var7.toISOString;
            var3 = var3.bind(var7)();
            var4['current_set_end'] = var3;
            var3 = _closure1_slot11;
            var4 = var3.limitedTimeVoices;
            var3 = var7.toISOString;
            var3 = var3.bind(var7)();
            var4['next_set_start'] = var3;
            var3 = _closure1_slot11;
            var4 = var3.limitedTimeVoices;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var6];
            var6 = var5.bind(var1)(var3);
            var5 = var6.addMinutes;
            var3 = 2;
            var5 = var5.bind(var6)(var7, var3);
            var3 = var5.toISOString;
            var3 = var3.bind(var5)();
            var4['next_set_end'] = var3;
            var2 = _closure1_slot19;
            var2 = var2.bind(var1)();
 232:
            return var1;
        }
    };
    var4['VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME'] = var10;
    var10 = function handleNativeModuleStateChange(arg1) {
        var2 = _closure1_slot11;
        var1 = arg1;
        var1 = var1.state;
        var2['nativeVoiceFilterModuleState'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE'] = var10;
    var10 = function handleVoiceFilterApplyFailed() {
        var2 = _closure1_slot11;
        var1 = _closure1_slot9;
        var1 = var1.ERROR_ACTIVATING_VOICE_FILTER;
        var2['error'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['VOICE_FILTER_APPLY_FAILED'] = var10;
    var10 = function handleVoiceFilterRequestSwitch() {
        var2 = _closure1_slot11;
        var1 = null;
        var2['error'] = var1;
        var1 = undefined;
        return var1;
    };
    var4['VOICE_FILTER_REQUEST_SWITCH'] = var10;
    var5 = function handleVoiceFilterLagging() {
        var1 = global;
        var2 = var1.Date;
        var1 = var2.now;
        var2 = var1.bind(var2)();
        _closure1_slot12 = var2;
        var1 = undefined;
        return var1;
    };
    var4['VOICE_FILTER_LAGGING'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var16 = var5;
    var14 = var4;
    var4 = new var16[var9](var15, var14, var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_filters/VoiceFilterStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['VoiceFilterError'] = var2;
    return var1;
})();