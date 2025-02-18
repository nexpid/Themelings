// app/modules/application_storefront/storefrontMessageEmbedCodedLink.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    oscard = report[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot0 = tangon;
    tangon = 1;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/application_storefront/storefrontMessageEmbedCodedLink.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: makeStorefrontSKUCodedLink
        entity = global;
        entity = entity.HermesInternal;
        report = entity.concat;
        tangon = '';
        zuuluu = argFoo;
        michal = ':';
        entity = argBar;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    zuuluu['makeStorefrontSKUCodedLink'] = tangon;
    michal = function(argFoo) { // Original name: parseStorefrontSkuCodedLink
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.split;
            entity = ':';
            tangon = michal.bind(zuuluu)(entity);
            entity = tangon.length;
            zuuluu = 2;
            if(!(zuuluu === entity)) { _fun00002_ip = 70; continue _fun00001 }
 29:
            michal = _closure1_slot0;
            entity = undefined;
            zuuluu = michal.bind(entity)(tangon, zuuluu);
            entity = {};
            michal = 0;
            michal = zuuluu[michal];
            entity['applicationId'] = michal;
            michal = 1;
            michal = zuuluu[michal];
            entity['skuId'] = michal;
            return entity;
 70:
            entity = null;
            return entity;
        }
    };
    zuuluu['parseStorefrontSkuCodedLink'] = michal;
    return entity;
})();