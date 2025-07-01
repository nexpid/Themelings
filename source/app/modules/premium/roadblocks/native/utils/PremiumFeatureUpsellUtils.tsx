// app/modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: useIsFeatureUpsellEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.featureEnabledPredicate;
            var _closure2_slot0 = zuuluu;
            verify = michal.FeatureExperiment;
            tangon = michal.experimentEnabledPredicate;
            zuuluu = undefined;
            if(!(tangon === zuuluu)) { _fun00002_ip = 38; continue _fun00001 }
 33:
            tangon = function(argFoo) { // Original name: p
                entity = argFoo;
                entity = entity.enabled;
                return entity;
            };
 38:
            option = _closure1_slot3;
            oscard = option.useContext;
            offset = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 4;
            report = golfie[report];
            report = offset.bind(zuuluu)(report);
            yankee = oscard.bind(option)(report);
            oscard = _closure1_slot0;
            report = 5;
            option = golfie[report];
            foxtra = oscard.bind(zuuluu)(option);
            romeon = foxtra.useStateFromStores;
            option = _closure1_slot5;
            offset = new Array(1);
            offset[0] = option;
            option = function() {
                zuuluu = _closure2_slot0;
                michal = _closure1_slot5;
                entity = michal.getCurrentUser;
                michal = entity.bind(michal)();
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            offset = romeon.bind(foxtra)(offset, option);
            report = golfie[report];
            oscard = oscard.bind(zuuluu)(report);
            report = oscard.useStateFromStores;
            golfie = _closure1_slot4;
            michal = new Array(1);
            michal[0] = golfie;
            entity = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.get;
                entity = 'premium_roadblocks';
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = report.bind(oscard)(michal, entity);
            report = null;
            oscard = report == verify;
            michal = undefined;
            if(oscard) { _fun00002_ip = 219; continue _fun00001 }
 168:
            option = verify.useExperiment;
            golfie = {};
            oscard = 'useIsFeatureUpsellEnabled';
            golfie['location'] = oscard;
            oscard = {};
            romeon = !offset;
            if(!romeon) { _fun00002_ip = 197; continue _fun00001 }
 194:
            romeon = yankee;
 197:
            oscard['autoTrackExposure'] = romeon;
            if(offset) { _fun00002_ip = 208; continue _fun00001 }
 205:
            offset = !yankee;
 208:
            oscard['disable'] = offset;
            michal = option.bind(verify)(golfie, oscard);
 219:
            if(entity) { _fun00002_ip = 226; continue _fun00001 }
 222:
            entity = report == michal;
 226:
            if(entity) { _fun00002_ip = 234; continue _fun00001 }
 229:
            entity = tangon.bind(zuuluu)(michal);
 234:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: isSoundboardSectionNitroLocked
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argBar;
            zuuluu = michal.type;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 3;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.SoundboardSoundGridSectionType;
            entity = entity.GUILD;
            entity = zuuluu === entity;
            if(!entity) { _fun00004_ip = 69; continue _fun00003 }
 52:
            michal = michal.guild;
            zuuluu = michal.id;
            michal = argFoo;
            entity = zuuluu !== michal;
 69:
            return entity;
        }
    };
    zuuluu['isSoundboardSectionNitroLocked'] = tangon;
    tangon = function() { // Original name: useIsPremiumFileUploadUpsellEnabled
        zuuluu = _closure1_slot6;
        michal = {};
        report = function(argFoo) { // Original name: featureEnabledPredicate
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.canUploadLargeFiles;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal['featureEnabledPredicate'] = report;
        oscard = _closure1_slot0;
        report = _closure1_slot2;
        entity = 7;
        report = report[entity];
        entity = undefined;
        report = oscard.bind(entity)(report);
        report = report.PremiumFileUploadUpsellExperiment;
        michal['FeatureExperiment'] = report;
        tangon = function(argFoo) { // Original name: experimentEnabledPredicate
            entity = argFoo;
            entity = entity.showInlineUpsell;
            return entity;
        };
        michal['experimentEnabledPredicate'] = tangon;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['useIsPremiumFileUploadUpsellEnabled'] = tangon;
    tangon = function() { // Original name: useIsPremiumAppIconUpsellEnabled
        zuuluu = _closure1_slot6;
        michal = {};
        tangon = function(argFoo) { // Original name: featureEnabledPredicate
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.canUsePremiumAppIcons;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal['featureEnabledPredicate'] = tangon;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 7;
        tangon = tangon[entity];
        entity = undefined;
        tangon = report.bind(entity)(tangon);
        tangon = tangon.PremiumAppIconsUpsellExperiment;
        michal['FeatureExperiment'] = tangon;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['useIsPremiumAppIconUpsellEnabled'] = tangon;
    michal = function(argFoo) { // Original name: getUpsellType
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            report = 8;
            michal = michal[report];
            zuuluu = undefined;
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.EntitlementFeatureNames;
            michal = michal.ANIMATED_EMOJIS;
            if(!(michal !== oscard)) { _fun00006_ip = 518; continue _fun00005 }
 47:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[report];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.EntitlementFeatureNames;
            michal = michal.EMOJIS_EVERYWHERE;
            if(!(michal !== oscard)) { _fun00006_ip = 484; continue _fun00005 }
 83:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[report];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.EntitlementFeatureNames;
            michal = michal.INCREASED_FILE_UPLOAD_SIZE;
            if(!(michal !== oscard)) { _fun00006_ip = 450; continue _fun00005 }
 119:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[report];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.EntitlementFeatureNames;
            michal = michal.SOUNDBOARD_EVERYWHERE;
            if(!(michal !== oscard)) { _fun00006_ip = 416; continue _fun00005 }
 155:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[report];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.EntitlementFeatureNames;
            michal = michal.CLIENT_THEMES;
            if(!(michal !== oscard)) { _fun00006_ip = 382; continue _fun00005 }
 191:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[report];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.EntitlementFeatureNames;
            michal = michal.APP_ICONS;
            if(!(michal !== oscard)) { _fun00006_ip = 348; continue _fun00005 }
 227:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[report];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.EntitlementFeatureNames;
            michal = michal.SAVED_MESSAGES;
            if(!(michal !== oscard)) { _fun00006_ip = 314; continue _fun00005 }
 260:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            michal = 10;
            michal = report[michal];
            report = tangon.bind(zuuluu)(michal);
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            michal = 'Missing featureName: ';
            tangon = tangon.bind(michal)(oscard);
            michal = false;
            michal = report.bind(zuuluu)(michal, tangon);
            return zuuluu;
 314:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 9;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.UpsellTypes;
            michal = michal.FOR_LATER;
            return michal;
 348:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 9;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.UpsellTypes;
            michal = michal.APP_ICONS;
            return michal;
 382:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 9;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.UpsellTypes;
            michal = michal.CLIENT_THEMES;
            return michal;
 416:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 9;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.UpsellTypes;
            michal = michal.SOUNDBOARD;
            return michal;
 450:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 9;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.UpsellTypes;
            michal = michal.UPLOAD;
            return michal;
 484:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 9;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.UpsellTypes;
            michal = michal.GLOBAL_EMOJI;
            return michal;
 518:
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 9;
            entity = tangon[entity];
            entity = michal.bind(zuuluu)(entity);
            entity = entity.UpsellTypes;
            entity = entity.ANIMATED_EMOJI;
            return entity;
        }
    };
    zuuluu['getUpsellType'] = michal;
    return entity;
})();