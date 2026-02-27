// app/modules/voice_panel/native/shared/FormComponents.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function VoiceBadges(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var17 = var1.muteDeafenIconState;
            var14 = var1.videoIconState;
            var1 = _closure1_slot7;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var3 = _closure1_slot6;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 5;
            var1 = var1[var7];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = var13.voiceBadgesContainer;
            var1['style'] = var5;
            var6 = null;
            var5 = var6 != var17;
            var8 = null;
            if(!var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = _closure1_slot5;
            var9 = _closure1_slot1;
            var19 = _closure1_slot2;
            var5 = var19[var7];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var12 = var13.iconWrapper;
            var5['style'] = var12;
            var16 = _closure1_slot5;
            var18 = _closure1_slot0;
            var12 = 7;
            var12 = var19[var12];
            var12 = var18.bind(var4)(var12);
            var15 = var12.MuteDeafenIcon;
            var12 = {};
            var12['state'] = var17;
            var17 = 8;
            var17 = var19[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.IconSizes;
            var17 = var17.SMALL;
            var12['size'] = var17;
            var17 = var13.icon;
            var12['style'] = var17;
            var12 = var16.bind(var4)(var15, var12);
            var5['children'] = var12;
            var8 = var11.bind(var4)(var9, var5);
case 2:
            var5 = new Array(2);
            var5[0] = var8;
            var8 = var6 != var14;
            var6 = null;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = _closure1_slot5;
            var8 = _closure1_slot1;
            var16 = _closure1_slot2;
            var7 = var16[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var11 = var13.iconWrapper;
            var7['style'] = var11;
            var12 = _closure1_slot5;
            var15 = _closure1_slot0;
            var10 = 7;
            var10 = var16[var10];
            var10 = var15.bind(var4)(var10);
            var11 = var10.VideoIcon;
            var10 = {};
            var10['state'] = var14;
            var14 = 8;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.IconSizes;
            var14 = var14.SMALL;
            var10['size'] = var14;
            var13 = var13.icon;
            var10['style'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 4:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 16;
    var9['marginHorizontal'] = var10;
    var4['container'] = var9;
    var9 = {};
    var10 = 'row';
    var9['flexDirection'] = var10;
    var4['voiceBadgesContainer'] = var9;
    var9 = {'marginLeft': 8, 'padding': 6};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9['borderRadius'] = var12;
    var4['iconWrapper'] = var9;
    var9 = {'width': 16, 'height': 16};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_DEFAULT;
    var9['tintColor'] = var10;
    var4['icon'] = var9;
    var9 = {};
    var10 = 0.5;
    var9['opacity'] = var10;
    var4['notConnectedAvatar'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var4['memberRow'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 27;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/shared/FormComponents.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function VoicePanelFormSection(arg1) {
        var3 = arg1;
        var7 = var3.style;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2['style'] = var1;
        var13 = {};
        var12 = var3;
        var11 = var2;
        var12 = copyDataProperties(var13, var12, var11);
        var1 = _closure1_slot7;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var3 = _closure1_slot5;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 5;
        var1 = var9[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var10 = var6.container;
        var6 = new Array(2);
        var6[0] = var10;
        var6[1] = var7;
        var1['style'] = var6;
        var7 = _closure1_slot5;
        var6 = _closure1_slot0;
        var5 = 6;
        var5 = var9[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.TableRowGroup;
        var5 = {};
        var13 = var5;
        var8 = copyDataProperties(var13, var12);
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['VoicePanelFormSection'] = var4;
    var2 = function MemberRowItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var17 = var1.user;
            var _closure2_slot0 = var17;
            var23 = var1.channelId;
            var _closure2_slot1 = var23;
            var2 = var1.selfStream;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = false;
case 6:
            var _closure2_slot2 = var2;
            var16 = var1.nick;
            var26 = var1.guildId;
            var19 = var1.notConnected;
            if(!(var19 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var19 = false;
case 8:
            var6 = var1.showRing;
            var14 = var1.showSecureFramesUI;
            if(!(var14 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var14 = false;
case 10:
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var1 = _closure1_slot7;
            var13 = var1.bind(var4)();
            var20 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 9;
            var1 = var12[var1];
            var1 = var20.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var3 = var1.analyticsLocations;
            _closure2_slot3 = var3;
            var7 = _closure1_slot0;
            var1 = 10;
            var5 = var12[var1];
            var11 = var7.bind(var4)(var5);
            var8 = var11.useMuteDeafenIconState;
            var5 = var17.id;
            var18 = var8.bind(var11)(var5, var26);
            var5 = var12[var1];
            var11 = var7.bind(var4)(var5);
            var8 = var11.useVideoIconState;
            var5 = var17.id;
            var15 = var8.bind(var11)(var5, var26);
            var24 = var17.id;
            _closure2_slot4 = var24;
            var5 = 11;
            var5 = var12[var5];
            var11 = var7.bind(var4)(var5);
            var8 = var11.useIsUserSecureFramesVerified;
            var5 = {};
            var5['userId'] = var24;
            var5['channelId'] = var23;
            var11 = var8.bind(var11)(var5);
            var5 = 12;
            var5 = var12[var5];
            var21 = var7.bind(var4)(var5);
            var8 = var21.useCanRing;
            var5 = 'MemberRowItem';
            var5 = var8.bind(var21)(var17, var5);
            var8 = 13;
            var8 = var12[var8];
            var20 = var20.bind(var4)(var8);
            var8 = {};
            var21 = var17.id;
            var8['userId'] = var21;
            var8['guildId'] = var26;
            var22 = var20.bind(var4)(var8);
            var8 = 14;
            var8 = var12[var8];
            var21 = var7.bind(var4)(var8);
            var20 = var21.useDisplayNameStylesFont;
            var8 = {};
            var8['displayNameStyles'] = var22;
            var20 = var20.bind(var21)(var8);
            var8 = _closure1_slot3;
            var22 = var8.useCallback;
            var21 = new Array(3);
            var21[0] = var24;
            var21[1] = var23;
            var21[2] = var3;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot4;
                var2['userId'] = var5;
                var5 = _closure2_slot1;
                var2['channelId'] = var5;
                var5 = true;
                var2['isVoiceContext'] = var5;
                var4 = _closure2_slot3;
                var2['sourceAnalyticsLocations'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var22 = var22.bind(var8)(var3, var21);
            var3 = 16;
            var3 = var12[var3];
            var21 = var7.bind(var4)(var3);
            var12 = var21.useStateFromStores;
            var3 = _closure1_slot4;
            var7 = new Array(1);
            var7[0] = var3;
            var3 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 17;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getStreamerActivityByUserId;
                var2 = _closure2_slot4;
                var1 = _closure1_slot4;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var12 = var12.bind(var21)(var7, var3);
            _closure2_slot5 = var12;
            var7 = var8.useMemo;
            var3 = new Array(2);
            var3[0] = var12;
            var3[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var13 = null;
                    var1 = null;
                    if(!var2) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var2 = _closure2_slot5;
                    if(!(var13 == var2)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 19;
                    var3 = var7[var2];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2.eXan7B;
                    var2 = var3.bind(var4)(var2);
                    _fun0003_ip = 16; continue _fun0003;
case 14:
                    var6 = _closure1_slot5;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 18;
                    var3 = var11[var3];
                    var5 = undefined;
                    var3 = var8.bind(var5)(var3);
                    var4 = var3.Text;
                    var3 = {'variant': 'text-xs/medium', 'color': 'text-muted', 'lineClamp': 1};
                    var7 = 19;
                    var9 = var11[var7];
                    var9 = var8.bind(var5)(var9);
                    var10 = var9.intl;
                    var9 = var10.format;
                    var7 = var11[var7];
                    var7 = var8.bind(var5)(var7);
                    var7 = var7.t;
                    var8 = var7.0wJXSh;
                    var7 = {};
                    var11 = _closure2_slot5;
                    var11 = var11.details;
                    if(!(var13 != var11)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var11 = _closure2_slot5;
                    var13 = var11.details;
                    var11 = '';
                    if(!(var11 === var13)) { _fun0003_ip = 19; continue _fun0003 }
case 17:
                    var11 = _closure2_slot5;
                    var11 = var11.name;
                    _fun0003_ip = 20; continue _fun0003;
case 19:
                    var12 = _closure2_slot5;
                    var11 = var12.details;
case 20:
                    var7['name'] = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var3['children'] = var7;
                    var2 = var6.bind(var5)(var4, var3);
case 16:
                    var1 = var2;
case 12:
                    return var1;
                }
            };
            var7 = var7.bind(var8)(var2, var3);
            var12 = null;
            var21 = var16;
            if(!(var12 == var16)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 20;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getName;
            var21 = var2.bind(var3)(var17);
case 21:
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var1 = var25[var1];
            var2 = var24.bind(var4)(var1);
            var1 = var2.getMuteDeafenA11yHint;
            var8 = var1.bind(var2)(var18);
            var3 = _closure1_slot5;
            var1 = 21;
            var1 = var25[var1];
            var1 = var24.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var1['onPress'] = var22;
            var1['accessibilityLabel'] = var21;
            var1['accessibilityHint'] = var8;
            var22 = _closure1_slot5;
            var21 = _closure1_slot1;
            var23 = 22;
            var8 = var25[var23];
            var21 = var21.bind(var4)(var8);
            var8 = {};
            var8['user'] = var17;
            var8['guildId'] = var26;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var23 = var23.AvatarSizes;
            var23 = var23.REFRESH_MEDIUM_32;
            var8['size'] = var23;
            var23 = undefined;
            if(!var19) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var23 = var13.notConnectedAvatar;
case 23:
            var8['style'] = var23;
            var8 = var22.bind(var4)(var21, var8);
            var1['icon'] = var8;
            var1['subLabel'] = var7;
            if(!var6) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            if(var5) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            if(!(var12 == var18)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var6 = var12 != var15;
            var5 = undefined;
            if(!var6) { _fun0002_ip = 30; continue _fun0002 }
case 28:
            var8 = _closure1_slot5;
            var7 = _closure1_slot8;
            var6 = {};
            var6['muteDeafenIconState'] = var18;
            var6['videoIconState'] = var15;
            var5 = var8.bind(var4)(var7, var6);
case 30:
            _fun0002_ip = 31; continue _fun0002;
case 27:
            var8 = _closure1_slot5;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var6 = 23;
            var6 = var22[var6];
            var6 = var21.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {'size': 'sm', 'variant': 'secondary'};
            var9 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.ring;
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = 'voice_panel_floating_cta';
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var6['onPress'] = var9;
            var9 = 19;
            var15 = var22[var9];
            var15 = var21.bind(var4)(var15);
            var18 = var15.intl;
            var15 = var18.string;
            var9 = var22[var9];
            var9 = var21.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.bHa9kN;
            var9 = var15.bind(var18)(var9);
            var6['text'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 31:
            var1['trailing'] = var5;
            if(!(var12 == var16)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 20;
            var5 = var7[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.getName;
            var16 = var5.bind(var6)(var17);
case 32:
            var7 = _closure1_slot6;
            var6 = _closure1_slot1;
            var18 = _closure1_slot2;
            var5 = 5;
            var5 = var18[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var8 = var13.memberRow;
            var5['style'] = var8;
            var15 = _closure1_slot5;
            var9 = _closure1_slot0;
            var8 = 18;
            var8 = var18[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {};
            var18 = 'text-md/semibold';
            var8['variant'] = var18;
            var18 = 'text-default';
            if(!var19) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var18 = 'text-muted';
case 34:
            var8['color'] = var18;
            var18 = var12 != var20;
            if(!var18) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var19 = {};
            var19['fontFamily'] = var20;
            var18 = var19;
case 36:
            var8['style'] = var18;
            var8['children'] = var16;
            var9 = var15.bind(var4)(var9, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var16 = _closure1_slot5;
            var15 = _closure1_slot1;
            var18 = _closure1_slot2;
            var9 = 25;
            var9 = var18[var9];
            var15 = var15.bind(var4)(var9);
            var9 = {};
            var17 = var17.id;
            var9['userId'] = var17;
            var9 = var16.bind(var4)(var15, var9);
            var8[1] = var9;
            var9 = null;
            if(!var14) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var9 = null;
            if(!var11) { _fun0002_ip = 38; continue _fun0002 }
case 40:
            var12 = _closure1_slot5;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 26;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.ShieldLockIcon;
            var10 = {};
            var14 = 'xs';
            var10['size'] = var14;
            var13 = var13.icon;
            var10['style'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 38:
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['label'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['MemberRowItem'] = var2;
    return var1;
})();