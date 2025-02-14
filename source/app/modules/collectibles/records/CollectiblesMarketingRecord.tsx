// app/modules/collectibles/records/CollectiblesMarketingRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.CollectiblesMarketingBadgeRecord;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.CollectiblesMarketingBannerRecord;
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    mike = function() {
        report = function(argFoo) { // Original name: CollectiblesMarketingsRecord
            zulu = this;
            tango = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = argFoo;
            zulu['marketingsBySurfaces'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        entity = {};
        zulu = 'fromServer';
        entity['key'] = zulu;
        mike = function(argFoo) { // Original name: value
            _fun38808: for(var _fun38808_ip = 0; ; ) switch(_fun38808_ip) {
 0:
                options = argFoo;
                zulu = _closure2_slot0;
                entity = global;
                tango = entity.Object;
                mike = tango.fromEntries;
                oscar = entity.Object;
                report = oscar.entries;
                golf = null;
                verify = golf == options;
                entity = undefined;
                if(verify) { _fun38808_ip = 53; continue _fun38808 }
 47:
                entity = options.marketings;
 53:
                if(!(golf == entity)) { _fun38808_ip = 59; continue _fun38808 }
 57:
                entity = {};
 59:
                oscar = report.bind(oscar)(entity);
                report = oscar.map;
                entity = function(argFoo) {
                    _fun38809: for(var _fun38809_ip = 0; ; ) switch(_fun38809_ip) {
 0:
                        oscar = argFoo;
                        entity = oscar[Symbol.iterator];
                        oscar = entity().next;
                        report = oscar().value;
                        zulu = entity;
                        options = undefined;
                        tango = zulu === options;
                        zulu = undefined;
                        if(tango) { _fun38809_ip = 29; continue _fun38809 }
 26:
                        zulu = report;
 29:
                        report = undefined;
                        if(tango) { _fun38809_ip = 59; continue _fun38809 }
 34:
                        golf = oscar().value;
                        oscar = entity;
                        oscar = oscar === options;
                        report = undefined;
                        tango = oscar;
                        if(oscar) { _fun38809_ip = 59; continue _fun38809 }
 53:
                        report = golf;
                        tango = oscar;
 59:
                        if(tango) { _fun38809_ip = 65; continue _fun38809 }
 62:
                        entity.return();
 65:
                        entity = new Array(2);
                        entity[0] = zulu;
                        golf = _closure1_slot0;
                        verify = _closure1_slot1;
                        zulu = 5;
                        zulu = verify[zulu];
                        tango = golf.bind(options)(zulu);
                        zulu = tango.match;
                        offset = zulu.bind(tango)(report);
                        oscar = offset.with;
                        report = {};
                        zulu = 6;
                        tango = verify[zulu];
                        tango = golf.bind(options)(tango);
                        tango = tango.CollectiblesMarketingType;
                        tango = tango.COACHTIP;
                        report['type'] = tango;
                        tango = function(argFoo) {
                            zulu = _closure1_slot6;
                            mike = zulu.fromServer;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        offset = oscar.bind(offset)(report, tango);
                        oscar = offset.with;
                        report = {};
                        tango = verify[zulu];
                        tango = golf.bind(options)(tango);
                        tango = tango.CollectiblesMarketingType;
                        tango = tango.BADGE;
                        report['type'] = tango;
                        tango = function(argFoo) {
                            zulu = _closure1_slot4;
                            mike = zulu.fromServer;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        oscar = oscar.bind(offset)(report, tango);
                        report = oscar.with;
                        tango = {};
                        zulu = verify[zulu];
                        zulu = golf.bind(options)(zulu);
                        zulu = zulu.CollectiblesMarketingType;
                        zulu = zulu.BANNER;
                        tango['type'] = zulu;
                        zulu = function(argFoo) {
                            zulu = _closure1_slot5;
                            mike = zulu.fromServer;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        tango = report.bind(oscar)(tango, zulu);
                        zulu = tango.otherwise;
                        mike = function() {
                            entity = undefined;
                            return entity;
                        };
                        mike = zulu.bind(tango)(mike);
                        entity[1] = mike;
                        return entity;
                    }
                };
                entity = report.bind(oscar)(entity);
                offset = mike.bind(tango)(entity);
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                yankee = mike;
                entity = new yankee[zulu](offset, verify);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            }
        };
        entity['value'] = mike;
        zulu = new Array(1);
        zulu[0] = entity;
        mike = undefined;
        entity = null;
        entity = tango.bind(mike)(report, entity, zulu);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/collectibles/records/CollectiblesMarketingRecord.tsx';
    tango = report.bind(oscar)(tango);
    zulu['CollectiblesMarketingsRecord'] = mike;
    return entity;
})();