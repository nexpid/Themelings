// app/modules/premium/hooks/native/useSelectedMarketingMomentActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DismissibleContentGroupName;
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/hooks/native/useSelectedMarketingMomentActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSelectedMarketingMomentActionSheet() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var6 = 2;
            var2 = var7[var6];
            var3 = undefined;
            var8 = var5.bind(var3)(var2);
            var4 = var8.usePromotionMarketingComponent;
            var2 = 3;
            var2 = var7[var2];
            var2 = var5.bind(var3)(var2);
            var2 = var2.MarketingComponentType;
            var2 = var2.MOBILE_BOTTOM_SHEET;
            var4 = var4.bind(var8)(var2);
            var2 = 4;
            var2 = var7[var2];
            var11 = var5.bind(var3)(var2);
            var10 = var11.useSelectedSnowflakeBoundDismissibleContent;
            var5 = null;
            var7 = var5 == var4;
            var2 = undefined;
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var4.properties;
            var7 = var7.properties;
            var2 = var7.oneofKind;
case 2:
            var8 = 'mobileBottomSheet';
            var9 = null;
            if(!(var8 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot0;
            var12 = _closure1_slot1;
            var2 = 5;
            var2 = var12[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.DismissibleContent;
            var9 = var2.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
case 4:
            var7 = var5 == var4;
            var2 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var4.promotionId;
case 6:
            var12 = var5 != var2;
            var7 = '';
            if(!var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var2;
case 8:
            var2 = _closure1_slot3;
            var2 = var2.MAIN_VIEW_TOOLTIPS;
            var2 = var10.bind(var11)(var9, var7, var2);
            var1 = _closure1_slot2;
            var2 = var1.bind(var3)(var2, var6);
            var1 = 0;
            var6 = var2[var1];
            var1 = 1;
            var2 = var2[var1];
            var1 = {};
            var1['marketingMomentContent'] = var6;
            var6 = var5 == var4;
            var7 = undefined;
            if(var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = var4.properties;
            var6 = var6.properties;
            var7 = var6.oneofKind;
case 10:
            var6 = null;
            if(!(var8 === var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var5 == var4;
            var7 = undefined;
            if(var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var8 = var4.properties;
            var8 = var8.properties;
            var7 = var8.mobileBottomSheet;
case 14:
            var6 = var7;
case 12:
            var1['mobileBottomSheetData'] = var6;
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = var4.id;
case 16:
            var1['componentId'] = var3;
            var1['markDismissed'] = var2;
            return var1;
        }
    };
    var3['useSelectedMarketingMomentActionSheet'] = var2;
    return var1;
})();