// app/modules/profile_customization/native/Banner.tsx
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
    var4 = var4.BANNER_HEIGHT;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = '100%';
    var9['width'] = var10;
    var4['root'] = var9;
    var9 = {'width': '100%', 'height': '100%'};
    var4['image'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_customization/native/Banner.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ProfileBanner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.style;
            var9 = var1.bannerSource;
            var11 = var1.backgroundColor;
            var2 = var1.bannerSafeArea;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = 0;
case 2:
            var1 = var1.bannerHeight;
            if(!(var1 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot4;
case 4:
            var3 = _closure1_slot6;
            var10 = var3.bind(var4)();
            var8 = {};
            var5 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 5;
            var3 = var12[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.int2hex;
            var3 = var3.bind(var5)(var11);
            var8['backgroundColor'] = var3;
            var1 = var1 + var2;
            var8['height'] = var1;
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var11 = var10.root;
            var5 = new Array(3);
            var5[0] = var11;
            var5[1] = var8;
            var5[2] = var7;
            var1['style'] = var5;
            var5 = null;
            var7 = var5 != var9;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 6;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var10 = var10.image;
            var6['style'] = var10;
            var6['source'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 6:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();