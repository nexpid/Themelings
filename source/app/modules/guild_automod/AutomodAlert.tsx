// app/modules/guild_automod/AutomodAlert.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    report = entity.Object;
    tango = report.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(report)(zulu, entity, mike);
    mike = {};
    tango = 1;
    mike['SET_COMPLETED'] = tango;
    entity = 'SET_COMPLETED';
    mike[tango] = entity;
    tango = 2;
    mike['UNSET_COMPLETED'] = tango;
    entity = 'UNSET_COMPLETED';
    mike[tango] = entity;
    tango = 3;
    mike['DELETE_USER_MESSAGE'] = tango;
    entity = 'DELETE_USER_MESSAGE';
    mike[tango] = entity;
    tango = 4;
    mike['SUBMIT_FEEDBACK'] = tango;
    entity = 'SUBMIT_FEEDBACK';
    mike[tango] = entity;
    tango = argPlugh;
    entity = 0;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_automod/AutomodAlert.tsx';
    tango = report.bind(oscar)(tango);
    zulu['AutomodAlertActionType'] = mike;
    mike = function(argFoo) { // Original name: parseAlertActionsExecution
        _fun59641: for(var _fun59641_ip = 0; ; ) switch(_fun59641_ip) {
 0:
            zulu = argFoo;
            entity = null;
            if(!(entity != zulu)) { _fun59641_ip = 123; continue _fun59641 }
 11:
            mike = zulu;
            report = entity == zulu;
            zulu = null;
            if(report) { _fun59641_ip = 51; continue _fun59641 }
 23: // try_start_0
            report = global;
            oscar = report.JSON;
            report = oscar.parse;
            mike = report.bind(oscar)(mike);
 42: // try_end0
            zulu = mike;
            _fun59641_ip = 51; continue _fun59641;
 47: // catch_target0
            CatchBlockStart(arg_register=1);
            zulu = null;
 51:
            var _closure2_slot0 = zulu;
            report = entity == zulu;
            mike = null;
            if(report) { _fun59641_ip = 121; continue _fun59641 }
 64:
            report = zulu.actions;
            report = entity == report;
            mike = null;
            if(report) { _fun59641_ip = 121; continue _fun59641 }
 79:
            report = global;
            golf = report.Object;
            oscar = golf.keys;
            report = zulu.actions;
            oscar = oscar.bind(golf)(report);
            report = oscar.forEach;
            tango = function(argFoo) {
                mike = argFoo;
                entity = _closure2_slot0;
                entity = entity.actions;
                entity = entity[mike];
                entity['actionType'] = mike;
                entity = undefined;
                return entity;
            };
            tango = report.bind(oscar)(tango);
            mike = zulu;
 121:
            return mike;
 123:
            return entity;
        }
    };
    zulu['parseAlertActionsExecution'] = mike;
    return entity;
})();