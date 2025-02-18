// app/modules/collectibles/records/FeaturedCategorySubblockRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    michal = function() {
        report = function(argFoo) { // Original name: FeaturedCategorySubblockRecord
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                zuuluu = this;
                oscard = _closure1_slot2;
                report = _closure2_slot0;
                entity = undefined;
                report = oscard.bind(entity)(zuuluu, report);
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                tangon = 2;
                tangon = oscard[tangon];
                tangon = report.bind(entity)(tangon);
                tangon = tangon.FeaturedSubblockType;
                tangon = tangon.CATEGORY;
                zuuluu['type'] = tangon;
                tangon = michal.category_store_listing_id;
                zuuluu['categoryStoreListingId'] = tangon;
                tangon = michal.name;
                zuuluu['name'] = tangon;
                tangon = michal.banner_url;
                zuuluu['bannerUrl'] = tangon;
                report = michal.unpublished_at;
                tangon = null;
                report = tangon != report;
                if(!report) { _fun00002_ip = 150; continue _fun00001 }
 116:
                report = global;
                golfie = report.Date;
                verify = michal.unpublished_at;
                oscard = golfie.prototype;
                oscard = Object.create(oscard, {constructor: {value: golfie}});
                offset = oscard;
                report = new offset[golfie](verify, option);
                tangon = report instanceof Object ? report : oscard;
 150:
                zuuluu['unpublishedAt'] = tangon;
                tangon = michal.body_text;
                zuuluu['bodyText'] = tangon;
                michal = michal.banner_text_color;
                zuuluu['bannerTextColor'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        entity = {};
        zuuluu = 'fromServer';
        entity['key'] = zuuluu;
        michal = function(argFoo) { // Original name: value
            zuuluu = _closure2_slot0;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            tangon = argFoo;
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity['value'] = michal;
        zuuluu = new Array(1);
        zuuluu[0] = entity;
        michal = undefined;
        entity = null;
        entity = tangon.bind(michal)(report, entity, zuuluu);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/records/FeaturedCategorySubblockRecord.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['FeaturedCategorySubblockRecord'] = michal;
    return entity;
})();