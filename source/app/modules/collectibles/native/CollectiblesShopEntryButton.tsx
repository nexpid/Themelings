// app/modules/collectibles/native/CollectiblesShopEntryButton.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesShopEntryButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CollectiblesShopEntryButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.navigateToShop;
            var _closure2_slot0 = var3;
            var2 = var2.shopButtonRef;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 4;
            var2 = var4[var2];
            var5 = undefined;
            var6 = var3.bind(var5)(var2);
            var4 = var6.useStateFromStores;
            var2 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getMarketingBySurface;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.CollectiblesMarketingSurface;
                var1 = var1.MOBILE_SHOP_BUTTON;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var4.bind(var6)(var3, var2);
            var6 = function content(arg1) {
                var1 = arg1;
                var6 = var1.visibleContent;
                var _closure3_slot0 = var6;
                var1 = var1.markAsDismissed;
                var _closure3_slot1 = var1;
                var4 = _closure1_slot5;
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
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var4 = _closure3_slot0;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var3 = _closure3_slot1;
                        var2 = _closure1_slot4;
                        var2 = var2.PRIMARY;
                        var2 = var3.bind(var1)(var2);
case 2:
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
            var7 = null;
            var1 = var7 == var9;
            var2 = undefined;
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var9.dismissibleContent;
case 4:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var12 = 6;
            var1 = var1[var12];
            var1 = var3.bind(var5)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.COLLECTIBLES_SHOP_ENTRY_MARKETING;
            if(!(var2 !== var1)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var2 = var2.bind(var5)(var1);
            var1 = {};
            var4 = var7 == var9;
            var8 = undefined;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var9.type;
case 8:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 11;
            var4 = var13[var4];
            var4 = var11.bind(var5)(var4);
            var4 = var4.CollectiblesMarketingType;
            var4 = var4.BADGE;
            if(!(var8 === var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var7 == var9;
            var4 = undefined;
            if(var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var9.dismissibleContent;
case 12:
            if(!(var7 == var4)) { _fun0001_ip = 14; continue _fun0001 }
case 10:
            var4 = new Array(0);
            _fun0001_ip = 15; continue _fun0001;
case 14:
            var11 = var9.dismissibleContent;
            var8 = new Array(1);
            var8[0] = var11;
            var4 = var8;
case 15:
            var1['contentTypes'] = var4;
            var1['children'] = var6;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 16; continue _fun0001;
case 6:
            var4 = _closure1_slot5;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 10;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.SelectedVersionedDismissibleContent;
            var2 = {};
            var8 = var7 == var9;
            var13 = undefined;
            if(var8) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var13 = var9.type;
case 17:
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 11;
            var8 = var14[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.CollectiblesMarketingType;
            var11 = var8.BADGE;
            var8 = null;
            if(!(var13 === var11)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var12];
            var10 = var11.bind(var5)(var10);
            var10 = var10.DismissibleContent;
            var8 = var10.COLLECTIBLES_SHOP_ENTRY_MARKETING;
case 19:
            var2['contentType'] = var8;
            var10 = var7 == var9;
            var8 = undefined;
            if(var10) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var8 = var9.version;
case 21:
            var9 = var7 != var8;
            var7 = 0;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var7 = var8;
case 23:
            var2['latestVersion'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 16:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();