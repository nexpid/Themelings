// app/modules/collectibles/utils/CollectiblesUtils.tsx
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
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.ApplicationStreamPresets;
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/collectibles/utils/CollectiblesUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar, argBaz) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argBaz;
            entity = {};
            tango = {};
            report = _closure1_slot2;
            report = report.PRESET_CUSTOM;
            tango['preset'] = report;
            report = argFoo;
            tango['resolution'] = report;
            report = argBar;
            tango['frameRate'] = report;
            entity['qualityOptions'] = tango;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 1;
            tango = tango[mike];
            mike = undefined;
            mike = report.bind(mike)(tango);
            mike = mike.MediaEngineContextTypes;
            mike = mike.STREAM;
            entity['context'] = mike;
            tango = null;
            if(!(tango != zulu)) { _fun00002_ip = 183; continue _fun00001 }
 90:
            mike = zulu.desktopSource;
            if(!(tango != mike)) { _fun00002_ip = 131; continue _fun00001 }
 100:
            mike = {};
            report = zulu.desktopSource;
            report = report.id;
            mike['sourceId'] = report;
            report = true;
            mike['sound'] = report;
            entity['desktopSettings'] = mike;
 131:
            mike = zulu.cameraSource;
            if(!(tango != mike)) { _fun00002_ip = 183; continue _fun00001 }
 141:
            mike = {};
            tango = zulu.cameraSource;
            tango = tango.videoDeviceGuid;
            mike['videoDeviceGuid'] = tango;
            zulu = zulu.cameraSource;
            zulu = zulu.audioDeviceGuid;
            mike['audioDeviceGuid'] = zulu;
            entity['cameraSettings'] = mike;
 183:
            return entity;
        }
    };
    zulu['constructGoLiveSource'] = tango;
    mike = function(argFoo, argBar) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            zulu = argBar;
            entity = {};
            tango = null;
            if(!(tango != zulu)) { _fun00004_ip = 20; continue _fun00003 }
 14:
            entity['tab'] = zulu;
 20:
            if(!(tango != mike)) { _fun00004_ip = 243; continue _fun00003 }
 27:
            report = mike.noCache;
            zulu = true;
            if(!(zulu === report)) { _fun00004_ip = 47; continue _fun00003 }
 39:
            entity['no_cache'] = zulu;
 47:
            report = mike.includeUnpublished;
            if(!(zulu === report)) { _fun00004_ip = 63; continue _fun00003 }
 57:
            entity['include_unpublished'] = zulu;
 63:
            report = mike.includeBundles;
            if(!(zulu === report)) { _fun00004_ip = 81; continue _fun00003 }
 73:
            entity['include_bundles'] = zulu;
 81:
            report = mike.includePopularPicks;
            if(!(zulu === report)) { _fun00004_ip = 99; continue _fun00003 }
 91:
            entity['include_popular_picks'] = zulu;
 99:
            report = mike.includeDynamicBlocks;
            if(!(zulu === report)) { _fun00004_ip = 117; continue _fun00003 }
 109:
            entity['include_dynamic_blocks'] = zulu;
 117:
            zulu = mike.countryCode;
            if(!(tango != zulu)) { _fun00004_ip = 139; continue _fun00003 }
 127:
            zulu = mike.countryCode;
            entity['country_code'] = zulu;
 139:
            zulu = mike.paymentGateway;
            if(!(tango !== zulu)) { _fun00004_ip = 161; continue _fun00003 }
 149:
            zulu = mike.paymentGateway;
            entity['payment_gateway'] = zulu;
 161:
            oscar = mike.variantsReturnStyle;
            golf = _closure1_slot0;
            zulu = _closure1_slot1;
            report = 2;
            zulu = zulu[report];
            tango = undefined;
            zulu = golf.bind(tango)(zulu);
            zulu = zulu.ShopVariantsReturnStyle;
            zulu = zulu.VARIANTS_GROUP;
            if(!(oscar === zulu)) { _fun00004_ip = 243; continue _fun00003 }
 208:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[report];
            mike = zulu.bind(tango)(mike);
            mike = mike.ShopVariantsReturnStyle;
            mike = mike.VARIANTS_GROUP;
            entity['variants_return_style'] = mike;
 243:
            return entity;
        }
    };
    zulu['buildFetchCollectiblesOptionsQuery'] = mike;
    return entity;
})();