// app/modules/premium/tiered_tenure_badging/native/TieredTenureBadgeActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var1 = function TieredTenureBadgeItem(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.badge;
            var7 = var1.isUsersBadge;
            var17 = var1.premiumSince;
            var1 = _closure1_slot12;
            var5 = undefined;
            var13 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useMobileTenureBadgeImages;
            var1 = var1.bind(var2)(var4);
            var10 = null;
            var2 = var10 == var1;
            var14 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var14 = var1.small;
case 2:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var6 = var2.bind(var5)(var1);
            var1 = var6.getTieredTenureBadgeData;
            var20 = var1.bind(var6)(var4);
            var1 = 10;
            var1 = var3[var1];
            var3 = var2.bind(var5)(var1);
            var2 = var3.getTenureBadgeRequirementString;
            var6 = var10 == var20;
            var1 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var20.tenureReqNumMonths;
case 4:
            var16 = var2.bind(var3)(var4, var1);
            var2 = var10 == var20;
            var1 = null;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot11;
            var3 = _closure1_slot4;
            var2 = {};
            var8 = var13.badgeContainer;
            var6 = new Array(2);
            var6[0] = var8;
            var8 = var7;
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var13.usersBadgeContainer;
case 8:
            var6[1] = var8;
            var2['style'] = var6;
            var12 = _closure1_slot10;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 11;
            var6 = var11[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var15 = 'contain';
            var6['resizeMode'] = var15;
            var6['source'] = var14;
            var8 = var12.bind(var5)(var8, var6);
            var6 = new Array(4);
            var6[0] = var8;
            var19 = _closure1_slot10;
            var12 = _closure1_slot0;
            var8 = 12;
            var14 = var11[var8];
            var14 = var12.bind(var5)(var14);
            var18 = var14.Text;
            var14 = {'style': null, 'variant': 'heading-md/semibold', 'color': 'mobile-text-heading-primary'};
            var15 = var13.badgeName;
            var14['style'] = var15;
            var15 = 13;
            var21 = var11[var15];
            var21 = var12.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var20.nameUnformatted;
            var20 = var21.bind(var22)(var20);
            var14['children'] = var20;
            var14 = var19.bind(var5)(var18, var14);
            var6[1] = var14;
            var14 = _closure1_slot10;
            var11 = var11[var8];
            var11 = var12.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'style': null, 'variant': 'text-xs/normal', 'color': 'mobile-text-heading-primary'};
            var18 = var13.badgeRequirement;
            var11['style'] = var18;
            var11['children'] = var16;
            var11 = var14.bind(var5)(var12, var11);
            var6[2] = var11;
            if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var10 != var17;
case 10:
            if(!var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = _closure1_slot10;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = var11[var8];
            var8 = var12.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'variant': 'text-xs/normal', 'color': 'text-muted'};
            var13 = var13.badgePremiumSince;
            var8['style'] = var13;
            var13 = var11[var15];
            var13 = var12.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.formatToPlainString;
            var11 = var11[var15];
            var11 = var12.bind(var5)(var11);
            var11 = var11.t;
            var12 = var11.Hu4jfi;
            var11 = {};
            var15 = global;
            var15 = var15.Date;
            var16 = var15.prototype;
            var16 = Object.create(var16, {constructor: {value: var15}});
            var25 = var16;
            var24 = var17;
            var15 = new var25[var15](var24, var23);
            var15 = var15 instanceof Object ? var15 : var16;
            var11['date'] = var15;
            var11 = var13.bind(var14)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 12:
            var6[3] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PremiumTypes;
    var _closure1_slot6 = var7;
    var4 = var4.TieredTenureBadge;
    var _closure1_slot7 = var4;
    var11 = 4;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsPages;
    var _closure1_slot8 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var10 = 24;
    var9 = {'paddingHorizontal': 24, 'alignItems': 'center'};
    var4['headerContainer'] = var9;
    var12 = 8;
    var9 = {'marginTop': 8, 'paddingHorizontal': 12, 'textAlign': 'center'};
    var4['title'] = var9;
    var9 = {'marginTop': 8, 'textAlign': 'center'};
    var4['subtitle'] = var9;
    var9 = {'flexDirection': 'row', 'flexWrap': 'wrap', 'justifyContent': 'center', 'paddingHorizontal': 24, 'marginTop': 16};
    var4['container'] = var9;
    var9 = {'flexDirection': 'row', 'width': '100%', 'height': 160, 'gap': 8, 'justifyContent': 'center', 'alignItems': 'center', 'marginTop': 24};
    var4['rowContainer'] = var9;
    var9 = {};
    var13 = 186;
    var9['height'] = var13;
    var4['rowContainerWithUsersBadge'] = var9;
    var9 = {'minWidth': 110, 'height': '100%', 'paddingTop': 16, 'alignItems': 'center', 'paddingHorizontal': 8};
    var4['badgeContainer'] = var9;
    var9 = {};
    var13 = 7;
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_MUTED;
    var9['backgroundColor'] = var15;
    var15 = 1.2;
    var9['borderWidth'] = var15;
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_STRONG;
    var9['borderColor'] = var15;
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var4['usersBadgeContainer'] = var9;
    var9 = {};
    var9['marginTop'] = var12;
    var4['badgeName'] = var9;
    var9 = {};
    var9['marginTop'] = var11;
    var4['badgeRequirement'] = var9;
    var9 = {'width': 90, 'marginTop': 4, 'textAlign': 'center'};
    var4['badgePremiumSince'] = var9;
    var9 = {};
    var9['marginHorizontal'] = var10;
    var4['footer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/tiered_tenure_badging/native/TieredTenureBadgeActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TieredTenureBadgeActionSheet(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.userId;
            var _closure2_slot0 = var1;
            var12 = var2.shouldShowCTA;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var12 = true;
case 14:
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot12;
            var8 = var2.bind(var4)();
            _closure2_slot1 = var8;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 14;
            var2 = var10[var3];
            var6 = var7.bind(var4)(var2);
            var2 = var6.useTieredTenureBadgeDataForUser;
            var2 = var2.bind(var6)(var1);
            _closure2_slot2 = var2;
            var3 = var10[var3];
            var6 = var7.bind(var4)(var3);
            var3 = var6.usePremiumSinceForUser;
            var3 = var3.bind(var6)(var1);
            _closure2_slot3 = var3;
            var3 = 15;
            var3 = var10[var3];
            var13 = var7.bind(var4)(var3);
            var11 = var13.useStateFromStores;
            var3 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var11.bind(var13)(var6, var3);
            var6 = 16;
            var11 = var10[var6];
            var14 = var7.bind(var4)(var11);
            var13 = var14.isPremium;
            var11 = _closure1_slot6;
            var11 = var11.TIER_2;
            var22 = var13.bind(var14)(var3, var11);
            var6 = var10[var6];
            var11 = var7.bind(var4)(var6);
            var7 = var11.isPremiumAtLeast;
            var10 = null;
            var13 = var10 == var3;
            var6 = undefined;
            if(var13) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var6 = var3.premiumType;
case 16:
            var3 = _closure1_slot6;
            var3 = var3.TIER_0;
            var19 = var7.bind(var11)(var6, var3);
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 17;
            var3 = var13[var3];
            var7 = var6.bind(var4)(var3);
            var6 = {};
            var11 = _closure1_slot0;
            var3 = 18;
            var14 = var13[var3];
            var14 = var11.bind(var4)(var14);
            var14 = var14.ImpressionTypes;
            var14 = var14.HALFSHEET;
            var6['type'] = var14;
            var3 = var13[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.ImpressionNames;
            var3 = var3.TIERED_TENURE_BADGE_MODAL;
            var6['name'] = var3;
            var3 = {};
            var13 = var10 == var2;
            var11 = undefined;
            if(var13) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var11 = var2.id;
case 18:
            var3['badge'] = var11;
            var3['premium_type'] = var22;
            var3['viewed_user_id'] = var1;
            var6['properties'] = var3;
            var3 = {};
            var13 = var10 == var2;
            var11 = undefined;
            if(var13) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var11 = var2.id;
case 20:
            var11 = var10 == var11;
            var3['disableTrack'] = var11;
            var11 = var10 == var2;
            var10 = undefined;
            if(var11) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var10 = var2.id;
case 22:
            var2 = new Array(1);
            var2[0] = var10;
            var2 = var7.bind(var4)(var6, var3, var2);
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 19;
            var3 = var7[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var14 = var3.bottom;
            var10 = _closure1_slot3;
            var6 = var10.useCallback;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 20;
                var3 = var6[var1];
                var1 = undefined;
                var7 = var5.bind(var1)(var3);
                var4 = var7.openUserSettings;
                var3 = {};
                var8 = _closure1_slot9;
                var8 = var8.PREMIUM;
                var3['screen'] = var8;
                var3 = var4.bind(var7)(var3);
                var3 = _closure1_slot1;
                var2 = 21;
                var4 = var6[var2];
                var8 = var3.bind(var1)(var4);
                var7 = var8.hideActionSheet;
                var4 = 'TIERED_TENURE_BADGE_ACTION_SHEET';
                var4 = var7.bind(var8)(var4);
                var2 = var6[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.hideActionSheet;
                var2 = 22;
                var2 = var6[var2];
                var6 = var5.bind(var1)(var2);
                var5 = var6.getUserProfileActionSheetKey;
                var2 = _closure2_slot0;
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var16 = var6.bind(var10)(var1, var3);
            var1 = 23;
            var1 = var7[var1];
            var3 = var2.bind(var4)(var1);
            var1 = _closure1_slot8;
            var30 = var1.TIERED_TENURE_BADGES_ACTION_SHEET;
            var18 = false;
            var29 = 'replaceTopSheet';
            var33 = undefined;
            var32 = false;
            var31 = var16;
            var1 = var33[var3](var32, var31, var30, var29, var28);
            var20 = var1.loading;
            var1 = var1.onPress;
            var6 = var10.useMemo;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.values;
                    var1 = _closure1_slot7;
                    var5 = var2.bind(var3)(var1);
                    var1 = new Array(0);
                    var2 = var5.length;
                    var4 = 0;
                    var2 = var4 < var2;
                    var3 = 3;
                    if(!var2) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var7 = var1.push;
                    var2 = var5.slice;
                    var6 = var4 + var3;
                    var2 = var2.bind(var5)(var4, var6);
                    var2 = var7.bind(var1)(var2);
                    var2 = var5.length;
                    var4 = var6;
                    if(var4 < var2) { _fun0003_ip = 25; continue _fun0003 }
case 24:
                    return var1;
                }
            };
            var2 = new Array(0);
            var11 = var6.bind(var10)(var3, var2);
            var6 = _closure1_slot11;
            var3 = _closure1_slot4;
            var2 = {};
            var10 = var8.headerContainer;
            var2['style'] = var10;
            var13 = _closure1_slot10;
            var10 = _closure1_slot0;
            var17 = 12;
            var7 = var7[var17];
            var7 = var10.bind(var4)(var7);
            var10 = var7.Text;
            var7 = {'variant': 'heading-xl/bold', 'color': 'mobile-text-heading-primary'};
            var15 = var8.title;
            var7['style'] = var15;
            var23 = _closure1_slot0;
            var15 = _closure1_slot2;
            var21 = 13;
            var24 = var15[var21];
            var24 = var23.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var15 = var15[var21];
            var15 = var23.bind(var4)(var15);
            var23 = var15.t;
            if(var22) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var15 = var23.RtGeFS;
            var15 = var24.bind(var25)(var15);
            _fun0002_ip = 28; continue _fun0002;
case 26:
            var23 = var23.Og62j7;
            var15 = var24.bind(var25)(var23);
case 28:
            var7['children'] = var15;
            var10 = var13.bind(var4)(var10, var7);
            var7 = new Array(2);
            var7[0] = var10;
            var15 = _closure1_slot10;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var17];
            var10 = var13.bind(var4)(var10);
            var13 = var10.Text;
            var10 = {'variant': 'text-md/medium', 'color': 'text-default'};
            var17 = var8.subtitle;
            var10['style'] = var17;
            var26 = _closure1_slot0;
            var23 = _closure1_slot2;
            var17 = var23[var21];
            var17 = var26.bind(var4)(var17);
            var25 = var17.intl;
            if(var22) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var27 = var25.format;
            var17 = var23[var21];
            var17 = var26.bind(var4)(var17);
            var17 = var17.t;
            var24 = var17.bF+q7R;
            var17 = {};
            var17['learnMoreHook'] = var16;
            var17 = var27.bind(var25)(var24, var17);
            _fun0002_ip = 31; continue _fun0002;
case 29:
            var24 = var25.string;
            var23 = var23[var21];
            var23 = var26.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.IdAP91;
            var17 = var24.bind(var25)(var23);
case 31:
            var10['children'] = var17;
            var10 = var15.bind(var4)(var13, var10);
            var7[1] = var10;
            var2['children'] = var7;
            var10 = var6.bind(var4)(var3, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var6 = {};
            var13 = var8.footer;
            var7 = new Array(2);
            var7[0] = var13;
            var13 = {};
            var13['paddingBottom'] = var14;
            var7[1] = var13;
            var6['style'] = var7;
            var15 = _closure1_slot10;
            var13 = _closure1_slot1;
            var17 = _closure1_slot2;
            var7 = 24;
            var7 = var17[var7];
            var13 = var13.bind(var4)(var7);
            var7 = {};
            if(var22) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var7['loading'] = var20;
            var24 = _closure1_slot0;
            var20 = _closure1_slot2;
            var22 = var20[var21];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var20 = var20[var21];
            var20 = var24.bind(var4)(var20);
            var20 = var20.t;
            if(var19) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var19 = var20.pj0XBN;
            var19 = var22.bind(var23)(var19);
            _fun0002_ip = 36; continue _fun0002;
case 34:
            var20 = var20.IJI7yk;
            var19 = var22.bind(var23)(var20);
case 36:
            var7['text'] = var19;
            var7['onPress'] = var1;
            var1 = var15.bind(var4)(var13, var7);
            var6['children'] = var1;
            var1 = var6;
            _fun0002_ip = 37; continue _fun0002;
case 32:
            var7['shiny'] = var18;
            var20 = _closure1_slot0;
            var18 = var17[var21];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var21];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.hvVgAZ;
            var17 = var18.bind(var19)(var17);
            var7['text'] = var17;
            var7['onPress'] = var16;
            var7 = var15.bind(var4)(var13, var7);
            var6['children'] = var7;
            var1 = var6;
case 37:
            var7 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 25;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {'scrollable': true, 'startExpanded': true};
            var6 = undefined;
            if(!var12) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var6 = var7;
case 38:
            var1['footer'] = var6;
            var7 = _closure1_slot11;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 26;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheetScrollView;
            var5 = {};
            var12 = var8.container;
            var8 = new Array(2);
            var8[0] = var12;
            var12 = {};
            var13 = 64;
            var13 = var14 + var13;
            var12['paddingBottom'] = var13;
            var8[1] = var12;
            var5['contentContainerStyle'] = var8;
            var8 = new Array(2);
            var8[0] = var10;
            var10 = var11.map;
            var9 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var6 = arg1;
                    var3 = var6.some;
                    var2 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            var3 = _closure2_slot2;
                            var2 = null;
                            var3 = var2 == var3;
                            var2 = undefined;
                            if(var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                            var1 = _closure2_slot2;
                            var2 = var1.id;
case 40:
                            var1 = arg1;
                            var1 = var1 === var2;
                            return var1;
                        }
                    };
                    var7 = var3.bind(var6)(var2);
                    var5 = _closure1_slot10;
                    var4 = _closure1_slot4;
                    var3 = {};
                    var2 = _closure2_slot1;
                    var9 = var2.rowContainer;
                    var2 = new Array(2);
                    var2[0] = var9;
                    if(!var7) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                    var8 = _closure2_slot1;
                    var7 = var8.rowContainerWithUsersBadge;
case 42:
                    var2[1] = var7;
                    var3['style'] = var2;
                    var2 = var6.map;
                    var1 = function(arg1, arg2) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var7 = arg1;
                            var3 = _closure2_slot2;
                            var2 = null;
                            var2 = var2 == var3;
                            var5 = undefined;
                            var6 = undefined;
                            if(var2) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                            var2 = _closure2_slot2;
                            var6 = var2.id;
case 44:
                            var4 = _closure1_slot10;
                            var3 = _closure1_slot13;
                            var2 = {};
                            var2['badge'] = var7;
                            var6 = var7 === var6;
                            var2['isUsersBadge'] = var6;
                            var1 = _closure2_slot3;
                            var2['premiumSince'] = var1;
                            var1 = arg2;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var1;
                        }
                    };
                    var1 = var2.bind(var6)(var1);
                    var3['children'] = var1;
                    var2 = undefined;
                    var1 = arg2;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    var2 = 'TIERED_TENURE_BADGE_ACTION_SHEET';
    var3['TIERED_TENURE_BADGE_ACTION_SHEET_KEY'] = var2;
    return var1;
})();