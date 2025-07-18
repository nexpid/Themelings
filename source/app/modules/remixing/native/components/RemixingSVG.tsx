// app/modules/remixing/native/components/RemixingSVG.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
    var4 = 'modules/remixing/native/components/RemixingSVG.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var19 = var2.id;
            var14 = var2.source;
            var8 = var2.size;
            var9 = var2.position;
            var18 = var2.transform;
            var17 = var2.transformMap;
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var15 = false;
            var4 = var3.bind(var4)(var15);
            var13 = _closure1_slot3;
            var5 = undefined;
            var3 = 2;
            var4 = var13.bind(var5)(var4, var3);
            var3 = 0;
            var6 = var4[var3];
            var7 = 1;
            var4 = var4[var7];
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 3;
            var10 = var16[var11];
            var12 = var12.bind(var5)(var10);
            var10 = var12.useSVG;
            var10 = var10.bind(var12)(var14);
            var _closure2_slot0 = var10;
            var14 = _closure1_slot1;
            var12 = 4;
            var12 = var16[var12];
            var12 = var14.bind(var5)(var12);
            var12 = var12.bind(var5)(var19, var17, var18);
            var17 = 5;
            var17 = var16[var17];
            var17 = var14.bind(var5)(var17);
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
            var1 = var17.bind(var5)(var1);
            var1 = 6;
            var1 = var16[var1];
            var14 = var14.bind(var5)(var1);
            var1 = {};
            var1['autoplay'] = var15;
            var1 = var14.bind(var5)(var12, var1);
            var1 = var13.bind(var5)(var1, var7);
            var3 = var1[var3];
            var1 = null;
            var7 = var1 == var10;
            if(var7) { _fun0001_ip = 401; continue _fun0001 }
 210:
            if(var6) { _fun0001_ip = 224; continue _fun0001 }
 213:
            var3 = var3.bind(var5)();
            var3 = true;
            var3 = var4.bind(var5)(var3);
 224:
            var4 = _closure1_slot5;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = var6[var11];
            var2 = var7.bind(var5)(var2);
            var3 = var2.Group;
            var2 = {};
            var2['transform'] = var12;
            var12 = 7;
            var12 = var6[var12];
            var14 = var7.bind(var5)(var12);
            var13 = var14.centerOfRect;
            var12 = var6[var11];
            var19 = var7.bind(var5)(var12);
            var18 = var19.rect;
            var23 = var9.x;
            var22 = var9.y;
            var21 = var8.width;
            var20 = var8.height;
            var24 = var19;
            var12 = var24[var18](var23, var22, var21, var20, var19);
            var12 = var13.bind(var14)(var12);
            var2['origin'] = var12;
            var6 = var6[var11];
            var6 = var7.bind(var5)(var6);
            var7 = var6.ImageSVG;
            var6 = {};
            var6['svg'] = var10;
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
 401:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();