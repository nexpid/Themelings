// app/components_native/channel_settings/ChannelSettingsNotifications.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot26 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function ChannelSettingsNotificationsGuard(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var10 = var1.onClose;
            var _closure2_slot0 = var10;
            var1 = var1.channelId;
            var _closure2_slot1 = var1;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 34;
            var1 = var1[var8];
            var7 = var4.bind(var5)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot11;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var6.bind(var7)(var4, var1);
            var _closure2_slot2 = var9;
            var1 = null;
            var6 = var1 == var9;
            var4 = undefined;
            if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = var9.getGuildId;
            var4 = var6.bind(var9)();
case 6:
            _closure2_slot3 = var4;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = var7[var8];
            var13 = var4.bind(var5)(var6);
            var12 = var13.useStateFromStoresObject;
            var6 = _closure1_slot14;
            var11 = new Array(1);
            var11[0] = var6;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var6 = _closure1_slot14;
                    var5 = var6.getChannelMessageNotifications;
                    var2 = _closure2_slot3;
                    var7 = _closure2_slot1;
                    var2 = var5.bind(var6)(var2, var7);
                    var1['messageNotifications'] = var2;
                    var6 = _closure1_slot14;
                    var5 = var6.isChannelMuted;
                    var2 = _closure2_slot3;
                    var2 = var5.bind(var6)(var2, var7);
                    var1['muted'] = var2;
                    var6 = _closure1_slot14;
                    var5 = var6.getChannelMuteConfig;
                    var2 = _closure2_slot3;
                    var2 = var5.bind(var6)(var2, var7);
                    var1['muteConfig'] = var2;
                    var6 = _closure1_slot14;
                    var5 = var6.isMuted;
                    var2 = _closure2_slot3;
                    var2 = var5.bind(var6)(var2);
                    var1['guildMuted'] = var2;
                    var6 = _closure1_slot14;
                    var5 = var6.getMessageNotifications;
                    var2 = _closure2_slot3;
                    var2 = var5.bind(var6)(var2);
                    var1['guildMessageNotifications'] = var2;
                    var5 = _closure2_slot2;
                    var2 = null;
                    var2 = var2 != var5;
                    if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var5 = _closure1_slot14;
                    var4 = var5.getNewForumThreadsCreated;
                    var3 = _closure2_slot2;
                    var2 = var4.bind(var5)(var3);
case 8:
                    var1['newForumThreadsCreated'] = var2;
                    return var1;
                }
            };
            var6 = var12.bind(var13)(var11, var6);
            var8 = var7[var8];
            var13 = var4.bind(var5)(var8);
            var12 = var13.useStateFromStores;
            var8 = _closure1_slot12;
            var11 = new Array(1);
            var11[0] = var8;
            var8 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getMemberCount;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var12.bind(var13)(var11, var8);
            var13 = _closure1_slot8;
            var12 = var13.useEffect;
            var11 = new Array(2);
            var11[0] = var9;
            var11[1] = var10;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var2 = _closure2_slot0;
                    if(!(var3 != var2)) { _fun0004_ip = 10; continue _fun0004 }
case 12:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var12.bind(var13)(var3, var11);
            var3 = 35;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useVoiceActivityNotificationSettingsExperiment;
            var7 = var3.bind(var4)(var9);
            var3 = var1 != var9;
            var1 = null;
            if(!var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var4 = _closure1_slot21;
            var3 = _closure1_slot25;
            var2 = {};
            var2['onClose'] = var10;
            var2['channel'] = var9;
            var16 = var2;
            var15 = var6;
            var6 = copyDataProperties(var16, var15);
            var6 = 'guildMemberCount';
            var2[var6] = var8;
            var6 = 'showVoiceActivityNotificationOptions';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 13:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
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
    var11 = 1;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot8 = var4;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.isGuildTextChannelType;
    var _closure1_slot9 = var8;
    var7 = var7.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING;
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot14 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot15 = var7;
    var7 = 12;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.AnalyticEvents;
    var _closure1_slot16 = var8;
    var8 = var7.UserNotificationSettings;
    var _closure1_slot17 = var8;
    var8 = var7.ChannelTypes;
    var _closure1_slot18 = var8;
    var8 = var7.SettingsPaneTypes;
    var _closure1_slot19 = var8;
    var7 = var7.MAX_MEMBERS_NOTIFY_ALL_MESSAGES;
    var _closure1_slot20 = var7;
    var7 = 13;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot21 = var8;
    var8 = var7.Fragment;
    var _closure1_slot22 = var8;
    var7 = var7.jsxs;
    var _closure1_slot23 = var7;
    var7 = 14;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createLegacyClassComponentStyles;
    var7 = {};
    var10 = {};
    var10['flex'] = var11;
    var11 = 15;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var10['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['paddingTop'] = var13;
    var7['screenContainer'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.modules;
    var11 = var11.mobile;
    var11 = var11.TABLE_ROW_PADDING;
    var10['paddingHorizontal'] = var11;
    var7['stackPadding'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot24 = var7;
    var7 = var4.PureComponent;
    var4 = function(arg1) {
        var4 = function ChannelSettingsNotifications(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = arg1;
                var7 = this;
                var1 = _closure1_slot3;
                var5 = _closure2_slot0;
                var6 = undefined;
                var1 = var1.bind(var6)(var7, var5);
                var12 = new Array(1);
                var12[0] = var3;
                var1 = _closure1_slot6;
                var11 = var1.bind(var6)(var5);
                var5 = _closure1_slot5;
                var1 = _closure1_slot26;
                var1 = var1.bind(var6)();
                if(var1) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var7, var12);
                _fun0005_ip = 17; continue _fun0005;
case 15:
                var8 = global;
                var10 = var8.Reflect;
                var9 = var10.construct;
                var8 = _closure1_slot6;
                var8 = var8.bind(var6)(var7);
                var8 = var8.constructor;
                var1 = var9.bind(var10)(var11, var12, var8);
case 17:
                var1 = var5.bind(var6)(var7, var1);
                var _closure3_slot0 = var1;
                var5 = _closure1_slot8;
                var4 = var5.createRef;
                var4 = var4.bind(var5)();
                var1['radioGroupRef'] = var4;
                var4 = function(arg1, arg2) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = arg1;
                        var5 = var1.muted;
                        var4 = var1.messageNotifications;
                        var6 = var1.mute_config;
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var2 = var1.channel;
                        var7 = {};
                        var1 = undefined;
                        var3 = false;
                        if(!(var1 !== var5)) { _fun0006_ip = 5; continue _fun0006 }
case 18:
                        var7['muted'] = var5;
                        var5 = null;
                        var8 = var5 != var6;
                        if(!var8) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                        var5 = var6;
case 19:
                        var7['mute_config'] = var5;
                        var3 = true;
case 5:
                        if(!(var1 !== var4)) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                        var7['message_notifications'] = var4;
                        var3 = true;
case 21:
                        if(!var3) { _fun0006_ip = 23; continue _fun0006 }
case 24:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 16;
                        var3 = var5[var3];
                        var6 = var4.bind(var1)(var3);
                        var5 = var6.updateChannelOverrideSettings;
                        var3 = var2.getGuildId;
                        var12 = var3.bind(var2)();
                        var11 = var2.id;
                        var9 = arg2;
                        var13 = var6;
                        var10 = var7;
                        var2 = var13[var5](var12, var11, var10, var9, var8);
case 23:
                        return var1;
                    }
                };
                var1['updateSetting'] = var4;
                var4 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var4 = var3.state;
                        var5 = var4.muted;
                        var _closure4_slot0 = var5;
                        var3 = var3.props;
                        var9 = var3.channel;
                        if(var5) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var6 = 17;
                        var6 = var3[var6];
                        var10 = undefined;
                        var8 = var7.bind(var10)(var6);
                        var7 = var8.openLazy;
                        var6 = _closure1_slot0;
                        var4 = 19;
                        var4 = var3[var4];
                        var6 = var6.bind(var10)(var4);
                        var4 = 18;
                        var4 = var3[var4];
                        var3 = var3.paths;
                        var6 = var6.bind(var10)(var4, var3);
                        var10 = var9.id;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var4 = var3.concat;
                        var3 = 'muteSettings';
                        var4 = var4.bind(var3)(var10);
                        var3 = {};
                        var10 = var9.getGuildId;
                        var10 = var10.bind(var9)();
                        var3['guildId'] = var10;
                        var9 = var9.id;
                        var3['channelId'] = var9;
                        var9 = function onOptionPress(arg1) {
                            var4 = arg1;
                            var3 = _closure3_slot0;
                            var2 = var3.updateSetting;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 20;
                            var5 = var5[var1];
                            var1 = undefined;
                            var1 = var6.bind(var1)(var5);
                            var6 = var1.NotificationLabel;
                            var5 = var6.muted;
                            var1 = var4.muted;
                            var1 = var5.bind(var6)(var1);
                            var1 = var2.bind(var3)(var4, var1);
                            return var1;
                        };
                        var3['onOptionPress'] = var9;
                        var3 = var7.bind(var8)(var6, var4, var3);
                        _fun0007_ip = 27; continue _fun0007;
case 25:
                        var4 = _closure3_slot0;
                        var3 = var4.setState;
                        var2 = {};
                        var5 = !var5;
                        var2['muted'] = var5;
                        var1 = function() {
                            var4 = _closure3_slot0;
                            var3 = var4.updateSetting;
                            var2 = {};
                            var1 = _closure4_slot0;
                            var5 = !var1;
                            var2['muted'] = var5;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var5 = 20;
                            var6 = var6[var5];
                            var5 = undefined;
                            var5 = var7.bind(var5)(var6);
                            var6 = var5.NotificationLabel;
                            var5 = var6.muted;
                            var1 = !var1;
                            var1 = var5.bind(var6)(var1);
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        };
                        var1 = var3.bind(var4)(var2, var1);
case 27:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleToggleMuteChannel'] = var4;
                var4 = function(arg1) {
                    var5 = arg1;
                    var _closure4_slot0 = var5;
                    var4 = _closure3_slot0;
                    var3 = var4.setState;
                    var2 = {};
                    var2['messageNotifications'] = var5;
                    var1 = function() {
                        var4 = _closure3_slot0;
                        var3 = var4.updateSetting;
                        var2 = {};
                        var6 = _closure4_slot0;
                        var2['messageNotifications'] = var6;
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 20;
                        var5 = var5[var1];
                        var1 = undefined;
                        var1 = var7.bind(var1)(var5);
                        var5 = var1.NotificationLabel;
                        var1 = var5.notifications;
                        var1 = var1.bind(var5)(var6);
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleTypeChange'] = var4;
                var2 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.handleTypeChange;
                    var1 = _closure1_slot17;
                    var1 = var1.NULL;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleResetNotification'] = var2;
                var2 = {};
                var4 = var3.messageNotifications;
                var2['messageNotifications'] = var4;
                var3 = var3.muted;
                var2['muted'] = var3;
                var1['state'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot16;
            var3 = var2.SETTINGS_PANE_VIEWED;
            var2 = {};
            var7 = 'channel';
            var2['settings_type'] = var7;
            var6 = _closure1_slot19;
            var6 = var6.CHANNEL_NOTIFICATION_SETTINGS;
            var2['destination_pane'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentDidUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var4 = var1.muted;
                var2 = var3.props;
                var2 = var2.muted;
                if(!(var4 !== var2)) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                var4 = var3.setState;
                var2 = {};
                var5 = var3.props;
                var5 = var5.muted;
                var2['muted'] = var5;
                var2 = var4.bind(var3)(var2);
case 28:
                var2 = var1.messageNotifications;
                var1 = var3.props;
                var1 = var1.messageNotifications;
                if(!(var2 !== var1)) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                var2 = var3.setState;
                var1 = {};
                var4 = var3.props;
                var4 = var4.messageNotifications;
                var1['messageNotifications'] = var4;
                var1 = var2.bind(var3)(var1);
case 30:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isSelected';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var1 = var1.props;
            var2 = var1.messageNotifications;
            var1 = arg1;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'renderMuteSection';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var15 = this;
                var1 = var15.props;
                var10 = var1.channel;
                var12 = var1.muteConfig;
                var1 = var15.state;
                var7 = var1.muted;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 22;
                var1 = var16[var1];
                var4 = undefined;
                var6 = var13.bind(var4)(var1);
                var5 = var6.computeChannelName;
                var25 = _closure1_slot15;
                var24 = _closure1_slot13;
                var23 = true;
                var27 = var6;
                var26 = var10;
                var21 = var27[var5](var26, var25, var24, var23, var22);
                var3 = _closure1_slot23;
                var2 = _closure1_slot22;
                var1 = {};
                var8 = _closure1_slot21;
                var5 = 23;
                var5 = var16[var5];
                var5 = var13.bind(var4)(var5);
                var6 = var5.TableRowGroup;
                var5 = {};
                var18 = 24;
                var9 = var16[var18];
                var9 = var13.bind(var4)(var9);
                var17 = var9.intl;
                var14 = var17.string;
                var9 = var16[var18];
                var9 = var13.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9["6yI+JS"];
                var9 = var14.bind(var17)(var9);
                var5['description'] = var9;
                var14 = _closure1_slot21;
                var9 = 25;
                var9 = var16[var9];
                var9 = var13.bind(var4)(var9);
                var13 = var9.TableRow;
                var9 = {};
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var19 = var16[var18];
                var19 = var17.bind(var4)(var19);
                var20 = var19.intl;
                var19 = var20.format;
                var16 = var16[var18];
                var16 = var17.bind(var4)(var16);
                var17 = var16.t;
                if(var7) { _fun0009_ip = 32; continue _fun0009 }
case 33:
                var18 = var17.byjuJm;
                var16 = {};
                var16['name'] = var21;
                var16 = var19.bind(var20)(var18, var16);
                _fun0009_ip = 34; continue _fun0009;
case 32:
                var18 = var17.eC+9rj;
                var17 = {};
                var17['name'] = var21;
                var16 = var19.bind(var20)(var18, var17);
case 34:
                var9['label'] = var16;
                var15 = var15.handleToggleMuteChannel;
                var9['onPress'] = var15;
                var15 = !var7;
                var9['arrow'] = var15;
                var9 = var14.bind(var4)(var13, var9);
                var5['children'] = var9;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = null;
                if(!var7) { _fun0009_ip = 35; continue _fun0009 }
case 36:
                var9 = _closure1_slot21;
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var13 = 26;
                var7 = var7[var13];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7['muteConfig'] = var12;
                var12 = var10.type;
                var10 = _closure1_slot18;
                var10 = var10.GUILD_CATEGORY;
                if(!(var12 !== var10)) { _fun0009_ip = 37; continue _fun0009 }
case 38:
                var12 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var13];
                var10 = var12.bind(var4)(var10);
                var10 = var10.MuteSettingType;
                var10 = var10.CHANNEL;
                _fun0009_ip = 39; continue _fun0009;
case 37:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var13];
                var11 = var12.bind(var4)(var11);
                var11 = var11.MuteSettingType;
                var10 = var11.CATEGORY;
case 39:
                var7['type'] = var10;
                var6 = var9.bind(var4)(var8, var7);
case 35:
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'renderForumSettings';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = this;
                var2 = var1.props;
                var3 = var2.channel;
                var _closure3_slot0 = var3;
                var8 = var2.newForumThreadsCreated;
                var _closure3_slot1 = var8;
                var7 = var2.guildMuted;
                var1 = var1.state;
                var6 = var1.muted;
                var4 = _closure1_slot21;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 27;
                var1 = var13[var1];
                var3 = undefined;
                var1 = var12.bind(var3)(var1);
                var2 = var1.TableSwitchRow;
                var1 = {};
                var9 = 24;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.Rkgjph;
                var9 = var10.bind(var11)(var9);
                var1['label'] = var9;
                var1['value'] = var8;
                if(var6) { _fun0010_ip = 40; continue _fun0010 }
case 41:
                var6 = var7;
case 40:
                var1['disabled'] = var6;
                var5 = function onValueChange() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.setForumThreadsCreated;
                    var3 = _closure3_slot0;
                    var2 = _closure3_slot1;
                    var2 = !var2;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['onValueChange'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'renderNotificationSettings';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var8 = this;
                var1 = var8.props;
                var2 = var1.channel;
                var12 = var1.guildMuted;
                var21 = var1.guildMemberCount;
                var17 = var1.showVoiceActivityNotificationOptions;
                if(!var17) { _fun0011_ip = 42; continue _fun0011 }
case 43:
                var1 = var2.isGuildVoice;
                var17 = var1.bind(var2)();
case 42:
                var1 = var8.state;
                var11 = var1.muted;
                var9 = var1.messageNotifications;
                var1 = var2.isGuildStageVoice;
                var1 = var1.bind(var2)();
                var5 = _closure1_slot23;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 28;
                var2 = var6[var2];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.TableRadioGroup;
                if(var1) { _fun0011_ip = 44; continue _fun0011 }
case 45:
                var1 = {};
                var1['value'] = var9;
                var2 = var8.handleTypeChange;
                var1['onChange'] = var2;
                var2 = var8.radioGroupRef;
                var1['groupRef'] = var2;
                var20 = 24;
                var2 = var6[var20];
                var2 = var7.bind(var4)(var2);
                var14 = var2.intl;
                var13 = var14.string;
                var2 = var6[var20];
                var2 = var7.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2.h850Ss;
                var2 = var13.bind(var14)(var2);
                var1['title'] = var2;
                var2 = undefined;
                if(!var17) { _fun0011_ip = 46; continue _fun0011 }
case 47:
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var14 = var13[var20];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var20];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.ztcKQJ;
                var2 = var14.bind(var15)(var13);
case 46:
                var1['description'] = var2;
                var15 = _closure1_slot21;
                var14 = _closure1_slot0;
                var2 = _closure1_slot2;
                var13 = 29;
                var2 = var2[var13];
                var2 = var14.bind(var4)(var2);
                var14 = var2.TableRadioRow;
                var2 = {};
                var18 = _closure1_slot0;
                var16 = _closure1_slot2;
                var19 = var16[var20];
                var19 = var18.bind(var4)(var19);
                var22 = var19.intl;
                var19 = var22.string;
                var16 = var16[var20];
                var16 = var18.bind(var4)(var16);
                var18 = var16.t;
                if(var17) { _fun0011_ip = 48; continue _fun0011 }
case 49:
                var16 = var18.n/bTaY;
                var16 = var19.bind(var22)(var16);
                _fun0011_ip = 50; continue _fun0011;
case 48:
                var18 = var18["9sGJkt"];
                var16 = var19.bind(var22)(var18);
case 50:
                var2['label'] = var16;
                var16 = var11;
                if(var11) { _fun0011_ip = 51; continue _fun0011 }
case 52:
                var16 = var12;
case 51:
                var2['disabled'] = var16;
                var19 = null;
                var18 = var19 != var21;
                var16 = null;
                if(!var18) { _fun0011_ip = 53; continue _fun0011 }
case 54:
                var18 = _closure1_slot20;
                var18 = var21 >= var18;
                var16 = null;
                if(!var18) { _fun0011_ip = 53; continue _fun0011 }
case 55:
                var22 = _closure1_slot0;
                var18 = _closure1_slot2;
                var19 = var18[var20];
                var19 = var22.bind(var4)(var19);
                var21 = var19.intl;
                var19 = var21.string;
                var18 = var18[var20];
                var18 = var22.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18.Dh5p5j;
                var16 = var19.bind(var21)(var18);
case 53:
                var2['subLabel'] = var16;
                var16 = _closure1_slot17;
                var16 = var16.ALL_MESSAGES;
                var2['value'] = var16;
                var14 = var15.bind(var4)(var14, var2);
                var2 = new Array(3);
                var2[0] = var14;
                var16 = _closure1_slot21;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var13];
                var14 = var15.bind(var4)(var14);
                var15 = var14.TableRadioRow;
                var14 = {};
                var19 = _closure1_slot0;
                var18 = _closure1_slot2;
                var21 = var18[var20];
                var21 = var19.bind(var4)(var21);
                var22 = var21.intl;
                var21 = var22.format;
                var18 = var18[var20];
                var18 = var19.bind(var4)(var18);
                var18 = var18.t;
                if(var17) { _fun0011_ip = 56; continue _fun0011 }
case 57:
                var19 = var18.L2hmYy;
                var17 = {};
                var17 = var21.bind(var22)(var19, var17);
                _fun0011_ip = 58; continue _fun0011;
case 56:
                var19 = var18.cpcXvW;
                var18 = {};
                var17 = var21.bind(var22)(var19, var18);
case 58:
                var14['label'] = var17;
                var17 = var11;
                if(var11) { _fun0011_ip = 59; continue _fun0011 }
case 60:
                var17 = var12;
case 59:
                var14['disabled'] = var17;
                var17 = _closure1_slot17;
                var17 = var17.ONLY_MENTIONS;
                var14['value'] = var17;
                var14 = var16.bind(var4)(var15, var14);
                var2[1] = var14;
                var15 = _closure1_slot21;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = var16[var13];
                var13 = var19.bind(var4)(var13);
                var14 = var13.TableRadioRow;
                var13 = {};
                var17 = var16[var20];
                var17 = var19.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.CtVGyQ;
                var16 = var17.bind(var18)(var16);
                var13['label'] = var16;
                var16 = var11;
                if(var11) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                var16 = var12;
case 61:
                var13['disabled'] = var16;
                var16 = _closure1_slot17;
                var16 = var16.NO_MESSAGES;
                var13['value'] = var16;
                var13 = var15.bind(var4)(var14, var13);
                var2[2] = var13;
                var1['children'] = var2;
                var1 = var5.bind(var4)(var3, var1);
                _fun0011_ip = 63; continue _fun0011;
case 44:
                var2 = {};
                var2['value'] = var9;
                var9 = var8.handleTypeChange;
                var2['onChange'] = var9;
                var8 = var8.radioGroupRef;
                var2['groupRef'] = var8;
                var14 = 24;
                var8 = var6[var14];
                var8 = var7.bind(var4)(var8);
                var13 = var8.intl;
                var9 = var13.string;
                var8 = var6[var14];
                var8 = var7.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.h850Ss;
                var8 = var9.bind(var13)(var8);
                var2['title'] = var8;
                var15 = _closure1_slot21;
                var13 = 29;
                var6 = var6[var13];
                var6 = var7.bind(var4)(var6);
                var9 = var6.TableRadioRow;
                var6 = {};
                var7 = var11;
                if(var11) { _fun0011_ip = 64; continue _fun0011 }
case 65:
                var7 = var12;
case 64:
                var6['disabled'] = var7;
                var7 = _closure1_slot17;
                var7 = var7.ONLY_MENTIONS;
                var6['value'] = var7;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var16 = var7[var14];
                var16 = var8.bind(var4)(var16);
                var18 = var16.intl;
                var17 = var18.string;
                var16 = var7[var14];
                var16 = var8.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.BENn/6;
                var16 = var17.bind(var18)(var16);
                var6['label'] = var16;
                var9 = var15.bind(var4)(var9, var6);
                var6 = new Array(2);
                var6[0] = var9;
                var9 = _closure1_slot21;
                var7 = var7[var13];
                var7 = var8.bind(var4)(var7);
                var8 = var7.TableRadioRow;
                var7 = {};
                if(var11) { _fun0011_ip = 66; continue _fun0011 }
case 67:
                var11 = var12;
case 66:
                var7['disabled'] = var11;
                var11 = _closure1_slot17;
                var11 = var11.NO_MESSAGES;
                var7['value'] = var11;
                var13 = _closure1_slot0;
                var10 = _closure1_slot2;
                var11 = var10[var14];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var10[var14];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.CtVGyQ;
                var10 = var11.bind(var12)(var10);
                var7['label'] = var10;
                var7 = var9.bind(var4)(var8, var7);
                var6[1] = var7;
                var2['children'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 63:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var17 = this;
                var2 = _closure1_slot24;
                var1 = var17.context;
                var5 = undefined;
                var15 = var2.bind(var5)(var1);
                var1 = var17.props;
                var2 = var1.guildMuted;
                var16 = var1.channel;
                var3 = var1.guildMessageNotifications;
                var1 = var1.showVoiceActivityNotificationOptions;
                var4 = var17.state;
                var12 = var4.messageNotifications;
                var4 = _closure1_slot17;
                var11 = var4.NULL;
                if(!var1) { _fun0012_ip = 21; continue _fun0012 }
case 4:
                var4 = var16.isGuildVoice;
                var1 = var4.bind(var16)();
case 21:
                var6 = _closure1_slot9;
                var4 = var16.type;
                var9 = var6.bind(var5)(var4);
                if(var9) { _fun0012_ip = 68; continue _fun0012 }
case 69:
                var4 = var16.isForumLikeChannel;
                var9 = var4.bind(var16)();
case 68:
                if(var9) { _fun0012_ip = 70; continue _fun0012 }
case 71:
                var9 = var1;
case 70:
                var10 = null;
                var4 = var10 == var16;
                var1 = null;
                if(var4) { _fun0012_ip = 72; continue _fun0012 }
case 73:
                if(var2) { _fun0012_ip = 74; continue _fun0012 }
case 75:
                var2 = _closure1_slot17;
                var2 = var2.NO_MESSAGES;
                var13 = undefined;
                if(!(var3 === var2)) { _fun0012_ip = 76; continue _fun0012 }
case 77:
                var4 = _closure1_slot21;
                var7 = _closure1_slot0;
                var20 = _closure1_slot2;
                var2 = 30;
                var2 = var20[var2];
                var2 = var7.bind(var5)(var2);
                var3 = var2.Text;
                var2 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                var6 = 24;
                var8 = var20[var6];
                var8 = var7.bind(var5)(var8);
                var18 = var8.intl;
                var8 = var18.format;
                var6 = var20[var6];
                var6 = var7.bind(var5)(var6);
                var6 = var6.t;
                var7 = var6.nRwUIL;
                var6 = {};
                var20 = function notificationHook(arg1, arg2) {
                    var5 = _closure1_slot21;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 30;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.Text;
                    var2 = {'variant': 'text-sm/medium', 'color': 'text-feedback-warning'};
                    var1 = arg1;
                    var2['children'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var6['notificationHook'] = var20;
                var6 = var8.bind(var18)(var7, var6);
                var2['children'] = var6;
                var13 = var4.bind(var5)(var3, var2);
                _fun0012_ip = 76; continue _fun0012;
case 74:
                var4 = _closure1_slot21;
                var7 = _closure1_slot0;
                var20 = _closure1_slot2;
                var2 = 30;
                var2 = var20[var2];
                var2 = var7.bind(var5)(var2);
                var3 = var2.Text;
                var2 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                var6 = 24;
                var8 = var20[var6];
                var8 = var7.bind(var5)(var8);
                var18 = var8.intl;
                var8 = var18.format;
                var6 = var20[var6];
                var6 = var7.bind(var5)(var6);
                var6 = var6.t;
                var7 = var6.O34r15;
                var6 = {};
                var19 = function mutedHook(arg1, arg2) {
                    var5 = _closure1_slot21;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 30;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.Text;
                    var2 = {'variant': 'text-sm/medium', 'color': 'text-feedback-critical'};
                    var1 = arg1;
                    var2['children'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var6['mutedHook'] = var19;
                var6 = var8.bind(var18)(var7, var6);
                var2['children'] = var6;
                var13 = var4.bind(var5)(var3, var2);
case 76:
                var4 = _closure1_slot21;
                var7 = _closure1_slot0;
                var20 = _closure1_slot2;
                var2 = 31;
                var2 = var20[var2];
                var2 = var7.bind(var5)(var2);
                var3 = var2.Form;
                var2 = {};
                var6 = var15.screenContainer;
                var2['style'] = var6;
                var8 = _closure1_slot23;
                var6 = 32;
                var6 = var20[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.Stack;
                var6 = {};
                var19 = _closure1_slot1;
                var18 = 15;
                var18 = var20[var18];
                var18 = var19.bind(var5)(var18);
                var18 = var18.spacing;
                var18 = var18.PX_24;
                var6['spacing'] = var18;
                var15 = var15.stackPadding;
                var6['style'] = var15;
                var15 = null;
                if(!var9) { _fun0012_ip = 78; continue _fun0012 }
case 79:
                var9 = var17.renderMuteSection;
                var15 = var9.bind(var17)();
case 78:
                var9 = new Array(5);
                var9[0] = var15;
                var15 = var17.renderNotificationSettings;
                var15 = var15.bind(var17)();
                var9[1] = var15;
                var15 = var16.isForumLikeChannel;
                var16 = var15.bind(var16)();
                var15 = null;
                if(!var16) { _fun0012_ip = 80; continue _fun0012 }
case 81:
                var19 = _closure1_slot21;
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var16 = 23;
                var16 = var24[var16];
                var16 = var23.bind(var5)(var16);
                var18 = var16.TableRowGroup;
                var16 = {};
                var20 = 24;
                var21 = var24[var20];
                var21 = var23.bind(var5)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var24[var20];
                var20 = var23.bind(var5)(var20);
                var20 = var20.t;
                var20 = var20.bK11jO;
                var20 = var21.bind(var22)(var20);
                var16['title'] = var20;
                var20 = var17.renderForumSettings;
                var20 = var20.bind(var17)();
                var16['children'] = var20;
                var15 = var19.bind(var5)(var18, var16);
case 80:
                var9[2] = var15;
                var9[3] = var13;
                var10 = null;
                if(!(var12 !== var11)) { _fun0012_ip = 82; continue _fun0012 }
case 83:
                var13 = _closure1_slot21;
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var11 = 23;
                var11 = var22[var11];
                var11 = var21.bind(var5)(var11);
                var12 = var11.TableRowGroup;
                var11 = {};
                var16 = _closure1_slot21;
                var14 = 25;
                var14 = var22[var14];
                var14 = var21.bind(var5)(var14);
                var15 = var14.TableRow;
                var14 = {};
                var18 = 24;
                var19 = var22[var18];
                var19 = var21.bind(var5)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var22[var18];
                var18 = var21.bind(var5)(var18);
                var18 = var18.t;
                var18 = var18["3PBFN6"];
                var18 = var19.bind(var20)(var18);
                var14['label'] = var18;
                var17 = var17.handleResetNotification;
                var14['onPress'] = var17;
                var14 = var16.bind(var5)(var15, var14);
                var11['children'] = var14;
                var10 = var13.bind(var5)(var12, var11);
case 82:
                var9[4] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 72:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var4.bind(var1)(var7);
    var _closure1_slot25 = var7;
    var4 = 33;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var7['contextType'] = var4;
    var4 = 38;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/channel_settings/ChannelSettingsNotifications.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelSettingsNotificationsSplit(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 34;
            var5 = var4[var5];
            var6 = undefined;
            var9 = var2.bind(var6)(var5);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot11;
            var5 = new Array(1);
            var5[0] = var10;
            var1 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var9)(var5, var1);
            var1 = 36;
            var1 = var4[var1];
            var4 = var2.bind(var6)(var1);
            var2 = var4.useShouldUseNewNotificationSystem;
            var1 = 'ChannelSettingsNotificationsNative';
            var2 = var2.bind(var4)(var1);
            var1 = null;
            var4 = var1 == var8;
            if(var4) { _fun0013_ip = 84; continue _fun0013 }
case 85:
            if(!var2) { _fun0013_ip = 86; continue _fun0013 }
case 87:
            var5 = _closure1_slot10;
            var4 = var5.has;
            var2 = var8.type;
            var2 = var4.bind(var5)(var2);
            if(var2) { _fun0013_ip = 88; continue _fun0013 }
case 86:
            var5 = _closure1_slot21;
            var4 = _closure1_slot27;
            var2 = {};
            var12 = var2;
            var11 = var7;
            var9 = copyDataProperties(var12, var11);
            var2 = var5.bind(var6)(var4, var2);
            _fun0013_ip = 89; continue _fun0013;
case 88:
            var5 = _closure1_slot21;
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 37;
            var3 = var9[var3];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var3['channel'] = var8;
            var12 = var3;
            var11 = var7;
            var7 = copyDataProperties(var12, var11);
            var2 = var5.bind(var6)(var4, var3);
case 89:
            var1 = var2;
case 84:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();