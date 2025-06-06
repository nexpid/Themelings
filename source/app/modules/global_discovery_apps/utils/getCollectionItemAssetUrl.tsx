// app/modules/global_discovery_apps/utils/getCollectionItemAssetUrl.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    tangon = global;
    verify = tangon.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = report.bind(entity)(golfie);
    golfie = golfie.Endpoints;
    var _closure1_slot2 = golfie;
    tangon = tangon.window;
    tangon = tangon.GLOBAL_ENV;
    golfie = tangon.API_ENDPOINT;
    var _closure1_slot3 = golfie;
    tangon = tangon.CDN_HOST;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/global_discovery_apps/utils/getCollectionItemAssetUrl.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getCollectionItemAssetUrl
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeon = entity.itemId;
            yankee = entity.hash;
            option = entity.containerWidth;
            report = undefined;
            if(!(option === report)) { _fun00002_ip = 32; continue _fun00001 }
 26:
            option = 1024;
 32:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 1;
            michal = oscard[entity];
            golfie = tangon.bind(report)(michal);
            michal = golfie.getBestMediaProxySize;
            entity = oscard[entity];
            verify = tangon.bind(report)(entity);
            entity = verify.getDevicePixelRatio;
            entity = entity.bind(verify)();
            entity = option * entity;
            michal = michal.bind(golfie)(entity);
            entity = michal.toString;
            golfie = entity.bind(michal)();
            michal = global;
            option = michal.URLSearchParams;
            entity = {};
            entity['size'] = golfie;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            ctrled = golfie;
            source = entity;
            entity = new ctrled[option](source, update);
            golfie = entity instanceof Object ? entity : golfie;
            entity = golfie.toString;
            offset = entity.bind(golfie)();
            entity = 2;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.SUPPORTS_WEBP;
            verify = 'png';
            if(!entity) { _fun00002_ip = 177; continue _fun00001 }
 171:
            verify = 'webp';
 177:
            tangon = _closure1_slot4;
            entity = null;
            if(!(entity == tangon)) { _fun00002_ip = 254; continue _fun00001 }
 187:
            entity = michal.location;
            option = entity.protocol;
            golfie = _closure1_slot3;
            tangon = _closure1_slot2;
            entity = tangon.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE;
            echoed = entity.bind(tangon)(romeon, yankee, verify);
            entity = michal.HermesInternal;
            report = entity.concat;
            ctrled = '';
            result = '?';
            source = option;
            update = golfie;
            output = offset;
            entity = ctrled[report](source, update, echoed, result, output, sizing);
            _fun00002_ip = 309; continue _fun00001;
 254:
            source = _closure1_slot4;
            michal = michal.HermesInternal;
            golfie = michal.concat;
            ctrled = 'https://';
            update = '/app-assets/application-directory/collection-items/';
            result = '/';
            sizing = '.';
            backup = '?';
            echoed = romeon;
            output = yankee;
            kiloes = verify;
            foxtra = offset;
            entity = ctrled[golfie](source, update, echoed, result, output, sizing, kiloes, backup, foxtra, romeon);
 309:
            return entity;
        }
    };
    zuuluu['getCollectionItemAssetUrl'] = michal;
    return entity;
})();