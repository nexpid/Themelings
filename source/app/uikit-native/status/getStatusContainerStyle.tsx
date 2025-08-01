// app/uikit-native/status/getStatusContainerStyle.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var11 = function createContainerStyle(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg2;
            var1 = {};
            var3 = _closure1_slot0;
            var5 = 2;
            var6 = var5 * var3;
            var3 = arg1;
            var7 = var3 + var6;
            var1['width'] = var7;
            var6 = 0;
            if(!var4) { _fun0001_ip = 49; continue _fun0001 }
 35:
            var8 = 2.5;
            var6 = var7 / var8;
 49:
            var6 = var7 + var6;
            var1['height'] = var6;
            if(var4) { _fun0001_ip = 66; continue _fun0001 }
 60:
            var5 = var7 / var5;
            _fun0001_ip = 73; continue _fun0001;
 66:
            var6 = 4;
            var5 = var7 / var6;
 73:
            var1['borderRadius'] = var5;
            var5 = _closure1_slot0;
            var1['paddingLeft'] = var5;
            var5 = _closure1_slot0;
            var1['paddingRight'] = var5;
            var6 = _closure1_slot0;
            var5 = 0;
            if(!var4) { _fun0001_ip = 107; continue _fun0001 }
 104:
            var5 = 1;
 107:
            var5 = var6 + var5;
            var1['paddingTop'] = var5;
            var2 = _closure1_slot0;
            var3 = 0;
            if(!var4) { _fun0001_ip = 128; continue _fun0001 }
 125:
            var3 = 1;
 128:
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
 0:
            var5 = arg1;
            var1 = arg2;
            var3 = _closure1_slot1;
            var3 = var3.SMALL;
            if(!(var3 !== var5)) { _fun0002_ip = 191; continue _fun0002 }
 26:
            var3 = _closure1_slot1;
            var3 = var3.REFRESH_MEDIUM_10;
            if(!(var3 !== var5)) { _fun0002_ip = 168; continue _fun0002 }
 43:
            var3 = _closure1_slot1;
            var3 = var3.MEDIUM;
            if(!(var3 !== var5)) { _fun0002_ip = 145; continue _fun0002 }
 57:
            var3 = _closure1_slot1;
            var3 = var3.LARGE;
            if(!(var3 !== var5)) { _fun0002_ip = 122; continue _fun0002 }
 71:
            var3 = _closure1_slot1;
            var3 = var3.XLARGE;
            if(!(var3 !== var5)) { _fun0002_ip = 99; continue _fun0002 }
 85:
            var4 = _closure1_slot3;
            var3 = undefined;
            var3 = var4.bind(var3)(var5, var1);
            return var3;
 99:
            var4 = _closure1_slot2;
            if(var1) { _fun0002_ip = 114; continue _fun0002 }
 106:
            var3 = var4.containerXLarge;
            _fun0002_ip = 120; continue _fun0002;
 114:
            var3 = var4.containerMobileOnlineXLarge;
 120:
            return var3;
 122:
            var4 = _closure1_slot2;
            if(var1) { _fun0002_ip = 137; continue _fun0002 }
 129:
            var3 = var4.containerLarge;
            _fun0002_ip = 143; continue _fun0002;
 137:
            var3 = var4.containerMobileOnlineLarge;
 143:
            return var3;
 145:
            var4 = _closure1_slot2;
            if(var1) { _fun0002_ip = 160; continue _fun0002 }
 152:
            var3 = var4.containerMedium;
            _fun0002_ip = 166; continue _fun0002;
 160:
            var3 = var4.containerMobileOnlineMedium;
 166:
            return var3;
 168:
            var4 = _closure1_slot2;
            if(var1) { _fun0002_ip = 183; continue _fun0002 }
 175:
            var3 = var4.containerRefreshMedium;
            _fun0002_ip = 189; continue _fun0002;
 183:
            var3 = var4.containerMobileOnlineRefreshMedium;
 189:
            return var3;
 191:
            var2 = _closure1_slot2;
            if(var1) { _fun0002_ip = 206; continue _fun0002 }
 198:
            var1 = var2.containerSmall;
            _fun0002_ip = 212; continue _fun0002;
 206:
            var1 = var2.containerMobileOnlineSmall;
 212:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();