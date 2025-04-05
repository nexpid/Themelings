// app/modules/spotify/SpotifyActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = option;
    yankee = function(argFoo, argBar, argBaz, argCor) { // Original name: apiRequest
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            report = argCor;
            michal = arguments[4];
            var _closure2_slot0 = tangon;
            zuuluu = argBar;
            var _closure2_slot1 = zuuluu;
            var _closure2_slot2 = report;
            zuuluu = undefined;
            if(!(michal === zuuluu)) { _fun00002_ip = 35; continue _fun00001 }
 32:
            michal = 1;
 35:
            var _closure2_slot3 = michal;
            michal = {};
            offset = michal;
            verify = report;
            report = copyDataProperties(offset, verify);
            oscard = {};
            report = global;
            report = report.HermesInternal;
            option = report.concat;
            golfie = 'Bearer ';
            report = argBaz;
            report = option.bind(golfie)(report);
            oscard['authorization'] = report;
            report = 'headers';
            michal[report] = oscard;
            _closure2_slot2 = michal;
            tangon = tangon.bind(zuuluu)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = tangon.status;
                    michal = 202;
                    entity = tangon;
                    if(!(michal === zuuluu)) { _fun00004_ip = 37; continue _fun00003 }
 18:
                    michal = global;
                    zuuluu = michal.Promise;
                    michal = zuuluu.reject;
                    entity = michal.bind(zuuluu)(tangon);
 37:
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.catch;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure2_slot2;
                    report = tangon.onlyRetryOnAuthorizationErrors;
                    tangon = true;
                    tangon = tangon !== report;
                    if(!tangon) { _fun00006_ip = 39; continue _fun00005 }
 27:
                    oscard = zuuluu.status;
                    report = 202;
                    tangon = report === oscard;
 39:
                    oscard = zuuluu.status;
                    report = 401;
                    if(!(report !== oscard)) { _fun00006_ip = 57; continue _fun00005 }
 54:
                    if(!tangon) { _fun00006_ip = 67; continue _fun00005 }
 57:
                    tangon = _closure2_slot3;
                    entity = 0;
                    if(!(!(tangon > entity))) { _fun00006_ip = 88; continue _fun00005 }
 67:
                    entity = global;
                    tangon = entity.Promise;
                    entity = tangon.reject;
                    entity = entity.bind(tangon)(zuuluu);
                    _fun00006_ip = 207; continue _fun00005;
 88:
                    tangon = zuuluu.status;
                    zuuluu = 202;
                    if(!(zuuluu !== tangon)) { _fun00006_ip = 120; continue _fun00005 }
 100:
                    zuuluu = global;
                    tangon = zuuluu.Promise;
                    zuuluu = tangon.resolve;
                    report = zuuluu.bind(tangon)();
                    _fun00006_ip = 162; continue _fun00005;
 120:
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 3;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    oscard = oscard.bind(zuuluu)(tangon);
                    tangon = oscard.timeoutPromise;
                    zuuluu = 5000;
                    report = tangon.bind(oscard)(zuuluu);
 162:
                    tangon = report.then;
                    zuuluu = function() {
                        zuuluu = _closure1_slot11;
                        michal = _closure2_slot1;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.then;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.body;
                        offset = entity.access_token;
                        oscard = _closure1_slot10;
                        romeon = _closure2_slot0;
                        yankee = _closure2_slot1;
                        verify = _closure2_slot2;
                        michal = _closure2_slot3;
                        entity = 1;
                        option = michal - entity;
                        foxtra = undefined;
                        entity = foxtra[oscard](romeon, yankee, offset, verify, option, golfie);
                        return entity;
                    };
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.then;
                    michal = function(argFoo) {
                        michal = argFoo;
                        var _closure4_slot0 = michal;
                        michal = global;
                        zuuluu = michal.Promise;
                        michal = zuuluu.prototype;
                        michal = Object.create(michal, {constructor: {value: zuuluu}});
                        tangon = function(argFoo) {
                            michal = argFoo;
                            var _closure5_slot0 = michal;
                            michal = global;
                            zuuluu = michal.setImmediate;
                            michal = undefined;
                            entity = function() {
                                zuuluu = _closure5_slot0;
                                michal = _closure4_slot0;
                                entity = undefined;
                                entity = zuuluu.bind(entity)(michal);
                                return entity;
                            };
                            entity = zuuluu.bind(michal)(entity);
                            return entity;
                        };
                        report = michal;
                        entity = new report[zuuluu](tangon, zuuluu);
                        entity = entity instanceof Object ? entity : michal;
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(michal);
 207:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot10 = yankee;
    tangon = function(argFoo) { // Original name: getAccessToken
        option = argFoo;
        var _closure2_slot0 = option;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 4;
        zuuluu = zuuluu[michal];
        michal = undefined;
        michal = tangon.bind(michal)(zuuluu);
        tangon = michal.HTTP;
        zuuluu = tangon.get;
        michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        golfie = _closure1_slot7;
        oscard = golfie.CONNECTION_ACCESS_TOKEN;
        report = _closure1_slot8;
        report = report.SPOTIFY;
        report = oscard.bind(golfie)(report, option);
        michal['url'] = report;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.catch;
        michal = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                entity = zuuluu.body;
                michal = null;
                michal = michal == entity;
                tangon = undefined;
                report = undefined;
                if(michal) { _fun00008_ip = 26; continue _fun00007 }
 21:
                report = entity.code;
 26:
                michal = _closure1_slot6;
                michal = michal.CONNECTION_REVOKED;
                if(!(report !== michal)) { _fun00008_ip = 199; continue _fun00007 }
 46:
                report = zuuluu.status;
                michal = 429;
                if(!(michal === report)) { _fun00008_ip = 253; continue _fun00007 }
 64:
                michal = zuuluu.headers;
                report = michal.retry-after;
                oscard = _closure1_slot1;
                golfie = _closure1_slot2;
                michal = 6;
                michal = golfie[michal];
                michal = oscard.bind(tangon)(michal);
                michal = michal.Millis;
                michal = michal.SECOND;
                michal = report * michal;
                report = global;
                report = report.isNaN;
                report = report.bind(tangon)(michal);
                golfie = 5000;
                oscard = golfie;
                if(report) { _fun00008_ip = 149; continue _fun00007 }
 137:
                report = 0;
                oscard = golfie;
                if(!(report !== michal)) { _fun00008_ip = 149; continue _fun00007 }
 146:
                oscard = michal;
 149:
                report = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 3;
                michal = golfie[michal];
                report = report.bind(tangon)(michal);
                michal = report.timeoutPromise;
                oscard = michal.bind(report)(oscard);
                report = oscard.then;
                michal = function() {
                    zuuluu = _closure1_slot11;
                    michal = _closure2_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal = report.bind(oscard)(michal);
                return michal;
 199:
                michal = _closure1_slot1;
                report = _closure1_slot2;
                entity = 5;
                entity = report[entity];
                tangon = michal.bind(tangon)(entity);
                michal = tangon.dispatch;
                entity = {};
                report = 'SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE';
                entity['type'] = report;
                report = _closure2_slot0;
                entity['accountId'] = report;
                entity = michal.bind(tangon)(entity);
 253:
                entity = global;
                michal = entity.Promise;
                entity = michal.reject;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            }
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.then;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.body;
            report = michal.access_token;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 5;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'SPOTIFY_ACCOUNT_ACCESS_TOKEN';
            michal['type'] = oscard;
            oscard = _closure2_slot0;
            michal['accountId'] = oscard;
            michal['accessToken'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot11 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = option[report];
    report = golfie.bind(entity)(report);
    oscard = report.SPOTIFY_APP_PROTOCOL;
    var _closure1_slot4 = oscard;
    report = report.SpotifyEndpoints;
    var _closure1_slot5 = report;
    report = 2;
    report = option[report];
    report = golfie.bind(entity)(report);
    oscard = report.AbortCodes;
    var _closure1_slot6 = oscard;
    oscard = report.Endpoints;
    var _closure1_slot7 = oscard;
    report = report.PlatformTypes;
    var _closure1_slot8 = report;
    report = {};
    romeon = yankee.bind;
    oscard = 4;
    verify = option[oscard];
    verify = golfie.bind(entity)(verify);
    verify = verify.HTTP;
    verify = verify.get;
    offset = null;
    verify = romeon.bind(yankee)(offset, verify);
    report['get'] = verify;
    verify = yankee.bind;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.HTTP;
    oscard = oscard.put;
    oscard = verify.bind(yankee)(offset, oscard);
    report['put'] = oscard;
    var _closure1_slot9 = report;
    oscard = 9;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/spotify/SpotifyActionCreators.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['SpotifyAPI'] = report;
    zuuluu['getAccessToken'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: subscribePlayerStateNotifications
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            option = argBaz;
            michal = arguments[3];
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = report;
            var _closure2_slot2 = option;
            zuuluu = undefined;
            if(!(michal === zuuluu)) { _fun00010_ip = 35; continue _fun00009 }
 32:
            michal = 2;
 35:
            var _closure2_slot3 = michal;
            tangon = _closure1_slot9;
            zuuluu = tangon.put;
            michal = {};
            golfie = _closure1_slot5;
            golfie = golfie.NOTIFICATIONS_PLAYER;
            michal['url'] = golfie;
            golfie = {};
            golfie['connection_id'] = option;
            michal['query'] = golfie;
            zuuluu = zuuluu.bind(tangon)(oscard, report, michal);
            michal = zuuluu.catch;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure2_slot3;
                    entity = 0;
                    if(!(!(michal <= entity))) { _fun00012_ip = 74; continue _fun00011 }
 13:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 3;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.timeoutPromise;
                    entity = 5000;
                    zuuluu = michal.bind(zuuluu)(entity);
                    michal = zuuluu.then;
                    entity = function() {
                        oscard = _closure1_slot12;
                        offset = _closure2_slot0;
                        verify = _closure2_slot1;
                        option = _closure2_slot2;
                        michal = _closure2_slot3;
                        entity = 1;
                        golfie = michal - entity;
                        yankee = undefined;
                        entity = yankee[oscard](offset, verify, option, golfie, oscard);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    _fun00012_ip = 96; continue _fun00011;
 74:
                    michal = global;
                    tangon = michal.Promise;
                    zuuluu = tangon.reject;
                    michal = argFoo;
                    entity = zuuluu.bind(tangon)(michal);
 96:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot12 = tangon;
    zuuluu['subscribePlayerStateNotifications'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getProfile
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot9;
        tangon = report.get;
        zuuluu = {};
        michal = _closure1_slot5;
        michal = michal.PROFILE;
        zuuluu['url'] = michal;
        michal = argBar;
        zuuluu = tangon.bind(report)(oscard, michal, zuuluu);
        michal = zuuluu.then;
        entity = function(argFoo) {
            entity = argFoo;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 5;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'SPOTIFY_PROFILE_UPDATE';
            michal['type'] = report;
            report = _closure2_slot0;
            michal['accountId'] = report;
            report = entity.body;
            oscard = report.product;
            report = 'premium';
            report = report === oscard;
            michal['isPremium'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getProfile'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getDevices
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot9;
        tangon = report.get;
        zuuluu = {};
        michal = _closure1_slot5;
        michal = michal.PLAYER_DEVICES;
        zuuluu['url'] = michal;
        michal = argBar;
        zuuluu = tangon.bind(report)(oscard, michal, zuuluu);
        michal = zuuluu.then;
        entity = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                michal = entity.body;
                if(!michal) { _fun00014_ip = 86; continue _fun00013 }
 11:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 5;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'SPOTIFY_SET_DEVICES';
                michal['type'] = report;
                report = _closure2_slot0;
                michal['accountId'] = report;
                report = entity.body;
                report = report.devices;
                michal['devices'] = report;
                michal = zuuluu.bind(tangon)(michal);
 86:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getDevices'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: play
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            yankee = argBaz;
            zuuluu = arguments[4];
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = report;
            var _closure2_slot2 = yankee;
            offset = undefined;
            if(!(zuuluu === offset)) { _fun00016_ip = 34; continue _fun00015 }
 32:
            zuuluu = {};
 34:
            var _closure2_slot3 = offset;
            var _closure2_slot4 = offset;
            var _closure2_slot5 = offset;
            golfie = _closure1_slot5;
            verify = golfie.PLAYER_OPEN;
            option = argCor;
            tangon = false;
            romeon = verify.bind(golfie)(option, yankee, tangon);
            option = zuuluu.deviceId;
            _closure2_slot3 = option;
            verify = zuuluu.position;
            _closure2_slot4 = verify;
            yankee = zuuluu.contextUri;
            zuuluu = zuuluu.repeat;
            _closure2_slot5 = zuuluu;
            tangon = _closure1_slot9;
            zuuluu = tangon.put;
            michal = {};
            golfie = golfie.PLAYER_PLAY;
            michal['url'] = golfie;
            golfie = {};
            golfie['device_id'] = option;
            michal['query'] = golfie;
            golfie = {};
            option = null;
            backup = option != yankee;
            foxtra = undefined;
            if(!backup) { _fun00016_ip = 155; continue _fun00015 }
 152:
            foxtra = yankee;
 155:
            golfie['context_uri'] = foxtra;
            backup = option == yankee;
            foxtra = undefined;
            if(!backup) { _fun00016_ip = 180; continue _fun00015 }
 169:
            backup = new Array(1);
            backup[0] = romeon;
            foxtra = backup;
 180:
            golfie['uris'] = foxtra;
            yankee = option != yankee;
            offset = undefined;
            if(!yankee) { _fun00016_ip = 206; continue _fun00015 }
 196:
            yankee = {};
            yankee['uri'] = romeon;
            offset = yankee;
 206:
            golfie['offset'] = offset;
            offset = option != verify;
            option = 0;
            if(!offset) { _fun00016_ip = 223; continue _fun00015 }
 220:
            option = verify;
 223:
            golfie['position_ms'] = option;
            michal['body'] = golfie;
            tangon = zuuluu.bind(tangon)(oscard, report, michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = argFoo;
                    zuuluu = _closure2_slot5;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00018_ip = 94; continue _fun00017 }
 16:
                    oscard = _closure1_slot9;
                    report = oscard.put;
                    tangon = _closure2_slot0;
                    zuuluu = _closure2_slot1;
                    michal = {};
                    golfie = _closure1_slot5;
                    golfie = golfie.PLAYER_REPEAT;
                    michal['url'] = golfie;
                    golfie = {};
                    verify = _closure2_slot3;
                    golfie['device_id'] = verify;
                    verify = _closure2_slot5;
                    option = 'off';
                    if(!verify) { _fun00018_ip = 79; continue _fun00017 }
 75:
                    option = 'context';
 79:
                    golfie['state'] = option;
                    michal['query'] = golfie;
                    entity = report.bind(oscard)(tangon, zuuluu, michal);
 94:
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.then;
            entity = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 5;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.dispatch;
                    entity = {};
                    tangon = 'SPOTIFY_PLAYER_PLAY';
                    entity['type'] = tangon;
                    tangon = _closure2_slot2;
                    entity['id'] = tangon;
                    oscard = _closure2_slot4;
                    tangon = null;
                    oscard = tangon != oscard;
                    tangon = 0;
                    if(!oscard) { _fun00020_ip = 70; continue _fun00019 }
 66:
                    tangon = _closure2_slot4;
 70:
                    entity['position'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = argFoo;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['play'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: pause
        report = _closure1_slot9;
        tangon = report.put;
        zuuluu = {};
        entity = _closure1_slot5;
        entity = entity.PLAYER_PAUSE;
        zuuluu['url'] = entity;
        michal = argFoo;
        entity = argBar;
        zuuluu = tangon.bind(report)(michal, entity, zuuluu);
        michal = zuuluu.then;
        entity = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'SPOTIFY_PLAYER_PAUSE';
            entity['type'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            entity = argFoo;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['pause'] = tangon;
    tangon = function() { // Original name: fetchIsSpotifyProtocolRegistered
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            zuuluu = _closure1_slot3;
            michal = zuuluu.isProtocolRegistered;
            michal = michal.bind(zuuluu)();
            if(michal) { _fun00022_ip = 107; continue _fun00021 }
 20:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 7;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.isDesktop;
            michal = michal.bind(zuuluu)();
            if(!michal) { _fun00022_ip = 107; continue _fun00021 }
 55:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 8;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.isProtocolRegistered;
            entity = _closure1_slot4;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.then;
            entity = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'SPOTIFY_SET_PROTOCOL_REGISTERED';
                michal['type'] = report;
                report = argFoo;
                michal['isRegistered'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
 107:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['fetchIsSpotifyProtocolRegistered'] = tangon;
    michal = function(argFoo, argBar) { // Original name: setActiveDevice
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SPOTIFY_SET_ACTIVE_DEVICE';
        michal['type'] = report;
        report = argFoo;
        michal['accountId'] = report;
        report = argBar;
        michal['deviceId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setActiveDevice'] = michal;
    return entity;
})();