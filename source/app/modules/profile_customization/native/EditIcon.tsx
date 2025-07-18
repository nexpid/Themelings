// app/modules/profile_customization/native/EditIcon.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'alignItems': 'center', 'justifyContent': 'center'};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_FLOATING;
    var9['backgroundColor'] = var12;
    var4['editIcon'] = var9;
    var9 = {'width': 24, 'height': 24};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var9['borderRadius'] = var12;
    var4['xs'] = var9;
    var9 = {'width': 32, 'height': 32};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9['borderRadius'] = var10;
    var4['sm'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_customization/native/EditIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var8 = var2.style;
            var _closure2_slot0 = var8;
            var7 = var2.size;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 29; continue _fun0001 }
 25:
            var7 = 'xs';
 29:
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var4;
            var2 = _closure1_slot5;
            var9 = var2.bind(var4)();
            _closure2_slot2 = var9;
            var6 = _closure1_slot2;
            var3 = var6.useMemo;
            var2 = new Array(3);
            var2[0] = var9;
            var2[1] = var8;
            var2[2] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var2 = _closure2_slot2;
                    var4 = var2.editIcon;
                    var2 = new Array(3);
                    var2[0] = var4;
                    var5 = _closure2_slot1;
                    var4 = 'sm';
                    if(!(var4 !== var5)) { _fun0002_ip = 47; continue _fun0002 }
 35:
                    var4 = _closure2_slot2;
                    var4 = var4.xs;
                    _fun0002_ip = 57; continue _fun0002;
 47:
                    var5 = _closure2_slot2;
                    var4 = var5.sm;
 57:
                    var2[1] = var4;
                    var3 = _closure2_slot0;
                    var2[2] = var3;
                    var1['iconContainerStyle'] = var2;
                    return var1;
                }
            };
            var1 = var3.bind(var6)(var1, var2);
            var6 = var1.iconContainerStyle;
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            var1['style'] = var6;
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 5;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PencilIcon;
            var5 = {};
            var5['size'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();