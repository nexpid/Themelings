// app/modules/collectibles/hooks/useProductPurchaseState.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = function(argFoo, argBar) { // Original name: getProductPurchaseState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            golf = argBar;
            var _closure2_slot0 = tango;
            zulu = tango.getPurchase;
            mike = golf.skuId;
            mike = zulu.bind(tango)(mike);
            report = null;
            mike = report != mike;
            zulu = golf.items;
            if(!(report == zulu)) { _fun00002_ip = 49; continue _fun00001 }
 45:
            zulu = new Array(0);
 49:
            verify = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 1;
            tango = oscar[tango];
            oscar = undefined;
            verify = verify.bind(oscar)(tango);
            offset = zulu.map;
            tango = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.getPurchase;
                entity = argFoo;
                entity = entity.skuId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = offset.bind(zulu)(tango);
            tango = verify.bind(oscar)(tango);
            offset = report == golf;
            verify = undefined;
            if(offset) { _fun00002_ip = 110; continue _fun00001 }
 105:
            verify = golf.type;
 110:
            romeo = _closure1_slot0;
            offset = _closure1_slot2;
            yankee = 2;
            offset = offset[yankee];
            offset = romeo.bind(oscar)(offset);
            offset = offset.CollectiblesItemType;
            offset = offset.BUNDLE;
            if(!(offset !== verify)) { _fun00002_ip = 313; continue _fun00001 }
 149:
            offset = _closure1_slot0;
            options = _closure1_slot2;
            options = options[yankee];
            options = offset.bind(oscar)(options);
            options = options.CollectiblesItemType;
            options = options.VARIANTS_GROUP;
            if(!(options !== verify)) { _fun00002_ip = 200; continue _fun00001 }
 182:
            options = {'isPurchased': null, 'isPartiallyOwnedBundle': false, 'isPartiallyOwnedVariantsGroup': false};
            options['isPurchased'] = mike;
            return options;
 200:
            yankee = golf.variants;
            verify = report == yankee;
            options = undefined;
            if(verify) { _fun00002_ip = 233; continue _fun00001 }
 215:
            offset = yankee.every;
            verify = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.getPurchase;
                entity = argFoo;
                entity = entity.skuId;
                mike = mike.bind(zulu)(entity);
                entity = null;
                entity = entity != mike;
                return entity;
            };
            options = offset.bind(yankee)(verify);
 233:
            verify = golf.variants;
            golf = report == verify;
            oscar = undefined;
            if(golf) { _fun00002_ip = 266; continue _fun00001 }
 248:
            golf = verify.some;
            entity = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.getPurchase;
                entity = argFoo;
                entity = entity.skuId;
                mike = mike.bind(zulu)(entity);
                entity = null;
                entity = entity != mike;
                return entity;
            };
            oscar = golf.bind(verify)(entity);
 266:
            if(!oscar) { _fun00002_ip = 272; continue _fun00001 }
 269:
            oscar = !options;
 272:
            entity = {};
            golf = report != options;
            if(!golf) { _fun00002_ip = 284; continue _fun00001 }
 281:
            golf = options;
 284:
            entity['isPurchased'] = golf;
            golf = false;
            entity['isPartiallyOwnedBundle'] = golf;
            report = report != oscar;
            if(!report) { _fun00002_ip = 306; continue _fun00001 }
 303:
            report = oscar;
 306:
            entity['isPartiallyOwnedVariantsGroup'] = report;
            return entity;
 313:
            entity = {};
            if(mike) { _fun00002_ip = 349; continue _fun00001 }
 318:
            oscar = zulu.length;
            report = 0;
            report = oscar > report;
            if(!report) { _fun00002_ip = 346; continue _fun00001 }
 332:
            golf = tango.length;
            oscar = zulu.length;
            report = golf === oscar;
 346:
            mike = report;
 349:
            entity['isPurchased'] = mike;
            report = tango.length;
            mike = 0;
            mike = report > mike;
            if(!mike) { _fun00002_ip = 382; continue _fun00001 }
 368:
            tango = tango.length;
            zulu = zulu.length;
            mike = tango < zulu;
 382:
            entity['isPartiallyOwnedBundle'] = mike;
            mike = false;
            entity['isPartiallyOwnedVariantsGroup'] = mike;
            return entity;
        }
    };
    var _closure1_slot4 = tango;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/collectibles/hooks/useProductPurchaseState.tsx';
    report = oscar.bind(golf)(report);
    zulu['getProductPurchaseState'] = tango;
    mike = function(argFoo) {
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStoresObject;
        report = _closure1_slot3;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            tango = _closure1_slot4;
            zulu = _closure1_slot3;
            mike = _closure2_slot0;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useProductPurchaseState'] = mike;
    return entity;
})();