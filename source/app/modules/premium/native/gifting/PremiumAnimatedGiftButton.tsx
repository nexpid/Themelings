// app/modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var4 = 0;
    var9 = var6[var4];
    var8 = metroImportAll;
    var1 = undefined;
    var8 = var8.bind(var1)(var9);
    var _closure1_slot3 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRef;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {'backgroundColor': null, 'width': 40, 'height': 40, 'borderRadius': null, 'marginHorizontal': 4, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 4;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
        var2['backgroundColor'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.radii;
        var3 = var3.round;
        var2['borderRadius'] = var3;
        var1['container'] = var2;
        var2 = {'width': 30, 'height': 30};
        var1['animation'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumAnimatedGiftButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var18 = var9.active;
            var20 = var9.style;
            var19 = var9.activeStyle;
            var17 = var9.disabled;
            var16 = var9.accessibilityState;
            var10 = var9.channelId;
            var13 = var9.animationData;
            var11 = var9.onAnimationFinished;
            var12 = var9.loop;
            var1 = _closure1_slot7;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var3 = _closure1_slot4;
            var1 = null;
            var15 = var3.bind(var4)(var1);
            var _closure2_slot0 = var15;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 5;
            var3 = var1[var3];
            var7 = var5.bind(var4)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var6 = var6.bind(var7)(var5, var3);
            var _closure2_slot1 = var6;
            var7 = _closure1_slot3;
            var5 = var7.useEffect;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var1);
                    var1 = var4.isIOS;
                    var1 = var1.bind(var4)();
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = _closure2_slot0;
                    var6 = null;
                    var1 = var6 == var1;
                    var4 = undefined;
                    if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure2_slot0;
                    var5 = var5.current;
                    var1 = var6 == var5;
                    var4 = var5;
case 6:
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 8:
                    var1 = var4.reset;
                    var1 = var1.bind(var4)();
case 4:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var1 = var4 == var1;
                    var2 = undefined;
                    if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var3 = _closure2_slot0;
                    var3 = var3.current;
                    var1 = var4 == var3;
                    var2 = var3;
case 9:
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 11:
                    var1 = var2.play;
                    var1 = var1.bind(var2)();
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.bind(var7)(var2, var3);
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var10 = 7;
            var1 = var1[var10];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var5 = undefined;
            if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var7.bind(var4)(var6);
            var5 = var6.FadeOut;
case 12:
            var1['exiting'] = var5;
            var7 = _closure1_slot6;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 8;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {};
            var21 = var14.container;
            var10 = new Array(3);
            var10[0] = var21;
            var10[1] = var20;
            if(!var18) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var18 = !var17;
case 14:
            if(!var18) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var18 = var19;
case 16:
            var10[2] = var18;
            var5['style'] = var10;
            var10 = 'button';
            var5['accessibilityRole'] = var10;
            var10 = {};
            var10['disabled'] = var17;
            var23 = var10;
            var22 = var16;
            var16 = copyDataProperties(var23, var22);
            var5['accessibilityState'] = var10;
            var23 = var5;
            var22 = var9;
            var9 = copyDataProperties(var23, var22);
            var10 = _closure1_slot6;
            var9 = _closure1_slot1;
            var16 = _closure1_slot2;
            var8 = 9;
            var8 = var16[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var8['ref'] = var15;
            var14 = var14.animation;
            var8['style'] = var14;
            var8['source'] = var13;
            var8['loop'] = var12;
            var12 = false;
            var8['autoPlay'] = var12;
            var8['onAnimationFinish'] = var11;
            var9 = var10.bind(var4)(var9, var8);
            var8 = 'children';
            var5[var8] = var9;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['PremiumAnimatedGiftButton'] = var2;
    return var1;
})();