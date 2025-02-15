// app/utils/MFAInterceptionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    mike = function(argFoo) { // Original name: requestMfaCode
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            entity = mike.promiseFn;
            var _closure2_slot0 = entity;
            entity = mike.resolve;
            var _closure2_slot1 = entity;
            entity = mike.reject;
            var _closure2_slot2 = entity;
            oscar = mike.modalProps;
            entity = undefined;
            if(!(oscar === entity)) { _fun00002_ip = 49; continue _fun00001 }
 47:
            oscar = {};
 49:
            var _closure2_slot3 = oscar;
            mike = mike.hooks;
            if(!(mike === entity)) { _fun00002_ip = 65; continue _fun00001 }
 63:
            mike = {};
 65:
            golf = mike.onEarlyClose;
            var _closure2_slot4 = golf;
            var _closure2_slot5 = entity;
            report = function() { // Original name: handleEarlyClose
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot4;
                    mike = null;
                    if(!(mike != zulu)) { _fun00004_ip = 23; continue _fun00003 }
 13:
                    mike = _closure2_slot4;
                    entity = undefined;
                    entity = mike.bind(entity)();
 23:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure2_slot6 = report;
            mike = function(argFoo) { // Original name: closeAndResolve
                tango = _closure1_slot4;
                zulu = _closure2_slot5;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = _closure2_slot1;
                mike = argFoo;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            var _closure2_slot7 = mike;
            mike = function(argFoo) { // Original name: closeAndReject
                tango = _closure1_slot4;
                zulu = _closure2_slot5;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = _closure2_slot2;
                mike = argFoo;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            var _closure2_slot8 = mike;
            tango = function(argFoo) { // Original name: handleSubmitCode
                zulu = _closure1_slot9;
                mike = {};
                tango = _closure2_slot0;
                mike['promiseFn'] = tango;
                tango = _closure2_slot7;
                mike['resolve'] = tango;
                tango = _closure2_slot8;
                mike['reject'] = tango;
                tango = argFoo;
                mike['code'] = tango;
                entity = _closure2_slot10;
                mike['mfaCodeHandler'] = entity;
                entity = true;
                mike['isModalOpen'] = entity;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            var _closure2_slot9 = tango;
            mike = function(argFoo) { // Original name: errorHandler
                entity = argFoo;
                entity = entity.res;
                report = _closure1_slot3;
                tango = _closure2_slot9;
                zulu = _closure2_slot6;
                mike = {};
                options = _closure2_slot3;
                verify = mike;
                oscar = copyDataProperties(verify, options);
                entity = entity.body;
                oscar = entity.message;
                entity = 'error';
                mike[entity] = oscar;
                entity = undefined;
                mike = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            var _closure2_slot10 = mike;
            verify = _closure1_slot3;
            options = null;
            if(!(options == verify)) { _fun00002_ip = 147; continue _fun00001 }
 137:
            if(!(options != golf)) { _fun00002_ip = 162; continue _fun00001 }
 141:
            golf = golf.bind(entity)();
            _fun00002_ip = 162; continue _fun00001;
 147:
            mike = _closure1_slot3;
            mike = mike.bind(entity)(tango, report, oscar);
            _closure2_slot5 = mike;
 162:
            return entity;
        }
    };
    var _closure1_slot8 = mike;
    entity = function(argFoo) { // Original name: executePromise
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            verify = argFoo;
            report = verify.promiseFn;
            var _closure2_slot0 = report;
            tango = verify.resolve;
            var _closure2_slot1 = tango;
            mike = verify.reject;
            var _closure2_slot2 = mike;
            golf = verify.code;
            mike = verify.mfaCodeHandler;
            zulu = undefined;
            if(!(mike === zulu)) { _fun00006_ip = 59; continue _fun00005 }
 52:
            mike = _closure1_slot8;
 59:
            var _closure2_slot3 = mike;
            mike = verify.isModalOpen;
            if(!(mike === zulu)) { _fun00006_ip = 75; continue _fun00005 }
 73:
            mike = false;
 75:
            var _closure2_slot4 = mike;
            options = {'promiseFn': 0, 'resolve': 0, 'reject': 0, 'code': 0, 'mfaCodeHandler': 0, 'isModalOpen': 0};
            mike = null;
            romeo = options;
            yankee = null;
            oscar = silentSetPrototypeOf(romeo, yankee);
            romeo = {};
            yankee = verify;
            offset = options;
            oscar = copyDataProperties(romeo, yankee, offset);
            var _closure2_slot5 = oscar;
            if(!(mike == golf)) { _fun00006_ip = 128; continue _fun00005 }
 124:
            mike = {};
            _fun00006_ip = 137; continue _fun00005;
 128:
            oscar = {};
            oscar['code'] = golf;
            mike = oscar;
 137:
            zulu = report.bind(zulu)(mike);
            mike = zulu.then;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tango = argFoo;
                    zulu = _closure2_slot4;
                    mike = tango.body;
                    if(!mike) { _fun00008_ip = 39; continue _fun00007 }
 18:
                    report = tango.body;
                    oscar = report.code;
                    report = _closure1_slot7;
                    mike = oscar === report;
 39:
                    if(mike) { _fun00008_ip = 63; continue _fun00007 }
 42:
                    if(!zulu) { _fun00008_ip = 60; continue _fun00007 }
 45:
                    oscar = tango.status;
                    report = 429;
                    zulu = report === oscar;
 60:
                    mike = zulu;
 63:
                    if(mike) { _fun00008_ip = 79; continue _fun00007 }
 66:
                    zulu = _closure2_slot2;
                    mike = undefined;
                    zulu = zulu.bind(mike)(tango);
                    return mike;
 79:
                    zulu = _closure2_slot3;
                    mike = {};
                    report = _closure2_slot0;
                    mike['promiseFn'] = report;
                    report = _closure2_slot1;
                    mike['resolve'] = report;
                    report = _closure2_slot2;
                    mike['reject'] = report;
                    mike['res'] = tango;
                    golf = _closure2_slot5;
                    options = mike;
                    entity = copyDataProperties(options, golf);
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = ['checkEnabled'];
    var _closure1_slot2 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.showAlert;
    var _closure1_slot3 = report;
    report = function() { // Original name: l
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        entity = mike.closeAlert;
        entity = entity.bind(mike)();
        return entity;
    };
    var _closure1_slot4 = report;
    report = 60008;
    var _closure1_slot7 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'utils/MFAInterceptionUtils.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo, argBar) { // Original name: mfaInterceptor
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argBar;
            mike = argFoo;
            var _closure2_slot0 = mike;
            zulu = null;
            if(!(zulu == report)) { _fun00010_ip = 20; continue _fun00009 }
 18:
            report = {};
 20:
            mike = report.checkEnabled;
            tango = undefined;
            if(!(tango === mike)) { _fun00010_ip = 76; continue _fun00009 }
 32:
            golf = _closure1_slot6;
            oscar = golf.getCurrentUser;
            golf = oscar.bind(golf)();
            options = zulu == golf;
            oscar = undefined;
            if(options) { _fun00010_ip = 63; continue _fun00009 }
 57:
            oscar = golf.mfaEnabled;
 63:
            zulu = zulu != oscar;
            if(!zulu) { _fun00010_ip = 73; continue _fun00009 }
 70:
            zulu = oscar;
 73:
            mike = zulu;
 76:
            var _closure2_slot1 = mike;
            zulu = _closure1_slot5;
            mike = _closure1_slot2;
            mike = zulu.bind(tango)(report, mike);
            var _closure2_slot2 = mike;
            mike = global;
            zulu = mike.Promise;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            offset = function(argFoo, argBar) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    entity = 3;
                    zulu = zulu[entity];
                    entity = undefined;
                    oscar = tango.bind(entity)(zulu);
                    report = oscar.resolveThunk;
                    zulu = _closure2_slot1;
                    zulu = report.bind(oscar)(zulu);
                    if(zulu) { _fun00012_ip = 52; continue _fun00011 }
 46:
                    zulu = _closure1_slot9;
                    _fun00012_ip = 56; continue _fun00011;
 52:
                    zulu = _closure1_slot8;
 56:
                    mike = {};
                    report = _closure2_slot0;
                    mike['promiseFn'] = report;
                    report = argFoo;
                    mike['resolve'] = report;
                    report = argBar;
                    mike['reject'] = report;
                    golf = _closure2_slot2;
                    options = mike;
                    tango = copyDataProperties(options, golf);
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            yankee = mike;
            entity = new yankee[zulu](offset, verify);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['requestMfaCode'] = mike;
    return entity;
})();