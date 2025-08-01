// app/modules/guild_antiraid/GuildAntiRaidUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var4 = function hasDetectedRaid(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var2 = var7.raidDetectedAt;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 90; continue _fun0001 }
 18:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 1;
            var8 = var6[var2];
            var4 = undefined;
            var8 = var5.bind(var4)(var8);
            var7 = var7.raidDetectedAt;
            var9 = var8.bind(var4)(var7);
            var8 = var9.add;
            var7 = _closure1_slot3;
            var3 = 'hours';
            var3 = var8.bind(var9)(var7, var3);
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var1 = var3 > var2;
 90:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var5 = var5.NAGBAR_DISPLAY_MAX_HOURS;
    var _closure1_slot3 = var5;
    var5 = {'month': 'numeric', 'day': 'numeric', 'hour': 'numeric', 'minute': '2-digit'};
    var _closure1_slot4 = var5;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_antiraid/GuildAntiRaidUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['DATE_CONFIG'] = var5;
    var5 = function hasDetectedActivity(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var8 = arg1;
            var1 = var8.dmSpamDetectedAt;
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0002_ip = 90; continue _fun0002 }
 18:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 1;
            var9 = var7[var2];
            var5 = undefined;
            var10 = var6.bind(var5)(var9);
            var9 = var8.dmSpamDetectedAt;
            var11 = var10.bind(var5)(var9);
            var10 = var11.add;
            var9 = _closure1_slot3;
            var4 = 'hours';
            var4 = var10.bind(var11)(var9, var4);
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var1 = var4 > var2;
 90:
            if(var1) { _fun0002_ip = 181; continue _fun0002 }
 93:
            var2 = var8.raidDetectedAt;
            var2 = var3 != var2;
            if(!var2) { _fun0002_ip = 178; continue _fun0002 }
 106:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 1;
            var9 = var7[var3];
            var5 = undefined;
            var9 = var6.bind(var5)(var9);
            var8 = var8.raidDetectedAt;
            var10 = var9.bind(var5)(var8);
            var9 = var10.add;
            var8 = _closure1_slot3;
            var4 = 'hours';
            var4 = var9.bind(var10)(var8, var4);
            var3 = var7[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var2 = var4 > var3;
 178:
            var1 = var2;
 181:
            return var1;
        }
    };
    var3['hasDetectedActivity'] = var5;
    var3['hasDetectedRaid'] = var4;
    var4 = function hasDetectedDMRaid(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var7 = arg1;
            var2 = var7.dmSpamDetectedAt;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0003_ip = 90; continue _fun0003 }
 18:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 1;
            var8 = var6[var2];
            var4 = undefined;
            var8 = var5.bind(var4)(var8);
            var7 = var7.dmSpamDetectedAt;
            var9 = var8.bind(var4)(var7);
            var8 = var9.add;
            var7 = _closure1_slot3;
            var3 = 'hours';
            var3 = var8.bind(var9)(var7, var3);
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var1 = var3 > var2;
 90:
            return var1;
        }
    };
    var3['hasDetectedDMRaid'] = var4;
    var4 = function getIncidentAlertType(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 == var4;
            var5 = undefined;
            var1 = undefined;
            if(var2) { _fun0004_ip = 74; continue _fun0004 }
 16:
            var2 = _closure1_slot5;
            var2 = var2.bind(var5)(var4);
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 2;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.GuildIncidentAlertTypes;
            if(var2) { _fun0004_ip = 65; continue _fun0004 }
 57:
            var2 = var3.DM_RAID;
            _fun0004_ip = 71; continue _fun0004;
 65:
            var2 = var3.JOIN_RAID;
 71:
            var1 = var2;
 74:
            return var1;
        }
    };
    var3['getIncidentAlertType'] = var4;
    var4 = function getEnabledInterventions(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = new Array(0);
            var2 = arg1;
            if(!var2) { _fun0005_ip = 57; continue _fun0005 }
 10:
            var3 = var1.push;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.GuildIncidentActionTypes;
            var2 = var2.INVITES_DISABLED;
            var2 = var3.bind(var1)(var2);
 57:
            var2 = arg2;
            if(!var2) { _fun0005_ip = 110; continue _fun0005 }
 63:
            var3 = var1.push;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.GuildIncidentActionTypes;
            var2 = var2.DMS_DISABLED;
            var2 = var3.bind(var1)(var2);
 110:
            return var1;
        }
    };
    var3['getEnabledInterventions'] = var4;
    var4 = function getDisabledInterventions(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = new Array(0);
            var2 = arg1;
            if(var2) { _fun0006_ip = 57; continue _fun0006 }
 10:
            var3 = var1.push;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.GuildIncidentActionTypes;
            var2 = var2.INVITES_DISABLED;
            var2 = var3.bind(var1)(var2);
 57:
            var2 = arg2;
            if(var2) { _fun0006_ip = 110; continue _fun0006 }
 63:
            var3 = var1.push;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var2 = var5.bind(var2)(var4);
            var2 = var2.GuildIncidentActionTypes;
            var2 = var2.DMS_DISABLED;
            var2 = var3.bind(var1)(var2);
 110:
            return var1;
        }
    };
    var3['getDisabledInterventions'] = var4;
    var4 = function isUnderLockdown(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var1 = var4.dmsDisabledUntil;
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0007_ip = 82; continue _fun0007 }
 18:
            var2 = global;
            var7 = var2.Date;
            var8 = var4.dmsDisabledUntil;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var9 = var6;
            var5 = new var9[var7](var8, var7);
            var5 = var5 instanceof Object ? var5 : var6;
            var2 = var2.Date;
            var6 = var2.prototype;
            var6 = Object.create(var6, {constructor: {value: var2}});
            var9 = var6;
            var2 = new var9[var2](var8);
            var2 = var2 instanceof Object ? var2 : var6;
            var1 = var5 > var2;
 82:
            if(var1) { _fun0007_ip = 165; continue _fun0007 }
 85:
            var2 = var4.invitesDisabledUntil;
            var2 = var3 != var2;
            if(!var2) { _fun0007_ip = 162; continue _fun0007 }
 98:
            var3 = global;
            var6 = var3.Date;
            var8 = var4.invitesDisabledUntil;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var9 = var5;
            var4 = new var9[var6](var8, var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var3 = var3.Date;
            var5 = var3.prototype;
            var5 = Object.create(var5, {constructor: {value: var3}});
            var9 = var5;
            var3 = new var9[var3](var8);
            var3 = var3 instanceof Object ? var3 : var5;
            var2 = var4 > var3;
 162:
            var1 = var2;
 165:
            return var1;
        }
    };
    var3['isUnderLockdown'] = var4;
    var4 = function hasDMsDisabled(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = arg1;
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0008_ip = 20; continue _fun0008 }
 14:
            var1 = var3.dmsDisabledUntil;
 20:
            var1 = var2 != var1;
            if(!var1) { _fun0008_ip = 91; continue _fun0008 }
 27:
            var2 = global;
            var5 = var2.Date;
            var6 = var3.dmsDisabledUntil;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var7 = var4;
            var3 = new var7[var5](var6, var5);
            var3 = var3 instanceof Object ? var3 : var4;
            var2 = var2.Date;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var1 = var3 > var2;
 91:
            return var1;
        }
    };
    var3['hasDMsDisabled'] = var4;
    var4 = function hasInvitesDisabled(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var3 = arg1;
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0009_ip = 20; continue _fun0009 }
 14:
            var1 = var3.invitesDisabledUntil;
 20:
            var1 = var2 != var1;
            if(!var1) { _fun0009_ip = 91; continue _fun0009 }
 27:
            var2 = global;
            var5 = var2.Date;
            var6 = var3.invitesDisabledUntil;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var7 = var4;
            var3 = new var7[var5](var6, var5);
            var3 = var3 instanceof Object ? var3 : var4;
            var2 = var2.Date;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var1 = var3 > var2;
 91:
            return var1;
        }
    };
    var3['hasInvitesDisabled'] = var4;
    var2 = function getSecurityActionDetailsString(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var7 = arg2;
            var12 = var1.dmsDisabledUntil;
            var2 = null;
            if(!(var2 == var12)) { _fun0010_ip = 24; continue _fun0010 }
 18:
            var12 = var1.invitesDisabledUntil;
 24:
            if(!(var2 != var12)) { _fun0010_ip = 518; continue _fun0010 }
 31:
            var3 = var1.dmsDisabledUntil;
            var3 = var2 != var3;
            var1 = var1.invitesDisabledUntil;
            var2 = var2 != var1;
            var4 = var3;
            if(!var4) { _fun0010_ip = 60; continue _fun0010 }
 57:
            var4 = var2;
 60:
            var1 = true;
            if(!(var4 !== var1)) { _fun0010_ip = 374; continue _fun0010 }
 69:
            if(!(var3 !== var1)) { _fun0010_ip = 230; continue _fun0010 }
 76:
            if(!(var2 !== var1)) { _fun0010_ip = 86; continue _fun0010 }
 80:
            var1 = '';
            return var1;
 86:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 3;
            var1 = var13[var6];
            var10 = undefined;
            var1 = var11.bind(var10)(var1);
            var4 = var1.intl;
            var3 = var4.formatToPlainString;
            var1 = var13[var6];
            var1 = var11.bind(var10)(var1);
            var1 = var1.t;
            var2 = var1.M3iSyM;
            var1 = {};
            var1['guildName'] = var7;
            var8 = global;
            var8 = var8.Date;
            var9 = var8.prototype;
            var9 = Object.create(var9, {constructor: {value: var8}});
            var16 = var9;
            var15 = var12;
            var8 = new var16[var8](var15, var14);
            var9 = var8 instanceof Object ? var8 : var9;
            var8 = var9.toLocaleString;
            var6 = var13[var6];
            var6 = var11.bind(var10)(var6);
            var6 = var6.intl;
            var6 = var6.currentLocale;
            var5 = _closure1_slot4;
            var5 = var8.bind(var9)(var6, var5);
            var1['time'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 230:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 3;
            var1 = var13[var6];
            var10 = undefined;
            var1 = var11.bind(var10)(var1);
            var4 = var1.intl;
            var3 = var4.formatToPlainString;
            var1 = var13[var6];
            var1 = var11.bind(var10)(var1);
            var1 = var1.t;
            var2 = var1.HNKxf3;
            var1 = {};
            var1['guildName'] = var7;
            var8 = global;
            var8 = var8.Date;
            var9 = var8.prototype;
            var9 = Object.create(var9, {constructor: {value: var8}});
            var16 = var9;
            var15 = var12;
            var8 = new var16[var8](var15, var14);
            var9 = var8 instanceof Object ? var8 : var9;
            var8 = var9.toLocaleString;
            var6 = var13[var6];
            var6 = var11.bind(var10)(var6);
            var6 = var6.intl;
            var6 = var6.currentLocale;
            var5 = _closure1_slot4;
            var5 = var8.bind(var9)(var6, var5);
            var1['time'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 374:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 3;
            var1 = var11[var6];
            var9 = undefined;
            var1 = var10.bind(var9)(var1);
            var4 = var1.intl;
            var3 = var4.formatToPlainString;
            var1 = var11[var6];
            var1 = var10.bind(var9)(var1);
            var1 = var1.t;
            var2 = var1.hCZitb;
            var1 = {};
            var1['guildName'] = var7;
            var7 = global;
            var7 = var7.Date;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var16 = var8;
            var15 = var12;
            var7 = new var16[var7](var15, var14);
            var8 = var7 instanceof Object ? var7 : var8;
            var7 = var8.toLocaleString;
            var6 = var11[var6];
            var6 = var10.bind(var9)(var6);
            var6 = var6.intl;
            var6 = var6.currentLocale;
            var5 = _closure1_slot4;
            var5 = var7.bind(var8)(var6, var5);
            var1['time'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 518:
            var1 = '';
            return var1;
        }
    };
    var3['getSecurityActionDetailsString'] = var2;
    return var1;
})();