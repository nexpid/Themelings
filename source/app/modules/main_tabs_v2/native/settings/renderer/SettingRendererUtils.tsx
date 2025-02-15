// app/modules/main_tabs_v2/native/settings/renderer/SettingRendererUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    report = function(argFoo) { // Original name: transformSettingTitle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            tango = 'string';
            mike = typeof zulu;
            entity = zulu;
            if(!(tango !== mike)) { _fun00002_ip = 23; continue _fun00001 }
 17:
            mike = undefined;
            entity = zulu.bind(mike)();
 23:
            return entity;
        }
    };
    var _closure1_slot8 = report;
    tango = function(argFoo) { // Original name: getSettingTitle
        verify = argFoo;
        tango = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 7;
        entity = oscar[entity];
        zulu = undefined;
        entity = tango.bind(zulu)(entity);
        entity = entity.SETTING_RENDERER_CONFIG;
        entity = entity[verify];
        report = _closure1_slot1;
        tango = 8;
        tango = oscar[tango];
        oscar = report.bind(zulu)(tango);
        report = entity.title;
        tango = null;
        report = tango != report;
        tango = global;
        tango = tango.HermesInternal;
        options = tango.concat;
        golf = 'Setting ';
        tango = ' is missing a title.';
        tango = options.bind(golf)(verify, tango);
        tango = oscar.bind(zulu)(report, tango);
        mike = _closure1_slot8;
        entity = entity.title;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot9 = tango;
    entity = function(argFoo) { // Original name: getSearchResultIconComponent
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 7;
            zulu = zulu[entity];
            entity = undefined;
            entity = tango.bind(entity)(zulu);
            zulu = entity.SETTING_RENDERER_CONFIG;
            entity = argFoo;
            entity = zulu[entity];
            zulu = entity.type;
            tango = _closure1_slot5;
            tango = tango.RADIO;
            if(!(tango !== zulu)) { _fun00004_ip = 107; continue _fun00003 }
 57:
            tango = _closure1_slot5;
            tango = tango.CHECKBOX;
            if(!(tango !== zulu)) { _fun00004_ip = 107; continue _fun00003 }
 71:
            tango = _closure1_slot5;
            tango = tango.VOLUME_SLIDER;
            if(!(tango !== zulu)) { _fun00004_ip = 107; continue _fun00003 }
 85:
            mike = _closure1_slot5;
            mike = mike.SLIDER;
            if(!(mike !== zulu)) { _fun00004_ip = 107; continue _fun00003 }
 99:
            entity = entity.IconComponent;
            return entity;
 107:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.ListRendererType;
    var _closure1_slot4 = verify;
    verify = oscar.RendererType;
    var _closure1_slot5 = verify;
    oscar = oscar.SUPPORTED_SEARCH_RESULT_NO_PARENT_RENDERER_TYPES;
    var _closure1_slot6 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.AnalyticsPages;
    var _closure1_slot7 = oscar;
    oscar = 11;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/main_tabs_v2/native/settings/renderer/SettingRendererUtils.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo) { // Original name: onRouteSettingOnPress
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            zulu = mike.navigation;
            var _closure2_slot0 = zulu;
            zulu = mike.screen;
            var _closure2_slot1 = zulu;
            zulu = mike.preNavigationAction;
            mike = function() { // Original name: goToScreen
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = function() { // Original name: onPress
                        zulu = _closure1_slot1;
                        oscar = _closure1_slot2;
                        entity = 3;
                        mike = oscar[entity];
                        entity = undefined;
                        golf = zulu.bind(entity)(mike);
                        report = golf.setSection;
                        mike = _closure2_slot1;
                        tango = mike.route;
                        tango = report.bind(golf)(tango);
                        report = _closure1_slot0;
                        tango = 4;
                        tango = oscar[tango];
                        golf = report.bind(entity)(tango);
                        oscar = golf.trackPaneViewed;
                        report = mike.route;
                        tango = {};
                        options = _closure1_slot7;
                        options = options.USER_SETTINGS;
                        tango['page'] = options;
                        tango = oscar.bind(golf)(report, tango);
                        tango = _closure2_slot0;
                        zulu = tango.navigate;
                        mike = mike.route;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    var _closure3_slot0 = report;
                    zulu = _closure1_slot3;
                    zulu = zulu.keyboardOpen;
                    if(!zulu) { _fun00008_ip = 64; continue _fun00007 }
 29:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 5;
                    zulu = tango[zulu];
                    tango = undefined;
                    oscar = oscar.bind(tango)(zulu);
                    zulu = oscar.isIOS;
                    zulu = zulu.bind(oscar)();
                    if(zulu) { _fun00008_ip = 72; continue _fun00007 }
 64:
                    zulu = undefined;
                    zulu = report.bind(zulu)();
                    _fun00008_ip = 126; continue _fun00007;
 72:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 6;
                    mike = report[mike];
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.dismissGlobalKeyboard;
                    mike = mike.bind(zulu)();
                    mike = global;
                    zulu = mike.setTimeout;
                    mike = function() {
                        mike = _closure3_slot0;
                        entity = undefined;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    entity = 100;
                    entity = zulu.bind(tango)(mike, entity);
 126:
                    entity = undefined;
                    return entity;
                }
            };
            entity = null;
            report = entity == zulu;
            entity = undefined;
            tango = undefined;
            if(report) { _fun00006_ip = 56; continue _fun00005 }
 51:
            tango = zulu.bind(entity)(mike);
 56:
            zulu = false;
            if(!(zulu !== tango)) { _fun00006_ip = 66; continue _fun00005 }
 62:
            mike = mike.bind(entity)();
 66:
            return entity;
        }
    };
    zulu['onRouteSettingOnPress'] = oscar;
    zulu['transformSettingTitle'] = report;
    zulu['getSettingTitle'] = tango;
    tango = function() { // Original name: getSettingSearchableTitles
        entity = global;
        tango = entity.Object;
        zulu = tango.entries;
        oscar = _closure1_slot0;
        report = _closure1_slot2;
        entity = 7;
        report = report[entity];
        entity = undefined;
        entity = oscar.bind(entity)(report);
        entity = entity.SETTING_RENDERER_CONFIG;
        tango = zulu.bind(tango)(entity);
        entity = new Array(0);
        var _closure2_slot0 = entity;
        zulu = tango.forEach;
        mike = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                oscar = argFoo;
                mike = oscar[Symbol.iterator];
                oscar = mike().next;
                zulu = oscar().value;
                tango = mike;
                entity = undefined;
                tango = tango === entity;
                report = undefined;
                if(tango) { _fun00010_ip = 27; continue _fun00009 }
 24:
                report = zulu;
 27:
                zulu = undefined;
                if(tango) { _fun00010_ip = 57; continue _fun00009 }
 32:
                golf = oscar().value;
                oscar = mike;
                oscar = oscar === entity;
                zulu = undefined;
                tango = oscar;
                if(oscar) { _fun00010_ip = 57; continue _fun00009 }
 51:
                zulu = golf;
                tango = oscar;
 57:
                if(tango) { _fun00010_ip = 63; continue _fun00009 }
 60:
                mike.return();
 63:
                mike = zulu.unsearchable;
                golf = zulu.title;
                oscar = zulu.additionalSearchTerms;
                if(mike) { _fun00010_ip = 89; continue _fun00009 }
 83:
                zulu = null;
                mike = zulu == golf;
 89:
                if(mike) { _fun00010_ip = 194; continue _fun00009 }
 92:
                tango = _closure2_slot0;
                zulu = tango.push;
                mike = new Array(2);
                mike[0] = report;
                report = _closure1_slot8;
                golf = report.bind(entity)(golf);
                report = new Array(1);
                report[0] = golf;
                golf = null;
                if(!(golf != oscar)) { _fun00010_ip = 168; continue _fun00009 }
 138:
                golf = global;
                options = golf.Array;
                golf = options.isArray;
                options = golf.bind(options)(oscar);
                golf = oscar;
                if(options) { _fun00010_ip = 166; continue _fun00009 }
 162:
                golf = oscar.bind(entity)();
 166:
                _fun00010_ip = 172; continue _fun00009;
 168:
                golf = new Array(0);
 172:
                verify = 1;
                yankee = report;
                offset = golf;
                oscar = arraySpread(yankee, offset, verify);
                mike[1] = report;
                mike = zulu.bind(tango)(mike);
 194:
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['getSettingSearchableTitles'] = tango;
    tango = function() { // Original name: getSettingScreens
        entity = new Array(0);
        var _closure2_slot0 = entity;
        zulu = global;
        tango = zulu.Set;
        report = tango.prototype;
        report = Object.create(report, {constructor: {value: tango}});
        verify = report;
        tango = new verify[tango](options);
        tango = tango instanceof Object ? tango : report;
        var _closure2_slot1 = tango;
        report = zulu.Object;
        tango = report.entries;
        golf = _closure1_slot0;
        oscar = _closure1_slot2;
        zulu = 7;
        oscar = oscar[zulu];
        zulu = undefined;
        zulu = golf.bind(zulu)(oscar);
        zulu = zulu.SETTING_RENDERER_CONFIG;
        tango = tango.bind(report)(zulu);
        zulu = tango.forEach;
        mike = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                zulu = report[Symbol.iterator];
                report = zulu().next;
                mike = report().value;
                tango = zulu;
                entity = undefined;
                tango = tango === entity;
                golf = undefined;
                if(tango) { _fun00012_ip = 27; continue _fun00011 }
 24:
                golf = mike;
 27:
                mike = undefined;
                if(tango) { _fun00012_ip = 57; continue _fun00011 }
 32:
                oscar = report().value;
                report = zulu;
                report = report === entity;
                mike = undefined;
                tango = report;
                if(report) { _fun00012_ip = 57; continue _fun00011 }
 51:
                mike = oscar;
                tango = report;
 57:
                if(tango) { _fun00012_ip = 63; continue _fun00011 }
 60:
                zulu.return();
 63:
                tango = mike.type;
                zulu = _closure1_slot5;
                zulu = zulu.ROUTE;
                if(!(tango === zulu)) { _fun00012_ip = 175; continue _fun00011 }
 85:
                oscar = _closure2_slot1;
                report = oscar.has;
                tango = mike.screen;
                tango = tango.route;
                tango = report.bind(oscar)(tango);
                if(tango) { _fun00012_ip = 175; continue _fun00011 }
 117:
                oscar = _closure2_slot0;
                report = oscar.push;
                tango = new Array(2);
                tango[0] = golf;
                golf = mike.screen;
                tango[1] = golf;
                tango = report.bind(oscar)(tango);
                tango = _closure2_slot1;
                zulu = tango.add;
                mike = mike.screen;
                mike = mike.route;
                mike = zulu.bind(tango)(mike);
 175:
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['getSettingScreens'] = tango;
    tango = function(argFoo, argBar) { // Original name: getSettingListItems
        tango = argFoo;
        entity = argBar;
        var _closure2_slot0 = entity;
        entity = new Array(0);
        var _closure2_slot1 = entity;
        zulu = tango.forEach;
        mike = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tango = argFoo;
                report = tango.settings;
                zulu = report.filter;
                entity = function(argFoo) {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 9;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.isBlocked;
                    mike = _closure2_slot0;
                    entity = argFoo;
                    entity = zulu.bind(tango)(entity, mike);
                    entity = !entity;
                    return entity;
                };
                oscar = zulu.bind(report)(entity);
                var _closure3_slot0 = oscar;
                zulu = oscar.length;
                entity = 0;
                if(!(entity !== zulu)) { _fun00014_ip = 158; continue _fun00013 }
 43:
                options = _closure2_slot1;
                golf = options.push;
                zulu = {};
                verify = _closure1_slot4;
                verify = verify.SECTION_LABEL;
                zulu['type'] = verify;
                verify = tango.label;
                zulu['label'] = verify;
                zulu = golf.bind(options)(zulu);
                zulu = oscar.forEach;
                mike = function(argFoo, argBar) {
                    golf = argFoo;
                    oscar = argBar;
                    tango = _closure2_slot1;
                    zulu = tango.push;
                    mike = {};
                    report = _closure1_slot4;
                    report = report.SETTING;
                    mike['type'] = report;
                    mike['setting'] = golf;
                    options = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 7;
                    report = report[entity];
                    entity = undefined;
                    report = options.bind(entity)(report);
                    report = report.SETTING_RENDERER_CONFIG;
                    report = report[golf];
                    mike['settingData'] = report;
                    report = 0;
                    report = report === oscar;
                    mike['start'] = report;
                    report = _closure3_slot0;
                    golf = report.length;
                    report = 1;
                    report = golf - report;
                    report = oscar === report;
                    mike['end'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike = zulu.bind(oscar)(mike);
                zulu = tango.subLabel;
                mike = null;
                if(!(mike != zulu)) { _fun00014_ip = 158; continue _fun00013 }
 117:
                zulu = _closure2_slot1;
                mike = zulu.push;
                entity = {};
                report = _closure1_slot4;
                report = report.SECTION_SUBLABEL;
                entity['type'] = report;
                tango = tango.subLabel;
                entity['subLabel'] = tango;
                entity = mike.bind(zulu)(entity);
 158:
                entity = undefined;
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['getSettingListItems'] = tango;
    tango = function(argFoo) { // Original name: getSettingListSearchResultItems
        tango = argFoo;
        report = new Array(0);
        var _closure2_slot0 = report;
        zulu = tango.forEach;
        entity = function(argFoo) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscar = argFoo;
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 7;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.SETTING_RENDERER_CONFIG;
                golf = zulu[oscar];
                tango = golf.parent;
                zulu = null;
                if(!(zulu == tango)) { _fun00016_ip = 107; continue _fun00015 }
 49:
                report = _closure1_slot6;
                tango = report.has;
                zulu = golf.type;
                zulu = tango.bind(report)(zulu);
                if(zulu) { _fun00016_ip = 73; continue _fun00015 }
 71:
                return entity;
 73:
                report = _closure2_slot0;
                tango = report.push;
                zulu = {};
                zulu['category'] = oscar;
                zulu['setting'] = oscar;
                zulu['data'] = golf;
                zulu = tango.bind(report)(zulu);
                _fun00016_ip = 194; continue _fun00015;
 107:
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 9;
                report = tango[mike];
                golf = zulu.bind(entity)(report);
                report = golf.getHighestLevelAncestor;
                golf = report.bind(golf)(oscar);
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.getNearestRouteAncestorDataOrSelf;
                report = mike.bind(zulu)(oscar);
                tango = _closure2_slot0;
                zulu = tango.push;
                mike = {};
                mike['category'] = golf;
                mike['setting'] = oscar;
                mike['data'] = report;
                mike = zulu.bind(tango)(mike);
 194:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity);
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 10;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.sortBy;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.category;
            return entity;
        };
        tango = zulu.bind(tango)(report, entity);
        var _closure2_slot1 = tango;
        entity = new Array(0);
        var _closure2_slot2 = entity;
        zulu = global;
        zulu = zulu.Set;
        report = zulu.prototype;
        report = Object.create(report, {constructor: {value: zulu}});
        options = report;
        zulu = new options[zulu](golf);
        zulu = zulu instanceof Object ? zulu : report;
        var _closure2_slot3 = zulu;
        zulu = tango.forEach;
        mike = function(argFoo, argBar) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                offset = entity.category;
                oscar = entity.setting;
                romeo = entity.data;
                mike = _closure1_slot9;
                entity = undefined;
                options = mike.bind(entity)(oscar);
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 9;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.getBreadcrumbs;
                golf = mike.bind(zulu)(oscar);
                zulu = _closure2_slot3;
                mike = zulu.has;
                mike = mike.bind(zulu)(offset);
                yankee = !mike;
                mike = zulu.add;
                mike = mike.bind(zulu)(offset);
                tango = _closure2_slot2;
                zulu = tango.push;
                mike = {};
                foxtrot = _closure1_slot4;
                foxtrot = foxtrot.SETTING_SEARCH_RESULT;
                mike['type'] = foxtrot;
                mike['searchResultData'] = romeo;
                mike['title'] = options;
                options = undefined;
                if(!yankee) { _fun00018_ip = 144; continue _fun00017 }
 135:
                verify = _closure1_slot10;
                options = verify.bind(entity)(offset);
 144:
                mike['IconComponent'] = options;
                mike['breadcrumbs'] = golf;
                mike['setting'] = oscar;
                oscar = argBar;
                mike['index'] = oscar;
                report = _closure2_slot1;
                report = report.length;
                mike['total'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['getSettingListSearchResultItems'] = tango;
    mike = function(argFoo, argBar) { // Original name: getInitialScrollIndex
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zulu = argBar;
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = zulu.findLastIndex;
            entity = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.type;
                    entity = _closure1_slot4;
                    entity = entity.SETTING;
                    entity = zulu === entity;
                    if(!entity) { _fun00022_ip = 45; continue _fun00021 }
 28:
                    zulu = mike.setting;
                    mike = _closure2_slot0;
                    entity = zulu === mike;
 45:
                    return entity;
                }
            };
            tango = mike.bind(zulu)(entity);
            entity = 1;
            if(!(entity === tango)) { _fun00020_ip = 41; continue _fun00019 }
 37:
            entity = undefined;
            return entity;
 41:
            entity = global;
            zulu = entity.Math;
            mike = zulu.max;
            entity = 0;
            entity = mike.bind(zulu)(entity, tango);
            return entity;
        }
    };
    zulu['getInitialScrollIndex'] = mike;
    return entity;
})();