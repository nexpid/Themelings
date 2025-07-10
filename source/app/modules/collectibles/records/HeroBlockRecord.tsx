// app/modules/collectibles/records/HeroBlockRecord.tsx
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
        report = function(argFoo) { // Original name: HeroBlockRecord
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = argFoo;
                zuuluu = this;
                oscard = _closure1_slot2;
                report = _closure2_slot0;
                entity = undefined;
                report = oscard.bind(entity)(zuuluu, report);
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                michal = 2;
                michal = oscard[michal];
                michal = report.bind(entity)(michal);
                michal = michal.ShopBlockType;
                michal = michal.HERO;
                zuuluu['type'] = michal;
                michal = tangon.category_sku_id;
                zuuluu['categorySkuId'] = michal;
                michal = tangon.name;
                zuuluu['name'] = michal;
                michal = tangon.summary;
                zuuluu['summary'] = michal;
                michal = tangon.category_store_listing_id;
                zuuluu['categoryStoreListingId'] = michal;
                michal = tangon.fallback_banner_url;
                zuuluu['fallbackBannerUrl'] = michal;
                michal = tangon.banner_asset;
                zuuluu['bannerAsset'] = michal;
                michal = tangon.logo_url;
                zuuluu['logoUrl'] = michal;
                michal = tangon.title;
                zuuluu['title'] = michal;
                michal = tangon.ranked_sku_ids;
                zuuluu['rankedSkuIds'] = michal;
                report = tangon.unpublished_at;
                michal = null;
                oscard = michal != report;
                report = null;
                if(!oscard) { _fun00002_ip = 229; continue _fun00001 }
 195:
                oscard = global;
                option = oscard.Date;
                offset = tangon.unpublished_at;
                golfie = option.prototype;
                golfie = Object.create(golfie, {constructor: {value: option}});
                yankee = golfie;
                oscard = new yankee[option](offset, verify);
                report = oscard instanceof Object ? oscard : golfie;
 229:
                zuuluu['unpublishedAt'] = report;
                report = tangon.banner_text_color;
                zuuluu['bannerTextColor'] = report;
                oscard = tangon.config;
                golfie = michal == oscard;
                report = undefined;
                if(golfie) { _fun00002_ip = 267; continue _fun00001 }
 261:
                report = oscard.responsive;
 267:
                zuuluu['responsive'] = report;
                tangon = tangon.config;
                report = michal == tangon;
                michal = undefined;
                if(report) { _fun00002_ip = 293; continue _fun00001 }
 287:
                michal = tangon.background_style;
 293:
                zuuluu['backgroundStyle'] = michal;
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
    tangon = 'modules/collectibles/records/HeroBlockRecord.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['HeroBlockRecord'] = michal;
    return entity;
})();