// app/modules/parent_tools/FamilyCenterUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.FAMILY_CENTER_ERROR_CODE_TO_FAILURE;
    var _closure1_slot3 = var7;
    var7 = var4.FamilyCenterFailureCode;
    var _closure1_slot4 = var7;
    var4 = var4.TeenActionDisplayType;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/FamilyCenterUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var1 = {};
        var7 = _closure1_slot0;
        var5 = _closure1_slot2;
        var6 = 1;
        var3 = var5[var6];
        var4 = undefined;
        var3 = var7.bind(var4)(var3);
        var10 = var3.intl;
        var9 = var10.string;
        var3 = _closure1_slot1;
        var2 = 2;
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
    var3['getEmptyActivityFormatter'] = var4;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = {};
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = 1;
            var3 = var6[var7];
            var5 = undefined;
            var3 = var8.bind(var5)(var3);
            var11 = var3.intl;
            var10 = var11.string;
            var4 = _closure1_slot1;
            var3 = 2;
            var1 = var6[var3];
            var9 = var4.bind(var5)(var1);
            var1 = arg1;
            if(var1) { _fun0001_ip = 150; continue _fun0001 }
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
            _fun0001_ip = 239; continue _fun0001;
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
    var3['getActivityWindowTimestampFormatter'] = var4;
    var4 = function(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var10 = arg3;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 3;
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
            if(!(!(var12 < var6))) { _fun0002_ip = 240; continue _fun0002 }
 113:
            var3 = 172800;
            if(!(!(var12 < var3))) { _fun0002_ip = 232; continue _fun0002 }
 123:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 1;
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
            if(!var11) { _fun0002_ip = 213; continue _fun0002 }
 210:
            var6 = var10;
 213:
            var6 = var8.bind(var9)(var7, var6);
            var1['days'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 238; continue _fun0002;
 232:
            var1 = var2.yesterday;
 238:
            _fun0002_ip = 246; continue _fun0002;
 240:
            var1 = var2.today;
 246:
            return var1;
        }
    };
    var3['formatUserActivityTimestamp'] = var4;
    var4 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 3;
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
            if(!(!(var10 < var7))) { _fun0003_ip = 434; continue _fun0003 }
 107:
            var11 = 3600;
            if(!(!(var10 < var11))) { _fun0003_ip = 361; continue _fun0003 }
 120:
            var12 = 86400;
            if(!(!(var10 < var12))) { _fun0003_ip = 288; continue _fun0003 }
 133:
            var1 = 172800;
            if(!(!(var10 < var1))) { _fun0003_ip = 280; continue _fun0003 }
 146:
            var1 = 604800;
            if(!(!(var10 < var1))) { _fun0003_ip = 207; continue _fun0003 }
 156:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 1;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var8 = var1.intl;
            var6 = var8.formatToPlainString;
            var4 = var2.date;
            var1 = {};
            var1['date'] = var9;
            var1 = var6.bind(var8)(var4, var1);
            _fun0003_ip = 278; continue _fun0003;
 207:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 1;
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
 278:
            _fun0003_ip = 286; continue _fun0003;
 280:
            var1 = var2.yesterday;
 286:
            _fun0003_ip = 359; continue _fun0003;
 288:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 1;
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
 359:
            _fun0003_ip = 432; continue _fun0003;
 361:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 1;
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
 432:
            _fun0003_ip = 440; continue _fun0003;
 434:
            var1 = var2.seconds;
 440:
            return var1;
        }
    };
    var3['formatLinkTimestamp'] = var4;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var4 = var3.display_type;
            var1 = _closure1_slot5;
            var1 = var1.USER_ADD;
            var1 = var4 === var1;
            if(var1) { _fun0004_ip = 49; continue _fun0004 }
 29:
            var5 = var3.display_type;
            var4 = _closure1_slot5;
            var4 = var4.USER_INTERACTION;
            var1 = var5 === var4;
 49:
            if(var1) { _fun0004_ip = 72; continue _fun0004 }
 52:
            var3 = var3.display_type;
            var2 = _closure1_slot5;
            var2 = var2.USER_CALLED;
            var1 = var3 === var2;
 72:
            return var1;
        }
    };
    var3['isUserAction'] = var4;
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var4 = var3.display_type;
            var1 = _closure1_slot5;
            var1 = var1.GUILD_ADD;
            var1 = var4 === var1;
            if(var1) { _fun0005_ip = 49; continue _fun0005 }
 29:
            var3 = var3.display_type;
            var2 = _closure1_slot5;
            var2 = var2.GUILD_INTERACTION;
            var1 = var3 === var2;
 49:
            return var1;
        }
    };
    var3['isGuildAction'] = var4;
    var4 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var5 = arg1;
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot5;
            var4 = var2.bind(var3)(var1);
            var1 = var4.length;
            var3 = 0;
            var1 = var3 < var1;
            if(!var1) { _fun0006_ip = 71; continue _fun0006 }
 42:
            var1 = var4[var3];
            var2 = var1.toString;
            var2 = var2.bind(var1)();
            if(!(var2 !== var5)) { _fun0006_ip = 75; continue _fun0006 }
 59:
            var3 = var3 + 1;
            var2 = var4.length;
            if(var3 < var2) { _fun0006_ip = 42; continue _fun0006 }
 71:
            var2 = undefined;
            return var2;
 75:
            return var1;
        }
    };
    var3['displayTypeFromString'] = var4;
    var2 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = _closure1_slot3;
            var1 = arg1;
            var1 = var1.code;
            var1 = var3[var1];
            var3 = null;
            if(!(var3 == var1)) { _fun0007_ip = 35; continue _fun0007 }
 25:
            var2 = _closure1_slot4;
            var1 = var2.GENERIC_ERROR;
 35:
            return var1;
        }
    };
    var3['getFailureCodeForAPIError'] = var2;
    return var1;
})();