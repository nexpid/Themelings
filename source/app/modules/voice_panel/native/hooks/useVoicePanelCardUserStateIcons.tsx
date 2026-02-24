// app/modules/voice_panel/native/hooks/useVoicePanelCardUserStateIcons.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var8 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var8);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.ParticipantTypes;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.jsx;
    var _closure1_slot7 = var2;
    var2 = {};
    var5 = 'STREAM_ICON';
    var2['STREAM_ICON'] = var5;
    var5 = 'USER_VIDEO_ICON';
    var2['USER_VIDEO_ICON'] = var5;
    var5 = 'MUTE_DEAFEN_ICON';
    var2['MUTE_DEAFEN_ICON'] = var5;
    var5 = 'DISCONNECTED_ICON';
    var2['USER_DISCONNECTED_ICON'] = var5;
    var5 = 'SPEAKER_MUTE_ICON';
    var2['SPEAKER_MUTE_ICON'] = var5;
    var _closure1_slot8 = var2;
    var5 = 17;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/hooks/useVoicePanelCardUserStateIcons.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useVoicePanelCardUserStateIcons(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var13 = arg1;
            var7 = arg2;
            var9 = arg3;
            var8 = arguments[3];
            var _closure2_slot0 = var13;
            var _closure2_slot1 = var7;
            var10 = undefined;
            if(!(var8 === var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = null;
case 2:
            var _closure2_slot2 = var8;
            var _closure2_slot3 = var10;
            var _closure2_slot4 = var10;
            var _closure2_slot5 = var10;
            var _closure2_slot6 = var10;
            var _closure2_slot7 = var10;
            var _closure2_slot8 = var10;
            var _closure2_slot9 = var10;
            var _closure2_slot10 = var10;
            var _closure2_slot11 = var10;
            var6 = _closure1_slot3;
            var5 = var6.useContext;
            var11 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var2 = var11.bind(var10)(var2);
            var2 = var5.bind(var6)(var2);
            var2 = var2.setShowFloatingCTA;
            _closure2_slot3 = var2;
            var5 = _closure1_slot0;
            var6 = 6;
            var4 = var4[var6];
            var11 = var5.bind(var10)(var4);
            var5 = var11.useMuteDeafenIconState;
            var4 = _closure1_slot6;
            var12 = var4.USER;
            var4 = undefined;
            if(!(var13 === var12)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var7;
case 4:
            var11 = var5.bind(var11)(var4, var9);
            _closure2_slot4 = var11;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var6];
            var6 = var5.bind(var10)(var4);
            var5 = var6.useVideoIconState;
            var4 = _closure1_slot6;
            var12 = var4.USER;
            var4 = undefined;
            if(!(var13 === var12)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var7;
case 6:
            var12 = var5.bind(var6)(var4, var9);
            _closure2_slot5 = var12;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 7;
            var9 = var6[var4];
            var16 = var5.bind(var10)(var9);
            var15 = var16.useStateFromStores;
            var9 = _closure1_slot4;
            var14 = new Array(1);
            var14[0] = var9;
            var9 = function() {
                var2 = _closure1_slot4;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var15.bind(var16)(var14, var9);
            _closure2_slot6 = var14;
            var4 = var6[var4];
            var16 = var5.bind(var10)(var4);
            var15 = var16.useStateFromStores;
            var4 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var4;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var3 = _closure2_slot1;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 8; continue _fun0002 }
case 10:
                    var5 = _closure1_slot5;
                    var4 = var5.getVoicePlatformForChannel;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 8:
                    return var1;
                }
            };
            var9 = var15.bind(var16)(var9, var4, var5);
            _closure2_slot7 = var9;
            var5 = _closure1_slot1;
            var4 = 8;
            var4 = var6[var4];
            var6 = var5.bind(var10)(var4);
            var4 = _closure1_slot6;
            var4 = var4.STREAM;
            var5 = undefined;
            if(!(var13 === var4)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var5 = var7;
case 11:
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 9;
            var4 = var15[var4];
            var4 = var16.bind(var10)(var4);
            var4 = var4.MediaEngineContextTypes;
            var4 = var4.STREAM;
            var4 = var6.bind(var10)(var5, var4);
            var6 = var4.effectiveVolume;
            var5 = _closure1_slot1;
            var4 = 10;
            var4 = var15[var4];
            var15 = var5.bind(var10)(var4);
            var5 = var15.useConfig;
            var4 = {};
            var16 = 'useVoicePanelCardUserStateIcons';
            var4['location'] = var16;
            var4 = var5.bind(var15)(var4);
            var5 = var4.showTileVolumeIndicator;
            if(!var5) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var4 = 0;
            var5 = var4 === var6;
case 13:
            if(!var5) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var4 = _closure1_slot6;
            var4 = var4.STREAM;
            var5 = var13 === var4;
case 15:
            _closure2_slot8 = var5;
            var6 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 11;
            var4 = var15[var4];
            var6 = var6.bind(var10)(var4);
            var4 = var6.useIsRTCDisconnectedUIVisible;
            var10 = var4.bind(var6)(var8, var7);
            _closure2_slot9 = var10;
            var4 = _closure1_slot3;
            var6 = var4.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure2_slot3;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var2 = var2.OverrideFloatingCTA;
                var2 = var2.BAD_CONNECTION;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var8 = var6.bind(var4)(var2, var3);
            _closure2_slot10 = var8;
            var6 = var4.useCallback;
            var3 = function() {
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 13;
                var2 = var9[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.open;
                var2 = {};
                var6 = 'user-disconnected-indicator';
                var2['key'] = var6;
                var6 = function icon() {
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 14;
                    var1 = var7[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.CircleErrorIcon;
                    var1 = {};
                    var6 = 'xs';
                    var1['size'] = var6;
                    var6 = _closure1_slot1;
                    var5 = 15;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.colors;
                    var5 = var5.STATUS_WARNING;
                    var1['color'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var2['icon'] = var6;
                var8 = _closure1_slot0;
                var5 = 16;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.HFwRpk;
                var5 = var6.bind(var7)(var5);
                var2['content'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = new Array(0);
            var6 = var6.bind(var4)(var3, var2);
            _closure2_slot11 = var6;
            var3 = var4.useMemo;
            var2 = new Array(10);
            var2[0] = var14;
            var2[1] = var13;
            var2[2] = var12;
            var2[3] = var11;
            var2[4] = var10;
            var2[5] = var9;
            var2[6] = var8;
            var2[7] = var7;
            var2[8] = var6;
            var2[9] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 17:
                    var1 = new Array(0);
                    return var1;
case 9:
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot6;
                    var1 = var1.STREAM;
                    if(!(var2 !== var1)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot6;
                    var1 = var1.USER;
                    if(!(var2 === var1)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var1 = new Array(0);
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var3 = var1.push;
                    var2 = {};
                    var7 = _closure1_slot8;
                    var7 = var7.USER_DISCONNECTED_ICON;
                    var2['type'] = var7;
                    var7 = _closure2_slot11;
                    var2['onPress'] = var7;
                    var2 = var3.bind(var1)(var2);
case 22:
                    var2 = _closure2_slot5;
                    var3 = null;
                    var2 = var3 != var2;
                    if(!var2) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var8 = _closure2_slot5;
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 6;
                    var9 = var9[var7];
                    var7 = undefined;
                    var7 = var10.bind(var7)(var9);
                    var7 = var7.VideoIconState;
                    var7 = var7.VIDEO_ACTIVE;
                    var2 = var8 !== var7;
case 24:
                    if(!var2) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var7 = var1.push;
                    var2 = {};
                    var8 = _closure1_slot8;
                    var8 = var8.USER_VIDEO_ICON;
                    var2['type'] = var8;
                    var8 = _closure2_slot5;
                    var2['videoIconState'] = var8;
                    var10 = _closure2_slot5;
                    var11 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var8 = 6;
                    var9 = var9[var8];
                    var8 = undefined;
                    var9 = var11.bind(var8)(var9);
                    var9 = var9.VideoIconState;
                    var9 = var9.VIDEO_DISABLED_LOCAL_AUTO;
                    if(!(var10 === var9)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var8 = _closure2_slot10;
case 28:
                    var2['onPress'] = var8;
                    var2 = var7.bind(var1)(var2);
case 26:
                    var2 = _closure2_slot4;
                    if(!(var3 != var2)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var3 = var1.push;
                    var2 = {};
                    var7 = _closure1_slot8;
                    var7 = var7.MUTE_DEAFEN_ICON;
                    var2['type'] = var7;
                    var7 = _closure2_slot4;
                    var2['muteDeafenIconState'] = var7;
                    var8 = var1.length;
                    var7 = 0;
                    var7 = var8 > var7;
                    var2['withLeftMargin'] = var7;
                    var7 = function onPress() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var3 = _closure2_slot4;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var7 = 6;
                            var2 = var1[var7];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.MuteDeafenIconState;
                            var2 = var2.DEAFENED_SERVER;
                            if(!(var2 !== var3)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.MuteDeafenIconState;
                            var2 = var2.DEAFENED;
                            if(!(var2 !== var3)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.MuteDeafenIconState;
                            var2 = var2.MUTED_SERVER;
                            if(!(var2 !== var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.MuteDeafenIconState;
                            var2 = var2.MUTED_LOCAL;
                            if(!(var2 !== var3)) { _fun0004_ip = 38; continue _fun0004 }
case 4:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.MuteDeafenIconState;
                            var2 = var2.MUTED;
                            if(!(var2 === var3)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                            var3 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var2 = 13;
                            var2 = var11[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.open;
                            var2 = {};
                            var10 = _closure2_slot1;
                            var7 = global;
                            var7 = var7.HermesInternal;
                            var9 = var7.concat;
                            var8 = '';
                            var7 = '-status';
                            var7 = var9.bind(var8)(var10, var7);
                            var2['key'] = var7;
                            var10 = _closure1_slot0;
                            var7 = 16;
                            var8 = var11[var7];
                            var8 = var10.bind(var1)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var11[var7];
                            var7 = var10.bind(var1)(var7);
                            var7 = var7.t;
                            var7 = var7.tjtv3P;
                            var7 = var8.bind(var9)(var7);
                            var2['content'] = var7;
                            var2 = var3.bind(var4)(var2);
                            _fun0004_ip = 39; continue _fun0004;
case 38:
                            var3 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var2 = 13;
                            var2 = var11[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.open;
                            var2 = {};
                            var10 = _closure2_slot1;
                            var7 = global;
                            var7 = var7.HermesInternal;
                            var9 = var7.concat;
                            var8 = '';
                            var7 = '-status';
                            var7 = var9.bind(var8)(var10, var7);
                            var2['key'] = var7;
                            var10 = _closure1_slot0;
                            var7 = 16;
                            var8 = var11[var7];
                            var8 = var10.bind(var1)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var11[var7];
                            var7 = var10.bind(var1)(var7);
                            var7 = var7.t;
                            var7 = var7.Q8Uzof;
                            var7 = var8.bind(var9)(var7);
                            var2['content'] = var7;
                            var2 = var3.bind(var4)(var2);
                            _fun0004_ip = 39; continue _fun0004;
case 36:
                            var3 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var2 = 13;
                            var2 = var11[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.open;
                            var2 = {};
                            var10 = _closure2_slot1;
                            var7 = global;
                            var7 = var7.HermesInternal;
                            var9 = var7.concat;
                            var8 = '';
                            var7 = '-status';
                            var7 = var9.bind(var8)(var10, var7);
                            var2['key'] = var7;
                            var10 = _closure1_slot0;
                            var7 = 16;
                            var8 = var11[var7];
                            var8 = var10.bind(var1)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var11[var7];
                            var7 = var10.bind(var1)(var7);
                            var7 = var7.t;
                            var7 = var7.uLddbQ;
                            var7 = var8.bind(var9)(var7);
                            var2['content'] = var7;
                            var2 = var3.bind(var4)(var2);
                            _fun0004_ip = 39; continue _fun0004;
case 34:
                            var3 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var2 = 13;
                            var2 = var11[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.open;
                            var2 = {};
                            var10 = _closure2_slot1;
                            var7 = global;
                            var7 = var7.HermesInternal;
                            var9 = var7.concat;
                            var8 = '';
                            var7 = '-status';
                            var7 = var9.bind(var8)(var10, var7);
                            var2['key'] = var7;
                            var10 = _closure1_slot0;
                            var7 = 16;
                            var8 = var11[var7];
                            var8 = var10.bind(var1)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var11[var7];
                            var7 = var10.bind(var1)(var7);
                            var7 = var7.t;
                            var7 = var7.NjmiOL;
                            var7 = var8.bind(var9)(var7);
                            var2['content'] = var7;
                            var2 = var3.bind(var4)(var2);
                            _fun0004_ip = 39; continue _fun0004;
case 32:
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var2 = 13;
                            var2 = var9[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.open;
                            var2 = {};
                            var10 = _closure2_slot1;
                            var6 = global;
                            var6 = var6.HermesInternal;
                            var8 = var6.concat;
                            var7 = '';
                            var6 = '-status';
                            var6 = var8.bind(var7)(var10, var6);
                            var2['key'] = var6;
                            var8 = _closure1_slot0;
                            var5 = 16;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5.btxSdB;
                            var5 = var6.bind(var7)(var5);
                            var2['content'] = var5;
                            var2 = var3.bind(var4)(var2);
case 39:
                            return var1;
                        }
                    };
                    var2['onPress'] = var7;
                    var2 = var3.bind(var1)(var2);
case 30:
                    return var1;
case 20:
                    var1 = new Array(0);
                    return var1;
case 18:
                    var1 = new Array(0);
                    var2 = _closure2_slot8;
                    if(!var2) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                    var3 = var1.push;
                    var2 = {};
                    var7 = _closure1_slot8;
                    var7 = var7.SPEAKER_MUTE_ICON;
                    var2['type'] = var7;
                    var6 = function onPress() {
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 13;
                        var2 = var9[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.open;
                        var2 = {};
                        var10 = _closure2_slot1;
                        var6 = global;
                        var6 = var6.HermesInternal;
                        var8 = var6.concat;
                        var7 = '';
                        var6 = '-stream-status';
                        var6 = var8.bind(var7)(var10, var6);
                        var2['key'] = var6;
                        var8 = _closure1_slot0;
                        var5 = 16;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var1)(var5);
                        var5 = var5.t;
                        var5 = var5.Q8Uzof;
                        var5 = var6.bind(var7)(var5);
                        var2['content'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onPress'] = var6;
                    var2 = var3.bind(var1)(var2);
case 41:
                    var3 = var1.push;
                    var2 = {};
                    var5 = _closure1_slot8;
                    var5 = var5.STREAM_ICON;
                    var2['type'] = var5;
                    var4 = _closure2_slot7;
                    var2['voicePlatform'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['VoicePanelCardUserStateIconType'] = var2;
    return var1;
})();