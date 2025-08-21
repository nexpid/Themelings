// app/modules/activities/utils/isActivityRemoteJoinable.tsx
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
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityFlags;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/isActivityRemoteJoinable.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isActivityRemoteJoinable(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 2;
            var3 = var5[var3];
            var8 = undefined;
            var3 = var4.bind(var8)(var3);
            var5 = var3.RemoteJoinGameInviteExperiment;
            var4 = var5.getConfig;
            var3 = {};
            var6 = 'isActivityRemoteJoinable';
            var3['location'] = var6;
            var3 = var4.bind(var5)(var3);
            var3 = var3.enableRemoteJoin;
            if(var3) { _fun0001_ip = 68; continue _fun0001 }
 64:
            var3 = false;
            return var3;
 68:
            var4 = var1.application_id;
            var7 = null;
            if(!(var7 != var4)) { _fun0001_ip = 227; continue _fun0001 }
 83:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var9 = 3;
            var3 = var3[var9];
            var10 = var5.bind(var8)(var3);
            var6 = var10.hasFlag;
            var1 = var1.flags;
            var11 = var7 != var1;
            var3 = 0;
            if(!var11) { _fun0001_ip = 126; continue _fun0001 }
 123:
            var3 = var1;
 126:
            var1 = _closure1_slot3;
            var1 = var1.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN;
            var1 = var6.bind(var10)(var3, var1);
            if(!var1) { _fun0001_ip = 227; continue _fun0001 }
 145:
            var3 = _closure1_slot2;
            var1 = var3.getRemoteApplicationActivity;
            var6 = var1.bind(var3)(var4);
            var1 = var7 != var6;
            if(!var1) { _fun0001_ip = 225; continue _fun0001 }
 169:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var9];
            var4 = var4.bind(var8)(var3);
            var3 = var4.hasFlag;
            var6 = var6.flags;
            var7 = var7 != var6;
            var5 = 0;
            if(!var7) { _fun0001_ip = 209; continue _fun0001 }
 206:
            var5 = var6;
 209:
            var2 = _closure1_slot3;
            var2 = var2.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN;
            var1 = var3.bind(var4)(var5, var2);
 225:
            return var1;
 227:
            var1 = false;
            return var1;
        }
    };
    var3['isActivityRemoteJoinable'] = var2;
    return var1;
})();