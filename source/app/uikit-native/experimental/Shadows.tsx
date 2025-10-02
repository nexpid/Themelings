// app/uikit-native/experimental/Shadows.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/experimental/Shadows.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.xOffset;
            var7 = var1.yOffset;
            var9 = var1.shadowColorIos;
            var6 = var1.shadowOpacity;
            var5 = var1.shadowRadius;
            var4 = var1.elevation;
            var3 = var1.shadowColorAndroid;
            var10 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var10.bind(var1)(var2);
            var1 = var2.isAndroid;
            var1 = var1.bind(var2)();
            var2 = {};
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
            var1['shadowColor'] = var9;
            var2['width'] = var8;
            var2['height'] = var7;
            var1['shadowOffset'] = var2;
            var1['shadowOpacity'] = var6;
            var1['shadowRadius'] = var5;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2['elevation'] = var4;
            var2['shadowColor'] = var3;
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['generateBoxShadowStyle'] = var2;
    var2 = {'xOffset': 0, 'yOffset': 4, 'shadowColorIos': '#000000', 'shadowOpacity': 0.3, 'shadowRadius': 4.65, 'elevation': 8, 'shadowColorAndroid': '#000000'};
    var3['EIGHT_DP_ELEVATION_SHADOW_PARAMS'] = var2;
    var2 = {'xOffset': 0, 'yOffset': 2, 'shadowColorIos': '#000000', 'shadowOpacity': 0.23, 'shadowRadius': 2.62, 'elevation': 4, 'shadowColorAndroid': '#000000'};
    var3['FOUR_DP_ELEVATION_SHADOW_PARAMS'] = var2;
    var2 = {'xOffset': 0, 'yOffset': 7, 'shadowColorIos': '#000', 'shadowOpacity': 0.36, 'shadowRadius': 9.51, 'elevation': 15, 'shadowColorAndroid': '#000'};
    var3['EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS'] = var2;
    var2 = {'xOffset': 0, 'yOffset': 0, 'shadowColorIos': '#000', 'shadowOpacity': 0, 'shadowRadius': 0, 'elevation': 0, 'shadowColorAndroid': '#000'};
    var3['NO_ELEVATION_SHADOW_PARAMS'] = var2;
    return var1;
})();