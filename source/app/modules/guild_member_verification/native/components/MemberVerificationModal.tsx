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
    var7 = var4.ActivityIndicator;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.SCROLL_EVENT_TIMER_MS;
    var _closure1_slot8 = var7;
    var4 = var4.useBannerHeight;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var11.bind(var1)(var4);
    var7 = var8.createAnimatedComponent;
    var4 = 7;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
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
    var13 = var13.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var13;
    var4['flexLoading'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BASE_SECONDARY;
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
    var4['closeIcon'] = var9;
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
    var10 = var10.TEXT_NORMAL;
    var9['tintColor'] = var10;
    var4['closeIconAfterBanner'] = var9;
    var9 = {'marginHorizontal': 16, 'marginVertical': 12};
    var4['headerSeparator'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 'function MemberVerificationModalTsx1({contentOffset:{y:y}}){const{scrollTop}=this.__closure;return scrollTop.set(y);}';
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = "function MemberVerificationModalTsx2(){const{interpolate,scrollTop,bannerHeight,safeAreaTop,theme}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[1,theme==='dark'?1:0],'clamp')};}";
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = "function MemberVerificationModalTsx3(){const{interpolate,scrollTop,bannerHeight,safeAreaTop}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[0,1],'clamp')};}";
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/components/MemberVerificationModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MemberVerificationModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.guildId;
            var _closure2_slot0 = var1;
            var17 = var2.onClose;
            var _closure2_slot1 = var17;
            var5 = undefined;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var2 = _closure1_slot13;
            var6 = var2.bind(var5)();
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 10;
            var2 = var7[var2];
            var2 = var9.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var25 = var2.bottom;
            var16 = var2.top;
            var _closure2_slot2 = var16;
            var4 = _closure1_slot0;
            var10 = 6;
            var2 = var7[var10];
            var11 = var4.bind(var5)(var2);
            var3 = var11.useSharedValue;
            var2 = 0;
            var24 = var3.bind(var11)(var2);
            var _closure2_slot3 = var24;
            var2 = var7[var10];
            var11 = var4.bind(var5)(var2);
            var3 = var11.useAnimatedScrollHandler;
            var2 = function _(arg1) {
                var1 = arg1;
                var1 = var1.contentOffset;
                var3 = var1.y;
                var2 = _closure2_slot3;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var12 = {};
            var12['scrollTop'] = var24;
            var2['__closure'] = var12;
            var12 = 16447800091731.0;
            var2['__workletHash'] = var12;
            var12 = _closure1_slot14;
            var2['__initData'] = var12;
            var12 = var3.bind(var11)(var2);
            var2 = 11;
            var2 = var7[var2];
            var2 = var9.bind(var5)(var2);
            var18 = var2.bind(var5)();
            var _closure2_slot4 = var18;
            var2 = _closure1_slot9;
            var14 = var2.bind(var5)();
            var _closure2_slot5 = var14;
            var2 = var7[var10];
            var11 = var4.bind(var5)(var2);
            var3 = var11.useAnimatedStyle;
            var2 = function C() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
                    if(!(var3 === var8)) { _fun0002_ip = 92; continue _fun0002 }
 89:
                    var2 = 1;
 92:
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
            var13 = {};
            var19 = var7[var10];
            var19 = var4.bind(var5)(var19);
            var19 = var19.interpolate;
            var13['interpolate'] = var19;
            var13['scrollTop'] = var24;
            var13['bannerHeight'] = var14;
            var13['safeAreaTop'] = var16;
            var13['theme'] = var18;
            var2['__closure'] = var13;
            var13 = 9776820170891.0;
            var2['__workletHash'] = var13;
            var13 = _closure1_slot15;
            var2['__initData'] = var13;
            var22 = var3.bind(var11)(var2);
            var2 = var7[var10];
            var11 = var4.bind(var5)(var2);
            var3 = var11.useAnimatedStyle;
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
            var13 = {};
            var18 = var7[var10];
            var18 = var4.bind(var5)(var18);
            var18 = var18.interpolate;
            var13['interpolate'] = var18;
            var13['scrollTop'] = var24;
            var13['bannerHeight'] = var14;
            var13['safeAreaTop'] = var16;
            var2['__closure'] = var13;
            var13 = 4275816745587.0;
            var2['__workletHash'] = var13;
            var13 = _closure1_slot16;
            var2['__initData'] = var13;
            var19 = var3.bind(var11)(var2);
            var2 = 12;
            var2 = var7[var2];
            var3 = var4.bind(var5)(var2);
            var2 = var3.useSetInitialVerificationEffect;
            var3 = var2.bind(var3)(var1);
            var2 = 13;
            var2 = var7[var2];
            var2 = var9.bind(var5)(var2);
            var18 = var2.bind(var5)(var1);
            var2 = 14;
            var2 = var7[var2];
            var9 = var4.bind(var5)(var2);
            var7 = var9.useStateFromStores;
            var2 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.get;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var7.bind(var9)(var4, var1, var2);
            var _closure2_slot6 = var4;
            var11 = _closure1_slot3;
            var9 = var11.useMemo;
            var2 = null;
            var7 = var2 == var4;
            var1 = undefined;
            if(var7) { _fun0001_ip = 522; continue _fun0001 }
 516:
            var1 = var4.formFields;
 522:
            var7 = new Array(1);
            var7[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot6;
                    var1 = null;
                    var5 = var1 == var2;
                    var2 = undefined;
                    if(var5) { _fun0003_ip = 55; continue _fun0003 }
 18:
                    var3 = _closure2_slot6;
                    var5 = var3.formFields;
                    var3 = var1 == var5;
                    var2 = undefined;
                    if(var3) { _fun0003_ip = 55; continue _fun0003 }
 37:
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
 55:
                    var1 = var1 != var2;
                    if(!var1) { _fun0003_ip = 65; continue _fun0003 }
 62:
                    var1 = var2;
 65:
                    return var1;
                }
            };
            var14 = var9.bind(var11)(var1, var7);
            var9 = _closure1_slot3;
            var7 = var9.useMemo;
            var11 = var2 == var4;
            var1 = undefined;
            if(var11) { _fun0001_ip = 565; continue _fun0001 }
 559:
            var1 = var4.formFields;
 565:
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot6;
                    var2 = null;
                    var5 = var2 == var3;
                    var7 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0004_ip = 32; continue _fun0004 }
 22:
                    var4 = _closure2_slot6;
                    var3 = var4.formFields;
 32:
                    if(!(var2 == var3)) { _fun0004_ip = 40; continue _fun0004 }
 36:
                    var3 = new Array(0);
 40:
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
            var1 = var7.bind(var9)(var1, var4);
            _closure2_slot7 = var1;
            var11 = _closure1_slot3;
            var4 = var11.useRef;
            var4 = var4.bind(var11)(var17);
            _closure2_slot8 = var4;
            var7 = var11.useEffect;
            var4 = function() {
                var2 = _closure2_slot8;
                var1 = _closure2_slot1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var4 = var7.bind(var11)(var4);
            var9 = var11.useEffect;
            var7 = new Array(1);
            var7[0] = var1;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot7;
                    if(!var1) { _fun0005_ip = 53; continue _fun0005 }
 10:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.wait;
                    var1 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var2 = _closure2_slot8;
                            var3 = var2.current;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0006_ip = 31; continue _fun0006 }
 18:
                            var2 = _closure2_slot8;
                            var1 = var2.current;
                            var1 = var1.bind(var2)();
 31:
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
 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var9.bind(var11)(var4, var7);
            if(!(var2 != var18)) { _fun0001_ip = 1210; continue _fun0001 }
 652:
            if(!(var2 != var3)) { _fun0001_ip = 1210; continue _fun0001 }
 659:
            if(var1) { _fun0001_ip = 1210; continue _fun0001 }
 665:
            var3 = _closure1_slot10;
            var23 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 18;
            var1 = var21[var1];
            var1 = var23.bind(var5)(var1);
            var2 = var1.RedesignCompat;
            var1 = {};
            var9 = _closure1_slot11;
            var20 = _closure1_slot1;
            var4 = 19;
            var4 = var21[var4];
            var7 = var20.bind(var5)(var4);
            var4 = {};
            var11 = var6.flex;
            var4['style'] = var11;
            var10 = var21[var10];
            var10 = var20.bind(var5)(var10);
            var11 = var10.ScrollView;
            var10 = {};
            var13 = var6.scrollContainer;
            var10['style'] = var13;
            var13 = {};
            var13['paddingBottom'] = var25;
            var10['contentContainerStyle'] = var13;
            var13 = _closure1_slot8;
            var10['scrollEventThrottle'] = var13;
            var13 = 'handled';
            var10['keyboardShouldPersistTaps'] = var13;
            var10['onScroll'] = var12;
            var12 = 20;
            var12 = var21[var12];
            var13 = var20.bind(var5)(var12);
            var12 = {};
            var12['guild'] = var18;
            var12['scrollTop'] = var24;
            var12['hasManualFormFields'] = var14;
            var13 = var3.bind(var5)(var13, var12);
            var12 = new Array(3);
            var12[0] = var13;
            var13 = 21;
            var13 = var21[var13];
            var14 = var20.bind(var5)(var13);
            var13 = {};
            var24 = var6.headerSeparator;
            var13['style'] = var24;
            var13 = var3.bind(var5)(var14, var13);
            var12[1] = var13;
            var13 = 22;
            var13 = var21[var13];
            var14 = var20.bind(var5)(var13);
            var13 = {};
            var13['guild'] = var18;
            var18 = function onSuccess(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var5 = _closure1_slot6;
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
                    if(var4) { _fun0007_ip = 84; continue _fun0007 }
 81:
                    var4 = var5;
 84:
                    if(var4) { _fun0007_ip = 122; continue _fun0007 }
 87:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 17;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.openMemberVerificationPendingAlert;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
 122:
                    return var1;
                }
            };
            var13['onSuccess'] = var18;
            var13['onClose'] = var17;
            var13 = var3.bind(var5)(var14, var13);
            var12[2] = var13;
            var10['children'] = var12;
            var11 = var9.bind(var5)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var12 = _closure1_slot5;
            var11 = {};
            var14 = var6.closeButtonContainer;
            var13 = new Array(2);
            var13[0] = var14;
            var14 = {};
            var14['top'] = var16;
            var13[1] = var14;
            var11['style'] = var13;
            var13 = 23;
            var13 = var21[var13];
            var13 = var23.bind(var5)(var13);
            var14 = var13.PressableOpacity;
            var13 = {};
            var16 = 'button';
            var13['accessibilityRole'] = var16;
            var16 = 24;
            var17 = var21[var16];
            var17 = var23.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var21[var16];
            var16 = var23.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.cpT0Cg;
            var16 = var17.bind(var18)(var16);
            var13['accessibilityLabel'] = var16;
            var16 = var6.closeIconContainer;
            var13['style'] = var16;
            var15 = function onPress() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0008_ip = 28; continue _fun0008 }
 20:
                    var2 = _closure2_slot1;
                    var1 = var2.bind(var3)();
 28:
                    return var1;
                }
            };
            var13['onPress'] = var15;
            var17 = _closure1_slot12;
            var15 = {};
            var18 = 25;
            var16 = var21[var18];
            var16 = var20.bind(var5)(var16);
            var15['source'] = var16;
            var23 = var6.closeIconOverBanner;
            var16 = new Array(2);
            var16[0] = var23;
            var16[1] = var22;
            var15['style'] = var16;
            var16 = var3.bind(var5)(var17, var15);
            var15 = new Array(2);
            var15[0] = var16;
            var16 = {};
            var18 = var21[var18];
            var18 = var20.bind(var5)(var18);
            var16['source'] = var18;
            var20 = var6.closeIconAfterBanner;
            var18 = new Array(2);
            var18[0] = var20;
            var18[1] = var19;
            var16['style'] = var18;
            var16 = var3.bind(var5)(var17, var16);
            var15[1] = var16;
            var13['children'] = var15;
            var13 = var9.bind(var5)(var14, var13);
            var11['children'] = var13;
            var11 = var3.bind(var5)(var12, var11);
            var10[1] = var11;
            var4['children'] = var10;
            var4 = var9.bind(var5)(var7, var4);
            var1['children'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 1301; continue _fun0001;
 1210:
            var4 = _closure1_slot10;
            var3 = _closure1_slot5;
            var2 = {};
            var6 = var6.flexLoading;
            var2['style'] = var6;
            var7 = _closure1_slot4;
            var6 = {'animating': true, 'color': null, 'size': 'large'};
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 9;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.unsafe_rawColors;
            var8 = var8.BRAND_500;
            var6['color'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1301:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();