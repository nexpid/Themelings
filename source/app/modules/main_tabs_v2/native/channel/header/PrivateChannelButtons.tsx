// app/modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
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
    var4 = var4.setIsChannelDetailsSearchActive;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot12 = var8;
    var8 = var4.AnalyticsSections;
    var _closure1_slot13 = var8;
    var4 = var4.ChannelTypes;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CHANGELOG_URL;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot17 = var8;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var11 = 12;
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
    var _closure1_slot19 = var4;
    var4 = 13;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var12 = 'row';
    var10 = {'flexDirection': 'row', 'gap': 12, 'paddingEnd': 1};
    var4['privateChannelButtonsWrapper'] = var10;
    var10 = {};
    var11 = 14;
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
    var _closure1_slot20 = var4;
    var4 = var7.memo;
    var2 = function PrivateChannelButtons(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.channelId;
            var _closure2_slot0 = var9;
            var12 = var1.screenIndex;
            var _closure2_slot1 = var12;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var2 = _closure1_slot20;
            var8 = var2.bind(var4)();
            var _closure2_slot2 = var8;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var13 = 15;
            var2 = var2[var13];
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
            var10 = var6.bind(var7)(var3, var2);
            var _closure2_slot3 = var10;
            var3 = null;
            var2 = var3 == var10;
            var7 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var10.getRecipientId;
            var7 = var2.bind(var10)();
case 2:
            _closure2_slot4 = var7;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = var11[var13];
            var17 = var6.bind(var4)(var2);
            var16 = var17.useStateFromStores;
            var2 = _closure1_slot10;
            var15 = new Array(1);
            var15[0] = var2;
            var14 = new Array(1);
            var14[0] = var10;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure1_slot10;
                    var3 = var4.isInChannel;
                    var2 = _closure2_slot3;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 4:
                    return var1;
                }
            };
            var16 = var16.bind(var17)(var15, var2, var14);
            var2 = 16;
            var2 = var11[var2];
            var6 = var6.bind(var4)(var2);
            var2 = var6.useInappropriateConversationSafetyToolsWarningForChannel;
            var19 = var2.bind(var6)(var9);
            _closure2_slot5 = var19;
            var21 = var3 != var19;
            if(!var21) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var21 = var3 != var7;
case 6:
            _closure2_slot6 = var21;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 17;
            var2 = var14[var2];
            var17 = var11.bind(var4)(var2);
            var6 = var17.useIsDMSearchMobileEntrypointsEnabled;
            var2 = {};
            var15 = 'PrivateChannelButtons';
            var2['location'] = var15;
            var2 = var6.bind(var17)(var2);
            var6 = 18;
            var6 = var14[var6];
            var14 = var11.bind(var4)(var6);
            var11 = var14.useIsDMHeaderEntrypointEnabled;
            var6 = {};
            var6['location'] = var15;
            var11 = var11.bind(var14)(var6);
            if(var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var11 = var2;
case 8:
            _closure2_slot7 = var11;
            var6 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = var14[var13];
            var18 = var6.bind(var4)(var2);
            var17 = var18.useStateFromStores;
            var2 = _closure1_slot8;
            var15 = new Array(2);
            var15[0] = var2;
            var2 = _closure1_slot9;
            var15[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot3;
                    var5 = null;
                    var1 = var5 == var1;
                    var2 = undefined;
                    if(var1) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = _closure2_slot3;
                    var2 = var1.type;
case 10:
                    var1 = _closure1_slot14;
                    var1 = var1.DM;
                    var1 = var2 === var1;
                    if(!var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var2 = _closure2_slot4;
                    var1 = var5 != var2;
case 12:
                    if(!var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var8 = _closure1_slot8;
                    var7 = var8.isBlocked;
                    var2 = _closure2_slot4;
                    var2 = var7.bind(var8)(var2);
                    if(var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var7 = _closure1_slot9;
                    var6 = var7.getUser;
                    var3 = _closure2_slot4;
                    var3 = var6.bind(var7)(var3);
                    var5 = var5 == var3;
                    var4 = undefined;
                    if(var5) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var4 = var3.isProvisional;
case 18:
                    var3 = true;
                    var2 = var3 === var4;
case 16:
                    var1 = var2;
case 14:
                    return var1;
                }
            };
            var20 = var17.bind(var18)(var15, var2);
            var2 = 19;
            var2 = var14[var2];
            var14 = var6.bind(var4)(var2);
            var6 = var14.useIsCallActiveNullable;
            var15 = var3 == var10;
            var2 = undefined;
            if(var15) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2 = var10.id;
case 20:
            var30 = var6.bind(var14)(var2);
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var13];
            var14 = var6.bind(var4)(var2);
            var13 = var14.useStateFromStoresObject;
            var2 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot3;
                    var6 = null;
                    var4 = var6 == var2;
                    var2 = undefined;
                    if(var4) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var7 = _closure2_slot3;
                    var4 = var7.isMultiUserDM;
                    var2 = var4.bind(var7)();
case 22:
                    var4 = true;
                    if(!(var4 !== var2)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var2 = _closure1_slot6;
                    _fun0004_ip = 26; continue _fun0004;
case 24:
                    var9 = _closure1_slot5;
                    var8 = var9.getParticipants;
                    var7 = _closure2_slot3;
                    var7 = var7.id;
                    var2 = var8.bind(var9)(var7);
case 26:
                    var1['callParticipants'] = var2;
                    var2 = _closure2_slot3;
                    var2 = var6 == var2;
                    var5 = undefined;
                    if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 27:
                    var6 = _closure2_slot3;
                    var2 = var6.isMultiUserDM;
                    var5 = var2.bind(var6)();
case 19:
                    var2 = -1;
                    if(!(var4 === var5)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var5 = _closure1_slot5;
                    var4 = var5.getParticipantsVersion;
                    var3 = _closure2_slot3;
                    var3 = var3.id;
                    var2 = var4.bind(var5)(var3);
case 28:
                    var1['participantsVersion'] = var2;
                    return var1;
                }
            };
            var2 = var13.bind(var14)(var6, var2);
            var2 = var2.callParticipants;
            _closure2_slot8 = var2;
            var15 = _closure1_slot3;
            var14 = var15.useMemo;
            var13 = new Array(1);
            var13[0] = var2;
            var6 = function() {
                var3 = _closure2_slot8;
                var2 = var3.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = _closure1_slot15;
                    var1 = var1.ACTIVITY;
                    var1 = var2 !== var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var26 = var14.bind(var15)(var6, var13);
            var6 = var3 == var10;
            var17 = undefined;
            if(var6) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var6 = var10.isMultiUserDM;
            var17 = var6.bind(var10)();
case 30:
            var18 = var17;
            if(!var18) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var6 = var2.length;
            var2 = 0;
            var18 = var6 > var2;
case 32:
            _closure2_slot9 = var18;
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 20;
            var2 = var13[var2];
            var6 = var6.bind(var4)(var2);
            var2 = {};
            var13 = {};
            var14 = 'channel';
            var13['type'] = var14;
            var13['channel'] = var10;
            var2['context'] = var13;
            var2 = var6.bind(var4)(var2);
            var6 = var2.application;
            _closure2_slot10 = var6;
            var2 = var2.isAppDM;
            var13 = _closure1_slot3;
            var22 = var13.useCallback;
            var15 = new Array(1);
            var15[0] = var10;
            var14 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = arguments[0];
                    var1 = undefined;
                    if(!(var4 === var1)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var4 = false;
case 34:
                    var5 = _closure2_slot3;
                    var3 = null;
                    var3 = var3 != var5;
                    if(!var3) { _fun0005_ip = 36; continue _fun0005 }
case 10:
                    var6 = _closure2_slot3;
                    var5 = var6.isPrivate;
                    var3 = var5.bind(var6)();
case 36:
                    if(!var3) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 21;
                    var3 = var6[var3];
                    var3 = var5.bind(var1)(var3);
                    var2 = _closure2_slot3;
                    var3 = var3.bind(var1)(var2, var4);
                    var2 = var3.onPress;
                    var2 = var2.bind(var3)();
case 37:
                    return var1;
                }
            };
            var14 = var22.bind(var13)(var14, var15);
            _closure2_slot11 = var14;
            var23 = var13.useCallback;
            var22 = new Array(1);
            var22[0] = var14;
            var15 = function() {
                var3 = _closure2_slot11;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var15 = var23.bind(var13)(var15, var22);
            _closure2_slot12 = var15;
            var22 = var13.useCallback;
            var15 = new Array(1);
            var15[0] = var14;
            var14 = function() {
                var3 = _closure2_slot11;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var22 = var22.bind(var13)(var14, var15);
            var15 = var13.useCallback;
            var14 = new Array(3);
            var14[0] = var10;
            var14[1] = var9;
            var14[2] = var12;
            var12 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 22;
                    var3 = var3[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var3);
                    var6 = var8.navigateToChannelDetails;
                    var7 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var4 = 'private-channel-search-button';
                    var4 = var6.bind(var8)(var7, var5, var4);
                    var6 = _closure1_slot11;
                    var5 = true;
                    var4 = 'action';
                    var4 = var6.bind(var1)(var7, var5, var4);
                    var5 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var5 = _closure2_slot3;
                    var4 = var5.getGuildId;
                    var9 = var4.bind(var5)();
                    var4 = var5.isThread;
                    var8 = var4.bind(var5)();
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var6 = 23;
                    var6 = var4[var6];
                    var7 = var5.bind(var1)(var6);
                    var6 = var7.getChannelDetailsSearchContext;
                    var3 = _closure2_slot0;
                    var6 = var6.bind(var7)(var3, var9, var8);
                    var3 = 24;
                    var3 = var4[var3];
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.SearchEntrypointAnalyticsLocations;
                    var5 = var3.INDIVIDUAL_DM;
                    var3 = _closure1_slot1;
                    var2 = 25;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackSearchOpenedMobile;
                    var2 = {};
                    var2['searchContext'] = var6;
                    var2['searchLocation'] = var5;
                    var2 = var3.bind(var4)(var2);
case 39:
                    return var1;
                }
            };
            var15 = var15.bind(var13)(var12, var14);
            _closure2_slot13 = var15;
            var14 = var13.useCallback;
            var12 = new Array(3);
            var12[0] = var7;
            var12[1] = var10;
            var12[2] = var6;
            var10 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0007_ip = 41; continue _fun0007 }
case 5:
                    var3 = _closure2_slot3;
                    var2 = var4 != var3;
case 41:
                    if(!var2) { _fun0007_ip = 42; continue _fun0007 }
case 10:
                    var3 = _closure2_slot10;
                    var2 = var4 != var3;
case 42:
                    if(!var2) { _fun0007_ip = 43; continue _fun0007 }
case 36:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = 26;
                    var4 = var2[var4];
                    var7 = undefined;
                    var9 = var5.bind(var7)(var4);
                    var8 = var9.trackWithMetadata;
                    var4 = _closure1_slot12;
                    var6 = var4.SETTINGS_PANE_VIEWED;
                    var4 = {'settings_type': 'user', 'destination_pane': null, 'source_page': 'app_dm_settings'};
                    var10 = _closure1_slot13;
                    var10 = var10.SETTINGS_APP_DMS_MENU;
                    var4['destination_pane'] = var10;
                    var10 = _closure2_slot10;
                    var10 = var10.id;
                    var4['application_id'] = var10;
                    var4 = var8.bind(var9)(var6, var4);
                    var4 = 27;
                    var4 = var2[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.openLazy;
                    var6 = _closure1_slot0;
                    var3 = 29;
                    var3 = var2[var3];
                    var6 = var6.bind(var7)(var3);
                    var3 = 28;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var6.bind(var7)(var3, var2);
                    var2 = {};
                    var6 = _closure2_slot4;
                    var2['userId'] = var6;
                    var6 = _closure2_slot3;
                    var2['channel'] = var6;
                    var1 = _closure2_slot10;
                    var2['application'] = var1;
                    var1 = 'AppDMOptionsBottomSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
case 43:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = var14.bind(var13)(var10, var12);
            var12 = var13.useMemo;
            var10 = new Array(8);
            var10[0] = var11;
            var10[1] = var21;
            var21 = var8.button;
            var10[2] = var21;
            var10[3] = var15;
            var10[4] = var9;
            var10[5] = var7;
            var21 = var3 == var19;
            var7 = undefined;
            if(var21) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var7 = var19.id;
case 44:
            var10[6] = var7;
            var21 = var3 == var19;
            var7 = undefined;
            if(var21) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            var7 = var19.type;
case 46:
            var10[7] = var7;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot7;
                    if(!var1) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0008_ip = 48; continue _fun0008 }
case 50:
                    var4 = _closure1_slot17;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 30;
                    var1 = var8[var1];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var2 = var1.PressableOpacity;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var5 = var5.button;
                    var1['style'] = var5;
                    var5 = _closure2_slot13;
                    var1['onPress'] = var5;
                    var5 = 31;
                    var9 = var8[var5];
                    var9 = var6.bind(var3)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var5 = var8[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.5h0QOD;
                    var5 = var9.bind(var10)(var5);
                    var1['accessibilityLabel'] = var5;
                    var5 = 'button';
                    var1['accessibilityRole'] = var5;
                    var5 = 32;
                    var5 = var8[var5];
                    var5 = var6.bind(var3)(var5);
                    var6 = var5.MagnifyingGlassIcon;
                    var5 = {};
                    var8 = 'sm';
                    var5['size'] = var8;
                    var5 = var4.bind(var3)(var6, var5);
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    _fun0008_ip = 51; continue _fun0008;
case 48:
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!var3) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                    var6 = _closure1_slot17;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 33;
                    var3 = var5[var3];
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.SafetyToolsButton;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3['channelId'] = var8;
                    var8 = _closure2_slot4;
                    var3['recipientId'] = var8;
                    var8 = _closure2_slot5;
                    var8 = var8.id;
                    var3['warningId'] = var8;
                    var7 = _closure2_slot5;
                    var7 = var7.type;
                    var3['warningType'] = var7;
                    var2 = var6.bind(var5)(var4, var3);
case 52:
                    var1 = var2;
case 51:
                    return var1;
                }
            };
            var12 = var12.bind(var13)(var7, var10);
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 34;
            var7 = var13[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.bind(var4)(var9);
            if(var7) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            if(var2) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var9 = _closure1_slot18;
            var7 = _closure1_slot4;
            var2 = {};
            var10 = var8.privateChannelButtonsWrapper;
            var2['style'] = var10;
            var13 = _closure1_slot0;
            var10 = _closure1_slot2;
            var23 = 30;
            var10 = var10[var23];
            var10 = var13.bind(var4)(var10);
            var13 = var10.PressableOpacity;
            var10 = {};
            var24 = _closure1_slot0;
            var19 = _closure1_slot2;
            var21 = 31;
            var25 = var19[var21];
            var25 = var24.bind(var4)(var25);
            var27 = var25.intl;
            var25 = var27.string;
            var19 = var19[var21];
            var19 = var24.bind(var4)(var19);
            var24 = var19.t;
            if(var18) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            if(var16) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var19 = var24.focH1t;
            var19 = var25.bind(var27)(var19);
            _fun0001_ip = 62; continue _fun0001;
case 60:
            var28 = var24.4ry6ys;
            var19 = var25.bind(var27)(var28);
case 62:
            _fun0001_ip = 63; continue _fun0001;
case 58:
            var24 = var24.0D/6R0;
            var19 = var25.bind(var27)(var24);
case 63:
            var10['accessibilityLabel'] = var19;
            var19 = 'button';
            var10['accessibilityRole'] = var19;
            var25 = var8.button;
            var24 = new Array(3);
            var24[0] = var25;
            var25 = {};
            var27 = undefined;
            if(!var18) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var27 = 1;
case 64:
            var25['borderWidth'] = var27;
            var27 = undefined;
            if(!var18) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var29 = _closure1_slot1;
            var31 = _closure1_slot2;
            var28 = 14;
            var28 = var31[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.unsafe_rawColors;
            if(var16) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var28 = var29.BRAND_400;
            _fun0001_ip = 70; continue _fun0001;
case 68:
            var28 = var29.GREEN_360;
case 70:
            var27 = var28;
case 66:
            var25['borderColor'] = var27;
            var24[1] = var25;
            var25 = null;
            if(!var20) { _fun0001_ip = 71; continue _fun0001 }
case 72:
            var25 = var8.disabledButton;
case 71:
            var24[2] = var25;
            var10['style'] = var24;
            var24 = function onPress() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0009_ip = 23; continue _fun0009 }
case 73:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0009_ip = 74; continue _fun0009 }
case 23:
                    var3 = _closure2_slot12;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0009_ip = 75; continue _fun0009;
case 74:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 39;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.openChannelCallModal;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
case 75:
                    var1 = undefined;
                    return var1;
                }
            };
            var10['onPress'] = var24;
            var10['disabled'] = var20;
            var27 = _closure1_slot17;
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            if(var18) { _fun0001_ip = 76; continue _fun0001 }
case 77:
            if(var16) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            var18 = 42;
            var18 = var28[var18];
            var18 = var25.bind(var4)(var18);
            var24 = var18.PhoneCallIcon;
            var18 = {};
            var29 = 'sm';
            var18['size'] = var29;
            var29 = undefined;
            if(!var30) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var31 = _closure1_slot1;
            var32 = _closure1_slot2;
            var30 = 14;
            var30 = var32[var30];
            var30 = var31.bind(var4)(var30);
            var30 = var30.unsafe_rawColors;
            var29 = var30.GREEN_360;
case 80:
            var18['color'] = var29;
            var24 = var27.bind(var4)(var24, var18);
            _fun0001_ip = 82; continue _fun0001;
case 78:
            var18 = 41;
            var18 = var28[var18];
            var18 = var25.bind(var4)(var18);
            var29 = var18.PhoneHangUpIcon;
            var18 = {};
            var30 = 'sm';
            var18['size'] = var30;
            var31 = _closure1_slot1;
            var30 = 14;
            var30 = var28[var30];
            var30 = var31.bind(var4)(var30);
            var30 = var30.unsafe_rawColors;
            var30 = var30.RED_400;
            var18['color'] = var30;
            var24 = var27.bind(var4)(var29, var18);
case 82:
            _fun0001_ip = 83; continue _fun0001;
case 76:
            var18 = 40;
            var18 = var28[var18];
            var18 = var25.bind(var4)(var18);
            var25 = var18.VoiceNormalIcon;
            var18 = {};
            var28 = 'sm';
            var18['size'] = var28;
            var29 = _closure1_slot1;
            var30 = _closure1_slot2;
            var28 = 14;
            var28 = var30[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.unsafe_rawColors;
            if(var16) { _fun0001_ip = 84; continue _fun0001 }
case 85:
            var28 = var29.BRAND_400;
            _fun0001_ip = 86; continue _fun0001;
case 84:
            var28 = var29.GREEN_360;
case 86:
            var18['color'] = var28;
            var24 = var27.bind(var4)(var25, var18);
case 83:
            var18 = new Array(2);
            var18[0] = var24;
            var25 = var26.map;
            var24 = function(arg1, arg2, arg3) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg1;
                    var9 = arg2;
                    var3 = var1.type;
                    var2 = _closure1_slot15;
                    var2 = var2.STREAM;
                    if(!(var2 !== var3)) { _fun0010_ip = 87; continue _fun0010 }
case 88:
                    var2 = _closure1_slot15;
                    var2 = var2.HIDDEN_STREAM;
                    if(!(var2 !== var3)) { _fun0010_ip = 87; continue _fun0010 }
case 89:
                    var2 = _closure1_slot15;
                    var2 = var2.USER;
                    if(!(var2 !== var3)) { _fun0010_ip = 87; continue _fun0010 }
case 90:
                    var2 = null;
                    return var2;
case 87:
                    var5 = _closure1_slot17;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var10 = 12;
                    var2 = var2[var10];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = {};
                    var8 = -6;
                    var11 = 0;
                    if(!(var11 === var9)) { _fun0010_ip = 91; continue _fun0010 }
case 92:
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var11 = 14;
                    var11 = var13[var11];
                    var11 = var12.bind(var4)(var11);
                    var11 = var11.spacing;
                    var8 = var11.PX_4;
case 91:
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
                    if(!(var9 !== var8)) { _fun0010_ip = 93; continue _fun0010 }
case 39:
                    var6 = _closure1_slot19;
case 93:
                    var2['cutout'] = var6;
                    var1 = var1.id;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var24 = var25.bind(var26)(var24);
            var18[1] = var24;
            var10['children'] = var18;
            var13 = var9.bind(var4)(var13, var10);
            var10 = new Array(3);
            var10[0] = var13;
            var13 = null;
            if(var17) { _fun0001_ip = 94; continue _fun0001 }
case 95:
            var13 = null;
            if(var16) { _fun0001_ip = 94; continue _fun0001 }
case 96:
            var18 = _closure1_slot17;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var23];
            var16 = var17.bind(var4)(var16);
            var17 = var16.PressableOpacity;
            var16 = {};
            var24 = var8.button;
            var23 = new Array(2);
            var23[0] = var24;
            var24 = null;
            if(!var20) { _fun0001_ip = 97; continue _fun0001 }
case 98:
            var24 = var8.disabledButton;
case 97:
            var23[1] = var24;
            var16['style'] = var23;
            var16['onPress'] = var22;
            var16['disabled'] = var20;
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
            var16['accessibilityLabel'] = var21;
            var16['accessibilityRole'] = var19;
            var21 = _closure1_slot17;
            var19 = 43;
            var19 = var22[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.VideoIcon;
            var19 = {};
            var22 = 'sm';
            var19['size'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var16['children'] = var19;
            var13 = var18.bind(var4)(var17, var16);
case 94:
            var10[1] = var13;
            var10[2] = var12;
            var2['children'] = var10;
            var2 = var9.bind(var4)(var7, var2);
            _fun0001_ip = 99; continue _fun0001;
case 56:
            var6 = var3 == var6;
            var3 = null;
            if(var6) { _fun0001_ip = 100; continue _fun0001 }
case 101:
            var9 = _closure1_slot18;
            var7 = _closure1_slot4;
            var6 = {};
            var10 = var8.privateChannelButtonsWrapper;
            var6['style'] = var10;
            if(!var11) { _fun0001_ip = 102; continue _fun0001 }
case 103:
            var13 = _closure1_slot17;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 30;
            var10 = var17[var10];
            var10 = var16.bind(var4)(var10);
            var12 = var10.PressableOpacity;
            var10 = {};
            var18 = var8.button;
            var10['style'] = var18;
            var10['onPress'] = var15;
            var15 = 31;
            var18 = var17[var15];
            var18 = var16.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.5h0QOD;
            var15 = var18.bind(var19)(var15);
            var10['accessibilityLabel'] = var15;
            var15 = 'button';
            var10['accessibilityRole'] = var15;
            var15 = 32;
            var15 = var17[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.MagnifyingGlassIcon;
            var15 = {};
            var17 = 'sm';
            var15['size'] = var17;
            var15 = var13.bind(var4)(var16, var15);
            var10['children'] = var15;
            var11 = var13.bind(var4)(var12, var10);
case 102:
            var10 = new Array(2);
            var10[0] = var11;
            var13 = _closure1_slot17;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 30;
            var11 = var16[var11];
            var11 = var15.bind(var4)(var11);
            var12 = var11.PressableOpacity;
            var11 = {};
            var17 = var8.button;
            var11['style'] = var17;
            var11['onPress'] = var14;
            var14 = 31;
            var17 = var16[var14];
            var17 = var15.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.oCqlGB;
            var14 = var17.bind(var18)(var14);
            var11['accessibilityLabel'] = var14;
            var14 = 'button';
            var11['accessibilityRole'] = var14;
            var14 = 38;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var15 = var14.SettingsIcon;
            var14 = {};
            var16 = 'sm';
            var14['size'] = var16;
            var14 = var13.bind(var4)(var15, var14);
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var6['children'] = var10;
            var3 = var9.bind(var4)(var7, var6);
case 100:
            var2 = var3;
case 99:
            return var2;
case 54:
            var3 = _closure1_slot17;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 30;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var8 = var8.button;
            var1['style'] = var8;
            var5 = function onPress() {
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 35;
                var3 = var5[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var3 = var7.openURL;
                var6 = _closure1_slot16;
                var3 = var3.bind(var7)(var6);
                var3 = 36;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot12;
                var3 = var2.CHANGE_LOG_CTA_CLICKED;
                var2 = {};
                var7 = 'channel_header';
                var2['cta_type'] = var7;
                var2['target'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1['onPress'] = var5;
            var5 = 31;
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
            var5 = 37;
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
    var4 = 44;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/channel/header/PrivateChannelButtons.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();