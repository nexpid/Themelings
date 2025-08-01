// app/modules/activities/panel/native/ActivityPanelSystemUIManager.tsx
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityPanelModes;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot5 = var8;
    var8 = var4.Fragment;
    var _closure1_slot6 = var8;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot3;
            var2 = var3.useContext;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 3;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var1 = var2.bind(var3)(var1);
            var8 = var1.mode;
            var1 = var1.wrapperDimensions;
            var2 = _closure1_slot4;
            var2 = var2.PANEL;
            var10 = var8 === var2;
            var1 = var1.isWindowLandscape;
            var12 = !var1;
            if(var12) { _fun0001_ip = 80; continue _fun0001 }
 77:
            var12 = !var10;
 80:
            var1 = _closure1_slot4;
            var5 = var1.PIP;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isIOS;
            var1 = var1.bind(var2)();
            var1 = !var1;
            var9 = !var1;
            if(var1) { _fun0001_ip = 132; continue _fun0001 }
 129:
            var9 = var10;
 132:
            var3 = _closure1_slot7;
            var2 = _closure1_slot6;
            var1 = {};
            var7 = null;
            if(!(var8 !== var5)) { _fun0001_ip = 199; continue _fun0001 }
 148:
            var11 = _closure1_slot5;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 5;
            var5 = var13[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var12 = !var12;
            var5['hidden'] = var12;
            var12 = 'light-content';
            var5['barStyle'] = var12;
            var7 = var11.bind(var4)(var8, var5);
 199:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 6;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            if(!var10) { _fun0001_ip = 239; continue _fun0001 }
 236:
            var10 = !var9;
 239:
            var6['prefersHidden'] = var10;
            var6['prefersDeferringSystemGestures'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/ActivityPanelSystemUIManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();