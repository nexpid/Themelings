// app/modules/guild_member_verification/native/components/MemberVerificationModal.tsx
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
    var12 = 1;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.SCROLL_EVENT_TIMER_MS;
    var _closure1_slot7 = var7;
    var4 = var4.useBannerHeight;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var11.bind(var1)(var4);
    var7 = var8.createAnimatedComponent;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Icon;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var12;
    var4['flex'] = var9;
    var9 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
    var10 = 9;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var13;
    var4['flexLoading'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var12;
    var4['scrollContainer'] = var9;
    var12 = 'absolute';
    var9 = {'position': 'absolute', 'right': 0};
    var4['closeButtonContainer'] = var9;
    var9 = {'position': 'relative', 'marginTop': 10, 'marginRight': 20, 'width': 24, 'height': 24};
    var4['closeIconContainer'] = var9;
    var9 = {};
    var9['position'] = var12;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var9['tintColor'] = var13;
    var4['closeIconOverBanner'] = var9;
    var9 = {};
    var9['position'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_DEFAULT;
    var9['tintColor'] = var10;
    var4['closeIconAfterBanner'] = var9;
    var9 = {'marginHorizontal': 16, 'marginVertical': 12};
    var4['headerSeparator'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function MemberVerificationModalTsx1({contentOffset:{y:y}}){const{scrollTop}=this.__closure;return scrollTop.set(y);}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = "function MemberVerificationModalTsx2(){const{interpolate,scrollTop,bannerHeight,safeAreaTop,theme}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[1,theme==='dark'?1:0],'clamp')};}";
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = "function MemberVerificationModalTsx3(){const{interpolate,scrollTop,bannerHeight,safeAreaTop}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[0,1],'clamp')};}";
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/components/MemberVerificationModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MemberVerificationModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.guildId;
            var _closure2_slot0 = var1;
            var15 = var2.onClose;
            var _closure2_slot1 = var15;
            var5 = undefined;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var2 = _closure1_slot12;
            var7 = var2.bind(var5)();
            var12 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 10;
            var2 = var10[var2];
            var2 = var12.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var11 = var2.bottom;
            var14 = var2.top;
            var _closure2_slot2 = var14;
            var8 = _closure1_slot0;
            var4 = 6;
            var2 = var10[var4];
            var9 = var8.bind(var5)(var2);
            var3 = var9.useSharedValue;
            var2 = 0;
            var21 = var3.bind(var9)(var2);
            var _closure2_slot3 = var21;
            var2 = var10[var4];
            var9 = var8.bind(var5)(var2);
            var3 = var9.useAnimatedScrollHandler;
            var2 = function A(arg1) {
                var1 = arg1;
                var1 = var1.contentOffset;
                var3 = var1.y;
                var2 = _closure2_slot3;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var16 = {};
            var16['scrollTop'] = var21;
            var2['__closure'] = var16;
            var16 = 16447800091731.0;
            var2['__workletHash'] = var16;
            var16 = _closure1_slot13;
            var2['__initData'] = var16;
            var9 = var3.bind(var9)(var2);
            var2 = 11;
            var2 = var10[var2];
            var2 = var12.bind(var5)(var2);
            var19 = var2.bind(var5)();
            var _closure2_slot4 = var19;
            var2 = _closure1_slot8;
            var18 = var2.bind(var5)();
            var _closure2_slot5 = var18;
            var2 = var10[var4];
            var16 = var8.bind(var5)(var2);
            var3 = var16.useAnimatedStyle;
            var2 = function M() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var7 = var4.bind(var2)(var3);
                    var6 = var7.interpolate;
                    var4 = _closure2_slot3;
                    var3 = var4.get;
                    var5 = var3.bind(var4)();
                    var4 = _closure2_slot5;
                    var3 = _closure2_slot2;
                    var3 = var4 - var3;
                    var4 = [0];
                    var4[1] = var3;
                    var8 = _closure2_slot4;
                    var3 = 'dark';
                    var2 = 0;
                    if(!(var3 === var8)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = 1;
case 2:
                    var3 = [1];
                    var3[1] = var2;
                    var9 = 'clamp';
                    var13 = var7;
                    var12 = var5;
                    var11 = var4;
                    var10 = var3;
                    var2 = var13[var6](var12, var11, var10, var9, var8);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var17 = {};
            var20 = var10[var4];
            var20 = var8.bind(var5)(var20);
            var20 = var20.interpolate;
            var17['interpolate'] = var20;
            var17['scrollTop'] = var21;
            var17['bannerHeight'] = var18;
            var17['safeAreaTop'] = var14;
            var17['theme'] = var19;
            var2['__closure'] = var17;
            var17 = 9776820170891.0;
            var2['__workletHash'] = var17;
            var17 = _closure1_slot14;
            var2['__initData'] = var17;
            var20 = var3.bind(var16)(var2);
            var2 = var10[var4];
            var16 = var8.bind(var5)(var2);
            var3 = var16.useAnimatedStyle;
            var2 = function v() {
                var1 = {};
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var7 = var4.bind(var2)(var3);
                var6 = var7.interpolate;
                var4 = _closure2_slot3;
                var3 = var4.get;
                var11 = var3.bind(var4)();
                var3 = _closure2_slot5;
                var2 = _closure2_slot2;
                var2 = var3 - var2;
                var4 = [0];
                var4[1] = var2;
                var9 = [0, 1];
                var8 = 'clamp';
                var12 = var7;
                var10 = var4;
                var2 = var12[var6](var11, var10, var9, var8, var7);
                var1['opacity'] = var2;
                return var1;
            };
            var17 = {};
            var19 = var10[var4];
            var19 = var8.bind(var5)(var19);
            var19 = var19.interpolate;
            var17['interpolate'] = var19;
            var17['scrollTop'] = var21;
            var17['bannerHeight'] = var18;
            var17['safeAreaTop'] = var14;
            var2['__closure'] = var17;
            var17 = 4275816745587.0;
            var2['__workletHash'] = var17;
            var17 = _closure1_slot15;
            var2['__initData'] = var17;
            var17 = var3.bind(var16)(var2);
            var2 = 12;
            var2 = var10[var2];
            var3 = var8.bind(var5)(var2);
            var2 = var3.useSetInitialVerificationEffect;
            var3 = var2.bind(var3)(var1);
            var2 = 13;
            var2 = var10[var2];
            var2 = var12.bind(var5)(var2);
            var16 = var2.bind(var5)(var1);
            var2 = 14;
            var2 = var10[var2];
            var12 = var8.bind(var5)(var2);
            var10 = var12.useStateFromStores;
            var2 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var10.bind(var12)(var8, var1, var2);
            var _closure2_slot6 = var8;
            var18 = _closure1_slot3;
            var12 = var18.useMemo;
            var2 = null;
            var10 = var2 == var8;
            var1 = undefined;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var8.formFields;
case 4:
            var10 = new Array(1);
            var10[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = null;
                    var5 = var1 == var2;
                    var2 = undefined;
                    if(var5) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = _closure2_slot6;
                    var5 = var3.formFields;
                    var3 = var1 == var5;
                    var2 = undefined;
                    if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 8:
                    var4 = var5.some;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.field_type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 15;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.VerificationFormFieldTypes;
                        var1 = var1.TERMS;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3);
case 6:
                    var1 = var1 != var2;
                    if(!var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var1 = var2;
case 9:
                    return var1;
                }
            };
            var12 = var12.bind(var18)(var1, var10);
            var18 = _closure1_slot3;
            var10 = var18.useMemo;
            var19 = var2 == var8;
            var1 = undefined;
            if(var19) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = var8.formFields;
case 11:
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var2 = null;
                    var5 = var2 == var3;
                    var7 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var4 = _closure2_slot6;
                    var3 = var4.formFields;
case 13:
                    if(!(var2 == var3)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var3 = new Array(0);
case 15:
                    var2 = global;
                    var5 = var2.Object;
                    var4 = var5.values;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 15;
                    var2 = var8[var2];
                    var2 = var6.bind(var7)(var2);
                    var2 = var2.VerificationFormFieldTypes;
                    var2 = var4.bind(var5)(var2);
                    var _closure3_slot0 = var2;
                    var2 = var3.some;
                    var1 = function(arg1) {
                        var3 = _closure3_slot0;
                        var2 = var3.includes;
                        var1 = arg1;
                        var1 = var1.field_type;
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var1 = var10.bind(var18)(var1, var8);
            _closure2_slot7 = var1;
            var19 = _closure1_slot3;
            var8 = var19.useRef;
            var8 = var8.bind(var19)(var15);
            _closure2_slot8 = var8;
            var10 = var19.useEffect;
            var8 = function() {
                var2 = _closure2_slot8;
                var1 = _closure2_slot1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var8 = var10.bind(var19)(var8);
            var18 = var19.useEffect;
            var10 = new Array(1);
            var10[0] = var1;
            var8 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot7;
                    if(!var1) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.wait;
                    var1 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var2 = _closure2_slot8;
                            var3 = var2.current;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0006_ip = 19; continue _fun0006 }
case 7:
                            var2 = _closure2_slot8;
                            var1 = var2.current;
                            var1 = var1.bind(var2)();
case 19:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 17;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.openMemberVerificationUpdateAlert;
                            var2 = var2.bind(var3)();
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var8 = var18.bind(var19)(var8, var10);
            if(!(var2 != var16)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            if(!(var2 != var3)) { _fun0001_ip = 20; continue _fun0001 }
case 22:
            if(var1) { _fun0001_ip = 20; continue _fun0001 }
case 23:
            var3 = _closure1_slot10;
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var1 = 19;
            var1 = var19[var1];
            var2 = var18.bind(var5)(var1);
            var1 = {};
            var8 = var7.flex;
            var1['style'] = var8;
            var4 = var19[var4];
            var4 = var18.bind(var5)(var4);
            var8 = var4.ScrollView;
            var4 = {};
            var10 = var7.scrollContainer;
            var4['style'] = var10;
            var10 = {};
            var10['paddingBottom'] = var11;
            var4['contentContainerStyle'] = var10;
            var10 = _closure1_slot7;
            var4['scrollEventThrottle'] = var10;
            var10 = 'handled';
            var4['keyboardShouldPersistTaps'] = var10;
            var4['onScroll'] = var9;
            var10 = _closure1_slot9;
            var9 = 20;
            var9 = var19[var9];
            var11 = var18.bind(var5)(var9);
            var9 = {};
            var9['guild'] = var16;
            var9['scrollTop'] = var21;
            var9['hasManualFormFields'] = var12;
            var11 = var10.bind(var5)(var11, var9);
            var9 = new Array(3);
            var9[0] = var11;
            var11 = 21;
            var11 = var19[var11];
            var12 = var18.bind(var5)(var11);
            var11 = {};
            var21 = var7.headerSeparator;
            var11['style'] = var21;
            var11 = var10.bind(var5)(var12, var11);
            var9[1] = var11;
            var11 = 22;
            var11 = var19[var11];
            var12 = var18.bind(var5)(var11);
            var11 = {};
            var11['guild'] = var16;
            var16 = function onSuccess(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = _closure1_slot5;
                    var4 = var5.getSelfMember;
                    var1 = _closure2_slot0;
                    var4 = var4.bind(var5)(var1);
                    var1 = null;
                    var5 = var1 != var4;
                    var1 = arg1;
                    var6 = var1.application_status;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.GuildJoinRequestApplicationStatuses;
                    var4 = var4.SUBMITTED;
                    var4 = var6 !== var4;
                    if(var4) { _fun0007_ip = 24; continue _fun0007 }
case 25:
                    var4 = var5;
case 24:
                    if(var4) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 17;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.openMemberVerificationPendingAlert;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
case 26:
                    return var1;
                }
            };
            var11['onSuccess'] = var16;
            var11['onClose'] = var15;
            var11 = var10.bind(var5)(var12, var11);
            var9[2] = var11;
            var4['children'] = var9;
            var8 = var3.bind(var5)(var8, var4);
            var4 = new Array(2);
            var4[0] = var8;
            var9 = _closure1_slot4;
            var8 = {};
            var12 = var7.closeButtonContainer;
            var11 = new Array(2);
            var11[0] = var12;
            var12 = {};
            var12['top'] = var14;
            var11[1] = var12;
            var8['style'] = var11;
            var21 = _closure1_slot0;
            var11 = 23;
            var11 = var19[var11];
            var11 = var21.bind(var5)(var11);
            var12 = var11.PressableOpacity;
            var11 = {};
            var14 = 'button';
            var11['accessibilityRole'] = var14;
            var14 = 24;
            var15 = var19[var14];
            var15 = var21.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var19[var14];
            var14 = var21.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.cpT0Cq;
            var14 = var15.bind(var16)(var14);
            var11['accessibilityLabel'] = var14;
            var14 = var7.closeIconContainer;
            var11['style'] = var14;
            var13 = function onPress() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                    var2 = _closure2_slot1;
                    var1 = var2.bind(var3)();
case 28:
                    return var1;
                }
            };
            var11['onPress'] = var13;
            var15 = _closure1_slot11;
            var13 = {};
            var16 = 25;
            var14 = var19[var16];
            var14 = var18.bind(var5)(var14);
            var13['source'] = var14;
            var21 = var7.closeIconOverBanner;
            var14 = new Array(2);
            var14[0] = var21;
            var14[1] = var20;
            var13['style'] = var14;
            var14 = var10.bind(var5)(var15, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = {};
            var16 = var19[var16];
            var16 = var18.bind(var5)(var16);
            var14['source'] = var16;
            var18 = var7.closeIconAfterBanner;
            var16 = new Array(2);
            var16[0] = var18;
            var16[1] = var17;
            var14['style'] = var16;
            var14 = var10.bind(var5)(var15, var14);
            var13[1] = var14;
            var11['children'] = var13;
            var11 = var3.bind(var5)(var12, var11);
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var4[1] = var8;
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 30; continue _fun0001;
case 20:
            var4 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var7.flexLoading;
            var2['style'] = var7;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 18;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var7 = var6.ActivityIndicator;
            var6 = {};
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 30:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();