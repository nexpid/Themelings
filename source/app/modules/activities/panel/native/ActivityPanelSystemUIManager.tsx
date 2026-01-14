// app/modules/activities/panel/native/ActivityPanelSystemUIManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = function BaseActivityPanelSystemUIManager(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.mode;
            var12 = var1.isWindowLandscape;
            var1 = _closure1_slot4;
            var1 = var1.PANEL;
            var10 = var8 === var1;
            var1 = _closure1_slot4;
            var5 = var1.PIP;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.isIOS;
            var1 = var1.bind(var2)();
            var1 = !var1;
            var9 = !var1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var10;
case 2:
            var3 = _closure1_slot7;
            var2 = _closure1_slot6;
            var1 = {};
            var7 = null;
            if(!(var8 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = _closure1_slot5;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 5;
            var5 = var13[var5];
            var8 = var8.bind(var4)(var5);
            var5 = {};
            var12 = !var12;
            if(var12) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = !var10;
case 6:
            var12 = !var12;
            var5['hidden'] = var12;
            var12 = 'light-content';
            var5['barStyle'] = var12;
            var7 = var11.bind(var4)(var8, var5);
case 4:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 6;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            if(!var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = !var9;
case 8:
            var6['prefersHidden'] = var10;
            var6['prefersDeferringSystemGestures'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ActivityPanelModes;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot5 = var9;
    var9 = var5.Fragment;
    var _closure1_slot6 = var9;
    var5 = var5.jsxs;
    var _closure1_slot7 = var5;
    var5 = var8.memo;
    var4 = function() {
        var5 = _closure1_slot3;
        var3 = var5.useContext;
        var6 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 3;
        var2 = var4[var2];
        var4 = undefined;
        var2 = var6.bind(var4)(var2);
        var2 = var3.bind(var5)(var2);
        var6 = var2.mode;
        var5 = var2.wrapperDimensions;
        var3 = _closure1_slot5;
        var2 = _closure1_slot8;
        var1 = {};
        var1['mode'] = var6;
        var5 = var5.isWindowLandscape;
        var1['isWindowLandscape'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/panel/native/ActivityPanelSystemUIManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['BaseActivityPanelSystemUIManager'] = var2;
    return var1;
})();