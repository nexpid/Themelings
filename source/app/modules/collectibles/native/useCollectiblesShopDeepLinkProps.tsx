// app/modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx
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
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        mike = argFoo;
        zulu = mike.categories;
        var _closure2_slot0 = zulu;
        mike = mike.products;
        var _closure2_slot1 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 2;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStoresObject;
        oscar = _closure1_slot3;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot2;
        mike[1] = report;
        entity = function() {
            _fun99552: for(var _fun99552_ip = 0; ; ) switch(_fun99552_ip) {
 0:
                mike = _closure1_slot3;
                mike = mike.initialProductSkuId;
                var _closure3_slot0 = mike;
                tango = _closure1_slot2;
                entity = tango.getCategoryForProduct;
                entity = entity.bind(tango)(mike);
                var _closure3_slot1 = entity;
                oscar = null;
                if(!(oscar != mike)) { _fun99552_ip = 183; continue _fun99552 }
 47:
                if(!(oscar != entity)) { _fun99552_ip = 183; continue _fun99552 }
 54:
                entity = {};
                mike = _closure2_slot1;
                golf = oscar != mike;
                report = undefined;
                if(!golf) { _fun99552_ip = 115; continue _fun99552 }
 72:
                golf = global;
                offset = golf.Math;
                verify = offset.max;
                yankee = _closure2_slot1;
                options = yankee.findIndex;
                golf = function(argFoo) {
                    entity = argFoo;
                    mike = entity.skuId;
                    entity = _closure3_slot0;
                    entity = mike === entity;
                    return entity;
                };
                options = options.bind(yankee)(golf);
                golf = 0;
                report = verify.bind(offset)(golf, options);
 115:
                entity['productIndex'] = report;
                report = _closure2_slot0;
                report = oscar != report;
                mike = undefined;
                if(!report) { _fun99552_ip = 176; continue _fun99552 }
 133:
                report = global;
                oscar = report.Math;
                report = oscar.max;
                golf = _closure2_slot0;
                tango = golf.findIndex;
                zulu = function(argFoo) {
                    entity = argFoo;
                    mike = entity.skuId;
                    entity = _closure3_slot1;
                    entity = entity.skuId;
                    entity = mike === entity;
                    return entity;
                };
                tango = tango.bind(golf)(zulu);
                zulu = 0;
                mike = report.bind(oscar)(zulu, tango);
 176:
                entity['categoryIndex'] = mike;
                _fun99552_ip = 185; continue _fun99552;
 183:
                entity = {};
 185:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useCollectiblesShopDeepLinkProps'] = mike;
    return entity;
})();