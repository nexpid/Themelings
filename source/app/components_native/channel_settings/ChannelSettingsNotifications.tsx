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
            _closure1_slot28 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function ChannelSettingsNotificationsGuard(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var13 = var1.onClose;
            var _closure2_slot0 = var13;
            var1 = var1.channelId;
            var _closure2_slot1 = var1;
            var5 = undefined;
            var _closure2_slot3 = var5;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 32;
            var1 = var1[var7];
            var8 = var3.bind(var5)(var1);
            var4 = var8.useStateFromStores;
            var1 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var4.bind(var8)(var3, var1);
            var _closure2_slot2 = var12;
            var1 = null;
            var4 = var1 == var12;
            var3 = undefined;
            if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var12.getGuildId;
            var3 = var4.bind(var12)();
case 6:
            _closure2_slot3 = var3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = var4[var7];
            var11 = var3.bind(var5)(var8);
            var10 = var11.useStateFromStoresObject;
            var8 = _closure1_slot15;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = {};
                    var6 = _closure1_slot15;
                    var5 = var6.getChannelMessageNotifications;
                    var2 = _closure2_slot3;
                    var7 = _closure2_slot1;
                    var2 = var5.bind(var6)(var2, var7);
                    var1['messageNotifications'] = var2;
                    var6 = _closure1_slot15;
                    var5 = var6.isChannelMuted;
                    var2 = _closure2_slot3;
                    var2 = var5.bind(var6)(var2, var7);
                    var1['muted'] = var2;
                    var6 = _closure1_slot15;
                    var5 = var6.getChannelMuteConfig;
                    var2 = _closure2_slot3;
                    var2 = var5.bind(var6)(var2, var7);
                    var1['muteConfig'] = var2;
                    var6 = _closure1_slot15;
                    var5 = var6.isMuted;
                    var2 = _closure2_slot3;
                    var2 = var5.bind(var6)(var2);
                    var1['guildMuted'] = var2;
                    var6 = _closure1_slot15;
                    var5 = var6.getMessageNotifications;
                    var2 = _closure2_slot3;
                    var2 = var5.bind(var6)(var2);
                    var1['guildMessageNotifications'] = var2;
                    var5 = _closure2_slot2;
                    var2 = null;
                    var2 = var2 != var5;
                    if(!var2) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var5 = _closure1_slot15;
                    var4 = var5.getNewForumThreadsCreated;
                    var3 = _closure2_slot2;
                    var2 = var4.bind(var5)(var3);
case 8:
                    var1['newForumThreadsCreated'] = var2;
                    return var1;
                }
            };
            var9 = var10.bind(var11)(var9, var8);
            var7 = var4[var7];
            var11 = var3.bind(var5)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot13;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot13;
                var2 = var3.getMemberCount;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var10.bind(var11)(var8, var7);
            var10 = _closure1_slot8;
            var8 = var10.useEffect;
            var7 = new Array(2);
            var7[0] = var12;
            var7[1] = var13;
            var2 = function() {
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
            var2 = var8.bind(var10)(var2, var7);
            var2 = 33;
            var2 = var4[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useVoiceActivityNotificationSettingsExperiment;
            var10 = var2.bind(var3)(var12);
            var2 = var1 != var12;
            var1 = null;
            if(!var2) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var4 = _closure1_slot23;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 29;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.RedesignCompat;
            var2 = {};
            var8 = _closure1_slot23;
            var7 = _closure1_slot27;
            var6 = {};
            var6['onClose'] = var13;
            var6['channel'] = var12;
            var16 = var6;
            var15 = var9;
            var9 = copyDataProperties(var16, var15);
            var9 = 'guildMemberCount';
            var6[var9] = var11;
            var9 = 'showVoiceActivityNotificationOptions';
            var6[var9] = var10;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 13:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
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
    var7 = var7.View;
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.isGuildTextChannelType;
    var _closure1_slot10 = var8;
    var7 = var7.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING;
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
    var7 = var12.bind(var1)(var7);
    var _closure1_slot16 = var7;
    var7 = 13;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.AnalyticEvents;
    var _closure1_slot17 = var8;
    var8 = var7.UserNotificationSettings;
    var _closure1_slot18 = var8;
    var8 = var7.ChannelTypes;
    var _closure1_slot19 = var8;
    var8 = var7.SettingsPaneTypes;
    var _closure1_slot20 = var8;
    var7 = var7.MAX_MEMBERS_NOTIFY_ALL_MESSAGES;
    var _closure1_slot21 = var7;
    var7 = 14;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.TitleStyleType;
    var _closure1_slot22 = var7;
    var7 = 15;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot23 = var8;
    var8 = var7.Fragment;
    var _closure1_slot24 = var8;
    var7 = var7.jsxs;
    var _closure1_slot25 = var7;
    var7 = 16;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createLegacyClassComponentStyles;
    var7 = {};
    var10 = {};
    var10['flex'] = var11;
    var11 = 17;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var11;
    var7['screenContainer'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot26 = var7;
    var7 = var4.PureComponent;
    var4 = function(arg1) {
        var4 = function ChannelSettingsNotifications(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = arg1;
                var6 = this;
                var1 = _closure1_slot3;
                var4 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var6, var4);
                var11 = new Array(1);
                var11[0] = var3;
                var1 = _closure1_slot6;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot5;
                var1 = _closure1_slot28;
                var1 = var1.bind(var5)();
                if(var1) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0005_ip = 17; continue _fun0005;
case 15:
                var8 = global;
                var9 = var8.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 17:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
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
                        var3 = 18;
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
                        var6 = 19;
                        var6 = var3[var6];
                        var10 = undefined;
                        var8 = var7.bind(var10)(var6);
                        var7 = var8.openLazy;
                        var6 = _closure1_slot0;
                        var4 = 21;
                        var4 = var3[var4];
                        var6 = var6.bind(var10)(var4);
                        var4 = 20;
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
                            var1 = 22;
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
                            var5 = 22;
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
                var2 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.handleTypeChange;
                    var1 = _closure1_slot18;
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
            var1 = 23;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.trackWithMetadata;
            var2 = _closure1_slot17;
            var3 = var2.SETTINGS_PANE_VIEWED;
            var2 = {};
            var7 = 'channel';
            var2['settings_type'] = var7;
            var6 = _closure1_slot20;
            var6 = var6.CHANNEL_NOTIFICATION_SETTINGS;
            var2['destination_pane'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(8);
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
        var7 = 'handleTypeChange';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var5 = arg1;
            var4 = this;
            var _closure3_slot0 = var4;
            var _closure3_slot1 = var5;
            var3 = var4.setState;
            var2 = {};
            var2['messageNotifications'] = var5;
            var1 = function() {
                var4 = _closure3_slot0;
                var3 = var4.updateSetting;
                var2 = {};
                var6 = _closure3_slot1;
                var2['messageNotifications'] = var6;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 22;
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
        var5['value'] = var7;
        var1[2] = var5;
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
        var1[3] = var5;
        var5 = {};
        var7 = 'renderMuteSection';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var6 = this;
                var1 = var6.props;
                var10 = var1.channel;
                var12 = var1.muteConfig;
                var1 = var6.state;
                var7 = var1.muted;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 24;
                var1 = var13[var1];
                var4 = undefined;
                var8 = var14.bind(var4)(var1);
                var5 = var8.computeChannelName;
                var26 = _closure1_slot16;
                var25 = _closure1_slot14;
                var24 = true;
                var28 = var8;
                var27 = var10;
                var22 = var28[var5](var27, var26, var25, var24, var23);
                var3 = _closure1_slot25;
                var2 = _closure1_slot24;
                var1 = {};
                var9 = _closure1_slot23;
                var20 = 25;
                var5 = var13[var20];
                var5 = var14.bind(var4)(var5);
                var8 = var5.FormSection;
                var5 = {};
                var17 = _closure1_slot23;
                var15 = var13[var20];
                var15 = var14.bind(var4)(var15);
                var16 = var15.FormHint;
                var15 = {};
                var18 = 26;
                var19 = var13[var18];
                var19 = var14.bind(var4)(var19);
                var23 = var19.intl;
                var21 = var23.string;
                var19 = var13[var18];
                var19 = var14.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19.6yI+JS;
                var19 = var21.bind(var23)(var19);
                var15['children'] = var19;
                var15 = var17.bind(var4)(var16, var15);
                var5['hint'] = var15;
                var15 = _closure1_slot23;
                var13 = var13[var20];
                var13 = var14.bind(var4)(var13);
                var14 = var13.FormRow;
                var13 = {};
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var19 = var16[var18];
                var19 = var17.bind(var4)(var19);
                var21 = var19.intl;
                var19 = var21.format;
                var16 = var16[var18];
                var16 = var17.bind(var4)(var16);
                var17 = var16.t;
                if(var7) { _fun0009_ip = 32; continue _fun0009 }
case 14:
                var18 = var17.byjuJi;
                var16 = {};
                var16['name'] = var22;
                var16 = var19.bind(var21)(var18, var16);
                _fun0009_ip = 33; continue _fun0009;
case 32:
                var18 = var17.eC+9rq;
                var17 = {};
                var17['name'] = var22;
                var16 = var19.bind(var21)(var18, var17);
case 33:
                var13['label'] = var16;
                var6 = var6.handleToggleMuteChannel;
                var13['onPress'] = var6;
                var16 = null;
                if(var7) { _fun0009_ip = 34; continue _fun0009 }
case 35:
                var19 = _closure1_slot23;
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var17 = var17[var20];
                var17 = var18.bind(var4)(var17);
                var17 = var17.FormRow;
                var18 = var17.Arrow;
                var17 = {};
                var16 = var19.bind(var4)(var18, var17);
case 34:
                var13['trailing'] = var16;
                var13 = var15.bind(var4)(var14, var13);
                var5['children'] = var13;
                var8 = var9.bind(var4)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var6 = null;
                if(!var7) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                var9 = _closure1_slot23;
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var13 = 27;
                var7 = var7[var13];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7['muteConfig'] = var12;
                var12 = var10.type;
                var10 = _closure1_slot19;
                var10 = var10.GUILD_CATEGORY;
                if(!(var12 !== var10)) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                var12 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var13];
                var10 = var12.bind(var4)(var10);
                var10 = var10.MuteSettingType;
                var10 = var10.CHANNEL;
                _fun0009_ip = 40; continue _fun0009;
case 38:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var13];
                var11 = var12.bind(var4)(var11);
                var11 = var11.MuteSettingType;
                var10 = var11.CATEGORY;
case 40:
                var7['type'] = var10;
                var6 = var9.bind(var4)(var8, var7);
case 36:
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
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
                var4 = _closure1_slot23;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 25;
                var1 = var13[var1];
                var3 = undefined;
                var1 = var12.bind(var3)(var1);
                var2 = var1.FormSwitchRow;
                var1 = {};
                var9 = 26;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.Rkgjpq;
                var9 = var10.bind(var11)(var9);
                var1['label'] = var9;
                var1['value'] = var8;
                if(var6) { _fun0010_ip = 41; continue _fun0010 }
case 42:
                var6 = var7;
case 41:
                var1['disabled'] = var6;
                var5 = function onValueChange() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 18;
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
        var1[5] = var5;
        var5 = {};
        var7 = 'renderNotificationSettings';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var15 = this;
                var _closure3_slot0 = var15;
                var1 = var15.props;
                var2 = var1.channel;
                var12 = var1.guildMuted;
                var18 = var1.guildMemberCount;
                var16 = var1.showVoiceActivityNotificationOptions;
                if(!var16) { _fun0011_ip = 43; continue _fun0011 }
case 26:
                var1 = var2.isGuildVoice;
                var16 = var1.bind(var2)();
case 43:
                var1 = var15.state;
                var11 = var1.muted;
                var1 = var2.isGuildStageVoice;
                var1 = var1.bind(var2)();
                var5 = _closure1_slot25;
                if(var1) { _fun0011_ip = 44; continue _fun0011 }
case 45:
                var3 = _closure1_slot9;
                var2 = {};
                var1 = 'radiogroup';
                var2['accessibilityRole'] = var1;
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var19 = 26;
                var6 = var4[var19];
                var1 = undefined;
                var6 = var7.bind(var1)(var6);
                var9 = var6.intl;
                var8 = var9.string;
                var6 = var4[var19];
                var6 = var7.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.h850Sk;
                var6 = var8.bind(var9)(var6);
                var2['accessibilityLabel'] = var6;
                var8 = _closure1_slot23;
                var6 = 25;
                var4 = var4[var6];
                var4 = var7.bind(var1)(var4);
                var7 = var4.FormRadioRow;
                var4 = {};
                var14 = _closure1_slot0;
                var9 = _closure1_slot2;
                var17 = var9[var19];
                var17 = var14.bind(var1)(var17);
                var20 = var17.intl;
                var17 = var20.string;
                var9 = var9[var19];
                var9 = var14.bind(var1)(var9);
                var14 = var9.t;
                if(var16) { _fun0011_ip = 46; continue _fun0011 }
case 47:
                var9 = var14.n/bTaW;
                var9 = var17.bind(var20)(var9);
                _fun0011_ip = 48; continue _fun0011;
case 46:
                var14 = var14.9sGJkp;
                var9 = var17.bind(var20)(var14);
case 48:
                var4['label'] = var9;
                var9 = var11;
                if(var11) { _fun0011_ip = 49; continue _fun0011 }
case 14:
                var9 = var12;
case 49:
                var4['disabled'] = var9;
                var17 = null;
                var14 = var17 != var18;
                var9 = null;
                if(!var14) { _fun0011_ip = 50; continue _fun0011 }
case 51:
                var14 = _closure1_slot21;
                var14 = var18 >= var14;
                var9 = null;
                if(!var14) { _fun0011_ip = 50; continue _fun0011 }
case 52:
                var20 = _closure1_slot0;
                var14 = _closure1_slot2;
                var17 = var14[var19];
                var17 = var20.bind(var1)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var14 = var14[var19];
                var14 = var20.bind(var1)(var14);
                var14 = var14.t;
                var14 = var14.Dh5p5u;
                var9 = var17.bind(var18)(var14);
case 50:
                var4['subLabel'] = var9;
                var9 = function onPress() {
                    var3 = _closure3_slot0;
                    var2 = var3.handleTypeChange;
                    var1 = _closure1_slot18;
                    var1 = var1.ALL_MESSAGES;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var4['onPress'] = var9;
                var14 = var15.isSelected;
                var9 = _closure1_slot18;
                var9 = var9.ALL_MESSAGES;
                var9 = var14.bind(var15)(var9);
                var4['selected'] = var9;
                var9 = 'right';
                var4['align'] = var9;
                var7 = var8.bind(var1)(var7, var4);
                var4 = new Array(5);
                var4[0] = var7;
                var18 = _closure1_slot23;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var6];
                var14 = var8.bind(var1)(var14);
                var17 = var14.FormDivider;
                var14 = {};
                var14 = var18.bind(var1)(var17, var14);
                var4[1] = var14;
                var14 = _closure1_slot23;
                var7 = var7[var6];
                var7 = var8.bind(var1)(var7);
                var8 = var7.FormRadioRow;
                var7 = {};
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var20 = var17[var19];
                var20 = var18.bind(var1)(var20);
                var21 = var20.intl;
                var20 = var21.format;
                var17 = var17[var19];
                var17 = var18.bind(var1)(var17);
                var17 = var17.t;
                if(var16) { _fun0011_ip = 53; continue _fun0011 }
case 54:
                var18 = var17.L2hmY2;
                var16 = {};
                var16 = var20.bind(var21)(var18, var16);
                _fun0011_ip = 55; continue _fun0011;
case 53:
                var18 = var17.cpcXvb;
                var17 = {};
                var16 = var20.bind(var21)(var18, var17);
case 55:
                var7['label'] = var16;
                var16 = var11;
                if(var11) { _fun0011_ip = 56; continue _fun0011 }
case 57:
                var16 = var12;
case 56:
                var7['disabled'] = var16;
                var16 = function onPress() {
                    var3 = _closure3_slot0;
                    var2 = var3.handleTypeChange;
                    var1 = _closure1_slot18;
                    var1 = var1.ONLY_MENTIONS;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['onPress'] = var16;
                var17 = var15.isSelected;
                var16 = _closure1_slot18;
                var16 = var16.ONLY_MENTIONS;
                var16 = var17.bind(var15)(var16);
                var7['selected'] = var16;
                var7['align'] = var9;
                var7 = var14.bind(var1)(var8, var7);
                var4[2] = var7;
                var16 = _closure1_slot23;
                var18 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = var14[var6];
                var7 = var18.bind(var1)(var7);
                var8 = var7.FormDivider;
                var7 = {};
                var7 = var16.bind(var1)(var8, var7);
                var4[3] = var7;
                var8 = _closure1_slot23;
                var6 = var14[var6];
                var6 = var18.bind(var1)(var6);
                var7 = var6.FormRadioRow;
                var6 = {};
                var16 = var14[var19];
                var16 = var18.bind(var1)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var14[var19];
                var14 = var18.bind(var1)(var14);
                var14 = var14.t;
                var14 = var14.CtVGyc;
                var14 = var16.bind(var17)(var14);
                var6['label'] = var14;
                var14 = var11;
                if(var11) { _fun0011_ip = 58; continue _fun0011 }
case 59:
                var14 = var12;
case 58:
                var6['disabled'] = var14;
                var14 = function onPress() {
                    var3 = _closure3_slot0;
                    var2 = var3.handleTypeChange;
                    var1 = _closure1_slot18;
                    var1 = var1.NO_MESSAGES;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var6['onPress'] = var14;
                var16 = var15.isSelected;
                var14 = _closure1_slot18;
                var14 = var14.NO_MESSAGES;
                var14 = var16.bind(var15)(var14);
                var6['selected'] = var14;
                var6['align'] = var9;
                var6 = var8.bind(var1)(var7, var6);
                var4[4] = var6;
                var2['children'] = var4;
                var1 = var5.bind(var1)(var3, var2);
                _fun0011_ip = 60; continue _fun0011;
case 44:
                var4 = _closure1_slot24;
                var3 = {};
                var8 = _closure1_slot23;
                var18 = _closure1_slot0;
                var9 = _closure1_slot2;
                var14 = 25;
                var6 = var9[var14];
                var2 = undefined;
                var6 = var18.bind(var2)(var6);
                var7 = var6.FormRow;
                var6 = {};
                var20 = 26;
                var16 = var9[var20];
                var16 = var18.bind(var2)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var9 = var9[var20];
                var9 = var18.bind(var2)(var9);
                var9 = var9.t;
                var9 = var9.BENn//;
                var9 = var16.bind(var17)(var9);
                var6['label'] = var9;
                var9 = var11;
                if(var11) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                var9 = var12;
case 61:
                var6['disabled'] = var9;
                var9 = function onPress() {
                    var3 = _closure3_slot0;
                    var2 = var3.handleTypeChange;
                    var1 = _closure1_slot18;
                    var1 = var1.ONLY_MENTIONS;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var6['onPress'] = var9;
                var18 = _closure1_slot23;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = var16[var14];
                var9 = var19.bind(var2)(var9);
                var9 = var9.FormRow;
                var17 = var9.Checkmark;
                var9 = {};
                var22 = var15.isSelected;
                var21 = _closure1_slot18;
                var21 = var21.ONLY_MENTIONS;
                var21 = var22.bind(var15)(var21);
                var9['selected'] = var21;
                var9 = var18.bind(var2)(var17, var9);
                var6['trailing'] = var9;
                var7 = var8.bind(var2)(var7, var6);
                var6 = new Array(3);
                var6[0] = var7;
                var9 = _closure1_slot23;
                var7 = var16[var14];
                var7 = var19.bind(var2)(var7);
                var8 = var7.FormDivider;
                var7 = {};
                var7 = var9.bind(var2)(var8, var7);
                var6[1] = var7;
                var9 = _closure1_slot23;
                var7 = var16[var14];
                var7 = var19.bind(var2)(var7);
                var8 = var7.FormRow;
                var7 = {};
                var17 = var16[var20];
                var17 = var19.bind(var2)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var2)(var16);
                var16 = var16.t;
                var16 = var16.CtVGyc;
                var16 = var17.bind(var18)(var16);
                var7['label'] = var16;
                if(var11) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                var11 = var12;
case 63:
                var7['disabled'] = var11;
                var10 = function onPress() {
                    var3 = _closure3_slot0;
                    var2 = var3.handleTypeChange;
                    var1 = _closure1_slot18;
                    var1 = var1.NO_MESSAGES;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['onPress'] = var10;
                var12 = _closure1_slot23;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var14];
                var10 = var11.bind(var2)(var10);
                var10 = var10.FormRow;
                var11 = var10.Checkmark;
                var10 = {};
                var14 = var15.isSelected;
                var13 = _closure1_slot18;
                var13 = var13.NO_MESSAGES;
                var13 = var14.bind(var15)(var13);
                var10['selected'] = var13;
                var10 = var12.bind(var2)(var11, var10);
                var7['trailing'] = var10;
                var7 = var9.bind(var2)(var8, var7);
                var6[2] = var7;
                var3['children'] = var6;
                var1 = var5.bind(var2)(var4, var3);
case 60:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var17 = this;
                var1 = var17.props;
                var2 = var1.guildMuted;
                var18 = var1.channel;
                var3 = var1.guildMessageNotifications;
                var22 = var1.showVoiceActivityNotificationOptions;
                var1 = var17.state;
                var13 = var1.messageNotifications;
                var4 = _closure1_slot26;
                var1 = var17.context;
                var5 = undefined;
                var16 = var4.bind(var5)(var1);
                var1 = _closure1_slot18;
                var12 = var1.NULL;
                if(!var22) { _fun0012_ip = 21; continue _fun0012 }
case 4:
                var1 = var18.isGuildVoice;
                var22 = var1.bind(var18)();
case 21:
                var4 = _closure1_slot10;
                var1 = var18.type;
                var9 = var4.bind(var5)(var1);
                if(var9) { _fun0012_ip = 65; continue _fun0012 }
case 66:
                var1 = var18.isForumLikeChannel;
                var9 = var1.bind(var18)();
case 65:
                if(var9) { _fun0012_ip = 67; continue _fun0012 }
case 68:
                var9 = var22;
case 67:
                var10 = null;
                var4 = var10 == var18;
                var1 = null;
                if(var4) { _fun0012_ip = 69; continue _fun0012 }
case 70:
                if(var2) { _fun0012_ip = 71; continue _fun0012 }
case 72:
                var2 = _closure1_slot18;
                var2 = var2.NO_MESSAGES;
                var15 = undefined;
                if(!(var3 === var2)) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                var4 = _closure1_slot23;
                var7 = _closure1_slot0;
                var20 = _closure1_slot2;
                var2 = 25;
                var2 = var20[var2];
                var2 = var7.bind(var5)(var2);
                var3 = var2.FormHint;
                var2 = {};
                var6 = 26;
                var8 = var20[var6];
                var8 = var7.bind(var5)(var8);
                var11 = var8.intl;
                var8 = var11.format;
                var6 = var20[var6];
                var6 = var7.bind(var5)(var6);
                var6 = var6.t;
                var7 = var6.nRwUIC;
                var6 = {};
                var20 = function notificationHook(arg1, arg2) {
                    var5 = _closure1_slot23;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 28;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.Text;
                    var2 = {'variant': 'text-sm/medium', 'color': 'text-warning'};
                    var1 = arg1;
                    var2['children'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var6['notificationHook'] = var20;
                var6 = var8.bind(var11)(var7, var6);
                var2['children'] = var6;
                var15 = var4.bind(var5)(var3, var2);
                _fun0012_ip = 73; continue _fun0012;
case 71:
                var4 = _closure1_slot23;
                var7 = _closure1_slot0;
                var20 = _closure1_slot2;
                var2 = 25;
                var2 = var20[var2];
                var2 = var7.bind(var5)(var2);
                var3 = var2.FormHint;
                var2 = {};
                var6 = 26;
                var8 = var20[var6];
                var8 = var7.bind(var5)(var8);
                var11 = var8.intl;
                var8 = var11.format;
                var6 = var20[var6];
                var6 = var7.bind(var5)(var6);
                var6 = var6.t;
                var7 = var6.O34r19;
                var6 = {};
                var19 = function mutedHook(arg1, arg2) {
                    var5 = _closure1_slot23;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 28;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.Text;
                    var2 = {'variant': 'text-sm/medium', 'color': 'text-danger'};
                    var1 = arg1;
                    var2['children'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var6['mutedHook'] = var19;
                var6 = var8.bind(var11)(var7, var6);
                var2['children'] = var6;
                var15 = var4.bind(var5)(var3, var2);
case 73:
                var4 = _closure1_slot23;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 29;
                var2 = var6[var2];
                var2 = var7.bind(var5)(var2);
                var3 = var2.RedesignCompat;
                var2 = {};
                var8 = _closure1_slot25;
                var11 = 25;
                var6 = var6[var11];
                var6 = var7.bind(var5)(var6);
                var7 = var6.Form;
                var6 = {};
                var16 = var16.screenContainer;
                var6['style'] = var16;
                var16 = null;
                if(!var9) { _fun0012_ip = 39; continue _fun0012 }
case 75:
                var9 = var17.renderMuteSection;
                var16 = var9.bind(var17)();
case 39:
                var9 = new Array(5);
                var9[0] = var16;
                var20 = _closure1_slot23;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var16 = var16[var11];
                var16 = var19.bind(var5)(var16);
                var19 = var16.FormSection;
                var16 = {};
                var21 = null;
                if(!var22) { _fun0012_ip = 76; continue _fun0012 }
case 77:
                var24 = _closure1_slot23;
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var22 = var29[var11];
                var22 = var28.bind(var5)(var22);
                var23 = var22.FormHint;
                var22 = {};
                var25 = 26;
                var26 = var29[var25];
                var26 = var28.bind(var5)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var29[var25];
                var25 = var28.bind(var5)(var25);
                var25 = var25.t;
                var25 = var25.ztcKQE;
                var25 = var26.bind(var27)(var25);
                var22['children'] = var25;
                var21 = var24.bind(var5)(var23, var22);
case 76:
                var16['hint'] = var21;
                var21 = _closure1_slot22;
                var21 = var21.ANDROID_NO_BORDER;
                var16['titleStyleType'] = var21;
                var25 = _closure1_slot0;
                var21 = _closure1_slot2;
                var22 = 26;
                var23 = var21[var22];
                var23 = var25.bind(var5)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var21 = var21[var22];
                var21 = var25.bind(var5)(var21);
                var21 = var21.t;
                var21 = var21.h850Sk;
                var21 = var23.bind(var24)(var21);
                var16['title'] = var21;
                var21 = var17.renderNotificationSettings;
                var21 = var21.bind(var17)();
                var16['children'] = var21;
                var16 = var20.bind(var5)(var19, var16);
                var9[1] = var16;
                var16 = var18.isForumLikeChannel;
                var18 = var16.bind(var18)();
                var16 = null;
                if(!var18) { _fun0012_ip = 78; continue _fun0012 }
case 79:
                var20 = _closure1_slot23;
                var25 = _closure1_slot0;
                var21 = _closure1_slot2;
                var18 = var21[var11];
                var18 = var25.bind(var5)(var18);
                var19 = var18.FormSection;
                var18 = {};
                var23 = _closure1_slot22;
                var23 = var23.ANDROID_NO_BORDER;
                var18['titleStyleType'] = var23;
                var23 = var21[var22];
                var23 = var25.bind(var5)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var21 = var21[var22];
                var21 = var25.bind(var5)(var21);
                var21 = var21.t;
                var21 = var21.bK11jI;
                var21 = var23.bind(var24)(var21);
                var18['title'] = var21;
                var21 = var17.renderForumSettings;
                var21 = var21.bind(var17)();
                var18['children'] = var21;
                var16 = var20.bind(var5)(var19, var18);
case 78:
                var9[2] = var16;
                var9[3] = var15;
                var10 = null;
                if(!(var13 !== var12)) { _fun0012_ip = 80; continue _fun0012 }
case 81:
                var13 = _closure1_slot23;
                var21 = _closure1_slot0;
                var18 = _closure1_slot2;
                var11 = var18[var11];
                var11 = var21.bind(var5)(var11);
                var12 = var11.FormSection;
                var11 = {};
                var16 = _closure1_slot23;
                var14 = 30;
                var14 = var18[var14];
                var14 = var21.bind(var5)(var14);
                var15 = var14.TableRow;
                var14 = {};
                var19 = var18[var22];
                var19 = var21.bind(var5)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var18[var22];
                var18 = var21.bind(var5)(var18);
                var18 = var18.t;
                var18 = var18.3PBFNz;
                var18 = var19.bind(var20)(var18);
                var14['label'] = var18;
                var17 = var17.handleResetNotification;
                var14['onPress'] = var17;
                var14 = var16.bind(var5)(var15, var14);
                var11['children'] = var14;
                var10 = var13.bind(var5)(var12, var11);
case 80:
                var9[4] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 69:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var4.bind(var1)(var7);
    var _closure1_slot27 = var7;
    var4 = 31;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var7['contextType'] = var4;
    var4 = 36;
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
            var5 = 32;
            var5 = var4[var5];
            var6 = undefined;
            var9 = var2.bind(var6)(var5);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot12;
            var5 = new Array(1);
            var5[0] = var10;
            var1 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var8.bind(var9)(var5, var1);
            var1 = 34;
            var1 = var4[var1];
            var4 = var2.bind(var6)(var1);
            var2 = var4.useShouldUseNewNotificationSystem;
            var1 = 'ChannelSettingsNotificationsNative';
            var2 = var2.bind(var4)(var1);
            var1 = null;
            var4 = var1 == var8;
            if(var4) { _fun0013_ip = 82; continue _fun0013 }
case 83:
            if(!var2) { _fun0013_ip = 84; continue _fun0013 }
case 85:
            var5 = _closure1_slot11;
            var4 = var5.has;
            var2 = var8.type;
            var2 = var4.bind(var5)(var2);
            if(var2) { _fun0013_ip = 86; continue _fun0013 }
case 84:
            var5 = _closure1_slot23;
            var4 = _closure1_slot29;
            var2 = {};
            var12 = var2;
            var11 = var7;
            var9 = copyDataProperties(var12, var11);
            var2 = var5.bind(var6)(var4, var2);
            _fun0013_ip = 87; continue _fun0013;
case 86:
            var5 = _closure1_slot23;
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 35;
            var3 = var9[var3];
            var4 = var4.bind(var6)(var3);
            var3 = {};
            var3['channel'] = var8;
            var12 = var3;
            var11 = var7;
            var7 = copyDataProperties(var12, var11);
            var2 = var5.bind(var6)(var4, var3);
case 87:
            var1 = var2;
case 82:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();