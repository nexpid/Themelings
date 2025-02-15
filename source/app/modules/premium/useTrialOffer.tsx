// app/modules/premium/useTrialOffer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo) { // Original name: hasUserTrialOfferExpired
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            tango = null;
            entity = tango != mike;
            if(!entity) { _fun00002_ip = 22; continue _fun00001 }
 12:
            zulu = mike.expires_at;
            entity = tango != zulu;
 22:
            if(!entity) { _fun00002_ip = 69; continue _fun00001 }
 25:
            tango = global;
            report = tango.Date;
            zulu = report.now;
            zulu = zulu.bind(report)();
            report = tango.Date;
            tango = report.parse;
            mike = mike.expires_at;
            mike = tango.bind(report)(mike);
            entity = zulu > mike;
 69:
            return entity;
        }
    };
    var _closure1_slot6 = tango;
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
    report = 1;
    verify = golf[report];
    report = argCorge;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/premium/useTrialOffer.tsx';
    report = oscar.bind(golf)(report);
    zulu['hasUserTrialOfferExpired'] = tango;
    mike = function(argFoo) { // Original name: useTrialOffer
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            options = _closure1_slot0;
            verify = _closure1_slot1;
            tango = 4;
            mike = verify[tango];
            oscar = undefined;
            offset = options.bind(oscar)(mike);
            golf = offset.useStateFromStores;
            mike = _closure1_slot5;
            report = new Array(1);
            report[0] = mike;
            mike = function() {
                zulu = _closure1_slot5;
                mike = zulu.getUserTrialOffer;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = golf.bind(offset)(report, mike);
            var _closure2_slot1 = mike;
            golf = _closure1_slot3;
            offset = golf.useState;
            report = _closure1_slot6;
            report = report.bind(oscar)(mike);
            yankee = offset.bind(golf)(report);
            offset = _closure1_slot2;
            report = 2;
            yankee = offset.bind(oscar)(yankee, report);
            report = 0;
            report = yankee[report];
            var _closure2_slot2 = report;
            offset = 1;
            offset = yankee[offset];
            var _closure2_slot3 = offset;
            tango = verify[tango];
            options = options.bind(oscar)(tango);
            oscar = options.useStateFromStores;
            zulu = _closure1_slot4;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 5;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.isPremium;
                tango = _closure1_slot4;
                entity = tango.getCurrentUser;
                entity = entity.bind(tango)();
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = oscar.bind(options)(tango, zulu);
            oscar = golf.useEffect;
            tango = new Array(2);
            tango[0] = report;
            tango[1] = mike;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = _closure2_slot1;
                    zulu = null;
                    if(!(zulu != tango)) { _fun00006_ip = 29; continue _fun00005 }
 15:
                    mike = _closure2_slot1;
                    mike = mike.expires_at;
                    if(!(zulu == mike)) { _fun00006_ip = 33; continue _fun00005 }
 29:
                    mike = undefined;
                    return mike;
 33:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 6;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    mike = mike.Timeout;
                    tango = mike.prototype;
                    tango = Object.create(tango, {constructor: {value: mike}});
                    oscar = tango;
                    mike = new oscar[mike](report);
                    mike = mike instanceof Object ? mike : tango;
                    var _closure3_slot0 = mike;
                    mike = function() { // Original name: startTimer
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            entity = _closure2_slot1;
                            entity = entity.expires_at;
                            zulu = null;
                            entity = zulu != entity;
                            tango = 0;
                            if(!entity) { _fun00008_ip = 72; continue _fun00007 }
 24:
                            entity = global;
                            oscar = entity.Date;
                            report = oscar.parse;
                            mike = _closure2_slot1;
                            mike = mike.expires_at;
                            mike = report.bind(oscar)(mike);
                            report = entity.Date;
                            entity = report.now;
                            entity = entity.bind(report)();
                            tango = mike - entity;
 72:
                            mike = _closure3_slot0;
                            if(!(zulu != mike)) { _fun00008_ip = 107; continue _fun00007 }
 83:
                            zulu = _closure3_slot0;
                            mike = zulu.start;
                            entity = function() {
                                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                    mike = _closure2_slot2;
                                    if(mike) { _fun00010_ip = 44; continue _fun00009 }
 10:
                                    tango = _closure1_slot6;
                                    mike = _closure2_slot1;
                                    zulu = undefined;
                                    mike = tango.bind(zulu)(mike);
                                    if(!mike) { _fun00010_ip = 44; continue _fun00009 }
 31:
                                    mike = _closure2_slot3;
                                    entity = true;
                                    entity = mike.bind(zulu)(entity);
                                    _fun00010_ip = 57; continue _fun00009;
 44:
                                    mike = _closure3_slot1;
                                    entity = undefined;
                                    entity = mike.bind(entity)();
 57:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            entity = mike.bind(zulu)(tango, entity);
 107:
                            entity = undefined;
                            return entity;
                        }
                    };
                    var _closure3_slot1 = mike;
                    mike = mike.bind(zulu)();
                    entity = function() {
                        mike = _closure3_slot0;
                        entity = mike.stop;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    return entity;
                }
            };
            entity = oscar.bind(golf)(entity, tango);
            entity = null;
            if(report) { _fun00004_ip = 207; continue _fun00003 }
 199:
            entity = null;
            if(zulu) { _fun00004_ip = 207; continue _fun00003 }
 204:
            entity = mike;
 207:
            return entity;
        }
    };
    zulu['useTrialOffer'] = mike;
    return entity;
})();