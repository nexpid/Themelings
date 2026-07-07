// app/modules/collectibles/native/UnlockWithNitroButton.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ShopCtaEnum;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/UnlockWithNitroButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UnlockWithNitroButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.shouldShrink;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = false;
case 2:
            var2 = var1.onTrackPress;
            var _closure2_slot0 = var2;
            var8 = var1.text;
            var _closure2_slot1 = var4;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var10 = var2.bind(var4)(var1);
            var5 = var10.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = _closure1_slot3;
            var2[1] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure1_slot4;
                    var3 = var1.isClaiming;
                    var1 = null;
                    var1 = var1 != var3;
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot3;
                    var3 = var4.isPurchasingProduct;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.ProductIds;
                    var2 = var2.GENERIC_CONSUMABLE;
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var5 = var5.bind(var10)(var2, var1);
            var2 = _closure1_slot1;
            var1 = 7;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            _closure2_slot1 = var1;
            var1 = null;
            if(!(var1 == var8)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 8;
            var2 = var11[var1];
            var2 = var10.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var11[var1];
            var1 = var10.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.sEAnVH;
            var8 = var2.bind(var3)(var1);
case 6:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 9;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BaseTextButton;
            var1 = {};
            var10 = undefined;
            if(!var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var13 = _closure1_slot6;
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 10;
            var11 = var14[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-xs/semibold', 'color': 'text-overlay-light', 'allowFontScaling': false};
            var11['children'] = var8;
            var10 = var13.bind(var4)(var12, var11);
case 8:
            var1['textElement'] = var10;
            var10 = undefined;
            if(var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = var8;
case 10:
            var1['text'] = var10;
            var1['accessibilityLabel'] = var8;
            var8 = 'primary';
            var1['variant'] = var8;
            var8 = 'md';
            if(!var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = 'sm';
case 12:
            var1['size'] = var8;
            var8 = true;
            var1['grow'] = var8;
            var9 = _closure1_slot6;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 11;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.NitroWheelIcon;
            var7 = {'size': 'sm', 'color': 'white'};
            var7 = var9.bind(var4)(var8, var7);
            var1['icon'] = var7;
            var6 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var4 = _closure2_slot0;
                    var2 = _closure1_slot5;
                    var3 = var2.UNLOCK_WITH_NITRO;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
case 14:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var1['onPress'] = var6;
            var1['disabled'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['UnlockWithNitroButton'] = var2;
    return var1;
})();