// app/modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _maybeOpenPremiumUpsellActionSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argBar;
            michal = null;
            entity = michal == oscard;
            if(entity) { _fun00002_ip = 60; continue _fun00001 }
 12:
            michal = michal != oscard;
            if(!michal) { _fun00002_ip = 57; continue _fun00001 }
 19:
            report = oscard.getCurrentConfig;
            tangon = {};
            zuuluu = 'isUpsellEnabled';
            tangon['location'] = zuuluu;
            zuuluu = {};
            golfie = true;
            zuuluu['autoTrackExposure'] = golfie;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            michal = zuuluu.enabled;
 57:
            entity = michal;
 60:
            if(entity) { _fun00002_ip = 86; continue _fun00001 }
 63:
            tangon = _closure1_slot3;
            zuuluu = tangon.get;
            michal = 'premium_roadblocks';
            entity = zuuluu.bind(tangon)(michal);
 86:
            michal = !entity;
            entity = !michal;
            if(michal) { _fun00002_ip = 130; continue _fun00001 }
 95:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 1;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = argFoo;
            michal = zuuluu.bind(tangon)(michal);
            entity = true;
 130:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: maybeOpenPremiumUpsellActionSheet
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tangon = entity.initialUpsellKey;
            report = _closure1_slot0;
            michal = _closure1_slot2;
            oscard = 2;
            michal = michal[oscard];
            zuuluu = undefined;
            michal = report.bind(zuuluu)(michal);
            michal = michal.UpsellTypes;
            michal = michal.UPLOAD;
            if(!(michal !== tangon)) { _fun00004_ip = 386; continue _fun00003 }
 53:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.UpsellTypes;
            michal = michal.GLOBAL_EMOJI;
            if(!(michal !== tangon)) { _fun00004_ip = 343; continue _fun00003 }
 89:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.UpsellTypes;
            michal = michal.ANIMATED_EMOJI;
            if(!(michal !== tangon)) { _fun00004_ip = 300; continue _fun00003 }
 125:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.UpsellTypes;
            michal = michal.SOUNDBOARD;
            if(!(michal !== tangon)) { _fun00004_ip = 257; continue _fun00003 }
 158:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(zuuluu)(michal);
            michal = michal.UpsellTypes;
            michal = michal.APP_ICONS;
            if(!(michal !== tangon)) { _fun00004_ip = 195; continue _fun00003 }
 191:
            michal = false;
            return michal;
 195:
            report = _closure1_slot4;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 3;
            michal = golfie[michal];
            michal = oscard.bind(zuuluu)(michal);
            michal = michal.EntitlementFeatureNames;
            tangon = michal.APP_ICONS;
            michal = 4;
            michal = golfie[michal];
            michal = oscard.bind(zuuluu)(michal);
            michal = michal.PremiumAppIconsUpsellExperiment;
            michal = report.bind(zuuluu)(tangon, michal);
            return michal;
 257:
            tangon = _closure1_slot4;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 3;
            michal = oscard[michal];
            michal = report.bind(zuuluu)(michal);
            michal = michal.EntitlementFeatureNames;
            michal = michal.SOUNDBOARD_EVERYWHERE;
            michal = tangon.bind(zuuluu)(michal);
            return michal;
 300:
            tangon = _closure1_slot4;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 3;
            michal = oscard[michal];
            michal = report.bind(zuuluu)(michal);
            michal = michal.EntitlementFeatureNames;
            michal = michal.ANIMATED_EMOJIS;
            michal = tangon.bind(zuuluu)(michal);
            return michal;
 343:
            tangon = _closure1_slot4;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 3;
            michal = oscard[michal];
            michal = report.bind(zuuluu)(michal);
            michal = michal.EntitlementFeatureNames;
            michal = michal.EMOJIS_EVERYWHERE;
            michal = tangon.bind(zuuluu)(michal);
            return michal;
 386:
            michal = _closure1_slot4;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 3;
            entity = report[entity];
            entity = tangon.bind(zuuluu)(entity);
            entity = entity.EntitlementFeatureNames;
            entity = entity.INCREASED_FILE_UPLOAD_SIZE;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();