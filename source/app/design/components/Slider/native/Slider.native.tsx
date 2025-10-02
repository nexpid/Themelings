// app/design/components/Slider/native/Slider.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center'};
    var4['container'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['slider'] = var9;
    var9 = {};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.REDESIGN_INPUT_CONTROL_SELECTED;
    var9['backgroundColor'] = var12;
    var4['minimumTrackTintColor'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_MUTED;
    var9['backgroundColor'] = var12;
    var4['maximumTrackTintColor'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['marginRight'] = var12;
    var4['startIcon'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9['marginLeft'] = var10;
    var4['endIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Slider/native/Slider.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Slider(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var17 = var4.startIcon;
            var10 = var4.endIcon;
            var13 = var4.style;
            var8 = var4.onValueChange;
            var _closure2_slot0 = var8;
            var15 = var4.step;
            var _closure2_slot1 = var15;
            var3 = {'startIcon': 0, 'endIcon': 0, 'style': 0, 'onValueChange': 0, 'step': 0};
            var6 = null;
            var21 = var3;
            var20 = null;
            var2 = silentSetPrototypeOf(var21, var20);
            var21 = {};
            var20 = var4;
            var19 = var3;
            var16 = copyDataProperties(var21, var20, var19);
            var2 = _closure1_slot7;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var15;
            var2[1] = var8;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var4 = var8[var4];
                    var7 = undefined;
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.triggerHapticFeedback;
                    var6 = _closure1_slot1;
                    var2 = 6;
                    var2 = var8[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.IMPACT_LIGHT;
                    var2 = var4.bind(var5)(var2);
case 2:
                    var2 = _closure2_slot0;
                    if(!(var3 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var11.container;
            var1['style'] = var5;
            var5 = var6 != var17;
            var8 = null;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = _closure1_slot5;
            var9 = _closure1_slot4;
            var5 = {};
            var18 = var11.startIcon;
            var5['style'] = var18;
            var5['children'] = var17;
            var8 = var12.bind(var4)(var9, var5);
case 6:
            var5 = new Array(3);
            var5[0] = var8;
            var12 = _closure1_slot5;
            var9 = _closure1_slot1;
            var17 = _closure1_slot2;
            var8 = 7;
            var8 = var17[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var21 = var8;
            var20 = var16;
            var16 = copyDataProperties(var21, var20);
            var17 = var11.slider;
            var16 = new Array(2);
            var16[0] = var17;
            var16[1] = var13;
            var13 = 'style';
            var8[var13] = var16;
            var13 = 'step';
            var8[var13] = var15;
            var13 = 'onValueChange';
            var8[var13] = var14;
            var13 = var11.minimumTrackTintColor;
            var14 = var13.backgroundColor;
            var13 = 'minimumTrackTintColor';
            var8[var13] = var14;
            var13 = var11.maximumTrackTintColor;
            var14 = var13.backgroundColor;
            var13 = 'maximumTrackTintColor';
            var8[var13] = var14;
            var14 = true;
            var13 = 'tapToSeek';
            var8[var13] = var14;
            var8 = var12.bind(var4)(var9, var8);
            var5[1] = var8;
            var8 = var6 != var10;
            var6 = null;
            if(!var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var9 = _closure1_slot5;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = var11.endIcon;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 8:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['Slider'] = var2;
    return var1;
})();