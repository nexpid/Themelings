// app/modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function WhatYouLose(arg1) {
        var1 = arg1;
        var11 = var1.listingId;
        var27 = var1.guild;
        var1 = var1.subscription;
        var2 = _closure1_slot14;
        var4 = undefined;
        var9 = var2.bind(var4)();
        var5 = _closure1_slot2;
        var12 = _closure1_slot3;
        var2 = 8;
        var3 = var12[var2];
        var8 = var5.bind(var4)(var3);
        var7 = var8.useTierEmojiIds;
        var3 = var27.id;
        var7 = var7.bind(var8)(var11, var3);
        var3 = _closure1_slot5;
        var8 = 1;
        var7 = var3.bind(var4)(var7, var8);
        var3 = 0;
        var13 = var7[var3];
        var7 = var12[var2];
        var10 = var5.bind(var4)(var7);
        var7 = var10.useChannelBenefits;
        var10 = var7.bind(var10)(var11);
        var7 = _closure1_slot5;
        var7 = var7.bind(var4)(var10, var8);
        var10 = var7[var3];
        var7 = var12[var2];
        var14 = var5.bind(var4)(var7);
        var7 = var14.useIntangibleBenefits;
        var14 = var7.bind(var14)(var11);
        var7 = _closure1_slot5;
        var7 = var7.bind(var4)(var14, var8);
        var7 = var7[var3];
        var2 = var12[var2];
        var5 = var5.bind(var4)(var2);
        var2 = var5.useName;
        var5 = var2.bind(var5)(var11);
        var2 = _closure1_slot5;
        var2 = var2.bind(var4)(var5, var8);
        var26 = var2[var3];
        var11 = _closure1_slot1;
        var2 = 9;
        var2 = var12[var2];
        var2 = var11.bind(var4)(var2);
        var1 = var1.currentPeriodEnd;
        var3 = var2.bind(var4)(var1);
        var2 = var3.format;
        var1 = _closure1_slot12;
        var14 = var2.bind(var3)(var1);
        var8 = _closure1_slot0;
        var19 = 10;
        var1 = var12[var19];
        var1 = var8.bind(var4)(var1);
        var5 = var1.intl;
        var3 = var5.format;
        var1 = var12[var19];
        var1 = var8.bind(var4)(var1);
        var1 = var1.t;
        var2 = var1.EtAXzC;
        var1 = {};
        var1['subscriptionEndDate'] = var14;
        var18 = var3.bind(var5)(var2, var1);
        var1 = var12[var19];
        var1 = var8.bind(var4)(var1);
        var5 = var1.intl;
        var3 = var5.formatToPlainString;
        var1 = var12[var19];
        var1 = var8.bind(var4)(var1);
        var1 = var1.t;
        var2 = var1.OVlNGT;
        var1 = {};
        var13 = var13.size;
        var1['numEmojis'] = var13;
        var10 = var10.length;
        var1['numChannels'] = var10;
        var7 = var7.length;
        var1['numIntangibles'] = var7;
        var14 = var3.bind(var5)(var2, var1);
        var3 = _closure1_slot11;
        var2 = _closure1_slot7;
        var1 = {};
        var5 = var9.container;
        var1['style'] = var5;
        var15 = _closure1_slot11;
        var13 = _closure1_slot7;
        var5 = {};
        var7 = var9.header;
        var5['style'] = var7;
        var16 = _closure1_slot10;
        var7 = 11;
        var7 = var12[var7];
        var10 = var11.bind(var4)(var7);
        var7 = {};
        var7['guild'] = var27;
        var7 = var16.bind(var4)(var10, var7);
        var16 = new Array(3);
        var16[0] = var7;
        var21 = _closure1_slot10;
        var17 = 12;
        var7 = var12[var17];
        var7 = var8.bind(var4)(var7);
        var20 = var7.Spacer;
        var7 = {};
        var10 = 16;
        var7['size'] = var10;
        var7 = var21.bind(var4)(var20, var7);
        var16[1] = var7;
        var22 = _closure1_slot11;
        var21 = _closure1_slot7;
        var20 = {};
        var25 = _closure1_slot10;
        var7 = 13;
        var23 = var12[var7];
        var23 = var8.bind(var4)(var23);
        var24 = var23.Text;
        var23 = {'variant': 'text-md/semibold', 'color': 'interactive-text-active'};
        var23['children'] = var26;
        var24 = var25.bind(var4)(var24, var23);
        var23 = new Array(3);
        var23[0] = var24;
        var26 = _closure1_slot10;
        var24 = var12[var17];
        var24 = var8.bind(var4)(var24);
        var25 = var24.Spacer;
        var24 = {};
        var28 = 2;
        var24['size'] = var28;
        var24 = var26.bind(var4)(var25, var24);
        var23[1] = var24;
        var26 = _closure1_slot10;
        var24 = var12[var7];
        var24 = var8.bind(var4)(var24);
        var25 = var24.Text;
        var24 = {'variant': 'text-sm/medium', 'color': 'interactive-text-default'};
        var27 = var27.name;
        var24['children'] = var27;
        var24 = var26.bind(var4)(var25, var24);
        var23[2] = var24;
        var20['children'] = var23;
        var20 = var22.bind(var4)(var21, var20);
        var16[2] = var20;
        var5['children'] = var16;
        var13 = var15.bind(var4)(var13, var5);
        var5 = new Array(7);
        var5[0] = var13;
        var16 = _closure1_slot10;
        var13 = 14;
        var13 = var12[var13];
        var15 = var11.bind(var4)(var13);
        var13 = {};
        var20 = {};
        var20['marginVertical'] = var10;
        var13['style'] = var20;
        var13 = var16.bind(var4)(var15, var13);
        var5[1] = var13;
        var16 = _closure1_slot10;
        var13 = var12[var7];
        var13 = var8.bind(var4)(var13);
        var15 = var13.Text;
        var13 = {'variant': 'text-md/semibold', 'color': 'interactive-text-active'};
        var20 = var12[var19];
        var20 = var8.bind(var4)(var20);
        var21 = var20.intl;
        var20 = var21.string;
        var19 = var12[var19];
        var19 = var8.bind(var4)(var19);
        var19 = var19.t;
        var19 = var19["9SgXmT"];
        var19 = var20.bind(var21)(var19);
        var13['children'] = var19;
        var13 = var16.bind(var4)(var15, var13);
        var5[2] = var13;
        var16 = _closure1_slot10;
        var13 = var12[var17];
        var13 = var8.bind(var4)(var13);
        var15 = var13.Spacer;
        var13 = {};
        var13['size'] = var17;
        var13 = var16.bind(var4)(var15, var13);
        var5[3] = var13;
        var16 = _closure1_slot11;
        var13 = var12[var7];
        var13 = var8.bind(var4)(var13);
        var15 = var13.Text;
        var13 = {'variant': 'text-sm/normal', 'color': 'text-default'};
        var17 = new Array(2);
        var17[0] = var18;
        var18 = '\n';
        var17[1] = var18;
        var13['children'] = var17;
        var13 = var16.bind(var4)(var15, var13);
        var5[4] = var13;
        var13 = _closure1_slot10;
        var7 = var12[var7];
        var7 = var8.bind(var4)(var7);
        var8 = var7.Text;
        var7 = {'variant': 'text-sm/medium', 'color': 'text-default'};
        var7['children'] = var14;
        var7 = var13.bind(var4)(var8, var7);
        var5[5] = var7;
        var8 = _closure1_slot10;
        var6 = 15;
        var6 = var12[var6];
        var7 = var11.bind(var4)(var6);
        var6 = {};
        var10 = var12[var10];
        var10 = var11.bind(var4)(var10);
        var6['source'] = var10;
        var9 = var9.cactus;
        var6['style'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[6] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function CancelSubscriptionButtonFooter(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.guild;
            var _closure2_slot0 = var1;
            var15 = var3.subscription;
            var _closure2_slot1 = var15;
            var14 = var3.onClose;
            var _closure2_slot2 = var14;
            var3 = _closure1_slot13;
            var4 = undefined;
            var5 = var3.bind(var4)();
            var7 = _closure1_slot6;
            var6 = var7.useState;
            var3 = false;
            var7 = var6.bind(var7)(var3);
            var6 = _closure1_slot5;
            var3 = 2;
            var6 = var6.bind(var4)(var7, var3);
            var3 = 0;
            var10 = var6[var3];
            var3 = 1;
            var3 = var6[var3];
            var _closure2_slot3 = var3;
            var6 = _closure1_slot1;
            var13 = _closure1_slot3;
            var3 = 17;
            var3 = var13[var3];
            var7 = var6.bind(var4)(var3);
            var3 = 18;
            var3 = var13[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL;
            var3 = var7.bind(var4)(var3);
            var7 = var3.analyticsLocations;
            var _closure2_slot4 = var7;
            var3 = 19;
            var3 = var13[var3];
            var11 = var6.bind(var4)(var3);
            var8 = var11.useCancelSubscription;
            var6 = var15.id;
            var3 = var15.isACOM;
            var3 = var8.bind(var11)(var6, var3);
            var8 = var3.cancelSubscription;
            var _closure2_slot5 = var8;
            var12 = var3.nativePaymentsConnected;
            var11 = var15.isPurchasedViaAppleGeneric;
            var _closure2_slot6 = var11;
            var6 = _closure1_slot6;
            var3 = var6.useCallback;
            var16 = _closure1_slot4;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var3 = undefined;
                        var8 = undefined;
                        var11 = _closure1_slot1;
                        var13 = _closure1_slot3;
                        var2 = 20;
                        var2 = var13[var2];
                        var10 = var11.bind(var3)(var2);
                        var9 = var10.confirm;
                        var2 = {};
                        var12 = _closure1_slot0;
                        var14 = 10;
                        var4 = var13[var14];
                        var4 = var12.bind(var3)(var4);
                        var17 = var4.intl;
                        var16 = var17.formatToPlainString;
                        var4 = var13[var14];
                        var4 = var12.bind(var3)(var4);
                        var4 = var4.t;
                        var15 = var4.sBs7sh;
                        var5 = {};
                        var18 = _closure2_slot0;
                        var18 = var18.name;
                        var5['guildName'] = var18;
                        var5 = var16.bind(var17)(var15, var5);
                        var2['title'] = var5;
                        var5 = 9;
                        var5 = var13[var5];
                        var11 = var11.bind(var3)(var5);
                        var5 = _closure2_slot1;
                        var5 = var5.currentPeriodEnd;
                        var15 = var11.bind(var3)(var5);
                        var11 = var15.format;
                        var5 = _closure1_slot12;
                        var17 = var11.bind(var15)(var5);
                        var5 = global;
                        var11 = var5.HermesInternal;
                        var16 = var11.concat;
                        var15 = 'You can resubscribe any time before ';
                        var11 = '.';
                        var11 = var16.bind(var15)(var17, var11);
                        var2['body'] = var11;
                        var11 = var13[var14];
                        var11 = var12.bind(var3)(var11);
                        var16 = var11.intl;
                        var15 = var16.string;
                        var11 = var13[var14];
                        var11 = var12.bind(var3)(var11);
                        var11 = var11.t;
                        var11 = var11["3KZjFH"];
                        var11 = var15.bind(var16)(var11);
                        var2['confirmText'] = var11;
                        var11 = 12;
                        var11 = var13[var11];
                        var11 = var12.bind(var3)(var11);
                        var11 = var11.ButtonColors;
                        var11 = var11.RED;
                        var2['confirmColor'] = var11;
                        var2 = var9.bind(var10)(var2);
                        SaveGenerator(address=285);
case 4:
                        return var2;
case 5:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=8);
                        if(var9) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var9 = _closure2_slot3;
                        var11 = true;
                        var9 = var9.bind(var3)(var11);
case 10: // try_start_0
                        var10 = false;
                        var8 = false;
                        var9 = _closure2_slot6;
                        if(var9) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                        var9 = _closure2_slot1;
                        var9 = var9.isPurchasedViaDesktop;
                        if(var9) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                        var12 = var5.Error;
                        var5 = var12.prototype;
                        var9 = Object.create(var5, {constructor: {value: var12}});
                        var20 = 'Cancellation not supported for subscription';
                        var21 = var9;
                        var5 = new var21[var12](var20, var19);
                        var5 = var5 instanceof Object ? var5 : var9;
                        throw var5;
case 13:
                        var9 = _closure1_slot2;
                        var5 = _closure1_slot3;
                        var13 = 21;
                        var5 = var5[var13];
                        var15 = var9.bind(var3)(var5);
                        var12 = var15.cancelSubscription;
                        var5 = _closure2_slot1;
                        var9 = var5.id;
                        var5 = _closure2_slot4;
                        var5 = var12.bind(var15)(var9, var5);
                        SaveGenerator(address=421);
case 15:
                        return var5;
case 16:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                        if(var9) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                        var12 = _closure1_slot2;
                        var9 = _closure1_slot3;
                        var9 = var9[var13];
                        var12 = var12.bind(var3)(var9);
                        var9 = var12.fetchSubscriptions;
                        var9 = var9.bind(var12)();
                        SaveGenerator(address=458);
case 19:
                        return var9;
case 20:
                        ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                        if(var12) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                        var8 = true;
                        _fun0002_ip = 23; continue _fun0002;
case 21: // try_end0
                        return var9;
case 17:
                        return var5;
case 11: // try_start_1
                        var5 = _closure2_slot5;
                        var5 = var5.bind(var3)();
                        SaveGenerator(address=486);
case 24:
                        return var5;
case 25:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                        if(var9) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                        var8 = var5;
case 23:
                        var9 = _closure2_slot3;
                        var9 = var9.bind(var3)(var10);
                        if(var8) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                        var13 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var9 = 22;
                        var9 = var8[var9];
                        var10 = var13.bind(var3)(var9);
                        var9 = var10.presentFailedToast;
                        var11 = var8[var14];
                        var11 = var13.bind(var3)(var11);
                        var12 = var11.intl;
                        var11 = var12.string;
                        var8 = var8[var14];
                        var8 = var13.bind(var3)(var8);
                        var8 = var8.t;
                        var8 = var8.R0RpRX;
                        var8 = var11.bind(var12)(var8);
                        var8 = var9.bind(var10)(var8);
                        _fun0002_ip = 30; continue _fun0002;
case 28:
                        var9 = _closure2_slot2;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                        var8 = _closure2_slot2;
                        var8 = var8.bind(var3)();
case 30: // try_end1
                        _fun0002_ip = 8; continue _fun0002;
case 26:
                        return var5;
case 32: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=9);
                        var7 = var10;
                        var8 = _closure2_slot3;
                        var5 = false;
                        var5 = var8.bind(var3)(var5);
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var5 = 22;
                        var5 = var8[var5];
                        var11 = var9.bind(var3)(var5);
                        var9 = var11.presentFailedToast;
                        var5 = var10.message;
                        var5 = var9.bind(var11)(var5);
                        var11 = _closure1_slot1;
                        var9 = 23;
                        var8 = var8[var9];
                        var8 = var11.bind(var3)(var8);
                        var8 = var10 instanceof var8;
                        var5 = var8;
                        if(!var8) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                        var7 = var7.code;
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var6 = var6[var9];
                        var6 = var8.bind(var3)(var6);
                        var6 = var6.ErrorCodes;
                        var6 = var6.ALREADY_CANCELED;
                        var5 = var7 === var6;
case 33:
                        if(!var5) { _fun0002_ip = 8; continue _fun0002 }
case 35:
                        var6 = _closure2_slot2;
                        var5 = null;
                        if(!(var5 != var6)) { _fun0002_ip = 8; continue _fun0002 }
case 36:
                        var4 = _closure2_slot2;
                        var4 = var4.bind(var3)();
case 8:
                        return var3;
case 6:
                        return var2;
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var16.bind(var4)(var2);
            var16 = var1.name;
            var1 = new Array(8);
            var1[0] = var16;
            var16 = var15.currentPeriodEnd;
            var1[1] = var16;
            var16 = var15.id;
            var1[2] = var16;
            var15 = var15.isPurchasedViaDesktop;
            var1[3] = var15;
            var1[4] = var11;
            var1[5] = var14;
            var1[6] = var8;
            var1[7] = var7;
            var8 = var3.bind(var6)(var2, var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var5.footer;
            var1['style'] = var5;
            var7 = _closure1_slot10;
            var6 = _closure1_slot0;
            var5 = 24;
            var5 = var13[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Button;
            var5 = {};
            var13 = 'destructive';
            var5['variant'] = var13;
            if(var10) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            if(!var11) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var11 = !var12;
case 39:
            var10 = var11;
case 37:
            var5['loading'] = var10;
            var12 = _closure1_slot0;
            var13 = _closure1_slot3;
            var9 = 10;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.cM1H0K;
            var9 = var10.bind(var11)(var9);
            var5['text'] = var9;
            var5['onPress'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function Content(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var11 = var1.subscription;
            var10 = var1.onClose;
            var1 = _closure1_slot13;
            var5 = undefined;
            var17 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 25;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)(var11);
            var21 = var1.listing;
            var12 = var1.guild;
            var2 = _closure1_slot0;
            var1 = 26;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var2 = var4.useSubscriptionsSettings;
            var3 = null;
            var6 = var3 == var12;
            var1 = undefined;
            if(var6) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var1 = var12.id;
case 41:
            var2 = var2.bind(var4)(var1);
            var4 = var3 == var2;
            var1 = undefined;
            if(var4) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var1 = var2.cover_image_asset;
case 43:
            var2 = var3 != var1;
            var16 = undefined;
            if(!var2) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var16 = var1;
case 45:
            var2 = var3 == var21;
            var1 = null;
            if(var2) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var2 = var3 == var12;
            var1 = null;
            if(var2) { _fun0003_ip = 47; continue _fun0003 }
case 49:
            var4 = _closure1_slot11;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var17.container;
            var2['style'] = var6;
            var9 = _closure1_slot11;
            var8 = _closure1_slot8;
            var6 = {};
            var15 = _closure1_slot10;
            var14 = _closure1_slot1;
            var22 = _closure1_slot3;
            var13 = 27;
            var13 = var22[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var18 = var17.heroImage;
            var13['style'] = var18;
            var13['asset'] = var16;
            var14 = var15.bind(var5)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var16 = _closure1_slot11;
            var15 = _closure1_slot7;
            var14 = {};
            var17 = var17.body;
            var14['style'] = var17;
            var19 = _closure1_slot10;
            var18 = _closure1_slot15;
            var17 = {};
            var17['guild'] = var12;
            var20 = var21.id;
            var17['listingId'] = var20;
            var17['subscription'] = var11;
            var18 = var19.bind(var5)(var18, var17);
            var17 = new Array(5);
            var17[0] = var18;
            var24 = _closure1_slot10;
            var19 = _closure1_slot0;
            var18 = 12;
            var20 = var22[var18];
            var20 = var19.bind(var5)(var20);
            var23 = var20.Spacer;
            var20 = {};
            var25 = 24;
            var20['size'] = var25;
            var20 = var24.bind(var5)(var23, var20);
            var17[1] = var20;
            var24 = _closure1_slot10;
            var20 = 13;
            var20 = var22[var20];
            var20 = var19.bind(var5)(var20);
            var23 = var20.Text;
            var20 = {'variant': 'text-sm/bold', 'color': 'text-default'};
            var25 = {};
            var26 = 'uppercase';
            var25['textTransform'] = var26;
            var20['style'] = var25;
            var25 = 10;
            var26 = var22[var25];
            var26 = var19.bind(var5)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var22[var25];
            var25 = var19.bind(var5)(var25);
            var25 = var25.t;
            var25 = var25.xyvN8p;
            var25 = var26.bind(var27)(var25);
            var20['children'] = var25;
            var20 = var24.bind(var5)(var23, var20);
            var17[2] = var20;
            var20 = _closure1_slot10;
            var18 = var22[var18];
            var18 = var19.bind(var5)(var18);
            var19 = var18.Spacer;
            var18 = {};
            var23 = 16;
            var18['size'] = var23;
            var18 = var20.bind(var5)(var19, var18);
            var17[3] = var18;
            var20 = _closure1_slot10;
            var19 = _closure1_slot2;
            var18 = 28;
            var18 = var22[var18];
            var18 = var19.bind(var5)(var18);
            var19 = var18.Content;
            var18 = {};
            var21 = var21.id;
            var18['listingId'] = var21;
            var21 = var12.id;
            var18['guildId'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var17[4] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var13[1] = var14;
            var6['children'] = var13;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot10;
            var8 = _closure1_slot16;
            var7 = {};
            var7['guild'] = var12;
            var7['subscription'] = var11;
            var7['onClose'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 47:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var11 = 1;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot7 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 'M/DD/YY';
    var _closure1_slot12 = var4;
    var4 = 6;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {};
    var10['flex'] = var11;
    var7['container'] = var10;
    var10 = 16;
    var11 = {'marginVertical': 24, 'marginHorizontal': 16};
    var7['body'] = var11;
    var11 = {'width': '100%', 'height': null, 'aspectRatio': 2.5684931506849313};
    var11['height'] = var1;
    var7['heroImage'] = var11;
    var13 = {'borderTopColor': null, 'borderTopWidth': 1, 'padding': 16};
    var11 = 7;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_BACKGROUND_HOVER;
    var13['borderTopColor'] = var14;
    var7['footer'] = var13;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot13 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var9['borderRadius'] = var11;
    var11 = 12;
    var9['paddingVertical'] = var11;
    var9['paddingHorizontal'] = var10;
    var4['container'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'row'};
    var4['header'] = var9;
    var9 = {'width': 99, 'position': 'absolute', 'right': 16, 'bottom': 12};
    var4['cactus'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserSettingsGuildRoleSubscriptionsCancel(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var3 = var2.subscriptionId;
            var _closure2_slot0 = var3;
            var6 = var2.onClose;
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 29;
            var3 = var5[var3];
            var5 = undefined;
            var7 = var4.bind(var5)(var3);
            var4 = var7.useStateFromStores;
            var8 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getSubscriptionById;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var4.bind(var7)(var3, var1);
            var1 = null;
            var3 = var1 == var7;
            if(var3) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var4 = _closure1_slot10;
            var3 = _closure1_slot17;
            var2 = {};
            var2['subscription'] = var7;
            var2['onClose'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 50:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();