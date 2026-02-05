// app/modules/reply_nudge/ReplyNudgeManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot24;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot24;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 37: // try_end0
            _fun0004_ip = 38; continue _fun0004;
case 39: // catch_target0
            CatchBlockStart(arg_register=1);
case 38:
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
    var1 = function hasReacted(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var5 = var1.reactions;
            var1 = null;
            var3 = var1 == var5;
            var2 = undefined;
            if(var3) { _fun0005_ip = 40; continue _fun0005 }
case 29:
            var4 = var5.some;
            var3 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.me;
                    if(var1) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var1 = var2.me_burst;
case 41:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3);
case 40:
            var1 = var1 != var2;
            if(!var1) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var1 = var2;
case 43:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 14;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.MAX_LATEST_MESSAGE_AGE_MS;
    var _closure1_slot17 = var8;
    var8 = var4.NUDGE_TIMESTAMP_OFFSET_MS;
    var _closure1_slot18 = var8;
    var4 = var4.MESSAGE_LOOKBEHIND_COUNT;
    var _closure1_slot19 = var4;
    var4 = 15;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot20 = var8;
    var4 = var4.Consents;
    var _closure1_slot21 = var4;
    var4 = 16;
    var4 = var7[var4];
    var9 = var5.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'ReplyNudgeManager';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot22 = var4;
    var4 = 25;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function ReplyNudgeManager(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot5;
                var2 = _closure2_slot3;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot8;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot25;
                var1 = var1.bind(var4)();
                if(var1) { _fun0007_ip = 9; continue _fun0007 }
case 45:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0007_ip = 46; continue _fun0007;
case 9:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot8;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 46:
                var1 = var2.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = global;
                var2 = var2.Set;
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var14 = var4;
                var2 = new var14[var2](var13);
                var2 = var2 instanceof Object ? var2 : var4;
                var1['pendingFetch'] = var2;
                var2 = null;
                var1['updateInterval'] = var2;
                var2 = {};
                var3 = function POST_CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.handlePostConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2['POST_CONNECTION_OPEN'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot3 = var4;
        var2 = _closure1_slot9;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot6;
        var5 = {};
        var1 = '_terminate';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var1 = global;
            var4 = var1.clearInterval;
            var2 = var3.updateInterval;
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = null;
            var3['updateInterval'] = var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var8 = 'handlePostConnectionOpen';
        var5['key'] = var8;
        var8 = function value() {
            var3 = this;
            var _closure3_slot0 = var3;
            var4 = global;
            var6 = var4.clearInterval;
            var5 = var3.updateInterval;
            var1 = undefined;
            var5 = var6.bind(var1)(var5);
            var5 = var4.setInterval;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 20;
            var4 = var7[var4];
            var4 = var6.bind(var1)(var4);
            var4 = var4.Millis;
            var6 = var4.MINUTE;
            var4 = 30;
            var4 = var4 * var6;
            var2 = function() {
                var2 = _closure3_slot0;
                var1 = var2.updateReplyNudges;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var2 = var5.bind(var1)(var2, var4);
            var3['updateInterval'] = var2;
            var2 = var3.updateReplyNudges;
            var2 = var2.bind(var3)();
            return var1;
        };
        var5['value'] = var8;
        var1[1] = var5;
        var5 = {};
        var8 = 'updateReplyNudges';
        var5['key'] = var8;
        var8 = _closure1_slot4;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var7 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                    var2 = undefined;
                    var8 = undefined;
                    var5 = undefined;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var6 = 17;
                    var4 = var4[var6];
                    var4 = var9.bind(var2)(var4);
                    var9 = var4.EnableDmReplyNudgeReminders;
                    var4 = var9.getSetting;
                    var9 = var4.bind(var9)();
                    var4 = false;
                    var4 = var4 !== var9;
                    if(!var4) { _fun0008_ip = 49; continue _fun0008 }
case 30:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = var11[var6];
                    var6 = var10.bind(var2)(var6);
                    var9 = var6.MessagePreviewSetting;
                    var6 = var9.getSetting;
                    var9 = var6.bind(var9)();
                    var6 = 18;
                    var6 = var11[var6];
                    var6 = var10.bind(var2)(var6);
                    var6 = var6.MessagePreviewTypes;
                    var6 = var6.ALL;
                    var4 = var9 === var6;
case 49:
                    if(!var4) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                    var10 = _closure1_slot12;
                    var9 = var10.hasConsented;
                    var6 = _closure1_slot21;
                    var6 = var6.PERSONALIZATION;
                    var4 = var9.bind(var10)(var6);
case 50:
                    if(!var4) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 21;
                    var4 = var9[var4];
                    var4 = var6.bind(var2)(var4);
                    var9 = var4.ReplyNudgeExperiment;
                    var6 = var9.getConfig;
                    var4 = {};
                    var10 = 'ReplyNudgeManager._initialize';
                    var4['location'] = var10;
                    var4 = var6.bind(var9)(var4);
                    var4 = var4.enabled;
                    if(!var4) { _fun0008_ip = 52; continue _fun0008 }
case 54:
                    var9 = _closure1_slot22;
                    var6 = var9.info;
                    var4 = 'Updating most recent DMs';
                    var4 = var6.bind(var9)(var4);
case 55: // try_start_0
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 22;
                    var4 = var9[var4];
                    var6 = var6.bind(var2)(var4);
                    var4 = var6.messages;
                    var4 = var4.bind(var6)();
                    var8 = var4;
                    var6 = null;
                    var9 = var6 == var4;
                    var4 = undefined;
                    if(var9) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var9 = var8;
                    var8 = var9.getMostRecents;
                    var4 = var8.bind(var9)(var6);
case 56:
                    SaveGenerator(address=305);
case 58:
                    return var4;
case 59:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                    var5 = var4;
                    if(!(var6 != var4)) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var6 = var7.processMostRecentDMs;
                    var9 = var5;
                    var8 = var9.map;
                    var5 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var5 = arg1;
                            var1 = var5[Symbol.iterator];
                            var5 = var1().next;
                            var2 = var5().value;
                            var3 = var1;
                            var7 = undefined;
                            var4 = var3 === var7;
                            var3 = undefined;
                            if(var4) { _fun0009_ip = 64; continue _fun0009 }
case 65:
                            var3 = var2;
case 64:
                            var2 = undefined;
                            if(var4) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                            var6 = var5().value;
                            var5 = var1;
                            var5 = var5 === var7;
                            var2 = undefined;
                            var4 = var5;
                            if(var5) { _fun0009_ip = 66; continue _fun0009 }
case 68:
                            var2 = var6;
                            var4 = var5;
case 66:
                            if(var4) { _fun0009_ip = 69; continue _fun0009 }
case 70:
                            var1.return();
case 69:
                            var1 = new Array(2);
                            var1[0] = var3;
                            var2 = var2.message;
                            var1[1] = var2;
                            return var1;
                        }
                    };
                    var5 = var8.bind(var9)(var5);
                    var5 = var6.bind(var7)(var5);
case 71: // try_end0
                    _fun0008_ip = 52; continue _fun0008;
case 62: // try_start_1
                    var7 = _closure1_slot22;
                    var6 = var7.warn;
                    var5 = 'No recent DMs loaded from local database';
                    var5 = var6.bind(var7)(var5);
case 72: // try_end1
                    var5 = undefined;
                    return var5;
case 60:
                    return var4;
case 73: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=5);
                    var5 = _closure1_slot22;
                    var4 = var5.error;
                    var3 = 'Error updating most recent DMs';
                    var3 = var4.bind(var5)(var3, var6);
case 52:
                    return var2;
case 47:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot2 = var7;
        var7 = function updateReplyNudges() {
            var1 = undefined;
            var4 = _closure2_slot2;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'nudgeChannel';
        var5['key'] = var7;
        var7 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 74; continue _fun0010 }
case 48:
                    var6 = _closure1_slot16;
                    var5 = var6.isChannelNudged;
                    var3 = {};
                    var7 = true;
                    var3['includeInvisible'] = var7;
                    var5 = var5.bind(var6)(var4, var3);
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 23;
                    var6 = var6[var3];
                    var3 = undefined;
                    var10 = var7.bind(var3)(var6);
                    var9 = var10.setReplyNudge;
                    var6 = global;
                    var7 = var6.Date;
                    var6 = var7.now;
                    var6 = var6.bind(var7)();
                    var2 = _closure1_slot18;
                    var14 = var6 + var2;
                    var13 = arg2;
                    var12 = arg3;
                    var11 = arg4;
                    var16 = var10;
                    var15 = var4;
                    var2 = var16[var9](var15, var14, var13, var12, var11, var10);
                    SaveGenerator(address=117);
case 75:
                    return var2;
case 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                    var3 = undefined;
                    if(var5) { _fun0010_ip = 51; continue _fun0010 }
case 49:
                    var3 = var4;
case 51:
                    return var3;
case 77:
                    return var2;
case 74:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot1 = var7;
        var7 = function nudgeChannel() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'fetchLookbehindMessages';
        var5['key'] = var7;
        var7 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(var5) { _fun0011_ip = 79; continue _fun0011 }
case 41:
                    var3 = var2;
                    var _closure4_slot0 = var2;
                    var6 = arg2;
                    var7 = arg3;
                    var2 = undefined;
                    var _closure4_slot1 = var2;
                    var11 = undefined;
                    var13 = undefined;
                    var8 = undefined;
case 80: // try_start_0 // try_start_2
                    var12 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var5 = 22;
                    var5 = var14[var5];
                    var12 = var12.bind(var2)(var5);
                    var5 = var12.messages;
                    var5 = var5.bind(var12)();
                    _closure4_slot1 = var5;
                    var12 = null;
                    if(!(var12 != var5)) { _fun0011_ip = 81; continue _fun0011 }
case 82:
                    var16 = _closure1_slot22;
                    var15 = var16.timeAsync;
                    var5 = var3;
                    var17 = var5.channel_id;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var14 = var5.concat;
                    var5 = 'fetching lookbehind messages for ';
                    var14 = var14.bind(var5)(var17);
                    var5 = function() {
                        var5 = _closure4_slot1;
                        var4 = var5.getLatest;
                        var1 = _closure4_slot0;
                        var3 = var1.channel_id;
                        var2 = _closure1_slot19;
                        var1 = null;
                        var1 = var4.bind(var5)(var1, var3, var2);
                        return var1;
                    };
                    var5 = var15.bind(var16)(var14, var5);
                    SaveGenerator(address=148);
case 83:
                    return var5;
case 84:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=13);
                    if(var14) { _fun0011_ip = 85; continue _fun0011 }
case 86:
                    var15 = var3;
                    var8 = var15.id;
                    var14 = var5.map;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.message;
                        return var1;
                    };
                    var14 = var14.bind(var5)(var9);
                    var26 = var6;
                    var9 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var19 = 19;
                    var6 = var6[var19];
                    var16 = var9.bind(var2)(var6);
                    var9 = var16.extractTimestamp;
                    var6 = var15.id;
                    var25 = var9.bind(var16)(var6);
                    var6 = var14.length;
                    var9 = 0;
                    var6 = var9 < var6;
                    var20 = 1;
                    var22 = 0;
                    var21 = undefined;
                    var18 = undefined;
                    var17 = undefined;
                    if(!var6) { _fun0011_ip = 87; continue _fun0011 }
case 18:
                    var30 = var14[var22];
                    var16 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var19];
                    var28 = var16.bind(var2)(var6);
                    var27 = var28.compare;
                    var16 = var30.id;
                    var6 = var15.id;
                    var6 = var27.bind(var28)(var16, var6);
                    if(!(!(var6 >= var9))) { _fun0011_ip = 88; continue _fun0011 }
case 89:
                    var16 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var19];
                    var27 = var16.bind(var2)(var6);
                    var16 = var27.extractTimestamp;
                    var6 = var30.id;
                    var16 = var16.bind(var27)(var6);
                    var6 = var25 - var26;
                    var16 = var16 < var6;
                    var6 = true;
                    if(var16) { _fun0011_ip = 90; continue _fun0011 }
case 91:
                    var29 = var30.author;
                    var28 = null;
                    if(!(var22 > var9)) { _fun0011_ip = 92; continue _fun0011 }
case 93:
                    var16 = var22 - var20;
                    var28 = var14[var16];
case 92:
                    var16 = var12 == var28;
                    var27 = undefined;
                    if(var16) { _fun0011_ip = 73; continue _fun0011 }
case 94:
                    var27 = var28.author;
case 73:
                    if(!(var12 != var29)) { _fun0011_ip = 95; continue _fun0011 }
case 96:
                    if(!(var12 != var27)) { _fun0011_ip = 95; continue _fun0011 }
case 97:
                    var31 = var29.id;
                    var16 = var27.id;
                    var6 = false;
                    if(!(var31 === var16)) { _fun0011_ip = 90; continue _fun0011 }
case 95:
                    var16 = _closure1_slot26;
                    var16 = var16.bind(var2)(var30);
                    var21 = var29;
                    var18 = var28;
                    var17 = var27;
                    var6 = false;
                    if(var16) { _fun0011_ip = 90; continue _fun0011 }
case 88:
                    var22 = var22 + 1;
                    var16 = var14.length;
                    if(var22 < var16) { _fun0011_ip = 18; continue _fun0011 }
case 87:
                    var17 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var16 = var16[var19];
                    var17 = var17.bind(var2)(var16);
                    var16 = var17.age;
                    var15 = var15.channel_id;
                    var16 = var16.bind(var17)(var15);
                    var15 = var14.length;
                    var17 = var15 > var9;
                    var15 = 0;
                    if(!var17) { _fun0011_ip = 98; continue _fun0011 }
case 99:
                    var18 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var17 = var17[var19];
                    var19 = var18.bind(var2)(var17);
                    var18 = var19.age;
                    var17 = var14.length;
                    var17 = var17 - var20;
                    var17 = var14[var17];
                    var17 = var17.id;
                    var15 = var18.bind(var19)(var17);
case 98:
                    var9 = var15 > var9;
                    if(!var9) { _fun0011_ip = 100; continue _fun0011 }
case 101:
                    var16 = var16 - var15;
                    var17 = _closure1_slot1;
                    var18 = _closure1_slot2;
                    var15 = 20;
                    var15 = var18[var15];
                    var15 = var17.bind(var2)(var15);
                    var15 = var15.Millis;
                    var17 = var15.MINUTE;
                    var15 = 5;
                    var15 = var15 * var17;
                    var9 = var16 < var15;
case 100:
                    var14 = var14.length;
                    var10 = _closure1_slot19;
                    var10 = var14 < var10;
                    if(!var9) { _fun0011_ip = 102; continue _fun0011 }
case 103:
                    var9 = var10;
case 102:
                    var6 = var9;
case 90:
                    if(var6) { _fun0011_ip = 104; continue _fun0011 }
case 105: // try_end0
                    _fun0011_ip = 106; continue _fun0011;
case 104: // try_start_1
                    var10 = var4.nudgeChannel;
                    var6 = var3;
                    var9 = var6.channel_id;
                    var6 = var6.author;
                    var13 = var6;
                    var14 = var12 == var6;
                    var6 = undefined;
                    if(var14) { _fun0011_ip = 107; continue _fun0011 }
case 108:
                    var6 = var13.id;
case 107:
                    var11 = var6;
                    var12 = var12 != var6;
                    var6 = '0';
                    if(!var12) { _fun0011_ip = 109; continue _fun0011 }
case 110:
                    var6 = var11;
case 109:
                    var36 = var4;
                    var35 = var9;
                    var34 = var8;
                    var33 = var7;
                    var32 = var6;
                    var6 = var36[var10](var35, var34, var33, var32, var31);
case 111: // try_end1 // try_end2
                    var9 = var4.pendingFetch;
                    var8 = var9.delete;
                    var7 = var3;
                    var7 = var7.channel_id;
                    var7 = var8.bind(var9)(var7);
                    return var6;
case 85:
                    var8 = var4.pendingFetch;
                    var7 = var8.delete;
                    var6 = var3;
                    var6 = var6.channel_id;
                    var6 = var7.bind(var8)(var6);
                    return var5;
case 81:
                    var7 = var4.pendingFetch;
                    var6 = var7.delete;
                    var5 = var3;
                    var5 = var5.channel_id;
                    var5 = var6.bind(var7)(var5);
                    return var2;
case 112: // try_start_3 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot22;
                    var6 = var7.error;
                    var5 = 'Error fetching lookbehind messages';
                    var5 = var6.bind(var7)(var5, var8);
case 106: // try_end3
                    var7 = var4.pendingFetch;
                    var6 = var7.delete;
                    var5 = var3;
                    var5 = var5.channel_id;
                    var5 = var6.bind(var7)(var5);
                    return var2;
case 113: // catch_target2 // catch_target3
                    CatchBlockStart(arg_register=1);
                    var5 = var4.pendingFetch;
                    var4 = var5.delete;
                    var3 = var3.channel_id;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
case 79:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var7 = function fetchLookbehindMessages() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'processMostRecentDMs';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 21;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = var3.ReplyNudgeExperiment;
                var4 = var5.getConfig;
                var3 = {};
                var6 = 'handleMessagePreviewsLocallyLoaded';
                var3['location'] = var6;
                var3 = var4.bind(var5)(var3);
                var4 = var3.minUserDMAffinity;
                var _closure3_slot2 = var4;
                var4 = var3.minSinceReceiverMessageMs;
                var _closure3_slot3 = var4;
                var3 = var3.minLatestMessageAgeMs;
                var _closure3_slot4 = var3;
                var3 = global;
                var5 = var3.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
                var _closure3_slot5 = var4;
                var5 = _closure1_slot11;
                var4 = var5.getId;
                var4 = var4.bind(var5)();
                var _closure3_slot6 = var4;
                var5 = new Array(0);
                var _closure3_slot7 = var5;
                var11 = function _loop(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var4 = arg1;
                        var _closure4_slot0 = var4;
                        var6 = _closure1_slot13;
                        var5 = var6.lastMessageId;
                        var1 = _closure3_slot8;
                        var5 = var5.bind(var6)(var1);
                        var1 = var4.id;
                        if(!(var5 === var1)) { _fun0013_ip = 114; continue _fun0013 }
case 2:
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 19;
                        var9 = var8[var5];
                        var1 = undefined;
                        var11 = var6.bind(var1)(var9);
                        var10 = var11.extractTimestamp;
                        var9 = var4.id;
                        var12 = var10.bind(var11)(var9);
                        var5 = var8[var5];
                        var9 = var6.bind(var1)(var5);
                        var8 = var9.extractTimestamp;
                        var10 = _closure1_slot13;
                        var6 = var10.ackMessageId;
                        var5 = _closure3_slot8;
                        var10 = var6.bind(var10)(var5);
                        var6 = null;
                        var11 = var6 != var10;
                        var5 = '0';
                        if(!var11) { _fun0013_ip = 115; continue _fun0013 }
case 116:
                        var5 = var10;
case 115:
                        var11 = var8.bind(var9)(var5);
                        var9 = _closure3_slot5;
                        var5 = global;
                        var10 = var5.Math;
                        var8 = var10.max;
                        var8 = var8.bind(var10)(var12, var11);
                        var10 = var9 - var8;
                        var9 = var6 == var4;
                        var8 = undefined;
                        if(var9) { _fun0013_ip = 117; continue _fun0013 }
case 118:
                        var9 = var4.author;
                        var11 = var6 == var9;
                        var8 = undefined;
                        if(var11) { _fun0013_ip = 117; continue _fun0013 }
case 119:
                        var8 = var9.id;
case 117:
                        var8 = var6 != var8;
                        if(!var8) { _fun0013_ip = 120; continue _fun0013 }
case 121:
                        var12 = _closure1_slot14;
                        var11 = var12.isBlocked;
                        var9 = var4.author;
                        var9 = var9.id;
                        var9 = var11.bind(var12)(var9);
                        if(var9) { _fun0013_ip = 122; continue _fun0013 }
case 123:
                        var13 = _closure1_slot14;
                        var12 = var13.isIgnored;
                        var11 = var4.author;
                        var11 = var11.id;
                        var9 = var12.bind(var13)(var11);
case 122:
                        var8 = var9;
case 120:
                        var9 = _closure3_slot4;
                        if(!(!(var10 < var9))) { _fun0013_ip = 124; continue _fun0013 }
case 125:
                        var9 = _closure1_slot17;
                        if(!(!(var10 > var9))) { _fun0013_ip = 124; continue _fun0013 }
case 126:
                        var9 = var4.author;
                        if(!(var6 != var9)) { _fun0013_ip = 124; continue _fun0013 }
case 127:
                        var9 = var4.author;
                        var10 = var9.id;
                        var9 = _closure3_slot6;
                        if(!(var10 !== var9)) { _fun0013_ip = 124; continue _fun0013 }
case 128:
                        var9 = _closure1_slot26;
                        var9 = var9.bind(var1)(var4);
                        if(var9) { _fun0013_ip = 124; continue _fun0013 }
case 129:
                        var9 = var4.author;
                        if(!(var6 != var9)) { _fun0013_ip = 130; continue _fun0013 }
case 131:
                        var9 = var9.bot;
                        if(var9) { _fun0013_ip = 124; continue _fun0013 }
case 130:
                        if(var8) { _fun0013_ip = 124; continue _fun0013 }
case 132:
                        var9 = _closure1_slot10;
                        var8 = var9.getUserAffinity;
                        var7 = var4.author;
                        var7 = var7.id;
                        var7 = var8.bind(var9)(var7);
                        var8 = var6 == var7;
                        var1 = undefined;
                        if(var8) { _fun0013_ip = 133; continue _fun0013 }
case 134:
                        var1 = var7.dmProbability;
case 133:
                        var7 = var6 != var1;
                        var6 = -1;
                        if(!var7) { _fun0013_ip = 135; continue _fun0013 }
case 136:
                        var6 = var1;
case 135:
                        var _closure4_slot1 = var6;
                        var1 = _closure3_slot2;
                        var6 = var6 < var1;
                        var1 = 0;
                        if(var6) { _fun0013_ip = 137; continue _fun0013 }
case 88:
                        var6 = _closure3_slot1;
                        var9 = var6.pendingFetch;
                        var8 = var9.has;
                        var6 = var4.channel_id;
                        var6 = var8.bind(var9)(var6);
                        var1 = 0;
                        if(var6) { _fun0013_ip = 137; continue _fun0013 }
case 138:
                        var6 = _closure3_slot1;
                        var7 = var6.pendingFetch;
                        var6 = var7.add;
                        var4 = var4.channel_id;
                        var4 = var6.bind(var7)(var4);
                        var4 = _closure3_slot7;
                        var3 = var4.push;
                        var6 = var5.Promise;
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {constructor: {value: var6}});
                        var15 = function(arg1, arg2) {
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var1 = arg2;
                            var _closure5_slot1 = var1;
                            var1 = global;
                            var3 = var1.requestIdleCallback;
                            var1 = undefined;
                            var2 = function() {
                                var5 = _closure3_slot1;
                                var4 = var5.fetchLookbehindMessages;
                                var3 = _closure4_slot0;
                                var2 = _closure3_slot3;
                                var1 = _closure4_slot1;
                                var4 = var4.bind(var5)(var3, var2, var1);
                                var3 = var4.then;
                                var2 = _closure5_slot0;
                                var1 = _closure5_slot1;
                                var1 = var3.bind(var4)(var2, var1);
                                var1 = undefined;
                                return var1;
                            };
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var16 = var5;
                        var2 = new var16[var6](var15, var14);
                        var2 = var2 instanceof Object ? var2 : var5;
                        var2 = var3.bind(var4)(var2);
                        var1 = undefined;
case 137:
                        return var1;
case 124:
                        var1 = 0;
                        return var1;
case 114:
                        var1 = 0;
                        return var1;
                    }
                };
                var6 = _closure1_slot23;
                var4 = arg1;
                var10 = var6.bind(var1)(var4);
                var6 = var10.bind(var1)();
                var4 = var6.done;
                var9 = 2;
                var8 = 0;
                var7 = 1;
                if(var4) { _fun0012_ip = 139; continue _fun0012 }
case 140:
                var13 = var6.value;
                var4 = _closure1_slot3;
                var4 = var4.bind(var1)(var13, var9);
                var13 = var4[var8];
                var _closure3_slot8 = var13;
                var4 = var4[var7];
                var4 = var11.bind(var1)(var4);
                var13 = var10.bind(var1)();
                var4 = var13.done;
                var6 = var13;
                if(!var4) { _fun0012_ip = 140; continue _fun0012 }
case 139:
                var4 = var3.Promise;
                var3 = var4.allSettled;
                var4 = var3.bind(var4)(var5);
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var4 = new Array(0);
                        var5 = _closure1_slot23;
                        var1 = undefined;
                        var3 = arg1;
                        var10 = var5.bind(var1)(var3);
                        var5 = var10.bind(var1)();
                        var3 = var5.done;
                        var9 = true;
                        var8 = null;
                        var7 = 'fulfilled';
                        var6 = var5;
                        var5 = undefined;
                        if(var3) { _fun0014_ip = 51; continue _fun0014 }
case 141:
                        var3 = var6.value;
                        var11 = var3.status;
                        if(!(var7 === var11)) { _fun0014_ip = 142; continue _fun0014 }
case 143:
                        var3 = var3.value;
                        var11 = var8 != var3;
                        if(!var11) { _fun0014_ip = 144; continue _fun0014 }
case 39:
                        var14 = _closure1_slot16;
                        var13 = var14.isChannelNudged;
                        var12 = {};
                        var12['includeInvisible'] = var9;
                        var11 = var13.bind(var14)(var3, var12);
case 144:
                        var5 = var3;
                        if(!var11) { _fun0014_ip = 142; continue _fun0014 }
case 145:
                        var11 = var4.push;
                        var11 = var11.bind(var4)(var3);
                        var5 = var3;
case 142:
                        var11 = var10.bind(var1)();
                        var3 = var11.done;
                        var6 = var11;
                        if(!var3) { _fun0014_ip = 141; continue _fun0014 }
case 51:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 23;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.setNudgesInitialized;
                        var2 = var2.bind(var3)();
                        var3 = _closure3_slot0;
                        var2 = var3.trackNudgesCreated;
                        var2 = var2.bind(var3)(var4);
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'trackNudgesCreated';
        var5['key'] = var7;
        var6 = function trackNudgesCreated(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var10 = arg1;
                var3 = var10.length;
                var1 = 0;
                if(!(var1 !== var3)) { _fun0015_ip = 146; continue _fun0015 }
case 147:
                var4 = _closure1_slot15;
                var3 = var4.getPrivateChannelIds;
                var3 = var3.bind(var4)();
                var _closure3_slot0 = var3;
                var4 = var10.map;
                var3 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.indexOf;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var9 = var4.bind(var10)(var3);
                var4 = var10.map;
                var3 = function(arg1) {
                    var4 = _closure1_slot16;
                    var3 = var4.getChannelNudge;
                    var2 = {};
                    var1 = true;
                    var2['includeInvisible'] = var1;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var4 = var4.bind(var10)(var3);
                var5 = var4.map;
                var3 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var3 = arg1;
                        var1 = null;
                        var4 = var1 == var3;
                        var2 = undefined;
                        if(var4) { _fun0016_ip = 29; continue _fun0016 }
case 32:
                        var2 = var3.affinity;
case 29:
                        var3 = var1 != var2;
                        var1 = -2;
                        if(!var3) { _fun0016_ip = 148; continue _fun0016 }
case 33:
                        var1 = var2;
case 148:
                        return var1;
                    }
                };
                var8 = var5.bind(var4)(var3);
                var5 = var4.map;
                var3 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var2 = arg1;
                        var3 = null;
                        var4 = var3 == var2;
                        var1 = undefined;
                        if(var4) { _fun0017_ip = 29; continue _fun0017 }
case 32:
                        var1 = var2.authorId;
case 29:
                        var1 = var3 != var1;
                        if(!var1) { _fun0017_ip = 68; continue _fun0017 }
case 64:
                        var4 = _closure1_slot14;
                        var3 = var4.isFriend;
                        var2 = var2.authorId;
                        var1 = var3.bind(var4)(var2);
case 68:
                        return var1;
                    }
                };
                var7 = var5.bind(var4)(var3);
                var5 = var4.map;
                var3 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var3 = arg1;
                        var1 = null;
                        var4 = var1 == var3;
                        var2 = undefined;
                        if(var4) { _fun0018_ip = 29; continue _fun0018 }
case 32:
                        var2 = var3.authorId;
case 29:
                        var3 = var1 != var2;
                        var1 = '0';
                        if(!var3) { _fun0018_ip = 148; continue _fun0018 }
case 33:
                        var1 = var2;
case 148:
                        return var1;
                    }
                };
                var6 = var5.bind(var4)(var3);
                var3 = var4.map;
                var2 = function(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var3 = arg1;
                        var1 = null;
                        var4 = var1 == var3;
                        var2 = undefined;
                        if(var4) { _fun0019_ip = 29; continue _fun0019 }
case 32:
                        var2 = var3.lastMessageId;
case 29:
                        var3 = var1 != var2;
                        var1 = '0';
                        if(!var3) { _fun0019_ip = 148; continue _fun0019 }
case 33:
                        var1 = var2;
case 148:
                        return var1;
                    }
                };
                var5 = var3.bind(var4)(var2);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 24;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.track;
                var1 = _closure1_slot20;
                var2 = var1.REPLY_NUDGES_CREATED;
                var1 = {};
                var1['channel_ids'] = var10;
                var1['channel_dm_list_indexes'] = var9;
                var1['nudge_author_affinities'] = var8;
                var1['nudge_author_is_friend'] = var7;
                var1['nudge_author_ids'] = var6;
                var1['nudge_message_ids'] = var5;
                var1 = var3.bind(var4)(var2, var1);
case 146:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var5 = Object.create(var4, {constructor: {value: var2}});
    var13 = var5;
    var4 = new var13[var2](var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 26;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/reply_nudge/ReplyNudgeManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ReplyNudgeManager'] = var2;
    return var1;
})();