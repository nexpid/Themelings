// app/modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var10 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var8 = 0;
    var4 = var6[var8];
    var1 = undefined;
    var11 = var5.bind(var1)(var4);
    var9 = var11.hexToRgba;
    var7 = 1;
    var4 = var6[var7];
    var4 = var10.bind(var1)(var4);
    var4 = var4.unsafe_rawColors;
    var4 = var4.BLACK_460;
    var9 = var9.bind(var11)(var4);
    var4 = new Array(2);
    var4[0] = var9;
    var8 = var6[var8];
    var9 = var5.bind(var1)(var8);
    var8 = var9.hexToRgba;
    var7 = var6[var7];
    var7 = var10.bind(var1)(var7);
    var7 = var7.unsafe_rawColors;
    var7 = var7.BLACK_460;
    var7 = var8.bind(var9)(var7);
    var4[1] = var7;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/applications/message_embed/native/utils/nativeAppMessageEmbedUtil.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getAppGradientColors(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var1 = _closure1_slot3;
            var2 = null;
            if(!(var2 != var5)) { _fun0001_ip = 211; continue _fun0001 }
 19:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var4 = var4[var2];
            var7 = undefined;
            var6 = var6.bind(var7)(var4);
            var4 = var6.hasFetchedColors;
            var8 = var4.bind(var6)(var5);
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            if(var8) { _fun0001_ip = 85; continue _fun0001 }
 63:
            var2 = var6[var2];
            var8 = var4.bind(var7)(var2);
            var2 = var8.maybeFetchColors;
            var2 = var2.bind(var8)(var5);
            return var1;
 85:
            var2 = 3;
            var2 = var6[var2];
            var4 = var4.bind(var7)(var2);
            var2 = var4.getHeroColors;
            var2 = var2.bind(var4)(var5);
            var10 = var2.primaryColor;
            var6 = var2.secondaryColor;
            var2 = '#000000';
            var5 = var10 === var2;
            if(!var5) { _fun0001_ip = 135; continue _fun0001 }
 131:
            var5 = var6 === var2;
 135:
            var4 = false;
            var2 = var1;
            if(!(var4 === var5)) { _fun0001_ip = 209; continue _fun0001 }
 144:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 0;
            var3 = var8[var4];
            var9 = var5.bind(var7)(var3);
            var3 = var9.hexToRgba;
            var9 = var3.bind(var9)(var10);
            var3 = new Array(2);
            var3[0] = var9;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.hexToRgba;
            var4 = var4.bind(var5)(var6);
            var3[1] = var4;
            var2 = var3;
 209:
            return var2;
 211:
            return var1;
        }
    };
    var3['getAppGradientColors'] = var4;
    var2 = function getAppIconSrc(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getApplicationIconURL;
            var1 = {};
            var4 = arg1;
            var1['id'] = var4;
            var4 = arg2;
            var1['icon'] = var4;
            var4 = arg3;
            var1['bot'] = var4;
            var4 = false;
            var1['fallbackAvatar'] = var4;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0002_ip = 79; continue _fun0002 }
 76:
            var1 = var2;
 79:
            return var1;
        }
    };
    var3['getAppIconSrc'] = var2;
    return var1;
})();