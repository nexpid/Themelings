// app/modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx
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
    var4 = var4.NativeModules;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContactSyncScenes;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useBackHandlerSkipPhoneScreens(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.useNavigatorBackPressHandler;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot0;
                var2 = _closure1_slot3;
                var4 = var2.ADD_PHONE;
                var6 = new Array(3);
                var6[0] = var4;
                var4 = var2.VERIFY_PHONE;
                var6[1] = var4;
                var2 = var2.VERIFY_PASSWORD;
                var6[2] = var2;
                var2 = var3.getState;
                var2 = var2.bind(var3)();
                var2 = var2.routes;
                var4 = var2.length;
                var5 = 2;
                if(!(!(var4 <= var5))) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = var2.length;
                var4 = var4 - var5;
                var4 = var2[var4];
                var5 = var6.includes;
                var4 = var4.name;
                var4 = var5.bind(var6)(var4);
                if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var4 = var3.pop;
                var5 = var2.length;
                var2 = 1;
                var2 = var5 - var2;
                var2 = var4.bind(var3)(var2);
                _fun0001_ip = 6; continue _fun0001;
case 4:
                var2 = var3.pop;
                var2 = var2.bind(var3)();
                _fun0001_ip = 6; continue _fun0001;
case 2:
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 6:
                var1 = true;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['default'] = var4;
    var2 = function useBackHandlerMinimizeApp() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.useNavigatorBackPressHandler;
        var2 = function() {
            var1 = _closure1_slot2;
            var2 = var1.MinimizeApp;
            var1 = var2.minimizeApp;
            var1 = var1.bind(var2)();
            var1 = true;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['useBackHandlerMinimizeApp'] = var2;
    return var1;
})();