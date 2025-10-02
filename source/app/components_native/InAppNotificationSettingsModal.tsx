// app/components_native/InAppNotificationSettingsModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function getScreens(arg1, arg2) {
        var5 = _closure1_slot10;
        var2 = var5.getChannel;
        var1 = arg1;
        var1 = var2.bind(var5)(var1);
        var _closure2_slot0 = var1;
        var1 = {};
        var2 = {};
        var5 = function headerTitle() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var11 = _closure2_slot0;
                var4 = _closure1_slot16;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 21;
                var1 = var10[var1];
                var3 = undefined;
                var1 = var9.bind(var3)(var1);
                var2 = var1.NavigatorHeader;
                var1 = {};
                var5 = 18;
                var7 = var10[var5];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var5 = var10[var5];
                var5 = var9.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.h850Sk;
                var5 = var7.bind(var8)(var5);
                var1['title'] = var5;
                var5 = null;
                var7 = var5 != var11;
                if(!var7) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 16;
                var7 = var9[var7];
                var10 = var8.bind(var3)(var7);
                var9 = var10.computeChannelName;
                var14 = _closure1_slot13;
                var13 = _closure1_slot11;
                var12 = true;
                var16 = var10;
                var15 = var11;
                var5 = var16[var9](var15, var14, var13, var12, var11);
case 6:
                var1['subtitle'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var2['headerTitle'] = var5;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var4 = 21;
        var5 = var5[var4];
        var4 = undefined;
        var6 = var6.bind(var4)(var5);
        var5 = var6.getHeaderCloseButton;
        var4 = arg2;
        var4 = var5.bind(var6)(var4);
        var2['headerLeft'] = var4;
        var3 = function render() {
            var4 = _closure1_slot16;
            var3 = _closure1_slot19;
            var2 = {};
            var1 = _closure2_slot0;
            var2['channel'] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var2['render'] = var3;
        var1['IN_APP_NOTIFICATION_SETTINGS'] = var2;
        return var1;
    };
    var _closure1_slot21 = var1;
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
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isMultiUserDM;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ChannelTypes;
    var _closure1_slot14 = var8;
    var4 = var4.UserSettingsSections;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot16 = var8;
    var4 = var4.jsxs;
    var _closure1_slot17 = var4;
    var8 = var7.PureComponent;
    var4 = function(arg1) {
        var4 = function InAppNotificationSettingsScreen(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot20;
                var1 = var1.bind(var4)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 10:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var2 = var1.channel;
                        var1 = var1.isMuted;
                        var3 = null;
                        if(!(var3 != var2)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var4 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var3 = 13;
                        var3 = var10[var3];
                        var9 = undefined;
                        var6 = var4.bind(var9)(var3);
                        var5 = var6.updateChannelOverrideSettings;
                        var3 = var2.getGuildId;
                        var4 = var3.bind(var2)();
                        var13 = var2.id;
                        var2 = {};
                        var8 = !var1;
                        var2['muted'] = var8;
                        var8 = _closure1_slot0;
                        var7 = 14;
                        var7 = var10[var7];
                        var7 = var8.bind(var9)(var7);
                        var8 = var7.NotificationLabel;
                        var7 = var8.muted;
                        var1 = !var1;
                        var11 = var7.bind(var8)(var1);
                        var15 = var6;
                        var14 = var4;
                        var12 = var2;
                        var1 = var15[var5](var14, var13, var12, var11, var10);
case 11:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleGroupDMMute'] = var3;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openUserSettings;
                    var2 = {};
                    var5 = _closure1_slot15;
                    var5 = var5.NOTIFICATIONS;
                    var2['screen'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleOpenUserSettings'] = var2;
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
        var1 = 'renderGroupDMNotificationSettings';
        var5['key'] = var1;
        var1 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var9 = this;
                var1 = var9.props;
                var8 = var1.channel;
                var10 = var1.isMuted;
                var1 = null;
                if(!(var1 != var8)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                var12 = _closure1_slot0;
                var16 = _closure1_slot2;
                var2 = 16;
                var2 = var16[var2];
                var5 = undefined;
                var6 = var12.bind(var5)(var2);
                var4 = var6.computeChannelName;
                var3 = _closure1_slot13;
                var2 = _closure1_slot11;
                var15 = var4.bind(var6)(var8, var3, var2);
                var4 = _closure1_slot16;
                var6 = 17;
                var2 = var16[var6];
                var2 = var12.bind(var5)(var2);
                var3 = var2.FormSection;
                var2 = {};
                var8 = _closure1_slot16;
                var6 = var16[var6];
                var6 = var12.bind(var5)(var6);
                var7 = var6.FormSwitchRow;
                var6 = {};
                var11 = 18;
                var13 = var16[var11];
                var13 = var12.bind(var5)(var13);
                var14 = var13.intl;
                var13 = var14.format;
                var11 = var16[var11];
                var11 = var12.bind(var5)(var11);
                var11 = var11.t;
                var12 = var11.u/rEub;
                var11 = {};
                var11['name'] = var15;
                var11 = var13.bind(var14)(var12, var11);
                var6['label'] = var11;
                var6['value'] = var10;
                var9 = var9.handleGroupDMMute;
                var6['onValueChange'] = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2['children'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var2;
case 13:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'renderTextChannelNotificationSettings';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = this;
                var1 = var1.props;
                var6 = var1.channel;
                var1 = null;
                var2 = var1 == var6;
                if(var2) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                var5 = _closure1_slot16;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 19;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var6 = var6.id;
                var2['channelId'] = var6;
                var1 = var5.bind(var4)(var3, var2);
case 15:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'renderChannelNotificationSettings';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = this;
                var1 = var3.props;
                var2 = var1.channel;
                var1 = null;
                if(!(var1 != var2)) { _fun0007_ip = 17; continue _fun0007 }
case 18:
                var4 = var2.type;
                var5 = _closure1_slot14;
                var5 = var5.GROUP_DM;
                if(!(var5 !== var4)) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                var5 = _closure1_slot14;
                var5 = var5.GUILD_TEXT;
                if(!(var5 !== var4)) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                var2 = _closure1_slot14;
                var2 = var2.GUILD_ANNOUNCEMENT;
                if(!(var2 !== var4)) { _fun0007_ip = 21; continue _fun0007 }
case 23:
                return var1;
case 21:
                var2 = var3.renderTextChannelNotificationSettings;
                var2 = var2.bind(var3)();
                return var2;
case 19:
                var2 = var3.renderGroupDMNotificationSettings;
                var2 = var2.bind(var3)();
                return var2;
case 17:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            var17 = this;
            var4 = _closure1_slot17;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 17;
            var1 = var13[var6];
            var3 = undefined;
            var1 = var12.bind(var3)(var1);
            var2 = var1.Form;
            var1 = {};
            var5 = var17.renderChannelNotificationSettings;
            var8 = var5.bind(var17)();
            var5 = new Array(3);
            var5[0] = var8;
            var11 = _closure1_slot16;
            var8 = var13[var6];
            var8 = var12.bind(var3)(var8);
            var10 = var8.FormSection;
            var8 = {};
            var9 = 18;
            var14 = var13[var9];
            var14 = var12.bind(var3)(var14);
            var16 = var14.intl;
            var15 = var16.string;
            var14 = var13[var9];
            var14 = var12.bind(var3)(var14);
            var14 = var14.t;
            var14 = var14.clE4PT;
            var14 = var15.bind(var16)(var14);
            var8['title'] = var14;
            var16 = _closure1_slot16;
            var14 = var13[var6];
            var14 = var12.bind(var3)(var14);
            var15 = var14.FormRow;
            var14 = {};
            var18 = var13[var9];
            var18 = var12.bind(var3)(var18);
            var20 = var18.intl;
            var19 = var20.string;
            var18 = var13[var9];
            var18 = var12.bind(var3)(var18);
            var18 = var18.t;
            var18 = var18.cHMabW;
            var18 = var19.bind(var20)(var18);
            var14['label'] = var18;
            var17 = var17.handleOpenUserSettings;
            var14['onPress'] = var17;
            var19 = _closure1_slot16;
            var17 = var13[var6];
            var17 = var12.bind(var3)(var17);
            var17 = var17.FormRow;
            var18 = var17.Arrow;
            var17 = {};
            var17 = var19.bind(var3)(var18, var17);
            var14['trailing'] = var17;
            var14 = var16.bind(var3)(var15, var14);
            var8['children'] = var14;
            var8 = var11.bind(var3)(var10, var8);
            var5[1] = var8;
            var8 = _closure1_slot16;
            var6 = var13[var6];
            var6 = var12.bind(var3)(var6);
            var7 = var6.FormHint;
            var6 = {};
            var10 = var13[var9];
            var10 = var12.bind(var3)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var3)(var9);
            var9 = var9.t;
            var9 = var9.avgbp6;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var3)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var8);
    var _closure1_slot18 = var4;
    var4 = function ConnectedInAppNotificationSettingsScreen(arg1) {
        var1 = arg1;
        var6 = var1.channel;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 20;
        var3 = var4[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var3);
        var5 = var7.useStateFromStores;
        var8 = _closure1_slot12;
        var3 = new Array(1);
        var3[0] = var8;
        var2 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var3 = var1 != var3;
                var5 = undefined;
                var1 = undefined;
                if(!var3) { _fun0008_ip = 24; continue _fun0008 }
case 25:
                var6 = _closure1_slot9;
                var4 = _closure2_slot0;
                var4 = var4.type;
                var4 = var6.bind(var5)(var4);
                var1 = undefined;
                if(!var4) { _fun0008_ip = 24; continue _fun0008 }
case 26:
                var5 = _closure1_slot12;
                var4 = var5.isChannelMuted;
                var2 = _closure2_slot0;
                var3 = var2.getGuildId;
                var3 = var3.bind(var2)();
                var2 = var2.id;
                var1 = var4.bind(var5)(var3, var2);
case 24:
                return var1;
            }
        };
        var5 = var5.bind(var7)(var3, var2);
        var3 = _closure1_slot16;
        var2 = _closure1_slot18;
        var1 = {};
        var1['channel'] = var6;
        var1['isMuted'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot19 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        var1 = arg1;
        var7 = var1.channelId;
        var _closure2_slot0 = var7;
        var6 = var1.onClose;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot8;
        var4 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            var4 = _closure1_slot21;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5 = var4.bind(var5)(var2, var3);
        var4 = _closure1_slot16;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 22;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var1['screens'] = var5;
        var5 = 'IN_APP_NOTIFICATION_SETTINGS';
        var1['initialRouteName'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/InAppNotificationSettingsModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();