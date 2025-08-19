// app/modules/main_tabs_v2/native/tabs/you/YouNavigator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var7 = var4.bind(var1)(var7);
    var11 = 1;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MainTabsNavigatorScreens;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['marginHorizontal'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var10['borderRadius'] = var11;
    var11 = 'hidden';
    var10['overflow'] = var11;
    var4['container'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function YouNavigator(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.route;
            var1 = _closure1_slot6;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var10 = var1.top;
            var2 = _closure1_slot0;
            var1 = 7;
            var1 = var4[var1];
            var4 = var2.bind(var5)(var1);
            var2 = var4.useTrackTabPerformance;
            var1 = _closure1_slot4;
            var1 = var1.YOU;
            var1 = var2.bind(var4)(var1);
            var2 = null;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0001_ip = 120; continue _fun0001 }
 99:
            var3 = var3.params;
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0001_ip = 120; continue _fun0001 }
 114:
            var1 = var3.inNestedNavigator;
 120:
            var8 = var2 != var1;
            if(!var8) { _fun0001_ip = 130; continue _fun0001 }
 127:
            var8 = var1;
 130:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var1 = var1.isChatBesideChannelList;
            var4 = _closure1_slot5;
            if(var1) { _fun0001_ip = 202; continue _fun0001 }
 167:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var1['inNestedNavigator'] = var8;
            var1 = var4.bind(var5)(var2, var1);
            _fun0001_ip = 278; continue _fun0001;
 202:
            var3 = _closure1_slot3;
            var2 = {};
            var9 = var7.container;
            var7 = new Array(2);
            var7[0] = var9;
            var9 = {};
            var9['marginTop'] = var10;
            var7[1] = var9;
            var2['style'] = var7;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 9;
            var6 = var9[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['inNestedNavigator'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 278:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/YouNavigator.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();