// app/modules/stage_channels/useCurrentUserStageRoles.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/useCurrentUserStageRoles.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCurrentUserStageRoles(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var6 = arguments[1];
            var _closure2_slot0 = var7;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 20; continue _fun0001 }
 18:
            var6 = false;
 20:
            var _closure2_slot1 = var6;
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 2;
            var3 = var8[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.useStateFromStoresObject;
            var8 = _closure1_slot3;
            var3 = new Array(2);
            var3[0] = var8;
            var2 = _closure1_slot2;
            var3[1] = var2;
            var2 = new Array(2);
            var2[0] = var7;
            var2[1] = var6;
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = var3.getId;
                var5 = var2.bind(var3)();
                var4 = _closure1_slot3;
                var3 = var4.getPermissionsForUser;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var5, var2, var1);
                return var1;
            };
            var1 = var4.bind(var5)(var3, var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();