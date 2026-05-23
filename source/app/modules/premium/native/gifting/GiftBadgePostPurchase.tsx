// app/modules/premium/native/gifting/GiftBadgePostPurchase.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function PostPurchaseFooter(arg1) {
        var2 = arg1;
        var2 = var2.onSendGift;
        var _closure2_slot0 = var2;
        var13 = _closure1_slot1;
        var14 = _closure1_slot2;
        var3 = 7;
        var3 = var14[var3];
        var4 = undefined;
        var3 = var13.bind(var4)(var3);
        var3 = var3.bind(var4)();
        var5 = var3.bottom;
        var3 = _closure1_slot11;
        var5 = var3.bind(var4)(var5);
        var8 = _closure1_slot3;
        var6 = var8.useCallback;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.pop;
            var2 = var2.bind(var3)();
            var2 = _closure2_slot0;
            var2 = var2.bind(var1)();
            return var1;
        };
        var16 = var6.bind(var8)(var2, var3);
        var6 = _closure1_slot3;
        var3 = var6.useCallback;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 8;
                var3 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.pop;
                var3 = var3.bind(var5)();
                var3 = _closure1_slot0;
                var2 = 9;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.getRootNavigationRef;
                var4 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = var4.navigate;
                var2 = 'you';
                var2 = var3.bind(var4)(var2);
case 2:
                return var1;
            }
        };
        var1 = new Array(0);
        var9 = var3.bind(var6)(var2, var1);
        var3 = _closure1_slot10;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var5.footer;
        var1['style'] = var5;
        var15 = _closure1_slot9;
        var12 = _closure1_slot0;
        var6 = 10;
        var5 = var14[var6];
        var5 = var12.bind(var4)(var5);
        var8 = var5.Button;
        var5 = {'grow': true, 'variant': 'primary'};
        var17 = _closure1_slot9;
        var10 = 11;
        var10 = var14[var10];
        var10 = var12.bind(var4)(var10);
        var11 = var10.GiftIcon;
        var10 = {};
        var18 = 'sm';
        var10['size'] = var18;
        var18 = 6;
        var18 = var14[var18];
        var18 = var13.bind(var4)(var18);
        var18 = var18.colors;
        var18 = var18.CONTROL_PRIMARY_TEXT_DEFAULT;
        var10['color'] = var18;
        var10 = var17.bind(var4)(var11, var10);
        var5['icon'] = var10;
        var11 = 12;
        var10 = var14[var11];
        var10 = var12.bind(var4)(var10);
        var19 = var10.intl;
        var18 = var19.string;
        var10 = 13;
        var17 = var14[var10];
        var17 = var13.bind(var4)(var17);
        var17 = var17.g86YiI;
        var17 = var18.bind(var19)(var17);
        var5['text'] = var17;
        var5['onPress'] = var16;
        var8 = var15.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot9;
        var6 = var14[var6];
        var6 = var12.bind(var4)(var6);
        var7 = var6.Button;
        var6 = {'grow': true, 'variant': 'secondary'};
        var11 = var14[var11];
        var11 = var12.bind(var4)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var4)(var10);
        var10 = var10.sa/cfM;
        var10 = var11.bind(var12)(var10);
        var6['text'] = var10;
        var6['onPress'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function InProgressScreen(arg1) {
        var1 = arg1;
        var23 = var1.progress;
        var22 = var1.title;
        var16 = var1.progressBarTitle;
        var18 = var1.description;
        var21 = var1.currentTier;
        var17 = var1.nextTier;
        var9 = var1.onSendGift;
        var14 = _closure1_slot1;
        var20 = _closure1_slot2;
        var1 = 7;
        var1 = var20[var1];
        var4 = undefined;
        var1 = var14.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var2 = var1.bottom;
        var1 = _closure1_slot11;
        var19 = var1.bind(var4)(var2);
        var3 = _closure1_slot10;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var19.screenContainer;
        var1['style'] = var5;
        var8 = _closure1_slot10;
        var7 = _closure1_slot4;
        var5 = {};
        var10 = var19.inProgressContent;
        var5['style'] = var10;
        var12 = _closure1_slot9;
        var11 = _closure1_slot4;
        var10 = {};
        var13 = var19.progressRow;
        var10['style'] = var13;
        var15 = _closure1_slot9;
        var13 = 14;
        var13 = var20[var13];
        var14 = var14.bind(var4)(var13);
        var13 = {};
        var13['progress'] = var23;
        var13['currentTier'] = var21;
        var13['nextTier'] = var17;
        var17 = 48;
        var13['iconSize'] = var17;
        var13['title'] = var16;
        var13 = var15.bind(var4)(var14, var13);
        var10['children'] = var13;
        var11 = var12.bind(var4)(var11, var10);
        var10 = new Array(2);
        var10[0] = var11;
        var13 = _closure1_slot10;
        var12 = _closure1_slot4;
        var11 = {};
        var14 = var19.messageSection;
        var11['style'] = var14;
        var21 = _closure1_slot9;
        var16 = _closure1_slot0;
        var15 = 15;
        var14 = var20[var15];
        var14 = var16.bind(var4)(var14);
        var17 = var14.Text;
        var14 = {};
        var23 = 'heading-xxl/bold';
        var14['variant'] = var23;
        var23 = var19.centerText;
        var14['style'] = var23;
        var14['children'] = var22;
        var17 = var21.bind(var4)(var17, var14);
        var14 = new Array(2);
        var14[0] = var17;
        var17 = _closure1_slot9;
        var15 = var20[var15];
        var15 = var16.bind(var4)(var15);
        var16 = var15.Text;
        var15 = {'variant': 'text-md/medium', 'color': 'text-muted'};
        var19 = var19.centerText;
        var15['style'] = var19;
        var15['children'] = var18;
        var15 = var17.bind(var4)(var16, var15);
        var14[1] = var15;
        var11['children'] = var14;
        var11 = var13.bind(var4)(var12, var11);
        var10[1] = var11;
        var5['children'] = var10;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot9;
        var7 = _closure1_slot12;
        var6 = {};
        var6['onSendGift'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function LevelUpScreen(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var18 = var1.simulatedProgress;
            var17 = var1.currentTier;
            var23 = var1.newTier;
            var24 = var1.nextTier;
            var26 = var1.giftsToNextTier;
            var9 = var1.onSendGift;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var2 = var1.bottom;
            var1 = _closure1_slot11;
            var22 = var1.bind(var4)(var2);
            var5 = _closure1_slot3;
            var3 = var5.useEffect;
            var2 = function() {
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 16;
                var3 = var6[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.triggerHapticFeedback;
                var5 = _closure1_slot1;
                var2 = 17;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.IMPACT_HEAVY;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var22.screenContainer;
            var1['style'] = var5;
            var8 = _closure1_slot10;
            var7 = _closure1_slot4;
            var5 = {};
            var10 = var22.levelUpContent;
            var5['style'] = var10;
            var10 = var23.simple_icon_url;
            var25 = null;
            var11 = var25 != var10;
            if(!var11) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var13 = _closure1_slot9;
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 18;
            var10 = var14[var10];
            var12 = var12.bind(var4)(var10);
            var10 = {};
            var14 = var23.simple_icon_url;
            var10['icon'] = var14;
            var14 = 120;
            var10['size'] = var14;
            var11 = var13.bind(var4)(var12, var10);
case 4:
            var10 = new Array(2);
            var10[0] = var11;
            var13 = _closure1_slot10;
            var12 = _closure1_slot4;
            var11 = {};
            var14 = var22.levelUpCopy;
            var11['style'] = var14;
            var16 = _closure1_slot9;
            var21 = _closure1_slot1;
            var19 = _closure1_slot2;
            var14 = 19;
            var14 = var19[var14];
            var15 = var21.bind(var4)(var14);
            var14 = {};
            var14['progress'] = var18;
            var14['currentTier'] = var17;
            var14['newTier'] = var23;
            var15 = var16.bind(var4)(var15, var14);
            var14 = new Array(3);
            var14[0] = var15;
            var18 = _closure1_slot9;
            var28 = _closure1_slot0;
            var16 = 15;
            var15 = var19[var16];
            var15 = var28.bind(var4)(var15);
            var17 = var15.Text;
            var15 = {};
            var20 = 'heading-xxl/bold';
            var15['variant'] = var20;
            var20 = var22.centerText;
            var15['style'] = var20;
            var20 = 12;
            var27 = var19[var20];
            var27 = var28.bind(var4)(var27);
            var29 = var27.intl;
            var28 = var29.format;
            var27 = 13;
            var19 = var19[var27];
            var19 = var21.bind(var4)(var19);
            var21 = var19.k8MmO8;
            var19 = {};
            var31 = var23.name;
            var32 = var25 != var31;
            var23 = '';
            var30 = var23;
            if(!var32) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var30 = var31;
case 6:
            var19['tierName'] = var30;
            var19 = var28.bind(var29)(var21, var19);
            var15['children'] = var19;
            var15 = var18.bind(var4)(var17, var15);
            var14[1] = var15;
            var15 = var25 != var24;
            if(!var15) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var15 = var25 != var26;
case 8:
            if(!var15) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var17 = 0;
            var15 = var26 > var17;
case 10:
            if(!var15) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var18 = _closure1_slot9;
            var21 = _closure1_slot0;
            var19 = _closure1_slot2;
            var16 = var19[var16];
            var16 = var21.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'variant': 'text-md/normal', 'color': 'text-subtle'};
            var22 = var22.centerText;
            var16['style'] = var22;
            var20 = var19[var20];
            var20 = var21.bind(var4)(var20);
            var22 = var20.intl;
            var21 = var22.format;
            var20 = _closure1_slot1;
            var19 = var19[var27];
            var19 = var20.bind(var4)(var19);
            var20 = var19["6QVlxw"];
            var19 = {};
            var19['count'] = var26;
            var24 = var24.name;
            var25 = var25 != var24;
            if(!var25) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var23 = var24;
case 14:
            var19['nextTierName'] = var23;
            var19 = var21.bind(var22)(var20, var19);
            var16['children'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 12:
            var14[2] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var5['children'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot9;
            var7 = _closure1_slot12;
            var6 = {};
            var6['onSendGift'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var7 = var4.getRemainingGiftsToNextTier;
    var _closure1_slot6 = var7;
    var7 = var4.getTierForProgress;
    var _closure1_slot7 = var7;
    var4 = var4.getNextTierForProgress;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        var1 = {};
        var2 = {};
        var3 = 1;
        var2['flex'] = var3;
        var1['screenContainer'] = var2;
        var2 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center', 'gap': 24};
        var8 = 'center';
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 6;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['paddingHorizontal'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_BASE_LOW;
        var2['backgroundColor'] = var7;
        var1['inProgressContent'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['padding'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.md;
        var2['borderRadius'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.shadows;
        var10 = var7.SHADOW_LOW;
        var11 = var2;
        var7 = copyDataProperties(var11, var10);
        var7 = '100%';
        var9 = 'width';
        var2[8] = var7;
        var1['progressRow'] = var2;
        var2 = {'gap': null, 'alignItems': 'center', 'width': '100%'};
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_8;
        var2['gap'] = var9;
        var1['messageSection'] = var2;
        var2 = {};
        var2['textAlign'] = var8;
        var1['centerText'] = var2;
        var2 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_48;
        var2['paddingHorizontal'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_48;
        var2['gap'] = var8;
        var1['levelUpContent'] = var2;
        var2 = {'gap': null, 'alignItems': 'center', 'width': '100%'};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_12;
        var2['gap'] = var8;
        var1['levelUpCopy'] = var2;
        var2 = {};
        var2['width'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_12;
        var2['gap'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var2['paddingHorizontal'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var4 = var3.PX_16;
        var3 = arg1;
        var3 = var4 + var3;
        var2['paddingBottom'] = var3;
        var1['footer'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/GiftBadgePostPurchase.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GiftBadgePostPurchase(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var5 = var1.currentProgress;
            var7 = var1.onSendGift;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 20;
            var1 = var4[var1];
            var6 = undefined;
            var8 = var2.bind(var6)(var1);
            var4 = var8.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot5;
                    var3 = var4.getBadgeById;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.BadgeId;
                    var2 = var2.GIFTING;
                    var2 = var3.bind(var4)(var2);
                    var3 = null;
                    var3 = var3 == var2;
                    if(var3) { _fun0004_ip = 3; continue _fun0004 }
case 16:
                    var1 = var2.tiers;
case 3:
                    return var1;
                }
            };
            var13 = var4.bind(var8)(var2, var1);
            var1 = null;
            if(!(var1 != var13)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var4 = _closure1_slot7;
            var11 = var4.bind(var6)(var13, var5);
            var2 = 1;
            var12 = var5 + var2;
            var10 = var4.bind(var6)(var13, var12);
            var4 = var1 == var10;
            var5 = undefined;
            if(var4) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var5 = var10.key;
case 19:
            var8 = var1 == var11;
            var4 = undefined;
            if(var8) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var4 = var11.key;
case 21:
            var8 = _closure1_slot8;
            var9 = var8.bind(var6)(var13, var12);
            var8 = _closure1_slot6;
            var8 = var8.bind(var6)(var13, var12);
            if(!(var5 !== var4)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            if(!(var1 == var10)) { _fun0003_ip = 25; continue _fun0003 }
case 23:
            var5 = _closure1_slot9;
            var4 = _closure1_slot13;
            if(!(var2 !== var8)) { _fun0003_ip = 9; continue _fun0003 }
case 26:
            var2 = {};
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var15 = 12;
            var14 = var13[var15];
            var14 = var16.bind(var6)(var14);
            var20 = var14.intl;
            var19 = var20.string;
            var17 = _closure1_slot1;
            var18 = 13;
            var14 = var13[var18];
            var14 = var17.bind(var6)(var14);
            var14 = var14["/rBQud"];
            var14 = var19.bind(var20)(var14);
            var2['title'] = var14;
            var14 = var13[var15];
            var14 = var16.bind(var6)(var14);
            var16 = var14.intl;
            var14 = var16.string;
            var13 = var13[var18];
            var13 = var17.bind(var6)(var13);
            var13 = var13.DDQMlx;
            var13 = var14.bind(var16)(var13);
            var2['description'] = var13;
            var14 = var1 == var11;
            var13 = undefined;
            if(var14) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var13 = var11.name;
case 27:
            var14 = var1 != var13;
            var13 = '';
            if(!var14) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = var14[var15];
            var15 = var16.bind(var6)(var15);
            var17 = var15.intl;
            var16 = var17.formatToPlainString;
            var15 = _closure1_slot1;
            var14 = var14[var18];
            var14 = var15.bind(var6)(var14);
            var15 = var14.bwyQt8;
            var14 = {};
            var19 = var1 == var11;
            var18 = undefined;
            if(var19) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var18 = var11.name;
case 31:
            var14['tierName'] = var18;
            var13 = var16.bind(var17)(var15, var14);
case 29:
            var2['progressBarTitle'] = var13;
            var2['progress'] = var12;
            var14 = var1 != var10;
            var13 = undefined;
            if(!var14) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var13 = var10;
case 6:
            var2['currentTier'] = var13;
            var14 = var1 != var9;
            var13 = undefined;
            if(!var14) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var13 = var9;
case 33:
            var2['nextTier'] = var13;
            var2['onSendGift'] = var7;
            _fun0003_ip = 35; continue _fun0003;
case 9:
            var13 = {};
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = 12;
            var16 = var14[var15];
            var16 = var17.bind(var6)(var16);
            var19 = var16.intl;
            var17 = var19.formatToPlainString;
            var16 = _closure1_slot1;
            var18 = 13;
            var14 = var14[var18];
            var14 = var16.bind(var6)(var14);
            var16 = var14.KjdBPz;
            var14 = {};
            var20 = var1 == var9;
            var21 = undefined;
            if(var20) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var21 = var9.name;
case 36:
            var22 = var1 != var21;
            var20 = '';
            if(!var22) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var20 = var21;
case 38:
            var14['nextTier'] = var20;
            var14 = var17.bind(var19)(var16, var14);
            var13['title'] = var14;
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var17 = var14[var15];
            var17 = var16.bind(var6)(var17);
            var21 = var17.intl;
            var20 = var21.string;
            var17 = _closure1_slot1;
            var19 = var14[var18];
            var19 = var17.bind(var6)(var19);
            var19 = var19.oqDrEM;
            var19 = var20.bind(var21)(var19);
            var13['description'] = var19;
            var15 = var14[var15];
            var15 = var16.bind(var6)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var6)(var14);
            var14 = var14.Ka5s+Q;
            var14 = var15.bind(var16)(var14);
            var13['progressBarTitle'] = var14;
            var13['progress'] = var12;
            var15 = var1 != var10;
            var14 = undefined;
            if(!var15) { _fun0003_ip = 40; continue _fun0003 }
case 41:
            var14 = var10;
case 40:
            var13['currentTier'] = var14;
            var15 = var1 != var9;
            var14 = undefined;
            if(!var15) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var14 = var9;
case 42:
            var13['nextTier'] = var14;
            var13['onSendGift'] = var7;
            var2 = var13;
case 35:
            var2 = var5.bind(var6)(var4, var2);
            _fun0003_ip = 44; continue _fun0003;
case 25:
            var5 = _closure1_slot9;
            var4 = _closure1_slot14;
            var3 = {};
            var3['simulatedProgress'] = var12;
            var3['currentTier'] = var11;
            var3['newTier'] = var10;
            var3['nextTier'] = var9;
            var3['giftsToNextTier'] = var8;
            var3['onSendGift'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 44:
            return var2;
case 17:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();