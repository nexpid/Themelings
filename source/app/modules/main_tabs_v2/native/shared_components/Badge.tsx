// app/modules/main_tabs_v2/native/shared_components/Badge.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var13 = native3;
    var3 = native6;
    var7 = native7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = native4;
    var1 = undefined;
    var8 = var2.bind(var1)(var5);
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot0 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot1 = var2;
    var2 = 3;
    var2 = var7[var2];
    var10 = var6.bind(var1)(var2);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {};
    var2 = 4;
    var12 = var7[var2];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BRAND;
    var11['backgroundColor'] = var12;
    var5['badge'] = var11;
    var11 = {};
    var12 = var7[var2];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_ACTIVE;
    var11['backgroundColor'] = var12;
    var5['badgeClassic'] = var11;
    var11 = {'alignItems': 'center', 'justifyContent': 'center'};
    var5['mask'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot2 = var5;
    var5 = var8.memo;
    var4 = function Badge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.size;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 17; continue _fun0001 }
 14:
            var10 = 12;
 17:
            var2 = var1.maskSize;
            if(!(var2 === var4)) { _fun0001_ip = 30; continue _fun0001 }
 27:
            var2 = 4;
 30:
            var8 = var1.classic;
            if(!(var8 === var4)) { _fun0001_ip = 42; continue _fun0001 }
 40:
            var8 = false;
 42:
            var5 = var1.maskColor;
            var11 = var1.style;
            var7 = var1.badgeStyle;
            var3 = _closure1_slot2;
            var6 = var3.bind(var4)();
            var9 = 2;
            var2 = var9 * var2;
            var3 = var10 + var2;
            var2 = null;
            var2 = var2 != var5;
            var12 = undefined;
            if(!var2) { _fun0001_ip = 117; continue _fun0001 }
 92:
            var2 = {};
            var2['backgroundColor'] = var5;
            var2['height'] = var3;
            var2['width'] = var3;
            var3 = var3 / var9;
            var2['borderRadius'] = var3;
            var12 = var2;
 117:
            var3 = _closure1_slot1;
            var2 = _closure1_slot0;
            var1 = {};
            var13 = var6.mask;
            var5 = new Array(3);
            var5[0] = var13;
            var5[1] = var12;
            var5[2] = var11;
            var1['style'] = var5;
            var5 = {};
            if(var8) { _fun0001_ip = 166; continue _fun0001 }
 158:
            var8 = var6.badge;
            _fun0001_ip = 172; continue _fun0001;
 166:
            var8 = var6.badgeClassic;
 172:
            var6 = new Array(3);
            var6[0] = var8;
            var8 = {};
            var8['height'] = var10;
            var8['width'] = var10;
            var9 = var10 / var9;
            var8['borderRadius'] = var9;
            var6[1] = var8;
            var6[2] = var7;
            var5['style'] = var6;
            var5 = var3.bind(var4)(var2, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/shared_components/Badge.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = 12;
    var3['DEFAULT_BADGE_SIZE'] = var4;
    var4 = 8;
    var3['CHANNEL_BADGE_SIZE'] = var4;
    var3['DEFAULT_BADGE_MASK_SIZE'] = var2;
    return var1;
})();