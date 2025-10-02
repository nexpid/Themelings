// app/modules/channel_list_v2/native/components/VocalChannelJoinButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
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
    var9 = var4.View;
    var _closure1_slot4 = var9;
    var4 = var4.Pressable;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.NOOP;
    var _closure1_slot8 = var8;
    var4 = var4.Permissions;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg2;
            var1 = {};
            var2 = {};
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var6 = 7;
            var8 = var4[var6];
            var5 = undefined;
            var8 = var7.bind(var5)(var8);
            var8 = var8.radii;
            var8 = var8.xxl;
            var2['borderRadius'] = var8;
            var8 = var4[var6];
            var8 = var7.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_8;
            var2['paddingHorizontal'] = var8;
            var8 = var4[var6];
            var8 = var7.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_4;
            var2['paddingVertical'] = var8;
            var8 = var4[var6];
            var8 = var7.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_4;
            var8 = -var8;
            var2['marginVertical'] = var8;
            var4 = var4[var6];
            var4 = var7.bind(var5)(var4);
            var4 = var4.colors;
            var4 = var4.REDESIGN_BUTTON_SECONDARY_BACKGROUND;
            var2['backgroundColor'] = var4;
            var4 = 28;
            var2['minHeight'] = var4;
            var4 = 'center';
            var2['justifyContent'] = var4;
            var7 = 1;
            var8 = arg1;
            var4 = var7;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = 0;
case 2:
            var2['elevation'] = var4;
            var4 = 4;
            var2['shadowRadius'] = var4;
            var8 = {'width': 0, 'height': 1};
            var2['shadowOffset'] = var8;
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var6];
            var8 = var10.bind(var5)(var8);
            var8 = var8.colors;
            var8 = var8.BLACK;
            var2['shadowColor'] = var8;
            var8 = 0.14;
            if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = 0.08;
case 4:
            var2['shadowOpacity'] = var8;
            var8 = 'rgba(255, 255, 255, 0.14)';
            if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = 'rgba(0, 0, 0, 0.08)';
case 6:
            var2['borderColor'] = var8;
            var2['borderWidth'] = var7;
            var1['joinButton'] = var2;
            var2 = {'width': 'auto', 'alignItems': 'center'};
            var1['joinButtonContent'] = var2;
            var2 = {};
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = var9[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.STATUS_DANGER;
            var2['backgroundColor'] = var7;
            var1['joinButtonLive'] = var2;
            var2 = {};
            var7 = 'uppercase';
            var2['textTransform'] = var7;
            var1['joinButtonLiveText'] = var2;
            var2 = {};
            var7 = var9[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.STATUS_POSITIVE;
            var2['backgroundColor'] = var7;
            var1['joinButtonActive'] = var2;
            var2 = {'marginRight': 2, 'flex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
            var1['joinButtonIconWrapper'] = var2;
            var2 = {};
            var7 = var9[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.WHITE;
            var2['tintColor'] = var7;
            var1['joinButtonIconActive'] = var2;
            var2 = {};
            var7 = var9[var6];
            var7 = var8.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.INTERACTIVE_NORMAL;
            var2['tintColor'] = var7;
            var1['joinButtonIconInactive'] = var2;
            var2 = {'marginTop': null, 'alignSelf': 'center', 'maxWidth': 64};
            var8 = _closure1_slot0;
            var7 = 8;
            var7 = var9[var7];
            var8 = var8.bind(var5)(var7);
            var7 = var8.isAndroid;
            var7 = var7.bind(var8)();
            var4 = 0;
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = -2;
case 8:
            var2['marginTop'] = var4;
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
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function VocalChannelJoinButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var18 = var1.channel;
            var _closure2_slot0 = var18;
            var19 = var1.voiceStates;
            var6 = undefined;
            if(!(var19 === var6)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var19 = new Array(0);
case 10:
            var _closure2_slot1 = var19;
            var9 = var1.noIcon;
            var2 = var1.small;
            if(!(var2 === var6)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = false;
case 12:
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 9;
            var1 = var11[var1];
            var1 = var3.bind(var6)(var1);
            var5 = var1.bind(var6)();
            var1 = 10;
            var1 = var11[var1];
            var1 = var3.bind(var6)(var1);
            var10 = var1.bind(var6)();
            var3 = _closure1_slot11;
            var4 = _closure1_slot0;
            var1 = 11;
            var1 = var11[var1];
            var8 = var4.bind(var6)(var1);
            var1 = var8.isThemeLight;
            var1 = var1.bind(var8)(var10);
            var14 = var3.bind(var6)(var5, var1);
            var1 = 12;
            var1 = var11[var1];
            var3 = var4.bind(var6)(var1);
            var1 = var3.useIsConnectedToVoiceChannel;
            var8 = var1.bind(var3)(var18);
            var13 = 13;
            var1 = var11[var13];
            var10 = var4.bind(var6)(var1);
            var5 = var10.useStateFromStores;
            var1 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var4 = _closure1_slot6;
                var3 = var4.can;
                var1 = _closure1_slot9;
                var2 = var1.CONNECT;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                var1 = !var1;
                return var1;
            };
            var5 = var5.bind(var10)(var3, var1);
            var1 = 14;
            var1 = var11[var1];
            var15 = var4.bind(var6)(var1);
            var10 = var15.useStageParticipantsCount;
            var3 = var18.id;
            var1 = 15;
            var1 = var11[var1];
            var1 = var4.bind(var6)(var1);
            var1 = var1.StageChannelParticipantNamedIndex;
            var1 = var1.AUDIENCE;
            var3 = var10.bind(var15)(var3, var1);
            var1 = var18.isGuildStageVoice;
            var10 = var1.bind(var18)();
            var1 = 16;
            var1 = var11[var1];
            var11 = var4.bind(var6)(var1);
            var4 = var11.useStageHasMedia;
            var1 = var18.id;
            var4 = var4.bind(var11)(var1);
            if(!var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var4 = var10;
case 14:
            var11 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var13];
            var15 = var11.bind(var6)(var1);
            var13 = var15.useStateFromStores;
            var1 = _closure1_slot7;
            var11 = new Array(1);
            var11[0] = var1;
            var1 = function() {
                var3 = _closure1_slot7;
                var2 = var3.hasVideo;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var13.bind(var15)(var11, var1);
            var1 = var19.length;
            var15 = var3 + var1;
            var1 = 0;
            var13 = null;
            var3 = 0;
            if(!(var13 != var15)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var3 = var15;
case 16:
            var17 = _closure1_slot3;
            var16 = var17.useMemo;
            var15 = new Array(1);
            var15[0] = var19;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var5 = _closure2_slot1;
                    var4 = var5.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.voiceState;
                        var1 = var1.selfStream;
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3);
case 18:
                    var1 = var2 != var1;
                    return var1;
                }
            };
            var7 = var16.bind(var17)(var7, var15);
            var17 = var11;
            if(var17) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var17 = var4;
case 20:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 17;
            var4 = var16[var11];
            var20 = var15.bind(var6)(var4);
            var19 = var20.useConnectedUserLimit;
            var4 = {};
            var4['channel'] = var18;
            var4['video'] = var17;
            var4 = var19.bind(var20)(var4);
            var11 = var16[var11];
            var16 = var15.bind(var6)(var11);
            var15 = var16.useConnectedUserLimitFormatted;
            var11 = {};
            var11['channel'] = var18;
            var11['video'] = var17;
            var11['userCount'] = var3;
            var11 = var15.bind(var16)(var11);
            var15 = !var5;
            if(!var15) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var15 = !var8;
case 22:
            if(!var15) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var15 = var13 != var11;
case 24:
            if(!var15) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var15 = var3 > var1;
case 26:
            if(!var15) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var1 = 2;
            var4 = var4 / var1;
            var1 = 1;
            var1 = var4 + var1;
            var15 = var3 >= var1;
case 28:
            var1 = null;
            if(var8) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var5 = _closure1_slot10;
            if(var2) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 20;
            var2 = var4[var2];
            var2 = var3.bind(var6)(var2);
            var3 = var2.Button;
            var2 = {};
            var4 = var11;
            if(var15) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var17 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 19;
            var18 = var20[var16];
            var18 = var17.bind(var6)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var16 = var20[var16];
            var16 = var17.bind(var6)(var16);
            var17 = var16.t;
            if(var7) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var16 = var17.VJlc0d;
            var16 = var18.bind(var19)(var16);
            _fun0002_ip = 38; continue _fun0002;
case 36:
            var17 = var17.dI3q4u;
            var18 = var18.bind(var19)(var17);
            var17 = var18.toUpperCase;
            var16 = var17.bind(var18)();
case 38:
            var4 = var16;
case 34:
            var2['text'] = var4;
            var4 = undefined;
            if(var9) { _fun0002_ip = 39; continue _fun0002 }
case 40:
            if(var8) { _fun0002_ip = 41; continue _fun0002 }
case 42:
            if(var7) { _fun0002_ip = 41; continue _fun0002 }
case 43:
            var9 = var14.joinButtonIconInactive;
            _fun0002_ip = 44; continue _fun0002;
case 41:
            var9 = var14.joinButtonIconActive;
case 44:
            var17 = new Array(2);
            var17[0] = var9;
            var9 = {'marginRight': 3, 'marginLeft': 4294967295};
            var17[1] = var9;
            if(!var7) { _fun0002_ip = 45; continue _fun0002 }
case 46:
            var9 = undefined;
            if(!var15) { _fun0002_ip = 47; continue _fun0002 }
case 45:
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            if(var10) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var10 = 22;
            var10 = var18[var10];
            var10 = var15.bind(var6)(var10);
            var16 = var10.VoiceNormalIcon;
            _fun0002_ip = 50; continue _fun0002;
case 48:
            var10 = 21;
            var10 = var18[var10];
            var10 = var15.bind(var6)(var10);
            var16 = var10.StageIcon;
case 50:
            var15 = _closure1_slot10;
            var10 = {};
            var18 = 'xs';
            var10['size'] = var18;
            var10['style'] = var17;
            var9 = var15.bind(var6)(var16, var10);
case 47:
            var4 = var9;
case 39:
            var2['icon'] = var4;
            var4 = 'sm';
            var2['size'] = var4;
            var4 = 'destructive';
            if(var7) { _fun0002_ip = 51; continue _fun0002 }
case 52:
            var7 = 'tertiary';
            if(!var8) { _fun0002_ip = 53; continue _fun0002 }
case 54:
            var7 = 'active';
case 53:
            var4 = var7;
case 51:
            var2['variant'] = var4;
            var4 = _closure1_slot8;
            var2['onPress'] = var4;
            var4 = 'none';
            var2['pointerEvents'] = var4;
            var4 = false;
            var2['accessible'] = var4;
            var4 = true;
            var2['accessibilityElementsHidden'] = var4;
            var4 = 'no';
            var2['importantForAccessibility'] = var4;
            var2 = var5.bind(var6)(var3, var2);
            _fun0002_ip = 55; continue _fun0002;
case 32:
            var4 = _closure1_slot5;
            var3 = {'accessibilityRole': 'none', 'pointerEvents': 'none', 'onPress': null, 'accessible': false, 'accessibilityElementsHidden': true, 'importantForAccessibility': 'no'};
            var7 = _closure1_slot8;
            var3['onPress'] = var7;
            var7 = var14.joinButton;
            var3['style'] = var7;
            var8 = _closure1_slot4;
            var7 = {};
            var9 = var14.joinButtonContent;
            var7['style'] = var9;
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 18;
            var9 = var15[var9];
            var9 = var10.bind(var6)(var9);
            var10 = var9.Text;
            var9 = {'style': null, 'color': 'interactive-normal', 'variant': 'text-xs/semibold', 'lineClamp': 1};
            var14 = var14.joinButtonText;
            var9['style'] = var14;
            if(!(var13 == var11)) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 19;
            var13 = var16[var12];
            var13 = var15.bind(var6)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var6)(var12);
            var12 = var12.t;
            var12 = var12.VJlc0d;
            var11 = var13.bind(var14)(var12);
case 56:
            var9['children'] = var11;
            var9 = var5.bind(var6)(var10, var9);
            var7['children'] = var9;
            var7 = var5.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 55:
            var1 = var2;
case 30:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/components/VocalChannelJoinButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();