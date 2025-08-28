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
 0:
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
            if(var2) { _fun0001_ip = 154; continue _fun0001 }
 144:
            var2 = var10.getRecipientId;
            var7 = var2.bind(var10)();
 154:
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
 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0002_ip = 43; continue _fun0002 }
 16:
                    var4 = _closure1_slot10;
                    var3 = var4.isInChannel;
                    var2 = _closure2_slot3;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 43:
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
            if(!var21) { _fun0001_ip = 250; continue _fun0001 }
 246:
            var21 = var3 != var7;
 250:
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
            if(var11) { _fun0001_ip = 332; continue _fun0001 }
 329:
            var11 = var2;
 332:
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
 0:
                    var1 = _closure2_slot3;
                    var5 = null;
                    var1 = var5 == var1;
                    var2 = undefined;
                    if(var1) { _fun0003_ip = 27; continue _fun0003 }
 18:
                    var1 = _closure2_slot3;
                    var2 = var1.type;
 27:
                    var1 = _closure1_slot14;
                    var1 = var1.DM;
                    var1 = var2 === var1;
                    if(!var1) { _fun0003_ip = 55; continue _fun0003 }
 47:
                    var2 = _closure2_slot4;
                    var1 = var5 != var2;
 55:
                    if(!var1) { _fun0003_ip = 123; continue _fun0003 }
 58:
                    var8 = _closure1_slot8;
                    var7 = var8.isBlocked;
                    var2 = _closure2_slot4;
                    var2 = var7.bind(var8)(var2);
                    if(var2) { _fun0003_ip = 120; continue _fun0003 }
 80:
                    var7 = _closure1_slot9;
                    var6 = var7.getUser;
                    var3 = _closure2_slot4;
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
            var20 = var17.bind(var18)(var15, var2);
            var2 = 19;
            var2 = var14[var2];
            var14 = var6.bind(var4)(var2);
            var6 = var14.useIsCallActiveNullable;
            var15 = var3 == var10;
            var2 = undefined;
            if(var15) { _fun0001_ip = 421; continue _fun0001 }
 416:
            var2 = var10.id;
 421:
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
 0:
                    var1 = {};
                    var2 = _closure2_slot3;
                    var6 = null;
                    var4 = var6 == var2;
                    var2 = undefined;
                    if(var4) { _fun0004_ip = 34; continue _fun0004 }
 20:
                    var7 = _closure2_slot3;
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
                    var7 = _closure2_slot3;
                    var7 = var7.id;
                    var2 = var8.bind(var9)(var7);
 76:
                    var1['callParticipants'] = var2;
                    var2 = _closure2_slot3;
                    var2 = var6 == var2;
                    var5 = undefined;
                    if(var2) { _fun0004_ip = 108; continue _fun0004 }
 94:
                    var6 = _closure2_slot3;
                    var2 = var6.isMultiUserDM;
                    var5 = var2.bind(var6)();
 108:
                    var2 = -1;
                    if(!(var4 === var5)) { _fun0004_ip = 145; continue _fun0004 }
 118:
                    var5 = _closure1_slot5;
                    var4 = var5.getParticipantsVersion;
                    var3 = _closure2_slot3;
                    var3 = var3.id;
                    var2 = var4.bind(var5)(var3);
 145:
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
            if(var6) { _fun0001_ip = 529; continue _fun0001 }
 519:
            var6 = var10.isMultiUserDM;
            var17 = var6.bind(var10)();
 529:
            var18 = var17;
            if(!var18) { _fun0001_ip = 546; continue _fun0001 }
 535:
            var6 = var2.length;
            var2 = 0;
            var18 = var6 > var2;
 546:
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
 0:
                    var4 = arguments[0];
                    var1 = undefined;
                    if(!(var4 === var1)) { _fun0005_ip = 11; continue _fun0005 }
 9:
                    var4 = false;
 11:
                    var5 = _closure2_slot3;
                    var3 = null;
                    var3 = var3 != var5;
                    if(!var3) { _fun0005_ip = 41; continue _fun0005 }
 27:
                    var6 = _closure2_slot3;
                    var5 = var6.isPrivate;
                    var3 = var5.bind(var6)();
 41:
                    if(!var3) { _fun0005_ip = 86; continue _fun0005 }
 44:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 21;
                    var3 = var6[var3];
                    var3 = var5.bind(var1)(var3);
                    var2 = _closure2_slot3;
                    var3 = var3.bind(var1)(var2, var4);
                    var2 = var3.onPress;
                    var2 = var2.bind(var3)();
 86:
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
 0:
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
                    if(!(var4 != var5)) { _fun0006_ip = 209; continue _fun0006 }
 85:
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
 209:
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
 0:
                    var2 = _closure2_slot4;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0007_ip = 24; continue _fun0007 }
 16:
                    var3 = _closure2_slot3;
                    var2 = var4 != var3;
 24:
                    if(!var2) { _fun0007_ip = 35; continue _fun0007 }
 27:
                    var3 = _closure2_slot10;
                    var2 = var4 != var3;
 35:
                    if(!var2) { _fun0007_ip = 223; continue _fun0007 }
 41:
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
 223:
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
            if(var21) { _fun0001_ip = 815; continue _fun0001 }
 810:
            var7 = var19.id;
 815:
            var10[6] = var7;
            var21 = var3 == var19;
            var7 = undefined;
            if(var21) { _fun0001_ip = 833; continue _fun0001 }
 828:
            var7 = var19.type;
 833:
            var10[7] = var7;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot7;
                    if(!var1) { _fun0008_ip = 187; continue _fun0008 }
 13:
                    var1 = _closure2_slot6;
                    if(var1) { _fun0008_ip = 187; continue _fun0008 }
 23:
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
                    _fun0008_ip = 287; continue _fun0008;
 187:
                    var3 = _closure2_slot6;
                    var2 = null;
                    if(!var3) { _fun0008_ip = 284; continue _fun0008 }
 196:
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
 284:
                    var1 = var2;
 287:
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
            if(var7) { _fun0001_ip = 2021; continue _fun0001 }
 879:
            if(var2) { _fun0001_ip = 1658; continue _fun0001 }
 885:
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
            if(var18) { _fun0001_ip = 1009; continue _fun0001 }
 980:
            if(var16) { _fun0001_ip = 996; continue _fun0001 }
 983:
            var19 = var24.focH1t;
            var19 = var25.bind(var27)(var19);
            _fun0001_ip = 1007; continue _fun0001;
 996:
            var28 = var24.4ry6ys;
            var19 = var25.bind(var27)(var28);
 1007:
            _fun0001_ip = 1020; continue _fun0001;
 1009:
            var24 = var24.0D/6R0;
            var19 = var25.bind(var27)(var24);
 1020:
            var10['accessibilityLabel'] = var19;
            var19 = 'button';
            var10['accessibilityRole'] = var19;
            var25 = var8.button;
            var24 = new Array(3);
            var24[0] = var25;
            var25 = {};
            var27 = undefined;
            if(!var18) { _fun0001_ip = 1056; continue _fun0001 }
 1053:
            var27 = 1;
 1056:
            var25['borderWidth'] = var27;
            var27 = undefined;
            if(!var18) { _fun0001_ip = 1111; continue _fun0001 }
 1066:
            var29 = _closure1_slot1;
            var31 = _closure1_slot2;
            var28 = 14;
            var28 = var31[var28];
            var28 = var29.bind(var4)(var28);
            var29 = var28.unsafe_rawColors;
            if(var16) { _fun0001_ip = 1102; continue _fun0001 }
 1094:
            var28 = var29.BRAND_400;
            _fun0001_ip = 1108; continue _fun0001;
 1102:
            var28 = var29.GREEN_360;
 1108:
            var27 = var28;
 1111:
            var25['borderColor'] = var27;
            var24[1] = var25;
            var25 = null;
            if(!var20) { _fun0001_ip = 1131; continue _fun0001 }
 1125:
            var25 = var8.disabledButton;
 1131:
            var24[2] = var25;
            var10['style'] = var24;
            var24 = function onPress() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure2_slot9;
                    if(!var2) { _fun0009_ip = 20; continue _fun0009 }
 10:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0009_ip = 32; continue _fun0009 }
 20:
                    var3 = _closure2_slot12;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                    _fun0009_ip = 72; continue _fun0009;
 32:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 39;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.openChannelCallModal;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
 72:
                    var1 = undefined;
                    return var1;
                }
            };
            var10['onPress'] = var24;
            var10['disabled'] = var20;
            var27 = _closure1_slot17;
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            if(var18) { _fun0001_ip = 1316; continue _fun0001 }
 1170:
            if(var16) { _fun0001_ip = 1249; continue _fun0001 }
 1173:
            var18 = 42;
            var18 = var28[var18];
            var18 = var25.bind(var4)(var18);
            var24 = var18.PhoneCallIcon;
            var18 = {};
            var29 = 'sm';
            var18['size'] = var29;
            var29 = undefined;
            if(!var30) { _fun0001_ip = 1237; continue _fun0001 }
 1206:
            var31 = _closure1_slot1;
            var32 = _closure1_slot2;
            var30 = 14;
            var30 = var32[var30];
            var30 = var31.bind(var4)(var30);
            var30 = var30.unsafe_rawColors;
            var29 = var30.GREEN_360;
 1237:
            var18['color'] = var29;
            var24 = var27.bind(var4)(var24, var18);
            _fun0001_ip = 1314; continue _fun0001;
 1249:
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
 1314:
            _fun0001_ip = 1396; continue _fun0001;
 1316:
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
            if(var16) { _fun0001_ip = 1380; continue _fun0001 }
 1372:
            var28 = var29.BRAND_400;
            _fun0001_ip = 1386; continue _fun0001;
 1380:
            var28 = var29.GREEN_360;
 1386:
            var18['color'] = var28;
            var24 = var27.bind(var4)(var25, var18);
 1396:
            var18 = new Array(2);
            var18[0] = var24;
            var25 = var26.map;
            var24 = function(arg1, arg2, arg3) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = arg1;
                    var9 = arg2;
                    var3 = var1.type;
                    var2 = _closure1_slot15;
                    var2 = var2.STREAM;
                    if(!(var2 !== var3)) { _fun0010_ip = 60; continue _fun0010 }
 28:
                    var2 = _closure1_slot15;
                    var2 = var2.HIDDEN_STREAM;
                    if(!(var2 !== var3)) { _fun0010_ip = 60; continue _fun0010 }
 42:
                    var2 = _closure1_slot15;
                    var2 = var2.USER;
                    if(!(var2 !== var3)) { _fun0010_ip = 60; continue _fun0010 }
 56:
                    var2 = null;
                    return var2;
 60:
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
                    if(!(var11 === var9)) { _fun0010_ip = 133; continue _fun0010 }
 102:
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var11 = 14;
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
                    if(!(var9 !== var8)) { _fun0010_ip = 213; continue _fun0010 }
 209:
                    var6 = _closure1_slot19;
 213:
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
            if(var17) { _fun0001_ip = 1635; continue _fun0001 }
 1449:
            var13 = null;
            if(var16) { _fun0001_ip = 1635; continue _fun0001 }
 1457:
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
            if(!var20) { _fun0001_ip = 1511; continue _fun0001 }
 1505:
            var24 = var8.disabledButton;
 1511:
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
 1635:
            var10[1] = var13;
            var10[2] = var12;
            var2['children'] = var10;
            var2 = var9.bind(var4)(var7, var2);
            _fun0001_ip = 2019; continue _fun0001;
 1658:
            var6 = var3 == var6;
            var3 = null;
            if(var6) { _fun0001_ip = 2016; continue _fun0001 }
 1670:
            var9 = _closure1_slot18;
            var7 = _closure1_slot4;
            var6 = {};
            var10 = var8.privateChannelButtonsWrapper;
            var6['style'] = var10;
            if(!var11) { _fun0001_ip = 1845; continue _fun0001 }
 1696:
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
 1845:
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
 2016:
            var2 = var3;
 2019:
            return var2;
 2021:
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