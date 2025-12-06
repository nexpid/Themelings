// app/design/components/Navigator/native/NavScrim.android.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var14 = var11.absoluteFillObject;
    var15 = var10;
    var11 = copyDataProperties(var15, var14);
    var11 = 4;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var12 = var11.ANDROID_NAVIGATION_SCRIM_BACKGROUND;
    var11 = 'backgroundColor';
    var10[var11] = var12;
    var11 = 'top';
    var10[var11] = var1;
    var4['androidNavScrim'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot5;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var7 = false;
            var1['includeCustomKeyboardHeight'] = var7;
            var1 = var3.bind(var5)(var1);
            var9 = var1.insets;
            var3 = _closure1_slot0;
            var1 = 6;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var4 = var1.NavScrimPointerEventsExperiment;
            var3 = var4.useConfig;
            var1 = {};
            var7 = 'nav-scrim';
            var1['location'] = var7;
            var1 = var3.bind(var4)(var1);
            var7 = var1.unblockPointerEvents;
            var4 = var9.bottom;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot4;
            var3 = _closure1_slot3;
            var2 = {};
            var8 = var6.androidNavScrim;
            var6 = new Array(2);
            var6[0] = var8;
            var8 = {};
            var9 = var9.bottom;
            var8['height'] = var9;
            var6[1] = var8;
            var2['style'] = var6;
            var6 = undefined;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = 'none';
case 4:
            var2['pointerEvents'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Navigator/native/NavScrim.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['NavScrim'] = var2;
    return var1;
})();