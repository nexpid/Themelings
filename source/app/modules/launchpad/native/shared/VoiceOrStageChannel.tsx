// app/modules/launchpad/native/shared/VoiceOrStageChannel.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function getStageChannelAccessibilityProps(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.channelName;
            var6 = var1.channel;
            var7 = var1.userCount;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var10 = 12;
            var4 = var2[var10];
            var9 = undefined;
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var2[var10];
            var2 = var3.bind(var9)(var2);
            var2 = var2.t;
            var3 = var2.TPPk2d;
            var2 = {};
            var2['channelName'] = var8;
            var2 = var4.bind(var5)(var3, var2);
            var4 = var6.userLimit;
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 112; continue _fun0001 }
 100:
            var4 = var6.userLimit;
            var3 = 0;
            if(!(!(var4 > var3))) { _fun0001_ip = 188; continue _fun0001 }
 112:
            var3 = 0;
            if(!(var7 > var3)) { _fun0001_ip = 263; continue _fun0001 }
 121:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = var3[var10];
            var5 = var4.bind(var9)(var5);
            var11 = var5.intl;
            var5 = var11.formatToPlainString;
            var3 = var3[var10];
            var3 = var4.bind(var9)(var3);
            var3 = var3.t;
            var4 = var3.7yr3QU;
            var3 = {};
            var3['channelName'] = var8;
            var3['userCount'] = var7;
            var2 = var5.bind(var11)(var4, var3);
            _fun0001_ip = 263; continue _fun0001;
 188:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = var1[var10];
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var1[var10];
            var1 = var3.bind(var9)(var1);
            var1 = var1.t;
            var3 = var1.rhh6Eh;
            var1 = {};
            var1['channelName'] = var8;
            var1['userCount'] = var7;
            var6 = var6.userLimit;
            var1['limit'] = var6;
            var2 = var4.bind(var5)(var3, var1);
 263:
            var1 = {'accessible': true, 'accessibilityRole': 'button'};
            var1['accessibilityLabel'] = var2;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function handleVoiceOrStageChannelConnectPress() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function _handleVoiceOrStageChannelConnectPress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 147; continue _fun0002 }
 13:
                    var2 = var5.isGuildStageVoice;
                    var4 = var2.bind(var5)();
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 14;
                    var6 = var2[var3];
                    var3 = undefined;
                    var6 = var7.bind(var3)(var6);
                    if(var4) { _fun0002_ip = 102; continue _fun0002 }
 51:
                    var4 = 15;
                    var7 = var2[var4];
                    var4 = var2.paths;
                    var4 = var6.bind(var3)(var7, var4);
                    SaveGenerator(address=73);
 71:
                    return var4;
 73:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 99; continue _fun0002 }
 79:
                    var8 = var4.openGuildVoiceModal;
                    var7 = 'Channel List';
                    var7 = var8.bind(var3)(var5, var7);
                    _fun0002_ip = 141; continue _fun0002;
 99:
                    return var4;
 102:
                    var4 = 13;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var2 = var6.bind(var3)(var4, var2);
                    SaveGenerator(address=124);
 122:
                    return var2;
 124:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 144; continue _fun0002 }
 130:
                    var4 = var2.connectAndOpen;
                    var4 = var4.bind(var3)(var5);
 141:
                    return var3;
 144:
                    return var2;
 147:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function useVoiceChannelPressEvents(arg1) {
        var3 = arg1;
        var _closure2_slot0 = var3;
        var4 = function useVoiceChannelOnPressHandler() {
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            var5 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 269; continue _fun0003 }
 15:
                            var _closure6_slot0 = var5;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 16;
                            var3 = var7[var3];
                            var7 = undefined;
                            var8 = var6.bind(var7)(var3);
                            var6 = var8.getChannelRoleSubscriptionStatus;
                            var3 = var5.id;
                            var3 = var6.bind(var8)(var3);
                            var3 = var3.needSubscriptionToAccess;
                            var6 = var5.getGuildId;
                            var6 = var6.bind(var5)();
                            var8 = null;
                            if(!(var8 != var6)) { _fun0003_ip = 116; continue _fun0003 }
 82:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 17;
                            var8 = var10[var8];
                            var9 = var9.bind(var7)(var8);
                            var8 = var9.shouldShowMembershipVerificationGate;
                            var8 = var8.bind(var9)(var6);
                            if(var8) { _fun0003_ip = 196; continue _fun0003 }
 116:
                            if(var3) { _fun0003_ip = 132; continue _fun0003 }
 119:
                            var3 = _closure1_slot20;
                            var3 = var3.bind(var7)(var5);
                            var3 = undefined;
                            _fun0003_ip = 194; continue _fun0003;
 132:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 19;
                            var8 = var10[var8];
                            var9 = var9.bind(var7)(var8);
                            var8 = var9.transitionTo;
                            var12 = _closure1_slot11;
                            var11 = var12.CHANNEL;
                            var10 = var5.guild_id;
                            var5 = _closure1_slot12;
                            var5 = var5.ROLE_SUBSCRIPTIONS;
                            var5 = var11.bind(var12)(var10, var5);
                            var3 = var8.bind(var9)(var5);
 194:
                            _fun0003_ip = 263; continue _fun0003;
 196:
                            var8 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var5 = 14;
                            var5 = var2[var5];
                            var8 = var8.bind(var7)(var5);
                            var5 = 18;
                            var5 = var2[var5];
                            var2 = var2.paths;
                            var2 = var8.bind(var7)(var5, var2);
                            SaveGenerator(address=238);
 236:
                            return var2;
 238:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0003_ip = 266; continue _fun0003 }
 244:
                            var5 = var2.openMemberVerificationModal;
                            var4 = function() {
                                var3 = _closure1_slot20;
                                var2 = _closure6_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var3 = var5.bind(var7)(var6, var4);
 263:
                            return var3;
 266:
                            return var2;
 269:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure4_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure4_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var1 = undefined;
            var2 = var2.bind(var1)();
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1 = undefined;
        var5 = var4.bind(var1)();
        var _closure2_slot1 = var5;
        var1 = {};
        var8 = _closure1_slot4;
        var7 = var8.useCallback;
        var6 = new Array(2);
        var6[0] = var3;
        var6[1] = var5;
        var5 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = _closure2_slot0;
                var3 = var1.guild_id;
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 63; continue _fun0004 }
 18:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 20;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.transitionToGuild;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var1 = var3.bind(var4)(var1);
 63:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 21;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = var3.bind(var1)();
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var5 = var7.bind(var8)(var5, var6);
        var1['onPress'] = var5;
        var5 = _closure1_slot4;
        var4 = var5.useCallback;
        var6 = var3.id;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 22;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.openChannelLongPressActionSheet;
            var1 = _closure2_slot0;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['onLongPress'] = var2;
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Routes;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getThemedRippleConfig;
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot14 = var8;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 23;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var11 = arg2;
            var1 = {};
            var8 = -2;
            var2 = {'display': 'flex', 'flexDirection': 'row', 'paddingRight': 16, 'marginTop': 4294967294};
            var1['voiceUsers'] = var2;
            var2 = {};
            var9 = 1;
            var2['flex'] = var9;
            var1['pressable'] = var2;
            var2 = {'borderRadius': null, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
            var10 = _closure1_slot1;
            var7 = _closure1_slot2;
            var6 = 24;
            var4 = var7[var6];
            var5 = undefined;
            var4 = var10.bind(var5)(var4);
            var4 = var4.radii;
            var4 = var4.round;
            var2['borderRadius'] = var4;
            var4 = 'center';
            var1['joinButton'] = var2;
            var2 = {'width': 'auto', 'flexDirection': 'row', 'alignItems': 'center'};
            var1['joinButtonContent'] = var2;
            var2 = {};
            var12 = var7[var6];
            var12 = var10.bind(var5)(var12);
            var12 = var12.colors;
            var12 = var12.STATUS_DANGER;
            var2['backgroundColor'] = var12;
            var1['joinButtonLive'] = var2;
            var2 = {};
            var12 = 'uppercase';
            var2['textTransform'] = var12;
            var1['joinButtonLiveText'] = var2;
            var2 = {};
            var12 = var7[var6];
            var12 = var10.bind(var5)(var12);
            var12 = var12.colors;
            var12 = var12.STATUS_POSITIVE;
            var2['backgroundColor'] = var12;
            var1['joinButtonActive'] = var2;
            var2 = {};
            var7 = var7[var6];
            var7 = var10.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.BG_BASE_PRIMARY;
            var2['backgroundColor'] = var7;
            var10 = arg1;
            var7 = var9;
            if(!var10) { _fun0005_ip = 242; continue _fun0005 }
 240:
            var7 = 0;
 242:
            var2['elevation'] = var7;
            var7 = 4;
            var2['shadowRadius'] = var7;
            var10 = {'width': 0, 'height': 1};
            var2['shadowOffset'] = var10;
            var12 = _closure1_slot1;
            var10 = _closure1_slot2;
            var10 = var10[var6];
            var10 = var12.bind(var5)(var10);
            var10 = var10.colors;
            var10 = var10.BLACK;
            var2['shadowColor'] = var10;
            var10 = 0.14;
            if(!var11) { _fun0005_ip = 326; continue _fun0005 }
 316:
            var10 = 0.08;
 326:
            var2['shadowOpacity'] = var10;
            var10 = 'rgba(255, 255, 255, 0.14)';
            if(!var11) { _fun0005_ip = 346; continue _fun0005 }
 340:
            var10 = 'rgba(0, 0, 0, 0.08)';
 346:
            var2['borderColor'] = var10;
            var2['borderWidth'] = var9;
            var1['joinButtonInactive'] = var2;
            var2 = {'marginRight': 2, 'flex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
            var1['joinButtonIconWrapper'] = var2;
            var2 = {};
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = var11[var6];
            var9 = var10.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.WHITE;
            var2['tintColor'] = var9;
            var1['joinButtonIconActive'] = var2;
            var2 = {};
            var9 = var11[var6];
            var9 = var10.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.INTERACTIVE_NORMAL;
            var2['tintColor'] = var9;
            var1['joinButtonIconInactive'] = var2;
            var2 = {};
            var10 = _closure1_slot0;
            var9 = 25;
            var9 = var11[var9];
            var10 = var10.bind(var5)(var9);
            var9 = var10.isAndroid;
            var9 = var9.bind(var10)();
            var7 = 0;
            if(!var9) { _fun0005_ip = 489; continue _fun0005 }
 486:
            var7 = var8;
 489:
            var2['marginTop'] = var7;
            var2['alignSelf'] = var4;
            var1['joinButtonText'] = var2;
            var2 = {'backgroundColor': null, 'width': 8, 'height': 8};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.WHITE;
            var2['backgroundColor'] = var7;
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.radii;
            var3 = var3.round;
            var2['borderRadius'] = var3;
            var1['liveIcon'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var4 = new Array(0);
    var _closure1_slot17 = var4;
    var8 = var7.memo;
    var4 = function UnmemoedVoiceOrStageChannelBase(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var14 = var2.channel;
            var _closure2_slot0 = var14;
            var32 = var2.subtitle;
            var _closure2_slot1 = var32;
            var8 = var2.voiceStates;
            var3 = undefined;
            if(!(var8 === var3)) { _fun0006_ip = 43; continue _fun0006 }
 36:
            var8 = _closure1_slot17;
 43:
            var2 = var2.speakerVoiceStates;
            if(!(var2 === var3)) { _fun0006_ip = 60; continue _fun0006 }
 53:
            var2 = _closure1_slot17;
 60:
            var31 = var14.id;
            var30 = var14.guild_id;
            var5 = _closure1_slot1;
            var13 = _closure1_slot2;
            var4 = 26;
            var4 = var13[var4];
            var4 = var5.bind(var3)(var4);
            var12 = var4.bind(var3)();
            var4 = 27;
            var4 = var13[var4];
            var4 = var5.bind(var3)(var4);
            var7 = var4.bind(var3)();
            var6 = _closure1_slot16;
            var10 = _closure1_slot0;
            var4 = 28;
            var4 = var13[var4];
            var9 = var10.bind(var3)(var4);
            var4 = var9.isThemeLight;
            var4 = var4.bind(var9)(var12);
            var12 = var6.bind(var3)(var7, var4);
            var4 = 29;
            var4 = var13[var4];
            var4 = var5.bind(var3)(var4);
            var16 = var4.bind(var3)();
            var4 = 30;
            var4 = var13[var4];
            var5 = var10.bind(var3)(var4);
            var4 = var5.useIsConnectedToVoiceChannel;
            var20 = var4.bind(var5)(var14);
            var4 = 31;
            var4 = var13[var4];
            var6 = var10.bind(var3)(var4);
            var5 = var6.useBaseChannelUnreadBadgeState;
            var4 = !var20;
            var4 = var5.bind(var6)(var14, var4);
            var23 = var4.unread;
            var26 = var4.mentionCount;
            var5 = 32;
            var4 = var13[var5];
            var9 = var10.bind(var3)(var4);
            var7 = var9.useStateFromStores;
            var4 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                var3 = _closure1_slot9;
                var2 = var3.resolveUnreadSetting;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var22 = var7.bind(var9)(var6, var4);
            var4 = 33;
            var4 = var13[var4];
            var9 = var10.bind(var3)(var4);
            var7 = var9.useStageParticipantsCount;
            var6 = var14.id;
            var4 = 34;
            var4 = var13[var4];
            var4 = var10.bind(var3)(var4);
            var4 = var4.StageChannelParticipantNamedIndex;
            var4 = var4.AUDIENCE;
            var13 = var7.bind(var9)(var6, var4);
            var4 = var8.length;
            var4 = var13 + var4;
            var9 = 0;
            var6 = null;
            var29 = 0;
            if(!(var6 != var4)) { _fun0006_ip = 345; continue _fun0006 }
 342:
            var29 = var4;
 345:
            var4 = _closure1_slot22;
            var27 = var4.bind(var3)(var14);
            var10 = _closure1_slot1;
            var4 = _closure1_slot2;
            var7 = 35;
            var7 = var4[var7];
            var7 = var10.bind(var3)(var7);
            var25 = var7.bind(var3)(var14);
            var15 = _closure1_slot0;
            var7 = 36;
            var10 = var4[var7];
            var18 = var15.bind(var3)(var10);
            var17 = var18.getChannelAccessibilityProps;
            var10 = {};
            var10['channel'] = var14;
            var10['unread'] = var23;
            var10['mentionCount'] = var26;
            var10['userCount'] = var29;
            var19 = var25.length;
            var10['embeddedActivitiesCount'] = var19;
            var10 = var17.bind(var18)(var10);
            var4 = var4[var5];
            var19 = var15.bind(var3)(var4);
            var18 = var19.useStateFromStores;
            var4 = _closure1_slot7;
            var17 = new Array(1);
            var17[0] = var4;
            var4 = var14.id;
            var15 = new Array(1);
            var15[0] = var4;
            var4 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getStageInstanceByChannel;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var18.bind(var19)(var17, var4, var15);
            var4 = var6 == var21;
            var33 = undefined;
            if(var4) { _fun0006_ip = 505; continue _fun0006 }
 499:
            var33 = var21.topic;
 505:
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var4 = 37;
            var4 = var17[var4];
            var15 = var15.bind(var3)(var4);
            var4 = false;
            var34 = var15.bind(var3)(var14, var4);
            var4 = var14.isGuildStageVoice;
            var4 = var4.bind(var14)();
            var15 = var8;
            if(!var4) { _fun0006_ip = 552; continue _fun0006 }
 549:
            var15 = var2;
 552:
            var4 = var15.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.user;
                return var1;
            };
            var15 = var4.bind(var15)(var2);
            var2 = _closure1_slot1;
            var28 = _closure1_slot2;
            var4 = 38;
            var4 = var28[var4];
            var4 = var2.bind(var3)(var4);
            var36 = var4.bind(var3)();
            var4 = _closure1_slot0;
            var17 = 39;
            var17 = var28[var17];
            var18 = var4.bind(var3)(var17);
            var17 = var18.useFontScale;
            var19 = var17.bind(var18)();
            var5 = var28[var5];
            var24 = var4.bind(var3)(var5);
            var18 = var24.useStateFromStores;
            var5 = _closure1_slot8;
            var17 = new Array(1);
            var17[0] = var5;
            var5 = function() {
                var1 = _closure1_slot8;
                var1 = var1.locale;
                return var1;
            };
            var24 = var18.bind(var24)(var17, var5);
            var5 = 16;
            var5 = var28[var5];
            var17 = var2.bind(var3)(var5);
            var5 = var14.id;
            var5 = var17.bind(var3)(var5);
            var18 = var5.isSubscriptionGated;
            var17 = var5.needSubscriptionToAccess;
            var37 = _closure1_slot4;
            var35 = var37.useEffect;
            var5 = new Array(2);
            var5[0] = var20;
            var5[1] = var32;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0007_ip = 31; continue _fun0007 }
 16:
                    var3 = _closure2_slot1;
                    var4 = 'string';
                    var3 = typeof var3;
                    var2 = var4 !== var3;
 31:
                    if(!var2) { _fun0007_ip = 51; continue _fun0007 }
 34:
                    var3 = _closure2_slot1;
                    var4 = var3.type;
                    var3 = 'voice';
                    var2 = var3 === var4;
 51:
                    if(!var2) { _fun0007_ip = 105; continue _fun0007 }
 54:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 40;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var3 = var2.messagePreviewASTCache;
                    var2 = var3.del;
                    var1 = _closure2_slot1;
                    var1 = var1.text;
                    var1 = var2.bind(var3)(var1);
 105:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var35.bind(var37)(var1, var5);
            var1 = 41;
            var1 = var28[var1];
            var2 = var2.bind(var3)(var1);
            var5 = _closure1_slot15;
            var1 = 42;
            var1 = var28[var1];
            var1 = var4.bind(var3)(var1);
            var4 = var1.PressableHighlight;
            var1 = {};
            var35 = var12.pressable;
            var28 = new Array(2);
            var28[0] = var35;
            var35 = {};
            var37 = var8.length;
            var38 = var37 > var9;
            var37 = 0;
            if(!var38) { _fun0006_ip = 795; continue _fun0006 }
 792:
            var37 = 6;
 795:
            var35['paddingBottom'] = var37;
            var37 = var16.container;
            var37 = var37.borderRadius;
            var35['borderRadius'] = var37;
            var28[1] = var35;
            var1['style'] = var28;
            var1['underlayColor'] = var36;
            var35 = _closure1_slot13;
            var28 = {};
            var28['color'] = var36;
            var28 = var35.bind(var3)(var28);
            var1['androidRippleConfig'] = var28;
            var41 = var1;
            var40 = var27;
            var27 = copyDataProperties(var41, var40);
            var27 = var14.isGuildStageVoice;
            var27 = var27.bind(var14)();
            if(!var27) { _fun0006_ip = 895; continue _fun0006 }
 870:
            var28 = _closure1_slot19;
            var27 = {};
            var27['channelName'] = var34;
            var27['channel'] = var14;
            var27['userCount'] = var29;
            var10 = var28.bind(var3)(var27);
 895:
            var41 = var1;
            var40 = var10;
            var10 = copyDataProperties(var41, var40);
            var10 = _closure1_slot1;
            var29 = _closure1_slot2;
            var7 = var29[var7];
            var10 = var10.bind(var3)(var7);
            var7 = {};
            var7['channel'] = var14;
            var28 = _closure1_slot0;
            var27 = 43;
            var27 = var29[var27];
            var29 = var28.bind(var3)(var27);
            var28 = var29.renderChannelSubtitle;
            var27 = {};
            if(!(var6 != var33)) { _fun0006_ip = 959; continue _fun0006 }
 956:
            var32 = var33;
 959:
            var27['subtitle'] = var32;
            var27['channelId'] = var31;
            var27['guildId'] = var30;
            var27['connected'] = var20;
            var27 = var28.bind(var29)(var27);
            var7['subtitle'] = var27;
            if(var23) { _fun0006_ip = 994; continue _fun0006 }
 990:
            var23 = var26 > var9;
 994:
            var7['unread'] = var23;
            var7['resolvedUnreadSetting'] = var22;
            var7['mentionCount'] = var26;
            var23 = _closure1_slot1;
            var27 = _closure1_slot2;
            var22 = 44;
            var22 = var27[var22];
            var23 = var23.bind(var3)(var22);
            var22 = {};
            var22['mentionCount'] = var26;
            var22['locale'] = var24;
            var22 = var23.bind(var3)(var22);
            var7['mentionBadge'] = var22;
            var21 = var6 != var21;
            var7['live'] = var21;
            var21 = var25.length;
            if(!(!(var21 > var9))) { _fun0006_ip = 1118; continue _fun0006 }
 1069:
            var23 = _closure1_slot14;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 46;
            var21 = var24[var21];
            var21 = var22.bind(var3)(var21);
            var22 = var21.VocalChannelJoinButton;
            var21 = {};
            var21['channel'] = var14;
            var21['voiceStates'] = var8;
            var21 = var23.bind(var3)(var22, var21);
            _fun0006_ip = 1176; continue _fun0006;
 1118:
            var24 = _closure1_slot14;
            var23 = _closure1_slot1;
            var26 = _closure1_slot2;
            var22 = 45;
            var22 = var26[var22];
            var23 = var23.bind(var3)(var22);
            var22 = {};
            var22['embeddedApps'] = var25;
            var25 = var16.joinVoiceButton;
            var25 = var25.icon;
            var25 = var25.gameSize;
            var22['size'] = var25;
            var21 = var24.bind(var3)(var23, var22);
 1176:
            var7['end'] = var21;
            var7['connected'] = var20;
            var7['fontScale'] = var19;
            var7['isSubscriptionGated'] = var18;
            var7['needSubscriptionToAccess'] = var17;
            var17 = true;
            var7['showGuildBadgeIcon'] = var17;
            var10 = var10.bind(var3)(var7);
            var7 = new Array(2);
            var7[0] = var10;
            var8 = var8.length;
            var8 = var8 > var9;
            var6 = null;
            if(!var8) { _fun0006_ip = 1342; continue _fun0006 }
 1234:
            var10 = _closure1_slot14;
            var9 = _closure1_slot5;
            var8 = {};
            var17 = var12.voiceUsers;
            var12 = new Array(2);
            var12[0] = var17;
            var16 = var16.voiceUsers;
            var16 = var16.margin;
            var12[1] = var16;
            var8['style'] = var12;
            var12 = _closure1_slot1;
            var16 = _closure1_slot2;
            var11 = 47;
            var11 = var16[var11];
            var12 = var12.bind(var3)(var11);
            var11 = {};
            var11['users'] = var15;
            var15 = 5;
            var11['max'] = var15;
            var14 = var14.guild_id;
            var11['guildId'] = var14;
            var11['audienceCount'] = var13;
            var11 = var10.bind(var3)(var12, var11);
            var8['children'] = var11;
            var6 = var10.bind(var3)(var9, var8);
 1342:
            var7[1] = var6;
            var6 = 'children';
            var1[var6] = var7;
            var1 = var5.bind(var3)(var4, var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot18 = var4;
    var4 = var7.memo;
    var2 = function VoiceOrStageChannel(arg1) {
        var1 = arg1;
        var8 = var1.channel;
        var _closure2_slot0 = var8;
        var5 = var1.customSubtitle;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 32;
        var7 = var9[var3];
        var4 = undefined;
        var12 = var6.bind(var4)(var7);
        var11 = var12.useStateFromStores;
        var7 = _closure1_slot10;
        var10 = new Array(1);
        var10[0] = var7;
        var7 = function() {
            var3 = _closure1_slot10;
            var2 = var3.getVoiceStatesForChannel;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var11.bind(var12)(var10, var7);
        var3 = var9[var3];
        var9 = var6.bind(var4)(var3);
        var6 = var9.useStateFromStoresArray;
        var10 = _closure1_slot6;
        var3 = new Array(1);
        var3[0] = var10;
        var2 = function() {
            var7 = _closure1_slot6;
            var3 = var7.getMutableParticipants;
            var2 = _closure2_slot0;
            var2 = var2.id;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 34;
            var1 = var6[var1];
            var4 = undefined;
            var1 = var5.bind(var4)(var1);
            var1 = var1.StageChannelParticipantNamedIndex;
            var1 = var1.SPEAKER;
            var3 = var3.bind(var7)(var2, var1);
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 34;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.StageChannelParticipantTypes;
                var1 = var1.VOICE;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.map;
            var1 = 48;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.transformParticipantToSortedVoiceState;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var6.bind(var9)(var3, var2);
        var3 = _closure1_slot14;
        var2 = _closure1_slot18;
        var1 = {};
        var1['channel'] = var8;
        var1['voiceStates'] = var7;
        var1['speakerVoiceStates'] = var6;
        var1['subtitle'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 49;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/shared/VoiceOrStageChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();