// app/modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'column', 'alignItems': 'center'};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['gap'] = var12;
    var4['container'] = var9;
    var9 = {'width': 234, 'height': 40, 'flexDirection': 'row', 'alignItems': 'center', 'position': 'relative', 'borderRadius': null, 'overflow': 'hidden'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9['borderRadius'] = var12;
    var4['nameplateContainer'] = var9;
    var9 = {'position': 'absolute', 'left': 0, 'right': 0, 'top': 0, 'bottom': 0, 'borderRadius': null, 'overflow': 'hidden'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9['borderRadius'] = var10;
    var4['nameplateWrapper'] = var9;
    var9 = {'flexDirection': 'row', 'paddingRight': 15, 'justifyContent': 'center', 'alignItems': 'center', 'marginLeft': 5};
    var4['singleAvatarContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumGiftingPromotionSuccessActions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var8 = var2.purchase;
            var _closure2_slot0 = var8;
            var10 = var2.asset;
            var2 = var2.reward;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot8;
            var4 = undefined;
            var14 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 6;
            var3 = var7[var3];
            var9 = var5.bind(var4)(var3);
            var7 = var9.useStateFromStores;
            var3 = _closure1_slot5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var18 = var7.bind(var9)(var5, var3);
            var7 = _closure1_slot3;
            var9 = var7.useMemo;
            var5 = new Array(1);
            var5[0] = var2;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var7 = null;
                    var1 = var7 == var1;
                    var8 = undefined;
                    var3 = undefined;
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = _closure2_slot1;
                    var3 = var1.type;
case 2:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 7;
                    var1 = var4[var1];
                    var1 = var2.bind(var8)(var1);
                    var1 = var1.CollectiblesItemType;
                    var2 = var1.NAMEPLATE;
                    var1 = null;
                    if(!(var3 === var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = _closure2_slot1;
                    var2 = var2.assetId;
                    var2 = var7 != var2;
                    var1 = null;
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var2 = var4[var2];
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.getNameplateDataFromRecord;
                    var2 = {};
                    var9 = _closure2_slot1;
                    var10 = var9.assetId;
                    var2['asset'] = var10;
                    var9 = var9.a11yLabel;
                    var9 = var7 == var9;
                    var10 = undefined;
                    if(var9) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var11 = _closure2_slot1;
                    var9 = var11.a11yLabel;
                    var10 = var9.bind(var11)();
case 7:
                    var11 = var7 != var10;
                    var9 = '';
                    if(!var11) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var9 = var10;
case 9:
                    var2['label'] = var9;
                    var5 = _closure2_slot1;
                    var5 = var5.palette;
                    if(!(var7 == var5)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 9;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var6 = var6.NameplatePalette;
                    var5 = var6.TEAL;
case 11:
                    var2['palette'] = var5;
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var16 = var9.bind(var7)(var3, var5);
            var5 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var5 = _closure2_slot0;
                var2['product'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var5.bind(var7)(var1, var3);
            var1 = null;
            var5 = var1 == var2;
            var3 = undefined;
            if(var5) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = var2.type;
case 13:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.CollectiblesItemType;
            var2 = var2.NAMEPLATE;
            var5 = var3 === var2;
            if(!var5) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var5 = var1 != var16;
case 15:
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = var14.container;
            var1['style'] = var7;
            if(var5) { _fun0001_ip = 17; continue _fun0001 }
case 11:
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 13;
            var5 = var13[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var12 = _closure1_slot0;
            var11 = 12;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.AvatarSizes;
            var11 = var11.LARGE;
            var5['size'] = var11;
            var5['asset'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 18; continue _fun0001;
case 17:
            var10 = _closure1_slot7;
            var8 = _closure1_slot4;
            var5 = {};
            var11 = var14.nameplateContainer;
            var5['style'] = var11;
            var13 = _closure1_slot6;
            var11 = {};
            var12 = var14.nameplateWrapper;
            var11['style'] = var12;
            var15 = _closure1_slot1;
            var19 = _closure1_slot2;
            var12 = 11;
            var12 = var19[var12];
            var17 = var15.bind(var4)(var12);
            var12 = {'nameplate': null, 'fullOpacity': true, 'animate': true};
            var12['nameplate'] = var16;
            var16 = true;
            var12 = var13.bind(var4)(var17, var12);
            var11['children'] = var12;
            var12 = var13.bind(var4)(var8, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var12 = {};
            var14 = var14.singleAvatarContainer;
            var12['style'] = var14;
            var17 = 12;
            var14 = var19[var17];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var14['user'] = var18;
            var14['guildId'] = var4;
            var18 = _closure1_slot0;
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.AvatarSizes;
            var17 = var17.SMALL;
            var14['size'] = var17;
            var14['aria-hidden'] = var16;
            var14 = var13.bind(var4)(var15, var14);
            var12['children'] = var14;
            var12 = var13.bind(var4)(var8, var12);
            var11[1] = var12;
            var5['children'] = var11;
            var7 = var10.bind(var4)(var8, var5);
case 18:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot6;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 14;
            var6 = var13[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {};
            var10 = true;
            var6['grow'] = var10;
            var6['onPress'] = var9;
            var9 = 15;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.kMYVwv;
            var9 = var10.bind(var11)(var9);
            var6['text'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();