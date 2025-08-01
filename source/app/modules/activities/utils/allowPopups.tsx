// app/modules/activities/utils/allowPopups.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.APPLICATIONS_WITH_ALLOWED_POPUPS;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/allowPopups.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function allowPopups(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = var4.has;
            var1 = var3.id;
            var1 = var2.bind(var4)(var1);
            var2 = !var1;
            var1 = !var2;
            if(!var2) { _fun0001_ip = 119; continue _fun0001 }
 34:
            var2 = 'embeddedActivityConfig';
            var2 = var2 in var3;
            if(var2) { _fun0001_ip = 87; continue _fun0001 }
 45:
            var2 = 'embedded_activity_config';
            var2 = var2 in var3;
            if(!var2) { _fun0001_ip = 85; continue _fun0001 }
 56:
            var4 = var3.embedded_activity_config;
            var5 = null;
            var6 = var5 == var4;
            var5 = undefined;
            if(var6) { _fun0001_ip = 79; continue _fun0001 }
 73:
            var5 = var4.displays_advertisements;
 79:
            var4 = true;
            var2 = var4 === var5;
 85:
            _fun0001_ip = 116; continue _fun0001;
 87:
            var3 = var3.embeddedActivityConfig;
            var4 = null;
            var5 = var4 == var3;
            var4 = undefined;
            if(var5) { _fun0001_ip = 110; continue _fun0001 }
 104:
            var4 = var3.displays_advertisements;
 110:
            var3 = true;
            var2 = var3 === var4;
 116:
            var1 = var2;
 119:
            return var1;
        }
    };
    var3['allowPopups'] = var2;
    return var1;
})();