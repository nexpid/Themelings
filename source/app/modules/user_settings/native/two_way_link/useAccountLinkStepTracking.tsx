// app/modules/user_settings/native/two_way_link/useAccountLinkStepTracking.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: _handleStateChange
        _fun80632: for(var _fun80632_ip = 0; ; ) switch(_fun80632_ip) {
 0:
            golf = argFoo;
            mike = argBar;
            offset = null;
            if(!(offset != golf)) { _fun80632_ip = 137; continue _fun80632 }
 15:
            entity = golf.index;
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            tango = 2;
            tango = oscar[tango];
            options = undefined;
            oscar = report.bind(options)(tango);
            report = oscar.track;
            zulu = _closure1_slot3;
            tango = zulu.ACCOUNT_LINK_STEP;
            zulu = {};
            verify = argCorge;
            zulu['location_stack'] = verify;
            verify = mike.current;
            verify = offset != verify;
            if(!verify) { _fun80632_ip = 97; continue _fun80632 }
 82:
            offset = golf.routeNames;
            verify = mike.current;
            options = offset[verify];
 97:
            zulu['previous_step'] = options;
            golf = golf.routeNames;
            golf = golf[entity];
            zulu['current_step'] = golf;
            golf = argBaz;
            zulu['platform_type'] = golf;
            zulu = report.bind(oscar)(tango, zulu);
            mike['current'] = entity;
 137:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot4 = entity;
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
    tango = tango.AnalyticEvents;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/native/two_way_link/useAccountLinkStepTracking.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useAccountLinkStepTracking
        oscar = argFoo;
        golf = argBar;
        var _closure2_slot0 = oscar;
        var _closure2_slot1 = golf;
        report = _closure1_slot2;
        zulu = report.useRef;
        entity = null;
        entity = zulu.bind(report)(entity);
        var _closure2_slot2 = entity;
        tango = report.useCallback;
        zulu = new Array(2);
        zulu[0] = golf;
        zulu[1] = oscar;
        entity = function(argFoo) {
            oscar = _closure1_slot4;
            verify = _closure2_slot2;
            options = _closure2_slot0;
            golf = _closure2_slot1;
            entity = undefined;
            offset = argFoo;
            yankee = undefined;
            mike = yankee[oscar](offset, verify, options, golf, oscar);
            return entity;
        };
        entity = tango.bind(report)(entity, zulu);
        tango = report.useEffect;
        zulu = new Array(2);
        zulu[0] = golf;
        zulu[1] = oscar;
        mike = function() {
            oscar = _closure1_slot4;
            report = {};
            entity = 0;
            report['index'] = entity;
            entity = ['landing'];
            report['routeNames'] = entity;
            verify = _closure2_slot2;
            options = _closure2_slot0;
            golf = _closure2_slot1;
            entity = undefined;
            yankee = undefined;
            offset = report;
            mike = yankee[oscar](offset, verify, options, golf, oscar);
            return entity;
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useAccountLinkStepTracking'] = mike;
    return entity;
})();