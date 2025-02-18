// app/modules/remixing/experiments/RemixGAExpriment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
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
    option = report.bind(entity)(tangon);
    golfie = option.createExperiment;
    tangon = {'kind': 'user', 'id': '2023-08_remix_ga', 'label': 'Remix General Available'};
    verify = {'canSeeRemixBadge': false, 'canRemix': false, 'isNitroPerk': false};
    tangon['defaultConfig'] = verify;
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
    tangon['treatments'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/remixing/experiments/RemixGAExpriment.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useCanRemix
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            golfie = {};
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 1;
            michal = zuuluu[michal];
            zuuluu = undefined;
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.bind(zuuluu)();
            michal = michal.analyticsLocations;
            golfie['analyticsLocations'] = michal;
            if(!report) { _fun00002_ip = 66; continue _fun00001 }
 48:
            michal = {};
            tangon = new Array(1);
            tangon[0] = report;
            michal['analyticsLocations'] = tangon;
            golfie = michal;
 66:
            michal = global;
            michal = michal.Boolean;
            oscard = _closure1_slot2;
            report = oscard.useExperiment;
            tangon = {};
            entity = 'canRemixHook';
            tangon['location'] = entity;
            entity = {};
            option = true;
            entity['autoTrackExposure'] = option;
            entity['trackExposureOptions'] = golfie;
            entity = report.bind(oscard)(tangon, entity);
            entity = entity.canRemix;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['useCanRemix'] = tangon;
    tangon = function() { // Original name: canRemix
        tangon = _closure1_slot2;
        zuuluu = tangon.getCurrentConfig;
        michal = {};
        entity = 'canRemix';
        michal['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.canRemix;
        return entity;
    };
    zuuluu['canRemix'] = tangon;
    tangon = function() { // Original name: canSeeRemixBadge
        tangon = _closure1_slot2;
        zuuluu = tangon.getCurrentConfig;
        michal = {};
        entity = 'canSeeRemixBadge';
        michal['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.canSeeRemixBadge;
        return entity;
    };
    zuuluu['canSeeRemixBadge'] = tangon;
    tangon = function() { // Original name: useCanSeeRemixBadge
        tangon = _closure1_slot2;
        zuuluu = tangon.useExperiment;
        michal = {};
        entity = 'canSeeRemixBadge';
        michal['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.canSeeRemixBadge;
        return entity;
    };
    zuuluu['useCanSeeRemixBadge'] = tangon;
    tangon = function() { // Original name: useIsRemixANitroPerk
        entity = global;
        zuuluu = entity.Boolean;
        report = _closure1_slot2;
        tangon = report.useExperiment;
        michal = {};
        entity = 'isRemixANitroPerkHook';
        michal['location'] = entity;
        entity = {};
        oscard = true;
        entity['autoTrackExposure'] = oscard;
        entity = tangon.bind(report)(michal, entity);
        michal = entity.isNitroPerk;
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['useIsRemixANitroPerk'] = tangon;
    michal = function() { // Original name: useShouldUpsellRemix
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = arguments[0];
            oscard = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00004_ip = 14; continue _fun00003 }
 12:
            report = {};
 14:
            if(!(oscard === entity)) { _fun00004_ip = 20; continue _fun00003 }
 18:
            oscard = true;
 20:
            tangon = _closure1_slot2;
            zuuluu = tangon.useExperiment;
            michal = {};
            entity = 'useShouldUpsellRemixHook';
            michal['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = oscard;
            entity['trackExposureOptions'] = report;
            michal = zuuluu.bind(tangon)(michal, entity);
            entity = michal.canRemix;
            entity = !entity;
            if(!entity) { _fun00004_ip = 81; continue _fun00003 }
 75:
            entity = michal.isNitroPerk;
 81:
            return entity;
        }
    };
    zuuluu['useShouldUpsellRemix'] = michal;
    return entity;
})();