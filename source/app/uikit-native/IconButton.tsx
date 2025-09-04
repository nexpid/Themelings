// app/uikit-native/IconButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var7;
    var4 = function SquareIconButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var12 = var2.onPress;
            var8 = var2.source;
            var7 = var2.style;
            var11 = var2.iconStyle;
            var14 = var2.size;
            var _closure2_slot0 = var14;
            var9 = var2.disableColor;
            var17 = var2.accessibilityLabel;
            var15 = var2.accessibilityHidden;
            var5 = var2.disabled;
            var2 = _closure1_slot6;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var _closure2_slot1 = var10;
            var6 = _closure1_slot3;
            var3 = var6.useMemo;
            var2 = new Array(2);
            var2[0] = var14;
            var2[1] = var10;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot5;
                    var3 = var3.MEDIUM_32;
                    if(!(var3 !== var4)) { _fun0002_ip = 72; continue _fun0002 }
 24:
                    var3 = _closure1_slot5;
                    var3 = var3.LARGE_40;
                    if(!(var3 !== var4)) { _fun0002_ip = 60; continue _fun0002 }
 38:
                    var2 = _closure1_slot5;
                    var2 = var2.SMALL_24;
                    var2 = _closure2_slot1;
                    var2 = var2.small;
                    return var2;
 60:
                    var2 = _closure2_slot1;
                    var2 = var2.large;
                    return var2;
 72:
                    var1 = _closure2_slot1;
                    var1 = var1.medium;
                    return var1;
                }
            };
            var6 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot4;
            var2 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 5;
            var1 = var16[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var16 = 'button';
            var1['accessibilityRole'] = var16;
            var16 = undefined;
            if(var15) { _fun0001_ip = 154; continue _fun0001 }
 151:
            var16 = var17;
 154:
            var1['accessibilityLabel'] = var16;
            var1['accessibilityElementsHidden'] = var15;
            var1['onPress'] = var12;
            var1['disabled'] = var5;
            var12 = var10.container;
            var5 = new Array(3);
            var5[0] = var12;
            var5[1] = var7;
            var5[2] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot4;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var15 = 6;
            var5 = var5[var15];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var12 = _closure1_slot5;
            var12 = var12.LARGE_40;
            if(!(var14 !== var12)) { _fun0001_ip = 267; continue _fun0001 }
 236:
            var14 = _closure1_slot1;
            var12 = _closure1_slot2;
            var12 = var12[var15];
            var12 = var14.bind(var4)(var12);
            var12 = var12.Sizes;
            var12 = var12.REFRESH_SMALL_16;
            _fun0001_ip = 296; continue _fun0001;
 267:
            var14 = _closure1_slot1;
            var13 = _closure1_slot2;
            var13 = var13[var15];
            var13 = var14.bind(var4)(var13);
            var13 = var13.Sizes;
            var12 = var13.MEDIUM;
 296:
            var5['size'] = var12;
            var12 = null;
            if(var9) { _fun0001_ip = 310; continue _fun0001 }
 305:
            var12 = var10.icon;
 310:
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var5['style'] = var10;
            var5['disableColor'] = var9;
            var5['source'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var2 = function CircularIconButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = arg1;
            var9 = var3.style;
            var7 = var3.size;
            var6 = var3.disableColor;
            var2 = {'style': 0, 'size': 0, 'disableColor': 0};
            var13 = null;
            var14 = var2;
            var1 = silentSetPrototypeOf(var14, var13);
            var14 = {};
            var13 = var3;
            var12 = var2;
            var5 = copyDataProperties(var14, var13, var12);
            var1 = _closure1_slot6;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var2 = _closure1_slot7;
            var1 = {};
            var11 = _closure1_slot5;
            var11 = var11.SMALL_24;
            if(!(var11 !== var7)) { _fun0003_ip = 133; continue _fun0003 }
 87:
            var11 = _closure1_slot5;
            var11 = var11.MEDIUM_32;
            if(!(var11 !== var7)) { _fun0003_ip = 125; continue _fun0003 }
 101:
            var10 = _closure1_slot5;
            var11 = var10.LARGE_40;
            var10 = undefined;
            if(!(var11 === var7)) { _fun0003_ip = 139; continue _fun0003 }
 117:
            var10 = var8.largeCircular;
            _fun0003_ip = 139; continue _fun0003;
 125:
            var10 = var8.mediumCircular;
            _fun0003_ip = 139; continue _fun0003;
 133:
            var10 = var8.smallCircular;
 139:
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var1['style'] = var8;
            var1['size'] = var7;
            var14 = var1;
            var13 = var5;
            var5 = copyDataProperties(var14, var13);
            var5 = 'disableColor';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot4 = var5;
    var5 = {};
    var10 = 24;
    var5['SMALL_24'] = var10;
    var8 = 'SMALL_24';
    var5[var10] = var8;
    var10 = 32;
    var5['MEDIUM_32'] = var10;
    var8 = 'MEDIUM_32';
    var5[var10] = var8;
    var10 = 40;
    var5['LARGE_40'] = var10;
    var8 = 'LARGE_40';
    var5[var10] = var8;
    var _closure1_slot5 = var5;
    var15 = 2;
    var8 = var7[var15];
    var11 = var6.bind(var1)(var8);
    var10 = var11.createStyles;
    var8 = {};
    var12 = {'borderRadius': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var13 = 3;
    var13 = var7[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var12['borderRadius'] = var13;
    var13 = 4;
    var14 = var7[var13];
    var14 = var6.bind(var1)(var14);
    var14 = var14.DARK_PRIMARY_700_LIGHT_PRIMARY_230;
    var12['backgroundColor'] = var14;
    var8['container'] = var12;
    var12 = {};
    var14 = var5.SMALL_24;
    var12['height'] = var14;
    var14 = var5.SMALL_24;
    var12['width'] = var14;
    var8['small'] = var12;
    var12 = {};
    var14 = var5.MEDIUM_32;
    var12['height'] = var14;
    var14 = var5.MEDIUM_32;
    var12['width'] = var14;
    var8['medium'] = var12;
    var12 = {};
    var14 = var5.LARGE_40;
    var12['height'] = var14;
    var14 = var5.LARGE_40;
    var12['width'] = var14;
    var8['large'] = var12;
    var12 = {};
    var14 = var5.SMALL_24;
    var14 = var14 / var15;
    var12['borderRadius'] = var14;
    var8['smallCircular'] = var12;
    var12 = {};
    var14 = var5.MEDIUM_32;
    var14 = var14 / var15;
    var12['borderRadius'] = var14;
    var8['mediumCircular'] = var12;
    var12 = {};
    var14 = var5.LARGE_40;
    var14 = var14 / var15;
    var12['borderRadius'] = var14;
    var8['largeCircular'] = var12;
    var12 = {};
    var13 = var7[var13];
    var13 = var6.bind(var1)(var13);
    var13 = var13.DARK_PRIMARY_300_LIGHT_PRIMARY_500;
    var12['tintColor'] = var13;
    var8['icon'] = var12;
    var8 = var10.bind(var11)(var8);
    var _closure1_slot6 = var8;
    var4['Sizes'] = var5;
    var2['Sizes'] = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/IconButton.tsx';
    var5 = var6.bind(var7)(var5);
    var3['SquareIconButton'] = var4;
    var3['CircularIconButton'] = var2;
    return var1;
})();