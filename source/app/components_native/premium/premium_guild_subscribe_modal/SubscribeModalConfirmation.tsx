// app/components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function PendingCancellationWarning(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.slots;
            var2 = _closure1_slot21;
            var5 = undefined;
            var10 = var2.bind(var5)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 13;
            var2 = var6[var2];
            var8 = var4.bind(var5)(var2);
            var6 = var8.useStateFromStores;
            var2 = _closure1_slot12;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var6.bind(var8)(var4, var2);
            var2 = var3.filter;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isGuildBoostSlotCanceled;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var2.bind(var3)(var1);
            var4 = var14.length;
            var3 = null;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3 == var15;
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = _closure1_slot19;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var10.pendingCancellation;
            var2['style'] = var6;
            var9 = _closure1_slot18;
            var8 = _closure1_slot6;
            var6 = {};
            var11 = var10.pendingCancellationIcon;
            var6['style'] = var11;
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 15;
            var11 = var16[var11];
            var11 = var12.bind(var5)(var11);
            var6['source'] = var11;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot18;
            var11 = _closure1_slot0;
            var7 = 16;
            var7 = var16[var7];
            var7 = var11.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {};
            var10 = var10.pendingCancellationMessage;
            var7['style'] = var10;
            var10 = 'text-sm/medium';
            var7['variant'] = var10;
            var10 = 17;
            var12 = var16[var10];
            var12 = var11.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.format;
            var10 = var16[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.t;
            var11 = var10.SFpsCH;
            var10 = {};
            var15 = var15.currentPeriodEnd;
            var10['date'] = var15;
            var14 = var14.length;
            var10['canceledCount'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function SubscribeConfirmation(arg1) {
        var1 = arg1;
        var16 = var1.guild;
        var12 = var1.isModifyingSubscription;
        var18 = var1.slots;
        var1 = var1.onPremiumGuildSubscribe;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot21;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var3 = _closure1_slot19;
        var2 = _closure1_slot20;
        var1 = {};
        var7 = _closure1_slot18;
        var6 = _closure1_slot6;
        var5 = {};
        var8 = var10.subscribeImage;
        var5['style'] = var8;
        var8 = _closure1_slot1;
        var19 = _closure1_slot2;
        var11 = 18;
        var11 = var19[var11];
        var11 = var8.bind(var4)(var11);
        var5['source'] = var11;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(6);
        var5[0] = var6;
        var17 = _closure1_slot18;
        var15 = _closure1_slot0;
        var6 = 16;
        var7 = var19[var6];
        var7 = var15.bind(var4)(var7);
        var11 = var7.Text;
        var7 = {'style': null, 'variant': 'heading-lg/extrabold', 'color': 'mobile-text-heading-primary'};
        var14 = var10.header;
        var7['style'] = var14;
        var14 = 17;
        var20 = var19[var14];
        var20 = var15.bind(var4)(var20);
        var22 = var20.intl;
        var21 = var22.string;
        var20 = var19[var14];
        var20 = var15.bind(var4)(var20);
        var20 = var20.t;
        var20 = var20.yTlZV0;
        var20 = var21.bind(var22)(var20);
        var7['children'] = var20;
        var7 = var17.bind(var4)(var11, var7);
        var5[1] = var7;
        var11 = _closure1_slot18;
        var7 = 19;
        var7 = var19[var7];
        var8 = var8.bind(var4)(var7);
        var7 = {};
        var17 = var10.guildPreview;
        var7['style'] = var17;
        var7['guild'] = var16;
        var7 = var11.bind(var4)(var8, var7);
        var5[2] = var7;
        var8 = _closure1_slot18;
        var6 = var19[var6];
        var6 = var15.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {};
        var16 = var10.blurb;
        var11 = new Array(2);
        var11[0] = var16;
        var16 = var10.warning;
        var11[1] = var16;
        var6['style'] = var11;
        var11 = 'text-sm/medium';
        var6['variant'] = var11;
        var11 = var19[var14];
        var11 = var15.bind(var4)(var11);
        var20 = var11.intl;
        var17 = var20.format;
        var11 = var19[var14];
        var11 = var15.bind(var4)(var11);
        var11 = var11.t;
        var16 = var11.KPnDlu;
        var11 = {};
        var21 = _closure1_slot16;
        var11['days'] = var21;
        var21 = var18.length;
        var11['slotCount'] = var21;
        var11 = var17.bind(var20)(var16, var11);
        var6['children'] = var11;
        var6 = var8.bind(var4)(var7, var6);
        var5[3] = var6;
        var8 = _closure1_slot18;
        var7 = _closure1_slot22;
        var6 = {};
        var6['slots'] = var18;
        var6 = var8.bind(var4)(var7, var6);
        var5[4] = var6;
        var8 = _closure1_slot18;
        var7 = _closure1_slot7;
        var6 = {};
        var10 = var10.confirmButton;
        var6['style'] = var10;
        var11 = _closure1_slot18;
        var9 = 20;
        var9 = var19[var9];
        var9 = var15.bind(var4)(var9);
        var10 = var9.Button;
        var9 = {};
        var16 = 'primary';
        var9['variant'] = var16;
        var16 = var19[var14];
        var16 = var15.bind(var4)(var16);
        var17 = var16.intl;
        var16 = var17.formatToPlainString;
        var14 = var19[var14];
        var14 = var15.bind(var4)(var14);
        var14 = var14.t;
        var15 = var14.ZU5x5w;
        var14 = {};
        var18 = var18.length;
        var14['slotCount'] = var18;
        var14 = var16.bind(var17)(var15, var14);
        var9['text'] = var14;
        var13 = function onPress() {
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = false;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var9['onPress'] = var13;
        var9['loading'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[5] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function TransferConfirmation(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var24 = var1.guild;
            var14 = var1.isModifyingSubscription;
            var20 = var1.previousGuildSubscriptionSlots;
            var _closure2_slot0 = var20;
            var1 = var1.onPremiumGuildSubscribe;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot21;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 21;
            var1 = var4[var1];
            var7 = var3.bind(var5)(var1);
            var1 = var7.useGuildSubscriptionRemovalSource;
            var10 = var1.bind(var7)();
            var1 = 13;
            var1 = var4[var1];
            var7 = var3.bind(var5)(var1);
            var4 = var7.useStateFromStores;
            var1 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.premiumGuildSubscription;
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var2 = null;
                    var5 = var2 == var1;
                    var3 = undefined;
                    if(var5) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                    var1 = var1.premiumGuildSubscription;
                    var2 = var2 == var1;
                    var3 = undefined;
                    if(var2) { _fun0003_ip = 5; continue _fun0003 }
case 7:
                    var3 = var1.guildId;
case 5:
                    var2 = _closure1_slot10;
                    var1 = var2.getGuild;
                    var1 = var1.bind(var2)(var3);
                    return var1;
                }
            };
            var25 = var4.bind(var7)(var3, var1);
            var1 = null;
            if(!(var1 != var25)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot19;
            var3 = _closure1_slot20;
            var1 = {};
            var9 = _closure1_slot18;
            var8 = _closure1_slot6;
            var7 = {};
            var11 = var6.transferImage;
            var7['style'] = var11;
            var7['source'] = var10;
            var8 = var9.bind(var5)(var8, var7);
            var7 = new Array(6);
            var7[0] = var8;
            var10 = _closure1_slot18;
            var17 = _closure1_slot0;
            var21 = _closure1_slot2;
            var12 = 16;
            var8 = var21[var12];
            var8 = var17.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'variant': 'heading-lg/extrabold', 'color': 'mobile-text-heading-primary'};
            var11 = var6.header;
            var8['style'] = var11;
            var16 = 17;
            var11 = var21[var16];
            var11 = var17.bind(var5)(var11);
            var18 = var11.intl;
            var13 = var18.string;
            var11 = var21[var16];
            var11 = var17.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.h92jfS;
            var11 = var13.bind(var18)(var11);
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var7[1] = var8;
            var10 = _closure1_slot18;
            var8 = var21[var12];
            var8 = var17.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {};
            var11 = var6.blurb;
            var8['style'] = var11;
            var11 = 'text-sm/medium';
            var8['variant'] = var11;
            var11 = var21[var16];
            var11 = var17.bind(var5)(var11);
            var19 = var11.intl;
            var18 = var19.format;
            var11 = var21[var16];
            var11 = var17.bind(var5)(var11);
            var11 = var11.t;
            var13 = var11.SSA2lu;
            var11 = {};
            var22 = var20.length;
            var11['slotCount'] = var22;
            var27 = 1;
            var11['guildCount'] = var27;
            var11 = var18.bind(var19)(var13, var11);
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var7[2] = var8;
            var10 = _closure1_slot19;
            var9 = _closure1_slot7;
            var8 = {};
            var11 = var6.transferPreviews;
            var8['style'] = var11;
            var18 = _closure1_slot18;
            var11 = var21[var12];
            var11 = var17.bind(var5)(var11);
            var13 = var11.Text;
            var11 = {'style': null, 'variant': 'eyebrow', 'color': 'text-default'};
            var19 = var6.previewHeader;
            var11['style'] = var19;
            var19 = var21[var16];
            var19 = var17.bind(var5)(var19);
            var26 = var19.intl;
            var23 = var26.format;
            var19 = var21[var16];
            var19 = var17.bind(var5)(var19);
            var19 = var19.t;
            var22 = var19["5zQYEz"];
            var19 = {};
            var19['guildCount'] = var27;
            var19 = var23.bind(var26)(var22, var19);
            var11['children'] = var19;
            var13 = var18.bind(var5)(var13, var11);
            var11 = new Array(4);
            var11[0] = var13;
            var23 = _closure1_slot18;
            var22 = _closure1_slot1;
            var19 = 19;
            var13 = var21[var19];
            var18 = var22.bind(var5)(var13);
            var13 = {};
            var26 = var6.guildPreview;
            var13['style'] = var26;
            var13['guild'] = var25;
            var13 = var23.bind(var5)(var18, var13);
            var11[1] = var13;
            var18 = _closure1_slot18;
            var12 = var21[var12];
            var12 = var17.bind(var5)(var12);
            var13 = var12.Text;
            var12 = {'style': null, 'variant': 'eyebrow', 'color': 'text-default'};
            var23 = var6.previewHeader;
            var12['style'] = var23;
            var23 = var21[var16];
            var23 = var17.bind(var5)(var23);
            var27 = var23.intl;
            var26 = var27.format;
            var23 = var21[var16];
            var23 = var17.bind(var5)(var23);
            var23 = var23.t;
            var25 = var23.ct6oxD;
            var23 = {};
            var28 = var20.length;
            var23['slotCount'] = var28;
            var23 = var26.bind(var27)(var25, var23);
            var12['children'] = var23;
            var12 = var18.bind(var5)(var13, var12);
            var11[2] = var12;
            var18 = _closure1_slot18;
            var12 = 22;
            var12 = var21[var12];
            var13 = var22.bind(var5)(var12);
            var12 = {};
            var25 = var6.guildPreview;
            var23 = new Array(2);
            var23[0] = var25;
            var25 = var6.activeTransferGuildCardBorder;
            var23[1] = var25;
            var12['style'] = var23;
            var23 = 23;
            var25 = var21[var23];
            var25 = var17.bind(var5)(var25);
            var25 = var25.HorizontalGradient;
            var25 = var25.START;
            var12['start'] = var25;
            var25 = var21[var23];
            var25 = var17.bind(var5)(var25);
            var25 = var25.HorizontalGradient;
            var25 = var25.END;
            var12['end'] = var25;
            var23 = var21[var23];
            var23 = var17.bind(var5)(var23);
            var23 = var23.Gradients;
            var23 = var23.PREMIUM_GUILD;
            var12['colors'] = var23;
            var23 = _closure1_slot18;
            var19 = var21[var19];
            var22 = var22.bind(var5)(var19);
            var19 = {};
            var19['guild'] = var24;
            var19 = var23.bind(var5)(var22, var19);
            var12['children'] = var19;
            var12 = var18.bind(var5)(var13, var12);
            var11[3] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var7[3] = var8;
            var10 = _closure1_slot18;
            var9 = _closure1_slot22;
            var8 = {};
            var8['slots'] = var20;
            var8 = var10.bind(var5)(var9, var8);
            var7[4] = var8;
            var10 = _closure1_slot18;
            var9 = _closure1_slot7;
            var8 = {};
            var11 = var6.confirmButton;
            var8['style'] = var11;
            var13 = _closure1_slot18;
            var11 = 20;
            var11 = var21[var11];
            var11 = var17.bind(var5)(var11);
            var12 = var11.Button;
            var11 = {};
            var18 = 'primary';
            var11['variant'] = var18;
            var18 = var21[var16];
            var18 = var17.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.formatToPlainString;
            var16 = var21[var16];
            var16 = var17.bind(var5)(var16);
            var16 = var16.t;
            var17 = var16.Oh6mxU;
            var16 = {};
            var20 = var20.length;
            var16['slotCount'] = var20;
            var16 = var18.bind(var19)(var17, var16);
            var11['text'] = var16;
            var15 = function onPress() {
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var11['onPress'] = var15;
            var11['loading'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var7[5] = var8;
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var4 = _closure1_slot18;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var6.loading;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var12 = 2;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot5 = var7;
    var7 = var4.Image;
    var _closure1_slot6 = var7;
    var15 = var4.StyleSheet;
    var7 = var4.View;
    var _closure1_slot7 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot8 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot13 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot14 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot15 = var7;
    var4 = var4.GUILD_BOOST_APPLY_COOLDOWN_DAYS;
    var _closure1_slot16 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BoostPurchaseIntent;
    var _closure1_slot17 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot18 = var7;
    var7 = var4.jsxs;
    var _closure1_slot19 = var7;
    var4 = var4.Fragment;
    var _closure1_slot20 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingHorizontal': 24, 'marginBottom': 24};
    var4['content'] = var9;
    var14 = '100%';
    var9 = {'alignItems': 'center', 'width': '100%'};
    var4['scrollableContent'] = var9;
    var9 = {'marginTop': 105, 'alignSelf': 'center'};
    var4['subscribeImage'] = var9;
    var9 = {'marginTop': 65, 'alignSelf': 'center'};
    var4['transferImage'] = var9;
    var13 = 32;
    var9 = {'marginTop': 32, 'marginBottom': 8};
    var4['header'] = var9;
    var10 = 16;
    var9 = {'marginTop': 16, 'width': '100%'};
    var4['transferPreviews'] = var9;
    var9 = {'lineHeight': 16, 'marginTop': 16, 'letterSpacing': 0.2};
    var4['previewHeader'] = var9;
    var9 = {'marginTop': 8, 'width': '100%'};
    var4['guildPreview'] = var9;
    var9 = {'lineHeight': 18, 'textAlign': 'center'};
    var4['blurb'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['warning'] = var9;
    var9 = {'marginTop': 16, 'padding': 16, 'backgroundColor': null, 'alignItems': 'center', 'flexDirection': 'row'};
    var10 = 11;
    var10 = var6[var10];
    var19 = var5.bind(var1)(var10);
    var18 = var19.hexWithOpacity;
    var10 = 12;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var17 = var16.YELLOW_300;
    var16 = 0.1;
    var16 = var18.bind(var19)(var17, var16);
    var9['backgroundColor'] = var16;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var9['borderRadius'] = var16;
    var16 = var6[var10];
    var16 = var11.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.YELLOW_300;
    var9['borderColor'] = var16;
    var15 = var15.hairlineWidth;
    var9['borderWidth'] = var15;
    var9['width'] = var14;
    var4['pendingCancellation'] = var9;
    var9 = {'marginLeft': 10, 'flexShrink': 1};
    var4['pendingCancellationMessage'] = var9;
    var9 = {'flexShrink': 0, 'width': 20, 'height': 20};
    var4['pendingCancellationIcon'] = var9;
    var9 = {};
    var9['marginTop'] = var13;
    var4['loading'] = var9;
    var9 = {'marginTop': 32, 'width': '100%'};
    var4['confirmButton'] = var9;
    var9 = {};
    var9['padding'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var9['borderRadius'] = var10;
    var4['activeTransferGuildCardBorder'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot21 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SubscribeModalConfirmation(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var3 = var2.guildBoostSlots;
            var _closure2_slot1 = var3;
            var3 = var2.location;
            var _closure2_slot2 = var3;
            var4 = var2.intent;
            var _closure2_slot3 = var4;
            var2 = var2.onResult;
            var _closure2_slot4 = var2;
            var4 = _closure1_slot21;
            var5 = undefined;
            var6 = var4.bind(var5)();
            var8 = _closure1_slot4;
            var4 = var8.useRef;
            var4 = var4.bind(var8)(var3);
            var _closure2_slot5 = var4;
            var7 = var8.useEffect;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure2_slot5;
                var1 = _closure2_slot2;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var7.bind(var8)(var3, var4);
            var7 = var8.useEffect;
            var4 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot13;
                var3 = var2.OPEN_MODAL;
                var2 = {};
                var6 = _closure1_slot15;
                var6 = var6.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL;
                var2['type'] = var6;
                var6 = _closure2_slot5;
                var6 = var6.current;
                var2['location'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3 = new Array(0);
            var3 = var7.bind(var8)(var4, var3);
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 25;
            var3 = var7[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var4 = _closure1_slot0;
            var3 = 13;
            var8 = var7[var3];
            var11 = var4.bind(var5)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot10;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var10.bind(var11)(var9, var8);
            var _closure2_slot6 = var16;
            var8 = var7[var3];
            var11 = var4.bind(var5)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var1 = _closure1_slot9;
                var1 = var1.isModifyingAppliedBoost;
                return var1;
            };
            var13 = var10.bind(var11)(var9, var8);
            var3 = var7[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStoresArray;
            var3 = _closure1_slot11;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                    var3 = _closure2_slot1;
                    var4 = var3.length;
                    var3 = 0;
                    if(!(!(var4 > var3))) { _fun0005_ip = 13; continue _fun0005 }
case 11:
                    var4 = _closure1_slot11;
                    var4 = var4.hasFetched;
                    if(var4) { _fun0005_ip = 7; continue _fun0005 }
case 14:
                    var4 = new Array(0);
                    _fun0005_ip = 15; continue _fun0005;
case 7:
                    var5 = global;
                    var6 = var5.Object;
                    var5 = var6.values;
                    var3 = _closure1_slot11;
                    var3 = var3.boostSlots;
                    var6 = var5.bind(var6)(var3);
                    var5 = var6.filter;
                    var3 = function(arg1) {
                        var2 = arg1;
                        var1 = var2.isAvailable;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var5 = var5.bind(var6)(var3);
                    var3 = var5.sort;
                    var2 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.isGuildBoostSlotCanceled;
                            var1 = arg1;
                            var2 = var2.bind(var3)(var1);
                            var1 = -1;
                            if(!var2) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                            var1 = 1;
case 16:
                            return var1;
                        }
                    };
                    var4 = var3.bind(var5)(var2);
case 15:
                    var2 = var4.length;
                    var3 = 0;
                    if(!(!(var2 > var3))) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var2 = new Array(0);
                    _fun0005_ip = 20; continue _fun0005;
case 18:
                    var4 = var4[var3];
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = var3;
case 20:
                    return var2;
case 13:
                    var1 = _closure2_slot1;
                    return var1;
                }
            };
            var14 = var7.bind(var8)(var4, var3);
            var _closure2_slot7 = var14;
            var4 = var14.some;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.premiumGuildSubscription;
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var9 = var4.bind(var14)(var3);
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                            var4 = arg1;
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 26;
                            var3 = var3[var2];
                            var2 = undefined;
                            var8 = var5.bind(var2)(var3);
                            var7 = _closure2_slot7;
                            var9 = var7.length;
                            var7 = 0;
                            var7 = var9 > var7;
                            var5 = var7;
                            if(!var7) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                            var10 = _closure2_slot7;
                            var9 = var10.every;
                            var7 = function(arg1) {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                    var3 = arg1;
                                    var2 = var3.cooldownEndsAt;
                                    var1 = null;
                                    var1 = var1 == var2;
                                    if(var1) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                                    var2 = global;
                                    var5 = var2.Date;
                                    var6 = var3.cooldownEndsAt;
                                    var4 = var5.prototype;
                                    var4 = Object.create(var4, {constructor: {value: var5}});
                                    var7 = var4;
                                    var3 = new var7[var5](var6, var5);
                                    var4 = var3 instanceof Object ? var3 : var4;
                                    var3 = var4.valueOf;
                                    var3 = var3.bind(var4)();
                                    var4 = var2.Date;
                                    var2 = var4.now;
                                    var2 = var2.bind(var4)();
                                    var1 = var3 < var2;
case 25:
                                    return var1;
                                }
                            };
                            var5 = var9.bind(var10)(var7);
case 23:
                            var7 = var5;
                            var5 = 'Cannot use a premium guild subscription slot while on cooldown';
                            var5 = var8.bind(var2)(var7, var5);
case 27: // try_start_0
                            if(!var4) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                            var4 = global;
                            var7 = var4.Promise;
                            var5 = var7.all;
                            var9 = _closure2_slot7;
                            var8 = var9.map;
                            var4 = function(arg1) {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                    var1 = arg1;
                                    var2 = var1.premiumGuildSubscription;
                                    var1 = null;
                                    if(!(var1 == var2)) { _fun0009_ip = 30; continue _fun0009 }
case 12:
                                    var1 = global;
                                    var3 = var1.Promise;
                                    var1 = var3.resolve;
                                    var1 = var1.bind(var3)();
                                    _fun0009_ip = 31; continue _fun0009;
case 30:
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var3 = 27;
                                    var4 = var4[var3];
                                    var3 = undefined;
                                    var5 = var5.bind(var3)(var4);
                                    var4 = var5.unapplyFromGuild;
                                    var3 = var2.guildId;
                                    var2 = var2.id;
                                    var1 = var4.bind(var5)(var3, var2);
case 31:
                                    return var1;
                                }
                            };
                            var4 = var8.bind(var9)(var4);
                            var4 = var5.bind(var7)(var4);
                            SaveGenerator(address=148);
case 32:
                            return var4;
case 33:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                            if(var5) { _fun0007_ip = 34; continue _fun0007 }
case 28:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 27;
                            var5 = var8[var5];
                            var10 = var7.bind(var2)(var5);
                            var9 = var10.applyToGuild;
                            var5 = _closure2_slot6;
                            var8 = var5.id;
                            var11 = _closure2_slot7;
                            var7 = var11.map;
                            var5 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.id;
                                return var1;
                            };
                            var7 = var7.bind(var11)(var5);
                            var11 = _closure2_slot3;
                            var5 = _closure1_slot17;
                            var5 = var5.PERK;
                            var5 = var11 === var5;
                            var5 = var9.bind(var10)(var8, var7, var5);
                            SaveGenerator(address=242);
case 35:
                            return var5;
case 36:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                            if(var7) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                            var8 = _closure2_slot4;
                            var7 = null;
                            if(!(var7 != var8)) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                            var8 = _closure2_slot4;
                            var7 = true;
                            var7 = var8.bind(var2)(var7);
case 39:
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var7 = 28;
                            var7 = var9[var7];
                            var11 = var8.bind(var2)(var7);
                            var10 = var11.openLazy;
                            var7 = {};
                            var12 = function importer() {
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var2 = 30;
                                var2 = var1[var2];
                                var4 = undefined;
                                var3 = var3.bind(var4)(var2);
                                var2 = 29;
                                var2 = var1[var2];
                                var1 = var1.paths;
                                var3 = var3.bind(var4)(var2, var1);
                                var2 = var3.then;
                                var1 = function(arg1) {
                                    var2 = arg1;
                                    var2 = var2.default;
                                    var _closure7_slot0 = var2;
                                    var1 = function(arg1) {
                                        var4 = _closure1_slot18;
                                        var3 = _closure7_slot0;
                                        var2 = {};
                                        var7 = arg1;
                                        var8 = var2;
                                        var1 = copyDataProperties(var8, var7);
                                        var6 = _closure2_slot0;
                                        var5 = 'guildId';
                                        var2[4] = var6;
                                        var5 = _closure2_slot1;
                                        var1 = 'guildBoostSlots';
                                        var2[0] = var5;
                                        var1 = undefined;
                                        var1 = var4.bind(var1)(var3, var2);
                                        return var1;
                                    };
                                    return var1;
                                };
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var7['importer'] = var12;
                            var7 = var10.bind(var11)(var7);
                            var7 = 24;
                            var7 = var9[var7];
                            var10 = var8.bind(var2)(var7);
                            var9 = var10.track;
                            var7 = _closure1_slot13;
                            var8 = var7.MODAL_DISMISSED;
                            var7 = {};
                            var11 = _closure1_slot15;
                            var11 = var11.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL;
                            var7['type'] = var11;
                            var11 = _closure1_slot14;
                            var11 = var11.BUTTON_CTA;
                            var7['location_object'] = var11;
                            var7 = var9.bind(var10)(var8, var7);
case 41: // try_end0
                            _fun0007_ip = 42; continue _fun0007;
case 37:
                            return var5;
case 34:
                            return var4;
case 43: // catch_target0
                            CatchBlockStart(arg_register=3);
                            var5 = _closure2_slot4;
                            var4 = null;
                            if(!(var4 != var5)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                            var4 = _closure2_slot4;
                            var3 = false;
                            var3 = var4.bind(var2)(var3);
case 44:
                            var4 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var3 = 28;
                            var3 = var10[var3];
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.show;
                            var3 = {};
                            var9 = _closure1_slot0;
                            var6 = 17;
                            var7 = var10[var6];
                            var7 = var9.bind(var2)(var7);
                            var11 = var7.intl;
                            var8 = var11.string;
                            var7 = var10[var6];
                            var7 = var9.bind(var2)(var7);
                            var7 = var7.t;
                            var7 = var7.Kx5W0V;
                            var7 = var8.bind(var11)(var7);
                            var3['title'] = var7;
                            var7 = var10[var6];
                            var7 = var9.bind(var2)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var10[var6];
                            var6 = var9.bind(var2)(var6);
                            var6 = var6.t;
                            var6 = var6.XueBVY;
                            var6 = var7.bind(var8)(var6);
                            var3['body'] = var6;
                            var3 = var4.bind(var5)(var3);
case 42:
                            return var2;
case 21:
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
            var15 = var1.bind(var5)();
            var3 = var14.length;
            var1 = 0;
            if(!(var1 !== var3)) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var4 = _closure1_slot18;
            var3 = _closure1_slot7;
            var1 = {};
            var8 = _closure1_slot8;
            var7 = {};
            var10 = var6.scrollableContent;
            var7['contentContainerStyle'] = var10;
            var10 = var6.content;
            var7['style'] = var10;
            var12 = _closure1_slot18;
            if(var9) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var10 = _closure1_slot23;
            var9 = {};
            var9['guild'] = var16;
            var9['slots'] = var14;
            var9['isModifyingSubscription'] = var13;
            var9['onPremiumGuildSubscribe'] = var15;
            var9 = var12.bind(var5)(var10, var9);
            _fun0004_ip = 50; continue _fun0004;
case 48:
            var11 = _closure1_slot24;
            var10 = {};
            var10['guild'] = var16;
            var10['onPremiumGuildSubscribe'] = var15;
            var10['previousGuildSubscriptionSlots'] = var14;
            var10['isModifyingSubscription'] = var13;
            var9 = var12.bind(var5)(var11, var10);
case 50:
            var7['children'] = var9;
            var7 = var4.bind(var5)(var8, var7);
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0004_ip = 51; continue _fun0004;
case 46:
            var4 = _closure1_slot18;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var6.loading;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 51:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();