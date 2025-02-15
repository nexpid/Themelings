// app/modules/premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = options;
    var _closure1_slot3 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PremiumTypes;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticsObjectTypes;
    var _closure1_slot9 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: usePremiumFeatureUpsellGetNitro
        golf = argFoo;
        options = argBar;
        offset = argBaz;
        mike = argCorge;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = options;
        var _closure2_slot2 = offset;
        var _closure2_slot3 = mike;
        oscar = _closure1_slot5;
        report = oscar.useState;
        zulu = false;
        yankee = report.bind(oscar)(zulu);
        report = _closure1_slot4;
        verify = undefined;
        zulu = 2;
        romeo = report.bind(verify)(yankee, zulu);
        report = 0;
        zulu = romeo[report];
        yankee = 1;
        yankee = romeo[yankee];
        var _closure2_slot4 = yankee;
        yankee = _closure1_slot1;
        romeo = _closure1_slot3;
        tango = 6;
        tango = romeo[tango];
        tango = yankee.bind(verify)(tango);
        tango = tango.bind(verify)();
        verify = tango.analyticsLocations;
        var _closure2_slot5 = verify;
        tango = oscar.useRef;
        tango = tango.bind(oscar)(report);
        var _closure2_slot6 = tango;
        report = oscar.useCallback;
        tango = new Array(5);
        tango[0] = offset;
        tango[1] = verify;
        tango[2] = options;
        tango[3] = golf;
        tango[4] = mike;
        mike = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure1_slot6;
                tango = zulu.getPremiumTypeSubscription;
                mike = false;
                options = tango.bind(zulu)(mike);
                mike = zulu.hasFetchedSubscriptions;
                mike = mike.bind(zulu)();
                tango = null;
                report = tango == options;
                if(report) { _fun00002_ip = 70; continue _fun00001 }
 41:
                zulu = global;
                golf = zulu.Object;
                zulu = golf.keys;
                zulu = zulu.bind(golf)(options);
                golf = zulu.length;
                zulu = 0;
                report = zulu === golf;
 70:
                golf = _closure1_slot7;
                zulu = golf.hasFetchedOffer;
                zulu = zulu.bind(golf)();
                if(!zulu) { _fun00002_ip = 106; continue _fun00001 }
 89:
                options = _closure1_slot7;
                golf = options.hasAnyUnexpiredOffer;
                golf = golf.bind(options)();
                zulu = !golf;
 106:
                options = _closure1_slot7;
                golf = options.shouldFetchOffer;
                golf = golf.bind(options)();
                if(!mike) { _fun00002_ip = 132; continue _fun00001 }
 123:
                if(!report) { _fun00002_ip = 132; continue _fun00001 }
 126:
                if(zulu) { _fun00002_ip = 423; continue _fun00001 }
 132:
                if(!mike) { _fun00002_ip = 138; continue _fun00001 }
 135:
                if(!golf) { _fun00002_ip = 157; continue _fun00001 }
 138:
                report = _closure2_slot6;
                options = report.current;
                report = 5;
                if(!(!(options < report))) { _fun00002_ip = 222; continue _fun00001 }
 157:
                report = _closure2_slot1;
                verify = undefined;
                report = report.bind(verify)();
                options = _closure1_slot0;
                offset = _closure1_slot3;
                report = 12;
                report = offset[report];
                options = options.bind(verify)(report);
                report = options.getBestActiveInput;
                report = report.bind(options)();
                if(!(tango != report)) { _fun00002_ip = 530; continue _fun00001 }
 207:
                tango = report.closeCustomKeyboard;
                tango = tango.bind(report)();
                _fun00002_ip = 530; continue _fun00001;
 222:
                tango = _closure2_slot4;
                verify = undefined;
                zulu = true;
                zulu = tango.bind(verify)(zulu);
                report = global;
                tango = report.Promise;
                zulu = tango.all;
                if(mike) { _fun00002_ip = 284; continue _fun00001 }
 252:
                options = _closure1_slot0;
                offset = _closure1_slot3;
                mike = 8;
                mike = offset[mike];
                options = options.bind(verify)(mike);
                mike = options.fetchSubscriptions;
                options = mike.bind(options)();
                _fun00002_ip = 300; continue _fun00001;
 284:
                offset = report.Promise;
                mike = offset.resolve;
                options = mike.bind(offset)();
 300:
                mike = new Array(2);
                mike[0] = options;
                if(golf) { _fun00002_ip = 329; continue _fun00001 }
 311:
                golf = report.Promise;
                report = golf.resolve;
                report = report.bind(golf)();
                _fun00002_ip = 359; continue _fun00001;
 329:
                options = _closure1_slot1;
                offset = _closure1_slot3;
                golf = 9;
                golf = offset[golf];
                options = options.bind(verify)(golf);
                golf = options.fetchUserTrialOffer;
                report = golf.bind(options)();
 359:
                mike[1] = report;
                tango = zulu.bind(tango)(mike);
                zulu = tango.then;
                mike = function() {
                    zulu = _closure2_slot6;
                    tango = zulu.current;
                    mike = 1;
                    mike = tango + mike;
                    zulu['current'] = mike;
                    mike = _closure2_slot7;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                };
                tango = zulu.bind(tango)(mike);
                zulu = tango.catch;
                mike = function() {
                    tango = _closure1_slot2;
                    options = _closure1_slot3;
                    entity = 10;
                    zulu = options[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.presentFailedToast;
                    golf = _closure1_slot0;
                    mike = 11;
                    report = options[mike];
                    report = golf.bind(entity)(report);
                    oscar = report.intl;
                    report = oscar.string;
                    mike = options[mike];
                    mike = golf.bind(entity)(mike);
                    mike = mike.t;
                    mike = mike.R0RpRU;
                    mike = report.bind(oscar)(mike);
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.finally;
                entity = function() {
                    zulu = _closure2_slot4;
                    mike = undefined;
                    entity = false;
                    entity = zulu.bind(mike)(entity);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                _fun00002_ip = 530; continue _fun00001;
 423:
                mike = _closure1_slot1;
                zulu = _closure1_slot3;
                entity = 7;
                entity = zulu[entity];
                tango = undefined;
                zulu = mike.bind(tango)(entity);
                mike = {};
                report = {};
                golf = _closure2_slot2;
                report['page'] = golf;
                golf = _closure1_slot9;
                golf = golf.BUY;
                report['objectType'] = golf;
                mike['analyticsLocation'] = report;
                report = _closure2_slot5;
                mike['analyticsLocations'] = report;
                report = _closure2_slot0;
                oscar = _closure1_slot8;
                if(report) { _fun00002_ip = 509; continue _fun00001 }
 501:
                report = oscar.TIER_2;
                _fun00002_ip = 515; continue _fun00001;
 509:
                report = oscar.TIER_0;
 515:
                mike['premiumType'] = report;
                entity = _closure2_slot3;
                entity = zulu.bind(tango)(mike, entity);
 530:
                entity = undefined;
                return entity;
            }
        };
        mike = report.bind(oscar)(mike, tango);
        var _closure2_slot7 = mike;
        entity = {};
        entity['loading'] = zulu;
        entity['onPress'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();