// app/modules/staff/StaffMemberPreloader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.PRELOAD_SERVER_ID;
    var _closure1_slot4 = var2;
    var2 = {};
    var4 = function preloadStaffMembers() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot3;
            var2 = var3.getCurrentUser;
            var5 = var2.bind(var3)();
            var4 = null;
            var2 = var4 != var5;
            if(!var2) { _fun0001_ip = 35; continue _fun0001 }
 25:
            var3 = var5.isStaff;
            var2 = var3.bind(var5)();
 35:
            if(!var2) { _fun0001_ip = 60; continue _fun0001 }
 38:
            var6 = _closure1_slot2;
            var5 = var6.getGuild;
            var3 = _closure1_slot4;
            var3 = var5.bind(var6)(var3);
            var2 = var4 != var3;
 60:
            if(!var2) { _fun0001_ip = 110; continue _fun0001 }
 63:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 3;
            var3 = var3[var2];
            var2 = undefined;
            var6 = var4.bind(var2)(var3);
            var5 = var6.requestMembers;
            var10 = _closure1_slot4;
            var9 = '';
            var8 = 0;
            var7 = false;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
 110:
            var1 = undefined;
            return var1;
        }
    };
    var2['preloadStaffMembers'] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/staff/StaffMemberPreloader.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();