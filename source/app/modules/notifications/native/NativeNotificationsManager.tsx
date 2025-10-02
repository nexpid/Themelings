// app/modules/notifications/native/NativeNotificationsManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            var9 = _closure1_slot14;
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
            var7 = _closure1_slot14;
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
    var _closure1_slot13 = var1;
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
    var _closure1_slot14 = var1;
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
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'NativeNotificationsManager';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot12 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var3 = function NativeNotificationsManager(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot5;
                var4 = _closure2_slot0;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot7;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot6;
                var1 = _closure1_slot15;
                var1 = var1.bind(var5)();
                if(var1) { _fun0005_ip = 9; continue _fun0005 }
case 40:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0005_ip = 41; continue _fun0005;
case 9:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot7;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 41:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.channelId;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.isIOS;
                        var2 = var2.bind(var5)();
                        if(!var2) { _fun0006_ip = 42; continue _fun0006 }
case 2:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 11;
                        var2 = var6[var2];
                        var6 = var5.bind(var1)(var2);
                        var5 = var6.setApplicationIconBadgeNumber;
                        var7 = _closure1_slot10;
                        var2 = var7.getTotalMentionCount;
                        var2 = var2.bind(var7)();
                        var2 = var5.bind(var6)(var2);
case 42:
                        var2 = null;
                        if(!(var2 != var4)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                        var3 = _closure1_slot9;
                        var3 = var3.DCDNotificationManager;
                        if(!(var2 != var3)) { _fun0006_ip = 43; continue _fun0006 }
case 45:
                        var2 = var3.clearNotificationsForChannel;
                        var2 = var2.bind(var3)(var4);
case 43:
                        return var1;
                    }
                };
                var1['handleAck'] = var4;
                var4 = _closure1_slot3;
                var3 = function* () {
                    var1 = function* anon_0_() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                            var2 = undefined;
                            var8 = undefined;
                            var _closure5_slot0 = var2;
                            var6 = undefined;
                            var7 = undefined;
                            var5 = undefined;
                            var9 = undefined;
                            var15 = undefined;
                            var _closure5_slot1 = var2;
                            var11 = undefined;
                            var16 = undefined;
                            var17 = undefined;
                            var18 = undefined;
                            var19 = undefined;
                            var20 = undefined;
                            var21 = undefined;
                            var13 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var12 = 10;
                            var4 = var4[var12];
                            var13 = var13.bind(var2)(var4);
                            var4 = var13.isIOS;
                            var4 = var4.bind(var13)();
                            if(var4) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                            var13 = _closure3_slot0;
                            var4 = var13.handleSetCallNotificationExperiment;
                            var4 = var4.bind(var13)();
case 48: // try_start_0
                            var13 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var12];
                            var13 = var13.bind(var2)(var4);
                            var4 = var13.isIOS;
                            var13 = var4.bind(var13)();
                            var4 = 'cache';
                            if(!var13) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                            var4 = 'shared';
case 50:
                            var8 = var4;
                            _closure5_slot0 = var4;
                            var14 = 'processing_notifications';
                            var6 = var14;
                            var7 = 'processing_notification_states';
                            var4 = function() {
                                var4 = _closure1_slot3;
                                var3 = undefined;
                                var2 = function* (arg1, arg2) {
                                    var1 = function* anon_0_(arg1, arg2) {
                                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                            StartGenerator();
                                            var9 = arg2;
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                                            var3 = _closure1_slot0;
                                            var2 = _closure1_slot2;
                                            var10 = 12;
                                            var2 = var2[var10];
                                            var8 = undefined;
                                            var5 = var3.bind(var8)(var2);
                                            var3 = var5.removeFile;
                                            var2 = _closure5_slot0;
                                            var2 = var3.bind(var5)(var2, var9);
                                            SaveGenerator(address=61);
case 54:
                                            return var2;
case 7:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                            if(var3) { _fun0008_ip = 55; continue _fun0008 }
case 30:
                                            var5 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var3 = var3[var10];
                                            var11 = var5.bind(var8)(var3);
                                            var7 = var11.moveFile;
                                            var5 = _closure5_slot0;
                                            var3 = arg1;
                                            var3 = var7.bind(var11)(var5, var3, var9);
                                            SaveGenerator(address=108);
case 56:
                                            return var3;
case 57:
                                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                            if(var5) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                                            var5 = null;
                                            if(!var3) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                                            var7 = _closure1_slot0;
                                            var6 = _closure1_slot2;
                                            var6 = var6[var10];
                                            var8 = var7.bind(var8)(var6);
                                            var7 = var8.readFile;
                                            var6 = _closure5_slot0;
                                            var4 = 'utf8';
                                            var4 = var7.bind(var8)(var6, var9, var4);
                                            SaveGenerator(address=163);
case 62:
                                            return var4;
case 14:
                                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                                            var5 = var4;
                                            if(var6) { _fun0008_ip = 63; continue _fun0008 }
case 60:
                                            return var5;
case 63:
                                            return var4;
case 58:
                                            return var3;
case 55:
                                            return var2;
case 52:
                                            return var1;
                                        }
                                    };
                                    return var1;
                                };
                                var2 = var4.bind(var3)(var2);
                                var _closure6_slot0 = var2;
                                var1 = function() {
                                    var1 = undefined;
                                    var4 = _closure6_slot0;
                                    var3 = var4.apply;
                                    var1 = arguments;
                                    var2 = var1;
                                    var1 = this;
                                    var1 = var3.bind(var4)(var1, var2);
                                    return var1;
                                };
                                return var1;
                            };
                            var13 = var4.bind(var2)();
                            var5 = var13;
                            var4 = 'notifications_to_track';
                            var4 = var13.bind(var2)(var4, var14);
                            SaveGenerator(address=191);
case 64:
                            return var4;
case 65:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=12);
                            if(var13) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                            var9 = var4;
                            var14 = null;
                            if(!(var14 != var4)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                            var13 = global;
                            var22 = var13.Map;
                            var23 = var22.prototype;
                            var23 = Object.create(var23, {constructor: {value: var22}});
                            var30 = var23;
                            var22 = new var30[var22](var29);
                            var22 = var22 instanceof Object ? var22 : var23;
                            var15 = var22;
                            _closure5_slot1 = var22;
                            var23 = _closure1_slot0;
                            var22 = _closure1_slot2;
                            var22 = var22[var12];
                            var23 = var23.bind(var2)(var22);
                            var22 = var23.isIOS;
                            var22 = var22.bind(var23)();
                            if(!var22) { _fun0007_ip = 70; continue _fun0007 }
case 71:
                            var23 = var5;
                            var22 = var7;
                            var5 = 'notification_states_to_track';
                            var5 = var23.bind(var2)(var5, var22);
                            SaveGenerator(address=299);
case 72:
                            return var5;
case 73:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=21);
                            if(var22) { _fun0007_ip = 74; continue _fun0007 }
case 75:
                            var11 = var5;
                            if(!(var14 !== var5)) { _fun0007_ip = 70; continue _fun0007 }
case 76:
                            var22 = var11;
                            var11 = var22.trim;
                            var23 = var11.bind(var22)();
                            var22 = var23.split;
                            var11 = '\n';
                            var23 = var22.bind(var23)(var11);
                            var22 = var23.forEach;
                            var11 = function(arg1) {
                                var1 = global;
                                var3 = var1.JSON;
                                var2 = var3.parse;
                                var1 = arg1;
                                var1 = var2.bind(var3)(var1);
                                var4 = _closure5_slot1;
                                var3 = var4.set;
                                var2 = var1._local_uuid;
                                var1 = var1.app_state;
                                var1 = var3.bind(var4)(var2, var1);
                                var1 = undefined;
                                return var1;
                            };
                            var11 = var22.bind(var23)(var11);
case 70:
                            var17 = function normalizeTimestampToMs(arg1) {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                    var5 = arg1;
                                    var1 = null;
                                    if(!(var1 == var5)) { _fun0009_ip = 53; continue _fun0009 }
case 77:
                                    var1 = undefined;
                                    return var1;
case 53:
                                    var3 = typeof var5;
                                    var1 = 'number';
                                    if(!(var1 !== var3)) { _fun0009_ip = 4; continue _fun0009 }
case 78:
                                    var4 = undefined;
                                    var2 = 'string';
                                    var1 = undefined;
                                    if(!(var2 === var3)) { _fun0009_ip = 79; continue _fun0009 }
case 80:
                                    var2 = global;
                                    var3 = var2.parseInt;
                                    var2 = 10;
                                    var1 = var3.bind(var4)(var5, var2);
case 79:
                                    _fun0009_ip = 81; continue _fun0009;
case 4:
                                    var2 = global;
                                    var4 = var2.Math;
                                    var3 = var4.round;
                                    var2 = 1000;
                                    var2 = var2 * var5;
                                    var1 = var3.bind(var4)(var2);
case 81:
                                    return var1;
                                }
                            };
                            var10 = _closure1_slot13;
                            var11 = var9;
                            var9 = var11.trim;
                            var22 = var9.bind(var11)();
                            var11 = var22.split;
                            var9 = '\n';
                            var9 = var11.bind(var22)(var9);
                            var9 = var10.bind(var2)(var9);
                            var18 = var9;
                            var9 = var9.bind(var2)();
                            var16 = var9;
                            var9 = var9.done;
                            var11 = 13;
                            var10 = 'background';
                            if(var9) { _fun0007_ip = 82; continue _fun0007 }
case 83:
                            var9 = var16;
                            var23 = var9.value;
                            var22 = var13.JSON;
                            var9 = var22.parse;
                            var21 = var9.bind(var22)(var23);
                            var22 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var9 = var9[var12];
                            var22 = var22.bind(var2)(var9);
                            var9 = var22.isIOS;
                            var9 = var9.bind(var22)();
                            if(!var9) { _fun0007_ip = 84; continue _fun0007 }
case 85:
                            var9 = var21;
                            var9 = var9._local_uuid;
                            if(!(var2 !== var9)) { _fun0007_ip = 84; continue _fun0007 }
case 86:
                            var22 = var21;
                            var24 = var15;
                            var23 = var24.get;
                            var9 = var22._local_uuid;
                            var9 = var23.bind(var24)(var9);
                            var20 = var9;
                            var23 = var14 != var9;
                            var9 = var10;
                            if(!var23) { _fun0007_ip = 87; continue _fun0007 }
case 88:
                            var9 = var20;
case 87:
                            var22['app_state'] = var9;
case 84:
                            var22 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var9 = var9[var11];
                            var24 = var22.bind(var2)(var9);
                            var23 = var24.track;
                            var9 = _closure1_slot11;
                            var22 = var9.PUSH_NOTIFICATION_RECEIVED;
                            var9 = {};
                            var27 = var17;
                            var25 = var21;
                            var26 = var25.timestamp;
                            var26 = var27.bind(var2)(var26);
                            var9['notification_received_timestamp'] = var26;
                            var26 = var25.push_action_type;
                            var9['push_action_type'] = var26;
                            var26 = var25.notif_instance_id;
                            var9['notif_instance_id'] = var26;
                            var26 = var25.notif_type_id;
                            var9['notif_type_id'] = var26;
                            var26 = var25.join_id;
                            var9['join_id'] = var26;
                            var26 = var25.notif_user_id;
                            var9['notif_user_id'] = var26;
                            var26 = var25.receiving_user_id;
                            var9['receiving_user_id'] = var26;
                            var26 = var25.message_id;
                            var9['message_id'] = var26;
                            var26 = var25.message_type;
                            var9['message_type'] = var26;
                            var26 = var25.guild_id;
                            var9['guild_id'] = var26;
                            var26 = var25.channel_id;
                            var9['channel_id'] = var26;
                            var25 = var25.channel_type;
                            var19 = var25;
                            var26 = var14 == var25;
                            var25 = undefined;
                            if(var26) { _fun0007_ip = 89; continue _fun0007 }
case 90:
                            var27 = var19;
                            var26 = var27.toString;
                            var25 = var26.bind(var27)();
case 89:
                            var9['channel_type'] = var25;
                            var25 = var21;
                            var26 = var25.rel_type;
                            var9['rel_type'] = var26;
                            var26 = var25.mention_type;
                            var9['mention_type'] = var26;
                            var26 = var25.app_state;
                            var9['app_state'] = var26;
                            var25 = var25.os_enabled;
                            var9['os_enabled'] = var25;
                            var9 = var23.bind(var24)(var22, var9);
                            var9 = var18;
                            var9 = var9.bind(var2)();
                            var16 = var9;
                            var9 = var9.done;
                            if(!var9) { _fun0007_ip = 83; continue _fun0007 }
case 82:
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var11 = 12;
                            var9 = var9[var11];
                            var13 = var10.bind(var2)(var9);
                            var10 = var13.removeFile;
                            var9 = var8;
                            var6 = var10.bind(var13)(var9, var6);
                            SaveGenerator(address=854);
case 91:
                            return var6;
case 92:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                            if(var9) { _fun0007_ip = 93; continue _fun0007 }
case 94:
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var9 = var9[var12];
                            var10 = var10.bind(var2)(var9);
                            var9 = var10.isIOS;
                            var9 = var9.bind(var10)();
                            if(!var9) { _fun0007_ip = 95; continue _fun0007 }
case 96:
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var9 = var9[var11];
                            var10 = var10.bind(var2)(var9);
                            var9 = var10.removeFile;
                            var7 = var9.bind(var10)(var8, var7);
                            SaveGenerator(address=923);
case 97:
                            return var7;
case 98:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                            if(var8) { _fun0007_ip = 99; continue _fun0007 }
case 95: // try_end0
                            _fun0007_ip = 100; continue _fun0007;
case 99:
                            return var7;
case 93:
                            return var6;
case 74:
                            return var5;
case 68:
                            return var2;
case 66:
                            return var4;
case 101: // catch_target0
                            CatchBlockStart(arg_register=5);
                            var5 = _closure1_slot12;
                            var4 = var5.error;
                            var3 = 'Error tracking push notifications';
                            var3 = var4.bind(var5)(var3, var6);
case 100:
                            return var2;
case 46:
                            return var1;
                        }
                    };
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                var1['handlePostConnectionOpen'] = var3;
                var2 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isIOS;
                        var3 = var3.bind(var4)();
                        if(var3) { _fun0010_ip = 102; continue _fun0010 }
case 103:
                        var3 = _closure1_slot9;
                        var3 = var3.DCDNotificationManager;
                        var3 = var3.setShowMissedCallNotifications;
                        var4 = null;
                        if(!(var4 != var3)) { _fun0010_ip = 81; continue _fun0010 }
case 104:
                        var3 = _closure1_slot9;
                        var6 = var3.DCDNotificationManager;
                        var5 = var6.setShowMissedCallNotifications;
                        var3 = true;
                        var3 = var5.bind(var6)(var3);
case 81:
                        var3 = _closure1_slot9;
                        var3 = var3.DCDNotificationManager;
                        var3 = var3.setShowFullscreenCallUI;
                        if(!(var4 != var3)) { _fun0010_ip = 102; continue _fun0010 }
case 105:
                        var2 = _closure1_slot9;
                        var4 = var2.DCDNotificationManager;
                        var3 = var4.setShowFullscreenCallUI;
                        var2 = true;
                        var2 = var3.bind(var4)(var2);
case 102:
                        return var1;
                    }
                };
                var1['handleSetCallNotificationExperiment'] = var2;
                var2 = {};
                var3 = var1.handleAck;
                var2['MESSAGE_ACK'] = var3;
                var3 = var1.handleAck;
                var2['CHANNEL_SELECT'] = var3;
                var3 = var1.handlePostConnectionOpen;
                var2['POST_CONNECTION_OPEN'] = var3;
                var3 = var1.handleSetCallNotificationExperiment;
                var2['EXPERIMENT_OVERRIDE_BUCKET'] = var3;
                var3 = var1.handleSetCallNotificationExperiment;
                var2['EXPERIMENTS_FETCH_SUCCESS'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot8;
        var2 = undefined;
        var4 = arg1;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notifications/native/NativeNotificationsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();