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
            var9 = _closure1_slot18;
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
            var7 = _closure1_slot18;
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
    var _closure1_slot17 = var1;
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
    var _closure1_slot18 = var1;
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
case 0:
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
                if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0005_ip = 42; continue _fun0005;
case 40:
                var8 = global;
                var9 = var8.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot8;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 42:
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
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                if(var3) { _fun0006_ip = 43; continue _fun0006 }
case 44:
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
                                if(!var5) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                                var6 = _closure4_slot0;
                                var5 = var6.transaction;
                                var4 = function(arg1) {
                                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
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
                                        if(var5) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                                        var5 = var7.value;
                                        var11 = var3.put;
                                        var10 = var5.guildId;
                                        var5 = var5.channelId;
                                        var5 = var11.bind(var3)(var10, var5, var8);
                                        var10 = var9.bind(var1)();
                                        var5 = var10.done;
                                        var7 = var10;
                                        if(!var5) { _fun0007_ip = 48; continue _fun0007 }
case 47:
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
case 49:
                                return var2;
case 17:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0006_ip = 50; continue _fun0006 }
case 45:
                                return var3;
case 50:
                                return var2;
case 43:
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
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                                var5 = _closure4_slot0;
                                var4 = var5.transaction;
                                var3 = function(arg1) {
                                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
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
                                        if(var2) { _fun0009_ip = 19; continue _fun0009 }
case 53:
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
                                        if(!var2) { _fun0009_ip = 53; continue _fun0009 }
case 19:
                                        return var1;
                                    }
                                };
                                var2 = 'deleteDeprecatedKeyspaces';
                                var2 = var4.bind(var5)(var3, var2);
                                SaveGenerator(address=43);
case 54:
                                return var2;
case 55:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0008_ip = 56; continue _fun0008 }
case 5:
                                var3 = undefined;
                                return var3;
case 56:
                                return var2;
case 51:
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
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0010_ip = 57; continue _fun0010 }
case 52:
                                var2 = _closure1_slot14;
                                var2 = var2.isLowDisk;
                                if(!var2) { _fun0010_ip = 35; continue _fun0010 }
case 31:
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
case 58:
                                return var2;
case 59:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(var3) { _fun0010_ip = 41; continue _fun0010 }
case 35:
                                var3 = undefined;
                                return var3;
case 41:
                                return var2;
case 57:
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
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0011_ip = 60; continue _fun0011 }
case 44:
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
case 61:
                                return var2;
case 62:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0011_ip = 12; continue _fun0011 }
case 63:
                                var7 = var4.bind(var3)(var2);
                                var5 = var7.bind(var3)();
                                var4 = var5.done;
                                var6 = 'deleting orphaned database: ';
                                if(var4) { _fun0011_ip = 64; continue _fun0011 }
case 65:
                                var14 = var5.value;
                                var4 = var9.has;
                                var4 = var4.bind(var9)(var14);
                                if(var4) { _fun0011_ip = 66; continue _fun0011 }
case 67:
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
case 66:
                                var13 = var7.bind(var3)();
                                var4 = var13.done;
                                var5 = var13;
                                if(!var4) { _fun0011_ip = 65; continue _fun0011 }
case 64:
                                return var3;
case 12:
                                return var2;
case 60:
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
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0012_ip = 30; continue _fun0012 }
case 52:
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
case 68:
                                return var2;
case 4:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0012_ip = 59; continue _fun0012 }
case 7:
                                return var3;
case 59:
                                return var2;
case 30:
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
case 0:
                var2 = this;
                var1 = arg1;
                var3 = var1.state;
                var1 = 'active';
                var1 = var1 === var3;
                var4 = var2.applicationActive;
                var3 = !var1;
                if(var1) { _fun0013_ip = 69; continue _fun0013 }
case 70:
                var3 = var4;
case 69:
                if(!var3) { _fun0013_ip = 5; continue _fun0013 }
case 71:
                var3 = var2.maybeCleanup;
                var3 = var3.bind(var2)();
case 5:
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
case 0:
                    StartGenerator();
                    var9 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0014_ip = 72; continue _fun0014 }
case 73:
                    var2 = undefined;
                    var10 = undefined;
                    var7 = undefined;
                    var5 = undefined;
                    var3 = var9.hasConnected;
                    if(!var3) { _fun0014_ip = 74; continue _fun0014 }
case 33:
                    var3 = var9.isCleaning;
                    if(var3) { _fun0014_ip = 74; continue _fun0014 }
case 75:
                    var3 = global;
                    var4 = var3.Date;
                    var3 = var4.now;
                    var10 = var3.bind(var4)();
                    var3 = _closure1_slot14;
                    var3 = var3.isLowDisk;
                    if(var3) { _fun0014_ip = 76; continue _fun0014 }
case 57:
                    var8 = var10;
                    var4 = var9.lastDeepClean;
                    var8 = var8 - var4;
                    var4 = _closure1_slot15;
                    var3 = var8 >= var4;
case 76:
                    var7 = var3;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var8 = 16;
                    var3 = var3[var8];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.startBackgroundTask;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=136);
case 77:
                    return var3;
case 78:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0014_ip = 79; continue _fun0014 }
case 80:
                    var5 = var3;
case 81: // try_start_0
                    var4 = true;
                    var9['isCleaning'] = var4;
                    var11 = var9.cleanupAsync;
                    var4 = var7;
                    var4 = var11.bind(var9)(var4);
                    SaveGenerator(address=176);
case 82:
                    return var4;
case 83:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=10);
                    if(var11) { _fun0014_ip = 18; continue _fun0014 }
case 84: // try_end0
                    var11 = false;
                    var9['isCleaning'] = var11;
                    var11 = var7;
                    if(var11) { _fun0014_ip = 85; continue _fun0014 }
case 86:
                    var11 = var9.lastDeepClean;
                    _fun0014_ip = 87; continue _fun0014;
case 85:
                    var11 = var10;
case 87:
                    var9['lastDeepClean'] = var11;
                    var12 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var11 = var11[var8];
                    var13 = var12.bind(var2)(var11);
                    var12 = var13.endBackgroundTask;
                    var11 = var5;
                    var11 = var12.bind(var13)(var11);
                    _fun0014_ip = 74; continue _fun0014;
case 18:
                    var11 = false;
                    var9['isCleaning'] = var11;
                    var11 = var7;
                    if(var11) { _fun0014_ip = 88; continue _fun0014 }
case 89:
                    var11 = var9.lastDeepClean;
                    _fun0014_ip = 90; continue _fun0014;
case 88:
                    var11 = var10;
case 90:
                    var9['lastDeepClean'] = var11;
                    var12 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var11 = var11[var8];
                    var13 = var12.bind(var2)(var11);
                    var12 = var13.endBackgroundTask;
                    var11 = var5;
                    var11 = var12.bind(var13)(var11);
                    return var4;
case 91: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var11 = false;
                    var9['isCleaning'] = var11;
                    if(var7) { _fun0014_ip = 92; continue _fun0014 }
case 93:
                    var7 = var9.lastDeepClean;
                    _fun0014_ip = 94; continue _fun0014;
case 92:
                    var7 = var10;
case 94:
                    var9['lastDeepClean'] = var7;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.endBackgroundTask;
                    var5 = var6.bind(var7)(var5);
                    throw var4;
case 79:
                    return var3;
case 74:
                    return var2;
case 72:
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
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 95; continue _fun0015 }
case 96:
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
                    if(!(var2 != var3)) { _fun0015_ip = 97; continue _fun0015 }
case 98:
                    var2 = var4.cleanDatabaseAsync;
                    var2 = var2.bind(var4)(var3, var6);
                    SaveGenerator(address=119);
case 99:
                    return var2;
case 100:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0015_ip = 101; continue _fun0015 }
case 97:
                    var6 = var4.steps;
                    var3 = var6.optimize;
                    var3 = var3.bind(var6)();
                    SaveGenerator(address=145);
case 102:
                    return var3;
case 80:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0015_ip = 103; continue _fun0015 }
case 104:
                    var6 = var4.steps;
                    var4 = var6.deleteExtraDatabases;
                    var4 = var4.bind(var6)();
                    SaveGenerator(address=171);
case 17:
                    return var4;
case 105:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0015_ip = 106; continue _fun0015 }
case 107:
                    return var5;
case 106:
                    return var4;
case 103:
                    return var3;
case 101:
                    return var2;
case 95:
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
case 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0016_ip = 104; continue _fun0016 }
case 73:
                    var4 = arg1;
                    var3 = arg2;
case 108: // try_start_0
                    var7 = var5.steps;
                    var6 = var7.trimOrphanedChannels;
                    var2 = var4;
                    var2 = var6.bind(var7)(var2);
                    SaveGenerator(address=43);
case 54:
                    return var2;
case 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0016_ip = 99; continue _fun0016 }
case 5:
                    if(!var3) { _fun0016_ip = 109; continue _fun0016 }
case 110:
                    var7 = var5.steps;
                    var6 = var7.deleteDeprecatedKeyspaces;
                    var3 = var4;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=76);
case 39:
                    return var3;
case 38:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0016_ip = 111; continue _fun0016 }
case 112:
                    var6 = var5.steps;
                    var5 = var6.trimLowDisk;
                    var4 = var5.bind(var6)(var4);
                    SaveGenerator(address=103);
case 98:
                    return var4;
case 113:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0016_ip = 114; continue _fun0016 }
case 109: // try_end0
                    _fun0016_ip = 115; continue _fun0016;
case 114:
                    return var4;
case 111:
                    return var3;
case 99:
                    return var2;
case 62: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot16;
                    var3 = var4.warn;
                    var2 = "couldn't clean database:";
                    var2 = var3.bind(var4)(var2, var5);
case 115:
                    var2 = undefined;
                    return var2;
case 104:
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