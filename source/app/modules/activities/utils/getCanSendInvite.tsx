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
 0:
            var7 = arg1;
            var1 = arg2;
            var2 = var1.author;
            var3 = var2.id;
            var2 = arg4;
            if(!(var3 !== var2)) { _fun0001_ip = 256; continue _fun0001 }
 27:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 1;
            var3 = var5[var3];
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            var3 = arg3;
            var3 = var3.id;
            var3 = var4.bind(var5)(var7, var1, var3);
            if(var3) { _fun0001_ip = 74; continue _fun0001 }
 70:
            var3 = false;
            return var3;
 74:
            var1 = var1.activity;
            var3 = null;
            var4 = var3 == var1;
            var3 = undefined;
            if(var4) { _fun0001_ip = 96; continue _fun0001 }
 91:
            var3 = var1.type;
 96:
            var1 = _closure1_slot4;
            var1 = var1.JOIN_REQUEST;
            if(!(var3 === var1)) { _fun0001_ip = 252; continue _fun0001 }
 113:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 2;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = _closure1_slot3;
            var1 = var1.JOIN;
            var1 = var3.bind(var5)(var7, var1);
            if(var1) { _fun0001_ip = 156; continue _fun0001 }
 152:
            var1 = false;
            return var1;
 156:
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
            if(var1) { _fun0001_ip = 247; continue _fun0001 }
 216:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isPartyFull;
            var1 = var2.bind(var3)(var4);
 247:
            var1 = !var1;
            return var1;
 252:
            var1 = false;
            return var1;
 256:
            var1 = false;
            return var1;
        }
    };
    var3['getCanSendInvite'] = var2;
    return var1;
})();