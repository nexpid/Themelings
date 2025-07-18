// app/modules/search_v2/native/components/list/rows/GroupDMRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search_v2/native/components/list/rows/GroupDMRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GroupDMRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.channel;
            var _closure2_slot0 = var8;
            var7 = var1.trailing;
            var14 = var1.onPress;
            var _closure2_slot1 = var14;
            var5 = var1.onAccessibilityAction;
            var6 = var1.accessibilityActions;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 2;
            var10 = var9[var4];
            var4 = undefined;
            var10 = var3.bind(var4)(var10);
            var10 = var10.bind(var4)(var8);
            var13 = _closure1_slot3;
            var12 = var13.useCallback;
            var15 = var8.id;
            var11 = new Array(2);
            var11[0] = var15;
            var11[1] = var14;
            var2 = function() {
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = var12.bind(var13)(var2, var11);
            var13 = _closure1_slot4;
            var2 = 3;
            var2 = var9[var2];
            var11 = var3.bind(var4)(var2);
            var2 = {};
            var3 = _closure1_slot0;
            var14 = 4;
            var14 = var9[var14];
            var14 = var3.bind(var4)(var14);
            var14 = var14.AvatarSizes;
            var14 = var14.LARGE_48;
            var2['size'] = var14;
            var2['channel'] = var8;
            var13 = var13.bind(var4)(var11, var2);
            var2 = 5;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useRecipientsLabel;
            var14 = var2.bind(var3)(var8);
            var11 = null;
            var2 = var11 != var14;
            var8 = undefined;
            if(!var2) { _fun0001_ip = 257; continue _fun0001 }
 204:
            var9 = _closure1_slot4;
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 6;
            var2 = var15[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-xs/medium', 'color': 'text-muted', 'lineClamp': 1};
            var2['children'] = var14;
            var8 = var9.bind(var4)(var3, var2);
 257:
            var3 = _closure1_slot4;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 7;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.SearchListRow;
            var1 = {};
            var15 = var11 != var10;
            var9 = '';
            var14 = var9;
            if(!var15) { _fun0001_ip = 306; continue _fun0001 }
 303:
            var14 = var10;
 306:
            var1['label'] = var14;
            var1['icon'] = var13;
            var1['onPress'] = var12;
            var11 = var11 != var10;
            if(!var11) { _fun0001_ip = 328; continue _fun0001 }
 325:
            var9 = var10;
 328:
            var1['accessibilityLabel'] = var9;
            var1['subLabel'] = var8;
            var1['trailing'] = var7;
            var1['accessibilityActions'] = var6;
            var1['onAccessibilityAction'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();