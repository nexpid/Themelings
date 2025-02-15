// app/modules/remixing/experiments/RemixGAExpriment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
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
    options = report.bind(entity)(tango);
    golf = options.createExperiment;
    tango = {'kind': 'user', 'id': '2023-08_remix_ga', 'label': 'Remix General Available'};
    verify = {'canSeeRemixBadge': false, 'canRemix': false, 'isNitroPerk': false};
    tango['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'Remix for Nitro Subscribers'};
    verify = {'canSeeRemixBadge': true, 'canRemix': true, 'isNitroPerk': true};
    offset['config'] = verify;
    verify = new Array(3);
    verify[0] = offset;
    offset = {'id': 3, 'label': 'Upsell Remix for Non-Nitro Users'};
    yankee = {'canSeeRemixBadge': true, 'canRemix': false, 'isNitroPerk': true};
    offset['config'] = yankee;
    verify[1] = offset;
    offset = {'id': 5, 'label': 'Remix GA for everyone'};
    yankee = {'canSeeRemixBadge': true, 'canRemix': true, 'isNitroPerk': false};
    offset['config'] = yankee;
    verify[2] = offset;
    tango['treatments'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/remixing/experiments/RemixGAExpriment.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useCanRemix
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            golf = {};
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 1;
            mike = zulu[mike];
            zulu = undefined;
            mike = tango.bind(zulu)(mike);
            mike = mike.bind(zulu)();
            mike = mike.analyticsLocations;
            golf['analyticsLocations'] = mike;
            if(!report) { _fun00002_ip = 66; continue _fun00001 }
 48:
            mike = {};
            tango = new Array(1);
            tango[0] = report;
            mike['analyticsLocations'] = tango;
            golf = mike;
 66:
            mike = global;
            mike = mike.Boolean;
            oscar = _closure1_slot2;
            report = oscar.useExperiment;
            tango = {};
            entity = 'canRemixHook';
            tango['location'] = entity;
            entity = {};
            options = true;
            entity['autoTrackExposure'] = options;
            entity['trackExposureOptions'] = golf;
            entity = report.bind(oscar)(tango, entity);
            entity = entity.canRemix;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['useCanRemix'] = tango;
    tango = function() { // Original name: canRemix
        tango = _closure1_slot2;
        zulu = tango.getCurrentConfig;
        mike = {};
        entity = 'canRemix';
        mike['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.canRemix;
        return entity;
    };
    zulu['canRemix'] = tango;
    tango = function() { // Original name: canSeeRemixBadge
        tango = _closure1_slot2;
        zulu = tango.getCurrentConfig;
        mike = {};
        entity = 'canSeeRemixBadge';
        mike['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.canSeeRemixBadge;
        return entity;
    };
    zulu['canSeeRemixBadge'] = tango;
    tango = function() { // Original name: useCanSeeRemixBadge
        tango = _closure1_slot2;
        zulu = tango.useExperiment;
        mike = {};
        entity = 'canSeeRemixBadge';
        mike['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.canSeeRemixBadge;
        return entity;
    };
    zulu['useCanSeeRemixBadge'] = tango;
    tango = function() { // Original name: useIsRemixANitroPerk
        entity = global;
        zulu = entity.Boolean;
        report = _closure1_slot2;
        tango = report.useExperiment;
        mike = {};
        entity = 'isRemixANitroPerkHook';
        mike['location'] = entity;
        entity = {};
        oscar = true;
        entity['autoTrackExposure'] = oscar;
        entity = tango.bind(report)(mike, entity);
        mike = entity.isNitroPerk;
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['useIsRemixANitroPerk'] = tango;
    mike = function() { // Original name: useShouldUpsellRemix
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = arguments[0];
            oscar = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00004_ip = 14; continue _fun00003 }
 12:
            report = {};
 14:
            if(!(oscar === entity)) { _fun00004_ip = 20; continue _fun00003 }
 18:
            oscar = true;
 20:
            tango = _closure1_slot2;
            zulu = tango.useExperiment;
            mike = {};
            entity = 'useShouldUpsellRemixHook';
            mike['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = oscar;
            entity['trackExposureOptions'] = report;
            mike = zulu.bind(tango)(mike, entity);
            entity = mike.canRemix;
            entity = !entity;
            if(!entity) { _fun00004_ip = 81; continue _fun00003 }
 75:
            entity = mike.isNitroPerk;
 81:
            return entity;
        }
    };
    zulu['useShouldUpsellRemix'] = mike;
    return entity;
})();