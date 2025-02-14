// app/stores/SelfPresenceStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun68355: for(var _fun68355_ip = 0; ; ) switch(_fun68355_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot29;
            entity = entity.bind(zulu)();
            if(entity) { _fun68355_ip = 51; continue _fun68355 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun68355_ip = 92; continue _fun68355;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun68355_ip = 71; continue _fun68355 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun68356: for(var _fun68356_ip = 0; ; ) switch(_fun68356_ip) {
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
            _fun68356_ip = 76; continue _fun68356;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot29 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: shouldShowApplicationActivity
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 14;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.shouldShareApplicationActivity;
        mike = _closure1_slot12;
        entity = argFoo;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo) { // Original name: shouldShowActivity
        _fun68360: for(var _fun68360_ip = 0; ; ) switch(_fun68360_ip) {
 0:
            zulu = argFoo;
            tango = zulu.type;
            entity = _closure1_slot18;
            entity = entity.LISTENING;
            if(!(entity !== tango)) { _fun68360_ip = 213; continue _fun68360 }
 28:
            entity = _closure1_slot18;
            entity = entity.PLAYING;
            if(!(entity !== tango)) { _fun68360_ip = 100; continue _fun68360 }
 42:
            entity = _closure1_slot18;
            entity = entity.STREAMING;
            if(!(entity !== tango)) { _fun68360_ip = 66; continue _fun68360 }
 56:
            entity = _closure1_slot18;
            entity = entity.WATCHING;
 66:
            tango = zulu.application_id;
            entity = null;
            entity = entity == tango;
            if(entity) { _fun68360_ip = 98; continue _fun68360 }
 81:
            oscar = _closure1_slot30;
            report = zulu.application_id;
            tango = undefined;
            entity = oscar.bind(tango)(report);
 98:
            return entity;
 100:
            tango = zulu.application_id;
            entity = null;
            if(!(entity == tango)) { _fun68360_ip = 194; continue _fun68360 }
 112:
            oscar = zulu.name;
            report = _closure1_slot10;
            tango = report.getGameByName;
            tango = tango.bind(report)(oscar);
            if(!(entity == tango)) { _fun68360_ip = 176; continue _fun68360 }
 136:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            entity = 15;
            report = report[entity];
            entity = undefined;
            entity = oscar.bind(entity)(report);
            report = entity.ShowCurrentGame;
            entity = report.getSetting;
            entity = entity.bind(report)();
            _fun68360_ip = 192; continue _fun68360;
 176:
            oscar = _closure1_slot30;
            report = tango.id;
            tango = undefined;
            entity = oscar.bind(tango)(report);
 192:
            _fun68360_ip = 211; continue _fun68360;
 194:
            oscar = _closure1_slot30;
            report = zulu.application_id;
            tango = undefined;
            entity = oscar.bind(tango)(report);
 211:
            return entity;
 213:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            entity = 16;
            entity = report[entity];
            report = undefined;
            entity = tango.bind(report)(entity);
            entity = entity.bind(report)(zulu);
            if(entity) { _fun68360_ip = 275; continue _fun68360 }
 243:
            tango = zulu.application_id;
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun68360_ip = 273; continue _fun68360 }
 258:
            tango = _closure1_slot30;
            zulu = zulu.application_id;
            entity = tango.bind(report)(zulu);
 273:
            _fun68360_ip = 289; continue _fun68360;
 275:
            zulu = _closure1_slot8;
            mike = zulu.shouldShowActivity;
            entity = mike.bind(zulu)();
 289:
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    verify = function() { // Original name: handleUpdate
        _fun68361: for(var _fun68361_ip = 0; ; ) switch(_fun68361_ip) {
 0:
            tango = _closure1_slot11;
            entity = tango.getIdleSince;
            tango = entity.bind(tango)();
            entity = null;
            report = entity != tango;
            oscar = 0;
            entity = 0;
            if(!report) { _fun68361_ip = 35; continue _fun68361 }
 32:
            entity = tango;
 35:
            _closure1_slot22 = entity;
            tango = _closure1_slot11;
            entity = tango.isAFK;
            entity = entity.bind(tango)();
            _closure1_slot24 = entity;
            entity = _closure1_slot25;
            if(entity) { _fun68361_ip = 157; continue _fun68361 }
 66:
            entity = _closure1_slot19;
            if(entity) { _fun68361_ip = 141; continue _fun68361 }
 73:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 15;
            tango = tango[entity];
            entity = undefined;
            entity = report.bind(entity)(tango);
            tango = entity.StatusSetting;
            entity = tango.getSetting;
            entity = entity.bind(tango)();
            tango = _closure1_slot17;
            tango = tango.UNKNOWN;
            if(!(entity === tango)) { _fun68361_ip = 135; continue _fun68361 }
 125:
            tango = _closure1_slot17;
            entity = tango.ONLINE;
 135:
            _closure1_slot20 = entity;
            _fun68361_ip = 165; continue _fun68361;
 141:
            entity = _closure1_slot17;
            entity = entity.INVISIBLE;
            _closure1_slot20 = entity;
            _fun68361_ip = 165; continue _fun68361;
 157:
            entity = _closure1_slot21;
            _closure1_slot20 = entity;
 165:
            tango = _closure1_slot20;
            entity = _closure1_slot17;
            entity = entity.ONLINE;
            entity = tango === entity;
            if(!entity) { _fun68361_ip = 194; continue _fun68361 }
 186:
            tango = _closure1_slot22;
            entity = tango > oscar;
 194:
            if(!entity) { _fun68361_ip = 211; continue _fun68361 }
 197:
            entity = _closure1_slot17;
            entity = entity.IDLE;
            _closure1_slot20 = entity;
 211:
            entity = _closure1_slot25;
            if(entity) { _fun68361_ip = 266; continue _fun68361 }
 218:
            tango = _closure1_slot20;
            entity = _closure1_slot17;
            entity = entity.INVISIBLE;
            if(!(tango !== entity)) { _fun68361_ip = 266; continue _fun68361 }
 236:
            tango = _closure1_slot13;
            entity = tango.getActivities;
            report = entity.bind(tango)();
            tango = report.filter;
            entity = _closure1_slot31;
            report = tango.bind(report)(entity);
            _fun68361_ip = 270; continue _fun68361;
 266:
            report = new Array(0);
 270:
            golf = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 17;
            tango = tango[entity];
            entity = undefined;
            golf = golf.bind(entity)(tango);
            tango = _closure1_slot23;
            golf = golf.bind(entity)(tango, report);
            tango = false;
            if(golf) { _fun68361_ip = 313; continue _fun68361 }
 307:
            _closure1_slot23 = report;
            tango = true;
 313:
            golf = _closure1_slot16;
            report = golf.getRemoteActivities;
            report = report.bind(golf)();
            golf = _closure1_slot26;
            if(!(golf !== report)) { _fun68361_ip = 343; continue _fun68361 }
 337:
            _closure1_slot26 = report;
            tango = true;
 343:
            if(!tango) { _fun68361_ip = 462; continue _fun68361 }
 346:
            report = _closure1_slot1;
            golf = _closure1_slot2;
            tango = 18;
            tango = golf[tango];
            report = report.bind(entity)(tango);
            yankee = _closure1_slot23;
            golf = new Array(0);
            romeo = golf;
            offset = 0;
            offset = arraySpread(romeo, yankee, offset);
            verify = _closure1_slot26;
            options = verify.filter;
            tango = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                entity = _closure1_slot18;
                entity = entity.CUSTOM_STATUS;
                entity = mike !== entity;
                return entity;
            };
            yankee = options.bind(verify)(tango);
            romeo = golf;
            tango = arraySpread(romeo, yankee, offset);
            oscar = golf.sort;
            tango = _closure1_slot15;
            tango = oscar.bind(golf)(tango);
            report = report.bind(entity)(tango);
            tango = report.uniqBy;
            mike = function(argFoo) {
                entity = argFoo;
                yankee = entity.type;
                verify = entity.application_id;
                golf = entity.name;
                entity = global;
                entity = entity.HermesInternal;
                zulu = entity.concat;
                romeo = '';
                entity = ':';
                offset = entity;
                options = entity;
                entity = romeo[zulu](yankee, offset, verify, options, golf, oscar);
                return entity;
            };
            tango = tango.bind(report)(mike);
            mike = tango.value;
            mike = mike.bind(tango)();
            _closure1_slot27 = mike;
 462:
            return entity;
        }
    };
    var _closure1_slot32 = verify;
    offset = function() { // Original name: handleConnectionOpen
        entity = false;
        _closure1_slot25 = entity;
        entity = _closure1_slot17;
        entity = entity.UNKNOWN;
        _closure1_slot21 = entity;
        zulu = _closure1_slot32;
        entity = undefined;
        zulu = zulu.bind(entity)();
        report = _closure1_slot14;
        tango = report.setCurrentUserOnConnectionOpen;
        zulu = _closure1_slot20;
        mike = _closure1_slot27;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    var _closure1_slot33 = offset;
    mike = global;
    foxtrot = mike.Object;
    romeo = foxtrot.defineProperty;
    yankee = {};
    options = true;
    yankee['value'] = options;
    entity = '__esModule';
    entity = romeo.bind(foxtrot)(zulu, entity, yankee);
    romeo = 0;
    yankee = oscar[romeo];
    entity = undefined;
    yankee = golf.bind(entity)(yankee);
    var _closure1_slot3 = yankee;
    yankee = 1;
    yankee = oscar[yankee];
    yankee = golf.bind(entity)(yankee);
    var _closure1_slot4 = yankee;
    yankee = 2;
    yankee = oscar[yankee];
    yankee = golf.bind(entity)(yankee);
    var _closure1_slot5 = yankee;
    yankee = 3;
    yankee = oscar[yankee];
    yankee = golf.bind(entity)(yankee);
    var _closure1_slot6 = yankee;
    yankee = 4;
    yankee = oscar[yankee];
    yankee = golf.bind(entity)(yankee);
    var _closure1_slot7 = yankee;
    yankee = 5;
    yankee = oscar[yankee];
    yankee = golf.bind(entity)(yankee);
    var _closure1_slot8 = yankee;
    yankee = 6;
    yankee = oscar[yankee];
    yankee = golf.bind(entity)(yankee);
    var _closure1_slot9 = yankee;
    yankee = 7;
    yankee = oscar[yankee];
    yankee = golf.bind(entity)(yankee);
    var _closure1_slot10 = yankee;
    yankee = 8;
    yankee = oscar[yankee];
    yankee = golf.bind(entity)(yankee);
    var _closure1_slot11 = yankee;
    yankee = 9;
    yankee = oscar[yankee];
    yankee = golf.bind(entity)(yankee);
    var _closure1_slot12 = yankee;
    yankee = 10;
    yankee = oscar[yankee];
    yankee = golf.bind(entity)(yankee);
    var _closure1_slot13 = yankee;
    yankee = 11;
    foxtrot = oscar[yankee];
    foxtrot = golf.bind(entity)(foxtrot);
    var _closure1_slot14 = foxtrot;
    yankee = oscar[yankee];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.sortActivity;
    var _closure1_slot15 = yankee;
    yankee = 12;
    yankee = oscar[yankee];
    yankee = golf.bind(entity)(yankee);
    var _closure1_slot16 = yankee;
    yankee = 13;
    yankee = oscar[yankee];
    yankee = report.bind(entity)(yankee);
    foxtrot = yankee.StatusTypes;
    var _closure1_slot17 = foxtrot;
    yankee = yankee.ActivityTypes;
    var _closure1_slot18 = yankee;
    yankee = false;
    var _closure1_slot19 = yankee;
    backup = foxtrot.ONLINE;
    var _closure1_slot20 = backup;
    foxtrot = foxtrot.UNKNOWN;
    var _closure1_slot21 = foxtrot;
    var _closure1_slot22 = romeo;
    romeo = new Array(0);
    var _closure1_slot23 = romeo;
    var _closure1_slot24 = yankee;
    var _closure1_slot25 = options;
    yankee = mike.Object;
    options = yankee.freeze;
    mike = new Array(0);
    mike = options.bind(yankee)(mike);
    var _closure1_slot26 = mike;
    mike = new Array(0);
    var _closure1_slot27 = mike;
    mike = 19;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: SelfPresenceStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot28;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tango = this;
            verify = tango.waitFor;
            kilo = _closure1_slot11;
            backup = _closure1_slot9;
            foxtrot = _closure1_slot13;
            romeo = _closure1_slot16;
            yankee = _closure1_slot12;
            offset = _closure1_slot10;
            sizing = tango;
            mike = sizing[verify](kilo, backup, foxtrot, romeo, yankee, offset, verify);
            zulu = tango.syncWith;
            report = _closure1_slot13;
            mike = new Array(1);
            mike[0] = report;
            entity = _closure1_slot32;
            entity = zulu.bind(tango)(mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golf = 'getLocalPresence';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = {};
            zulu = _closure1_slot20;
            entity['status'] = zulu;
            zulu = _closure1_slot22;
            entity['since'] = zulu;
            zulu = _closure1_slot23;
            entity['activities'] = zulu;
            mike = _closure1_slot24;
            entity['afk'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getStatus';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot20;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getActivities';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun68370: for(var _fun68370_ip = 0; ; ) switch(_fun68370_ip) {
 0:
                entity = arguments[0];
                mike = undefined;
                if(!(entity === mike)) { _fun68370_ip = 11; continue _fun68370 }
 9:
                entity = true;
 11:
                if(entity) { _fun68370_ip = 23; continue _fun68370 }
 17:
                entity = _closure1_slot23;
                _fun68370_ip = 27; continue _fun68370;
 23:
                entity = _closure1_slot27;
 27:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getPrimaryActivity';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun68371: for(var _fun68371_ip = 0; ; ) switch(_fun68371_ip) {
 0:
                entity = arguments[0];
                mike = undefined;
                if(!(entity === mike)) { _fun68371_ip = 11; continue _fun68371 }
 9:
                entity = true;
 11:
                if(entity) { _fun68371_ip = 29; continue _fun68371 }
 17:
                zulu = _closure1_slot23;
                entity = 0;
                entity = zulu[entity];
                _fun68371_ip = 39; continue _fun68371;
 29:
                zulu = _closure1_slot27;
                mike = 0;
                entity = zulu[mike];
 39:
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getApplicationActivity';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun68372: for(var _fun68372_ip = 0; ; ) switch(_fun68372_ip) {
 0:
                tango = arguments[1];
                zulu = this;
                mike = argFoo;
                var _closure3_slot0 = mike;
                mike = undefined;
                if(!(tango === mike)) { _fun68372_ip = 23; continue _fun68372 }
 21:
                tango = true;
 23:
                mike = zulu.findActivity;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.application_id;
                    entity = _closure3_slot0;
                    entity = mike === entity;
                    return entity;
                };
                entity = mike.bind(zulu)(entity, tango);
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'findActivity';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun68374: for(var _fun68374_ip = 0; ; ) switch(_fun68374_ip) {
 0:
                zulu = arguments[1];
                mike = this;
                entity = undefined;
                if(!(zulu === entity)) { _fun68374_ip = 14; continue _fun68374 }
 12:
                zulu = true;
 14:
                entity = mike.getActivities;
                zulu = entity.bind(mike)(zulu);
                mike = zulu.find;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        report['value'] = oscar;
        entity[6] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'SelfPresenceStore';
    options['displayName'] = mike;
    mike = 20;
    mike = oscar[mike];
    output = golf.bind(entity)(mike);
    mike = {};
    mike['START_SESSION'] = verify;
    yankee = function() { // Original name: handleConnectionOpenTracked
        mike = _closure1_slot33;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['CONNECTION_OPEN'] = yankee;
    mike['CONNECTION_OPEN_SUPPLEMENTAL'] = offset;
    mike['OVERLAY_INITIALIZE'] = offset;
    mike['CONNECTION_CLOSED'] = verify;
    mike['IDLE'] = verify;
    mike['AFK'] = verify;
    mike['RUNNING_GAMES_CHANGE'] = verify;
    mike['STREAMING_UPDATE'] = verify;
    mike['USER_SETTINGS_PROTO_UPDATE'] = verify;
    mike['LOCAL_ACTIVITY_UPDATE'] = verify;
    mike['SPOTIFY_PLAYER_STATE'] = verify;
    mike['SPOTIFY_PLAYER_PLAY'] = verify;
    mike['USER_CONNECTIONS_UPDATE'] = verify;
    mike['SESSIONS_REPLACE'] = verify;
    mike['RPC_APP_DISCONNECTED'] = verify;
    mike['LIBRARY_FETCH_SUCCESS'] = verify;
    mike['LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS'] = verify;
    verify = function() { // Original name: handleLogout
        mike = true;
        _closure1_slot25 = mike;
        mike = _closure1_slot20;
        _closure1_slot21 = mike;
        mike = _closure1_slot32;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['LOGOUT'] = verify;
    verify = function(argFoo) { // Original name: handleForceInvisible
        entity = argFoo;
        mike = entity.invisible;
        _closure1_slot19 = mike;
        mike = _closure1_slot32;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['FORCE_INVISIBLE'] = verify;
    tango = function() { // Original name: handleWindowFocus
        mike = false;
        _closure1_slot19 = mike;
        mike = _closure1_slot32;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['WINDOW_FOCUS'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    result = tango;
    sizing = mike;
    mike = new result[options](output, sizing, kilo);
    mike = mike instanceof Object ? mike : tango;
    tango = 21;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/SelfPresenceStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();