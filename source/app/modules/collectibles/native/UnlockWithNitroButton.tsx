// app/modules/collectibles/native/UnlockWithNitroButton.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 5;
    var11 = var6[var10];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var9['borderRadius'] = var11;
    var4['button'] = var9;
    var9 = {};
    var9['marginRight'] = var10;
    var4['buttonIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/UnlockWithNitroButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.text;
            var8 = var1.style;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 6;
            var2 = var1[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot4;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot3;
            var3[1] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure1_slot4;
                    var3 = var1.isClaiming;
                    var1 = null;
                    var1 = var1 != var3;
                    if(var1) { _fun0002_ip = 71; continue _fun0002 }
 22:
                    var4 = _closure1_slot3;
                    var3 = var4.isPurchasingProduct;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 7;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.ProductIds;
                    var2 = var2.GENERIC_CONSUMABLE;
                    var1 = var3.bind(var4)(var2);
 71:
                    return var1;
                }
            };
            var5 = var5.bind(var6)(var3, var2);
            var2 = _closure1_slot6;
            var7 = var2.bind(var4)();
            var _closure2_slot0 = var7;
            var2 = _closure1_slot1;
            var3 = 8;
            var3 = var1[var3];
            var3 = var2.bind(var4)(var3);
            var6 = var3.bind(var4)();
            var3 = _closure1_slot5;
            var12 = 9;
            var1 = var1[var12];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var13 = null;
            if(!(var13 == var11)) { _fun0001_ip = 141; continue _fun0001 }
 134:
            var11 = function() {
                var4 = _closure1_slot5;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 10;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var8.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-xs/semibold', 'color': 'redesign-button-tertiary-text', 'allowFontScaling': false};
                var5 = 11;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.sEAnVF;
                var5 = var6.bind(var7)(var5);
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
 141:
            var1['text'] = var11;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var13 = var10[var12];
            var13 = var11.bind(var4)(var13);
            var13 = var13.ButtonColors;
            var13 = var13.GREEN;
            var1['color'] = var13;
            var10 = var10[var12];
            var10 = var11.bind(var4)(var10);
            var10 = var10.ButtonSizes;
            var10 = var10.SMALL;
            var1['size'] = var10;
            var9 = function renderIcon() {
                var4 = _closure1_slot5;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.NitroWheelIcon;
                var1 = {'size': 'sm', 'color': 'white'};
                var5 = _closure2_slot0;
                var5 = var5.buttonIcon;
                var1['style'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1['renderIcon'] = var9;
            var9 = var7.button;
            var7 = new Array(2);
            var7[0] = var9;
            var7[1] = var8;
            var1['style'] = var7;
            var1['onPress'] = var6;
            var1['disabled'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['UnlockWithNitroButton'] = var2;
    return var1;
})();