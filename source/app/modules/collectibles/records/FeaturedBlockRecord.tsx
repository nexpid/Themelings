// app/modules/collectibles/records/FeaturedBlockRecord.tsx
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
    tango = tango.FeaturedCategorySubblockRecord;
    var _closure1_slot4 = tango;
    mike = function() {
        report = function(argFoo) { // Original name: FeaturedBlockRecord
            zulu = this;
            report = _closure1_slot2;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = _closure1_slot0;
            report = _closure1_slot1;
            mike = 3;
            mike = report[mike];
            mike = tango.bind(entity)(mike);
            mike = mike.ShopBlockType;
            mike = mike.FEATURED;
            zulu['type'] = mike;
            mike = argFoo;
            report = mike.subblocks;
            tango = report.map;
            mike = function(argFoo) {
                _fun38853: for(var _fun38853_ip = 0; ; ) switch(_fun38853_ip) {
 0:
                    tango = argFoo;
                    report = tango.type;
                    oscar = _closure1_slot0;
                    zulu = _closure1_slot1;
                    entity = 4;
                    zulu = zulu[entity];
                    entity = undefined;
                    entity = oscar.bind(entity)(zulu);
                    entity = entity.FeaturedSubblockType;
                    zulu = entity.CATEGORY;
                    entity = tango;
                    if(!(report === zulu)) { _fun38853_ip = 67; continue _fun38853 }
 52:
                    zulu = _closure1_slot4;
                    mike = zulu.fromServer;
                    entity = mike.bind(zulu)(tango);
 67:
                    return entity;
                }
            };
            mike = tango.bind(report)(mike);
            zulu['subblocks'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        entity = {};
        zulu = 'fromServer';
        entity['key'] = zulu;
        mike = function(argFoo) { // Original name: value
            zulu = _closure2_slot0;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = argFoo;
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
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
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/collectibles/records/FeaturedBlockRecord.tsx';
    tango = report.bind(oscar)(tango);
    zulu['FeaturedBlockRecord'] = mike;
    return entity;
})();