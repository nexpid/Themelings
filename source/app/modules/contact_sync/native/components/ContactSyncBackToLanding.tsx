// app/modules/contact_sync/native/components/ContactSyncBackToLanding.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/contact_sync/native/components/ContactSyncBackToLanding.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ContactSyncBackToLanding(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 0;
        var4 = var6[var2];
        var2 = undefined;
        var7 = var5.bind(var2)(var4);
        var4 = var7.useNavigation;
        var4 = var4.bind(var7)();
        var _closure2_slot1 = var4;
        var4 = 1;
        var4 = var6[var4];
        var6 = var5.bind(var2)(var4);
        var5 = var6.getHeaderBackButton;
        var4 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure2_slot0;
                var3 = var2.navigateToLandingPage;
                var2 = null;
                if(!(var2 == var3)) { _fun0001_ip = 61; continue _fun0001 }
 19:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.goBackToLanding;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2);
                _fun0001_ip = 75; continue _fun0001;
 61:
                var2 = _closure2_slot0;
                var1 = var2.navigateToLandingPage;
                var1 = var1.bind(var2)();
 75:
                var1 = undefined;
                return var1;
            }
        };
        var1 = true;
        var1 = var5.bind(var6)(var4, var1);
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();