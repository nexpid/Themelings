// app/modules/main_tabs_v2/native/settings/screens/ProfileCustomizationTryItOutSettingScreen.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var10 = var4.StyleSheet;
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.ActivityIndicator;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot7 = var7;
    var4 = var4.AnalyticsPages;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PremiumUpsellTypes;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 7;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var11;
    var14 = var10.absoluteFillObject;
    var15 = var9;
    var10 = copyDataProperties(var15, var14);
    var4['container'] = var9;
    var9 = {'height': '100%', 'alignItems': 'center', 'justifyContent': 'center'};
    var4['activityIndicator'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/screens/ProfileCustomizationTryItOutSettingScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ProfileCustomizationTryItOutSettingScreen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot11;
            var6 = undefined;
            var8 = var2.bind(var6)();
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 8;
            var3 = var11[var2];
            var4 = var10.bind(var6)(var3);
            var3 = 9;
            var3 = var11[var3];
            var3 = var10.bind(var6)(var3);
            var3 = var3.USER_SETTINGS_TRY_OUT_PREMIUM;
            var3 = var4.bind(var6)(var3);
            var5 = var3.analyticsLocations;
            var15 = var3.sourceAnalyticsLocations;
            var _closure2_slot0 = var15;
            var4 = _closure1_slot0;
            var3 = 10;
            var3 = var11[var3];
            var12 = var4.bind(var6)(var3);
            var9 = var12.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var9.bind(var12)(var4, var3);
            var _closure2_slot1 = var13;
            var3 = 11;
            var3 = var11[var3];
            var3 = var10.bind(var6)(var3);
            var4 = var3.bind(var6)();
            var3 = var4.categories;
            var _closure2_slot2 = var3;
            var9 = var4.isFetching;
            var4 = 12;
            var4 = var11[var4];
            var10 = var10.bind(var6)(var4);
            var4 = {};
            var12 = true;
            var4['isTryItOut'] = var12;
            var4['analyticsLocations'] = var5;
            var10 = var10.bind(var6)(var4);
            var4 = var10.pendingAvatarDecoration;
            var _closure2_slot3 = var4;
            var10 = var10.setPendingAvatarDecoration;
            var _closure2_slot4 = var10;
            var14 = _closure1_slot3;
            var17 = var14.useEffect;
            var16 = new Array(1);
            var16[0] = var13;
            var11 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 78; continue _fun0002 }
 13:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 13;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var6 = _closure2_slot1;
                    var3 = var6.id;
                    var2 = var6.getAvatarURL;
                    var1 = 80;
                    var2 = var2.bind(var6)(var5, var1);
                    var1 = {};
                    var6 = true;
                    var1['dispatchWait'] = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
 78:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var17.bind(var14)(var11, var16);
            var16 = var14.useEffect;
            var11 = new Array(3);
            var11[0] = var4;
            var11[1] = var10;
            var11[2] = var3;
            var10 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    if(!(var1 === var3)) { _fun0003_ip = 108; continue _fun0003 }
 13:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 14;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.getAvatarDecorationsFromCategories;
                    var3 = _closure2_slot2;
                    var4 = var4.bind(var5)(var3);
                    var3 = _closure2_slot4;
                    var2 = global;
                    var6 = var2.Math;
                    var5 = var6.floor;
                    var7 = var2.Math;
                    var2 = var7.random;
                    var7 = var2.bind(var7)();
                    var2 = var4.length;
                    var2 = var7 * var2;
                    var2 = var5.bind(var6)(var2);
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
 108:
                    return var1;
                }
            };
            var10 = var16.bind(var14)(var10, var11);
            var11 = var14.useEffect;
            var10 = new Array(1);
            var10[0] = var15;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot7;
                var3 = var2.PREMIUM_UPSELL_VIEWED;
                var2 = {};
                var6 = _closure1_slot9;
                var6 = var6.PREMIUM_PROFILE_TRY_IT_OUT;
                var2['type'] = var6;
                var6 = {};
                var7 = _closure1_slot8;
                var7 = var7.USER_SETTINGS;
                var6['page'] = var7;
                var2['location'] = var6;
                var6 = _closure2_slot0;
                var2['location_stack'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1 = var11.bind(var14)(var1, var10);
            var1 = null;
            var10 = var1 == var13;
            if(var10) { _fun0001_ip = 488; continue _fun0001 }
 309:
            if(var9) { _fun0001_ip = 431; continue _fun0001 }
 312:
            if(!(var6 === var4)) { _fun0001_ip = 327; continue _fun0001 }
 316:
            var4 = var3.size;
            var3 = 0;
            if(!(!(var4 > var3))) { _fun0001_ip = 431; continue _fun0001 }
 327:
            var4 = _closure1_slot10;
            var3 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = var14[var2];
            var2 = var3.bind(var6)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var5;
            var9 = _closure1_slot4;
            var5 = {};
            var10 = var8.container;
            var5['style'] = var10;
            var11 = _closure1_slot1;
            var10 = 16;
            var10 = var14[var10];
            var11 = var11.bind(var6)(var10);
            var10 = {};
            var10['currentUser'] = var13;
            var10['isTryItOut'] = var12;
            var10 = var4.bind(var6)(var11, var10);
            var5['children'] = var10;
            var5 = var4.bind(var6)(var9, var5);
            var2['children'] = var5;
            var2 = var4.bind(var6)(var3, var2);
            _fun0001_ip = 485; continue _fun0001;
 431:
            var5 = _closure1_slot10;
            var4 = _closure1_slot4;
            var3 = {};
            var8 = var8.activityIndicator;
            var3['style'] = var8;
            var8 = _closure1_slot5;
            var7 = {'animating': true, 'size': 'large'};
            var7 = var5.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 485:
            var1 = var2;
 488:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();