// app/modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _maybeOpenPremiumUpsellActionSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argBar;
            mike = null;
            entity = mike == oscar;
            if(entity) { _fun00002_ip = 60; continue _fun00001 }
 12:
            mike = mike != oscar;
            if(!mike) { _fun00002_ip = 57; continue _fun00001 }
 19:
            report = oscar.getCurrentConfig;
            tango = {};
            zulu = 'isUpsellEnabled';
            tango['location'] = zulu;
            zulu = {};
            golf = true;
            zulu['autoTrackExposure'] = golf;
            zulu = report.bind(oscar)(tango, zulu);
            mike = zulu.enabled;
 57:
            entity = mike;
 60:
            if(entity) { _fun00002_ip = 86; continue _fun00001 }
 63:
            tango = _closure1_slot3;
            zulu = tango.get;
            mike = 'premium_roadblocks';
            entity = zulu.bind(tango)(mike);
 86:
            mike = !entity;
            entity = !mike;
            if(mike) { _fun00002_ip = 130; continue _fun00001 }
 95:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 1;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = argFoo;
            mike = zulu.bind(tango)(mike);
            entity = true;
 130:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: maybeOpenPremiumUpsellActionSheet
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tango = entity.initialUpsellKey;
            report = _closure1_slot0;
            mike = _closure1_slot2;
            oscar = 2;
            mike = mike[oscar];
            zulu = undefined;
            mike = report.bind(zulu)(mike);
            mike = mike.UpsellTypes;
            mike = mike.UPLOAD;
            if(!(mike !== tango)) { _fun00004_ip = 386; continue _fun00003 }
 53:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.UpsellTypes;
            mike = mike.GLOBAL_EMOJI;
            if(!(mike !== tango)) { _fun00004_ip = 343; continue _fun00003 }
 89:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.UpsellTypes;
            mike = mike.ANIMATED_EMOJI;
            if(!(mike !== tango)) { _fun00004_ip = 300; continue _fun00003 }
 125:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.UpsellTypes;
            mike = mike.SOUNDBOARD;
            if(!(mike !== tango)) { _fun00004_ip = 257; continue _fun00003 }
 158:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(zulu)(mike);
            mike = mike.UpsellTypes;
            mike = mike.APP_ICONS;
            if(!(mike !== tango)) { _fun00004_ip = 195; continue _fun00003 }
 191:
            mike = false;
            return mike;
 195:
            report = _closure1_slot4;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 3;
            mike = golf[mike];
            mike = oscar.bind(zulu)(mike);
            mike = mike.EntitlementFeatureNames;
            tango = mike.APP_ICONS;
            mike = 4;
            mike = golf[mike];
            mike = oscar.bind(zulu)(mike);
            mike = mike.PremiumAppIconsUpsellExperiment;
            mike = report.bind(zulu)(tango, mike);
            return mike;
 257:
            tango = _closure1_slot4;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 3;
            mike = oscar[mike];
            mike = report.bind(zulu)(mike);
            mike = mike.EntitlementFeatureNames;
            mike = mike.SOUNDBOARD_EVERYWHERE;
            mike = tango.bind(zulu)(mike);
            return mike;
 300:
            tango = _closure1_slot4;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 3;
            mike = oscar[mike];
            mike = report.bind(zulu)(mike);
            mike = mike.EntitlementFeatureNames;
            mike = mike.ANIMATED_EMOJIS;
            mike = tango.bind(zulu)(mike);
            return mike;
 343:
            tango = _closure1_slot4;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 3;
            mike = oscar[mike];
            mike = report.bind(zulu)(mike);
            mike = mike.EntitlementFeatureNames;
            mike = mike.EMOJIS_EVERYWHERE;
            mike = tango.bind(zulu)(mike);
            return mike;
 386:
            mike = _closure1_slot4;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 3;
            entity = report[entity];
            entity = tango.bind(zulu)(entity);
            entity = entity.EntitlementFeatureNames;
            entity = entity.INCREASED_FILE_UPLOAD_SIZE;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();