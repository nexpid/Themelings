// app/stores/ActivityTrackingStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var7 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var7;
        var _closure1_slot2 = var6;
        var1 = function _isNativeReflectConstruct() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                _fun0002_ip = 4; continue _fun0002;
case 5: // catch_target0
                CatchBlockStart(arg_register=1);
case 4:
                var2 = function _isNativeReflectConstruct() {
                    var1 = _closure2_slot0;
                    var1 = !var1;
                    var1 = !var1;
                    return var1;
                };
                _closure1_slot22 = var2;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var _closure1_slot22 = var1;
        var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
case 6:
                if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var2 = var3.@@iterator;
case 8:
                if(var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0003_ip = 16; continue _fun0003 }
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
                if(!var7) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var7 = var3.constructor;
case 18:
                var10 = var9;
                if(!var7) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                var7 = var3.constructor;
                var10 = var7.name;
case 20:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0003_ip = 22; continue _fun0003 }
case 24:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0003_ip = 27; continue _fun0003 }
case 25:
                var9 = _closure1_slot24;
                var7 = var9.bind(var8)(var3, var8);
case 27:
                _fun0003_ip = 28; continue _fun0003;
case 22:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
case 28:
                var6 = var7;
                _fun0003_ip = 14; continue _fun0003;
case 16:
                var7 = _closure1_slot24;
                var6 = var7.bind(var8)(var3, var8);
case 14:
                var4 = var6;
                if(var4) { _fun0003_ip = 12; continue _fun0003 }
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
                if(!var4) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                _closure2_slot0 = var4;
case 30:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0004_ip = 32; continue _fun0004 }
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
                        _fun0004_ip = 34; continue _fun0004;
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
        var _closure1_slot23 = var1;
        var1 = function _arrayLikeToArray(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                var2 = var4.length;
                var1 = var3 > var2;
case 35:
                var2 = undefined;
                if(!var1) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                var2 = var4.length;
case 37:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0005_ip = 39; continue _fun0005 }
case 8:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0005_ip = 8; continue _fun0005 }
case 39:
                return var1;
            }
        };
        var _closure1_slot24 = var1;
        var1 = function stopActivity(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var2 = arguments[1];
                var1 = undefined;
                if(!(var2 === var1)) { _fun0006_ip = 36; continue _fun0006 }
case 40:
                var2 = true;
case 36:
                if(!var2) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                var4 = _closure1_slot26;
                var2 = true;
                var2 = var4.bind(var1)(var3, var2);
case 41:
                var5 = _closure1_slot20;
                var4 = var3.applicationId;
                var5 = var5[var4];
                var4 = null;
                if(!(var4 != var5)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                var4 = var5.stop;
                var4 = var4.bind(var5)();
                var5 = _closure1_slot20;
                var4 = var3.applicationId;
                var4 = delete var5[var4];
case 43:
                var4 = _closure1_slot19;
                var3 = var3.applicationId;
                var3 = delete var4[var3];
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 14;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var5 = var3.Storage;
                var4 = var5.set;
                var3 = _closure1_slot16;
                var2 = _closure1_slot19;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var _closure1_slot25 = var1;
        var1 = function updateActivity(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = arg1;
                var3 = arguments[1];
                var _closure2_slot0 = var5;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0007_ip = 33; continue _fun0007 }
case 45:
                var3 = false;
case 33:
                var14 = global;
                var6 = var14.Date;
                var2 = var6.now;
                var6 = var2.bind(var6)();
                var2 = var5.updatedAt;
                var7 = null;
                var2 = var7 != var2;
                var17 = 0;
                if(!var2) { _fun0007_ip = 46; continue _fun0007 }
case 44:
                var2 = var5.updatedAt;
                var17 = var6 - var2;
case 46:
                var10 = _closure1_slot17;
                var9 = _closure1_slot18;
                var9 = var10 + var9;
                if(!(var17 > var9)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                var17 = 0;
case 47:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 15;
                var8 = var10[var8];
                var12 = var9.bind(var1)(var8);
                var11 = var12.shouldShareApplicationActivity;
                var9 = var5.applicationId;
                var8 = _closure1_slot12;
                var15 = var11.bind(var12)(var9, var8);
                var9 = _closure1_slot14;
                var8 = var9.getVoiceChannelId;
                var13 = var8.bind(var9)();
                var9 = _closure1_slot10;
                var8 = var9.getSessionId;
                var12 = var8.bind(var9)();
                var9 = _closure1_slot13;
                var8 = var9.getMediaSessionId;
                var11 = var8.bind(var9)();
                var9 = _closure1_slot1;
                var8 = 16;
                var8 = var10[var8];
                var10 = var9.bind(var1)(var8);
                var9 = var10.updateActivity;
                var8 = {};
                var16 = var5.applicationId;
                var8['applicationId'] = var16;
                var16 = var5.isDiscordApplication;
                if(var16) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                var16 = var5.distributor;
                _fun0007_ip = 51; continue _fun0007;
case 49:
                var18 = _closure1_slot15;
                var16 = var18.DISCORD;
case 51:
                var8['distributor'] = var16;
                var8['shareActivity'] = var15;
                var15 = var5.token;
                var8['token'] = var15;
                var16 = var14.Math;
                var15 = var16.floor;
                var14 = 1000;
                var14 = var17 / var14;
                var14 = var15.bind(var16)(var14);
                var8['duration'] = var14;
                var8['closed'] = var3;
                var14 = var5.exePath;
                var8['exePath'] = var14;
                var8['voiceChannelId'] = var13;
                var8['sessionId'] = var12;
                var8['mediaSessionId'] = var11;
                var8 = var9.bind(var10)(var8);
                var5['updatedAt'] = var6;
                var8 = _closure1_slot20;
                var6 = var5.applicationId;
                var6 = var8[var6];
                if(!(var7 == var6)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
                var7 = _closure1_slot20;
                var6 = var5.applicationId;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 17;
                var8 = var10[var8];
                var8 = var9.bind(var1)(var8);
                var8 = var8.Interval;
                var9 = var8.prototype;
                var9 = Object.create(var9, {constructor: {value: var8}});
                var21 = var9;
                var8 = new var21[var8](var20);
                var8 = var8 instanceof Object ? var8 : var9;
                var7[var6] = var8;
                var7 = var8.start;
                var6 = _closure1_slot17;
                var4 = function() {
                    var3 = _closure1_slot26;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var4 = var7.bind(var8)(var6, var4);
case 52:
                if(var3) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                var4 = _closure1_slot19;
                var3 = var5.applicationId;
                var4[var3] = var5;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 14;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var5 = var3.Storage;
                var4 = var5.set;
                var3 = _closure1_slot16;
                var2 = _closure1_slot19;
                var2 = var4.bind(var5)(var3, var2);
case 54:
                return var1;
            }
        };
        var _closure1_slot26 = var1;
        var1 = function handleRunningGamesChange() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var7 = arguments[0];
                var1 = undefined;
                if(!(var7 === var1)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                var7 = true;
case 56:
                var3 = _closure1_slot8;
                var2 = var3.getVisibleRunningGames;
                var4 = var2.bind(var3)();
                var2 = global;
                var3 = var2.Set;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var20 = var5;
                var3 = new var20[var3](var19);
                var5 = var3 instanceof Object ? var3 : var5;
                var3 = _closure1_slot23;
                var11 = var3.bind(var1)(var4);
                var4 = var11.bind(var1)();
                var3 = var4.done;
                var10 = 18;
                var9 = null;
                var8 = '';
                if(var3) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                var3 = var4.value;
                var14 = var3.name;
                var13 = var3.distributor;
                var16 = var3.exePath;
                var12 = _closure1_slot11;
                var3 = var12.getGameByName;
                var14 = var3.bind(var12)(var14);
                if(!(var9 != var14)) { _fun0008_ip = 60; continue _fun0008 }
case 61:
                var12 = var5.add;
                var3 = var14.id;
                var3 = var12.bind(var5)(var3);
                var12 = var14.id;
                var3 = _closure1_slot19;
                var3 = var12 in var3;
                if(var3) { _fun0008_ip = 60; continue _fun0008 }
case 62:
                var12 = _closure1_slot26;
                var3 = {};
                var14 = var14.id;
                var3['applicationId'] = var14;
                var15 = var2.Date;
                var14 = var15.now;
                var14 = var14.bind(var15)();
                var3['updatedAt'] = var14;
                var3['distributor'] = var13;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var10];
                var15 = var14.bind(var1)(var13);
                var14 = var15.removeExecutablePathPrefix;
                var17 = var9 != var16;
                var13 = var8;
                if(!var17) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                var13 = var16;
case 63:
                var13 = var14.bind(var15)(var13);
                var3['exePath'] = var13;
                var3 = var12.bind(var1)(var3);
case 60:
                var12 = var11.bind(var1)();
                var3 = var12.done;
                var4 = var12;
                if(!var3) { _fun0008_ip = 59; continue _fun0008 }
case 58:
                var4 = var2.Object;
                var3 = var4.keys;
                var2 = _closure1_slot19;
                var4 = var3.bind(var4)(var2);
                var2 = var4.length;
                var3 = 0;
                var2 = var3 < var2;
                if(!var2) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                var9 = var4[var3];
                var2 = var5.has;
                var2 = var2.bind(var5)(var9);
                if(var2) { _fun0008_ip = 67; continue _fun0008 }
case 31:
                var8 = _closure1_slot25;
                var2 = _closure1_slot19;
                var2 = var2[var9];
                var2 = var8.bind(var1)(var2, var7);
case 67:
                var3 = var3 + 1;
                var2 = var4.length;
                if(var3 < var2) { _fun0008_ip = 66; continue _fun0008 }
case 65:
                return var1;
            }
        };
        var _closure1_slot27 = var1;
        var9 = function handleLogout() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = global;
                var4 = var1.Object;
                var2 = var4.keys;
                var1 = _closure1_slot19;
                var5 = var2.bind(var4)(var1);
                var1 = var5.length;
                var4 = 0;
                var2 = var4 < var1;
                var1 = undefined;
                if(!var2) { _fun0009_ip = 5; continue _fun0009 }
case 68:
                var7 = var5[var4];
                var6 = _closure1_slot25;
                var2 = _closure1_slot19;
                var2 = var2[var7];
                var2 = var6.bind(var1)(var2);
                var4 = var4 + 1;
                var2 = var5.length;
                if(var4 < var2) { _fun0009_ip = 68; continue _fun0009 }
case 5:
                var2 = false;
                _closure1_slot21 = var2;
                return var1;
            }
        };
        var _closure1_slot28 = var9;
        var1 = global;
        var10 = var1.Object;
        var8 = var10.defineProperty;
        var2 = {};
        var1 = true;
        var2['value'] = var1;
        var1 = '__esModule';
        var1 = var8.bind(var10)(var3, var1, var2);
        var1 = 0;
        var2 = var6[var1];
        var1 = undefined;
        var2 = var7.bind(var1)(var2);
        var _closure1_slot3 = var2;
        var2 = 1;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot4 = var2;
        var2 = 2;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot5 = var2;
        var2 = 3;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot6 = var2;
        var2 = 4;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot7 = var2;
        var10 = 5;
        var2 = var6[var10];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot8 = var2;
        var2 = 6;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot9 = var2;
        var2 = 7;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot10 = var2;
        var2 = 8;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot11 = var2;
        var2 = 9;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot12 = var2;
        var2 = 10;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot13 = var2;
        var2 = 11;
        var2 = var6[var2];
        var2 = var7.bind(var1)(var2);
        var _closure1_slot14 = var2;
        var2 = 12;
        var2 = var6[var2];
        var2 = var5.bind(var1)(var2);
        var2 = var2.Distributors;
        var _closure1_slot15 = var2;
        var2 = 'ActivityTrackingStore';
        var _closure1_slot16 = var2;
        var8 = 13;
        var11 = var6[var8];
        var11 = var7.bind(var1)(var11);
        var11 = var11.Millis;
        var12 = var11.MINUTE;
        var11 = 30;
        var11 = var11 * var12;
        var _closure1_slot17 = var11;
        var8 = var6[var8];
        var8 = var7.bind(var1)(var8);
        var8 = var8.Millis;
        var8 = var8.MINUTE;
        var8 = var10 * var8;
        var _closure1_slot18 = var8;
        var8 = 14;
        var8 = var6[var8];
        var8 = var5.bind(var1)(var8);
        var10 = var8.Storage;
        var8 = var10.get;
        var8 = var8.bind(var10)(var2);
        var10 = null;
        if(!(var10 == var8)) { _fun0001_ip = 69; continue _fun0001 }
case 70:
        var8 = {};
case 69:
        var _closure1_slot19 = var8;
        var8 = {};
        var _closure1_slot20 = var8;
        var8 = false;
        var _closure1_slot21 = var8;
        var8 = 19;
        var8 = var6[var8];
        var8 = var7.bind(var1)(var8);
        var10 = var8.Store;
        var8 = function(arg1) {
            var4 = function ActivityTrackingStore() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
                    var1 = _closure1_slot22;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                    var7 = var9.apply;
                    var5 = arguments;
                    var1 = var5;
                    var1 = var7.bind(var9)(var4, var1);
                    _fun0010_ip = 73; continue _fun0010;
case 71:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var3)(var4);
                    var6 = var6.constructor;
                    var5 = arguments;
                    var1 = var7.bind(var8)(var9, var5, var6);
case 73:
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
                var6 = var4.waitFor;
                var3 = _closure1_slot8;
                var5 = _closure1_slot9;
                var2 = _closure1_slot12;
                var2 = var6.bind(var4)(var3, var5, var2);
                var3 = var4.syncWith;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot27;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var5['value'] = var1;
            var1 = new Array(2);
            var1[0] = var5;
            var5 = {};
            var7 = 'getActivities';
            var5['key'] = var7;
            var6 = function value() {
                var1 = _closure1_slot19;
                return var1;
            };
            var5['value'] = var6;
            var1[1] = var5;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var8 = var8.bind(var1)(var10);
        var8['displayName'] = var2;
        var2 = 20;
        var2 = var6[var2];
        var15 = var7.bind(var1)(var2);
        var2 = {};
        var10 = function RUNNING_GAMES_CHANGE() {
            var2 = _closure1_slot27;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2['RUNNING_GAMES_CHANGE'] = var10;
        var10 = function handleConnectionOpen() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = _closure1_slot21;
                if(var1) { _fun0011_ip = 74; continue _fun0011 }
case 75:
                var1 = global;
                var4 = var1.Object;
                var2 = var4.keys;
                var1 = _closure1_slot19;
                var5 = var2.bind(var4)(var1);
                var1 = var5.length;
                var4 = 0;
                var2 = var4 < var1;
                var1 = undefined;
                if(!var2) { _fun0011_ip = 76; continue _fun0011 }
case 77:
                var7 = var5[var4];
                var6 = _closure1_slot26;
                var2 = _closure1_slot19;
                var2 = var2[var7];
                var2 = var6.bind(var1)(var2);
                var4 = var4 + 1;
                var2 = var5.length;
                if(var4 < var2) { _fun0011_ip = 77; continue _fun0011 }
case 76:
                var4 = _closure1_slot27;
                var2 = false;
                var2 = var4.bind(var1)(var2);
                var2 = true;
                _closure1_slot21 = var2;
                return var1;
case 74:
                var1 = false;
                return var1;
            }
        };
        var2['CONNECTION_OPEN'] = var10;
        var10 = function handleConnectionClosed(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = arg1;
                var2 = var1.code;
                var1 = 4004;
                if(!(var1 === var2)) { _fun0012_ip = 78; continue _fun0012 }
case 45:
                var2 = _closure1_slot28;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 78:
                var1 = undefined;
                return var1;
            }
        };
        var2['CONNECTION_CLOSED'] = var10;
        var2['LOGOUT'] = var9;
        var9 = function handleActivityUpdate(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = arg1;
                var4 = var1.applicationId;
                var3 = var1.token;
                var1 = _closure1_slot19;
                var1 = var1[var4];
                var4 = null;
                if(!(var4 != var1)) { _fun0013_ip = 13; continue _fun0013 }
case 78:
                var1['token'] = var3;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = var3.Storage;
                var4 = var5.set;
                var3 = _closure1_slot16;
                var2 = _closure1_slot19;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
case 13:
                var1 = false;
                return var1;
            }
        };
        var2['ACTIVITY_UPDATE_SUCCESS'] = var9;
        var4 = function handleActivityUpdateFail(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var3 = var1.applicationId;
                var1 = _closure1_slot19;
                var3 = var1[var3];
                var1 = null;
                if(!(var1 != var3)) { _fun0014_ip = 13; continue _fun0014 }
case 79:
                var3['token'] = var1;
                var3['updatedAt'] = var1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = var3.Storage;
                var4 = var5.set;
                var3 = _closure1_slot16;
                var2 = _closure1_slot19;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
case 13:
                var1 = false;
                return var1;
            }
        };
        var2['ACTIVITY_UPDATE_FAIL'] = var4;
        var4 = var8.prototype;
        var4 = Object.create(var4, {constructor: {value: var8}});
        var16 = var4;
        var14 = var2;
        var2 = new var16[var8](var15, var14, var13);
        var2 = var2 instanceof Object ? var2 : var4;
        var4 = 21;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'stores/ActivityTrackingStore.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();