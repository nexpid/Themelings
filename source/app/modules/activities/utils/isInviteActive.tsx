// app/modules/activities/utils/isInviteActive.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.Millis;
    var2 = var2.HOUR;
    var5 = 2;
    var2 = var5 * var2;
    var _closure1_slot2 = var2;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/utils/isInviteActive.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function isInviteActive(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = arg2;
            var5 = null;
            if(!(var5 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.activity;
            var2 = var5 != var2;
            var6 = null;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.activity;
            var6 = var2.party_id;
case 4:
            var4 = var5 != var6;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var1.party;
            var8 = var5 == var7;
            var2 = undefined;
            if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var7.id;
case 8:
            var4 = var2 !== var6;
case 6:
            var8 = _closure1_slot0;
            var7 = _closure1_slot1;
            var6 = 1;
            var7 = var7[var6];
            var6 = undefined;
            var7 = var8.bind(var6)(var7);
            var6 = var7.extractTimestamp;
            var3 = var3.id;
            var3 = var6.bind(var7)(var3);
            var2 = _closure1_slot2;
            var3 = var3 + var2;
            var2 = global;
            var6 = var2.Date;
            var2 = var6.now;
            var2 = var2.bind(var6)();
            var3 = var3 < var2;
            var2 = var1.application_id;
            var2 = var5 != var2;
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var1.application_id;
            var1 = arg3;
            var2 = var5 !== var1;
case 10:
            var1 = !var4;
            if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = !var3;
case 12:
            if(!var1) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = !var2;
case 14:
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var4;
    var3['EMBED_LIFETIME'] = var2;
    return var1;
})();