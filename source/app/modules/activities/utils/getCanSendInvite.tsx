// app/modules/activities/utils/getCanSendInvite.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
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
    var7 = var4.ActivityFlags;
    var _closure1_slot3 = var7;
    var4 = var4.ActivityActionTypes;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/getCanSendInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getCanSendInvite(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var1 = arg2;
            var2 = var1.author;
            var3 = var2.id;
            var2 = arg4;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 1;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = arg3;
            var3 = var3.id;
            var3 = var4.bind(var5)(var7, var1, var3);
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = false;
            return var3;
case 4:
            var1 = var1.activity;
            var3 = null;
            var4 = var3 == var1;
            var3 = undefined;
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var1.type;
case 6:
            var1 = _closure1_slot4;
            var1 = var1.JOIN_REQUEST;
            if(!(var3 === var1)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = _closure1_slot3;
            var1 = var1.JOIN;
            var1 = var3.bind(var5)(var7, var1);
            if(var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = false;
            return var1;
case 10:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var4 = var3.bind(var5)(var1);
            var1 = var4.getPartySize;
            var4 = var1.bind(var4)(var7);
            var1 = 4;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.hasPartySize;
            var1 = var1.bind(var3)(var4);
            var1 = !var1;
            if(var1) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isPartyFull;
            var1 = var2.bind(var3)(var4);
case 12:
            var1 = !var1;
            return var1;
case 8:
            var1 = false;
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var3['getCanSendInvite'] = var2;
    return var1;
})();