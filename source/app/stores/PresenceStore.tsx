// app/stores/PresenceStore.tsx
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
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
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
            var9 = _closure1_slot27;
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
            var7 = _closure1_slot27;
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
    var _closure1_slot26 = var1;
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
    var _closure1_slot27 = var1;
    var1 = function getPresence(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = _closure1_slot17;
            var1 = arg1;
            var3 = var2[var1];
            var1 = null;
            var2 = var1 != var3;
            if(!var2) { _fun0005_ip = 30; continue _fun0005 }
 23:
            var2 = arg2;
            var1 = var3[var2];
 30:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var2 = function sortActivity(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var2 = arg2;
            var1 = _closure1_slot23;
            var6 = undefined;
            var5 = var1.bind(var6)(var2);
            var1 = _closure1_slot23;
            var1 = var1.bind(var6)(var4);
            var1 = var5 - var1;
            if(var1) { _fun0006_ip = 58; continue _fun0006 }
 36:
            var5 = _closure1_slot24;
            var5 = var5.bind(var6)(var2);
            var3 = _closure1_slot24;
            var3 = var3.bind(var6)(var4);
            var1 = var5 - var3;
 58:
            if(var1) { _fun0006_ip = 103; continue _fun0006 }
 61:
            var6 = var2.created_at;
            var5 = null;
            var7 = var5 != var6;
            var2 = 0;
            if(!var7) { _fun0006_ip = 81; continue _fun0006 }
 78:
            var2 = var6;
 81:
            var4 = var4.created_at;
            var5 = var5 != var4;
            var3 = 0;
            if(!var5) { _fun0006_ip = 99; continue _fun0006 }
 96:
            var3 = var4;
 99:
            var1 = var2 - var3;
 103:
            return var1;
        }
    };
    var _closure1_slot29 = var2;
    var1 = function separateGamePresence(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot9;
            var1 = var3.getId;
            var3 = var1.bind(var3)();
            var1 = arg2;
            if(!(var1 !== var3)) { _fun0007_ip = 342; continue _fun0007 }
 30:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var11 = undefined;
            var1 = var3.bind(var11)(var1);
            var5 = var1.GamePresenceNegativeTestExperiment;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var1 = 'presence_filtering';
            var3['location'] = var1;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var10 = var4.bind(var5)(var3, var1);
            var1 = var10.filterGamePresence;
            if(var1) { _fun0007_ip = 127; continue _fun0007 }
 100:
            var1 = var10.filterRichPresence;
            if(var1) { _fun0007_ip = 127; continue _fun0007 }
 109:
            var1 = {};
            var1['visible'] = var2;
            var3 = new Array(0);
            var1['hidden'] = var3;
            return var1;
 127:
            var4 = new Array(0);
            var3 = new Array(0);
            var1 = _closure1_slot26;
            var9 = var1.bind(var11)(var2);
            var5 = var9.bind(var11)();
            var1 = var5.done;
            var8 = 9;
            var7 = null;
            var6 = var5;
            var5 = undefined;
            if(var1) { _fun0007_ip = 328; continue _fun0007 }
 169:
            var14 = var6.value;
            var13 = var14.type;
            var1 = _closure1_slot12;
            var1 = var1.PLAYING;
            if(!(var13 !== var1)) { _fun0007_ip = 205; continue _fun0007 }
 193:
            var1 = var4.push;
            var1 = var1.bind(var4)(var14);
            _fun0007_ip = 310; continue _fun0007;
 205:
            var1 = var14.application_id;
            var1 = var7 != var1;
            if(!var1) { _fun0007_ip = 240; continue _fun0007 }
 218:
            var15 = _closure1_slot1;
            var13 = _closure1_slot2;
            var13 = var13[var8];
            var13 = var15.bind(var11)(var13);
            var1 = var13.bind(var11)(var14);
 240:
            var13 = var10.filterGamePresence;
            if(var13) { _fun0007_ip = 291; continue _fun0007 }
 249:
            var13 = var10.filterRichPresence;
            if(!var13) { _fun0007_ip = 261; continue _fun0007 }
 258:
            if(var1) { _fun0007_ip = 276; continue _fun0007 }
 261:
            var13 = var4.push;
            var13 = var13.bind(var4)(var14);
            var5 = var1;
            _fun0007_ip = 310; continue _fun0007;
 276:
            var13 = var3.push;
            var13 = var13.bind(var3)(var14);
            var5 = var1;
            _fun0007_ip = 310; continue _fun0007;
 291:
            var5 = var1;
            if(!var1) { _fun0007_ip = 310; continue _fun0007 }
 297:
            var13 = var3.push;
            var13 = var13.bind(var3)(var14);
            var5 = var1;
 310:
            var13 = var9.bind(var11)();
            var1 = var13.done;
            var6 = var13;
            if(!var1) { _fun0007_ip = 169; continue _fun0007 }
 328:
            var1 = {};
            var1['visible'] = var4;
            var1['hidden'] = var3;
            return var1;
 342:
            var1 = {};
            var1['visible'] = var2;
            var2 = new Array(0);
            var1['hidden'] = var2;
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function flattenPresence(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = arg1;
            var1 = _closure1_slot18;
            var1 = delete var1[var3];
            var1 = _closure1_slot19;
            var1 = delete var1[var3];
            var1 = _closure1_slot20;
            var1 = delete var1[var3];
            var1 = _closure1_slot21;
            var1 = delete var1[var3];
            var1 = _closure1_slot17;
            var1 = var1[var3];
            var5 = null;
            if(!(var5 != var1)) { _fun0008_ip = 413; continue _fun0008 }
 57:
            var7 = global;
            var8 = var7.Object;
            var6 = var8.values;
            var1 = _closure1_slot17;
            var1 = var1[var3];
            var10 = var6.bind(var8)(var1);
            var9 = var10.reduce;
            var8 = 0;
            var6 = var10[var8];
            var1 = function(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var5 = arg1;
                    var2 = arg2;
                    var7 = var2.processedAtTimestamp;
                    var6 = var5.processedAtTimestamp;
                    var1 = var2.activities;
                    var8 = null;
                    var1 = var8 != var1;
                    var3 = 0;
                    if(!var1) { _fun0009_ip = 46; continue _fun0009 }
 35:
                    var1 = var2.activities;
                    var3 = var1.length;
 46:
                    var1 = var5.activities;
                    var1 = var8 != var1;
                    var4 = 0;
                    if(!var1) { _fun0009_ip = 72; continue _fun0009 }
 61:
                    var1 = var5.activities;
                    var4 = var1.length;
 72:
                    if(!(!(var7 > var6))) { _fun0009_ip = 90; continue _fun0009 }
 76:
                    var1 = var5;
                    if(!(var7 === var6)) { _fun0009_ip = 93; continue _fun0009 }
 83:
                    var1 = var5;
                    if(!(var3 > var4)) { _fun0009_ip = 93; continue _fun0009 }
 90:
                    var1 = var2;
 93:
                    return var1;
                }
            };
            var1 = var9.bind(var10)(var1, var6);
            var9 = var1.status;
            var6 = _closure1_slot11;
            var6 = var6.OFFLINE;
            if(!(var9 === var6)) { _fun0008_ip = 311; continue _fun0008 }
 128:
            var6 = var1.hiddenActivities;
            if(!(var5 != var6)) { _fun0008_ip = 156; continue _fun0008 }
 138:
            var6 = var1.hiddenActivities;
            var6 = var6.length;
            if(!(!(var6 > var8))) { _fun0008_ip = 311; continue _fun0008 }
 156:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 11;
            var6 = var9[var6];
            var11 = undefined;
            var12 = var8.bind(var11)(var6);
            var9 = var12.every;
            var6 = _closure1_slot17;
            var8 = var6[var3];
            var6 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = arg1;
                    var2 = var3.status;
                    var1 = _closure1_slot11;
                    var1 = var1.OFFLINE;
                    var1 = var2 === var1;
                    if(!var1) { _fun0010_ip = 63; continue _fun0010 }
 28:
                    var4 = var3.hiddenActivities;
                    var2 = null;
                    var2 = var2 == var4;
                    if(var2) { _fun0010_ip = 60; continue _fun0010 }
 43:
                    var3 = var3.hiddenActivities;
                    var4 = var3.length;
                    var3 = 0;
                    var2 = var3 === var4;
 60:
                    var1 = var2;
 63:
                    return var1;
                }
            };
            var6 = var9.bind(var12)(var8, var6);
            if(var6) { _fun0008_ip = 301; continue _fun0008 }
 206:
            var8 = var1.status;
            var6 = _closure1_slot11;
            var6 = var6.OFFLINE;
            if(!(var8 === var6)) { _fun0008_ip = 413; continue _fun0008 }
 228:
            var8 = var10.some;
            var6 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = arg1;
                    var3 = var2.hiddenActivities;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0011_ip = 35; continue _fun0011 }
 18:
                    var2 = var2.hiddenActivities;
                    var3 = var2.length;
                    var2 = 0;
                    var1 = var3 > var2;
 35:
                    return var1;
                }
            };
            var6 = var8.bind(var10)(var6);
            if(!var6) { _fun0008_ip = 413; continue _fun0008 }
 250:
            var8 = _closure1_slot20;
            var9 = _closure1_slot32;
            var12 = var7.Object;
            var6 = var12.values;
            var13 = var6.bind(var12)(var10);
            var12 = var13.flatMap;
            var6 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.hiddenActivities;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0012_ip = 19; continue _fun0012 }
 15:
                    var1 = new Array(0);
 19:
                    return var1;
                }
            };
            var6 = var12.bind(var13)(var6);
            var6 = var9.bind(var11)(var6);
            var8[var3] = var6;
            _fun0008_ip = 413; continue _fun0008;
 301:
            var6 = _closure1_slot17;
            var6 = delete var6[var3];
            _fun0008_ip = 413; continue _fun0008;
 311:
            var8 = _closure1_slot18;
            var6 = var1.status;
            var8[var3] = var6;
            var8 = _closure1_slot19;
            var6 = var1.activities;
            var8[var3] = var6;
            var6 = _closure1_slot20;
            var8 = _closure1_slot32;
            var9 = var7.Object;
            var7 = var9.values;
            var9 = var7.bind(var9)(var10);
            var7 = var9.flatMap;
            var4 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.hiddenActivities;
                    var2 = null;
                    if(!(var2 == var1)) { _fun0013_ip = 19; continue _fun0013 }
 15:
                    var1 = new Array(0);
 19:
                    return var1;
                }
            };
            var7 = var7.bind(var9)(var4);
            var4 = undefined;
            var4 = var8.bind(var4)(var7);
            var6[var3] = var4;
            var4 = var1.clientStatus;
            if(!(var5 != var4)) { _fun0008_ip = 413; continue _fun0008 }
 399:
            var2 = _closure1_slot21;
            var1 = var1.clientStatus;
            var2[var3] = var1;
 413:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function dedupeHiddenActivities(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var2 = var1.length;
            var4 = 0;
            if(!(var4 !== var2)) { _fun0014_ip = 107; continue _fun0014 }
 14:
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
 0:
                    var2 = arg1;
                    var6 = var2.application_id;
                    var1 = var2.party;
                    var3 = null;
                    var3 = var3 == var1;
                    var5 = undefined;
                    if(var3) { _fun0015_ip = 31; continue _fun0015 }
 26:
                    var5 = var1.id;
 31:
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
 107:
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function flattenPresenceInConnectionOpen(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var3 = arg1;
            var1 = _closure1_slot17;
            var8 = var1[var3];
            var5 = null;
            if(!(var5 != var8)) { _fun0016_ip = 201; continue _fun0016 }
 23:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 11;
            var4 = var4[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var4);
            var6 = var7.maxBy;
            var1 = global;
            var4 = var1.Object;
            var1 = var4.values;
            var4 = var1.bind(var4)(var8);
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.processedAtTimestamp;
                return var1;
            };
            var1 = var6.bind(var7)(var4, var1);
            var6 = var1.status;
            var4 = _closure1_slot11;
            var4 = var4.OFFLINE;
            if(!(var6 === var4)) { _fun0016_ip = 128; continue _fun0016 }
 101:
            var4 = var1.hiddenActivities;
            if(!(var5 != var4)) { _fun0016_ip = 201; continue _fun0016 }
 111:
            var4 = var1.hiddenActivities;
            var6 = var4.length;
            var4 = 0;
            if(!(var6 > var4)) { _fun0016_ip = 201; continue _fun0016 }
 128:
            var6 = _closure1_slot18;
            var4 = var1.status;
            var6[var3] = var4;
            var6 = _closure1_slot19;
            var4 = var1.activities;
            var6[var3] = var4;
            var6 = _closure1_slot20;
            var4 = var1.hiddenActivities;
            if(!(var5 == var4)) { _fun0016_ip = 173; continue _fun0016 }
 169:
            var4 = new Array(0);
 173:
            var6[var3] = var4;
            var4 = var1.clientStatus;
            if(!(var5 != var4)) { _fun0016_ip = 201; continue _fun0016 }
 187:
            var2 = _closure1_slot21;
            var1 = var1.clientStatus;
            var2[var3] = var1;
 201:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function updatePresence(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var3 = var1.userId;
            var8 = var1.status;
            var7 = var1.clientStatus;
            var12 = var1.activities;
            var15 = var1.hiddenActivities;
            var6 = var1.processedAtTimestamp;
            var4 = _closure1_slot9;
            var2 = var4.getId;
            var2 = var2.bind(var4)();
            if(!(var3 !== var2)) { _fun0017_ip = 407; continue _fun0017 }
 66:
            var2 = _closure1_slot11;
            var2 = var2.OFFLINE;
            var2 = var8 === var2;
            if(!var2) { _fun0017_ip = 106; continue _fun0017 }
 83:
            var4 = null;
            var4 = var4 == var15;
            if(var4) { _fun0017_ip = 103; continue _fun0017 }
 92:
            var10 = var15.length;
            var9 = 0;
            var4 = var9 === var10;
 103:
            var2 = var4;
 106:
            var4 = _closure1_slot17;
            var4 = var4[var3];
            var11 = null;
            if(!(var11 == var4)) { _fun0017_ip = 139; continue _fun0017 }
 120:
            if(var2) { _fun0017_ip = 403; continue _fun0017 }
 126:
            var10 = _closure1_slot17;
            var9 = {};
            var10[var3] = var9;
            var4 = var9;
 139:
            if(var2) { _fun0017_ip = 342; continue _fun0017 }
 145:
            var9 = _closure1_slot30;
            var13 = var12.length;
            var10 = 1;
            var2 = var12;
            if(!(var13 > var10)) { _fun0017_ip = 195; continue _fun0017 }
 164:
            var13 = new Array(0);
            var16 = 0;
            var18 = var13;
            var17 = var12;
            var10 = arraySpread(var18, var17, var16);
            var12 = var13.sort;
            var10 = _closure1_slot29;
            var2 = var12.bind(var13)(var10);
 195:
            var14 = undefined;
            var10 = var9.bind(var14)(var2, var3);
            var12 = var10.visible;
            var9 = _closure1_slot32;
            if(!(var11 == var15)) { _fun0017_ip = 221; continue _fun0017 }
 217:
            var15 = new Array(0);
 221:
            var2 = new Array(0);
            var16 = 0;
            var18 = var2;
            var17 = var15;
            var16 = arraySpread(var18, var17, var16);
            var17 = var10.hidden;
            var18 = var2;
            var10 = arraySpread(var18, var17, var16);
            var9 = var9.bind(var14)(var2);
            var2 = var4[var5];
            var10 = var12;
            if(!(var11 != var2)) { _fun0017_ip = 310; continue _fun0017 }
 266:
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 12;
            var11 = var15[var11];
            var13 = var13.bind(var14)(var11);
            var11 = var2.activities;
            var11 = var13.bind(var14)(var11, var12);
            var10 = var12;
            if(!var11) { _fun0017_ip = 310; continue _fun0017 }
 304:
            var10 = var2.activities;
 310:
            var2 = {};
            var2['status'] = var8;
            var2['clientStatus'] = var7;
            var2['activities'] = var10;
            var2['hiddenActivities'] = var9;
            var2['processedAtTimestamp'] = var6;
            var4[var5] = var2;
            _fun0017_ip = 380; continue _fun0017;
 342:
            var2 = {};
            var2['status'] = var8;
            var2['clientStatus'] = var7;
            var7 = _closure1_slot16;
            var2['activities'] = var7;
            var7 = _closure1_slot16;
            var2['hiddenActivities'] = var7;
            var2['processedAtTimestamp'] = var6;
            var4[var5] = var2;
 380:
            var2 = _closure1_slot22;
            var2 = delete var2[var3];
            var2 = _closure1_slot31;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            var1 = true;
            return var1;
 403:
            var1 = false;
            return var1;
 407:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function updatePresenceInConnectionOpen(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var11 = var1.userId;
            var7 = var1.status;
            var6 = var1.clientStatus;
            var12 = var1.activities;
            var13 = var1.hiddenActivities;
            var4 = var1.processedAtTimestamp;
            var2 = _closure1_slot9;
            var1 = var2.getId;
            var1 = var1.bind(var2)();
            if(!(var11 !== var1)) { _fun0018_ip = 325; continue _fun0018 }
 66:
            var1 = _closure1_slot11;
            var1 = var1.OFFLINE;
            var8 = var7 === var1;
            if(!var8) { _fun0018_ip = 106; continue _fun0018 }
 83:
            var1 = null;
            var1 = var1 == var13;
            if(var1) { _fun0018_ip = 103; continue _fun0018 }
 92:
            var9 = var13.length;
            var2 = 0;
            var1 = var2 === var9;
 103:
            var8 = var1;
 106:
            var1 = _closure1_slot17;
            var2 = var1[var11];
            var1 = null;
            if(!(var1 == var2)) { _fun0018_ip = 139; continue _fun0018 }
 120:
            if(var8) { _fun0018_ip = 329; continue _fun0018 }
 126:
            var10 = _closure1_slot17;
            var9 = {};
            var10[var11] = var9;
            var2 = var9;
 139:
            if(var8) { _fun0018_ip = 287; continue _fun0018 }
 145:
            var9 = _closure1_slot30;
            var14 = var12.length;
            var10 = 1;
            var8 = var12;
            if(!(var14 > var10)) { _fun0018_ip = 195; continue _fun0018 }
 164:
            var14 = new Array(0);
            var15 = 0;
            var17 = var14;
            var16 = var12;
            var10 = arraySpread(var17, var16, var15);
            var12 = var14.sort;
            var10 = _closure1_slot29;
            var8 = var12.bind(var14)(var10);
 195:
            var10 = undefined;
            var11 = var9.bind(var10)(var8, var11);
            var9 = var11.visible;
            var8 = _closure1_slot32;
            if(!(var1 == var13)) { _fun0018_ip = 221; continue _fun0018 }
 217:
            var13 = new Array(0);
 221:
            var1 = new Array(0);
            var15 = 0;
            var17 = var1;
            var16 = var13;
            var15 = arraySpread(var17, var16, var15);
            var16 = var11.hidden;
            var17 = var1;
            var11 = arraySpread(var17, var16, var15);
            var8 = var8.bind(var10)(var1);
            var1 = {};
            var1['status'] = var7;
            var1['clientStatus'] = var6;
            var1['activities'] = var9;
            var1['hiddenActivities'] = var8;
            var1['processedAtTimestamp'] = var4;
            var2[var3] = var1;
            _fun0018_ip = 325; continue _fun0018;
 287:
            var1 = {};
            var1['status'] = var7;
            var1['clientStatus'] = var6;
            var6 = _closure1_slot16;
            var1['activities'] = var6;
            var5 = _closure1_slot16;
            var1['hiddenActivities'] = var5;
            var1['processedAtTimestamp'] = var4;
            var2[var3] = var1;
 325:
            var1 = undefined;
            return var1;
 329:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function clearPresence(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var2 = arg1;
            var3 = arg2;
            var5 = _closure1_slot9;
            var4 = var5.getId;
            var4 = var4.bind(var5)();
            if(!(var3 !== var4)) { _fun0019_ip = 107; continue _fun0019 }
 27:
            var4 = _closure1_slot17;
            var5 = var4[var3];
            var6 = null;
            if(!(var6 != var5)) { _fun0019_ip = 103; continue _fun0019 }
 41:
            var4 = var5[var2];
            if(!(var6 != var4)) { _fun0019_ip = 103; continue _fun0019 }
 49:
            var2 = delete var5[var2];
            var2 = global;
            var4 = var2.Object;
            var2 = var4.keys;
            var2 = var2.bind(var4)(var5);
            var4 = var2.length;
            var2 = 0;
            if(!(var2 === var4)) { _fun0019_ip = 90; continue _fun0019 }
 82:
            var2 = _closure1_slot17;
            var2 = delete var2[var3];
 90:
            var2 = _closure1_slot31;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
 103:
            var1 = false;
            return var1;
 107:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function clearPresences(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var6 = arg1;
            var3 = _closure1_slot26;
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var2);
            var4 = var7.keys;
            var2 = _closure1_slot17;
            var2 = var4.bind(var7)(var2);
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0020_ip = 93; continue _fun0020 }
 63:
            var7 = _closure1_slot36;
            var2 = var3.value;
            var2 = var7.bind(var1)(var6, var2);
            var7 = var4.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0020_ip = 63; continue _fun0020 }
 93:
            return var1;
        }
    };
    var _closure1_slot37 = var1;
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
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 6;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var9 = 7;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot10 = var9;
    var9 = 8;
    var9 = var7[var9];
    var9 = var6.bind(var1)(var9);
    var10 = var9.StatusTypes;
    var _closure1_slot11 = var10;
    var10 = var9.ActivityTypes;
    var _closure1_slot12 = var10;
    var10 = var9.ClientTypes;
    var _closure1_slot13 = var10;
    var10 = var9.ME;
    var _closure1_slot14 = var10;
    var9 = var9.UserFlags;
    var _closure1_slot15 = var9;
    var10 = var4.Object;
    var9 = var10.freeze;
    var4 = new Array(0);
    var4 = var9.bind(var10)(var4);
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
 0:
            var1 = arg1;
            var2 = var1.type;
            var3 = _closure1_slot12;
            var3 = var3.CUSTOM_STATUS;
            if(!(var3 !== var2)) { _fun0021_ip = 86; continue _fun0021 }
 25:
            var3 = _closure1_slot12;
            var3 = var3.COMPETING;
            if(!(var3 !== var2)) { _fun0021_ip = 81; continue _fun0021 }
 39:
            var3 = _closure1_slot12;
            var3 = var3.STREAMING;
            if(!(var3 !== var2)) { _fun0021_ip = 76; continue _fun0021 }
 53:
            var1 = _closure1_slot12;
            var1 = var1.PLAYING;
            if(!(var1 !== var2)) { _fun0021_ip = 71; continue _fun0021 }
 67:
            var1 = 0;
            return var1;
 71:
            var1 = 1;
            return var1;
 76:
            var1 = 2;
            return var1;
 81:
            var1 = 3;
            return var1;
 86:
            var1 = 4;
            return var1;
        }
    };
    var _closure1_slot23 = var4;
    var4 = function richnessScore(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = 0;
            if(!var2) { _fun0022_ip = 41; continue _fun0022 }
 38:
            var1 = 1;
 41:
            return var1;
        }
    };
    var _closure1_slot24 = var4;
    var4 = 14;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function PresenceStore() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
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
                var1 = _closure1_slot25;
                var1 = var1.bind(var3)();
                if(var1) { _fun0023_ip = 69; continue _fun0023 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0023_ip = 105; continue _fun0023;
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot9;
            var1 = _closure1_slot8;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(14);
        var1[0] = var5;
        var5 = {};
        var7 = 'setCurrentUserOnConnectionOpen';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = _closure1_slot18;
            var3 = _closure1_slot9;
            var2 = var3.getId;
            var3 = var2.bind(var3)();
            var2 = arg1;
            var4[var3] = var2;
            var3 = _closure1_slot19;
            var4 = _closure1_slot9;
            var2 = var4.getId;
            var2 = var2.bind(var4)();
            var5 = new Array(0);
            var8 = arg2;
            var7 = 0;
            var9 = var5;
            var4 = arraySpread(var9, var8, var7);
            var4 = var5.sort;
            var1 = _closure1_slot29;
            var1 = var4.bind(var5)(var1);
            var3[var2] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getStatus';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var4 = arg1;
                var7 = arguments[1];
                var1 = arguments[2];
                var6 = undefined;
                if(!(var7 === var6)) { _fun0024_ip = 17; continue _fun0024 }
 15:
                var7 = null;
 17:
                if(!(var1 === var6)) { _fun0024_ip = 34; continue _fun0024 }
 21:
                var2 = _closure1_slot11;
                var1 = var2.OFFLINE;
 34:
                var5 = _closure1_slot10;
                var3 = var5.getUser;
                var10 = var3.bind(var5)(var4);
                var3 = null;
                var5 = var3 != var10;
                if(!var5) { _fun0024_ip = 82; continue _fun0024 }
 61:
                var9 = var10.hasFlag;
                var8 = _closure1_slot15;
                var8 = var8.BOT_HTTP_INTERACTIONS;
                var5 = var9.bind(var10)(var8);
 82:
                if(!var5) { _fun0024_ip = 95; continue _fun0024 }
 85:
                var5 = _closure1_slot11;
                var1 = var5.UNKNOWN;
 95:
                if(!(var3 != var7)) { _fun0024_ip = 135; continue _fun0024 }
 99:
                var5 = _closure1_slot28;
                var5 = var5.bind(var6)(var4, var7);
                var7 = var3 == var5;
                var6 = undefined;
                if(var7) { _fun0024_ip = 123; continue _fun0024 }
 118:
                var6 = var5.status;
 123:
                var5 = var1;
                if(!(var3 != var6)) { _fun0024_ip = 133; continue _fun0024 }
 130:
                var5 = var6;
 133:
                return var5;
 135:
                var2 = _closure1_slot18;
                var2 = var2[var4];
                if(!(var3 != var2)) { _fun0024_ip = 150; continue _fun0024 }
 147:
                var1 = var2;
 150:
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
 0:
                var4 = arg1;
                var6 = arguments[1];
                var5 = undefined;
                if(!(var6 === var5)) { _fun0025_ip = 14; continue _fun0025 }
 12:
                var6 = null;
 14:
                var3 = null;
                if(!(var3 != var6)) { _fun0025_ip = 61; continue _fun0025 }
 20:
                var1 = _closure1_slot28;
                var1 = var1.bind(var5)(var4, var6);
                if(!(var3 != var1)) { _fun0025_ip = 55; continue _fun0025 }
 37:
                var5 = var1.activities;
                if(!(var3 != var5)) { _fun0025_ip = 55; continue _fun0025 }
 47:
                var1 = var1.activities;
                _fun0025_ip = 59; continue _fun0025;
 55:
                var1 = _closure1_slot16;
 59:
                return var1;
 61:
                var1 = _closure1_slot19;
                var1 = var1[var4];
                if(!(var3 == var1)) { _fun0025_ip = 80; continue _fun0025 }
 76:
                var1 = _closure1_slot16;
 80:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getHiddenActivities';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var5 = arg1;
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0026_ip = 14; continue _fun0026 }
 12:
                var6 = null;
 14:
                var4 = null;
                if(!(var4 != var6)) { _fun0026_ip = 58; continue _fun0026 }
 20:
                var3 = _closure1_slot28;
                var3 = var3.bind(var1)(var5, var6);
                var6 = var4 == var3;
                var1 = undefined;
                if(var6) { _fun0026_ip = 48; continue _fun0026 }
 42:
                var1 = var3.hiddenActivities;
 48:
                if(!(var4 == var1)) { _fun0026_ip = 56; continue _fun0026 }
 52:
                var1 = _closure1_slot16;
 56:
                _fun0026_ip = 80; continue _fun0026;
 58:
                var2 = _closure1_slot20;
                var2 = var2[var5];
                if(!(var4 == var2)) { _fun0026_ip = 77; continue _fun0026 }
 73:
                var2 = _closure1_slot16;
 77:
                var1 = var2;
 80:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getPrimaryActivity';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                var4 = arguments[1];
                var3 = this;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0027_ip = 14; continue _fun0027 }
 12:
                var4 = null;
 14:
                var2 = var3.getActivities;
                var1 = arg1;
                var3 = var2.bind(var3)(var1, var4);
                var2 = var3.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot12;
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
        var1[5] = var5;
        var5 = {};
        var7 = 'getAllApplicationActivities';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                var8 = arg1;
                var1 = new Array(0);
                var3 = _closure1_slot26;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 13;
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
                if(var2) { _fun0028_ip = 175; continue _fun0028 }
 72:
                var11 = var4.value;
                var9 = _closure1_slot26;
                var2 = _closure1_slot19;
                var2 = var2[var11];
                var10 = var9.bind(var6)(var2);
                var9 = var10.bind(var6)();
                var2 = var9.done;
                if(var2) { _fun0028_ip = 160; continue _fun0028 }
 106:
                var12 = var9.value;
                var2 = var12.application_id;
                if(!(var2 === var8)) { _fun0028_ip = 142; continue _fun0028 }
 121:
                var13 = var1.push;
                var2 = {};
                var2['userId'] = var11;
                var2['activity'] = var12;
                var2 = var13.bind(var1)(var2);
 142:
                var13 = var10.bind(var6)();
                var2 = var13.done;
                var9 = var13;
                var3 = var12;
                if(!var2) { _fun0028_ip = 106; continue _fun0028 }
 160:
                var9 = var5.bind(var6)();
                var2 = var9.done;
                var4 = var9;
                if(!var2) { _fun0028_ip = 72; continue _fun0028 }
 175:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getApplicationActivity';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                var6 = arguments[2];
                var5 = this;
                var2 = arg2;
                var _closure3_slot0 = var2;
                var2 = undefined;
                if(!(var6 === var2)) { _fun0029_ip = 23; continue _fun0029 }
 21:
                var6 = null;
 23:
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
        var1[7] = var5;
        var5 = {};
        var7 = 'findActivity';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                var7 = arg1;
                var6 = arguments[2];
                var2 = arguments[3];
                var5 = this;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0030_ip = 20; continue _fun0030 }
 18:
                var6 = null;
 20:
                if(!(var2 === var1)) { _fun0030_ip = 26; continue _fun0030 }
 24:
                var2 = false;
 26:
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0030_ip = 38; continue _fun0030 }
 35:
                var1 = var2;
 38:
                var2 = var5.getActivities;
                var4 = var2.bind(var5)(var7, var6);
                var3 = var4;
                if(!var1) { _fun0030_ip = 78; continue _fun0030 }
 56:
                var2 = var4.concat;
                var1 = var5.getHiddenActivities;
                var1 = var1.bind(var5)(var7, var6);
                var3 = var2.bind(var4)(var1);
 78:
                var2 = var3.find;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
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
        var1[9] = var5;
        var5 = {};
        var7 = 'getUserIds';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 13;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.keys;
            var1 = _closure1_slot19;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'isMobileOnline';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                var3 = _closure1_slot21;
                var1 = arg1;
                var4 = var3[var1];
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0031_ip = 51; continue _fun0031 }
 23:
                var3 = _closure1_slot13;
                var3 = var3.MOBILE;
                var5 = var4[var3];
                var3 = _closure1_slot11;
                var3 = var3.ONLINE;
                var1 = var5 === var3;
 51:
                if(!var1) { _fun0031_ip = 82; continue _fun0031 }
 54:
                var3 = _closure1_slot13;
                var3 = var3.DESKTOP;
                var3 = var4[var3];
                var2 = _closure1_slot11;
                var2 = var2.ONLINE;
                var1 = var3 !== var2;
 82:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
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
        var1[12] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var3 = _closure1_slot17;
            var1['presencesForGuilds'] = var3;
            var3 = _closure1_slot18;
            var1['statuses'] = var3;
            var3 = _closure1_slot19;
            var1['activities'] = var3;
            var3 = _closure1_slot20;
            var1['hiddenActivities'] = var3;
            var3 = _closure1_slot22;
            var1['activityMetadata'] = var3;
            var2 = _closure1_slot21;
            var1['clientStatuses'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[13] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'PresenceStore';
    var9['displayName'] = var4;
    var4 = 15;
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
        var4 = _closure1_slot9;
        var3 = var4.getId;
        var4 = var3.bind(var4)();
        var3 = {};
        _closure1_slot17 = var3;
        var3 = {};
        _closure1_slot22 = var3;
        var3 = {};
        var5 = _closure1_slot18;
        var5 = var5[var4];
        var3[var4] = var5;
        _closure1_slot18 = var3;
        var3 = {};
        var5 = _closure1_slot19;
        var5 = var5[var4];
        var3[var4] = var5;
        _closure1_slot19 = var3;
        var3 = {};
        var5 = _closure1_slot20;
        var5 = var5[var4];
        var3[var4] = var5;
        _closure1_slot20 = var3;
        var3 = {};
        var5 = {};
        var3[var4] = var5;
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
                var4 = _closure1_slot35;
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
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                var2 = arg1;
                var1 = var2.user;
                var8 = var2.status;
                var7 = var2.clientStatus;
                var6 = var2.activities;
                var5 = var2.hiddenActivities;
                var2 = var2.processedAtTimestamp;
                var3 = null;
                if(!(var3 != var1)) { _fun0032_ip = 122; continue _fun0032 }
 43:
                var4 = _closure1_slot35;
                var3 = {};
                var9 = _closure1_slot14;
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
 122:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var5.bind(var6)(var2);
        var2 = var3.delete;
        var2 = var2.bind(var3)(var4);
        var2 = var3.forEach;
        var1 = _closure1_slot33;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4['CONNECTION_OPEN_SUPPLEMENTAL'] = var10;
    var10 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var1 = var1.presences;
        var3 = var1.presencesForGuilds;
        _closure1_slot17 = var3;
        var3 = var1.statuses;
        _closure1_slot18 = var3;
        var3 = var1.activities;
        _closure1_slot19 = var3;
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
            var3 = _closure1_slot34;
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
        var3 = _closure1_slot37;
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
        var3 = _closure1_slot36;
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
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                var1 = arg1;
                var9 = var1.guildId;
                var8 = var1.user;
                var7 = var1.status;
                var6 = var1.clientStatus;
                var5 = var1.activities;
                var4 = var1.hiddenActivities;
                var1 = var1.processedAtTimestamp;
                var3 = _closure1_slot34;
                var2 = {};
                var11 = null;
                if(!(var11 == var9)) { _fun0033_ip = 61; continue _fun0033 }
 57:
                var9 = _closure1_slot14;
 61:
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
        var3 = _closure1_slot37;
        var2 = _closure1_slot14;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                var1 = arg1;
                var8 = var1.user;
                var7 = var1.status;
                var6 = var1.clientStatus;
                var5 = var1.activities;
                var4 = var1.hiddenActivities;
                var1 = var1.processedAtTimestamp;
                var2 = null;
                if(!(var2 != var8)) { _fun0034_ip = 100; continue _fun0034 }
 43:
                var3 = _closure1_slot34;
                var2 = {};
                var9 = _closure1_slot14;
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
 100:
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
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                var1 = arg1;
                var3 = var1.presence;
                var2 = null;
                if(!(var2 != var3)) { _fun0035_ip = 135; continue _fun0035 }
 15:
                var3 = _closure1_slot34;
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
 135:
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
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var3 = var2.addedMembers;
            var2 = null;
            if(!(var2 != var3)) { _fun0036_ip = 41; continue _fun0036 }
 26:
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                    var1 = arg1;
                    var3 = var1.presence;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0037_ip = 134; continue _fun0037 }
 15:
                    var3 = _closure1_slot34;
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
 134:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
 41:
            var1 = undefined;
            return var1;
        }
    };
    var4['THREAD_MEMBERS_UPDATE'] = var10;
    var5 = function handleCurrentUserPresenceUpdate(arg1) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot9;
            var2 = var4.getId;
            var2 = var2.bind(var4)();
            var4 = _closure1_slot18;
            var5 = var4[var2];
            var4 = var3.status;
            if(!(var5 === var4)) { _fun0038_ip = 73; continue _fun0038 }
 37:
            var4 = _closure1_slot19;
            var5 = var4[var2];
            var4 = var3.activities;
            if(!(var5 === var4)) { _fun0038_ip = 73; continue _fun0038 }
 55:
            var4 = _closure1_slot20;
            var5 = var4[var2];
            var4 = var3.hiddenActivities;
            if(!(var5 !== var4)) { _fun0038_ip = 176; continue _fun0038 }
 73:
            var5 = _closure1_slot18;
            var4 = var3.status;
            var5[var2] = var4;
            var5 = _closure1_slot19;
            var10 = var3.activities;
            var8 = new Array(0);
            var11 = var8;
            var9 = 0;
            var4 = arraySpread(var11, var10, var9);
            var4 = var8.sort;
            var6 = _closure1_slot29;
            var4 = var4.bind(var8)(var6);
            var5[var2] = var4;
            var4 = _closure1_slot20;
            var10 = var3.hiddenActivities;
            var5 = new Array(0);
            var11 = var5;
            var3 = arraySpread(var11, var10, var9);
            var3 = var5.sort;
            var3 = var3.bind(var5)(var6);
            var4[var2] = var3;
            var1 = _closure1_slot22;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
 176:
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
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/PresenceStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['sortActivity'] = var2;
    return var1;
})();