// app/modules/user_profile/native/UserProfileActivityButtons.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.PlatformTypes;
    var _closure1_slot13 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.SpotifyEndpoints;
    var _closure1_slot15 = var7;
    var4 = var4.SpotifyResourceTypes;
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot17 = var8;
    var4 = 14;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 15;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.CONTROL_SECONDARY_TEXT_DEFAULT;
    var10['tintColor'] = var11;
    var4['icon'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot18 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AppsIcon;
    var4 = {'size': 'sm', 'color': 'white'};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot19 = var4;
    var4 = 45;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileActivityButtons.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function JoinActivityButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.user;
            var _closure2_slot0 = var1;
            var3 = var2.currentUser;
            var _closure2_slot1 = var3;
            var4 = var2.activity;
            var _closure2_slot2 = var4;
            var3 = var2.application;
            var _closure2_slot3 = var3;
            var2 = var2.onAction;
            var _closure2_slot4 = var2;
            var5 = undefined;
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 17;
            var2 = var9[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var2 = var2.analyticsLocations;
            var _closure2_slot5 = var2;
            var10 = _closure1_slot4;
            var9 = var10.getEmbeddedActivityForUserId;
            var7 = var1.id;
            var2 = null;
            var11 = var2 == var3;
            var1 = undefined;
            if(var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3.id;
case 2:
            var10 = var9.bind(var10)(var7, var1);
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 18;
            var1 = var9[var1];
            var9 = var7.bind(var5)(var1);
            var7 = var9.getEmbeddedActivityLocationChannelId;
            var11 = var2 == var10;
            var1 = undefined;
            if(var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var10.location;
case 4:
            var1 = var7.bind(var9)(var1);
            _closure2_slot6 = var1;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 19;
            var9 = var10[var1];
            var13 = var7.bind(var5)(var9);
            var12 = var13.useStateFromStores;
            var11 = new Array(0);
            var9 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 20;
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
            var9 = var12.bind(var13)(var11, var9);
            _closure2_slot7 = var9;
            var1 = var10[var1];
            var11 = var7.bind(var5)(var1);
            var9 = var11.useStateFromStores;
            var1 = _closure1_slot5;
            var7 = new Array(7);
            var7[0] = var1;
            var1 = _closure1_slot8;
            var7[1] = var1;
            var1 = _closure1_slot7;
            var7[2] = var1;
            var1 = _closure1_slot10;
            var7[3] = var1;
            var1 = _closure1_slot11;
            var7[4] = var1;
            var1 = _closure1_slot12;
            var7[5] = var1;
            var1 = _closure1_slot9;
            var7[6] = var1;
            var1 = function() {
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 21;
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
                var5 = _closure1_slot5;
                var1['ChannelStore'] = var5;
                var5 = _closure1_slot8;
                var1['GuildStore'] = var5;
                var5 = _closure1_slot7;
                var1['GuildMemberCountStore'] = var5;
                var5 = _closure1_slot10;
                var1['RelationshipStore'] = var5;
                var5 = _closure1_slot11;
                var1['SelectedChannelStore'] = var5;
                var5 = _closure1_slot12;
                var1['VoiceStateStore'] = var5;
                var4 = _closure1_slot9;
                var1['PermissionStore'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var9.bind(var11)(var7, var1);
            var9 = _closure1_slot1;
            var1 = 22;
            var1 = var10[var1];
            var1 = var9.bind(var5)(var1);
            var4 = var1.bind(var5)(var4);
            var1 = null;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var2 != var3;
            var1 = null;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var1 = null;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var4 = _closure1_slot17;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 23;
            var2 = var13[var2];
            var2 = var12.bind(var5)(var2);
            var3 = var2.Button;
            var2 = {};
            var9 = 24;
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.4i2vj+;
            var9 = var10.bind(var11)(var9);
            var2['text'] = var9;
            var8 = _closure1_slot19;
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
                var2 = 25;
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
                var2 = 26;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var3['JoinActivityButton'] = var4;
    var4 = function PlayOnSpotifyButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var14 = var1.activity;
            var1 = var1.onAction;
            var _closure2_slot0 = var1;
            var1 = _closure1_slot18;
            var5 = undefined;
            var10 = var1.bind(var5)();
            var2 = var14.sync_id;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 27;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var4 = var1.bind(var5)(var14);
            var3 = null;
            var1 = null;
            if(!var4) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = var3 != var2;
            var1 = null;
            if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 12:
            var4 = _closure1_slot17;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 23;
            var2 = var13[var2];
            var2 = var9.bind(var5)(var2);
            var3 = var2.Button;
            var2 = {};
            var8 = 24;
            var11 = var13[var8];
            var11 = var9.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.formatToPlainString;
            var8 = var13[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.t;
            var9 = var8.LEgD7t;
            var8 = {};
            var14 = var14.name;
            var8['platform'] = var14;
            var8 = var11.bind(var12)(var9, var8);
            var2['text'] = var8;
            var12 = _closure1_slot1;
            var11 = 28;
            var8 = var13[var11];
            var9 = var12.bind(var5)(var8);
            var8 = {};
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var11 = var11.Sizes;
            var11 = var11.SMALL;
            var8['size'] = var11;
            var11 = 29;
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
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var2 = undefined;
                        var7 = undefined;
                        var4 = _closure2_slot0;
                        var3 = {};
                        var6 = 'PRESS_PLAY_ON_SPOTIFY_BUTTON';
                        var3['action'] = var6;
                        var3 = var4.bind(var2)(var3);
case 15: // try_start_0
                        var8 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var4 = 30;
                        var3 = var3[var4];
                        var8 = var8.bind(var2)(var3);
                        var3 = var8.canOpenSpotifyUrl;
                        var3 = var3.bind(var8)();
                        SaveGenerator(address=75);
case 16:
                        return var3;
case 17:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                        if(var8) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                        var7 = var3;
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var4 = var10[var4];
                        var9 = var8.bind(var2)(var4);
                        if(var3) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                        var4 = var9.attributeInstall;
                        var4 = var4.bind(var9)();
                        var8 = _closure1_slot1;
                        var4 = 31;
                        var4 = var10[var4];
                        var10 = var8.bind(var2)(var4);
                        var8 = var10.openURL;
                        var4 = _closure1_slot15;
                        var4 = var4.APP_STORE;
                        var4 = var8.bind(var10)(var4);
                        _fun0003_ip = 22; continue _fun0003;
case 20:
                        var8 = var9.openUrl;
                        var6 = _closure1_slot16;
                        var6 = var6.TRACK;
                        var5 = _closure2_slot1;
                        var4 = var8.bind(var9)(var7, var6, var5);
case 22: // try_end0
                        return var4;
case 18:
                        return var3;
case 23: // catch_target0
                        CatchBlockStart(arg_register=2);
                        return var2;
case 13:
                        return var1;
                    }
                };
                return var1;
            };
            var6 = var7.bind(var5)(var6);
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var3['PlayOnSpotifyButton'] = var4;
    var4 = function WatchActivityButton(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var4 = var1.activity;
            var1 = var1.onAction;
            var _closure2_slot0 = var1;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 32;
            var1 = var8[var1];
            var5 = undefined;
            var1 = var7.bind(var5)(var1);
            var3 = var1.bind(var5)(var4);
            var _closure2_slot1 = var3;
            var1 = 33;
            var1 = var8[var1];
            var1 = var7.bind(var5)(var1);
            var7 = var1.bind(var5)(var4);
            var4 = null;
            var1 = null;
            if(!var7) { _fun0004_ip = 24; continue _fun0004 }
case 11:
            var3 = var4 != var3;
            var1 = null;
            if(!var3) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var4 = _closure1_slot17;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 23;
            var2 = var11[var2];
            var2 = var10.bind(var5)(var2);
            var3 = var2.Button;
            var2 = {};
            var7 = 24;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.I6JG46;
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
                var3 = 31;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.openURL;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2['onPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 24:
            return var1;
        }
    };
    var3['WatchActivityButton'] = var4;
    var4 = function VoiceChannelButtons(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var11 = var1.channel;
            var _closure2_slot0 = var11;
            var7 = var1.isInChannel;
            var1 = var1.onAction;
            var _closure2_slot1 = var1;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 17;
            var1 = var6[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.newestAnalyticsLocation;
            var _closure2_slot2 = var1;
            var1 = var11.isGuildStageVoice;
            var8 = var1.bind(var11)();
            var _closure2_slot3 = var8;
            var3 = _closure1_slot17;
            var2 = _closure1_slot0;
            var1 = 23;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var6 = var11.isDM;
            var10 = var6.bind(var11)();
            if(var7) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            if(var10) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var6 = var11.isGroupDM;
            var6 = var6.bind(var11)();
            if(var6) { _fun0005_ip = 28; continue _fun0005 }
case 30:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 24;
            var13 = var15[var6];
            var13 = var12.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var6 = var15[var6];
            var6 = var12.bind(var4)(var6);
            var12 = var6.t;
            if(var8) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var6 = var12.96ANUN;
            var6 = var13.bind(var14)(var6);
            _fun0005_ip = 33; continue _fun0005;
case 31:
            var12 = var12.7vb2cc;
            var6 = var13.bind(var14)(var12);
case 33:
            _fun0005_ip = 34; continue _fun0005;
case 28:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 24;
            var13 = var16[var12];
            var13 = var15.bind(var4)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.ozoE2A;
            var6 = var13.bind(var14)(var12);
case 34:
            _fun0005_ip = 35; continue _fun0005;
case 26:
            if(var10) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var10 = var11.isGroupDM;
            var10 = var10.bind(var11)();
            if(var10) { _fun0005_ip = 36; continue _fun0005 }
case 38:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 24;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            if(var8) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var8 = var10.BXxdl7;
            var8 = var11.bind(var12)(var8);
            _fun0005_ip = 41; continue _fun0005;
case 39:
            var10 = var10.Acqcot;
            var8 = var11.bind(var12)(var10);
case 41:
            _fun0005_ip = 42; continue _fun0005;
case 36:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 24;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.7hwn2A;
            var8 = var10.bind(var11)(var9);
case 42:
            var6 = var8;
case 35:
            var1['text'] = var6;
            var6 = 'active';
            if(!var7) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var6 = 'secondary';
case 43:
            var1['variant'] = var6;
            var6 = true;
            var1['grow'] = var6;
            var5 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = {};
                    var1 = 'PRESS_JOIN_CALL_BUTTON';
                    var3['action'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 26;
                    var3 = var6[var3];
                    var7 = var4.bind(var1)(var3);
                    var3 = var7.hideActionSheet;
                    var3 = var3.bind(var7)();
                    var3 = 34;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.popAll;
                    var3 = var3.bind(var4)();
                    var3 = _closure2_slot3;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    if(var3) { _fun0006_ip = 29; continue _fun0006 }
case 45:
                    var3 = 36;
                    var3 = var5[var3];
                    var8 = var4.bind(var1)(var3);
                    var7 = var8.openGuildVoiceModal;
                    var6 = _closure2_slot0;
                    var3 = _closure2_slot2;
                    var3 = var7.bind(var8)(var6, var3);
                    _fun0006_ip = 46; continue _fun0006;
case 29:
                    var3 = 35;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.connectAndOpen;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
case 46:
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
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var6 = var1.type;
            var _closure2_slot0 = var6;
            var1 = var1.onAction;
            var _closure2_slot1 = var1;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot18;
            var8 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 17;
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
            var2 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var4 = _closure1_slot6;
                var3 = var4.getAccount;
                var1 = _closure2_slot0;
                var2 = null;
                var1 = var3.bind(var4)(var2, var1);
                var1 = var2 != var1;
                return var1;
            };
            var2 = var7.bind(var9)(var3, var2);
            if(var2) { _fun0007_ip = 47; continue _fun0007 }
case 27:
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 37;
            var2 = var12[var2];
            var3 = var13.bind(var4)(var2);
            var2 = var3.get;
            var9 = var2.bind(var3)(var6);
            _closure2_slot3 = var9;
            var3 = _closure1_slot17;
            var11 = _closure1_slot0;
            var1 = 23;
            var1 = var12[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var6 = 24;
            var7 = var12[var6];
            var7 = var11.bind(var4)(var7);
            var14 = var7.intl;
            var10 = var14.formatToPlainString;
            var6 = var12[var6];
            var6 = var11.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.XWSHTb;
            var6 = {};
            var15 = var9.name;
            var6['platform'] = var15;
            var6 = var10.bind(var14)(var7, var6);
            var1['text'] = var6;
            var10 = 28;
            var6 = var12[var10];
            var7 = var13.bind(var4)(var6);
            var6 = {};
            var10 = var12[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.Sizes;
            var10 = var10.SMALL;
            var6['size'] = var10;
            var10 = 38;
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
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = _closure2_slot1;
                    var3 = {};
                    var7 = _closure2_slot0;
                    var1 = _closure1_slot13;
                    var6 = var1.PLAYSTATION;
                    var1 = 'PRESS_CONNECT_XBOX_BUTTON';
                    if(!(var7 === var6)) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                    var1 = 'PRESS_CONNECT_PLAYSTATION_BUTTON';
case 48:
                    var3['action'] = var1;
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 39;
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
                        var1 = 40;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.openUserSettings;
                        var1 = {};
                        var4 = _closure1_slot14;
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
case 47:
            var1 = null;
            return var1;
        }
    };
    var3['ConnectPlatformButton'] = var4;
    var2 = function CustomActivityButton(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
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
            if(var2) { _fun0009_ip = 50; continue _fun0009 }
case 51:
            var2 = var8.buttons;
            var2 = var2.length;
            var2 = var9 >= var2;
            var1 = null;
            if(var2) { _fun0009_ip = 50; continue _fun0009 }
case 52:
            var5 = _closure1_slot17;
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 23;
            var2 = var12[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.Button;
            var2 = {};
            var11 = _closure1_slot1;
            var10 = 41;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.bind(var4)(var8);
            if(var10) { _fun0009_ip = 53; continue _fun0009 }
case 54:
            var8 = var8.buttons;
            var8 = var8[var9];
            _fun0009_ip = 33; continue _fun0009;
case 53:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 24;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.I6JG46;
            var8 = var10.bind(var11)(var9);
case 33:
            var2['text'] = var8;
            var8 = 'secondary';
            var2['variant'] = var8;
            var7 = _closure1_slot3;
            var6 = function* () {
                var1 = function* anon_0_() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0010_ip = 55; continue _fun0010 }
case 56:
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
case 57: // try_start_0
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var3 = 42;
                        var3 = var11[var3];
                        var12 = var10.bind(var2)(var3);
                        var11 = var12.getMetadata;
                        var10 = _closure2_slot1;
                        var3 = _closure2_slot0;
                        var3 = var3.id;
                        var3 = var11.bind(var12)(var10, var3);
                        SaveGenerator(address=100);
case 58:
                        return var3;
case 59:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=9);
                        if(var10) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                        var9 = var3;
                        var10 = var3.button_urls;
                        var11 = var10.length;
                        var10 = _closure2_slot2;
                        if(!(!(var11 <= var10))) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                        var9 = var9.button_urls;
                        var8 = _closure2_slot2;
                        var8 = var9[var8];
                        var6 = var8;
                        var9 = 'string';
                        var8 = typeof var8;
                        if(!(var9 === var8)) { _fun0010_ip = 64; continue _fun0010 }
case 65:
                        var10 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var8 = 43;
                        var9 = var9[var8];
                        var10 = var10.bind(var2)(var9);
                        var9 = var10.safeParseWithQuery;
                        var6 = var9.bind(var10)(var6);
                        var5 = var6;
                        var9 = null;
                        var10 = var9 == var6;
                        var6 = undefined;
                        if(var10) { _fun0010_ip = 66; continue _fun0010 }
case 67:
                        var10 = var5;
                        var6 = var10.protocol;
case 66:
                        if(!(var9 != var6)) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                        var6 = var5;
                        var10 = var9 == var6;
                        var6 = undefined;
                        if(var10) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                        var10 = var5;
                        var6 = var10.hostname;
case 70:
                        if(!(var9 != var6)) { _fun0010_ip = 68; continue _fun0010 }
case 72:
                        var9 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var8 = var6[var8];
                        var9 = var9.bind(var2)(var8);
                        var8 = var9.format;
                        var8 = var8.bind(var9)(var5);
                        _closure4_slot0 = var8;
                        var5 = _closure1_slot0;
                        var4 = 44;
                        var4 = var6[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.handleClick;
                        var4 = {};
                        var4['href'] = var8;
                        var7 = function onConfirm() {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 31;
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
case 73: // try_end0
                        _fun0010_ip = 7; continue _fun0010;
case 68:
                        return var2;
case 64:
                        return var2;
case 62:
                        return var2;
case 60:
                        return var3;
case 74: // catch_target0
                        CatchBlockStart(arg_register=2);
case 7:
                        return var2;
case 55:
                        return var1;
                    }
                };
                return var1;
            };
            var6 = var7.bind(var4)(var6);
            var2['onPress'] = var6;
            var1 = var5.bind(var4)(var3, var2);
case 50:
            return var1;
        }
    };
    var3['CustomActivityButton'] = var2;
    return var1;
})();