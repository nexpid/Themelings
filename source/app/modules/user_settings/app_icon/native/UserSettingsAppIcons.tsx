// app/modules/user_settings/app_icon/native/UserSettingsAppIcons.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.UpsellTypes;
    var _closure1_slot6 = var8;
    var4 = var4.AnalyticsPages;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getIconById;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var8 = var4.Fragment;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'padding': 0, 'position': 'absolute', 'bottom': 56, 'width': 350, 'alignSelf': 'center'};
    var4['upsellButtonContainer'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = function _onSelect() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            var5 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                            var4 = _closure1_slot8;
                            var3 = undefined;
                            var7 = var4.bind(var3)(var5);
                            var8 = null;
                            if(!(var8 != var7)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                            var6 = var7.id;
                            var4 = var7.isPremium;
                            var10 = var7.iconSource;
                            if(!(var6 !== var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                            var7 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var5 = 9;
                            var5 = var12[var5];
                            var11 = var7.bind(var3)(var5);
                            var9 = var11.setAppIcon;
                            var5 = 12;
                            var5 = var12[var5];
                            var5 = var7.bind(var3)(var5);
                            var5 = var5.FreemiumAppIconIds;
                            var7 = var5.DEFAULT;
                            var5 = _closure2_slot0;
                            var13 = var8 == var5;
                            var5 = undefined;
                            if(var13) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                            var12 = _closure2_slot0;
                            var5 = var12.premiumType;
case 8:
                            var5 = var9.bind(var11)(var7, var5);
                            SaveGenerator(address=143);
case 10:
                            return var5;
case 11:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                            if(!var7) { _fun0002_ip = 4; continue _fun0002 }
case 12:
                            return var5;
case 6:
                            var5 = _closure2_slot1;
                            if(!(var5 !== var6)) { _fun0002_ip = 4; continue _fun0002 }
case 13:
                            if(!var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                            var4 = _closure2_slot2;
                            if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 16:
                            var5 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var4 = 13;
                            var4 = var9[var4];
                            var9 = var5.bind(var3)(var4);
                            var5 = var9.handleShowUpsellAlert;
                            var4 = {};
                            var11 = _closure1_slot6;
                            var11 = var11.APP_ICONS;
                            var4['initialUpsellKey'] = var11;
                            var4['imageSource'] = var10;
                            var4 = var5.bind(var9)(var4);
                            _fun0002_ip = 4; continue _fun0002;
case 14:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 9;
                            var2 = var5[var2];
                            var5 = var4.bind(var3)(var2);
                            var4 = var5.setAppIcon;
                            var2 = _closure2_slot0;
                            var8 = var8 == var2;
                            var2 = undefined;
                            if(var8) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                            var7 = _closure2_slot0;
                            var2 = var7.premiumType;
case 17:
                            var2 = var4.bind(var5)(var6, var2);
                            SaveGenerator(address=293);
case 19:
                            return var2;
case 20:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0002_ip = 21; continue _fun0002 }
case 4:
                            return var3;
case 21:
                            return var2;
case 2:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot5 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot5 = var1;
            var1 = _closure1_slot12;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var7 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 8;
            var1 = var16[var1];
            var5 = var7.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var3.bind(var5)(var2, var1);
            var _closure2_slot0 = var3;
            var1 = 9;
            var1 = var16[var1];
            var2 = var7.bind(var4)(var1);
            var1 = var2.useCurrentAppIcon;
            var1 = var1.bind(var2)();
            var _closure2_slot1 = var1;
            var1 = 10;
            var1 = var16[var1];
            var2 = var7.bind(var4)(var1);
            var1 = var2.isPremium;
            var6 = var1.bind(var2)(var3);
            var _closure2_slot2 = var6;
            var15 = _closure1_slot1;
            var1 = 11;
            var1 = var16[var1];
            var1 = var15.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.analyticsLocations;
            var _closure2_slot3 = var1;
            var1 = {};
            var2 = _closure1_slot7;
            var2 = var2.APP_ICONS;
            var1['page'] = var2;
            var _closure2_slot4 = var1;
            var3 = _closure1_slot11;
            var2 = _closure1_slot10;
            var1 = {};
            var8 = _closure1_slot9;
            var5 = 14;
            var5 = var16[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Form;
            var5 = {};
            var11 = _closure1_slot4;
            var9 = {};
            var14 = 'radiogroup';
            var9['accessibilityRole'] = var14;
            var14 = 15;
            var14 = var16[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var16 = function onSelect(arg1) {
                var1 = undefined;
                var4 = _closure2_slot5;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var14['onSelect'] = var16;
            var14 = var8.bind(var4)(var15, var14);
            var9['children'] = var14;
            var9 = var8.bind(var4)(var11, var9);
            var5['children'] = var9;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var6 = !var6;
            if(!var6) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var9 = _closure1_slot9;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var10.upsellButtonContainer;
            var7['style'] = var10;
            var11 = _closure1_slot1;
            var16 = _closure1_slot2;
            var10 = 16;
            var10 = var16[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var13 = function onPress() {
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 17;
                var2 = var6[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var7 = _closure2_slot4;
                var2['analyticsLocation'] = var7;
                var5 = _closure2_slot3;
                var2['analyticsLocations'] = var5;
                var5 = _closure1_slot0;
                var4 = 18;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var4 = var4.PremiumFeatureCardOrder;
                var4 = var4.TIER_2_LEADING;
                var2['premiumFeatureCardOrder'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var10['onPress'] = var13;
            var15 = _closure1_slot0;
            var12 = 19;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.M0rDSO;
            var12 = var13.bind(var14)(var12);
            var10['text'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 22:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/app_icon/native/UserSettingsAppIcons.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();