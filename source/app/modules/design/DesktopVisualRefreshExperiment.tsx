// app/modules/design/DesktopVisualRefreshExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = verify;
    report = function(argFoo) { // Original name: getIsDesktopRefreshEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot6;
            zuuluu = tangon.getCurrentConfig;
            entity = {};
            report = argFoo;
            entity['location'] = report;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.enabled;
            tangon = zuuluu.disabledByDefault;
            zuuluu = _closure1_slot3;
            michal = zuuluu.isVisualRefreshDisabled;
            michal = michal.bind(zuuluu)(tangon);
            zuuluu = !entity;
            entity = !zuuluu;
            if(zuuluu) { _fun00002_ip = 65; continue _fun00001 }
 62:
            entity = !michal;
 65:
            return entity;
        }
    };
    var _closure1_slot7 = report;
    tangon = function(argFoo) { // Original name: useIsDesktopVisualRefreshEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = _closure1_slot6;
            report = oscard.useExperiment;
            tangon = {};
            entity = argFoo;
            tangon['location'] = entity;
            entity = {};
            golfie = true;
            entity['autoTrackExposure'] = golfie;
            tangon = report.bind(oscard)(tangon, entity);
            entity = tangon.enabled;
            tangon = tangon.disabledByDefault;
            var _closure2_slot0 = tangon;
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 5;
            report = report[tangon];
            tangon = undefined;
            report = oscard.bind(tangon)(report);
            tangon = report.useStateFromStores;
            oscard = _closure1_slot3;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            michal = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.isVisualRefreshDisabled;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = tangon.bind(report)(zuuluu, michal);
            zuuluu = !entity;
            entity = !zuuluu;
            if(zuuluu) { _fun00004_ip = 116; continue _fun00003 }
 113:
            entity = !michal;
 116:
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = verify[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot2 = oscard;
    oscard = 1;
    oscard = verify[oscard];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 2;
    oscard = verify[oscard];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 3;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    offset = oscard.Storage;
    golfie = offset.get;
    oscard = 'desktop_refresh_enabled';
    offset = golfie.bind(offset)(oscard);
    golfie = 'true';
    golfie = golfie === offset;
    var _closure1_slot5 = golfie;
    golfie = 4;
    golfie = verify[golfie];
    yankee = option.bind(entity)(golfie);
    offset = yankee.createExperiment;
    golfie = {'id': '2024-05_desktop_visual_refresh', 'label': 'Desktop Visual Refresh', 'kind': 'user'};
    romeon = {'enabled': false, 'enableCollapsibleSidebar': false, 'newChatInput': false, 'disabledByDefault': true, 'canOptOut': false};
    golfie['defaultConfig'] = romeon;
    foxtra = {'id': 0, 'label': 'Control'};
    romeon = {'enabled': false, 'enableCollapsibleSidebar': false, 'newChatInput': false, 'disabledByDefault': true, 'canOptOut': false};
    foxtra['config'] = romeon;
    romeon = new Array(6);
    romeon[0] = foxtra;
    foxtra = {'id': 1, 'label': 'Refresh with New Chat Input'};
    backup = {'enabled': true, 'enableCollapsibleSidebar': false, 'newChatInput': true, 'disabledByDefault': false, 'canOptOut': false};
    foxtra['config'] = backup;
    romeon[1] = foxtra;
    foxtra = {'id': 2, 'label': 'Refresh with New Chat Input, Collapsible Sidebar'};
    backup = {'enabled': true, 'enableCollapsibleSidebar': true, 'newChatInput': true, 'disabledByDefault': false, 'canOptOut': false};
    foxtra['config'] = backup;
    romeon[2] = foxtra;
    foxtra = {'id': 3, 'label': 'Refresh with Legacy Chat Input'};
    backup = {'enabled': true, 'enableCollapsibleSidebar': false, 'newChatInput': false, 'disabledByDefault': false, 'canOptOut': false};
    foxtra['config'] = backup;
    romeon[3] = foxtra;
    foxtra = {'id': 4, 'label': 'Refresh with Legacy Chat Input, Collapsible Sidebar'};
    backup = {'enabled': true, 'enableCollapsibleSidebar': true, 'newChatInput': false, 'disabledByDefault': false, 'canOptOut': false};
    foxtra['config'] = backup;
    romeon[4] = foxtra;
    foxtra = {'id': 5, 'label': 'External Testers'};
    backup = {'enabled': true, 'enableCollapsibleSidebar': false, 'newChatInput': true, 'disabledByDefault': true, 'canOptOut': true};
    foxtra['config'] = backup;
    romeon[5] = foxtra;
    golfie['treatments'] = romeon;
    golfie = offset.bind(yankee)(golfie);
    var _closure1_slot6 = golfie;
    golfie = 6;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/design/DesktopVisualRefreshExperiment.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['DESKTOP_REFRESH_ENABLED_CACHE_KEY'] = oscard;
    oscard = function(argFoo) { // Original name: getIsDesktopRefreshEnabledCached
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = _closure1_slot2;
            entity = entity.hasLoadedExperiments;
            if(entity) { _fun00006_ip = 22; continue _fun00005 }
 16:
            entity = _closure1_slot5;
            _fun00006_ip = 36; continue _fun00005;
 22:
            tangon = _closure1_slot7;
            zuuluu = undefined;
            michal = argFoo;
            entity = tangon.bind(zuuluu)(michal);
 36:
            return entity;
        }
    };
    zuuluu['getIsDesktopRefreshEnabledCached'] = oscard;
    zuuluu['getIsDesktopRefreshEnabled'] = report;
    report = function(argFoo) { // Original name: useIsDesktopRefreshChatInputEnabled
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot8;
            entity = undefined;
            entity = tangon.bind(entity)(michal);
            report = _closure1_slot6;
            tangon = report.useExperiment;
            zuuluu = {};
            zuuluu['location'] = michal;
            michal = {};
            oscard = true;
            michal['autoTrackExposure'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            michal = michal.newChatInput;
            if(!entity) { _fun00008_ip = 60; continue _fun00007 }
 57:
            entity = michal;
 60:
            return entity;
        }
    };
    zuuluu['useIsDesktopRefreshChatInputEnabled'] = report;
    report = function(argFoo) { // Original name: getIsDesktopRefreshDisabledByDefault
        zuuluu = _closure1_slot6;
        michal = zuuluu.getCurrentConfig;
        entity = {};
        tangon = argFoo;
        entity['location'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = entity.disabledByDefault;
        return entity;
    };
    zuuluu['getIsDesktopRefreshDisabledByDefault'] = report;
    report = function(argFoo, argBar) { // Original name: subscribeToDesktopVisualRefreshExperiment
        tangon = _closure1_slot6;
        zuuluu = tangon.subscribe;
        michal = {};
        entity = argFoo;
        michal['location'] = entity;
        entity = argBar;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['subscribeToDesktopVisualRefreshExperiment'] = report;
    report = function(argFoo) { // Original name: useIsDesktopVisualRefreshExperimentEnabled
        tangon = _closure1_slot6;
        zuuluu = tangon.useExperiment;
        michal = {};
        entity = argFoo;
        michal['location'] = entity;
        entity = {};
        report = true;
        entity['autoTrackExposure'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = entity.enabled;
        return entity;
    };
    zuuluu['useIsDesktopVisualRefreshExperimentEnabled'] = report;
    zuuluu['useIsDesktopVisualRefreshEnabled'] = tangon;
    tangon = function(argFoo) { // Original name: useIsCollapsibleSidebarEnabled
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            tangon = _closure1_slot8;
            zuuluu = undefined;
            zuuluu = tangon.bind(zuuluu)(entity);
            report = _closure1_slot6;
            tangon = report.useExperiment;
            michal = {};
            michal['location'] = entity;
            entity = {};
            oscard = true;
            entity['autoTrackExposure'] = oscard;
            entity = tangon.bind(report)(michal, entity);
            michal = entity.enableCollapsibleSidebar;
            entity = !zuuluu;
            entity = !entity;
            if(!zuuluu) { _fun00010_ip = 66; continue _fun00009 }
 63:
            entity = michal;
 66:
            return entity;
        }
    };
    zuuluu['useIsCollapsibleSidebarEnabled'] = tangon;
    michal = function(argFoo) { // Original name: useCanOptOutOfDesktopVisualRefresh
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = _closure1_slot6;
            zuuluu = tangon.getCurrentConfig;
            michal = {};
            report = argFoo;
            michal['location'] = report;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.canOptOut;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 5;
            tangon = tangon[michal];
            michal = undefined;
            oscard = report.bind(michal)(tangon);
            report = oscard.useStateFromStores;
            entity = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure1_slot4;
                    entity = michal.getCurrentUser;
                    zuuluu = entity.bind(michal)();
                    report = null;
                    michal = report == zuuluu;
                    entity = undefined;
                    if(michal) { _fun00014_ip = 52; continue _fun00013 }
 27:
                    michal = zuuluu.isStaff;
                    michal = report == michal;
                    entity = undefined;
                    if(michal) { _fun00014_ip = 52; continue _fun00013 }
 42:
                    michal = zuuluu.isStaff;
                    entity = michal.bind(zuuluu)();
 52:
                    return entity;
                }
            };
            tangon = report.bind(oscard)(tangon, entity);
            entity = global;
            entity = entity.Boolean;
            if(zuuluu) { _fun00012_ip = 99; continue _fun00011 }
 96:
            zuuluu = tangon;
 99:
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    zuuluu['useCanOptOutOfDesktopVisualRefresh'] = michal;
    return entity;
})();