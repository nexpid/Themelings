// app/modules/guild_mod_dash_member_safety/DateUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var4 = function getMembersTableTimestampFormatter(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = _closure1_slot3;
            var1 = var1.JOINED_AT;
            if(!(var4 !== var1)) { _fun0001_ip = 42; continue _fun0001 }
 20:
            var1 = _closure1_slot3;
            var3 = var1.ACCOUNT_AGE;
            var1 = undefined;
            if(!(var4 === var3)) { _fun0001_ip = 40; continue _fun0001 }
 36:
            var1 = _closure1_slot5;
 40:
            _fun0001_ip = 46; continue _fun0001;
 42:
            var1 = _closure1_slot4;
 46:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var5 = {};
    var8 = 0;
    var5['JOINED_AT'] = var8;
    var1 = 'JOINED_AT';
    var5[var8] = var1;
    var8 = 1;
    var5['ACCOUNT_AGE'] = var8;
    var1 = 'ACCOUNT_AGE';
    var5[var8] = var1;
    var _closure1_slot3 = var5;
    var1 = function getJoinedAtDateFormatter() {
        var1 = {};
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 0;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.FsBhl5;
        var1['seconds'] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.4d1mgY;
        var1['minutes'] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.2wkczM;
        var1['hours'] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.ocdS+f;
        var1['days'] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.az14+v;
        var1['months'] = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.t;
        var2 = var2.5Gk1np;
        var1['years'] = var2;
        return var1;
    };
    var _closure1_slot4 = var1;
    var1 = function getAccountAgeDateFormatter() {
        var1 = {};
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 0;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.JZP2Rk;
        var1['hours'] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.3moSHR;
        var1['days'] = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.0Ddwr6;
        var1['months'] = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.t;
        var2 = var2.cR7lcn;
        var1['years'] = var2;
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = 2;
    var6 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_mod_dash_member_safety/DateUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = {'month': 'short', 'day': 'numeric', 'year': 'numeric', 'hour': 'numeric', 'minute': '2-digit'};
    var3['ACCOUNT_AGE_DATE_TOOLTIP_CONFIG'] = var6;
    var6 = {'month': 'short', 'day': 'numeric', 'year': 'numeric', 'hour': 'numeric', 'minute': '2-digit'};
    var3['MEMBER_JOIN_DATE_TOOLTIP_CONFIG'] = var6;
    var3['MembersTableDateFormats'] = var5;
    var3['getMembersTableTimestampFormatter'] = var4;
    var4 = function(arg1, arg2) {
        var3 = _closure1_slot6;
        var5 = undefined;
        var2 = arg2;
        var4 = var3.bind(var5)(var2);
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 1;
        var1 = var3[var1];
        var3 = var2.bind(var5)(var1);
        var2 = arg1;
        var1 = false;
        var1 = var3.bind(var5)(var2, var4, var1);
        return var1;
    };
    var3['formatDateRelativeTime'] = var4;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 == var4)) { _fun0002_ip = 39; continue _fun0002 }
 9:
            var1 = global;
            var1 = var1.Date;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var6 = var2;
            var1 = new var6[var1](var5);
            var2 = var1 instanceof Object ? var1 : var2;
            _fun0002_ip = 70; continue _fun0002;
 39:
            var1 = global;
            var1 = var1.Date;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var6 = var3;
            var5 = var4;
            var1 = new var6[var1](var5, var4);
            var2 = var1 instanceof Object ? var1 : var3;
 70:
            var1 = var2.getTime;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['getJoinedAtTimestamp'] = var2;
    return var1;
})();