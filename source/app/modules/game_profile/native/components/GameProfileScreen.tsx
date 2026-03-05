// app/modules/game_profile/native/components/GameProfileScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function HeaderTitle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var9 = var3.application;
            var7 = null;
            var2 = Object.create(var7);
            var1 = 0;
            var2['application'] = var1;
            var16 = {};
            var15 = var3;
            var14 = var2;
            var6 = copyDataProperties(var16, var15, var14);
            var1 = _closure1_slot9;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var2 = var9.getIconSource;
            var1 = 32;
            var12 = var2.bind(var9)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var16 = var1;
            var15 = var6;
            var8 = copyDataProperties(var16, var15);
            var6 = var6.style;
            var8 = new Array(2);
            var8[0] = var6;
            var6 = var11.navigationTitleContainer;
            var8[1] = var6;
            var6 = 'style';
            var1[var6] = var8;
            var6 = var7 != var12;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = _closure1_slot7;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 6;
            var6 = var13[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var6['source'] = var12;
            var11 = var11.applicationIcon;
            var6['style'] = var11;
            var7 = var10.bind(var4)(var8, var6);
case 2:
            var6 = new Array(2);
            var6[0] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 7;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {'variant': 'heading-md/semibold', 'lineClamp': 1, 'color': 'mobile-text-heading-primary'};
            var9 = var9.name;
            var5['children'] = var9;
            var5 = var8.bind(var4)(var7, var5);
            var6[1] = var5;
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function GameProfileContent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var19 = var1.applicationId;
            var _closure2_slot0 = var19;
            var14 = var1.source;
            var _closure2_slot1 = var14;
            var8 = var1.sourceUserId;
            var _closure2_slot2 = var8;
            var11 = var1.closeModal;
            var5 = undefined;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var1 = _closure1_slot9;
            var7 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 8;
            var1 = var10[var1];
            var4 = var2.bind(var5)(var1);
            var1 = var4.useNavigation;
            var9 = var1.bind(var4)();
            var _closure2_slot3 = var9;
            var12 = _closure1_slot4;
            var4 = var12.useState;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.generateViewId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var4.bind(var12)(var1);
            var1 = _closure1_slot3;
            var4 = 1;
            var1 = var1.bind(var5)(var12, var4);
            var23 = 0;
            var15 = var1[var23];
            var _closure2_slot4 = var15;
            var1 = 10;
            var1 = var10[var1];
            var12 = var2.bind(var5)(var1);
            var1 = var12.useGetOrFetchApplication;
            var18 = var1.bind(var12)(var19);
            var _closure2_slot5 = var18;
            var1 = 11;
            var1 = var10[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useGameWithSupplementalData;
            var1 = var1.bind(var2)(var19);
            var17 = var1.data;
            var1 = var1.isLoading;
            var _closure2_slot6 = var1;
            var10 = _closure1_slot4;
            var2 = var10.useState;
            var16 = null;
            var12 = var2.bind(var10)(var16);
            var10 = _closure1_slot3;
            var2 = 2;
            var2 = var10.bind(var5)(var12, var2);
            var13 = var2[var23];
            var _closure2_slot7 = var13;
            var12 = var2[var4];
            var2 = var16 == var17;
            var20 = undefined;
            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var20 = var17.name;
case 4:
            if(!(var16 == var20)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var16 == var18;
            var2 = undefined;
            if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var18.name;
case 8:
            var20 = var2;
case 6:
            _closure2_slot8 = var20;
            var10 = _closure1_slot4;
            var4 = var10.useMemo;
            var2 = new Array(2);
            var2[0] = var18;
            var2[1] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = _closure2_slot6;
case 10:
                    return var1;
                }
            };
            var2 = var4.bind(var10)(var1, var2);
            var21 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 12;
            var10 = var4[var1];
            var22 = var21.bind(var5)(var10);
            var10 = var22.useSharedValue;
            var10 = var10.bind(var22)(var23);
            _closure2_slot9 = var10;
            var4 = var4[var1];
            var22 = var21.bind(var5)(var4);
            var21 = var22.useAnimatedScrollHandler;
            var4 = function h(arg1) {
                var3 = _closure2_slot9;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.contentOffset;
                var1 = var1.y;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var23 = {};
            var23['scrollY'] = var10;
            var4['__closure'] = var23;
            var23 = 6666373751314.0;
            var4['__workletHash'] = var23;
            var23 = _closure1_slot10;
            var4['__initData'] = var23;
            var4 = var21.bind(var22)(var4);
            var22 = _closure1_slot4;
            var21 = var22.useRef;
            var21 = var21.bind(var22)(var5);
            _closure2_slot10 = var21;
            var22 = _closure1_slot4;
            var21 = var22.useRef;
            var21 = var21.bind(var22)(var16);
            _closure2_slot11 = var21;
            var23 = _closure1_slot4;
            var22 = var23.useEffect;
            var21 = new Array(1);
            var21[0] = var20;
            var20 = function() {
                var2 = _closure2_slot10;
                var1 = _closure2_slot8;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var20 = var22.bind(var23)(var20, var21);
            var22 = _closure1_slot4;
            var21 = var22.useEffect;
            var20 = new Array(1);
            var20[0] = var13;
            var13 = function() {
                var2 = _closure2_slot11;
                var1 = _closure2_slot7;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var13 = var21.bind(var22)(var13, var20);
            var21 = _closure1_slot4;
            var20 = var21.useLayoutEffect;
            var13 = new Array(2);
            var13[0] = var9;
            var13[1] = var18;
            var9 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var3 = _closure2_slot3;
                    var2 = var3.setOptions;
                    var1 = {};
                    var4 = function headerTitle(arg1) {
                        var5 = _closure1_slot7;
                        var4 = _closure1_slot11;
                        var3 = {};
                        var1 = _closure2_slot5;
                        var3['application'] = var1;
                        var7 = arg1;
                        var8 = var3;
                        var2 = copyDataProperties(var8, var7);
                        var2 = var1.id;
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4, var3, var2);
                        return var1;
                    };
                    var1['headerTitle'] = var4;
                    var1 = var2.bind(var3)(var1);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var20.bind(var21)(var9, var13);
            var21 = _closure1_slot4;
            var20 = var21.useEffect;
            var13 = new Array(4);
            var13[0] = var19;
            var13[1] = var14;
            var13[2] = var8;
            var13[3] = var15;
            var9 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 9;
                    var2 = var1[var7];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackGameProfileOpen;
                    var2 = {};
                    var8 = _closure2_slot1;
                    var2['source'] = var8;
                    var8 = _closure2_slot4;
                    var2['viewId'] = var8;
                    var8 = _closure2_slot0;
                    var2['applicationId'] = var8;
                    var8 = _closure2_slot10;
                    var9 = var8.current;
                    var8 = null;
                    var10 = var8 != var9;
                    var8 = '';
                    if(!var10) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var8 = var9;
case 14:
                    var2['gameName'] = var8;
                    var6 = _closure2_slot2;
                    var2['authorId'] = var6;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.GameProfileTypes;
                    var5 = var5.FullProfile;
                    var2['profileType'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var9 = var20.bind(var21)(var9, var13);
            var20 = _closure1_slot4;
            var13 = var20.useEffect;
            var9 = new Array(4);
            var9[0] = var19;
            var9[1] = var14;
            var9[2] = var8;
            var9[3] = var15;
            var8 = function() {
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.trackGameProfileClose;
                        var2 = {};
                        var6 = _closure2_slot4;
                        var2['viewId'] = var6;
                        var6 = _closure2_slot0;
                        var2['applicationId'] = var6;
                        var6 = _closure2_slot10;
                        var8 = var6.current;
                        var7 = null;
                        var9 = var7 != var8;
                        var6 = '';
                        if(!var9) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                        var6 = var8;
case 16:
                        var2['gameName'] = var6;
                        var6 = new Array(0);
                        var2['playedFriendIds'] = var6;
                        var6 = new Array(0);
                        var2['playedFriendsData'] = var6;
                        var6 = new Array(0);
                        var2['similarGames'] = var6;
                        var5 = _closure2_slot11;
                        var6 = var5.current;
                        var8 = var7 == var6;
                        var5 = undefined;
                        if(var8) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                        var6 = var6.guild;
                        var7 = var7 == var6;
                        var5 = undefined;
                        if(var7) { _fun0006_ip = 18; continue _fun0006 }
case 20:
                        var5 = var6.id;
case 18:
                        var2['officialGuildId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                return var1;
            };
            var8 = var13.bind(var20)(var8, var9);
            var13 = _closure1_slot4;
            var9 = var13.useCallback;
            var8 = new Array(3);
            var8[0] = var19;
            var8[1] = var15;
            var8[2] = var14;
            var3 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackGameProfileAction;
                    var2 = {};
                    var6 = _closure2_slot10;
                    var7 = var6.current;
                    var8 = null;
                    var9 = var8 != var7;
                    var6 = '';
                    if(!var9) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                    var6 = var7;
case 21:
                    var2['gameName'] = var6;
                    var6 = _closure2_slot0;
                    var2['applicationId'] = var6;
                    var6 = arg1;
                    var2['action'] = var6;
                    var6 = _closure2_slot4;
                    var2['viewId'] = var6;
                    var6 = _closure2_slot11;
                    var7 = var6.current;
                    var9 = var8 == var7;
                    var6 = undefined;
                    if(var9) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                    var7 = var7.guild;
                    var8 = var8 == var7;
                    var6 = undefined;
                    if(var8) { _fun0007_ip = 23; continue _fun0007 }
case 25:
                    var6 = var7.id;
case 23:
                    var2['officialGuildId'] = var6;
                    var5 = _closure2_slot1;
                    var2['source'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var13 = var9.bind(var13)(var3, var8);
            if(var2) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            if(!(var16 != var18)) { _fun0002_ip = 26; continue _fun0002 }
case 28:
            if(!(var16 != var17)) { _fun0002_ip = 26; continue _fun0002 }
case 29:
            var3 = _closure1_slot7;
            var8 = _closure1_slot1;
            var19 = _closure1_slot2;
            var1 = var19[var1];
            var1 = var8.bind(var5)(var1);
            var2 = var1.ScrollView;
            var1 = {};
            var9 = var7.scrollView;
            var1['style'] = var9;
            var9 = 16;
            var1['scrollEventThrottle'] = var9;
            var1['onScroll'] = var4;
            var9 = _closure1_slot7;
            var4 = 13;
            var4 = var19[var4];
            var8 = var8.bind(var5)(var4);
            var4 = {};
            var4['application'] = var18;
            var18 = var16 == var17;
            var16 = undefined;
            if(var18) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var16 = var17.supplementalData;
case 30:
            var4['supplementalGameData'] = var16;
            var4['viewId'] = var15;
            var4['source'] = var14;
            var4['trackAction'] = var13;
            var4['onOfficialGuildInviteResolved'] = var12;
            var4['closeModal'] = var11;
            var4['scrollY'] = var10;
            var4 = var9.bind(var5)(var8, var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0002_ip = 32; continue _fun0002;
case 26:
            var4 = _closure1_slot7;
            var3 = _closure1_slot5;
            var2 = {};
            var7 = var7.loadingContainer;
            var2['style'] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot6;
            var6 = {'animating': true, 'size': 'large'};
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 32:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.ActivityIndicator;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center'};
    var11 = 5;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var13;
    var4['loadingContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
    var4['navigationTitleContainer'] = var9;
    var9 = {'width': 30, 'height': 30, 'borderRadius': null, 'overflow': 'hidden'};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var9['borderRadius'] = var11;
    var4['applicationIcon'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['scrollView'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function GameProfileScreenTsx1(e){const{scrollY}=this.__closure;scrollY.set(e.contentOffset.y);}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/native/components/GameProfileScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameProfileScreen(arg1) {
        var1 = arg1;
        var10 = var1.applicationId;
        var _closure2_slot0 = var10;
        var9 = var1.source;
        var8 = var1.sourceUserId;
        var6 = _closure1_slot4;
        var5 = var6.useCallback;
        var4 = new Array(1);
        var4[0] = var10;
        var3 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.popWithKey;
            var5 = _closure2_slot0;
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var1 = 'game-profile-';
            var1 = var4.bind(var1)(var5);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var5.bind(var6)(var3, var4);
        var _closure2_slot1 = var7;
        var6 = _closure1_slot4;
        var5 = var6.useCallback;
        var4 = new Array(1);
        var4[0] = var10;
        var3 = function() {
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 15;
            var3 = var7[var1];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var5 = var6.openLazy;
            var3 = _closure1_slot0;
            var2 = 17;
            var2 = var7[var2];
            var8 = var3.bind(var1)(var2);
            var2 = 16;
            var4 = var7[var2];
            var2 = var7.paths;
            var4 = var8.bind(var1)(var4, var2);
            var2 = 18;
            var2 = var7[var2];
            var2 = var3.bind(var1)(var2);
            var3 = var2.ACTION_SHEET_KEY;
            var2 = {};
            var7 = _closure2_slot0;
            var2['applicationId'] = var7;
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        };
        var6 = var5.bind(var6)(var3, var4);
        var _closure2_slot2 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            var1 = {};
            var3 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 19;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.getHeaderBackButton;
            var4 = _closure2_slot1;
            var4 = var5.bind(var6)(var4);
            var3['headerLeft'] = var4;
            var4 = function headerRight() {
                var4 = _closure1_slot7;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 20;
                var1 = var9[var1];
                var3 = undefined;
                var1 = var8.bind(var3)(var1);
                var2 = var1.HeaderActionButton;
                var1 = {};
                var7 = _closure1_slot7;
                var5 = 21;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var6 = var5.MoreHorizontalIcon;
                var5 = {};
                var11 = 'md';
                var5['size'] = var11;
                var11 = _closure1_slot1;
                var10 = 5;
                var10 = var9[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.colors;
                var10 = var10.MOBILE_TEXT_HEADING_PRIMARY;
                var5['color'] = var10;
                var5 = var7.bind(var3)(var6, var5);
                var1['icon'] = var5;
                var5 = 22;
                var6 = var9[var5];
                var6 = var8.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.PdRCRg;
                var5 = var6.bind(var7)(var5);
                var1['accessibilityLabel'] = var5;
                var5 = _closure2_slot2;
                var1['onPress'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var3['headerRight'] = var4;
            var2 = function render(arg1) {
                var4 = _closure1_slot7;
                var3 = _closure1_slot12;
                var2 = {};
                var5 = arg1;
                var6 = var2;
                var1 = copyDataProperties(var6, var5);
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var3['render'] = var2;
            var2 = 'GAME_PROFILE';
            var1[var2] = var3;
            return var1;
        };
        var5 = var4.bind(var5)(var2, var3);
        var4 = _closure1_slot7;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 23;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var1['screens'] = var5;
        var6 = {};
        var5 = 'GAME_PROFILE';
        var6['name'] = var5;
        var5 = {};
        var5['applicationId'] = var10;
        var5['source'] = var9;
        var5['sourceUserId'] = var8;
        var5['closeModal'] = var7;
        var6['params'] = var5;
        var5 = new Array(1);
        var5[0] = var6;
        var1['initialRouteStack'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();