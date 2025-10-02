// app/modules/main_tabs_v2/native/utils/getNavigationModalPresentation.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
        var4 = {};
        var7 = 0;
        var8 = var6[var7];
        var1 = undefined;
        var9 = var5.bind(var1)(var8);
        var8 = var9.isAndroid;
        var8 = var8.bind(var9)();
        if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var8 = 2;
        var8 = var6[var8];
        var9 = var5.bind(var1)(var8);
        var8 = var9.isIpadOS;
        var9 = var8.bind(var9)();
        var8 = 'modal';
        if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var8 = 'fullScreenModal';
case 4:
        _fun0001_ip = 6; continue _fun0001;
case 2:
        var9 = 1;
        var9 = var6[var9];
        var10 = var5.bind(var1)(var9);
        var9 = var10.getIsWindowLarge;
        var10 = var9.bind(var10)();
        var9 = 'modal';
        if(!var10) { _fun0001_ip = 7; continue _fun0001 }
case 8:
        var9 = 'fullScreenModal';
case 7:
        var8 = var9;
case 6:
        var4['presentation'] = var8;
        var7 = var6[var7];
        var8 = var5.bind(var1)(var7);
        var7 = var8.isAndroid;
        var7 = var7.bind(var8)();
        var7 = !var7;
        var4['lockOrientation'] = var7;
        var _closure1_slot2 = var4;
        var4 = 4;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/main_tabs_v2/native/utils/getNavigationModalPresentation.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function getNavigationModalPresentation() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arguments[0];
                var6 = undefined;
                if(!(var1 === var6)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var1 = _closure1_slot2;
case 9:
                var2 = var1.presentation;
                if(!(var2 === var6)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var3 = _closure1_slot2;
                var2 = var3.presentation;
case 11:
                var3 = var1.lockOrientation;
                if(!(var3 === var6)) { _fun0002_ip = 3; continue _fun0002 }
case 13:
                var1 = _closure1_slot2;
                var1 = var1.lockOrientation;
                if(!var1) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var4 = 'transparentModal';
                var1 = var4 !== var2;
case 14:
                var3 = var1;
case 3:
                var1 = {};
                var1['presentation'] = var2;
                var2 = undefined;
                if(!var3) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 3;
                var5 = var7[var3];
                var8 = var4.bind(var6)(var5);
                var5 = var8.getOrientation;
                var5 = var5.bind(var8)();
                var3 = var7[var3];
                var3 = var4.bind(var6)(var3);
                var3 = var3.OrientationType;
                var4 = var3.PORTRAIT;
                var3 = 'landscape';
                if(!(var5 === var4)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var3 = 'portrait';
case 18:
                var2 = var3;
case 16:
                var1['orientation'] = var2;
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();