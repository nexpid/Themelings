// app/modules/user_settings/UnsyncedUserSettingsStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var5 = global;
    var10 = var5.Object;
    var4 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var10 = 2;
    var2 = var8[var10];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var8[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.SystemThemeState;
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.DEFAULT_CHAT_SIDEBAR_WIDTH;
    var _closure1_slot9 = var4;
    var11 = var2.CHANNEL_SIDEBAR_WIDTH;
    var _closure1_slot10 = var11;
    var2 = var2.DEFAULT_MESSAGE_REQUEST_SIDEBAR_WIDTH;
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.ExpressionPickerWidths;
    var _closure1_slot12 = var2;
    var2 = 8;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.ListDensityMode;
    var _closure1_slot13 = var2;
    var4 = {};
    var2 = 'data_saver';
    var4['DATA_SAVER'] = var2;
    var2 = 'standard';
    var4['STANDARD'] = var2;
    var2 = 'best';
    var4['BEST'] = var2;
    var2 = {};
    var12 = 'very_low';
    var2['VERY_LOW'] = var12;
    var12 = 'low';
    var2['LOW'] = var12;
    var12 = 'medium';
    var2['MEDIUM'] = var12;
    var12 = 'high';
    var2['HIGH'] = var12;
    var12 = 'very_high';
    var2['VERY_HIGH'] = var12;
    var5 = var5.window;
    var5 = var5.innerWidth;
    var5 = var5 - var11;
    var5 = var5 / var10;
    var _closure1_slot14 = var5;
    var5 = var4.STANDARD;
    var _closure1_slot15 = var5;
    var5 = null;
    var _closure1_slot16 = var5;
    var5 = {};
    var _closure1_slot17 = var5;
    var5 = 10;
    var5 = var8[var5];
    var5 = var9.bind(var1)(var5);
    var10 = var5.DeviceSettingsStore;
    var5 = function(arg1) {
        var4 = function UnsyncedUserSettingsStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var3 = null;
                if(!(var3 == var2)) { _fun0003_ip = 11; continue _fun0003 }
 9:
                var2 = {};
 11:
                _closure1_slot17 = var2;
                var5 = var2.useSystemTheme;
                if(!(var3 != var5)) { _fun0003_ip = 98; continue _fun0003 }
 28:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var6 = undefined;
                var1 = var7.bind(var6)(var1);
                var1 = var1.bind(var6)();
                if(!(var3 != var1)) { _fun0003_ip = 98; continue _fun0003 }
 58:
                var7 = 'boolean';
                var6 = typeof var5;
                var1 = var5;
                if(!(var7 === var6)) { _fun0003_ip = 96; continue _fun0003 }
 72:
                var6 = _closure1_slot8;
                if(var5) { _fun0003_ip = 87; continue _fun0003 }
 79:
                var5 = var6.OFF;
                _fun0003_ip = 93; continue _fun0003;
 87:
                var5 = var6.ON;
 93:
                var1 = var5;
 96:
                _fun0003_ip = 108; continue _fun0003;
 98:
                var5 = _closure1_slot8;
                var1 = var5.UNSET;
 108:
                var2['useSystemTheme'] = var1;
                var2 = _closure1_slot17;
                var1 = var2.dataSavingMode;
                if(!(var3 == var1)) { _fun0003_ip = 138; continue _fun0003 }
 128:
                var5 = _closure1_slot17;
                var1 = var5.lowQualityImageMode;
 138:
                var2['dataSavingMode'] = var1;
                var2 = _closure1_slot17;
                var1 = var2.darkSidebar;
                if(!(var3 == var1)) { _fun0003_ip = 239; continue _fun0003 }
 158:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 10;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var8 = var5.PersistedStore;
                var7 = var8.migrateAndReadStoreState;
                var6 = 'AccessibilityStore';
                var5 = new Array(0);
                var5 = var7.bind(var8)(var6, var5);
                var5 = var5.state;
                var6 = var3 == var5;
                if(var6) { _fun0003_ip = 226; continue _fun0003 }
 220:
                var4 = var5.darkSidebar;
 226:
                var3 = var3 != var4;
                if(!var3) { _fun0003_ip = 236; continue _fun0003 }
 233:
                var3 = var4;
 236:
                var1 = var3;
 239:
                var2['darkSidebar'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(31);
        var1[0] = var5;
        var5 = {};
        var7 = 'getUserAgnosticState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'displayCompactAvatars';
        var5['key'] = var7;
        var7 = function get() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = _closure1_slot17;
                var2 = var1.displayCompactAvatars;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0004_ip = 27; continue _fun0004 }
 24:
                var1 = var2;
 27:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'lowQualityImageMode';
        var5['key'] = var7;
        var7 = function get() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = _closure1_slot17;
                var2 = var1.lowQualityImageMode;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0005_ip = 25; continue _fun0005 }
 22:
                var1 = var2;
 25:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'videoUploadQuality';
        var5['key'] = var7;
        var7 = function get() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = _closure1_slot17;
                var1 = var1.videoUploadQuality;
                var3 = null;
                if(!(var3 == var1)) { _fun0006_ip = 23; continue _fun0006 }
 19:
                var1 = _closure1_slot15;
 23:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'dataSavingMode';
        var5['key'] = var7;
        var7 = function get() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var1 = _closure1_slot17;
                var2 = var1.dataSavingMode;
                var1 = null;
                if(!(var1 == var2)) { _fun0007_ip = 29; continue _fun0007 }
 19:
                var3 = _closure1_slot17;
                var2 = var3.lowQualityImageMode;
 29:
                var1 = var1 != var2;
                if(!var1) { _fun0007_ip = 39; continue _fun0007 }
 36:
                var1 = var2;
 39:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'expressionPickerWidth';
        var5['key'] = var7;
        var7 = function get() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var1 = _closure1_slot17;
                var1 = var1.expressionPickerWidth;
                var3 = null;
                if(!(var3 == var1)) { _fun0008_ip = 31; continue _fun0008 }
 21:
                var2 = _closure1_slot12;
                var1 = var2.MIN;
 31:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'messageRequestSidebarWidth';
        var5['key'] = var7;
        var7 = function get() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var1 = _closure1_slot17;
                var1 = var1.messageRequestSidebarWidth;
                var3 = null;
                if(!(var3 == var1)) { _fun0009_ip = 25; continue _fun0009 }
 21:
                var1 = _closure1_slot11;
 25:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'threadSidebarWidth';
        var5['key'] = var7;
        var7 = function get() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var1 = _closure1_slot17;
                var1 = var1.threadSidebarWidth;
                var3 = null;
                if(!(var3 == var1)) { _fun0010_ip = 25; continue _fun0010 }
 21:
                var1 = _closure1_slot9;
 25:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'postSidebarWidth';
        var5['key'] = var7;
        var7 = function get() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var1 = _closure1_slot17;
                var1 = var1.postSidebarWidth;
                var3 = null;
                if(!(var3 == var1)) { _fun0011_ip = 25; continue _fun0011 }
 21:
                var1 = _closure1_slot14;
 25:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'callChatSidebarWidth';
        var5['key'] = var7;
        var7 = function get() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var1 = _closure1_slot17;
                var1 = var1.callChatSidebarWidth;
                var3 = null;
                if(!(var3 == var1)) { _fun0012_ip = 25; continue _fun0012 }
 21:
                var1 = _closure1_slot9;
 25:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'homeSidebarWidth';
        var5['key'] = var7;
        var7 = function get() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var1 = _closure1_slot17;
                var1 = var1.homeSidebarWidth;
                var4 = null;
                if(!(var4 == var1)) { _fun0013_ip = 94; continue _fun0013 }
 21:
                var3 = _closure1_slot16;
                if(!(var4 == var3)) { _fun0013_ip = 90; continue _fun0013 }
 29:
                var3 = global;
                var6 = var3.Math;
                var5 = var6.max;
                var3 = var3.window;
                var4 = var3.innerWidth;
                var3 = _closure1_slot10;
                var4 = var4 - var3;
                var3 = 0.4;
                var4 = var3 * var4;
                var3 = _closure1_slot9;
                var3 = var5.bind(var6)(var4, var3);
                _closure1_slot16 = var3;
 90:
                var1 = _closure1_slot16;
 94:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'callParticipantsSidebarWidth';
        var5['key'] = var7;
        var7 = function get() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var1 = _closure1_slot17;
                var1 = var1.callParticipantsSidebarWidth;
                var3 = null;
                if(!(var3 == var1)) { _fun0014_ip = 49; continue _fun0014 }
 21:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 11;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var1 = var2.DEFAULT_PARTICIPANTS_SIDEBAR_WIDTH;
 49:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'callHeaderHeight';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.callHeaderHeight;
            return var1;
        };
        var5['get'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'useSystemTheme';
        var5['key'] = var7;
        var7 = function get() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var1 = _closure1_slot17;
                var1 = var1.useSystemTheme;
                var3 = null;
                if(!(var3 == var1)) { _fun0015_ip = 29; continue _fun0015 }
 19:
                var2 = _closure1_slot8;
                var1 = var2.UNSET;
 29:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'activityPanelHeight';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot17;
            var1 = var1.activityPanelHeight;
            return var1;
        };
        var5['get'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'disableVoiceChannelChangeAlert';
        var5['key'] = var7;
        var7 = function get() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var1 = _closure1_slot17;
                var2 = var1.disableVoiceChannelChangeAlert;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0016_ip = 25; continue _fun0016 }
 22:
                var1 = var2;
 25:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'disableEmbeddedActivityPopOutAlert';
        var5['key'] = var7;
        var7 = function get() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var1 = _closure1_slot17;
                var2 = var1.disableEmbeddedActivityPopOutAlert;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0017_ip = 27; continue _fun0017 }
 24:
                var1 = var2;
 27:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'disableActivityHardwareAccelerationPrompt';
        var5['key'] = var7;
        var7 = function get() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                var1 = _closure1_slot17;
                var2 = var1.disableActivityHardwareAccelerationPrompt;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0018_ip = 27; continue _fun0018 }
 24:
                var1 = var2;
 27:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'disableInviteWithTextChannelActivityLaunch';
        var5['key'] = var7;
        var7 = function get() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var1 = _closure1_slot17;
                var2 = var1.disableInviteWithTextChannelActivityLaunch;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0019_ip = 27; continue _fun0019 }
 24:
                var1 = var2;
 27:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'disableHideSelfStreamAndVideoConfirmationAlert';
        var5['key'] = var7;
        var7 = function get() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                var1 = _closure1_slot17;
                var2 = var1.disableHideSelfStreamAndVideoConfirmationAlert;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0020_ip = 25; continue _fun0020 }
 22:
                var1 = var2;
 25:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'pushUpsellUserSettingsDismissed';
        var5['key'] = var7;
        var7 = function get() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                var1 = _closure1_slot17;
                var2 = var1.pushUpsellDismissed;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0021_ip = 27; continue _fun0021 }
 24:
                var1 = var2;
 27:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'disableActivityHostLeftNitroUpsell';
        var5['key'] = var7;
        var7 = function get() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                var1 = _closure1_slot17;
                var2 = var1.disableActivityHostLeftNitroUpsell;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0022_ip = 27; continue _fun0022 }
 24:
                var1 = var2;
 27:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'disableCallUserConfirmationPrompt';
        var5['key'] = var7;
        var7 = function get() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                var1 = _closure1_slot17;
                var2 = var1.disableCallUserConfirmationPrompt;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0023_ip = 27; continue _fun0023 }
 24:
                var1 = var2;
 27:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'disableApplicationSubscriptionCancellationSurvey';
        var5['key'] = var7;
        var7 = function get() {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                var1 = _closure1_slot17;
                var2 = var1.disableApplicationSubscriptionCancellationSurvey;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0024_ip = 27; continue _fun0024 }
 24:
                var1 = var2;
 27:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'darkSidebar';
        var5['key'] = var7;
        var7 = function get() {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                var1 = _closure1_slot17;
                var2 = var1.darkSidebar;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0025_ip = 25; continue _fun0025 }
 22:
                var1 = var2;
 25:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'useMobileChatCustomRenderer';
        var5['key'] = var7;
        var7 = function get() {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                var1 = _closure1_slot17;
                var2 = var1.useMobileChatCustomRenderer;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0026_ip = 25; continue _fun0026 }
 22:
                var1 = var2;
 25:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'saveCameraUploadsToDevice';
        var5['key'] = var7;
        var7 = function get() {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                var1 = _closure1_slot17;
                var2 = var1.saveCameraUploadsToDevice;
                var1 = null;
                var1 = var1 == var2;
                if(var1) { _fun0027_ip = 25; continue _fun0027 }
 22:
                var1 = var2;
 25:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'showPlayAgain';
        var5['key'] = var7;
        var7 = function get() {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                var1 = _closure1_slot17;
                var2 = var1.showPlayAgain;
                var1 = null;
                var1 = var1 == var2;
                if(var1) { _fun0028_ip = 25; continue _fun0028 }
 22:
                var1 = var2;
 25:
                return var1;
            }
        };
        var5['get'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = 'isVisualRefreshDisabled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                var1 = arg1;
                var2 = _closure1_slot17;
                var2 = var2.disableVisualRefresh;
                var3 = null;
                if(!(var3 != var2)) { _fun0029_ip = 25; continue _fun0029 }
 22:
                var1 = var2;
 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[29] = var5;
        var5 = {};
        var7 = 'listDensity';
        var5['key'] = var7;
        var6 = function get() {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                var1 = _closure1_slot17;
                var1 = var1.listDensity;
                var3 = null;
                if(!(var3 == var1)) { _fun0030_ip = 31; continue _fun0030 }
 21:
                var2 = _closure1_slot13;
                var1 = var2.COZY;
 31:
                return var1;
            }
        };
        var5['get'] = var6;
        var1[30] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var5.bind(var1)(var10);
    var5 = 'UnsyncedUserSettingsStore';
    var10['displayName'] = var5;
    var10['persistKey'] = var5;
    var5 = new Array(2);
    var11 = function() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 12;
        var6 = var4[var2];
        var3 = undefined;
        var6 = var5.bind(var3)(var6);
        var8 = var6.Storage;
        var7 = var8.get;
        var6 = 'UserSettingsStore';
        var19 = var7.bind(var8)(var6);
        var2 = var4[var2];
        var2 = var5.bind(var3)(var2);
        var5 = var2.Storage;
        var2 = var5.remove;
        var2 = var2.bind(var5)(var6);
        var2 = _closure1_slot1;
        var1 = 13;
        var1 = var4[var1];
        var18 = var2.bind(var3)(var1);
        var17 = var18.pick;
        var35 = 'dataSavingMode';
        var34 = 'videoUploadQuality';
        var33 = 'lowQualityImageMode';
        var32 = 'useSystemTheme';
        var31 = 'expressionPickerWidth';
        var30 = 'disableVoiceChannelChangeAlert';
        var29 = 'disableHideSelfStreamAndVideoConfirmationAlert';
        var28 = 'pushUpsellDismissed';
        var27 = 'disableEmbeddedActivityPopOutAlert';
        var26 = 'disableActivityHardwareAccelerationPrompt';
        var25 = 'disableInviteWithTextChannelActivityLaunch';
        var24 = 'disableActivityHostLeftNitroUpsell';
        var23 = 'disableCallUserConfirmationPrompt';
        var22 = 'disableApplicationSubscriptionCancellationSurvey';
        var21 = 'enableAndroidChatListAnimations';
        var20 = 'showPlayAgain';
        var37 = var18;
        var36 = var19;
        var1 = var37[var17](var36, var35, var34, var33, var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19);
        return var1;
    };
    var5[0] = var11;
    var11 = function(arg1) {
        var1 = arg1;
        var1 = delete var1.disableVisualRefresh;
        var1 = undefined;
        return var1;
    };
    var5[1] = var11;
    var10['migrations'] = var5;
    var5 = 14;
    var5 = var8[var5];
    var15 = var9.bind(var1)(var5);
    var5 = {};
    var11 = function handleUnsyncedUserSettingsUpdate(arg1) {
        var2 = {};
        var4 = _closure1_slot17;
        var5 = var2;
        var3 = copyDataProperties(var5, var4);
        var3 = arg1;
        var4 = var3.settings;
        var5 = var2;
        var3 = copyDataProperties(var5, var4);
        _closure1_slot17 = var2;
        var1 = undefined;
        return var1;
    };
    var5['UNSYNCED_USER_SETTINGS_UPDATE'] = var11;
    var11 = function handleLogOut() {
        var2 = {};
        var3 = _closure1_slot17;
        var3 = var3.useSystemTheme;
        var2['useSystemTheme'] = var3;
        var3 = _closure1_slot17;
        var3 = var3.darkSidebar;
        var2['darkSidebar'] = var3;
        _closure1_slot17 = var2;
        var1 = undefined;
        return var1;
    };
    var5['LOGOUT'] = var11;
    var11 = function handleLogInSuccess() {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
            var3 = _closure1_slot17;
            var1 = null;
            if(!(var1 == var3)) { _fun0031_ip = 19; continue _fun0031 }
 13:
            var1 = {};
            _closure1_slot17 = var1;
 19:
            var1 = undefined;
            return var1;
        }
    };
    var5['LOGIN_SUCCESS'] = var11;
    var11 = function handleRegisterSuccess() {
        var2 = _closure1_slot17;
        var1 = _closure1_slot8;
        var1 = var1.ON;
        var2['useSystemTheme'] = var1;
        var1 = undefined;
        return var1;
    };
    var5['REGISTER_SUCCESS'] = var11;
    var6 = function handleDarkSidebarToggle() {
        var2 = _closure1_slot17;
        var1 = var2.darkSidebar;
        var1 = !var1;
        var2['darkSidebar'] = var1;
        var1 = true;
        return var1;
    };
    var5['ACCESSIBILITY_DARK_SIDEBAR_TOGGLE'] = var6;
    var6 = var10.prototype;
    var6 = Object.create(var6, {constructor: {value: var10}});
    var16 = var6;
    var14 = var5;
    var5 = new var16[var10](var15, var14, var13);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 15;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/user_settings/UnsyncedUserSettingsStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['VideoQualitySettings'] = var4;
    var3['VideoCompressionQuality'] = var2;
    return var1;
})();