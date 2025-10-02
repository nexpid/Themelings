// app/modules/guild_role_subscriptions/GuildRoleSubscriptionTypeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = var4.GuildRoleSubscriptionBenefitTypes;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SubscriptionIntervalTypes;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/GuildRoleSubscriptionTypeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getBenefitKey(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = 'roles';
            var1 = var1 in var2;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = var2.ref_type;
            var13 = var2.emoji_id;
            var11 = var2.name;
            var9 = var2.ref_id;
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var16 = '';
            var1 = '-';
            var14 = var1;
            var12 = var1;
            var10 = var1;
            var1 = var16[var4](var15, var14, var13, var12, var11, var10, var9, var8);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = var2.id;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'emoji-';
            var1 = var3.bind(var2)(var4);
case 4:
            return var1;
        }
    };
    var3['getBenefitKey'] = var4;
    var4 = function formatPlanInterval(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var9 = var1.interval;
            var5 = var1.interval_count;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var8 = 2;
            var2 = var2[var8];
            var7 = undefined;
            var2 = var3.bind(var7)(var2);
            var4 = var2.intl;
            var3 = var4.format;
            var2 = _closure1_slot3;
            var2 = var2.DAY;
            if(!(var2 !== var9)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var2 = _closure1_slot3;
            var2 = var2.MONTH;
            if(!(var2 !== var9)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var2 = _closure1_slot3;
            var6 = var2.YEAR;
            var2 = undefined;
            if(!(var6 === var9)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var9 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var8];
            var6 = var9.bind(var7)(var6);
            var6 = var6.t;
            var2 = var6.cuSp8f;
            _fun0002_ip = 9; continue _fun0002;
case 7:
            var9 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var8];
            var6 = var9.bind(var7)(var6);
            var6 = var6.t;
            var2 = var6.zuN54+;
            _fun0002_ip = 9; continue _fun0002;
case 5:
            var6 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var8];
            var1 = var6.bind(var7)(var1);
            var1 = var1.t;
            var2 = var1.3rUmPT;
case 9:
            var1 = {};
            var1['count'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['formatPlanInterval'] = var4;
    var4 = function formatPlanIntervalDuration(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = var1.interval;
            var7 = var1.interval_count;
            var1 = _closure1_slot3;
            var1 = var1.DAY;
            if(!(var1 !== var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var1 = _closure1_slot3;
            var1 = var1.MONTH;
            if(!(var1 !== var3)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var1 = _closure1_slot3;
            var1 = var1.YEAR;
            if(!(var1 !== var3)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var1 = undefined;
            return var1;
case 15:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 2;
            var4 = var8[var1];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var8[var1];
            var1 = var6.bind(var3)(var1);
            var1 = var1.t;
            var3 = var1.IfYQVF;
            var1 = {};
            var1['years'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            return var1;
case 13:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 2;
            var4 = var8[var1];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var8[var1];
            var1 = var6.bind(var3)(var1);
            var1 = var1.t;
            var3 = var1.erUSmJ;
            var1 = {};
            var1['months'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            return var1;
case 11:
            var3 = 0;
            if(!(var7 > var3)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var6 = 7;
            var1 = var7 % var6;
            if(!(var1 !== var3)) { _fun0003_ip = 19; continue _fun0003 }
case 17:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 2;
            var4 = var9[var1];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var9[var1];
            var1 = var8.bind(var3)(var1);
            var1 = var1.t;
            var3 = var1.jzH70d;
            var1 = {};
            var1['days'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 20; continue _fun0003;
case 19:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var2 = 2;
            var4 = var9[var2];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var9[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.iVZYys;
            var2 = {};
            var6 = var7 / var6;
            var2['weeks'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 20:
            return var1;
        }
    };
    var3['formatPlanIntervalDuration'] = var4;
    var4 = function isChannelBenefit(arg1) {
        var1 = arg1;
        var2 = var1.ref_type;
        var1 = _closure1_slot2;
        var1 = var1.CHANNEL;
        var1 = var2 === var1;
        return var1;
    };
    var3['isChannelBenefit'] = var4;
    var2 = function isIntangibleBenefit(arg1) {
        var1 = arg1;
        var2 = var1.ref_type;
        var1 = _closure1_slot2;
        var1 = var1.INTANGIBLE;
        var1 = var2 === var1;
        return var1;
    };
    var3['isIntangibleBenefit'] = var2;
    return var1;
})();