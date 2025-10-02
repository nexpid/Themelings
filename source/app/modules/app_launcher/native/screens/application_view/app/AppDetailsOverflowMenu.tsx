// app/modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx
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
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppDetailsOverflowMenu(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.application;
            var _closure2_slot0 = var8;
            var4 = var1.onAddAppMenuClick;
            var _closure2_slot1 = var4;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 2;
            var1 = var9[var1];
            var5 = undefined;
            var7 = var3.bind(var5)(var1);
            var1 = var7.getInstallAppProps;
            var8 = var1.bind(var7)(var8);
            var _closure2_slot2 = var8;
            var7 = new Array(0);
            var1 = 3;
            var1 = var9[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.canInstallApplication;
            var1 = var1.bind(var3)(var8);
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = null;
            var1 = var3 != var4;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var7.push;
            var1 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 4;
            var10 = var9[var4];
            var10 = var8.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.NgXl3N;
            var4 = var10.bind(var11)(var4);
            var1['label'] = var4;
            var4 = function action() {
                var3 = _closure2_slot1;
                var2 = {};
                var1 = _closure2_slot2;
                var2['installAppProps'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1['action'] = var4;
            var4 = 5;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.CirclePlusIcon;
            var1['IconComponent'] = var4;
            var1 = var3.bind(var7)(var1);
case 4:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var3 = var1.DeveloperMode;
            var1 = var3.getSetting;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var7.push;
            var1 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 4;
            var10 = var9[var4];
            var10 = var8.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.+NP/b2;
            var4 = var10.bind(var11)(var4);
            var1['label'] = var4;
            var4 = function action() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 7;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.copy;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var2 = var5.bind(var6)(var2);
                var2 = 8;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentIdCopied;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1['action'] = var4;
            var4 = 9;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.IdIcon;
            var1['IconComponent'] = var4;
            var1 = var3.bind(var7)(var1);
case 6:
            var4 = var7.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = _closure1_slot3;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 10;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ContextMenu;
            var2 = {};
            var2['items'] = var7;
            var6 = function children(arg1) {
                var3 = arg1;
                var7 = var3.ref;
                var1 = null;
                var2 = Object.create(var1);
                var1 = 0;
                var2['ref'] = var1;
                var12 = {};
                var11 = var3;
                var10 = var2;
                var11 = copyDataProperties(var12, var11, var10);
                var4 = _closure1_slot3;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 11;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var8.bind(var3)(var1);
                var2 = var1.IconButton;
                var1 = {'ref': null, 'size': 'sm', 'variant': 'secondary-overlay'};
                var1['ref'] = var7;
                var7 = _closure1_slot1;
                var6 = 12;
                var6 = var9[var6];
                var6 = var7.bind(var3)(var6);
                var1['icon'] = var6;
                var12 = var1;
                var5 = copyDataProperties(var12, var11);
                var5 = 4;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.PdRCRk;
                var6 = var6.bind(var7)(var5);
                var5 = 'accessibilityLabel';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();