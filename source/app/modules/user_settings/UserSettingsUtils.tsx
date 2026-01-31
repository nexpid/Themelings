// app/modules/user_settings/UserSettingsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var12;
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
            var9 = _closure1_slot8;
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
            var7 = _closure1_slot8;
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
    var _closure1_slot7 = var1;
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
    var _closure1_slot8 = var1;
    var8 = function b64ToProto(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg2;
            var4 = arg1;
            var5 = var2;
            var8 = undefined;
            var3 = undefined;
            var1 = null;
            if(!(var1 != var2)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 3;
            var6 = var9[var6];
            var7 = var7.bind(var8)(var6);
            var6 = var7.base64decode;
            var3 = var6.bind(var7)(var5);
case 38: // try_start_0
            var5 = var4;
            var4 = var5.fromBinary;
            var2 = _closure1_slot5;
            var2 = var4.bind(var5)(var3, var2);
case 39: // try_end0
            return var2;
case 40: // catch_target0
            CatchBlockStart(arg_register=4);
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'Settings proto failed to deserialize (potentially corrupt): ';
            var11 = var3.bind(var2)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var12 = var3;
            var2 = new var12[var4](var11, var10);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 36:
            return var1;
        }
    };
    var _closure1_slot9 = var8;
    var7 = function protoToB64(arg1, arg2) {
        var5 = arg1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.base64encode;
        var4 = var5.toBinary;
        var1 = arg2;
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot10 = var7;
    var6 = function mutateUserGuildSettings(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guilds;
            var2 = null;
            if(!(var2 == var3)) { _fun0005_ip = 7; continue _fun0005 }
case 41:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var3 = var2.AllGuildSettings;
            var2 = var3.create;
            var2 = var2.bind(var3)();
            var1['guilds'] = var2;
case 7:
            var5 = _closure1_slot12;
            var4 = var1.guilds;
            var3 = undefined;
            var2 = arg2;
            var1 = arg3;
            var1 = var5.bind(var3)(var4, var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var6;
    var5 = function mutateUserGuildSettingsInternal(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var3 = null;
            var3 = var3 != var2;
            if(!var3) { _fun0006_ip = 31; continue _fun0006 }
case 41:
            var4 = 'null';
            var3 = var4 !== var2;
case 31:
            if(var3) { _fun0006_ip = 33; continue _fun0006 }
case 42:
            var2 = _closure1_slot4;
case 33:
            var3 = var1.guilds;
            var3 = var2 in var3;
            if(var3) { _fun0006_ip = 11; continue _fun0006 }
case 2:
            var4 = var1.guilds;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 4;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var5 = var3.GuildSettings;
            var3 = var5.create;
            var3 = var3.bind(var5)();
            var4[var2] = var3;
case 11:
            var1 = var1.guilds;
            var3 = var1[var2];
            var2 = arg3;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var _closure1_slot12 = var5;
    var4 = function mutateUserChannelSettingsInternal(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var3 = var1.channels;
            var3 = var2 in var3;
            if(var3) { _fun0007_ip = 43; continue _fun0007 }
case 37:
            var4 = var1.channels;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 4;
            var5 = var5[var3];
            var3 = undefined;
            var3 = var6.bind(var3)(var5);
            var5 = var3.ChannelSettings;
            var3 = var5.create;
            var3 = var3.bind(var5)();
            var4[var2] = var3;
case 43:
            var1 = var1.channels;
            var3 = var1[var2];
            var2 = arg3;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var9);
    var1 = 0;
    var9 = var12[var1];
    var1 = undefined;
    var9 = var10.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var12[var9];
    var9 = var11.bind(var1)(var9);
    var13 = var9.UserSettingsTypes;
    var9 = 2;
    var9 = var12[var9];
    var9 = var11.bind(var1)(var9);
    var9 = var9.ZERO_STRING_GUILD_ID;
    var _closure1_slot4 = var9;
    var9 = {};
    var10 = function readerFactory(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var4 = var1.BinaryReader;
        var1 = global;
        var3 = var1.TextDecoder;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var6 = 'utf-8';
        var7 = var2;
        var1 = new var7[var3](var6, var5);
        var5 = var1 instanceof Object ? var1 : var2;
        var1 = var4.prototype;
        var2 = Object.create(var1, {constructor: {value: var4}});
        var6 = arg1;
        var7 = var2;
        var1 = new var7[var4](var6, var5, var4);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var9['readerFactory'] = var10;
    var _closure1_slot5 = var9;
    var10 = {};
    var15 = var13.PRELOADED_USER_SETTINGS;
    var14 = 4;
    var14 = var12[var14];
    var14 = var11.bind(var1)(var14);
    var14 = var14.PreloadedUserSettings;
    var10[var15] = var14;
    var14 = var13.FRECENCY_AND_FAVORITES_SETTINGS;
    var13 = 5;
    var13 = var12[var13];
    var13 = var11.bind(var1)(var13);
    var13 = var13.FrecencyUserSettings;
    var10[var14] = var13;
    var _closure1_slot6 = var10;
    var10 = 8;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/user_settings/UserSettingsUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var3['BINARY_READ_OPTIONS'] = var9;
    var9 = function b64ToProtoWithType(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var6 = arg2;
            var2 = null;
            var3 = var2 == var6;
            var1 = null;
            if(var3) { _fun0008_ip = 28; continue _fun0008 }
case 44:
            var5 = _closure1_slot6;
            var5 = var4 in var5;
            var2 = null;
            if(!var5) { _fun0008_ip = 38; continue _fun0008 }
case 33:
            var5 = _closure1_slot9;
            var3 = _closure1_slot6;
            var4 = var3[var4];
            var3 = undefined;
            var2 = var5.bind(var3)(var4, var6);
case 38:
            var1 = var2;
case 28:
            return var1;
        }
    };
    var3['b64ToProtoWithType'] = var9;
    var3['b64ToProto'] = var8;
    var8 = function b64ToPreloadedUserSettingsProto(arg1) {
        var4 = _closure1_slot9;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 4;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.PreloadedUserSettings;
        var1 = arg1;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['b64ToPreloadedUserSettingsProto'] = var8;
    var8 = function protoToB64WithType(arg1, arg2) {
        var4 = _closure1_slot10;
        var2 = _closure1_slot6;
        var1 = arg1;
        var3 = var2[var1];
        var2 = undefined;
        var1 = arg2;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var3['protoToB64WithType'] = var8;
    var3['protoToB64'] = var7;
    var7 = function mergeTopLevelFields(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = arg1;
            var3 = arg3;
            var1 = {};
            var10 = arg2;
            var11 = var1;
            var2 = copyDataProperties(var11, var10);
            var7 = var3;
            for(var2 in var7)
case 45:
            {
case 46:
                var9 = var2;
                var9 = delete var1[var9];
                _fun0009_ip = 45; continue _fun0009;
            }
case 47:
            var2 = var4.mergePartial;
            var2 = var2.bind(var4)(var1, var3);
            return var1;
        }
    };
    var3['mergeTopLevelFields'] = var7;
    var3['mutateUserGuildSettings'] = var6;
    var3['mutateUserGuildSettingsInternal'] = var5;
    var5 = function mutateUserChannelSettings(arg1, arg2, arg3, arg4) {
        var2 = arg3;
        var _closure2_slot0 = var2;
        var2 = arg4;
        var _closure2_slot1 = var2;
        var5 = _closure1_slot11;
        var4 = undefined;
        var3 = arg1;
        var2 = arg2;
        var1 = function(arg1) {
            var5 = _closure1_slot13;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var2 = undefined;
            var1 = arg1;
            var1 = var5.bind(var2)(var1, var4, var3);
            return var1;
        };
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var3['mutateUserChannelSettings'] = var5;
    var3['mutateUserChannelSettingsInternal'] = var4;
    var4 = function runMigrations(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var1 = var4.versions;
            var12 = null;
            if(!(var12 == var1)) { _fun0010_ip = 48; continue _fun0010 }
case 49:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var2);
            var2 = var1.Versions;
            var1 = var2.create;
            var1 = var1.bind(var2)();
            var4['versions'] = var1;
case 48:
            var2 = _closure1_slot7;
            var11 = undefined;
            var7 = var2.bind(var11)(var3);
            var5 = var7.bind(var11)();
            var2 = var5.done;
            var6 = 0;
            if(var2) { _fun0010_ip = 50; continue _fun0010 }
case 51:
            var2 = var5.value;
            var8 = var2.version;
            if(!(!(var8 <= var6))) { _fun0010_ip = 52; continue _fun0010 }
case 53:
            var6 = var2.version;
            var8 = var7.bind(var11)();
            var2 = var8.done;
            var5 = var8;
            if(var2) { _fun0010_ip = 50; continue _fun0010 }
case 36:
            _fun0010_ip = 51; continue _fun0010;
case 52:
            var2 = global;
            var5 = var2.Error;
            var2 = 'Migrations are out of order or there is a duplicate version';
            var2 = var5.bind(var11)(var2);
            throw var2;
case 50:
            var2 = global;
            var5 = var2.Math;
            var2 = var5.random;
            var5 = var2.bind(var5)();
            var2 = 0.1;
            var10 = var5 < var2;
            var2 = new Array(0);
            var1 = _closure1_slot7;
            var9 = var1.bind(var11)(var3);
            var3 = var9.bind(var11)();
            var1 = var3.done;
            var8 = false;
            var6 = var3;
            var5 = false;
            var3 = false;
            if(var1) { _fun0010_ip = 54; continue _fun0010 }
case 55:
            var14 = var6.value;
            var13 = var14.version;
            var1 = var4.versions;
            var1 = var1.clientVersion;
            if(!(!(var13 <= var1))) { _fun0010_ip = 6; continue _fun0010 }
case 23:
            var1 = var14.run;
            var1 = var1.bind(var14)(var4);
            var15 = var4.versions;
            var13 = var14.version;
            var15['clientVersion'] = var13;
            if(!(var8 === var1)) { _fun0010_ip = 56; continue _fun0010 }
case 57:
            var1 = var14.cleanup;
            var13 = var5;
            if(!(var12 != var1)) { _fun0010_ip = 58; continue _fun0010 }
case 59:
            var1 = var14.cleanup;
            var1 = var1.bind(var14)();
            var13 = var5;
            _fun0010_ip = 58; continue _fun0010;
case 56:
            var1 = var14.cleanup;
            var1 = var12 != var1;
            var13 = true;
            if(!var1) { _fun0010_ip = 58; continue _fun0010 }
case 8:
            var15 = var2.push;
            var1 = var14.cleanup;
            var1 = var15.bind(var2)(var1);
            var13 = true;
            _fun0010_ip = 58; continue _fun0010;
case 6:
            var13 = var5;
            if(!var10) { _fun0010_ip = 58; continue _fun0010 }
case 60:
            var1 = var14.cleanup;
            var13 = var5;
            if(!(var12 != var1)) { _fun0010_ip = 58; continue _fun0010 }
case 61:
            var1 = var14.cleanup;
            var1 = var1.bind(var14)();
            var13 = var5;
case 58:
            var14 = var9.bind(var11)();
            var1 = var14.done;
            var5 = var13;
            var6 = var14;
            var3 = var5;
            if(!var1) { _fun0010_ip = 55; continue _fun0010 }
case 54:
            var1 = {};
            var1['proto'] = var4;
            var1['isDirty'] = var3;
            var1['cleanupFuncs'] = var2;
            return var1;
        }
    };
    var3['runMigrations'] = var4;
    var2 = function serializeUsageHistory(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg2;
            var11 = global;
            var3 = var11.Object;
            var2 = var3.entries;
            var1 = arg1;
            var6 = var2.bind(var3)(var1);
            var1 = var6.length;
            var3 = var6;
            if(!(var1 > var4)) { _fun0011_ip = 62; continue _fun0011 }
case 63:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var2);
            var2 = var5.sortBy;
            var1 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var1 = var4().value;
                    var1 = var2;
                    var6 = undefined;
                    var3 = var1 === var6;
                    var1 = undefined;
                    if(var3) { _fun0012_ip = 5; continue _fun0012 }
case 64:
                    var5 = var4().value;
                    var4 = var2;
                    var4 = var4 === var6;
                    var1 = undefined;
                    var3 = var4;
                    if(var4) { _fun0012_ip = 5; continue _fun0012 }
case 65:
                    var1 = var5;
                    var3 = var4;
case 5:
                    if(var3) { _fun0012_ip = 4; continue _fun0012 }
case 66:
                    var2.return();
case 4:
                    var2 = var1.recentUses;
                    var1 = var1.recentUses;
                    var3 = var1.length;
                    var1 = 1;
                    var1 = var3 - var1;
                    var1 = var2[var1];
                    return var1;
                }
            };
            var2 = var2.bind(var5)(var6, var1);
            var1 = var2.reverse;
            var2 = var1.bind(var2)();
            var1 = var2.length;
            var3 = var2;
            if(!(var1 > var4)) { _fun0011_ip = 62; continue _fun0011 }
case 67:
            var1 = var2.pop;
            var1 = var1.bind(var2)();
            var1 = var2.length;
            var3 = var2;
            if(var1 > var4) { _fun0011_ip = 67; continue _fun0011 }
case 62:
            var1 = {};
            var2 = _closure1_slot7;
            var9 = undefined;
            var8 = var2.bind(var9)(var3);
            var3 = var8.bind(var9)();
            var2 = var3.done;
            var7 = 2;
            var6 = 0;
            var5 = 1;
            var4 = 5;
            if(var2) { _fun0011_ip = 68; continue _fun0011 }
case 69:
            var13 = var3.value;
            var2 = _closure1_slot3;
            var2 = var2.bind(var9)(var13, var7);
            var13 = var2[var6];
            var14 = var2[var5];
            var15 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var2 = var15.bind(var9)(var2);
            var15 = var2.FrecencyItem;
            var2 = var15.create;
            var2 = var2.bind(var15)();
            var15 = var14.frecency;
            var2['frecency'] = var15;
            var17 = var14.recentUses;
            var16 = var17.filter;
            var15 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = arg1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0013_ip = 49; continue _fun0013 }
case 70:
                    var2 = 0;
                    var1 = var3 > var2;
case 49:
                    return var1;
                }
            };
            var17 = var16.bind(var17)(var15);
            var16 = var17.map;
            var15 = var11.String;
            var15 = var16.bind(var17)(var15);
            var2['recentUses'] = var15;
            var17 = var11.Math;
            var16 = var17.round;
            var15 = var14.score;
            var15 = var16.bind(var17)(var15);
            var2['score'] = var15;
            var14 = var14.totalUses;
            var2['totalUses'] = var14;
            var1[var13] = var2;
            var13 = var8.bind(var9)();
            var2 = var13.done;
            var3 = var13;
            if(!var2) { _fun0011_ip = 69; continue _fun0011 }
case 68:
            return var1;
        }
    };
    var3['serializeUsageHistory'] = var2;
    return var1;
})();