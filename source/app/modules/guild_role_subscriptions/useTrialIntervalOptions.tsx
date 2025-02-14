// app/modules/guild_role_subscriptions/useTrialIntervalOptions.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
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
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.TIER_TRIAL_INTERVALS;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SubscriptionIntervalTypes;
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/useTrialIntervalOptions.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useTrialIntervalOptions
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun96865: for(var _fun96865_ip = 0; ; ) switch(_fun96865_ip) {
 0:
                zulu = _closure1_slot3;
                mike = zulu.map;
                entity = function(argFoo) {
                    _fun96866: for(var _fun96866_ip = 0; ; ) switch(_fun96866_ip) {
 0:
                        zulu = argFoo;
                        entity = {};
                        entity['value'] = zulu;
                        report = zulu.interval;
                        tango = _closure1_slot4;
                        tango = tango.DAY;
                        if(!(report === tango)) { _fun96866_ip = 45; continue _fun96866 }
 32:
                        report = zulu.interval_count;
                        tango = 7;
                        if(!(tango !== report)) { _fun96866_ip = 80; continue _fun96866 }
 45:
                        oscar = _closure1_slot0;
                        report = _closure1_slot1;
                        tango = 4;
                        report = report[tango];
                        tango = undefined;
                        report = oscar.bind(tango)(report);
                        tango = report.formatPlanIntervalDuration;
                        tango = tango.bind(report)(zulu);
                        _fun96866_ip = 170; continue _fun96866;
 80:
                        yankee = _closure1_slot0;
                        romeo = _closure1_slot1;
                        report = 3;
                        oscar = romeo[report];
                        offset = undefined;
                        oscar = yankee.bind(offset)(oscar);
                        options = oscar.intl;
                        golf = options.formatToPlainString;
                        report = romeo[report];
                        report = yankee.bind(offset)(report);
                        report = report.t;
                        oscar = report.XfSsr6;
                        report = {};
                        verify = 4;
                        verify = romeo[verify];
                        offset = yankee.bind(offset)(verify);
                        verify = offset.formatPlanIntervalDuration;
                        verify = verify.bind(offset)(zulu);
                        report['defaultLimit'] = verify;
                        tango = golf.bind(options)(oscar, report);
 170:
                        entity['label'] = tango;
                        tango = zulu.interval;
                        mike = _closure1_slot4;
                        mike = mike.DAY;
                        mike = tango === mike;
                        if(!mike) { _fun96866_ip = 210; continue _fun96866 }
 197:
                        tango = zulu.interval_count;
                        zulu = 7;
                        mike = zulu === tango;
 210:
                        entity['isDefault'] = mike;
                        return entity;
                    }
                };
                zulu = mike.bind(zulu)(entity);
                report = _closure2_slot0;
                entity = null;
                if(!(entity == report)) { _fun96865_ip = 45; continue _fun96865 }
 39:
                mike = _closure2_slot0;
                _fun96865_ip = 79; continue _fun96865;
 45:
                report = zulu.find;
                tango = function(argFoo) {
                    _fun96867: for(var _fun96867_ip = 0; ; ) switch(_fun96867_ip) {
 0:
                        mike = argFoo;
                        zulu = mike.value;
                        entity = null;
                        entity = entity != zulu;
                        if(!entity) { _fun96867_ip = 45; continue _fun96867 }
 17:
                        zulu = mike.value;
                        tango = zulu.interval;
                        zulu = _closure2_slot0;
                        zulu = zulu.interval;
                        entity = tango === zulu;
 45:
                        if(!entity) { _fun96867_ip = 76; continue _fun96867 }
 48:
                        mike = mike.value;
                        zulu = mike.interval_count;
                        mike = _closure2_slot0;
                        mike = mike.interval_count;
                        entity = zulu === mike;
 76:
                        return entity;
                    }
                };
                tango = report.bind(zulu)(tango);
                report = entity == tango;
                entity = undefined;
                if(report) { _fun96865_ip = 76; continue _fun96865 }
 71:
                entity = tango.value;
 76:
                mike = entity;
 79:
                entity = {};
                entity['options'] = zulu;
                entity['selectedOption'] = mike;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();