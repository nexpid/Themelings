// app/modules/guild_role_subscriptions/native/components/StepsIndicator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function StepNode(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var9 = var3.label;
            var5 = var3.isCurrent;
            var _closure2_slot0 = var5;
            var1 = var3.isDone;
            var8 = var3.useReducedMotion;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var3 = _closure1_slot7;
            var7 = var3.bind(var4)();
            var10 = _closure1_slot0;
            var3 = _closure1_slot2;
            var11 = 6;
            var3 = var3[var11];
            var13 = var10.bind(var4)(var3);
            var12 = var13.useSharedValue;
            var10 = 0;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = 1;
case 2:
            var13 = var12.bind(var13)(var10);
            _closure2_slot1 = var13;
            var16 = 180;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var16 = 0;
case 4:
            _closure2_slot2 = var16;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = var14[var11];
            var10 = var15.bind(var4)(var3);
            var8 = var10.useAnimatedStyle;
            var3 = function p() {
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 6;
                var1 = var12[var7];
                var10 = undefined;
                var5 = var11.bind(var10)(var1);
                var4 = var5.interpolate;
                var2 = _closure2_slot1;
                var1 = var2.get;
                var3 = var1.bind(var2)();
                var2 = [0, 1];
                var1 = [0.4, 1];
                var5 = var4.bind(var5)(var3, var2, var1);
                var3 = 7;
                var1 = var12[var3];
                var4 = var11.bind(var10)(var1);
                var2 = var4.withTiming;
                var1 = {};
                var6 = _closure2_slot2;
                var1['duration'] = var6;
                var6 = var12[var7];
                var6 = var11.bind(var10)(var6);
                var13 = var6.Easing;
                var9 = var13.out;
                var6 = var12[var7];
                var6 = var11.bind(var10)(var6);
                var6 = var6.Easing;
                var6 = var6.ease;
                var6 = var9.bind(var13)(var6);
                var1['easing'] = var6;
                var2 = var2.bind(var4)(var5, var1);
                var1 = var12[var7];
                var9 = var11.bind(var10)(var1);
                var6 = var9.interpolate;
                var4 = _closure2_slot1;
                var1 = var4.get;
                var5 = var1.bind(var4)();
                var4 = new Array(2);
                var1 = -2;
                var4[0] = var1;
                var4[1] = var7;
                var1 = [0, 1];
                var6 = var6.bind(var9)(var5, var1, var4);
                var1 = {};
                var3 = var12[var3];
                var5 = var11.bind(var10)(var3);
                var4 = var5.withTiming;
                var3 = {};
                var8 = _closure2_slot2;
                var3['duration'] = var8;
                var8 = var12[var7];
                var8 = var11.bind(var10)(var8);
                var9 = var8.Easing;
                var8 = var9.out;
                var7 = var12[var7];
                var7 = var11.bind(var10)(var7);
                var7 = var7.Easing;
                var7 = var7.ease;
                var7 = var8.bind(var9)(var7);
                var3['easing'] = var7;
                var3 = var4.bind(var5)(var6, var3);
                var1['marginHorizontal'] = var3;
                var3 = {};
                var3['scale'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var12 = {};
            var17 = var14[var11];
            var17 = var15.bind(var4)(var17);
            var17 = var17.interpolate;
            var12['interpolate'] = var17;
            var12['state'] = var13;
            var17 = 7;
            var17 = var14[var17];
            var17 = var15.bind(var4)(var17);
            var17 = var17.withTiming;
            var12['withTiming'] = var17;
            var12['duration'] = var16;
            var14 = var14[var11];
            var14 = var15.bind(var4)(var14);
            var14 = var14.Easing;
            var12['Easing'] = var14;
            var3['__closure'] = var12;
            var12 = 4051275727555.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot8;
            var3['__initData'] = var12;
            var10 = var8.bind(var10)(var3);
            var12 = _closure1_slot3;
            var8 = var12.useEffect;
            var3 = new Array(2);
            var3[0] = var13;
            var3[1] = var5;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var4 = _closure2_slot0;
                    var1 = 0;
                    if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = 1;
case 6:
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var8.bind(var12)(var2, var3);
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(var5) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var8 = var7.emptyNode;
            _fun0001_ip = 11; continue _fun0001;
case 8:
            var8 = var7.filledNode;
case 11:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var11];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var11 = var7.node;
            var7 = new Array(3);
            var7[0] = var11;
            var7[1] = var10;
            var7[2] = var8;
            var1['style'] = var7;
            if(!var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = _closure1_slot6;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 8;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'heading-deprecated-12/extrabold', 'color': 'interactive-active'};
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 12:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
    var7['container'] = var4;
    var4 = 10;
    var10 = {'width': 20, 'height': 20, 'borderRadius': 10, 'marginHorizontal': 4294967294};
    var7['node'] = var10;
    var10 = {'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BRAND;
    var10['backgroundColor'] = var13;
    var7['filledNode'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SECONDARY_ALT;
    var10['backgroundColor'] = var11;
    var7['emptyNode'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot7 = var7;
    var7 = {};
    var8 = 'function StepsIndicatorTsx1(){const{interpolate,state,withTiming,duration,Easing}=this.__closure;const rawScale=interpolate(state.get(),[0,1],[8/20,1]);const scale=withTiming(rawScale,{duration:duration,easing:Easing.out(Easing.ease)});const rawMargin=interpolate(state.get(),[0,1],[-2,6]);const marginHorizontal=withTiming(rawMargin,{duration:duration,easing:Easing.out(Easing.ease)});return{marginHorizontal:marginHorizontal,transform:[{scale:scale}]};}';
    var7['code'] = var8;
    var _closure1_slot8 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/StepsIndicator.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function StepsIndicator(arg1) {
        var1 = arg1;
        var11 = var1.current;
        var _closure2_slot0 = var11;
        var7 = var1.style;
        var10 = var1.total;
        var _closure2_slot1 = var10;
        var3 = _closure1_slot7;
        var4 = undefined;
        var6 = var3.bind(var4)();
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 9;
        var3 = var8[var3];
        var9 = var5.bind(var4)(var3);
        var8 = var9.useStateFromStores;
        var3 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var1 = _closure1_slot5;
            var1 = var1.useReducedMotion;
            return var1;
        };
        var9 = var8.bind(var9)(var5, var3);
        var _closure2_slot2 = var9;
        var8 = _closure1_slot3;
        var5 = var8.useMemo;
        var3 = new Array(3);
        var3[0] = var11;
        var3[1] = var10;
        var3[2] = var9;
        var2 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = new Array(0);
                var2 = _closure2_slot1;
                var6 = 0;
                var2 = var6 < var2;
                var5 = 1;
                var3 = undefined;
                if(!var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var11 = var6 + var5;
                var8 = var1.push;
                var10 = _closure1_slot6;
                var9 = _closure1_slot9;
                var2 = {};
                var12 = _closure2_slot2;
                var2['useReducedMotion'] = var12;
                var12 = _closure2_slot0;
                var13 = var11 === var12;
                var2['isCurrent'] = var13;
                var12 = var11 < var12;
                var2['isDone'] = var12;
                var2['label'] = var11;
                var2 = var10.bind(var3)(var9, var2, var6);
                var2 = var8.bind(var1)(var2);
                var6 = var6 + 1;
                var2 = _closure2_slot1;
                if(var6 < var2) { _fun0003_ip = 15; continue _fun0003 }
case 14:
                return var1;
            }
        };
        var5 = var5.bind(var8)(var2, var3);
        var3 = _closure1_slot6;
        var2 = _closure1_slot4;
        var1 = {};
        var8 = var6.container;
        var6 = new Array(2);
        var6[0] = var8;
        var6[1] = var7;
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();