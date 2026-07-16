// app/modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.YOU_BAR_SPRING_CONFIG;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = {};
    var8 = 'function YouBarNameplateTsx1(){const{withSpring,isQuestRendered,questDockAnimatedBorderRadius,borderRadius,YOU_BAR_SPRING_CONFIG}=this.__closure;return{borderTopRightRadius:withSpring(isQuestRendered?questDockAnimatedBorderRadius.get():borderRadius,YOU_BAR_SPRING_CONFIG)};}';
    var4['code'] = var8;
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function YouBarNameplate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.nameplate;
            var10 = var1.barWidth;
            var13 = var1.isQuestRendered;
            var _closure2_slot0 = var13;
            var6 = var1.avatarSize;
            var17 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 3;
            var1 = var9[var1];
            var4 = undefined;
            var11 = var17.bind(var4)(var1);
            var7 = var11.useToken;
            var2 = _closure1_slot1;
            var1 = 4;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.YOU_BAR_BORDER_RADIUS;
            var11 = var7.bind(var11)(var1);
            var _closure2_slot1 = var11;
            var1 = 5;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var15 = var1.bind(var4)(var11);
            var _closure2_slot2 = var15;
            var1 = 6;
            var7 = var9[var1];
            var12 = var17.bind(var4)(var7);
            var7 = var12.useAnimatedStyle;
            var3 = function l() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 7;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.withSpring;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot1;
                    _fun0002_ip = 4; continue _fun0002;
case 2:
                    var7 = _closure2_slot2;
                    var6 = var7.get;
                    var3 = var6.bind(var7)();
case 4:
                    var2 = _closure1_slot3;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['borderTopRightRadius'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var16 = 7;
            var16 = var9[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.withSpring;
            var14['withSpring'] = var16;
            var14['isQuestRendered'] = var13;
            var14['questDockAnimatedBorderRadius'] = var15;
            var14['borderRadius'] = var11;
            var15 = _closure1_slot3;
            var14['YOU_BAR_SPRING_CONFIG'] = var15;
            var3['__closure'] = var14;
            var14 = 17156260157738.0;
            var3['__workletHash'] = var14;
            var14 = _closure1_slot5;
            var3['__initData'] = var14;
            var7 = var7.bind(var12)(var3);
            var3 = _closure1_slot4;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var9 = {'position': 'absolute', 'top': 0, 'left': null, 'right': 4294967295, 'bottom': 0, 'borderTopRightRadius': null, 'borderTopLeftRadius': 0, 'borderBottomRightRadius': null, 'borderBottomLeftRadius': 0, 'overflow': 'hidden'};
            var9['left'] = var6;
            var12 = 0;
            if(var13) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var12 = var11;
case 5:
            var9['borderTopRightRadius'] = var12;
            var9['borderBottomRightRadius'] = var11;
            var6 = var10 - var6;
            var9['width'] = var6;
            var6 = new Array(2);
            var6[0] = var9;
            var6[1] = var7;
            var1['style'] = var6;
            var6 = 'none';
            var1['pointerEvents'] = var6;
            var7 = _closure1_slot4;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 8;
            var5 = var9[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {'nameplate': null, 'isFocused': true, 'animate': false};
            var5['nameplate'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/you_bar/YouBarNameplate.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();