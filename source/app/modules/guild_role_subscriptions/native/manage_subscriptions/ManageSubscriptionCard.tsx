// app/modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = function HeaderStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.isCancelled;
            var2 = var1.isTrial;
            var1 = var1.isPastDue;
            var4 = _closure1_slot14;
            var5 = undefined;
            var7 = var4.bind(var5)();
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = '';
            var8 = undefined;
            var11 = true;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
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
            var1 = var1.uENdgb;
            var9 = var2.bind(var3)(var1);
            var8 = var7.headerStatusPastDue;
            var11 = false;
            _fun0001_ip = 6; continue _fun0001;
case 4:
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
            var1 = var1.6anton;
            var9 = var2.bind(var3)(var1);
            var8 = var7.headerStatusTrial;
            var11 = true;
            _fun0001_ip = 6; continue _fun0001;
case 2:
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
            var1 = var1.7uFZGt;
            var9 = var2.bind(var3)(var1);
            var8 = var7.headerStatusCancel;
            var11 = true;
case 6:
            var2 = '';
            var1 = null;
            if(!(var2 !== var9)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = _closure1_slot11;
            var3 = _closure1_slot7;
            var2 = {};
            var10 = var7.headerStatusContainer;
            var7 = new Array(2);
            var7[0] = var10;
            var7[1] = var8;
            var2['style'] = var7;
            var8 = _closure1_slot11;
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
            if(!var11) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = 'white';
case 10:
            var6['color'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function Header(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var16 = var1.expanded;
            var22 = var1.guild;
            var10 = var1.isCancelled;
            var9 = var1.isTrial;
            var8 = var1.isPastDue;
            var23 = var1.listing;
            var5 = var1.onToggleExpanded;
            var1 = _closure1_slot14;
            var4 = undefined;
            var17 = var1.bind(var4)();
            var3 = _closure1_slot12;
            var18 = _closure1_slot0;
            var20 = _closure1_slot3;
            var1 = 12;
            var1 = var20[var1];
            var1 = var18.bind(var4)(var1);
            var2 = var1.PressableHighlight;
            var1 = {};
            var6 = var17.header;
            var1['style'] = var6;
            var1['onPress'] = var5;
            var7 = _closure1_slot11;
            var6 = _closure1_slot21;
            var5 = {};
            var5['isCancelled'] = var10;
            var5['isTrial'] = var9;
            var5['isPastDue'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot12;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var17.headerContent;
            var6['style'] = var9;
            var11 = _closure1_slot11;
            var10 = _closure1_slot1;
            var9 = 13;
            var9 = var20[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['guild'] = var22;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var12 = _closure1_slot12;
            var11 = _closure1_slot7;
            var10 = {};
            var13 = var17.headerTitlesContainer;
            var10['style'] = var13;
            var21 = _closure1_slot11;
            var14 = 10;
            var13 = var20[var14];
            var13 = var18.bind(var4)(var13);
            var19 = var13.Text;
            var13 = {'ellipsizeMode': 'tail', 'lineClamp': 2, 'variant': 'text-md/semibold', 'color': 'interactive-text-active'};
            var23 = var23.name;
            var13['children'] = var23;
            var19 = var21.bind(var4)(var19, var13);
            var13 = new Array(3);
            var13[0] = var19;
            var19 = _closure1_slot15;
            var13[1] = var19;
            var19 = _closure1_slot11;
            var14 = var20[var14];
            var14 = var18.bind(var4)(var14);
            var18 = var14.Text;
            var14 = {'variant': 'text-sm/medium', 'color': 'interactive-text-default'};
            var21 = null;
            var23 = var21 == var22;
            var20 = undefined;
            if(var23) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var20 = var22.name;
case 12:
            if(!(var21 == var20)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
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
            var21 = var21.He+cmd;
            var20 = var22.bind(var23)(var21);
case 14:
            var14['children'] = var20;
            var14 = var19.bind(var4)(var18, var14);
            var13[2] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var12 = _closure1_slot11;
            var11 = _closure1_slot1;
            var10 = _closure1_slot3;
            var13 = 14;
            var10 = var10[var13];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var18 = var17.expandIcon;
            var14 = new Array(2);
            var14[0] = var18;
            if(!var16) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var16 = var17.expandIconExpanded;
case 16:
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
    var _closure1_slot22 = var1;
    var1 = function CardBody(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var17 = var2.isCancelled;
            var12 = var2.isTrial;
            var _closure2_slot0 = var12;
            var5 = var2.isPastDue;
            var13 = var2.memberSince;
            var14 = var2.nextRenewalDate;
            var15 = var2.nextRenewalLabel;
            var18 = var2.onCancelSubscription;
            var1 = var2.subscription;
            var _closure2_slot1 = var1;
            var9 = var2.subscriptionPrice;
            var2 = var2.guildId;
            var _closure2_slot2 = var2;
            var2 = _closure1_slot14;
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
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                            var2 = undefined;
                            var3 = undefined;
                            var5 = undefined;
                            var6 = _closure2_slot1;
                            var3 = var6.isPurchasedViaAppleGeneric;
                            var6 = _closure2_slot0;
                            if(var6) { _fun0004_ip = 20; continue _fun0004 }
case 21: // try_start_0
                            var6 = _closure2_slot5;
                            var7 = true;
                            var6 = var6.bind(var2)(var7);
                            var6 = false;
                            var5 = false;
                            if(var3) { _fun0004_ip = 22; continue _fun0004 }
case 7:
                            var8 = _closure1_slot2;
                            var9 = _closure1_slot3;
                            var3 = 22;
                            var3 = var9[var3];
                            var10 = var8.bind(var2)(var3);
                            var9 = var10.resubscribeToSubscription;
                            var8 = _closure2_slot1;
                            var3 = _closure2_slot6;
                            var3 = var9.bind(var10)(var8, var3);
                            SaveGenerator(address=104);
case 23:
                            return var3;
case 24:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                            if(var8) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                            var5 = true;
                            _fun0004_ip = 27; continue _fun0004;
case 25: // try_end0
                            var7 = _closure2_slot5;
                            var7 = var7.bind(var2)(var6);
                            return var3;
case 22: // try_start_1
                            var3 = _closure2_slot4;
                            var3 = var3.bind(var2)();
                            SaveGenerator(address=138);
case 28:
                            return var3;
case 29:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                            if(var7) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                            var5 = var3;
case 27:
                            if(!var5) { _fun0004_ip = 32; continue _fun0004 }
case 33:
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
                                            var4 = _closure1_slot11;
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
case 32: // try_end1
                            var5 = _closure2_slot5;
                            var5 = var5.bind(var2)(var6);
                            _fun0004_ip = 10; continue _fun0004;
case 30:
                            var5 = _closure2_slot5;
                            var5 = var5.bind(var2)(var6);
                            return var3;
case 34: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=2);
                            var5 = _closure2_slot5;
                            var4 = false;
                            var4 = var5.bind(var2)(var4);
                            throw var3;
case 20:
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
                            var7 = var7.NL7DFi;
                            var7 = var8.bind(var11)(var7);
                            var3['body'] = var7;
                            var7 = var10[var6];
                            var7 = var9.bind(var2)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var10[var6];
                            var6 = var9.bind(var2)(var6);
                            var6 = var6.t;
                            var6 = var6.NX+WJN;
                            var6 = var7.bind(var8)(var6);
                            var3['confirmText'] = var6;
                            var6 = true;
                            var3['isDismissable'] = var6;
                            var3 = var4.bind(var5)(var3);
case 10:
                            return var2;
case 18:
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
            var3 = _closure1_slot12;
            var2 = _closure1_slot7;
            var1 = {};
            var6 = var20.cardContent;
            var1['style'] = var6;
            var6 = null;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var8 = _closure1_slot12;
            var7 = _closure1_slot13;
            var5 = {};
            var11 = _closure1_slot7;
            var10 = {};
            var16 = var20.paymentOverDueWarning;
            var10['style'] = var16;
            var21 = _closure1_slot11;
            var28 = _closure1_slot1;
            var32 = _closure1_slot3;
            var16 = 23;
            var16 = var32[var16];
            var19 = var28.bind(var4)(var16);
            var16 = {'color': null, 'width': 16, 'height': 16};
            var22 = 8;
            var22 = var32[var22];
            var22 = var28.bind(var4)(var22);
            var22 = var22.unsafe_rawColors;
            var22 = var22.YELLOW_300;
            var16['color'] = var22;
            var19 = var21.bind(var4)(var19, var16);
            var16 = new Array(3);
            var16[0] = var19;
            var19 = _closure1_slot16;
            var16[1] = var19;
            var22 = _closure1_slot11;
            var31 = _closure1_slot0;
            var19 = 10;
            var19 = var32[var19];
            var19 = var31.bind(var4)(var19);
            var21 = var19.Text;
            var19 = {'variant': 'text-sm/medium', 'color': 'interactive-text-active'};
            var28 = 9;
            var29 = var32[var28];
            var29 = var31.bind(var4)(var29);
            var30 = var29.intl;
            var29 = var30.string;
            var28 = var32[var28];
            var28 = var31.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.eaqlau;
            var28 = var29.bind(var30)(var28);
            var19['children'] = var28;
            var19 = var22.bind(var4)(var21, var19);
            var16[2] = var19;
            var10['children'] = var16;
            var11 = var8.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var11 = _closure1_slot17;
            var10[1] = var11;
            var5['children'] = var10;
            var6 = var8.bind(var4)(var7, var5);
case 35:
            var5 = new Array(5);
            var5[0] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot1;
            var11 = _closure1_slot3;
            var10 = 24;
            var6 = var11[var10];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var21 = _closure1_slot0;
            var30 = 9;
            var16 = var11[var30];
            var16 = var21.bind(var4)(var16);
            var19 = var16.intl;
            var16 = var19.string;
            var11 = var11[var30];
            var11 = var21.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.dltUMH;
            var11 = var16.bind(var19)(var11);
            var6['title'] = var11;
            var11 = undefined;
            if(!var12) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var19 = _closure1_slot1;
            var21 = _closure1_slot3;
            var16 = 25;
            var16 = var21[var16];
            var11 = var19.bind(var4)(var16);
case 37:
            var6['icon'] = var11;
            var11 = undefined;
            if(!var12) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var16 = _closure1_slot0;
            var19 = _closure1_slot3;
            var12 = 26;
            var12 = var19[var12];
            var12 = var16.bind(var4)(var12);
            var11 = var12.presentGuildRoleSubscriptionTrialTierMonthCost;
case 39:
            var6['onPressIcon'] = var11;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var6 = _closure1_slot18;
            var5[2] = var6;
            var8 = _closure1_slot12;
            var7 = _closure1_slot7;
            var6 = {};
            var9 = var20.cardRow;
            var6['style'] = var9;
            var12 = _closure1_slot11;
            var21 = _closure1_slot1;
            var28 = _closure1_slot3;
            var9 = var28[var10];
            var11 = var21.bind(var4)(var9);
            var9 = {};
            var9['title'] = var15;
            var9['children'] = var14;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(3);
            var9[0] = var11;
            var11 = _closure1_slot19;
            var9[1] = var11;
            var12 = _closure1_slot11;
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
            var14 = var14.AOcwWB;
            var14 = var15.bind(var16)(var14);
            var10['title'] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var8 = _closure1_slot11;
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
            var9 = var9.4neDM+;
            var9 = var10.bind(var11)(var9);
            var6['title'] = var9;
            var11 = _closure1_slot11;
            var10 = _closure1_slot7;
            var9 = {};
            var12 = var20.buttonsContainer;
            var9['style'] = var12;
            var14 = _closure1_slot12;
            var12 = 28;
            var12 = var28[var12];
            var12 = var32.bind(var4)(var12);
            var13 = var12.GappedList;
            var12 = {};
            var15 = function renderGap() {
                var4 = _closure1_slot11;
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
            var22 = _closure1_slot11;
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
            var29 = var29.7spYft;
            var29 = var31.bind(var33)(var29);
            var15['text'] = var29;
            var29 = function onPress() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var2 = _closure2_slot1;
                    var2 = var2.isPurchasedViaAppleGeneric;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    if(var2) { _fun0005_ip = 43; continue _fun0005 }
case 5:
                    var2 = 17;
                    var2 = var7[var2];
                    var12 = undefined;
                    var6 = var3.bind(var12)(var2);
                    var5 = var6.show;
                    var2 = {};
                    var11 = _closure1_slot0;
                    var8 = 9;
                    var9 = var7[var8];
                    var9 = var11.bind(var12)(var9);
                    var13 = var9.intl;
                    var10 = var13.string;
                    var9 = var7[var8];
                    var9 = var11.bind(var12)(var9);
                    var9 = var9.t;
                    var9 = var9.fmm9jo;
                    var9 = var10.bind(var13)(var9);
                    var2['body'] = var9;
                    var9 = var7[var8];
                    var9 = var11.bind(var12)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var7[var8];
                    var8 = var11.bind(var12)(var8);
                    var8 = var8.t;
                    var8 = var8.NX+WJN;
                    var8 = var9.bind(var10)(var8);
                    var2['confirmText'] = var8;
                    var8 = true;
                    var2['isDismissable'] = var8;
                    var2 = var5.bind(var6)(var2);
                    _fun0005_ip = 41; continue _fun0005;
case 43:
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
case 41:
                    var1 = undefined;
                    return var1;
                }
            };
            var15['onPress'] = var29;
            var19 = var22.bind(var4)(var19, var15);
            var15 = new Array(3);
            var15[0] = var19;
            var22 = _closure1_slot11;
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
            var28 = var28.FRbWR8;
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
                var7 = _closure1_slot8;
                var6 = var7.CHANNEL;
                var5 = _closure2_slot2;
                var2 = _closure1_slot10;
                var2 = var2.ROLE_SUBSCRIPTIONS;
                var2 = var6.bind(var7)(var5, var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var19['onPress'] = var26;
            var19 = var22.bind(var4)(var21, var19);
            var15[1] = var19;
            var19 = _closure1_slot11;
            if(var17) { _fun0003_ip = 44; continue _fun0003 }
case 45:
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
            var21 = var21.Dx0lF7;
            var21 = var22.bind(var26)(var21);
            var16['text'] = var21;
            var16['onPress'] = var18;
            var16 = var19.bind(var4)(var17, var16);
            _fun0003_ip = 46; continue _fun0003;
case 44:
            var18 = _closure1_slot7;
            var17 = {};
            var20 = var20.resubscribeButtonContainer;
            var17['style'] = var20;
            var22 = _closure1_slot11;
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
            var26 = var26.iIvF2z;
            var26 = var27.bind(var28)(var26);
            var20['text'] = var26;
            var20['onPress'] = var25;
            if(var23) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var23 = !var24;
case 47:
            var20['loading'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var17['children'] = var20;
            var16 = var19.bind(var4)(var18, var17);
case 46:
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
    var _closure1_slot23 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var13 = 2;
    var4 = var6[var13];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Routes;
    var _closure1_slot8 = var8;
    var4 = var4.UserSettingsSections;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var9 = var4.jsxs;
    var _closure1_slot12 = var9;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var4 = 7;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var10 = var11.createStyles;
    var4 = {};
    var12 = {};
    var9 = 8;
    var14 = var6[var9];
    var14 = var7.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var12['backgroundColor'] = var14;
    var14 = var6[var9];
    var14 = var7.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var12['borderRadius'] = var14;
    var4['container'] = var12;
    var14 = {};
    var12 = 16;
    var14['padding'] = var12;
    var4['cardContent'] = var14;
    var14 = {};
    var15 = var6[var9];
    var15 = var7.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_NORMAL;
    var14['backgroundColor'] = var15;
    var15 = var6[var9];
    var15 = var7.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var14['borderRadius'] = var15;
    var15 = 'hidden';
    var14['overflow'] = var15;
    var4['buttonsContainer'] = var14;
    var14 = {'width': '100%', 'borderBottomWidth': 1, 'borderColor': null, 'marginLeft': 16, 'marginTop': 4294967295};
    var16 = var6[var9];
    var16 = var7.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BORDER_SUBTLE;
    var14['borderColor'] = var16;
    var4['buttonDivider'] = var14;
    var14 = {};
    var14['padding'] = var12;
    var4['resubscribeButtonContainer'] = var14;
    var14 = {};
    var14['paddingHorizontal'] = var12;
    var4['separator'] = var14;
    var14 = {};
    var16 = var6[var9];
    var16 = var7.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var14['borderRadius'] = var16;
    var14['overflow'] = var15;
    var4['header'] = var14;
    var15 = 'row';
    var14 = {'padding': 16, 'alignItems': 'center', 'flexDirection': 'row'};
    var4['headerContent'] = var14;
    var14 = {'alignSelf': 'stretch', 'flexGrow': 1, 'flexShrink': 1, 'paddingHorizontal': 16};
    var4['headerTitlesContainer'] = var14;
    var14 = {};
    var16 = var6[var9];
    var16 = var7.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_TEXT_DEFAULT;
    var14['tintColor'] = var16;
    var4['expandIcon'] = var14;
    var14 = {};
    var17 = {};
    var16 = '180deg';
    var17['rotate'] = var16;
    var16 = new Array(1);
    var16[0] = var17;
    var14['transform'] = var16;
    var4['expandIconExpanded'] = var14;
    var14 = {};
    var14['flexDirection'] = var15;
    var4['cardRow'] = var14;
    var14 = {};
    var14['paddingTop'] = var12;
    var4['manageSection'] = var14;
    var14 = {'flexDirection': 'row', 'width': '90%'};
    var4['paymentOverDueWarning'] = var14;
    var14 = {'paddingVertical': 4, 'paddingHorizontal': 18, 'flexDirection': 'row', 'alignItems': 'center'};
    var4['headerStatusContainer'] = var14;
    var14 = {};
    var15 = var6[var9];
    var15 = var7.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_FEEDBACK_CRITICAL;
    var14['backgroundColor'] = var15;
    var4['headerStatusCancel'] = var14;
    var14 = {};
    var15 = var6[var9];
    var15 = var7.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BRAND;
    var14['backgroundColor'] = var15;
    var4['headerStatusTrial'] = var14;
    var14 = {};
    var15 = var6[var9];
    var15 = var7.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.STATUS_WARNING;
    var14['backgroundColor'] = var15;
    var4['headerStatusPastDue'] = var14;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot14 = var4;
    var4 = 11;
    var10 = var6[var4];
    var11 = var7.bind(var1)(var10);
    var10 = {};
    var10['size'] = var13;
    var10 = var8.bind(var1)(var11, var10);
    var _closure1_slot15 = var10;
    var10 = var6[var4];
    var11 = var7.bind(var1)(var10);
    var10 = {};
    var10['size'] = var9;
    var10 = var8.bind(var1)(var11, var10);
    var _closure1_slot16 = var10;
    var10 = var6[var4];
    var11 = var7.bind(var1)(var10);
    var10 = {};
    var13 = 12;
    var10['size'] = var13;
    var10 = var8.bind(var1)(var11, var10);
    var _closure1_slot17 = var10;
    var10 = var6[var4];
    var11 = var7.bind(var1)(var10);
    var10 = {};
    var10['size'] = var12;
    var10 = var8.bind(var1)(var11, var10);
    var _closure1_slot18 = var10;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var4 = {};
    var4['size'] = var9;
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot19 = var4;
    var7 = function Separator() {
        var2 = _closure1_slot14;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot11;
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
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot20 = var4;
    var4 = 36;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ManageSubscriptionCard(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var17 = var1.subscription;
            var _closure2_slot0 = var17;
            var1 = _closure1_slot14;
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
            if(var2) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var2 = var18 == var11;
            var1 = null;
            if(var2) { _fun0006_ip = 49; continue _fun0006 }
case 31:
            var2 = var18 == var19;
            var1 = null;
            if(var2) { _fun0006_ip = 49; continue _fun0006 }
case 51:
            var4 = _closure1_slot12;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var6.container;
            var2['style'] = var6;
            var9 = _closure1_slot11;
            var8 = _closure1_slot22;
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
            if(!var7) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var10 = _closure1_slot12;
            var9 = _closure1_slot13;
            var8 = {};
            var13 = _closure1_slot20;
            var11 = new Array(2);
            var11[0] = var13;
            var14 = _closure1_slot11;
            var13 = _closure1_slot23;
            var12 = {};
            var21 = var12;
            var20 = var19;
            var19 = copyDataProperties(var21, var20);
            var19 = var18 == var16;
            var18 = undefined;
            if(var19) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var18 = var16.id;
case 54:
            var16 = 'guildId';
            var12[var16] = var18;
            var16 = 'subscription';
            var12[var16] = var17;
            var16 = function onCancelSubscription() {
                var4 = _closure2_slot1;
                var3 = var4.push;
                var1 = _closure1_slot9;
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
case 52:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 49:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();