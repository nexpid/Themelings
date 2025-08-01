// app/modules/premium/native/gifting/PremiumGiftSuccess.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var7 = var4.Fragment;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {'backgroundColor': null, 'paddingHorizontal': null, 'flex': 1, 'alignContent': 'center', 'justifyContent': 'center', 'flexGrow': 1};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 6;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_PRIMARY;
        var2['backgroundColor'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['paddingHorizontal'] = var7;
        var1['bodyContainer'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_PRIMARY;
        var2['backgroundColor'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['paddingTop'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var8 = var7.PX_16;
        var7 = arg1;
        var7 = var7 + var8;
        var2['paddingBottom'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['paddingHorizontal'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_8;
        var2['gap'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.shadows;
        var9 = var3.SHADOW_TOP_LOW;
        var10 = var2;
        var3 = copyDataProperties(var10, var9);
        var1['actionContainer'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/PremiumGiftSuccess.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumGiftSuccess() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 7;
            var1 = var8[var1];
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var2 = var1.bottom;
            var1 = _closure1_slot10;
            var10 = var1.bind(var4)(var2);
            var7 = _closure1_slot0;
            var1 = 8;
            var1 = var8[var1];
            var2 = var7.bind(var4)(var1);
            var1 = var2.useNativeGiftContext;
            var1 = var1.bind(var2)();
            var2 = var1.recipientUser;
            var11 = var1.giftCodeRecord;
            var9 = var1.selectedGiftingPromotionReward;
            var1 = 9;
            var1 = var8[var1];
            var13 = var6.bind(var4)(var1);
            var1 = null;
            var12 = var1 != var11;
            var6 = 'Gift code record cannot be null on success screen';
            var6 = var13.bind(var4)(var12, var6);
            var6 = 10;
            var6 = var8[var6];
            var8 = var7.bind(var4)(var6);
            var7 = var8.useGiftingPromotionRewardCollectiblePurchase;
            var12 = var1 == var9;
            var6 = undefined;
            if(var12) { _fun0001_ip = 152; continue _fun0001 }
 146:
            var6 = var9.skuId;
 152:
            var8 = var7.bind(var8)(var6);
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 11;
            var6 = var12[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.bind(var4)();
            var _closure2_slot0 = var6;
            var7 = 12;
            var7 = var12[var7];
            var7 = var9.bind(var4)(var7);
            var13 = var7.bind(var4)();
            var _closure2_slot1 = var13;
            var12 = _closure1_slot4;
            var9 = var12.useEffect;
            var7 = new Array(2);
            var7[0] = var13;
            var7[1] = var6;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 30; continue _fun0002 }
 16:
                    var3 = _closure2_slot0;
                    var3 = var3.reminderNotice;
                    var2 = var4 != var3;
 30:
                    if(!var2) { _fun0002_ip = 37; continue _fun0002 }
 33:
                    var2 = _closure2_slot1;
 37:
                    if(!var2) { _fun0002_ip = 129; continue _fun0002 }
 40:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 13;
                    var2 = var8[var2];
                    var3 = undefined;
                    var5 = var7.bind(var3)(var2);
                    var4 = var5.markVersionedDismissibleContentAsDismissed;
                    var2 = 14;
                    var2 = var8[var2];
                    var2 = var7.bind(var3)(var2);
                    var2 = var2.DismissibleContent;
                    var3 = var2.GIFTING_PROMOTION_REMINDER;
                    var1 = _closure2_slot0;
                    var2 = var1.dismissibleContentVersion;
                    var1 = {};
                    var6 = _closure1_slot6;
                    var6 = var6.INDIRECT_ACTION;
                    var1['dismissAction'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
 129:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var9.bind(var12)(var3, var7);
            var3 = var1 != var8;
            var7 = undefined;
            if(!var3) { _fun0001_ip = 319; continue _fun0001 }
 248:
            var3 = var1 != var6;
            var7 = undefined;
            if(!var3) { _fun0001_ip = 319; continue _fun0001 }
 257:
            var3 = var6.rewardAssetIdMap;
            var3 = var1 != var3;
            var7 = undefined;
            if(!var3) { _fun0001_ip = 319; continue _fun0001 }
 272:
            var12 = _closure1_slot3;
            var9 = var8.items;
            var3 = 1;
            var9 = var12.bind(var4)(var9, var3);
            var3 = 0;
            var3 = var9[var3];
            var9 = var6.rewardAssetIdMap;
            var6 = var9.get;
            var3 = var3.skuId;
            var7 = var6.bind(var9)(var3);
 319:
            if(!(var1 != var2)) { _fun0001_ip = 357; continue _fun0001 }
 323:
            var9 = _closure1_slot7;
            var6 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 16;
            var3 = var12[var3];
            var6 = var6.bind(var4)(var3);
            var3 = {};
            var6 = var9.bind(var4)(var6, var3);
            _fun0001_ip = 394; continue _fun0001;
 357:
            var12 = _closure1_slot7;
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 15;
            var3 = var13[var3];
            var9 = var9.bind(var4)(var3);
            var3 = {};
            var3['giftCodeRecord'] = var11;
            var6 = var12.bind(var4)(var9, var3);
 394:
            if(!(var1 != var8)) { _fun0001_ip = 402; continue _fun0001 }
 398:
            if(!(var1 == var7)) { _fun0001_ip = 491; continue _fun0001 }
 402:
            if(!(var1 != var2)) { _fun0001_ip = 446; continue _fun0001 }
 406:
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 16;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PremiumGiftDMSuccessActions;
            var1 = {};
            var9 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 489; continue _fun0001;
 446:
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 15;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PremiumGiftSuccessActions;
            var1 = {};
            var1['giftCodeRecord'] = var11;
            var9 = var3.bind(var4)(var2, var1);
 489:
            _fun0001_ip = 533; continue _fun0001;
 491:
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 17;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['purchase'] = var8;
            var1['asset'] = var7;
            var9 = var3.bind(var4)(var2, var1);
 533:
            var3 = _closure1_slot9;
            var2 = _closure1_slot8;
            var1 = {};
            var8 = _closure1_slot7;
            var7 = _closure1_slot5;
            var5 = {};
            var11 = var10.bodyContainer;
            var5['style'] = var11;
            var5['children'] = var6;
            var6 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var10 = var10.actionContainer;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();