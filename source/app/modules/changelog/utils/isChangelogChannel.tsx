// app/modules/changelog/utils/isChangelogChannel.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SYSTEM_UPDATES_USER_ID;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/changelog/utils/isChangelogChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isChangelogChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 38; continue _fun0001 }
 12:
            var5 = _closure1_slot0;
            var4 = var5.getDMFromUserId;
            var2 = _closure1_slot1;
            var2 = var4.bind(var5)(var2);
            var1 = var3 === var2;
 38:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();