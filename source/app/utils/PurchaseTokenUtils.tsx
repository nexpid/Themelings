// app/utils/PurchaseTokenUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function() { // Original name: getPurchaseToken
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = _closure1_slot0;
            entity = _closure1_slot1;
            oscar = 2;
            entity = entity[oscar];
            report = undefined;
            entity = mike.bind(report)(entity);
            zulu = entity.Storage;
            mike = zulu.get;
            entity = _closure1_slot3;
            entity = mike.bind(zulu)(entity);
            mike = null;
            if(!(mike != entity)) { _fun00002_ip = 78; continue _fun00001 }
 51:
            zulu = entity.expires;
            mike = global;
            tango = mike.Date;
            mike = tango.now;
            mike = mike.bind(tango)();
            if(!(!(zulu >= mike))) { _fun00002_ip = 177; continue _fun00001 }
 78:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 3;
            mike = zulu[mike];
            options = tango.bind(report)(mike);
            mike = options.v4;
            mike = mike.bind(options)();
            zulu = zulu[oscar];
            zulu = tango.bind(report)(zulu);
            oscar = zulu.Storage;
            report = oscar.set;
            tango = _closure1_slot3;
            zulu = {};
            zulu['purchaseToken'] = mike;
            options = global;
            verify = options.Date;
            options = verify.now;
            options = options.bind(verify)();
            golf = _closure1_slot4;
            golf = options + golf;
            zulu['expires'] = golf;
            zulu = report.bind(oscar)(tango, zulu);
            return mike;
 177:
            entity = entity.purchaseToken;
            return entity;
        }
    };
    var _closure1_slot5 = tango;
    entity = function() { // Original name: _getPurchaseTokenHash
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 220; continue _fun00003 }
 10:
                    zulu = global;
                    oscar = zulu.Uint8Array;
                    mike = _closure1_slot5;
                    report = undefined;
                    golf = mike.bind(report)();
                    tango = golf.split;
                    mike = '';
                    golf = tango.bind(golf)(mike);
                    tango = golf.map;
                    mike = function(argFoo) {
                        zulu = argFoo;
                        mike = zulu.charCodeAt;
                        entity = 0;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    romeo = tango.bind(golf)(mike);
                    tango = oscar.prototype;
                    tango = Object.create(tango, {constructor: {value: oscar}});
                    foxtrot = tango;
                    mike = new foxtrot[oscar](romeo, yankee);
                    golf = mike instanceof Object ? mike : tango;
                    mike = zulu.window;
                    mike = mike.crypto;
                    oscar = mike.subtle;
                    tango = oscar.digest;
                    mike = {};
                    options = 'SHA-256';
                    mike['name'] = options;
                    mike = tango.bind(oscar)(mike, golf);
                    SaveGenerator(address=130);
 128:
                    return mike;
 130:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00004_ip = 217; continue _fun00003 }
 136:
                    tango = zulu.btoa;
                    golf = zulu.String;
                    oscar = golf.fromCharCode;
                    zulu = zulu.Uint8Array;
                    options = zulu.prototype;
                    options = Object.create(options, {constructor: {value: zulu}});
                    foxtrot = options;
                    romeo = mike;
                    zulu = new foxtrot[zulu](romeo, yankee);
                    yankee = zulu instanceof Object ? zulu : options;
                    zulu = new Array(0);
                    offset = 0;
                    romeo = zulu;
                    options = arraySpread(romeo, yankee, offset);
                    romeo = oscar;
                    yankee = zulu;
                    offset = golf;
                    zulu = apply(romeo, yankee, offset);
                    zulu = tango.bind(report)(zulu);
                    return zulu;
 217:
                    return mike;
 220:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot6 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot6 = entity;
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
    var _closure1_slot2 = report;
    report = 'purchase_token';
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    report = report.Millis;
    options = report.DAY;
    report = 60;
    report = report * options;
    var _closure1_slot4 = report;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'utils/PurchaseTokenUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['getPurchaseToken'] = tango;
    mike = function() { // Original name: getPurchaseTokenHash
        entity = undefined;
        tango = _closure1_slot6;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getPurchaseTokenHash'] = mike;
    return entity;
})();