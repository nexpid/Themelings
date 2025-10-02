// app/modules/analytics/updateDynamicSuperProperties.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/analytics/updateDynamicSuperProperties.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function updateDynamicSuperProperties() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var6 = 0;
            var5 = var3[var6];
            var1 = undefined;
            var7 = var4.bind(var1)(var5);
            var5 = var7.getActiveSessionUnsafe;
            var9 = var5.bind(var7)();
            var5 = 1;
            var3 = var3[var5];
            var4 = var4.bind(var1)(var3);
            var3 = var4.getSuperProperties;
            var8 = var3.bind(var4)();
            var4 = {};
            var7 = null;
            var10 = var7 == var9;
            var3 = undefined;
            if(var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var9.uuid;
case 2:
            var10 = var7 == var8;
            var9 = undefined;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var8.client_heartbeat_session_id;
case 4:
            if(!(var3 !== var9)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4['client_heartbeat_session_id'] = var3;
case 6:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 2;
            var3 = var10[var3];
            var9 = var9.bind(var1)(var3);
            var3 = var9.getState;
            var3 = var3.bind(var9)();
            var9 = var7 == var8;
            var7 = undefined;
            if(var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var8.client_app_state;
case 8:
            if(!(var3 !== var7)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4['client_app_state'] = var3;
case 10:
            var3 = global;
            var7 = var3.Object;
            var3 = var7.keys;
            var3 = var3.bind(var7)(var4);
            var3 = var3.length;
            if(!(var3 > var6)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.extendSuperProperties;
            var2 = var2.bind(var3)(var4);
case 12:
            return var1;
        }
    };
    var3['updateDynamicSuperProperties'] = var2;
    return var1;
})();