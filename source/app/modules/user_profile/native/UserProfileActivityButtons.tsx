// app/modules/user_profile/native/UserProfileActivityButtons.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Distributors;
    var _closure1_slot16 = var7;
    var7 = var4.PlatformTypes;
    var _closure1_slot17 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot18 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.SpotifyEndpoints;
    var _closure1_slot19 = var7;
    var4 = var4.SpotifyResourceTypes;
    var _closure1_slot20 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot21 = var4;
    var4 = 16;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 17;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.REDESIGN_BUTTON_SECONDARY_TEXT;
    var9['tintColor'] = var10;
    var4['icon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot22 = var4;
    var4 = 51;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileActivityButtons.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function RobloxPlayActivityButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var9 = var2.user;
            var1 = var2.application;
            var2 = var2.onAction;
            var _closure2_slot0 = var2;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var4 = _closure1_slot5;
            var3 = var4.useState;
            var2 = false;
            var4 = var3.bind(var4)(var2);
            var3 = _closure1_slot4;
            var2 = 2;
            var3 = var3.bind(var5)(var4, var2);
            var2 = 0;
            var8 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot1 = var2;
            var3 = var1.thirdPartySkus;
            var2 = var3.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.distributor;
                var1 = _closure1_slot16;
                var1 = var1.ROBLOX;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var3 = null;
            var4 = var3 == var2;
            var1 = undefined;
            if(var4) { _fun0001_ip = 119; continue _fun0001 }
 114:
            var1 = var2.id;
 119:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 18;
            var2 = var10[var2];
            var11 = var4.bind(var5)(var2);
            var2 = var11.usePlayOnRoblox;
            var2 = var2.bind(var11)(var1);
            _closure2_slot2 = var2;
            var2 = 19;
            var2 = var10[var2];
            var11 = var4.bind(var5)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot14;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot14;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var10.bind(var11)(var4, var2);
            var10 = var3 == var4;
            var2 = var1;
            var1 = null;
            if(var10) { _fun0001_ip = 364; continue _fun0001 }
 211:
            var9 = var9.id;
            var4 = var4.id;
            var1 = null;
            if(!(var9 !== var4)) { _fun0001_ip = 364; continue _fun0001 }
 230:
            var2 = var3 == var2;
            var1 = null;
            if(var2) { _fun0001_ip = 364; continue _fun0001 }
 242:
            var4 = _closure1_slot21;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 20;
            var2 = var13[var2];
            var2 = var12.bind(var5)(var2);
            var3 = var2.Button;
            var2 = {};
            var9 = 21;
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.RscU7O;
            var9 = var10.bind(var11)(var9);
            var2['text'] = var9;
            var9 = 'secondary';
            var2['variant'] = var9;
            var2['loading'] = var8;
            var7 = _closure1_slot3;
            var6 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 187; continue _fun0002 }
 10:
                        var5 = _closure2_slot1;
                        var2 = undefined;
                        var4 = true;
                        var4 = var5.bind(var2)(var4);
                        var5 = _closure2_slot0;
                        var4 = {};
                        var6 = 'PRESS_PLAY_BUTTON';
                        var4['action'] = var6;
                        var4 = var5.bind(var2)(var4);
 47: // try_start_0
                        var4 = _closure2_slot2;
                        var4 = var4.bind(var2)();
                        SaveGenerator(address=59);
 57:
                        return var4;
 59:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(var5) { _fun0002_ip = 67; continue _fun0002 }
 65: // try_end0
                        _fun0002_ip = 173; continue _fun0002;
 67:
                        return var4;
 70: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var5 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var4 = 22;
                        var4 = var11[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.open;
                        var4 = {};
                        var8 = 'ROBLOX_PLAY_ACTIVITY_BUTTON';
                        var4['key'] = var8;
                        var10 = _closure1_slot0;
                        var7 = 21;
                        var8 = var11[var7];
                        var8 = var10.bind(var2)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var7 = var11[var7];
                        var7 = var10.bind(var2)(var7);
                        var7 = var7.t;
                        var7 = var7.F8FvU1;
                        var7 = var8.bind(var9)(var7);
                        var4['content'] = var7;
                        var4 = var5.bind(var6)(var4);
 173:
                        var4 = _closure2_slot1;
                        var3 = false;
                        var3 = var4.bind(var2)(var3);
                        return var2;
 187:
                        return var1;
                    }
                };
                return var1;
            };
            var6 = var7.bind(var5)(var6);
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 364:
            return var1;
        }
    };
    var3['RobloxPlayActivityButton'] = var4;
    var4 = function JoinActivityButton(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var1 = var2.user;
            var _closure2_slot0 = var1;
            var3 = var2.currentUser;
            var _closure2_slot1 = var3;
            var9 = var2.activity;
            var _closure2_slot2 = var9;
            var4 = var2.application;
            var _closure2_slot3 = var4;
            var2 = var2.onAction;
            var _closure2_slot4 = var2;
            var5 = undefined;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 23;
            var3 = var8[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var3 = var3.analyticsLocations;
            var _closure2_slot5 = var3;
            var10 = _closure1_slot6;
            var8 = var10.getEmbeddedActivityForUserId;
            var7 = var1.id;
            var1 = null;
            var11 = var1 == var4;
            var3 = undefined;
            if(var11) { _fun0003_ip = 131; continue _fun0003 }
 126:
            var3 = var4.id;
 131:
            var10 = var8.bind(var10)(var7, var3);
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 24;
            var3 = var8[var3];
            var8 = var7.bind(var5)(var3);
            var7 = var8.getEmbeddedActivityLocationChannelId;
            var11 = var1 == var10;
            var3 = undefined;
            if(var11) { _fun0003_ip = 177; continue _fun0003 }
 172:
            var3 = var10.location;
 177:
            var3 = var7.bind(var8)(var3);
            _closure2_slot6 = var3;
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 19;
            var7 = var11[var3];
            var13 = var8.bind(var5)(var7);
            var12 = var13.useStateFromStores;
            var10 = new Array(0);
            var7 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 25;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot6;
                var1['channelId'] = var5;
                var5 = _closure2_slot0;
                var5 = var5.id;
                var1['userId'] = var5;
                var4 = _closure2_slot2;
                var1['activity'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var12.bind(var13)(var10, var7);
            _closure2_slot7 = var7;
            var3 = var11[var3];
            var12 = var8.bind(var5)(var3);
            var10 = var12.useStateFromStores;
            var3 = _closure1_slot7;
            var7 = new Array(7);
            var7[0] = var3;
            var3 = _closure1_slot10;
            var7[1] = var3;
            var3 = _closure1_slot9;
            var7[2] = var3;
            var3 = _closure1_slot12;
            var7[3] = var3;
            var3 = _closure1_slot13;
            var7[4] = var3;
            var3 = _closure1_slot15;
            var7[5] = var3;
            var3 = _closure1_slot11;
            var7[6] = var3;
            var3 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 26;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = true;
                var1['isEmbedded'] = var5;
                var6 = _closure2_slot0;
                var1['user'] = var6;
                var6 = _closure2_slot1;
                var1['currentUser'] = var6;
                var6 = _closure2_slot2;
                var1['activity'] = var6;
                var6 = _closure2_slot3;
                var1['application'] = var6;
                var5 = _closure2_slot7;
                var1['channelId'] = var5;
                var5 = _closure1_slot7;
                var1['ChannelStore'] = var5;
                var5 = _closure1_slot10;
                var1['GuildStore'] = var5;
                var5 = _closure1_slot9;
                var1['GuildMemberCountStore'] = var5;
                var5 = _closure1_slot12;
                var1['RelationshipStore'] = var5;
                var5 = _closure1_slot13;
                var1['SelectedChannelStore'] = var5;
                var5 = _closure1_slot15;
                var1['VoiceStateStore'] = var5;
                var4 = _closure1_slot11;
                var1['PermissionStore'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var10.bind(var12)(var7, var3);
            var3 = 27;
            var3 = var11[var3];
            var3 = var8.bind(var5)(var3);
            var12 = var3.ActivitiesControllerIconMobileExperiment;
            var10 = var12.useExperiment;
            var8 = {};
            var3 = 'UserProfileActivityButtons';
            var8['location'] = var3;
            var3 = {};
            var13 = true;
            var3['autoTrackExposure'] = var13;
            var3 = var10.bind(var12)(var8, var3);
            var3 = var3.enabled;
            var10 = _closure1_slot1;
            var8 = 28;
            var8 = var11[var8];
            var8 = var10.bind(var5)(var8);
            var8 = var8.bind(var5)(var9);
            if(!var8) { _fun0003_ip = 605; continue _fun0003 }
 402:
            if(!(var1 != var4)) { _fun0003_ip = 605; continue _fun0003 }
 409:
            if(!var7) { _fun0003_ip = 605; continue _fun0003 }
 415:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            if(var3) { _fun0003_ip = 446; continue _fun0003 }
 426:
            var3 = 30;
            var3 = var8[var3];
            var3 = var4.bind(var5)(var3);
            var9 = var3.ActivitiesIcon;
            _fun0003_ip = 464; continue _fun0003;
 446:
            var3 = 29;
            var3 = var8[var3];
            var3 = var4.bind(var5)(var3);
            var9 = var3.GameControllerIcon;
 464:
            var4 = _closure1_slot21;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 20;
            var2 = var13[var2];
            var2 = var12.bind(var5)(var2);
            var3 = var2.Button;
            var2 = {};
            var8 = 21;
            var10 = var13[var8];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var8 = var13[var8];
            var8 = var12.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.4i2vj4;
            var8 = var10.bind(var11)(var8);
            var2['text'] = var8;
            var8 = {'size': 'sm', 'color': 'white'};
            var8 = var4.bind(var5)(var9, var8);
            var2['icon'] = var8;
            var8 = 'active';
            var2['variant'] = var8;
            var7 = !var7;
            var2['disabled'] = var7;
            var6 = function onPress() {
                var3 = _closure2_slot4;
                var2 = {};
                var1 = 'PRESS_JOIN_BUTTON';
                var2['action'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 31;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var2 = {};
                var7 = _closure2_slot3;
                var7 = var7.id;
                var2['applicationId'] = var7;
                var7 = _closure2_slot7;
                var2['activityChannelId'] = var7;
                var7 = {};
                var2['locationObject'] = var7;
                var6 = _closure2_slot5;
                var2['analyticsLocations'] = var6;
                var2 = var5.bind(var1)(var2);
                var2 = 32;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2['onPress'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 605:
            return var1;
        }
    };
    var3['JoinActivityButton'] = var4;
    var4 = function PlayOnSpotifyButton(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var14 = var1.activity;
            var1 = var1.onAction;
            var _closure2_slot0 = var1;
            var1 = _closure1_slot22;
            var5 = undefined;
            var10 = var1.bind(var5)();
            var2 = var14.sync_id;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 33;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var4 = var1.bind(var5)(var14);
            var3 = null;
            var1 = null;
            if(!var4) { _fun0004_ip = 306; continue _fun0004 }
 79:
            var2 = var3 != var2;
            var1 = null;
            if(!var2) { _fun0004_ip = 306; continue _fun0004 }
 91:
            var4 = _closure1_slot21;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 20;
            var2 = var13[var2];
            var2 = var9.bind(var5)(var2);
            var3 = var2.Button;
            var2 = {};
            var8 = 21;
            var11 = var13[var8];
            var11 = var9.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var13[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.t;
            var9 = var8.LEgD7u;
            var8 = {};
            var14 = var14.name;
            var8['platform'] = var14;
            var8 = var11.bind(var12)(var9, var8);
            var2['text'] = var8;
            var12 = _closure1_slot1;
            var11 = 34;
            var8 = var13[var11];
            var9 = var12.bind(var5)(var8);
            var8 = {};
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var11 = var11.Sizes;
            var11 = var11.SMALL;
            var8['size'] = var11;
            var11 = 35;
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var8['source'] = var11;
            var11 = true;
            var8['disableColor'] = var11;
            var10 = var10.icon;
            var8['style'] = var10;
            var8 = var4.bind(var5)(var9, var8);
            var2['icon'] = var8;
            var8 = 'secondary';
            var2['variant'] = var8;
            var7 = _closure1_slot3;
            var6 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 191; continue _fun0005 }
 10:
                        var2 = undefined;
                        var7 = undefined;
                        var4 = _closure2_slot0;
                        var3 = {};
                        var6 = 'PRESS_PLAY_ON_SPOTIFY_BUTTON';
                        var3['action'] = var6;
                        var3 = var4.bind(var2)(var3);
 38: // try_start_0
                        var8 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var4 = 36;
                        var3 = var3[var4];
                        var8 = var8.bind(var2)(var3);
                        var3 = var8.canOpenSpotifyUrl;
                        var3 = var3.bind(var8)();
                        SaveGenerator(address=75);
 73:
                        return var3;
 75:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                        if(var8) { _fun0005_ip = 183; continue _fun0005 }
 81:
                        var7 = var3;
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var4 = var10[var4];
                        var9 = var8.bind(var2)(var4);
                        if(var3) { _fun0005_ip = 153; continue _fun0005 }
 104:
                        var4 = var9.attributeInstall;
                        var4 = var4.bind(var9)();
                        var8 = _closure1_slot1;
                        var4 = 37;
                        var4 = var10[var4];
                        var10 = var8.bind(var2)(var4);
                        var8 = var10.openURL;
                        var4 = _closure1_slot19;
                        var4 = var4.APP_STORE;
                        var4 = var8.bind(var10)(var4);
                        _fun0005_ip = 180; continue _fun0005;
 153:
                        var8 = var9.openUrl;
                        var6 = _closure1_slot20;
                        var6 = var6.TRACK;
                        var5 = _closure2_slot1;
                        var4 = var8.bind(var9)(var7, var6, var5);
 180: // try_end0
                        return var4;
 183:
                        return var3;
 186: // catch_target0
                        CatchBlockStart(arg_register=2);
                        return var2;
 191:
                        return var1;
                    }
                };
                return var1;
            };
            var6 = var7.bind(var5)(var6);
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 306:
            return var1;
        }
    };
    var3['PlayOnSpotifyButton'] = var4;
    var4 = function WatchActivityButton(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = var1.activity;
            var1 = var1.onAction;
            var _closure2_slot0 = var1;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 38;
            var1 = var8[var1];
            var5 = undefined;
            var1 = var7.bind(var5)(var1);
            var3 = var1.bind(var5)(var4);
            var _closure2_slot1 = var3;
            var1 = 39;
            var1 = var8[var1];
            var1 = var7.bind(var5)(var1);
            var7 = var1.bind(var5)(var4);
            var4 = null;
            var1 = null;
            if(!var7) { _fun0006_ip = 196; continue _fun0006 }
 79:
            var3 = var4 != var3;
            var1 = null;
            if(!var3) { _fun0006_ip = 196; continue _fun0006 }
 88:
            var4 = _closure1_slot21;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 20;
            var2 = var11[var2];
            var2 = var10.bind(var5)(var2);
            var3 = var2.Button;
            var2 = {};
            var7 = 21;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.I6JG4+;
            var7 = var8.bind(var9)(var7);
            var2['text'] = var7;
            var7 = 'secondary';
            var2['variant'] = var7;
            var6 = function onPress() {
                var4 = _closure2_slot0;
                var3 = {};
                var1 = 'PRESS_WATCH_BUTTON';
                var3['action'] = var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 37;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.openURL;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 196:
            return var1;
        }
    };
    var3['WatchActivityButton'] = var4;
    var4 = function VoiceChannelButtons(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var11 = var1.channel;
            var _closure2_slot0 = var11;
            var7 = var1.isInChannel;
            var1 = var1.onAction;
            var _closure2_slot1 = var1;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 23;
            var1 = var6[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.newestAnalyticsLocation;
            var _closure2_slot2 = var1;
            var1 = var11.isGuildStageVoice;
            var8 = var1.bind(var11)();
            var _closure2_slot3 = var8;
            var3 = _closure1_slot21;
            var2 = _closure1_slot0;
            var1 = 20;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var6 = var11.isDM;
            var10 = var6.bind(var11)();
            if(var7) { _fun0007_ip = 278; continue _fun0007 }
 127:
            if(var10) { _fun0007_ip = 216; continue _fun0007 }
 130:
            var6 = var11.isGroupDM;
            var6 = var6.bind(var11)();
            if(var6) { _fun0007_ip = 216; continue _fun0007 }
 143:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 21;
            var13 = var15[var6];
            var13 = var12.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var6 = var15[var6];
            var6 = var12.bind(var4)(var6);
            var12 = var6.t;
            if(var8) { _fun0007_ip = 203; continue _fun0007 }
 190:
            var6 = var12.96ANUF;
            var6 = var13.bind(var14)(var6);
            _fun0007_ip = 214; continue _fun0007;
 203:
            var12 = var12.7vb2cX;
            var6 = var13.bind(var14)(var12);
 214:
            _fun0007_ip = 273; continue _fun0007;
 216:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 21;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.ozoE2N;
            var6 = var13.bind(var14)(var12);
 273:
            _fun0007_ip = 431; continue _fun0007;
 278:
            if(var10) { _fun0007_ip = 371; continue _fun0007 }
 281:
            var10 = var11.isGroupDM;
            var10 = var10.bind(var11)();
            if(var10) { _fun0007_ip = 371; continue _fun0007 }
 294:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 21;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            if(var8) { _fun0007_ip = 356; continue _fun0007 }
 341:
            var8 = var10.BXxdl5;
            var8 = var11.bind(var12)(var8);
            _fun0007_ip = 369; continue _fun0007;
 356:
            var10 = var10.Acqcoq;
            var8 = var11.bind(var12)(var10);
 369:
            _fun0007_ip = 428; continue _fun0007;
 371:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 21;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.7hwn2N;
            var8 = var10.bind(var11)(var9);
 428:
            var6 = var8;
 431:
            var1['text'] = var6;
            var6 = 'active';
            if(!var7) { _fun0007_ip = 446; continue _fun0007 }
 442:
            var6 = 'secondary';
 446:
            var1['variant'] = var6;
            var6 = true;
            var1['grow'] = var6;
            var5 = function onPress() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var4 = _closure2_slot1;
                    var3 = {};
                    var1 = 'PRESS_JOIN_CALL_BUTTON';
                    var3['action'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 32;
                    var3 = var6[var3];
                    var7 = var4.bind(var1)(var3);
                    var3 = var7.hideActionSheet;
                    var3 = var3.bind(var7)();
                    var3 = 40;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.popAll;
                    var3 = var3.bind(var4)();
                    var3 = _closure2_slot3;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    if(var3) { _fun0008_ip = 130; continue _fun0008 }
 96:
                    var3 = 42;
                    var3 = var5[var3];
                    var8 = var4.bind(var1)(var3);
                    var7 = var8.openGuildVoiceModal;
                    var6 = _closure2_slot0;
                    var3 = _closure2_slot2;
                    var3 = var7.bind(var8)(var6, var3);
                    _fun0008_ip = 157; continue _fun0008;
 130:
                    var3 = 41;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.connectAndOpen;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
 157:
                    return var1;
                }
            };
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['VoiceChannelButtons'] = var4;
    var4 = function ConnectPlatformButton(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var6 = var1.type;
            var _closure2_slot0 = var6;
            var1 = var1.onAction;
            var _closure2_slot1 = var1;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot22;
            var8 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 23;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var2.newestAnalyticsLocation;
            var _closure2_slot2 = var2;
            var3 = _closure1_slot0;
            var2 = 19;
            var2 = var7[var2];
            var9 = var3.bind(var4)(var2);
            var7 = var9.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot8;
                var3 = var4.getAccount;
                var1 = _closure2_slot0;
                var2 = null;
                var1 = var3.bind(var4)(var2, var1);
                var1 = var2 != var1;
                return var1;
            };
            var2 = var7.bind(var9)(var3, var2);
            if(var2) { _fun0009_ip = 383; continue _fun0009 }
 127:
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 43;
            var2 = var12[var2];
            var3 = var13.bind(var4)(var2);
            var2 = var3.get;
            var9 = var2.bind(var3)(var6);
            _closure2_slot3 = var9;
            var3 = _closure1_slot21;
            var11 = _closure1_slot0;
            var1 = 20;
            var1 = var12[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var6 = 21;
            var7 = var12[var6];
            var7 = var11.bind(var4)(var7);
            var14 = var7.intl;
            var10 = var14.formatToPlainString;
            var6 = var12[var6];
            var6 = var11.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.XWSHTU;
            var6 = {};
            var15 = var9.name;
            var6['platform'] = var15;
            var6 = var10.bind(var14)(var7, var6);
            var1['text'] = var6;
            var10 = 34;
            var6 = var12[var10];
            var7 = var13.bind(var4)(var6);
            var6 = {};
            var10 = var12[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.Sizes;
            var10 = var10.SMALL;
            var6['size'] = var10;
            var10 = 44;
            var10 = var12[var10];
            var11 = var11.bind(var4)(var10);
            var10 = var11.makeSource;
            var9 = var9.icon;
            var9 = var9.whitePNG;
            var9 = var10.bind(var11)(var9);
            var6['source'] = var9;
            var9 = true;
            var6['disableColor'] = var9;
            var8 = var8.icon;
            var6['style'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var1['icon'] = var6;
            var6 = 'secondary';
            var1['variant'] = var6;
            var5 = function onPress() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var5 = _closure2_slot1;
                    var3 = {};
                    var7 = _closure2_slot0;
                    var1 = _closure1_slot17;
                    var6 = var1.PLAYSTATION;
                    var1 = 'PRESS_CONNECT_XBOX_BUTTON';
                    if(!(var7 === var6)) { _fun0010_ip = 42; continue _fun0010 }
 36:
                    var1 = 'PRESS_CONNECT_PLAYSTATION_BUTTON';
 42:
                    var3['action'] = var1;
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 45;
                    var2 = var5[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var5 = _closure2_slot3;
                    var5 = var5.type;
                    var2['platformType'] = var5;
                    var4 = _closure2_slot2;
                    var2['location'] = var4;
                    var4 = function onClose() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 46;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openUserSettings;
                        var1 = {};
                        var4 = _closure1_slot18;
                        var4 = var4.CONNECTIONS;
                        var1['screen'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2['onClose'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 383:
            var1 = null;
            return var1;
        }
    };
    var3['ConnectPlatformButton'] = var4;
    var2 = function CustomActivityButton(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var2 = var1.user;
            var _closure2_slot0 = var2;
            var8 = var1.activity;
            var _closure2_slot1 = var8;
            var9 = var1.index;
            var _closure2_slot2 = var9;
            var1 = var1.onAction;
            var _closure2_slot3 = var1;
            var1 = var8.buttons;
            var3 = null;
            var2 = var3 == var1;
            var1 = null;
            if(var2) { _fun0011_ip = 252; continue _fun0011 }
 63:
            var2 = var8.buttons;
            var2 = var2.length;
            var2 = var9 >= var2;
            var1 = null;
            if(var2) { _fun0011_ip = 252; continue _fun0011 }
 86:
            var5 = _closure1_slot21;
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 20;
            var2 = var12[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.Button;
            var2 = {};
            var11 = _closure1_slot1;
            var10 = 47;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.bind(var4)(var8);
            if(var10) { _fun0011_ip = 159; continue _fun0011 }
 147:
            var8 = var8.buttons;
            var8 = var8[var9];
            _fun0011_ip = 214; continue _fun0011;
 159:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 21;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.I6JG4+;
            var8 = var10.bind(var11)(var9);
 214:
            var2['text'] = var8;
            var8 = 'secondary';
            var2['variant'] = var8;
            var7 = _closure1_slot3;
            var6 = function* () {
                var1 = function* anon_0_() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0012_ip = 351; continue _fun0012 }
 12:
                        var2 = undefined;
                        var9 = undefined;
                        var6 = undefined;
                        var5 = undefined;
                        var _closure4_slot0 = var2;
                        var4 = _closure2_slot3;
                        var3 = {};
                        var10 = 'PRESS_CUSTOM_BUTTON';
                        var3['action'] = var10;
                        var3 = var4.bind(var2)(var3);
 48: // try_start_0
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var3 = 48;
                        var3 = var11[var3];
                        var12 = var10.bind(var2)(var3);
                        var11 = var12.getMetadata;
                        var10 = _closure2_slot1;
                        var3 = _closure2_slot0;
                        var3 = var3.id;
                        var3 = var11.bind(var12)(var10, var3);
                        SaveGenerator(address=100);
 98:
                        return var3;
 100:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                        if(var10) { _fun0012_ip = 343; continue _fun0012 }
 109:
                        var9 = var3;
                        var10 = var3.button_urls;
                        var11 = var10.length;
                        var10 = _closure2_slot2;
                        if(!(!(var11 <= var10))) { _fun0012_ip = 340; continue _fun0012 }
 134:
                        var9 = var9.button_urls;
                        var8 = _closure2_slot2;
                        var8 = var9[var8];
                        var6 = var8;
                        var9 = 'string';
                        var8 = typeof var8;
                        if(!(var9 === var8)) { _fun0012_ip = 337; continue _fun0012 }
 165:
                        var10 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var8 = 49;
                        var9 = var9[var8];
                        var10 = var10.bind(var2)(var9);
                        var9 = var10.safeParseWithQuery;
                        var6 = var9.bind(var10)(var6);
                        var5 = var6;
                        var9 = null;
                        var10 = var9 == var6;
                        var6 = undefined;
                        if(var10) { _fun0012_ip = 219; continue _fun0012 }
 210:
                        var10 = var5;
                        var6 = var10.protocol;
 219:
                        if(!(var9 != var6)) { _fun0012_ip = 334; continue _fun0012 }
 223:
                        var6 = var5;
                        var10 = var9 == var6;
                        var6 = undefined;
                        if(var10) { _fun0012_ip = 244; continue _fun0012 }
 235:
                        var10 = var5;
                        var6 = var10.hostname;
 244:
                        if(!(var9 != var6)) { _fun0012_ip = 334; continue _fun0012 }
 248:
                        var9 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var8 = var6[var8];
                        var9 = var9.bind(var2)(var8);
                        var8 = var9.format;
                        var8 = var8.bind(var9)(var5);
                        _closure4_slot0 = var8;
                        var5 = _closure1_slot0;
                        var4 = 50;
                        var4 = var6[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.handleClick;
                        var4 = {};
                        var4['href'] = var8;
                        var7 = function onConfirm() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 37;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.openURL;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var4['onConfirm'] = var7;
                        var7 = false;
                        var4['trusted'] = var7;
                        var4 = var5.bind(var6)(var4);
 332: // try_end0
                        _fun0012_ip = 348; continue _fun0012;
 334:
                        return var2;
 337:
                        return var2;
 340:
                        return var2;
 343:
                        return var3;
 346: // catch_target0
                        CatchBlockStart(arg_register=2);
 348:
                        return var2;
 351:
                        return var1;
                    }
                };
                return var1;
            };
            var6 = var7.bind(var4)(var6);
            var2['onPress'] = var6;
            var1 = var5.bind(var4)(var3, var2);
 252:
            return var1;
        }
    };
    var3['CustomActivityButton'] = var2;
    return var1;
})();