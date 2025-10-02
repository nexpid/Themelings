// app/modules/video_calls/native/components/ChannelCallHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var17 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var9;
    var1 = function UsersButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var1 = var1.channel;
            var _closure2_slot0 = var1;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 15;
            var1 = var8[var1];
            var4 = undefined;
            var7 = var2.bind(var4)(var1);
            var3 = var7.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot6;
                    var4 = var5.getVoiceParticipantsHidden;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var4 = var4.bind(var5)(var1);
                    var1 = undefined;
                    if(!var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var4 = _closure1_slot6;
                    var3 = var4.getUserParticipantCount;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 2:
                    return var1;
                }
            };
            var7 = var3.bind(var7)(var2, var1);
            var1 = _closure1_slot17;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot14;
            var2 = _closure1_slot1;
            var1 = 16;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = null;
            if(!(var8 == var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = var9.defaultNavigatorIcon;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var8 = var9.navigatorIcon;
case 6:
            var1['containerStyle'] = var8;
            var1['membersCount'] = var7;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 19;
            var9 = var8[var7];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var8[var7];
            var7 = var11.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.hl1V+f;
            var7 = var9.bind(var10)(var7);
            var1['accessibilityLabel'] = var7;
            var7 = _closure1_slot1;
            var6 = 42;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var1['source'] = var6;
            var5 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openVoiceChannelActionSheet;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var2 = function ChannelCallHeaderBase(arg1) {
        var1 = arg1;
        var10 = var1.channel;
        var6 = var1.children;
        var13 = var1.showArrowIcon;
        var11 = var1.theme;
        var12 = var1.showConnecting;
        var1 = _closure1_slot17;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var3 = _closure1_slot15;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var5.header;
        var1['style'] = var5;
        var5 = 'box-none';
        var1['pointerEvents'] = var5;
        var9 = _closure1_slot14;
        var8 = _closure1_slot18;
        var5 = {};
        var5['theme'] = var11;
        var5['channel'] = var10;
        var5['useArrowIcon'] = var13;
        var8 = var9.bind(var4)(var8, var5);
        var5 = new Array(3);
        var5[0] = var8;
        var9 = _closure1_slot14;
        var8 = _closure1_slot19;
        var7 = {};
        var7['showConnecting'] = var12;
        var7['theme'] = var11;
        var7['channel'] = var10;
        var7 = var9.bind(var4)(var8, var7);
        var5[1] = var7;
        var5[2] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot24 = var2;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var17.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var15 = 1;
    var5 = var9[var15];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var17.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var11 = 4;
    var4 = var9[var11];
    var4 = var8.bind(var1)(var4);
    var4 = var4.isGuildScheduledEventActive;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var9[var4];
    var4 = var17.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var9[var4];
    var4 = var17.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var9[var4];
    var4 = var17.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var12 = 8;
    var4 = var9[var12];
    var4 = var8.bind(var1)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot11 = var5;
    var5 = var4.ChannelTypes;
    var _closure1_slot12 = var5;
    var14 = var4.Fonts;
    var4 = 9;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot14 = var5;
    var5 = var4.jsxs;
    var _closure1_slot15 = var5;
    var4 = var4.Fragment;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var9[var4];
    var7 = var8.bind(var1)(var4);
    var5 = var7.createStyles;
    var4 = {};
    var10 = {'height': null, 'flexDirection': 'row', 'alignItems': 'center', 'paddingHorizontal': 12};
    var13 = 12;
    var13 = var9[var13];
    var13 = var8.bind(var1)(var13);
    var13 = var13.NAV_BAR_HEIGHT;
    var10['height'] = var13;
    var4['header'] = var10;
    var10 = {};
    var10['flex'] = var15;
    var4['leftTitleButton'] = var10;
    var10 = {'alignItems': 'center', 'flexDirection': 'row', 'justifyContent': 'flex-start', 'marginRight': 2};
    var4['channelTitleIconContainer'] = var10;
    var16 = 18;
    var10 = {'height': 18, 'width': 18, 'marginTop': 0, 'marginRight': 8, 'tintColor': 'white'};
    var4['channelIcon'] = var10;
    var10 = {'height': 18, 'width': 18, 'marginTop': 0, 'marginRight': 8};
    var13 = 13;
    var18 = var9[var13];
    var18 = var17.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.TEXT_MUTED;
    var10['tintColor'] = var18;
    var4['channelIconConnecting'] = var10;
    var10 = {'marginLeft': 12, 'flexDirection': 'column'};
    var4['leftTitleContainer'] = var10;
    var10 = {'opacity': 1, 'width': 32, 'height': 32, 'marginLeft': 4, 'marginRight': 4};
    var4['iconPlaceholder'] = var10;
    var10 = {};
    var18 = 'rgba(255, 255, 255, .1)';
    var10['backgroundColor'] = var18;
    var4['noBlurBackground'] = var10;
    var10 = {};
    var10['flex'] = var15;
    var15 = 14;
    var15 = var9[var15];
    var15 = var17.bind(var1)(var15);
    var14 = var14.DISPLAY_EXTRABOLD;
    var13 = var9[var13];
    var13 = var17.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.HEADER_PRIMARY;
    var20 = var15.bind(var1)(var14, var13, var16);
    var21 = var10;
    var13 = copyDataProperties(var21, var20);
    var4['leftTitle'] = var10;
    var10 = {};
    var10['width'] = var1;
    var10['paddingHorizontal'] = var12;
    var4['navigatorIcon'] = var10;
    var10 = {'width': 32, 'paddingHorizontal': 0};
    var4['defaultNavigatorIcon'] = var10;
    var10 = {};
    var10['marginHorizontal'] = var11;
    var4['liveTag'] = var10;
    var4 = var5.bind(var7)(var4);
    var _closure1_slot17 = var4;
    var4 = function HideChannelCallIcon(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var _closure2_slot0 = var2;
            var6 = var1.useArrowIcon;
            var10 = var1.disableBackground;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var1 = var2[var1];
            var4 = undefined;
            var9 = var3.bind(var4)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot8;
            var3 = new Array(2);
            var3[0] = var1;
            var1 = _closure1_slot10;
            var3[1] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getTotalMentionCount;
                var2 = var2.bind(var3)();
                var4 = _closure1_slot10;
                var3 = var4.getMentionCount;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var3.bind(var4)(var1);
                var1 = var2 - var1;
                return var1;
            };
            var8 = var8.bind(var9)(var3, var1);
            var3 = _closure1_slot14;
            var9 = _closure1_slot1;
            var1 = 16;
            var1 = var2[var1];
            var2 = var9.bind(var4)(var1);
            var1 = {};
            var1['disableBackground'] = var10;
            var11 = _closure1_slot2;
            if(var6) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var6 = 18;
            var6 = var11[var6];
            _fun0003_ip = 9; continue _fun0003;
case 7:
            var10 = 17;
            var6 = var11[var10];
case 9:
            var6 = var9.bind(var4)(var6);
            var1['source'] = var6;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = 19;
            var11 = var9[var10];
            var11 = var6.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var9[var10];
            var10 = var6.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.cpT0Cg;
            var10 = var11.bind(var12)(var10);
            var1['accessibilityLabel'] = var10;
            var7 = function onPress() {
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 20;
                var3 = var7[var1];
                var1 = undefined;
                var9 = var4.bind(var1)(var3);
                var8 = var9.track;
                var3 = _closure1_slot11;
                var5 = var3.VIDEO_LAYOUT_TOGGLED;
                var3 = {};
                var6 = 'pop out';
                var3['video_layout'] = var6;
                var6 = _closure1_slot0;
                var2 = 21;
                var2 = var7[var2];
                var12 = var6.bind(var1)(var2);
                var11 = var12.collectVoiceAnalyticsMetadata;
                var2 = _closure2_slot0;
                var10 = var2.id;
                var13 = var11.bind(var12)(var10);
                var14 = var3;
                var10 = copyDataProperties(var14, var13);
                var3 = var8.bind(var9)(var5, var3);
                var3 = 22;
                var3 = var7[var3];
                var8 = var4.bind(var1)(var3);
                var5 = var8.setHidden;
                var3 = false;
                var3 = var5.bind(var8)(var3);
                var3 = 23;
                var3 = var7[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.popWithKey;
                var5 = 24;
                var5 = var7[var5];
                var6 = var6.bind(var1)(var5);
                var5 = var6.getVoiceChannelKey;
                var2 = var2.id;
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onPress'] = var7;
            var7 = _closure1_slot14;
            var5 = 25;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.MaskedBadge;
            var5 = {};
            var5['value'] = var8;
            var8 = {};
            var5['maskStyle'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var4;
    var4 = function ChannelCallNavigatorTitle(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var12 = var2.channel;
            var8 = var2.showConnecting;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var8 = false;
case 10:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 26;
            var2 = var7[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)(var12);
            var3 = 27;
            var3 = var7[var3];
            var3 = var5.bind(var4)(var3);
            var17 = var3.bind(var4)(var12);
            var3 = _closure1_slot0;
            var5 = 28;
            var5 = var7[var5];
            var10 = var3.bind(var4)(var5);
            var6 = var10.useGuildChannelScheduledEvents;
            var5 = var12.id;
            var5 = var6.bind(var10)(var5);
            _closure2_slot0 = var5;
            var11 = _closure1_slot4;
            var10 = var11.useMemo;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure2_slot0;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var3 = _closure1_slot7;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var10.bind(var11)(var5, var6);
            var6 = _closure1_slot3;
            var5 = 1;
            var6 = var6.bind(var4)(var10, var5);
            var5 = 0;
            var5 = var6[var5];
            _closure2_slot1 = var5;
            var10 = var11.useCallback;
            var6 = new Array(1);
            var6[0] = var5;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                    var7 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 29;
                    var4 = var5[var2];
                    var2 = undefined;
                    var7 = var7.bind(var2)(var4);
                    var4 = var7.hideActionSheet;
                    var4 = var4.bind(var7)();
                    var4 = _closure1_slot0;
                    var3 = 30;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.openGuildEventDetails;
                    var3 = {};
                    var6 = _closure2_slot1;
                    var6 = var6.id;
                    var3['eventId'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var2;
case 12:
                    return var1;
                }
            };
            var6 = var10.bind(var11)(var1, var6);
            var1 = _closure1_slot17;
            var20 = var1.bind(var4)();
            var1 = 31;
            var1 = var7[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getChannelIcon;
            var10 = var1.bind(var3)(var12);
            var19 = null;
            var1 = var19 != var10;
            var14 = null;
            if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var7 = _closure1_slot14;
            var13 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 32;
            var1 = var15[var11];
            var3 = var13.bind(var4)(var1);
            var1 = {};
            var11 = var15[var11];
            var11 = var13.bind(var4)(var11);
            var11 = var11.Sizes;
            var11 = var11.CUSTOM;
            var1['size'] = var11;
            var1['source'] = var10;
            if(var8) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var8 = var20.channelIcon;
            _fun0004_ip = 18; continue _fun0004;
case 16:
            var8 = var20.channelIconConnecting;
case 18:
            var1['style'] = var8;
            var14 = var7.bind(var4)(var3, var1);
case 14:
            var3 = _closure1_slot1;
            var21 = _closure1_slot2;
            var1 = 33;
            var1 = var21[var1];
            var1 = var3.bind(var4)(var1);
            var18 = var1.bind(var4)(var12, var2);
            var3 = _closure1_slot14;
            var15 = _closure1_slot0;
            var1 = 34;
            var1 = var21[var1];
            var1 = var15.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var7 = 'button';
            var1['accessibilityRole'] = var7;
            var1['onPress'] = var6;
            var6 = var20.leftTitleButton;
            var1['style'] = var6;
            var5 = var19 == var5;
            var1['disabled'] = var5;
            var7 = _closure1_slot15;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = 'none';
            var5['pointerEvents'] = var8;
            var8 = var20.leftTitleContainer;
            var5['style'] = var8;
            var11 = _closure1_slot15;
            var10 = _closure1_slot5;
            var8 = {};
            var13 = var20.channelTitleIconContainer;
            var8['style'] = var13;
            var13 = new Array(2);
            var13[0] = var14;
            var16 = _closure1_slot14;
            var14 = 35;
            var14 = var21[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.LegacyText;
            var14 = {'style': null, 'numberOfLines': 1, 'maxFontSizeMultiplier': 2};
            var20 = var20.leftTitle;
            var14['style'] = var20;
            if(!(var19 != var18)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var17 = var18;
case 19:
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[1] = var14;
            var8['children'] = var13;
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(2);
            var8[0] = var10;
            var11 = _closure1_slot14;
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            var9 = 36;
            var9 = var13[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['channel'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var4;
    var5 = function CameraButton() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 15;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStoresObject;
            var1 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure1_slot9;
                var2 = var3.isVideoEnabled;
                var2 = var2.bind(var3)();
                var1['isVideoEnabled'] = var2;
                var2 = var3.getVideoDeviceId;
                var2 = var2.bind(var3)();
                var1['videoDeviceId'] = var2;
                var2 = var3.getVideoDevices;
                var2 = var2.bind(var3)();
                var1['videoDevices'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var2 = var1.isVideoEnabled;
            var3 = var1.videoDeviceId;
            var _closure2_slot0 = var3;
            var1 = var1.videoDevices;
            var _closure2_slot1 = var1;
            var1 = null;
            if(!var2) { _fun0006_ip = 21; continue _fun0006 }
case 22:
            var4 = _closure1_slot14;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 16;
            var2 = var9[var2];
            var3 = var8.bind(var5)(var2);
            var2 = {};
            var12 = _closure1_slot0;
            var7 = 19;
            var10 = var9[var7];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var7 = var9[var7];
            var7 = var12.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.t9eQ/v;
            var7 = var10.bind(var11)(var7);
            var2['accessibilityLabel'] = var7;
            var7 = 37;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var2['source'] = var7;
            var6 = function onPress() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.keys;
                    var1 = _closure2_slot1;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.find;
                    var1 = function(arg1) {
                        var2 = _closure2_slot0;
                        var1 = arg1;
                        var1 = var1 !== var2;
                        return var1;
                    };
                    var3 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 != var3)) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 38;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.setVideoDevice;
                    var1 = var1.bind(var2)(var3);
case 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var2['onPress'] = var6;
            var6 = true;
            var2['disableBackground'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 21:
            return var1;
        }
    };
    var _closure1_slot20 = var5;
    var4 = function GridButton(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var3 = var1.channel;
            var _closure2_slot0 = var3;
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 39;
            var1 = var8[var1];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var2 = var1.bind(var5)(var3);
            var1 = 26;
            var1 = var8[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)(var3);
            var3 = null;
            var4 = var3 == var1;
            var1 = null;
            if(var4) { _fun0008_ip = 25; continue _fun0008 }
case 26:
            var1 = null;
            if(var2) { _fun0008_ip = 25; continue _fun0008 }
case 27:
            var4 = _closure1_slot14;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 16;
            var2 = var9[var2];
            var3 = var8.bind(var5)(var2);
            var2 = {};
            var12 = _closure1_slot0;
            var7 = 19;
            var10 = var9[var7];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var7 = var9[var7];
            var7 = var12.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.HK4JIi;
            var7 = var10.bind(var11)(var7);
            var2['accessibilityLabel'] = var7;
            var7 = 40;
            var7 = var9[var7];
            var7 = var8.bind(var5)(var7);
            var2['source'] = var7;
            var6 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 41;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.selectParticipant;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = null;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['onPress'] = var6;
            var6 = true;
            var2['disableBackground'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 25:
            return var1;
        }
    };
    var _closure1_slot21 = var4;
    var7 = function ChannelCallHeaderChatButtonPlaceholder() {
        var2 = _closure1_slot17;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var3 = _closure1_slot14;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var5.iconPlaceholder;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot22 = var7;
    var7 = 46;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/video_calls/native/components/ChannelCallHeader.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function _default(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg1;
            var9 = var1.channel;
            var5 = var1.showConnecting;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0009_ip = 11; continue _fun0009 }
case 28:
            var5 = false;
case 11:
            var1 = _closure1_slot17;
            var17 = var1.bind(var4)();
            var8 = var9.type;
            var1 = _closure1_slot12;
            var7 = var1.GUILD_STAGE_VOICE;
            var1 = var9.isPrivate;
            var1 = var1.bind(var9)();
            var12 = !var1;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 43;
            var2 = var10[var1];
            var13 = var3.bind(var4)(var2);
            var11 = var13.useStore;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.orientation;
                return var1;
            };
            var2 = var11.bind(var13)(var2);
            var13 = _closure1_slot1;
            var11 = 26;
            var11 = var10[var11];
            var11 = var13.bind(var4)(var11);
            var16 = var11.bind(var4)(var9);
            var1 = var10[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.OrientationType;
            var1 = var1.LANDSCAPE;
            var10 = var2 === var1;
            if(!var10) { _fun0009_ip = 29; continue _fun0009 }
case 30:
            var1 = null;
            var10 = var1 != var16;
case 29:
            if(!var10) { _fun0009_ip = 31; continue _fun0009 }
case 32:
            var2 = var16.type;
            var1 = _closure1_slot13;
            var1 = var1.STREAM;
            var10 = var2 === var1;
case 31:
            var3 = _closure1_slot14;
            var2 = _closure1_slot24;
            var1 = {};
            var1['showConnecting'] = var5;
            var1['channel'] = var9;
            var7 = var8 === var7;
            var7 = !var7;
            var1['showArrowIcon'] = var7;
            if(var5) { _fun0009_ip = 33; continue _fun0009 }
case 34:
            var8 = _closure1_slot15;
            var7 = _closure1_slot16;
            var5 = {};
            var13 = null;
            if(!var10) { _fun0009_ip = 35; continue _fun0009 }
case 36:
            var15 = _closure1_slot14;
            var14 = _closure1_slot1;
            var18 = _closure1_slot2;
            var10 = 45;
            var10 = var18[var10];
            var14 = var14.bind(var4)(var10);
            var10 = {};
            var17 = var17.liveTag;
            var10['style'] = var17;
            var10['participant'] = var16;
            var13 = var15.bind(var4)(var14, var10);
case 35:
            var10 = new Array(5);
            var10[0] = var13;
            var15 = _closure1_slot14;
            var14 = _closure1_slot21;
            var13 = {};
            var13['channel'] = var9;
            var13 = var15.bind(var4)(var14, var13);
            var10[1] = var13;
            var15 = _closure1_slot14;
            var14 = _closure1_slot20;
            var13 = {};
            var13 = var15.bind(var4)(var14, var13);
            var10[2] = var13;
            var15 = _closure1_slot14;
            var14 = _closure1_slot23;
            var13 = {};
            var13['channel'] = var9;
            var13 = var15.bind(var4)(var14, var13);
            var10[3] = var13;
            var11 = null;
            if(!var12) { _fun0009_ip = 37; continue _fun0009 }
case 38:
            var14 = _closure1_slot14;
            var13 = _closure1_slot22;
            var12 = {};
            var11 = var14.bind(var4)(var13, var12);
case 37:
            var10[4] = var11;
            var5['children'] = var10;
            var5 = var8.bind(var4)(var7, var5);
            _fun0009_ip = 39; continue _fun0009;
case 33:
            var8 = _closure1_slot14;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var6 = 44;
            var6 = var10[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ChannelCallConnectingHeader;
            var6 = {};
            var6['channel'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 39:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var6;
    var3['CameraButton'] = var5;
    var3['GridButton'] = var4;
    var3['ChannelCallHeaderBase'] = var2;
    return var1;
})();