// app/modules/remixing/native/components/RemixingImage.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/components/RemixingImage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var20 = var2.id;
            var15 = var2.source;
            var8 = var2.size;
            var11 = var2.fit;
            var9 = var2.position;
            var19 = var2.transform;
            var18 = var2.transformMap;
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var16 = false;
            var4 = var3.bind(var4)(var16);
            var10 = _closure1_slot3;
            var5 = undefined;
            var3 = 2;
            var6 = var10.bind(var5)(var4, var3);
            var3 = 0;
            var4 = var6[var3];
            var7 = 1;
            var6 = var6[var7];
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 3;
            var12 = var17[var13];
            var14 = var14.bind(var5)(var12);
            var12 = var14.useImage;
            var12 = var12.bind(var14)(var15);
            var _closure2_slot0 = var12;
            var15 = _closure1_slot1;
            var14 = 4;
            var14 = var17[var14];
            var14 = var15.bind(var5)(var14);
            var14 = var14.bind(var5)(var20, var18, var19);
            var18 = 5;
            var18 = var17[var18];
            var18 = var15.bind(var5)(var18);
            var1 = function() {
                var1 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = _closure2_slot0;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 27; continue _fun0002 }
 13:
                        var2 = _closure2_slot0;
                        var1 = var2.dispose;
                        var1 = var1.bind(var2)();
 27:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var18.bind(var5)(var1);
            var1 = 6;
            var1 = var17[var1];
            var15 = var15.bind(var5)(var1);
            var1 = {};
            var1['autoplay'] = var16;
            var1 = var15.bind(var5)(var14, var1);
            var1 = var10.bind(var5)(var1, var7);
            var3 = var1[var3];
            var10 = null;
            var7 = var10 == var12;
            var1 = null;
            if(var7) { _fun0001_ip = 430; continue _fun0001 }
 220:
            if(var4) { _fun0001_ip = 234; continue _fun0001 }
 223:
            var4 = true;
            var4 = var6.bind(var5)(var4);
            var3 = var3.bind(var5)();
 234:
            var4 = _closure1_slot5;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = var6[var13];
            var2 = var7.bind(var5)(var2);
            var3 = var2.Group;
            var2 = {};
            var2['transform'] = var14;
            var14 = 7;
            var14 = var6[var14];
            var16 = var7.bind(var5)(var14);
            var15 = var16.centerOfRect;
            var14 = var6[var13];
            var21 = var7.bind(var5)(var14);
            var20 = var21.rect;
            var25 = var9.x;
            var24 = var9.y;
            var23 = var8.width;
            var22 = var8.height;
            var26 = var21;
            var14 = var26[var20](var25, var24, var23, var22, var21);
            var14 = var15.bind(var16)(var14);
            var2['origin'] = var14;
            var6 = var6[var13];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Image;
            var6 = {};
            var6['image'] = var12;
            var12 = var10 != var11;
            var10 = 'contain';
            if(!var12) { _fun0001_ip = 373; continue _fun0001 }
 370:
            var10 = var11;
 373:
            var6['fit'] = var10;
            var10 = var9.x;
            var6['x'] = var10;
            var9 = var9.y;
            var6['y'] = var9;
            var9 = var8.height;
            var6['height'] = var9;
            var8 = var8.width;
            var6['width'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 430:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();