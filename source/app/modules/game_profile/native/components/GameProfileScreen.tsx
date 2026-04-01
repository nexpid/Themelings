// app/modules/game_profile/native/components/GameProfileScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var _closure1_slot13 = var1;
    var1 = function GameProfileContent(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var23 = var1.applicationId;
            var _closure2_slot0 = var23;
            var16 = var1.source;
            var _closure2_slot1 = var16;
            var3 = var1.sourceUserId;
            var _closure2_slot2 = var3;
            var13 = var1.closeModal;
            var _closure2_slot3 = var13;
            var5 = undefined;
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
            var _closure2_slot23 = var5;
            var _closure2_slot24 = var5;
            var1 = _closure1_slot8;
            var7 = var1.bind(var5)();
            var8 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var2 = var8.bind(var5)(var1);
            var1 = 10;
            var1 = var4[var1];
            var1 = var8.bind(var5)(var1);
            var1 = var1.openURL;
            var22 = var2.bind(var5)(var1);
            var _closure2_slot4 = var22;
            var2 = _closure1_slot0;
            var1 = 11;
            var1 = var4[var1];
            var8 = var2.bind(var5)(var1);
            var1 = var8.useNavigation;
            var8 = var1.bind(var8)();
            var _closure2_slot5 = var8;
            var11 = _closure1_slot4;
            var9 = var11.useState;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.generateViewId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var9.bind(var11)(var1);
            var1 = _closure1_slot3;
            var27 = 1;
            var1 = var1.bind(var5)(var9, var27);
            var28 = 0;
            var17 = var1[var28];
            var _closure2_slot6 = var17;
            var1 = 13;
            var1 = var4[var1];
            var9 = var2.bind(var5)(var1);
            var1 = var9.useGetOrFetchApplication;
            var21 = var1.bind(var9)(var23);
            var _closure2_slot7 = var21;
            var1 = 14;
            var1 = var4[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.useGameWithSupplementalData;
            var1 = var1.bind(var2)(var23);
            var20 = var1.data;
            var1 = var1.isLoading;
            var _closure2_slot8 = var1;
            var4 = _closure1_slot4;
            var2 = var4.useState;
            var19 = null;
            var4 = var2.bind(var4)(var19);
            var2 = _closure1_slot3;
            var29 = 2;
            var2 = var2.bind(var5)(var4, var29);
            var18 = var2[var28];
            var _closure2_slot9 = var18;
            var14 = var2[var27];
            var2 = var19 == var20;
            var26 = undefined;
            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var26 = var20.name;
case 4:
            if(!(var19 == var26)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var19 == var21;
            var2 = undefined;
            if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var21.name;
case 8:
            var26 = var2;
case 6:
            _closure2_slot10 = var26;
            var9 = _closure1_slot4;
            var4 = var9.useMemo;
            var2 = new Array(2);
            var2[0] = var21;
            var2[1] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var1 = null;
                    var1 = var1 == var3;
                    if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = _closure2_slot8;
case 10:
                    return var1;
                }
            };
            var2 = var4.bind(var9)(var1, var2);
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var1 = 6;
            var4 = var25[var1];
            var9 = var24.bind(var5)(var4);
            var4 = var9.useSharedValue;
            var12 = var4.bind(var9)(var28);
            _closure2_slot11 = var12;
            var4 = var25[var1];
            var11 = var24.bind(var5)(var4);
            var9 = var11.useAnimatedScrollHandler;
            var4 = function w(arg1) {
                var3 = _closure2_slot11;
                var2 = var3.set;
                var1 = arg1;
                var1 = var1.contentOffset;
                var1 = var1.y;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var15 = {};
            var15['scrollY'] = var12;
            var4['__closure'] = var15;
            var15 = 6666373751314.0;
            var4['__workletHash'] = var15;
            var15 = _closure1_slot9;
            var4['__initData'] = var15;
            var4 = var9.bind(var11)(var4);
            var9 = 15;
            var9 = var25[var9];
            var15 = var24.bind(var5)(var9);
            var11 = var15.useCanSeeGameProfileMobileStoreLinks;
            var9 = 'GameProfileContent';
            var11 = var11.bind(var15)(var9);
            _closure2_slot12 = var11;
            var9 = var25[var1];
            var30 = var24.bind(var5)(var9);
            var15 = var30.useSharedValue;
            var9 = inf;
            var30 = var15.bind(var30)(var9);
            _closure2_slot13 = var30;
            var31 = _closure1_slot4;
            var15 = var31.useState;
            var9 = false;
            var15 = var15.bind(var31)(var9);
            var9 = _closure1_slot3;
            var15 = var9.bind(var5)(var15, var29);
            var9 = var15[var28];
            _closure2_slot14 = var9;
            var31 = var15[var27];
            _closure2_slot15 = var31;
            var15 = var25[var1];
            var27 = var24.bind(var5)(var15);
            var15 = var27.useSharedValue;
            var15 = var15.bind(var27)(var28);
            _closure2_slot16 = var15;
            var27 = var25[var1];
            var29 = var24.bind(var5)(var27);
            var28 = var29.useAnimatedStyle;
            var27 = function I() {
                var1 = {};
                var4 = _closure2_slot16;
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
                var4 = _closure2_slot16;
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
            var32 = {};
            var32['getButtonProgress'] = var15;
            var33 = var25[var1];
            var33 = var24.bind(var5)(var33);
            var33 = var33.interpolate;
            var32['interpolate'] = var33;
            var27['__closure'] = var32;
            var32 = 4176468087958.0;
            var27['__workletHash'] = var32;
            var32 = _closure1_slot10;
            var27['__initData'] = var32;
            var27 = var28.bind(var29)(var27);
            _closure2_slot17 = var27;
            var32 = _closure1_slot4;
            var29 = var32.useEffect;
            var28 = new Array(2);
            var28[0] = var9;
            var28[1] = var15;
            var15 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure2_slot16;
                    var3 = var4.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 16;
                    var5 = var5[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var5);
                    var6 = var7.withTiming;
                    var2 = _closure2_slot14;
                    var5 = 0;
                    if(!var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var5 = 1;
case 12:
                    var2 = {};
                    var8 = 250;
                    var2['duration'] = var8;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var15 = var29.bind(var32)(var15, var28);
            var15 = 17;
            var15 = var25[var15];
            var25 = var24.bind(var5)(var15);
            var24 = var25.useGameProfileStoreWebsites;
            var28 = var19 == var20;
            var15 = undefined;
            if(var28) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var15 = var20.supplementalData;
case 14:
            var28 = var24.bind(var25)(var15);
            _closure2_slot18 = var28;
            var25 = _closure1_slot4;
            var24 = var25.useMemo;
            var15 = new Array(2);
            var15[0] = var28;
            var15[1] = var11;
            var11 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot12;
                    if(var1) { _fun0005_ip = 11; continue _fun0005 }
case 16:
                    var1 = new Array(0);
                    _fun0005_ip = 17; continue _fun0005;
case 11:
                    var4 = _closure2_slot18;
                    var3 = var4.map;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 18;
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
case 17:
                    return var1;
                }
            };
            var11 = var24.bind(var25)(var11, var15);
            _closure2_slot19 = var11;
            var24 = _closure1_slot4;
            var15 = var24.useRef;
            var15 = var15.bind(var24)(var5);
            _closure2_slot20 = var15;
            var24 = _closure1_slot4;
            var15 = var24.useRef;
            var15 = var15.bind(var24)(var19);
            _closure2_slot21 = var15;
            var28 = _closure1_slot4;
            var25 = var28.useEffect;
            var24 = new Array(1);
            var24[0] = var26;
            var15 = function() {
                var2 = _closure2_slot20;
                var1 = _closure2_slot10;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var15 = var25.bind(var28)(var15, var24);
            var28 = _closure1_slot4;
            var25 = var28.useEffect;
            var24 = new Array(1);
            var24[0] = var18;
            var15 = function() {
                var2 = _closure2_slot21;
                var1 = _closure2_slot9;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var15 = var25.bind(var28)(var15, var24);
            var28 = _closure1_slot4;
            var25 = var28.useCallback;
            var24 = new Array(3);
            var24[0] = var23;
            var24[1] = var17;
            var24[2] = var16;
            var15 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackGameProfileAction;
                    var2 = {};
                    var6 = _closure2_slot20;
                    var7 = var6.current;
                    var8 = null;
                    var9 = var8 != var7;
                    var6 = '';
                    if(!var9) { _fun0006_ip = 18; continue _fun0006 }
case 19:
                    var6 = var7;
case 18:
                    var2['gameName'] = var6;
                    var6 = _closure2_slot0;
                    var2['applicationId'] = var6;
                    var6 = arg1;
                    var2['action'] = var6;
                    var6 = _closure2_slot6;
                    var2['viewId'] = var6;
                    var6 = _closure2_slot21;
                    var7 = var6.current;
                    var9 = var8 == var7;
                    var6 = undefined;
                    if(var9) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                    var7 = var7.guild;
                    var8 = var8 == var7;
                    var6 = undefined;
                    if(var8) { _fun0006_ip = 20; continue _fun0006 }
case 22:
                    var6 = var7.id;
case 20:
                    var2['officialGuildId'] = var6;
                    var5 = _closure2_slot1;
                    var2['source'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var15 = var25.bind(var28)(var15, var24);
            _closure2_slot22 = var15;
            var33 = _closure1_slot0;
            var32 = _closure1_slot2;
            var24 = var32[var1];
            var29 = var33.bind(var5)(var24);
            var28 = var29.useAnimatedReaction;
            var25 = function Z() {
                var3 = _closure2_slot11;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var3 = _closure2_slot13;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var1 = var2 > var1;
                return var1;
            };
            var24 = {};
            var24['scrollY'] = var12;
            var24['storeLinksSectionBottomY'] = var30;
            var25['__closure'] = var24;
            var24 = 15031268567256.0;
            var25['__workletHash'] = var24;
            var24 = _closure1_slot11;
            var25['__initData'] = var24;
            var24 = function Q(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = arg1;
                    var1 = arg2;
                    if(!(var3 !== var1)) { _fun0007_ip = 23; continue _fun0007 }
case 16:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var1);
                    var4 = var5.runOnJS;
                    var1 = _closure2_slot15;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)(var3);
case 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = {};
            var32 = var32[var1];
            var32 = var33.bind(var5)(var32);
            var32 = var32.runOnJS;
            var30['runOnJS'] = var32;
            var30['setShowGetButton'] = var31;
            var24['__closure'] = var30;
            var30 = 6903134477924.0;
            var24['__workletHash'] = var30;
            var30 = _closure1_slot12;
            var24['__initData'] = var30;
            var24 = var28.bind(var29)(var25, var24);
            var28 = _closure1_slot4;
            var25 = var28.useCallback;
            var24 = new Array(3);
            var24[0] = var11;
            var24[1] = var15;
            var24[2] = var22;
            var22 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot19;
                    var1 = var1.length;
                    var5 = 1;
                    if(!(var5 !== var1)) { _fun0008_ip = 24; continue _fun0008 }
case 25:
                    var1 = _closure2_slot19;
                    var1 = var1.length;
                    if(!(var1 > var5)) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 19;
                    var1 = var10[var1];
                    var9 = undefined;
                    var4 = var11.bind(var9)(var1);
                    var3 = var4.showActionSheet;
                    var1 = {};
                    var6 = 20;
                    var8 = var10[var6];
                    var8 = var11.bind(var9)(var8);
                    var8 = var8.ACTION_SHEET_KEY;
                    var1['key'] = var8;
                    var8 = _closure1_slot7;
                    var7 = _closure1_slot1;
                    var6 = var10[var6];
                    var7 = var7.bind(var9)(var6);
                    var6 = {};
                    var10 = _closure2_slot20;
                    var11 = var10.current;
                    var10 = null;
                    var12 = var10 != var11;
                    var10 = '';
                    if(!var12) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                    var10 = var11;
case 28:
                    var6['gameName'] = var10;
                    var10 = _closure2_slot19;
                    var6['websiteButtons'] = var10;
                    var10 = _closure2_slot22;
                    var6['trackAction'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    var1['content'] = var6;
                    var1 = var3.bind(var4)(var1);
                    _fun0008_ip = 26; continue _fun0008;
case 24:
                    var4 = _closure1_slot3;
                    var1 = _closure2_slot19;
                    var3 = undefined;
                    var4 = var4.bind(var3)(var1, var5);
                    var1 = 0;
                    var1 = var4[var1];
                    var5 = _closure2_slot22;
                    var4 = var1.action;
                    var4 = var5.bind(var3)(var4);
                    var2 = _closure2_slot4;
                    var1 = var1.url;
                    var1 = var2.bind(var3)(var1);
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var28 = var25.bind(var28)(var22, var24);
            _closure2_slot23 = var28;
            var25 = _closure1_slot4;
            var24 = var25.useCallback;
            var29 = var11.length;
            var22 = new Array(4);
            var22[0] = var29;
            var22[1] = var28;
            var22[2] = var27;
            var22[3] = var9;
            var9 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot19;
                    var3 = var1.length;
                    var1 = 0;
                    var3 = var3 > var1;
                    var1 = null;
                    if(!var3) { _fun0009_ip = 30; continue _fun0009 }
case 31:
                    var5 = _closure1_slot7;
                    var4 = _closure1_slot13;
                    var3 = {};
                    var6 = _closure2_slot23;
                    var3['onPress'] = var6;
                    var6 = _closure2_slot17;
                    var3['animatedStyle'] = var6;
                    var2 = _closure2_slot14;
                    var3['active'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
case 30:
                    return var1;
                }
            };
            var25 = var24.bind(var25)(var9, var22);
            _closure2_slot24 = var25;
            var24 = _closure1_slot4;
            var22 = var24.useLayoutEffect;
            var9 = new Array(4);
            var9[0] = var26;
            var9[1] = var13;
            var9[2] = var25;
            var9[3] = var8;
            var8 = function() {
                var3 = _closure2_slot5;
                var2 = var3.setOptions;
                var1 = {};
                var4 = function header() {
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 21;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot5;
                    var1['navigation'] = var6;
                    var6 = _closure2_slot10;
                    var1['gameName'] = var6;
                    var6 = _closure2_slot3;
                    var1['onClose'] = var6;
                    var5 = _closure2_slot24;
                    var1['headerRight'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['header'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var8 = var22.bind(var24)(var8, var9);
            var24 = _closure1_slot4;
            var22 = var24.useEffect;
            var9 = new Array(4);
            var9[0] = var23;
            var9[1] = var16;
            var9[2] = var3;
            var9[3] = var17;
            var8 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 12;
                    var2 = var1[var7];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackGameProfileOpen;
                    var2 = {};
                    var8 = _closure2_slot1;
                    var2['source'] = var8;
                    var8 = _closure2_slot6;
                    var2['viewId'] = var8;
                    var8 = _closure2_slot0;
                    var2['applicationId'] = var8;
                    var8 = _closure2_slot20;
                    var9 = var8.current;
                    var8 = null;
                    var10 = var8 != var9;
                    var8 = '';
                    if(!var10) { _fun0010_ip = 32; continue _fun0010 }
case 33:
                    var8 = var9;
case 32:
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
            var8 = var22.bind(var24)(var8, var9);
            var22 = _closure1_slot4;
            var9 = var22.useEffect;
            var8 = new Array(4);
            var8[0] = var23;
            var8[1] = var16;
            var8[2] = var3;
            var8[3] = var17;
            var3 = function() {
                var1 = function() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.trackGameProfileClose;
                        var2 = {};
                        var6 = _closure2_slot6;
                        var2['viewId'] = var6;
                        var6 = _closure2_slot0;
                        var2['applicationId'] = var6;
                        var6 = _closure2_slot20;
                        var8 = var6.current;
                        var7 = null;
                        var9 = var7 != var8;
                        var6 = '';
                        if(!var9) { _fun0011_ip = 34; continue _fun0011 }
case 35:
                        var6 = var8;
case 34:
                        var2['gameName'] = var6;
                        var6 = new Array(0);
                        var2['playedFriendIds'] = var6;
                        var6 = new Array(0);
                        var2['playedFriendsData'] = var6;
                        var6 = new Array(0);
                        var2['similarGames'] = var6;
                        var5 = _closure2_slot21;
                        var6 = var5.current;
                        var8 = var7 == var6;
                        var5 = undefined;
                        if(var8) { _fun0011_ip = 36; continue _fun0011 }
case 37:
                        var6 = var6.guild;
                        var7 = var7 == var6;
                        var5 = undefined;
                        if(var7) { _fun0011_ip = 36; continue _fun0011 }
case 38:
                        var5 = var6.id;
case 36:
                        var2['officialGuildId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var9.bind(var22)(var3, var8);
            if(var2) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            if(!(var19 != var21)) { _fun0002_ip = 39; continue _fun0002 }
case 41:
            if(!(var19 != var20)) { _fun0002_ip = 39; continue _fun0002 }
case 42:
            var3 = _closure1_slot7;
            var8 = _closure1_slot1;
            var22 = _closure1_slot2;
            var1 = var22[var1];
            var1 = var8.bind(var5)(var1);
            var2 = var1.ScrollView;
            var1 = {};
            var9 = var7.scrollView;
            var1['style'] = var9;
            var9 = 16;
            var1['scrollEventThrottle'] = var9;
            var1['onScroll'] = var4;
            var9 = _closure1_slot7;
            var4 = 22;
            var4 = var22[var4];
            var8 = var8.bind(var5)(var4);
            var4 = {};
            var4['application'] = var21;
            var21 = var19 == var20;
            var19 = undefined;
            if(var21) { _fun0002_ip = 43; continue _fun0002 }
case 44:
            var19 = var20.supplementalData;
case 43:
            var4['supplementalGameData'] = var19;
            var4['officialInvite'] = var18;
            var4['viewId'] = var17;
            var4['source'] = var16;
            var4['trackAction'] = var15;
            var4['onOfficialGuildInviteResolved'] = var14;
            var4['closeModal'] = var13;
            var4['scrollY'] = var12;
            var4['websiteButtons'] = var11;
            var10 = function onStoreLinksMeasured(arg1) {
                var3 = _closure2_slot13;
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
            _fun0002_ip = 45; continue _fun0002;
case 39:
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
case 45:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var12 = 1;
    var7 = var6[var12];
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
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center'};
    var10 = 5;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var9['backgroundColor'] = var13;
    var4['loadingContainer'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWEST;
    var9['backgroundColor'] = var10;
    var4['scrollView'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function GameProfileScreenTsx1(e){const{scrollY}=this.__closure;scrollY.set(e.contentOffset.y);}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function GameProfileScreenTsx2(){const{getButtonProgress,interpolate}=this.__closure;return{opacity:getButtonProgress.get(),transform:[{translateX:interpolate(getButtonProgress.get(),[0,1],[16,0])}]};}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function GameProfileScreenTsx3(){const{scrollY,storeLinksSectionBottomY}=this.__closure;return scrollY.get()>storeLinksSectionBottomY.get();}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function GameProfileScreenTsx4(shouldShow,prevShouldShow){const{runOnJS,setShowGetButton}=this.__closure;if(shouldShow!==prevShouldShow){runOnJS(setShowGetButton)(shouldShow);}}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = 25;
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
            var1 = 23;
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
        var5 = _closure1_slot4;
        var4 = var5.useMemo;
        var3 = function() {
            var1 = {};
            var3 = {};
            var2 = function render(arg1) {
                var4 = _closure1_slot7;
                var3 = _closure1_slot14;
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
            var1[1] = var3;
            return var1;
        };
        var2 = new Array(0);
        var5 = var4.bind(var5)(var3, var2);
        var4 = _closure1_slot7;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 24;
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