// app/modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var8 = native4;
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
 0:
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
 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0002_ip = 139; continue _fun0002 }
 13:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var1);
                    var1 = var4.isIOS;
                    var1 = var1.bind(var4)();
                    if(!var1) { _fun0002_ip = 95; continue _fun0002 }
 51:
                    var1 = _closure2_slot0;
                    var6 = null;
                    var1 = var6 == var1;
                    var4 = undefined;
                    if(var1) { _fun0002_ip = 82; continue _fun0002 }
 66:
                    var5 = _closure2_slot0;
                    var5 = var5.current;
                    var1 = var6 == var5;
                    var4 = var5;
 82:
                    if(var1) { _fun0002_ip = 95; continue _fun0002 }
 85:
                    var1 = var4.reset;
                    var1 = var1.bind(var4)();
 95:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var1 = var4 == var1;
                    var2 = undefined;
                    if(var1) { _fun0002_ip = 126; continue _fun0002 }
 110:
                    var3 = _closure2_slot0;
                    var3 = var3.current;
                    var1 = var4 == var3;
                    var2 = var3;
 126:
                    if(var1) { _fun0002_ip = 139; continue _fun0002 }
 129:
                    var1 = var2.play;
                    var1 = var1.bind(var2)();
 139:
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
            if(var6) { _fun0001_ip = 227; continue _fun0001 }
 204:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var10];
            var6 = var7.bind(var4)(var6);
            var5 = var6.FadeOut;
 227:
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
            if(!var18) { _fun0001_ip = 287; continue _fun0001 }
 284:
            var18 = !var17;
 287:
            if(!var18) { _fun0001_ip = 293; continue _fun0001 }
 290:
            var18 = var19;
 293:
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