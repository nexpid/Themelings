// app/actions/ConsentActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: handleRequestSuccess
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tango = null;
            mike = tango != entity;
            if(!mike) { _fun00002_ip = 21; continue _fun00001 }
 12:
            zulu = entity.body;
            mike = tango != zulu;
 21:
            if(!mike) { _fun00002_ip = 90; continue _fun00001 }
 24:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 1;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.dispatch;
            mike = {};
            report = 'UPDATE_CONSENTS';
            mike['type'] = report;
            report = {};
            golf = entity.body;
            options = report;
            oscar = copyDataProperties(options, golf);
            mike['consents'] = report;
            mike = zulu.bind(tango)(mike);
 90:
            entity = entity.body;
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = function(argFoo) { // Original name: handleRequestFailure
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zulu = entity.status;
            mike = 500;
            if(!(zulu >= mike)) { _fun00004_ip = 33; continue _fun00003 }
 18:
            zulu = entity.status;
            mike = 599;
            if(!(!(zulu <= mike))) { _fun00004_ip = 136; continue _fun00003 }
 33:
            zulu = null;
            if(!(zulu != entity)) { _fun00004_ip = 62; continue _fun00003 }
 39:
            mike = entity.body;
            if(!(zulu != mike)) { _fun00004_ip = 62; continue _fun00003 }
 48:
            mike = entity.body;
            mike = mike.message;
            if(!(zulu == mike)) { _fun00004_ip = 124; continue _fun00003 }
 62:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 2;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.cvJdtr;
            zulu = zulu.bind(tango)(mike);
            _fun00004_ip = 134; continue _fun00003;
 124:
            entity = entity.body;
            zulu = entity.message;
 134:
            _fun00004_ip = 196; continue _fun00003;
 136:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 2;
            mike = golf[entity];
            report = undefined;
            mike = oscar.bind(report)(mike);
            tango = mike.intl;
            mike = tango.string;
            entity = golf[entity];
            entity = oscar.bind(report)(entity);
            entity = entity.t;
            entity = entity.cvJdtr;
            zulu = mike.bind(tango)(entity);
 196:
            entity = global;
            entity = entity.Error;
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            verify = mike;
            options = zulu;
            entity = new verify[entity](options, golf);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/ConsentActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: fetchConsents
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.get;
        mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        report = _closure1_slot3;
        report = report.SETTINGS_CONSENT;
        mike['url'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = _closure1_slot4;
        entity = function(argFoo) {
            entity = global;
            zulu = entity.Promise;
            mike = zulu.reject;
            report = entity.Error;
            entity = argFoo;
            entity = entity.body;
            oscar = entity.message;
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            golf = tango;
            entity = new golf[report](oscar, report);
            entity = entity instanceof Object ? entity : tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['fetchConsents'] = tango;
    mike = function(argFoo, argBar) { // Original name: setConsents
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.post;
        mike = {};
        report = _closure1_slot3;
        report = report.SETTINGS_CONSENT;
        mike['url'] = report;
        report = {};
        oscar = argFoo;
        report['grant'] = oscar;
        oscar = argBar;
        report['revoke'] = oscar;
        mike['body'] = report;
        report = true;
        mike['oldFormErrors'] = report;
        report = false;
        mike['rejectWithError'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = _closure1_slot4;
        entity = _closure1_slot5;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['setConsents'] = mike;
    return entity;
})();