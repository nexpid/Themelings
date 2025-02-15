// app/modules/premium/native/hooks/usePremiumProductPricingString.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/native/hooks/usePremiumProductPricingString.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: usePremiumProductPricingString
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 1;
            tango = oscar[mike];
            mike = undefined;
            verify = report.bind(mike)(tango);
            options = verify.getPlanIdForPremiumType;
            golf = argFoo;
            tango = argBar;
            options = options.bind(verify)(golf, tango);
            tango = 2;
            tango = oscar[tango];
            golf = report.bind(mike)(tango);
            tango = golf.getProductIdForGift;
            tango = tango.bind(golf)(options);
            var _closure2_slot0 = tango;
            tango = 3;
            tango = oscar[tango];
            report = report.bind(mike)(tango);
            tango = report.useStateFromStores;
            oscar = _closure1_slot2;
            zulu = new Array(1);
            zulu[0] = oscar;
            entity = function() {
                zulu = _closure1_slot2;
                mike = zulu.getProduct;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = tango.bind(report)(zulu, entity);
            entity = null;
            tango = entity == zulu;
            if(tango) { _fun00002_ip = 129; continue _fun00001 }
 123:
            mike = zulu.priceString;
 129:
            zulu = entity != mike;
            entity = '$...';
            if(!zulu) { _fun00002_ip = 145; continue _fun00001 }
 142:
            entity = mike;
 145:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();