// app/modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var13 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
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
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var10 = 2;
    var4 = var6[var10];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NO_PARTICIPANTS;
    var _closure1_slot6 = var4;
    var9 = 3;
    var4 = var6[var9];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot11 = var8;
    var8 = var4.AnalyticsSections;
    var _closure1_slot12 = var8;
    var4 = var4.ChannelTypes;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CHANGELOG_URL;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot16 = var8;
    var4 = var4.jsxs;
    var _closure1_slot17 = var4;
    var11 = 11;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AVATAR_SIZE_MAP;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AvatarSizes;
    var4 = var4.XSMALL;
    var8 = var8[var4];
    var4 = {};
    var11 = var6[var11];
    var11 = var5.bind(var1)(var11);
    var11 = var11.CutoutDirection;
    var11 = var11.RIGHT;
    var4['direction'] = var11;
    var8 = var8 / var10;
    var8 = var8 + var9;
    var4['radius'] = var8;
    var8 = -6;
    var4['inset'] = var8;
    var _closure1_slot18 = var4;
    var4 = 12;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var12 = 'row';
    var10 = {'flexDirection': 'row', 'gap': 12, 'paddingEnd': 1};
    var4['privateChannelButtonsWrapper'] = var10;
    var10 = {};
    var11 = 13;
    var14 = var6[var11];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
    var10['backgroundColor'] = var14;
    var14 = var6[var11];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var10['borderRadius'] = var14;
    var14 = var6[var11];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_32;
    var10['minHeight'] = var14;
    var14 = var6[var11];
    var14 = var13.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_32;
    var10['minWidth'] = var14;
    var11 = var6[var11];
    var11 = var13.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var10['padding'] = var11;
    var11 = 'center';
    var10['justifyContent'] = var11;
    var10['flexDirection'] = var12;
    var10['alignItems'] = var11;
    var4['button'] = var10;
    var10 = {};
    var11 = 0.6;
    var10['opacity'] = var11;
    var4['disabledButton'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot19 = var4;
    var4 = var7.memo;
    var2 = function PrivateChannelButtons(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var18 = var1.channelId;
            var _closure2_slot0 = var18;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var2 = _closure1_slot19;
            var8 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 14;
            var2 = var2[var9];
            var7 = var3.bind(var4)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var6.bind(var7)(var3, var2);
            var _closure2_slot1 = var7;
            var3 = null;
            var2 = var3 == var7;
            var17 = undefined;
            if(var2) { _fun0001_ip = 124; continue _fun0001 }
 114:
            var2 = var7.getRecipientId;
            var17 = var2.bind(var7)();
 124:
            _closure2_slot2 = var17;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = var10[var9];
            var14 = var6.bind(var4)(var2);
            var13 = var14.useStateFromStores;
            var2 = _closure1_slot10;
            var12 = new Array(1);
            var12[0] = var2;
            var11 = new Array(1);
            var11[0] = var7;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 43; continue _fun0002 }
 16:
                    var4 = _closure1_slot10;
                    var3 = var4.isInChannel;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 43:
                    return var1;
                }
            };
            var13 = var13.bind(var14)(var12, var2, var11);
            var2 = 15;
            var2 = var10[var2];
            var11 = var6.bind(var4)(var2);
            var2 = var11.useInappropriateConversationSafetyToolsWarningForChannel;
            var16 = var2.bind(var11)(var18);
            var2 = var10[var9];
            var14 = var6.bind(var4)(var2);
            var12 = var14.useStateFromStores;
            var2 = _closure1_slot8;
            var11 = new Array(2);
            var11[0] = var2;
            var2 = _closure1_slot9;
            var11[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot1;
                    var5 = null;
                    var1 = var5 == var1;
                    var2 = undefined;
                    if(var1) { _fun0003_ip = 27; continue _fun0003 }
 18:
                    var1 = _closure2_slot1;
                    var2 = var1.type;
 27:
                    var1 = _closure1_slot13;
                    var1 = var1.DM;
                    var1 = var2 === var1;
                    if(!var1) { _fun0003_ip = 55; continue _fun0003 }
 47:
                    var2 = _closure2_slot2;
                    var1 = var5 != var2;
 55:
                    if(!var1) { _fun0003_ip = 123; continue _fun0003 }
 58:
                    var8 = _closure1_slot8;
                    var7 = var8.isBlocked;
                    var2 = _closure2_slot2;
                    var2 = var7.bind(var8)(var2);
                    if(var2) { _fun0003_ip = 120; continue _fun0003 }
 80:
                    var7 = _closure1_slot9;
                    var6 = var7.getUser;
                    var3 = _closure2_slot2;
                    var3 = var6.bind(var7)(var3);
                    var5 = var5 == var3;
                    var4 = undefined;
                    if(var5) { _fun0003_ip = 114; continue _fun0003 }
 108:
                    var4 = var3.isProvisional;
 114:
                    var3 = true;
                    var2 = var3 === var4;
 120:
                    var1 = var2;
 123:
                    return var1;
                }
            };
            var20 = var12.bind(var14)(var11, var2);
            var2 = 16;
            var2 = var10[var2];
            var10 = var6.bind(var4)(var2);
            var6 = var10.useIsCallActiveNullable;
            var11 = var3 == var7;
            var2 = undefined;
            if(var11) { _fun0001_ip = 282; continue _fun0001 }
 277:
            var2 = var7.id;
 282:
            var30 = var6.bind(var10)(var2);
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var10 = var6.bind(var4)(var2);
            var9 = var10.useStateFromStoresObject;
            var2 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = {};
                    var2 = _closure2_slot1;
                    var6 = null;
                    var4 = var6 == var2;
                    var2 = undefined;
                    if(var4) { _fun0004_ip = 34; continue _fun0004 }
 20:
                    var7 = _closure2_slot1;
                    var4 = var7.isMultiUserDM;
                    var2 = var4.bind(var7)();
 34:
                    var4 = true;
                    if(!(var4 !== var2)) { _fun0004_ip = 49; continue _fun0004 }
 40:
                    var2 = _closure1_slot6;
                    _fun0004_ip = 76; continue _fun0004;
 49:
                    var9 = _closure1_slot5;
                    var8 = var9.getParticipants;
                    var7 = _closure2_slot1;
                    var7 = var7.id;
                    var2 = var8.bind(var9)(var7);
 76:
                    var1['callParticipants'] = var2;
                    var2 = _closure2_slot1;
                    var2 = var6 == var2;
                    var5 = undefined;
                    if(var2) { _fun0004_ip = 108; continue _fun0004 }
 94:
                    var6 = _closure2_slot1;
                    var2 = var6.isMultiUserDM;
                    var5 = var2.bind(var6)();
 108:
                    var2 = -1;
                    if(!(var4 === var5)) { _fun0004_ip = 145; continue _fun0004 }
 118:
                    var5 = _closure1_slot5;
                    var4 = var5.getParticipantsVersion;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var2 = var4.bind(var5)(var3);
 145:
                    var1['participantsVersion'] = var2;
                    return var1;
                }
            };
            var2 = var9.bind(var10)(var6, var2);
            var2 = var2.callParticipants;
            _closure2_slot3 = var2;
            var11 = _closure1_slot3;
            var10 = var11.useMemo;
            var9 = new Array(1);
            var9[0] = var2;
            var6 = function() {
                var3 = _closure2_slot3;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot14;
                    var1 = var1.ACTIVITY;
                    var1 = var2 !== var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var26 = var10.bind(var11)(var6, var9);
            var6 = var3 == var7;
            var14 = undefined;
            if(var6) { _fun0001_ip = 390; continue _fun0001 }
 380:
            var6 = var7.isMultiUserDM;
            var14 = var6.bind(var7)();
 390:
            var15 = var14;
            if(!var15) { _fun0001_ip = 407; continue _fun0001 }
 396:
            var6 = var2.length;
            var2 = 0;
            var15 = var6 > var2;
 407:
            _closure2_slot4 = var15;
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 17;
            var2 = var10[var2];
            var6 = var9.bind(var4)(var2);
            var2 = {};
            var11 = {};
            var12 = 'channel';
            var11['type'] = var12;
            var11['channel'] = var7;
            var2['context'] = var11;
            var2 = var6.bind(var4)(var2);
            var6 = var2.application;
            _closure2_slot5 = var6;
            var2 = var2.isAppDM;
            var19 = _closure1_slot3;
            var21 = var19.useCallback;
            var12 = new Array(1);
            var12[0] = var7;
            var11 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = arguments[0];
                    var1 = undefined;
                    if(!(var4 === var1)) { _fun0005_ip = 11; continue _fun0005 }
 9:
                    var4 = false;
 11:
                    var5 = _closure2_slot1;
                    var3 = null;
                    var3 = var3 != var5;
                    if(!var3) { _fun0005_ip = 41; continue _fun0005 }
 27:
                    var6 = _closure2_slot1;
                    var5 = var6.isPrivate;
                    var3 = var5.bind(var6)();
 41:
                    if(!var3) { _fun0005_ip = 86; continue _fun0005 }
 44:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 18;
                    var3 = var6[var3];
                    var3 = var5.bind(var1)(var3);
                    var2 = _closure2_slot1;
                    var3 = var3.bind(var1)(var2, var4);
                    var2 = var3.onPress;
                    var2 = var2.bind(var3)();
 86:
                    return var1;
                }
            };
            var11 = var21.bind(var19)(var11, var12);
            _closure2_slot6 = var11;
            var22 = var19.useCallback;
            var21 = new Array(1);
            var21[0] = var11;
            var12 = function() {
                var3 = _closure2_slot6;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = var22.bind(var19)(var12, var21);
            _closure2_slot7 = var12;
            var21 = var19.useCallback;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function() {
                var3 = _closure2_slot6;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var22 = var21.bind(var19)(var11, var12);
            var12 = var19.useCallback;
            var11 = new Array(3);
            var11[0] = var17;
            var11[1] = var7;
            var11[2] = var6;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0006_ip = 24; continue _fun0006 }
 16:
                    var3 = _closure2_slot1;
                    var2 = var4 != var3;
 24:
                    if(!var2) { _fun0006_ip = 35; continue _fun0006 }
 27:
                    var3 = _closure2_slot5;
                    var2 = var4 != var3;
 35:
                    if(!var2) { _fun0006_ip = 223; continue _fun0006 }
 41:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 19;
                    var4 = var2[var4];
                    var7 = undefined;
                    var9 = var5.bind(var7)(var4);
                    var8 = var9.trackWithMetadata;
                    var4 = _closure1_slot11;
                    var6 = var4.SETTINGS_PANE_VIEWED;
                    var4 = {'settings_type': 'user', 'destination_pane': null, 'source_page': 'app_dm_settings'};
                    var10 = _closure1_slot12;
                    var10 = var10.SETTINGS_APP_DMS_MENU;
                    var4['destination_pane'] = var10;
                    var10 = _closure2_slot5;
                    var10 = var10.id;
                    var4['application_id'] = var10;
                    var4 = var8.bind(var9)(var6, var4);
                    var4 = 20;
                    var4 = var2[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.openLazy;
                    var6 = _closure1_slot0;
                    var3 = 22;
                    var3 = var2[var3];
                    var6 = var6.bind(var7)(var3);
                    var3 = 21;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var6.bind(var7)(var3, var2);
                    var2 = {};
                    var6 = _closure2_slot2;
                    var2['userId'] = var6;
                    var6 = _closure2_slot1;
                    var2['channel'] = var6;
                    var1 = _closure2_slot5;
                    var2['application'] = var1;
                    var1 = 'AppDMOptionsBottomSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
 223:
                    var1 = undefined;
                    return var1;
                }
            };
            var12 = var12.bind(var19)(var7, var11);
            var7 = 23;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.bind(var4)(var18);
            if(var7) { _fun0001_ip = 1662; continue _fun0001 }
 610:
            if(var2) { _fun0001_ip = 1470; continue _fun0001 }
 616:
            var9 = _closure1_slot17;
            var7 = _closure1_slot4;
            var2 = {};
            var10 = var8.privateChannelButtonsWrapper;
            var2['style'] = var10;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var23 = 26;
            var10 = var10[var23];
            var10 = var11.bind(var4)(var10);
            var11 = var10.PressableOpacity;
            var10 = {};
            var24 = _closure1_slot0;
            var19 = _closure1_slot2;
            var21 = 27;
            var25 = var19[var21];
            var25 = var24.bind(var4)(var25);
            var27 = var25.intl;
            var25 = var27.string;
            var19 = var19[var21];
            var19 = var24.bind(var4)(var19);
            var24 = var19.t;
            if(var15) { _fun0001_ip = 740; continue _fun0001 }
 711:
            if(var13) { _fun0001_ip = 727; continue _fun0001 }
 714:
            var19 = var24.focH1t;
            var19 = var25.bind(var27)(var19);
            _fun0001_ip = 738; continue _fun0001;
 727:
            var28 = var24.4ry6ys;
            var19 = var25.bind(var27)(var28);
 738:
            _fun0001_ip = 751; continue _fun0001;
 740:
            var24 = var24.0D/6R0;
            var19 = var25.bind(var27)(var24);
 751:
            var10['accessibilityLabel'] = var19;
            var19 = 'button';
            var10['accessibilityRole'] = var19;
            var25 = var8.button;
            var24 = new Array(3);
            var24[0] = var25;
            var25 = {};
            var27 = undefined;
            if(!var15) { _fun0001_ip = 787; continue _fun0001 }
 784:
            var27 = 1;
 787:
            var25['borderWidth'] = var27;
            var27 = undefined;
            if(!var15) { _fun0001_ip = 842; continue _fun0001 }
 797:
            var29 = _closure1_slot1;
            var31 = _closure1_slot2;
            var28 = 13;
            var28 = var31[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.unsafe_rawColors;
            if(var13) { _fun0001_ip = 833; continue _fun0001 }
 825:
            var28 = var29.BRAND_400;
            _fun0001_ip = 839; continue _fun0001;
 833:
            var28 = var29.GREEN_360;
 839:
            var27 = var28;
 842:
            var25['borderColor'] = var27;
            var24[1] = var25;
            var25 = null;
            if(!var20) { _fun0001_ip = 862; continue _fun0001 }
 856:
            var25 = var8.disabledButton;
 862:
            var24[2] = var25;
            var10['style'] = var24;
            var24 = function onPress() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0007_ip = 20; continue _fun0007 }
 10:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0007_ip = 32; continue _fun0007 }
 20:
                    var3 = _closure2_slot7;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0007_ip = 72; continue _fun0007;
 32:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 30;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.openChannelCallModal;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
 72:
                    var1 = undefined;
                    return var1;
                }
            };
            var10['onPress'] = var24;
            var10['disabled'] = var20;
            var27 = _closure1_slot16;
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            if(var15) { _fun0001_ip = 1047; continue _fun0001 }
 901:
            if(var13) { _fun0001_ip = 980; continue _fun0001 }
 904:
            var15 = 33;
            var15 = var28[var15];
            var15 = var25.bind(var4)(var15);
            var24 = var15.PhoneCallIcon;
            var15 = {};
            var29 = 'sm';
            var15['size'] = var29;
            var29 = undefined;
            if(!var30) { _fun0001_ip = 968; continue _fun0001 }
 937:
            var31 = _closure1_slot1;
            var32 = _closure1_slot2;
            var30 = 13;
            var30 = var32[var30];
            var30 = var31.bind(var4)(var30);
            var30 = var30.unsafe_rawColors;
            var29 = var30.GREEN_360;
 968:
            var15['color'] = var29;
            var24 = var27.bind(var4)(var24, var15);
            _fun0001_ip = 1045; continue _fun0001;
 980:
            var15 = 32;
            var15 = var28[var15];
            var15 = var25.bind(var4)(var15);
            var29 = var15.PhoneHangUpIcon;
            var15 = {};
            var30 = 'sm';
            var15['size'] = var30;
            var31 = _closure1_slot1;
            var30 = 13;
            var30 = var28[var30];
            var30 = var31.bind(var4)(var30);
            var30 = var30.unsafe_rawColors;
            var30 = var30.RED_400;
            var15['color'] = var30;
            var24 = var27.bind(var4)(var29, var15);
 1045:
            _fun0001_ip = 1127; continue _fun0001;
 1047:
            var15 = 31;
            var15 = var28[var15];
            var15 = var25.bind(var4)(var15);
            var25 = var15.VoiceNormalIcon;
            var15 = {};
            var28 = 'sm';
            var15['size'] = var28;
            var29 = _closure1_slot1;
            var30 = _closure1_slot2;
            var28 = 13;
            var28 = var30[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.unsafe_rawColors;
            if(var13) { _fun0001_ip = 1111; continue _fun0001 }
 1103:
            var28 = var29.BRAND_400;
            _fun0001_ip = 1117; continue _fun0001;
 1111:
            var28 = var29.GREEN_360;
 1117:
            var15['color'] = var28;
            var24 = var27.bind(var4)(var25, var15);
 1127:
            var15 = new Array(2);
            var15[0] = var24;
            var25 = var26.map;
            var24 = function(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var9 = arg2;
                    var3 = var1.type;
                    var2 = _closure1_slot14;
                    var2 = var2.STREAM;
                    if(!(var2 !== var3)) { _fun0008_ip = 60; continue _fun0008 }
 28:
                    var2 = _closure1_slot14;
                    var2 = var2.HIDDEN_STREAM;
                    if(!(var2 !== var3)) { _fun0008_ip = 60; continue _fun0008 }
 42:
                    var2 = _closure1_slot14;
                    var2 = var2.USER;
                    if(!(var2 !== var3)) { _fun0008_ip = 60; continue _fun0008 }
 56:
                    var2 = null;
                    return var2;
 60:
                    var5 = _closure1_slot16;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var10 = 11;
                    var2 = var2[var10];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = {};
                    var8 = -6;
                    var11 = 0;
                    if(!(var11 === var9)) { _fun0008_ip = 133; continue _fun0008 }
 102:
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var11 = 13;
                    var11 = var13[var11];
                    var11 = var12.bind(var4)(var11);
                    var11 = var11.spacing;
                    var8 = var11.PX_4;
 133:
                    var6['marginLeft'] = var8;
                    var2['style'] = var6;
                    var6 = var1.user;
                    var2['user'] = var6;
                    var2['guildId'] = var4;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var10];
                    var6 = var8.bind(var4)(var6);
                    var6 = var6.AvatarSizes;
                    var6 = var6.XSMALL;
                    var2['size'] = var6;
                    var6 = arg3;
                    var8 = var6.length;
                    var6 = 1;
                    var8 = var8 - var6;
                    var6 = undefined;
                    if(!(var9 !== var8)) { _fun0008_ip = 213; continue _fun0008 }
 209:
                    var6 = _closure1_slot18;
 213:
                    var2['cutout'] = var6;
                    var1 = var1.id;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var24 = var25.bind(var26)(var24);
            var15[1] = var24;
            var10['children'] = var15;
            var11 = var9.bind(var4)(var11, var10);
            var10 = new Array(3);
            var10[0] = var11;
            var11 = null;
            if(var14) { _fun0001_ip = 1366; continue _fun0001 }
 1180:
            var11 = null;
            if(var13) { _fun0001_ip = 1366; continue _fun0001 }
 1188:
            var15 = _closure1_slot16;
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var23];
            var13 = var14.bind(var4)(var13);
            var14 = var13.PressableOpacity;
            var13 = {};
            var24 = var8.button;
            var23 = new Array(2);
            var23[0] = var24;
            var24 = null;
            if(!var20) { _fun0001_ip = 1242; continue _fun0001 }
 1236:
            var24 = var8.disabledButton;
 1242:
            var23[1] = var24;
            var13['style'] = var23;
            var13['onPress'] = var22;
            var13['disabled'] = var20;
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var23 = var22[var21];
            var23 = var20.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var21 = var22[var21];
            var21 = var20.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.oCqlGB;
            var21 = var23.bind(var24)(var21);
            var13['accessibilityLabel'] = var21;
            var13['accessibilityRole'] = var19;
            var21 = _closure1_slot16;
            var19 = 34;
            var19 = var22[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.VideoIcon;
            var19 = {};
            var22 = 'sm';
            var19['size'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var13['children'] = var19;
            var11 = var15.bind(var4)(var14, var13);
 1366:
            var10[1] = var11;
            var11 = var3 != var16;
            if(!var11) { _fun0001_ip = 1381; continue _fun0001 }
 1377:
            var11 = var3 != var17;
 1381:
            if(!var11) { _fun0001_ip = 1451; continue _fun0001 }
 1384:
            var15 = _closure1_slot16;
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 35;
            var13 = var19[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.SafetyToolsButton;
            var13 = {};
            var13['channelId'] = var18;
            var13['recipientId'] = var17;
            var17 = var16.id;
            var13['warningId'] = var17;
            var16 = var16.type;
            var13['warningType'] = var16;
            var11 = var15.bind(var4)(var14, var13);
 1451:
            var10[2] = var11;
            var2['children'] = var10;
            var2 = var9.bind(var4)(var7, var2);
            _fun0001_ip = 1660; continue _fun0001;
 1470:
            var6 = var3 == var6;
            var3 = null;
            if(var6) { _fun0001_ip = 1657; continue _fun0001 }
 1482:
            var9 = _closure1_slot16;
            var7 = _closure1_slot4;
            var6 = {};
            var10 = var8.privateChannelButtonsWrapper;
            var6['style'] = var10;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 26;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var11 = var10.PressableOpacity;
            var10 = {};
            var15 = var8.button;
            var10['style'] = var15;
            var10['onPress'] = var12;
            var12 = 27;
            var15 = var14[var12];
            var15 = var13.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.oCqlGB;
            var12 = var15.bind(var16)(var12);
            var10['accessibilityLabel'] = var12;
            var12 = 'button';
            var10['accessibilityRole'] = var12;
            var12 = 29;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.SettingsIcon;
            var12 = {};
            var14 = 'sm';
            var12['size'] = var14;
            var12 = var9.bind(var4)(var13, var12);
            var10['children'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var6['children'] = var10;
            var3 = var9.bind(var4)(var7, var6);
 1657:
            var2 = var3;
 1660:
            return var2;
 1662:
            var3 = _closure1_slot16;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 26;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var8 = var8.button;
            var1['style'] = var8;
            var5 = function onPress() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 24;
                var3 = var5[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var3 = var7.openURL;
                var6 = _closure1_slot15;
                var3 = var3.bind(var7)(var6);
                var3 = 25;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot11;
                var3 = var2.CHANGE_LOG_CTA_CLICKED;
                var2 = {};
                var7 = 'channel_header';
                var2['cta_type'] = var7;
                var2['target'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1['onPress'] = var5;
            var5 = 27;
            var8 = var7[var5];
            var8 = var6.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.+KSnWV;
            var5 = var8.bind(var9)(var5);
            var1['accessibilityLabel'] = var5;
            var5 = 28;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.WindowLaunchIcon;
            var5 = {};
            var7 = 'sm';
            var5['size'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 36;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();