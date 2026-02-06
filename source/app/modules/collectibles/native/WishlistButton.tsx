// app/modules/collectibles/native/WishlistButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var4 = function WishlistButtonBase(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.isWishlisted;
            var5 = var1.onPress;
            var13 = var1.busy;
            var12 = var1.disabled;
            var11 = var1.accessibilityLabel;
            var6 = var1.accessibilityHidden;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = false;
case 2:
            var16 = var1.style;
            var1 = var1.size;
            if(!(var1 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 'sm';
case 4:
            var2 = _closure1_slot10;
            var18 = var2.bind(var4)(var1);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = var1;
            if(var14) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = 9;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var7 = var1.HeartOutlineIcon;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var1 = 8;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var7 = var1.HeartIcon;
case 8:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            if(var14) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var8 = var1.WHITE;
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var8 = var1.RED_NEW_50;
case 11:
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var17 = var18.button;
            var15 = new Array(3);
            var15[0] = var17;
            var17 = var12;
            if(!var12) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var17 = var18.disabled;
case 12:
            var15[1] = var17;
            var15[2] = var16;
            var1['style'] = var15;
            var1['onPress'] = var5;
            var5 = var12;
            if(var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var5 = var13;
case 14:
            var1['disabled'] = var5;
            var5 = 'togglebutton';
            if(!var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5 = 'none';
case 16:
            var1['accessibilityRole'] = var5;
            var5 = undefined;
            if(var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var5 = var11;
case 18:
            var1['accessibilityLabel'] = var5;
            var5 = undefined;
            if(var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var11 = {};
            var11['checked'] = var14;
            var11['busy'] = var13;
            var11['disabled'] = var12;
            var5 = var11;
case 20:
            var1['accessibilityState'] = var5;
            var1['accessibilityElementsHidden'] = var6;
            var5 = 'auto';
            if(!var6) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var5 = 'no-hide-descendants';
case 22:
            var1['importantForAccessibility'] = var5;
            var6 = _closure1_slot7;
            var5 = {};
            var9 = _closure1_slot9;
            var9 = var9[var10];
            var5['size'] = var9;
            var5['color'] = var8;
            var5 = var6.bind(var4)(var7, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var2 = function WishlistButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var11 = var5.skuId;
            var15 = var5.productName;
            var14 = var5.onPress;
            var _closure2_slot0 = var14;
            var3 = {'skuId': 0, 'productName': 0, 'onPress': 0};
            var1 = null;
            var19 = var3;
            var18 = null;
            var2 = silentSetPrototypeOf(var19, var18);
            var19 = {};
            var18 = var5;
            var17 = var3;
            var6 = copyDataProperties(var19, var18, var17);
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 10;
            var3 = var16[var3];
            var5 = undefined;
            var10 = var9.bind(var5)(var3);
            var8 = var10.useStateFromStores;
            var3 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var8.bind(var10)(var7, var3);
            var7 = 11;
            var7 = var16[var7];
            var10 = var9.bind(var5)(var7);
            var8 = var10.useWishlistButtonState;
            var7 = {};
            var7['currentUser'] = var3;
            var7['skuId'] = var11;
            var7 = var8.bind(var10)(var7);
            var10 = var7.isWishlisted;
            var8 = var7.isBusy;
            var13 = var7.handleToggle;
            var _closure2_slot1 = var13;
            var7 = 12;
            var11 = var16[var7];
            var11 = var9.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var7 = var16[var7];
            var7 = var9.bind(var5)(var7);
            var7 = var7.t;
            var9 = var7.7kFjeK;
            var7 = {};
            var7['productName'] = var15;
            var7 = var11.bind(var12)(var9, var7);
            var12 = _closure1_slot4;
            var11 = var12.useCallback;
            var9 = _closure1_slot3;
            var4 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                        var4 = _closure2_slot0;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                        var4 = _closure2_slot0;
                        var3 = undefined;
                        var3 = var4.bind(var3)();
case 26:
                        var2 = _closure2_slot1;
                        var3 = undefined;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address=44);
case 3:
                        return var2;
case 2:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                        return var3;
case 28:
                        return var2;
case 24:
                        return var1;
                    }
                };
                return var1;
            };
            var9 = var9.bind(var5)(var4);
            var4 = new Array(2);
            var4[0] = var14;
            var4[1] = var13;
            var9 = var11.bind(var12)(var9, var4);
            var3 = var1 == var3;
            if(var3) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var4 = _closure1_slot7;
            var3 = _closure1_slot11;
            var2 = {};
            var2['isWishlisted'] = var10;
            var2['onPress'] = var9;
            var2['busy'] = var8;
            var2['accessibilityLabel'] = var7;
            var19 = var2;
            var18 = var6;
            var6 = copyDataProperties(var19, var18);
            var1 = var4.bind(var5)(var3, var2);
case 30:
            return var1;
        }
    };
    var _closure1_slot12 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var10 = var8[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.Pressable;
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.jsx;
    var _closure1_slot7 = var6;
    var6 = {};
    var9 = 5;
    var10 = var8[var9];
    var10 = var7.bind(var1)(var10);
    var10 = var10.SMALL_BUTTON_HEIGHT;
    var6['sm'] = var10;
    var9 = var8[var9];
    var9 = var7.bind(var1)(var9);
    var9 = var9.MEDIUM_BUTTON_HEIGHT;
    var6['md'] = var9;
    var _closure1_slot8 = var6;
    var6 = {'sm': 'sm', 'md': 'md'};
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = function(arg1) {
        var5 = arg1;
        var1 = {};
        var2 = {'width': null, 'height': null, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
        var4 = _closure1_slot8;
        var6 = var4[var5];
        var2['width'] = var6;
        var4 = var4[var5];
        var2['height'] = var4;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 7;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
        var2['backgroundColor'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.radii;
        var3 = var3.round;
        var2['borderRadius'] = var3;
        var1['button'] = var2;
        var2 = {};
        var3 = 0.5;
        var2['opacity'] = var3;
        var1['disabled'] = var2;
        return var1;
    };
    var6 = var9.bind(var10)(var6);
    var _closure1_slot10 = var6;
    var6 = 15;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/collectibles/native/WishlistButton.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function CollectiblesWishlistButton(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var8 = var4.selectedProduct;
            var1 = null;
            var3 = Object.create(var1);
            var2 = 0;
            var3['selectedProduct'] = var2;
            var13 = {};
            var12 = var4;
            var11 = var3;
            var6 = copyDataProperties(var13, var12, var11);
            var9 = var8.skuId;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 13;
            var3 = var10[var3];
            var5 = undefined;
            var4 = var7.bind(var5)(var3);
            var3 = var4.useProductPurchaseState;
            var3 = var3.bind(var4)(var8);
            var3 = var3.isPurchased;
            var4 = 14;
            var4 = var10[var4];
            var7 = var7.bind(var5)(var4);
            var4 = var7.isWishlistableCollectiblesProduct;
            var7 = var4.bind(var7)(var8);
            if(var3) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var4 = _closure1_slot7;
            var3 = _closure1_slot12;
            var2 = {};
            var2['skuId'] = var9;
            var8 = var8.name;
            var2['productName'] = var8;
            var7 = !var7;
            var2['disabled'] = var7;
            var13 = var2;
            var12 = var6;
            var6 = copyDataProperties(var13, var12);
            var1 = var4.bind(var5)(var3, var2);
case 32:
            return var1;
        }
    };
    var3['default'] = var5;
    var3['WishlistButtonBase'] = var4;
    var3['WishlistButton'] = var2;
    return var1;
})();