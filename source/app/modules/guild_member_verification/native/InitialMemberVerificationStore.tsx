// app/modules/guild_member_verification/native/InitialMemberVerificationStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot9;
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
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
            _closure1_slot9 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    tango = global;
    verify = tango.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = report.bind(entity)(golf);
    var _closure1_slot2 = golf;
    golf = 1;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 2;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 3;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 4;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    var _closure1_slot6 = golf;
    tango = tango.Map;
    golf = tango.prototype;
    golf = Object.create(golf, {constructor: {value: tango}});
    foxtrot = golf;
    tango = new foxtrot[tango](romeo);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Store;
    tango = function(argFoo) {
        tango = function() { // Original name: InitialMemberVerificationStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot8;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot6;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot3;
        report = {};
        oscar = 'getInitialVerificationState';
        report['key'] = oscar;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = argFoo;
                mike = null;
                zulu = mike == report;
                entity = null;
                if(zulu) { _fun00006_ip = 46; continue _fun00005 }
 14:
                tango = _closure1_slot7;
                zulu = tango.get;
                zulu = zulu.bind(tango)(report);
                tango = mike != zulu;
                mike = null;
                if(!tango) { _fun00006_ip = 43; continue _fun00005 }
 40:
                mike = zulu;
 43:
                entity = mike;
 46:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = tango.bind(entity)(golf);
    tango = 'InitialMemberVerificationStore';
    options['displayName'] = tango;
    tango = 6;
    tango = oscar[tango];
    romeo = report.bind(entity)(tango);
    tango = {};
    report = function(argFoo) { // Original name: handleSetInitialState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            zulu = entity.state;
            report = _closure1_slot7;
            mike = report.has;
            mike = mike.bind(report)(tango);
            if(mike) { _fun00008_ip = 48; continue _fun00007 }
 33:
            mike = _closure1_slot7;
            entity = mike.set;
            entity = entity.bind(mike)(tango, zulu);
 48:
            entity = undefined;
            return entity;
        }
    };
    tango['SET_INITIAL_MEMBER_VERIFICATION'] = report;
    report = options.prototype;
    report = Object.create(report, {constructor: {value: options}});
    foxtrot = report;
    yankee = tango;
    tango = new foxtrot[options](romeo, yankee, offset);
    tango = tango instanceof Object ? tango : report;
    report = 7;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_member_verification/native/InitialMemberVerificationStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function(argFoo, argBar) {
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SET_INITIAL_MEMBER_VERIFICATION';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['state'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setInitialVerification'] = mike;
    return entity;
})();