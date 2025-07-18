// app/modules/user_profile/native/EditCollectiblesActionCreators.tsx
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
    var4 = var4.UserSettingsSections;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/EditCollectiblesActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getRootNavigationRef;
            var5 = var3.bind(var4)();
            var3 = null;
            var3 = var3 != var5;
            if(!var3) { _fun0001_ip = 54; continue _fun0001 }
 44:
            var4 = var5.isReady;
            var3 = var4.bind(var5)();
 54:
            if(!var3) { _fun0001_ip = 97; continue _fun0001 }
 57:
            var4 = var5.navigate;
            var3 = {};
            var2 = _closure1_slot2;
            var2 = var2.PREMIUM;
            var3['screen'] = var2;
            var2 = {};
            var3['params'] = var2;
            var2 = 'settings';
            var2 = var4.bind(var5)(var2, var3);
 97:
            return var1;
        }
    };
    var3['navigateToNitroManagement'] = var2;
    return var1;
})();