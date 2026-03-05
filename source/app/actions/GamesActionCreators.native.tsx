// app/actions/GamesActionCreators.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function fetchJoinSecret(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var2;
            var10 = var4.userId;
            var9 = var4.sessionId;
            var2 = var4.application;
            var6 = var4.channelId;
            var3 = var4.messageId;
            var12 = var4.remotePartyId;
            var8 = var2.id;
            var _closure2_slot1 = var8;
            var4 = null;
            var2 = var4 != var6;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var4 != var3;
case 2:
            var4 = undefined;
            var5 = undefined;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = {};
            var2['channel_id'] = var6;
            var2['message_id'] = var3;
            var3 = true;
            var2['headless'] = var3;
            var5 = var2;
case 4:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 4;
            var2 = var7[var2];
            var11 = var3.bind(var4)(var2);
            var3 = var11.dispatch;
            var2 = {};
            var13 = 'ACTIVITY_JOIN_LOADING';
            var2['type'] = var13;
            var2['applicationId'] = var8;
            var2['remotePartyId'] = var12;
            var2 = var3.bind(var11)(var2);
            var3 = _closure1_slot0;
            var2 = 5;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.HTTP;
            var3 = var4.get;
            var2 = {'url': null, 'retries': 3, 'query': null, 'oldFormErrors': true, 'rejectWithError': true};
            var7 = _closure1_slot4;
            var6 = var7.USER_ACTIVITY_JOIN;
            var6 = var6.bind(var7)(var10, var9, var8);
            var2['url'] = var6;
            var2['query'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'ACTIVITY_JOIN_FAILED';
                var1['type'] = var4;
                var4 = _closure2_slot1;
                var1['applicationId'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = false;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var4 = function joinWithSecret(arg1, arg2) {
        var1 = _closure1_slot5;
        var6 = var1.GAME_INVITE_FRAGMENT;
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = '';
        var3 = arg1;
        var1 = arg2;
        var5 = var5.bind(var4)(var3, var6, var1);
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.openURL;
        var2 = _closure1_slot6;
        var2 = var2.SAFARI;
        var2 = var3.bind(var4)(var5, var2);
        return var1;
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.Endpoints;
    var _closure1_slot4 = var8;
    var8 = var2.DiscordConnectDeeplinks;
    var _closure1_slot5 = var8;
    var2 = var2.WebBrowserType;
    var _closure1_slot6 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ActivityIntent;
    var _closure1_slot7 = var2;
    var2 = {};
    var8 = function addGame() {
        var1 = undefined;
        return var1;
    };
    var2['addGame'] = var8;
    var8 = function toggleOverlay() {
        var1 = undefined;
        return var1;
    };
    var2['toggleOverlay'] = var8;
    var8 = function editName() {
        var1 = undefined;
        return var1;
    };
    var2['editName'] = var8;
    var8 = function identifyGame() {
        var1 = global;
        var3 = var1.Promise;
        var2 = var3.reject;
        var5 = var1.Error;
        var1 = var5.prototype;
        var4 = Object.create(var1, {constructor: {value: var5}});
        var6 = 'not supported';
        var7 = var4;
        var1 = new var7[var5](var6, var5);
        var1 = var1 instanceof Object ? var1 : var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['identifyGame'] = var8;
    var8 = function getDetectableGames() {
        var1 = undefined;
        return var1;
    };
    var2['getDetectableGames'] = var8;
    var8 = function reportUnverifiedGame() {
        var1 = undefined;
        return var1;
    };
    var2['reportUnverifiedGame'] = var8;
    var8 = function uploadIcon() {
        var1 = undefined;
        return var1;
    };
    var2['uploadIcon'] = var8;
    var8 = function deleteEntry() {
        var1 = undefined;
        return var1;
    };
    var2['deleteEntry'] = var8;
    var8 = function launch() {
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.resolve;
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['launch'] = var8;
    var7 = function join(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = _closure2_slot0;
                    var5 = var4.application;
                    var13 = var4.channelId;
                    var2 = var4.embedded;
                    var11 = var4.source;
                    var10 = var4.locationObject;
                    var4 = undefined;
                    if(!(var4 === var10)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var10 = {};
case 8:
                    var7 = _closure2_slot0;
                    var9 = var7.analyticsLocations;
                    if(!(var4 === var9)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var9 = new Array(0);
case 10:
                    var7 = _closure2_slot0;
                    var7 = var7.remotePartyId;
                    if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var2 = null;
                    if(!(var2 == var7)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var7 = _closure2_slot0;
                    var2 = function joinViaDeeplink(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var4 = arg1;
                            var _closure5_slot0 = var4;
                            var5 = var4.application;
                            var _closure5_slot2 = var5;
                            var7 = var5.id;
                            var9 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var8 = 3;
                            var6 = var3[var8];
                            var3 = undefined;
                            var6 = var9.bind(var3)(var6);
                            var6 = var6.DISCORD_CONNECT_EXAMPLE_APP_APPLICATION_ID;
                            if(!(var7 !== var6)) { _fun0003_ip = 2; continue _fun0003 }
case 16:
                            var6 = var5.deeplink_uri;
                            _fun0003_ip = 17; continue _fun0003;
case 2:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var8];
                            var5 = var7.bind(var3)(var5);
                            var6 = var5.DISCORD_CONNECT_EXAMPLE_APP_DEEPLINK_URI;
case 17:
                            var _closure5_slot1 = var6;
                            var5 = null;
                            if(!(var5 != var6)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                            var2 = _closure1_slot8;
                            var1 = function(arg1) {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                    var1 = arg1;
                                    var1 = var1.body;
                                    var6 = var1.secret;
                                    var2 = _closure1_slot9;
                                    var1 = _closure5_slot1;
                                    var3 = undefined;
                                    var1 = var2.bind(var3)(var1, var6);
                                    var2 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var1 = 4;
                                    var1 = var7[var1];
                                    var3 = var2.bind(var3)(var1);
                                    var2 = var3.dispatch;
                                    var1 = {};
                                    var7 = 'ACTIVITY_JOIN';
                                    var1['type'] = var7;
                                    var7 = _closure5_slot2;
                                    var7 = var7.id;
                                    var1['applicationId'] = var7;
                                    var1['secret'] = var6;
                                    var5 = _closure1_slot7;
                                    var5 = var5.PLAY;
                                    var1['intent'] = var5;
                                    var4 = _closure5_slot0;
                                    var5 = var4.embedded;
                                    var4 = null;
                                    var4 = var4 != var5;
                                    if(!var4) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                                    var4 = var5;
case 20:
                                    var1['embedded'] = var4;
                                    var1 = var2.bind(var3)(var1);
                                    var1 = true;
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var4, var1);
                            _fun0003_ip = 22; continue _fun0003;
case 18:
                            var2 = global;
                            var4 = var2.Promise;
                            var3 = var4.resolve;
                            var2 = false;
                            var1 = var3.bind(var4)(var2);
case 22:
                            return var1;
                        }
                    };
                    var2 = var2.bind(var4)(var7);
                    _fun0002_ip = 23; continue _fun0002;
case 14:
                    var7 = _closure1_slot8;
                    var6 = _closure2_slot0;
                    var3 = function() {
                        var1 = true;
                        return var1;
                    };
                    var2 = var7.bind(var4)(var6, var3);
case 23:
                    return var2;
case 12:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 7;
                    var2 = var7[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.canLaunchFrame;
                    var2 = var2.bind(var3)(var5);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    if(var2) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var2 = 9;
                    var2 = var6[var2];
                    var8 = var3.bind(var4)(var2);
                    var2 = {};
                    var7 = var5.id;
                    var2['applicationId'] = var7;
                    var7 = null;
                    var14 = var7 != var13;
                    var12 = undefined;
                    if(!var14) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var12 = var13;
case 26:
                    var2['activityChannelId'] = var12;
                    var2['source'] = var11;
                    var2['locationObject'] = var10;
                    var2['analyticsLocations'] = var9;
                    var2 = var8.bind(var4)(var2);
                    SaveGenerator(address=246);
case 28:
                    return var2;
case 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                    var7 = var7 != var2;
                    if(!var7) { _fun0002_ip = 32; continue _fun0002 }
case 33:
                    var7 = var2;
case 32:
                    return var7;
case 30:
                    return var2;
case 24:
                    var2 = 8;
                    var2 = var6[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.launchFrame;
                    var2 = {};
                    var5 = var5.id;
                    var2['applicationId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=306);
case 34:
                    return var2;
case 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 36; continue _fun0002 }
case 37:
                    var3 = true;
                    return var3;
case 36:
                    return var2;
case 6:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['join'] = var7;
    var2['joinWithSecret'] = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/GamesActionCreators.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();