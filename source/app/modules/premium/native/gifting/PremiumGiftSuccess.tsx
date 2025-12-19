// app/modules/premium/native/gifting/PremiumGiftSuccess.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.Fragment;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {'backgroundColor': null, 'paddingHorizontal': null, 'flex': 1, 'alignContent': 'center', 'justifyContent': 'center', 'flexGrow': 1};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 5;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_BASE_LOW;
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
        var7 = var7.BACKGROUND_BASE_LOW;
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
    var _closure1_slot9 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/PremiumGiftSuccess.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumGiftSuccess() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var13 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 6;
            var1 = var9[var1];
            var4 = undefined;
            var1 = var13.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var2 = var1.bottom;
            var1 = _closure1_slot9;
            var10 = var1.bind(var4)(var2);
            var8 = _closure1_slot0;
            var1 = 7;
            var1 = var9[var1];
            var2 = var8.bind(var4)(var1);
            var1 = var2.useNativeGiftContext;
            var1 = var1.bind(var2)();
            var2 = var1.recipientUser;
            var12 = var1.giftCodeRecord;
            var11 = var1.selectedGiftingPromotionReward;
            var1 = 8;
            var1 = var9[var1];
            var14 = var13.bind(var4)(var1);
            var1 = null;
            var7 = var1 != var12;
            var3 = 'Gift code record cannot be null on success screen';
            var3 = var14.bind(var4)(var7, var3);
            var3 = 9;
            var3 = var9[var3];
            var3 = var13.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var _closure2_slot0 = var3;
            var7 = 10;
            var7 = var9[var7];
            var7 = var13.bind(var4)(var7);
            var14 = var7.bind(var4)();
            var _closure2_slot1 = var14;
            var7 = 11;
            var7 = var9[var7];
            var9 = var8.bind(var4)(var7);
            var8 = var9.useGetOrFetchPurchase;
            var13 = var1 == var11;
            var7 = undefined;
            if(var13) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var11.skuId;
case 2:
            var8 = var8.bind(var9)(var7);
            var13 = _closure1_slot3;
            var9 = var13.useEffect;
            var7 = new Array(2);
            var7[0] = var14;
            var7[1] = var3;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var1 = var4 != var1;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot0;
                    var3 = var3.reminderNotice;
                    var1 = var4 != var3;
case 4:
                    if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = _closure2_slot1;
case 6:
                    if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 12;
                    var1 = var8[var1];
                    var2 = undefined;
                    var5 = var7.bind(var2)(var1);
                    var4 = var5.markVersionedDismissibleContentAsDismissed;
                    var1 = 13;
                    var1 = var8[var1];
                    var1 = var7.bind(var2)(var1);
                    var1 = var1.DismissibleContent;
                    var3 = var1.GIFTING_PROMOTION_REMINDER;
                    var1 = 14;
                    var1 = var8[var1];
                    var2 = var7.bind(var2)(var1);
                    var1 = var2.getGiftingPromotionDismissibleContentVersion;
                    var2 = var1.bind(var2)();
                    var1 = {};
                    var6 = _closure1_slot5;
                    var6 = var6.INDIRECT_ACTION;
                    var1['dismissAction'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var9.bind(var13)(var6, var7);
            var6 = var1 != var8;
            if(!var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = var1 != var3;
case 10:
            if(!var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var3.rewardAssetIdMap;
            var6 = var1 != var7;
case 12:
            var7 = undefined;
            if(!var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = var3.rewardAssetIdMap;
            var6 = var9.get;
            var3 = var8.skuId;
            var7 = var6.bind(var9)(var3);
case 14:
            if(!(var1 != var2)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var9 = _closure1_slot6;
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 16;
            var3 = var13[var3];
            var6 = var6.bind(var4)(var3);
            var3 = {};
            var6 = var9.bind(var4)(var6, var3);
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var13 = _closure1_slot6;
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var3 = 15;
            var3 = var14[var3];
            var9 = var9.bind(var4)(var3);
            var3 = {};
            var3['giftCodeRecord'] = var12;
            var6 = var13.bind(var4)(var9, var3);
case 18:
            if(!(var1 != var11)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            if(!(var1 != var8)) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            if(!(var1 == var7)) { _fun0001_ip = 22; continue _fun0001 }
case 19:
            if(!(var1 != var2)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 16;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PremiumGiftDMSuccessActions;
            var1 = {};
            var9 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 25; continue _fun0001;
case 23:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 15;
            var1 = var13[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PremiumGiftSuccessActions;
            var1 = {};
            var1['giftCodeRecord'] = var12;
            var9 = var3.bind(var4)(var2, var1);
case 25:
            _fun0001_ip = 26; continue _fun0001;
case 22:
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 17;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['reward'] = var11;
            var1['purchase'] = var8;
            var1['asset'] = var7;
            var9 = var3.bind(var4)(var2, var1);
case 26:
            var3 = _closure1_slot8;
            var2 = _closure1_slot7;
            var1 = {};
            var8 = _closure1_slot6;
            var7 = _closure1_slot4;
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