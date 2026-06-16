// app/modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function NOOP() {
        var1 = undefined;
        return var1;
    };
    var _closure1_slot13 = var1;
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var15 = 1;
    var4 = var6[var15];
    var4 = var5.bind(var1)(var4);
    var10 = var4.ScrollView;
    var4 = 2;
    var4 = var6[var4];
    var4 = var9.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.jsx;
    var _closure1_slot5 = var11;
    var11 = var4.jsxs;
    var _closure1_slot6 = var11;
    var4 = var4.Fragment;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var12 = var5.bind(var1)(var4);
    var11 = var12.createStyles;
    var4 = {};
    var13 = {};
    var13['flex'] = var15;
    var14 = 6;
    var16 = var6[var14];
    var16 = var9.bind(var1)(var16);
    var16 = var16.space;
    var16 = var16.PX_16;
    var13['paddingHorizontal'] = var16;
    var4['scrollView'] = var13;
    var13 = {};
    var13['flex'] = var15;
    var14 = var6[var14];
    var14 = var9.bind(var1)(var14);
    var14 = var14.space;
    var14 = var14.PX_16;
    var13['paddingHorizontal'] = var14;
    var13['marginTop'] = var8;
    var4['scrollViewScreenReader'] = var13;
    var13 = {};
    var13['height'] = var8;
    var4['blurRegion'] = var13;
    var4 = var11.bind(var12)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var9.bind(var1)(var4);
    var4 = var9.createAnimatedComponent;
    var4 = var4.bind(var9)(var10);
    var _closure1_slot9 = var4;
    var9 = var7.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var21 = var1.channel;
            var20 = var1.openTab;
            var6 = _closure1_slot3;
            var2 = var6.useContext;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 8;
            var1 = var5[var1];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var2.bind(var6)(var1);
            var26 = var1.channelId;
            var1 = 9;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var12 = var1.bind(var4)(var26);
            var2 = _closure1_slot0;
            var16 = 10;
            var1 = var5[var16];
            var6 = var2.bind(var4)(var1);
            var1 = var6.useEmbeddedActivityLaunchability;
            var9 = var1.bind(var6)(var26);
            var1 = 11;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var6 = var1.DeveloperMode;
            var1 = var6.useSetting;
            var8 = var1.bind(var6)();
            var19 = 12;
            var1 = var5[var19];
            var7 = var3.bind(var4)(var1);
            var6 = var7.useConfig;
            var1 = {};
            var11 = 'VoicePanelVoiceControls';
            var1['location'] = var11;
            var1 = var6.bind(var7)(var1);
            var17 = var1.treatment;
            var1 = 13;
            var1 = var5[var1];
            var7 = var3.bind(var4)(var1);
            var6 = var7.useConfig;
            var1 = {};
            var1['location'] = var11;
            var1 = var6.bind(var7)(var1);
            var6 = var1.nonContextualStreamOutputPresent;
            var1 = 14;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var24 = var1.bind(var4)(var21);
            var3 = _closure1_slot6;
            var1 = 15;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Stack;
            var1 = {};
            var5 = 24;
            var1['spacing'] = var5;
            var7 = var12;
            if(!var12) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = _closure1_slot6;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 16;
            var5 = var15[var5];
            var5 = var18.bind(var4)(var5);
            var11 = var5.TableRowGroup;
            var5 = {};
            var14 = true;
            var5['hasIcons'] = var14;
            var25 = _closure1_slot5;
            var22 = 17;
            var14 = var15[var22];
            var14 = var18.bind(var4)(var14);
            var23 = var14.ActivitiesButton;
            var14 = {};
            var14['openTab'] = var20;
            var23 = var25.bind(var4)(var23, var14);
            var14 = new Array(2);
            var14[0] = var23;
            var15 = var15[var19];
            var15 = var18.bind(var4)(var15);
            var15 = var15.MobileGoLiveEntrypointTreatment;
            var15 = var15.SCREENSHARE_REPLACES_CHAT;
            if(!(var15 !== var17)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var19];
            var15 = var18.bind(var4)(var15);
            var15 = var15.MobileGoLiveEntrypointTreatment;
            var15 = var15.SCREENSHARE_REPLACES_SOUNDBOARD;
            if(!(var15 !== var17)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var18 = _closure1_slot5;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var22];
            var15 = var17.bind(var4)(var15);
            var17 = var15.ScreenshareButton;
            var15 = {};
            var15['channel'] = var21;
            var15 = var18.bind(var4)(var17, var15);
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var19 = _closure1_slot5;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var22];
            var17 = var18.bind(var4)(var17);
            var18 = var17.SoundboardButton;
            var17 = {};
            var17['channel'] = var21;
            var15 = var19.bind(var4)(var18, var17);
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var19 = _closure1_slot5;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var17 = var17[var22];
            var17 = var18.bind(var4)(var17);
            var18 = var17.ChatButton;
            var17 = {};
            var17['openTab'] = var20;
            var15 = var19.bind(var4)(var18, var17);
case 8:
            var14[1] = var15;
            var5['children'] = var14;
            var7 = var13.bind(var4)(var11, var5);
case 2:
            var5 = new Array(7);
            var5[0] = var7;
            var13 = _closure1_slot5;
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var14 = 17;
            var7 = var7[var14];
            var7 = var11.bind(var4)(var7);
            var11 = var7.GameConsoles;
            var7 = {};
            var7['channel'] = var21;
            var7['connected'] = var12;
            var7 = var13.bind(var4)(var11, var7);
            var5[1] = var7;
            if(!var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var13 = _closure1_slot5;
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var14];
            var7 = var11.bind(var4)(var7);
            var11 = var7.StreamVolumeItem;
            var7 = {};
            var6 = var13.bind(var4)(var11, var7);
case 9:
            var5[2] = var6;
            var17 = _closure1_slot6;
            var20 = _closure1_slot0;
            var19 = _closure1_slot2;
            var7 = 16;
            var6 = var19[var7];
            var6 = var20.bind(var4)(var6);
            var11 = var6.TableRowGroup;
            var6 = {};
            var15 = 18;
            var13 = var19[var15];
            var13 = var20.bind(var4)(var13);
            var22 = var13.intl;
            var18 = var22.string;
            var13 = var19[var15];
            var13 = var20.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.NiTd0e;
            var13 = var18.bind(var22)(var13);
            var6['title'] = var13;
            var13 = true;
            var6['hasIcons'] = var13;
            var22 = _closure1_slot5;
            var18 = var19[var14];
            var18 = var20.bind(var4)(var18);
            var23 = var18.DeafenSwitch;
            var18 = {};
            var23 = var22.bind(var4)(var23, var18);
            var18 = new Array(5);
            var18[0] = var23;
            var23 = var19[var14];
            var23 = var20.bind(var4)(var23);
            var25 = var23.AudioRouteButton;
            var23 = {};
            var23['channel'] = var21;
            var23['connected'] = var12;
            var23 = var22.bind(var4)(var25, var23);
            var18[1] = var23;
            var23 = var19[var14];
            var23 = var20.bind(var4)(var23);
            var25 = var23.HideNonVideoParticipants;
            var23 = {};
            var23['channelId'] = var26;
            var23 = var22.bind(var4)(var25, var23);
            var18[2] = var23;
            var19 = var19[var14];
            var19 = var20.bind(var4)(var19);
            var20 = var19.HideSelfVideo;
            var19 = {};
            var19 = var22.bind(var4)(var20, var19);
            var18[3] = var19;
            var19 = var12;
            if(!var19) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var23 = _closure1_slot5;
            var22 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var14];
            var20 = var22.bind(var4)(var20);
            var22 = var20.InviteButton;
            var20 = {};
            var20['channel'] = var21;
            var20['connected'] = var12;
            var19 = var23.bind(var4)(var22, var20);
case 11:
            var18[4] = var19;
            var6['children'] = var18;
            var6 = var17.bind(var4)(var11, var6);
            var5[3] = var6;
            var20 = _closure1_slot5;
            var19 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 19;
            var6 = var11[var6];
            var6 = var19.bind(var4)(var6);
            var17 = var6.VoiceProcessingOptions;
            var6 = {};
            var6 = var20.bind(var4)(var17, var6);
            var5[4] = var6;
            var18 = _closure1_slot6;
            var6 = var11[var7];
            var6 = var19.bind(var4)(var6);
            var17 = var6.TableRowGroup;
            var6 = {};
            var6['hasIcons'] = var13;
            var11 = var11[var14];
            var11 = var19.bind(var4)(var11);
            var19 = var11.VoiceSettingsButton;
            var11 = {};
            var21 = var21.guild_id;
            var11['guildId'] = var21;
            var11 = var20.bind(var4)(var19, var11);
            var19 = new Array(2);
            var19[0] = var11;
            var11 = null;
            var20 = var11 != var24;
            if(!var20) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var23 = _closure1_slot5;
            var22 = _closure1_slot0;
            var21 = _closure1_slot2;
            var21 = var21[var14];
            var21 = var22.bind(var4)(var21);
            var22 = var21.ReportStreamIssueButton;
            var21 = {};
            var21['stream'] = var24;
            var20 = var23.bind(var4)(var22, var21);
case 13:
            var19[1] = var20;
            var6['children'] = var19;
            var6 = var18.bind(var4)(var17, var6);
            var5[5] = var6;
            var6 = null;
            if(!var12) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var6 = null;
            if(!var8) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var16];
            var8 = var12.bind(var4)(var8);
            var8 = var8.EmbeddedActivityLaunchability;
            var8 = var8.CAN_LAUNCH;
            var6 = null;
            if(!(var9 === var8)) { _fun0001_ip = 15; continue _fun0001 }
case 18:
            var9 = _closure1_slot6;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = var11[var7];
            var7 = var12.bind(var4)(var7);
            var8 = var7.TableRowGroup;
            var7 = {};
            var16 = var11[var15];
            var16 = var12.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var11[var15];
            var15 = var12.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.J6rqB7;
            var15 = var16.bind(var17)(var15);
            var7['title'] = var15;
            var7['hasIcons'] = var13;
            var13 = _closure1_slot5;
            var10 = var11[var14];
            var10 = var12.bind(var4)(var10);
            var15 = var10.LeaveActivitiesButton;
            var10 = {};
            var15 = var13.bind(var4)(var15, var10);
            var10 = new Array(3);
            var10[0] = var15;
            var15 = var11[var14];
            var15 = var12.bind(var4)(var15);
            var16 = var15.ShareActivityLogsButton;
            var15 = {};
            var15 = var13.bind(var4)(var16, var15);
            var10[1] = var15;
            var11 = var11[var14];
            var11 = var12.bind(var4)(var11);
            var12 = var11.ToggleShowActivitiesDebugOverlay;
            var11 = {};
            var11 = var13.bind(var4)(var12, var11);
            var10[2] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 15:
            var5[6] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var9.bind(var7)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var4['top'] = var8;
    var _closure1_slot11 = var4;
    var4 = {};
    var8 = 'function VoicePanelVoiceControlsTsx1({offset:offset}){const{isScrolled}=this.__closure;isScrolled.set(offset>0);}';
    var4['code'] = var8;
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function VoicePanelVoiceControls(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var2 = var3.isVisible;
            var _closure2_slot0 = var2;
            var19 = var3.openTab;
            var3 = _closure1_slot8;
            var4 = undefined;
            var10 = var3.bind(var4)();
            var5 = _closure1_slot3;
            var6 = var5.useContext;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 8;
            var3 = var13[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var6.bind(var5)(var3);
            var3 = var3.channelId;
            var _closure2_slot1 = var3;
            var8 = _closure1_slot0;
            var3 = 20;
            var3 = var13[var3];
            var11 = var8.bind(var4)(var3);
            var9 = var11.useStateFromStores;
            var3 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var20 = var9.bind(var11)(var6, var3);
            var3 = 7;
            var3 = var13[var3];
            var9 = var8.bind(var4)(var3);
            var6 = var9.useSharedValue;
            var3 = false;
            var11 = var6.bind(var9)(var3);
            var _closure2_slot2 = var11;
            var9 = var5.useCallback;
            var6 = function s(arg1) {
                var1 = arg1;
                var4 = var1.offset;
                var3 = _closure2_slot2;
                var2 = var3.set;
                var1 = 0;
                var1 = var4 > var1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3 = {};
            var3['isScrolled'] = var11;
            var6['__closure'] = var3;
            var3 = 16758626276795.0;
            var6['__workletHash'] = var3;
            var3 = _closure1_slot12;
            var6['__initData'] = var3;
            var3 = new Array(1);
            var3[0] = var11;
            var9 = var9.bind(var5)(var6, var3);
            var6 = var5.useContext;
            var3 = 21;
            var3 = var13[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.ControlsGestureScrollLock;
            var6 = var6.bind(var5)(var3);
            var3 = {};
            var3['onScrollHandlerWorkletized'] = var9;
            var3 = var6.bind(var4)(var3);
            var15 = var3.onScroll;
            var9 = var3.gestureRef;
            var _closure2_slot3 = var9;
            var16 = var3.scrollerRef;
            var _closure2_slot4 = var16;
            var14 = var3.animatedProps;
            var3 = 22;
            var3 = var13[var3];
            var6 = var8.bind(var4)(var3);
            var3 = var6.useIsScreenReaderEnabled;
            var6 = var3.bind(var6)();
            var12 = var5.useEffect;
            var3 = new Array(2);
            var3[0] = var2;
            var3[1] = var16;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var4 = _closure2_slot4;
                    var3 = null;
                    var2 = var3 != var4;
case 19:
                    if(!var2) { _fun0003_ip = 21; continue _fun0003 }
case 22:
                    var1 = _closure2_slot4;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0003_ip = 21; continue _fun0003 }
case 23:
                    var2 = var3.scrollTo;
                    var1 = {'x': 0, 'y': 0, 'animated': false};
                    var1 = var2.bind(var3)(var1);
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var12.bind(var5)(var2, var3);
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 23;
                    var1 = var6[var1];
                    var4 = undefined;
                    var1 = var5.bind(var4)(var1);
                    var2 = var1.Gesture;
                    var1 = var2.Native;
                    var3 = var1.bind(var2)();
                    var2 = var3.enabled;
                    var1 = 24;
                    var1 = var6[var1];
                    var4 = var5.bind(var4)(var1);
                    var1 = var4.isMetaQuest;
                    var1 = var1.bind(var4)();
                    var1 = !var1;
                    var4 = var2.bind(var3)(var1);
                    var5 = _closure2_slot3;
                    var3 = null;
                    var1 = var4;
                    if(!(var3 != var5)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var3 = var4.simultaneousWithExternalGesture;
                    var2 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2);
case 24:
                    return var1;
                }
            };
            var12 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot7;
            var1 = {};
            var9 = _closure1_slot5;
            var5 = 23;
            var5 = var13[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.GestureDetector;
            var5 = {};
            var5['gesture'] = var12;
            var13 = _closure1_slot9;
            var12 = {};
            if(var6) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var17 = var10.scrollView;
            _fun0002_ip = 28; continue _fun0002;
case 26:
            var17 = var10.scrollViewScreenReader;
case 28:
            var12['style'] = var17;
            var12['ref'] = var16;
            var12['onScroll'] = var15;
            var12['animatedProps'] = var14;
            var14 = _closure1_slot13;
            var12['onMomentumScrollEnd'] = var14;
            var14 = 8.333333333333334;
            var12['scrollEventThrottle'] = var14;
            var14 = _closure1_slot11;
            var12['scrollIndicatorInsets'] = var14;
            var15 = !var6;
            if(!var15) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var17 = _closure1_slot5;
            var16 = _closure1_slot1;
            var18 = _closure1_slot2;
            var14 = 25;
            var14 = var18[var14];
            var16 = var16.bind(var4)(var14);
            var14 = {};
            var18 = var10.blurRegion;
            var14['style'] = var18;
            var15 = var17.bind(var4)(var16, var14);
case 29:
            var14 = new Array(3);
            var14[0] = var15;
            var15 = null;
            var15 = var15 != var20;
            if(!var15) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var18 = _closure1_slot5;
            var17 = _closure1_slot10;
            var16 = {};
            var16['channel'] = var20;
            var16['openTab'] = var19;
            var15 = var18.bind(var4)(var17, var16);
case 31:
            var14[1] = var15;
            var17 = _closure1_slot5;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var15 = 26;
            var15 = var18[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.SafeAreaPaddingView;
            var15 = {};
            var18 = true;
            var15['bottom'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[2] = var15;
            var12['children'] = var14;
            var12 = var3.bind(var4)(var13, var12);
            var5['children'] = var12;
            var8 = var9.bind(var4)(var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var6 = !var6;
            if(!var6) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var9 = _closure1_slot5;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 27;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['shown'] = var11;
            var10 = var10.blurRegion;
            var7['style'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 33:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();