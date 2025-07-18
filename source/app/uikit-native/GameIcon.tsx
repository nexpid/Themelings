// app/uikit-native/GameIcon.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var14 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var8;
    var5 = function GameIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var12 = var1.game;
            var6 = var1.skuId;
            var10 = var1.size;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 39; continue _fun0001 }
 26:
            var2 = _closure1_slot6;
            var10 = var2.NORMAL;
 39:
            var1 = var1.style;
            var2 = _closure1_slot8;
            var7 = var2.bind(var4)();
            var9 = {};
            var2 = _closure1_slot6;
            var3 = var2.NORMAL;
            var2 = var7.normal;
            var9[var3] = var2;
            var2 = _closure1_slot6;
            var3 = var2.SMALL;
            var2 = var7.small;
            var9[var3] = var2;
            var2 = _closure1_slot6;
            var3 = var2.SIZE_24;
            var2 = var7.size24;
            var9[var3] = var2;
            var2 = _closure1_slot6;
            var3 = var2.LARGE;
            var2 = var7.large;
            var9[var3] = var2;
            var2 = var7.gameIcon;
            var11 = new Array(3);
            var11[0] = var2;
            var2 = var9[var10];
            var11[1] = var2;
            var11[2] = var1;
            var1 = null;
            var2 = var1 != var6;
            var8 = undefined;
            if(!var2) { _fun0001_ip = 306; continue _fun0001 }
 181:
            var2 = _closure1_slot4;
            var2 = var2.TIER_0;
            if(!(var2 !== var6)) { _fun0001_ip = 283; continue _fun0001 }
 195:
            var2 = _closure1_slot4;
            var2 = var2.TIER_1;
            if(!(var2 !== var6)) { _fun0001_ip = 261; continue _fun0001 }
 209:
            var2 = _closure1_slot4;
            var2 = var2.TIER_2;
            if(!(var2 !== var6)) { _fun0001_ip = 239; continue _fun0001 }
 223:
            var2 = _closure1_slot4;
            var3 = var2.LEGACY;
            var2 = null;
            if(!(var3 === var6)) { _fun0001_ip = 303; continue _fun0001 }
 239:
            var6 = _closure1_slot0;
            var13 = _closure1_slot1;
            var3 = 8;
            var3 = var13[var3];
            var2 = var6.bind(var4)(var3);
            _fun0001_ip = 303; continue _fun0001;
 261:
            var6 = _closure1_slot0;
            var13 = _closure1_slot1;
            var3 = 7;
            var3 = var13[var3];
            var2 = var6.bind(var4)(var3);
            _fun0001_ip = 303; continue _fun0001;
 283:
            var6 = _closure1_slot0;
            var13 = _closure1_slot1;
            var3 = 6;
            var3 = var13[var3];
            var2 = var6.bind(var4)(var3);
 303:
            var8 = var2;
 306:
            var2 = var1 != var12;
            if(!var2) { _fun0001_ip = 317; continue _fun0001 }
 313:
            var2 = var1 == var8;
 317:
            if(!var2) { _fun0001_ip = 349; continue _fun0001 }
 320:
            var2 = {};
            var6 = var12.getIconURL;
            var3 = _closure1_slot7;
            var3 = var3[var10];
            var3 = var6.bind(var12)(var3);
            var2['uri'] = var3;
            var8 = var2;
 349:
            if(!(var1 == var8)) { _fun0001_ip = 389; continue _fun0001 }
 353:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 9;
            var1 = var3[var1];
            var8 = var2.bind(var4)(var1);
            var3 = var11.push;
            var2 = var7.placeholder;
            var2 = var3.bind(var11)(var2);
 389:
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var6 = new Array(2);
            var6[0] = var11;
            var7 = var7.entityWrapper;
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot5;
            var6 = _closure1_slot2;
            var5 = {};
            var9 = var9[var10];
            var5['style'] = var9;
            var5['source'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var1 = global;
    var6 = var1.Object;
    var4 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var6)(var3, var1, var2);
    var1 = 0;
    var4 = var8[var1];
    var2 = native4;
    var1 = undefined;
    var2 = var2.bind(var1)(var4);
    var2 = 1;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.Image;
    var _closure1_slot2 = var4;
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.PremiumSubscriptionSKUs;
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot5 = var2;
    var4 = {};
    var2 = 'size_24';
    var4['SIZE_24'] = var2;
    var2 = 'small';
    var4['SMALL'] = var2;
    var2 = 'normal';
    var4['NORMAL'] = var2;
    var2 = 'large';
    var4['LARGE'] = var2;
    var _closure1_slot6 = var4;
    var2 = {};
    var10 = var4.SIZE_24;
    var6 = 24;
    var2[var10] = var6;
    var10 = var4.SMALL;
    var6 = 32;
    var2[var10] = var6;
    var10 = var4.NORMAL;
    var6 = 48;
    var2[var10] = var6;
    var10 = var4.LARGE;
    var6 = 80;
    var2[var10] = var6;
    var _closure1_slot7 = var2;
    var6 = 4;
    var6 = var8[var6];
    var11 = var7.bind(var1)(var6);
    var10 = var11.createStyles;
    var6 = {};
    var12 = {'justifyContent': 'center', 'alignItems': 'center'};
    var6['gameIcon'] = var12;
    var12 = {};
    var13 = var2.size_24;
    var12['width'] = var13;
    var13 = var2.size_24;
    var12['height'] = var13;
    var13 = 5;
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var12['borderRadius'] = var15;
    var6['size24'] = var12;
    var12 = {};
    var15 = var2.small;
    var12['width'] = var15;
    var15 = var2.small;
    var12['height'] = var15;
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var12['borderRadius'] = var15;
    var6['small'] = var12;
    var12 = {};
    var15 = var2.normal;
    var12['width'] = var15;
    var15 = var2.normal;
    var12['height'] = var15;
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var12['borderRadius'] = var15;
    var6['normal'] = var12;
    var12 = {};
    var15 = var2.large;
    var12['width'] = var15;
    var15 = var2.large;
    var12['height'] = var15;
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var12['borderRadius'] = var15;
    var6['large'] = var12;
    var12 = {};
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.none;
    var12['borderRadius'] = var15;
    var15 = var8[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.INTERACTIVE_MUTED;
    var12['tintColor'] = var15;
    var6['placeholder'] = var12;
    var12 = {'borderWidth': 1, 'borderColor': null, 'overflow': 'hidden'};
    var13 = var8[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var12['borderColor'] = var13;
    var6['entityWrapper'] = var12;
    var6 = var10.bind(var11)(var6);
    var _closure1_slot8 = var6;
    var5['Sizes'] = var4;
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'uikit-native/GameIcon.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['GameIconSizes'] = var4;
    var3['GameIconImageSize'] = var2;
    return var1;
})();