// app/modules/feedback/shouldShowLogUploadForCategory.tsx
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
    var4 = var4.FeedbackRating;
    var _closure1_slot0 = var4;
    var4 = {};
    var _closure1_slot1 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/feedback/shouldShowLogUploadForCategory.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function shouldShowLogUploadForCategory(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var3 = _closure1_slot0;
            var3 = var3.BAD;
            if(!(var4 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var3 = var3.NEUTRAL;
            if(!(var4 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var3 = null;
            if(!(var3 != var2)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = _closure1_slot1;
            var5 = var1[var2];
            var1 = var3 != var5;
            var4 = 0.01;
            var2 = var4;
            if(!var1) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = arg3;
            var1 = var1.value;
            var1 = var5[var1];
            var3 = var3 != var1;
            var2 = var4;
            if(!var3) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var2 = var1;
case 7:
            var1 = global;
            var3 = var1.Math;
            var1 = var3.random;
            var1 = var1.bind(var3)();
            var1 = var1 < var2;
            return var1;
case 5:
            var1 = false;
            return var1;
case 4:
            var1 = false;
            return var1;
        }
    };
    var3['shouldShowLogUploadForCategory'] = var2;
    return var1;
})();