// app/modules/app_database/managers/native/KvBackgroundManager.tsx
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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot18;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot18;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
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
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
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
                    _fun0002_ip = 67; continue _fun0002;
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
    var _closure1_slot17 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
            _fun0004_ip = 76; continue _fun0004;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
    var8 = 5;
    var4 = var6[var8];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Platform;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 9;
    var9 = var6[var4];
    var9 = var5.bind(var1)(var9);
    var10 = var9.MAXIMUM_MESSAGES_PER_CHANNEL_DEFAULT;
    var _closure1_slot11 = var10;
    var9 = var9.MAXIMUM_MESSAGES_PER_CHANNEL_EVER;
    var _closure1_slot12 = var9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var4 = var4.MINUTE;
    var4 = var8 * var4;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var13 = 'KvBackgroundManager';
    var14 = var8;
    var4 = new var14[var9](var13, var12);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot16 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function KvBackgroundManager(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var6 = this;
                var4 = 0;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot5;
                var2 = _closure2_slot3;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var2);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot8;
                var10 = var1.bind(var5)(var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot19;
                var1 = var1.bind(var5)();
                if(var1) { _fun0005_ip = 88; continue _fun0005 }
 75:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0005_ip = 122; continue _fun0005;
 88:
                var8 = global;
                var9 = var8.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot8;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 122:
                var1 = var2.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var2 = false;
                var1['isCleaning'] = var2;
                var1['lastDeepClean'] = var4;
                var1['hasConnected'] = var2;
                var1['applicationActive'] = var2;
                var2 = {};
                var4 = function APP_STATE_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleAppStateUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['APP_STATE_UPDATE'] = var4;
                var4 = function LOGOUT(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleLogout;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['LOGOUT'] = var4;
                var4 = function POST_CONNECTION_OPEN(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handlePostConnectionOpen;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['POST_CONNECTION_OPEN'] = var4;
                var1['actions'] = var2;
                var2 = {};
                var4 = function trimOrphanedChannels(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function* () {
                        var1 = function* anon_0_() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(var3) { _fun0006_ip = 181; continue _fun0006 }
 12:
                                var3 = undefined;
                                var _closure6_slot0 = var3;
                                var _closure6_slot1 = var3;
                                var _closure6_slot2 = var3;
                                var7 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var6 = 13;
                                var4 = var9[var6];
                                var11 = var7.bind(var3)(var4);
                                var10 = var11.channels;
                                var8 = _closure4_slot0;
                                var10 = var10.bind(var11)(var8);
                                _closure6_slot0 = var10;
                                var10 = var9[var6];
                                var11 = var7.bind(var3)(var10);
                                var10 = var11.messages;
                                var10 = var10.bind(var11)(var8);
                                _closure6_slot1 = var10;
                                var6 = var9[var6];
                                var7 = var7.bind(var3)(var6);
                                var6 = var7.channelsTemp;
                                var6 = var6.bind(var7)(var8);
                                _closure6_slot2 = var6;
                                var6 = _closure1_slot13;
                                var5 = var6.canEvictOrphans;
                                var5 = var5.bind(var6)();
                                if(!var5) { _fun0006_ip = 175; continue _fun0006 }
 138:
                                var6 = _closure4_slot0;
                                var5 = var6.transaction;
                                var4 = function(arg1) {
                                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                        var3 = arg1;
                                        var2 = _closure6_slot1;
                                        var1 = var2.upgradeTransaction;
                                        var6 = var1.bind(var2)(var3);
                                        var2 = _closure6_slot2;
                                        var1 = var2.upgradeTransaction;
                                        var3 = var1.bind(var2)(var3);
                                        var7 = _closure1_slot17;
                                        var5 = _closure1_slot13;
                                        var1 = var5.getSaveableChannels;
                                        var5 = var1.bind(var5)();
                                        var1 = undefined;
                                        var9 = var7.bind(var1)(var5);
                                        var7 = var9.bind(var1)();
                                        var5 = var7.done;
                                        var8 = null;
                                        if(var5) { _fun0007_ip = 123; continue _fun0007 }
 80:
                                        var5 = var7.value;
                                        var11 = var3.put;
                                        var10 = var5.guildId;
                                        var5 = var5.channelId;
                                        var5 = var11.bind(var3)(var10, var5, var8);
                                        var10 = var9.bind(var1)();
                                        var5 = var10.done;
                                        var7 = var10;
                                        if(!var5) { _fun0007_ip = 80; continue _fun0007 }
 123:
                                        var7 = var6.trimOrphans;
                                        var5 = _closure6_slot0;
                                        var5 = var5.prefix;
                                        var5 = var7.bind(var6)(var5);
                                        var8 = var6.trimChannelsIn;
                                        var5 = _closure6_slot2;
                                        var7 = var5.prefix;
                                        var5 = _closure1_slot12;
                                        var5 = var8.bind(var6)(var7, var5);
                                        var5 = var6.trimChannelsNotIn;
                                        var4 = _closure6_slot2;
                                        var4 = var4.prefix;
                                        var2 = _closure1_slot11;
                                        var2 = var5.bind(var6)(var4, var2);
                                        var2 = var3.delete;
                                        var2 = var2.bind(var3)();
                                        return var1;
                                    }
                                };
                                var2 = 'trimOrphanedChannels';
                                var2 = var5.bind(var6)(var4, var2);
                                SaveGenerator(address=169);
 167:
                                return var2;
 169:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0006_ip = 178; continue _fun0006 }
 175:
                                return var3;
 178:
                                return var2;
 181:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2['trimOrphanedChannels'] = var4;
                var4 = function deleteDeprecatedKeyspaces(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function* () {
                        var1 = function* anon_0_() {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0008_ip = 57; continue _fun0008 }
 7:
                                var5 = _closure4_slot0;
                                var4 = var5.transaction;
                                var3 = function(arg1) {
                                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                        var12 = arg1;
                                        var3 = _closure1_slot17;
                                        var4 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 13;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var2 = var4.bind(var1)(var2);
                                        var2 = var2.DEPRECATED_KEYSPACES;
                                        var10 = var3.bind(var1)(var2);
                                        var3 = var10.bind(var1)();
                                        var2 = var3.done;
                                        var9 = 2;
                                        var8 = 0;
                                        var7 = 1;
                                        var6 = 14;
                                        if(var2) { _fun0009_ip = 187; continue _fun0009 }
 69:
                                        var13 = var3.value;
                                        var2 = _closure1_slot3;
                                        var2 = var2.bind(var1)(var13, var9);
                                        var19 = var2[var8];
                                        var2 = var2[var7];
                                        var14 = _closure1_slot0;
                                        var13 = _closure1_slot2;
                                        var13 = var13[var6];
                                        var13 = var14.bind(var1)(var13);
                                        var15 = var13.Table;
                                        var14 = new Array(1);
                                        var14[0] = var2;
                                        var18 = _closure4_slot0;
                                        var13 = var15.prototype;
                                        var13 = Object.create(var13, {constructor: {value: var15}});
                                        var21 = var13;
                                        var20 = var14;
                                        var17 = true;
                                        var2 = new var21[var15](var20, var19, var18, var17, var16);
                                        var13 = var2 instanceof Object ? var2 : var13;
                                        var2 = var13.upgradeTransaction;
                                        var13 = var2.bind(var13)(var12);
                                        var2 = var13.delete;
                                        var2 = var2.bind(var13)();
                                        var13 = var10.bind(var1)();
                                        var2 = var13.done;
                                        var3 = var13;
                                        if(!var2) { _fun0009_ip = 69; continue _fun0009 }
 187:
                                        return var1;
                                    }
                                };
                                var2 = 'deleteDeprecatedKeyspaces';
                                var2 = var4.bind(var5)(var3, var2);
                                SaveGenerator(address=43);
 41:
                                return var2;
 43:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0008_ip = 54; continue _fun0008 }
 49:
                                var3 = undefined;
                                return var3;
 54:
                                return var2;
 57:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2['deleteDeprecatedKeyspaces'] = var4;
                var4 = function trimLowDisk(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function* () {
                        var1 = function* anon_0_() {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0010_ip = 78; continue _fun0010 }
 7:
                                var2 = _closure1_slot14;
                                var2 = var2.isLowDisk;
                                if(!var2) { _fun0010_ip = 70; continue _fun0010 }
 23:
                                var3 = _closure4_slot0;
                                var2 = var3.incrementalVacuum;
                                var4 = var2.bind(var3)();
                                var3 = var4.catch;
                                var2 = function(arg1) {
                                    var3 = _closure1_slot16;
                                    var2 = var3.warn;
                                    var1 = arg1;
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var2 = var3.bind(var4)(var2);
                                SaveGenerator(address=64);
 62:
                                return var2;
 64:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0010_ip = 75; continue _fun0010 }
 70:
                                var3 = undefined;
                                return var3;
 75:
                                return var2;
 78:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2['trimLowDisk'] = var4;
                var4 = function deleteExtraDatabases() {
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function* () {
                        var1 = function* anon_0_() {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0011_ip = 273; continue _fun0011 }
 12:
                                var3 = _closure1_slot10;
                                var2 = var3.getUsers;
                                var5 = var2.bind(var3)();
                                var10 = global;
                                var4 = var10.Set;
                                var3 = var5.map;
                                var2 = function(arg1) {
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 15;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.databaseName;
                                    var1 = arg1;
                                    var1 = var1.id;
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var16 = var3.bind(var5)(var2);
                                var3 = var4.prototype;
                                var3 = Object.create(var3, {constructor: {value: var4}});
                                var17 = var3;
                                var2 = new var17[var4](var16, var15);
                                var9 = var2 instanceof Object ? var2 : var3;
                                var4 = _closure1_slot17;
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var8 = 14;
                                var2 = var2[var8];
                                var3 = undefined;
                                var2 = var5.bind(var3)(var2);
                                var5 = var2.Kv;
                                var2 = var5.databases;
                                var2 = var2.bind(var5)();
                                SaveGenerator(address=120);
 118:
                                return var2;
 120:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0011_ip = 270; continue _fun0011 }
 129:
                                var7 = var4.bind(var3)(var2);
                                var5 = var7.bind(var3)();
                                var4 = var5.done;
                                var6 = 'deleting orphaned database: ';
                                if(var4) { _fun0011_ip = 267; continue _fun0011 }
 152:
                                var14 = var5.value;
                                var4 = var9.has;
                                var4 = var4.bind(var9)(var14);
                                if(var4) { _fun0011_ip = 252; continue _fun0011 }
 170:
                                var15 = _closure1_slot16;
                                var13 = var15.log;
                                var4 = var10.HermesInternal;
                                var4 = var4.concat;
                                var4 = var4.bind(var6)(var14);
                                var4 = var13.bind(var15)(var4);
                                var13 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var4 = var4[var8];
                                var4 = var13.bind(var3)(var4);
                                var13 = var4.Database;
                                var4 = var13.delete;
                                var14 = var4.bind(var13)(var14);
                                var13 = var14.catch;
                                var4 = function() {
                                    var1 = null;
                                    return var1;
                                };
                                var4 = var13.bind(var14)(var4);
 252:
                                var13 = var7.bind(var3)();
                                var4 = var13.done;
                                var5 = var13;
                                if(!var4) { _fun0011_ip = 152; continue _fun0011 }
 267:
                                return var3;
 270:
                                return var2;
 273:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2['deleteExtraDatabases'] = var4;
                var3 = function optimize() {
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function* () {
                        var1 = function* anon_0_() {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0012_ip = 67; continue _fun0012 }
 7:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 14;
                                var2 = var3[var2];
                                var3 = undefined;
                                var2 = var4.bind(var3)(var2);
                                var5 = var2.Kv;
                                var4 = var5.optimize;
                                var2 = true;
                                var2 = var4.bind(var5)(var2);
                                SaveGenerator(address=55);
 53:
                                return var2;
 55:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0012_ip = 64; continue _fun0012 }
 61:
                                return var3;
 64:
                                return var2;
 67:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2['optimize'] = var3;
                var1['steps'] = var2;
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
        var1 = 'handleAppStateUpdate';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var2 = this;
                var1 = arg1;
                var3 = var1.state;
                var1 = 'active';
                var1 = var1 === var3;
                var4 = var2.applicationActive;
                var3 = !var1;
                if(var1) { _fun0013_ip = 34; continue _fun0013 }
 31:
                var3 = var4;
 34:
                if(!var3) { _fun0013_ip = 49; continue _fun0013 }
 37:
                var3 = var2.maybeCleanup;
                var3 = var3.bind(var2)();
 49:
                var2['applicationActive'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var8 = 'handleLogout';
        var5['key'] = var8;
        var8 = function value() {
            var2 = false;
            var1 = this;
            var1['hasConnected'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[1] = var5;
        var5 = {};
        var8 = 'handlePostConnectionOpen';
        var5['key'] = var8;
        var8 = function value() {
            var2 = true;
            var1 = this;
            var1['hasConnected'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var8;
        var1[2] = var5;
        var5 = {};
        var8 = 'maybeCleanup';
        var5['key'] = var8;
        var8 = _closure1_slot4;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    StartGenerator();
                    var9 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 380; continue _fun0014 }
 13:
                    var2 = undefined;
                    var10 = undefined;
                    var7 = undefined;
                    var5 = undefined;
                    var3 = var9.hasConnected;
                    if(!var3) { _fun0014_ip = 377; continue _fun0014 }
 33:
                    var3 = var9.isCleaning;
                    if(var3) { _fun0014_ip = 377; continue _fun0014 }
 45:
                    var3 = global;
                    var4 = var3.Date;
                    var3 = var4.now;
                    var10 = var3.bind(var4)();
                    var3 = _closure1_slot14;
                    var3 = var3.isLowDisk;
                    if(var3) { _fun0014_ip = 99; continue _fun0014 }
 78:
                    var8 = var10;
                    var4 = var9.lastDeepClean;
                    var8 = var8 - var4;
                    var4 = _closure1_slot15;
                    var3 = var8 >= var4;
 99:
                    var7 = var3;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var8 = 16;
                    var3 = var3[var8];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.startBackgroundTask;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=136);
 134:
                    return var3;
 136:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0014_ip = 374; continue _fun0014 }
 145:
                    var5 = var3;
 148: // try_start_0
                    var4 = true;
                    var9['isCleaning'] = var4;
                    var11 = var9.cleanupAsync;
                    var4 = var7;
                    var4 = var11.bind(var9)(var4);
                    SaveGenerator(address=176);
 174:
                    return var4;
 176:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=10);
                    if(var11) { _fun0014_ip = 249; continue _fun0014 }
 182: // try_end0
                    var11 = false;
                    var9['isCleaning'] = var11;
                    var11 = var7;
                    if(var11) { _fun0014_ip = 204; continue _fun0014 }
 196:
                    var11 = var9.lastDeepClean;
                    _fun0014_ip = 207; continue _fun0014;
 204:
                    var11 = var10;
 207:
                    var9['lastDeepClean'] = var11;
                    var12 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var11 = var11[var8];
                    var13 = var12.bind(var2)(var11);
                    var12 = var13.endBackgroundTask;
                    var11 = var5;
                    var11 = var12.bind(var13)(var11);
                    _fun0014_ip = 377; continue _fun0014;
 249:
                    var11 = false;
                    var9['isCleaning'] = var11;
                    var11 = var7;
                    if(var11) { _fun0014_ip = 271; continue _fun0014 }
 263:
                    var11 = var9.lastDeepClean;
                    _fun0014_ip = 274; continue _fun0014;
 271:
                    var11 = var10;
 274:
                    var9['lastDeepClean'] = var11;
                    var12 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var11 = var11[var8];
                    var13 = var12.bind(var2)(var11);
                    var12 = var13.endBackgroundTask;
                    var11 = var5;
                    var11 = var12.bind(var13)(var11);
                    return var4;
 314: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var11 = false;
                    var9['isCleaning'] = var11;
                    if(var7) { _fun0014_ip = 335; continue _fun0014 }
 327:
                    var7 = var9.lastDeepClean;
                    _fun0014_ip = 338; continue _fun0014;
 335:
                    var7 = var10;
 338:
                    var9['lastDeepClean'] = var7;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.endBackgroundTask;
                    var5 = var6.bind(var7)(var5);
                    throw var4;
 374:
                    return var3;
 377:
                    return var2;
 380:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot2 = var7;
        var7 = function maybeCleanup() {
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
        var1[3] = var5;
        var5 = {};
        var7 = 'cleanupAsync';
        var5['key'] = var7;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 189; continue _fun0015 }
 16:
                    var7 = _closure1_slot16;
                    var5 = var7.verbose;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var9 = var3.concat;
                    var8 = 'performing cleanup (deep: ';
                    var3 = ')';
                    var3 = var9.bind(var8)(var6, var3);
                    var3 = var5.bind(var7)(var3);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 13;
                    var2 = var5[var2];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.database;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if(!(var2 != var3)) { _fun0015_ip = 125; continue _fun0015 }
 101:
                    var2 = var4.cleanDatabaseAsync;
                    var2 = var2.bind(var4)(var3, var6);
                    SaveGenerator(address=119);
 117:
                    return var2;
 119:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 186; continue _fun0015 }
 125:
                    var6 = var4.steps;
                    var3 = var6.optimize;
                    var3 = var3.bind(var6)();
                    SaveGenerator(address=145);
 143:
                    return var3;
 145:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0015_ip = 183; continue _fun0015 }
 151:
                    var6 = var4.steps;
                    var4 = var6.deleteExtraDatabases;
                    var4 = var4.bind(var6)();
                    SaveGenerator(address=171);
 169:
                    return var4;
 171:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0015_ip = 180; continue _fun0015 }
 177:
                    return var5;
 180:
                    return var4;
 183:
                    return var3;
 186:
                    return var2;
 189:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot1 = var7;
        var7 = function cleanupAsync() {
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
        var1[4] = var5;
        var5 = {};
        var7 = 'cleanDatabaseAsync';
        var5['key'] = var7;
        var7 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 151; continue _fun0016 }
 13:
                    var4 = arg1;
                    var3 = arg2;
 19: // try_start_0
                    var7 = var5.steps;
                    var6 = var7.trimOrphanedChannels;
                    var2 = var4;
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=43);
 41:
                    return var2;
 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0016_ip = 117; continue _fun0016 }
 49:
                    if(!var3) { _fun0016_ip = 109; continue _fun0016 }
 52:
                    var7 = var5.steps;
                    var6 = var7.deleteDeprecatedKeyspaces;
                    var3 = var4;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=76);
 74:
                    return var3;
 76:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0016_ip = 114; continue _fun0016 }
 82:
                    var6 = var5.steps;
                    var5 = var6.trimLowDisk;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=103);
 101:
                    return var4;
 103:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0016_ip = 111; continue _fun0016 }
 109: // try_end0
                    _fun0016_ip = 146; continue _fun0016;
 111:
                    return var4;
 114:
                    return var3;
 117:
                    return var2;
 120: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot16;
                    var3 = var4.warn;
                    var2 = "couldn't clean database:";
                    var2 = var3.bind(var4)(var2, var5);
 146:
                    var2 = undefined;
                    return var2;
 151:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var6 = function cleanDatabaseAsync() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var14 = var4;
    var2 = new var14[var2](var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/managers/native/KvBackgroundManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();