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
 0:
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
            if(!var8) { _fun0001_ip = 178; continue _fun0001 }
 176:
            var4 = 0;
 178:
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
            if(!var9) { _fun0001_ip = 262; continue _fun0001 }
 252:
            var8 = 0.08;
 262:
            var2['shadowOpacity'] = var8;
            var8 = 'rgba(255, 255, 255, 0.14)';
            if(!var9) { _fun0001_ip = 282; continue _fun0001 }
 276:
            var8 = 'rgba(0, 0, 0, 0.08)';
 282:
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
            if(!var7) { _fun0001_ip = 535; continue _fun0001 }
 529:
            var4 = -2;
 535:
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
 0:
            var1 = arg1;
            var18 = var1.channel;
            var _closure2_slot0 = var18;
            var19 = var1.voiceStates;
            var6 = undefined;
            if(!(var19 === var6)) { _fun0002_ip = 30; continue _fun0002 }
 26:
            var19 = new Array(0);
 30:
            var _closure2_slot1 = var19;
            var9 = var1.noIcon;
            var2 = var1.small;
            if(!(var2 === var6)) { _fun0002_ip = 54; continue _fun0002 }
 52:
            var2 = false;
 54:
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
            if(!var4) { _fun0002_ip = 296; continue _fun0002 }
 293:
            var4 = var10;
 296:
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
            if(!(var13 != var15)) { _fun0002_ip = 365; continue _fun0002 }
 362:
            var3 = var15;
 365:
            var17 = _closure1_slot3;
            var16 = var17.useMemo;
            var15 = new Array(1);
            var15[0] = var19;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0003_ip = 42; continue _fun0003 }
 18:
                    var5 = _closure2_slot1;
                    var4 = var5.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.voiceState;
                        var1 = var1.selfStream;
                        return var1;
                    };
                    var1 = var4.bind(var5)(var3);
 42:
                    var1 = var2 != var1;
                    return var1;
                }
            };
            var7 = var16.bind(var17)(var7, var15);
            var17 = var11;
            if(var17) { _fun0002_ip = 404; continue _fun0002 }
 401:
            var17 = var4;
 404:
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
            if(!var15) { _fun0002_ip = 491; continue _fun0002 }
 488:
            var15 = !var8;
 491:
            if(!var15) { _fun0002_ip = 498; continue _fun0002 }
 494:
            var15 = var13 != var11;
 498:
            if(!var15) { _fun0002_ip = 505; continue _fun0002 }
 501:
            var15 = var3 > var1;
 505:
            if(!var15) { _fun0002_ip = 526; continue _fun0002 }
 508:
            var1 = 2;
            var4 = var4 / var1;
            var1 = 1;
            var1 = var4 + var1;
            var15 = var3 >= var1;
 526:
            var1 = null;
            if(var8) { _fun0002_ip = 1093; continue _fun0002 }
 534:
            var5 = _closure1_slot10;
            if(var2) { _fun0002_ip = 896; continue _fun0002 }
 544:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 20;
            var2 = var4[var2];
            var2 = var3.bind(var6)(var2);
            var3 = var2.Button;
            var2 = {};
            var4 = var11;
            if(var15) { _fun0002_ip = 662; continue _fun0002 }
 578:
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
            if(var7) { _fun0002_ip = 638; continue _fun0002 }
 625:
            var16 = var17.VJlc0d;
            var16 = var18.bind(var19)(var16);
            _fun0002_ip = 659; continue _fun0002;
 638:
            var17 = var17.dI3q4u;
            var18 = var18.bind(var19)(var17);
            var17 = var18.toUpperCase;
            var16 = var17.bind(var18)();
 659:
            var4 = var16;
 662:
            var2['text'] = var4;
            var4 = undefined;
            if(var9) { _fun0002_ip = 804; continue _fun0002 }
 674:
            if(var8) { _fun0002_ip = 688; continue _fun0002 }
 677:
            if(var7) { _fun0002_ip = 688; continue _fun0002 }
 680:
            var9 = var14.joinButtonIconInactive;
            _fun0002_ip = 694; continue _fun0002;
 688:
            var9 = var14.joinButtonIconActive;
 694:
            var17 = new Array(2);
            var17[0] = var9;
            var9 = {'marginRight': 3, 'marginLeft': 4294967295};
            var17[1] = var9;
            if(!var7) { _fun0002_ip = 728; continue _fun0002 }
 723:
            var9 = undefined;
            if(!var15) { _fun0002_ip = 801; continue _fun0002 }
 728:
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            if(var10) { _fun0002_ip = 759; continue _fun0002 }
 739:
            var10 = 22;
            var10 = var18[var10];
            var10 = var15.bind(var6)(var10);
            var16 = var10.VoiceNormalIcon;
            _fun0002_ip = 777; continue _fun0002;
 759:
            var10 = 21;
            var10 = var18[var10];
            var10 = var15.bind(var6)(var10);
            var16 = var10.StageIcon;
 777:
            var15 = _closure1_slot10;
            var10 = {};
            var18 = 'xs';
            var10['size'] = var18;
            var10['style'] = var17;
            var9 = var15.bind(var6)(var16, var10);
 801:
            var4 = var9;
 804:
            var2['icon'] = var4;
            var4 = 'sm';
            var2['size'] = var4;
            var4 = 'destructive';
            if(var7) { _fun0002_ip = 841; continue _fun0002 }
 825:
            var7 = 'tertiary';
            if(!var8) { _fun0002_ip = 838; continue _fun0002 }
 834:
            var7 = 'active';
 838:
            var4 = var7;
 841:
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
            _fun0002_ip = 1090; continue _fun0002;
 896:
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
            if(!(var13 == var11)) { _fun0002_ip = 1060; continue _fun0002 }
 1005:
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
 1060:
            var9['children'] = var11;
            var9 = var5.bind(var6)(var10, var9);
            var7['children'] = var9;
            var7 = var5.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 1090:
            var1 = var2;
 1093:
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