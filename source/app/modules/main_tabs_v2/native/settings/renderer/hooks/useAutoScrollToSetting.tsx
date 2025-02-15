// app/modules/main_tabs_v2/native/settings/renderer/hooks/useAutoScrollToSetting.tsx
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
    golf = tango.clearSelectedSearchResult;
    var _closure1_slot3 = golf;
    tango = tango.useSelectedSearchResult;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RendererType;
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/settings/renderer/hooks/useAutoScrollToSetting.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useAutoScrollToSearchResultSetting
        _fun99982: for(var _fun99982_ip = 0; ; ) switch(_fun99982_ip) {
 0:
            options = argFoo;
            offset = argBar;
            var _closure2_slot0 = options;
            var _closure2_slot1 = offset;
            tango = _closure1_slot4;
            entity = undefined;
            oscar = tango.bind(entity)();
            var _closure2_slot2 = oscar;
            report = _closure1_slot0;
            golf = _closure1_slot1;
            tango = 5;
            tango = golf[tango];
            report = report.bind(entity)(tango);
            tango = report.useNavigation;
            golf = tango.bind(report)();
            var _closure2_slot3 = golf;
            tango = null;
            tango = tango == oscar;
            verify = false;
            if(tango) { _fun99982_ip = 180; continue _fun99982 }
 78:
            report = _closure1_slot0;
            romeo = _closure1_slot1;
            tango = 3;
            tango = romeo[tango];
            tango = report.bind(entity)(tango);
            tango = tango.SETTING_RENDERER_CONFIG;
            tango = tango[oscar];
            report = tango.type;
            tango = _closure1_slot5;
            tango = tango.ROUTE;
            verify = false;
            if(!(report !== tango)) { _fun99982_ip = 180; continue _fun99982 }
 129:
            report = _closure1_slot0;
            yankee = _closure1_slot1;
            tango = 4;
            tango = yankee[tango];
            report = report.bind(entity)(tango);
            tango = report.getInitialScrollIndex;
            yankee = tango.bind(report)(oscar, offset);
            tango = 0;
            tango = tango !== yankee;
            if(!tango) { _fun99982_ip = 177; continue _fun99982 }
 170:
            report = 1;
            tango = report !== yankee;
 177:
            verify = tango;
 180:
            var _closure2_slot4 = verify;
            report = _closure1_slot2;
            tango = report.useEffect;
            zulu = new Array(5);
            zulu[0] = offset;
            zulu[1] = verify;
            zulu[2] = options;
            zulu[3] = golf;
            zulu[4] = oscar;
            mike = function() {
                report = _closure2_slot3;
                tango = report.addListener;
                zulu = 'transitionEnd';
                mike = function() {
                    _fun99984: for(var _fun99984_ip = 0; ; ) switch(_fun99984_ip) {
 0:
                        entity = _closure2_slot4;
                        if(!entity) { _fun99984_ip = 124; continue _fun99984 }
 10:
                        tango = _closure1_slot0;
                        mike = _closure1_slot1;
                        entity = 4;
                        mike = mike[entity];
                        entity = undefined;
                        oscar = tango.bind(entity)(mike);
                        report = oscar.getInitialScrollIndex;
                        tango = _closure2_slot2;
                        mike = _closure2_slot1;
                        report = report.bind(oscar)(tango, mike);
                        oscar = null;
                        if(!(oscar != report)) { _fun99984_ip = 128; continue _fun99984 }
 61:
                        mike = _closure2_slot0;
                        mike = oscar == mike;
                        tango = undefined;
                        if(mike) { _fun99984_ip = 90; continue _fun99984 }
 74:
                        zulu = _closure2_slot0;
                        zulu = zulu.current;
                        mike = oscar == zulu;
                        tango = zulu;
 90:
                        if(mike) { _fun99984_ip = 124; continue _fun99984 }
 93:
                        zulu = tango.scrollToIndex;
                        mike = {'index': null, 'animated': false, 'viewOffset': 300};
                        mike['index'] = report;
                        mike = zulu.bind(tango)(mike);
 124:
                        mike = undefined;
                        return mike;
 128:
                        return entity;
                    }
                };
                mike = tango.bind(report)(zulu, mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    mike = _closure3_slot0;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    mike = _closure1_slot3;
                    mike = mike.bind(entity)();
                    return entity;
                };
                return entity;
            };
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    zulu['useAutoScrollToSearchResultSetting'] = mike;
    return entity;
})();