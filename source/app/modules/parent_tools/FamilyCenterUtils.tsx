// app/modules/parent_tools/FamilyCenterUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
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
    var4 = var6.bind(var1)(var4);
    var5 = var4.ACTION_TO_TEXT;
    var _closure1_slot4 = var5;
    var5 = var4.ACTION_TO_TEXT_V2;
    var _closure1_slot5 = var5;
    var5 = var4.FAMILY_CENTER_ERROR_CODE_TO_FAILURE;
    var _closure1_slot6 = var5;
    var5 = var4.FamilyCenterFailureCode;
    var _closure1_slot7 = var5;
    var4 = var4.TeenActionDisplayType;
    var _closure1_slot8 = var4;
    var4 = function getActivityTypeTextConfigs(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = global;
            var5 = var2.Map;
            var9 = _closure1_slot4;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var10 = var4;
            var1 = new var10[var5](var9, var8);
            var6 = var1 instanceof Object ? var1 : var4;
            var4 = arg1;
            var1 = var6;
            if(!var4) { _fun0001_ip = 100; continue _fun0001 }
 44:
            var4 = var2.Map;
            var2 = new Array(0);
            var7 = 0;
            var9 = var2;
            var8 = var6;
            var7 = arraySpread(var9, var8, var7);
            var8 = _closure1_slot5;
            var9 = var2;
            var3 = arraySpread(var9, var8, var7);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var10 = var3;
            var9 = var2;
            var2 = new var10[var4](var9, var8);
            var1 = var2 instanceof Object ? var2 : var3;
 100:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/parent_tools/FamilyCenterUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function() {
        var1 = {};
        var7 = _closure1_slot0;
        var5 = _closure1_slot2;
        var6 = 2;
        var3 = var5[var6];
        var4 = undefined;
        var3 = var7.bind(var4)(var3);
        var10 = var3.intl;
        var9 = var10.string;
        var3 = _closure1_slot1;
        var2 = 3;
        var8 = var5[var2];
        var8 = var3.bind(var4)(var8);
        var8 = var8.VjIAQU;
        var8 = var9.bind(var10)(var8);
        var1['today'] = var8;
        var6 = var5[var6];
        var6 = var7.bind(var4)(var6);
        var8 = var6.intl;
        var7 = var8.string;
        var6 = var5[var2];
        var6 = var3.bind(var4)(var6);
        var6 = var6.2a8xHR;
        var6 = var7.bind(var8)(var6);
        var1['yesterday'] = var6;
        var2 = var5[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.Xt6oND;
        var1['days'] = var2;
        return var1;
    };
    var3['getEmptyActivityFormatter'] = var5;
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = {};
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = 2;
            var3 = var6[var7];
            var5 = undefined;
            var3 = var8.bind(var5)(var3);
            var11 = var3.intl;
            var10 = var11.string;
            var4 = _closure1_slot1;
            var3 = 3;
            var1 = var6[var3];
            var9 = var4.bind(var5)(var1);
            var1 = arg1;
            if(var1) { _fun0002_ip = 150; continue _fun0002 }
 59:
            var1 = var9.g1ZX6u;
            var1 = var10.bind(var11)(var1);
            var2['today'] = var1;
            var1 = var6[var7];
            var1 = var8.bind(var5)(var1);
            var13 = var1.intl;
            var12 = var13.string;
            var1 = var6[var3];
            var1 = var4.bind(var5)(var1);
            var1 = var1.s3qSVl;
            var1 = var12.bind(var13)(var1);
            var2['yesterday'] = var1;
            var1 = var6[var3];
            var1 = var4.bind(var5)(var1);
            var1 = var1.f1UJiI;
            var2['days'] = var1;
            var1 = var2;
            _fun0002_ip = 239; continue _fun0002;
 150:
            var9 = var9.2AtcIi;
            var9 = var10.bind(var11)(var9);
            var2['today'] = var9;
            var7 = var6[var7];
            var7 = var8.bind(var5)(var7);
            var9 = var7.intl;
            var8 = var9.string;
            var7 = var6[var3];
            var7 = var4.bind(var5)(var7);
            var7 = var7.stOECg;
            var7 = var8.bind(var9)(var7);
            var2['yesterday'] = var7;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.n8n5BQ;
            var2['days'] = var3;
            var1 = var2;
 239:
            return var1;
        }
    };
    var3['getActivityWindowTimestampFormatter'] = var5;
    var5 = function(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var10 = arg3;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 4;
            var2 = var7[var3];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var11 = var2.bind(var4)();
            var9 = var11.diff;
            var2 = var7[var3];
            var2 = var6.bind(var4)(var2);
            var8 = var2.bind(var4)(var5);
            var2 = 's';
            var12 = var9.bind(var11)(var8, var2);
            var2 = arg2;
            var2 = var2.bind(var4)();
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var6 = var3.bind(var4)(var5);
            var5 = var6.format;
            var3 = 'LL';
            var3 = var5.bind(var6)(var3);
            var6 = 86400;
            if(!(!(var12 < var6))) { _fun0003_ip = 240; continue _fun0003 }
 113:
            var3 = 172800;
            if(!(!(var12 < var3))) { _fun0003_ip = 232; continue _fun0003 }
 123:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var5 = var1.intl;
            var4 = var5.formatToPlainString;
            var3 = var2.days;
            var1 = {};
            var7 = global;
            var9 = var7.Math;
            var8 = var9.min;
            var11 = var7.Math;
            var7 = var11.floor;
            var6 = var12 / var6;
            var7 = var7.bind(var11)(var6);
            var6 = null;
            var11 = var6 != var10;
            var6 = 999;
            if(!var11) { _fun0003_ip = 213; continue _fun0003 }
 210:
            var6 = var10;
 213:
            var6 = var8.bind(var9)(var7, var6);
            var1['days'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 238; continue _fun0003;
 232:
            var1 = var2.yesterday;
 238:
            _fun0003_ip = 246; continue _fun0003;
 240:
            var1 = var2.today;
 246:
            return var1;
        }
    };
    var3['formatUserActivityTimestamp'] = var5;
    var5 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 4;
            var2 = var7[var1];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var10 = var2.bind(var5)();
            var9 = var10.diff;
            var2 = var7[var1];
            var2 = var6.bind(var5)(var2);
            var8 = var2.bind(var5)(var4);
            var2 = 's';
            var10 = var9.bind(var10)(var8, var2);
            var2 = arg2;
            var2 = var2.bind(var5)();
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var6 = var1.bind(var5)(var4);
            var4 = var6.format;
            var1 = 'LL';
            var9 = var4.bind(var6)(var1);
            var7 = 60;
            if(!(!(var10 < var7))) { _fun0004_ip = 437; continue _fun0004 }
 107:
            var11 = 3600;
            if(!(!(var10 < var11))) { _fun0004_ip = 363; continue _fun0004 }
 120:
            var12 = 86400;
            if(!(!(var10 < var12))) { _fun0004_ip = 289; continue _fun0004 }
 133:
            var1 = 172800;
            if(!(!(var10 < var1))) { _fun0004_ip = 281; continue _fun0004 }
 146:
            var1 = 604800;
            if(!(!(var10 < var1))) { _fun0004_ip = 207; continue _fun0004 }
 156:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 2;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var8 = var1.intl;
            var6 = var8.formatToPlainString;
            var4 = var2.date;
            var1 = {};
            var1['date'] = var9;
            var1 = var6.bind(var8)(var4, var1);
            _fun0004_ip = 279; continue _fun0004;
 207:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 2;
            var4 = var8[var4];
            var4 = var6.bind(var5)(var4);
            var9 = var4.intl;
            var8 = var9.formatToPlainString;
            var6 = var2.days;
            var4 = {};
            var13 = global;
            var14 = var13.Math;
            var13 = var14.floor;
            var12 = var10 / var12;
            var12 = var13.bind(var14)(var12);
            var4['count'] = var12;
            var1 = var8.bind(var9)(var6, var4);
 279:
            _fun0004_ip = 287; continue _fun0004;
 281:
            var1 = var2.yesterday;
 287:
            _fun0004_ip = 361; continue _fun0004;
 289:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 2;
            var4 = var8[var4];
            var4 = var6.bind(var5)(var4);
            var9 = var4.intl;
            var8 = var9.formatToPlainString;
            var6 = var2.hours;
            var4 = {};
            var12 = global;
            var13 = var12.Math;
            var12 = var13.floor;
            var11 = var10 / var11;
            var11 = var12.bind(var13)(var11);
            var4['count'] = var11;
            var1 = var8.bind(var9)(var6, var4);
 361:
            _fun0004_ip = 435; continue _fun0004;
 363:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 2;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var6 = var3.intl;
            var5 = var6.formatToPlainString;
            var4 = var2.minutes;
            var3 = {};
            var8 = global;
            var9 = var8.Math;
            var8 = var9.floor;
            var7 = var10 / var7;
            var7 = var8.bind(var9)(var7);
            var3['count'] = var7;
            var1 = var5.bind(var6)(var4, var3);
 435:
            _fun0004_ip = 443; continue _fun0004;
 437:
            var1 = var2.seconds;
 443:
            return var1;
        }
    };
    var3['formatLinkTimestamp'] = var5;
    var5 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var4 = var3.display_type;
            var1 = _closure1_slot8;
            var1 = var1.USER_ADD;
            var1 = var4 === var1;
            if(var1) { _fun0005_ip = 49; continue _fun0005 }
 29:
            var5 = var3.display_type;
            var4 = _closure1_slot8;
            var4 = var4.USER_INTERACTION;
            var1 = var5 === var4;
 49:
            if(var1) { _fun0005_ip = 72; continue _fun0005 }
 52:
            var3 = var3.display_type;
            var2 = _closure1_slot8;
            var2 = var2.USER_CALLED;
            var1 = var3 === var2;
 72:
            return var1;
        }
    };
    var3['isUserAction'] = var5;
    var5 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var4 = var3.display_type;
            var1 = _closure1_slot8;
            var1 = var1.GUILD_ADD;
            var1 = var4 === var1;
            if(var1) { _fun0006_ip = 49; continue _fun0006 }
 29:
            var3 = var3.display_type;
            var2 = _closure1_slot8;
            var2 = var2.GUILD_INTERACTION;
            var1 = var3 === var2;
 49:
            return var1;
        }
    };
    var3['isGuildAction'] = var5;
    var5 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var5 = arg1;
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot8;
            var4 = var2.bind(var3)(var1);
            var1 = var4.length;
            var3 = 0;
            var1 = var3 < var1;
            if(!var1) { _fun0007_ip = 71; continue _fun0007 }
 42:
            var1 = var4[var3];
            var2 = var1.toString;
            var2 = var2.bind(var1)();
            if(!(var2 !== var5)) { _fun0007_ip = 75; continue _fun0007 }
 59:
            var3 = var3 + 1;
            var2 = var4.length;
            if(var3 < var2) { _fun0007_ip = 42; continue _fun0007 }
 71:
            var2 = undefined;
            return var2;
 75:
            return var1;
        }
    };
    var3['displayTypeFromString'] = var5;
    var5 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = _closure1_slot6;
            var1 = arg1;
            var1 = var1.code;
            var1 = var3[var1];
            var3 = null;
            if(!(var3 == var1)) { _fun0008_ip = 35; continue _fun0008 }
 25:
            var2 = _closure1_slot7;
            var1 = var2.GENERIC_ERROR;
 35:
            return var1;
        }
    };
    var3['getFailureCodeForAPIError'] = var5;
    var5 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var3 = _closure1_slot9;
            var2 = undefined;
            var1 = arg1;
            var4 = var3.bind(var2)(var1);
            var2 = var4.size;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0009_ip = 76; continue _fun0009 }
 28:
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var1 = var4.entries;
            var1 = var1.bind(var4)();
            var3 = var2.bind(var3)(var1);
            var2 = var3.sort;
            var1 = function(arg1, arg2) {
                var1 = arg1;
                var3 = 1;
                var1 = var1[var3];
                var2 = var1.priority;
                var1 = arg2;
                var1 = var1[var3];
                var1 = var1.priority;
                var1 = var2 - var1;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            _fun0009_ip = 80; continue _fun0009;
 76:
            var1 = new Array(0);
 80:
            return var1;
        }
    };
    var3['getSortedActivityTypeConfigs'] = var5;
    var3['getActivityTypeTextConfigs'] = var4;
    var4 = function(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var3 = arg1;
            var2 = global;
            var6 = var2.Math;
            var5 = var6.floor;
            var1 = 60;
            var4 = var3 / var1;
            var7 = var5.bind(var6)(var4);
            var6 = var3 % var1;
            var1 = 0;
            if(!(!(var7 > var1))) { _fun0010_ip = 66; continue _fun0010 }
 39:
            var1 = var2.HermesInternal;
            var4 = var1.concat;
            var3 = '';
            var1 = 'm';
            var1 = var4.bind(var3)(var6, var1);
            _fun0010_ip = 101; continue _fun0010;
 66:
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var12 = '';
            var10 = 'h ';
            var8 = 'm';
            var11 = var7;
            var9 = var6;
            var1 = var12[var5](var11, var10, var9, var8, var7);
 101:
            return var1;
        }
    };
    var3['formatTotalTime'] = var4;
    var2 = function() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var3 = _closure1_slot3;
            var2 = var3.getAreLinkedUsersProcessed;
            var2 = var2.bind(var3)();
            if(var2) { _fun0011_ip = 56; continue _fun0011 }
 22:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.fetchLinkedUsers;
            var3 = var3.bind(var4)();
            return var2;
 56:
            var2 = _closure1_slot3;
            var1 = var2.getLinkedUsers;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['getOrFetchLinkedUsers'] = var2;
    return var1;
})();