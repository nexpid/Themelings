// app/modules/applications/disclosures.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function() { // Original name: _getDisclosures
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00002_ip = 154; continue _fun00001 }
 10:
                    report = _closure1_slot3;
                    tango = report.APPLICATION_DISCLOSURES;
                    zulu = argFoo;
                    report = tango.bind(report)(zulu);
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 2;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.get;
                    mike = {'url': null, 'retries': 3, 'rejectWithError': false};
                    mike['url'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=88);
 86:
                    return mike;
 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 151; continue _fun00001 }
 94:
                    zulu = {};
                    tango = mike.body;
                    tango = tango.disclosures;
                    zulu['disclosures'] = tango;
                    tango = mike.body;
                    tango = tango.acked_disclosures;
                    zulu['ackedDisclosures'] = tango;
                    tango = mike.body;
                    tango = tango.all_acked;
                    zulu['allAcked'] = tango;
                    return zulu;
 151:
                    return mike;
 154:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot4 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = function() { // Original name: _ackDisclosures
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00004_ip = 108; continue _fun00003 }
 7:
                    report = _closure1_slot3;
                    tango = report.APPLICATION_DISCLOSURES;
                    zulu = argFoo;
                    oscar = tango.bind(report)(zulu);
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 2;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    report = mike.HTTP;
                    tango = report.post;
                    mike = {};
                    mike['url'] = oscar;
                    oscar = {};
                    golf = argBar;
                    oscar['disclosures'] = golf;
                    mike['body'] = oscar;
                    oscar = false;
                    mike['rejectWithError'] = oscar;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=96);
 94:
                    return mike;
 96:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00004_ip = 105; continue _fun00003 }
 102:
                    return zulu;
 105:
                    return mike;
 108:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot5 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
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
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot3 = tango;
    tango = 5;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.fileFinishedImporting;
    tango = 'modules/applications/disclosures.tsx';
    tango = golf.bind(options)(tango);
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ApplicationDisclosureType;
    zulu['ApplicationDisclosure'] = tango;
    tango = function() { // Original name: getDisclosures
        entity = undefined;
        tango = _closure1_slot4;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getDisclosures'] = tango;
    tango = function() { // Original name: ackDisclosures
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['ackDisclosures'] = tango;
    mike = function(argFoo) { // Original name: getTextForDisclosure
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            oscar = 3;
            mike = mike[oscar];
            report = undefined;
            mike = tango.bind(report)(mike);
            mike = mike.ApplicationDisclosureType;
            mike = mike.IP_LOCATION;
            if(!(mike !== zulu)) { _fun00006_ip = 140; continue _fun00005 }
 44:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[oscar];
            mike = tango.bind(report)(mike);
            mike = mike.ApplicationDisclosureType;
            mike = mike.DISPLAYS_ADVERTISEMENTS;
            if(!(mike !== zulu)) { _fun00006_ip = 81; continue _fun00005 }
 77:
            mike = null;
            return mike;
 81:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 4;
            zulu = golf[mike];
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike./uOMKS;
            mike = zulu.bind(tango)(mike);
            return mike;
 140:
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 4;
            mike = oscar[entity];
            mike = tango.bind(report)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = tango.bind(report)(entity);
            entity = entity.t;
            entity = entity.6wPmjo;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getTextForDisclosure'] = mike;
    return entity;
})();