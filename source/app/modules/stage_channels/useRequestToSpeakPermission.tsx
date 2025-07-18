// app/modules/stage_channels/useRequestToSpeakPermission.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var8 = native4;
    var3 = native6;
    var6 = native7;
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
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/useRequestToSpeakPermission.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useRequestToSpeakPermission(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 4;
            var4 = var6[var4];
            var5 = undefined;
            var9 = var7.bind(var5)(var4);
            var8 = var9.useStateFromStores;
            var4 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var8.bind(var9)(var7, var3, var4);
            var _closure2_slot1 = var7;
            var4 = _closure1_slot1;
            var3 = 5;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.canEveryoneRole;
            var3 = _closure1_slot6;
            var3 = var3.REQUEST_TO_SPEAK;
            var4 = var4.bind(var6)(var3, var7);
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var6 = var3.bind(var6)(var4);
            var3 = _closure1_slot3;
            var1 = 2;
            var6 = var3.bind(var5)(var6, var1);
            var1 = 0;
            var3 = var6[var1];
            var1 = 1;
            var1 = var6[var1];
            var _closure2_slot2 = var1;
            if(!(var4 !== var3)) { _fun0001_ip = 168; continue _fun0001 }
 163:
            var1 = var1.bind(var5)(var4);
 168:
            var1 = new Array(2);
            var1[0] = var3;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = arg1;
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 77; continue _fun0002 }
 16:
                    var1 = _closure2_slot2;
                    var6 = undefined;
                    var1 = var1.bind(var6)(var5);
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 6;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.setEveryoneRolePermissionAllowed;
                    var2 = _closure2_slot1;
                    var1 = _closure1_slot6;
                    var1 = var1.REQUEST_TO_SPEAK;
                    var1 = var3.bind(var4)(var2, var1, var5);
 77:
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