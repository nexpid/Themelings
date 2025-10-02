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
        var28 = var1.guild;
        var1 = var1.subscription;
        var2 = _closure1_slot15;
        var4 = undefined;
        var9 = var2.bind(var4)();
        var5 = _closure1_slot2;
        var12 = _closure1_slot3;
        var2 = 9;
        var3 = var12[var2];
        var8 = var5.bind(var4)(var3);
        var6 = var8.useTierEmojiIds;
        var3 = var28.id;
        var6 = var6.bind(var8)(var11, var3);
        var3 = _closure1_slot5;
        var10 = 1;
        var6 = var3.bind(var4)(var6, var10);
        var3 = 0;
        var13 = var6[var3];
        var6 = var12[var2];
        var8 = var5.bind(var4)(var6);
        var6 = var8.useChannelBenefits;
        var8 = var6.bind(var8)(var11);
        var6 = _closure1_slot5;
        var6 = var6.bind(var4)(var8, var10);
        var8 = var6[var3];
        var6 = var12[var2];
        var14 = var5.bind(var4)(var6);
        var6 = var14.useIntangibleBenefits;
        var14 = var6.bind(var14)(var11);
        var6 = _closure1_slot5;
        var6 = var6.bind(var4)(var14, var10);
        var6 = var6[var3];
        var2 = var12[var2];
        var5 = var5.bind(var4)(var2);
        var2 = var5.useName;
        var5 = var2.bind(var5)(var11);
        var2 = _closure1_slot5;
        var2 = var2.bind(var4)(var5, var10);
        var27 = var2[var3];
        var11 = _closure1_slot1;
        var2 = 10;
        var2 = var12[var2];
        var2 = var11.bind(var4)(var2);
        var1 = var1.currentPeriodEnd;
        var3 = var2.bind(var4)(var1);
        var2 = var3.format;
        var1 = _closure1_slot13;
        var14 = var2.bind(var3)(var1);
        var10 = _closure1_slot0;
        var20 = 11;
        var1 = var12[var20];
        var1 = var10.bind(var4)(var1);
        var5 = var1.intl;
        var3 = var5.format;
        var1 = var12[var20];
        var1 = var10.bind(var4)(var1);
        var1 = var1.t;
        var2 = var1.EtAXzM;
        var1 = {};
        var1['subscriptionEndDate'] = var14;
        var18 = var3.bind(var5)(var2, var1);
        var1 = var12[var20];
        var1 = var10.bind(var4)(var1);
        var5 = var1.intl;
        var3 = var5.formatToPlainString;
        var1 = var12[var20];
        var1 = var10.bind(var4)(var1);
        var1 = var1.t;
        var2 = var1.OVlNGR;
        var1 = {};
        var13 = var13.size;
        var1['numEmojis'] = var13;
        var8 = var8.length;
        var1['numChannels'] = var8;
        var6 = var6.length;
        var1['numIntangibles'] = var6;
        var14 = var3.bind(var5)(var2, var1);
        var3 = _closure1_slot12;
        var2 = _closure1_slot7;
        var1 = {};
        var5 = var9.container;
        var1['style'] = var5;
        var16 = _closure1_slot12;
        var15 = _closure1_slot7;
        var5 = {};
        var6 = var9.header;
        var5['style'] = var6;
        var13 = _closure1_slot11;
        var17 = 12;
        var6 = var12[var17];
        var8 = var11.bind(var4)(var6);
        var6 = {};
        var6['guild'] = var28;
        var6 = var13.bind(var4)(var8, var6);
        var19 = new Array(3);
        var19[0] = var6;
        var22 = _closure1_slot11;
        var13 = 13;
        var6 = var12[var13];
        var21 = var11.bind(var4)(var6);
        var8 = {};
        var6 = 16;
        var8['size'] = var6;
        var8 = var22.bind(var4)(var21, var8);
        var19[1] = var8;
        var23 = _closure1_slot12;
        var22 = _closure1_slot7;
        var21 = {};
        var26 = _closure1_slot11;
        var8 = 14;
        var24 = var12[var8];
        var24 = var10.bind(var4)(var24);
        var25 = var24.Text;
        var24 = {'variant': 'text-md/semibold', 'color': 'interactive-active'};
        var24['children'] = var27;
        var25 = var26.bind(var4)(var25, var24);
        var24 = new Array(3);
        var24[0] = var25;
        var27 = _closure1_slot11;
        var25 = var12[var13];
        var26 = var11.bind(var4)(var25);
        var25 = {};
        var29 = 2;
        var25['size'] = var29;
        var25 = var27.bind(var4)(var26, var25);
        var24[1] = var25;
        var27 = _closure1_slot11;
        var25 = var12[var8];
        var25 = var10.bind(var4)(var25);
        var26 = var25.Text;
        var25 = {'variant': 'text-sm/medium', 'color': 'interactive-normal'};
        var28 = var28.name;
        var25['children'] = var28;
        var25 = var27.bind(var4)(var26, var25);
        var24[2] = var25;
        var21['children'] = var24;
        var21 = var23.bind(var4)(var22, var21);
        var19[2] = var21;
        var5['children'] = var19;
        var15 = var16.bind(var4)(var15, var5);
        var5 = new Array(7);
        var5[0] = var15;
        var19 = _closure1_slot11;
        var15 = 15;
        var15 = var12[var15];
        var16 = var11.bind(var4)(var15);
        var15 = {};
        var21 = {};
        var21['marginVertical'] = var6;
        var15['style'] = var21;
        var15 = var19.bind(var4)(var16, var15);
        var5[1] = var15;
        var19 = _closure1_slot11;
        var15 = var12[var8];
        var15 = var10.bind(var4)(var15);
        var16 = var15.Text;
        var15 = {'variant': 'text-md/semibold', 'color': 'interactive-active'};
        var21 = var12[var20];
        var21 = var10.bind(var4)(var21);
        var22 = var21.intl;
        var21 = var22.string;
        var20 = var12[var20];
        var20 = var10.bind(var4)(var20);
        var20 = var20.t;
        var20 = var20.9SgXmZ;
        var20 = var21.bind(var22)(var20);
        var15['children'] = var20;
        var15 = var19.bind(var4)(var16, var15);
        var5[2] = var15;
        var16 = _closure1_slot11;
        var13 = var12[var13];
        var15 = var11.bind(var4)(var13);
        var13 = {};
        var13['size'] = var17;
        var13 = var16.bind(var4)(var15, var13);
        var5[3] = var13;
        var16 = _closure1_slot12;
        var13 = var12[var8];
        var13 = var10.bind(var4)(var13);
        var15 = var13.Text;
        var13 = {'variant': 'text-sm/normal', 'color': 'text-normal'};
        var17 = new Array(2);
        var17[0] = var18;
        var18 = '\n';
        var17[1] = var18;
        var13['children'] = var17;
        var13 = var16.bind(var4)(var15, var13);
        var5[4] = var13;
        var13 = _closure1_slot11;
        var8 = var12[var8];
        var8 = var10.bind(var4)(var8);
        var10 = var8.Text;
        var8 = {'variant': 'text-sm/medium', 'color': 'text-normal'};
        var8['children'] = var14;
        var8 = var13.bind(var4)(var10, var8);
        var5[5] = var8;
        var8 = _closure1_slot11;
        var6 = var12[var6];
        var7 = var11.bind(var4)(var6);
        var6 = {};
        var10 = 17;
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
    var _closure1_slot16 = var1;
    var1 = function CancelSubscriptionButtonFooter(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.guild;
            var _closure2_slot0 = var1;
            var16 = var3.subscription;
            var _closure2_slot1 = var16;
            var13 = var3.onClose;
            var _closure2_slot2 = var13;
            var3 = _closure1_slot14;
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
            var14 = _closure1_slot1;
            var15 = _closure1_slot3;
            var3 = 18;
            var3 = var15[var3];
            var6 = var14.bind(var4)(var3);
            var3 = 19;
            var3 = var15[var3];
            var3 = var14.bind(var4)(var3);
            var3 = var3.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL;
            var3 = var6.bind(var4)(var3);
            var7 = var3.analyticsLocations;
            var _closure2_slot4 = var7;
            var3 = 20;
            var3 = var15[var3];
            var8 = var14.bind(var4)(var3);
            var6 = var8.useCancelSubscription;
            var3 = var16.id;
            var3 = var6.bind(var8)(var3);
            var8 = var3.cancelSubscription;
            var _closure2_slot5 = var8;
            var12 = var3.nativePaymentsConnected;
            var6 = var16.paymentGateway;
            var3 = _closure1_slot10;
            var3 = var3.APPLE_PARTNER;
            var11 = var6 === var3;
            var _closure2_slot6 = var11;
            var6 = _closure1_slot6;
            var3 = var6.useCallback;
            var17 = _closure1_slot4;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var2 = 21;
                        var2 = var11[var2];
                        var3 = undefined;
                        var8 = var10.bind(var3)(var2);
                        var5 = var8.confirm;
                        var2 = {};
                        var14 = _closure1_slot0;
                        var9 = 11;
                        var4 = var11[var9];
                        var4 = var14.bind(var3)(var4);
                        var16 = var4.intl;
                        var15 = var16.formatToPlainString;
                        var4 = var11[var9];
                        var4 = var14.bind(var3)(var4);
                        var4 = var4.t;
                        var13 = var4.sBs7sr;
                        var12 = {};
                        var17 = _closure2_slot0;
                        var17 = var17.name;
                        var12['guildName'] = var17;
                        var12 = var15.bind(var16)(var13, var12);
                        var2['title'] = var12;
                        var12 = 10;
                        var12 = var11[var12];
                        var13 = var10.bind(var3)(var12);
                        var12 = _closure2_slot1;
                        var12 = var12.currentPeriodEnd;
                        var15 = var13.bind(var3)(var12);
                        var13 = var15.format;
                        var12 = _closure1_slot13;
                        var16 = var13.bind(var15)(var12);
                        var12 = global;
                        var12 = var12.HermesInternal;
                        var15 = var12.concat;
                        var13 = 'You can resubscribe any time before ';
                        var12 = '.';
                        var12 = var15.bind(var13)(var16, var12);
                        var2['body'] = var12;
                        var12 = var11[var9];
                        var12 = var14.bind(var3)(var12);
                        var13 = var12.intl;
                        var12 = var13.string;
                        var9 = var11[var9];
                        var9 = var14.bind(var3)(var9);
                        var9 = var9.t;
                        var9 = var9.3KZjFB;
                        var9 = var12.bind(var13)(var9);
                        var2['confirmText'] = var9;
                        var9 = 22;
                        var9 = var11[var9];
                        var9 = var10.bind(var3)(var9);
                        var9 = var9.Colors;
                        var9 = var9.RED;
                        var2['confirmColor'] = var9;
                        var2 = var5.bind(var8)(var2);
                        SaveGenerator(address=283);
case 4:
                        return var2;
case 5:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                        var8 = _closure2_slot3;
                        var5 = true;
                        var5 = var8.bind(var3)(var5);
case 10: // try_start_0
                        var5 = _closure2_slot6;
                        if(var5) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                        var8 = _closure1_slot2;
                        var5 = _closure1_slot3;
                        var10 = 23;
                        var5 = var5[var10];
                        var11 = var8.bind(var3)(var5);
                        var9 = var11.cancelSubscription;
                        var5 = _closure2_slot1;
                        var8 = var5.id;
                        var5 = _closure2_slot4;
                        var5 = var9.bind(var11)(var8, var5);
                        SaveGenerator(address=365);
case 13:
                        return var5;
case 14:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                        if(var8) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                        var9 = _closure1_slot2;
                        var8 = _closure1_slot3;
                        var8 = var8[var10];
                        var9 = var9.bind(var3)(var8);
                        var8 = var9.fetchSubscriptions;
                        var8 = var8.bind(var9)();
                        SaveGenerator(address=402);
case 17:
                        return var8;
case 18:
                        ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                        if(!var9) { _fun0002_ip = 19; continue _fun0002 }
case 20: // try_end0
                        return var8;
case 15:
                        return var5;
case 11: // try_start_1
                        var5 = _closure2_slot5;
                        var5 = var5.bind(var3)();
                        SaveGenerator(address=426);
case 21:
                        return var5;
case 22:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                        if(var8) { _fun0002_ip = 23; continue _fun0002 }
case 19:
                        var9 = _closure2_slot2;
                        var8 = null;
                        if(!(var8 != var9)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                        var8 = _closure2_slot2;
                        var8 = var8.bind(var3)();
case 24: // try_end1
                        _fun0002_ip = 8; continue _fun0002;
case 23:
                        return var5;
case 26: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=9);
                        var7 = var10;
                        var8 = _closure2_slot3;
                        var5 = false;
                        var5 = var8.bind(var3)(var5);
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var5 = 24;
                        var5 = var8[var5];
                        var11 = var9.bind(var3)(var5);
                        var9 = var11.presentFailedToast;
                        var5 = var10.message;
                        var5 = var9.bind(var11)(var5);
                        var11 = _closure1_slot1;
                        var9 = 25;
                        var8 = var8[var9];
                        var8 = var11.bind(var3)(var8);
                        var8 = var10 instanceof var8;
                        var5 = var8;
                        if(!var8) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                        var7 = var7.code;
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var6 = var6[var9];
                        var6 = var8.bind(var3)(var6);
                        var6 = var6.ErrorCodes;
                        var6 = var6.ALREADY_CANCELED;
                        var5 = var7 === var6;
case 27:
                        if(!var5) { _fun0002_ip = 8; continue _fun0002 }
case 29:
                        var6 = _closure2_slot2;
                        var5 = null;
                        if(!(var5 != var6)) { _fun0002_ip = 8; continue _fun0002 }
case 30:
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
            var2 = var17.bind(var4)(var2);
            var17 = var1.name;
            var1 = new Array(7);
            var1[0] = var17;
            var17 = var16.currentPeriodEnd;
            var1[1] = var17;
            var16 = var16.id;
            var1[2] = var16;
            var1[3] = var11;
            var1[4] = var13;
            var1[5] = var8;
            var1[6] = var7;
            var8 = var3.bind(var6)(var2, var1);
            var3 = _closure1_slot11;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var5.footer;
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var13 = 22;
            var5 = var15[var13];
            var6 = var14.bind(var4)(var5);
            var5 = {};
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.Colors;
            var13 = var13.RED;
            var5['color'] = var13;
            if(var10) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            if(!var11) { _fun0001_ip = 14; continue _fun0001 }
case 33:
            var11 = !var12;
case 14:
            var10 = var11;
case 31:
            var5['loading'] = var10;
            var12 = _closure1_slot0;
            var13 = _closure1_slot3;
            var9 = 11;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.cM1H0N;
            var9 = var10.bind(var11)(var9);
            var5['text'] = var9;
            var5['onPress'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function Content(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var11 = var1.subscription;
            var10 = var1.onClose;
            var1 = _closure1_slot14;
            var5 = undefined;
            var17 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var1 = 26;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)(var11);
            var21 = var1.listing;
            var12 = var1.guild;
            var2 = _closure1_slot0;
            var1 = 27;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var2 = var4.useSubscriptionsSettings;
            var3 = null;
            var6 = var3 == var12;
            var1 = undefined;
            if(var6) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var1 = var12.id;
case 34:
            var2 = var2.bind(var4)(var1);
            var4 = var3 == var2;
            var1 = undefined;
            if(var4) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var1 = var2.cover_image_asset;
case 36:
            var2 = var3 != var1;
            var16 = undefined;
            if(!var2) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var16 = var1;
case 38:
            var2 = var3 == var21;
            var1 = null;
            if(var2) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var2 = var3 == var12;
            var1 = null;
            if(var2) { _fun0003_ip = 40; continue _fun0003 }
case 42:
            var4 = _closure1_slot12;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var17.container;
            var2['style'] = var6;
            var9 = _closure1_slot12;
            var8 = _closure1_slot8;
            var6 = {};
            var15 = _closure1_slot11;
            var19 = _closure1_slot1;
            var22 = _closure1_slot3;
            var13 = 28;
            var13 = var22[var13];
            var14 = var19.bind(var5)(var13);
            var13 = {};
            var18 = var17.heroImage;
            var13['style'] = var18;
            var13['asset'] = var16;
            var14 = var15.bind(var5)(var14, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var16 = _closure1_slot12;
            var15 = _closure1_slot7;
            var14 = {};
            var17 = var17.body;
            var14['style'] = var17;
            var20 = _closure1_slot11;
            var18 = _closure1_slot16;
            var17 = {};
            var17['guild'] = var12;
            var23 = var21.id;
            var17['listingId'] = var23;
            var17['subscription'] = var11;
            var18 = var20.bind(var5)(var18, var17);
            var17 = new Array(5);
            var17[0] = var18;
            var24 = _closure1_slot11;
            var18 = 13;
            var20 = var22[var18];
            var23 = var19.bind(var5)(var20);
            var20 = {};
            var25 = 24;
            var20['size'] = var25;
            var20 = var24.bind(var5)(var23, var20);
            var17[1] = var20;
            var24 = _closure1_slot11;
            var28 = _closure1_slot0;
            var20 = 14;
            var20 = var22[var20];
            var20 = var28.bind(var5)(var20);
            var23 = var20.Text;
            var20 = {'variant': 'text-sm/bold', 'color': 'text-normal'};
            var25 = {};
            var26 = 'uppercase';
            var25['textTransform'] = var26;
            var20['style'] = var25;
            var25 = 11;
            var26 = var22[var25];
            var26 = var28.bind(var5)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var22[var25];
            var25 = var28.bind(var5)(var25);
            var25 = var25.t;
            var25 = var25.xyvN8v;
            var25 = var26.bind(var27)(var25);
            var20['children'] = var25;
            var20 = var24.bind(var5)(var23, var20);
            var17[2] = var20;
            var20 = _closure1_slot11;
            var18 = var22[var18];
            var19 = var19.bind(var5)(var18);
            var18 = {};
            var23 = 16;
            var18['size'] = var23;
            var18 = var20.bind(var5)(var19, var18);
            var17[3] = var18;
            var20 = _closure1_slot11;
            var19 = _closure1_slot2;
            var18 = 29;
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
            var9 = _closure1_slot11;
            var8 = _closure1_slot17;
            var7 = {};
            var7['guild'] = var12;
            var7['subscription'] = var11;
            var7['onClose'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 40:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
    var4 = var4.PaymentGateways;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 'M/DD/YY';
    var _closure1_slot13 = var4;
    var4 = 7;
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
    var11 = 8;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MODIFIER_HOVER;
    var13['borderTopColor'] = var14;
    var7['footer'] = var13;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot14 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY;
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
    var _closure1_slot15 = var4;
    var4 = 31;
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
            var3 = 30;
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
            if(var3) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var4 = _closure1_slot11;
            var3 = _closure1_slot18;
            var2 = {};
            var2['subscription'] = var7;
            var2['onClose'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 43:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();