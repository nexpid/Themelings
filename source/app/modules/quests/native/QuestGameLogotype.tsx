// app/modules/quests/native/QuestGameLogotype.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var9 = true;
    var4['value'] = var9;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var4 = var4.Image;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = {};
    var8 = 4;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var14 = var8.springSlow;
    var15 = var4;
    var8 = copyDataProperties(var15, var14);
    var8 = 'overshootClamping';
    var4[var8] = var9;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 6;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var10['marginBottom'] = var11;
    var4['logo'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var8 = "function QuestGameLogotypeTsx1(){const{withSpring,logoDimensionStyles,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(logoDimensionStyles==null?0:1,SPRING_CONFIG,'animate-always')};}";
    var4['code'] = var8;
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var11 = var3.assetUrl;
            var _closure2_slot0 = var11;
            var13 = var3.width;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0001_ip = 29; continue _fun0001 }
 26:
            var13 = 120;
 29:
            var _closure2_slot1 = var13;
            var8 = var3.height;
            var _closure2_slot2 = var8;
            var6 = var3.maxWidth;
            var _closure2_slot3 = var6;
            var1 = var3.maxHeight;
            var _closure2_slot4 = var1;
            var7 = var3.style;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var3 = _closure1_slot9;
            var12 = var3.bind(var4)();
            var10 = _closure1_slot4;
            var5 = var10.useState;
            var3 = null;
            var14 = var5.bind(var10)(var3);
            var5 = _closure1_slot3;
            var3 = 2;
            var5 = var5.bind(var4)(var14, var3);
            var3 = 0;
            var14 = var5[var3];
            _closure2_slot5 = var14;
            var3 = 1;
            var3 = var5[var3];
            _closure2_slot6 = var3;
            var5 = var10.useMemo;
            var3 = new Array(5);
            var3[0] = var14;
            var3[1] = var13;
            var3[2] = var8;
            var3[3] = var6;
            var3[4] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot5;
                    var5 = null;
                    if(!(var5 == var1)) { _fun0002_ip = 17; continue _fun0002 }
 13:
                    var1 = undefined;
                    return var1;
 17:
                    var1 = _closure2_slot5;
                    var3 = var1.width;
                    var1 = _closure2_slot5;
                    var1 = var1.height;
                    var3 = var3 / var1;
                    var1 = _closure2_slot2;
                    if(!(var5 == var1)) { _fun0002_ip = 67; continue _fun0002 }
 47:
                    var1 = {};
                    var4 = _closure2_slot1;
                    var6 = var4 / var3;
                    var1['height'] = var6;
                    var1['width'] = var4;
                    _fun0002_ip = 88; continue _fun0002;
 67:
                    var4 = {};
                    var6 = _closure2_slot2;
                    var4['height'] = var6;
                    var6 = var6 * var3;
                    var4['width'] = var6;
                    var1 = var4;
 88:
                    var4 = _closure2_slot3;
                    if(!(var5 != var4)) { _fun0002_ip = 145; continue _fun0002 }
 96:
                    var4 = global;
                    var8 = var4.Math;
                    var7 = var8.min;
                    var6 = _closure2_slot3;
                    var4 = var1.width;
                    var4 = var7.bind(var8)(var6, var4);
                    var1['width'] = var4;
                    var4 = var1.width;
                    var4 = var4 / var3;
                    var1['height'] = var4;
 145:
                    var4 = _closure2_slot4;
                    if(!(var5 != var4)) { _fun0002_ip = 202; continue _fun0002 }
 153:
                    var4 = global;
                    var6 = var4.Math;
                    var5 = var6.min;
                    var4 = _closure2_slot4;
                    var2 = var1.height;
                    var2 = var5.bind(var6)(var4, var2);
                    var1['height'] = var2;
                    var2 = var1.height;
                    var2 = var2 * var3;
                    var1['width'] = var2;
 202:
                    return var1;
                }
            };
            var13 = var5.bind(var10)(var1, var3);
            _closure2_slot7 = var13;
            var5 = var10.useEffect;
            var3 = new Array(1);
            var3[0] = var11;
            var1 = function() {
                var4 = _closure1_slot6;
                var3 = var4.getSize;
                var2 = _closure2_slot0;
                var1 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var4 = arg1;
                        var1 = arg2;
                        var3 = 0;
                        var2 = var4 > var3;
                        if(!var2) { _fun0003_ip = 19; continue _fun0003 }
 15:
                        var2 = var1 > var3;
 19:
                        if(!var2) { _fun0003_ip = 46; continue _fun0003 }
 22:
                        var3 = _closure2_slot6;
                        var2 = {};
                        var2['width'] = var4;
                        var2['height'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
 46:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var1 = var5.bind(var10)(var1, var3);
            var16 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 7;
            var3 = var6[var1];
            var8 = var16.bind(var4)(var3);
            var5 = var8.useAnimatedStyle;
            var3 = function P() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 8;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.withSpring;
                    var4 = _closure2_slot7;
                    var3 = null;
                    var3 = var3 == var4;
                    var4 = 1;
                    if(!var3) { _fun0004_ip = 53; continue _fun0004 }
 51:
                    var4 = 0;
 53:
                    var3 = _closure1_slot8;
                    var2 = 'animate-always';
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var14 = {};
            var15 = 8;
            var15 = var6[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.withSpring;
            var14['withSpring'] = var15;
            var14['logoDimensionStyles'] = var13;
            var15 = _closure1_slot8;
            var14['SPRING_CONFIG'] = var15;
            var3['__closure'] = var14;
            var14 = 11242802634598.0;
            var3['__workletHash'] = var14;
            var14 = _closure1_slot10;
            var3['__initData'] = var14;
            var8 = var5.bind(var8)(var3);
            var5 = var10.useMemo;
            var3 = new Array(1);
            var3[0] = var11;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = var3.endsWith;
                var1 = '.svg';
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var5.bind(var10)(var2, var3);
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var1['style'] = var6;
            var8 = _closure1_slot7;
            if(var5) { _fun0001_ip = 457; continue _fun0001 }
 394:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 10;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var7 = {};
            var7['uri'] = var11;
            var5['source'] = var7;
            var7 = new Array(2);
            var7[0] = var13;
            var10 = var12.logo;
            var7[1] = var10;
            var5['style'] = var7;
            var5 = var8.bind(var4)(var6, var5);
            _fun0001_ip = 546; continue _fun0001;
 457:
            var7 = _closure1_slot5;
            var6 = {};
            var10 = new Array(2);
            var10[0] = var13;
            var12 = var12.logo;
            var10[1] = var12;
            var6['style'] = var10;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 9;
            var9 = var12[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.SvgUri;
            var9 = {'height': '100%', 'width': '100%'};
            var9['uri'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 546:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestGameLogotype.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();