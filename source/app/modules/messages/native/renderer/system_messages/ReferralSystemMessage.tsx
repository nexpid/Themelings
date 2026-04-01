// app/modules/messages/native/renderer/system_messages/ReferralSystemMessage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var10.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createNativeStyleProperties;
    var4 = {};
    var9 = 3;
    var11 = var6[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.ICON_STRONG;
    var4['iconTintColor'] = var11;
    var9 = var6[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.colors;
    var9 = var9.ICON_STRONG;
    var4['iconDividerColor'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/system_messages/ReferralSystemMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createReferralSystemMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arg1;
            var9 = var10.message;
            var3 = var10.theme;
            var2 = _closure1_slot4;
            var1 = var2.getId;
            var7 = var1.bind(var2)();
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
            var1 = var5[var1];
            var8 = undefined;
            var5 = var2.bind(var8)(var1);
            var2 = var5.getMobileReferralEmbedRedesignExperimentConfig;
            var1 = {};
            var6 = 'referral_dm_embed';
            var1['location'] = var6;
            var1 = var2.bind(var5)(var1);
            var5 = var1.enableRedesign;
            var11 = var9.referralTrialOfferId;
            var1 = null;
            if(!(var1 != var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot3;
            var2 = var6.getRelevantUserTrialOffer;
            var6 = var2.bind(var6)(var11);
            var11 = var1 == var6;
            var2 = undefined;
            if(var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var6.referrer_id;
case 4:
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var2 !== var7)) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 5;
            var2 = var11[var2];
            var5 = var5.bind(var8)(var2);
            var2 = var5.createReferralTrialEmbedRedesign;
            var20 = var5;
            var19 = var9;
            var18 = var3;
            var17 = var7;
            var16 = var6;
            var12 = var20[var2](var19, var18, var17, var16, var15);
            if(!(var1 != var12)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = _closure1_slot5;
            var5 = var2.bind(var8)(var3);
            var2 = {};
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 6;
            var11 = var15[var11];
            var11 = var14.bind(var8)(var11);
            var18 = var11.bind(var8)(var10);
            var19 = var2;
            var11 = copyDataProperties(var19, var18);
            var11 = 'referralTrialOfferInfoRedesign';
            var2[10] = var12;
            var12 = _closure1_slot0;
            var11 = 7;
            var11 = var15[var11];
            var13 = var12.bind(var8)(var11);
            var12 = var13.getAssetUriForEmbed;
            var11 = 8;
            var11 = var15[var11];
            var11 = var14.bind(var8)(var11);
            var12 = var12.bind(var13)(var11);
            var11 = 'iconUrl';
            var2[10] = var12;
            var12 = var5.iconTintColor;
            var11 = 'iconTintColor';
            var2[10] = var12;
            var11 = var5.iconDividerColor;
            var5 = 'iconDividerColor';
            var2[4] = var11;
            var5 = 'timestamp';
            var2[4] = var8;
            return var2;
case 9:
            return var1;
case 6:
            var5 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 9;
            var2 = var11[var2];
            var5 = var5.bind(var8)(var2);
            var2 = var5.createReferralTrialEmbedRedeemable;
            var20 = var5;
            var19 = var9;
            var18 = var3;
            var17 = var7;
            var16 = var6;
            var6 = var20[var2](var19, var18, var17, var16, var15);
            if(!(var1 != var6)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = _closure1_slot5;
            var3 = var2.bind(var8)(var3);
            var2 = {};
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 6;
            var5 = var9[var5];
            var5 = var7.bind(var8)(var5);
            var18 = var5.bind(var8)(var10);
            var19 = var2;
            var5 = copyDataProperties(var19, var18);
            var5 = 'referralTrialOfferInfo';
            var2[4] = var6;
            var5 = _closure1_slot0;
            var4 = 7;
            var4 = var9[var4];
            var6 = var5.bind(var8)(var4);
            var5 = var6.getAssetUriForEmbed;
            var4 = 8;
            var4 = var9[var4];
            var4 = var7.bind(var8)(var4);
            var5 = var5.bind(var6)(var4);
            var4 = 'iconUrl';
            var2[3] = var5;
            var5 = var3.iconTintColor;
            var4 = 'iconTintColor';
            var2[3] = var5;
            var4 = var3.iconDividerColor;
            var3 = 'iconDividerColor';
            var2[2] = var4;
            return var2;
case 11:
            return var1;
case 2:
            return var1;
        }
    };
    var3['createReferralSystemMessage'] = var2;
    return var1;
})();