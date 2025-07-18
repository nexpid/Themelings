// app/modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function ReferralTrialEmbedInner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var9 = var2.trialOffer;
            var _closure2_slot0 = var9;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 26;
            var2 = var11[var2];
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var2 = var4.useMessageRendererTheme;
            var10 = var2.bind(var4)();
            var2 = 23;
            var2 = var11[var2];
            var4 = var3.bind(var5)(var2);
            var2 = var4.useEmbedThemeColors;
            var2 = var2.bind(var4)(var10);
            var2 = var2.colors;
            var15 = var2.headerColor;
            var16 = var2.titleColor;
            var12 = var2.subtitleColor;
            var8 = var2.borderColor;
            var7 = var2.backgroundColor;
            var14 = var2.thumbnailBackgroundColor;
            var2 = 27;
            var2 = var11[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useStateFromStoresObject;
            var13 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var13;
            var1 = function() {
                var1 = {};
                var6 = _closure1_slot5;
                var5 = var6.getUser;
                var2 = _closure2_slot0;
                var4 = var2.user_id;
                var4 = var5.bind(var6)(var4);
                var1['recipient'] = var4;
                var4 = _closure1_slot5;
                var3 = var4.getUser;
                var2 = var2.referrer_id;
                var2 = var3.bind(var4)(var2);
                var1['sender'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var4 = var1.recipient;
            var2 = var1.sender;
            var3 = _closure1_slot1;
            var1 = 17;
            var13 = var11[var1];
            var17 = var3.bind(var5)(var13);
            var13 = var17.useName;
            var19 = var13.bind(var17)(var4);
            var1 = var11[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useName;
            var22 = var1.bind(var3)(var2);
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 771; continue _fun0001 }
 224:
            if(!(var1 != var19)) { _fun0001_ip = 771; continue _fun0001 }
 231:
            if(!(var1 != var2)) { _fun0001_ip = 771; continue _fun0001 }
 238:
            if(!(var1 != var22)) { _fun0001_ip = 771; continue _fun0001 }
 245:
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 18;
            var2 = var11[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.isPremium;
            var4 = var2.bind(var3)(var4);
            var3 = _closure1_slot0;
            var2 = 19;
            var2 = var11[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.hasUserTrialOfferExpired;
            var2 = var2.bind(var3)(var9);
            var9 = _closure1_slot0;
            var3 = _closure1_slot2;
            var18 = 15;
            var11 = var3[var18];
            var11 = var9.bind(var5)(var11);
            var13 = var11.intl;
            if(var4) { _fun0001_ip = 405; continue _fun0001 }
 331:
            if(var2) { _fun0001_ip = 373; continue _fun0001 }
 334:
            var20 = var13.formatToPlainString;
            var11 = var3[var18];
            var11 = var9.bind(var5)(var11);
            var11 = var11.t;
            var17 = var11.1oPGmp;
            var11 = {};
            var11['username'] = var19;
            var17 = var20.bind(var13)(var17, var11);
            _fun0001_ip = 403; continue _fun0001;
 373:
            var20 = var13.string;
            var11 = var3[var18];
            var11 = var9.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.9SNdf3;
            var17 = var20.bind(var13)(var11);
 403:
            _fun0001_ip = 442; continue _fun0001;
 405:
            var11 = var13.formatToPlainString;
            var3 = var3[var18];
            var3 = var9.bind(var5)(var3);
            var3 = var3.t;
            var9 = var3.Mptau7;
            var3 = {};
            var3['username'] = var19;
            var17 = var11.bind(var13)(var9, var3);
 442:
            var3 = '';
            var13 = var3;
            if(var4) { _fun0001_ip = 510; continue _fun0001 }
 452:
            var13 = var3;
            if(var2) { _fun0001_ip = 510; continue _fun0001 }
 458:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var18];
            var3 = var9.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2[var18];
            var2 = var9.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.SGbw2N;
            var13 = var3.bind(var4)(var2);
 510:
            var4 = _closure1_slot11;
            var23 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 28;
            var2 = var11[var2];
            var3 = var23.bind(var5)(var2);
            var2 = {};
            var9 = _closure1_slot0;
            var6 = 13;
            var19 = var11[var6];
            var21 = var9.bind(var5)(var19);
            var20 = var21.getAssetUriForEmbed;
            var19 = 24;
            var19 = var11[var19];
            var19 = var23.bind(var5)(var19);
            var19 = var20.bind(var21)(var19);
            var2['thumbnailUrl'] = var19;
            var19 = var11[var18];
            var19 = var9.bind(var5)(var19);
            var21 = var19.intl;
            var20 = var21.formatToPlainString;
            var18 = var11[var18];
            var18 = var9.bind(var5)(var18);
            var18 = var18.t;
            var19 = var18.lieTqa;
            var18 = {};
            var18['username'] = var22;
            var19 = var20.bind(var21)(var19, var18);
            var18 = var19.toUpperCase;
            var18 = var18.bind(var19)();
            var2['headerText'] = var18;
            var2['titleText'] = var17;
            var2['titleColor'] = var16;
            var2['headerColor'] = var15;
            var2['thumbnailBackgroundColor'] = var14;
            var2['subtitle'] = var13;
            var2['subtitleColor'] = var12;
            var2['borderColor'] = var8;
            var2['backgroundColor'] = var7;
            var7 = 3;
            var2['thumbnailCornerRadius'] = var7;
            var6 = var11[var6];
            var8 = var9.bind(var5)(var6);
            var7 = var8.getAssetUriForEmbed;
            var6 = 25;
            var6 = var11[var6];
            var9 = var9.bind(var5)(var6);
            var6 = var9.getPremiumEmbedBackgroundSource;
            var6 = var6.bind(var9)(var10);
            var6 = var7.bind(var8)(var6);
            var2['splashUrl'] = var6;
            var6 = true;
            var2['splashHasRadialGradient'] = var6;
            var6 = 0.8;
            var2['splashOpacity'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 771:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = native4;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HelpdeskArticles;
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot11 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ReferralTrialEmbed(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var1 = var1.message;
            var _closure2_slot0 = var1;
            var2 = var1.referralTrialOfferId;
            var _closure2_slot1 = var2;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 27;
            var8 = var7[var4];
            var5 = undefined;
            var11 = var6.bind(var5)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var4 = _closure2_slot0;
                var1 = var4.getChannelId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var10.bind(var11)(var9, var8);
            var4 = var7[var4];
            var7 = var6.bind(var5)(var4);
            var6 = var7.useStateFromStores;
            var9 = _closure1_slot3;
            var4 = new Array(1);
            var4[0] = var9;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0003_ip = 40; continue _fun0003 }
 18:
                    var4 = _closure1_slot3;
                    var3 = var4.getRelevantUserTrialOffer;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
 40:
                    return var1;
                }
            };
            var6 = var6.bind(var7)(var4, var3);
            var4 = null;
            var3 = var4 != var8;
            if(!var3) { _fun0002_ip = 137; continue _fun0002 }
 127:
            var7 = var8.isDM;
            var3 = var7.bind(var8)();
 137:
            var1 = var1.author;
            var7 = var4 != var1;
            var1 = null;
            if(!var7) { _fun0002_ip = 187; continue _fun0002 }
 152:
            var1 = null;
            if(!var3) { _fun0002_ip = 187; continue _fun0002 }
 157:
            var3 = var4 != var6;
            var1 = null;
            if(!var3) { _fun0002_ip = 187; continue _fun0002 }
 166:
            var4 = _closure1_slot11;
            var3 = _closure1_slot12;
            var2 = {};
            var2['trialOffer'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 187:
            return var1;
        }
    };
    var3['default'] = var4;
    var4 = function createReferralTrialEmbedRedeemable(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var12 = arg3;
            var1 = var4.author;
            var29 = null;
            if(!(var29 != var1)) { _fun0004_ip = 367; continue _fun0004 }
 21:
            var1 = var4.referralTrialOfferId;
            if(!(var29 != var1)) { _fun0004_ip = 367; continue _fun0004 }
 34:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 10;
            var1 = var9[var1];
            var7 = undefined;
            var5 = var3.bind(var7)(var1);
            var3 = var5.createNativeStyleProperties;
            var1 = {};
            var8 = _closure1_slot1;
            var6 = 11;
            var10 = var9[var6];
            var10 = var8.bind(var7)(var10);
            var10 = var10.colors;
            var10 = var10.WHITE;
            var1['headerTextColor'] = var10;
            var10 = var9[var6];
            var10 = var8.bind(var7)(var10);
            var10 = var10.colors;
            var10 = var10.HEADER_PRIMARY;
            var1['titleColor'] = var10;
            var10 = var9[var6];
            var10 = var8.bind(var7)(var10);
            var10 = var10.colors;
            var10 = var10.TEXT_NORMAL;
            var1['bodyTextColor'] = var10;
            var10 = var9[var6];
            var10 = var8.bind(var7)(var10);
            var10 = var10.colors;
            var10 = var10.TEXT_MUTED;
            var1['footerTextColor'] = var10;
            var10 = var9[var6];
            var10 = var8.bind(var7)(var10);
            var10 = var10.colors;
            var10 = var10.INTERACTIVE_NORMAL;
            var1['subTextColor'] = var10;
            var10 = var9[var6];
            var10 = var8.bind(var7)(var10);
            var10 = var10.colors;
            var10 = var10.BACKGROUND_SECONDARY_ALT;
            var1['backgroundColor'] = var10;
            var6 = var9[var6];
            var6 = var8.bind(var7)(var6);
            var6 = var6.colors;
            var6 = var6.WHITE;
            var1['acceptLabelColor'] = var6;
            var3 = var3.bind(var5)(var1);
            var1 = arg2;
            var8 = var3.bind(var7)(var1);
            var1 = var8.headerTextColor;
            var6 = var8.titleColor;
            var3 = var8.bodyTextColor;
            var15 = var8.footerTextColor;
            var5 = var8.subTextColor;
            var13 = var8.acceptLabelColor;
            var8 = var8.backgroundColor;
            var11 = _closure1_slot4;
            var10 = var11.getChannel;
            var9 = var4.getChannelId;
            var9 = var9.bind(var4)();
            var10 = var10.bind(var11)(var9);
            var11 = var4.referralTrialOfferId;
            var4 = var29 != var10;
            if(!var4) { _fun0004_ip = 349; continue _fun0004 }
 339:
            var9 = var10.isDM;
            var4 = var9.bind(var10)();
 349:
            var10 = _closure1_slot3;
            var9 = var10.getRelevantUserTrialOffer;
            var30 = var9.bind(var10)(var11);
            if(var4) { _fun0004_ip = 371; continue _fun0004 }
 367:
            var4 = undefined;
            return var4;
 371:
            var4 = {};
            var4['backgroundColor'] = var8;
            var4['borderColor'] = var8;
            var8 = 3;
            var4['thumbnailCornerRadius'] = var8;
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 13;
            var8 = var16[var10];
            var17 = var9.bind(var7)(var8);
            var11 = var17.getAssetUriForEmbed;
            var14 = _closure1_slot1;
            var8 = 14;
            var8 = var16[var8];
            var8 = var14.bind(var7)(var8);
            var8 = var11.bind(var17)(var8);
            var4['headerLogoUrl'] = var8;
            var8 = 15;
            var11 = var16[var8];
            var11 = var9.bind(var7)(var11);
            var18 = var11.intl;
            var17 = var18.string;
            var11 = var16[var8];
            var11 = var9.bind(var7)(var11);
            var11 = var11.t;
            var11 = var11.gtNqJS;
            var17 = var17.bind(var18)(var11);
            var11 = var17.toLocaleLowerCase;
            var11 = var11.bind(var17)();
            var4['headerText'] = var11;
            var4['headerColor'] = var1;
            var1 = var16[var10];
            var11 = var9.bind(var7)(var1);
            var9 = var11.getAssetUriForEmbed;
            var1 = 16;
            var1 = var16[var1];
            var1 = var14.bind(var7)(var1);
            var1 = var9.bind(var11)(var1);
            var4['thumbnailUrl'] = var1;
            var11 = _closure1_slot5;
            var9 = var11.getUser;
            var14 = var29 == var30;
            var1 = undefined;
            if(var14) { _fun0004_ip = 575; continue _fun0004 }
 569:
            var1 = var30.user_id;
 575:
            var11 = var9.bind(var11)(var1);
            var14 = _closure1_slot5;
            var9 = var14.getUser;
            var16 = var29 == var30;
            var1 = undefined;
            if(var16) { _fun0004_ip = 605; continue _fun0004 }
 599:
            var1 = var30.referrer_id;
 605:
            var1 = var9.bind(var14)(var1);
            if(!(var29 != var11)) { _fun0004_ip = 2108; continue _fun0004 }
 617:
            if(!(var29 != var1)) { _fun0004_ip = 2108; continue _fun0004 }
 624:
            var16 = _closure1_slot1;
            var9 = _closure1_slot2;
            var14 = 17;
            var17 = var9[var14];
            var18 = var16.bind(var7)(var17);
            var17 = var18.getName;
            var26 = var17.bind(var18)(var1);
            var1 = var1.id;
            var1 = var1 === var12;
            var14 = var9[var14];
            var16 = var16.bind(var7)(var14);
            var14 = var16.getName;
            var24 = var14.bind(var16)(var11);
            var14 = _closure1_slot0;
            var16 = var9[var8];
            var16 = var14.bind(var7)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var9 = var9[var8];
            var9 = var14.bind(var7)(var9);
            var9 = var9.t;
            var14 = var9.IiWKws;
            var9 = {};
            var9['recipientUserName'] = var24;
            var9['senderUserName'] = var26;
            var9 = var16.bind(var17)(var14, var9);
            if(!(var29 != var30)) { _fun0004_ip = 1995; continue _fun0004 }
 758:
            var17 = _closure1_slot7;
            var16 = var17.getUserTrialOffer;
            var14 = _closure1_slot10;
            var18 = var16.bind(var17)(var14);
            var14 = function isReferralTrialProductOfferIdEnabled() {
                var4 = _closure1_slot8;
                var3 = var4.getOfferIds;
                var3 = var3.bind(var4)();
                var _closure3_slot0 = var3;
                var3 = global;
                var4 = var3.Object;
                var3 = var4.values;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 12;
                var6 = var6[var5];
                var5 = undefined;
                var5 = var7.bind(var5)(var6);
                var5 = var5.TrialIdToProductOfferId;
                var2 = _closure1_slot10;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.every;
                var1 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.has;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var14.bind(var7)();
            var17 = var30.id;
            var19 = var29 == var18;
            var14 = undefined;
            if(var19) { _fun0004_ip = 809; continue _fun0004 }
 804:
            var14 = var18.id;
 809:
            var14 = var17 === var14;
            if(!var14) { _fun0004_ip = 819; continue _fun0004 }
 816:
            var14 = var16;
 819:
            var17 = _closure1_slot1;
            var16 = _closure1_slot2;
            var28 = 18;
            var16 = var16[var28];
            var17 = var17.bind(var7)(var16);
            var16 = var17.isPremium;
            var16 = var16.bind(var17)(var11);
            var19 = var16;
            if(var16) { _fun0004_ip = 886; continue _fun0004 }
 856:
            var11 = var11.id;
            var19 = var16;
            if(!(var11 === var12)) { _fun0004_ip = 886; continue _fun0004 }
 868:
            var12 = _closure1_slot6;
            var11 = var12.getPremiumTypeSubscription;
            var11 = var11.bind(var12)();
            var19 = var29 != var11;
 886:
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 19;
            var11 = var16[var11];
            var12 = var12.bind(var7)(var11);
            var11 = var12.hasUserTrialOfferExpired;
            var12 = var11.bind(var12)(var30);
            var11 = var30.redeemed_at;
            var20 = var29 != var11;
            var11 = var30.expires_at;
            var17 = var29 != var11;
            var11 = undefined;
            var16 = undefined;
            if(!var17) { _fun0004_ip = 1190; continue _fun0004 }
 947:
            var11 = undefined;
            var16 = undefined;
            if(var12) { _fun0004_ip = 1190; continue _fun0004 }
 957:
            var11 = undefined;
            var16 = undefined;
            if(var19) { _fun0004_ip = 1190; continue _fun0004 }
 967:
            var11 = undefined;
            var16 = undefined;
            if(var20) { _fun0004_ip = 1190; continue _fun0004 }
 977:
            var27 = _closure1_slot0;
            var25 = _closure1_slot2;
            var17 = 20;
            var17 = var25[var17];
            var21 = var27.bind(var7)(var17);
            var18 = var21.getReferralTrialOfferExpirationCopy;
            var17 = global;
            var23 = var17.Date;
            var22 = var23.parse;
            var17 = var30.expires_at;
            var17 = var22.bind(var23)(var17);
            var18 = var18.bind(var21)(var17);
            var17 = var25[var8];
            var17 = var27.bind(var7)(var17);
            var23 = var17.intl;
            var22 = var23.formatToPlainString;
            var17 = var25[var8];
            var17 = var27.bind(var7)(var17);
            var17 = var17.t;
            var21 = var17.uj94Cw;
            var17 = {};
            var25 = var25[var28];
            var28 = var27.bind(var7)(var25);
            var27 = var28.formatIntervalDuration;
            var25 = {};
            var32 = var30.subscription_trial;
            var33 = var29 == var32;
            var31 = undefined;
            if(var33) { _fun0004_ip = 1112; continue _fun0004 }
 1106:
            var31 = var32.interval;
 1112:
            var25['intervalType'] = var31;
            var30 = var30.subscription_trial;
            var31 = var29 == var30;
            var29 = undefined;
            if(var31) { _fun0004_ip = 1138; continue _fun0004 }
 1132:
            var29 = var30.interval_count;
 1138:
            var25['intervalCount'] = var29;
            var25 = var27.bind(var28)(var25);
            var17['duration'] = var25;
            var23 = var22.bind(var23)(var21, var17);
            var22 = var23.replace;
            var21 = /\*/g;
            var17 = '';
            var16 = var22.bind(var23)(var21, var17);
            var11 = var18;
 1190:
            if(!var19) { _fun0004_ip = 1331; continue _fun0004 }
 1196:
            if(var1) { _fun0004_ip = 1331; continue _fun0004 }
 1202:
            if(var20) { _fun0004_ip = 1331; continue _fun0004 }
 1208:
            var18 = _closure1_slot0;
            var28 = _closure1_slot2;
            var17 = var28[var8];
            var17 = var18.bind(var7)(var17);
            var22 = var17.intl;
            var21 = var22.formatToParts;
            var17 = var28[var8];
            var17 = var18.bind(var7)(var17);
            var17 = var17.t;
            var18 = var17.LwCwT0;
            var17 = {};
            var23 = {};
            var25 = 'bindOpenUrl';
            var23['action'] = var25;
            var27 = _closure1_slot1;
            var25 = 21;
            var25 = var28[var25];
            var28 = var27.bind(var7)(var25);
            var27 = var28.getArticleURL;
            var25 = _closure1_slot9;
            var25 = var25.REFERRAL_PROGRAM;
            var25 = var27.bind(var28)(var25);
            var23['url'] = var25;
            var17['helpdeskArticle'] = var23;
            var17 = var21.bind(var22)(var18, var17);
            var18 = undefined;
            _fun0004_ip = 1720; continue _fun0004;
 1331:
            if(var19) { _fun0004_ip = 1659; continue _fun0004 }
 1337:
            if(!var12) { _fun0004_ip = 1402; continue _fun0004 }
 1340:
            if(var20) { _fun0004_ip = 1402; continue _fun0004 }
 1343:
            var25 = _closure1_slot0;
            var21 = _closure1_slot2;
            var22 = var21[var8];
            var22 = var25.bind(var7)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var21[var8];
            var21 = var25.bind(var7)(var21);
            var21 = var21.t;
            var21 = var21.9SNdf3;
            var18 = var22.bind(var23)(var21);
            var17 = undefined;
            _fun0004_ip = 1720; continue _fun0004;
 1402:
            if(var14) { _fun0004_ip = 1532; continue _fun0004 }
 1408:
            if(var20) { _fun0004_ip = 1532; continue _fun0004 }
 1411:
            if(var1) { _fun0004_ip = 1532; continue _fun0004 }
 1414:
            var21 = _closure1_slot0;
            var29 = _closure1_slot2;
            var20 = var29[var8];
            var20 = var21.bind(var7)(var20);
            var23 = var20.intl;
            var22 = var23.formatToParts;
            var20 = var29[var8];
            var20 = var21.bind(var7)(var20);
            var20 = var20.t;
            var21 = var20.7O7Zg4;
            var20 = {};
            var25 = {};
            var27 = 'bindOpenUrl';
            var25['action'] = var27;
            var28 = _closure1_slot1;
            var27 = 21;
            var27 = var29[var27];
            var29 = var28.bind(var7)(var27);
            var28 = var29.getArticleURL;
            var27 = _closure1_slot9;
            var27 = var27.REFERRAL_PROGRAM;
            var27 = var28.bind(var29)(var27);
            var25['url'] = var27;
            var20['helpdeskArticle'] = var25;
            var20 = var22.bind(var23)(var21, var20);
            _fun0004_ip = 1652; continue _fun0004;
 1532:
            var22 = _closure1_slot0;
            var30 = _closure1_slot2;
            var21 = var30[var8];
            var21 = var22.bind(var7)(var21);
            var25 = var21.intl;
            var23 = var25.formatToParts;
            var21 = var30[var8];
            var21 = var22.bind(var7)(var21);
            var21 = var21.t;
            var22 = var21.mVzEGx;
            var21 = {};
            var27 = {};
            var28 = 'bindOpenUrl';
            var27['action'] = var28;
            var29 = _closure1_slot1;
            var28 = 21;
            var28 = var30[var28];
            var30 = var29.bind(var7)(var28);
            var29 = var30.getArticleURL;
            var28 = _closure1_slot9;
            var28 = var28.REFERRAL_PROGRAM;
            var28 = var29.bind(var30)(var28);
            var27['url'] = var28;
            var21['helpdeskArticle'] = var27;
            var21['username'] = var26;
            var20 = var23.bind(var25)(var22, var21);
 1652:
            var17 = var20;
            var18 = undefined;
            _fun0004_ip = 1720; continue _fun0004;
 1659:
            var21 = _closure1_slot0;
            var20 = _closure1_slot2;
            var22 = var20[var8];
            var22 = var21.bind(var7)(var22);
            var23 = var22.intl;
            var22 = var23.formatToPlainString;
            var20 = var20[var8];
            var20 = var21.bind(var7)(var20);
            var20 = var20.t;
            var21 = var20.Mptau7;
            var20 = {};
            var20['username'] = var24;
            var18 = var22.bind(var23)(var21, var20);
            var17 = undefined;
 1720:
            var12 = !var12;
            if(!var12) { _fun0004_ip = 1729; continue _fun0004 }
 1726:
            var12 = !var19;
 1729:
            if(!var12) { _fun0004_ip = 1735; continue _fun0004 }
 1732:
            var12 = var14;
 1735:
            if(!var12) { _fun0004_ip = 1741; continue _fun0004 }
 1738:
            var12 = !var1;
 1741:
            var14 = {};
            var35 = var14;
            var34 = var4;
            var1 = copyDataProperties(var35, var34);
            var1 = 'titleText';
            var14[var1] = var9;
            var1 = 'titleColor';
            var14[var1] = var6;
            var1 = 'bodyText';
            var14[var1] = var18;
            var1 = 'structuredBodyText';
            var14[var1] = var17;
            var1 = 'bodyTextColor';
            var14[var1] = var3;
            var1 = 'subText';
            var14[var1] = var11;
            var1 = 'subTextColor';
            var14[var1] = var5;
            var11 = 'canBeAccepted';
            var14[var11] = var12;
            var1 = var14;
            if(!var12) { _fun0004_ip = 1993; continue _fun0004 }
 1836:
            var5 = {};
            var35 = var5;
            var34 = var14;
            var14 = copyDataProperties(var35, var34);
            var14 = 'footerText';
            var5[var14] = var16;
            var14 = 'footerTextColor';
            var5[var14] = var15;
            var5[var11] = var12;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = var14[var8];
            var12 = var11.bind(var7)(var12);
            var16 = var12.intl;
            var15 = var16.string;
            var12 = var14[var8];
            var12 = var11.bind(var7)(var12);
            var12 = var12.t;
            var12 = var12.bXTClZ;
            var15 = var15.bind(var16)(var12);
            var12 = 'acceptLabelText';
            var5[var12] = var15;
            var12 = 'acceptLabelColor';
            var5[var12] = var13;
            var10 = var14[var10];
            var12 = var11.bind(var7)(var10);
            var11 = var12.getAssetUriForEmbed;
            var13 = _closure1_slot1;
            var10 = 22;
            var10 = var14[var10];
            var10 = var13.bind(var7)(var10);
            var11 = var11.bind(var12)(var10);
            var10 = 'acceptLabelIconUrl';
            var5[var10] = var11;
            var1 = var5;
 1993:
            return var1;
 1995:
            var1 = {};
            var35 = var1;
            var34 = var4;
            var5 = copyDataProperties(var35, var34);
            var5 = 'titleText';
            var1[var5] = var9;
            var5 = 'titleColor';
            var1[var5] = var6;
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = var5[var8];
            var6 = var10.bind(var7)(var6);
            var9 = var6.intl;
            var6 = var9.string;
            var5 = var5[var8];
            var5 = var10.bind(var7)(var5);
            var5 = var5.t;
            var5 = var5.eEz1Nz;
            var6 = var6.bind(var9)(var5);
            var5 = 'bodyText';
            var1[var5] = var6;
            var5 = 'bodyTextColor';
            var1[var5] = var3;
            var6 = false;
            var5 = 'canBeAccepted';
            var1[var5] = var6;
            return var1;
 2108:
            var1 = {};
            var35 = var1;
            var34 = var4;
            var4 = copyDataProperties(var35, var34);
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = var2[var8];
            var4 = var6.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var2 = var2[var8];
            var2 = var6.bind(var7)(var2);
            var2 = var2.t;
            var2 = var2.eEz1Nz;
            var4 = var4.bind(var5)(var2);
            var2 = 'bodyText';
            var1[var2] = var4;
            var2 = 'bodyTextColor';
            var1[var2] = var3;
            var3 = false;
            var2 = 'canBeAccepted';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['createReferralTrialEmbedRedeemable'] = var4;
    var2 = function createReferralTrialEmbed(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var7 = arg2;
            var3 = var2.author;
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 173; continue _fun0005 }
 21:
            var3 = var2.referralTrialOfferId;
            if(!(var1 != var3)) { _fun0005_ip = 173; continue _fun0005 }
 34:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 23;
            var3 = var5[var3];
            var8 = undefined;
            var3 = var4.bind(var8)(var3);
            var3 = var3.bind(var8)(var7);
            var3 = var3.colors;
            var13 = var3.headerColor;
            var14 = var3.titleColor;
            var10 = var3.subtitleColor;
            var5 = var3.borderColor;
            var4 = var3.backgroundColor;
            var12 = var3.thumbnailBackgroundColor;
            var9 = _closure1_slot4;
            var6 = var9.getChannel;
            var3 = var2.getChannelId;
            var3 = var3.bind(var2)();
            var6 = var6.bind(var9)(var3);
            var9 = var2.referralTrialOfferId;
            var2 = var1 != var6;
            if(!var2) { _fun0005_ip = 151; continue _fun0005 }
 141:
            var3 = var6.isDM;
            var2 = var3.bind(var6)();
 151:
            var6 = _closure1_slot3;
            var3 = var6.getRelevantUserTrialOffer;
            var9 = var3.bind(var6)(var9);
            if(!var2) { _fun0005_ip = 173; continue _fun0005 }
 169:
            if(!(var1 == var9)) { _fun0005_ip = 177; continue _fun0005 }
 173:
            var2 = undefined;
            return var2;
 177:
            var6 = _closure1_slot5;
            var3 = var6.getUser;
            var2 = var9.user_id;
            var21 = var3.bind(var6)(var2);
            var6 = _closure1_slot5;
            var3 = var6.getUser;
            var2 = var9.referrer_id;
            var22 = var3.bind(var6)(var2);
            if(!(var1 != var21)) { _fun0005_ip = 814; continue _fun0005 }
 226:
            if(!(var1 != var22)) { _fun0005_ip = 814; continue _fun0005 }
 233:
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 18;
            var2 = var11[var2];
            var3 = var3.bind(var8)(var2);
            var2 = var3.isPremium;
            var6 = var2.bind(var3)(var21);
            var3 = _closure1_slot0;
            var2 = 19;
            var2 = var11[var2];
            var3 = var3.bind(var8)(var2);
            var2 = var3.hasUserTrialOfferExpired;
            var2 = var2.bind(var3)(var9);
            var9 = _closure1_slot0;
            var23 = _closure1_slot2;
            var16 = 15;
            var3 = var23[var16];
            var3 = var9.bind(var8)(var3);
            var18 = var3.intl;
            if(var6) { _fun0005_ip = 420; continue _fun0005 }
 319:
            if(var2) { _fun0005_ip = 388; continue _fun0005 }
 322:
            var15 = var18.formatToPlainString;
            var3 = var23[var16];
            var3 = var9.bind(var8)(var3);
            var3 = var3.t;
            var11 = var3.1oPGmp;
            var3 = {};
            var20 = _closure1_slot1;
            var19 = 17;
            var19 = var23[var19];
            var20 = var20.bind(var8)(var19);
            var19 = var20.getName;
            var19 = var19.bind(var20)(var21);
            var3['username'] = var19;
            var15 = var15.bind(var18)(var11, var3);
            _fun0005_ip = 418; continue _fun0005;
 388:
            var11 = var18.string;
            var3 = var23[var16];
            var3 = var9.bind(var8)(var3);
            var3 = var3.t;
            var3 = var3.9SNdf3;
            var15 = var11.bind(var18)(var3);
 418:
            _fun0005_ip = 484; continue _fun0005;
 420:
            var11 = var18.formatToPlainString;
            var3 = var23[var16];
            var3 = var9.bind(var8)(var3);
            var3 = var3.t;
            var9 = var3.Mptau7;
            var3 = {};
            var20 = _closure1_slot1;
            var19 = 17;
            var19 = var23[var19];
            var20 = var20.bind(var8)(var19);
            var19 = var20.getName;
            var19 = var19.bind(var20)(var21);
            var3['username'] = var19;
            var15 = var11.bind(var18)(var9, var3);
 484:
            var3 = '';
            var11 = var3;
            if(var6) { _fun0005_ip = 552; continue _fun0005 }
 494:
            var11 = var3;
            if(var2) { _fun0005_ip = 552; continue _fun0005 }
 500:
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var16];
            var3 = var9.bind(var8)(var3);
            var6 = var3.intl;
            var3 = var6.string;
            var2 = var2[var16];
            var2 = var9.bind(var8)(var2);
            var2 = var2.t;
            var2 = var2.SGbw2N;
            var11 = var3.bind(var6)(var2);
 552:
            var2 = {};
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 13;
            var18 = var9[var3];
            var19 = var6.bind(var8)(var18);
            var18 = var19.getAssetUriForEmbed;
            var21 = _closure1_slot1;
            var17 = 24;
            var17 = var9[var17];
            var17 = var21.bind(var8)(var17);
            var17 = var18.bind(var19)(var17);
            var2['thumbnailUrl'] = var17;
            var17 = var9[var16];
            var17 = var6.bind(var8)(var17);
            var19 = var17.intl;
            var18 = var19.formatToPlainString;
            var16 = var9[var16];
            var16 = var6.bind(var8)(var16);
            var16 = var16.t;
            var17 = var16.lieTqa;
            var16 = {};
            var20 = 17;
            var20 = var9[var20];
            var21 = var21.bind(var8)(var20);
            var20 = var21.getName;
            var20 = var20.bind(var21)(var22);
            var16['username'] = var20;
            var17 = var18.bind(var19)(var17, var16);
            var16 = var17.toUpperCase;
            var16 = var16.bind(var17)();
            var2['headerText'] = var16;
            var2['titleText'] = var15;
            var2['titleColor'] = var14;
            var2['headerColor'] = var13;
            var2['thumbnailBackgroundColor'] = var12;
            var2['subtitle'] = var11;
            var2['subtitleColor'] = var10;
            var2['borderColor'] = var5;
            var2['backgroundColor'] = var4;
            var4 = 3;
            var2['thumbnailCornerRadius'] = var4;
            var3 = var9[var3];
            var5 = var6.bind(var8)(var3);
            var4 = var5.getAssetUriForEmbed;
            var3 = 25;
            var3 = var9[var3];
            var6 = var6.bind(var8)(var3);
            var3 = var6.getPremiumEmbedBackgroundSource;
            var3 = var3.bind(var6)(var7);
            var3 = var4.bind(var5)(var3);
            var2['splashUrl'] = var3;
            var3 = true;
            var2['splashHasRadialGradient'] = var3;
            var3 = 0.8;
            var2['splashOpacity'] = var3;
            return var2;
 814:
            return var1;
        }
    };
    var3['createReferralTrialEmbed'] = var2;
    return var1;
})();