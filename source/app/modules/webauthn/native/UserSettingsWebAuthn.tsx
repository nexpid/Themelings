// app/modules/webauthn/native/UserSettingsWebAuthn.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.WebAuthnScreens;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/webauthn/native/UserSettingsWebAuthn.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserSettingsWebAuthn(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.navigation;
            var _closure2_slot0 = var3;
            var6 = var1.initialRouteName;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot4;
            var6 = var3.INIT;
case 2:
            var1 = var1.showNav;
            if(!(var1 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = false;
case 4:
            var _closure2_slot1 = var1;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 3;
            var3 = var8[var3];
            var9 = var5.bind(var4)(var3);
            var7 = var9.getScreens;
            var3 = {};
            var5 = false;
            var3['isModal'] = var5;
            var7 = var7.bind(var9)(var3);
            var9 = _closure1_slot3;
            var3 = var9.useLayoutEffect;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = var3.setOptions;
                var1 = {};
                var4 = _closure2_slot1;
                var1['headerShown'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var9)(var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var1 = 4;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Navigator;
            var1 = {};
            var1['screens'] = var7;
            var1['initialRouteName'] = var6;
            var7 = {};
            var7['name'] = var6;
            var6 = new Array(1);
            var6[0] = var7;
            var1['initialRouteStack'] = var6;
            var1['useContainer'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();