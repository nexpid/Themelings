// app/modules/errors/CommonSentryInitUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    golf = entity.Object;
    tango = golf.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(golf)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    tango = mike.AnalyticEvents;
    golf = tango.START_SPEAKING;
    mike = new Array(7);
    mike[0] = golf;
    golf = tango.START_LISTENING;
    mike[1] = golf;
    golf = tango.APP_OPENED;
    mike[2] = golf;
    golf = tango.NOTIFICATION_CLICKED;
    mike[3] = golf;
    golf = tango.EXPERIMENT_USER_TRIGGERED;
    mike[4] = golf;
    golf = tango.EXPERIMENT_DM_TRIGGERED;
    mike[5] = golf;
    tango = tango.EXPERIMENT_GUILD_TRIGGERED;
    mike[6] = tango;
    tango = 1;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/errors/CommonSentryInitUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['IGNORE_ANALYTICS_BREADCRUMB_EVENTS'] = mike;
    mike = function(argFoo) { // Original name: filterThrottle
        mike = argFoo;
        zulu = mike.maxBudgetMinute;
        var _closure2_slot0 = zulu;
        mike = mike.maxBudgetHour;
        var _closure2_slot1 = mike;
        mike = {};
        zulu = {'slot': 0, 'budgetUsed': 0};
        mike['minute'] = zulu;
        zulu = {'slot': 0, 'budgetUsed': 0};
        mike['hour'] = zulu;
        var _closure2_slot2 = mike;
        entity = function() {
            _fun36015: for(var _fun36015_ip = 0; ; ) switch(_fun36015_ip) {
 0:
                mike = global;
                zulu = mike.Date;
                entity = zulu.now;
                oscar = entity.bind(zulu)();
                golf = mike.Math;
                report = golf.round;
                entity = 1000;
                zulu = oscar / entity;
                tango = 60;
                zulu = zulu / tango;
                report = report.bind(golf)(zulu);
                zulu = mike.Math;
                mike = zulu.round;
                entity = oscar / entity;
                entity = entity / tango;
                entity = entity / tango;
                tango = mike.bind(zulu)(entity);
                entity = _closure2_slot2;
                entity = entity.minute;
                entity = entity.slot;
                if(!(entity !== report)) { _fun36015_ip = 131; continue _fun36015 }
 101:
                entity = _closure2_slot2;
                zulu = entity.minute;
                zulu['slot'] = report;
                zulu = entity.minute;
                entity = 0;
                zulu['budgetUsed'] = entity;
 131:
                entity = _closure2_slot2;
                entity = entity.hour;
                entity = entity.slot;
                if(!(entity !== tango)) { _fun36015_ip = 181; continue _fun36015 }
 151:
                entity = _closure2_slot2;
                zulu = entity.hour;
                zulu['slot'] = tango;
                zulu = entity.hour;
                entity = 0;
                zulu['budgetUsed'] = entity;
 181:
                entity = _closure2_slot2;
                entity = entity.minute;
                zulu = entity.budgetUsed;
                entity = _closure2_slot0;
                entity = zulu < entity;
                if(!entity) { _fun36015_ip = 253; continue _fun36015 }
 208:
                zulu = _closure2_slot2;
                report = zulu.minute;
                tango = report.budgetUsed;
                tango = tango + 1;
                report['budgetUsed'] = tango;
                zulu = zulu.hour;
                tango = zulu.budgetUsed;
                zulu = _closure2_slot1;
                entity = tango < zulu;
 253:
                if(!entity) { _fun36015_ip = 283; continue _fun36015 }
 256:
                mike = _closure2_slot2;
                zulu = mike.hour;
                mike = zulu.budgetUsed;
                mike = mike + 1;
                zulu['budgetUsed'] = mike;
                entity = true;
 283:
                return entity;
            }
        };
        return entity;
    };
    zulu['filterThrottle'] = mike;
    return entity;
})();