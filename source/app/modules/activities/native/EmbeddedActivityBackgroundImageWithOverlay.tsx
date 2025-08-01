// app/modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ImageBackground;
    var _closure1_slot4 = var7;
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.StyleSheet;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'opacity': 0.6};
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BLACK;
    var9['backgroundColor'] = var10;
    var4['overlay'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = ['embedded_background'];
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EmbeddedActivityBackgroundImageWithOverlay(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.application;
            var8 = var1.dimensionsStyle;
            var11 = var1.borderRadius;
            var12 = var1.resizeMode;
            var5 = undefined;
            if(!(var12 === var5)) { _fun0001_ip = 37; continue _fun0001 }
 33:
            var12 = 'contain';
 37:
            var _closure2_slot0 = var5;
            var1 = _closure1_slot8;
            var9 = var1.bind(var5)();
            var4 = _closure1_slot3;
            var3 = var4.useState;
            var1 = false;
            var4 = var3.bind(var4)(var1);
            var3 = _closure1_slot2;
            var1 = 2;
            var4 = var3.bind(var5)(var4, var1);
            var1 = 0;
            var3 = var4[var1];
            var1 = 1;
            var1 = var4[var1];
            _closure2_slot0 = var1;
            var4 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 6;
            var1 = var10[var1];
            var4 = var4.bind(var5)(var1);
            var1 = {};
            var10 = null;
            var13 = var10 == var2;
            var14 = undefined;
            if(var13) { _fun0001_ip = 136; continue _fun0001 }
 131:
            var14 = var2.id;
 136:
            var15 = var10 != var14;
            var2 = '';
            var13 = var2;
            if(!var15) { _fun0001_ip = 153; continue _fun0001 }
 150:
            var13 = var14;
 153:
            var1['applicationId'] = var13;
            var13 = _closure1_slot9;
            var1['names'] = var13;
            var13 = 1024;
            var1['size'] = var13;
            var1 = var4.bind(var5)(var1);
            var14 = var1.url;
            var1 = null;
            if(var3) { _fun0001_ip = 347; continue _fun0001 }
 193:
            var3 = var10 == var14;
            var1 = null;
            if(var3) { _fun0001_ip = 347; continue _fun0001 }
 205:
            var1 = null;
            if(!(var2 !== var14)) { _fun0001_ip = 347; continue _fun0001 }
 214:
            var4 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var2['resizeMode'] = var12;
            var12 = {};
            var15 = var10 != var14;
            var13 = undefined;
            if(!var15) { _fun0001_ip = 243; continue _fun0001 }
 240:
            var13 = var14;
 243:
            var12['uri'] = var13;
            var2['source'] = var12;
            if(!(var10 == var8)) { _fun0001_ip = 266; continue _fun0001 }
 256:
            var10 = _closure1_slot6;
            var8 = var10.absoluteFillObject;
 266:
            var2['style'] = var8;
            var8 = {};
            var8['borderRadius'] = var11;
            var2['imageStyle'] = var8;
            var7 = function onError() {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2['onError'] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot5;
            var6 = {};
            var10 = var9.overlay;
            var9 = new Array(2);
            var9[0] = var10;
            var10 = {};
            var10['borderRadius'] = var11;
            var9[1] = var10;
            var6['style'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 347:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();