// app/modules/gravity/native/GravityManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
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
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: fetchDehydratedData
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            tango = tango.bind(entity)(mike);
            mike = tango.fetchDehydrated;
            mike = mike.bind(tango)();
            tango = _closure1_slot9;
            mike = null;
            if(!(mike != tango)) { _fun00006_ip = 62; continue _fun00005 }
 45:
            mike = global;
            tango = mike.clearTimeout;
            mike = _closure1_slot9;
            mike = tango.bind(entity)(mike);
 62:
            mike = global;
            report = mike.setTimeout;
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 7;
            mike = oscar[mike];
            mike = tango.bind(entity)(mike);
            mike = mike.Millis;
            tango = mike.MINUTE;
            mike = 15;
            tango = mike * tango;
            mike = function() {
                mike = _closure1_slot12;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            };
            mike = report.bind(entity)(mike, tango);
            _closure1_slot9 = mike;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = null;
    var _closure1_slot9 = tango;
    tango = 12;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function() { // Original name: GravityManager
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot10;
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
        entity = '_initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.subscribe;
            mike = this;
            zulu = mike.handlePostConnectionOpen;
            mike = 'POST_CONNECTION_OPEN';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = '_terminate';
        report['key'] = golf;
        golf = function() { // Original name: value
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.unsubscribe;
            mike = this;
            zulu = mike.handlePostConnectionOpen;
            mike = 'POST_CONNECTION_OPEN';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'handlePostConnectionOpen';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = _closure1_slot12;
                entity = undefined;
                zulu = zulu.bind(entity)();
                oscar = _closure1_slot1;
                zulu = _closure1_slot2;
                tango = 6;
                report = zulu[tango];
                golf = oscar.bind(entity)(report);
                report = golf.getGuildChannelScores;
                report = report.bind(golf)();
                report = zulu[tango];
                oscar = oscar.bind(entity)(report);
                report = oscar.getRecommendedGuilds;
                report = report.bind(oscar)();
                report = _closure1_slot0;
                oscar = 9;
                oscar = zulu[oscar];
                golf = report.bind(entity)(oscar);
                oscar = golf.fetchChannelAffinities;
                oscar = oscar.bind(golf)();
                oscar = 10;
                zulu = zulu[oscar];
                golf = report.bind(entity)(zulu);
                report = golf.getIsNotificationsTabMerged;
                zulu = {'location': 'GravityManager', 'autoTrackExposure': false};
                zulu = report.bind(golf)(zulu);
                zulu = zulu.enabled;
                if(!zulu) { _fun00008_ip = 181; continue _fun00007 }
 133:
                report = _closure1_slot0;
                golf = _closure1_slot2;
                zulu = 11;
                zulu = golf[zulu];
                options = report.bind(entity)(zulu);
                golf = options.gravityFetchMentions;
                zulu = _closure1_slot8;
                report = zulu.roleFilter;
                zulu = zulu.everyoneFilter;
                zulu = golf.bind(options)(report, zulu);
 181:
                report = _closure1_slot0;
                zulu = _closure1_slot2;
                zulu = zulu[oscar];
                oscar = report.bind(entity)(zulu);
                report = oscar.getICYMIStatuswithMediaEnabled;
                zulu = {'location': 'GravityManager', 'autoTrackExposure': false};
                zulu = report.bind(oscar)(zulu);
                if(!zulu) { _fun00008_ip = 253; continue _fun00007 }
 226:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                mike = mike[tango];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.getMediaForCurrentStatus;
                mike = mike.bind(zulu)();
 253:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gravity/native/GravityManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();