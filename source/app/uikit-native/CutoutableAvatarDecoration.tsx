// app/uikit-native/CutoutableAvatarDecoration.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
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
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/CutoutableAvatarDecoration.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CutoutableAvatarDecoration(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
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
case 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = _closure2_slot4;
                    var2 = !var1;
case 2:
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var2 = var1 != var3;
case 4:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 5;
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
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var3 == var11;
            var1 = null;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 6;
            var5 = var9[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.isAndroid;
            var5 = var5.bind(var6)();
            if(!var5) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 9:
            if(!(var3 == var8)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = _closure1_slot6;
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 9;
            var2 = var9[var2];
            var5 = var5.bind(var7)(var2);
            var2 = {};
            var2['source'] = var15;
            var2['style'] = var13;
            var2 = var6.bind(var7)(var5, var2);
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var9 = _closure1_slot6;
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var5 = 7;
            var5 = var16[var5];
            var6 = var14.bind(var7)(var5);
            var5 = {};
            var5['style'] = var13;
            var12 = var8.nativeCutouts;
            var5['cutouts'] = var12;
            var12 = 9;
            var12 = var16[var12];
            var14 = var14.bind(var7)(var12);
            var12 = {};
            var12['source'] = var15;
            var12['style'] = var10;
            var12 = var9.bind(var7)(var14, var12);
            var5['children'] = var12;
            var2 = var9.bind(var7)(var6, var5);
case 14:
            _fun0001_ip = 15; continue _fun0001;
case 11:
            if(!(var3 == var8)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = _closure1_slot6;
            var5 = _closure1_slot4;
            var3 = {};
            var3['style'] = var13;
            var9 = 'none';
            var3['pointerEvents'] = var9;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var9 = 8;
            var9 = var14[var9];
            var12 = var12.bind(var7)(var9);
            var9 = {};
            var9['url'] = var11;
            var9['style'] = var10;
            var9 = var6.bind(var7)(var12, var9);
            var3['children'] = var9;
            var3 = var6.bind(var7)(var5, var3);
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var6 = _closure1_slot6;
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var4 = 7;
            var4 = var12[var4];
            var5 = var9.bind(var7)(var4);
            var4 = {};
            var4['style'] = var13;
            var8 = var8.nativeCutouts;
            var4['cutouts'] = var8;
            var8 = 8;
            var8 = var12[var8];
            var9 = var9.bind(var7)(var8);
            var8 = {};
            var8['url'] = var11;
            var8['style'] = var10;
            var8 = var6.bind(var7)(var9, var8);
            var4['children'] = var8;
            var3 = var6.bind(var7)(var5, var4);
case 18:
            var2 = var3;
case 15:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();