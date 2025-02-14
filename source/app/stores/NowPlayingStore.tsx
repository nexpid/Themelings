// app/stores/NowPlayingStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun107197: for(var _fun107197_ip = 0; ; ) switch(_fun107197_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot15;
            entity = entity.bind(zulu)();
            if(entity) { _fun107197_ip = 51; continue _fun107197 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun107197_ip = 92; continue _fun107197;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun107197_ip = 71; continue _fun107197 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun107198: for(var _fun107198_ip = 0; ; ) switch(_fun107198_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun107198_ip = 76; continue _fun107198;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot15 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: handleMultipleUpdates
        tango = argFoo;
        mike = false;
        var _closure2_slot0 = mike;
        zulu = tango.forEach;
        mike = function(argFoo) {
            _fun107202: for(var _fun107202_ip = 0; ; ) switch(_fun107202_ip) {
 0:
                zulu = _closure1_slot18;
                entity = undefined;
                mike = argFoo;
                zulu = zulu.bind(entity)(mike);
                mike = false;
                zulu = mike !== zulu;
                if(zulu) { _fun107202_ip = 33; continue _fun107202 }
 26:
                zulu = _closure2_slot0;
 33:
                _closure2_slot0 = zulu;
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        entity = _closure2_slot0;
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: removeUserIfNeeded
        _fun107203: for(var _fun107203_ip = 0; ; ) switch(_fun107203_ip) {
 0:
            mike = argFoo;
            entity = _closure1_slot13;
            entity = entity[mike];
            report = null;
            if(!(report != entity)) { _fun107203_ip = 133; continue _fun107203 }
 20:
            tango = entity.gameId;
            entity = _closure1_slot12;
            entity = entity[tango];
            if(!(report != entity)) { _fun107203_ip = 108; continue _fun107203 }
 38:
            entity = {};
            golf = _closure1_slot12;
            options = entity;
            report = copyDataProperties(options, golf);
            _closure1_slot12 = entity;
            entity = entity[tango];
            entity = delete entity[mike];
            entity = global;
            oscar = entity.Object;
            report = oscar.values;
            entity = _closure1_slot12;
            entity = entity[tango];
            entity = report.bind(oscar)(entity);
            report = entity.length;
            entity = 0;
            if(!(entity === report)) { _fun107203_ip = 108; continue _fun107203 }
 100:
            entity = _closure1_slot12;
            entity = delete entity[tango];
 108:
            entity = {};
            golf = _closure1_slot13;
            options = entity;
            tango = copyDataProperties(options, golf);
            _closure1_slot13 = entity;
            entity = delete entity[mike];
            entity = true;
            return entity;
 133:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: _handlePresenceUpdate
        _fun107204: for(var _fun107204_ip = 0; ; ) switch(_fun107204_ip) {
 0:
            zulu = argFoo;
            entity = zulu.user;
            var _closure2_slot0 = entity;
            oscar = zulu.activities;
            zulu = undefined;
            var _closure2_slot1 = zulu;
            tango = null;
            if(!(tango != entity)) { _fun107204_ip = 108; continue _fun107204 }
 32:
            report = oscar.filter;
            tango = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                entity = _closure1_slot10;
                entity = entity.CUSTOM_STATUS;
                entity = mike !== entity;
                return entity;
            };
            oscar = report.bind(oscar)(tango);
            report = oscar.length;
            tango = 0;
            if(!(tango !== report)) { _fun107204_ip = 89; continue _fun107204 }
 60:
            tango = false;
            _closure2_slot1 = tango;
            report = oscar.forEach;
            tango = function(argFoo) {
                _fun107206: for(var _fun107206_ip = 0; ; ) switch(_fun107206_ip) {
 0:
                    report = _closure2_slot0;
                    tango = function(argFoo, argBar) { // Original name: _handleActivityUpdate
                        _fun107207: for(var _fun107207_ip = 0; ; ) switch(_fun107207_ip) {
 0:
                            report = argFoo;
                            entity = argBar;
                            oscar = _closure1_slot0;
                            tango = _closure1_slot1;
                            zulu = 9;
                            tango = tango[zulu];
                            zulu = undefined;
                            tango = oscar.bind(zulu)(tango);
                            options = tango.bind(zulu)(report);
                            oscar = null;
                            if(!(oscar != options)) { _fun107207_ip = 252; continue _fun107207 }
 45:
                            golf = _closure1_slot13;
                            tango = entity.id;
                            golf = golf[tango];
                            tango = oscar != golf;
                            if(!tango) { _fun107207_ip = 75; continue _fun107207 }
 65:
                            golf = golf.gameId;
                            tango = golf !== options;
 75:
                            if(!tango) { _fun107207_ip = 92; continue _fun107207 }
 78:
                            golf = _closure1_slot17;
                            tango = entity.id;
                            tango = golf.bind(zulu)(tango);
 92:
                            golf = report.timestamps;
                            verify = oscar == golf;
                            tango = undefined;
                            if(verify) { _fun107207_ip = 112; continue _fun107207 }
 107:
                            tango = golf.start;
 112:
                            if(!(oscar == tango)) { _fun107207_ip = 133; continue _fun107207 }
 116:
                            oscar = global;
                            golf = oscar.Date;
                            oscar = golf.now;
                            tango = oscar.bind(golf)();
 133:
                            golf = {};
                            oscar = entity.id;
                            golf['userId'] = oscar;
                            golf['activity'] = report;
                            golf['startedPlaying'] = tango;
                            tango = {};
                            offset = _closure1_slot12;
                            yankee = tango;
                            report = copyDataProperties(yankee, offset);
                            report = {};
                            oscar = _closure1_slot12;
                            offset = oscar[options];
                            yankee = report;
                            oscar = copyDataProperties(yankee, offset);
                            oscar = golf.userId;
                            report[oscar] = golf;
                            tango[options] = report;
                            _closure1_slot12 = tango;
                            tango = {};
                            offset = _closure1_slot13;
                            yankee = tango;
                            report = copyDataProperties(yankee, offset);
                            oscar = golf.userId;
                            report = {};
                            report['gameId'] = options;
                            golf = golf.startedPlaying;
                            report['startedPlaying'] = golf;
                            tango[oscar] = report;
                            _closure1_slot13 = tango;
                            tango = true;
                            return tango;
 252:
                            mike = _closure1_slot17;
                            entity = entity.id;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        }
                    };
                    entity = undefined;
                    mike = argFoo;
                    mike = tango.bind(entity)(mike, report);
                    if(!mike) { _fun107206_ip = 36; continue _fun107206 }
 30:
                    mike = true;
                    _closure2_slot1 = mike;
 36:
                    return entity;
                }
            };
            tango = report.bind(oscar)(tango);
            mike = _closure2_slot1;
            return mike;
 89:
            mike = _closure1_slot17;
            entity = entity.id;
            entity = mike.bind(zulu)(entity);
            return entity;
 108:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: handleUserAffinitiesStoreUpdate
        _fun107208: for(var _fun107208_ip = 0; ; ) switch(_fun107208_ip) {
 0:
            mike = _closure1_slot7;
            entity = mike.needsRefresh;
            mike = entity.bind(mike)();
            if(mike) { _fun107208_ip = 24; continue _fun107208 }
 20:
            mike = _closure1_slot11;
 24:
            entity = false;
            if(mike) { _fun107208_ip = 44; continue _fun107208 }
 29:
            tango = function() { // Original name: refreshStateFromPresence
                zulu = {};
                _closure1_slot12 = zulu;
                zulu = {};
                _closure1_slot13 = zulu;
                zulu = false;
                var _closure3_slot0 = zulu;
                zulu = _closure1_slot8;
                mike = zulu.getUserIds;
                tango = mike.bind(zulu)();
                zulu = tango.forEach;
                mike = function(argFoo) {
                    _fun107210: for(var _fun107210_ip = 0; ; ) switch(_fun107210_ip) {
 0:
                        report = argFoo;
                        zulu = _closure1_slot9;
                        mike = zulu.getUser;
                        tango = mike.bind(zulu)(report);
                        mike = null;
                        if(!(mike != tango)) { _fun107210_ip = 81; continue _fun107210 }
 27:
                        zulu = _closure1_slot18;
                        mike = {};
                        mike['user'] = tango;
                        tango = _closure1_slot8;
                        entity = tango.getActivities;
                        entity = entity.bind(tango)(report);
                        mike['activities'] = entity;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        if(mike) { _fun107210_ip = 74; continue _fun107210 }
 67:
                        mike = _closure3_slot0;
 74:
                        _closure3_slot0 = mike;
 81:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                entity = _closure3_slot0;
                return entity;
            };
            mike = undefined;
            entity = tango.bind(mike)();
 44:
            tango = _closure1_slot7;
            mike = tango.needsRefresh;
            mike = mike.bind(tango)();
            mike = !mike;
            _closure1_slot11 = mike;
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.ActivityTypes;
    var _closure1_slot10 = mike;
    mike = false;
    var _closure1_slot11 = mike;
    mike = {};
    var _closure1_slot12 = mike;
    mike = {};
    var _closure1_slot13 = mike;
    mike = 10;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: NowPlayingStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot14;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tango = this;
            zulu = tango.waitFor;
            mike = _closure1_slot7;
            mike = zulu.bind(tango)(mike);
            zulu = tango.syncWith;
            report = _closure1_slot7;
            mike = new Array(1);
            mike[0] = report;
            entity = _closure1_slot19;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = 'games';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot12;
            return entity;
        };
        report['get'] = golf;
        entity[1] = report;
        report = {};
        golf = 'usersPlaying';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot13;
            return entity;
        };
        report['get'] = golf;
        entity[2] = report;
        report = {};
        golf = 'gameIds';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = global;
            zulu = entity.Object;
            mike = zulu.keys;
            entity = _closure1_slot12;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['get'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getNowPlaying';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot12;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getUserGame';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            mike = _closure1_slot13;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = oscar;
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'NowPlayingStore';
    options['displayName'] = mike;
    mike = 11;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function() { // Original name: handleConnectionOpen
        entity = {};
        _closure1_slot12 = entity;
        entity = {};
        _closure1_slot13 = entity;
        entity = undefined;
        return entity;
    };
    mike['CONNECTION_OPEN'] = verify;
    verify = function(argFoo) { // Original name: handleConnectionOpenSupplemental
        _fun107220: for(var _fun107220_ip = 0; ; ) switch(_fun107220_ip) {
 0:
            mike = argFoo;
            report = mike.guilds;
            tango = mike.presences;
            mike = false;
            var _closure2_slot0 = mike;
            zulu = report.forEach;
            mike = function(argFoo) {
                _fun107221: for(var _fun107221_ip = 0; ; ) switch(_fun107221_ip) {
 0:
                    zulu = _closure1_slot16;
                    entity = argFoo;
                    mike = entity.presences;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    if(!mike) { _fun107221_ip = 35; continue _fun107221 }
 26:
                    mike = true;
                    _closure2_slot0 = mike;
 35:
                    return entity;
                }
            };
            mike = zulu.bind(report)(mike);
            zulu = _closure1_slot16;
            mike = undefined;
            mike = zulu.bind(mike)(tango);
            if(!mike) { _fun107220_ip = 63; continue _fun107220 }
 57:
            mike = true;
            _closure2_slot0 = mike;
 63:
            entity = _closure2_slot0;
            return entity;
        }
    };
    mike['CONNECTION_OPEN_SUPPLEMENTAL'] = verify;
    verify = function() { // Original name: handleLogout
        entity = {};
        _closure1_slot12 = entity;
        entity = {};
        _closure1_slot13 = entity;
        entity = undefined;
        return entity;
    };
    mike['LOGOUT'] = verify;
    verify = function(argFoo) { // Original name: handlePresenceUpdates
        mike = argFoo;
        tango = mike.updates;
        zulu = tango.map;
        mike = function(argFoo) {
            zulu = _closure1_slot18;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.some;
        entity = function(argFoo) {
            entity = argFoo;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['PRESENCE_UPDATES'] = verify;
    tango = function(argFoo) { // Original name: handlePresencesReplace
        entity = argFoo;
        zulu = entity.presences;
        mike = _closure1_slot16;
        entity = undefined;
        entity = mike.bind(entity)(zulu);
        return entity;
    };
    mike['PRESENCES_REPLACE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/NowPlayingStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();