// app/modules/guild_automod/AutomodAlert.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    report = entity.Object;
    tangon = report.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    michal = {};
    tangon = 1;
    michal['SET_COMPLETED'] = tangon;
    entity = 'SET_COMPLETED';
    michal[tangon] = entity;
    tangon = 2;
    michal['UNSET_COMPLETED'] = tangon;
    entity = 'UNSET_COMPLETED';
    michal[tangon] = entity;
    tangon = 3;
    michal['DELETE_USER_MESSAGE'] = tangon;
    entity = 'DELETE_USER_MESSAGE';
    michal[tangon] = entity;
    tangon = 4;
    michal['SUBMIT_FEEDBACK'] = tangon;
    entity = 'SUBMIT_FEEDBACK';
    michal[tangon] = entity;
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_automod/AutomodAlert.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['AutomodAlertActionType'] = michal;
    michal = function(argFoo) { // Original name: parseAlertActionsExecution
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00002_ip = 123; continue _fun00001 }
 11:
            michal = zuuluu;
            report = entity == zuuluu;
            zuuluu = null;
            if(report) { _fun00002_ip = 51; continue _fun00001 }
 23: // try_start_0
            report = global;
            oscard = report.JSON;
            report = oscard.parse;
            michal = report.bind(oscard)(michal);
 42: // try_end0
            zuuluu = michal;
            _fun00002_ip = 51; continue _fun00001;
 47: // catch_target0
            CatchBlockStart(arg_register=1);
            zuuluu = null;
 51:
            var _closure2_slot0 = zuuluu;
            report = entity == zuuluu;
            michal = null;
            if(report) { _fun00002_ip = 121; continue _fun00001 }
 64:
            report = zuuluu.actions;
            report = entity == report;
            michal = null;
            if(report) { _fun00002_ip = 121; continue _fun00001 }
 79:
            report = global;
            golfie = report.Object;
            oscard = golfie.keys;
            report = zuuluu.actions;
            oscard = oscard.bind(golfie)(report);
            report = oscard.forEach;
            tangon = function(argFoo) {
                michal = argFoo;
                entity = _closure2_slot0;
                entity = entity.actions;
                entity = entity[michal];
                entity['actionType'] = michal;
                entity = undefined;
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            michal = zuuluu;
 121:
            return michal;
 123:
            return entity;
        }
    };
    zuuluu['parseAlertActionsExecution'] = michal;
    return entity;
})();