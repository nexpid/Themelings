// app/modules/app_launcher/native/screens/search/EmptyState.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'relative', 'justifyContent': 'center', 'alignItems': 'center'};
    var4['container'] = var9;
    var9 = {'justifyContent': 'center', 'width': '100%'};
    var4['textContainer'] = var9;
    var9 = {'marginTop': 16, 'textAlign': 'center'};
    var4['text'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/search/EmptyState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EmptyState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.query;
            var8 = var1.showsGenericMessage;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = false;
case 2:
            var1 = _closure1_slot4;
            var10 = var1.bind(var4)();
            var7 = _closure1_slot0;
            var11 = _closure1_slot1;
            var1 = 4;
            var1 = var11[var1];
            var3 = var7.bind(var4)(var1);
            var2 = var3.useLogAppLauncherEmptyStateView;
            var1 = 5;
            var1 = var11[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.AppLauncherEmptyStateType;
            var1 = var1.SEARCH_EMPTY;
            var1 = var2.bind(var3)(var1, var5);
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = {};
            var5 = var10.container;
            var1['style'] = var5;
            var5 = {};
            var6 = var10.textContainer;
            var5['style'] = var6;
            var6 = 6;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
            var10 = var10.text;
            var6['style'] = var10;
            var12 = _closure1_slot0;
            var13 = _closure1_slot1;
            var9 = 7;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var9.LSNOYf;
            var8 = var10.bind(var11)(var8);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var9 = var9.aOkFv8;
            var8 = var10.bind(var11)(var9);
case 6:
            var6['children'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var5['children'] = var6;
            var5 = var3.bind(var4)(var2, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();