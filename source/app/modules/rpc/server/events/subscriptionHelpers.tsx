// app/modules/rpc/server/events/subscriptionHelpers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RPCEvents;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ActivityLayoutMode;
    var _closure1_slot4 = golf;
    tango = tango.ActivityScreenOrientation;
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/events/subscriptionHelpers.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: getInitialSubscriptionPayload
        _fun109808: for(var _fun109808_ip = 0; ; ) switch(_fun109808_ip) {
 0:
            entity = argFoo;
            tango = argBar;
            mike = _closure1_slot3;
            mike = mike.ACTIVITY_PIP_MODE_UPDATE;
            if(!(mike !== tango)) { _fun109808_ip = 325; continue _fun109808 }
 26:
            mike = _closure1_slot3;
            mike = mike.ACTIVITY_LAYOUT_MODE_UPDATE;
            if(!(mike !== tango)) { _fun109808_ip = 259; continue _fun109808 }
 43:
            mike = _closure1_slot3;
            mike = mike.THERMAL_STATE_UPDATE;
            if(!(mike !== tango)) { _fun109808_ip = 188; continue _fun109808 }
 60:
            mike = _closure1_slot3;
            mike = mike.ORIENTATION_UPDATE;
            if(!(mike !== tango)) { _fun109808_ip = 126; continue _fun109808 }
 74:
            mike = _closure1_slot3;
            mike = mike.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE;
            if(!(mike !== tango)) { _fun109808_ip = 92; continue _fun109808 }
 88:
            mike = null;
            return mike;
 92:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 5;
            tango = tango[mike];
            mike = undefined;
            tango = report.bind(mike)(tango);
            mike = tango.activityInstanceConnectedParticipants;
            mike = mike.bind(tango)();
            return mike;
 126:
            mike = {};
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            tango = 4;
            report = report[tango];
            tango = undefined;
            report = oscar.bind(tango)(report);
            tango = report.getIsScreenLandscape;
            tango = tango.bind(report)();
            report = _closure1_slot5;
            if(tango) { _fun109808_ip = 175; continue _fun109808 }
 167:
            tango = report.PORTRAIT;
            _fun109808_ip = 181; continue _fun109808;
 175:
            tango = report.LANDSCAPE;
 181:
            mike['screen_orientation'] = tango;
            return mike;
 188:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 3;
            report = golf[mike];
            tango = undefined;
            options = oscar.bind(tango)(report);
            report = options.getThermalState;
            report = report.bind(options)();
            mike = golf[mike];
            mike = oscar.bind(tango)(mike);
            mike = mike.ThermalStates;
            tango = mike.UNHANDLED;
            mike = null;
            if(!(report !== tango)) { _fun109808_ip = 257; continue _fun109808 }
 247:
            tango = {};
            tango['thermal_state'] = report;
            mike = tango;
 257:
            return mike;
 259:
            tango = entity.application;
            mike = null;
            report = mike == tango;
            golf = undefined;
            if(report) { _fun109808_ip = 280; continue _fun109808 }
 275:
            golf = tango.id;
 280:
            tango = mike != golf;
            report = null;
            if(!tango) { _fun109808_ip = 304; continue _fun109808 }
 289:
            oscar = _closure1_slot2;
            tango = oscar.getLayoutModeForApp;
            report = tango.bind(oscar)(golf);
 304:
            tango = mike != report;
            mike = null;
            if(!tango) { _fun109808_ip = 323; continue _fun109808 }
 313:
            tango = {};
            tango['layout_mode'] = report;
            mike = tango;
 323:
            return mike;
 325:
            mike = entity.application;
            entity = null;
            tango = entity == mike;
            oscar = undefined;
            if(tango) { _fun109808_ip = 346; continue _fun109808 }
 341:
            oscar = mike.id;
 346:
            mike = entity != oscar;
            tango = null;
            if(!mike) { _fun109808_ip = 370; continue _fun109808 }
 355:
            report = _closure1_slot2;
            mike = report.getLayoutModeForApp;
            tango = mike.bind(report)(oscar);
 370:
            mike = entity != tango;
            entity = null;
            if(!mike) { _fun109808_ip = 403; continue _fun109808 }
 379:
            mike = {};
            zulu = _closure1_slot4;
            zulu = zulu.FOCUSED;
            zulu = tango !== zulu;
            mike['is_pip_mode'] = zulu;
            entity = mike;
 403:
            return entity;
        }
    };
    zulu['getInitialSubscriptionPayload'] = mike;
    return entity;
})();