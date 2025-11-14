// app/modules/checkpoint/native/components/CheckpointSlideIndicator.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var4 = function CheckpointStep(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var13 = var3.isSelected;
            var _closure2_slot0 = var13;
            var1 = var3.hasSeenStep;
            var _closure2_slot1 = var1;
            var9 = var3.icon;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var10 = _closure1_slot4;
            var8 = var10.useContext;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = 16;
            var5 = var3[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.CheckpointColorContext;
            var5 = var8.bind(var10)(var5);
            var8 = 17;
            var8 = var3[var8];
            var10 = var7.bind(var4)(var8);
            var8 = var10.useToken;
            var5 = var5.primaryColor;
            var12 = var8.bind(var10)(var5);
            var5 = _closure1_slot8;
            var15 = var5.bind(var4)();
            var5 = 18;
            var3 = var3[var5];
            var8 = var7.bind(var4)(var3);
            var7 = var8.useSharedValue;
            if(var13) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 0;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var3 = 1;
case 4:
            var10 = var7.bind(var8)(var3);
            _closure2_slot2 = var10;
            var3 = global;
            var3 = var3.HermesInternal;
            var8 = var3.concat;
            var7 = '';
            var3 = '80';
            var11 = var8.bind(var7)(var12, var3);
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var3 = new Array(3);
            var3[0] = var13;
            var3[1] = var1;
            var3[2] = var10;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var2 = _closure2_slot1;
                    var7 = 0;
                    if(!var2) { _fun0002_ip = 7; continue _fun0002 }
case 5:
                    var7 = 1;
case 7:
                    var4 = _closure2_slot2;
                    var3 = var4.set;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 19;
                    var2 = var9[var1];
                    var1 = undefined;
                    var6 = var8.bind(var1)(var2);
                    var5 = var6.withSpring;
                    var2 = 20;
                    var2 = var9[var2];
                    var2 = var8.bind(var1)(var2);
                    var2 = var2.SUBTLE_SPRING;
                    var2 = var5.bind(var6)(var7, var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var7.bind(var8)(var1, var3);
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = var1[var5];
            var7 = var7.bind(var4)(var3);
            var3 = var7.useAnimatedStyle;
            var2 = function f() {
                var1 = {};
                var3 = {};
                var4 = _closure2_slot2;
                var2 = var4.get;
                var2 = var2.bind(var4)();
                var3['scale'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var8 = {};
            var8['scaleValue'] = var10;
            var2['__closure'] = var8;
            var8 = 2820828604886.0;
            var2['__workletHash'] = var8;
            var8 = _closure1_slot9;
            var2['__initData'] = var8;
            var10 = var3.bind(var7)(var2);
            var2 = _closure1_slot1;
            var3 = var1[var5];
            var8 = var2.bind(var4)(var3);
            var7 = var8.createAnimatedComponent;
            var3 = 21;
            var3 = var1[var3];
            var3 = var2.bind(var4)(var3);
            var8 = var7.bind(var8)(var3);
            var3 = _closure1_slot6;
            var1 = var1[var5];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var5 = null;
            if(!(var5 == var9)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var14 = _closure1_slot6;
            var7 = _closure1_slot5;
            var5 = {};
            var16 = var15.unknownIcon;
            var15 = new Array(2);
            var15[0] = var16;
            var16 = {};
            var16['borderColor'] = var11;
            var15[1] = var16;
            var5['style'] = var15;
            var5 = var14.bind(var4)(var7, var5);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var7 = _closure1_slot6;
            var6 = {};
            var6['source'] = var9;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            if(!var13) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var11 = var12;
case 11:
            var10['tintColor'] = var11;
            var9[1] = var10;
            var6['style'] = var9;
            var5 = var7.bind(var4)(var8, var6);
case 10:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.CheckpointSlides;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot6 = var5;
    var5 = {};
    var10 = var8.WELCOME;
    var9 = 5;
    var9 = var7[var9];
    var9 = var12.bind(var1)(var9);
    var5[var10] = var9;
    var10 = var8.MESSAGES;
    var9 = 6;
    var9 = var7[var9];
    var9 = var12.bind(var1)(var9);
    var5[var10] = var9;
    var10 = var8.EMOJIS;
    var9 = 7;
    var9 = var7[var9];
    var9 = var12.bind(var1)(var9);
    var5[var10] = var9;
    var10 = var8.VOICE;
    var9 = 8;
    var9 = var7[var9];
    var9 = var12.bind(var1)(var9);
    var5[var10] = var9;
    var10 = var8.GUILDS;
    var9 = 9;
    var9 = var7[var9];
    var9 = var12.bind(var1)(var9);
    var5[var10] = var9;
    var10 = var8.FRIENDS;
    var9 = 10;
    var9 = var7[var9];
    var9 = var12.bind(var1)(var9);
    var5[var10] = var9;
    var10 = var8.GAMING;
    var9 = 11;
    var9 = var7[var9];
    var9 = var12.bind(var1)(var9);
    var5[var10] = var9;
    var10 = var8.QUESTS;
    var9 = 12;
    var9 = var7[var9];
    var9 = var12.bind(var1)(var9);
    var5[var10] = var9;
    var9 = var8.END;
    var8 = 13;
    var8 = var7[var8];
    var8 = var12.bind(var1)(var8);
    var5[var9] = var8;
    var _closure1_slot7 = var5;
    var5 = 14;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'flexDirection': 'row', 'gap': 4};
    var5['container'] = var10;
    var10 = {'borderRadius': null, 'borderWidth': 2, 'width': 8, 'height': 8, 'margin': 8};
    var11 = 15;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var10['borderRadius'] = var11;
    var5['unknownIcon'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot8 = var5;
    var5 = {};
    var8 = 'function CheckpointSlideIndicatorTsx1(){const{scaleValue}=this.__closure;return{transform:[{scale:scaleValue.get()}]};}';
    var5['code'] = var8;
    var _closure1_slot9 = var5;
    var5 = 24;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/checkpoint/native/components/CheckpointSlideIndicator.tsx';
    var5 = var6.bind(var7)(var5);
    var3['CheckpointStep'] = var4;
    var2 = function CheckpointSlideIndicator(arg1) {
        var1 = arg1;
        var8 = var1.activeSlide;
        var _closure2_slot0 = var8;
        var2 = _closure1_slot8;
        var4 = undefined;
        var6 = var2.bind(var4)();
        var2 = global;
        var7 = var2.Number;
        var3 = var7.parseInt;
        var2 = 10;
        var10 = var3.bind(var7)(var8, var2);
        var _closure2_slot1 = var10;
        var3 = _closure1_slot4;
        var2 = var3.useState;
        var7 = var2.bind(var3)(var10);
        var3 = _closure1_slot3;
        var2 = 2;
        var7 = var3.bind(var4)(var7, var2);
        var2 = 0;
        var2 = var7[var2];
        var _closure2_slot2 = var2;
        var3 = 1;
        var3 = var7[var3];
        var _closure2_slot3 = var3;
        var3 = function useScreenIconsToRender() {
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 22;
            var1 = var5[var1];
            var3 = undefined;
            var1 = var4.bind(var3)(var1);
            var2 = var1.bind(var3)();
            var1 = 23;
            var1 = var5[var1];
            var1 = var4.bind(var3)(var1);
            var3 = var1.bind(var3)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var3 = arg1;
                var1 = {};
                var1['slide'] = var3;
                var2 = _closure1_slot7;
                var2 = var2[var3];
                var1['icon'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var3.bind(var4)();
        var9 = _closure1_slot4;
        var8 = var9.useEffect;
        var3 = new Array(2);
        var3[0] = var10;
        var3[1] = var2;
        var2 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = _closure2_slot2;
                if(!(var3 > var2)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var3 = _closure2_slot3;
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 13:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var8.bind(var9)(var2, var3);
        var3 = _closure1_slot6;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var6.container;
        var1['style'] = var6;
        var6 = var7.map;
        var5 = function(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var8 = var1.icon;
                var7 = var1.slide;
                var4 = _closure2_slot2;
                var1 = global;
                var6 = var1.Number;
                var5 = var6.parseInt;
                var3 = 10;
                var3 = var5.bind(var6)(var7, var3);
                var6 = var4 >= var3;
                var5 = _closure1_slot6;
                var4 = _closure1_slot10;
                var3 = {};
                var2 = _closure2_slot0;
                var2 = var2 === var7;
                var3['isSelected'] = var2;
                var2 = undefined;
                var7 = undefined;
                if(!var6) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var7 = var8;
case 15:
                var3['icon'] = var7;
                var3['hasSeenStep'] = var6;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var6 = 'step-indicator-';
                var1 = arg2;
                var1 = var7.bind(var6)(var1);
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            }
        };
        var5 = var6.bind(var7)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['CheckpointSlideIndicator'] = var2;
    return var1;
})();