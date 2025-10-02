// app/modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HelpdeskArticles;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
    var _closure1_slot10 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/ReferralTrialEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createReferralTrialEmbedRedeemable(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var12 = arg3;
            var1 = var4.author;
            var29 = null;
            if(!(var29 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var4.referralTrialOfferId;
            if(!(var29 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 8;
            var1 = var9[var1];
            var7 = undefined;
            var5 = var3.bind(var7)(var1);
            var3 = var5.createNativeStyleProperties;
            var1 = {};
            var8 = _closure1_slot1;
            var6 = 9;
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
            if(!var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var9 = var10.isDM;
            var4 = var9.bind(var10)();
case 5:
            var10 = _closure1_slot3;
            var9 = var10.getRelevantUserTrialOffer;
            var30 = var9.bind(var10)(var11);
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 2:
            var4 = undefined;
            return var4;
case 7:
            var4 = {};
            var4['backgroundColor'] = var8;
            var4['borderColor'] = var8;
            var8 = 3;
            var4['thumbnailCornerRadius'] = var8;
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 11;
            var8 = var16[var10];
            var17 = var9.bind(var7)(var8);
            var11 = var17.getAssetUriForEmbed;
            var14 = _closure1_slot1;
            var8 = 12;
            var8 = var16[var8];
            var8 = var14.bind(var7)(var8);
            var8 = var11.bind(var17)(var8);
            var4['headerLogoUrl'] = var8;
            var8 = 13;
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
            var1 = 14;
            var1 = var16[var1];
            var1 = var14.bind(var7)(var1);
            var1 = var9.bind(var11)(var1);
            var4['thumbnailUrl'] = var1;
            var11 = _closure1_slot5;
            var9 = var11.getUser;
            var14 = var29 == var30;
            var1 = undefined;
            if(var14) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = var30.user_id;
case 8:
            var11 = var9.bind(var11)(var1);
            var14 = _closure1_slot5;
            var9 = var14.getUser;
            var16 = var29 == var30;
            var1 = undefined;
            if(var16) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var30.referrer_id;
case 10:
            var1 = var9.bind(var14)(var1);
            if(!(var29 != var11)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            if(!(var29 != var1)) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var16 = _closure1_slot1;
            var9 = _closure1_slot2;
            var14 = 15;
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
            var9['senderUserName'] = var26;
            var9['recipientUserName'] = var24;
            var9 = var16.bind(var17)(var14, var9);
            if(!(var29 != var30)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
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
                var5 = 10;
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
            if(var19) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var14 = var18.id;
case 17:
            var14 = var17 === var14;
            if(!var14) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var14 = var16;
case 19:
            var17 = _closure1_slot1;
            var16 = _closure1_slot2;
            var28 = 16;
            var16 = var16[var28];
            var17 = var17.bind(var7)(var16);
            var16 = var17.isPremium;
            var16 = var16.bind(var17)(var11);
            var19 = var16;
            if(var16) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var11 = var11.id;
            var19 = var16;
            if(!(var11 === var12)) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            var12 = _closure1_slot6;
            var11 = var12.getPremiumTypeSubscription;
            var11 = var11.bind(var12)();
            var19 = var29 != var11;
case 21:
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 17;
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
            if(!var17) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var11 = undefined;
            var16 = undefined;
            if(var12) { _fun0001_ip = 24; continue _fun0001 }
case 26:
            var11 = undefined;
            var16 = undefined;
            if(var19) { _fun0001_ip = 24; continue _fun0001 }
case 27:
            var11 = undefined;
            var16 = undefined;
            if(var20) { _fun0001_ip = 24; continue _fun0001 }
case 28:
            var27 = _closure1_slot0;
            var25 = _closure1_slot2;
            var17 = 18;
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
            if(var33) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var31 = var32.interval;
case 29:
            var25['intervalType'] = var31;
            var30 = var30.subscription_trial;
            var31 = var29 == var30;
            var29 = undefined;
            if(var31) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var29 = var30.interval_count;
case 31:
            var25['intervalCount'] = var29;
            var25 = var27.bind(var28)(var25);
            var17['duration'] = var25;
            var23 = var22.bind(var23)(var21, var17);
            var22 = var23.replace;
            var21 = /\*/g;
            var17 = '';
            var16 = var22.bind(var23)(var21, var17);
            var11 = var18;
case 24:
            if(!var19) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            if(var1) { _fun0001_ip = 33; continue _fun0001 }
case 35:
            if(var20) { _fun0001_ip = 33; continue _fun0001 }
case 36:
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
            var25 = 19;
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
            _fun0001_ip = 37; continue _fun0001;
case 33:
            if(var19) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            if(!var12) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            if(var20) { _fun0001_ip = 40; continue _fun0001 }
case 42:
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
            _fun0001_ip = 37; continue _fun0001;
case 40:
            if(var14) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            if(var20) { _fun0001_ip = 43; continue _fun0001 }
case 45:
            if(var1) { _fun0001_ip = 43; continue _fun0001 }
case 46:
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
            var27 = 19;
            var27 = var29[var27];
            var29 = var28.bind(var7)(var27);
            var28 = var29.getArticleURL;
            var27 = _closure1_slot9;
            var27 = var27.REFERRAL_PROGRAM;
            var27 = var28.bind(var29)(var27);
            var25['url'] = var27;
            var20['helpdeskArticle'] = var25;
            var20 = var22.bind(var23)(var21, var20);
            _fun0001_ip = 47; continue _fun0001;
case 43:
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
            var28 = 19;
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
case 47:
            var17 = var20;
            var18 = undefined;
            _fun0001_ip = 37; continue _fun0001;
case 38:
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
case 37:
            var12 = !var12;
            if(!var12) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var12 = !var19;
case 48:
            if(!var12) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var12 = var14;
case 50:
            if(!var12) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var12 = !var1;
case 52:
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
            if(!var12) { _fun0001_ip = 54; continue _fun0001 }
case 55:
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
            var10 = 20;
            var10 = var14[var10];
            var10 = var13.bind(var7)(var10);
            var11 = var11.bind(var12)(var10);
            var10 = 'acceptLabelIconUrl';
            var5[var10] = var11;
            var1 = var5;
case 54:
            return var1;
case 15:
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
case 12:
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
    var3['createReferralTrialEmbedRedeemable'] = var2;
    return var1;
})();