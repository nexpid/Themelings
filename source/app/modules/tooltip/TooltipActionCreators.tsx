// app/modules/tooltip/TooltipActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    tango = argPlugh;
    mike = argBaz;
    var _closure1_slot0 = mike;
    var _closure1_slot1 = tango;
    mike = global;
    golf = mike.Object;
    oscar = golf.defineProperty;
    report = {};
    mike = true;
    report['value'] = mike;
    mike = '__esModule';
    mike = oscar.bind(golf)(zulu, mike, report);
    mike = {};
    report = function(argFoo) { // Original name: acknowledgeTooltip
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'TOOLTIP_ACKNOWLEDGE';
        mike['type'] = report;
        report = argFoo;
        mike['tooltip'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['acknowledgeTooltip'] = report;
    entity = function(argFoo) { // Original name: attemptToShowTooltip
        _fun84867: for(var _fun84867_ip = 0; ; ) switch(_fun84867_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun84867_ip = 11; continue _fun84867 }
 9:
            report = false;
 11:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 0;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'TOOLTIP_SHOW_ATTEMPT';
            mike['type'] = oscar;
            oscar = argFoo;
            mike['tooltip'] = oscar;
            mike['ignoreMaxShownLimit'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['attemptToShowTooltip'] = entity;
    entity = 1;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/tooltip/TooltipActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();