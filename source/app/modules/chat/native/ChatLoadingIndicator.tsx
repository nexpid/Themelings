// app/modules/chat/native/ChatLoadingIndicator.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var4['container'] = var9;
    var9 = {'height': 8, 'width': 8};
    var10 = 8;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9['borderRadius'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BRAND;
    var9['backgroundColor'] = var10;
    var4['pulse'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function ChatLoadingIndicatorTsx1(){const{useReducedMotion,withRepeat,withSequence,withTiming,Easing}=this.__closure;if(useReducedMotion){return{transform:[]};}return{transform:[{scale:withRepeat(withSequence(withTiming(1,{duration:0}),withTiming(0.5,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)}),withTiming(1,{duration:1500,easing:Easing.bezier(0.4,0,0.2,1)})),-1)}]};}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/ChatLoadingIndicator.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useShouldChannelShowLoadingIndicator(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 9;
        var3 = var5[var3];
        var7 = undefined;
        var3 = var4.bind(var7)(var3);
        var8 = var3.ChatLoadingIndicatorExperiment;
        var6 = var8.useConfig;
        var3 = {};
        var9 = 'ChatLoadingIndicatorGuard';
        var3['location'] = var9;
        var3 = var6.bind(var8)(var3);
        var3 = var3.enabled;
        var _closure2_slot1 = var3;
        var3 = 10;
        var3 = var5[var3];
        var6 = var4.bind(var7)(var3);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot8;
        var4 = new Array(2);
        var4[0] = var3;
        var3 = _closure1_slot7;
        var4[1] = var3;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot1;
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = false;
                return var1;
case 2:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = _closure1_slot8;
                var3 = var4.getMessages;
                var2 = _closure2_slot0;
                var3 = var3.bind(var4)(var2);
                var2 = _closure1_slot7;
                var1 = var2.isConnected;
                var2 = var1.bind(var2)();
                var1 = var3.cached;
                if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var3 = var3.ready;
                var1 = !var3;
case 6:
                if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var1 = !var2;
case 8:
                return var1;
case 4:
                var1 = false;
                return var1;
            }
        };
        var6 = var5.bind(var6)(var4, var3);
        var _closure2_slot2 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useState;
        var3 = false;
        var4 = var4.bind(var5)(var3);
        var3 = _closure1_slot3;
        var1 = 2;
        var4 = var3.bind(var7)(var4, var1);
        var1 = 0;
        var1 = var4[var1];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot3 = var3;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot2;
                if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var4 = _closure2_slot3;
                var2 = undefined;
                var3 = false;
                var3 = var4.bind(var2)(var3);
                return var2;
case 10:
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = 3000;
                var2 = var5.bind(var4)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useShouldChannelShowLoadingIndicator'] = var4;
    var2 = function ChannelHeaderLoadingIndicator() {
        var2 = _closure1_slot11;
        var4 = undefined;
        var7 = var2.bind(var4)();
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var2 = 10;
        var2 = var13[var2];
        var8 = var12.bind(var4)(var2);
        var5 = var8.useStateFromStores;
        var2 = _closure1_slot6;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var1 = _closure1_slot6;
            var1 = var1.useReducedMotion;
            return var1;
        };
        var9 = var5.bind(var8)(var3, var2);
        var _closure2_slot0 = var9;
        var5 = 11;
        var2 = var13[var5];
        var3 = var12.bind(var4)(var2);
        var2 = var3.useAnimatedStyle;
        var1 = function t() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = _closure2_slot0;
                var2 = {};
                if(var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var3 = {};
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var13 = 11;
                var1 = var19[var13];
                var14 = undefined;
                var6 = var18.bind(var14)(var1);
                var5 = var6.withRepeat;
                var1 = var19[var13];
                var9 = var18.bind(var14)(var1);
                var8 = var9.withSequence;
                var1 = 12;
                var4 = var19[var1];
                var10 = var18.bind(var14)(var4);
                var7 = var10.withTiming;
                var4 = {};
                var17 = 0;
                var4['duration'] = var17;
                var12 = 1;
                var7 = var7.bind(var10)(var12, var4);
                var4 = var19[var1];
                var21 = var18.bind(var14)(var4);
                var11 = var21.withTiming;
                var10 = {};
                var20 = 1500;
                var10['duration'] = var20;
                var4 = var19[var13];
                var4 = var18.bind(var14)(var4);
                var22 = var4.Easing;
                var4 = var22.bezier;
                var16 = 0.4;
                var15 = 0.2;
                var27 = var22;
                var26 = var16;
                var25 = 0;
                var24 = var15;
                var23 = var12;
                var4 = var27[var4](var26, var25, var24, var23, var22);
                var10['easing'] = var4;
                var4 = 0.5;
                var4 = var11.bind(var21)(var4, var10);
                var1 = var19[var1];
                var11 = var18.bind(var14)(var1);
                var10 = var11.withTiming;
                var1 = {};
                var1['duration'] = var20;
                var13 = var19[var13];
                var13 = var18.bind(var14)(var13);
                var14 = var13.Easing;
                var13 = var14.bezier;
                var27 = var14;
                var26 = var16;
                var25 = 0;
                var13 = var27[var13](var26, var25, var24, var23, var22);
                var1['easing'] = var13;
                var1 = var10.bind(var11)(var12, var1);
                var4 = var8.bind(var9)(var7, var4, var1);
                var1 = -1;
                var1 = var5.bind(var6)(var4, var1);
                var3['scale'] = var1;
                var1 = new Array(1);
                var1[0] = var3;
                var2['transform'] = var1;
                var1 = var2;
                _fun0003_ip = 14; continue _fun0003;
case 12:
                var3 = new Array(0);
                var2['transform'] = var3;
                var1 = var2;
case 14:
                return var1;
            }
        };
        var8 = {};
        var8['useReducedMotion'] = var9;
        var9 = var13[var5];
        var9 = var12.bind(var4)(var9);
        var9 = var9.withRepeat;
        var8['withRepeat'] = var9;
        var9 = var13[var5];
        var9 = var12.bind(var4)(var9);
        var9 = var9.withSequence;
        var8['withSequence'] = var9;
        var9 = 12;
        var9 = var13[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.withTiming;
        var8['withTiming'] = var9;
        var9 = var13[var5];
        var9 = var12.bind(var4)(var9);
        var9 = var9.Easing;
        var8['Easing'] = var9;
        var1['__closure'] = var8;
        var8 = 17454673879926.0;
        var1['__workletHash'] = var8;
        var8 = _closure1_slot12;
        var1['__initData'] = var8;
        var9 = var2.bind(var3)(var1);
        var3 = _closure1_slot10;
        var2 = _closure1_slot5;
        var1 = {};
        var8 = var7.container;
        var1['style'] = var8;
        var8 = _closure1_slot9;
        var6 = _closure1_slot1;
        var5 = var13[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.View;
        var5 = {};
        var10 = var7.pulse;
        var7 = new Array(2);
        var7[0] = var10;
        var7[1] = var9;
        var5['style'] = var7;
        var6 = var8.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var6 = 13;
        var6 = var13[var6];
        var6 = var12.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
        var9 = 14;
        var10 = var13[var9];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.JwIJMV;
        var9 = var10.bind(var11)(var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['ChannelHeaderLoadingIndicator'] = var2;
    return var1;
})();