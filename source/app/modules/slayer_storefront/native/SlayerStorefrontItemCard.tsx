// app/modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ImageBackground;
    var _closure1_slot4 = var7;
    var4 = var4.View;
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
    var4 = {};
    var9 = {'borderRadius': null, 'overflow': 'hidden', 'shadowColor': '#000', 'shadowOffset': null, 'shadowOpacity': 0.3, 'shadowRadius': 8, 'elevation': 8};
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var9['borderRadius'] = var10;
    var10 = {'width': 0, 'height': 4};
    var9['shadowOffset'] = var10;
    var4['cardContainer'] = var9;
    var9 = {'width': '100%', 'height': '100%', 'alignItems': 'center', 'justifyContent': 'center'};
    var4['cardImageBackground'] = var9;
    var9 = {'width': '100%', 'height': '100%', 'resizeMode': 'cover'};
    var4['cardImage'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SlayerStorefrontItemCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.sku;
            var _closure2_slot0 = var1;
            var4 = var3.size;
            var5 = undefined;
            if(!(var4 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = 220;
case 2:
            var8 = var3.containerStyle;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var3 = _closure1_slot7;
            var12 = var3.bind(var5)();
            var6 = 'object';
            var3 = typeof var4;
            var11 = var4;
            if(!(var6 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = {};
            var3['width'] = var4;
            var3['height'] = var4;
            var11 = var3;
case 4:
            var3 = global;
            var7 = var3.Math;
            var6 = var7.max;
            var4 = var11.width;
            var3 = var11.height;
            var3 = var6.bind(var7)(var4, var3);
            _closure2_slot1 = var3;
            var7 = _closure1_slot3;
            var9 = var7.useMemo;
            var6 = new Array(2);
            var6[0] = var1;
            var6[1] = var3;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getCardImageURL;
                var2 = _closure2_slot0;
                var1 = {};
                var5 = _closure2_slot1;
                var1['size'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var15 = var9.bind(var7)(var4, var6);
            var6 = var7.useMemo;
            var4 = new Array(2);
            var4[0] = var1;
            var4[1] = var3;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getCardBackgroundImageURL;
                var2 = _closure2_slot0;
                var1 = {};
                var5 = _closure2_slot1;
                var1['size'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var14 = var6.bind(var7)(var3, var4);
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useDominantColorFromImage;
            var6 = null;
            var9 = var6 == var15;
            var3 = undefined;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = var15.toString;
            var3 = var9.bind(var15)();
case 6:
            var9 = var4.bind(var7)(var3);
            _closure2_slot2 = var9;
            var7 = _closure1_slot3;
            var4 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 7;
                    var1 = var6[var3];
                    var4 = undefined;
                    var7 = var5.bind(var4)(var1);
                    var1 = _closure2_slot2;
                    var8 = var7.bind(var4)(var1);
                    var7 = var8.brighten;
                    var1 = 20;
                    var8 = var7.bind(var8)(var1);
                    var7 = var8.saturate;
                    var1 = 30;
                    var8 = var7.bind(var8)(var1);
                    var7 = var8.setAlpha;
                    var1 = 0.8;
                    var7 = var7.bind(var8)(var1);
                    var1 = var7.toRgbString;
                    var7 = var1.bind(var7)();
                    var1 = new Array(2);
                    var1[0] = var7;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var2 = _closure2_slot2;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.saturate;
                    var2 = 50;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.setAlpha;
                    var2 = 0.9;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.toRgbString;
                    var2 = var2.bind(var3)();
                    var1[1] = var2;
                    _fun0002_ip = 10; continue _fun0002;
case 8:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var2 = var6[var3];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.colors;
                    var7 = var2.BACKGROUND_SURFACE_HIGH;
                    var2 = new Array(2);
                    var2[0] = var7;
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.colors;
                    var3 = var3.BACKGROUND_BASE_LOWEST;
                    var2[1] = var3;
                    var1 = var2;
case 10:
                    return var1;
                }
            };
            var9 = var4.bind(var7)(var2, var3);
            var2 = var6 == var1;
            var1 = null;
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var6 == var15;
            var1 = null;
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var4 = _closure1_slot6;
            var3 = _closure1_slot5;
            var2 = {};
            var13 = var12.cardContainer;
            var7 = new Array(3);
            var7[0] = var13;
            var7[1] = var11;
            var7[2] = var8;
            var2['style'] = var7;
            if(!(var6 == var14)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var8 = _closure1_slot6;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 9;
            var6 = var13[var6];
            var7 = var11.bind(var5)(var6);
            var6 = {};
            var6['colors'] = var9;
            var9 = {'x': 0, 'y': 0};
            var6['start'] = var9;
            var9 = {'x': 1, 'y': 1};
            var6['end'] = var9;
            var9 = var12.cardImageBackground;
            var6['style'] = var9;
            var9 = 8;
            var9 = var13[var9];
            var11 = var11.bind(var5)(var9);
            var9 = {};
            var13 = {};
            var16 = var15.toString;
            var16 = var16.bind(var15)();
            var13['uri'] = var16;
            var9['source'] = var13;
            var13 = var12.cardImage;
            var9['style'] = var13;
            var9 = var8.bind(var5)(var11, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            _fun0001_ip = 16; continue _fun0001;
case 14:
            var9 = _closure1_slot6;
            var8 = _closure1_slot4;
            var7 = {};
            var11 = {};
            var13 = var14.toString;
            var13 = var13.bind(var14)();
            var11['uri'] = var13;
            var7['source'] = var11;
            var11 = var12.cardImageBackground;
            var7['style'] = var11;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var10 = 8;
            var10 = var13[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var13 = {};
            var14 = var15.toString;
            var14 = var14.bind(var15)();
            var13['uri'] = var14;
            var10['source'] = var13;
            var12 = var12.cardImage;
            var10['style'] = var12;
            var10 = var9.bind(var5)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var5)(var8, var7);
case 16:
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 11:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();