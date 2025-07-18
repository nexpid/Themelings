// app/modules/voice_panel/native/hooks/useVoicePanelCardUserStateIcons.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var5 = native3;
    var3 = native6;
    var7 = native7;
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
    var2 = native4;
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
    var _closure1_slot8 = var2;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/hooks/useVoicePanelCardUserStateIcons.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useVoicePanelCardUserStateIcons(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var12 = arg1;
            var6 = arg2;
            var11 = arg3;
            var7 = arguments[3];
            var _closure2_slot0 = var12;
            var _closure2_slot1 = var6;
            var9 = undefined;
            if(!(var7 === var9)) { _fun0001_ip = 30; continue _fun0001 }
 28:
            var7 = null;
 30:
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var9;
            var _closure2_slot4 = var9;
            var _closure2_slot5 = var9;
            var _closure2_slot6 = var9;
            var _closure2_slot7 = var9;
            var _closure2_slot8 = var9;
            var _closure2_slot9 = var9;
            var _closure2_slot10 = var9;
            var8 = _closure1_slot3;
            var5 = var8.useContext;
            var10 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var2 = var10.bind(var9)(var2);
            var2 = var5.bind(var8)(var2);
            var2 = var2.setShowFloatingCTA;
            _closure2_slot3 = var2;
            var5 = _closure1_slot0;
            var8 = 6;
            var4 = var4[var8];
            var10 = var5.bind(var9)(var4);
            var5 = var10.useMuteDeafenIconState;
            var4 = _closure1_slot6;
            var13 = var4.USER;
            var4 = undefined;
            if(!(var12 === var13)) { _fun0001_ip = 155; continue _fun0001 }
 152:
            var4 = var6;
 155:
            var10 = var5.bind(var10)(var4, var11);
            _closure2_slot4 = var10;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var8];
            var8 = var5.bind(var9)(var4);
            var5 = var8.useVideoIconState;
            var4 = _closure1_slot6;
            var13 = var4.USER;
            var4 = undefined;
            if(!(var12 === var13)) { _fun0001_ip = 207; continue _fun0001 }
 204:
            var4 = var6;
 207:
            var11 = var5.bind(var8)(var4, var11);
            _closure2_slot5 = var11;
            var5 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 7;
            var8 = var14[var4];
            var16 = var5.bind(var9)(var8);
            var15 = var16.useStateFromStores;
            var8 = _closure1_slot4;
            var13 = new Array(1);
            var13[0] = var8;
            var8 = function() {
                var2 = _closure1_slot4;
                var1 = var2.isConnected;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var15.bind(var16)(var13, var8);
            _closure2_slot6 = var13;
            var4 = var14[var4];
            var17 = var5.bind(var9)(var4);
            var16 = var17.useStateFromStores;
            var4 = _closure1_slot5;
            var15 = new Array(1);
            var15[0] = var4;
            var8 = new Array(2);
            var8[0] = var7;
            var8[1] = var6;
            var4 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot2;
                    var4 = null;
                    var3 = var4 != var1;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 58; continue _fun0002 }
 18:
                    var3 = _closure2_slot1;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0002_ip = 58; continue _fun0002 }
 31:
                    var5 = _closure1_slot5;
                    var4 = var5.getVoicePlatformForChannel;
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
 58:
                    return var1;
                }
            };
            var8 = var16.bind(var17)(var15, var4, var8);
            _closure2_slot7 = var8;
            var4 = 8;
            var4 = var14[var4];
            var5 = var5.bind(var9)(var4);
            var4 = var5.useIsRTCDisconnectedUIVisible;
            var9 = var4.bind(var5)(var7, var6);
            _closure2_slot8 = var9;
            var4 = _closure1_slot3;
            var5 = var4.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure2_slot3;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var2 = var2.OverrideFloatingCTA;
                var2 = var2.BAD_CONNECTION;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7 = var5.bind(var4)(var2, var3);
            _closure2_slot9 = var7;
            var5 = var4.useCallback;
            var3 = function() {
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 10;
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
                    var1 = 11;
                    var1 = var7[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.CircleWarningIcon;
                    var1 = {};
                    var6 = 'xs';
                    var1['size'] = var6;
                    var6 = _closure1_slot1;
                    var5 = 12;
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
                var5 = 13;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.HFwRpq;
                var5 = var6.bind(var7)(var5);
                var2['content'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = new Array(0);
            var5 = var5.bind(var4)(var3, var2);
            _closure2_slot10 = var5;
            var3 = var4.useMemo;
            var2 = new Array(9);
            var2[0] = var13;
            var2[1] = var12;
            var2[2] = var11;
            var2[3] = var10;
            var2[4] = var9;
            var2[5] = var8;
            var2[6] = var7;
            var2[7] = var6;
            var2[8] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot6;
                    if(var2) { _fun0003_ip = 16; continue _fun0003 }
 10:
                    var2 = new Array(0);
                    return var2;
 16:
                    var4 = _closure2_slot0;
                    var2 = _closure1_slot6;
                    var2 = var2.STREAM;
                    if(!(var4 !== var2)) { _fun0003_ip = 329; continue _fun0003 }
 40:
                    var4 = _closure2_slot0;
                    var2 = _closure1_slot6;
                    var2 = var2.USER;
                    if(!(var4 === var2)) { _fun0003_ip = 323; continue _fun0003 }
 61:
                    var2 = new Array(0);
                    var4 = _closure2_slot8;
                    if(!var4) { _fun0003_ip = 106; continue _fun0003 }
 72:
                    var5 = var2.push;
                    var4 = {};
                    var6 = _closure1_slot8;
                    var6 = var6.USER_DISCONNECTED_ICON;
                    var4['type'] = var6;
                    var6 = _closure2_slot10;
                    var4['onPress'] = var6;
                    var4 = var5.bind(var2)(var4);
 106:
                    var4 = _closure2_slot5;
                    var5 = null;
                    var4 = var5 != var4;
                    if(!var4) { _fun0003_ip = 161; continue _fun0003 }
 119:
                    var7 = _closure2_slot5;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 6;
                    var8 = var8[var6];
                    var6 = undefined;
                    var6 = var9.bind(var6)(var8);
                    var6 = var6.VideoIconState;
                    var6 = var6.VIDEO_ACTIVE;
                    var4 = var7 !== var6;
 161:
                    if(!var4) { _fun0003_ip = 249; continue _fun0003 }
 164:
                    var6 = var2.push;
                    var4 = {};
                    var7 = _closure1_slot8;
                    var7 = var7.USER_VIDEO_ICON;
                    var4['type'] = var7;
                    var7 = _closure2_slot5;
                    var4['videoIconState'] = var7;
                    var9 = _closure2_slot5;
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 6;
                    var8 = var8[var7];
                    var7 = undefined;
                    var8 = var10.bind(var7)(var8);
                    var8 = var8.VideoIconState;
                    var8 = var8.VIDEO_DISABLED_LOCAL_AUTO;
                    if(!(var9 === var8)) { _fun0003_ip = 240; continue _fun0003 }
 236:
                    var7 = _closure2_slot9;
 240:
                    var4['onPress'] = var7;
                    var4 = var6.bind(var2)(var4);
 249:
                    var4 = _closure2_slot4;
                    if(!(var5 != var4)) { _fun0003_ip = 321; continue _fun0003 }
 257:
                    var5 = var2.push;
                    var4 = {};
                    var6 = _closure1_slot8;
                    var6 = var6.MUTE_DEAFEN_ICON;
                    var4['type'] = var6;
                    var6 = _closure2_slot4;
                    var4['muteDeafenIconState'] = var6;
                    var7 = var2.length;
                    var6 = 0;
                    var6 = var7 > var6;
                    var4['withLeftMargin'] = var6;
                    var6 = function onPress() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var3 = _closure2_slot4;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var7 = 6;
                            var2 = var1[var7];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.MuteDeafenIconState;
                            var2 = var2.DEAFENED_SERVER;
                            if(!(var2 !== var3)) { _fun0004_ip = 723; continue _fun0004 }
 51:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.MuteDeafenIconState;
                            var2 = var2.DEAFENED;
                            if(!(var2 !== var3)) { _fun0004_ip = 591; continue _fun0004 }
 87:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.MuteDeafenIconState;
                            var2 = var2.MUTED_SERVER;
                            if(!(var2 !== var3)) { _fun0004_ip = 459; continue _fun0004 }
 123:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.MuteDeafenIconState;
                            var2 = var2.MUTED_LOCAL;
                            if(!(var2 !== var3)) { _fun0004_ip = 327; continue _fun0004 }
 159:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.MuteDeafenIconState;
                            var2 = var2.MUTED;
                            if(!(var2 === var3)) { _fun0004_ip = 850; continue _fun0004 }
 195:
                            var3 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var2 = 10;
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
                            var7 = 13;
                            var8 = var11[var7];
                            var8 = var10.bind(var1)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var11[var7];
                            var7 = var10.bind(var1)(var7);
                            var7 = var7.t;
                            var7 = var7.tjtv3N;
                            var7 = var8.bind(var9)(var7);
                            var2['content'] = var7;
                            var2 = var3.bind(var4)(var2);
                            _fun0004_ip = 850; continue _fun0004;
 327:
                            var3 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var2 = 10;
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
                            var7 = 13;
                            var8 = var11[var7];
                            var8 = var10.bind(var1)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var11[var7];
                            var7 = var10.bind(var1)(var7);
                            var7 = var7.t;
                            var7 = var7.Q8Uzoa;
                            var7 = var8.bind(var9)(var7);
                            var2['content'] = var7;
                            var2 = var3.bind(var4)(var2);
                            _fun0004_ip = 850; continue _fun0004;
 459:
                            var3 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var2 = 10;
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
                            var7 = 13;
                            var8 = var11[var7];
                            var8 = var10.bind(var1)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var11[var7];
                            var7 = var10.bind(var1)(var7);
                            var7 = var7.t;
                            var7 = var7.uLddbW;
                            var7 = var8.bind(var9)(var7);
                            var2['content'] = var7;
                            var2 = var3.bind(var4)(var2);
                            _fun0004_ip = 850; continue _fun0004;
 591:
                            var3 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var2 = 10;
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
                            var7 = 13;
                            var8 = var11[var7];
                            var8 = var10.bind(var1)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var11[var7];
                            var7 = var10.bind(var1)(var7);
                            var7 = var7.t;
                            var7 = var7.NjmiOD;
                            var7 = var8.bind(var9)(var7);
                            var2['content'] = var7;
                            var2 = var3.bind(var4)(var2);
                            _fun0004_ip = 850; continue _fun0004;
 723:
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var2 = 10;
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
                            var5 = 13;
                            var6 = var9[var5];
                            var6 = var8.bind(var1)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var1)(var5);
                            var5 = var5.t;
                            var5 = var5.btxSdH;
                            var5 = var6.bind(var7)(var5);
                            var2['content'] = var5;
                            var2 = var3.bind(var4)(var2);
 850:
                            return var1;
                        }
                    };
                    var4['onPress'] = var6;
                    var4 = var5.bind(var2)(var4);
 321:
                    return var2;
 323:
                    var2 = new Array(0);
                    return var2;
 329:
                    var2 = {};
                    var3 = _closure1_slot8;
                    var3 = var3.STREAM_ICON;
                    var2['type'] = var3;
                    var1 = _closure2_slot7;
                    var2['voicePlatform'] = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
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