// app/modules/spotify/SpotifyActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    oscar = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    var _closure1_slot2 = options;
    yankee = function(argFoo, argBar, argBaz, argCorge) { // Original name: apiRequest
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            report = argCorge;
            mike = arguments[4];
            var _closure2_slot0 = tango;
            zulu = argBar;
            var _closure2_slot1 = zulu;
            var _closure2_slot2 = report;
            zulu = undefined;
            if(!(mike === zulu)) { _fun00002_ip = 35; continue _fun00001 }
 32:
            mike = 1;
 35:
            var _closure2_slot3 = mike;
            mike = {};
            offset = mike;
            verify = report;
            report = copyDataProperties(offset, verify);
            oscar = {};
            report = global;
            report = report.HermesInternal;
            options = report.concat;
            golf = 'Bearer ';
            report = argBaz;
            report = options.bind(golf)(report);
            oscar['authorization'] = report;
            report = 'headers';
            mike[report] = oscar;
            _closure2_slot2 = mike;
            tango = tango.bind(zulu)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tango = argFoo;
                    zulu = tango.status;
                    mike = 202;
                    entity = tango;
                    if(!(mike === zulu)) { _fun00004_ip = 37; continue _fun00003 }
 18:
                    mike = global;
                    zulu = mike.Promise;
                    mike = zulu.reject;
                    entity = mike.bind(zulu)(tango);
 37:
                    return entity;
                }
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.catch;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure2_slot2;
                    report = tango.onlyRetryOnAuthorizationErrors;
                    tango = true;
                    tango = tango !== report;
                    if(!tango) { _fun00006_ip = 39; continue _fun00005 }
 27:
                    oscar = zulu.status;
                    report = 202;
                    tango = report === oscar;
 39:
                    oscar = zulu.status;
                    report = 401;
                    if(!(report !== oscar)) { _fun00006_ip = 57; continue _fun00005 }
 54:
                    if(!tango) { _fun00006_ip = 67; continue _fun00005 }
 57:
                    tango = _closure2_slot3;
                    entity = 0;
                    if(!(!(tango > entity))) { _fun00006_ip = 91; continue _fun00005 }
 67:
                    entity = global;
                    tango = entity.Promise;
                    entity = tango.reject;
                    entity = entity.bind(tango)(zulu);
                    _fun00006_ip = 216; continue _fun00005;
 91:
                    tango = zulu.status;
                    zulu = 202;
                    if(!(zulu !== tango)) { _fun00006_ip = 123; continue _fun00005 }
 103:
                    zulu = global;
                    tango = zulu.Promise;
                    zulu = tango.resolve;
                    report = zulu.bind(tango)();
                    _fun00006_ip = 165; continue _fun00005;
 123:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 3;
                    tango = tango[zulu];
                    zulu = undefined;
                    oscar = oscar.bind(zulu)(tango);
                    tango = oscar.timeoutPromise;
                    zulu = 5000;
                    report = tango.bind(oscar)(zulu);
 165:
                    tango = report.then;
                    zulu = function() {
                        zulu = _closure1_slot12;
                        mike = _closure2_slot1;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    report = tango.bind(report)(zulu);
                    tango = report.then;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.body;
                        offset = entity.access_token;
                        oscar = _closure1_slot11;
                        romeo = _closure2_slot0;
                        yankee = _closure2_slot1;
                        verify = _closure2_slot2;
                        mike = _closure2_slot3;
                        entity = 1;
                        options = mike - entity;
                        foxtrot = undefined;
                        entity = foxtrot[oscar](romeo, yankee, offset, verify, options, golf);
                        return entity;
                    };
                    tango = tango.bind(report)(zulu);
                    zulu = tango.then;
                    mike = function(argFoo) {
                        mike = argFoo;
                        var _closure4_slot0 = mike;
                        mike = global;
                        zulu = mike.Promise;
                        mike = zulu.prototype;
                        mike = Object.create(mike, {constructor: {value: zulu}});
                        tango = function(argFoo) {
                            mike = argFoo;
                            var _closure5_slot0 = mike;
                            mike = global;
                            zulu = mike.setImmediate;
                            mike = undefined;
                            entity = function() {
                                zulu = _closure5_slot0;
                                mike = _closure4_slot0;
                                entity = undefined;
                                entity = zulu.bind(entity)(mike);
                                return entity;
                            };
                            entity = zulu.bind(mike)(entity);
                            return entity;
                        };
                        report = mike;
                        entity = new report[zulu](tango, zulu);
                        entity = entity instanceof Object ? entity : mike;
                        return entity;
                    };
                    entity = zulu.bind(tango)(mike);
 216:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot11 = yankee;
    tango = function(argFoo) { // Original name: getAccessToken
        options = argFoo;
        var _closure2_slot0 = options;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 4;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.get;
        mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        golf = _closure1_slot7;
        oscar = golf.CONNECTION_ACCESS_TOKEN;
        report = _closure1_slot8;
        report = report.SPOTIFY;
        report = oscar.bind(golf)(report, options);
        mike['url'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.catch;
        mike = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = argFoo;
                entity = zulu.body;
                mike = null;
                mike = mike == entity;
                tango = undefined;
                report = undefined;
                if(mike) { _fun00008_ip = 26; continue _fun00007 }
 21:
                report = entity.code;
 26:
                mike = _closure1_slot6;
                mike = mike.CONNECTION_REVOKED;
                if(!(report !== mike)) { _fun00008_ip = 193; continue _fun00007 }
 46:
                report = zulu.status;
                mike = 429;
                if(!(mike === report)) { _fun00008_ip = 247; continue _fun00007 }
 64:
                mike = zulu.headers;
                report = mike.retry-after;
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                mike = 6;
                mike = golf[mike];
                mike = oscar.bind(tango)(mike);
                mike = mike.Millis;
                mike = mike.SECOND;
                report = report * mike;
                mike = global;
                mike = mike.isNaN;
                mike = mike.bind(tango)(report);
                if(mike) { _fun00008_ip = 137; continue _fun00007 }
 128:
                mike = 0;
                oscar = report;
                if(!(mike === oscar)) { _fun00008_ip = 141; continue _fun00007 }
 137:
                oscar = _closure1_slot9;
 141:
                report = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 3;
                mike = golf[mike];
                report = report.bind(tango)(mike);
                mike = report.timeoutPromise;
                oscar = mike.bind(report)(oscar);
                report = oscar.then;
                mike = function() {
                    zulu = _closure1_slot12;
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = report.bind(oscar)(mike);
                return mike;
 193:
                mike = _closure1_slot1;
                report = _closure1_slot2;
                entity = 5;
                entity = report[entity];
                tango = mike.bind(tango)(entity);
                mike = tango.dispatch;
                entity = {};
                report = 'SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE';
                entity['type'] = report;
                report = _closure2_slot0;
                entity['accountId'] = report;
                entity = mike.bind(tango)(entity);
 247:
                entity = global;
                mike = entity.Promise;
                entity = mike.reject;
                entity = entity.bind(mike)(zulu);
                return entity;
            }
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.then;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.body;
            report = mike.access_token;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 5;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'SPOTIFY_ACCOUNT_ACCESS_TOKEN';
            mike['type'] = oscar;
            oscar = _closure2_slot0;
            mike['accountId'] = oscar;
            mike['accessToken'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot12 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = options[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = options[report];
    report = golf.bind(entity)(report);
    oscar = report.SPOTIFY_APP_PROTOCOL;
    var _closure1_slot4 = oscar;
    report = report.SpotifyEndpoints;
    var _closure1_slot5 = report;
    report = 2;
    report = options[report];
    report = golf.bind(entity)(report);
    oscar = report.AbortCodes;
    var _closure1_slot6 = oscar;
    oscar = report.Endpoints;
    var _closure1_slot7 = oscar;
    report = report.PlatformTypes;
    var _closure1_slot8 = report;
    report = 5000;
    var _closure1_slot9 = report;
    report = {};
    romeo = yankee.bind;
    oscar = 4;
    verify = options[oscar];
    verify = golf.bind(entity)(verify);
    verify = verify.HTTP;
    verify = verify.get;
    offset = null;
    verify = romeo.bind(yankee)(offset, verify);
    report['get'] = verify;
    verify = yankee.bind;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.HTTP;
    oscar = oscar.put;
    oscar = verify.bind(yankee)(offset, oscar);
    report['put'] = oscar;
    var _closure1_slot10 = report;
    oscar = 9;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/spotify/SpotifyActionCreators.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['SpotifyAPI'] = report;
    zulu['getAccessToken'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: subscribePlayerStateNotifications
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            options = argBaz;
            mike = arguments[3];
            var _closure2_slot0 = oscar;
            var _closure2_slot1 = report;
            var _closure2_slot2 = options;
            zulu = undefined;
            if(!(mike === zulu)) { _fun00010_ip = 35; continue _fun00009 }
 32:
            mike = 2;
 35:
            var _closure2_slot3 = mike;
            tango = _closure1_slot10;
            zulu = tango.put;
            mike = {};
            golf = _closure1_slot5;
            golf = golf.NOTIFICATIONS_PLAYER;
            mike['url'] = golf;
            golf = {};
            golf['connection_id'] = options;
            mike['query'] = golf;
            zulu = zulu.bind(tango)(oscar, report, mike);
            mike = zulu.catch;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    mike = _closure2_slot3;
                    entity = 0;
                    if(!(!(mike <= entity))) { _fun00012_ip = 76; continue _fun00011 }
 13:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 3;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.timeoutPromise;
                    entity = 5000;
                    zulu = mike.bind(zulu)(entity);
                    mike = zulu.then;
                    entity = function() {
                        oscar = _closure1_slot13;
                        offset = _closure2_slot0;
                        verify = _closure2_slot1;
                        options = _closure2_slot2;
                        mike = _closure2_slot3;
                        entity = 1;
                        golf = mike - entity;
                        yankee = undefined;
                        entity = yankee[oscar](offset, verify, options, golf, oscar);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    _fun00012_ip = 98; continue _fun00011;
 76:
                    mike = global;
                    tango = mike.Promise;
                    zulu = tango.reject;
                    mike = argFoo;
                    entity = zulu.bind(tango)(mike);
 98:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot13 = tango;
    zulu['subscribePlayerStateNotifications'] = tango;
    tango = function(argFoo, argBar) { // Original name: getProfile
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot10;
        tango = report.get;
        zulu = {};
        mike = _closure1_slot5;
        mike = mike.PROFILE;
        zulu['url'] = mike;
        mike = argBar;
        zulu = tango.bind(report)(oscar, mike, zulu);
        mike = zulu.then;
        entity = function(argFoo) {
            entity = argFoo;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 5;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.dispatch;
            mike = {};
            report = 'SPOTIFY_PROFILE_UPDATE';
            mike['type'] = report;
            report = _closure2_slot0;
            mike['accountId'] = report;
            report = entity.body;
            oscar = report.product;
            report = 'premium';
            report = report === oscar;
            mike['isPremium'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getProfile'] = tango;
    tango = function(argFoo, argBar) { // Original name: getDevices
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot10;
        tango = report.get;
        zulu = {};
        mike = _closure1_slot5;
        mike = mike.PLAYER_DEVICES;
        zulu['url'] = mike;
        mike = argBar;
        zulu = tango.bind(report)(oscar, mike, zulu);
        mike = zulu.then;
        entity = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                mike = entity.body;
                if(!mike) { _fun00014_ip = 86; continue _fun00013 }
 11:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 5;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.dispatch;
                mike = {};
                report = 'SPOTIFY_SET_DEVICES';
                mike['type'] = report;
                report = _closure2_slot0;
                mike['accountId'] = report;
                report = entity.body;
                report = report.devices;
                mike['devices'] = report;
                mike = zulu.bind(tango)(mike);
 86:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getDevices'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: play
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            yankee = argBaz;
            zulu = arguments[4];
            var _closure2_slot0 = oscar;
            var _closure2_slot1 = report;
            var _closure2_slot2 = yankee;
            offset = undefined;
            if(!(zulu === offset)) { _fun00016_ip = 34; continue _fun00015 }
 32:
            zulu = {};
 34:
            var _closure2_slot3 = offset;
            var _closure2_slot4 = offset;
            var _closure2_slot5 = offset;
            golf = _closure1_slot5;
            verify = golf.PLAYER_OPEN;
            options = argCorge;
            tango = false;
            romeo = verify.bind(golf)(options, yankee, tango);
            options = zulu.deviceId;
            _closure2_slot3 = options;
            verify = zulu.position;
            _closure2_slot4 = verify;
            yankee = zulu.contextUri;
            zulu = zulu.repeat;
            _closure2_slot5 = zulu;
            tango = _closure1_slot10;
            zulu = tango.put;
            mike = {};
            golf = golf.PLAYER_PLAY;
            mike['url'] = golf;
            golf = {};
            golf['device_id'] = options;
            mike['query'] = golf;
            golf = {};
            options = null;
            backup = options != yankee;
            foxtrot = undefined;
            if(!backup) { _fun00016_ip = 155; continue _fun00015 }
 152:
            foxtrot = yankee;
 155:
            golf['context_uri'] = foxtrot;
            backup = options == yankee;
            foxtrot = undefined;
            if(!backup) { _fun00016_ip = 180; continue _fun00015 }
 169:
            backup = new Array(1);
            backup[0] = romeo;
            foxtrot = backup;
 180:
            golf['uris'] = foxtrot;
            yankee = options != yankee;
            offset = undefined;
            if(!yankee) { _fun00016_ip = 206; continue _fun00015 }
 196:
            yankee = {};
            yankee['uri'] = romeo;
            offset = yankee;
 206:
            golf['offset'] = offset;
            offset = options != verify;
            options = 0;
            if(!offset) { _fun00016_ip = 223; continue _fun00015 }
 220:
            options = verify;
 223:
            golf['position_ms'] = options;
            mike['body'] = golf;
            tango = zulu.bind(tango)(oscar, report, mike);
            zulu = tango.then;
            mike = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = argFoo;
                    zulu = _closure2_slot5;
                    mike = null;
                    if(!(mike != zulu)) { _fun00018_ip = 94; continue _fun00017 }
 16:
                    oscar = _closure1_slot10;
                    report = oscar.put;
                    tango = _closure2_slot0;
                    zulu = _closure2_slot1;
                    mike = {};
                    golf = _closure1_slot5;
                    golf = golf.PLAYER_REPEAT;
                    mike['url'] = golf;
                    golf = {};
                    verify = _closure2_slot3;
                    golf['device_id'] = verify;
                    verify = _closure2_slot5;
                    options = 'off';
                    if(!verify) { _fun00018_ip = 79; continue _fun00017 }
 75:
                    options = 'context';
 79:
                    golf['state'] = options;
                    mike['query'] = golf;
                    entity = report.bind(oscar)(tango, zulu, mike);
 94:
                    return entity;
                }
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.then;
            entity = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 5;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.dispatch;
                    entity = {};
                    tango = 'SPOTIFY_PLAYER_PLAY';
                    entity['type'] = tango;
                    tango = _closure2_slot2;
                    entity['id'] = tango;
                    oscar = _closure2_slot4;
                    tango = null;
                    oscar = tango != oscar;
                    tango = 0;
                    if(!oscar) { _fun00020_ip = 70; continue _fun00019 }
 66:
                    tango = _closure2_slot4;
 70:
                    entity['position'] = tango;
                    entity = mike.bind(zulu)(entity);
                    entity = argFoo;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['play'] = tango;
    tango = function(argFoo, argBar) { // Original name: pause
        report = _closure1_slot10;
        tango = report.put;
        zulu = {};
        entity = _closure1_slot5;
        entity = entity.PLAYER_PAUSE;
        zulu['url'] = entity;
        mike = argFoo;
        entity = argBar;
        zulu = tango.bind(report)(mike, entity, zulu);
        mike = zulu.then;
        entity = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'SPOTIFY_PLAYER_PAUSE';
            entity['type'] = tango;
            entity = mike.bind(zulu)(entity);
            entity = argFoo;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['pause'] = tango;
    tango = function() { // Original name: fetchIsSpotifyProtocolRegistered
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            zulu = _closure1_slot3;
            mike = zulu.isProtocolRegistered;
            mike = mike.bind(zulu)();
            if(mike) { _fun00022_ip = 109; continue _fun00021 }
 20:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 7;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.isDesktop;
            mike = mike.bind(zulu)();
            if(!mike) { _fun00022_ip = 109; continue _fun00021 }
 55:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 8;
            mike = report[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.isProtocolRegistered;
            entity = _closure1_slot4;
            zulu = mike.bind(zulu)(entity);
            mike = zulu.then;
            entity = function(argFoo) {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 5;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'SPOTIFY_SET_PROTOCOL_REGISTERED';
                mike['type'] = report;
                report = argFoo;
                mike['isRegistered'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 109:
            entity = undefined;
            return entity;
        }
    };
    zulu['fetchIsSpotifyProtocolRegistered'] = tango;
    mike = function(argFoo, argBar) { // Original name: setActiveDevice
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SPOTIFY_SET_ACTIVE_DEVICE';
        mike['type'] = report;
        report = argFoo;
        mike['accountId'] = report;
        report = argBar;
        mike['deviceId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setActiveDevice'] = mike;
    return entity;
})();