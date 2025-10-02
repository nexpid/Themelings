// app/modules/guild_antiraid/GuildAntiRaidHooks.tsx
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
    var1 = function getFirstGuildIncidentId(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var15 = arg1;
            var2 = _closure1_slot8;
            var1 = var2.getCurrentUser;
            var13 = var1.bind(var2)();
            var2 = _closure1_slot9;
            var1 = var2.getIncidentsByGuild;
            var12 = var1.bind(var2)();
            var2 = _closure1_slot13;
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 9;
            var1 = var4[var1];
            var11 = undefined;
            var3 = var3.bind(var11)(var1);
            var1 = var3.keys;
            var4 = var1.bind(var3)(var12);
            var3 = var4.map;
            var1 = function(arg1) {
                var3 = _closure1_slot5;
                var2 = var3.getGuild;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1);
            var10 = var2.bind(var11)(var1);
            var3 = var10.bind(var11)();
            var2 = var3.done;
            var9 = 11;
            var8 = 12;
            var7 = false;
            var6 = 10;
            var1 = null;
            var5 = var3;
            var4 = undefined;
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var2 = var5.value;
            if(!(var1 != var2)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var3 = var2.id;
            var16 = var12[var3];
            var4 = var16;
            if(!(var1 != var16)) { _fun0004_ip = 38; continue _fun0004 }
case 40:
            var17 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var17 = var17.bind(var11)(var3);
            var3 = var17.hasDetectedActivity;
            var3 = var3.bind(var17)(var16);
            if(var3) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var17 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var17 = var17.bind(var11)(var3);
            var3 = var17.isUnderLockdown;
            var3 = var3.bind(var17)(var16);
            var4 = var16;
            if(!var3) { _fun0004_ip = 38; continue _fun0004 }
case 41:
            var17 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var17 = var17.bind(var11)(var3);
            var3 = var17.isUnderLockdown;
            var3 = var3.bind(var17)(var16);
            if(!var3) { _fun0004_ip = 24; continue _fun0004 }
case 43:
            var3 = var2.id;
            var4 = var16;
            if(!(var3 === var15)) { _fun0004_ip = 38; continue _fun0004 }
case 24:
            var17 = _closure1_slot2;
            var3 = _closure1_slot3;
            var18 = var3[var9];
            var19 = var17.bind(var11)(var18);
            var18 = var19.hasAny;
            var3 = var3[var8];
            var20 = var17.bind(var11)(var3);
            var17 = var20.computePermissions;
            var3 = {};
            var3['user'] = var13;
            var3['context'] = var2;
            var3['checkElevated'] = var7;
            var17 = var17.bind(var20)(var3);
            var3 = _closure1_slot10;
            var3 = var18.bind(var19)(var17, var3);
            var4 = var16;
            if(var3) { _fun0004_ip = 44; continue _fun0004 }
case 38:
            var16 = var10.bind(var11)();
            var3 = var16.done;
            var5 = var16;
            if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 45:
            _fun0004_ip = 37; continue _fun0004;
case 44:
            var2 = var2.id;
            return var2;
case 36:
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.IncidentAlertModeratorPermissions;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot11 = var7;
    var4 = var4.GuildFeatures;
    var _closure1_slot12 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_antiraid/GuildAntiRaidHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useFirstGuildIncidentId() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 8;
            var2 = var5[var3];
            var13 = undefined;
            var8 = var4.bind(var13)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var7.bind(var8)(var6, var2);
            var2 = var5[var3];
            var8 = var4.bind(var13)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getIncidentsByGuild;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var7.bind(var8)(var6, var2);
            var _closure2_slot0 = var11;
            var2 = _closure1_slot13;
            var3 = var5[var3];
            var5 = var4.bind(var13)(var3);
            var4 = var5.useStateFromStoresArray;
            var6 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var6;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.keys;
                var1 = _closure2_slot0;
                var3 = var2.bind(var3)(var1);
                var2 = var3.map;
                var1 = function(arg1) {
                    var3 = _closure1_slot5;
                    var2 = var3.getGuild;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var4.bind(var5)(var3, var1);
            var10 = var2.bind(var13)(var1);
            var3 = var10.bind(var13)();
            var2 = var3.done;
            var9 = 11;
            var8 = 12;
            var7 = false;
            var6 = 10;
            var1 = null;
            var5 = var3;
            var4 = undefined;
            if(var2) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var2 = var5.value;
            if(!(var1 != var2)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var3 = var2.id;
            var15 = var11[var3];
            var4 = var15;
            if(!(var1 != var4)) { _fun0005_ip = 48; continue _fun0005 }
case 50:
            var16 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var16 = var16.bind(var13)(var3);
            var3 = var16.hasDetectedActivity;
            var3 = var3.bind(var16)(var15);
            if(var3) { _fun0005_ip = 51; continue _fun0005 }
case 52:
            var16 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var16 = var16.bind(var13)(var3);
            var3 = var16.isUnderLockdown;
            var3 = var3.bind(var16)(var15);
            var4 = var15;
            if(!var3) { _fun0005_ip = 48; continue _fun0005 }
case 51:
            var16 = _closure1_slot2;
            var3 = _closure1_slot3;
            var17 = var3[var9];
            var18 = var16.bind(var13)(var17);
            var17 = var18.hasAny;
            var3 = var3[var8];
            var19 = var16.bind(var13)(var3);
            var16 = var19.computePermissions;
            var3 = {};
            var3['user'] = var12;
            var3['context'] = var2;
            var3['checkElevated'] = var7;
            var16 = var16.bind(var19)(var3);
            var3 = _closure1_slot10;
            var3 = var17.bind(var18)(var16, var3);
            var4 = var15;
            if(var3) { _fun0005_ip = 53; continue _fun0005 }
case 48:
            var15 = var10.bind(var13)();
            var3 = var15.done;
            var5 = var15;
            if(var3) { _fun0005_ip = 46; continue _fun0005 }
case 54:
            _fun0005_ip = 47; continue _fun0005;
case 53:
            var2 = var2.id;
            return var2;
case 46:
            return var1;
        }
    };
    var3['useFirstGuildIncidentId'] = var4;
    var4 = function useGuildIncidentsState(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var5 = _closure1_slot0;
            var7 = _closure1_slot3;
            var4 = 8;
            var2 = var7[var4];
            var6 = undefined;
            var10 = var5.bind(var6)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot5;
            var8 = new Array(2);
            var8[0] = var2;
            var2 = _closure1_slot6;
            var8[1] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = _closure1_slot5;
                    var3 = var4.getGuild;
                    var1 = _closure2_slot0;
                    var5 = var3.bind(var4)(var1);
                    var1 = null;
                    if(!(var1 != var5)) { _fun0007_ip = 55; continue _fun0007 }
case 3:
                    var4 = _closure1_slot6;
                    var3 = var4.getGuildPermissions;
                    var5 = var3.bind(var4)(var5);
                    var1 = var1 != var5;
                    if(!var1) { _fun0007_ip = 56; continue _fun0007 }
case 57:
                    var6 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var3 = var4.hasAny;
                    var2 = _closure1_slot10;
                    var1 = var3.bind(var4)(var5, var2);
case 56:
                    return var1;
case 55:
                    var1 = false;
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var8, var2);
            var4 = var7[var4];
            var7 = var5.bind(var6)(var4);
            var5 = var7.useStateFromStores;
            var8 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var8;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                    var4 = _closure1_slot9;
                    var3 = var4.getGuildIncident;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 58:
                    return var1;
                }
            };
            var5 = var5.bind(var7)(var4, var1);
            var1 = {};
            var1['shouldShowIncidentActions'] = var2;
            var1['incidentData'] = var5;
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0006_ip = 14; continue _fun0006 }
case 60:
            var4 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 10;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.isUnderLockdown;
            var2 = var3.bind(var4)(var5);
case 14:
            var1['isUnderLockdown'] = var2;
            return var1;
        }
    };
    var3['useGuildIncidentsState'] = var4;
    var4 = function shouldShowRaidNotificationNagbar() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var4 = _closure1_slot15;
            var3 = _closure1_slot7;
            var2 = var3.getGuildId;
            var3 = var2.bind(var3)();
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var3 = _closure1_slot4;
            var1 = var3.getGuildsProto;
            var4 = var1.bind(var3)();
            var3 = null;
            if(!(var3 == var4)) { _fun0009_ip = 61; continue _fun0009 }
case 62:
            var4 = {};
case 61:
            var5 = var3 != var2;
            var1 = null;
            if(!var5) { _fun0009_ip = 63; continue _fun0009 }
case 64:
            var1 = var4[var2];
case 63:
            var4 = var3 != var1;
            if(!var4) { _fun0009_ip = 65; continue _fun0009 }
case 35:
            var4 = var1.disableRaidAlertNag;
case 65:
            var1 = {};
            var3 = var3 != var2;
            if(!var3) { _fun0009_ip = 66; continue _fun0009 }
case 67:
            var3 = !var4;
case 66:
            var1['show'] = var3;
            var1['guildId'] = var2;
            return var1;
        }
    };
    var3['shouldShowRaidNotificationNagbar'] = var4;
    var4 = function shouldShowRaidInAppNotification() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = _closure1_slot15;
            var4 = _closure1_slot7;
            var2 = var4.getGuildId;
            var2 = var2.bind(var4)();
            var8 = undefined;
            var2 = var3.bind(var8)(var2);
            var4 = _closure1_slot4;
            var3 = var4.getGuildsProto;
            var4 = var3.bind(var4)();
            var3 = null;
            if(!(var3 == var4)) { _fun0010_ip = 61; continue _fun0010 }
case 62:
            var4 = {};
case 61:
            var6 = var3 != var2;
            var5 = null;
            if(!var6) { _fun0010_ip = 63; continue _fun0010 }
case 64:
            var5 = var4[var2];
case 63:
            var4 = var3 != var5;
            if(!var4) { _fun0010_ip = 65; continue _fun0010 }
case 35:
            var4 = var5.disableRaidAlertNag;
case 65:
            var5 = var3 != var2;
            var7 = null;
            if(!var5) { _fun0010_ip = 68; continue _fun0010 }
case 67:
            var6 = _closure1_slot9;
            var5 = var6.getGuildIncident;
            var7 = var5.bind(var6)(var2);
case 68:
            var5 = var3 != var7;
            if(!var5) { _fun0010_ip = 39; continue _fun0010 }
case 69:
            var6 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = 10;
            var1 = var9[var1];
            var6 = var6.bind(var8)(var1);
            var1 = var6.isUnderLockdown;
            var5 = var1.bind(var6)(var7);
case 39:
            var1 = {};
            var3 = var3 != var2;
            if(!var3) { _fun0010_ip = 70; continue _fun0010 }
case 71:
            var3 = !var5;
case 70:
            if(!var3) { _fun0010_ip = 72; continue _fun0010 }
case 73:
            var3 = !var4;
case 72:
            var1['show'] = var3;
            var1['guildId'] = var2;
            return var1;
        }
    };
    var3['shouldShowRaidInAppNotification'] = var4;
    var4 = function getDisabledActions(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var7 = arg1;
            var3 = null;
            if(!(var3 != var7)) { _fun0011_ip = 74; continue _fun0011 }
case 75:
            var4 = _closure1_slot9;
            var2 = var4.getGuildIncident;
            var1 = var7.id;
            var4 = var2.bind(var4)(var1);
            var1 = {};
            var8 = var3 == var7;
            var5 = undefined;
            if(var8) { _fun0011_ip = 76; continue _fun0011 }
case 2:
            var8 = var7.features;
            var7 = var8.has;
            var6 = _closure1_slot12;
            var6 = var6.INVITES_DISABLED;
            var5 = var7.bind(var8)(var6);
case 76:
            if(var5) { _fun0011_ip = 77; continue _fun0011 }
case 78:
            var7 = var3 == var4;
            var6 = undefined;
            if(var7) { _fun0011_ip = 56; continue _fun0011 }
case 79:
            var6 = var4.invitesDisabledUntil;
case 56:
            var6 = var3 != var6;
            if(!var6) { _fun0011_ip = 80; continue _fun0011 }
case 81:
            var7 = global;
            var10 = var7.Date;
            var11 = var4.invitesDisabledUntil;
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var12 = var9;
            var8 = new var12[var10](var11, var10);
            var8 = var8 instanceof Object ? var8 : var9;
            var7 = var7.Date;
            var9 = var7.prototype;
            var9 = Object.create(var9, {constructor: {value: var7}});
            var12 = var9;
            var7 = new var12[var7](var11);
            var7 = var7 instanceof Object ? var7 : var9;
            var6 = var8 > var7;
case 80:
            var5 = var6;
case 77:
            var1['invitesDisabled'] = var5;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0011_ip = 82; continue _fun0011 }
case 83:
            var2 = var4.dmsDisabledUntil;
case 82:
            var2 = var3 != var2;
            if(!var2) { _fun0011_ip = 84; continue _fun0011 }
case 85:
            var3 = global;
            var6 = var3.Date;
            var11 = var4.dmsDisabledUntil;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var12 = var5;
            var4 = new var12[var6](var11, var10);
            var4 = var4 instanceof Object ? var4 : var5;
            var3 = var3.Date;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var12 = var5;
            var3 = new var12[var3](var11);
            var3 = var3 instanceof Object ? var3 : var5;
            var2 = var4 > var3;
case 84:
            var1['dmsDisabled'] = var2;
            return var1;
case 74:
            var1 = {'dmsDisabled': false, 'invitesDisabled': false};
            return var1;
        }
    };
    var3['getDisabledActions'] = var4;
    var2 = function useDisabledActions(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var7 = arg1;
            var3 = null;
            var4 = var3 == var7;
            var2 = undefined;
            var10 = undefined;
            if(var4) { _fun0012_ip = 31; continue _fun0012 }
case 86:
            var10 = var7.id;
case 31:
            if(!(var3 == var10)) { _fun0012_ip = 87; continue _fun0012 }
case 88:
            var10 = _closure1_slot11;
case 87:
            var _closure2_slot0 = var10;
            var5 = _closure1_slot0;
            var8 = _closure1_slot3;
            var4 = 8;
            var4 = var8[var4];
            var9 = var5.bind(var2)(var4);
            var8 = var9.useStateFromStores;
            var4 = _closure1_slot9;
            var5 = new Array(1);
            var5[0] = var4;
            var4 = new Array(1);
            var4[0] = var10;
            var1 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getGuildIncident;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var8.bind(var9)(var5, var1, var4);
            if(!(var3 != var7)) { _fun0012_ip = 89; continue _fun0012 }
case 69:
            var1 = {};
            var8 = var3 == var7;
            var5 = undefined;
            if(var8) { _fun0012_ip = 90; continue _fun0012 }
case 91:
            var8 = var7.features;
            var7 = var8.has;
            var6 = _closure1_slot12;
            var6 = var6.INVITES_DISABLED;
            var5 = var7.bind(var8)(var6);
case 90:
            if(var5) { _fun0012_ip = 92; continue _fun0012 }
case 71:
            var7 = var3 == var4;
            var6 = undefined;
            if(var7) { _fun0012_ip = 93; continue _fun0012 }
case 72:
            var6 = var4.invitesDisabledUntil;
case 93:
            var6 = var3 != var6;
            if(!var6) { _fun0012_ip = 94; continue _fun0012 }
case 17:
            var7 = global;
            var10 = var7.Date;
            var13 = var4.invitesDisabledUntil;
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var14 = var9;
            var8 = new var14[var10](var13, var12);
            var8 = var8 instanceof Object ? var8 : var9;
            var7 = var7.Date;
            var9 = var7.prototype;
            var9 = Object.create(var9, {constructor: {value: var7}});
            var14 = var9;
            var7 = new var14[var7](var13);
            var7 = var7 instanceof Object ? var7 : var9;
            var6 = var8 > var7;
case 94:
            var5 = var6;
case 92:
            var1['invitesDisabled'] = var5;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0012_ip = 95; continue _fun0012 }
case 96:
            var2 = var4.dmsDisabledUntil;
case 95:
            var2 = var3 != var2;
            if(!var2) { _fun0012_ip = 97; continue _fun0012 }
case 98:
            var3 = global;
            var6 = var3.Date;
            var13 = var4.dmsDisabledUntil;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var14 = var5;
            var4 = new var14[var6](var13, var12);
            var4 = var4 instanceof Object ? var4 : var5;
            var3 = var3.Date;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var14 = var5;
            var3 = new var14[var3](var13);
            var3 = var3 instanceof Object ? var3 : var5;
            var2 = var4 > var3;
case 97:
            var1['dmsDisabled'] = var2;
            _fun0012_ip = 99; continue _fun0012;
case 89:
            var1 = {'dmsDisabled': false, 'invitesDisabled': false};
case 99:
            return var1;
        }
    };
    var3['useDisabledActions'] = var2;
    return var1;
})();