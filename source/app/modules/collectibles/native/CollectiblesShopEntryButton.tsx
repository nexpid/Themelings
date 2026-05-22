// app/modules/collectibles/native/CollectiblesShopEntryButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function CoachmarkVariant(arg1) {
        var1 = arg1;
        var13 = var1.marketing;
        var11 = var1.navigateToShop;
        var _closure2_slot0 = var11;
        var12 = var1.shopButtonRef;
        var20 = _closure1_slot0;
        var14 = _closure1_slot2;
        var1 = 5;
        var1 = var14[var1];
        var4 = undefined;
        var8 = var20.bind(var4)(var1);
        var7 = var8.useSelectedVersionedDismissibleContent;
        var1 = 6;
        var2 = var14[var1];
        var2 = var20.bind(var4)(var2);
        var2 = var2.DismissibleContent;
        var24 = var2.COLLECTIBLES_SHOP_ENTRY_MARKETING;
        var23 = var13.version;
        var21 = true;
        var25 = var8;
        var22 = undefined;
        var5 = var25[var7](var24, var23, var22, var21, var20);
        var3 = _closure1_slot3;
        var2 = 2;
        var5 = var3.bind(var4)(var5, var2);
        var2 = 0;
        var2 = var5[var2];
        var3 = 1;
        var9 = var5[var3];
        var _closure2_slot1 = var9;
        var1 = var14[var1];
        var1 = var20.bind(var4)(var1);
        var1 = var1.DismissibleContent;
        var1 = var1.COLLECTIBLES_SHOP_ENTRY_MARKETING;
        var10 = var2 === var1;
        var _closure2_slot2 = var10;
        var3 = _closure1_slot8;
        var2 = _closure1_slot7;
        var1 = {};
        var15 = _closure1_slot6;
        var7 = _closure1_slot1;
        var5 = 7;
        var5 = var14[var5];
        var8 = var7.bind(var4)(var5);
        var5 = {};
        var5['ref'] = var12;
        var17 = 8;
        var17 = var14[var17];
        var17 = var20.bind(var4)(var17);
        var17 = var17.ShopIcon;
        var5['IconComponent'] = var17;
        var17 = 9;
        var18 = var14[var17];
        var18 = var20.bind(var4)(var18);
        var19 = var18.intl;
        var18 = var19.string;
        var17 = var14[var17];
        var17 = var20.bind(var4)(var17);
        var17 = var17.t;
        var17 = var17.pWG4ze;
        var17 = var18.bind(var19)(var17);
        var5['accessibilityLabel'] = var17;
        var16 = function onPress() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot2;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = _closure2_slot1;
                var2 = _closure1_slot5;
                var3 = var2.TAKE_ACTION;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
case 2:
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            }
        };
        var5['onPress'] = var16;
        var5['showRedDot'] = var10;
        var8 = var15.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot6;
        var6 = 10;
        var6 = var14[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var6['marketing'] = var13;
        var6['shopButtonRef'] = var12;
        var6['navigateToShop'] = var11;
        var6['visible'] = var10;
        var6['onDismiss'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.Fragment;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopEntryButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CollectiblesShopEntryButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = var1.navigateToShop;
            var _closure2_slot0 = var6;
            var5 = var1.shopButtonRef;
            var _closure2_slot1 = var5;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var4 = undefined;
            var9 = var7.bind(var4)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getMarketingBySurface;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.CollectiblesMarketingSurface;
                var1 = var1.MOBILE_SHOP_BUTTON;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var8.bind(var9)(var7, var2);
            var11 = null;
            var2 = var11 != var7;
            if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var8 = 'dismissibleContent';
            var2 = var8 in var7;
case 4:
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var9 = var7.dismissibleContent;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 6;
            var8 = var12[var8];
            var8 = var10.bind(var4)(var8);
            var8 = var8.DismissibleContent;
            var8 = var8.COLLECTIBLES_SHOP_ENTRY_MARKETING;
            var2 = var9 === var8;
case 6:
            var8 = var11 == var7;
            var9 = undefined;
            if(var8) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var9 = var7.type;
case 8:
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var15 = 13;
            var8 = var8[var15];
            var8 = var10.bind(var4)(var8);
            var8 = var8.CollectiblesMarketingType;
            var8 = var8.COACHMARK;
            if(!(var9 !== var8)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var10 = function content(arg1) {
                var1 = arg1;
                var6 = var1.visibleContent;
                var _closure3_slot0 = var6;
                var1 = var1.markAsDismissed;
                var _closure3_slot1 = var1;
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 7;
                var1 = var11[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var8 = _closure2_slot1;
                var1['ref'] = var8;
                var10 = _closure1_slot0;
                var7 = 8;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.ShopIcon;
                var1['IconComponent'] = var7;
                var7 = 9;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.pWG4ze;
                var7 = var8.bind(var9)(var7);
                var1['accessibilityLabel'] = var7;
                var5 = function onPress() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var4 = _closure3_slot0;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var3 = _closure3_slot1;
                        var2 = _closure1_slot5;
                        var2 = var2.PRIMARY;
                        var2 = var3.bind(var1)(var2);
case 12:
                        return var1;
                    }
                };
                var1['onPress'] = var5;
                var5 = null;
                var5 = var5 != var6;
                var1['showRedDot'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var9 = _closure1_slot6;
            if(var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 14;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var8 = var11 == var7;
            var12 = undefined;
            if(var8) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var12 = var7.type;
case 16:
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var15];
            var8 = var13.bind(var4)(var8);
            var8 = var8.CollectiblesMarketingType;
            var8 = var8.BADGE;
            if(!(var12 === var8)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var12 = var11 == var7;
            var8 = undefined;
            if(var12) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var8 = var7.dismissibleContent;
case 20:
            if(!(var11 == var8)) { _fun0002_ip = 22; continue _fun0002 }
case 18:
            var8 = new Array(0);
            _fun0002_ip = 23; continue _fun0002;
case 22:
            var13 = var7.dismissibleContent;
            var12 = new Array(1);
            var12[0] = var13;
            var8 = var12;
case 23:
            var2['contentTypes'] = var8;
            var2['children'] = var10;
            var2 = var9.bind(var4)(var3, var2);
            _fun0002_ip = 24; continue _fun0002;
case 14:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 14;
            var3 = var12[var3];
            var3 = var8.bind(var4)(var3);
            var8 = var3.SelectedVersionedDismissibleContent;
            var3 = {};
            var12 = var11 == var7;
            var14 = undefined;
            if(var12) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var14 = var7.type;
case 25:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var15];
            var12 = var13.bind(var4)(var12);
            var12 = var12.CollectiblesMarketingType;
            var13 = var12.BADGE;
            var12 = null;
            if(!(var14 === var13)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 6;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.DismissibleContent;
            var12 = var13.COLLECTIBLES_SHOP_ENTRY_MARKETING;
case 27:
            var3['contentType'] = var12;
            var13 = var11 == var7;
            var12 = undefined;
            if(var13) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var12 = var7.version;
case 29:
            var13 = var11 != var12;
            var11 = 0;
            if(!var13) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var11 = var12;
case 31:
            var3['latestVersion'] = var11;
            var3['children'] = var10;
            var2 = var9.bind(var4)(var8, var3);
case 24:
            return var2;
case 10:
            var3 = _closure1_slot6;
            var2 = _closure1_slot9;
            var1 = {};
            var1['marketing'] = var7;
            var1['navigateToShop'] = var6;
            var1['shopButtonRef'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();