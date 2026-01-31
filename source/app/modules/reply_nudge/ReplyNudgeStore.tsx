// app/modules/reply_nudge/ReplyNudgeStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
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
            var9 = _closure1_slot22;
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
            var7 = _closure1_slot22;
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
    var _closure1_slot21 = var1;
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
            if(!var5) { _fun0004_ip = 39; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 39:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function pruneExpiredNudges(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg2;
            var15 = var1.maxNudgeAge;
            var14 = var1.maxNudgeCount;
            var2 = global;
            var3 = var2.Date;
            var1 = var3.now;
            var13 = var1.bind(var3)();
            var1 = {};
            var5 = var2.Object;
            var4 = var5.entries;
            var3 = arg1;
            var5 = var4.bind(var5)(var3);
            var4 = var5.sort;
            var3 = function(arg1, arg2) {
                var1 = arg2;
                var3 = 1;
                var1 = var1[var3];
                var2 = var1.timestamp;
                var1 = arg1;
                var1 = var1[var3];
                var1 = var1.timestamp;
                var1 = var2 - var1;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var3 = var5.length;
            var12 = 0;
            var4 = var12 < var3;
            var11 = undefined;
            var10 = 2;
            var9 = 1;
            var8 = null;
            var7 = 0;
            var6 = 0;
            if(!var4) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var16 = var5[var6];
            var4 = _closure1_slot7;
            var4 = var4.bind(var11)(var16, var10);
            var18 = var4[var12];
            var4 = var4[var9];
            var19 = var4.timestamp;
            var4 = var4.isActive;
            var16 = var7;
            if(!(var8 != var19)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var20 = var13 - var19;
            var17 = _closure1_slot15;
            var16 = var7;
            if(!(var20 < var17)) { _fun0005_ip = 42; continue _fun0005 }
case 44:
            if(!var4) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var17 = var13 - var19;
            var4 = var17 < var15;
case 45:
            if(!var4) { _fun0005_ip = 20; continue _fun0005 }
case 47:
            var4 = var7 < var14;
case 20:
            var17 = {};
            var17['timestamp'] = var19;
            var17['isActive'] = var4;
            var1[var18] = var17;
            var16 = var7;
            if(!var4) { _fun0005_ip = 42; continue _fun0005 }
case 48:
            var16 = var7 + 1;
case 42:
            var6 = var6 + 1;
            var4 = var5.length;
            var7 = var16;
            if(var6 < var4) { _fun0005_ip = 41; continue _fun0005 }
case 40:
            var4 = _closure1_slot16;
            var3 = var4.info;
            var6 = var5.length;
            var7 = var2.Object;
            var5 = var7.keys;
            var5 = var5.bind(var7)(var1);
            var5 = var5.length;
            var7 = var6 - var5;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var5 = 'Pruned ';
            var2 = ' expired nudges';
            var2 = var6.bind(var5)(var7, var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function maybeDismissNudge(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot18;
            var1 = var4 in var1;
            if(!var1) { _fun0006_ip = 11; continue _fun0006 }
case 49:
            var2 = _closure1_slot18;
            var2 = var2[var4];
            var2 = var2.isActive;
            var5 = !var2;
            var2 = !var5;
            if(var5) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var3 = _closure1_slot18;
            var4 = var3[var4];
            var3 = false;
            var4['isActive'] = var3;
            var2 = undefined;
case 50:
            var1 = var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function getActiveNudgeChannelIds() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = new Array(0);
            var2 = global;
            var4 = var2.Object;
            var3 = var4.entries;
            var2 = _closure1_slot18;
            var8 = var3.bind(var4)(var2);
            var2 = var8.length;
            var7 = 0;
            var2 = var7 < var2;
            var6 = undefined;
            var5 = 2;
            var4 = 1;
            var3 = 0;
            if(!var2) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var10 = var8[var3];
            var2 = _closure1_slot7;
            var2 = var2.bind(var6)(var10, var5);
            var10 = var2[var7];
            var2 = var2[var4];
            var2 = var2.isActive;
            if(!var2) { _fun0007_ip = 54; continue _fun0007 }
case 55:
            var2 = var1.push;
            var2 = var2.bind(var1)(var10);
case 54:
            var3 = var3 + 1;
            var2 = var8.length;
            if(var3 < var2) { _fun0007_ip = 53; continue _fun0007 }
case 52:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function getDMChannelAffinity(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot12;
            var1 = var4.getChannel;
            var6 = var1.bind(var4)(var2);
            var1 = null;
            if(!(var1 != var6)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
            var4 = var1 == var6;
            var7 = undefined;
            if(var4) { _fun0008_ip = 58; continue _fun0008 }
case 59:
            var4 = var6.isDM;
            var7 = var4.bind(var6)();
case 58:
            var4 = true;
            if(!(var4 === var7)) { _fun0008_ip = 41; continue _fun0008 }
case 60:
            var4 = var6.getRecipientId;
            var7 = var4.bind(var6)();
            var6 = _closure1_slot9;
            var4 = var6.getUserAffinity;
            var4 = var4.bind(var6)(var7);
            var6 = var1 == var4;
            var5 = undefined;
            if(var6) { _fun0008_ip = 61; continue _fun0008 }
case 55:
            var5 = var4.dmProbability;
case 61:
            var6 = var1 != var5;
            var4 = null;
            if(!var6) { _fun0008_ip = 62; continue _fun0008 }
case 63:
            var4 = var5;
case 62:
            return var4;
case 41:
            var7 = _closure1_slot16;
            var6 = var7.warn;
            var5 = {};
            var5['channelId'] = var2;
            var4 = 'getDMChannelAffinity: Channel is not a DM';
            var4 = var6.bind(var7)(var4, var5);
            return var1;
case 56:
            var5 = _closure1_slot16;
            var4 = var5.warn;
            var3 = {};
            var3['channelId'] = var2;
            var2 = 'getDMChannelAffinity: Unable to find channel';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function handleNudgeVisibilityChange() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 15;
            var1 = var6[var1];
            var2 = undefined;
            var1 = var3.bind(var2)(var1);
            var7 = var1.ReplyNudgeExperiment;
            var5 = var7.getConfig;
            var1 = {};
            var8 = 'handleNudgeVisibilityChange';
            var1['location'] = var8;
            var1 = var5.bind(var7)(var1);
            var5 = var1.displayNudges;
            var8 = var1.maxNudgeAge;
            var7 = var1.maxNudgeCount;
            var1 = 16;
            var1 = var6[var1];
            var1 = var3.bind(var2)(var1);
            var3 = var1.EnableDmReplyNudgeReminders;
            var1 = var3.getSetting;
            var3 = var1.bind(var3)();
            var1 = false;
            var3 = var1 !== var3;
            if(!var3) { _fun0009_ip = 64; continue _fun0009 }
case 65:
            var3 = var5;
case 64:
            var5 = _closure1_slot17;
            if(!(var5 !== var3)) { _fun0009_ip = 66; continue _fun0009 }
case 67:
            _closure1_slot17 = var3;
            if(!var3) { _fun0009_ip = 68; continue _fun0009 }
case 69:
            var6 = _closure1_slot23;
            var5 = _closure1_slot18;
            var3 = {};
            var3['maxNudgeAge'] = var8;
            var3['maxNudgeCount'] = var7;
            var3 = var6.bind(var2)(var5, var3);
            _closure1_slot18 = var3;
            var3 = global;
            var6 = var3.Set;
            var3 = _closure1_slot25;
            var10 = var3.bind(var2)();
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var11 = var5;
            var3 = new var11[var6](var10, var9);
            var3 = var3 instanceof Object ? var3 : var5;
            _closure1_slot19 = var3;
case 68:
            return var2;
case 66:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function handleUserGuildSettingsUpdate() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var1 = _closure1_slot18;
            var7 = var2.bind(var3)(var1);
            var1 = var7.length;
            var6 = 0;
            var2 = var6 < var1;
            var3 = false;
            var4 = null;
            var1 = false;
            if(!var2) { _fun0010_ip = 70; continue _fun0010 }
case 58:
            var9 = var7[var6];
            var10 = _closure1_slot14;
            var2 = var10.isChannelMuted;
            var2 = var2.bind(var10)(var4, var9);
            if(!var2) { _fun0010_ip = 71; continue _fun0010 }
case 72:
            var2 = _closure1_slot18;
            var2 = delete var2[var9];
            var3 = true;
case 71:
            var6 = var6 + 1;
            var2 = var7.length;
            var1 = var3;
            if(var6 < var2) { _fun0010_ip = 58; continue _fun0010 }
case 70:
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var8 = global;
    var10 = var8.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
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
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.MAX_LATEST_MESSAGE_AGE_MS;
    var _closure1_slot15 = var2;
    var2 = 14;
    var2 = var6[var2];
    var9 = var7.bind(var1)(var2);
    var2 = var9.prototype;
    var10 = Object.create(var2, {constructor: {value: var9}});
    var2 = 'ReplyNudgeStore';
    var14 = var10;
    var13 = var2;
    var9 = new var14[var9](var13, var12);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot16 = var9;
    var9 = false;
    var _closure1_slot17 = var9;
    var9 = {};
    var _closure1_slot18 = var9;
    var8 = var8.Set;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot19 = var8;
    var8 = 17;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var9 = var8.PersistedStore;
    var8 = function(arg1) {
        var4 = function ReplyNudgeStore() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
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
                var1 = _closure1_slot20;
                var1 = var1.bind(var3)();
                if(var1) { _fun0011_ip = 73; continue _fun0011 }
case 60:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0011_ip = 41; continue _fun0011;
case 73:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 41:
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
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = arg1;
                var5 = this;
                var2 = null;
                var6 = var2 == var4;
                var1 = undefined;
                var3 = undefined;
                if(var6) { _fun0012_ip = 74; continue _fun0012 }
case 75:
                var3 = var4.nudgedChannels;
case 74:
                if(!(var2 == var3)) { _fun0012_ip = 76; continue _fun0012 }
case 77:
                var3 = {};
case 76:
                _closure1_slot18 = var3;
                var11 = var5.waitFor;
                var3 = _closure1_slot8;
                var17 = _closure1_slot11;
                var16 = _closure1_slot12;
                var15 = _closure1_slot13;
                var14 = _closure1_slot9;
                var13 = _closure1_slot14;
                var7 = _closure1_slot10;
                var19 = var5;
                var18 = var3;
                var12 = var7;
                var4 = var19[var11](var18, var17, var16, var15, var14, var13, var12, var11);
                var6 = var5.syncWith;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var3;
                var3 = _closure1_slot27;
                var3 = var6.bind(var5)(var4, var3);
                var4 = var5.syncWith;
                var6 = _closure1_slot14;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = _closure1_slot28;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var2 = _closure1_slot18;
            var1['nudgedChannels'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getNudgeTimestamp';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = arg1;
                var1 = _closure1_slot17;
                var5 = null;
                if(var1) { _fun0013_ip = 49; continue _fun0013 }
case 78:
                return var5;
case 49:
                var1 = _closure1_slot18;
                var2 = var1[var4];
                var6 = var5 == var2;
                var1 = null;
                if(var6) { _fun0013_ip = 61; continue _fun0013 }
case 79:
                var2 = var2.isActive;
                if(var2) { _fun0013_ip = 80; continue _fun0013 }
case 81:
                var6 = _closure1_slot19;
                var2 = var6.has;
                var6 = var2.bind(var6)(var4);
                var2 = null;
                if(!var6) { _fun0013_ip = 82; continue _fun0013 }
case 80:
                var3 = _closure1_slot18;
                var3 = var3[var4];
                var3 = var3.timestamp;
                var4 = var5 != var3;
                var2 = null;
                if(!var4) { _fun0013_ip = 82; continue _fun0013 }
case 55:
                var2 = var3;
case 82:
                var1 = var2;
case 61:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isChannelNudged';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arguments[1];
                var3 = undefined;
                if(!(var1 === var3)) { _fun0014_ip = 83; continue _fun0014 }
case 84:
                var1 = {};
case 83:
                var1 = var1.includeInvisible;
                if(!(var1 === var3)) { _fun0014_ip = 35; continue _fun0014 }
case 85:
                var1 = false;
case 35:
                var4 = _closure1_slot17;
                var4 = !var4;
                if(!var4) { _fun0014_ip = 86; continue _fun0014 }
case 87:
                var4 = !var1;
case 86:
                var1 = !var4;
                if(var4) { _fun0014_ip = 88; continue _fun0014 }
case 58:
                var4 = _closure1_slot18;
                var2 = arg1;
                var2 = var4[var2];
                var4 = null;
                var4 = var4 == var2;
                var3 = undefined;
                if(var4) { _fun0014_ip = 89; continue _fun0014 }
case 34:
                var3 = var2.isActive;
case 89:
                var2 = true;
                var1 = var2 === var3;
case 88:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var8.bind(var1)(var9);
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 18;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleReplyNudgeSet(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var2 = arg1;
            var1 = var2.channelId;
            var8 = var2.timestamp;
            var4 = _closure1_slot14;
            var3 = var4.isChannelMuted;
            var5 = null;
            var3 = var3.bind(var4)(var5, var1);
            if(var3) { _fun0015_ip = 90; continue _fun0015 }
case 91:
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 15;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var7 = var3.ReplyNudgeExperiment;
            var6 = var7.getConfig;
            var3 = {};
            var9 = 'handleReplyNudgeSet';
            var3['location'] = var9;
            var3 = var6.bind(var7)(var3);
            var10 = var3.maxNudgeAge;
            var6 = var3.maxNudgeCount;
            var9 = _closure1_slot23;
            var7 = _closure1_slot18;
            var3 = {};
            var3['maxNudgeAge'] = var10;
            var3['maxNudgeCount'] = var6;
            var3 = var9.bind(var4)(var7, var3);
            _closure1_slot18 = var3;
            var3 = var1 in var3;
            if(var3) { _fun0015_ip = 92; continue _fun0015 }
case 93:
            var3 = _closure1_slot25;
            var7 = var3.bind(var4)();
            var3 = var7.length;
            if(!(var3 >= var6)) { _fun0015_ip = 94; continue _fun0015 }
case 46:
            var6 = var7.at;
            var3 = -1;
            var10 = var6.bind(var7)(var3);
            var3 = _closure1_slot21;
            var13 = var3.bind(var4)(var7);
            var9 = var13.bind(var4)();
            var3 = var9.done;
            var7 = inf;
            var12 = 'handleReplyNudgeSet: Nudge affinity is null';
            var11 = var9;
            var9 = var7;
            var6 = var10;
            var7 = var9;
            if(var3) { _fun0015_ip = 12; continue _fun0015 }
case 95:
            var16 = var11.value;
            var3 = _closure1_slot26;
            var3 = var3.bind(var4)(var16);
            if(!(var5 == var3)) { _fun0015_ip = 96; continue _fun0015 }
case 97:
            var17 = _closure1_slot16;
            var15 = var17.warn;
            var14 = {};
            var14['nudgedChannelId'] = var16;
            var14 = var15.bind(var17)(var12, var14);
            var15 = var10;
            var14 = var9;
            _fun0015_ip = 98; continue _fun0015;
case 96:
            var15 = var10;
            var14 = var9;
            if(!(var3 < var9)) { _fun0015_ip = 98; continue _fun0015 }
case 99:
            var15 = var16;
            var14 = var3;
case 98:
            var16 = var13.bind(var4)();
            var3 = var16.done;
            var10 = var15;
            var9 = var14;
            var11 = var16;
            var6 = var10;
            var7 = var9;
            if(!var3) { _fun0015_ip = 95; continue _fun0015 }
case 12:
            var3 = _closure1_slot26;
            var3 = var3.bind(var4)(var1);
            if(!(var5 != var3)) { _fun0015_ip = 100; continue _fun0015 }
case 101:
            if(!(!(var3 < var7))) { _fun0015_ip = 102; continue _fun0015 }
case 103:
            var11 = _closure1_slot16;
            var10 = var11.info;
            var9 = {};
            var9['channelId'] = var1;
            var9['lowestAffinity'] = var7;
            var9['newNudgeAffinity'] = var3;
            var5 = 'handleReplyNudgeSet: Evicting nudge with lowest affinity';
            var5 = var10.bind(var11)(var5, var9);
            var5 = _closure1_slot18;
            var5 = delete var5[var6];
case 94:
            var6 = _closure1_slot18;
            var5 = {};
            var5['timestamp'] = var8;
            var8 = true;
            var5['isActive'] = var8;
            var6[var1] = var5;
            var6 = _closure1_slot19;
            var5 = var6.add;
            var5 = var5.bind(var6)(var1);
            return var4;
case 102:
            var6 = _closure1_slot16;
            var5 = var6.info;
            var4 = {};
            var4['channelId'] = var1;
            var4['lowestAffinity'] = var7;
            var4['newNudgeAffinity'] = var3;
            var3 = 'handleReplyNudgeSet: New nudge is lower than the lowest affinity. No space to nudge.';
            var3 = var5.bind(var6)(var3, var4);
            var3 = false;
            return var3;
case 100:
            var4 = _closure1_slot16;
            var3 = var4.warn;
            var2 = {};
            var2['channelId'] = var1;
            var1 = 'handleReplyNudgeSet: New nudge affinity is null';
            var1 = var3.bind(var4)(var1, var2);
            var1 = false;
            return var1;
case 92:
            var1 = false;
            return var1;
case 90:
            var1 = false;
            return var1;
        }
    };
    var2['REPLY_NUDGE_SET'] = var9;
    var9 = function handleReplyNudgeClear(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot24;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var2['REPLY_NUDGE_CLEAR'] = var9;
    var9 = function handleMessageCreate(arg1) {
        var1 = arg1;
        var1 = var1.message;
        var3 = _closure1_slot24;
        var2 = var1.channel_id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var2['MESSAGE_CREATE'] = var9;
    var9 = function handleMessageReactionAdd(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = var1.userId;
            var5 = _closure1_slot11;
            var1 = var5.getId;
            var1 = var1.bind(var5)();
            var1 = var3 === var1;
            if(!var1) { _fun0016_ip = 104; continue _fun0016 }
case 105:
            var3 = _closure1_slot24;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 104:
            return var1;
        }
    };
    var2['MESSAGE_REACTION_ADD'] = var9;
    var9 = function handleChannelSelect() {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = _closure1_slot13;
            var1 = var3.getLastSelectedChannelId;
            var4 = var1.bind(var3)();
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0017_ip = 105; continue _fun0017 }
case 57:
            var3 = _closure1_slot24;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 105:
            return var1;
        }
    };
    var2['CHANNEL_SELECT'] = var9;
    var9 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var3 = var1.id;
        var2 = _closure1_slot24;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var2['CHANNEL_DELETE'] = var9;
    var4 = function handleLogout() {
        var1 = {};
        _closure1_slot18 = var1;
        var1 = global;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var4 = var3;
        var1 = new var4[var1](var3);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot19 = var1;
        var1 = false;
        _closure1_slot17 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reply_nudge/ReplyNudgeStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();