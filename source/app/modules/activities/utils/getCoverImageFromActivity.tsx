// app/modules/activities/utils/getCoverImageFromActivity.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
 0:
            var3 = arg1;
            var4 = null;
            var2 = var4 == var3;
            var1 = null;
            if(var2) { _fun0001_ip = 119; continue _fun0001 }
 14:
            var2 = var3.assets;
            var2 = var4 == var2;
            var1 = null;
            if(var2) { _fun0001_ip = 119; continue _fun0001 }
 29:
            var2 = var3.assets;
            var2 = var2.large_image;
            var2 = var4 == var2;
            var1 = null;
            if(var2) { _fun0001_ip = 119; continue _fun0001 }
 50:
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
 119:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();