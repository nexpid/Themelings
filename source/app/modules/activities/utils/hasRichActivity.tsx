// app/modules/activities/utils/hasRichActivity.tsx
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
    var4 = var4.ActivityTypes;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/hasRichActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function hasRichActivity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var1 = var4 != var3;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var3.type;
            var2 = _closure1_slot0;
            var2 = var2.CUSTOM_STATUS;
            var1 = var5 !== var2;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.details;
            var2 = var4 != var2;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var3.assets;
            var5 = var4 != var5;
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var3.assets;
            var6 = var6.large_image;
            var6 = var4 != var6;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var3.assets;
            var7 = var7.small_text;
            var6 = var4 != var7;
case 10:
            var5 = var6;
case 8:
            var2 = var5;
case 6:
            if(var2) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = var3.party;
            var2 = var4 != var5;
case 12:
            if(var2) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = var3.secrets;
            var2 = var4 != var5;
case 14:
            if(var2) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = var3.state;
            var2 = var4 != var3;
case 16:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();