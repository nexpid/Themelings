// app/modules/group_dm/getGroupDMRecipientLimit.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MAX_GROUP_DM_PARTICIPANTS;
    var _closure1_slot1 = var7;
    var4 = var4.MAX_GROUP_DM_STAFF_PARTICIPANTS;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/group_dm/getGroupDMRecipientLimit.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getGroupDMRecipientLimit(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var1 = var4.getCurrentUser;
            var5 = var1.bind(var4)();
            var1 = null;
            if(!(var1 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.isStaff;
            var4 = var4.bind(var5)();
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            if(!(var1 != var3)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = var3.userLimit;
            var1 = 0;
            if(!(!(var4 > var1))) { _fun0001_ip = 7; continue _fun0001 }
case 5:
            var1 = _closure1_slot1;
            _fun0001_ip = 8; continue _fun0001;
case 7:
            var1 = var3.userLimit;
case 8:
            _fun0001_ip = 9; continue _fun0001;
case 4:
            var1 = _closure1_slot2;
case 9:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();