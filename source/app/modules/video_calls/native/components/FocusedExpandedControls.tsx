// app/modules/video_calls/native/components/FocusedExpandedControls.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var12 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function ExpandedControlItemIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.iconSource;
            var3 = var1.showIconSparkle;
            var1 = _closure1_slot23;
            var6 = undefined;
            var11 = var1.bind(var6)();
            var1 = null;
            if(!(var1 != var7)) { _fun0001_ip = 254; continue _fun0001 }
 37:
            var5 = _closure1_slot20;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 17;
            var2 = var12[var9];
            var4 = var10.bind(var6)(var2);
            var2 = {};
            var9 = var12[var9];
            var9 = var10.bind(var6)(var9);
            var9 = var9.Sizes;
            var9 = var9.MEDIUM;
            var2['size'] = var9;
            var2['source'] = var7;
            var7 = var11.formTintColor;
            var2['style'] = var7;
            var7 = true;
            var2['disableColor'] = var7;
            var9 = var5.bind(var6)(var4, var2);
            var2 = var9;
            if(!var3) { _fun0001_ip = 252; continue _fun0001 }
 124:
            var5 = _closure1_slot21;
            var4 = _closure1_slot5;
            var3 = {};
            var7 = new Array(3);
            var7[0] = var9;
            var14 = _closure1_slot20;
            var10 = _closure1_slot7;
            var9 = {};
            var12 = var11.sparkle2;
            var9['style'] = var12;
            var12 = _closure1_slot1;
            var13 = _closure1_slot2;
            var15 = 18;
            var15 = var13[var15];
            var15 = var12.bind(var6)(var15);
            var9['source'] = var15;
            var9 = var14.bind(var6)(var10, var9);
            var7[1] = var9;
            var10 = _closure1_slot20;
            var9 = _closure1_slot7;
            var8 = {};
            var11 = var11.sparkle;
            var8['style'] = var11;
            var11 = 19;
            var11 = var13[var11];
            var11 = var12.bind(var6)(var11);
            var8['source'] = var11;
            var8 = var10.bind(var6)(var9, var8);
            var7[2] = var8;
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 252:
            return var2;
 254:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var4 = function ExpandedControlItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var13 = var1.disabled;
            var17 = var1.iconSource;
            var16 = var1.showIconSparkle;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0002_ip = 28; continue _fun0002 }
 26:
            var16 = false;
 28:
            var11 = var1.label;
            var6 = var1.onPress;
            var7 = var1.onSwitchValueChange;
            var8 = var1.switchValue;
            var5 = var1.trailing;
            var1 = _closure1_slot23;
            var10 = var1.bind(var4)();
            var2 = null;
            var1 = var2 == var5;
            if(!var1) { _fun0002_ip = 80; continue _fun0002 }
 76:
            var1 = var2 != var8;
 80:
            if(!var1) { _fun0002_ip = 173; continue _fun0002 }
 83:
            var3 = _closure1_slot20;
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 20;
            var1 = var15[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.FormSwitch;
            var1 = {};
            var14 = _closure1_slot1;
            var12 = 16;
            var12 = var15[var12];
            var12 = var14.bind(var4)(var12);
            var12 = var12.unsafe_rawColors;
            var12 = var12.BRAND_500;
            var1['tintColor'] = var12;
            var12 = true;
            var1['renderIosBackground'] = var12;
            var1['value'] = var8;
            var1['disabled'] = var13;
            var1['onValueChange'] = var7;
            var5 = var3.bind(var4)(var2, var1);
 173:
            var3 = _closure1_slot20;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 20;
            var1 = var12[var7];
            var1 = var8.bind(var4)(var1);
            var2 = var1.FormRow;
            var1 = {};
            var1['disabled'] = var13;
            var15 = _closure1_slot20;
            var14 = _closure1_slot24;
            var13 = {};
            var13['iconSource'] = var17;
            var13['showIconSparkle'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var1['leading'] = var13;
            var9 = _closure1_slot20;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.FormLabel;
            var7 = {};
            var7['text'] = var11;
            var10 = var10.formColor;
            var7['style'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var1['label'] = var7;
            var1['onPress'] = var6;
            var1['trailing'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot25 = var4;
    var1 = function useIsGridMode(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot1;
        var8 = _closure1_slot2;
        var4 = 60;
        var4 = var8[var4];
        var7 = undefined;
        var4 = var5.bind(var7)(var4);
        var6 = var4.bind(var7)(var2);
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = 21;
        var4 = var8[var4];
        var5 = var5.bind(var7)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot9;
        var3 = new Array(1);
        var3[0] = var7;
        var7 = var2.id;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = _closure2_slot1;
                var1 = !var1;
                if(!var1) { _fun0003_ip = 46; continue _fun0003 }
 13:
                var4 = _closure1_slot9;
                var3 = var4.getSelectedParticipantId;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                var1 = var2 == var3;
 46:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = native4;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.View;
    var _closure1_slot5 = var8;
    var8 = var5.Pressable;
    var _closure1_slot6 = var8;
    var5 = var5.Image;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot13 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot14 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot15 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AnalyticsSections;
    var _closure1_slot16 = var8;
    var5 = var5.PlatformTypes;
    var _closure1_slot17 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SelfStreamAndVideoAlertType;
    var _closure1_slot18 = var5;
    var5 = 13;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.MediaEngineContextTypes;
    var _closure1_slot19 = var5;
    var5 = 14;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot20 = var8;
    var8 = var5.jsxs;
    var _closure1_slot21 = var8;
    var5 = var5.Fragment;
    var _closure1_slot22 = var5;
    var5 = 15;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = 16;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.ICON_PRIMARY;
    var10['tintColor'] = var13;
    var5['formTintColor'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.HEADER_PRIMARY;
    var10['color'] = var13;
    var5['formColor'] = var10;
    var10 = {'position': 'absolute', 'bottom': 4294967292, 'right': '70%'};
    var5['sparkle'] = var10;
    var10 = {'position': 'absolute', 'right': 4294967291, 'height': 10, 'width': 10};
    var5['sparkle2'] = var10;
    var10 = {'paddingLeft': 8, 'paddingRight': 8, 'paddingTop': 4, 'paddingBottom': 4};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var10['borderRadius'] = var13;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BUTTON_OUTLINE_BRAND_BORDER;
    var10['backgroundColor'] = var11;
    var5['newBadge'] = var10;
    var10 = {};
    var11 = 'uppercase';
    var10['textTransform'] = var11;
    var5['newBadgeText'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot23 = var5;
    var5 = 71;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/components/FocusedExpandedControls.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ExpandedControlItem'] = var4;
    var4 = function StreamVolumeItem() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = _closure1_slot23;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 21;
            var3 = var18[var1];
            var7 = var17.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot11;
            var4 = new Array(2);
            var4[0] = var3;
            var3 = _closure1_slot12;
            var4[1] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure1_slot11;
                    var1 = var2.getLastActiveStream;
                    var2 = var1.bind(var2)();
                    var5 = null;
                    var4 = var5 != var2;
                    var1 = null;
                    if(!var4) { _fun0005_ip = 57; continue _fun0005 }
 28:
                    var4 = var2.ownerId;
                    var6 = _closure1_slot12;
                    var3 = var6.getId;
                    var3 = var3.bind(var6)();
                    var1 = null;
                    if(!(var4 !== var3)) { _fun0005_ip = 57; continue _fun0005 }
 54:
                    var1 = var2;
 57:
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var4, var3);
            var _closure2_slot0 = var3;
            var1 = var18[var1];
            var7 = var17.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot13;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var2 = var1 != var2;
                    var1 = 0;
                    if(!var2) { _fun0006_ip = 57; continue _fun0006 }
 18:
                    var5 = _closure1_slot13;
                    var4 = var5.getLocalVolume;
                    var3 = _closure2_slot0;
                    var3 = var3.ownerId;
                    var2 = _closure1_slot19;
                    var2 = var2.STREAM;
                    var1 = var4.bind(var5)(var3, var2);
 57:
                    return var1;
                }
            };
            var13 = var6.bind(var7)(var4, var1);
            var7 = _closure1_slot4;
            var6 = var7.useCallback;
            var4 = new Array(1);
            var4[0] = var3;
            var1 = function(arg1) {
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 22;
                var3 = var6[var1];
                var1 = undefined;
                var8 = var5.bind(var1)(var3);
                var3 = _closure2_slot0;
                var4 = null;
                var7 = var4 != var3;
                var4 = 'Can not set stream volume without active stream';
                var4 = var8.bind(var1)(var7, var4);
                var4 = 23;
                var4 = var6[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.setLocalVolume;
                var4 = var3.ownerId;
                var2 = _closure1_slot19;
                var3 = var2.STREAM;
                var2 = arg1;
                var2 = var5.bind(var6)(var4, var2, var3);
                return var1;
            };
            var12 = var6.bind(var7)(var1, var4);
            var6 = _closure1_slot21;
            var4 = _closure1_slot22;
            var1 = {};
            var10 = _closure1_slot20;
            var7 = 20;
            var8 = var18[var7];
            var8 = var17.bind(var5)(var8);
            var9 = var8.FormLabel;
            var8 = {};
            var14 = 24;
            var15 = var18[var14];
            var15 = var17.bind(var5)(var15);
            var19 = var15.intl;
            var15 = var19.string;
            var14 = var18[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.pEAl4e;
            var14 = var15.bind(var19)(var14);
            var8['text'] = var14;
            var14 = var11.formColor;
            var11 = new Array(2);
            var11[0] = var14;
            var15 = {};
            var14 = 16;
            var15['marginBottom'] = var14;
            var11[1] = var15;
            var8['style'] = var11;
            var9 = var10.bind(var5)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot20;
            var10 = _closure1_slot1;
            var9 = 25;
            var9 = var18[var9];
            var10 = var10.bind(var5)(var9);
            var9 = {};
            var15 = 26;
            var15 = var18[var15];
            var17 = var17.bind(var5)(var15);
            var15 = var17.isAndroid;
            var17 = var15.bind(var17)();
            var15 = undefined;
            if(!var17) { _fun0004_ip = 331; continue _fun0004 }
 324:
            var15 = function() {
                var1 = true;
                return var1;
            };
 331:
            var9['onResponderGrant'] = var15;
            var9['value'] = var13;
            var9['onValueChange'] = var12;
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var15 = var12[var14];
            var15 = var13.bind(var5)(var15);
            var15 = var15.unsafe_rawColors;
            var15 = var15.WHITE_500;
            var9['color'] = var15;
            var12 = var12[var14];
            var12 = var13.bind(var5)(var12);
            var12 = var12.unsafe_rawColors;
            var12 = var12.PRIMARY_300;
            var9['maxTrackTintColor'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var8[1] = var9;
            var1['children'] = var8;
            var6 = var6.bind(var5)(var4, var1);
            var1 = null;
            var3 = var1 != var3;
            if(!var3) { _fun0004_ip = 470; continue _fun0004 }
 431:
            var4 = _closure1_slot20;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var2 = var3.bind(var5)(var2);
            var3 = var2.FormRow;
            var2 = {};
            var2['label'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 470:
            return var1;
        }
    };
    var3['StreamVolumeItem'] = var4;
    var4 = function DisconnectCallButton(arg1) {
        var2 = arg1;
        var2 = var2.channel;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot20;
        var3 = _closure1_slot25;
        var2 = {};
        var1 = function onPress() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 27;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.handleDisconnect;
            var2 = _closure2_slot0;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2['onPress'] = var1;
        var7 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 28;
        var6 = var9[var1];
        var1 = undefined;
        var6 = var7.bind(var1)(var6);
        var2['iconSource'] = var6;
        var8 = _closure1_slot0;
        var5 = 24;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var1)(var5);
        var5 = var5.t;
        var5 = var5.4ry6ys;
        var5 = var6.bind(var7)(var5);
        var2['label'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['DisconnectCallButton'] = var4;
    var4 = function AudioRouteButton(arg1) {
        var1 = arg1;
        var2 = var1.channelId;
        var _closure2_slot0 = var2;
        var1 = var1.isConnectedToVoiceChannel;
        var _closure2_slot1 = var1;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 27;
        var2 = var9[var2];
        var4 = undefined;
        var3 = var8.bind(var4)(var2);
        var2 = var3.useMaskedSpeakerStates;
        var2 = var2.bind(var3)();
        var5 = var2.routeSource;
        var3 = _closure1_slot20;
        var2 = _closure1_slot25;
        var1 = {};
        var6 = function onPress() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 29;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.showAudioOutputSelector;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['onPress'] = var6;
        var1['iconSource'] = var5;
        var5 = 24;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.A/Ly//;
        var5 = var6.bind(var7)(var5);
        var1['label'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['AudioRouteButton'] = var4;
    var4 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var5 = var1.channel;
            var9 = var1.disabled;
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 30;
            var3 = var10[var2];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)(var5);
            var7 = var3.onPress;
            var6 = var3.imgSource;
            var5 = var3.text;
            var8 = var3.isFeatureEnabled;
            var3 = _closure1_slot0;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.handleOnPressWithOnboard;
            var7 = var2.bind(var3)(var7);
            var3 = _closure1_slot20;
            var2 = _closure1_slot25;
            var1 = {};
            var8 = !var8;
            if(var8) { _fun0007_ip = 108; continue _fun0007 }
 105:
            var8 = var9;
 108:
            var1['disabled'] = var8;
            var1['onPress'] = var7;
            var1['iconSource'] = var6;
            var1['label'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ScreenshareButton'] = var4;
    var4 = function SoundboardButton(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var12 = var1.channel;
            var _closure2_slot0 = var12;
            var1 = _closure1_slot23;
            var4 = undefined;
            var14 = var1.bind(var4)();
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 31;
            var1 = var6[var1];
            var3 = var9.bind(var4)(var1);
            var2 = var3.UNSAFE_useIsDismissibleContentDismissed;
            var1 = 32;
            var1 = var6[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.DismissibleContent;
            var1 = var1.SOUNDBOARD_MOBILE_NEW_BADGE;
            var1 = var2.bind(var3)(var1);
            var5 = !var1;
            var8 = _closure1_slot4;
            var3 = var8.useEffect;
            var2 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 33;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.maybeFetchSoundboardSounds;
                var2 = var2.bind(var5)();
                var2 = 34;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var3 = var2.FrecencyUserSettingsActionCreators;
                var2 = var3.loadIfNecessary;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var8)(var2, var1);
            var3 = _closure1_slot20;
            var2 = _closure1_slot25;
            var1 = {};
            var8 = _closure1_slot1;
            var11 = 35;
            var11 = var6[var11];
            var11 = var8.bind(var4)(var11);
            var11 = var11.bind(var4)(var12);
            var11 = !var11;
            var1['disabled'] = var11;
            var7 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 36;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showSoundboardSoundPickerActionSheet;
                var2 = {};
                var5 = _closure2_slot0;
                var2['channel'] = var5;
                var5 = 'call control drawer';
                var2['analyticsSource'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onPress'] = var7;
            var7 = 37;
            var7 = var6[var7];
            var7 = var8.bind(var4)(var7);
            var1['iconSource'] = var7;
            var17 = 24;
            var7 = var6[var17];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var6[var17];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.ABjMWF;
            var6 = var7.bind(var8)(var6);
            var1['label'] = var6;
            var6 = undefined;
            if(!var5) { _fun0008_ip = 375; continue _fun0008 }
 236:
            var9 = _closure1_slot20;
            var8 = _closure1_slot5;
            var7 = {};
            var11 = var14.newBadge;
            var7['style'] = var11;
            var12 = _closure1_slot20;
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 38;
            var10 = var13[var10];
            var10 = var16.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'always-white'};
            var14 = var14.newBadgeText;
            var10['style'] = var14;
            var14 = var13[var17];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var13[var17];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.y2b7CA;
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 375:
            var1['trailing'] = var6;
            var1['showIconSparkle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['SoundboardButton'] = var4;
    var4 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var3 = var1.channel;
            var8 = var1.disabled;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0009_ip = 21; continue _fun0009 }
 19:
            var8 = false;
 21:
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 39;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var6 = var1.bind(var4)(var3);
            var3 = _closure1_slot0;
            var1 = 40;
            var1 = var7[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.createDeafHandler;
            var3 = var1.bind(var3)(var6);
            var1 = var3.deaf;
            var7 = var3.onPress;
            var6 = _closure1_slot2;
            if(var1) { _fun0009_ip = 103; continue _fun0009 }
 94:
            var1 = 42;
            var1 = var6[var1];
            _fun0009_ip = 110; continue _fun0009;
 103:
            var3 = 41;
            var1 = var6[var3];
 110:
            var6 = var2.bind(var4)(var1);
            var3 = _closure1_slot20;
            var2 = _closure1_slot25;
            var1 = {};
            var1['disabled'] = var8;
            var1['onPress'] = var7;
            var1['iconSource'] = var6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 24;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.wjcRFR;
            var5 = var6.bind(var7)(var5);
            var1['label'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['DeafenButton'] = var4;
    var4 = function(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var7 = var1.channel;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 43;
            var1 = var3[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var5 = var1.bind(var4)(var7);
            var2 = _closure1_slot0;
            var1 = 21;
            var1 = var3[var1];
            var11 = var2.bind(var4)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var1;
            var8 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentEmbeddedActivity;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = new Array(0);
            var8 = var10.bind(var11)(var9, var8, var1);
            var1 = 44;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.invite;
            var1 = null;
            var9 = var1 == var8;
            var1 = undefined;
            if(var9) { _fun0010_ip = 125; continue _fun0010 }
 120:
            var1 = var8.applicationId;
 125:
            var1 = var2.bind(var3)(var7, var5, var1);
            var5 = var1.label;
            var7 = var1.onPress;
            var3 = _closure1_slot20;
            var2 = _closure1_slot25;
            var1 = {};
            var1['onPress'] = var7;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 45;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var1['iconSource'] = var6;
            var1['label'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['InviteButton'] = var4;
    var4 = function() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 44;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = var3.shareActivityLogs;
        var2 = var2.bind(var3)();
        var5 = var2.label;
        var6 = var2.icon;
        var7 = var2.onPress;
        var3 = _closure1_slot20;
        var2 = _closure1_slot25;
        var1 = {};
        var1['onPress'] = var7;
        var1['iconSource'] = var6;
        var1['label'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['ShareActivityLogsButton'] = var4;
    var4 = function() {
        var4 = _closure1_slot20;
        var3 = _closure1_slot25;
        var2 = {};
        var1 = function onPress() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = _closure1_slot8;
                var2 = var3.getCurrentEmbeddedActivity;
                var6 = var2.bind(var3)();
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 46;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.leaveActivity;
                var2 = {};
                var5 = null;
                var8 = var5 == var6;
                var7 = undefined;
                if(var8) { _fun0011_ip = 63; continue _fun0011 }
 58:
                var7 = var6.location;
 63:
                var2['location'] = var7;
                var7 = var5 == var6;
                var5 = undefined;
                if(var7) { _fun0011_ip = 81; continue _fun0011 }
 76:
                var5 = var6.applicationId;
 81:
                var2['applicationId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var2['onPress'] = var1;
        var7 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 47;
        var6 = var9[var1];
        var1 = undefined;
        var6 = var7.bind(var1)(var6);
        var2['iconSource'] = var6;
        var8 = _closure1_slot0;
        var5 = 24;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var1)(var5);
        var5 = var5.t;
        var5 = var5.R/FK4O;
        var5 = var6.bind(var7)(var5);
        var2['label'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['LeaveActivitiesButton'] = var4;
    var4 = function VoiceSettingsButton(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var8 = var1.onPress;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 44;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.voiceSettings;
            var2 = var2.bind(var3)();
            var5 = var2.label;
            var6 = var2.icon;
            var7 = var2.onPress;
            var3 = _closure1_slot20;
            var2 = _closure1_slot25;
            var1 = {};
            var9 = null;
            if(!(var9 != var8)) { _fun0012_ip = 77; continue _fun0012 }
 74:
            var7 = var8;
 77:
            var1['onPress'] = var7;
            var1['iconSource'] = var6;
            var1['label'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['VoiceSettingsButton'] = var4;
    var4 = function ToggleShowPip() {
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 21;
        var1 = var11[var1];
        var4 = undefined;
        var6 = var10.bind(var4)(var1);
        var3 = var6.useStateFromStores;
        var1 = _closure1_slot15;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure1_slot15;
            var1 = var2.isPipEnabledWhileFocusedOnActivityOrStream;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6 = var3.bind(var6)(var2, var1);
        var3 = _closure1_slot20;
        var2 = _closure1_slot25;
        var1 = {};
        var8 = _closure1_slot1;
        var7 = 48;
        var7 = var11[var7];
        var7 = var8.bind(var4)(var7);
        var1['iconSource'] = var7;
        var7 = 24;
        var8 = var11[var7];
        var8 = var10.bind(var4)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.l/ku7e;
        var7 = var8.bind(var9)(var7);
        var1['label'] = var7;
        var1['switchValue'] = var6;
        var5 = function onSwitchValueChange(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 49;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.setPipEnabledWhileFocusedOnActivityOrStream;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['onSwitchValueChange'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['ToggleShowPip'] = var4;
    var4 = function ToggleShowActivitiesDebugOverlay() {
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 21;
        var1 = var11[var1];
        var4 = undefined;
        var6 = var10.bind(var4)(var1);
        var3 = var6.useStateFromStores;
        var1 = _closure1_slot15;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure1_slot15;
            var1 = var2.getShowActivitiesDebugOverlay;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6 = var3.bind(var6)(var2, var1);
        var3 = _closure1_slot20;
        var2 = _closure1_slot25;
        var1 = {};
        var8 = _closure1_slot1;
        var7 = 50;
        var7 = var11[var7];
        var7 = var8.bind(var4)(var7);
        var1['iconSource'] = var7;
        var7 = 24;
        var8 = var11[var7];
        var8 = var10.bind(var4)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.qv5/SE;
        var7 = var8.bind(var9)(var7);
        var1['label'] = var7;
        var1['switchValue'] = var6;
        var5 = function onSwitchValueChange(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 51;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY';
            var2['type'] = var5;
            var5 = arg1;
            var2['visible'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['onSwitchValueChange'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['ToggleShowActivitiesDebugOverlay'] = var4;
    var4 = function ToggleNoiseCancellation() {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 21;
            var2 = var7[var4];
            var5 = undefined;
            var11 = var6.bind(var5)(var2);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot13;
            var9 = new Array(1);
            var9[0] = var3;
            var2 = function() {
                var2 = _closure1_slot13;
                var1 = var2.isNoiseCancellationSupported;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var10.bind(var11)(var9, var2);
            var4 = var7[var4];
            var7 = var6.bind(var5)(var4);
            var6 = var7.useStateFromStores;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getNoiseCancellation;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var6.bind(var7)(var4, var3);
            var _closure2_slot0 = var7;
            var6 = undefined;
            if(!var2) { _fun0013_ip = 108; continue _fun0013 }
 101:
            var6 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var4 = 52;
                    var2 = var3[var4];
                    var1 = undefined;
                    var2 = var8.bind(var1)(var2);
                    var7 = var2.Storage;
                    var5 = var7.get;
                    var2 = 53;
                    var3 = var3[var2];
                    var3 = var8.bind(var1)(var3);
                    var3 = var3.StorageKeys;
                    var3 = var3.KRISP_ONBOARD;
                    var3 = var5.bind(var7)(var3);
                    if(var3) { _fun0014_ip = 223; continue _fun0014 }
 71:
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = var8[var4];
                    var4 = var3.bind(var1)(var4);
                    var7 = var4.Storage;
                    var5 = var7.set;
                    var2 = var8[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.StorageKeys;
                    var4 = var2.KRISP_ONBOARD;
                    var2 = true;
                    var2 = var5.bind(var7)(var4, var2);
                    var4 = _closure1_slot1;
                    var2 = 54;
                    var2 = var8[var2];
                    var7 = var4.bind(var1)(var2);
                    var5 = var7.openLazy;
                    var2 = 56;
                    var2 = var8[var2];
                    var9 = var3.bind(var1)(var2);
                    var2 = 55;
                    var4 = var8[var2];
                    var2 = var8.paths;
                    var4 = var9.bind(var1)(var4, var2);
                    var2 = 57;
                    var2 = var8[var2];
                    var2 = var3.bind(var1)(var2);
                    var3 = var2.NUF_KRISP_ACTIONSHEET_KEY;
                    var2 = {};
                    var8 = function callback() {
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 54;
                        var2 = var6[var2];
                        var5 = undefined;
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.hideActionSheet;
                        var4 = _closure1_slot0;
                        var1 = 57;
                        var1 = var6[var1];
                        var1 = var4.bind(var5)(var1);
                        var1 = var1.NUF_KRISP_ACTIONSHEET_KEY;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2['callback'] = var8;
                    var2 = var5.bind(var7)(var4, var3, var2);
                    _fun0014_ip = 281; continue _fun0014;
 223:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 23;
                    var2 = var4[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.setNoiseCancellation;
                    var2 = _closure2_slot0;
                    var3 = !var2;
                    var2 = {};
                    var6 = _closure1_slot16;
                    var6 = var6.NOISE_CANCELLATION_POPOUT;
                    var2['section'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
 281:
                    return var1;
                }
            };
 108:
            var1 = null;
            var2 = var1 == var6;
            if(var2) { _fun0013_ip = 246; continue _fun0013 }
 120:
            var4 = _closure1_slot20;
            var3 = _closure1_slot25;
            var2 = {};
            var2['onPress'] = var6;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            if(var7) { _fun0013_ip = 154; continue _fun0013 }
 145:
            var9 = 59;
            var9 = var12[var9];
            _fun0013_ip = 161; continue _fun0013;
 154:
            var11 = 58;
            var9 = var12[var11];
 161:
            var9 = var10.bind(var5)(var9);
            var2['iconSource'] = var9;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 24;
            var9 = var12[var8];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.t8QhiY;
            var8 = var9.bind(var10)(var8);
            var2['label'] = var8;
            var2['switchValue'] = var7;
            var2['onSwitchValueChange'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 246:
            return var1;
        }
    };
    var3['ToggleNoiseCancellation'] = var4;
    var4 = function RtcDebugPanelButton(arg1) {
        var1 = arg1;
        var5 = var1.onOpenRTCDebugOverlay;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 44;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = var3.rtcDebugPanel;
        var2 = var2.bind(var3)(var5);
        var6 = var2.label;
        var7 = var2.onPress;
        var5 = var2.icon;
        var3 = _closure1_slot20;
        var2 = _closure1_slot25;
        var1 = {};
        var1['onPress'] = var7;
        var1['label'] = var6;
        var1['iconSource'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['RtcDebugPanelButton'] = var4;
    var4 = function HideNonVideoParticipants(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var2 = arg1;
            var7 = var2.channel;
            var _closure2_slot0 = var7;
            var3 = _closure1_slot26;
            var5 = undefined;
            var3 = var3.bind(var5)(var7);
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 21;
            var6 = var8[var6];
            var10 = var4.bind(var5)(var6);
            var9 = var10.useStateFromStores;
            var11 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var11;
            var1 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getVoiceParticipantsHidden;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var9.bind(var10)(var6, var1);
            var1 = 44;
            var1 = var8[var1];
            var4 = var4.bind(var5)(var1);
            var1 = var4.videoParticipantsHidden;
            var1 = var1.bind(var4)(var7, var6);
            var8 = var1.label;
            var6 = var1.onPress;
            var7 = var1.switchValue;
            var1 = null;
            if(!var3) { _fun0015_ip = 153; continue _fun0015 }
 123:
            var4 = _closure1_slot20;
            var3 = _closure1_slot25;
            var2 = {};
            var2['label'] = var8;
            var2['switchValue'] = var7;
            var2['onSwitchValueChange'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 153:
            return var1;
        }
    };
    var3['HideNonVideoParticipants'] = var4;
    var4 = function HideSelfVideo(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var2 = var1.channel;
            var4 = var1.mediaEngineContext;
            var5 = undefined;
            if(!(var4 === var5)) { _fun0016_ip = 35; continue _fun0016 }
 22:
            var3 = _closure1_slot19;
            var4 = var3.STREAM;
 35:
            var3 = var1.userId;
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var1 = _closure1_slot26;
            var2 = var1.bind(var5)(var2);
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 63;
            var1 = var9[var1];
            var1 = var7.bind(var5)(var1);
            var4 = var1.bind(var5)(var3, var4);
            var3 = _closure1_slot3;
            var1 = 3;
            var3 = var3.bind(var5)(var4, var1);
            var1 = 0;
            var4 = var3[var1];
            var1 = 1;
            var7 = var3[var1];
            _closure2_slot0 = var7;
            var1 = 2;
            var1 = var3[var1];
            _closure2_slot1 = var1;
            var3 = _closure1_slot0;
            var1 = 21;
            var1 = var9[var1];
            var10 = var3.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot10;
                var1 = var1.disableHideSelfStreamAndVideoConfirmationAlert;
                return var1;
            };
            var1 = var9.bind(var10)(var3, var1);
            _closure2_slot2 = var1;
            var1 = null;
            if(!var4) { _fun0016_ip = 286; continue _fun0016 }
 186:
            var1 = null;
            if(!var2) { _fun0016_ip = 286; continue _fun0016 }
 191:
            var4 = _closure1_slot20;
            var3 = _closure1_slot25;
            var2 = {};
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 24;
            var9 = var12[var8];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.MH8ESU;
            var8 = var9.bind(var10)(var8);
            var2['label'] = var8;
            var7 = !var7;
            var2['switchValue'] = var7;
            var6 = function onSwitchValueChange() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0017_ip = 56; continue _fun0017 }
 12:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0017_ip = 56; continue _fun0017 }
 19:
                    var2 = _closure1_slot18;
                    var5 = var2.VIDEO;
                    var4 = function openHideSelfStreamAndVideoConfirmDialog(arg1, arg2) {
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var1 = arg2;
                        var _closure4_slot1 = var1;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 61;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.openLazy;
                        var2 = {};
                        var5 = function importer() {
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 56;
                            var2 = var1[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = 62;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var3 = var3.bind(var4)(var2, var1);
                            var2 = var3.then;
                            var1 = function(arg1) {
                                var2 = arg1;
                                var2 = var2.default;
                                var _closure6_slot0 = var2;
                                var1 = function(arg1) {
                                    var4 = _closure1_slot20;
                                    var3 = _closure6_slot0;
                                    var2 = {};
                                    var7 = arg1;
                                    var8 = var2;
                                    var1 = copyDataProperties(var8, var7);
                                    var6 = _closure4_slot0;
                                    var5 = 'type';
                                    var2[var5] = var6;
                                    var5 = _closure4_slot1;
                                    var1 = 'onConfirm';
                                    var2[var1] = var5;
                                    var1 = undefined;
                                    var1 = var4.bind(var1)(var3, var2);
                                    return var1;
                                };
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var2['importer'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = undefined;
                    var3 = function() {
                        var3 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var2 = !var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3 = var4.bind(var2)(var5, var3);
                    return var2;
 56:
                    var3 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var2 = !var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var2['onSwitchValueChange'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 286:
            return var1;
        }
    };
    var3['HideSelfVideo'] = var4;
    var4 = function ReportStreamIssueButton(arg1) {
        var1 = arg1;
        var5 = var1.stream;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 44;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = var3.reportStreamIssue;
        var2 = var2.bind(var3)(var5);
        var6 = var2.label;
        var7 = var2.icon;
        var5 = var2.onPress;
        var3 = _closure1_slot20;
        var2 = _closure1_slot25;
        var1 = {};
        var1['iconSource'] = var7;
        var1['label'] = var6;
        var1['onPress'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['ReportStreamIssueButton'] = var4;
    var4 = function GameConsoleAccountItem(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var10 = var1.channel;
            var _closure2_slot0 = var10;
            var12 = var1.account;
            var8 = var1.onPress;
            var _closure2_slot1 = var8;
            var1 = var1.connected;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var _closure2_slot3 = var5;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 64;
            var3 = var3[var4];
            var6 = var6.bind(var5)(var3);
            var3 = var6.useIsVoiceChannelLocked;
            var3 = var3.bind(var6)(var10);
            if(!var3) { _fun0018_ip = 95; continue _fun0018 }
 82:
            var6 = var10.isPrivate;
            var6 = var6.bind(var10)();
            var3 = !var6;
 95:
            _closure2_slot2 = var3;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = var9[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.bind(var5)(var10);
            var7 = _closure1_slot0;
            var6 = 21;
            var6 = var9[var6];
            var11 = var7.bind(var5)(var6);
            var9 = var11.useStateFromStores;
            var6 = _closure1_slot14;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot14;
                var2 = var3.isInChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6 = var9.bind(var11)(var7, var6);
            var9 = !var6;
            if(!var9) { _fun0018_ip = 176; continue _fun0018 }
 173:
            var9 = var4;
 176:
            if(var9) { _fun0018_ip = 182; continue _fun0018 }
 179:
            var9 = var3;
 182:
            var6 = _closure1_slot4;
            var7 = var6.useCallback;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 65;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.open;
                    var2 = {};
                    var7 = _closure2_slot2;
                    var12 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var10 = 24;
                    var9 = var8[var10];
                    var9 = var12.bind(var1)(var9);
                    var11 = var9.intl;
                    var9 = var11.string;
                    var8 = var8[var10];
                    var8 = var12.bind(var1)(var8);
                    var8 = var8.t;
                    if(var7) { _fun0019_ip = 100; continue _fun0019 }
 87:
                    var7 = var8.rZfiNj;
                    var7 = var9.bind(var11)(var7);
                    _fun0019_ip = 111; continue _fun0019;
 100:
                    var8 = var8.rimHDQ;
                    var7 = var9.bind(var11)(var8);
 111:
                    var2['key'] = var7;
                    var5 = _closure2_slot2;
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var7 = var6[var10];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var6[var10];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.t;
                    if(var5) { _fun0019_ip = 176; continue _fun0019 }
 163:
                    var5 = var6.rZfiNj;
                    var5 = var7.bind(var8)(var5);
                    _fun0019_ip = 187; continue _fun0019;
 176:
                    var6 = var6.rimHDQ;
                    var5 = var7.bind(var8)(var6);
 187:
                    var2['content'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var7 = var7.bind(var6)(var3, var4);
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 66;
            var3 = var11[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useOnConnectToConsole;
            var10 = var3.bind(var4)(var10, var12);
            _closure2_slot3 = var10;
            var4 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var8;
            var2 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0020_ip = 31; continue _fun0020 }
 23:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
 31:
                    return var1;
                }
            };
            var10 = var4.bind(var6)(var2, var3);
            var3 = var12.type;
            var2 = _closure1_slot17;
            var2 = var2.XBOX;
            if(!(var3 !== var2)) { _fun0018_ip = 482; continue _fun0018 }
 300:
            var2 = _closure1_slot17;
            var2 = var2.PLAYSTATION;
            if(!(var3 !== var2)) { _fun0018_ip = 406; continue _fun0018 }
 314:
            var2 = _closure1_slot17;
            var2 = var2.PLAYSTATION_STAGING;
            var11 = undefined;
            if(!(var3 === var2)) { _fun0018_ip = 404; continue _fun0018 }
 330:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 24;
            var4 = var8[var2];
            var4 = var3.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.t;
            if(var1) { _fun0018_ip = 390; continue _fun0018 }
 377:
            var2 = var3.bhdB9/;
            var2 = var4.bind(var6)(var2);
            _fun0018_ip = 401; continue _fun0018;
 390:
            var3 = var3.BDiXtb;
            var2 = var4.bind(var6)(var3);
 401:
            var11 = var2;
 404:
            _fun0018_ip = 480; continue _fun0018;
 406:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 24;
            var4 = var8[var2];
            var4 = var3.bind(var5)(var4);
            var6 = var4.intl;
            var4 = var6.string;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.t;
            if(var1) { _fun0018_ip = 466; continue _fun0018 }
 453:
            var2 = var3.QxEYDg;
            var2 = var4.bind(var6)(var2);
            _fun0018_ip = 477; continue _fun0018;
 466:
            var3 = var3.vzfxmZ;
            var2 = var4.bind(var6)(var3);
 477:
            var11 = var2;
 480:
            _fun0018_ip = 556; continue _fun0018;
 482:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 24;
            var3 = var8[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var8[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            if(var1) { _fun0018_ip = 542; continue _fun0018 }
 529:
            var1 = var2.E8euSk;
            var1 = var3.bind(var4)(var1);
            _fun0018_ip = 553; continue _fun0018;
 542:
            var2 = var2.qVE/VF;
            var1 = var3.bind(var4)(var2);
 553:
            var11 = var1;
 556:
            var1 = null;
            var2 = var1 == var11;
            if(var2) { _fun0018_ip = 660; continue _fun0018 }
 565:
            var4 = _closure1_slot20;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = undefined;
            if(!var9) { _fun0018_ip = 583; continue _fun0018 }
 580:
            var6 = var7;
 583:
            var2['onPress'] = var6;
            var8 = _closure1_slot20;
            var7 = _closure1_slot25;
            var6 = {};
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 67;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var12 = var12.type;
            var12 = var13.bind(var5)(var12);
            var6['iconSource'] = var12;
            var6['label'] = var11;
            var6['onPress'] = var10;
            var6['disabled'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 660:
            return var1;
        }
    };
    var3['GameConsoleAccountItem'] = var4;
    var2 = function TransferCallButton(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = arg1;
            var7 = var1.disabled;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0021_ip = 18; continue _fun0021 }
 16:
            var7 = false;
 18:
            var1 = var1.channelId;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var4;
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 68;
            var1 = var10[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.bind(var4)();
            _closure2_slot1 = var1;
            var3 = _closure1_slot20;
            var2 = _closure1_slot25;
            var1 = {};
            var1['disabled'] = var7;
            var7 = 69;
            var7 = var10[var7];
            var7 = var8.bind(var4)(var7);
            var1['iconSource'] = var7;
            var9 = _closure1_slot0;
            var6 = 24;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.PlwgdX;
            var6 = var7.bind(var8)(var6);
            var1['label'] = var6;
            var5 = function onPress() {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0022_ip = 58; continue _fun0022 }
 13:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 70;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.handoffRemote;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2, var1);
 58:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['TransferCallButton'] = var2;
    return var1;
})();