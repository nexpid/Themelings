// app/stores/PermissionStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
            _closure1_slot28 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot28 = var1;
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
            var9 = _closure1_slot30;
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
            var7 = _closure1_slot30;
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
    var _closure1_slot29 = var1;
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
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function _getGuildPermissions(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var4 = undefined;
            var9 = undefined;
            if(!(var9 === var9)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var9 = true;
case 39:
            var1 = _closure1_slot24;
            var1 = var1[var6];
            var3 = null;
            if(!(var3 == var1)) { _fun0005_ip = 41; continue _fun0005 }
case 37:
            var7 = _closure1_slot21;
            var5 = var7.getCurrentUser;
            var11 = var5.bind(var7)();
            if(!(var3 != var11)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var7 = _closure1_slot20;
            var5 = var7.getGuild;
            var10 = var5.bind(var7)(var6);
            if(!(var3 != var10)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var5 = _closure1_slot24;
            var7 = _closure1_slot2;
            var8 = _closure1_slot3;
            var3 = 18;
            var3 = var8[var3];
            var8 = var7.bind(var4)(var3);
            var7 = var8.computePermissions;
            var3 = {};
            var3['user'] = var11;
            var3['context'] = var10;
            var3['checkElevated'] = var9;
            var3 = var7.bind(var8)(var3);
            var5[var6] = var3;
            _fun0005_ip = 46; continue _fun0005;
case 44:
            var6 = _closure1_slot2;
            var7 = _closure1_slot3;
            var5 = 18;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var3 = var5.NONE;
case 46:
            return var3;
case 42:
            var3 = _closure1_slot2;
            var5 = _closure1_slot3;
            var2 = 18;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.NONE;
            return var2;
case 41:
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function getUncachedChannelPermissions(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var7 = arguments[1];
            var3 = undefined;
            if(!(var7 === var3)) { _fun0006_ip = 40; continue _fun0006 }
case 47:
            var7 = true;
case 40:
            var4 = _closure1_slot21;
            var2 = var4.getCurrentUser;
            var9 = var2.bind(var4)();
            var2 = null;
            if(!(var2 != var9)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var6 = _closure1_slot18;
            var5 = var6.getChannel;
            var4 = arg1;
            var8 = var5.bind(var6)(var4);
            if(!(var2 != var8)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var4 = var8.getGuildId;
            var4 = var4.bind(var8)();
            var5 = var2 != var4;
            if(!var5) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var10 = _closure1_slot10;
            var6 = var10.isLurking;
            var6 = var6.bind(var10)(var4);
            if(var6) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var12 = _closure1_slot19;
            var11 = var12.getMember;
            var10 = var9.id;
            var11 = var11.bind(var12)(var4, var10);
            var12 = var2 == var11;
            var10 = undefined;
            if(var12) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var10 = var11.isPending;
case 56:
            var6 = var10;
case 54:
            var5 = var6;
case 52:
            var6 = var8.isScheduledForDeletion;
            var6 = var6.bind(var8)();
            if(var6) { _fun0006_ip = 58; continue _fun0006 }
case 46:
            if(var5) { _fun0006_ip = 58; continue _fun0006 }
case 59:
            var6 = _closure1_slot1;
            var10 = _closure1_slot3;
            var5 = 19;
            var5 = var10[var5];
            var10 = var6.bind(var3)(var5);
            var6 = var10.isEmpty;
            var5 = var8.permissionOverwrites;
            var5 = var6.bind(var10)(var5);
            if(!var5) { _fun0006_ip = 58; continue _fun0006 }
case 60:
            if(!(var2 != var4)) { _fun0006_ip = 58; continue _fun0006 }
case 61:
            var2 = _closure1_slot31;
            var2 = var2.bind(var3)(var4);
            _fun0006_ip = 62; continue _fun0006;
case 58:
            var5 = _closure1_slot2;
            var6 = _closure1_slot3;
            var4 = 18;
            var4 = var6[var4];
            var6 = var5.bind(var3)(var4);
            var5 = var6.computePermissions;
            var4 = {};
            var4['user'] = var9;
            var4['context'] = var8;
            var4['checkElevated'] = var7;
            var2 = var5.bind(var6)(var4);
case 62:
            return var2;
case 50:
            var4 = _closure1_slot2;
            var5 = _closure1_slot3;
            var2 = 18;
            var2 = var5[var2];
            var2 = var4.bind(var3)(var2);
            var2 = var2.NONE;
            return var2;
case 48:
            var2 = _closure1_slot2;
            var4 = _closure1_slot3;
            var1 = 18;
            var1 = var4[var1];
            var1 = var2.bind(var3)(var1);
            var1 = var1.NONE;
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function _getChannelPermissions(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var6 = undefined;
            var5 = undefined;
            if(!(var5 === var5)) { _fun0007_ip = 39; continue _fun0007 }
case 40:
            var5 = true;
case 39:
            var1 = _closure1_slot25;
            var1 = var1[var4];
            var3 = null;
            if(!(var3 == var1)) { _fun0007_ip = 63; continue _fun0007 }
case 7:
            var3 = _closure1_slot25;
            var2 = _closure1_slot32;
            var2 = var2.bind(var6)(var4, var5);
            var3[var4] = var2;
            var1 = var2;
case 63:
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function updateGuildVersion(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            if(!(var4 != var3)) { _fun0008_ip = 64; continue _fun0008 }
case 47:
            var2 = _closure1_slot26;
            var1 = var2[var3];
            var5 = var4 != var1;
            var4 = 0;
            if(!var5) { _fun0008_ip = 65; continue _fun0008 }
case 66:
            var4 = var1;
case 65:
            var1 = 1;
            var1 = var4 + var1;
            var2[var3] = var1;
case 64:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function rebuildPermissions() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = {};
            _closure1_slot24 = var1;
            var1 = {};
            _closure1_slot25 = var1;
            var6 = _closure1_slot26;
            var3 = 1;
            for(var1 in var6)
case 7:
            {
case 67:
                var10 = var1;
                var9 = _closure1_slot26;
                var8 = var9[var10];
                var8 = var8 + var3;
                var9[var10] = var8;
                _fun0009_ip = 7; continue _fun0009;
            }
case 51:
            var1 = _closure1_slot27;
            var1 = var1 + var3;
            _closure1_slot27 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var17 = function handleConnectionOpen() {
        var2 = _closure1_slot35;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var16 = function handleGuild() {
        var2 = _closure1_slot35;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var15 = function handleGuildMemberUpdate(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var1 = var1.user;
            var4 = var1.id;
            var3 = _closure1_slot21;
            var1 = var3.getCurrentUser;
            var5 = var1.bind(var3)();
            var1 = null;
            var6 = var1 == var5;
            var1 = undefined;
            var3 = undefined;
            if(var6) { _fun0010_ip = 68; continue _fun0010 }
case 69:
            var3 = var5.id;
case 68:
            if(!(var4 === var3)) { _fun0010_ip = 11; continue _fun0010 }
case 63:
            var2 = _closure1_slot35;
            var2 = var2.bind(var1)();
            return var1;
case 11:
            var1 = false;
            return var1;
        }
    };
    var14 = function handleThreadAction() {
        var1 = true;
        return var1;
    };
    var13 = function handleSearchMessagesSuccess(arg1) {
        var1 = arg1;
        var3 = var1.data;
        var2 = var3.some;
        var1 = function(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = arg1;
                var4 = var1.messages;
                var1 = var1.threads;
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                if(var1) { _fun0011_ip = 68; continue _fun0011 }
case 66:
                var3 = var4.some;
                var2 = function(arg1) {
                    var3 = arg1;
                    var2 = var3.some;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.thread;
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 68:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var11 = function handleGuildRole(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var1 = _closure1_slot24;
        var1 = delete var1[var3];
        var4 = _closure1_slot18;
        var1 = var4.getMutableBasicGuildChannelsForGuild;
        var7 = var1.bind(var4)(var3);
        var5 = _closure1_slot1;
        var4 = _closure1_slot3;
        var1 = 19;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.forEach;
        var4 = function(arg1) {
            var2 = _closure1_slot25;
            var1 = arg1;
            var1 = var1.id;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
        };
        var4 = var5.bind(var6)(var7, var4);
        var5 = _closure1_slot27;
        var4 = 1;
        var4 = var5 + var4;
        _closure1_slot27 = var4;
        var2 = _closure1_slot34;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var9 = function handleStageInstancesChanged(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var1 = var1.instance;
            var4 = _closure1_slot18;
            var2 = var4.getChannel;
            var1 = var1.channel_id;
            var2 = var2.bind(var4)(var1);
            var1 = null;
            if(!(var1 != var2)) { _fun0012_ip = 70; continue _fun0012 }
case 71:
            var4 = _closure1_slot21;
            var1 = var4.getCurrentUser;
            var7 = var1.bind(var4)();
            var5 = _closure1_slot2;
            var4 = _closure1_slot3;
            var1 = 18;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.computePermissions;
            var4 = {};
            var4['user'] = var7;
            var4['context'] = var2;
            var5 = var5.bind(var6)(var4);
            var6 = _closure1_slot25;
            var4 = var2.id;
            var4 = var6[var4];
            if(!(var5 !== var4)) { _fun0012_ip = 72; continue _fun0012 }
case 17:
            var4 = _closure1_slot25;
            var2 = var2.id;
            var4[var2] = var5;
            var4 = _closure1_slot27;
            var2 = 1;
            var2 = var4 + var2;
            _closure1_slot27 = var2;
            return var1;
case 72:
            var1 = false;
            return var1;
case 70:
            var1 = false;
            return var1;
        }
    };
    var4 = function handleImpersonateUpdate(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var1 = _closure1_slot24;
        var1 = delete var1[var3];
        var4 = _closure1_slot18;
        var1 = var4.getMutableBasicGuildChannelsForGuild;
        var7 = var1.bind(var4)(var3);
        var5 = _closure1_slot1;
        var4 = _closure1_slot3;
        var1 = 19;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.forEach;
        var4 = function(arg1) {
            var2 = _closure1_slot25;
            var1 = arg1;
            var1 = var1.id;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
        };
        var4 = var5.bind(var6)(var7, var4);
        var5 = _closure1_slot27;
        var4 = 1;
        var4 = var5 + var4;
        _closure1_slot27 = var4;
        var2 = _closure1_slot34;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var1 = function _computePermissions(arg1, arg2, arg3, arg4) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var8 = arg1;
            var11 = arg2;
            var10 = arg3;
            var9 = arg4;
            var3 = _closure1_slot2;
            var1 = _closure1_slot3;
            var5 = 18;
            var1 = var1[var5];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.NONE;
            var3 = _closure1_slot13;
            var3 = var8 instanceof var3;
            if(var3) { _fun0013_ip = 73; continue _fun0013 }
case 74:
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 21;
            var3 = var7[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.isGuildRecord;
            var3 = var3.bind(var6)(var8);
            if(!var3) { _fun0013_ip = 72; continue _fun0013 }
case 75:
            var6 = _closure1_slot31;
            var3 = var8.id;
            var1 = var6.bind(var4)(var3);
            _fun0013_ip = 72; continue _fun0013;
case 73:
            var7 = _closure1_slot14;
            var6 = var7.has;
            var3 = var8.type;
            var3 = var6.bind(var7)(var3);
            if(var3) { _fun0013_ip = 76; continue _fun0013 }
case 77:
            var6 = _closure1_slot33;
            var3 = var8.id;
            var1 = var6.bind(var4)(var3);
case 72:
            if(!(var4 === var11)) { _fun0013_ip = 42; continue _fun0013 }
case 70:
            if(!(var4 === var10)) { _fun0013_ip = 42; continue _fun0013 }
case 78:
            if(!(var4 !== var9)) { _fun0013_ip = 79; continue _fun0013 }
case 42:
            var6 = _closure1_slot2;
            var3 = _closure1_slot3;
            var3 = var3[var5];
            var7 = var6.bind(var4)(var3);
            var6 = var7.computePermissions;
            var3 = {};
            var13 = _closure1_slot21;
            var12 = var13.getCurrentUser;
            var12 = var12.bind(var13)();
            var3['user'] = var12;
            var3['context'] = var8;
            var3['overwrites'] = var11;
            var3['roles'] = var10;
            var12 = true;
            var3['checkElevated'] = var12;
            var3['excludeGuildPermissions'] = var9;
            var1 = var6.bind(var7)(var3);
case 79:
            return var1;
case 76:
            var6 = _closure1_slot18;
            var3 = var6.getChannel;
            var1 = var8.parent_id;
            var3 = var3.bind(var6)(var1);
            var1 = null;
            if(!(var1 != var3)) { _fun0013_ip = 80; continue _fun0013 }
case 81:
            var6 = _closure1_slot2;
            var1 = _closure1_slot3;
            var1 = var1[var5];
            var7 = var6.bind(var4)(var1);
            var6 = var7.applyThreadPermissions;
            var1 = _closure1_slot36;
            var18 = undefined;
            var17 = var3;
            var16 = var11;
            var15 = var10;
            var14 = var9;
            var3 = var18[var1](var17, var16, var15, var14, var13);
            var10 = _closure1_slot12;
            var9 = var10.hasJoined;
            var1 = var8.id;
            var1 = var9.bind(var10)(var1);
            var1 = var6.bind(var7)(var8, var3, var1);
            _fun0013_ip = 82; continue _fun0013;
case 80:
            var3 = _closure1_slot2;
            var2 = _closure1_slot3;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var1 = var2.NONE;
case 82:
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var10 = function resetState() {
        var1 = {};
        _closure1_slot25 = var1;
        var1 = {};
        _closure1_slot24 = var1;
        var1 = {};
        _closure1_slot26 = var1;
        var1 = 0;
        _closure1_slot27 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot37 = var10;
    var1 = global;
    var18 = var1.Object;
    var8 = var18.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var18)(var3, var1, var2);
    var2 = 0;
    var8 = var6[var2];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var18 = var8.ChannelRecordBase;
    var _closure1_slot13 = var18;
    var8 = var8.THREAD_CHANNEL_TYPES;
    var _closure1_slot14 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var18 = var8.isGuildOwner;
    var _closure1_slot15 = var18;
    var8 = var8.isGuildOwnerWithRequiredMfaLevel;
    var _closure1_slot16 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot17 = var8;
    var8 = 12;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot18 = var8;
    var8 = 13;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot19 = var8;
    var8 = 14;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot20 = var8;
    var8 = 15;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot21 = var8;
    var8 = 16;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.Permissions;
    var _closure1_slot22 = var8;
    var8 = 17;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.MemberSafetyPagePermissions;
    var _closure1_slot23 = var8;
    var8 = {};
    var _closure1_slot24 = var8;
    var8 = {};
    var _closure1_slot25 = var8;
    var8 = {};
    var _closure1_slot26 = var8;
    var _closure1_slot27 = var2;
    var2 = 24;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function PermissionStore() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot28;
                var1 = var1.bind(var3)();
                if(var1) { _fun0014_ip = 83; continue _fun0014 }
case 63:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0014_ip = 84; continue _fun0014;
case 83:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 84:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var9 = this;
            var8 = var9.waitFor;
            var16 = _closure1_slot21;
            var15 = _closure1_slot20;
            var14 = _closure1_slot18;
            var13 = _closure1_slot19;
            var12 = _closure1_slot12;
            var11 = _closure1_slot11;
            var10 = _closure1_slot9;
            var17 = var9;
            var1 = var17[var8](var16, var15, var14, var13, var12, var11, var10, var9);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(17);
        var1[0] = var5;
        var5 = {};
        var7 = 'getChannelPermissions';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = arg1;
                var5 = _closure1_slot14;
                var4 = var5.has;
                var1 = var2.type;
                var1 = var4.bind(var5)(var1);
                if(var1) { _fun0015_ip = 6; continue _fun0015 }
case 38:
                var5 = _closure1_slot33;
                var4 = var2.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                _fun0015_ip = 85; continue _fun0015;
case 6:
                var4 = _closure1_slot32;
                var3 = var2.id;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
case 85:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getGuildPermissions';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot31;
            var1 = arg1;
            var2 = var1.id;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getGuildPermissionProps';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = arg1;
                var7 = this;
                var3 = _closure1_slot21;
                var1 = var3.getCurrentUser;
                var6 = var1.bind(var3)();
                var1 = {};
                var8 = var7.can;
                var3 = _closure1_slot22;
                var5 = var3.MANAGE_GUILD;
                var5 = var8.bind(var7)(var5, var2);
                var1['canManageGuild'] = var5;
                var8 = var7.can;
                var5 = var3.MANAGE_CHANNELS;
                var5 = var8.bind(var7)(var5, var2);
                var1['canManageChannels'] = var5;
                var8 = var7.can;
                var5 = var3.MANAGE_ROLES;
                var5 = var8.bind(var7)(var5, var2);
                var1['canManageRoles'] = var5;
                var8 = var7.can;
                var5 = var3.BAN_MEMBERS;
                var5 = var8.bind(var7)(var5, var2);
                var1['canManageBans'] = var5;
                var8 = var7.can;
                var5 = var3.MANAGE_NICKNAMES;
                var5 = var8.bind(var7)(var5, var2);
                var1['canManageNicknames'] = var5;
                var5 = var7.can;
                var3 = var3.MANAGE_GUILD_EXPRESSIONS;
                var3 = var5.bind(var7)(var3, var2);
                if(var3) { _fun0016_ip = 86; continue _fun0016 }
case 87:
                var8 = var7.can;
                var5 = _closure1_slot22;
                var5 = var5.CREATE_GUILD_EXPRESSIONS;
                var3 = var8.bind(var7)(var5, var2);
case 86:
                var1['canManageGuildExpressions'] = var3;
                var8 = var7.can;
                var3 = _closure1_slot22;
                var5 = var3.VIEW_AUDIT_LOG;
                var5 = var8.bind(var7)(var5, var2);
                var1['canViewAuditLog'] = var5;
                var8 = var7.can;
                var5 = var3.VIEW_AUDIT_LOG;
                var5 = var8.bind(var7)(var5, var2);
                var1['canViewAuditLogV2'] = var5;
                var8 = var7.can;
                var5 = var3.MANAGE_WEBHOOKS;
                var5 = var8.bind(var7)(var5, var2);
                var1['canManageWebhooks'] = var5;
                var8 = var7.can;
                var5 = var3.VIEW_GUILD_ANALYTICS;
                var5 = var8.bind(var7)(var5, var2);
                var1['canViewGuildAnalytics'] = var5;
                var5 = var7.canAccessMemberSafetyPage;
                var5 = var5.bind(var7)(var2);
                var1['canAccessMembersPage'] = var5;
                var5 = var7.can;
                var3 = var3.ADMINISTRATOR;
                var3 = var5.bind(var7)(var3, var2);
                var1['isGuildAdmin'] = var3;
                var3 = null;
                var5 = var3 != var6;
                if(!var5) { _fun0016_ip = 88; continue _fun0016 }
case 10:
                var8 = _closure1_slot15;
                var7 = undefined;
                var5 = var8.bind(var7)(var2, var6);
case 88:
                var1['isOwner'] = var5;
                var3 = var3 != var6;
                if(!var3) { _fun0016_ip = 89; continue _fun0016 }
case 90:
                var5 = _closure1_slot16;
                var4 = undefined;
                var3 = var5.bind(var4)(var2, var6);
case 89:
                var1['isOwnerWithRequiredMfaLevel'] = var3;
                var1['guild'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'canAccessMemberSafetyPage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot2;
            var4 = _closure1_slot3;
            var2 = 22;
            var2 = var4[var2];
            var6 = undefined;
            var4 = var3.bind(var6)(var2);
            var3 = var4.hasAny;
            var5 = _closure1_slot31;
            var2 = arg1;
            var2 = var2.id;
            var2 = var5.bind(var6)(var2);
            var1 = _closure1_slot23;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'canAccessGuildSettings';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var6 = _closure1_slot2;
            var7 = _closure1_slot3;
            var2 = 22;
            var2 = var7[var2];
            var5 = undefined;
            var4 = var6.bind(var5)(var2);
            var3 = var4.hasAny;
            var2 = _closure1_slot31;
            var1 = arg1;
            var1 = var1.id;
            var2 = var2.bind(var5)(var1);
            var1 = 18;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.VIEW_GUILD_SETTINGS;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'canWithPartialContext';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var5 = arg1;
                var2 = arg2;
                var4 = this;
                var1 = 'channelId';
                var1 = var1 in var2;
                if(!var1) { _fun0017_ip = 49; continue _fun0017 }
case 33:
                var1 = var2.channelId;
                var3 = 'string';
                var1 = typeof var1;
                if(!(var3 !== var1)) { _fun0017_ip = 91; continue _fun0017 }
case 49:
                var1 = 'guildId';
                var1 = var1 in var2;
                if(!var1) { _fun0017_ip = 92; continue _fun0017 }
case 68:
                var3 = var2.guildId;
                var6 = 'string';
                var3 = typeof var3;
                var1 = var6 === var3;
case 92:
                if(!var1) { _fun0017_ip = 93; continue _fun0017 }
case 94:
                var6 = var4.can;
                var8 = _closure1_slot20;
                var7 = var8.getGuild;
                var3 = var2.guildId;
                var3 = var7.bind(var8)(var3);
                var1 = var6.bind(var4)(var5, var3);
case 93:
                _fun0017_ip = 95; continue _fun0017;
case 91:
                var3 = var4.can;
                var7 = _closure1_slot18;
                var6 = var7.getChannel;
                var2 = var2.channelId;
                var2 = var6.bind(var7)(var2);
                var1 = var3.bind(var4)(var5, var2);
case 95:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'can';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4, arg5) {
            var7 = _closure1_slot36;
            var3 = undefined;
            var11 = arg2;
            var10 = arg3;
            var9 = arg4;
            var8 = arg5;
            var12 = undefined;
            var4 = var12[var7](var11, var10, var9, var8, var7);
            var2 = _closure1_slot2;
            var5 = _closure1_slot3;
            var1 = 22;
            var1 = var5[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'canBasicChannel';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4, arg5) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var5 = arg1;
                var2 = arg2;
                var1 = 'basicPermissions';
                var1 = var1 in var2;
                if(var1) { _fun0018_ip = 96; continue _fun0018 }
case 33:
                var4 = _closure1_slot2;
                var10 = _closure1_slot3;
                var1 = 22;
                var1 = var10[var1];
                var9 = undefined;
                var7 = var4.bind(var9)(var1);
                var6 = var7.has;
                var11 = _closure1_slot36;
                var14 = arg3;
                var13 = arg4;
                var12 = arg5;
                var16 = undefined;
                var15 = var2;
                var4 = var16[var11](var15, var14, var13, var12, var11);
                var8 = _closure1_slot1;
                var1 = 23;
                var1 = var10[var1];
                var8 = var8.bind(var9)(var1);
                var1 = var8.asBigFlag;
                var1 = var1.bind(var8)(var5);
                var1 = var6.bind(var7)(var4, var1);
                _fun0018_ip = 97; continue _fun0018;
case 96:
                var6 = _closure1_slot1;
                var4 = _closure1_slot3;
                var3 = 23;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var3 = var4.has;
                var2 = var2.basicPermissions;
                var1 = var3.bind(var4)(var2, var5);
case 97:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'computePermissions';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            var6 = _closure1_slot36;
            var11 = undefined;
            var10 = arg1;
            var9 = arg2;
            var8 = arg3;
            var7 = arg4;
            var1 = var11[var6](var10, var9, var8, var7, var6);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'computeBasicPermissions';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var2 = arg1;
                var1 = 'basicPermissions';
                var1 = var1 in var2;
                if(var1) { _fun0019_ip = 11; continue _fun0019 }
case 36:
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var3 = 23;
                var3 = var5[var3];
                var5 = undefined;
                var4 = var4.bind(var5)(var3);
                var3 = var4.asBasicFlag;
                var1 = _closure1_slot36;
                var1 = var1.bind(var5)(var2);
                var1 = var3.bind(var4)(var1);
                _fun0019_ip = 34; continue _fun0019;
case 11:
                var1 = var2.basicPermissions;
case 34:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'canManageUser';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var1 = arg2;
                var7 = arg3;
                var5 = this;
                var2 = _closure1_slot17;
                var4 = var1 instanceof var2;
                var2 = var1;
                if(!var4) { _fun0020_ip = 98; continue _fun0020 }
case 99:
                var2 = var1.id;
case 98:
                var1 = _closure1_slot15;
                var8 = undefined;
                var1 = var1.bind(var8)(var7, var2);
                var10 = var2;
                if(var1) { _fun0020_ip = 100; continue _fun0020 }
case 101:
                var2 = _closure1_slot21;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var4 = var5.can;
                var1 = arg1;
                var1 = var4.bind(var5)(var1, var7);
                if(var1) { _fun0020_ip = 102; continue _fun0020 }
case 103:
                var1 = false;
                return var1;
case 102:
                var1 = null;
                var4 = var1 != var2;
                var6 = undefined;
                if(!var4) { _fun0020_ip = 104; continue _fun0020 }
case 105:
                var5 = _closure1_slot2;
                var9 = _closure1_slot3;
                var4 = 18;
                var4 = var9[var4];
                var9 = var5.bind(var8)(var4);
                var5 = var9.getHighestRole;
                var4 = var2.id;
                var6 = var5.bind(var9)(var7, var4);
case 104:
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var9 = 18;
                var4 = var4[var9];
                var5 = var5.bind(var8)(var4);
                var4 = var5.getHighestRole;
                var5 = var4.bind(var5)(var7, var10);
                var1 = var1 != var2;
                if(!var1) { _fun0020_ip = 106; continue _fun0020 }
case 107:
                var4 = _closure1_slot2;
                var3 = _closure1_slot3;
                var3 = var3[var9];
                var4 = var4.bind(var8)(var3);
                var3 = var4.isRoleHigher;
                var13 = var2.id;
                var15 = var4;
                var14 = var7;
                var12 = var6;
                var11 = var5;
                var1 = var15[var3](var14, var13, var12, var11, var10);
case 106:
                return var1;
case 100:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getHighestRole';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var2 = _closure1_slot21;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                var4 = var1 != var2;
                if(!var4) { _fun0021_ip = 34; continue _fun0021 }
case 108:
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var3 = 18;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.getHighestRole;
                var3 = var2.id;
                var2 = arg1;
                var1 = var4.bind(var5)(var2, var3);
case 34:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'isRoleHigher';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var6 = arg1;
                var2 = _closure1_slot21;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                var5 = _closure1_slot9;
                var4 = var5.isViewingRoles;
                var2 = var6.id;
                var2 = var4.bind(var5)(var2);
                var4 = _closure1_slot2;
                var5 = _closure1_slot3;
                var3 = 18;
                var3 = var5[var3];
                var7 = undefined;
                var5 = var4.bind(var7)(var3);
                var4 = var5.isRoleHigher;
                var3 = undefined;
                if(var2) { _fun0022_ip = 75; continue _fun0022 }
case 5:
                var2 = null;
                var2 = var2 == var1;
                var3 = undefined;
                if(var2) { _fun0022_ip = 75; continue _fun0022 }
case 103:
                var3 = var1.id;
case 75:
                var9 = arg2;
                var8 = arg3;
                var12 = var5;
                var11 = var6;
                var10 = var3;
                var1 = var12[var4](var11, var10, var9, var8, var7);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'canImpersonateRole';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var6 = arg1;
                var3 = arg2;
                var4 = this;
                var1 = var4.getHighestRole;
                var5 = var1.bind(var4)(var6);
                var7 = var4.can;
                var1 = _closure1_slot22;
                var1 = var1.MANAGE_GUILD;
                var1 = var7.bind(var4)(var1, var6);
                if(!var1) { _fun0023_ip = 3; continue _fun0023 }
case 109:
                var7 = var4.can;
                var2 = _closure1_slot22;
                var2 = var2.MANAGE_ROLES;
                var1 = var7.bind(var4)(var2, var6);
case 3:
                var2 = var4.isRoleHigher;
                var2 = var2.bind(var4)(var6, var5, var3);
                if(!var1) { _fun0023_ip = 110; continue _fun0023 }
case 13:
                if(var2) { _fun0023_ip = 111; continue _fun0023 }
case 112:
                var4 = var3.id;
                var3 = null;
                var6 = var3 == var5;
                var3 = undefined;
                if(var6) { _fun0023_ip = 17; continue _fun0023 }
case 84:
                var3 = var5.id;
case 17:
                var2 = var4 === var3;
case 111:
                var1 = var2;
case 110:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getGuildVersion';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var2 = _closure1_slot26;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0024_ip = 38; continue _fun0024 }
case 108:
                var1 = var2;
case 38:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getChannelsVersion';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot27;
            return var1;
        };
        var5['value'] = var6;
        var1[16] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'PermissionStore';
    var8['displayName'] = var2;
    var2 = 25;
    var2 = var6[var2];
    var21 = var7.bind(var1)(var2);
    var2 = {};
    var2['BACKGROUND_SYNC'] = var17;
    var2['CONNECTION_OPEN'] = var17;
    var2['OVERLAY_INITIALIZE'] = var17;
    var2['CACHE_LOADED'] = var17;
    var2['CACHE_LOADED_LAZY'] = var17;
    var17 = function handleConnectionClose() {
        var2 = _closure1_slot37;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['CONNECTION_CLOSED'] = var17;
    var2['GUILD_CREATE'] = var16;
    var2['GUILD_UPDATE'] = var16;
    var2['GUILD_DELETE'] = var16;
    var2['GUILD_MEMBER_ADD'] = var15;
    var2['GUILD_MEMBER_UPDATE'] = var15;
    var2['CURRENT_USER_UPDATE'] = var15;
    var15 = function handleChannelCreate(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var4 = var1.id;
            var3 = _closure1_slot18;
            var1 = var3.getChannel;
            var4 = var1.bind(var3)(var4);
            var1 = null;
            if(!(var1 != var4)) { _fun0025_ip = 113; continue _fun0025 }
case 67:
            var1 = var4.isPrivate;
            var1 = var1.bind(var4)();
            if(var1) { _fun0025_ip = 113; continue _fun0025 }
case 8:
            var3 = _closure1_slot21;
            var1 = var3.getCurrentUser;
            var7 = var1.bind(var3)();
            var5 = _closure1_slot2;
            var3 = _closure1_slot3;
            var1 = 18;
            var3 = var3[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var3);
            var5 = var6.computePermissions;
            var3 = {};
            var3['user'] = var7;
            var3['context'] = var4;
            var6 = var5.bind(var6)(var3);
            var5 = _closure1_slot25;
            var3 = var4.id;
            var3 = var5[var3];
            if(!(var3 !== var6)) { _fun0025_ip = 114; continue _fun0025 }
case 115:
            var5 = _closure1_slot25;
            var3 = var4.id;
            var5[var3] = var6;
            var5 = _closure1_slot27;
            var3 = 1;
            var3 = var5 + var3;
            _closure1_slot27 = var3;
            var3 = _closure1_slot34;
            var2 = var4.getGuildId;
            var2 = var2.bind(var4)();
            var2 = var3.bind(var1)(var2);
            return var1;
case 114:
            var1 = false;
            return var1;
case 113:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_CREATE'] = var15;
    var2['THREAD_CREATE'] = var14;
    var2['THREAD_UPDATE'] = var14;
    var2['THREAD_LIST_SYNC'] = var14;
    var2['LOAD_THREADS_SUCCESS'] = var14;
    var2['LOAD_ARCHIVED_THREADS_SUCCESS'] = var14;
    var14 = function handleChannelUpdates(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channels;
            var1 = _closure1_slot29;
            var11 = undefined;
            var10 = var1.bind(var11)(var2);
            var3 = var10.bind(var11)();
            var1 = var3.done;
            var5 = false;
            var8 = 18;
            var7 = null;
            var6 = var3;
            var3 = undefined;
            var2 = false;
            if(var1) { _fun0026_ip = 116; continue _fun0026 }
case 101:
            var1 = var6.value;
            var13 = var1.id;
            var12 = _closure1_slot18;
            var1 = var12.getChannel;
            var16 = var1.bind(var12)(var13);
            var12 = var5;
            var13 = var3;
            if(!(var7 != var16)) { _fun0026_ip = 117; continue _fun0026 }
case 112:
            var1 = var16.isPrivate;
            var1 = var1.bind(var16)();
            var12 = var5;
            var13 = var3;
            if(var1) { _fun0026_ip = 117; continue _fun0026 }
case 118:
            var14 = _closure1_slot21;
            var1 = var14.getCurrentUser;
            var17 = var1.bind(var14)();
            var14 = _closure1_slot2;
            var1 = _closure1_slot3;
            var1 = var1[var8];
            var15 = var14.bind(var11)(var1);
            var14 = var15.computePermissions;
            var1 = {};
            var1['user'] = var17;
            var1['context'] = var16;
            var1 = var14.bind(var15)(var1);
            var15 = _closure1_slot25;
            var14 = var16.id;
            var14 = var15[var14];
            var12 = var5;
            var13 = var1;
            if(!(var14 !== var1)) { _fun0026_ip = 117; continue _fun0026 }
case 119:
            var15 = _closure1_slot25;
            var14 = var16.id;
            var15[var14] = var1;
            var15 = _closure1_slot34;
            var14 = var16.getGuildId;
            var14 = var14.bind(var16)();
            var14 = var15.bind(var11)(var14);
            var12 = true;
            var13 = var1;
case 117:
            var14 = var10.bind(var11)();
            var1 = var14.done;
            var5 = var12;
            var3 = var13;
            var6 = var14;
            var2 = var5;
            if(!var1) { _fun0026_ip = 101; continue _fun0026 }
case 116:
            var1 = !var2;
            var1 = !var1;
            if(!var2) { _fun0026_ip = 120; continue _fun0026 }
case 121:
            var5 = _closure1_slot27;
            var3 = 1;
            var3 = var5 + var3;
            _closure1_slot27 = var3;
            var1 = var2;
case 120:
            return var1;
        }
    };
    var2['CHANNEL_UPDATES'] = var14;
    var14 = function handleLoadMessagesSuccess(arg1) {
        var1 = arg1;
        var3 = var1.messages;
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.thread;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['LOAD_MESSAGES_SUCCESS'] = var14;
    var2['SEARCH_MESSAGES_SUCCESS'] = var13;
    var2['MOD_VIEW_SEARCH_MESSAGES_SUCCESS'] = var13;
    var13 = function handleThreadMemberUpdate(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot21;
            var1 = var4.getCurrentUser;
            var1 = var1.bind(var4)();
            var4 = null;
            var6 = var4 == var1;
            var4 = undefined;
            var5 = undefined;
            if(var6) { _fun0027_ip = 71; continue _fun0027 }
case 65:
            var5 = var1.id;
case 71:
            var1 = var2.userId;
            var1 = var5 === var1;
            if(!var1) { _fun0027_ip = 122; continue _fun0027 }
case 9:
            var3 = _closure1_slot34;
            var2 = var2.guildId;
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 122:
            return var1;
        }
    };
    var2['THREAD_MEMBER_UPDATE'] = var13;
    var13 = function handleThreadMembersUpdate(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 20;
            var1 = var4[var1];
            var4 = undefined;
            var5 = var5.bind(var4)(var1);
            var1 = var5.doesThreadMembersActionAffectMe;
            var1 = var1.bind(var5)(var2);
            var5 = !var1;
            var1 = !var5;
            if(var5) { _fun0028_ip = 123; continue _fun0028 }
case 109:
            var3 = _closure1_slot34;
            var2 = var2.guildId;
            var2 = var3.bind(var4)(var2);
            var1 = true;
case 123:
            return var1;
        }
    };
    var2['THREAD_MEMBERS_UPDATE'] = var13;
    var12 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var4 = _closure1_slot25;
        var3 = var1.id;
        var3 = delete var4[var3];
        var4 = _closure1_slot27;
        var3 = 1;
        var3 = var4 + var3;
        _closure1_slot27 = var3;
        var3 = _closure1_slot34;
        var2 = var1.guild_id;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = false;
        return var1;
    };
    var2['CHANNEL_DELETE'] = var12;
    var2['GUILD_ROLE_CREATE'] = var11;
    var2['GUILD_ROLE_UPDATE'] = var11;
    var2['GUILD_ROLE_DELETE'] = var11;
    var2['LOGOUT'] = var10;
    var2['STAGE_INSTANCE_CREATE'] = var9;
    var2['STAGE_INSTANCE_UPDATE'] = var9;
    var2['STAGE_INSTANCE_DELETE'] = var9;
    var2['IMPERSONATE_UPDATE'] = var4;
    var2['IMPERSONATE_STOP'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var22 = var4;
    var20 = var2;
    var2 = new var22[var8](var21, var20, var19);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/PermissionStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();