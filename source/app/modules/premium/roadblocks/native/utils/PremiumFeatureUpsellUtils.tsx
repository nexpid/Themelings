// app/modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: useIsFeatureUpsellEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            zulu = mike.featureEnabledPredicate;
            var _closure2_slot0 = zulu;
            verify = mike.FeatureExperiment;
            tango = mike.experimentEnabledPredicate;
            zulu = undefined;
            if(!(tango === zulu)) { _fun00002_ip = 40; continue _fun00001 }
 33:
            tango = function(argFoo) { // Original name: p
                entity = argFoo;
                entity = entity.enabled;
                return entity;
            };
 40:
            options = _closure1_slot3;
            oscar = options.useContext;
            offset = _closure1_slot1;
            golf = _closure1_slot2;
            report = 4;
            report = golf[report];
            report = offset.bind(zulu)(report);
            yankee = oscar.bind(options)(report);
            oscar = _closure1_slot0;
            report = 5;
            options = golf[report];
            foxtrot = oscar.bind(zulu)(options);
            romeo = foxtrot.useStateFromStores;
            options = _closure1_slot5;
            offset = new Array(1);
            offset[0] = options;
            options = function() {
                zulu = _closure2_slot0;
                mike = _closure1_slot5;
                entity = mike.getCurrentUser;
                mike = entity.bind(mike)();
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            offset = romeo.bind(foxtrot)(offset, options);
            report = golf[report];
            oscar = oscar.bind(zulu)(report);
            report = oscar.useStateFromStores;
            golf = _closure1_slot4;
            mike = new Array(1);
            mike[0] = golf;
            entity = function() {
                zulu = _closure1_slot4;
                mike = zulu.get;
                entity = 'premium_roadblocks';
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = report.bind(oscar)(mike, entity);
            report = null;
            oscar = report == verify;
            mike = undefined;
            if(oscar) { _fun00002_ip = 225; continue _fun00001 }
 174:
            options = verify.useExperiment;
            golf = {};
            oscar = 'useIsFeatureUpsellEnabled';
            golf['location'] = oscar;
            oscar = {};
            romeo = !offset;
            if(!romeo) { _fun00002_ip = 203; continue _fun00001 }
 200:
            romeo = yankee;
 203:
            oscar['autoTrackExposure'] = romeo;
            if(offset) { _fun00002_ip = 214; continue _fun00001 }
 211:
            offset = !yankee;
 214:
            oscar['disable'] = offset;
            mike = options.bind(verify)(golf, oscar);
 225:
            if(entity) { _fun00002_ip = 232; continue _fun00001 }
 228:
            entity = report == mike;
 232:
            if(entity) { _fun00002_ip = 240; continue _fun00001 }
 235:
            entity = tango.bind(zulu)(mike);
 240:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: isSoundboardSectionNitroLocked
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argBar;
            zulu = mike.type;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 3;
            tango = tango[entity];
            entity = undefined;
            entity = report.bind(entity)(tango);
            entity = entity.SoundboardSoundGridSectionType;
            entity = entity.GUILD;
            entity = zulu === entity;
            if(!entity) { _fun00004_ip = 69; continue _fun00003 }
 52:
            mike = mike.guild;
            zulu = mike.id;
            mike = argFoo;
            entity = zulu !== mike;
 69:
            return entity;
        }
    };
    zulu['isSoundboardSectionNitroLocked'] = tango;
    tango = function() { // Original name: useIsPremiumFileUploadUpsellEnabled
        zulu = _closure1_slot6;
        mike = {};
        report = function(argFoo) { // Original name: featureEnabledPredicate
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.canUploadLargeFiles;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike['featureEnabledPredicate'] = report;
        oscar = _closure1_slot0;
        report = _closure1_slot2;
        entity = 7;
        report = report[entity];
        entity = undefined;
        report = oscar.bind(entity)(report);
        report = report.PremiumFileUploadUpsellExperiment;
        mike['FeatureExperiment'] = report;
        tango = function(argFoo) { // Original name: experimentEnabledPredicate
            entity = argFoo;
            entity = entity.showInlineUpsell;
            return entity;
        };
        mike['experimentEnabledPredicate'] = tango;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['useIsPremiumFileUploadUpsellEnabled'] = tango;
    tango = function() { // Original name: useIsPremiumClientThemesUpsellEnabled
        zulu = _closure1_slot6;
        mike = {};
        tango = function(argFoo) { // Original name: featureEnabledPredicate
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.canUseClientThemes;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike['featureEnabledPredicate'] = tango;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 7;
        tango = tango[entity];
        entity = undefined;
        tango = report.bind(entity)(tango);
        tango = tango.PremiumClientThemesUpsellExperiment;
        mike['FeatureExperiment'] = tango;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['useIsPremiumClientThemesUpsellEnabled'] = tango;
    tango = function() { // Original name: useIsPremiumAppIconUpsellEnabled
        zulu = _closure1_slot6;
        mike = {};
        tango = function(argFoo) { // Original name: featureEnabledPredicate
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.canUsePremiumAppIcons;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike['featureEnabledPredicate'] = tango;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 7;
        tango = tango[entity];
        entity = undefined;
        tango = report.bind(entity)(tango);
        tango = tango.PremiumAppIconsUpsellExperiment;
        mike['FeatureExperiment'] = tango;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['useIsPremiumAppIconUpsellEnabled'] = tango;
    mike = function(argFoo) { // Original name: getUpsellType
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscar = argFoo;
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            report = 8;
            mike = mike[report];
            zulu = undefined;
            mike = tango.bind(zulu)(mike);
            mike = mike.EntitlementFeatureNames;
            mike = mike.ANIMATED_EMOJIS;
            if(!(mike !== oscar)) { _fun00006_ip = 518; continue _fun00005 }
 47:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[report];
            mike = tango.bind(zulu)(mike);
            mike = mike.EntitlementFeatureNames;
            mike = mike.EMOJIS_EVERYWHERE;
            if(!(mike !== oscar)) { _fun00006_ip = 484; continue _fun00005 }
 83:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[report];
            mike = tango.bind(zulu)(mike);
            mike = mike.EntitlementFeatureNames;
            mike = mike.INCREASED_FILE_UPLOAD_SIZE;
            if(!(mike !== oscar)) { _fun00006_ip = 450; continue _fun00005 }
 119:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[report];
            mike = tango.bind(zulu)(mike);
            mike = mike.EntitlementFeatureNames;
            mike = mike.SOUNDBOARD_EVERYWHERE;
            if(!(mike !== oscar)) { _fun00006_ip = 416; continue _fun00005 }
 155:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[report];
            mike = tango.bind(zulu)(mike);
            mike = mike.EntitlementFeatureNames;
            mike = mike.CLIENT_THEMES;
            if(!(mike !== oscar)) { _fun00006_ip = 382; continue _fun00005 }
 191:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[report];
            mike = tango.bind(zulu)(mike);
            mike = mike.EntitlementFeatureNames;
            mike = mike.APP_ICONS;
            if(!(mike !== oscar)) { _fun00006_ip = 348; continue _fun00005 }
 227:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[report];
            mike = tango.bind(zulu)(mike);
            mike = mike.EntitlementFeatureNames;
            mike = mike.SAVED_MESSAGES;
            if(!(mike !== oscar)) { _fun00006_ip = 314; continue _fun00005 }
 260:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            mike = 10;
            mike = report[mike];
            report = tango.bind(zulu)(mike);
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            mike = 'Missing featureName: ';
            tango = tango.bind(mike)(oscar);
            mike = false;
            mike = report.bind(zulu)(mike, tango);
            return zulu;
 314:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 9;
            mike = report[mike];
            mike = tango.bind(zulu)(mike);
            mike = mike.UpsellTypes;
            mike = mike.FOR_LATER;
            return mike;
 348:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 9;
            mike = report[mike];
            mike = tango.bind(zulu)(mike);
            mike = mike.UpsellTypes;
            mike = mike.APP_ICONS;
            return mike;
 382:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 9;
            mike = report[mike];
            mike = tango.bind(zulu)(mike);
            mike = mike.UpsellTypes;
            mike = mike.CLIENT_THEMES;
            return mike;
 416:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 9;
            mike = report[mike];
            mike = tango.bind(zulu)(mike);
            mike = mike.UpsellTypes;
            mike = mike.SOUNDBOARD;
            return mike;
 450:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 9;
            mike = report[mike];
            mike = tango.bind(zulu)(mike);
            mike = mike.UpsellTypes;
            mike = mike.UPLOAD;
            return mike;
 484:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 9;
            mike = report[mike];
            mike = tango.bind(zulu)(mike);
            mike = mike.UpsellTypes;
            mike = mike.GLOBAL_EMOJI;
            return mike;
 518:
            mike = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 9;
            entity = tango[entity];
            entity = mike.bind(zulu)(entity);
            entity = entity.UpsellTypes;
            entity = entity.ANIMATED_EMOJI;
            return entity;
        }
    };
    zulu['getUpsellType'] = mike;
    return entity;
})();