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
    var2 = function hasRichActivity(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var5 = null;
            var1 = var5 == var4;
            var2 = undefined;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var4.type;
case 2:
            var1 = _closure1_slot0;
            var1 = var1.HANG_STATUS;
            var2 = var2 === var1;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = arg2;
            var2 = !var1;
case 4:
            var1 = !var2;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var5 != var4;
            if(!var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var4.type;
            var3 = _closure1_slot0;
            var3 = var3.CUSTOM_STATUS;
            var2 = var6 !== var3;
case 8:
            if(!var2) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var4.details;
            var3 = var5 != var3;
            if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var4.assets;
            var6 = var5 != var6;
            if(!var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var4.assets;
            var7 = var7.large_image;
            var7 = var5 != var7;
            if(var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = var4.assets;
            var8 = var8.small_text;
            var7 = var5 != var8;
case 16:
            var6 = var7;
case 14:
            var3 = var6;
case 12:
            if(var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = var4.party;
            var3 = var5 != var6;
case 18:
            if(var3) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var6 = var4.secrets;
            var3 = var5 != var6;
case 20:
            if(var3) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var4 = var4.state;
            var3 = var5 != var4;
case 22:
            var2 = var3;
case 10:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();