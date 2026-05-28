// app/modules/messages/native/renderer/row_data/embeds/GiftIntentEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var1 = function splitSubHeader(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = global;
            var4 = var2.String;
            var3 = undefined;
            var2 = arg2;
            var3 = var4.bind(var3)(var2);
            var2 = var1.indexOf;
            var4 = var2.bind(var1)(var3);
            var2 = -1;
            if(!(var2 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.slice;
            var2 = 0;
            var2 = var3.bind(var1)(var2, var4);
            var3 = var1.slice;
            var3 = var3.bind(var1)(var4);
            var4 = '';
            if(!(var4 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = {};
            var4['text'] = var2;
            var2 = new Array(2);
            var2[0] = var4;
            var4 = {};
            var4['text'] = var3;
            var5 = true;
            var4['bold'] = var5;
            var2[1] = var4;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var4 = {};
            var4['text'] = var3;
            var3 = true;
            var4['bold'] = var3;
            var3 = new Array(1);
            var3[0] = var4;
            var2 = var3;
case 6:
            return var2;
case 2:
            var2 = {};
            var2['text'] = var1;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.giftingPrompt;
            var1 = null;
            if(!(var1 != var2)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var5 = var2.giftIntentType;
            var6 = var2.recipientUserId;
            var4 = _closure1_slot4;
            var2 = var4.getUser;
            var4 = var2.bind(var4)(var6);
            if(!(var1 != var4)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var7 = undefined;
            var8 = var8.bind(var7)(var2);
            var2 = var8.getName;
            var13 = var2.bind(var8)(var4);
            var8 = _closure1_slot3;
            var2 = var8.getFriendAnniversaryYears;
            var11 = var2.bind(var8)(var6);
            var2 = _closure1_slot5;
            var2 = var2.FRIEND_ANNIVERSARY;
            if(!(var5 !== var2)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 6;
            var2 = var9[var2];
            var8 = var8.bind(var7)(var2);
            var2 = var8.unhandledGiftIntent;
            var2 = var2.bind(var8)(var5);
            var8 = null;
            _fun0002_ip = 13; continue _fun0002;
case 11:
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 5;
            var2 = var16[var9];
            var2 = var12.bind(var7)(var2);
            var15 = var2.intl;
            var14 = var15.formatToPlainString;
            var2 = var16[var9];
            var2 = var12.bind(var7)(var2);
            var2 = var2.t;
            var10 = var2.S3fdq7;
            var2 = {};
            var2['numberOfYears'] = var11;
            var10 = var14.bind(var15)(var10, var2);
            var2 = {};
            var14 = var16[var9];
            var14 = var12.bind(var7)(var14);
            var15 = var14.intl;
            var14 = var15.formatToPlainString;
            var9 = var16[var9];
            var9 = var12.bind(var7)(var9);
            var9 = var9.t;
            var12 = var9.rtRr04;
            var9 = {};
            var9['friendUserName'] = var13;
            var9 = var14.bind(var15)(var12, var9);
            var2['headerText'] = var9;
            var9 = _closure1_slot7;
            var9 = var9.bind(var7)(var10, var11);
            var2['subHeaderParts'] = var9;
            var8 = var2;
case 13:
            if(!(var1 != var8)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = _closure1_slot4;
            var2 = var9.getCurrentUser;
            var14 = var2.bind(var9)();
            var2 = var4.getAvatarURL;
            var12 = 40;
            var9 = var2.bind(var4)(var7, var12);
            var2 = global;
            var4 = var2.HermesInternal;
            var4 = var4.concat;
            var11 = '';
            var10 = var4.bind(var11)(var9);
            var4 = var1 != var14;
            var9 = undefined;
            if(!var4) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var4 = var14.getAvatarURL;
            var4 = var4.bind(var14)(var7, var12);
            var2 = var2.HermesInternal;
            var2 = var2.concat;
            var9 = var2.bind(var11)(var4);
case 16:
            var4 = _closure1_slot6;
            var2 = arg2;
            var4 = var4.bind(var7)(var2);
            var2 = {};
            var2['recipientAvatarUrl'] = var10;
            var2['currentUserAvatarUrl'] = var9;
            var2['recipientName'] = var13;
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
            var12 = var5.intl;
            var11 = var12.formatToPlainString;
            var5 = var8[var3];
            var5 = var6.bind(var7)(var5);
            var5 = var5.t;
            var9 = var5.W7AF4C;
            var5 = {};
            var5['friendUserName'] = var13;
            var5 = var11.bind(var12)(var9, var5);
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
case 14:
            return var1;
case 9:
            return var1;
case 7:
            return var1;
        }
    };
    var3['createGiftIntentEmbed'] = var2;
    return var1;
})();