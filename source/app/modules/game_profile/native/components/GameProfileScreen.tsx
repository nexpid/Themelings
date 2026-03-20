// app/modules/game_profile/native/components/GameProfileScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function GetButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.onPress;
            var6 = var1.animatedStyle;
            var7 = var1.active;
            var4 = _closure1_slot7;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.View;
            var1 = {};
            var1['style'] = var6;
            var6 = 'none';
            if(!var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = 'auto';
case 2:
            var1['pointerEvents'] = var6;
            var7 = _closure1_slot7;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 7;
            var5 = var12[var5];
            var5 = var11.bind(var3)(var5);
            var6 = var5.Button;
            var5 = {'variant': 'primary', 'size': 'sm'};
            var8 = 8;
            var10 = var12[var8];
            var10 = var11.bind(var3)(var10);
            var14 = var10.intl;
            var13 = var14.string;
            var10 = var12[var8];
            var10 = var11.bind(var3)(var10);
            var10 = var10.t;
            var10 = var10.l8JeHg;
            var10 = var13.bind(var14)(var10);
            var5['text'] = var10;
            var5['onPress'] = var9;
            var9 = var12[var8];
            var9 = var11.bind(var3)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var3)(var8);
            var8 = var8.t;
            var8 = var8.Vsxqmz;
            var8 = var9.bind(var10)(var8);
            var5['accessibilityLabel'] = var8;
            var5 = var7.bind(var3)(var6, var5);
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function HeaderTitle(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            if(!var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var10 = _closure1_slot7;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 9;
            var6 = var13[var6];
            var8 = var8.bind(var4)(var6);
            var6 = {};
            var6['source'] = var12;
            var11 = var11.applicationIcon;
            var6['style'] = var11;
            var7 = var10.bind(var4)(var8, var6);
case 4:
            var6 = new Array(2);
            var6[0] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 10;
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
    var _closure1_slot15 = var1;
    var1 = function GameProfileContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var23 = var1.applicationId;
            var _closure2_slot0 = var23;
            var16 = var1.source;
            var _closure2_slot1 = var16;
            var3 = var1.sourceUserId;
            var _closure2_slot2 = var3;
            var13 = var1.closeModal;
            var5 = undefined;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var _closure2_slot16 = var5;
            var _closure2_slot17 = var5;
            var _closure2_slot18 = var5;
            var _closure2_slot19 = var5;
            var _closure2_slot20 = var5;
            var _closure2_slot21 = var5;
            var _closure2_slot22 = var5;
            var1 = _closure1_slot9;
            var7 = var1.bind(var5)();
            var8 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 11;
            var2 = var1[var2];
            var4 = var8.bind(var5)(var2);
            var2 = 12;
            var2 = var1[var2];
            var2 = var8.bind(var5)(var2);
            var2 = var2.openURL;
            var21 = var4.bind(var5)(var2);
            var _closure2_slot3 = var21;
            var2 = _closure1_slot0;
            var4 = 13;
            var4 = var1[var4];
            var8 = var2.bind(var5)(var4);
            var4 = var8.useNavigation;
            var27 = var4.bind(var8)();
            var _closure2_slot4 = var27;
            var9 = _closure1_slot4;
            var8 = var9.useState;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.generateViewId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var8.bind(var9)(var4);
            var4 = _closure1_slot3;
            var24 = 1;
            var4 = var4.bind(var5)(var8, var24);
            var31 = 0;
            var17 = var4[var31];
            var _closure2_slot5 = var17;
            var4 = 15;
            var4 = var1[var4];
            var8 = var2.bind(var5)(var4);
            var4 = var8.useGetOrFetchApplication;
            var20 = var4.bind(var8)(var23);
            var _closure2_slot6 = var20;
            var9 = 16;
            var1 = var1[var9];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useGameWithSupplementalData;
            var1 = var1.bind(var2)(var23);
            var19 = var1.data;
            var1 = var1.isLoading;
            var _closure2_slot7 = var1;
            var4 = _closure1_slot4;
            var2 = var4.useState;
            var18 = null;
            var4 = var2.bind(var4)(var18);
            var2 = _closure1_slot3;
            var30 = 2;
            var2 = var2.bind(var5)(var4, var30);
            var15 = var2[var31];
            var _closure2_slot8 = var15;
            var14 = var2[var24];
            var2 = var18 == var19;
            var22 = undefined;
            if(var2) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var22 = var19.name;
case 6:
            if(!(var18 == var22)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var4 = var18 == var20;
            var2 = undefined;
            if(var4) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var2 = var20.name;
case 10:
            var22 = var2;
case 8:
            _closure2_slot9 = var22;
            var8 = _closure1_slot4;
            var4 = var8.useMemo;
            var2 = new Array(2);
            var2[0] = var20;
            var2[1] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var1 = _closure2_slot7;
case 12:
                    return var1;
                }
            };
            var2 = var4.bind(var8)(var1, var2);
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            var1 = 6;
            var4 = var28[var1];
            var8 = var25.bind(var5)(var4);
            var4 = var8.useSharedValue;
            var12 = var4.bind(var8)(var31);
            _closure2_slot10 = var12;
            var4 = var28[var1];
            var11 = var25.bind(var5)(var4);
            var8 = var11.useAnimatedScrollHandler;
            var4 = function G(arg1) {
                var3 = _closure2_slot10;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.contentOffset;
                var1 = var1.y;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var26 = {};
            var26['scrollY'] = var12;
            var4['__closure'] = var26;
            var26 = 6666373751314.0;
            var4['__workletHash'] = var26;
            var26 = _closure1_slot10;
            var4['__initData'] = var26;
            var4 = var8.bind(var11)(var4);
            var8 = 17;
            var8 = var28[var8];
            var26 = var25.bind(var5)(var8);
            var11 = var26.useCanSeeGameProfileMobileStoreLinks;
            var8 = 'GameProfileContent';
            var11 = var11.bind(var26)(var8);
            _closure2_slot11 = var11;
            var8 = var28[var1];
            var29 = var25.bind(var5)(var8);
            var26 = var29.useSharedValue;
            var8 = inf;
            var29 = var26.bind(var29)(var8);
            _closure2_slot12 = var29;
            var32 = _closure1_slot4;
            var26 = var32.useState;
            var8 = false;
            var26 = var26.bind(var32)(var8);
            var8 = _closure1_slot3;
            var8 = var8.bind(var5)(var26, var30);
            var26 = var8[var31];
            _closure2_slot13 = var26;
            var30 = var8[var24];
            _closure2_slot14 = var30;
            var8 = var28[var1];
            var24 = var25.bind(var5)(var8);
            var8 = var24.useSharedValue;
            var24 = var8.bind(var24)(var31);
            _closure2_slot15 = var24;
            var8 = var28[var1];
            var32 = var25.bind(var5)(var8);
            var31 = var32.useAnimatedStyle;
            var8 = function I() {
                var1 = {};
                var4 = _closure2_slot15;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1['opacity'] = var3;
                var3 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 6;
                var5 = var5[var4];
                var4 = undefined;
                var7 = var6.bind(var4)(var5);
                var6 = var7.interpolate;
                var4 = _closure2_slot15;
                var2 = var4.get;
                var5 = var2.bind(var4)();
                var4 = [0, 1];
                var2 = [16, 0];
                var2 = var6.bind(var7)(var5, var4, var2);
                var3['translateX'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var33 = {};
            var33['getButtonProgress'] = var24;
            var34 = var28[var1];
            var34 = var25.bind(var5)(var34);
            var34 = var34.interpolate;
            var33['interpolate'] = var34;
            var8['__closure'] = var33;
            var33 = 4176468087958.0;
            var8['__workletHash'] = var33;
            var33 = _closure1_slot11;
            var8['__initData'] = var33;
            var8 = var31.bind(var32)(var8);
            _closure2_slot16 = var8;
            var33 = _closure1_slot4;
            var32 = var33.useEffect;
            var31 = new Array(2);
            var31[0] = var26;
            var31[1] = var24;
            var24 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure2_slot15;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 18;
                    var5 = var5[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.withTiming;
                    var2 = _closure2_slot13;
                    var5 = 0;
                    if(!var2) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                    var5 = 1;
case 14:
                    var2 = {};
                    var8 = 250;
                    var2['duration'] = var8;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var24 = var32.bind(var33)(var24, var31);
            var24 = 19;
            var24 = var28[var24];
            var28 = var25.bind(var5)(var24);
            var25 = var28.useGameProfileStoreWebsites;
            var31 = var18 == var19;
            var24 = undefined;
            if(var31) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var24 = var19.supplementalData;
case 16:
            var31 = var25.bind(var28)(var24);
            _closure2_slot17 = var31;
            var28 = _closure1_slot4;
            var25 = var28.useMemo;
            var24 = new Array(2);
            var24[0] = var31;
            var24[1] = var11;
            var11 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot11;
                    if(var1) { _fun0006_ip = 13; continue _fun0006 }
case 18:
                    var1 = new Array(0);
                    _fun0006_ip = 19; continue _fun0006;
case 13:
                    var4 = _closure2_slot17;
                    var3 = var4.map;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 20;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.filter;
                    var2 = function(arg1) {
                        var2 = null;
                        var1 = arg1;
                        var1 = var2 != var1;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
case 19:
                    return var1;
                }
            };
            var11 = var25.bind(var28)(var11, var24);
            _closure2_slot18 = var11;
            var25 = _closure1_slot4;
            var24 = var25.useRef;
            var24 = var24.bind(var25)(var5);
            _closure2_slot19 = var24;
            var25 = _closure1_slot4;
            var24 = var25.useRef;
            var24 = var24.bind(var25)(var18);
            _closure2_slot20 = var24;
            var28 = _closure1_slot4;
            var25 = var28.useEffect;
            var24 = new Array(1);
            var24[0] = var22;
            var22 = function() {
                var2 = _closure2_slot19;
                var1 = _closure2_slot9;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var22 = var25.bind(var28)(var22, var24);
            var25 = _closure1_slot4;
            var24 = var25.useEffect;
            var22 = new Array(1);
            var22[0] = var15;
            var15 = function() {
                var2 = _closure2_slot20;
                var1 = _closure2_slot8;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var15 = var24.bind(var25)(var15, var22);
            var25 = _closure1_slot4;
            var24 = var25.useCallback;
            var22 = new Array(3);
            var22[0] = var23;
            var22[1] = var17;
            var22[2] = var16;
            var15 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackGameProfileAction;
                    var2 = {};
                    var6 = _closure2_slot19;
                    var7 = var6.current;
                    var8 = null;
                    var9 = var8 != var7;
                    var6 = '';
                    if(!var9) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                    var6 = var7;
case 20:
                    var2['gameName'] = var6;
                    var6 = _closure2_slot0;
                    var2['applicationId'] = var6;
                    var6 = arg1;
                    var2['action'] = var6;
                    var6 = _closure2_slot5;
                    var2['viewId'] = var6;
                    var6 = _closure2_slot20;
                    var7 = var6.current;
                    var9 = var8 == var7;
                    var6 = undefined;
                    if(var9) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                    var7 = var7.guild;
                    var8 = var8 == var7;
                    var6 = undefined;
                    if(var8) { _fun0007_ip = 22; continue _fun0007 }
case 24:
                    var6 = var7.id;
case 22:
                    var2['officialGuildId'] = var6;
                    var5 = _closure2_slot1;
                    var2['source'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var15 = var24.bind(var25)(var15, var22);
            _closure2_slot21 = var15;
            var32 = _closure1_slot0;
            var31 = _closure1_slot2;
            var22 = var31[var1];
            var28 = var32.bind(var5)(var22);
            var25 = var28.useAnimatedReaction;
            var24 = function Z() {
                var3 = _closure2_slot10;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var3 = _closure2_slot12;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var1 = var2 > var1;
                return var1;
            };
            var22 = {};
            var22['scrollY'] = var12;
            var22['storeLinksSectionBottomY'] = var29;
            var24['__closure'] = var22;
            var22 = 15031268567256.0;
            var24['__workletHash'] = var22;
            var22 = _closure1_slot12;
            var24['__initData'] = var22;
            var22 = function Q(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0008_ip = 25; continue _fun0008 }
case 18:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot14;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var29 = {};
            var31 = var31[var1];
            var31 = var32.bind(var5)(var31);
            var31 = var31.runOnJS;
            var29['runOnJS'] = var31;
            var29['setShowGetButton'] = var30;
            var22['__closure'] = var29;
            var29 = 6903134477924.0;
            var22['__workletHash'] = var29;
            var29 = _closure1_slot13;
            var22['__initData'] = var29;
            var22 = var25.bind(var28)(var24, var22);
            var25 = _closure1_slot4;
            var24 = var25.useCallback;
            var22 = new Array(3);
            var22[0] = var11;
            var22[1] = var15;
            var22[2] = var21;
            var21 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot18;
                    var1 = var1.length;
                    var5 = 1;
                    if(!(var5 !== var1)) { _fun0009_ip = 26; continue _fun0009 }
case 27:
                    var1 = _closure2_slot18;
                    var1 = var1.length;
                    if(!(var1 > var5)) { _fun0009_ip = 28; continue _fun0009 }
case 29:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 21;
                    var1 = var10[var1];
                    var9 = undefined;
                    var4 = var11.bind(var9)(var1);
                    var3 = var4.showActionSheet;
                    var1 = {};
                    var6 = 22;
                    var8 = var10[var6];
                    var8 = var11.bind(var9)(var8);
                    var8 = var8.ACTION_SHEET_KEY;
                    var1['key'] = var8;
                    var8 = _closure1_slot7;
                    var7 = _closure1_slot1;
                    var6 = var10[var6];
                    var7 = var7.bind(var9)(var6);
                    var6 = {};
                    var10 = _closure2_slot19;
                    var11 = var10.current;
                    var10 = null;
                    var12 = var10 != var11;
                    var10 = '';
                    if(!var12) { _fun0009_ip = 30; continue _fun0009 }
case 31:
                    var10 = var11;
case 30:
                    var6['gameName'] = var10;
                    var10 = _closure2_slot18;
                    var6['websiteButtons'] = var10;
                    var10 = _closure2_slot21;
                    var6['trackAction'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var1['content'] = var6;
                    var1 = var3.bind(var4)(var1);
                    _fun0009_ip = 28; continue _fun0009;
case 26:
                    var4 = _closure1_slot3;
                    var1 = _closure2_slot18;
                    var3 = undefined;
                    var4 = var4.bind(var3)(var1, var5);
                    var1 = 0;
                    var1 = var4[var1];
                    var5 = _closure2_slot21;
                    var4 = var1.action;
                    var4 = var5.bind(var3)(var4);
                    var2 = _closure2_slot3;
                    var1 = var1.url;
                    var1 = var2.bind(var3)(var1);
case 28:
                    var1 = undefined;
                    return var1;
                }
            };
            var25 = var24.bind(var25)(var21, var22);
            _closure2_slot22 = var25;
            var24 = _closure1_slot4;
            var22 = var24.useLayoutEffect;
            var21 = new Array(6);
            var21[0] = var27;
            var21[1] = var20;
            var21[2] = var26;
            var26 = var11.length;
            var21[3] = var26;
            var21[4] = var25;
            var21[5] = var8;
            var8 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0010_ip = 32; continue _fun0010 }
case 33:
                    var3 = _closure2_slot4;
                    var2 = var3.setOptions;
                    var1 = {};
                    var6 = function headerTitle(arg1) {
                        var5 = _closure1_slot7;
                        var4 = _closure1_slot15;
                        var3 = {};
                        var1 = _closure2_slot6;
                        var3['application'] = var1;
                        var7 = arg1;
                        var8 = var3;
                        var2 = copyDataProperties(var8, var7);
                        var2 = var1.id;
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4, var3, var2);
                        return var1;
                    };
                    var1['headerTitle'] = var6;
                    var4 = _closure2_slot18;
                    var6 = var4.length;
                    var4 = 0;
                    var6 = var6 > var4;
                    var4 = undefined;
                    if(!var6) { _fun0010_ip = 34; continue _fun0010 }
case 35:
                    var4 = function() {
                        var4 = _closure1_slot7;
                        var3 = _closure1_slot14;
                        var2 = {};
                        var5 = _closure2_slot22;
                        var2['onPress'] = var5;
                        var5 = _closure2_slot16;
                        var2['animatedStyle'] = var5;
                        var1 = _closure2_slot13;
                        var2['active'] = var1;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
case 34:
                    var1['headerRight'] = var4;
                    var1 = var2.bind(var3)(var1);
case 32:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var22.bind(var24)(var8, var21);
            var24 = _closure1_slot4;
            var22 = var24.useEffect;
            var21 = new Array(4);
            var21[0] = var23;
            var21[1] = var16;
            var21[2] = var3;
            var21[3] = var17;
            var8 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 14;
                    var2 = var1[var7];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackGameProfileOpen;
                    var2 = {};
                    var8 = _closure2_slot1;
                    var2['source'] = var8;
                    var8 = _closure2_slot5;
                    var2['viewId'] = var8;
                    var8 = _closure2_slot0;
                    var2['applicationId'] = var8;
                    var8 = _closure2_slot19;
                    var9 = var8.current;
                    var8 = null;
                    var10 = var8 != var9;
                    var8 = '';
                    if(!var10) { _fun0011_ip = 36; continue _fun0011 }
case 37:
                    var8 = var9;
case 36:
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
            var8 = var22.bind(var24)(var8, var21);
            var22 = _closure1_slot4;
            var21 = var22.useEffect;
            var8 = new Array(4);
            var8[0] = var23;
            var8[1] = var16;
            var8[2] = var3;
            var8[3] = var17;
            var3 = function() {
                var1 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.trackGameProfileClose;
                        var2 = {};
                        var6 = _closure2_slot5;
                        var2['viewId'] = var6;
                        var6 = _closure2_slot0;
                        var2['applicationId'] = var6;
                        var6 = _closure2_slot19;
                        var8 = var6.current;
                        var7 = null;
                        var9 = var7 != var8;
                        var6 = '';
                        if(!var9) { _fun0012_ip = 38; continue _fun0012 }
case 39:
                        var6 = var8;
case 38:
                        var2['gameName'] = var6;
                        var6 = new Array(0);
                        var2['playedFriendIds'] = var6;
                        var6 = new Array(0);
                        var2['playedFriendsData'] = var6;
                        var6 = new Array(0);
                        var2['similarGames'] = var6;
                        var5 = _closure2_slot20;
                        var6 = var5.current;
                        var8 = var7 == var6;
                        var5 = undefined;
                        if(var8) { _fun0012_ip = 40; continue _fun0012 }
case 41:
                        var6 = var6.guild;
                        var7 = var7 == var6;
                        var5 = undefined;
                        if(var7) { _fun0012_ip = 40; continue _fun0012 }
case 42:
                        var5 = var6.id;
case 40:
                        var2['officialGuildId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var21.bind(var22)(var3, var8);
            if(var2) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            if(!(var18 != var20)) { _fun0003_ip = 43; continue _fun0003 }
case 45:
            if(!(var18 != var19)) { _fun0003_ip = 43; continue _fun0003 }
case 46:
            var3 = _closure1_slot7;
            var8 = _closure1_slot1;
            var21 = _closure1_slot2;
            var1 = var21[var1];
            var1 = var8.bind(var5)(var1);
            var2 = var1.ScrollView;
            var1 = {};
            var22 = var7.scrollView;
            var1['style'] = var22;
            var1['scrollEventThrottle'] = var9;
            var1['onScroll'] = var4;
            var9 = _closure1_slot7;
            var4 = 23;
            var4 = var21[var4];
            var8 = var8.bind(var5)(var4);
            var4 = {};
            var4['application'] = var20;
            var20 = var18 == var19;
            var18 = undefined;
            if(var20) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var18 = var19.supplementalData;
case 47:
            var4['supplementalGameData'] = var18;
            var4['viewId'] = var17;
            var4['source'] = var16;
            var4['trackAction'] = var15;
            var4['onOfficialGuildInviteResolved'] = var14;
            var4['closeModal'] = var13;
            var4['scrollY'] = var12;
            var4['websiteButtons'] = var11;
            var10 = function onStoreLinksMeasured(arg1) {
                var3 = _closure2_slot12;
                var2 = var3.set;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var4['onStoreLinksMeasured'] = var10;
            var4 = var9.bind(var5)(var8, var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0003_ip = 49; continue _fun0003;
case 43:
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
case 49:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var4 = {};
    var7 = 'function GameProfileScreenTsx2(){const{getButtonProgress,interpolate}=this.__closure;return{opacity:getButtonProgress.get(),transform:[{translateX:interpolate(getButtonProgress.get(),[0,1],[16,0])}]};}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function GameProfileScreenTsx3(){const{scrollY,storeLinksSectionBottomY}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get();}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function GameProfileScreenTsx4(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = 27;
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
            var1 = 24;
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
        var5 = _closure1_slot4;
        var4 = var5.useMemo;
        var3 = new Array(1);
        var3[0] = var7;
        var2 = function() {
            var1 = {};
            var3 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 25;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.getHeaderBackButton;
            var2 = _closure2_slot1;
            var2 = var4.bind(var5)(var2);
            var3['headerLeft'] = var2;
            var2 = function render(arg1) {
                var4 = _closure1_slot7;
                var3 = _closure1_slot16;
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
        var1 = 26;
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