// app/design/void/Status/native/getStatusContainerStyle.tsx
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
    var _closure1_slot5 = var11;
    var8 = function createVRContainerStyle(arg1) {
        var3 = _closure1_slot2;
        var1 = arg1;
        var6 = var1 * var3;
        var1 = _closure1_slot0;
        var4 = 2;
        var1 = var4 * var1;
        var3 = var6 + var1;
        var1 = {};
        var5 = _closure1_slot3;
        var6 = var6 * var5;
        var5 = _closure1_slot0;
        var5 = var4 * var5;
        var5 = var6 + var5;
        var1['width'] = var5;
        var1['height'] = var3;
        var3 = var3 / var4;
        var1['borderRadius'] = var3;
        var3 = _closure1_slot0;
        var1['paddingLeft'] = var3;
        var3 = _closure1_slot0;
        var1['paddingRight'] = var3;
        var3 = _closure1_slot0;
        var1['paddingTop'] = var3;
        var2 = _closure1_slot0;
        var1['paddingBottom'] = var2;
        return var1;
    };
    var _closure1_slot6 = var8;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var10 = true;
    var4['value'] = var10;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.STATUS_PADDING;
    var _closure1_slot0 = var7;
    var7 = var4.StatusSizes;
    var _closure1_slot1 = var7;
    var9 = var4.VR_STATUS_SCALE;
    var _closure1_slot2 = var9;
    var4 = var4.VR_STATUS_WIDTH_RATIO;
    var _closure1_slot3 = var4;
    var4 = {};
    var9 = var7.SMALL;
    var12 = false;
    var9 = var11.bind(var1)(var9, var12);
    var4['containerSmall'] = var9;
    var9 = var7.REFRESH_MEDIUM_10;
    var9 = var11.bind(var1)(var9, var12);
    var4['containerRefreshMedium'] = var9;
    var9 = var7.MEDIUM;
    var9 = var11.bind(var1)(var9, var12);
    var4['containerMedium'] = var9;
    var9 = var7.LARGE;
    var9 = var11.bind(var1)(var9, var12);
    var4['containerLarge'] = var9;
    var9 = var7.LARGE;
    var9 = var11.bind(var1)(var9, var12);
    var4['containerXLarge'] = var9;
    var9 = var7.SMALL;
    var9 = var11.bind(var1)(var9, var10);
    var4['containerMobileOnlineSmall'] = var9;
    var9 = var7.REFRESH_MEDIUM_10;
    var9 = var11.bind(var1)(var9, var10);
    var4['containerMobileOnlineRefreshMedium'] = var9;
    var9 = var7.MEDIUM;
    var9 = var11.bind(var1)(var9, var10);
    var4['containerMobileOnlineMedium'] = var9;
    var9 = var7.LARGE;
    var9 = var11.bind(var1)(var9, var10);
    var4['containerMobileOnlineLarge'] = var9;
    var9 = var7.LARGE;
    var9 = var11.bind(var1)(var9, var10);
    var4['containerMobileOnlineXLarge'] = var9;
    var9 = var7.SMALL;
    var9 = var8.bind(var1)(var9);
    var4['containerVRSmall'] = var9;
    var9 = var7.REFRESH_MEDIUM_10;
    var9 = var8.bind(var1)(var9);
    var4['containerVRRefreshMedium'] = var9;
    var9 = var7.MEDIUM;
    var9 = var8.bind(var1)(var9);
    var4['containerVRMedium'] = var9;
    var9 = var7.LARGE;
    var9 = var8.bind(var1)(var9);
    var4['containerVRLarge'] = var9;
    var7 = var7.LARGE;
    var7 = var8.bind(var1)(var7);
    var4['containerVRXLarge'] = var7;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/void/Status/native/getStatusContainerStyle.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getStatusContainerStyle(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var5 = arg2;
            var6 = arguments[2];
            var3 = undefined;
            if(!(var6 === var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var6 = false;
case 11:
            var2 = _closure1_slot1;
            var2 = var2.SMALL;
            if(var6) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            if(!(var2 !== var4)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var6 = _closure1_slot1;
            var6 = var6.REFRESH_MEDIUM_10;
            if(!(var6 !== var4)) { _fun0002_ip = 17; continue _fun0002 }
case 5:
            var6 = _closure1_slot1;
            var6 = var6.MEDIUM;
            if(!(var6 !== var4)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var6 = _closure1_slot1;
            var6 = var6.LARGE;
            if(!(var6 !== var4)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var6 = _closure1_slot1;
            var6 = var6.XLARGE;
            if(!(var6 !== var4)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var6 = _closure1_slot5;
            var6 = var6.bind(var3)(var4, var5);
            return var6;
case 22:
            var7 = _closure1_slot4;
            if(var5) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var6 = var7.containerXLarge;
            _fun0002_ip = 26; continue _fun0002;
case 24:
            var6 = var7.containerMobileOnlineXLarge;
case 26:
            return var6;
case 20:
            var7 = _closure1_slot4;
            if(var5) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var6 = var7.containerLarge;
            _fun0002_ip = 29; continue _fun0002;
case 27:
            var6 = var7.containerMobileOnlineLarge;
case 29:
            return var6;
case 18:
            var7 = _closure1_slot4;
            if(var5) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var6 = var7.containerMedium;
            _fun0002_ip = 32; continue _fun0002;
case 30:
            var6 = var7.containerMobileOnlineMedium;
case 32:
            return var6;
case 17:
            var7 = _closure1_slot4;
            if(var5) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var6 = var7.containerRefreshMedium;
            _fun0002_ip = 35; continue _fun0002;
case 33:
            var6 = var7.containerMobileOnlineRefreshMedium;
case 35:
            return var6;
case 15:
            var6 = _closure1_slot4;
            if(var5) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var5 = var6.containerSmall;
            _fun0002_ip = 38; continue _fun0002;
case 36:
            var5 = var6.containerMobileOnlineSmall;
case 38:
            return var5;
case 13:
            if(!(var2 !== var4)) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            var2 = _closure1_slot1;
            var2 = var2.REFRESH_MEDIUM_10;
            if(!(var2 !== var4)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            var2 = _closure1_slot1;
            var2 = var2.MEDIUM;
            if(!(var2 !== var4)) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var2 = _closure1_slot1;
            var2 = var2.LARGE;
            if(!(var2 !== var4)) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var2 = _closure1_slot1;
            var2 = var2.XLARGE;
            if(!(var2 !== var4)) { _fun0002_ip = 47; continue _fun0002 }
case 48:
            var2 = _closure1_slot6;
            var2 = var2.bind(var3)(var4);
            return var2;
case 47:
            var2 = _closure1_slot4;
            var2 = var2.containerVRXLarge;
            return var2;
case 45:
            var2 = _closure1_slot4;
            var2 = var2.containerVRLarge;
            return var2;
case 43:
            var2 = _closure1_slot4;
            var2 = var2.containerVRMedium;
            return var2;
case 41:
            var2 = _closure1_slot4;
            var2 = var2.containerVRRefreshMedium;
            return var2;
case 39:
            var1 = _closure1_slot4;
            var1 = var1.containerVRSmall;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();