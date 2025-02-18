// app/modules/collectibles/utils/CollectiblesUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ApplicationStreamPresets;
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/utils/CollectiblesUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar, argBaz) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argBaz;
            entity = {};
            tangon = {};
            report = _closure1_slot2;
            report = report.PRESET_CUSTOM;
            tangon['preset'] = report;
            report = argFoo;
            tangon['resolution'] = report;
            report = argBar;
            tangon['frameRate'] = report;
            entity['qualityOptions'] = tangon;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 1;
            tangon = tangon[michal];
            michal = undefined;
            michal = report.bind(michal)(tangon);
            michal = michal.MediaEngineContextTypes;
            michal = michal.STREAM;
            entity['context'] = michal;
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00002_ip = 183; continue _fun00001 }
 90:
            michal = zuuluu.desktopSource;
            if(!(tangon != michal)) { _fun00002_ip = 131; continue _fun00001 }
 100:
            michal = {};
            report = zuuluu.desktopSource;
            report = report.id;
            michal['sourceId'] = report;
            report = true;
            michal['sound'] = report;
            entity['desktopSettings'] = michal;
 131:
            michal = zuuluu.cameraSource;
            if(!(tangon != michal)) { _fun00002_ip = 183; continue _fun00001 }
 141:
            michal = {};
            tangon = zuuluu.cameraSource;
            tangon = tangon.videoDeviceGuid;
            michal['videoDeviceGuid'] = tangon;
            zuuluu = zuuluu.cameraSource;
            zuuluu = zuuluu.audioDeviceGuid;
            michal['audioDeviceGuid'] = zuuluu;
            entity['cameraSettings'] = michal;
 183:
            return entity;
        }
    };
    zuuluu['constructGoLiveSource'] = tangon;
    michal = function(argFoo, argBar) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            zuuluu = argBar;
            entity = {};
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00004_ip = 20; continue _fun00003 }
 14:
            entity['tab'] = zuuluu;
 20:
            if(!(tangon != michal)) { _fun00004_ip = 243; continue _fun00003 }
 27:
            report = michal.noCache;
            zuuluu = true;
            if(!(zuuluu === report)) { _fun00004_ip = 47; continue _fun00003 }
 39:
            entity['no_cache'] = zuuluu;
 47:
            report = michal.includeUnpublished;
            if(!(zuuluu === report)) { _fun00004_ip = 63; continue _fun00003 }
 57:
            entity['include_unpublished'] = zuuluu;
 63:
            report = michal.includeBundles;
            if(!(zuuluu === report)) { _fun00004_ip = 81; continue _fun00003 }
 73:
            entity['include_bundles'] = zuuluu;
 81:
            report = michal.includePopularPicks;
            if(!(zuuluu === report)) { _fun00004_ip = 99; continue _fun00003 }
 91:
            entity['include_popular_picks'] = zuuluu;
 99:
            report = michal.includeDynamicBlocks;
            if(!(zuuluu === report)) { _fun00004_ip = 117; continue _fun00003 }
 109:
            entity['include_dynamic_blocks'] = zuuluu;
 117:
            zuuluu = michal.countryCode;
            if(!(tangon != zuuluu)) { _fun00004_ip = 139; continue _fun00003 }
 127:
            zuuluu = michal.countryCode;
            entity['country_code'] = zuuluu;
 139:
            zuuluu = michal.paymentGateway;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 161; continue _fun00003 }
 149:
            zuuluu = michal.paymentGateway;
            entity['payment_gateway'] = zuuluu;
 161:
            oscard = michal.variantsReturnStyle;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot1;
            report = 2;
            zuuluu = zuuluu[report];
            tangon = undefined;
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.ShopVariantsReturnStyle;
            zuuluu = zuuluu.VARIANTS_GROUP;
            if(!(oscard === zuuluu)) { _fun00004_ip = 243; continue _fun00003 }
 208:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[report];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.ShopVariantsReturnStyle;
            michal = michal.VARIANTS_GROUP;
            entity['variants_return_style'] = michal;
 243:
            return entity;
        }
    };
    zuuluu['buildFetchCollectiblesOptionsQuery'] = michal;
    return entity;
})();