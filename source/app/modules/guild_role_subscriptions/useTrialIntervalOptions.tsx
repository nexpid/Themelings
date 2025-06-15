// app/modules/guild_role_subscriptions/useTrialIntervalOptions.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
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
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.TIER_TRIAL_INTERVALS;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SubscriptionIntervalTypes;
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/useTrialIntervalOptions.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useTrialIntervalOptions
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot3;
                michal = zuuluu.map;
                entity = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = argFoo;
                        entity = {};
                        entity['value'] = zuuluu;
                        report = zuuluu.interval;
                        tangon = _closure1_slot4;
                        tangon = tangon.DAY;
                        if(!(report === tangon)) { _fun00004_ip = 45; continue _fun00003 }
 32:
                        report = zuuluu.interval_count;
                        tangon = 7;
                        if(!(tangon !== report)) { _fun00004_ip = 80; continue _fun00003 }
 45:
                        oscard = _closure1_slot0;
                        report = _closure1_slot1;
                        tangon = 4;
                        report = report[tangon];
                        tangon = undefined;
                        report = oscard.bind(tangon)(report);
                        tangon = report.formatPlanIntervalDuration;
                        tangon = tangon.bind(report)(zuuluu);
                        _fun00004_ip = 172; continue _fun00003;
 80:
                        yankee = _closure1_slot0;
                        romeon = _closure1_slot1;
                        report = 3;
                        oscard = romeon[report];
                        offset = undefined;
                        oscard = yankee.bind(offset)(oscard);
                        option = oscard.intl;
                        golfie = option.formatToPlainString;
                        report = romeon[report];
                        report = yankee.bind(offset)(report);
                        report = report.t;
                        oscard = report.XfSsr6;
                        report = {};
                        verify = 4;
                        verify = romeon[verify];
                        offset = yankee.bind(offset)(verify);
                        verify = offset.formatPlanIntervalDuration;
                        verify = verify.bind(offset)(zuuluu);
                        report['defaultLimit'] = verify;
                        tangon = golfie.bind(option)(oscard, report);
 172:
                        entity['label'] = tangon;
                        tangon = zuuluu.interval;
                        michal = _closure1_slot4;
                        michal = michal.DAY;
                        michal = tangon === michal;
                        if(!michal) { _fun00004_ip = 212; continue _fun00003 }
 199:
                        tangon = zuuluu.interval_count;
                        zuuluu = 7;
                        michal = zuuluu === tangon;
 212:
                        entity['isDefault'] = michal;
                        return entity;
                    }
                };
                zuuluu = michal.bind(zuuluu)(entity);
                report = _closure2_slot0;
                entity = null;
                if(!(entity == report)) { _fun00002_ip = 45; continue _fun00001 }
 39:
                michal = _closure2_slot0;
                _fun00002_ip = 80; continue _fun00001;
 45:
                report = zuuluu.find;
                tangon = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = argFoo;
                        zuuluu = michal.value;
                        entity = null;
                        entity = entity != zuuluu;
                        if(!entity) { _fun00006_ip = 45; continue _fun00005 }
 17:
                        zuuluu = michal.value;
                        tangon = zuuluu.interval;
                        zuuluu = _closure2_slot0;
                        zuuluu = zuuluu.interval;
                        entity = tangon === zuuluu;
 45:
                        if(!entity) { _fun00006_ip = 76; continue _fun00005 }
 48:
                        michal = michal.value;
                        zuuluu = michal.interval_count;
                        michal = _closure2_slot0;
                        michal = michal.interval_count;
                        entity = zuuluu === michal;
 76:
                        return entity;
                    }
                };
                tangon = report.bind(zuuluu)(tangon);
                report = entity == tangon;
                entity = undefined;
                if(report) { _fun00002_ip = 77; continue _fun00001 }
 72:
                entity = tangon.value;
 77:
                michal = entity;
 80:
                entity = {};
                entity['options'] = zuuluu;
                entity['selectedOption'] = michal;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();