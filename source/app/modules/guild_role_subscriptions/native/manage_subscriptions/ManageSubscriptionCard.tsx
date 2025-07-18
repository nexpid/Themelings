// app/modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var7 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function HeaderStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.isCancelled;
            var2 = var1.isTrial;
            var1 = var1.isPastDue;
            var4 = _closure1_slot15;
            var5 = undefined;
            var7 = var4.bind(var5)();
            if(var3) { _fun0001_ip = 194; continue _fun0001 }
 40:
            if(var2) { _fun0001_ip = 127; continue _fun0001 }
 43:
            var9 = '';
            var8 = undefined;
            var11 = true;
            if(!var1) { _fun0001_ip = 259; continue _fun0001 }
 57:
            var4 = _closure1_slot0;
            var10 = _closure1_slot3;
            var1 = 9;
            var2 = var10[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var10[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.uENdgY;
            var9 = var2.bind(var3)(var1);
            var8 = var7.headerStatusPastDue;
            var11 = false;
            _fun0001_ip = 259; continue _fun0001;
 127:
            var4 = _closure1_slot0;
            var10 = _closure1_slot3;
            var1 = 9;
            var2 = var10[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var10[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.6antoq;
            var9 = var2.bind(var3)(var1);
            var8 = var7.headerStatusTrial;
            var11 = true;
            _fun0001_ip = 259; continue _fun0001;
 194:
            var4 = _closure1_slot0;
            var10 = _closure1_slot3;
            var1 = 9;
            var2 = var10[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var10[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.7uFZGh;
            var9 = var2.bind(var3)(var1);
            var8 = var7.headerStatusCancel;
            var11 = true;
 259:
            var2 = '';
            var1 = null;
            if(!(var2 !== var9)) { _fun0001_ip = 377; continue _fun0001 }
 269:
            var4 = _closure1_slot12;
            var3 = _closure1_slot7;
            var2 = {};
            var10 = var7.headerStatusContainer;
            var7 = new Array(2);
            var7[0] = var10;
            var7[1] = var8;
            var2['style'] = var7;
            var8 = _closure1_slot12;
            var7 = _closure1_slot0;
            var10 = _closure1_slot3;
            var6 = 10;
            var6 = var10[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {};
            var10 = 'text-xs/semibold';
            var6['variant'] = var10;
            var10 = 'black';
            if(!var11) { _fun0001_ip = 353; continue _fun0001 }
 349:
            var10 = 'white';
 353:
            var6['color'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 377:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function Header(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var16 = var1.expanded;
            var22 = var1.guild;
            var10 = var1.isCancelled;
            var9 = var1.isTrial;
            var8 = var1.isPastDue;
            var25 = var1.listing;
            var5 = var1.onToggleExpanded;
            var1 = _closure1_slot15;
            var4 = undefined;
            var17 = var1.bind(var4)();
            var3 = _closure1_slot13;
            var18 = _closure1_slot0;
            var20 = _closure1_slot3;
            var1 = 11;
            var1 = var20[var1];
            var1 = var18.bind(var4)(var1);
            var2 = var1.PressableHighlight;
            var1 = {};
            var6 = var17.header;
            var1['style'] = var6;
            var1['onPress'] = var5;
            var7 = _closure1_slot12;
            var6 = _closure1_slot16;
            var5 = {};
            var5['isCancelled'] = var10;
            var5['isTrial'] = var9;
            var5['isPastDue'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var17.headerContent;
            var6['style'] = var9;
            var11 = _closure1_slot12;
            var21 = _closure1_slot1;
            var9 = 12;
            var9 = var20[var9];
            var10 = var21.bind(var4)(var9);
            var9 = {};
            var9['guild'] = var22;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var12 = _closure1_slot13;
            var11 = _closure1_slot7;
            var10 = {};
            var13 = var17.headerTitlesContainer;
            var10['style'] = var13;
            var23 = _closure1_slot12;
            var14 = 10;
            var13 = var20[var14];
            var13 = var18.bind(var4)(var13);
            var19 = var13.Text;
            var13 = {'ellipsizeMode': 'tail', 'lineClamp': 2, 'variant': 'text-md/semibold', 'color': 'interactive-active'};
            var24 = 2;
            var25 = var25.name;
            var13['children'] = var25;
            var19 = var23.bind(var4)(var19, var13);
            var13 = new Array(3);
            var13[0] = var19;
            var23 = _closure1_slot12;
            var19 = 13;
            var19 = var20[var19];
            var21 = var21.bind(var4)(var19);
            var19 = {};
            var19['size'] = var24;
            var19 = var23.bind(var4)(var21, var19);
            var13[1] = var19;
            var19 = _closure1_slot12;
            var14 = var20[var14];
            var14 = var18.bind(var4)(var14);
            var18 = var14.Text;
            var14 = {'variant': 'text-sm/medium', 'color': 'interactive-normal'};
            var21 = null;
            var23 = var21 == var22;
            var20 = undefined;
            if(var23) { _fun0002_ip = 362; continue _fun0002 }
 357:
            var20 = var22.name;
 362:
            if(!(var21 == var20)) { _fun0002_ip = 423; continue _fun0002 }
 366:
            var24 = _closure1_slot0;
            var25 = _closure1_slot3;
            var21 = 9;
            var22 = var25[var21];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var25[var21];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.He+cmZ;
            var20 = var22.bind(var23)(var21);
 423:
            var14['children'] = var20;
            var14 = var19.bind(var4)(var18, var14);
            var13[2] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var12 = _closure1_slot12;
            var11 = _closure1_slot1;
            var10 = _closure1_slot3;
            var13 = 14;
            var10 = var10[var13];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var18 = var17.expandIcon;
            var14 = new Array(2);
            var14[0] = var18;
            if(!var16) { _fun0002_ip = 500; continue _fun0002 }
 494:
            var16 = var17.expandIconExpanded;
 500:
            var14[1] = var16;
            var10['style'] = var14;
            var14 = _closure1_slot1;
            var15 = _closure1_slot3;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.Sizes;
            var13 = var13.MEDIUM;
            var10['size'] = var13;
            var13 = 15;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var10['source'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function Separator() {
        var2 = _closure1_slot15;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot12;
        var2 = _closure1_slot1;
        var6 = _closure1_slot3;
        var1 = 16;
        var1 = var6[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var5 = var5.separator;
        var1['style'] = var5;
        var5 = true;
        var1['withoutMargins'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function CardBody(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var17 = var2.isCancelled;
            var12 = var2.isTrial;
            var _closure2_slot0 = var12;
            var5 = var2.isPastDue;
            var13 = var2.memberSince;
            var15 = var2.nextRenewalDate;
            var16 = var2.nextRenewalLabel;
            var18 = var2.onCancelSubscription;
            var1 = var2.subscription;
            var _closure2_slot1 = var1;
            var9 = var2.subscriptionPrice;
            var2 = var2.guildId;
            var _closure2_slot2 = var2;
            var2 = _closure1_slot15;
            var4 = undefined;
            var20 = var2.bind(var4)();
            var _closure2_slot3 = var20;
            var2 = _closure1_slot1;
            var3 = _closure1_slot3;
            var6 = 20;
            var6 = var3[var6];
            var7 = var2.bind(var4)(var6);
            var6 = var7.useResubscribeSubscription;
            var1 = var1.id;
            var1 = var6.bind(var7)(var1);
            var6 = var1.resubscribeSubscription;
            var _closure2_slot4 = var6;
            var24 = var1.nativePaymentsConnected;
            var7 = _closure1_slot6;
            var6 = var7.useState;
            var1 = false;
            var7 = var6.bind(var7)(var1);
            var6 = _closure1_slot5;
            var1 = 2;
            var6 = var6.bind(var4)(var7, var1);
            var1 = 0;
            var23 = var6[var1];
            var1 = 1;
            var1 = var6[var1];
            var _closure2_slot5 = var1;
            var1 = 21;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.analyticsLocations;
            var _closure2_slot6 = var1;
            var1 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 372; continue _fun0004 }
 10:
                            var2 = undefined;
                            var3 = undefined;
                            var6 = _closure2_slot1;
                            var5 = null;
                            var5 = var5 == var6;
                            var7 = undefined;
                            if(var5) { _fun0004_ip = 42; continue _fun0004 }
 32:
                            var5 = _closure2_slot1;
                            var7 = var5.paymentGateway;
 42:
                            var5 = _closure1_slot8;
                            var5 = var5.APPLE_PARTNER;
                            var3 = var7 === var5;
                            var5 = _closure2_slot0;
                            if(var5) { _fun0004_ip = 223; continue _fun0004 }
 69: // try_start_0
                            var7 = _closure2_slot5;
                            var5 = true;
                            var5 = var7.bind(var2)(var5);
                            if(var3) { _fun0004_ip = 147; continue _fun0004 }
 83:
                            var5 = _closure1_slot2;
                            var7 = _closure1_slot3;
                            var3 = 22;
                            var3 = var7[var3];
                            var8 = var5.bind(var2)(var3);
                            var7 = var8.resubscribeToSubscription;
                            var5 = _closure2_slot1;
                            var3 = _closure2_slot6;
                            var3 = var7.bind(var8)(var5, var3);
                            SaveGenerator(address=127);
 125:
                            return var3;
 127:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(!var5) { _fun0004_ip = 165; continue _fun0004 }
 133: // try_end0
                            var7 = _closure2_slot5;
                            var5 = false;
                            var5 = var7.bind(var2)(var5);
                            return var3;
 147: // try_start_1
                            var3 = _closure2_slot4;
                            var3 = var3.bind(var2)();
                            SaveGenerator(address=159);
 157:
                            return var3;
 159:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0004_ip = 194; continue _fun0004 }
 165:
                            var5 = function openResubsribedAlert() {
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var1 = 17;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.openLazy;
                                var2 = {};
                                var5 = function importer() {
                                    var3 = _closure1_slot0;
                                    var1 = _closure1_slot3;
                                    var2 = 19;
                                    var2 = var1[var2];
                                    var4 = undefined;
                                    var3 = var3.bind(var4)(var2);
                                    var2 = 18;
                                    var2 = var1[var2];
                                    var1 = var1.paths;
                                    var3 = var3.bind(var4)(var2, var1);
                                    var2 = var3.then;
                                    var1 = function(arg1) {
                                        var2 = arg1;
                                        var2 = var2.default;
                                        var _closure8_slot0 = var2;
                                        var1 = function(arg1) {
                                            var4 = _closure1_slot12;
                                            var3 = _closure8_slot0;
                                            var2 = {};
                                            var5 = arg1;
                                            var6 = var2;
                                            var1 = copyDataProperties(var6, var5);
                                            var1 = undefined;
                                            var1 = var4.bind(var1)(var3, var2);
                                            return var1;
                                        };
                                        return var1;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var2['importer'] = var5;
                                var2 = var3.bind(var4)(var2);
                                return var1;
                            };
                            var5 = var5.bind(var2)();
 178: // try_end1
                            var7 = _closure2_slot5;
                            var5 = false;
                            var5 = var7.bind(var2)(var5);
                            _fun0004_ip = 369; continue _fun0004;
 194:
                            var7 = _closure2_slot5;
                            var5 = false;
                            var5 = var7.bind(var2)(var5);
                            return var3;
 208: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=2);
                            var5 = _closure2_slot5;
                            var4 = false;
                            var4 = var5.bind(var2)(var4);
                            throw var3;
 223:
                            var4 = _closure1_slot1;
                            var10 = _closure1_slot3;
                            var3 = 17;
                            var3 = var10[var3];
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.show;
                            var3 = {};
                            var9 = _closure1_slot0;
                            var6 = 9;
                            var7 = var10[var6];
                            var7 = var9.bind(var2)(var7);
                            var11 = var7.intl;
                            var8 = var11.string;
                            var7 = var10[var6];
                            var7 = var9.bind(var2)(var7);
                            var7 = var7.t;
                            var7 = var7.NL7DFh;
                            var7 = var8.bind(var11)(var7);
                            var3['body'] = var7;
                            var7 = var10[var6];
                            var7 = var9.bind(var2)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var10[var6];
                            var6 = var9.bind(var2)(var6);
                            var6 = var6.t;
                            var6 = var6.NX+WJC;
                            var6 = var7.bind(var8)(var6);
                            var3['confirmText'] = var6;
                            var6 = true;
                            var3['isDismissable'] = var6;
                            var3 = var4.bind(var5)(var3);
 369:
                            return var2;
 372:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var25 = var1.bind(var4)();
            var3 = _closure1_slot13;
            var2 = _closure1_slot7;
            var1 = {};
            var6 = var20.cardContent;
            var1['style'] = var6;
            var6 = null;
            if(!var5) { _fun0003_ip = 559; continue _fun0003 }
 258:
            var8 = _closure1_slot13;
            var7 = _closure1_slot14;
            var5 = {};
            var19 = _closure1_slot7;
            var10 = {};
            var11 = var20.paymentOverDueWarning;
            var10['style'] = var11;
            var28 = _closure1_slot12;
            var14 = _closure1_slot1;
            var21 = _closure1_slot3;
            var11 = 23;
            var11 = var21[var11];
            var22 = var14.bind(var4)(var11);
            var11 = {'color': null, 'width': 16, 'height': 16};
            var31 = 8;
            var29 = var21[var31];
            var29 = var14.bind(var4)(var29);
            var29 = var29.unsafe_rawColors;
            var29 = var29.YELLOW_300;
            var11['color'] = var29;
            var11 = var28.bind(var4)(var22, var11);
            var22 = new Array(3);
            var22[0] = var11;
            var30 = _closure1_slot12;
            var11 = 13;
            var28 = var21[var11];
            var29 = var14.bind(var4)(var28);
            var28 = {};
            var28['size'] = var31;
            var28 = var30.bind(var4)(var29, var28);
            var22[1] = var28;
            var30 = _closure1_slot12;
            var34 = _closure1_slot0;
            var28 = 10;
            var28 = var21[var28];
            var28 = var34.bind(var4)(var28);
            var29 = var28.Text;
            var28 = {'variant': 'text-sm/medium', 'color': 'interactive-active'};
            var31 = 9;
            var32 = var21[var31];
            var32 = var34.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var31 = var21[var31];
            var31 = var34.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.eaqlam;
            var31 = var32.bind(var33)(var31);
            var28['children'] = var31;
            var28 = var30.bind(var4)(var29, var28);
            var22[2] = var28;
            var10['children'] = var22;
            var19 = var8.bind(var4)(var19, var10);
            var10 = new Array(2);
            var10[0] = var19;
            var19 = _closure1_slot12;
            var11 = var21[var11];
            var14 = var14.bind(var4)(var11);
            var11 = {};
            var21 = 12;
            var11['size'] = var21;
            var11 = var19.bind(var4)(var14, var11);
            var10[1] = var11;
            var5['children'] = var10;
            var6 = var8.bind(var4)(var7, var5);
 559:
            var5 = new Array(5);
            var5[0] = var6;
            var8 = _closure1_slot12;
            var7 = _closure1_slot1;
            var11 = _closure1_slot3;
            var10 = 24;
            var6 = var11[var10];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var21 = _closure1_slot0;
            var30 = 9;
            var14 = var11[var30];
            var14 = var21.bind(var4)(var14);
            var19 = var14.intl;
            var14 = var19.string;
            var11 = var11[var30];
            var11 = var21.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.dltUMD;
            var11 = var14.bind(var19)(var11);
            var6['title'] = var11;
            var11 = undefined;
            if(!var12) { _fun0003_ip = 675; continue _fun0003 }
 655:
            var19 = _closure1_slot1;
            var21 = _closure1_slot3;
            var14 = 25;
            var14 = var21[var14];
            var11 = var19.bind(var4)(var14);
 675:
            var6['icon'] = var11;
            var11 = undefined;
            if(!var12) { _fun0003_ip = 710; continue _fun0003 }
 684:
            var14 = _closure1_slot0;
            var19 = _closure1_slot3;
            var12 = 26;
            var12 = var19[var12];
            var12 = var14.bind(var4)(var12);
            var11 = var12.presentGuildRoleSubscriptionTrialTierMonthCost;
 710:
            var6['onPressIcon'] = var11;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot12;
            var21 = _closure1_slot1;
            var28 = _closure1_slot3;
            var11 = 13;
            var6 = var28[var11];
            var7 = var21.bind(var4)(var6);
            var6 = {};
            var9 = 16;
            var6['size'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var20.cardRow;
            var6['style'] = var9;
            var14 = _closure1_slot12;
            var9 = var28[var10];
            var12 = var21.bind(var4)(var9);
            var9 = {};
            var9['title'] = var16;
            var9['children'] = var15;
            var12 = var14.bind(var4)(var12, var9);
            var9 = new Array(3);
            var9[0] = var12;
            var14 = _closure1_slot12;
            var11 = var28[var11];
            var12 = var21.bind(var4)(var11);
            var11 = {};
            var15 = 8;
            var11['size'] = var15;
            var11 = var14.bind(var4)(var12, var11);
            var9[1] = var11;
            var12 = _closure1_slot12;
            var10 = var28[var10];
            var11 = var21.bind(var4)(var10);
            var10 = {};
            var32 = _closure1_slot0;
            var14 = var28[var30];
            var14 = var32.bind(var4)(var14);
            var16 = var14.intl;
            var15 = var16.string;
            var14 = var28[var30];
            var14 = var32.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.AOcwWF;
            var14 = var15.bind(var16)(var14);
            var10['title'] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var8 = _closure1_slot12;
            var6 = 27;
            var6 = var28[var6];
            var6 = var32.bind(var4)(var6);
            var7 = var6.FormSection;
            var6 = {};
            var9 = true;
            var6['inset'] = var9;
            var9 = var20.manageSection;
            var6['titleViewStyle'] = var9;
            var9 = var28[var30];
            var9 = var32.bind(var4)(var9);
            var11 = var9.intl;
            var10 = var11.string;
            var9 = var28[var30];
            var9 = var32.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.4neDMz;
            var9 = var10.bind(var11)(var9);
            var6['title'] = var9;
            var11 = _closure1_slot12;
            var10 = _closure1_slot7;
            var9 = {};
            var12 = var20.buttonsContainer;
            var9['style'] = var12;
            var14 = _closure1_slot13;
            var12 = 28;
            var12 = var28[var12];
            var12 = var32.bind(var4)(var12);
            var13 = var12.GappedList;
            var12 = {};
            var15 = function renderGap() {
                var4 = _closure1_slot12;
                var3 = _closure1_slot7;
                var2 = {};
                var1 = _closure2_slot3;
                var1 = var1.buttonDivider;
                var2['style'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var12['renderGap'] = var15;
            var22 = _closure1_slot12;
            var16 = 29;
            var15 = var28[var16];
            var19 = var21.bind(var4)(var15);
            var15 = {};
            var29 = var28[var30];
            var29 = var32.bind(var4)(var29);
            var33 = var29.intl;
            var31 = var33.string;
            var29 = var28[var30];
            var29 = var32.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.7spYfn;
            var29 = var31.bind(var33)(var29);
            var15['text'] = var29;
            var29 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 271; continue _fun0005 }
 16:
                    var2 = _closure2_slot1;
                    var3 = var2.paymentGateway;
                    var2 = _closure1_slot8;
                    var2 = var2.APPLE_PARTNER;
                    if(!(var3 !== var2)) { _fun0005_ip = 196; continue _fun0005 }
 46:
                    var3 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var2 = 17;
                    var2 = var11[var2];
                    var10 = undefined;
                    var5 = var3.bind(var10)(var2);
                    var3 = var5.show;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var6 = 9;
                    var7 = var11[var6];
                    var7 = var9.bind(var10)(var7);
                    var12 = var7.intl;
                    var8 = var12.string;
                    var7 = var11[var6];
                    var7 = var9.bind(var10)(var7);
                    var7 = var7.t;
                    var7 = var7.fmm9jo;
                    var7 = var8.bind(var12)(var7);
                    var2['body'] = var7;
                    var7 = var11[var6];
                    var7 = var9.bind(var10)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var11[var6];
                    var6 = var9.bind(var10)(var6);
                    var6 = var6.t;
                    var6 = var6.NX+WJC;
                    var6 = var7.bind(var8)(var6);
                    var2['confirmText'] = var6;
                    var6 = true;
                    var2['isDismissable'] = var6;
                    var2 = var3.bind(var5)(var2);
                    _fun0005_ip = 271; continue _fun0005;
 196:
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var2 = 30;
                    var2 = var7[var2];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.openURL;
                    var5 = _closure1_slot0;
                    var4 = 31;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.getExternalSubscriptionMethodUrl;
                    var1 = _closure2_slot1;
                    var4 = var1.paymentGateway;
                    var1 = 'PAYMENT_SOURCE_MANAGEMENT';
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
 271:
                    var1 = undefined;
                    return var1;
                }
            };
            var15['onPress'] = var29;
            var19 = var22.bind(var4)(var19, var15);
            var15 = new Array(3);
            var15[0] = var19;
            var22 = _closure1_slot12;
            var19 = var28[var16];
            var21 = var21.bind(var4)(var19);
            var19 = {};
            var29 = var28[var30];
            var29 = var32.bind(var4)(var29);
            var31 = var29.intl;
            var29 = var31.string;
            var28 = var28[var30];
            var28 = var32.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.FRbWR0;
            var28 = var29.bind(var31)(var28);
            var19['text'] = var28;
            var26 = function onPress() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 32;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.transitionTo;
                var7 = _closure1_slot9;
                var6 = var7.CHANNEL;
                var5 = _closure2_slot2;
                var2 = _closure1_slot11;
                var2 = var2.ROLE_SUBSCRIPTIONS;
                var2 = var6.bind(var7)(var5, var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var19['onPress'] = var26;
            var19 = var22.bind(var4)(var21, var19);
            var15[1] = var19;
            var19 = _closure1_slot12;
            if(var17) { _fun0003_ip = 1380; continue _fun0003 }
 1292:
            var17 = _closure1_slot1;
            var21 = _closure1_slot3;
            var16 = var21[var16];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var28 = _closure1_slot0;
            var22 = var21[var30];
            var22 = var28.bind(var4)(var22);
            var26 = var22.intl;
            var22 = var26.string;
            var21 = var21[var30];
            var21 = var28.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.Dx0lFx;
            var21 = var22.bind(var26)(var21);
            var16['text'] = var21;
            var16['onPress'] = var18;
            var16 = var19.bind(var4)(var17, var16);
            _fun0003_ip = 1507; continue _fun0003;
 1380:
            var18 = _closure1_slot7;
            var17 = {};
            var20 = var20.resubscribeButtonContainer;
            var17['style'] = var20;
            var22 = _closure1_slot12;
            var21 = _closure1_slot1;
            var26 = _closure1_slot3;
            var20 = 33;
            var20 = var26[var20];
            var21 = var21.bind(var4)(var20);
            var20 = {};
            var29 = _closure1_slot0;
            var27 = var26[var30];
            var27 = var29.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var26[var30];
            var26 = var29.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.iIvF29;
            var26 = var27.bind(var28)(var26);
            var20['text'] = var26;
            var20['onPress'] = var25;
            if(var23) { _fun0003_ip = 1486; continue _fun0003 }
 1483:
            var23 = !var24;
 1486:
            var20['loading'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var17['children'] = var20;
            var16 = var19.bind(var4)(var18, var17);
 1507:
            var15[2] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[4] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PaymentGateways;
    var _closure1_slot8 = var7;
    var7 = var4.Routes;
    var _closure1_slot9 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.jsxs;
    var _closure1_slot13 = var7;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 8;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9['borderRadius'] = var12;
    var4['container'] = var9;
    var9 = {};
    var12 = 16;
    var9['padding'] = var12;
    var4['cardContent'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SECONDARY_ALT;
    var9['backgroundColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var13 = 'hidden';
    var9['overflow'] = var13;
    var4['buttonsContainer'] = var9;
    var9 = {'width': '100%', 'borderBottomWidth': 1, 'borderColor': null, 'marginLeft': 16, 'marginTop': 4294967295};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MODIFIER_ACCENT;
    var9['borderColor'] = var14;
    var4['buttonDivider'] = var9;
    var9 = {};
    var9['padding'] = var12;
    var4['resubscribeButtonContainer'] = var9;
    var9 = {};
    var9['paddingHorizontal'] = var12;
    var4['separator'] = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var9['borderRadius'] = var14;
    var9['overflow'] = var13;
    var4['header'] = var9;
    var13 = 'row';
    var9 = {'padding': 16, 'alignItems': 'center', 'flexDirection': 'row'};
    var4['headerContent'] = var9;
    var9 = {'alignSelf': 'stretch', 'flexGrow': 1, 'flexShrink': 1, 'paddingHorizontal': 16};
    var4['headerTitlesContainer'] = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_NORMAL;
    var9['tintColor'] = var14;
    var4['expandIcon'] = var9;
    var9 = {};
    var15 = {};
    var14 = '180deg';
    var15['rotate'] = var14;
    var14 = new Array(1);
    var14[0] = var15;
    var9['transform'] = var14;
    var4['expandIconExpanded'] = var9;
    var9 = {};
    var9['flexDirection'] = var13;
    var4['cardRow'] = var9;
    var9 = {};
    var9['paddingTop'] = var12;
    var4['manageSection'] = var9;
    var9 = {'flexDirection': 'row', 'width': '90%'};
    var4['paymentOverDueWarning'] = var9;
    var9 = {'paddingVertical': 4, 'paddingHorizontal': 18, 'flexDirection': 'row', 'alignItems': 'center'};
    var4['headerStatusContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.STATUS_DANGER;
    var9['backgroundColor'] = var12;
    var4['headerStatusCancel'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BRAND;
    var9['backgroundColor'] = var12;
    var4['headerStatusTrial'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.STATUS_WARNING;
    var9['backgroundColor'] = var10;
    var4['headerStatusPastDue'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 36;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ManageSubscriptionCard(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var17 = var1.subscription;
            var _closure2_slot0 = var17;
            var1 = _closure1_slot15;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 34;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.bind(var5)(var17);
            var11 = var2.listing;
            var1 = var2.groupListing;
            var16 = var2.guild;
            var7 = var2.expanded;
            var10 = var2.handleToggleExpanded;
            var19 = var2.subscriptionInfo;
            var3 = _closure1_slot0;
            var2 = 35;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot1 = var2;
            var18 = null;
            var2 = var18 == var1;
            var1 = null;
            if(var2) { _fun0006_ip = 395; continue _fun0006 }
 132:
            var2 = var18 == var11;
            var1 = null;
            if(var2) { _fun0006_ip = 395; continue _fun0006 }
 144:
            var2 = var18 == var19;
            var1 = null;
            if(var2) { _fun0006_ip = 395; continue _fun0006 }
 156:
            var4 = _closure1_slot13;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var6.container;
            var2['style'] = var6;
            var9 = _closure1_slot12;
            var8 = _closure1_slot17;
            var6 = {};
            var6['expanded'] = var7;
            var6['guild'] = var16;
            var13 = var19.isCancelled;
            var6['isCancelled'] = var13;
            var13 = var19.isTrial;
            var6['isTrial'] = var13;
            var13 = var19.isPastDue;
            var6['isPastDue'] = var13;
            var6['listing'] = var11;
            var6['onToggleExpanded'] = var10;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            if(!var7) { _fun0006_ip = 381; continue _fun0006 }
 257:
            var10 = _closure1_slot13;
            var9 = _closure1_slot14;
            var8 = {};
            var14 = _closure1_slot12;
            var13 = _closure1_slot18;
            var11 = {};
            var13 = var14.bind(var5)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var14 = _closure1_slot12;
            var13 = _closure1_slot19;
            var12 = {};
            var21 = var12;
            var20 = var19;
            var19 = copyDataProperties(var21, var20);
            var19 = var18 == var16;
            var18 = undefined;
            if(var19) { _fun0006_ip = 325; continue _fun0006 }
 320:
            var18 = var16.id;
 325:
            var16 = 'guildId';
            var12[var16] = var18;
            var16 = 'subscription';
            var12[var16] = var17;
            var16 = function onCancelSubscription() {
                var4 = _closure2_slot1;
                var3 = var4.push;
                var1 = _closure1_slot10;
                var2 = var1.GUILD_ROLE_SUBSCRIPTIONS_CANCEL;
                var1 = {};
                var5 = _closure2_slot0;
                var5 = var5.id;
                var1['subscriptionId'] = var5;
                var5 = function onClose() {
                    var2 = _closure2_slot1;
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['onClose'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var15 = 'onCancelSubscription';
            var12[var15] = var16;
            var12 = var14.bind(var5)(var13, var12);
            var11[1] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 381:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 395:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();