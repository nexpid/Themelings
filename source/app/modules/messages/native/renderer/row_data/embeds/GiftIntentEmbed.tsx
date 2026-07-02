// app/modules/messages/native/renderer/row_data/embeds/GiftIntentEmbed.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.GiftIntentType;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createNativeStyleProperties;
    var4 = {};
    var9 = 4;
    var11 = var6[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_STRONG;
    var4['headerTextColor'] = var11;
    var11 = var6[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_SUBTLE;
    var4['subHeaderTextColor'] = var11;
    var11 = var6[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var4['backgroundColor'] = var11;
    var9 = var6[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_MUTED;
    var4['borderColor'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/GiftIntentEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createGiftIntentEmbed(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.giftingPrompt;
            var1 = null;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var2.giftIntentType;
            var6 = var2.recipientUserId;
            var4 = _closure1_slot4;
            var2 = var4.getUser;
            var4 = var2.bind(var4)(var6);
            if(!(var1 != var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var7 = undefined;
            var8 = var8.bind(var7)(var2);
            var2 = var8.getName;
            var9 = var2.bind(var8)(var4);
            var8 = _closure1_slot3;
            var2 = var8.getFriendAnniversaryYears;
            var15 = var2.bind(var8)(var6);
            var2 = _closure1_slot5;
            var2 = var2.FRIEND_ANNIVERSARY;
            if(!(var2 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot5;
            var2 = var2.UNSPECIFIED;
            var8 = null;
            if(!(var2 !== var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 6;
            var2 = var11[var2];
            var10 = var10.bind(var7)(var2);
            var2 = var10.unhandledGiftIntent;
            var2 = var2.bind(var10)(var5);
            var8 = null;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var2 = {};
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 5;
            var11 = var16[var10];
            var11 = var12.bind(var7)(var11);
            var14 = var11.intl;
            var13 = var14.string;
            var11 = var16[var10];
            var11 = var12.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.CeQIwZ;
            var11 = var13.bind(var14)(var11);
            var2['headerText'] = var11;
            var11 = {};
            var13 = var16[var10];
            var13 = var12.bind(var7)(var13);
            var14 = var13.intl;
            var13 = var14.formatToPlainString;
            var10 = var16[var10];
            var10 = var12.bind(var7)(var10);
            var10 = var10.t;
            var12 = var10.PpG27s;
            var10 = {};
            var10['numberOfYears'] = var15;
            var10 = var13.bind(var14)(var12, var10);
            var11['text'] = var10;
            var10 = new Array(1);
            var10[0] = var11;
            var2['subHeaderParts'] = var10;
            var8 = var2;
case 8:
            if(!(var1 != var8)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = _closure1_slot4;
            var2 = var10.getCurrentUser;
            var14 = var2.bind(var10)();
            var2 = var4.getAvatarURL;
            var13 = 40;
            var10 = var2.bind(var4)(var7, var13);
            var2 = global;
            var4 = var2.HermesInternal;
            var4 = var4.concat;
            var12 = '';
            var11 = var4.bind(var12)(var10);
            var4 = var1 != var14;
            var10 = undefined;
            if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var14.getAvatarURL;
            var4 = var4.bind(var14)(var7, var13);
            var2 = var2.HermesInternal;
            var2 = var2.concat;
            var10 = var2.bind(var12)(var4);
case 12:
            var4 = _closure1_slot6;
            var2 = arg2;
            var4 = var4.bind(var7)(var2);
            var2 = {};
            var2['recipientAvatarUrl'] = var11;
            var2['currentUserAvatarUrl'] = var10;
            var2['recipientName'] = var9;
            var9 = var8.headerText;
            var2['headerText'] = var9;
            var8 = var8.subHeaderParts;
            var2['subHeaderParts'] = var8;
            var2['recipientUserId'] = var6;
            var2['giftIntentType'] = var5;
            var5 = var4.headerTextColor;
            var2['headerTextColor'] = var5;
            var5 = var4.subHeaderTextColor;
            var2['subHeaderTextColor'] = var5;
            var5 = var4.backgroundColor;
            var2['backgroundColor'] = var5;
            var4 = var4.borderColor;
            var2['borderColor'] = var4;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 8;
            var5 = var8[var4];
            var9 = var6.bind(var7)(var5);
            var5 = var9.getAssetUriForEmbed;
            var10 = _closure1_slot1;
            var3 = 9;
            var3 = var8[var3];
            var3 = var10.bind(var7)(var3);
            var3 = var5.bind(var9)(var3);
            var2['subHeaderIconUrl'] = var3;
            var3 = 5;
            var5 = var8[var3];
            var5 = var6.bind(var7)(var5);
            var11 = var5.intl;
            var9 = var11.string;
            var5 = var8[var3];
            var5 = var6.bind(var7)(var5);
            var5 = var5.t;
            var5 = var5.ilhtIa;
            var5 = var9.bind(var11)(var5);
            var2['primaryCtaLabel'] = var5;
            var5 = var8[var4];
            var11 = var6.bind(var7)(var5);
            var9 = var11.getAssetUriForEmbed;
            var5 = 10;
            var5 = var8[var5];
            var5 = var10.bind(var7)(var5);
            var5 = var9.bind(var11)(var5);
            var2['primaryCtaIconUrl'] = var5;
            var4 = var8[var4];
            var9 = var6.bind(var7)(var4);
            var5 = var9.getAssetUriForEmbed;
            var4 = 11;
            var4 = var8[var4];
            var4 = var10.bind(var7)(var4);
            var4 = var5.bind(var9)(var4);
            var2['secondaryCtaIconUrl'] = var4;
            var4 = var8[var3];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var6.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.I5gL2H;
            var3 = var4.bind(var5)(var3);
            var2['secondaryCtaAccessibilityLabel'] = var3;
            return var2;
case 10:
            return var1;
case 4:
            return var1;
case 2:
            return var1;
        }
    };
    var3['createGiftIntentEmbed'] = var2;
    return var1;
})();