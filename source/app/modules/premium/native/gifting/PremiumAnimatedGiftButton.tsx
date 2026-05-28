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
    var4 = function(arg1, arg2) {
        var10 = arg1;
        var5 = arg2;
        var1 = {};
        var2 = {};
        var8 = _closure1_slot1;
        var9 = _closure1_slot2;
        var6 = 4;
        var3 = var9[var6];
        var7 = undefined;
        var3 = var8.bind(var7)(var3);
        var3 = var3.colors;
        var3 = var3.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
        var2['backgroundColor'] = var3;
        var2['width'] = var10;
        var2['height'] = var10;
        var3 = var9[var6];
        var3 = var8.bind(var7)(var3);
        var3 = var3.radii;
        var3 = var3.round;
        var2['borderRadius'] = var3;
        var2['marginHorizontal'] = var5;
        var4 = 'flex';
        var2['display'] = var4;
        var3 = 'center';
        var2['alignItems'] = var3;
        var2['justifyContent'] = var3;
        var1['container'] = var2;
        var2 = {};
        var2['width'] = var10;
        var2['height'] = var10;
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var6 = var6.radii;
        var6 = var6.sm;
        var2['borderRadius'] = var6;
        var2['marginHorizontal'] = var5;
        var2['display'] = var4;
        var2['alignItems'] = var3;
        var2['justifyContent'] = var3;
        var1['containerRefresh'] = var2;
        var2 = {'width': 30, 'height': 30};
        var1['animation'] = var2;
        var2 = {'width': 24, 'height': 24};
        var1['animationRefresh'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumAnimatedGiftButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var21 = var9.active;
            var23 = var9.style;
            var22 = var9.activeStyle;
            var18 = var9.disabled;
            var17 = var9.accessibilityState;
            var24 = var9.channelId;
            var14 = var9.animationDataUrl;
            var11 = var9.onAnimationFinished;
            var12 = var9.loop;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 5;
            var2 = var1[var2];
            var4 = undefined;
            var7 = var6.bind(var4)(var2);
            var5 = var7.useMobileVisualRefreshConfig;
            var2 = {};
            var10 = 'PremiumAnimatedGiftButton';
            var2['location'] = var10;
            var2 = var5.bind(var7)(var2);
            var13 = var2.enabled;
            var7 = 6;
            var2 = var1[var7];
            var16 = var6.bind(var4)(var2);
            var15 = var16.useToken;
            var2 = _closure1_slot1;
            var5 = 4;
            var10 = var1[var5];
            var10 = var2.bind(var4)(var10);
            var10 = var10.modules;
            var10 = var10.mobile;
            var10 = var10.CHAT_INPUT_ACTION_BUTTON_SIZE;
            var10 = var15.bind(var16)(var10);
            var15 = var1[var7];
            var19 = var6.bind(var4)(var15);
            var16 = var19.useToken;
            var15 = var1[var5];
            var15 = var2.bind(var4)(var15);
            var15 = var15.modules;
            var15 = var15.mobile;
            var15 = var15.CHAT_INPUT_ACTION_BUTTON_MARGIN;
            var15 = var16.bind(var19)(var15);
            var7 = var1[var7];
            var16 = var6.bind(var4)(var7);
            var7 = var16.useToken;
            var5 = var1[var5];
            var5 = var2.bind(var4)(var5);
            var5 = var5.modules;
            var5 = var5.mobile;
            var5 = var5.CHAT_INPUT_ACTION_BUTTON_MIN_TOUCH_TARGET_SIZE;
            var5 = var7.bind(var16)(var5);
            var7 = _closure1_slot7;
            var15 = var7.bind(var4)(var10, var15);
            var7 = global;
            var16 = var7.Math;
            var7 = var16.max;
            var10 = var5 - var10;
            var5 = 2;
            var5 = var10 / var5;
            var10 = 0;
            var19 = var7.bind(var16)(var10, var5);
            var7 = _closure1_slot4;
            var5 = null;
            var16 = var7.bind(var4)(var5);
            var _closure2_slot0 = var16;
            var5 = 7;
            var5 = var1[var5];
            var20 = var6.bind(var4)(var5);
            var7 = var20.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var6 = var7.bind(var20)(var6, var5);
            var _closure2_slot1 = var6;
            var20 = _closure1_slot3;
            var7 = var20.useEffect;
            var5 = new Array(2);
            var5[0] = var24;
            var5[1] = var6;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
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
            var3 = var7.bind(var20)(var3, var5);
            var3 = _closure1_slot6;
            var20 = 9;
            var1 = var1[var20];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var5 = undefined;
            if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var20];
            var6 = var7.bind(var4)(var6);
            var5 = var6.FadeOut;
case 12:
            var1['exiting'] = var5;
            var7 = _closure1_slot6;
            var6 = _closure1_slot0;
            var20 = _closure1_slot2;
            var5 = 10;
            var5 = var20[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {};
            if(var13) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var24 = var15.container;
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var24 = var15.containerRefresh;
case 16:
            var20 = new Array(3);
            var20[0] = var24;
            var20[1] = var23;
            if(!var21) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var21 = !var18;
case 17:
            if(!var21) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var21 = var22;
case 19:
            var20[2] = var21;
            var5['style'] = var20;
            var20 = var19 > var10;
            var10 = undefined;
            if(!var20) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var10 = var19;
case 21:
            var5['hitSlop'] = var10;
            var10 = 'button';
            var5['accessibilityRole'] = var10;
            var10 = {};
            var10['disabled'] = var18;
            var26 = var10;
            var25 = var17;
            var17 = copyDataProperties(var26, var25);
            var5['accessibilityState'] = var10;
            var26 = var5;
            var25 = var9;
            var9 = copyDataProperties(var26, var25);
            var10 = _closure1_slot6;
            var9 = _closure1_slot1;
            var17 = _closure1_slot2;
            var8 = 11;
            var8 = var17[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var8['ref'] = var16;
            if(var13) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var13 = var15.animation;
            _fun0001_ip = 25; continue _fun0001;
case 23:
            var13 = var15.animationRefresh;
case 25:
            var8['style'] = var13;
            var13 = {};
            var13['uri'] = var14;
            var8['source'] = var13;
            var8['loop'] = var12;
            var12 = false;
            var8['autoPlay'] = var12;
            var8['onAnimationFinish'] = var11;
            var9 = var10.bind(var4)(var9, var8);
            var8 = 'children';
            var5[7] = var9;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['PremiumAnimatedGiftButton'] = var2;
    return var1;
})();