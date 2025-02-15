// app/modules/design/DesktopVisualRefreshExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    golf = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = verify;
    report = function(argFoo) { // Original name: getIsDesktopRefreshEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = _closure1_slot6;
            zulu = tango.getCurrentConfig;
            entity = {};
            report = argFoo;
            entity['location'] = report;
            zulu = zulu.bind(tango)(entity);
            entity = zulu.enabled;
            tango = zulu.disabledByDefault;
            zulu = _closure1_slot3;
            mike = zulu.isVisualRefreshDisabled;
            mike = mike.bind(zulu)(tango);
            zulu = !entity;
            entity = !zulu;
            if(zulu) { _fun00002_ip = 65; continue _fun00001 }
 62:
            entity = !mike;
 65:
            return entity;
        }
    };
    var _closure1_slot7 = report;
    tango = function(argFoo) { // Original name: useIsDesktopVisualRefreshEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscar = _closure1_slot6;
            report = oscar.useExperiment;
            tango = {};
            entity = argFoo;
            tango['location'] = entity;
            entity = {};
            golf = true;
            entity['autoTrackExposure'] = golf;
            tango = report.bind(oscar)(tango, entity);
            entity = tango.enabled;
            tango = tango.disabledByDefault;
            var _closure2_slot0 = tango;
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            tango = 5;
            report = report[tango];
            tango = undefined;
            report = oscar.bind(tango)(report);
            tango = report.useStateFromStores;
            oscar = _closure1_slot3;
            zulu = new Array(1);
            zulu[0] = oscar;
            mike = function() {
                zulu = _closure1_slot3;
                mike = zulu.isVisualRefreshDisabled;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            zulu = !entity;
            entity = !zulu;
            if(zulu) { _fun00004_ip = 116; continue _fun00003 }
 113:
            entity = !mike;
 116:
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = verify[entity];
    entity = undefined;
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot2 = oscar;
    oscar = 1;
    oscar = verify[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 2;
    oscar = verify[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 3;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    offset = oscar.Storage;
    golf = offset.get;
    oscar = 'desktop_refresh_enabled';
    offset = golf.bind(offset)(oscar);
    golf = 'true';
    golf = golf === offset;
    var _closure1_slot5 = golf;
    golf = 4;
    golf = verify[golf];
    yankee = options.bind(entity)(golf);
    offset = yankee.createExperiment;
    golf = {'id': '2024-05_desktop_visual_refresh', 'label': 'Desktop Visual Refresh', 'kind': 'user'};
    romeo = {'enabled': false, 'enableCollapsibleSidebar': false, 'newChatInput': false, 'disabledByDefault': true, 'canOptOut': false};
    golf['defaultConfig'] = romeo;
    foxtrot = {'id': 0, 'label': 'Control'};
    romeo = {'enabled': false, 'enableCollapsibleSidebar': false, 'newChatInput': false, 'disabledByDefault': true, 'canOptOut': false};
    foxtrot['config'] = romeo;
    romeo = new Array(6);
    romeo[0] = foxtrot;
    foxtrot = {'id': 1, 'label': 'Refresh with New Chat Input'};
    backup = {'enabled': true, 'enableCollapsibleSidebar': false, 'newChatInput': true, 'disabledByDefault': false, 'canOptOut': false};
    foxtrot['config'] = backup;
    romeo[1] = foxtrot;
    foxtrot = {'id': 2, 'label': 'Refresh with New Chat Input, Collapsible Sidebar'};
    backup = {'enabled': true, 'enableCollapsibleSidebar': true, 'newChatInput': true, 'disabledByDefault': false, 'canOptOut': false};
    foxtrot['config'] = backup;
    romeo[2] = foxtrot;
    foxtrot = {'id': 3, 'label': 'Refresh with Legacy Chat Input'};
    backup = {'enabled': true, 'enableCollapsibleSidebar': false, 'newChatInput': false, 'disabledByDefault': false, 'canOptOut': false};
    foxtrot['config'] = backup;
    romeo[3] = foxtrot;
    foxtrot = {'id': 4, 'label': 'Refresh with Legacy Chat Input, Collapsible Sidebar'};
    backup = {'enabled': true, 'enableCollapsibleSidebar': true, 'newChatInput': false, 'disabledByDefault': false, 'canOptOut': false};
    foxtrot['config'] = backup;
    romeo[4] = foxtrot;
    foxtrot = {'id': 5, 'label': 'External Testers'};
    backup = {'enabled': true, 'enableCollapsibleSidebar': false, 'newChatInput': true, 'disabledByDefault': true, 'canOptOut': true};
    foxtrot['config'] = backup;
    romeo[5] = foxtrot;
    golf['treatments'] = romeo;
    golf = offset.bind(yankee)(golf);
    var _closure1_slot6 = golf;
    golf = 6;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/design/DesktopVisualRefreshExperiment.tsx';
    golf = options.bind(verify)(golf);
    zulu['DESKTOP_REFRESH_ENABLED_CACHE_KEY'] = oscar;
    oscar = function(argFoo) { // Original name: getIsDesktopRefreshEnabledCached
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = _closure1_slot2;
            entity = entity.hasLoadedExperiments;
            if(entity) { _fun00006_ip = 22; continue _fun00005 }
 16:
            entity = _closure1_slot5;
            _fun00006_ip = 36; continue _fun00005;
 22:
            tango = _closure1_slot7;
            zulu = undefined;
            mike = argFoo;
            entity = tango.bind(zulu)(mike);
 36:
            return entity;
        }
    };
    zulu['getIsDesktopRefreshEnabledCached'] = oscar;
    zulu['getIsDesktopRefreshEnabled'] = report;
    report = function(argFoo) { // Original name: useIsDesktopRefreshChatInputEnabled
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            tango = _closure1_slot8;
            entity = undefined;
            entity = tango.bind(entity)(mike);
            report = _closure1_slot6;
            tango = report.useExperiment;
            zulu = {};
            zulu['location'] = mike;
            mike = {};
            oscar = true;
            mike['autoTrackExposure'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            mike = mike.newChatInput;
            if(!entity) { _fun00008_ip = 60; continue _fun00007 }
 57:
            entity = mike;
 60:
            return entity;
        }
    };
    zulu['useIsDesktopRefreshChatInputEnabled'] = report;
    report = function(argFoo) { // Original name: getIsDesktopRefreshDisabledByDefault
        zulu = _closure1_slot6;
        mike = zulu.getCurrentConfig;
        entity = {};
        tango = argFoo;
        entity['location'] = tango;
        entity = mike.bind(zulu)(entity);
        entity = entity.disabledByDefault;
        return entity;
    };
    zulu['getIsDesktopRefreshDisabledByDefault'] = report;
    report = function(argFoo, argBar) { // Original name: subscribeToDesktopVisualRefreshExperiment
        tango = _closure1_slot6;
        zulu = tango.subscribe;
        mike = {};
        entity = argFoo;
        mike['location'] = entity;
        entity = argBar;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['subscribeToDesktopVisualRefreshExperiment'] = report;
    report = function(argFoo) { // Original name: useIsDesktopVisualRefreshExperimentEnabled
        tango = _closure1_slot6;
        zulu = tango.useExperiment;
        mike = {};
        entity = argFoo;
        mike['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zulu.bind(tango)(mike, entity);
        entity = entity.enabled;
        return entity;
    };
    zulu['useIsDesktopVisualRefreshExperimentEnabled'] = report;
    zulu['useIsDesktopVisualRefreshEnabled'] = tango;
    tango = function(argFoo) { // Original name: useIsCollapsibleSidebarEnabled
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            tango = _closure1_slot8;
            zulu = undefined;
            zulu = tango.bind(zulu)(entity);
            report = _closure1_slot6;
            tango = report.useExperiment;
            mike = {};
            mike['location'] = entity;
            entity = {};
            oscar = true;
            entity['autoTrackExposure'] = oscar;
            entity = tango.bind(report)(mike, entity);
            mike = entity.enableCollapsibleSidebar;
            entity = !zulu;
            entity = !entity;
            if(!zulu) { _fun00010_ip = 66; continue _fun00009 }
 63:
            entity = mike;
 66:
            return entity;
        }
    };
    zulu['useIsCollapsibleSidebarEnabled'] = tango;
    mike = function(argFoo) { // Original name: useCanOptOutOfDesktopVisualRefresh
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tango = _closure1_slot6;
            zulu = tango.getCurrentConfig;
            mike = {};
            report = argFoo;
            mike['location'] = report;
            mike = zulu.bind(tango)(mike);
            zulu = mike.canOptOut;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 5;
            tango = tango[mike];
            mike = undefined;
            oscar = report.bind(mike)(tango);
            report = oscar.useStateFromStores;
            entity = _closure1_slot4;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    mike = _closure1_slot4;
                    entity = mike.getCurrentUser;
                    zulu = entity.bind(mike)();
                    report = null;
                    mike = report == zulu;
                    entity = undefined;
                    if(mike) { _fun00014_ip = 52; continue _fun00013 }
 27:
                    mike = zulu.isStaff;
                    mike = report == mike;
                    entity = undefined;
                    if(mike) { _fun00014_ip = 52; continue _fun00013 }
 42:
                    mike = zulu.isStaff;
                    entity = mike.bind(zulu)();
 52:
                    return entity;
                }
            };
            tango = report.bind(oscar)(tango, entity);
            entity = global;
            entity = entity.Boolean;
            if(zulu) { _fun00012_ip = 99; continue _fun00011 }
 96:
            zulu = tango;
 99:
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    zulu['useCanOptOutOfDesktopVisualRefresh'] = mike;
    return entity;
})();