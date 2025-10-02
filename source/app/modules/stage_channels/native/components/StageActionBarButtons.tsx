// app/modules/stage_channels/native/components/StageActionBarButtons.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var13 = metroImportDefault;
    var9 = metroImportAll;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var9;
    var _closure1_slot3 = var8;
    var5 = function AnimatedPrompt(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var13 = var1.show;
            var _closure2_slot0 = var13;
            var5 = var1.children;
            var7 = var1.style;
            var1 = _closure1_slot16;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var15 = _closure1_slot0;
            var10 = _closure1_slot3;
            var1 = 17;
            var1 = var10[var1];
            var11 = var15.bind(var4)(var1);
            var9 = var11.useStateFromStores;
            var1 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var1 = _closure1_slot7;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var9 = var9.bind(var11)(var8, var1);
            var1 = 44;
            var8 = var10[var1];
            var11 = var15.bind(var4)(var8);
            var8 = var11.useAnimatedStyle;
            var3 = function l() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var7 = 45;
                    var3 = var3[var7];
                    var6 = undefined;
                    var9 = var4.bind(var6)(var3);
                    var8 = var9.withSpring;
                    var4 = _closure2_slot0;
                    var5 = 20;
                    if(!var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = 0;
case 2:
                    var4 = _closure1_slot17;
                    var4 = var8.bind(var9)(var5, var4);
                    var1['marginTop'] = var4;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var4 = var4[var7];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.withSpring;
                    var6 = _closure2_slot0;
                    var3 = 0;
                    if(!var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = 1;
case 4:
                    var2 = _closure1_slot17;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var12 = {};
            var14 = 45;
            var14 = var10[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.withSpring;
            var12['withSpring'] = var14;
            var12['show'] = var13;
            var13 = _closure1_slot17;
            var12['actionBarAnimationConfig'] = var13;
            var3['__closure'] = var12;
            var12 = 5255980384921.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot18;
            var3['__initData'] = var12;
            var8 = var8.bind(var11)(var3);
            var3 = _closure1_slot14;
            var2 = _closure1_slot1;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var10 = var6.actionBarCTAContainer;
            var6 = new Array(3);
            var6[0] = var10;
            var6[1] = var7;
            var7 = undefined;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var8;
case 6:
            var6[2] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var5;
    var4 = function StartStagePrompt(arg1) {
        var1 = arg1;
        var2 = var1.channel;
        var _closure2_slot0 = var2;
        var5 = var1.isLive;
        var _closure2_slot1 = var5;
        var6 = var1.style;
        var1 = _closure1_slot16;
        var4 = undefined;
        var7 = var1.bind(var4)();
        var3 = _closure1_slot14;
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var1 = 47;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var2 = var1.FormCTA;
        var1 = {};
        var11 = function onPress() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure2_slot1;
                if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 27;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.openStageChannelSettings;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var1['onPress'] = var11;
        var11 = _closure1_slot1;
        var10 = 48;
        var10 = var9[var10];
        var10 = var11.bind(var4)(var10);
        var1['iconSource'] = var10;
        var10 = var7.iconStyle;
        var1['iconStyle'] = var10;
        var7 = var7.iconContainerStyle;
        var1['iconContainerStyle'] = var7;
        var1['style'] = var6;
        var1['completed'] = var5;
        var5 = 14;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6.OYbHfn;
        var6 = var7.bind(var10)(var6);
        var1['title'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.yXwLMT;
        var5 = var6.bind(var7)(var5);
        var1['subtitle'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var13.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.View;
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot7 = var6;
    var14 = 4;
    var6 = var8[var14];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var13.bind(var1)(var6);
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.REQUEST_TO_SPEAK_SHEET_KEY;
    var _closure1_slot11 = var6;
    var6 = 8;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.NOOP;
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.Permissions;
    var _closure1_slot13 = var6;
    var6 = 10;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.jsx;
    var _closure1_slot14 = var9;
    var6 = var6.jsxs;
    var _closure1_slot15 = var6;
    var6 = 11;
    var6 = var8[var6];
    var10 = var7.bind(var1)(var6);
    var9 = var10.createStyles;
    var6 = {};
    var11 = {};
    var12 = 'relative';
    var11['position'] = var12;
    var6['actionBarCTAContainer'] = var11;
    var11 = {};
    var12 = 12;
    var15 = var8[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var11['tintColor'] = var15;
    var6['imageStyle'] = var11;
    var11 = {'tintColor': null, 'width': 20, 'height': 20};
    var15 = var8[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var11['tintColor'] = var15;
    var6['iconStyle'] = var11;
    var11 = {};
    var15 = var8[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.GREEN_360;
    var11['backgroundColor'] = var15;
    var15 = var8[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var11['borderRadius'] = var15;
    var11['padding'] = var14;
    var6['iconContainerStyle'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'padding': 16};
    var6['continueContainer'] = var11;
    var11 = {'color': null, 'fontSize': 14, 'lineHeight': 18};
    var14 = var8[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.BLUE_345;
    var11['color'] = var14;
    var6['continueText'] = var11;
    var11 = {};
    var12 = var8[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.BLUE_345;
    var11['tintColor'] = var12;
    var6['continueIcon'] = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot16 = var6;
    var6 = {'mass': 1, 'stiffness': 100, 'damping': 30, 'overshootClamping': false, 'restSpeedThreshold': 0.01, 'restDisplacementThreshold': 0.01};
    var _closure1_slot17 = var6;
    var6 = {};
    var9 = 'function StageActionBarButtonsTsx1(){const{withSpring,show,actionBarAnimationConfig}=this.__closure;return{marginTop:withSpring(show?0:20,actionBarAnimationConfig),opacity:withSpring(show?1:0,actionBarAnimationConfig)};}';
    var6['code'] = var9;
    var _closure1_slot18 = var6;
    var6 = 53;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/stage_channels/native/components/StageActionBarButtons.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function(arg1) {
        var1 = arg1;
        var2 = var1.channel;
        var _closure2_slot0 = var2;
        var5 = var1.isSmallSize;
        var4 = _closure1_slot14;
        var2 = _closure1_slot2;
        var9 = _closure1_slot3;
        var1 = 13;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.ActionButton;
        var1 = {};
        var12 = _closure1_slot0;
        var8 = 14;
        var10 = var9[var8];
        var10 = var12.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var8 = var9[var8];
        var8 = var12.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.ezLpY2;
        var8 = var10.bind(var11)(var8);
        var1['accessibilityLabel'] = var8;
        var8 = _closure1_slot1;
        var7 = 15;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var1['source'] = var7;
        var6 = function onPress() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.audienceAckRequestToSpeak;
            var3 = _closure2_slot0;
            var2 = true;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['onPress'] = var6;
        var1['isSmallSize'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['MoveToAudienceButton'] = var6;
    var6 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.channel;
            var6 = var2.isSmallSize;
            var2 = _closure1_slot16;
            var5 = undefined;
            var8 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 17;
            var2 = var4[var2];
            var12 = var3.bind(var5)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot10;
            var9 = new Array(1);
            var9[0] = var2;
            var2 = function() {
                var2 = _closure1_slot10;
                var1 = var2.isMuted;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var11.bind(var12)(var9, var2);
            var _closure2_slot0 = var9;
            var2 = 18;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useShowStageMusicMuteButton;
            var1 = var1.id;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(!var2) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var4 = _closure1_slot14;
            var3 = _closure1_slot2;
            var11 = _closure1_slot3;
            var2 = 13;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ActionButton;
            var2 = {};
            var12 = _closure1_slot0;
            var15 = _closure1_slot3;
            var11 = 14;
            var13 = var15[var11];
            var13 = var12.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var11 = var15[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.t;
            if(var9) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var11 = var12.zqxfra;
            var11 = var13.bind(var14)(var11);
            _fun0004_ip = 14; continue _fun0004;
case 12:
            var12 = var12.ScHlfn;
            var11 = var13.bind(var14)(var12);
case 14:
            var2['accessibilityLabel'] = var11;
            var12 = _closure1_slot1;
            var14 = _closure1_slot3;
            if(var9) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var11 = 20;
            var11 = var14[var11];
            _fun0004_ip = 17; continue _fun0004;
case 15:
            var13 = 19;
            var11 = var14[var13];
case 17:
            var11 = var12.bind(var5)(var11);
            var2['source'] = var11;
            var11 = _closure1_slot0;
            var12 = _closure1_slot3;
            if(var9) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var9 = 22;
            var9 = var12[var9];
            var9 = var11.bind(var5)(var9);
            var9 = var9.MusicIcon;
            _fun0004_ip = 20; continue _fun0004;
case 18:
            var10 = 21;
            var10 = var12[var10];
            var10 = var11.bind(var5)(var10);
            var9 = var10.MusicSlashIcon;
case 20:
            var2['IconComponent'] = var9;
            var8 = var8.imageStyle;
            var2['imageStyle'] = var8;
            var7 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.updateStageMusicMuted;
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2['onPress'] = var7;
            var2['isSmallSize'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var3['MusicMuteButton'] = var6;
    var6 = function(arg1) {
        var1 = arg1;
        var2 = var1.channel;
        var _closure2_slot0 = var2;
        var5 = var1.isSmallSize;
        var4 = _closure1_slot14;
        var2 = _closure1_slot2;
        var9 = _closure1_slot3;
        var1 = 13;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.PrimaryActionButton;
        var1 = {};
        var8 = _closure1_slot0;
        var10 = 14;
        var11 = var9[var10];
        var11 = var8.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var9[var10];
        var10 = var8.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.SMKyio;
        var10 = var11.bind(var12)(var10);
        var1['accessibilityLabel'] = var10;
        var10 = _closure1_slot1;
        var7 = 24;
        var7 = var9[var7];
        var7 = var10.bind(var3)(var7);
        var1['source'] = var7;
        var7 = 25;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.DoorExitIcon;
        var1['IconComponent'] = var7;
        var6 = function onPress() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = _closure2_slot0;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                if(var3) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var3 = 28;
                var3 = var5[var3];
                var7 = var4.bind(var1)(var3);
                var6 = var7.handleDisconnect;
                var3 = _closure2_slot0;
                var3 = var6.bind(var7)(var3);
                _fun0005_ip = 23; continue _fun0005;
case 21:
                var3 = 27;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.openEndStageModal;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
case 23:
                return var1;
            }
        };
        var1['onPress'] = var6;
        var1['isSmallSize'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['DisconnectStageButton'] = var6;
    var6 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = var3.channel;
            var _closure2_slot0 = var2;
            var6 = var3.isSmallSize;
            var4 = _closure1_slot1;
            var10 = _closure1_slot3;
            var3 = 29;
            var3 = var10[var3];
            var5 = undefined;
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var3 = var3.analyticsLocations;
            var _closure2_slot1 = var3;
            var8 = _closure1_slot0;
            var3 = 30;
            var3 = var10[var3];
            var7 = var8.bind(var5)(var3);
            var4 = var7.useStageParticipantsCount;
            var3 = var2.id;
            var2 = 31;
            var2 = var10[var2];
            var2 = var8.bind(var5)(var2);
            var2 = var2.StageChannelParticipantNamedIndex;
            var2 = var2.REQUESTED_TO_SPEAK_ONLY;
            var7 = var4.bind(var7)(var3, var2);
            var8 = function handleOpenAudienceList() {
                var5 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 32;
                var4 = var3[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var7 = _closure1_slot0;
                var4 = 34;
                var4 = var3[var4];
                var7 = var7.bind(var1)(var4);
                var4 = 33;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var7.bind(var1)(var4, var3);
                var3 = _closure1_slot11;
                var2 = {};
                var8 = _closure2_slot0;
                var8 = var8.id;
                var2['channelId'] = var8;
                var7 = _closure2_slot1;
                var2['analyticsLocations'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var1 = 0;
            if(!(!(var7 > var1))) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var3 = _closure1_slot14;
            var2 = _closure1_slot2;
            var11 = _closure1_slot3;
            var1 = 13;
            var1 = var11[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.ActionButton;
            var1 = {};
            var10 = _closure1_slot0;
            var4 = 14;
            var12 = var11[var4];
            var12 = var10.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var4 = var11[var4];
            var4 = var10.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.KJnyvr;
            var4 = var12.bind(var13)(var4);
            var1['accessibilityLabel'] = var4;
            var13 = _closure1_slot1;
            var4 = 35;
            var4 = var11[var4];
            var4 = var13.bind(var5)(var4);
            var1['source'] = var4;
            var4 = {};
            var12 = 12;
            var12 = var11[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.unsafe_rawColors;
            var12 = var12.WHITE_500;
            var4['tintColor'] = var12;
            var1['imageStyle'] = var4;
            var4 = 36;
            var4 = var11[var4];
            var4 = var10.bind(var5)(var4);
            var4 = var4.HandRequestSpeakListIcon;
            var1['IconComponent'] = var4;
            var1['onPress'] = var8;
            var1['isSmallSize'] = var6;
            var1 = var3.bind(var5)(var2, var1);
            _fun0006_ip = 26; continue _fun0006;
case 24:
            var4 = _closure1_slot14;
            var3 = _closure1_slot2;
            var11 = _closure1_slot3;
            var2 = 13;
            var2 = var11[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.NotifiedActionButton;
            var2 = {};
            var10 = _closure1_slot0;
            var12 = 14;
            var13 = var11[var12];
            var13 = var10.bind(var5)(var13);
            var15 = var13.intl;
            var14 = var15.formatToPlainString;
            var12 = var11[var12];
            var12 = var10.bind(var5)(var12);
            var12 = var12.t;
            var13 = var12.OhK58v;
            var12 = {};
            var12['count'] = var7;
            var12 = var14.bind(var15)(var13, var12);
            var2['accessibilityLabel'] = var12;
            var13 = _closure1_slot1;
            var9 = 35;
            var9 = var11[var9];
            var9 = var13.bind(var5)(var9);
            var2['source'] = var9;
            var9 = {};
            var12 = 12;
            var12 = var11[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.unsafe_rawColors;
            var12 = var12.WHITE_500;
            var9['tintColor'] = var12;
            var2['imageStyle'] = var9;
            var9 = 36;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.HandRequestSpeakListIcon;
            var2['IconComponent'] = var9;
            var2['onPress'] = var8;
            var2['notifications'] = var7;
            var2['isSmallSize'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 26:
            return var1;
        }
    };
    var3['RequestToSpeakListButton'] = var6;
    var6 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channel;
            var _closure2_slot0 = var3;
            var5 = var2.isSmallSize;
            var7 = _closure1_slot1;
            var6 = _closure1_slot3;
            var2 = 37;
            var2 = var6[var2];
            var4 = undefined;
            var2 = var7.bind(var4)(var2);
            var7 = var2.bind(var4)(var3);
            var3 = _closure1_slot4;
            var2 = 2;
            var3 = var3.bind(var4)(var7, var2);
            var2 = 0;
            var9 = var3[var2];
            var2 = 1;
            var7 = var3[var2];
            var3 = _closure1_slot0;
            var2 = 17;
            var2 = var6[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.useStateFromStores;
            var10 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var10;
            var1 = function() {
                var4 = _closure1_slot8;
                var3 = var4.can;
                var1 = _closure1_slot13;
                var2 = var1.REQUEST_TO_SPEAK;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var3.bind(var6)(var2, var1);
            var6 = !var1;
            if(!var6) { _fun0007_ip = 27; continue _fun0007 }
case 28:
            var6 = !var9;
case 27:
            var3 = _closure1_slot14;
            var2 = _closure1_slot2;
            var10 = _closure1_slot3;
            var1 = 13;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ToggledActionButton;
            var1 = {};
            var11 = _closure1_slot0;
            var14 = _closure1_slot3;
            var10 = 14;
            var12 = var14[var10];
            var12 = var11.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.t;
            if(var9) { _fun0007_ip = 29; continue _fun0007 }
case 30:
            var10 = var11.hLbG5O;
            var10 = var12.bind(var13)(var10);
            _fun0007_ip = 31; continue _fun0007;
case 29:
            var11 = var11.GCimTk;
            var10 = var12.bind(var13)(var11);
case 31:
            var1['accessibilityLabel'] = var10;
            var12 = _closure1_slot1;
            var11 = _closure1_slot3;
            var10 = 38;
            var10 = var11[var10];
            var10 = var12.bind(var4)(var10);
            var1['source'] = var10;
            var1['isActive'] = var9;
            var10 = _closure1_slot0;
            var9 = 39;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.HandRequestSpeakIcon;
            var1['IconComponent'] = var9;
            if(!var6) { _fun0007_ip = 32; continue _fun0007 }
case 33:
            var7 = _closure1_slot12;
case 32:
            var1['onPress'] = var7;
            var1['appearsDisabled'] = var6;
            var1['isSmallSize'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['RequestToSpeakButton'] = var6;
    var6 = function ChatButton(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var8 = var2.channel;
            var _closure2_slot0 = var8;
            var6 = var2.isSmallSize;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 17;
            var2 = var4[var2];
            var12 = var3.bind(var5)(var2);
            var11 = var12.useStateFromStoresObject;
            var2 = _closure1_slot9;
            var10 = new Array(1);
            var10[0] = var2;
            var2 = var8.id;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var1 = {};
                var4 = _closure1_slot9;
                var5 = var4.getUnreadCount;
                var2 = _closure2_slot0;
                var3 = var2.id;
                var3 = var5.bind(var4)(var3);
                var1['unreadCount'] = var3;
                var3 = var4.getMentionCount;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var1['mentionCount'] = var2;
                return var1;
            };
            var2 = var11.bind(var12)(var10, var2, var7);
            var12 = var2.unreadCount;
            var11 = var2.mentionCount;
            var2 = 40;
            var2 = var4[var2];
            var7 = var3.bind(var5)(var2);
            var2 = var7.useIsVoiceChannelLocked;
            var7 = var2.bind(var7)(var8);
            var _closure2_slot1 = var7;
            var2 = 41;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useVoiceChatNavigationContext;
            var3 = var2.bind(var3)();
            var2 = null;
            var4 = var2 == var3;
            var2 = undefined;
            if(var4) { _fun0008_ip = 34; continue _fun0008 }
case 35:
            var2 = var3.openChat;
case 34:
            _closure2_slot2 = var2;
            var8 = function onPress() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0009_ip = 36; continue _fun0009 }
case 9:
                    var4 = _closure2_slot2;
                    var3 = null;
                    var2 = var3 == var4;
case 36:
                    if(var2) { _fun0009_ip = 37; continue _fun0009 }
case 38:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 37:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = 0;
            if(!(!(var11 > var10))) { _fun0008_ip = 39; continue _fun0008 }
case 40:
            if(!(!(var12 > var10))) { _fun0008_ip = 39; continue _fun0008 }
case 41:
            var3 = _closure1_slot14;
            var2 = _closure1_slot2;
            var14 = _closure1_slot3;
            var1 = 13;
            var1 = var14[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.ActionButton;
            var1 = {};
            var4 = {};
            var13 = _closure1_slot1;
            var15 = 12;
            var15 = var14[var15];
            var15 = var13.bind(var5)(var15);
            var15 = var15.unsafe_rawColors;
            var15 = var15.WHITE_500;
            var4['tintColor'] = var15;
            var1['imageStyle'] = var4;
            var15 = _closure1_slot0;
            var4 = 14;
            var16 = var14[var4];
            var16 = var15.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var4 = var14[var4];
            var4 = var15.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.ZXxLQk;
            var4 = var16.bind(var17)(var4);
            var1['accessibilityLabel'] = var4;
            var4 = 42;
            var4 = var14[var4];
            var4 = var15.bind(var5)(var4);
            var4 = var4.ChatIcon;
            var1['IconComponent'] = var4;
            var4 = 43;
            var4 = var14[var4];
            var4 = var13.bind(var5)(var4);
            var1['source'] = var4;
            var1['onPress'] = var8;
            var1['appearsDisabled'] = var7;
            var1['isSmallSize'] = var6;
            var1 = var3.bind(var5)(var2, var1);
            _fun0008_ip = 42; continue _fun0008;
case 39:
            var4 = _closure1_slot14;
            var3 = _closure1_slot2;
            var13 = _closure1_slot3;
            var2 = 13;
            var2 = var13[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.NotifiedActionButton;
            var2 = {};
            if(!(var11 > var10)) { _fun0008_ip = 43; continue _fun0008 }
case 44:
            var12 = var11;
case 43:
            var2['notifications'] = var12;
            var10 = var11 > var10;
            var2['isMentioned'] = var10;
            var12 = {};
            var10 = _closure1_slot1;
            var11 = _closure1_slot3;
            var13 = 12;
            var13 = var11[var13];
            var13 = var10.bind(var5)(var13);
            var13 = var13.unsafe_rawColors;
            var13 = var13.WHITE_500;
            var12['tintColor'] = var13;
            var2['imageStyle'] = var12;
            var12 = _closure1_slot0;
            var9 = 14;
            var13 = var11[var9];
            var13 = var12.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var9 = var11[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.ZXxLQk;
            var9 = var13.bind(var14)(var9);
            var2['accessibilityLabel'] = var9;
            var9 = 42;
            var9 = var11[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.ChatIcon;
            var2['IconComponent'] = var9;
            var9 = 43;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var2['source'] = var9;
            var2['onPress'] = var8;
            var2['appearsDisabled'] = var7;
            var2['isSmallSize'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 42:
            return var1;
        }
    };
    var3['ChatButton'] = var6;
    var3['AnimatedPrompt'] = var5;
    var5 = function AnimatedStartStagePrompt(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var11 = var2.channel;
            var9 = var2.style;
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 46;
            var2 = var4[var2];
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = var4.useStageChannelStartEvent;
            var2 = var11.id;
            var2 = var3.bind(var4)(var2);
            var10 = var2.isLive;
            var _closure2_slot0 = var10;
            var8 = _closure1_slot5;
            var2 = var8.useState;
            var4 = false;
            var2 = var2.bind(var8)(var4);
            var14 = _closure1_slot4;
            var13 = 2;
            var3 = var14.bind(var5)(var2, var13);
            var2 = 0;
            var7 = var3[var2];
            var _closure2_slot1 = var7;
            var12 = 1;
            var3 = var3[var12];
            var _closure2_slot2 = var3;
            var3 = var8.useState;
            var3 = var3.bind(var8)(var4);
            var4 = var14.bind(var5)(var3, var13);
            var3 = var4[var2];
            var _closure2_slot3 = var3;
            var4 = var4[var12];
            var _closure2_slot4 = var4;
            var4 = var8.useState;
            var4 = var4.bind(var8)(var10);
            var4 = var14.bind(var5)(var4, var13);
            var2 = var4[var2];
            var _closure2_slot5 = var2;
            var4 = var4[var12];
            var _closure2_slot6 = var4;
            var12 = var8.useEffect;
            var4 = new Array(3);
            var4[0] = var10;
            var4[1] = var7;
            var4[2] = var3;
            var3 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0011_ip = 45; continue _fun0011 }
case 9:
                    var2 = _closure2_slot0;
                    if(var2) { _fun0011_ip = 46; continue _fun0011 }
case 47:
                    var2 = _closure2_slot1;
                    if(var2) { _fun0011_ip = 46; continue _fun0011 }
case 48:
                    var4 = _closure2_slot2;
                    var3 = undefined;
                    var2 = true;
                    var2 = var4.bind(var3)(var2);
                    _fun0011_ip = 45; continue _fun0011;
case 46:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0011_ip = 8; continue _fun0011 }
case 49:
                    var2 = _closure2_slot1;
case 8:
                    if(!var2) { _fun0011_ip = 45; continue _fun0011 }
case 50:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = false;
                    var1 = var3.bind(var2)(var1);
case 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var12.bind(var8)(var3, var4);
            var12 = var8.useEffect;
            var4 = function() {
                var2 = global;
                var5 = var2.setTimeout;
                var4 = undefined;
                var3 = function() {
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = 400;
                var2 = var5.bind(var4)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var3 = new Array(0);
            var3 = var12.bind(var8)(var4, var3);
            var4 = var8.useEffect;
            var3 = new Array(3);
            var3[0] = var10;
            var3[1] = var7;
            var3[2] = var2;
            var1 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var3 = _closure2_slot0;
                    if(!var3) { _fun0012_ip = 51; continue _fun0012 }
case 52:
                    var3 = _closure2_slot1;
                    if(var3) { _fun0012_ip = 51; continue _fun0012 }
case 53:
                    var2 = _closure2_slot5;
                    if(var2) { _fun0012_ip = 51; continue _fun0012 }
case 54:
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = undefined;
                    var3 = function() {
                        var3 = _closure2_slot6;
                        var1 = undefined;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 400;
                    var2 = var5.bind(var4)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
case 51:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var4.bind(var8)(var1, var3);
            var1 = null;
            if(var2) { _fun0010_ip = 55; continue _fun0010 }
case 56:
            var4 = _closure1_slot14;
            var3 = _closure1_slot19;
            var2 = {};
            var2['show'] = var7;
            var8 = _closure1_slot14;
            var7 = _closure1_slot20;
            var6 = {};
            var6['channel'] = var11;
            var6['isLive'] = var10;
            var6['style'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 55:
            return var1;
        }
    };
    var3['AnimatedStartStagePrompt'] = var5;
    var3['StartStagePrompt'] = var4;
    var2 = function ContinueToStagePrompt(arg1) {
        var1 = arg1;
        var5 = var1.onContinue;
        var1 = _closure1_slot16;
        var4 = undefined;
        var16 = var1.bind(var4)();
        var3 = _closure1_slot14;
        var18 = _closure1_slot0;
        var15 = _closure1_slot3;
        var1 = 49;
        var1 = var15[var1];
        var1 = var18.bind(var4)(var1);
        var2 = var1.PressableOpacity;
        var1 = {};
        var6 = 'button';
        var1['accessibilityRole'] = var6;
        var1['onPress'] = var5;
        var7 = _closure1_slot15;
        var6 = _closure1_slot6;
        var5 = {};
        var8 = var16.continueContainer;
        var5['style'] = var8;
        var9 = _closure1_slot14;
        var8 = {};
        var10 = 50;
        var10 = var15[var10];
        var10 = var18.bind(var4)(var10);
        var12 = var10.LegacyText;
        var10 = {};
        var13 = var16.continueText;
        var10['style'] = var13;
        var13 = 14;
        var14 = var15[var13];
        var14 = var18.bind(var4)(var14);
        var17 = var14.intl;
        var14 = var17.string;
        var13 = var15[var13];
        var13 = var18.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.jMLfp6;
        var13 = var14.bind(var17)(var13);
        var10['children'] = var13;
        var10 = var9.bind(var4)(var12, var10);
        var8['children'] = var10;
        var9 = var9.bind(var4)(var6, var8);
        var8 = new Array(2);
        var8[0] = var9;
        var10 = _closure1_slot14;
        var9 = {};
        var14 = _closure1_slot1;
        var13 = 51;
        var11 = var15[var13];
        var12 = var14.bind(var4)(var11);
        var11 = {};
        var16 = var16.continueIcon;
        var11['style'] = var16;
        var16 = 52;
        var16 = var15[var16];
        var16 = var14.bind(var4)(var16);
        var11['source'] = var16;
        var13 = var15[var13];
        var13 = var14.bind(var4)(var13);
        var13 = var13.Sizes;
        var13 = var13.SMALL;
        var11['size'] = var13;
        var13 = true;
        var11['disableColor'] = var13;
        var11 = var10.bind(var4)(var12, var11);
        var9['children'] = var11;
        var9 = var10.bind(var4)(var6, var9);
        var8[1] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['ContinueToStagePrompt'] = var2;
    return var1;
})();