// app/modules/voice_panel/native/shared/VoicePanelTitleButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function ChannelButtonIcons() {
        var1 = _closure1_slot10;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var3 = _closure1_slot9;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var5.channelButtons;
        var1['style'] = var5;
        var8 = _closure1_slot8;
        var7 = _closure1_slot0;
        var11 = _closure1_slot2;
        var5 = 7;
        var5 = var11[var5];
        var5 = var7.bind(var4)(var5);
        var6 = var5.ShieldLockIcon;
        var5 = {};
        var10 = 'xs';
        var5['size'] = var10;
        var10 = 8;
        var12 = var11[var10];
        var12 = var7.bind(var4)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var10 = var11[var10];
        var10 = var7.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.VHXh8f;
        var10 = var12.bind(var13)(var10);
        var5['accessibilityLabel'] = var10;
        var6 = var8.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var8 = _closure1_slot8;
        var6 = 9;
        var6 = var11[var6];
        var6 = var7.bind(var4)(var6);
        var6 = var6.BaseTextButton;
        var7 = var6.Icon;
        var6 = {};
        var10 = _closure1_slot1;
        var9 = 10;
        var9 = var11[var9];
        var9 = var10.bind(var4)(var9);
        var6['source'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function ChannelButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var7 = var2.channelId;
            var _closure2_slot0 = var7;
            var5 = var2.onPress;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 11;
            var2 = var13[var2];
            var4 = undefined;
            var8 = var12.bind(var4)(var2);
            var3 = var8.useStateFromStores;
            var9 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var8)(var2, var1);
            var3 = _closure1_slot1;
            var1 = 12;
            var1 = var13[var1];
            var1 = var3.bind(var4)(var1);
            var9 = var1.bind(var4)(var2);
            var1 = 13;
            var1 = var13[var1];
            var3 = var12.bind(var4)(var1);
            var2 = var3.useIsCallSecureFramesVerified;
            var1 = {};
            var1['channelId'] = var7;
            var7 = var2.bind(var3)(var1);
            var3 = _closure1_slot8;
            var1 = 14;
            var1 = var13[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.HeaderButton;
            var1 = {};
            var8 = 8;
            var10 = var13[var8];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var8 = var13[var8];
            var8 = var12.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.Y2b7+f;
            var8 = var10.bind(var11)(var8);
            var1['accessibilityHint'] = var8;
            var8 = null;
            var10 = var8 != var9;
            var8 = '???';
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var9;
case 2:
            var1['text'] = var8;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 10;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var10 = _closure1_slot8;
            var9 = _closure1_slot11;
            var8 = {};
            var7 = var10.bind(var4)(var9, var8);
case 6:
            var1['icon'] = var7;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 15;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.spacing;
            var6 = var6.PX_4;
            var6 = -var6;
            var1['iconOpticalOffsetMargin'] = var6;
            var6 = 'end';
            var1['iconPosition'] = var6;
            var1['onPress'] = var5;
            var5 = 2;
            var1['maxFontSizeMultiplier'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function StreamButton(arg1) {
        var1 = arg1;
        var2 = var1.participant;
        var5 = var1.onPress;
        var9 = _closure1_slot3;
        var6 = var9.useContext;
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var3 = 16;
        var3 = var8[var3];
        var4 = undefined;
        var3 = var7.bind(var4)(var3);
        var3 = var6.bind(var9)(var3);
        var10 = var3.guildId;
        var9 = var3.channelId;
        var3 = 17;
        var3 = var8[var3];
        var6 = var7.bind(var4)(var3);
        var3 = var6.useName;
        var2 = var2.user;
        var6 = var3.bind(var6)(var10, var9, var2);
        var3 = _closure1_slot8;
        var10 = _closure1_slot0;
        var1 = 14;
        var1 = var8[var1];
        var1 = var10.bind(var4)(var1);
        var2 = var1.HeaderButton;
        var1 = {};
        var9 = 8;
        var11 = var8[var9];
        var11 = var10.bind(var4)(var11);
        var13 = var11.intl;
        var12 = var13.string;
        var11 = var8[var9];
        var11 = var10.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11.Y2b7+f;
        var11 = var12.bind(var13)(var11);
        var1['accessibilityHint'] = var11;
        var11 = var8[var9];
        var11 = var10.bind(var4)(var11);
        var12 = var11.intl;
        var11 = var12.formatToPlainString;
        var9 = var8[var9];
        var9 = var10.bind(var4)(var9);
        var9 = var9.t;
        var10 = var9.I0mOAg;
        var9 = {};
        var9['username'] = var6;
        var9 = var11.bind(var12)(var10, var9);
        var1['accessibilityLabel'] = var9;
        var1['text'] = var6;
        var6 = 18;
        var6 = var8[var6];
        var6 = var7.bind(var4)(var6);
        var1['icon'] = var6;
        var6 = 'start';
        var1['iconPosition'] = var6;
        var1['onPress'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function ActivityButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = var1.participant;
            var _closure2_slot0 = var3;
            var5 = var1.onPress;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 11;
            var7 = var6[var4];
            var4 = undefined;
            var9 = var3.bind(var4)(var7);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var10;
            var2 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getApplication;
                var1 = _closure2_slot0;
                var1 = var1.applicationId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var8.bind(var9)(var7, var2);
            var2 = 19;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var7 = var2.ActivitiesControllerIconMobileExperiment;
            var6 = var7.useExperiment;
            var3 = {};
            var2 = 'VoicePanelTitleActivityButton';
            var3['location'] = var2;
            var2 = {};
            var8 = true;
            var2['autoTrackExposure'] = var8;
            var2 = var6.bind(var7)(var3, var2);
            var2 = var2.enabled;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var2 = 21;
            var2 = var7[var2];
            _fun0002_ip = 9; continue _fun0002;
case 7:
            var6 = 20;
            var2 = var7[var6];
case 9:
            var6 = var3.bind(var4)(var2);
            var3 = _closure1_slot8;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 14;
            var1 = var12[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.HeaderButton;
            var1 = {};
            var7 = 8;
            var8 = var12[var7];
            var8 = var11.bind(var4)(var8);
            var10 = var8.intl;
            var8 = var10.string;
            var7 = var12[var7];
            var7 = var11.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.Y2b7+f;
            var7 = var8.bind(var10)(var7);
            var1['accessibilityHint'] = var7;
            var7 = null;
            var10 = var7 == var9;
            var8 = undefined;
            if(var10) { _fun0002_ip = 6; continue _fun0002 }
case 10:
            var8 = var9.name;
case 6:
            var9 = var7 != var8;
            var7 = '???';
            if(!var9) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var7 = var8;
case 11:
            var1['text'] = var7;
            var1['icon'] = var6;
            var6 = 'start';
            var1['iconPosition'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function UserButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var9 = var1.participant;
            var5 = var1.onPress;
            var2 = _closure1_slot10;
            var4 = undefined;
            var2 = var2.bind(var4)();
            var8 = _closure1_slot3;
            var7 = var8.useContext;
            var6 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 16;
            var3 = var12[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var7.bind(var8)(var3);
            var8 = var3.guildId;
            var10 = var3.channelId;
            var3 = 17;
            var3 = var12[var3];
            var7 = var6.bind(var4)(var3);
            var6 = var7.useName;
            var3 = var9.user;
            var6 = var6.bind(var7)(var8, var10, var3);
            var11 = _closure1_slot0;
            var3 = 22;
            var3 = var12[var3];
            var7 = var11.bind(var4)(var3);
            var3 = var7.useVoicePanelHeaderUserStateIcons;
            var2 = var2.userIcons;
            var8 = var3.bind(var7)(var9, var8, var2);
            var3 = _closure1_slot8;
            var1 = 14;
            var1 = var12[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.HeaderButton;
            var1 = {};
            var7 = 8;
            var9 = var12[var7];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var12[var7];
            var7 = var11.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.Y2b7+f;
            var7 = var9.bind(var10)(var7);
            var1['accessibilityHint'] = var7;
            var1['icon'] = var8;
            var7 = null;
            var8 = var7 != var8;
            var7 = undefined;
            if(!var8) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var7 = 'start';
case 13:
            var1['iconPosition'] = var7;
            var1['text'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = -6;
    var10['marginLeft'] = var11;
    var4['userIcons'] = var10;
    var10 = {'alignItems': 'center', 'flexDirection': 'row', 'gap': 2};
    var4['channelButtons'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var2 = function VoicePanelTitleButton() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var8 = _closure1_slot3;
            var5 = var8.useContext;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 16;
            var3 = var7[var3];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var5.bind(var8)(var3);
            var9 = var3.guildId;
            var _closure2_slot0 = var9;
            var8 = var3.channelId;
            var _closure2_slot1 = var8;
            var11 = var3.focused;
            var5 = _closure1_slot0;
            var3 = 23;
            var3 = var7[var3];
            var10 = var5.bind(var4)(var3);
            var5 = var10.useDerivedStateFromSharedValue;
            var3 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var1 = var2.id;
case 15:
                    return var1;
                }
            };
            var5 = var5.bind(var10)(var11, var3);
            var3 = 24;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var6 = var3.bind(var4)(var5, var8, var9);
            var7 = _closure1_slot3;
            var5 = var7.useCallback;
            var3 = new Array(2);
            var3[0] = var9;
            var3[1] = var8;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 25;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.openVoicePanelSettingsActionSheet;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var5 = var5.bind(var7)(var2, var3);
            var2 = null;
            if(!(var2 != var6)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var3 = var6.type;
            var2 = _closure1_slot7;
            var2 = var2.STREAM;
            if(!(var3 !== var2)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var3 = var6.type;
            var2 = _closure1_slot7;
            var2 = var2.ACTIVITY;
            if(!(var3 !== var2)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var3 = var6.type;
            var2 = _closure1_slot7;
            var2 = var2.USER;
            if(!(var3 !== var2)) { _fun0004_ip = 23; continue _fun0004 }
case 17:
            var7 = _closure1_slot8;
            var3 = _closure1_slot12;
            var2 = {};
            var2['channelId'] = var8;
            var2['onPress'] = var5;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 23:
            var7 = _closure1_slot8;
            var3 = _closure1_slot15;
            var2 = {};
            var2['participant'] = var6;
            var2['onPress'] = var5;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 21:
            var7 = _closure1_slot8;
            var3 = _closure1_slot14;
            var2 = {};
            var2['participant'] = var6;
            var2['onPress'] = var5;
            var2 = var7.bind(var4)(var3, var2);
            return var2;
case 19:
            var3 = _closure1_slot8;
            var2 = _closure1_slot13;
            var1 = {};
            var1['participant'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/shared/VoicePanelTitleButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();