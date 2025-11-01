// app/modules/stage_channels/useRequestToSpeakPermission.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/useRequestToSpeakPermission.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRequestToSpeakPermission(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 4;
            var6 = var7[var5];
            var5 = undefined;
            var10 = var4.bind(var5)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var9.bind(var10)(var8, var1, var6);
            var _closure2_slot1 = var8;
            var1 = 5;
            var1 = var7[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.useIsStageSpeakingDisabledForCurrentUser;
            var4 = var1.bind(var4)();
            var6 = _closure1_slot1;
            var1 = 6;
            var1 = var7[var1];
            var7 = var6.bind(var5)(var1);
            var6 = var7.canEveryoneRole;
            var1 = _closure1_slot6;
            var1 = var1.REQUEST_TO_SPEAK;
            var1 = var6.bind(var7)(var1, var8);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = !var4;
case 2:
            var6 = _closure1_slot4;
            var4 = var6.useState;
            var6 = var4.bind(var6)(var1);
            var4 = _closure1_slot3;
            var3 = 2;
            var6 = var4.bind(var5)(var6, var3);
            var3 = 0;
            var3 = var6[var3];
            var4 = 1;
            var4 = var6[var4];
            var _closure2_slot2 = var4;
            if(!(var1 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var4.bind(var5)(var1);
case 4:
            var1 = new Array(2);
            var1[0] = var3;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = _closure2_slot2;
                    var6 = undefined;
                    var1 = var1.bind(var6)(var5);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 7;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.setEveryoneRolePermissionAllowed;
                    var2 = _closure2_slot1;
                    var1 = _closure1_slot6;
                    var1 = var1.REQUEST_TO_SPEAK;
                    var1 = var3.bind(var4)(var2, var1, var5);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var1[1] = var2;
            return var1;
        }
    };
    var3['useRequestToSpeakPermission'] = var2;
    return var1;
})();