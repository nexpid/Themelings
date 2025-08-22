// app/modules/activities/utils/isInviteActive.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.Millis;
    var6 = var4.HOUR;
    var4 = 2;
    var6 = var4 * var6;
    var _closure1_slot2 = var6;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/isInviteActive.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isInviteActive(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = arg2;
            var5 = null;
            if(!(var5 != var1)) { _fun0001_ip = 186; continue _fun0001 }
 15:
            var2 = var3.activity;
            var2 = var5 != var2;
            var6 = null;
            if(!var2) { _fun0001_ip = 42; continue _fun0001 }
 30:
            var2 = var3.activity;
            var6 = var2.party_id;
 42:
            var4 = var5 != var6;
            if(!var4) { _fun0001_ip = 73; continue _fun0001 }
 49:
            var7 = var1.party;
            var8 = var5 == var7;
            var2 = undefined;
            if(var8) { _fun0001_ip = 69; continue _fun0001 }
 64:
            var2 = var7.id;
 69:
            var4 = var2 !== var6;
 73:
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
            if(!var2) { _fun0001_ip = 169; continue _fun0001 }
 156:
            var5 = var1.application_id;
            var1 = arg3;
            var2 = var5 !== var1;
 169:
            var1 = !var4;
            if(var4) { _fun0001_ip = 178; continue _fun0001 }
 175:
            var1 = !var3;
 178:
            if(!var1) { _fun0001_ip = 184; continue _fun0001 }
 181:
            var1 = !var2;
 184:
            return var1;
 186:
            var1 = false;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();