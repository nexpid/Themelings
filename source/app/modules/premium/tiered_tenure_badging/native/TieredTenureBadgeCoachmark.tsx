// app/modules/premium/tiered_tenure_badging/native/TieredTenureBadgeCoachmark.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function CoachmarkImg(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.badge;
            var1 = _closure1_slot9;
            var5 = undefined;
            var9 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var7 = var3.bind(var5)(var1);
            var4 = var7.useMobileTenureBadgeImages;
            var1 = null;
            var8 = var1 == var2;
            var3 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.id;
case 2:
            var3 = var4.bind(var7)(var3);
            var4 = var1 == var3;
            var10 = undefined;
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = var3.medium;
case 4:
            var2 = var1 == var2;
            var1 = null;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot8;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var9.imageContainer;
            var2['style'] = var7;
            var8 = _closure1_slot8;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 8;
            var6 = var11[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var11 = 'contain';
            var6['resizeMode'] = var11;
            var9 = var9.image;
            var6['style'] = var9;
            var9 = {};
            var9['uri'] = var10;
            var6['source'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': '100%', 'height': '100%'};
    var4['image'] = var9;
    var9 = {'width': 110, 'height': 72, 'marginTop': 16};
    var4['imageContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/tiered_tenure_badging/native/TieredTenureBadgeCoachmark.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TieredTenureBadgeCoachmark(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.targetRef;
            var7 = var1.badgeId;
            var6 = undefined;
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var6;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var9 = 9;
            var1 = var1[var9];
            var3 = var3.bind(var6)(var1);
            var1 = var3.getTieredTenureBadge;
            var8 = var1.bind(var3)(var7);
            var1 = null;
            var3 = var1 != var8;
            var10 = null;
            if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var9];
            var7 = var7.bind(var6)(var3);
            var3 = var7.getTieredTenureBadgeData;
            var10 = var3.bind(var7)(var8);
case 8:
            _closure2_slot0 = var10;
            if(!(var1 == var10)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var11 = new Array(0);
            _fun0002_ip = 12; continue _fun0002;
case 10:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 10;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.DismissibleContent;
            var7 = var3.TIERED_TENURE_BADGE_COACHMARK;
            var3 = new Array(1);
            var3[0] = var7;
            var11 = var3;
case 12:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var8 = 11;
            var8 = var7[var8];
            var9 = var3.bind(var6)(var8);
            var8 = var9.useSelectedDismissibleContent;
            var11 = var8.bind(var9)(var11);
            var9 = _closure1_slot3;
            var8 = 2;
            var9 = var9.bind(var6)(var11, var8);
            var8 = 0;
            var11 = var9[var8];
            _closure2_slot1 = var11;
            var8 = 1;
            var12 = var9[var8];
            _closure2_slot2 = var12;
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var4 = new Array(3);
            var4[0] = var12;
            var4[1] = var11;
            var4[2] = var10;
            var2 = function() {
                var1 = {};
                var7 = 12;
                var1['offsetY'] = var7;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = var2[var7];
                var5 = undefined;
                var4 = var6.bind(var5)(var4);
                var9 = var4.intl;
                var8 = var9.string;
                var4 = var2[var7];
                var4 = var6.bind(var5)(var4);
                var4 = var4.t;
                var4 = var4.Ajj8iI;
                var4 = var8.bind(var9)(var4);
                var1['title'] = var4;
                var4 = var2[var7];
                var4 = var6.bind(var5)(var4);
                var9 = var4.intl;
                var8 = var9.string;
                var4 = var2[var7];
                var4 = var6.bind(var5)(var4);
                var4 = var4.t;
                var4 = var4.WUNqDw;
                var4 = var8.bind(var9)(var4);
                var1['description'] = var4;
                var4 = 'bottom';
                var1['position'] = var4;
                var8 = _closure2_slot1;
                var4 = 10;
                var4 = var2[var4];
                var4 = var6.bind(var5)(var4);
                var4 = var4.DismissibleContent;
                var4 = var4.TIERED_TENURE_BADGE_COACHMARK;
                var4 = var8 === var4;
                var1['visible'] = var4;
                var4 = function onDismiss() {
                    var3 = _closure2_slot2;
                    var1 = _closure1_slot7;
                    var2 = var1.USER_DISMISS;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onDismiss'] = var4;
                var4 = function renderImgComponent() {
                    var4 = _closure1_slot8;
                    var3 = _closure1_slot10;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var2['badge'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1['renderImgComponent'] = var4;
                var3 = function onButtonPress() {
                    var3 = _closure2_slot2;
                    var1 = _closure1_slot7;
                    var2 = var1.TAKE_ACTION;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 13;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openUserSettings;
                    var2 = {};
                    var5 = _closure1_slot6;
                    var5 = var5.PREMIUM;
                    var2['screen'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['onButtonPress'] = var3;
                var3 = var2[var7];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var2[var7];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.RzWDqa;
                var2 = var3.bind(var4)(var2);
                var1['buttonLabel'] = var2;
                var2 = 'experimental_premium-primary';
                var1['buttonVariant'] = var2;
                return var1;
            };
            var4 = var8.bind(var9)(var2, var4);
            var2 = 14;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.useCoachmark;
            var2 = var2.bind(var3)(var5, var4);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();