// app/modules/app_launcher/native/screens/search/EmptyState.tsx
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
    var7 = var4.View;
    var _closure1_slot3 = var7;
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginTop': 48, 'position': 'relative', 'justifyContent': 'center', 'alignItems': 'center'};
    var4['container'] = var9;
    var9 = {'justifyContent': 'center', 'alignItems': 'center', 'height': '100%', 'width': '100%', 'position': 'absolute'};
    var4['textContainer'] = var9;
    var9 = {'marginTop': 16, 'textAlign': 'center'};
    var4['text'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/search/EmptyState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EmptyState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.query;
            var10 = var1.showsGenericMessage;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 23; continue _fun0001 }
 21:
            var10 = false;
 23:
            var1 = _closure1_slot7;
            var12 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 4;
            var1 = var7[var1];
            var6 = var2.bind(var4)(var1);
            var3 = var6.isThemeLight;
            var2 = _closure1_slot1;
            var1 = 5;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var3.bind(var6)(var1);
            var6 = _closure1_slot2;
            if(var1) { _fun0001_ip = 101; continue _fun0001 }
 92:
            var1 = 7;
            var1 = var6[var1];
            _fun0001_ip = 108; continue _fun0001;
 101:
            var3 = 6;
            var1 = var6[var3];
 108:
            var8 = var2.bind(var4)(var1);
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 8;
            var1 = var13[var1];
            var3 = var9.bind(var4)(var1);
            var2 = var3.useLogAppLauncherEmptyStateView;
            var1 = 9;
            var1 = var13[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.AppLauncherEmptyStateType;
            var1 = var1.SEARCH_EMPTY;
            var1 = var2.bind(var3)(var1, var5);
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var12.container;
            var1['style'] = var5;
            var7 = _closure1_slot5;
            var6 = _closure1_slot4;
            var5 = {};
            var14 = 'contain';
            var5['resizeMode'] = var14;
            var5['source'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var8 = var12.textContainer;
            var6['style'] = var8;
            var8 = 10;
            var8 = var13[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-normal'};
            var12 = var12.text;
            var8['style'] = var12;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 11;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            if(var10) { _fun0001_ip = 341; continue _fun0001 }
 326:
            var10 = var11.LSNOYW;
            var10 = var12.bind(var13)(var10);
            _fun0001_ip = 354; continue _fun0001;
 341:
            var11 = var11.aOkFv7;
            var10 = var12.bind(var13)(var11);
 354:
            var8['children'] = var10;
            var8 = var7.bind(var4)(var9, var8);
            var6['children'] = var8;
            var6 = var7.bind(var4)(var2, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();