// app/uikit-native/CutoutableAvatarDecoration.tsx
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
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/CutoutableAvatarDecoration.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CutoutableAvatarDecoration(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var11 = var3.size;
            var _closure2_slot0 = var11;
            var1 = var3.avatarDecoration;
            var _closure2_slot1 = var1;
            var10 = var3.decorationStyle;
            var _closure2_slot2 = var10;
            var12 = var3.animate;
            var _closure2_slot3 = var12;
            var8 = var3.cutout;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 4;
            var3 = var6[var3];
            var7 = undefined;
            var9 = var5.bind(var7)(var3);
            var6 = var9.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var9 = var6.bind(var9)(var5, var3);
            var _closure2_slot4 = var9;
            var6 = _closure1_slot3;
            var5 = var6.useMemo;
            var3 = new Array(5);
            var3[0] = var12;
            var3[1] = var11;
            var3[2] = var1;
            var3[3] = var10;
            var3[4] = var9;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0002_ip = 17; continue _fun0002 }
 10:
                    var1 = _closure2_slot4;
                    var2 = !var1;
 17:
                    if(!var2) { _fun0002_ip = 30; continue _fun0002 }
 20:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var2 = var1 != var3;
 30:
                    if(!var2) { _fun0002_ip = 79; continue _fun0002 }
 33:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.isAnimatedAvatarDecoration;
                    var1 = _closure2_slot1;
                    var1 = var1.asset;
                    var2 = var3.bind(var4)(var1);
 79:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var3 = var6.getAvatarDecorationURL;
                    var1 = {};
                    var4 = _closure2_slot1;
                    var1['avatarDecoration'] = var4;
                    var1['canAnimate'] = var2;
                    var4 = _closure2_slot0;
                    var1['size'] = var4;
                    var3 = var3.bind(var6)(var1);
                    var1 = {};
                    var1['avatarDecorationUrl'] = var3;
                    var6 = {};
                    var6['width'] = var4;
                    var6['height'] = var4;
                    var1['sizeStyle'] = var6;
                    var6 = {};
                    var6['width'] = var4;
                    var6['height'] = var4;
                    var4 = new Array(2);
                    var4[0] = var6;
                    var5 = _closure2_slot2;
                    var4[1] = var5;
                    var1['style'] = var4;
                    var1['shouldAnimate'] = var2;
                    var2 = {};
                    var2['uri'] = var3;
                    var1['source'] = var2;
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var2, var3);
            var2 = var3.shouldAnimate;
            var11 = var3.avatarDecorationUrl;
            var13 = var3.style;
            var10 = var3.sizeStyle;
            var15 = var3.source;
            var3 = null;
            var5 = var3 == var1;
            var1 = null;
            if(var5) { _fun0001_ip = 533; continue _fun0001 }
 193:
            var5 = var3 == var11;
            var1 = null;
            if(var5) { _fun0001_ip = 533; continue _fun0001 }
 205:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 7;
            var5 = var9[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.isAndroid;
            var5 = var5.bind(var6)();
            if(!var5) { _fun0001_ip = 243; continue _fun0001 }
 237:
            if(var2) { _fun0001_ip = 373; continue _fun0001 }
 243:
            if(!(var3 == var8)) { _fun0001_ip = 289; continue _fun0001 }
 247:
            var6 = _closure1_slot6;
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 10;
            var2 = var9[var2];
            var5 = var5.bind(var7)(var2);
            var2 = {};
            var2['source'] = var15;
            var2['style'] = var13;
            var2 = var6.bind(var7)(var5, var2);
            _fun0001_ip = 368; continue _fun0001;
 289:
            var9 = _closure1_slot6;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var5 = 8;
            var5 = var16[var5];
            var6 = var14.bind(var7)(var5);
            var5 = {};
            var5['style'] = var13;
            var12 = var8.nativeCutouts;
            var5['cutouts'] = var12;
            var12 = 10;
            var12 = var16[var12];
            var14 = var14.bind(var7)(var12);
            var12 = {};
            var12['source'] = var15;
            var12['style'] = var10;
            var12 = var9.bind(var7)(var14, var12);
            var5['children'] = var12;
            var2 = var9.bind(var7)(var6, var5);
 368:
            _fun0001_ip = 530; continue _fun0001;
 373:
            if(!(var3 == var8)) { _fun0001_ip = 448; continue _fun0001 }
 377:
            var6 = _closure1_slot6;
            var5 = _closure1_slot4;
            var3 = {};
            var3['style'] = var13;
            var9 = 'none';
            var3['pointerEvents'] = var9;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 9;
            var9 = var14[var9];
            var12 = var12.bind(var7)(var9);
            var9 = {};
            var9['url'] = var11;
            var9['style'] = var10;
            var9 = var6.bind(var7)(var12, var9);
            var3['children'] = var9;
            var3 = var6.bind(var7)(var5, var3);
            _fun0001_ip = 527; continue _fun0001;
 448:
            var6 = _closure1_slot6;
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var4 = 8;
            var4 = var12[var4];
            var5 = var9.bind(var7)(var4);
            var4 = {};
            var4['style'] = var13;
            var8 = var8.nativeCutouts;
            var4['cutouts'] = var8;
            var8 = 9;
            var8 = var12[var8];
            var9 = var9.bind(var7)(var8);
            var8 = {};
            var8['url'] = var11;
            var8['style'] = var10;
            var8 = var6.bind(var7)(var9, var8);
            var4['children'] = var8;
            var3 = var6.bind(var7)(var5, var4);
 527:
            var2 = var3;
 530:
            var1 = var2;
 533:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();