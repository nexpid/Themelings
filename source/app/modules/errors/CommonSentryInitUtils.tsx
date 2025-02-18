// app/modules/errors/CommonSentryInitUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    golfie = entity.Object;
    tangon = golfie.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(golfie)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    tangon = michal.AnalyticEvents;
    golfie = tangon.START_SPEAKING;
    michal = new Array(7);
    michal[0] = golfie;
    golfie = tangon.START_LISTENING;
    michal[1] = golfie;
    golfie = tangon.APP_OPENED;
    michal[2] = golfie;
    golfie = tangon.NOTIFICATION_CLICKED;
    michal[3] = golfie;
    golfie = tangon.EXPERIMENT_USER_TRIGGERED;
    michal[4] = golfie;
    golfie = tangon.EXPERIMENT_DM_TRIGGERED;
    michal[5] = golfie;
    tangon = tangon.EXPERIMENT_GUILD_TRIGGERED;
    michal[6] = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/errors/CommonSentryInitUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['IGNORE_ANALYTICS_BREADCRUMB_EVENTS'] = michal;
    michal = function(argFoo) { // Original name: filterThrottle
        michal = argFoo;
        zuuluu = michal.maxBudgetMinute;
        var _closure2_slot0 = zuuluu;
        michal = michal.maxBudgetHour;
        var _closure2_slot1 = michal;
        michal = {};
        zuuluu = {'slot': 0, 'budgetUsed': 0};
        michal['minute'] = zuuluu;
        zuuluu = {'slot': 0, 'budgetUsed': 0};
        michal['hour'] = zuuluu;
        var _closure2_slot2 = michal;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = global;
                zuuluu = michal.Date;
                entity = zuuluu.now;
                oscard = entity.bind(zuuluu)();
                golfie = michal.Math;
                report = golfie.round;
                entity = 1000;
                zuuluu = oscard / entity;
                tangon = 60;
                zuuluu = zuuluu / tangon;
                report = report.bind(golfie)(zuuluu);
                zuuluu = michal.Math;
                michal = zuuluu.round;
                entity = oscard / entity;
                entity = entity / tangon;
                entity = entity / tangon;
                tangon = michal.bind(zuuluu)(entity);
                entity = _closure2_slot2;
                entity = entity.minute;
                entity = entity.slot;
                if(!(entity !== report)) { _fun00002_ip = 131; continue _fun00001 }
 101:
                entity = _closure2_slot2;
                zuuluu = entity.minute;
                zuuluu['slot'] = report;
                zuuluu = entity.minute;
                entity = 0;
                zuuluu['budgetUsed'] = entity;
 131:
                entity = _closure2_slot2;
                entity = entity.hour;
                entity = entity.slot;
                if(!(entity !== tangon)) { _fun00002_ip = 181; continue _fun00001 }
 151:
                entity = _closure2_slot2;
                zuuluu = entity.hour;
                zuuluu['slot'] = tangon;
                zuuluu = entity.hour;
                entity = 0;
                zuuluu['budgetUsed'] = entity;
 181:
                entity = _closure2_slot2;
                entity = entity.minute;
                zuuluu = entity.budgetUsed;
                entity = _closure2_slot0;
                entity = zuuluu < entity;
                if(!entity) { _fun00002_ip = 253; continue _fun00001 }
 208:
                zuuluu = _closure2_slot2;
                report = zuuluu.minute;
                tangon = report.budgetUsed;
                tangon = tangon + 1;
                report['budgetUsed'] = tangon;
                zuuluu = zuuluu.hour;
                tangon = zuuluu.budgetUsed;
                zuuluu = _closure2_slot1;
                entity = tangon < zuuluu;
 253:
                if(!entity) { _fun00002_ip = 283; continue _fun00001 }
 256:
                michal = _closure2_slot2;
                zuuluu = michal.hour;
                michal = zuuluu.budgetUsed;
                michal = michal + 1;
                zuuluu['budgetUsed'] = michal;
                entity = true;
 283:
                return entity;
            }
        };
        return entity;
    };
    zuuluu['filterThrottle'] = michal;
    return entity;
})();