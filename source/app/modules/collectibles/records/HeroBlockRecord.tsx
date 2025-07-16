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
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.HeroBannerConfigRecord;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AssetDisplayConfigRecord;
    var _closure1_slot5 = tangon;
    michal = function() {
        report = function(argFoo) { // Original name: HeroBlockRecord
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = argFoo;
                zuuluu = this;
                oscard = _closure1_slot2;
                michal = _closure2_slot0;
                entity = undefined;
                michal = oscard.bind(entity)(zuuluu, michal);
                oscard = _closure1_slot0;
                golfie = _closure1_slot1;
                michal = 4;
                michal = golfie[michal];
                michal = oscard.bind(entity)(michal);
                michal = michal.ShopBlockType;
                michal = michal.HERO;
                zuuluu['type'] = michal;
                michal = tangon.category_sku_id;
                zuuluu['categorySkuId'] = michal;
                michal = tangon.name;
                zuuluu['name'] = michal;
                oscard = tangon.summary;
                michal = oscard.trim;
                michal = michal.bind(oscard)();
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
                michal = tangon.unpublished_at;
                oscard = null;
                golfie = oscard != michal;
                michal = null;
                if(!golfie) { _fun00002_ip = 239; continue _fun00001 }
 205:
                golfie = global;
                verify = golfie.Date;
                yankee = tangon.unpublished_at;
                option = verify.prototype;
                option = Object.create(option, {constructor: {value: verify}});
                romeon = option;
                golfie = new romeon[verify](yankee, offset);
                michal = golfie instanceof Object ? golfie : option;
 239:
                zuuluu['unpublishedAt'] = michal;
                michal = tangon.banner_text_color;
                zuuluu['bannerTextColor'] = michal;
                michal = tangon.config;
                golfie = oscard != michal;
                michal = undefined;
                if(!golfie) { _fun00002_ip = 291; continue _fun00001 }
 271:
                verify = _closure1_slot4;
                option = verify.fromServer;
                golfie = tangon.config;
                michal = option.bind(verify)(golfie);
 291:
                zuuluu['bannerConfig'] = michal;
                michal = tangon.logo_display_config;
                oscard = oscard != michal;
                michal = undefined;
                if(!oscard) { _fun00002_ip = 335; continue _fun00001 }
 314:
                oscard = _closure1_slot5;
                report = oscard.fromServer;
                tangon = tangon.logo_display_config;
                michal = report.bind(oscard)(tangon);
 335:
                zuuluu['logoConfig'] = michal;
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
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/records/HeroBlockRecord.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['HeroBlockRecord'] = michal;
    return entity;
})();