// app/modules/main_tabs_v2/native/settings/renderer/SettingRendererUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    report = function(argFoo) { // Original name: transformSettingTitle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = 'string';
            michal = typeof zuuluu;
            entity = zuuluu;
            if(!(tangon !== michal)) { _fun00002_ip = 23; continue _fun00001 }
 17:
            michal = undefined;
            entity = zuuluu.bind(michal)();
 23:
            return entity;
        }
    };
    var _closure1_slot8 = report;
    tangon = function(argFoo) { // Original name: getSettingTitle
        verify = argFoo;
        tangon = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 7;
        entity = oscard[entity];
        zuuluu = undefined;
        entity = tangon.bind(zuuluu)(entity);
        entity = entity.SETTING_RENDERER_CONFIG;
        entity = entity[verify];
        report = _closure1_slot1;
        tangon = 8;
        tangon = oscard[tangon];
        oscard = report.bind(zuuluu)(tangon);
        report = entity.title;
        tangon = null;
        report = tangon != report;
        tangon = global;
        tangon = tangon.HermesInternal;
        option = tangon.concat;
        golfie = 'Setting ';
        tangon = ' is missing a title.';
        tangon = option.bind(golfie)(verify, tangon);
        tangon = oscard.bind(zuuluu)(report, tangon);
        michal = _closure1_slot8;
        entity = entity.title;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot9 = tangon;
    entity = function(argFoo) { // Original name: getSearchResultIconComponent
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 7;
            zuuluu = zuuluu[entity];
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu);
            zuuluu = entity.SETTING_RENDERER_CONFIG;
            entity = argFoo;
            entity = zuuluu[entity];
            zuuluu = entity.type;
            tangon = _closure1_slot5;
            tangon = tangon.RADIO;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 107; continue _fun00003 }
 57:
            tangon = _closure1_slot5;
            tangon = tangon.CHECKBOX;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 107; continue _fun00003 }
 71:
            tangon = _closure1_slot5;
            tangon = tangon.VOLUME_SLIDER;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 107; continue _fun00003 }
 85:
            michal = _closure1_slot5;
            michal = michal.SLIDER;
            if(!(michal !== zuuluu)) { _fun00004_ip = 107; continue _fun00003 }
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
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.ListRendererType;
    var _closure1_slot4 = verify;
    verify = oscard.RendererType;
    var _closure1_slot5 = verify;
    oscard = oscard.SUPPORTED_SEARCH_RESULT_NO_PARENT_RENDERER_TYPES;
    var _closure1_slot6 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.AnalyticsPages;
    var _closure1_slot7 = oscard;
    oscard = 11;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/main_tabs_v2/native/settings/renderer/SettingRendererUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: onRouteSettingOnPress
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.navigation;
            var _closure2_slot0 = zuuluu;
            zuuluu = michal.screen;
            var _closure2_slot1 = zuuluu;
            zuuluu = michal.preNavigationAction;
            michal = function() { // Original name: goToScreen
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = function() { // Original name: onPress
                        zuuluu = _closure1_slot1;
                        oscard = _closure1_slot2;
                        entity = 3;
                        michal = oscard[entity];
                        entity = undefined;
                        golfie = zuuluu.bind(entity)(michal);
                        report = golfie.setSection;
                        michal = _closure2_slot1;
                        tangon = michal.route;
                        tangon = report.bind(golfie)(tangon);
                        report = _closure1_slot0;
                        tangon = 4;
                        tangon = oscard[tangon];
                        golfie = report.bind(entity)(tangon);
                        oscard = golfie.trackPaneViewed;
                        report = michal.route;
                        tangon = {};
                        option = _closure1_slot7;
                        option = option.USER_SETTINGS;
                        tangon['page'] = option;
                        tangon = oscard.bind(golfie)(report, tangon);
                        tangon = _closure2_slot0;
                        zuuluu = tangon.navigate;
                        michal = michal.route;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    var _closure3_slot0 = report;
                    zuuluu = _closure1_slot3;
                    zuuluu = zuuluu.keyboardOpen;
                    if(!zuuluu) { _fun00008_ip = 64; continue _fun00007 }
 29:
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = tangon[zuuluu];
                    tangon = undefined;
                    oscard = oscard.bind(tangon)(zuuluu);
                    zuuluu = oscard.isIOS;
                    zuuluu = zuuluu.bind(oscard)();
                    if(zuuluu) { _fun00008_ip = 72; continue _fun00007 }
 64:
                    zuuluu = undefined;
                    zuuluu = report.bind(zuuluu)();
                    _fun00008_ip = 126; continue _fun00007;
 72:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 6;
                    michal = report[michal];
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.dismissGlobalKeyboard;
                    michal = michal.bind(zuuluu)();
                    michal = global;
                    zuuluu = michal.setTimeout;
                    michal = function() {
                        michal = _closure3_slot0;
                        entity = undefined;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    entity = 100;
                    entity = zuuluu.bind(tangon)(michal, entity);
 126:
                    entity = undefined;
                    return entity;
                }
            };
            entity = null;
            report = entity == zuuluu;
            entity = undefined;
            tangon = undefined;
            if(report) { _fun00006_ip = 56; continue _fun00005 }
 51:
            tangon = zuuluu.bind(entity)(michal);
 56:
            zuuluu = false;
            if(!(zuuluu !== tangon)) { _fun00006_ip = 66; continue _fun00005 }
 62:
            michal = michal.bind(entity)();
 66:
            return entity;
        }
    };
    zuuluu['onRouteSettingOnPress'] = oscard;
    zuuluu['transformSettingTitle'] = report;
    zuuluu['getSettingTitle'] = tangon;
    tangon = function() { // Original name: getSettingSearchableTitles
        entity = global;
        tangon = entity.Object;
        zuuluu = tangon.entries;
        oscard = _closure1_slot0;
        report = _closure1_slot2;
        entity = 7;
        report = report[entity];
        entity = undefined;
        entity = oscard.bind(entity)(report);
        entity = entity.SETTING_RENDERER_CONFIG;
        tangon = zuuluu.bind(tangon)(entity);
        entity = new Array(0);
        var _closure2_slot0 = entity;
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                oscard = argFoo;
                michal = oscard[Symbol.iterator];
                oscard = michal().next;
                zuuluu = oscard().value;
                tangon = michal;
                entity = undefined;
                tangon = tangon === entity;
                report = undefined;
                if(tangon) { _fun00010_ip = 27; continue _fun00009 }
 24:
                report = zuuluu;
 27:
                zuuluu = undefined;
                if(tangon) { _fun00010_ip = 57; continue _fun00009 }
 32:
                golfie = oscard().value;
                oscard = michal;
                oscard = oscard === entity;
                zuuluu = undefined;
                tangon = oscard;
                if(oscard) { _fun00010_ip = 57; continue _fun00009 }
 51:
                zuuluu = golfie;
                tangon = oscard;
 57:
                if(tangon) { _fun00010_ip = 63; continue _fun00009 }
 60:
                michal.return();
 63:
                michal = zuuluu.unsearchable;
                golfie = zuuluu.title;
                oscard = zuuluu.additionalSearchTerms;
                if(michal) { _fun00010_ip = 89; continue _fun00009 }
 83:
                zuuluu = null;
                michal = zuuluu == golfie;
 89:
                if(michal) { _fun00010_ip = 194; continue _fun00009 }
 92:
                tangon = _closure2_slot0;
                zuuluu = tangon.push;
                michal = new Array(2);
                michal[0] = report;
                report = _closure1_slot8;
                golfie = report.bind(entity)(golfie);
                report = new Array(1);
                report[0] = golfie;
                golfie = null;
                if(!(golfie != oscard)) { _fun00010_ip = 168; continue _fun00009 }
 138:
                golfie = global;
                option = golfie.Array;
                golfie = option.isArray;
                option = golfie.bind(option)(oscard);
                golfie = oscard;
                if(option) { _fun00010_ip = 166; continue _fun00009 }
 162:
                golfie = oscard.bind(entity)();
 166:
                _fun00010_ip = 172; continue _fun00009;
 168:
                golfie = new Array(0);
 172:
                verify = 1;
                yankee = report;
                offset = golfie;
                oscard = arraySpread(yankee, offset, verify);
                michal[1] = report;
                michal = zuuluu.bind(tangon)(michal);
 194:
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['getSettingSearchableTitles'] = tangon;
    tangon = function() { // Original name: getSettingScreens
        entity = new Array(0);
        var _closure2_slot0 = entity;
        zuuluu = global;
        tangon = zuuluu.Set;
        report = tangon.prototype;
        report = Object.create(report, {constructor: {value: tangon}});
        verify = report;
        tangon = new verify[tangon](option);
        tangon = tangon instanceof Object ? tangon : report;
        var _closure2_slot1 = tangon;
        report = zuuluu.Object;
        tangon = report.entries;
        golfie = _closure1_slot0;
        oscard = _closure1_slot2;
        zuuluu = 7;
        oscard = oscard[zuuluu];
        zuuluu = undefined;
        zuuluu = golfie.bind(zuuluu)(oscard);
        zuuluu = zuuluu.SETTING_RENDERER_CONFIG;
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                zuuluu = report[Symbol.iterator];
                report = zuuluu().next;
                michal = report().value;
                tangon = zuuluu;
                entity = undefined;
                tangon = tangon === entity;
                golfie = undefined;
                if(tangon) { _fun00012_ip = 27; continue _fun00011 }
 24:
                golfie = michal;
 27:
                michal = undefined;
                if(tangon) { _fun00012_ip = 57; continue _fun00011 }
 32:
                oscard = report().value;
                report = zuuluu;
                report = report === entity;
                michal = undefined;
                tangon = report;
                if(report) { _fun00012_ip = 57; continue _fun00011 }
 51:
                michal = oscard;
                tangon = report;
 57:
                if(tangon) { _fun00012_ip = 63; continue _fun00011 }
 60:
                zuuluu.return();
 63:
                tangon = michal.type;
                zuuluu = _closure1_slot5;
                zuuluu = zuuluu.ROUTE;
                if(!(tangon === zuuluu)) { _fun00012_ip = 175; continue _fun00011 }
 85:
                oscard = _closure2_slot1;
                report = oscard.has;
                tangon = michal.screen;
                tangon = tangon.route;
                tangon = report.bind(oscard)(tangon);
                if(tangon) { _fun00012_ip = 175; continue _fun00011 }
 117:
                oscard = _closure2_slot0;
                report = oscard.push;
                tangon = new Array(2);
                tangon[0] = golfie;
                golfie = michal.screen;
                tangon[1] = golfie;
                tangon = report.bind(oscard)(tangon);
                tangon = _closure2_slot1;
                zuuluu = tangon.add;
                michal = michal.screen;
                michal = michal.route;
                michal = zuuluu.bind(tangon)(michal);
 175:
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['getSettingScreens'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getSettingListItems
        tangon = argFoo;
        entity = argBar;
        var _closure2_slot0 = entity;
        entity = new Array(0);
        var _closure2_slot1 = entity;
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = argFoo;
                report = tangon.settings;
                zuuluu = report.filter;
                entity = function(argFoo) {
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 9;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.isBlocked;
                    michal = _closure2_slot0;
                    entity = argFoo;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    entity = !entity;
                    return entity;
                };
                oscard = zuuluu.bind(report)(entity);
                var _closure3_slot0 = oscard;
                zuuluu = oscard.length;
                entity = 0;
                if(!(entity !== zuuluu)) { _fun00014_ip = 158; continue _fun00013 }
 43:
                option = _closure2_slot1;
                golfie = option.push;
                zuuluu = {};
                verify = _closure1_slot4;
                verify = verify.SECTION_LABEL;
                zuuluu['type'] = verify;
                verify = tangon.label;
                zuuluu['label'] = verify;
                zuuluu = golfie.bind(option)(zuuluu);
                zuuluu = oscard.forEach;
                michal = function(argFoo, argBar) {
                    golfie = argFoo;
                    oscard = argBar;
                    tangon = _closure2_slot1;
                    zuuluu = tangon.push;
                    michal = {};
                    report = _closure1_slot4;
                    report = report.SETTING;
                    michal['type'] = report;
                    michal['setting'] = golfie;
                    option = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 7;
                    report = report[entity];
                    entity = undefined;
                    report = option.bind(entity)(report);
                    report = report.SETTING_RENDERER_CONFIG;
                    report = report[golfie];
                    michal['settingData'] = report;
                    report = 0;
                    report = report === oscard;
                    michal['start'] = report;
                    report = _closure3_slot0;
                    golfie = report.length;
                    report = 1;
                    report = golfie - report;
                    report = oscard === report;
                    michal['end'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = zuuluu.bind(oscard)(michal);
                zuuluu = tangon.subLabel;
                michal = null;
                if(!(michal != zuuluu)) { _fun00014_ip = 158; continue _fun00013 }
 117:
                zuuluu = _closure2_slot1;
                michal = zuuluu.push;
                entity = {};
                report = _closure1_slot4;
                report = report.SECTION_SUBLABEL;
                entity['type'] = report;
                tangon = tangon.subLabel;
                entity['subLabel'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 158:
                entity = undefined;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['getSettingListItems'] = tangon;
    tangon = function(argFoo) { // Original name: getSettingListSearchResultItems
        tangon = argFoo;
        report = new Array(0);
        var _closure2_slot0 = report;
        zuuluu = tangon.forEach;
        entity = function(argFoo) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscard = argFoo;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 7;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = zuuluu.SETTING_RENDERER_CONFIG;
                golfie = zuuluu[oscard];
                tangon = golfie.parent;
                zuuluu = null;
                if(!(zuuluu == tangon)) { _fun00016_ip = 107; continue _fun00015 }
 49:
                report = _closure1_slot6;
                tangon = report.has;
                zuuluu = golfie.type;
                zuuluu = tangon.bind(report)(zuuluu);
                if(zuuluu) { _fun00016_ip = 73; continue _fun00015 }
 71:
                return entity;
 73:
                report = _closure2_slot0;
                tangon = report.push;
                zuuluu = {};
                zuuluu['category'] = oscard;
                zuuluu['setting'] = oscard;
                zuuluu['data'] = golfie;
                zuuluu = tangon.bind(report)(zuuluu);
                _fun00016_ip = 194; continue _fun00015;
 107:
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 9;
                report = tangon[michal];
                golfie = zuuluu.bind(entity)(report);
                report = golfie.getHighestLevelAncestor;
                golfie = report.bind(golfie)(oscard);
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getNearestRouteAncestorDataOrSelf;
                report = michal.bind(zuuluu)(oscard);
                tangon = _closure2_slot0;
                zuuluu = tangon.push;
                michal = {};
                michal['category'] = golfie;
                michal['setting'] = oscard;
                michal['data'] = report;
                michal = zuuluu.bind(tangon)(michal);
 194:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity);
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 10;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.sortBy;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.category;
            return entity;
        };
        tangon = zuuluu.bind(tangon)(report, entity);
        var _closure2_slot1 = tangon;
        entity = new Array(0);
        var _closure2_slot2 = entity;
        zuuluu = global;
        zuuluu = zuuluu.Set;
        report = zuuluu.prototype;
        report = Object.create(report, {constructor: {value: zuuluu}});
        option = report;
        zuuluu = new option[zuuluu](golfie);
        zuuluu = zuuluu instanceof Object ? zuuluu : report;
        var _closure2_slot3 = zuuluu;
        zuuluu = tangon.forEach;
        michal = function(argFoo, argBar) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                offset = entity.category;
                oscard = entity.setting;
                romeon = entity.data;
                michal = _closure1_slot9;
                entity = undefined;
                option = michal.bind(entity)(oscard);
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 9;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getBreadcrumbs;
                golfie = michal.bind(zuuluu)(oscard);
                zuuluu = _closure2_slot3;
                michal = zuuluu.has;
                michal = michal.bind(zuuluu)(offset);
                yankee = !michal;
                michal = zuuluu.add;
                michal = michal.bind(zuuluu)(offset);
                tangon = _closure2_slot2;
                zuuluu = tangon.push;
                michal = {};
                foxtra = _closure1_slot4;
                foxtra = foxtra.SETTING_SEARCH_RESULT;
                michal['type'] = foxtra;
                michal['searchResultData'] = romeon;
                michal['title'] = option;
                option = undefined;
                if(!yankee) { _fun00018_ip = 144; continue _fun00017 }
 135:
                verify = _closure1_slot10;
                option = verify.bind(entity)(offset);
 144:
                michal['IconComponent'] = option;
                michal['breadcrumbs'] = golfie;
                michal['setting'] = oscard;
                oscard = argBar;
                michal['index'] = oscard;
                report = _closure2_slot1;
                report = report.length;
                michal['total'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['getSettingListSearchResultItems'] = tangon;
    michal = function(argFoo, argBar) { // Original name: getInitialScrollIndex
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zuuluu = argBar;
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = zuuluu.findLastIndex;
            entity = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.type;
                    entity = _closure1_slot4;
                    entity = entity.SETTING;
                    entity = zuuluu === entity;
                    if(!entity) { _fun00022_ip = 45; continue _fun00021 }
 28:
                    zuuluu = michal.setting;
                    michal = _closure2_slot0;
                    entity = zuuluu === michal;
 45:
                    return entity;
                }
            };
            tangon = michal.bind(zuuluu)(entity);
            entity = 1;
            if(!(entity === tangon)) { _fun00020_ip = 41; continue _fun00019 }
 37:
            entity = undefined;
            return entity;
 41:
            entity = global;
            zuuluu = entity.Math;
            michal = zuuluu.max;
            entity = 0;
            entity = michal.bind(zuuluu)(entity, tangon);
            return entity;
        }
    };
    zuuluu['getInitialScrollIndex'] = michal;
    return entity;
})();