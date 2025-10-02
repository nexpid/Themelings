// app/modules/guild_antiraid/GuildIncidentsStore.tsx
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
            var9 = _closure1_slot15;
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
            var7 = _closure1_slot15;
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
    var _closure1_slot14 = var1;
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
    var _closure1_slot15 = var1;
    var1 = function computeAlertSettings() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = _closure1_slot8;
            var1 = var2.getGuildsProto;
            var5 = var1.bind(var2)();
            var1 = null;
            if(!(var1 == var5)) { _fun0005_ip = 40; continue _fun0005 }
case 35:
            var5 = {};
case 40:
            var2 = _closure1_slot9;
            var1 = var2.getGuildsArray;
            var3 = var1.bind(var2)();
            var1 = {};
            _closure1_slot12 = var1;
            var2 = _closure1_slot14;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var9 = var3.value;
            var8 = _closure1_slot12;
            var7 = var9.id;
            var2 = {};
            var10 = var9.id;
            var2['guildId'] = var10;
            var10 = var9.name;
            var2['guildName'] = var10;
            var9 = var9.id;
            var11 = var5[var9];
            var12 = var2;
            var9 = copyDataProperties(var12, var11);
            var8[var7] = var2;
            var7 = var4.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0005_ip = 42; continue _fun0005 }
case 41:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function incidentsDataFromServer(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var2 = var4 != var3;
            var1 = null;
            if(!var2) { _fun0006_ip = 43; continue _fun0006 }
case 36:
            var2 = global;
            var5 = var2.Object;
            var2 = var5.keys;
            var2 = var2.bind(var5)(var3);
            var5 = var2.length;
            var2 = 0;
            var2 = var5 > var2;
            var1 = null;
            if(!var2) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var2 = {};
            var4 = var3.raid_detected_at;
            var2['raidDetectedAt'] = var4;
            var4 = var3.dm_spam_detected_at;
            var2['dmSpamDetectedAt'] = var4;
            var4 = var3.dms_disabled_until;
            var2['dmsDisabledUntil'] = var4;
            var3 = var3.invites_disabled_until;
            var2['invitesDisabledUntil'] = var3;
            var1 = var2;
case 43:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
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
    var2 = {};
    var _closure1_slot11 = var2;
    var2 = {};
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildIncidentsStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 47; continue _fun0007;
case 45:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 47:
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
        var1 = function value() {
            var4 = this;
            var7 = var4.waitFor;
            var11 = _closure1_slot8;
            var10 = _closure1_slot9;
            var6 = _closure1_slot10;
            var5 = _closure1_slot7;
            var12 = var4;
            var9 = var6;
            var8 = var5;
            var2 = var12[var7](var11, var10, var9, var8, var7);
            var3 = var4.syncWith;
            var7 = _closure1_slot8;
            var2 = new Array(4);
            var2[0] = var7;
            var7 = _closure1_slot9;
            var2[1] = var7;
            var2[2] = var6;
            var2[3] = var5;
            var1 = _closure1_slot16;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getGuildIncident';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot11;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getIncidentsByGuild';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getGuildAlertSettings';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'GuildIncidentsStore';
    var8['displayName'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = {};
            _closure1_slot11 = var1;
            var3 = _closure1_slot14;
            var1 = arg1;
            var2 = var1.guilds;
            var1 = undefined;
            var6 = var3.bind(var1)(var2);
            var3 = var6.bind(var1)();
            var2 = var3.done;
            var5 = 9;
            var4 = null;
            if(var2) { _fun0008_ip = 23; continue _fun0008 }
case 9:
            var2 = var3.value;
            var9 = _closure1_slot17;
            var10 = var2.properties;
            var11 = var4 == var10;
            var8 = undefined;
            if(var11) { _fun0008_ip = 48; continue _fun0008 }
case 49:
            var8 = var10.incidents_data;
case 48:
            var9 = var9.bind(var1)(var8);
            var8 = var4 != var9;
            if(!var8) { _fun0008_ip = 50; continue _fun0008 }
case 51:
            var11 = _closure1_slot0;
            var10 = _closure1_slot1;
            var10 = var10[var5];
            var11 = var11.bind(var1)(var10);
            var10 = var11.hasDetectedActivity;
            var10 = var10.bind(var11)(var9);
            if(var10) { _fun0008_ip = 52; continue _fun0008 }
case 53:
            var12 = _closure1_slot0;
            var11 = _closure1_slot1;
            var11 = var11[var5];
            var12 = var12.bind(var1)(var11);
            var11 = var12.isUnderLockdown;
            var10 = var11.bind(var12)(var9);
case 52:
            var8 = var10;
case 50:
            if(!var8) { _fun0008_ip = 21; continue _fun0008 }
case 54:
            var8 = _closure1_slot11;
            var2 = var2.id;
            var8[var2] = var9;
case 21:
            var8 = var6.bind(var1)();
            var2 = var8.done;
            var3 = var8;
            if(!var2) { _fun0008_ip = 9; continue _fun0008 }
case 23:
            return var1;
        }
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleGuildCreate(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guild;
            var6 = _closure1_slot17;
            var7 = var2.properties;
            var5 = null;
            var8 = var5 == var7;
            var1 = undefined;
            var4 = undefined;
            if(var8) { _fun0009_ip = 55; continue _fun0009 }
case 56:
            var4 = var7.incidents_data;
case 55:
            var4 = var6.bind(var1)(var4);
            var5 = var5 != var4;
            if(!var5) { _fun0009_ip = 57; continue _fun0009 }
case 58:
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var9 = 9;
            var6 = var6[var9];
            var7 = var7.bind(var1)(var6);
            var6 = var7.hasDetectedActivity;
            var6 = var6.bind(var7)(var4);
            if(var6) { _fun0009_ip = 59; continue _fun0009 }
case 13:
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var9];
            var8 = var8.bind(var1)(var7);
            var7 = var8.isUnderLockdown;
            var6 = var7.bind(var8)(var4);
case 59:
            var5 = var6;
case 57:
            if(!var5) { _fun0009_ip = 60; continue _fun0009 }
case 61:
            var3 = _closure1_slot11;
            var2 = var2.id;
            var3[var2] = var4;
case 60:
            return var1;
        }
    };
    var2['GUILD_CREATE'] = var9;
    var9 = function handleGuildUpdate(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guild;
            var5 = _closure1_slot17;
            var4 = var2.incidents_data;
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var5 = null;
            if(!(var5 != var4)) { _fun0010_ip = 62; continue _fun0010 }
case 56:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var7 = 9;
            var5 = var5[var7];
            var6 = var6.bind(var1)(var5);
            var5 = var6.hasDetectedActivity;
            var5 = var5.bind(var6)(var4);
            if(var5) { _fun0010_ip = 59; continue _fun0010 }
case 42:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var7];
            var6 = var6.bind(var1)(var5);
            var5 = var6.isUnderLockdown;
            var5 = var5.bind(var6)(var4);
            if(var5) { _fun0010_ip = 59; continue _fun0010 }
case 62:
            var6 = _closure1_slot11;
            var5 = var2.id;
            var5 = delete var6[var5];
            _fun0010_ip = 63; continue _fun0010;
case 59:
            var3 = _closure1_slot11;
            var2 = var2.id;
            var3[var2] = var4;
case 63:
            return var1;
        }
    };
    var2['GUILD_UPDATE'] = var9;
    var9 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var2 = _closure1_slot11;
        var1 = var1.id;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var2['GUILD_DELETE'] = var9;
    var4 = function handleLogout() {
        var1 = {};
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_antiraid/GuildIncidentsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();