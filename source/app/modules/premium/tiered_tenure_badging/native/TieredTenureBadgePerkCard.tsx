// app/modules/premium/tiered_tenure_badging/native/TieredTenureBadgePerkCard.tsx
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
    var10 = 0;
    var8 = var6[var10];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var11 = 4;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var12 = 'row';
    var9['flexDirection'] = var12;
    var4['badgeNameContainer'] = var9;
    var9 = {};
    var9['marginStart'] = var11;
    var4['tenureRequirements'] = var9;
    var9 = {'width': '100%', 'height': '100%'};
    var4['image'] = var9;
    var9 = {'height': 238, 'paddingVertical': 32};
    var4['imageContainer'] = var9;
    var9 = {};
    var11 = 0.4;
    var9['opacity'] = var11;
    var4['upcomingBadge'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['title'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/tiered_tenure_badging/native/TieredTenureBadgePerkCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TieredTenureBadgePerkCard() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var17 = 6;
            var1 = var4[var17];
            var5 = undefined;
            var6 = var3.bind(var5)(var1);
            var1 = var6.useTieredTenureBadgeData;
            var15 = var1.bind(var6)();
            var _closure2_slot0 = var15;
            var1 = var4[var17];
            var6 = var3.bind(var5)(var1);
            var1 = var6.usePremiumSince;
            var20 = var1.bind(var6)();
            var1 = _closure1_slot9;
            var14 = var1.bind(var5)();
            var1 = 7;
            var1 = var4[var1];
            var9 = var3.bind(var5)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var8.bind(var9)(var6, var1);
            var _closure2_slot1 = var8;
            var1 = 8;
            var1 = var4[var1];
            var6 = var3.bind(var5)(var1);
            var4 = var6.useMobileTenureBadgeImages;
            var1 = null;
            var9 = var1 == var15;
            var3 = undefined;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var15.id;
case 2:
            var3 = var4.bind(var6)(var3);
            var4 = var1 == var3;
            var9 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = var3.large;
case 4:
            var6 = _closure1_slot3;
            var4 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var8;
            var10 = var1 == var15;
            var8 = undefined;
            if(var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var15.id;
case 6:
            var3[1] = var8;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var8 = null;
                    if(!(var8 != var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var1 = _closure2_slot0;
                    var2 = var8 == var1;
                    var7 = undefined;
                    var1 = undefined;
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var2 = _closure2_slot0;
                    var1 = var2.id;
case 10:
                    if(!(var8 != var1)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var2 = var4[var2];
                    var4 = var3.bind(var7)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot6;
                    var2 = var1.TIERED_TENURE_BADGE_PERK_CARD_CLICKED;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var8 = var8 == var5;
                    var5 = undefined;
                    if(var8) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var8 = _closure2_slot0;
                    var5 = var8.id;
case 14:
                    var1['badge'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 12:
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 10;
                    var2 = var8[var2];
                    var5 = var3.bind(var7)(var2);
                    var4 = var5.openLazy;
                    var2 = _closure1_slot0;
                    var1 = 12;
                    var1 = var8[var1];
                    var9 = var2.bind(var7)(var1);
                    var1 = 11;
                    var3 = var8[var1];
                    var1 = var8.paths;
                    var3 = var9.bind(var7)(var3, var1);
                    var1 = 13;
                    var1 = var8[var1];
                    var1 = var2.bind(var7)(var1);
                    var2 = var1.TIERED_TENURE_BADGE_ACTION_SHEET_KEY;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var6 = var6.id;
                    var1['userId'] = var6;
                    var6 = false;
                    var1['shouldShowCTA'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var4.bind(var6)(var2, var3);
            if(!(var1 != var15)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var3 = var15.status;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var17];
            var2 = var4.bind(var5)(var2);
            var2 = var2.TieredTenureBadgeStatus;
            var2 = var2.UPCOMING;
            if(!(var3 !== var2)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 14;
            var3 = var10[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var10[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.jyYgZ2;
            var6 = var3.bind(var4)(var2);
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 14;
            var3 = var11[var2];
            var3 = var10.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var11[var2];
            var2 = var10.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.O9TBwc;
            var6 = var3.bind(var4)(var2);
case 20:
            var2 = var1 != var20;
            var12 = var9;
            var19 = null;
            if(!var2) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var3 = var15.status;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var17];
            var2 = var4.bind(var5)(var2);
            var2 = var2.TieredTenureBadgeStatus;
            var2 = var2.EARNED;
            if(!(var3 !== var2)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var10 = var15.status;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var17];
            var2 = var3.bind(var5)(var2);
            var2 = var2.TieredTenureBadgeStatus;
            var4 = var2.UPCOMING;
            var3 = var9;
            var2 = null;
            if(!(var10 === var4)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var21 = _closure1_slot0;
            var13 = _closure1_slot2;
            var18 = 14;
            var4 = var13[var18];
            var4 = var21.bind(var5)(var4);
            var16 = var4.intl;
            var11 = var16.format;
            var4 = var13[var18];
            var4 = var21.bind(var5)(var4);
            var4 = var4.t;
            var10 = var4.vwLveX;
            var4 = {};
            var22 = var13[var18];
            var22 = var21.bind(var5)(var22);
            var23 = var22.intl;
            var22 = var23.formatToPlainString;
            var18 = var13[var18];
            var18 = var21.bind(var5)(var18);
            var18 = var18.t;
            var21 = var18.k2UNz8;
            var18 = {};
            var24 = var15.daysLeft;
            var18['days'] = var24;
            var18 = var22.bind(var23)(var21, var18);
            var4['timeFrame'] = var18;
            var18 = global;
            var18 = var18.Date;
            var21 = var18.prototype;
            var21 = Object.create(var21, {constructor: {value: var18}});
            var27 = var21;
            var26 = var20;
            var18 = new var27[var18](var26, var25);
            var18 = var18 instanceof Object ? var18 : var21;
            var4['date'] = var18;
            var2 = var11.bind(var16)(var10, var4);
            var11 = _closure1_slot1;
            var10 = 15;
            var10 = var13[var10];
            var3 = var11.bind(var5)(var10);
case 25:
            _fun0001_ip = 27; continue _fun0001;
case 23:
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var4 = 14;
            var11 = var16[var4];
            var11 = var10.bind(var5)(var11);
            var13 = var11.intl;
            var11 = var13.format;
            var4 = var16[var4];
            var4 = var10.bind(var5)(var4);
            var4 = var4.t;
            var10 = var4.Hu4jfn;
            var4 = {};
            var16 = global;
            var16 = var16.Date;
            var18 = var16.prototype;
            var18 = Object.create(var18, {constructor: {value: var16}});
            var27 = var18;
            var26 = var20;
            var16 = new var27[var16](var26, var25);
            var16 = var16 instanceof Object ? var16 : var18;
            var4['date'] = var16;
            var2 = var11.bind(var13)(var10, var4);
            var3 = var9;
case 27:
            var12 = var3;
            var19 = var2;
case 21:
            var4 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var10 = {};
            var9 = var14.badgeNameContainer;
            var10['style'] = var9;
            var18 = _closure1_slot7;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 16;
            var9 = var23[var20];
            var9 = var22.bind(var5)(var9);
            var13 = var9.Text;
            var11 = {'variant': 'heading-md/medium', 'color': 'text-normal'};
            var9 = 14;
            var16 = var23[var9];
            var16 = var22.bind(var5)(var16);
            var24 = var16.intl;
            var21 = var24.string;
            var16 = var15.nameUnformatted;
            var16 = var21.bind(var24)(var16);
            var11['children'] = var16;
            var13 = var18.bind(var5)(var13, var11);
            var11 = new Array(2);
            var11[0] = var13;
            var13 = var23[var20];
            var13 = var22.bind(var5)(var13);
            var16 = var13.Text;
            var13 = {'variant': 'heading-md/medium', 'color': 'text-muted'};
            var21 = var14.tenureRequirements;
            var13['style'] = var21;
            var21 = 17;
            var21 = var23[var21];
            var24 = var22.bind(var5)(var21);
            var23 = var24.getTenureBadgeRequirementString;
            var22 = var15.id;
            var21 = var15.tenureReqNumMonths;
            var21 = var23.bind(var24)(var22, var21);
            var13['children'] = var21;
            var13 = var18.bind(var5)(var16, var13);
            var11[1] = var13;
            var10['children'] = var11;
            var11 = var4.bind(var5)(var3, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var11 = var1 != var19;
            if(!var11) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var18 = _closure1_slot7;
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var20];
            var13 = var16.bind(var5)(var13);
            var16 = var13.Text;
            var13 = {'variant': 'heading-sm/normal', 'color': 'text-muted'};
            var13['children'] = var19;
            var11 = var18.bind(var5)(var16, var13);
case 28:
            var10[1] = var11;
            var2['children'] = var10;
            var11 = var4.bind(var5)(var3, var2);
            var4 = _closure1_slot7;
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 18;
            var2 = var13[var2];
            var3 = var10.bind(var5)(var2);
            var2 = {};
            var16 = _closure1_slot0;
            var18 = var13[var9];
            var18 = var16.bind(var5)(var18);
            var20 = var18.intl;
            var19 = var20.string;
            var18 = var13[var9];
            var18 = var16.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.rnsqpa;
            var18 = var19.bind(var20)(var18);
            var2['title'] = var18;
            var18 = var14.title;
            var2['titleStyle'] = var18;
            var2['bodyComponent'] = var11;
            var11 = var13[var9];
            var11 = var16.bind(var5)(var11);
            var18 = var11.intl;
            var11 = var18.string;
            var9 = var13[var9];
            var9 = var16.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.VsY8ZW;
            var9 = var11.bind(var18)(var9);
            var2['cta'] = var9;
            var2['buttonOnPress'] = var8;
            var8 = _closure1_slot4;
            var7 = {};
            var9 = var14.imageContainer;
            var7['style'] = var9;
            var9 = 19;
            var9 = var13[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var11 = 'contain';
            var9['resizeMode'] = var11;
            var18 = var14.image;
            var11 = new Array(2);
            var11[0] = var18;
            var15 = var15.status;
            var13 = var13[var17];
            var13 = var16.bind(var5)(var13);
            var13 = var13.TieredTenureBadgeStatus;
            var13 = var13.UPCOMING;
            var13 = var15 === var13;
            if(!var13) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var13 = var14.upcomingBadge;
case 30:
            var11[1] = var13;
            var9['style'] = var11;
            var11 = {};
            var11['uri'] = var12;
            var9['source'] = var11;
            var9 = var4.bind(var5)(var10, var9);
            var7['children'] = var9;
            var7 = var4.bind(var5)(var8, var7);
            var2['headerComponent'] = var7;
            var2['pillText'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 16:
            return var1;
        }
    };
    var3['TieredTenureBadgePerkCard'] = var2;
    return var1;
})();