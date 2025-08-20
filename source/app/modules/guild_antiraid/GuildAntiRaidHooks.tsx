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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 343:
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
    var _closure1_slot14 = var1;
    var1 = function getFirstGuildIncidentId(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
            if(var2) { _fun0004_ip = 364; continue _fun0004 }
 124:
            var2 = var5.value;
            if(!(var1 != var2)) { _fun0004_ip = 337; continue _fun0004 }
 136:
            var3 = var2.id;
            var16 = var12[var3];
            var4 = var16;
            if(!(var1 != var16)) { _fun0004_ip = 337; continue _fun0004 }
 155:
            var17 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var17 = var17.bind(var11)(var3);
            var3 = var17.hasDetectedActivity;
            var3 = var3.bind(var17)(var16);
            if(var3) { _fun0004_ip = 220; continue _fun0004 }
 186:
            var17 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var17 = var17.bind(var11)(var3);
            var3 = var17.isUnderLockdown;
            var3 = var3.bind(var17)(var16);
            var4 = var16;
            if(!var3) { _fun0004_ip = 337; continue _fun0004 }
 220:
            var17 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var17 = var17.bind(var11)(var3);
            var3 = var17.isUnderLockdown;
            var3 = var3.bind(var17)(var16);
            if(!var3) { _fun0004_ip = 263; continue _fun0004 }
 251:
            var3 = var2.id;
            var4 = var16;
            if(!(var3 === var15)) { _fun0004_ip = 337; continue _fun0004 }
 263:
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
            if(var3) { _fun0004_ip = 357; continue _fun0004 }
 337:
            var16 = var10.bind(var11)();
            var3 = var16.done;
            var5 = var16;
            if(var3) { _fun0004_ip = 364; continue _fun0004 }
 352:
            _fun0004_ip = 124; continue _fun0004;
 357:
            var2 = var2.id;
            return var2;
 364:
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
 0:
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
            if(var2) { _fun0005_ip = 373; continue _fun0005 }
 176:
            var2 = var5.value;
            if(!(var1 != var2)) { _fun0005_ip = 346; continue _fun0005 }
 188:
            var3 = var2.id;
            var15 = var11[var3];
            var4 = var15;
            if(!(var1 != var4)) { _fun0005_ip = 346; continue _fun0005 }
 207:
            var16 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var16 = var16.bind(var13)(var3);
            var3 = var16.hasDetectedActivity;
            var3 = var3.bind(var16)(var15);
            if(var3) { _fun0005_ip = 272; continue _fun0005 }
 238:
            var16 = _closure1_slot0;
            var3 = _closure1_slot3;
            var3 = var3[var6];
            var16 = var16.bind(var13)(var3);
            var3 = var16.isUnderLockdown;
            var3 = var3.bind(var16)(var15);
            var4 = var15;
            if(!var3) { _fun0005_ip = 346; continue _fun0005 }
 272:
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
            if(var3) { _fun0005_ip = 366; continue _fun0005 }
 346:
            var15 = var10.bind(var13)();
            var3 = var15.done;
            var5 = var15;
            if(var3) { _fun0005_ip = 373; continue _fun0005 }
 361:
            _fun0005_ip = 176; continue _fun0005;
 366:
            var2 = var2.id;
            return var2;
 373:
            return var1;
        }
    };
    var3['useFirstGuildIncidentId'] = var4;
    var4 = function useGuildIncidentsState(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
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
 0:
                    var4 = _closure1_slot5;
                    var3 = var4.getGuild;
                    var1 = _closure2_slot0;
                    var5 = var3.bind(var4)(var1);
                    var1 = null;
                    if(!(var1 != var5)) { _fun0007_ip = 92; continue _fun0007 }
 30:
                    var4 = _closure1_slot6;
                    var3 = var4.getGuildPermissions;
                    var5 = var3.bind(var4)(var5);
                    var1 = var1 != var5;
                    if(!var1) { _fun0007_ip = 90; continue _fun0007 }
 52:
                    var6 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var6.bind(var3)(var4);
                    var3 = var4.hasAny;
                    var2 = _closure1_slot10;
                    var1 = var3.bind(var4)(var5, var2);
 90:
                    return var1;
 92:
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
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0008_ip = 38; continue _fun0008 }
 16:
                    var4 = _closure1_slot9;
                    var3 = var4.getGuildIncident;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var5 = var5.bind(var7)(var4, var1);
            var1 = {};
            var1['shouldShowIncidentActions'] = var2;
            var1['incidentData'] = var5;
            var2 = null;
            var2 = var2 != var5;
            if(!var2) { _fun0006_ip = 159; continue _fun0006 }
 128:
            var4 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 10;
            var3 = var7[var3];
            var4 = var4.bind(var6)(var3);
            var3 = var4.isUnderLockdown;
            var2 = var3.bind(var4)(var5);
 159:
            var1['isUnderLockdown'] = var2;
            return var1;
        }
    };
    var3['useGuildIncidentsState'] = var4;
    var4 = function shouldShowRaidNotificationNagbar() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
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
            if(!(var3 == var4)) { _fun0009_ip = 50; continue _fun0009 }
 48:
            var4 = {};
 50:
            var5 = var3 != var2;
            var1 = null;
            if(!var5) { _fun0009_ip = 63; continue _fun0009 }
 59:
            var1 = var4[var2];
 63:
            var4 = var3 != var1;
            if(!var4) { _fun0009_ip = 76; continue _fun0009 }
 70:
            var4 = var1.disableRaidAlertNag;
 76:
            var1 = {};
            var3 = var3 != var2;
            if(!var3) { _fun0009_ip = 88; continue _fun0009 }
 85:
            var3 = !var4;
 88:
            var1['show'] = var3;
            var1['guildId'] = var2;
            return var1;
        }
    };
    var3['shouldShowRaidNotificationNagbar'] = var4;
    var4 = function shouldShowRaidInAppNotification() {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
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
            if(!(var3 == var4)) { _fun0010_ip = 50; continue _fun0010 }
 48:
            var4 = {};
 50:
            var6 = var3 != var2;
            var5 = null;
            if(!var6) { _fun0010_ip = 63; continue _fun0010 }
 59:
            var5 = var4[var2];
 63:
            var4 = var3 != var5;
            if(!var4) { _fun0010_ip = 76; continue _fun0010 }
 70:
            var4 = var5.disableRaidAlertNag;
 76:
            var5 = var3 != var2;
            var7 = null;
            if(!var5) { _fun0010_ip = 100; continue _fun0010 }
 85:
            var6 = _closure1_slot9;
            var5 = var6.getGuildIncident;
            var7 = var5.bind(var6)(var2);
 100:
            var5 = var3 != var7;
            if(!var5) { _fun0010_ip = 138; continue _fun0010 }
 107:
            var6 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = 10;
            var1 = var9[var1];
            var6 = var6.bind(var8)(var1);
            var1 = var6.isUnderLockdown;
            var5 = var1.bind(var6)(var7);
 138:
            var1 = {};
            var3 = var3 != var2;
            if(!var3) { _fun0010_ip = 150; continue _fun0010 }
 147:
            var3 = !var5;
 150:
            if(!var3) { _fun0010_ip = 156; continue _fun0010 }
 153:
            var3 = !var4;
 156:
            var1['show'] = var3;
            var1['guildId'] = var2;
            return var1;
        }
    };
    var3['shouldShowRaidInAppNotification'] = var4;
    var4 = function getDisabledActions(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var7 = arg1;
            var3 = null;
            if(!(var3 != var7)) { _fun0011_ip = 262; continue _fun0011 }
 12:
            var4 = _closure1_slot9;
            var2 = var4.getGuildIncident;
            var1 = var7.id;
            var4 = var2.bind(var4)(var1);
            var1 = {};
            var8 = var3 == var7;
            var5 = undefined;
            if(var8) { _fun0011_ip = 72; continue _fun0011 }
 46:
            var8 = var7.features;
            var7 = var8.has;
            var6 = _closure1_slot12;
            var6 = var6.INVITES_DISABLED;
            var5 = var7.bind(var8)(var6);
 72:
            if(var5) { _fun0011_ip = 164; continue _fun0011 }
 75:
            var7 = var3 == var4;
            var6 = undefined;
            if(var7) { _fun0011_ip = 90; continue _fun0011 }
 84:
            var6 = var4.invitesDisabledUntil;
 90:
            var6 = var3 != var6;
            if(!var6) { _fun0011_ip = 161; continue _fun0011 }
 97:
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
 161:
            var5 = var6;
 164:
            var1['invitesDisabled'] = var5;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0011_ip = 184; continue _fun0011 }
 178:
            var2 = var4.dmsDisabledUntil;
 184:
            var2 = var3 != var2;
            if(!var2) { _fun0011_ip = 255; continue _fun0011 }
 191:
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
 255:
            var1['dmsDisabled'] = var2;
            return var1;
 262:
            var1 = {'dmsDisabled': false, 'invitesDisabled': false};
            return var1;
        }
    };
    var3['getDisabledActions'] = var4;
    var2 = function useDisabledActions(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var7 = arg1;
            var3 = null;
            var4 = var3 == var7;
            var2 = undefined;
            var10 = undefined;
            if(var4) { _fun0012_ip = 23; continue _fun0012 }
 18:
            var10 = var7.id;
 23:
            if(!(var3 == var10)) { _fun0012_ip = 34; continue _fun0012 }
 27:
            var10 = _closure1_slot11;
 34:
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
            if(!(var3 != var7)) { _fun0012_ip = 332; continue _fun0012 }
 105:
            var1 = {};
            var8 = var3 == var7;
            var5 = undefined;
            if(var8) { _fun0012_ip = 142; continue _fun0012 }
 116:
            var8 = var7.features;
            var7 = var8.has;
            var6 = _closure1_slot12;
            var6 = var6.INVITES_DISABLED;
            var5 = var7.bind(var8)(var6);
 142:
            if(var5) { _fun0012_ip = 234; continue _fun0012 }
 145:
            var7 = var3 == var4;
            var6 = undefined;
            if(var7) { _fun0012_ip = 160; continue _fun0012 }
 154:
            var6 = var4.invitesDisabledUntil;
 160:
            var6 = var3 != var6;
            if(!var6) { _fun0012_ip = 231; continue _fun0012 }
 167:
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
 231:
            var5 = var6;
 234:
            var1['invitesDisabled'] = var5;
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0012_ip = 254; continue _fun0012 }
 248:
            var2 = var4.dmsDisabledUntil;
 254:
            var2 = var3 != var2;
            if(!var2) { _fun0012_ip = 325; continue _fun0012 }
 261:
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
 325:
            var1['dmsDisabled'] = var2;
            _fun0012_ip = 346; continue _fun0012;
 332:
            var1 = {'dmsDisabled': false, 'invitesDisabled': false};
 346:
            return var1;
        }
    };
    var3['useDisabledActions'] = var2;
    return var1;
})();