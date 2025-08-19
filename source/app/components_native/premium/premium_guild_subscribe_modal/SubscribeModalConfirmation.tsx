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
 0:
            var1 = arg1;
            var3 = var1.slot;
            var1 = _closure1_slot20;
            var5 = undefined;
            var10 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 12;
            var1 = var4[var1];
            var9 = var2.bind(var5)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot12;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var8.bind(var9)(var6, var1);
            var1 = 13;
            var1 = var4[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isGuildBoostSlotCanceled;
            var2 = var1.bind(var2)(var3);
            var3 = null;
            var1 = null;
            if(!var2) { _fun0001_ip = 339; continue _fun0001 }
 107:
            var2 = var3 != var14;
            var1 = null;
            if(!var2) { _fun0001_ip = 339; continue _fun0001 }
 119:
            var4 = _closure1_slot18;
            var3 = _closure1_slot7;
            var2 = {};
            var6 = var10.pendingCancellation;
            var2['style'] = var6;
            var9 = _closure1_slot17;
            var8 = _closure1_slot6;
            var6 = {};
            var11 = var10.pendingCancellationIcon;
            var6['style'] = var11;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 14;
            var11 = var15[var11];
            var11 = var12.bind(var5)(var11);
            var6['source'] = var11;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot17;
            var11 = _closure1_slot0;
            var7 = 15;
            var7 = var15[var7];
            var7 = var11.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {};
            var10 = var10.pendingCancellationMessage;
            var7['style'] = var10;
            var10 = 'text-sm/medium';
            var7['variant'] = var10;
            var10 = 16;
            var12 = var15[var10];
            var12 = var11.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.format;
            var10 = var15[var10];
            var10 = var11.bind(var5)(var10);
            var10 = var10.t;
            var11 = var10.SFpsCA;
            var10 = {};
            var14 = var14.currentPeriodEnd;
            var10['date'] = var14;
            var14 = 1;
            var10['canceledCount'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 339:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function SubscribeConfirmation(arg1) {
        var1 = arg1;
        var19 = var1.guild;
        var9 = var1.isModifyingSubscription;
        var18 = var1.slot;
        var1 = var1.onPremiumGuildSubscribe;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot20;
        var4 = undefined;
        var13 = var1.bind(var4)();
        var3 = _closure1_slot18;
        var2 = _closure1_slot19;
        var1 = {};
        var11 = _closure1_slot17;
        var8 = _closure1_slot6;
        var5 = {};
        var7 = var13.subscribeImage;
        var5['style'] = var7;
        var7 = _closure1_slot1;
        var16 = _closure1_slot2;
        var12 = 17;
        var12 = var16[var12];
        var12 = var7.bind(var4)(var12);
        var5['source'] = var12;
        var8 = var11.bind(var4)(var8, var5);
        var5 = new Array(6);
        var5[0] = var8;
        var17 = _closure1_slot17;
        var12 = _closure1_slot0;
        var8 = 15;
        var11 = var16[var8];
        var11 = var12.bind(var4)(var11);
        var15 = var11.Text;
        var14 = {'style': null, 'variant': 'heading-lg/extrabold', 'color': 'header-primary'};
        var11 = var13.header;
        var14['style'] = var11;
        var11 = 16;
        var20 = var16[var11];
        var20 = var12.bind(var4)(var20);
        var22 = var20.intl;
        var21 = var22.string;
        var20 = var16[var11];
        var20 = var12.bind(var4)(var20);
        var20 = var20.t;
        var20 = var20.yTlZV1;
        var20 = var21.bind(var22)(var20);
        var14['children'] = var20;
        var14 = var17.bind(var4)(var15, var14);
        var5[1] = var14;
        var17 = _closure1_slot17;
        var14 = 18;
        var14 = var16[var14];
        var15 = var7.bind(var4)(var14);
        var14 = {};
        var20 = var13.guildPreview;
        var14['style'] = var20;
        var14['guild'] = var19;
        var14 = var17.bind(var4)(var15, var14);
        var5[2] = var14;
        var17 = _closure1_slot17;
        var8 = var16[var8];
        var8 = var12.bind(var4)(var8);
        var14 = var8.Text;
        var8 = {};
        var19 = var13.blurb;
        var15 = new Array(2);
        var15[0] = var19;
        var19 = var13.warning;
        var15[1] = var19;
        var8['style'] = var15;
        var15 = 'text-sm/medium';
        var8['variant'] = var15;
        var15 = var16[var11];
        var15 = var12.bind(var4)(var15);
        var22 = var15.intl;
        var21 = var22.format;
        var15 = var16[var11];
        var15 = var12.bind(var4)(var15);
        var15 = var15.t;
        var20 = var15.KPnDlp;
        var19 = {};
        var15 = _closure1_slot16;
        var19['days'] = var15;
        var15 = 1;
        var19['slotCount'] = var15;
        var19 = var21.bind(var22)(var20, var19);
        var8['children'] = var19;
        var8 = var17.bind(var4)(var14, var8);
        var5[3] = var8;
        var17 = _closure1_slot17;
        var14 = _closure1_slot21;
        var8 = {};
        var8['slot'] = var18;
        var8 = var17.bind(var4)(var14, var8);
        var5[4] = var8;
        var8 = _closure1_slot17;
        var6 = 19;
        var6 = var16[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var13 = var13.confirmButton;
        var6['style'] = var13;
        var13 = var16[var11];
        var13 = var12.bind(var4)(var13);
        var14 = var13.intl;
        var13 = var14.formatToPlainString;
        var11 = var16[var11];
        var11 = var12.bind(var4)(var11);
        var11 = var11.t;
        var12 = var11.ZU5x5+;
        var11 = {};
        var11['slotCount'] = var15;
        var11 = var13.bind(var14)(var12, var11);
        var6['text'] = var11;
        var10 = function onPress() {
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = false;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var6['onPress'] = var10;
        var6['loading'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[5] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = function TransferConfirmation(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var26 = var1.guild;
            var11 = var1.isModifyingSubscription;
            var16 = var1.previousGuildSubscriptionSlot;
            var _closure2_slot0 = var16;
            var1 = var1.onPremiumGuildSubscribe;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot20;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 20;
            var1 = var4[var1];
            var7 = var3.bind(var5)(var1);
            var1 = var7.useGuildSubscriptionRemovalSource;
            var10 = var1.bind(var7)();
            var1 = 12;
            var1 = var4[var1];
            var7 = var3.bind(var5)(var1);
            var4 = var7.useStateFromStores;
            var1 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = var1.premiumGuildSubscription;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0003_ip = 54; continue _fun0003 }
 22:
                    var4 = _closure1_slot10;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot0;
                    var2 = var2.premiumGuildSubscription;
                    var2 = var2.guildId;
                    var1 = var3.bind(var4)(var2);
 54:
                    return var1;
                }
            };
            var25 = var4.bind(var7)(var3, var1);
            var1 = null;
            if(!(var1 != var25)) { _fun0002_ip = 1027; continue _fun0002 }
 130:
            var4 = _closure1_slot18;
            var3 = _closure1_slot19;
            var1 = {};
            var9 = _closure1_slot17;
            var8 = _closure1_slot6;
            var7 = {};
            var13 = var6.transferImage;
            var7['style'] = var13;
            var7['source'] = var10;
            var8 = var9.bind(var5)(var8, var7);
            var7 = new Array(6);
            var7[0] = var8;
            var10 = _closure1_slot17;
            var14 = _closure1_slot0;
            var18 = _closure1_slot2;
            var20 = 15;
            var8 = var18[var20];
            var8 = var14.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'variant': 'heading-lg/extrabold', 'color': 'header-primary'};
            var13 = var6.header;
            var8['style'] = var13;
            var13 = 16;
            var15 = var18[var13];
            var15 = var14.bind(var5)(var15);
            var19 = var15.intl;
            var17 = var19.string;
            var15 = var18[var13];
            var15 = var14.bind(var5)(var15);
            var15 = var15.t;
            var15 = var15.h92jfX;
            var15 = var17.bind(var19)(var15);
            var8['children'] = var15;
            var8 = var10.bind(var5)(var9, var8);
            var7[1] = var8;
            var10 = _closure1_slot17;
            var8 = var18[var20];
            var8 = var14.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {};
            var15 = var6.blurb;
            var8['style'] = var15;
            var15 = 'text-sm/medium';
            var8['variant'] = var15;
            var15 = var18[var13];
            var15 = var14.bind(var5)(var15);
            var22 = var15.intl;
            var21 = var22.format;
            var15 = var18[var13];
            var15 = var14.bind(var5)(var15);
            var15 = var15.t;
            var19 = var15.SSA2lp;
            var17 = 1;
            var15 = {'slotCount': 1, 'guildCount': 1};
            var15 = var21.bind(var22)(var19, var15);
            var8['children'] = var15;
            var8 = var10.bind(var5)(var9, var8);
            var7[2] = var8;
            var15 = _closure1_slot18;
            var10 = _closure1_slot7;
            var8 = {};
            var9 = var6.transferPreviews;
            var8['style'] = var9;
            var21 = _closure1_slot17;
            var9 = var18[var20];
            var9 = var14.bind(var5)(var9);
            var19 = var9.Text;
            var9 = {'style': null, 'variant': 'eyebrow', 'color': 'header-secondary'};
            var22 = var6.previewHeader;
            var9['style'] = var22;
            var22 = var18[var13];
            var22 = var14.bind(var5)(var22);
            var27 = var22.intl;
            var24 = var27.format;
            var22 = var18[var13];
            var22 = var14.bind(var5)(var22);
            var22 = var22.t;
            var23 = var22.5zQYEx;
            var22 = {};
            var22['guildCount'] = var17;
            var22 = var24.bind(var27)(var23, var22);
            var9['children'] = var22;
            var9 = var21.bind(var5)(var19, var9);
            var19 = new Array(4);
            var19[0] = var9;
            var24 = _closure1_slot17;
            var9 = _closure1_slot1;
            var23 = 18;
            var21 = var18[var23];
            var22 = var9.bind(var5)(var21);
            var21 = {};
            var27 = var6.guildPreview;
            var21['style'] = var27;
            var21['guild'] = var25;
            var21 = var24.bind(var5)(var22, var21);
            var19[1] = var21;
            var22 = _closure1_slot17;
            var20 = var18[var20];
            var20 = var14.bind(var5)(var20);
            var21 = var20.Text;
            var20 = {'style': null, 'variant': 'eyebrow', 'color': 'header-secondary'};
            var24 = var6.previewHeader;
            var20['style'] = var24;
            var24 = var18[var13];
            var24 = var14.bind(var5)(var24);
            var28 = var24.intl;
            var27 = var28.format;
            var24 = var18[var13];
            var24 = var14.bind(var5)(var24);
            var24 = var24.t;
            var25 = var24.ct6oxM;
            var24 = {};
            var24['slotCount'] = var17;
            var24 = var27.bind(var28)(var25, var24);
            var20['children'] = var24;
            var20 = var22.bind(var5)(var21, var20);
            var19[2] = var20;
            var22 = _closure1_slot17;
            var20 = 21;
            var20 = var18[var20];
            var21 = var9.bind(var5)(var20);
            var20 = {};
            var25 = var6.guildPreview;
            var24 = new Array(2);
            var24[0] = var25;
            var25 = var6.activeTransferGuildCardBorder;
            var24[1] = var25;
            var20['style'] = var24;
            var24 = 22;
            var25 = var18[var24];
            var25 = var14.bind(var5)(var25);
            var25 = var25.HorizontalGradient;
            var25 = var25.START;
            var20['start'] = var25;
            var25 = var18[var24];
            var25 = var14.bind(var5)(var25);
            var25 = var25.HorizontalGradient;
            var25 = var25.END;
            var20['end'] = var25;
            var24 = var18[var24];
            var24 = var14.bind(var5)(var24);
            var24 = var24.Gradients;
            var24 = var24.PREMIUM_GUILD;
            var20['colors'] = var24;
            var25 = _closure1_slot17;
            var23 = var18[var23];
            var24 = var9.bind(var5)(var23);
            var23 = {};
            var23['guild'] = var26;
            var23 = var25.bind(var5)(var24, var23);
            var20['children'] = var23;
            var20 = var22.bind(var5)(var21, var20);
            var19[3] = var20;
            var8['children'] = var19;
            var8 = var15.bind(var5)(var10, var8);
            var7[3] = var8;
            var15 = _closure1_slot17;
            var10 = _closure1_slot21;
            var8 = {};
            var8['slot'] = var16;
            var8 = var15.bind(var5)(var10, var8);
            var7[4] = var8;
            var10 = _closure1_slot17;
            var8 = 19;
            var8 = var18[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var15 = var6.confirmButton;
            var8['style'] = var15;
            var15 = var18[var13];
            var15 = var14.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.formatToPlainString;
            var13 = var18[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.t;
            var14 = var13.Oh6mxc;
            var13 = {};
            var13['slotCount'] = var17;
            var13 = var15.bind(var16)(var14, var13);
            var8['text'] = var13;
            var12 = function onPress() {
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var8['onPress'] = var12;
            var8['loading'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var7[5] = var8;
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 1053; continue _fun0002;
 1027:
            var4 = _closure1_slot17;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var6.loading;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1053:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
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
    var7 = var4.jsx;
    var _closure1_slot17 = var7;
    var7 = var4.jsxs;
    var _closure1_slot18 = var7;
    var4 = var4.Fragment;
    var _closure1_slot19 = var4;
    var4 = 9;
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
    var10 = 10;
    var10 = var6[var10];
    var19 = var5.bind(var1)(var10);
    var18 = var19.hexWithOpacity;
    var10 = 11;
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
    var9 = {};
    var9['marginTop'] = var13;
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
    var _closure1_slot20 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SubscribeModalConfirmation(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var10 = var2.previousGuildSubscriptionSlot;
            var _closure2_slot1 = var10;
            var3 = var2.location;
            var _closure2_slot2 = var3;
            var4 = _closure1_slot20;
            var5 = undefined;
            var6 = var4.bind(var5)();
            var8 = _closure1_slot4;
            var4 = var8.useRef;
            var4 = var4.bind(var8)(var3);
            var _closure2_slot3 = var4;
            var7 = var8.useEffect;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure2_slot3;
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
                var1 = 23;
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
                var6 = _closure2_slot3;
                var6 = var6.current;
                var2['location'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3 = new Array(0);
            var3 = var7.bind(var8)(var4, var3);
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 24;
            var3 = var7[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var4 = _closure1_slot0;
            var3 = 12;
            var8 = var7[var3];
            var12 = var4.bind(var5)(var8);
            var11 = var12.useStateFromStores;
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
            var16 = var11.bind(var12)(var9, var8);
            var _closure2_slot4 = var16;
            var8 = var7[var3];
            var12 = var4.bind(var5)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var1 = _closure1_slot9;
                var1 = var1.isModifyingAppliedBoost;
                return var1;
            };
            var13 = var11.bind(var12)(var9, var8);
            var3 = var7[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot11;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 == var4)) { _fun0005_ip = 122; continue _fun0005 }
 15:
                    var4 = _closure1_slot11;
                    var4 = var4.hasFetched;
                    if(var4) { _fun0005_ip = 37; continue _fun0005 }
 31:
                    var4 = new Array(0);
                    _fun0005_ip = 100; continue _fun0005;
 37:
                    var6 = global;
                    var7 = var6.Object;
                    var6 = var7.values;
                    var5 = _closure1_slot11;
                    var5 = var5.boostSlots;
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.filter;
                    var5 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var2 = arg1;
                            var1 = var2.isOnCooldown;
                            var1 = var1.bind(var2)();
                            var1 = !var1;
                            if(!var1) { _fun0006_ip = 31; continue _fun0006 }
 19:
                            var3 = var2.premiumGuildSubscription;
                            var2 = null;
                            var1 = var2 == var3;
 31:
                            return var1;
                        }
                    };
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.sort;
                    var3 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.isGuildBoostSlotCanceled;
                            var1 = arg1;
                            var2 = var2.bind(var3)(var1);
                            var1 = -1;
                            if(!var2) { _fun0007_ip = 51; continue _fun0007 }
 48:
                            var1 = 1;
 51:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var3);
 100:
                    var5 = var4.length;
                    var3 = 0;
                    var5 = var5 > var3;
                    var2 = null;
                    if(!var5) { _fun0005_ip = 120; continue _fun0005 }
 116:
                    var2 = var4[var3];
 120:
                    return var2;
 122:
                    var1 = _closure2_slot1;
                    return var1;
                }
            };
            var14 = var7.bind(var8)(var4, var3);
            var _closure2_slot5 = var14;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0008_ip = 570; continue _fun0008 }
 10:
                            var5 = arg1;
                            var2 = undefined;
                            var3 = undefined;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var4 = 25;
                            var4 = var8[var4];
                            var10 = var7.bind(var2)(var4);
                            var9 = _closure2_slot5;
                            var7 = null;
                            var9 = var7 != var9;
                            var8 = var9;
                            if(!var9) { _fun0008_ip = 145; continue _fun0008 }
 59:
                            var9 = _closure2_slot5;
                            var9 = var9.cooldownEndsAt;
                            var9 = var7 == var9;
                            if(var9) { _fun0008_ip = 142; continue _fun0008 }
 76:
                            var11 = global;
                            var14 = var11.Date;
                            var12 = _closure2_slot5;
                            var16 = var12.cooldownEndsAt;
                            var13 = var14.prototype;
                            var13 = Object.create(var13, {constructor: {value: var14}});
                            var17 = var13;
                            var12 = new var17[var14](var16, var15);
                            var13 = var12 instanceof Object ? var12 : var13;
                            var12 = var13.valueOf;
                            var12 = var12.bind(var13)();
                            var13 = var11.Date;
                            var11 = var13.now;
                            var11 = var11.bind(var13)();
                            var9 = var12 < var11;
 142:
                            var8 = var9;
 145:
                            var9 = var8;
                            var8 = 'Cannot use a premium guild subscription slot while on cooldown';
                            var8 = var10.bind(var2)(var9, var8);
 160: // try_start_0
                            if(!var5) { _fun0008_ip = 235; continue _fun0008 }
 163:
                            var5 = _closure2_slot5;
                            var5 = var5.premiumGuildSubscription;
                            var3 = var5;
                            if(!(var7 != var5)) { _fun0008_ip = 235; continue _fun0008 }
 180:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 26;
                            var5 = var8[var5];
                            var8 = var7.bind(var2)(var5);
                            var7 = var8.unapplyFromGuild;
                            var5 = var3.guildId;
                            var3 = var3.id;
                            var3 = var7.bind(var8)(var5, var3);
                            SaveGenerator(address=226);
 224:
                            return var3;
 226:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0008_ip = 422; continue _fun0008 }
 235:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 26;
                            var5 = var8[var5];
                            var8 = var7.bind(var2)(var5);
                            var7 = var8.applyToGuild;
                            var5 = _closure2_slot4;
                            var5 = var5.id;
                            var4 = _closure2_slot5;
                            var9 = var4.id;
                            var4 = new Array(1);
                            var4[0] = var9;
                            var4 = var7.bind(var8)(var5, var4);
                            SaveGenerator(address=297);
 295:
                            return var4;
 297:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                            if(var5) { _fun0008_ip = 419; continue _fun0008 }
 303:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var5 = 27;
                            var5 = var8[var5];
                            var10 = var7.bind(var2)(var5);
                            var9 = var10.openLazy;
                            var5 = {};
                            var11 = function importer() {
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var2 = 29;
                                var2 = var1[var2];
                                var4 = undefined;
                                var3 = var3.bind(var4)(var2);
                                var2 = 28;
                                var2 = var1[var2];
                                var1 = var1.paths;
                                var3 = var3.bind(var4)(var2, var1);
                                var2 = var3.then;
                                var1 = function(arg1) {
                                    var2 = arg1;
                                    var2 = var2.default;
                                    var _closure7_slot0 = var2;
                                    var1 = function(arg1) {
                                        var4 = _closure1_slot17;
                                        var3 = _closure7_slot0;
                                        var2 = {};
                                        var7 = arg1;
                                        var8 = var2;
                                        var1 = copyDataProperties(var8, var7);
                                        var6 = _closure2_slot0;
                                        var5 = 'guildId';
                                        var2[var5] = var6;
                                        var5 = _closure2_slot1;
                                        var1 = 'previousGuildSubscriptionSlot';
                                        var2[var1] = var5;
                                        var1 = undefined;
                                        var1 = var4.bind(var1)(var3, var2);
                                        return var1;
                                    };
                                    return var1;
                                };
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var5['importer'] = var11;
                            var5 = var9.bind(var10)(var5);
                            var5 = 23;
                            var5 = var8[var5];
                            var9 = var7.bind(var2)(var5);
                            var8 = var9.track;
                            var5 = _closure1_slot13;
                            var7 = var5.MODAL_DISMISSED;
                            var5 = {};
                            var10 = _closure1_slot15;
                            var10 = var10.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL;
                            var5['type'] = var10;
                            var10 = _closure1_slot14;
                            var10 = var10.BUTTON_CTA;
                            var5['location_object'] = var10;
                            var5 = var8.bind(var9)(var7, var5);
 414: // try_end0
                            _fun0008_ip = 567; continue _fun0008;
 419:
                            return var4;
 422:
                            return var3;
 425: // catch_target0
                            CatchBlockStart(arg_register=2);
                            var4 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var3 = 27;
                            var3 = var10[var3];
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.show;
                            var3 = {};
                            var9 = _closure1_slot0;
                            var6 = 16;
                            var7 = var10[var6];
                            var7 = var9.bind(var2)(var7);
                            var11 = var7.intl;
                            var8 = var11.string;
                            var7 = var10[var6];
                            var7 = var9.bind(var2)(var7);
                            var7 = var7.t;
                            var7 = var7.Kx5W0d;
                            var7 = var8.bind(var11)(var7);
                            var3['title'] = var7;
                            var7 = var10[var6];
                            var7 = var9.bind(var2)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var10[var6];
                            var6 = var9.bind(var2)(var6);
                            var6 = var6.t;
                            var6 = var6.XueBVV;
                            var6 = var7.bind(var8)(var6);
                            var3['body'] = var6;
                            var3 = var4.bind(var5)(var3);
 567:
                            return var2;
 570:
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
            var9 = null;
            if(!(var9 != var14)) { _fun0004_ip = 422; continue _fun0004 }
 288:
            var4 = _closure1_slot17;
            var3 = _closure1_slot7;
            var1 = {};
            var8 = _closure1_slot8;
            var7 = {};
            var11 = var6.scrollableContent;
            var7['contentContainerStyle'] = var11;
            var11 = var6.content;
            var7['style'] = var11;
            if(!(var9 == var10)) { _fun0004_ip = 365; continue _fun0004 }
 328:
            var11 = _closure1_slot17;
            var10 = _closure1_slot22;
            var9 = {};
            var9['guild'] = var16;
            var9['slot'] = var14;
            var9['isModifyingSubscription'] = var13;
            var9['onPremiumGuildSubscribe'] = var15;
            var9 = var11.bind(var5)(var10, var9);
            _fun0004_ip = 400; continue _fun0004;
 365:
            var12 = _closure1_slot17;
            var11 = _closure1_slot23;
            var10 = {};
            var10['guild'] = var16;
            var10['onPremiumGuildSubscribe'] = var15;
            var10['previousGuildSubscriptionSlot'] = var14;
            var10['isModifyingSubscription'] = var13;
            var9 = var12.bind(var5)(var11, var10);
 400:
            var7['children'] = var9;
            var7 = var4.bind(var5)(var8, var7);
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0004_ip = 448; continue _fun0004;
 422:
            var4 = _closure1_slot17;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var6.loading;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 448:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();