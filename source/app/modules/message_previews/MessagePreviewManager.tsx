// app/modules/message_previews/MessagePreviewManager.tsx
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
    var4 = var6.bind(var1)(var4);
    var4 = var4.isThread;
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
    var4 = var6.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var7[var4];
    var9 = var5.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'MessagePreviewManager';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot16 = var4;
    var4 = 19;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function MessagePreviewManager(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot5;
                var4 = _closure2_slot1;
                var6 = undefined;
                var8 = var8.bind(var6)(var5, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot8;
                var10 = var1.bind(var6)(var4);
                var4 = _closure1_slot7;
                var1 = _closure1_slot19;
                var1 = var1.bind(var6)();
                if(var1) { _fun0005_ip = 9; continue _fun0005 }
case 40:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var11);
                _fun0005_ip = 41; continue _fun0005;
case 9:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot8;
                var7 = var7.bind(var6)(var5);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 41:
                var1 = var4.bind(var6)(var5, var1);
                var _closure3_slot0 = var1;
                var4 = global;
                var5 = var4.Map;
                var7 = var5.prototype;
                var7 = Object.create(var7, {constructor: {value: var5}});
                var15 = var7;
                var5 = new var15[var5](var14);
                var5 = var5 instanceof Object ? var5 : var7;
                var1['remote'] = var5;
                var5 = false;
                var1['remoteTicking'] = var5;
                var1['tickQueued'] = var5;
                var4 = var4.Set;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var15 = var5;
                var4 = new var15[var4](var14);
                var4 = var4 instanceof Object ? var4 : var5;
                var1['localFetching'] = var4;
                var4 = {};
                var5 = function CONNECTION_OPEN_SUPPLEMENTAL() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleConnectionOpenSupplemental;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4['CONNECTION_OPEN_SUPPLEMENTAL'] = var5;
                var5 = function CONNECTION_RESUMED() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleConnectionResumed;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4['CONNECTION_RESUMED'] = var5;
                var5 = function GUILD_CREATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleGuildCreate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['GUILD_CREATE'] = var5;
                var5 = function GUILD_DELETE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleGuildDelete;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['GUILD_DELETE'] = var5;
                var5 = function LOAD_MESSAGES_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleMessagesLoaded;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['LOAD_MESSAGES_SUCCESS'] = var5;
                var5 = function LOCAL_MESSAGES_LOADED(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleMessagesLoaded;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['LOCAL_MESSAGES_LOADED'] = var5;
                var5 = function LOGOUT() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleLogout;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var4['LOGOUT'] = var5;
                var5 = function MESSAGE_CREATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleMessageCreate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['MESSAGE_CREATE'] = var5;
                var5 = function MESSAGE_DELETE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleMessageDelete;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['MESSAGE_DELETE'] = var5;
                var5 = function MESSAGE_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleMessageUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['MESSAGE_UPDATE'] = var5;
                var5 = function THREAD_LIST_SYNC(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleThreadListSync;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['THREAD_LIST_SYNC'] = var5;
                var1['actions'] = var4;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 14;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.debounce;
                var3 = _closure1_slot4;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            StartGenerator();
                            var2 = arguments[0];
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                            var3 = undefined;
                            if(!(var2 === var3)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                            var2 = 0;
case 44:
                            var6 = var2;
                            var14 = undefined;
                            var15 = undefined;
                            var16 = undefined;
                            var17 = undefined;
                            SaveGenerator(address=36);
case 46:
                            return var3;
case 47:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                            var5 = _closure1_slot10;
                            var4 = var5.isConnected;
                            var8 = var4.bind(var5)();
                            var4 = _closure3_slot0;
                            if(var8) { _fun0006_ip = 50; continue _fun0006 }
case 37:
                            var8 = true;
                            var4['tickQueued'] = var8;
                            _fun0006_ip = 51; continue _fun0006;
case 50:
                            var4 = var4.remoteTicking;
                            if(var4) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                            var8 = var6;
                            var4 = 5;
                            if(!(!(var8 > var4))) { _fun0006_ip = 51; continue _fun0006 }
case 13:
                            var8 = _closure3_slot0;
                            var4 = false;
                            var8['tickQueued'] = var4;
case 53: // try_start_0
                            var8 = _closure3_slot0;
                            var9 = true;
                            var8['remoteTicking'] = var9;
                            var9 = _closure1_slot17;
                            var8 = var8.remote;
                            var8 = var9.bind(var3)(var8);
                            var15 = var8;
                            var8 = var8.bind(var3)();
                            var14 = var8;
                            var8 = var8.done;
                            var13 = 2;
                            var12 = 0;
                            var11 = 1;
                            var10 = null;
                            if(var8) { _fun0006_ip = 25; continue _fun0006 }
case 54:
                            var8 = var14;
                            var9 = var8.value;
                            var8 = _closure1_slot3;
                            var9 = var8.bind(var3)(var9, var13);
                            var8 = var9[var12];
                            var16 = var8;
                            var17 = var9[var11];
                            if(!(var10 != var8)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
                            var19 = _closure3_slot0;
                            var18 = var19.fetchGuilds;
                            var9 = var16;
                            var8 = var17;
                            var8 = var18.bind(var19)(var9, var8);
                            _fun0006_ip = 57; continue _fun0006;
case 55:
                            var19 = _closure3_slot0;
                            var18 = var19.fetchDms;
                            var9 = var17;
                            var8 = var18.bind(var19)(var9);
case 57:
                            SaveGenerator(address=260);
case 58:
                            return var8;
case 59:
                            ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                            if(var9) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                            var9 = var15;
                            var9 = var9.bind(var3)();
                            var14 = var9;
                            var9 = var9.done;
                            if(var9) { _fun0006_ip = 25; continue _fun0006 }
case 62:
                            _fun0006_ip = 54; continue _fun0006;
case 60: // try_end0
                            return var8;
case 25: // try_start_1
                            var8 = _closure3_slot0;
                            var9 = var8.cleanup;
                            var9 = var9.bind(var8)();
                            var8['remoteTicking'] = var4;
case 63: // try_end1
                            _fun0006_ip = 51; continue _fun0006;
case 64: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=20);
                            var9 = _closure1_slot16;
                            var8 = var9.log;
                            var7 = var6;
                            var6 = global;
                            var6 = var6.HermesInternal;
                            var12 = var6.concat;
                            var24 = "couldn't fetch message previews (attempt: ";
                            var22 = ', error: ';
                            var20 = ')';
                            var23 = var7;
                            var6 = var24[var12](var23, var22, var21, var20, var19);
                            var6 = var8.bind(var9)(var6);
                            var6 = _closure3_slot0;
                            var6['remoteTicking'] = var4;
                            var5 = var6.remoteTick;
                            var4 = 1;
                            var4 = var7 + var4;
                            var4 = var5.bind(var6)(var4);
case 51:
                            return var3;
case 48:
                            return var2;
case 42:
                            return var1;
                        }
                    };
                    var2 = var1.next;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var3 = var3.bind(var6)(var2);
                var2 = 100;
                var2 = var4.bind(var5)(var3, var2);
                var1['remoteTick'] = var2;
                return var1;
            }
        };
        var _closure2_slot1 = var4;
        var2 = _closure1_slot9;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot6;
        var5 = {};
        var1 = 'addWant';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = arg1;
                var2 = this;
                var3 = _closure1_slot13;
                var1 = var3.getBasicChannel;
                var1 = var1.bind(var3)(var5);
                var3 = null;
                if(!(var3 != var1)) { _fun0007_ip = 65; continue _fun0007 }
case 3:
                var6 = var1.guild_id;
                var7 = var3 != var6;
                var3 = null;
                if(!var7) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                var3 = var6;
case 66:
                var7 = _closure1_slot11;
                var6 = var1.type;
                var1 = undefined;
                var1 = var7.bind(var1)(var6);
                if(var1) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                var6 = _closure1_slot14;
                var4 = var6.isLatest;
                var1 = var4.bind(var6)(var3, var5);
case 68:
                if(var1) { _fun0007_ip = 65; continue _fun0007 }
case 50:
                var1 = var2.getOrCreate;
                var4 = var1.bind(var2)(var3);
                var1 = var4.addWant;
                var1 = var1.bind(var4)(var5);
                var1 = var2.fetchLocal;
                var1 = var1.bind(var2)(var3);
                var1 = var2.remoteTick;
                var1 = var1.bind(var2)();
case 65:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(17);
        var1[0] = var5;
        var5 = {};
        var8 = 'fetchLocal';
        var5['key'] = var8;
        var8 = _closure1_slot4;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var11 = arg1;
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 70; continue _fun0008 }
case 71:
                    var4 = var11;
                    var2 = undefined;
                    var7 = undefined;
                    var8 = undefined;
                    var10 = undefined;
                    var9 = _closure1_slot14;
                    var6 = var9.isLocalFetchNeeded;
                    var6 = var6.bind(var9)(var11);
                    if(!var6) { _fun0008_ip = 72; continue _fun0008 }
case 73:
                    var11 = var5.localFetching;
                    var9 = var11.has;
                    var6 = var4;
                    var6 = var9.bind(var11)(var6);
                    if(var6) { _fun0008_ip = 72; continue _fun0008 }
case 74: // try_start_0 // try_start_1
                    var12 = _closure1_slot16;
                    var9 = var12.verbose;
                    var11 = var4;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var14 = var6.concat;
                    var13 = 'fetching local previews (via: database, guild_id: ';
                    var6 = ')';
                    var6 = var14.bind(var13)(var11, var6);
                    var6 = var9.bind(var12)(var6);
                    var9 = var5.localFetching;
                    var6 = var9.add;
                    var6 = var6.bind(var9)(var11);
                    var9 = _closure1_slot12;
                    var6 = var9.getId;
                    var8 = var6.bind(var9)();
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var6 = 15;
                    var6 = var11[var6];
                    var9 = var9.bind(var2)(var6);
                    var6 = var9.messages;
                    var6 = var6.bind(var9)();
                    var7 = var6;
                    var9 = null;
                    var11 = var9 == var6;
                    var6 = undefined;
                    if(var11) { _fun0008_ip = 75; continue _fun0008 }
case 76:
                    var12 = var7;
                    var11 = var12.getMostRecents;
                    var7 = var4;
                    var6 = var11.bind(var12)(var7);
case 75:
                    SaveGenerator(address=222);
case 77:
                    return var6;
case 78:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0008_ip = 79; continue _fun0008 }
case 80:
                    var10 = var6;
                    var9 = var9 != var6;
                    var7 = var9;
                    if(!var9) { _fun0008_ip = 81; continue _fun0008 }
case 82:
                    var9 = var8;
                    var11 = _closure1_slot12;
                    var8 = var11.getId;
                    var8 = var8.bind(var11)();
                    var7 = var9 === var8;
case 81:
                    if(!var7) { _fun0008_ip = 83; continue _fun0008 }
case 24:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 16;
                    var7 = var9[var7];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'MESSAGE_PREVIEWS_LOCALLY_LOADED';
                    var7['type'] = var11;
                    var11 = var4;
                    var7['guildId'] = var11;
                    var12 = var10;
                    var11 = var12.map;
                    var10 = function(arg1) {
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
                            if(var4) { _fun0009_ip = 84; continue _fun0009 }
case 85:
                            var3 = var2;
case 84:
                            var2 = undefined;
                            if(var4) { _fun0009_ip = 86; continue _fun0009 }
case 87:
                            var6 = var5().value;
                            var5 = var1;
                            var5 = var5 === var7;
                            var2 = undefined;
                            var4 = var5;
                            if(var5) { _fun0009_ip = 86; continue _fun0009 }
case 88:
                            var2 = var6;
                            var4 = var5;
case 86:
                            if(var4) { _fun0009_ip = 89; continue _fun0009 }
case 90:
                            var1.return();
case 89:
                            var1 = new Array(2);
                            var1[0] = var3;
                            var2 = var2.message;
                            var1[1] = var2;
                            return var1;
                        }
                    };
                    var10 = var11.bind(var12)(var10);
                    var7['messages'] = var10;
                    var7 = var8.bind(var9)(var7);
case 83: // try_end0
                    _fun0008_ip = 91; continue _fun0008;
case 79: // try_end1
                    var9 = var5.localFetching;
                    var8 = var9.delete;
                    var7 = var4;
                    var7 = var8.bind(var9)(var7);
                    return var6;
case 92: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=9);
                    var7 = _closure1_slot16;
                    var6 = var7.log;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var9 = var3.concat;
                    var8 = "couldn't fetch local previews (error: ";
                    var3 = ')';
                    var3 = var9.bind(var8)(var10, var3);
                    var3 = var6.bind(var7)(var3);
case 91: // try_end2
                    var7 = var5.localFetching;
                    var6 = var7.delete;
                    var3 = var4;
                    var3 = var6.bind(var7)(var3);
                    _fun0008_ip = 72; continue _fun0008;
case 93: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=2);
                    var6 = var5.localFetching;
                    var5 = var6.delete;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
case 72:
                    return var2;
case 70:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var7 = function fetchLocal() {
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
        var1[1] = var5;
        var5 = {};
        var7 = 'fetchGuilds';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = arg2;
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = var4.nextWants;
                var2 = 1000;
                var3 = var3.bind(var4)(var2);
                var _closure3_slot1 = var3;
                var5 = var3.length;
                var2 = 0;
                if(!(var2 !== var5)) { _fun0010_ip = 94; continue _fun0010 }
case 67:
                var2 = var4.try;
                var1 = function() {
                    var7 = _closure1_slot16;
                    var6 = var7.verbose;
                    var5 = _closure3_slot0;
                    var4 = _closure3_slot1;
                    var3 = var4.join;
                    var1 = ', ';
                    var13 = var3.bind(var4)(var1);
                    var1 = global;
                    var3 = var1.HermesInternal;
                    var10 = var3.concat;
                    var16 = 'fetching guild previews (via: gateway, guild_id: ';
                    var14 = ', channel_ids: ';
                    var12 = ')';
                    var15 = var5;
                    var3 = var16[var10](var15, var14, var13, var12, var11);
                    var3 = var6.bind(var7)(var3);
                    var3 = _closure1_slot10;
                    var2 = var3.getSocket;
                    var3 = var2.bind(var3)();
                    var2 = var3.requestLastMessages;
                    var2 = var2.bind(var3)(var5, var4);
                    var2 = var1.Promise;
                    var1 = var2.resolve;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = var2.bind(var4)(var3, var1);
                _fun0010_ip = 95; continue _fun0010;
case 94:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.resolve;
                var1 = var2.bind(var3)();
case 95:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'fetchDms';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = arg1;
                var3 = var4.nextWants;
                var2 = 30;
                var3 = var3.bind(var4)(var2);
                var _closure3_slot0 = var3;
                var5 = var3.length;
                var2 = 0;
                if(!(var2 !== var5)) { _fun0011_ip = 96; continue _fun0011 }
case 46:
                var2 = var4.try;
                var6 = _closure1_slot4;
                var5 = undefined;
                var1 = function* () {
                    var1 = function* anon_0_() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0012_ip = 97; continue _fun0012 }
case 98:
                            var5 = _closure1_slot16;
                            var3 = var5.verbose;
                            var8 = _closure3_slot0;
                            var6 = var8.join;
                            var2 = ', ';
                            var9 = var6.bind(var8)(var2);
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var7 = var2.concat;
                            var6 = 'fetching dm previews (via: http, channel_ids: ';
                            var2 = ')';
                            var2 = var7.bind(var6)(var9, var2);
                            var2 = var3.bind(var5)(var2);
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 17;
                            var2 = var3[var2];
                            var3 = undefined;
                            var2 = var5.bind(var3)(var2);
                            var6 = var2.HTTP;
                            var5 = var6.post;
                            var2 = {};
                            var7 = _closure1_slot15;
                            var7 = var7.MESSAGE_PREVIEWS;
                            var2['url'] = var7;
                            var7 = {};
                            var7['channel_ids'] = var8;
                            var2['body'] = var7;
                            var7 = false;
                            var2['rejectWithError'] = var7;
                            var2 = var5.bind(var6)(var2);
                            SaveGenerator(address=155);
case 99:
                            return var2;
case 100:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0012_ip = 75; continue _fun0012 }
case 101:
                            var7 = var2.body;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 16;
                            var4 = var6[var4];
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.dispatch;
                            var4 = {'type': 'MESSAGE_PREVIEWS_LOADED', 'guildId': null};
                            var4['messages'] = var7;
                            var4 = var5.bind(var6)(var4);
                            return var3;
case 75:
                            return var2;
case 97:
                            return var1;
                        }
                    };
                    return var1;
                };
                var1 = var6.bind(var5)(var1);
                var1 = var2.bind(var4)(var3, var1);
                _fun0011_ip = 102; continue _fun0011;
case 96:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.resolve;
                var1 = var2.bind(var3)();
case 102:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'syncChannel';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var6 = arg1;
                var3 = arg2;
                var1 = this;
                var2 = var1.remote;
                var1 = var2.get;
                var2 = var1.bind(var2)(var6);
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0013_ip = 73; continue _fun0013 }
case 46:
                var5 = _closure1_slot14;
                var4 = var5.isLatest;
                var1 = var4.bind(var5)(var6, var3);
case 73:
                if(!var1) { _fun0013_ip = 30; continue _fun0013 }
case 28:
                var1 = var2.removeWant;
                var1 = var1.bind(var2)(var3);
case 30:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getOrCreate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var4 = var1.remote;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if(var2) { _fun0014_ip = 103; continue _fun0014 }
case 104:
                var5 = var1.remote;
                var4 = var5.set;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 18;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var6);
                var2 = var2.RemoteFetchData;
                var6 = var2.prototype;
                var6 = Object.create(var6, {constructor: {value: var2}});
                var10 = var6;
                var2 = new var10[var2](var9);
                var2 = var2 instanceof Object ? var2 : var6;
                var2 = var4.bind(var5)(var3, var2);
case 103:
                var2 = var1.remote;
                var1 = var2.get;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'cleanup';
        var5['key'] = var7;
        var7 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var9 = this;
                var3 = _closure1_slot17;
                var2 = var9.remote;
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var3 = var7.bind(var1)();
                var2 = var3.done;
                var6 = 2;
                var5 = 0;
                var4 = 1;
                if(var2) { _fun0015_ip = 13; continue _fun0015 }
case 105:
                var10 = var3.value;
                var2 = _closure1_slot3;
                var2 = var2.bind(var1)(var10, var6);
                var11 = var2[var5];
                var10 = var2[var4];
                var2 = var10.empty;
                var2 = var2.bind(var10)();
                if(!var2) { _fun0015_ip = 106; continue _fun0015 }
case 107:
                var10 = var9.remote;
                var2 = var10.delete;
                var2 = var2.bind(var10)(var11);
case 106:
                var10 = var7.bind(var1)();
                var2 = var10.done;
                var3 = var10;
                if(!var2) { _fun0015_ip = 105; continue _fun0015 }
case 13:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'handleConnectionOpenSupplemental';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var2 = var3.handleConnectionResumed;
            var1 = false;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'handleConnectionResumed';
        var5['key'] = var7;
        var7 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = arguments[0];
                var3 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0016_ip = 32; continue _fun0016 }
case 108:
                var2 = true;
case 32:
                var4 = var3.tickQueued;
                if(!var4) { _fun0016_ip = 90; continue _fun0016 }
case 31:
                var4 = var3.remoteTicking;
                if(var4) { _fun0016_ip = 90; continue _fun0016 }
case 87:
                var4 = var3.remoteTick;
                var4 = var4.bind(var3)();
                var5 = var3.remoteTick;
                var4 = var5.flush;
                var4 = var4.bind(var5)();
                _fun0016_ip = 109; continue _fun0016;
case 90:
                if(!var2) { _fun0016_ip = 109; continue _fun0016 }
case 89:
                var4 = var3.localFetching;
                var2 = var4.clear;
                var2 = var2.bind(var4)();
                var4 = var3.remote;
                var2 = var4.clear;
                var2 = var2.bind(var4)();
                var2 = false;
                var3['remoteTicking'] = var2;
case 109:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'handleGuildCreate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var3 = var1.remote;
            var2 = var3.delete;
            var1 = arg1;
            var1 = var1.guild;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'handleGuildDelete';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var3 = var1.remote;
            var2 = var3.delete;
            var1 = arg1;
            var1 = var1.guild;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'handleLogout';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var3 = var2.localFetching;
            var1 = var3.clear;
            var1 = var1.bind(var3)();
            var3 = var2.remote;
            var1 = var3.clear;
            var1 = var1.bind(var3)();
            var1 = false;
            var2['remoteTicking'] = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'handleMessageCreate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var3 = var4.syncChannel;
                var5 = var1.guildId;
                var2 = null;
                var6 = var2 != var5;
                if(!var6) { _fun0017_ip = 110; continue _fun0017 }
case 111:
                var2 = var5;
case 110:
                var1 = var1.channelId;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'handleMessageDelete';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var3 = var4.syncChannel;
                var5 = var1.guildId;
                var2 = null;
                var6 = var2 != var5;
                if(!var6) { _fun0018_ip = 110; continue _fun0018 }
case 111:
                var2 = var5;
case 110:
                var1 = var1.channelId;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'handleMessageUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var2 = var1.message;
                var2 = var2.channel_id;
                var3 = null;
                if(!(var3 != var2)) { _fun0019_ip = 7; continue _fun0019 }
case 112:
                var2 = var4.syncChannel;
                var5 = var1.guildId;
                var6 = var3 != var5;
                var3 = null;
                if(!var6) { _fun0019_ip = 49; continue _fun0019 }
case 113:
                var3 = var5;
case 49:
                var1 = var1.message;
                var1 = var1.channel_id;
                var1 = var2.bind(var4)(var3, var1);
case 7:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'handleMessagesLoaded';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var2 = arg1;
                var6 = this;
                var5 = _closure1_slot13;
                var4 = var5.getBasicChannel;
                var1 = var2.channelId;
                var7 = var4.bind(var5)(var1);
                var4 = null;
                var5 = var4 == var7;
                var1 = undefined;
                var8 = undefined;
                if(var5) { _fun0020_ip = 66; continue _fun0020 }
case 113:
                var8 = var7.guild_id;
case 66:
                var9 = var4 != var8;
                var5 = null;
                if(!var9) { _fun0020_ip = 114; continue _fun0020 }
case 28:
                var5 = var8;
case 114:
                if(!(var4 != var7)) { _fun0020_ip = 115; continue _fun0020 }
case 89:
                var3 = _closure1_slot17;
                var2 = var2.messages;
                if(!(var4 == var2)) { _fun0020_ip = 116; continue _fun0020 }
case 117:
                var2 = new Array(0);
case 116:
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0020_ip = 115; continue _fun0020 }
case 118:
                var2 = var3.value;
                var7 = var6.syncChannel;
                var2 = var2.channel_id;
                var2 = var7.bind(var6)(var5, var2);
                var7 = var4.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0020_ip = 118; continue _fun0020 }
case 115:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'handleThreadListSync';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var4 = var2.remote;
                var3 = var4.get;
                var2 = var1.guildId;
                var5 = var3.bind(var4)(var2);
                var3 = null;
                if(!(var3 != var5)) { _fun0021_ip = 119; continue _fun0021 }
case 33:
                var2 = _closure1_slot17;
                var1 = var1.mostRecentMessages;
                if(!(var3 == var1)) { _fun0021_ip = 120; continue _fun0021 }
case 121:
                var1 = new Array(0);
case 120:
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if(var1) { _fun0021_ip = 119; continue _fun0021 }
case 40:
                var1 = var2.value;
                var6 = var5.removeWant;
                var1 = var1.channel_id;
                var1 = var6.bind(var5)(var1);
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if(!var1) { _fun0021_ip = 40; continue _fun0021 }
case 119:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[16] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var5 = Object.create(var4, {constructor: {value: var2}});
    var13 = var5;
    var4 = new var13[var2](var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 20;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/message_previews/MessagePreviewManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['MessagePreviewManager'] = var2;
    return var1;
})();