// app/modules/app_icons/native/AppIcon.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot3 = var7;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getIconById;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'hidden';
    var9['overflow'] = var10;
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_TERTIARY;
    var9['borderColor'] = var10;
    var4['container'] = var9;
    var9 = {'resizeMode': 'contain', 'height': '100%', 'width': '100%'};
    var4['image'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_icons/native/AppIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AppIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.id;
            var12 = var1.size;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var12 = 56;
case 2:
            var9 = var1.style;
            var1 = _closure1_slot7;
            var8 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var3 = var1.bind(var4)();
            var1 = _closure1_slot5;
            var7 = var1.bind(var4)(var2);
            var2 = _closure1_slot0;
            var1 = 7;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isThemeDark;
            var1 = var1.bind(var2)(var3);
            var11 = 1;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = 0;
case 4:
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var10 = var8.container;
            var6 = new Array(3);
            var6[0] = var10;
            var10 = {};
            var10['width'] = var12;
            var10['height'] = var12;
            var10['borderWidth'] = var11;
            var6[1] = var10;
            var6[2] = var9;
            var1['style'] = var6;
            var6 = _closure1_slot3;
            var5 = {};
            var8 = var8.image;
            var5['style'] = var8;
            var7 = var7.iconSource;
            var5['source'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();