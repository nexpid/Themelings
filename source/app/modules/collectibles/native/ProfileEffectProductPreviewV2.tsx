// app/modules/collectibles/native/ProfileEffectProductPreviewV2.tsx
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var2 = {'position': 'relative', 'flex': 1, 'alignItems': 'center', 'overflow': 'hidden'};
            var1['container'] = var2;
            var2 = {};
            var3 = '80%';
            var4 = arg1;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = '66%';
case 2:
            var2['width'] = var3;
            var1['profilePreview'] = var2;
            var2 = {'position': 'absolute', 'right': 0, 'left': 0, 'top': 0, 'bottom': 0, 'pointerEvents': 'none'};
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 4;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.colors;
            var3 = var3.BACKGROUND_BASE_LOWER;
            var2['color'] = var3;
            var1['gradient'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProfileEffectProductPreviewV2.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = var1.product;
            var11 = var1.width;
            var7 = var1.showGradient;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var7 = false;
case 4:
            var2 = var1.shrinkPreview;
            if(!(var2 === var5)) { _fun0002_ip = 2; continue _fun0002 }
case 6:
            var2 = false;
case 2:
            var1 = _closure1_slot6;
            var12 = var1.bind(var5)(var2);
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var6 = var2.bind(var5)(var1);
            var1 = var6.useCurrentUser;
            var14 = var1.bind(var6)();
            var1 = 6;
            var1 = var4[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useShopProductItems;
            var1 = var1.bind(var2)(var3);
            var13 = var1.firstProfileEffect;
            var1 = null;
            var2 = var1 == var13;
            if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var12.container;
            var2['style'] = var6;
            var6 = 'box-none';
            var2['pointerEvents'] = var6;
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 7;
            var10 = var15[var6];
            var10 = var9.bind(var5)(var10);
            var16 = var10.intl;
            var10 = var16.formatToPlainString;
            var6 = var15[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var9 = var6.mbHmX2;
            var6 = {};
            var17 = var13.accessibilityLabel;
            var6['a11y_text'] = var17;
            var6 = var10.bind(var16)(var9, var6);
            var2['accessibilityLabel'] = var6;
            var6 = 'image';
            var2['accessibilityRole'] = var6;
            var10 = _closure1_slot4;
            var9 = _closure1_slot1;
            var6 = 8;
            var6 = var15[var6];
            var9 = var9.bind(var5)(var6);
            var6 = {};
            var6['user'] = var14;
            var14 = var12.profilePreview;
            var6['style'] = var14;
            var6['pendingProfileEffectRecord'] = var13;
            var6['maxWidth'] = var11;
            var11 = true;
            var6['gradientFullHeight'] = var11;
            var9 = var10.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            if(!var7) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var10 = _closure1_slot4;
            var9 = _closure1_slot1;
            var11 = _closure1_slot2;
            var8 = 9;
            var8 = var11[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var11 = var12.gradient;
            var8['style'] = var11;
            var11 = {'x': 0, 'y': 0.6};
            var8['start'] = var11;
            var11 = {'x': 0, 'y': 1};
            var8['end'] = var11;
            var11 = var12.gradient;
            var15 = var11.color;
            var11 = global;
            var11 = var11.HermesInternal;
            var14 = var11.concat;
            var13 = '';
            var11 = '00';
            var13 = var14.bind(var13)(var15, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var12 = var12.gradient;
            var12 = var12.color;
            var11[1] = var12;
            var8['colors'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 9:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 7:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();