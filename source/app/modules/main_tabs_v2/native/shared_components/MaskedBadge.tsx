// app/modules/main_tabs_v2/native/shared_components/MaskedBadge.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'relative';
    var9['position'] = var10;
    var9['right'] = var1;
    var4['maskStyle'] = var9;
    var9 = {'width': 0, 'height': 0};
    var4['unreadDot'] = var9;
    var9 = {'flexGrow': 1, 'flexShrink': 0};
    var4['badgeStyle'] = var9;
    var9 = {'position': 'relative', 'bottom': 4294967293};
    var4['unreadBadge'] = var9;
    var9 = {};
    var10 = 3;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.PRIMARY_400;
    var9['backgroundColor'] = var10;
    var4['lowPriorityBadge'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/MaskedBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MaskedBadge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var13 = var2.backgroundColor;
            var _closure2_slot0 = var13;
            var3 = var2.unread;
            var7 = var2.value;
            var6 = var2.maxValue;
            var12 = var2.lowPriority;
            var14 = var2.size;
            var9 = var2.style;
            var4 = _closure1_slot5;
            var5 = undefined;
            var11 = var4.bind(var5)();
            var10 = _closure1_slot3;
            var8 = var10.useMemo;
            var4 = new Array(1);
            var4[0] = var13;
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot0;
                var1['backgroundColor'] = var2;
                return var1;
            };
            var10 = var8.bind(var10)(var1, var4);
            var1 = 0;
            if(!(!(var7 > var1))) { _fun0001_ip = 152; continue _fun0001 }
 94:
            var1 = null;
            if(!var3) { _fun0001_ip = 150; continue _fun0001 }
 99:
            var8 = _closure1_slot4;
            var4 = _closure1_slot1;
            var15 = _closure1_slot2;
            var3 = 5;
            var3 = var15[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['size'] = var14;
            var3['maskColor'] = var13;
            var13 = var11.unreadBadge;
            var3['style'] = var13;
            var1 = var8.bind(var5)(var4, var3);
 150:
            _fun0001_ip = 270; continue _fun0001;
 152:
            var4 = _closure1_slot4;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.MaskedBadge;
            var2 = {};
            var8 = new Array(2);
            var8[0] = var10;
            var10 = var11.maskStyle;
            var8[1] = var10;
            var2['maskStyle'] = var8;
            var8 = var11.unreadDot;
            var2['dotStyle'] = var8;
            var10 = var11.badgeStyle;
            var8 = new Array(3);
            var8[0] = var10;
            var10 = null;
            if(!var12) { _fun0001_ip = 243; continue _fun0001 }
 237:
            var10 = var11.lowPriorityBadge;
 243:
            var8[1] = var10;
            var8[2] = var9;
            var2['style'] = var8;
            var2['value'] = var7;
            var2['maxValue'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 270:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();