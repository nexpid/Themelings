// app/uikit-native/status/getStatusContainerStyle.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var11 = function createContainerStyle(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg2;
            var1 = {};
            var3 = _closure1_slot0;
            var5 = 2;
            var6 = var5 * var3;
            var3 = arg1;
            var7 = var3 + var6;
            var1['width'] = var7;
            var6 = 0;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = 2.5;
            var6 = var7 / var8;
case 2:
            var6 = var7 + var6;
            var1['height'] = var6;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var7 / var5;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var6 = 4;
            var5 = var7 / var6;
case 6:
            var1['borderRadius'] = var5;
            var5 = _closure1_slot0;
            var1['paddingLeft'] = var5;
            var5 = _closure1_slot0;
            var1['paddingRight'] = var5;
            var6 = _closure1_slot0;
            var5 = 0;
            if(!var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var5 = 1;
case 7:
            var5 = var6 + var5;
            var1['paddingTop'] = var5;
            var2 = _closure1_slot0;
            var3 = 0;
            if(!var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = 1;
case 9:
            var2 = var2 + var3;
            var1['paddingBottom'] = var2;
            return var1;
        }
    };
    var _closure1_slot3 = var11;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var10 = true;
    var4['value'] = var10;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.STATUS_PADDING;
    var _closure1_slot0 = var7;
    var9 = var4.StatusSizes;
    var _closure1_slot1 = var9;
    var7 = var8.create;
    var4 = {};
    var12 = var9.SMALL;
    var13 = false;
    var12 = var11.bind(var1)(var12, var13);
    var4['containerSmall'] = var12;
    var12 = var9.REFRESH_MEDIUM_10;
    var12 = var11.bind(var1)(var12, var13);
    var4['containerRefreshMedium'] = var12;
    var12 = var9.MEDIUM;
    var12 = var11.bind(var1)(var12, var13);
    var4['containerMedium'] = var12;
    var12 = var9.LARGE;
    var12 = var11.bind(var1)(var12, var13);
    var4['containerLarge'] = var12;
    var12 = var9.LARGE;
    var12 = var11.bind(var1)(var12, var13);
    var4['containerXLarge'] = var12;
    var12 = var9.SMALL;
    var12 = var11.bind(var1)(var12, var10);
    var4['containerMobileOnlineSmall'] = var12;
    var12 = var9.REFRESH_MEDIUM_10;
    var12 = var11.bind(var1)(var12, var10);
    var4['containerMobileOnlineRefreshMedium'] = var12;
    var12 = var9.MEDIUM;
    var12 = var11.bind(var1)(var12, var10);
    var4['containerMobileOnlineMedium'] = var12;
    var12 = var9.LARGE;
    var12 = var11.bind(var1)(var12, var10);
    var4['containerMobileOnlineLarge'] = var12;
    var9 = var9.LARGE;
    var9 = var11.bind(var1)(var9, var10);
    var4['containerMobileOnlineXLarge'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/status/getStatusContainerStyle.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getStatusContainerStyle(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var1 = arg2;
            var3 = _closure1_slot1;
            var3 = var3.SMALL;
            if(!(var3 !== var5)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var3 = _closure1_slot1;
            var3 = var3.REFRESH_MEDIUM_10;
            if(!(var3 !== var5)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var3 = _closure1_slot1;
            var3 = var3.MEDIUM;
            if(!(var3 !== var5)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = _closure1_slot1;
            var3 = var3.LARGE;
            if(!(var3 !== var5)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var3 = _closure1_slot1;
            var3 = var3.XLARGE;
            if(!(var3 !== var5)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var4 = _closure1_slot3;
            var3 = undefined;
            var3 = var4.bind(var3)(var5, var1);
            return var3;
case 19:
            var4 = _closure1_slot2;
            if(var1) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var3 = var4.containerXLarge;
            _fun0002_ip = 23; continue _fun0002;
case 21:
            var3 = var4.containerMobileOnlineXLarge;
case 23:
            return var3;
case 17:
            var4 = _closure1_slot2;
            if(var1) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var3 = var4.containerLarge;
            _fun0002_ip = 26; continue _fun0002;
case 24:
            var3 = var4.containerMobileOnlineLarge;
case 26:
            return var3;
case 15:
            var4 = _closure1_slot2;
            if(var1) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var3 = var4.containerMedium;
            _fun0002_ip = 29; continue _fun0002;
case 27:
            var3 = var4.containerMobileOnlineMedium;
case 29:
            return var3;
case 13:
            var4 = _closure1_slot2;
            if(var1) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var3 = var4.containerRefreshMedium;
            _fun0002_ip = 32; continue _fun0002;
case 30:
            var3 = var4.containerMobileOnlineRefreshMedium;
case 32:
            return var3;
case 11:
            var2 = _closure1_slot2;
            if(var1) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var1 = var2.containerSmall;
            _fun0002_ip = 35; continue _fun0002;
case 33:
            var1 = var2.containerMobileOnlineSmall;
case 35:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();