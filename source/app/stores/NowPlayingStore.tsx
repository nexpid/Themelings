// app/stores/NowPlayingStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: handleMultipleUpdates
        tangon = argFoo;
        michal = false;
        var _closure2_slot0 = michal;
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure1_slot17;
                entity = undefined;
                michal = argFoo;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = false;
                zuuluu = michal !== zuuluu;
                if(zuuluu) { _fun00004_ip = 33; continue _fun00003 }
 26:
                zuuluu = _closure2_slot0;
 33:
                _closure2_slot0 = zuuluu;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        entity = _closure2_slot0;
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: removeUserIfNeeded
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = _closure1_slot13;
            entity = entity[michal];
            report = null;
            if(!(report != entity)) { _fun00006_ip = 133; continue _fun00005 }
 20:
            tangon = entity.gameId;
            entity = _closure1_slot12;
            entity = entity[tangon];
            if(!(report != entity)) { _fun00006_ip = 108; continue _fun00005 }
 38:
            entity = {};
            golfie = _closure1_slot12;
            option = entity;
            report = copyDataProperties(option, golfie);
            _closure1_slot12 = entity;
            entity = entity[tangon];
            entity = delete entity[michal];
            entity = global;
            oscard = entity.Object;
            report = oscard.values;
            entity = _closure1_slot12;
            entity = entity[tangon];
            entity = report.bind(oscard)(entity);
            report = entity.length;
            entity = 0;
            if(!(entity === report)) { _fun00006_ip = 108; continue _fun00005 }
 100:
            entity = _closure1_slot12;
            entity = delete entity[tangon];
 108:
            entity = {};
            golfie = _closure1_slot13;
            option = entity;
            tangon = copyDataProperties(option, golfie);
            _closure1_slot13 = entity;
            entity = delete entity[michal];
            entity = true;
            return entity;
 133:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: _handlePresenceUpdate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.user;
            var _closure2_slot0 = entity;
            oscard = zuuluu.activities;
            zuuluu = undefined;
            var _closure2_slot1 = zuuluu;
            tangon = null;
            if(!(tangon != entity)) { _fun00008_ip = 108; continue _fun00007 }
 32:
            report = oscard.filter;
            tangon = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = _closure1_slot10;
                entity = entity.CUSTOM_STATUS;
                entity = michal !== entity;
                return entity;
            };
            oscard = report.bind(oscard)(tangon);
            report = oscard.length;
            tangon = 0;
            if(!(tangon !== report)) { _fun00008_ip = 89; continue _fun00007 }
 60:
            tangon = false;
            _closure2_slot1 = tangon;
            report = oscard.forEach;
            tangon = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    report = _closure2_slot0;
                    tangon = function(argFoo, argBar) { // Original name: _handleActivityUpdate
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            report = argFoo;
                            entity = argBar;
                            oscard = _closure1_slot0;
                            tangon = _closure1_slot1;
                            zuuluu = 9;
                            tangon = tangon[zuuluu];
                            zuuluu = undefined;
                            tangon = oscard.bind(zuuluu)(tangon);
                            option = tangon.bind(zuuluu)(report);
                            oscard = null;
                            if(!(oscard != option)) { _fun00012_ip = 252; continue _fun00011 }
 45:
                            golfie = _closure1_slot13;
                            tangon = entity.id;
                            golfie = golfie[tangon];
                            tangon = oscard != golfie;
                            if(!tangon) { _fun00012_ip = 75; continue _fun00011 }
 65:
                            golfie = golfie.gameId;
                            tangon = golfie !== option;
 75:
                            if(!tangon) { _fun00012_ip = 92; continue _fun00011 }
 78:
                            golfie = _closure1_slot16;
                            tangon = entity.id;
                            tangon = golfie.bind(zuuluu)(tangon);
 92:
                            golfie = report.timestamps;
                            verify = oscard == golfie;
                            tangon = undefined;
                            if(verify) { _fun00012_ip = 112; continue _fun00011 }
 107:
                            tangon = golfie.start;
 112:
                            if(!(oscard == tangon)) { _fun00012_ip = 133; continue _fun00011 }
 116:
                            oscard = global;
                            golfie = oscard.Date;
                            oscard = golfie.now;
                            tangon = oscard.bind(golfie)();
 133:
                            golfie = {};
                            oscard = entity.id;
                            golfie['userId'] = oscard;
                            golfie['activity'] = report;
                            golfie['startedPlaying'] = tangon;
                            tangon = {};
                            offset = _closure1_slot12;
                            yankee = tangon;
                            report = copyDataProperties(yankee, offset);
                            report = {};
                            oscard = _closure1_slot12;
                            offset = oscard[option];
                            yankee = report;
                            oscard = copyDataProperties(yankee, offset);
                            oscard = golfie.userId;
                            report[oscard] = golfie;
                            tangon[option] = report;
                            _closure1_slot12 = tangon;
                            tangon = {};
                            offset = _closure1_slot13;
                            yankee = tangon;
                            report = copyDataProperties(yankee, offset);
                            oscard = golfie.userId;
                            report = {};
                            report['gameId'] = option;
                            golfie = golfie.startedPlaying;
                            report['startedPlaying'] = golfie;
                            tangon[oscard] = report;
                            _closure1_slot13 = tangon;
                            tangon = true;
                            return tangon;
 252:
                            michal = _closure1_slot16;
                            entity = entity.id;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        }
                    };
                    entity = undefined;
                    michal = argFoo;
                    michal = tangon.bind(entity)(michal, report);
                    if(!michal) { _fun00010_ip = 36; continue _fun00009 }
 30:
                    michal = true;
                    _closure2_slot1 = michal;
 36:
                    return entity;
                }
            };
            tangon = report.bind(oscard)(tangon);
            michal = _closure2_slot1;
            return michal;
 89:
            michal = _closure1_slot16;
            entity = entity.id;
            entity = michal.bind(zuuluu)(entity);
            return entity;
 108:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: handleUserAffinitiesStoreUpdate
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = _closure1_slot7;
            entity = michal.needsRefresh;
            michal = entity.bind(michal)();
            if(michal) { _fun00014_ip = 24; continue _fun00013 }
 20:
            michal = _closure1_slot11;
 24:
            entity = false;
            if(michal) { _fun00014_ip = 44; continue _fun00013 }
 29:
            tangon = function() { // Original name: refreshStateFromPresence
                zuuluu = {};
                _closure1_slot12 = zuuluu;
                zuuluu = {};
                _closure1_slot13 = zuuluu;
                zuuluu = false;
                var _closure3_slot0 = zuuluu;
                zuuluu = _closure1_slot8;
                michal = zuuluu.getUserIds;
                tangon = michal.bind(zuuluu)();
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        report = argFoo;
                        zuuluu = _closure1_slot9;
                        michal = zuuluu.getUser;
                        tangon = michal.bind(zuuluu)(report);
                        michal = null;
                        if(!(michal != tangon)) { _fun00016_ip = 81; continue _fun00015 }
 27:
                        zuuluu = _closure1_slot17;
                        michal = {};
                        michal['user'] = tangon;
                        tangon = _closure1_slot8;
                        entity = tangon.getActivities;
                        entity = entity.bind(tangon)(report);
                        michal['activities'] = entity;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        if(michal) { _fun00016_ip = 74; continue _fun00015 }
 67:
                        michal = _closure3_slot0;
 74:
                        _closure3_slot0 = michal;
 81:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                entity = _closure3_slot0;
                return entity;
            };
            michal = undefined;
            entity = tangon.bind(michal)();
 44:
            tangon = _closure1_slot7;
            michal = tangon.needsRefresh;
            michal = michal.bind(tangon)();
            michal = !michal;
            _closure1_slot11 = michal;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.ActivityTypes;
    var _closure1_slot10 = michal;
    michal = false;
    var _closure1_slot11 = michal;
    michal = {};
    var _closure1_slot12 = michal;
    michal = {};
    var _closure1_slot13 = michal;
    michal = 10;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: NowPlayingStore
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot2;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot5;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot14;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00018_ip = 69; continue _fun00017 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00018_ip = 105; continue _fun00017;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tangon = this;
            zuuluu = tangon.waitFor;
            michal = _closure1_slot7;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.syncWith;
            report = _closure1_slot7;
            michal = new Array(1);
            michal[0] = report;
            entity = _closure1_slot18;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golfie = 'games';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot12;
            return entity;
        };
        report['get'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'usersPlaying';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot13;
            return entity;
        };
        report['get'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'gameIds';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = global;
            zuuluu = entity.Object;
            michal = zuuluu.keys;
            entity = _closure1_slot12;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['get'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getNowPlaying';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot12;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getUserGame';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            michal = _closure1_slot13;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = oscard;
        entity[5] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'NowPlayingStore';
    option['displayName'] = michal;
    michal = 11;
    michal = oscard[michal];
    romeon = golfie.bind(entity)(michal);
    michal = {};
    verify = function() { // Original name: handleConnectionOpen
        entity = {};
        _closure1_slot12 = entity;
        entity = {};
        _closure1_slot13 = entity;
        entity = undefined;
        return entity;
    };
    michal['CONNECTION_OPEN'] = verify;
    verify = function(argFoo) { // Original name: handleConnectionOpenSupplemental
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            michal = argFoo;
            report = michal.guilds;
            tangon = michal.presences;
            michal = false;
            var _closure2_slot0 = michal;
            zuuluu = report.forEach;
            michal = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zuuluu = _closure1_slot15;
                    entity = argFoo;
                    michal = entity.presences;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    if(!michal) { _fun00022_ip = 35; continue _fun00021 }
 26:
                    michal = true;
                    _closure2_slot0 = michal;
 35:
                    return entity;
                }
            };
            michal = zuuluu.bind(report)(michal);
            zuuluu = _closure1_slot15;
            michal = undefined;
            michal = zuuluu.bind(michal)(tangon);
            if(!michal) { _fun00020_ip = 63; continue _fun00019 }
 57:
            michal = true;
            _closure2_slot0 = michal;
 63:
            entity = _closure2_slot0;
            return entity;
        }
    };
    michal['CONNECTION_OPEN_SUPPLEMENTAL'] = verify;
    verify = function() { // Original name: handleLogout
        entity = {};
        _closure1_slot12 = entity;
        entity = {};
        _closure1_slot13 = entity;
        entity = undefined;
        return entity;
    };
    michal['LOGOUT'] = verify;
    verify = function(argFoo) { // Original name: handlePresenceUpdates
        michal = argFoo;
        tangon = michal.updates;
        zuuluu = tangon.map;
        michal = function(argFoo) {
            zuuluu = _closure1_slot17;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.some;
        entity = function(argFoo) {
            entity = argFoo;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['PRESENCE_UPDATES'] = verify;
    tangon = function(argFoo) { // Original name: handlePresencesReplace
        entity = argFoo;
        zuuluu = entity.presences;
        michal = _closure1_slot15;
        entity = undefined;
        entity = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['PRESENCES_REPLACE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[option](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/NowPlayingStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();