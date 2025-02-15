// app/modules/collectibles/records/CollectiblesShopHomeRecord.tsx
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FeaturedBlockRecord;
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FeedBlockRecord;
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.HeroBlockRecord;
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.WideBannerBlockRecord;
    var _closure1_slot8 = tango;
    mike = function() {
        report = function(argFoo) { // Original name: CollectiblesShopHomeRecord
            tango = argFoo;
            zulu = this;
            oscar = _closure1_slot2;
            report = _closure2_slot0;
            entity = undefined;
            report = oscar.bind(entity)(zulu, report);
            golf = tango.shop_blocks;
            oscar = golf.map;
            report = function(argFoo) {
                _fun38846: for(var _fun38846_ip = 0; ; ) switch(_fun38846_ip) {
 0:
                    zulu = argFoo;
                    report = zulu.type;
                    oscar = _closure1_slot0;
                    mike = _closure1_slot1;
                    golf = 7;
                    tango = mike[golf];
                    mike = undefined;
                    tango = oscar.bind(mike)(tango);
                    tango = tango.ShopBlockType;
                    tango = tango.HERO;
                    if(!(tango !== report)) { _fun38846_ip = 204; continue _fun38846 }
 52:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot1;
                    tango = tango[golf];
                    tango = oscar.bind(mike)(tango);
                    tango = tango.ShopBlockType;
                    tango = tango.FEATURED;
                    if(!(tango !== report)) { _fun38846_ip = 187; continue _fun38846 }
 85:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot1;
                    tango = tango[golf];
                    tango = oscar.bind(mike)(tango);
                    tango = tango.ShopBlockType;
                    tango = tango.FEED;
                    if(!(tango !== report)) { _fun38846_ip = 170; continue _fun38846 }
 118:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot1;
                    tango = tango[golf];
                    tango = oscar.bind(mike)(tango);
                    tango = tango.ShopBlockType;
                    tango = tango.WIDE_BANNER;
                    if(!(tango !== report)) { _fun38846_ip = 153; continue _fun38846 }
 151:
                    return mike;
 153:
                    tango = _closure1_slot8;
                    mike = tango.fromServer;
                    mike = mike.bind(tango)(zulu);
                    return mike;
 170:
                    tango = _closure1_slot6;
                    mike = tango.fromServer;
                    mike = mike.bind(tango)(zulu);
                    return mike;
 187:
                    tango = _closure1_slot5;
                    mike = tango.fromServer;
                    mike = mike.bind(tango)(zulu);
                    return mike;
 204:
                    mike = _closure1_slot7;
                    entity = mike.fromServer;
                    entity = entity.bind(mike)(zulu);
                    return entity;
                }
            };
            golf = oscar.bind(golf)(report);
            oscar = golf.filter;
            report = function(argFoo) {
                mike = undefined;
                entity = argFoo;
                entity = mike !== entity;
                return entity;
            };
            report = oscar.bind(golf)(report);
            zulu['shopBlocks'] = report;
            report = tango.categories;
            tango = report.map;
            mike = function(argFoo) {
                zulu = _closure1_slot4;
                mike = zulu.fromServer;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = tango.bind(report)(mike);
            zulu['categories'] = mike;
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
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/collectibles/records/CollectiblesShopHomeRecord.tsx';
    tango = report.bind(oscar)(tango);
    zulu['CollectiblesShopHomeRecord'] = mike;
    return entity;
})();