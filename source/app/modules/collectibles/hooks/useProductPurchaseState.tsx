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
        _fun99655: for(var _fun99655_ip = 0; ; ) switch(_fun99655_ip) {
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
            if(!(report == zulu)) { _fun99655_ip = 49; continue _fun99655 }
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
            if(offset) { _fun99655_ip = 110; continue _fun99655 }
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
            if(!(offset !== verify)) { _fun99655_ip = 317; continue _fun99655 }
 149:
            offset = _closure1_slot0;
            options = _closure1_slot2;
            options = options[yankee];
            options = offset.bind(oscar)(options);
            options = options.CollectiblesItemType;
            options = options.VARIANTS_GROUP;
            if(!(options !== verify)) { _fun99655_ip = 204; continue _fun99655 }
 182:
            options = {'isPurchased': null, 'isPartiallyOwnedBundle': false, 'isPartiallyOwnedVariantsGroup': false};
            options['isPurchased'] = mike;
            return options;
 204:
            yankee = golf.variants;
            verify = report == yankee;
            options = undefined;
            if(verify) { _fun99655_ip = 237; continue _fun99655 }
 219:
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
 237:
            verify = golf.variants;
            golf = report == verify;
            oscar = undefined;
            if(golf) { _fun99655_ip = 270; continue _fun99655 }
 252:
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
 270:
            if(!oscar) { _fun99655_ip = 276; continue _fun99655 }
 273:
            oscar = !options;
 276:
            entity = {};
            golf = report != options;
            if(!golf) { _fun99655_ip = 288; continue _fun99655 }
 285:
            golf = options;
 288:
            entity['isPurchased'] = golf;
            golf = false;
            entity['isPartiallyOwnedBundle'] = golf;
            report = report != oscar;
            if(!report) { _fun99655_ip = 310; continue _fun99655 }
 307:
            report = oscar;
 310:
            entity['isPartiallyOwnedVariantsGroup'] = report;
            return entity;
 317:
            entity = {};
            if(mike) { _fun99655_ip = 353; continue _fun99655 }
 322:
            oscar = zulu.length;
            report = 0;
            report = oscar > report;
            if(!report) { _fun99655_ip = 350; continue _fun99655 }
 336:
            golf = tango.length;
            oscar = zulu.length;
            report = golf === oscar;
 350:
            mike = report;
 353:
            entity['isPurchased'] = mike;
            report = tango.length;
            mike = 0;
            mike = report > mike;
            if(!mike) { _fun99655_ip = 386; continue _fun99655 }
 372:
            tango = tango.length;
            zulu = zulu.length;
            mike = tango < zulu;
 386:
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