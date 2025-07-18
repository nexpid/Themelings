// app/components_native/channel_settings/ChannelSettingsNotifications.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
 0:
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
            if(var4) { _fun0002_ip = 108; continue _fun0002 }
 98:
            var4 = var12.getGuildId;
            var3 = var4.bind(var12)();
 108:
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
 0:
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
                    if(!var2) { _fun0003_ip = 167; continue _fun0003 }
 148:
                    var5 = _closure1_slot15;
                    var4 = var5.getNewForumThreadsCreated;
                    var3 = _closure2_slot2;
                    var2 = var4.bind(var5)(var3);
 167:
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
 0:
                    var2 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 == var2)) { _fun0004_ip = 31; continue _fun0004 }
 13:
                    var2 = _closure2_slot0;
                    if(!(var3 != var2)) { _fun0004_ip = 31; continue _fun0004 }
 21:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 31:
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
            if(!var2) { _fun0002_ip = 360; continue _fun0002 }
 265:
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
 360:
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
    var4 = native4;
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
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var13;
    var7['screenContainer'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.RED_400;
    var10['color'] = var13;
    var7['redText'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.YELLOW_300;
    var10['color'] = var11;
    var7['orangeText'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot26 = var7;
    var7 = var4.PureComponent;
    var4 = function(arg1) {
        var4 = function ChannelSettingsNotifications(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
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
                if(var1) { _fun0005_ip = 75; continue _fun0005 }
 62:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0005_ip = 109; continue _fun0005;
 75:
                var8 = global;
                var9 = var8.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 109:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = function(arg1, arg2) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
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
                        if(!(var1 !== var5)) { _fun0006_ip = 74; continue _fun0006 }
 48:
                        var7['muted'] = var5;
                        var5 = null;
                        var8 = var5 != var6;
                        if(!var8) { _fun0006_ip = 66; continue _fun0006 }
 63:
                        var5 = var6;
 66:
                        var7['mute_config'] = var5;
                        var3 = true;
 74:
                        if(!(var1 !== var4)) { _fun0006_ip = 86; continue _fun0006 }
 78:
                        var7['message_notifications'] = var4;
                        var3 = true;
 86:
                        if(!var3) { _fun0006_ip = 146; continue _fun0006 }
 89:
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
 146:
                        return var1;
                    }
                };
                var1['updateSetting'] = var4;
                var4 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var3 = _closure3_slot0;
                        var4 = var3.state;
                        var5 = var4.muted;
                        var _closure4_slot0 = var5;
                        var3 = var3.props;
                        var9 = var3.channel;
                        if(var5) { _fun0007_ip = 180; continue _fun0007 }
 40:
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
                        _fun0007_ip = 213; continue _fun0007;
 180:
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
 213:
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
 0:
                var1 = arg1;
                var3 = this;
                var4 = var1.muted;
                var2 = var3.props;
                var2 = var2.muted;
                if(!(var4 !== var2)) { _fun0008_ip = 56; continue _fun0008 }
 27:
                var4 = var3.setState;
                var2 = {};
                var5 = var3.props;
                var5 = var5.muted;
                var2['muted'] = var5;
                var2 = var4.bind(var3)(var2);
 56:
                var2 = var1.messageNotifications;
                var1 = var3.props;
                var1 = var1.messageNotifications;
                if(!(var2 !== var1)) { _fun0008_ip = 106; continue _fun0008 }
 77:
                var2 = var3.setState;
                var1 = {};
                var4 = var3.props;
                var4 = var4.messageNotifications;
                var1['messageNotifications'] = var4;
                var1 = var2.bind(var3)(var1);
 106:
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
 0:
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
                if(var7) { _fun0009_ip = 287; continue _fun0009 }
 265:
                var18 = var17.byjuJi;
                var16 = {};
                var16['name'] = var22;
                var16 = var19.bind(var21)(var18, var16);
                _fun0009_ip = 305; continue _fun0009;
 287:
                var18 = var17.eC+9rq;
                var17 = {};
                var17['name'] = var22;
                var16 = var19.bind(var21)(var18, var17);
 305:
                var13['label'] = var16;
                var6 = var6.handleToggleMuteChannel;
                var13['onPress'] = var6;
                var16 = null;
                if(var7) { _fun0009_ip = 365; continue _fun0009 }
 324:
                var19 = _closure1_slot23;
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var17 = var17[var20];
                var17 = var18.bind(var4)(var17);
                var17 = var17.FormRow;
                var18 = var17.Arrow;
                var17 = {};
                var16 = var19.bind(var4)(var18, var17);
 365:
                var13['trailing'] = var16;
                var13 = var15.bind(var4)(var14, var13);
                var5['children'] = var13;
                var8 = var9.bind(var4)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var6 = null;
                if(!var7) { _fun0009_ip = 519; continue _fun0009 }
 399:
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
                if(!(var12 !== var10)) { _fun0009_ip = 480; continue _fun0009 }
 449:
                var12 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var13];
                var10 = var12.bind(var4)(var10);
                var10 = var10.MuteSettingType;
                var10 = var10.CHANNEL;
                _fun0009_ip = 509; continue _fun0009;
 480:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var13];
                var11 = var12.bind(var4)(var11);
                var11 = var11.MuteSettingType;
                var10 = var11.CATEGORY;
 509:
                var7['type'] = var10;
                var6 = var9.bind(var4)(var8, var7);
 519:
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
 0:
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
                if(var6) { _fun0010_ip = 144; continue _fun0010 }
 141:
                var6 = var7;
 144:
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
 0:
                var15 = this;
                var _closure3_slot0 = var15;
                var1 = var15.props;
                var2 = var1.channel;
                var12 = var1.guildMuted;
                var18 = var1.guildMemberCount;
                var16 = var1.showVoiceActivityNotificationOptions;
                if(!var16) { _fun0011_ip = 50; continue _fun0011 }
 40:
                var1 = var2.isGuildVoice;
                var16 = var1.bind(var2)();
 50:
                var1 = var15.state;
                var11 = var1.muted;
                var1 = var2.isGuildStageVoice;
                var1 = var1.bind(var2)();
                var5 = _closure1_slot25;
                if(var1) { _fun0011_ip = 806; continue _fun0011 }
 84:
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
                if(var16) { _fun0011_ip = 242; continue _fun0011 }
 229:
                var9 = var14.n/bTaW;
                var9 = var17.bind(var20)(var9);
                _fun0011_ip = 255; continue _fun0011;
 242:
                var14 = var14.9sGJkp;
                var9 = var17.bind(var20)(var14);
 255:
                var4['label'] = var9;
                var9 = var11;
                if(var11) { _fun0011_ip = 268; continue _fun0011 }
 265:
                var9 = var12;
 268:
                var4['disabled'] = var9;
                var17 = null;
                var14 = var17 != var18;
                var9 = null;
                if(!var14) { _fun0011_ip = 348; continue _fun0011 }
 283:
                var14 = _closure1_slot21;
                var14 = var18 >= var14;
                var9 = null;
                if(!var14) { _fun0011_ip = 348; continue _fun0011 }
 296:
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
 348:
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
                if(var16) { _fun0011_ip = 533; continue _fun0011 }
 517:
                var18 = var17.L2hmY2;
                var16 = {};
                var16 = var20.bind(var21)(var18, var16);
                _fun0011_ip = 549; continue _fun0011;
 533:
                var18 = var17.cpcXvb;
                var17 = {};
                var16 = var20.bind(var21)(var18, var17);
 549:
                var7['label'] = var16;
                var16 = var11;
                if(var11) { _fun0011_ip = 562; continue _fun0011 }
 559:
                var16 = var12;
 562:
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
                if(var11) { _fun0011_ip = 735; continue _fun0011 }
 732:
                var14 = var12;
 735:
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
                _fun0011_ip = 1222; continue _fun0011;
 806:
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
                if(var11) { _fun0011_ip = 908; continue _fun0011 }
 905:
                var9 = var12;
 908:
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
                if(var11) { _fun0011_ip = 1115; continue _fun0011 }
 1112:
                var11 = var12;
 1115:
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
 1222:
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
 0:
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
                var _closure3_slot0 = var16;
                var1 = _closure1_slot18;
                var12 = var1.NULL;
                if(!var22) { _fun0012_ip = 90; continue _fun0012 }
 80:
                var1 = var18.isGuildVoice;
                var22 = var1.bind(var18)();
 90:
                var4 = _closure1_slot10;
                var1 = var18.type;
                var9 = var4.bind(var5)(var1);
                if(var9) { _fun0012_ip = 117; continue _fun0012 }
 107:
                var1 = var18.isForumLikeChannel;
                var9 = var1.bind(var18)();
 117:
                if(var9) { _fun0012_ip = 123; continue _fun0012 }
 120:
                var9 = var22;
 123:
                var10 = null;
                var4 = var10 == var18;
                var1 = null;
                if(var4) { _fun0012_ip = 985; continue _fun0012 }
 137:
                if(var2) { _fun0012_ip = 268; continue _fun0012 }
 143:
                var2 = _closure1_slot18;
                var2 = var2.NO_MESSAGES;
                var15 = undefined;
                if(!(var3 === var2)) { _fun0012_ip = 372; continue _fun0012 }
 162:
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
                var20 = function notificationHook(arg1) {
                    var5 = _closure1_slot23;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 28;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.LegacyText;
                    var2 = {};
                    var1 = _closure3_slot0;
                    var1 = var1.orangeText;
                    var2['style'] = var1;
                    var1 = arg1;
                    var2['children'] = var1;
                    var1 = 'notif';
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var6['notificationHook'] = var20;
                var6 = var8.bind(var11)(var7, var6);
                var2['children'] = var6;
                var15 = var4.bind(var5)(var3, var2);
                _fun0012_ip = 372; continue _fun0012;
 268:
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
                var19 = function mutedHook(arg1) {
                    var5 = _closure1_slot23;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 28;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.LegacyText;
                    var2 = {};
                    var1 = _closure3_slot0;
                    var1 = var1.redText;
                    var2['style'] = var1;
                    var1 = arg1;
                    var2['children'] = var1;
                    var1 = 'muted';
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var6['mutedHook'] = var19;
                var6 = var8.bind(var11)(var7, var6);
                var2['children'] = var6;
                var15 = var4.bind(var5)(var3, var2);
 372:
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
                if(!var9) { _fun0012_ip = 453; continue _fun0012 }
 443:
                var9 = var17.renderMuteSection;
                var16 = var9.bind(var17)();
 453:
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
                if(!var22) { _fun0012_ip = 583; continue _fun0012 }
 495:
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
 583:
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
                if(!var18) { _fun0012_ip = 817; continue _fun0012 }
 703:
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
 817:
                var9[2] = var16;
                var9[3] = var15;
                var10 = null;
                if(!(var13 !== var12)) { _fun0012_ip = 961; continue _fun0012 }
 834:
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
 961:
                var9[4] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 985:
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
 0:
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
            if(var4) { _fun0013_ip = 204; continue _fun0013 }
 102:
            if(!var2) { _fun0013_ip = 127; continue _fun0013 }
 105:
            var5 = _closure1_slot11;
            var4 = var5.has;
            var2 = var8.type;
            var2 = var4.bind(var5)(var2);
            if(var2) { _fun0013_ip = 155; continue _fun0013 }
 127:
            var5 = _closure1_slot23;
            var4 = _closure1_slot29;
            var2 = {};
            var12 = var2;
            var11 = var7;
            var9 = copyDataProperties(var12, var11);
            var2 = var5.bind(var6)(var4, var2);
            _fun0013_ip = 201; continue _fun0013;
 155:
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
 201:
            var1 = var2;
 204:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();