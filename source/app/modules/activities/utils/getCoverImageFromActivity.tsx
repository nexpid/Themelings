// app/modules/activities/utils/getCoverImageFromActivity.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTIVITY_INVITE_COVER_IMAGE_SIZE;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/getCoverImageFromActivity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getCoverImageFromActivity(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = null;
            var2 = var4 == var3;
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.assets;
            var2 = var4 == var2;
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var2 = var3.assets;
            var2 = var2.large_image;
            var2 = var4 == var2;
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 1;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.getAssetImage;
            var3 = var3.assets;
            var4 = var3.large_image;
            var2 = _closure1_slot2;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var2;
            var2 = arg2;
            var1 = var5.bind(var6)(var2, var4, var3);
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();