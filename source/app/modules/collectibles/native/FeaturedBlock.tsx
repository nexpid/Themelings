// app/modules/collectibles/native/FeaturedBlock.tsx
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
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ScrollView;
    var _closure1_slot4 = var8;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 3;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var8 = var8.spacing;
    var11 = var8.PX_16;
    var _closure1_slot7 = var11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.spacing;
    var12 = var4.PX_12;
    var _closure1_slot8 = var12;
    var4 = 4;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'display': 'flex', 'width': '100%', 'flexDirection': 'row', 'flexWrap': 'wrap'};
    var10['gap'] = var12;
    var10['paddingHorizontal'] = var11;
    var7['container'] = var10;
    var10 = {'flex': 1, 'flexBasis': 400, 'maxWidth': '100%'};
    var7['featuredSubblock'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = {};
            var2 = {};
            var4 = _closure1_slot8;
            var2['gap'] = var4;
            var3 = _closure1_slot7;
            var2['paddingHorizontal'] = var3;
            var3 = 'row';
            var2['flexDirection'] = var3;
            var1['container'] = var2;
            var2 = {};
            var3 = undefined;
            if(!(var3 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = {};
            var4 = 1;
            var3['flex'] = var4;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = {};
            var4['width'] = var5;
            var3 = var4;
case 4:
            var7 = var2;
            var6 = var3;
            var3 = copyDataProperties(var7, var6);
            var1['featuredSubblock'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = function Subblocks(arg1) {
        var3 = arg1;
        var2 = var3.featuredBlock;
        var3 = var3.style;
        var _closure2_slot0 = var3;
        var3 = var2.subblocks;
        var2 = var3.map;
        var1 = function(arg1, arg2) {
            var5 = arg2;
            var4 = _closure1_slot6;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 5;
            var1 = var10[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.CollectiblesAnalyticsProvider;
            var1 = {};
            var6 = {};
            var6['tilePosition'] = var5;
            var1['newValue'] = var6;
            var7 = _closure1_slot5;
            var6 = {};
            var9 = _closure2_slot0;
            var6['style'] = var9;
            var9 = _closure1_slot1;
            var8 = 6;
            var8 = var10[var8];
            var9 = var9.bind(var3)(var8);
            var8 = {};
            var10 = arg1;
            var8['subblock'] = var10;
            var8 = var4.bind(var3)(var9, var8);
            var6['children'] = var8;
            var6 = var4.bind(var3)(var7, var6);
            var1['children'] = var6;
            var1 = var4.bind(var3)(var2, var1, var5);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot11 = var4;
    var4 = function FeaturedBlockStatic(arg1) {
        var1 = arg1;
        var8 = var1.featuredBlock;
        var1 = _closure1_slot9;
        var4 = undefined;
        var7 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = var7.container;
        var1['style'] = var6;
        var6 = _closure1_slot11;
        var5 = {};
        var5['featuredBlock'] = var8;
        var7 = var7.featuredSubblock;
        var5['style'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var4;
    var4 = function FeaturedBlockScroll(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var9 = var2.featuredBlock;
            var _closure2_slot0 = var9;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var7 = var2.width;
            var _closure2_slot1 = var7;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = var9.subblocks;
            var8 = var2.length;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var7;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var2 = var2.subblocks;
                    var6 = var2.length;
                    var3 = _closure2_slot1;
                    var4 = _closure1_slot7;
                    var2 = 2;
                    var2 = var2 * var4;
                    var4 = var3 - var2;
                    var2 = global;
                    var7 = var2.Math;
                    var5 = var7.min;
                    var3 = 480;
                    var2 = 0.9;
                    var2 = var2 * var4;
                    var2 = var5.bind(var7)(var3, var2);
                    var3 = var6 * var2;
                    var5 = 1;
                    var5 = var6 - var5;
                    var1 = _closure1_slot8;
                    var1 = var5 * var1;
                    var3 = var3 + var1;
                    var1 = undefined;
                    if(!(var3 > var4)) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var1 = var2;
case 5:
                    return var1;
                }
            };
            var7 = var3.bind(var4)(var1, var2);
            var1 = _closure1_slot10;
            var8 = var1.bind(var5)(var7);
            var1 = null;
            if(!(var1 != var7)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {'horizontal': true, 'contentContainerStyle': null, 'showsHorizontalScrollIndicator': false, 'decelerationRate': 'fast'};
            var4 = var8.container;
            var1['contentContainerStyle'] = var4;
            var4 = _closure1_slot8;
            var4 = var7 + var4;
            var1['snapToInterval'] = var4;
            var7 = _closure1_slot11;
            var4 = {};
            var4['featuredBlock'] = var9;
            var10 = var8.featuredSubblock;
            var4['style'] = var10;
            var4 = var3.bind(var5)(var7, var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0002_ip = 9; continue _fun0002;
case 7:
            var4 = _closure1_slot6;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var8.container;
            var2['style'] = var7;
            var7 = _closure1_slot11;
            var6 = {};
            var6['featuredBlock'] = var9;
            var8 = var8.featuredSubblock;
            var6['style'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 9:
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/FeaturedBlock.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var9 = var1.featuredBlock;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 8;
            var1 = var8[var1];
            var4 = undefined;
            var2 = var7.bind(var4)(var1);
            var1 = 'featured block';
            var1 = var2.bind(var4)(var1);
            var2 = 9;
            var3 = var8[var2];
            var5 = var7.bind(var4)(var3);
            var3 = 10;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.COLLECTIBLES_SHOP_FEATURED_BLOCK;
            var3 = var5.bind(var4)(var3);
            var7 = var3.analyticsLocations;
            var3 = _closure1_slot6;
            var5 = _closure1_slot0;
            var2 = var8[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.AnalyticsLocationProvider;
            var5 = {};
            var5['value'] = var7;
            var8 = _closure1_slot6;
            if(var1) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var7 = _closure1_slot12;
            var1 = {};
            var1['featuredBlock'] = var9;
            var1 = var8.bind(var4)(var7, var1);
            var5['children'] = var1;
            var1 = var5;
            _fun0004_ip = 12; continue _fun0004;
case 10:
            var7 = _closure1_slot13;
            var6 = {};
            var6['featuredBlock'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5['children'] = var6;
            var1 = var5;
case 12:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();