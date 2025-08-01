// app/modules/app_launcher/native/base_components/AppLauncherBackButton.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/base_components/AppLauncherBackButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppLauncherBackButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.onPress;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 2;
            var1 = var7[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var1 = var3.useNavigation;
            var3 = var1.bind(var3)();
            var1 = var3.canGoBack;
            var5 = var1.bind(var3)();
            var3 = _closure1_slot3;
            var1 = 3;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.IconButton;
            var1 = {'size': 'sm', 'variant': 'secondary-overlay'};
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            if(var5) { _fun0001_ip = 109; continue _fun0001 }
 100:
            var7 = 5;
            var7 = var11[var7];
            _fun0001_ip = 116; continue _fun0001;
 109:
            var10 = 4;
            var7 = var11[var10];
 116:
            var7 = var9.bind(var4)(var7);
            var1['icon'] = var7;
            var1['onPress'] = var6;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var10 = 6;
            var6 = var6[var10];
            var6 = var7.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var4)(var8);
            var8 = var8.t;
            if(var5) { _fun0001_ip = 192; continue _fun0001 }
 184:
            var5 = var8.cpT0Cg;
            _fun0001_ip = 198; continue _fun0001;
 192:
            var5 = var8.13/7kZ;
 198:
            var5 = var6.bind(var7)(var5);
            var1['accessibilityLabel'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    var2 = 32;
    var3['BACK_BUTTON_SIZE'] = var2;
    return var1;
})();