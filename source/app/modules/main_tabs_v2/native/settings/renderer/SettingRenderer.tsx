// app/modules/main_tabs_v2/native/settings/renderer/SettingRenderer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: formatSettingsRowTrailing
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            entity = null;
            if(!(entity == oscard)) { _fun00002_ip = 13; continue _fun00001 }
 9:
            entity = undefined;
            return entity;
 13:
            zuuluu = 'string';
            michal = typeof oscard;
            entity = oscard;
            if(!(zuuluu === michal)) { _fun00002_ip = 80; continue _fun00001 }
 27:
            report = _closure1_slot17;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 13;
            michal = tangon[michal];
            tangon = undefined;
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.TableRow;
            zuuluu = michal.TrailingText;
            michal = {};
            michal['text'] = oscard;
            entity = report.bind(tangon)(zuuluu, michal);
 80:
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo) { // Original name: SettingSearchResultBreadcrumbs
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            option = entity.breadcrumbs;
            zuuluu = option.length;
            michal = 0;
            entity = null;
            if(!(michal !== zuuluu)) { _fun00004_ip = 96; continue _fun00003 }
 22:
            report = _closure1_slot17;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 35;
            michal = tangon[michal];
            tangon = undefined;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.Text;
            michal = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            golfie = option.join;
            oscard = ' → ';
            oscard = golfie.bind(option)(oscard);
            michal['children'] = oscard;
            entity = report.bind(tangon)(zuuluu, michal);
 96:
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: SettingSearchResultIcon
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            report = entity.IconComponent;
            entity = null;
            if(!(entity != report)) { _fun00006_ip = 71; continue _fun00005 }
 15:
            tangon = _closure1_slot17;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 13;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = michal.bind(zuuluu)(entity);
            entity = entity.TableRow;
            michal = entity.Icon;
            entity = {};
            entity['IconComponent'] = report;
            entity = tangon.bind(zuuluu)(michal, entity);
            _fun00006_ip = 106; continue _fun00005;
 71:
            report = _closure1_slot17;
            tangon = _closure1_slot8;
            zuuluu = {};
            michal = {};
            oscard = _closure1_slot15;
            michal['width'] = oscard;
            zuuluu['style'] = michal;
            michal = undefined;
            entity = report.bind(michal)(tangon, zuuluu);
 106:
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo) { // Original name: RouteSettingSearchResult
        michal = argFoo;
        zuuluu = michal.searchResultData;
        romeon = michal.IconComponent;
        verify = michal.title;
        var _closure2_slot0 = verify;
        offset = michal.breadcrumbs;
        backup = michal.setting;
        var _closure2_slot1 = backup;
        oscard = michal.index;
        var _closure2_slot2 = oscard;
        golfie = michal.total;
        var _closure2_slot3 = golfie;
        michal = _closure1_slot0;
        yankee = _closure1_slot2;
        tangon = 14;
        option = yankee[tangon];
        tangon = undefined;
        foxtra = michal.bind(tangon)(option);
        option = foxtra.useStackNavigation;
        sizing = option.bind(foxtra)();
        var _closure2_slot4 = sizing;
        kiloes = zuuluu.screen;
        var _closure2_slot5 = kiloes;
        output = zuuluu.preNavigationAction;
        var _closure2_slot6 = output;
        foxtra = _closure1_slot7;
        option = foxtra.useCallback;
        zuuluu = new Array(7);
        zuuluu[0] = output;
        zuuluu[1] = oscard;
        zuuluu[2] = sizing;
        zuuluu[3] = kiloes;
        zuuluu[4] = backup;
        zuuluu[5] = verify;
        zuuluu[6] = golfie;
        entity = function() {
            michal = _closure1_slot11;
            oscard = _closure2_slot1;
            entity = undefined;
            michal = michal.bind(entity)(oscard);
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 41;
            michal = tangon[michal];
            option = zuuluu.bind(entity)(michal);
            golfie = option.trackSettingSearchResultPress;
            michal = {};
            michal['setting'] = oscard;
            oscard = _closure2_slot0;
            michal['title'] = oscard;
            oscard = _closure2_slot5;
            offset = oscard.route;
            michal['route'] = offset;
            verify = _closure1_slot10;
            verify = verify.bind(entity)();
            michal['searchTerm'] = verify;
            verify = _closure2_slot2;
            michal['searchResultPosition'] = verify;
            verify = _closure2_slot3;
            michal['numSearchResults'] = verify;
            michal = golfie.bind(option)(michal);
            michal = 16;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.onRouteSettingOnPress;
            michal = {};
            golfie = _closure2_slot4;
            michal['navigation'] = golfie;
            michal['screen'] = oscard;
            report = _closure2_slot6;
            michal['preNavigationAction'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        option = option.bind(foxtra)(entity, zuuluu);
        zuuluu = _closure1_slot17;
        entity = 13;
        entity = yankee[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.TableRow;
        entity = {};
        entity['label'] = verify;
        entity['onPress'] = option;
        option = true;
        entity['arrow'] = option;
        yankee = _closure1_slot17;
        verify = _closure1_slot34;
        option = {};
        option['IconComponent'] = romeon;
        option = yankee.bind(tangon)(verify, option);
        entity['icon'] = option;
        verify = _closure1_slot17;
        option = _closure1_slot33;
        report = {};
        report['breadcrumbs'] = offset;
        report = verify.bind(tangon)(option, report);
        entity['subLabel'] = report;
        report = 0;
        report = report === oscard;
        entity['start'] = report;
        report = 1;
        report = golfie - report;
        report = oscard === report;
        entity['end'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo) { // Original name: PressableSettingSearchResult
        zuuluu = argFoo;
        michal = zuuluu.searchResultData;
        foxtra = zuuluu.IconComponent;
        offset = zuuluu.title;
        var _closure2_slot0 = offset;
        yankee = zuuluu.breadcrumbs;
        romeon = zuuluu.setting;
        var _closure2_slot1 = romeon;
        golfie = zuuluu.index;
        var _closure2_slot2 = golfie;
        option = zuuluu.total;
        var _closure2_slot3 = option;
        verify = michal.onPress;
        var _closure2_slot4 = verify;
        report = michal.withArrow;
        tangon = _closure1_slot7;
        zuuluu = tangon.useCallback;
        michal = new Array(5);
        michal[0] = romeon;
        michal[1] = offset;
        michal[2] = golfie;
        michal[3] = option;
        michal[4] = verify;
        entity = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 41;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackSettingSearchResultPress;
            zuuluu = {};
            golfie = _closure2_slot1;
            zuuluu['setting'] = golfie;
            golfie = _closure2_slot0;
            zuuluu['title'] = golfie;
            oscard = _closure1_slot10;
            oscard = oscard.bind(entity)();
            zuuluu['searchTerm'] = oscard;
            oscard = _closure2_slot2;
            zuuluu['searchResultPosition'] = oscard;
            oscard = _closure2_slot3;
            zuuluu['numSearchResults'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            michal = _closure2_slot4;
            michal = michal.bind(entity)();
            return entity;
        };
        verify = zuuluu.bind(tangon)(entity, michal);
        tangon = _closure1_slot17;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 13;
        entity = zuuluu[entity];
        zuuluu = undefined;
        entity = michal.bind(zuuluu)(entity);
        michal = entity.TableRow;
        entity = {};
        entity['label'] = offset;
        entity['onPress'] = verify;
        romeon = _closure1_slot17;
        offset = _closure1_slot34;
        verify = {};
        verify['IconComponent'] = foxtra;
        verify = romeon.bind(zuuluu)(offset, verify);
        entity['icon'] = verify;
        offset = _closure1_slot17;
        verify = _closure1_slot33;
        oscard = {};
        oscard['breadcrumbs'] = yankee;
        oscard = offset.bind(zuuluu)(verify, oscard);
        entity['subLabel'] = oscard;
        oscard = 0;
        oscard = oscard === golfie;
        entity['start'] = oscard;
        oscard = 1;
        oscard = option - oscard;
        oscard = golfie === oscard;
        entity['end'] = oscard;
        entity['arrow'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo) { // Original name: StaticSettingSearchResult
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.searchResultData;
            kiloes = zuuluu.IconComponent;
            verify = zuuluu.title;
            var _closure2_slot0 = verify;
            backup = zuuluu.breadcrumbs;
            romeon = zuuluu.setting;
            var _closure2_slot1 = romeon;
            oscard = zuuluu.index;
            var _closure2_slot2 = oscard;
            golfie = zuuluu.total;
            var _closure2_slot3 = golfie;
            tangon = undefined;
            var _closure2_slot4 = tangon;
            michal = michal.useTrailing;
            report = null;
            zuuluu = report == michal;
            yankee = undefined;
            if(zuuluu) { _fun00008_ip = 88; continue _fun00007 }
 84:
            yankee = michal.bind(tangon)();
 88:
            _closure2_slot4 = yankee;
            offset = _closure1_slot7;
            zuuluu = offset.useCallback;
            michal = new Array(5);
            michal[0] = oscard;
            michal[1] = romeon;
            michal[2] = yankee;
            michal[3] = verify;
            michal[4] = golfie;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot4;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00010_ip = 151; continue _fun00009 }
 16:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 41;
                    report = tangon[michal];
                    michal = undefined;
                    golfie = zuuluu.bind(michal)(report);
                    oscard = golfie.trackSettingSearchResultPress;
                    report = {};
                    verify = _closure2_slot1;
                    report['setting'] = verify;
                    verify = _closure2_slot0;
                    report['title'] = verify;
                    option = _closure1_slot10;
                    option = option.bind(michal)();
                    report['searchTerm'] = option;
                    option = _closure2_slot2;
                    report['searchResultPosition'] = option;
                    option = _closure2_slot3;
                    report['numSearchResults'] = option;
                    report = oscard.bind(golfie)(report);
                    report = 28;
                    report = tangon[report];
                    oscard = zuuluu.bind(michal)(report);
                    report = oscard.copy;
                    entity = _closure2_slot4;
                    entity = report.bind(oscard)(entity);
                    entity = 29;
                    entity = tangon[entity];
                    michal = zuuluu.bind(michal)(entity);
                    entity = michal.presentCopiedToClipboard;
                    entity = entity.bind(michal)();
 151:
                    entity = undefined;
                    return entity;
                }
            };
            offset = zuuluu.bind(offset)(entity, michal);
            zuuluu = _closure1_slot17;
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            romeon = 13;
            entity = entity[romeon];
            entity = michal.bind(tangon)(entity);
            michal = entity.TableRow;
            entity = {};
            entity['label'] = verify;
            foxtra = report != yankee;
            verify = undefined;
            if(!foxtra) { _fun00008_ip = 189; continue _fun00007 }
 186:
            verify = offset;
 189:
            entity['onPress'] = verify;
            foxtra = _closure1_slot17;
            offset = _closure1_slot34;
            verify = {};
            verify['IconComponent'] = kiloes;
            verify = foxtra.bind(tangon)(offset, verify);
            entity['icon'] = verify;
            foxtra = _closure1_slot17;
            offset = _closure1_slot33;
            verify = {};
            verify['breadcrumbs'] = backup;
            verify = foxtra.bind(tangon)(offset, verify);
            entity['subLabel'] = verify;
            verify = report != yankee;
            report = null;
            if(!verify) { _fun00008_ip = 298; continue _fun00007 }
 253:
            offset = _closure1_slot17;
            verify = _closure1_slot0;
            option = _closure1_slot2;
            option = option[romeon];
            option = verify.bind(tangon)(option);
            option = option.TableRow;
            verify = option.TrailingText;
            option = {};
            option['text'] = yankee;
            report = offset.bind(tangon)(verify, option);
 298:
            entity['trailing'] = report;
            report = 0;
            report = report === oscard;
            entity['start'] = report;
            report = 1;
            report = golfie - report;
            report = oscard === report;
            entity['end'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = ['onSlidingComplete', 'step', 'startIcon', 'endIcon', 'minimumValue', 'maximumValue'];
    var _closure1_slot3 = entity;
    entity = ['searchResultData'];
    var _closure1_slot4 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 2;
    report = golfie[tangon];
    tangon = argCor;
    verify = tangon.bind(entity)(report);
    var _closure1_slot7 = verify;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.getSettingSearchQuery;
    var _closure1_slot10 = report;
    tangon = tangon.setSelectedSearchResult;
    var _closure1_slot11 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot13 = report;
    tangon = tangon.RendererType;
    var _closure1_slot14 = tangon;
    tangon = 8;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.TABLE_ROW_ICON_SIZE;
    var _closure1_slot15 = tangon;
    tangon = 9;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.ContentDismissActionType;
    var _closure1_slot16 = tangon;
    tangon = 10;
    report = golfie[tangon];
    report = oscard.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot17 = report;
    report = golfie[tangon];
    report = oscard.bind(entity)(report);
    report = report.Fragment;
    var _closure1_slot18 = report;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot19 = tangon;
    tangon = 11;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.createStyles;
    tangon = {};
    offset = {};
    yankee = 12;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_16;
    offset['marginTop'] = foxtra;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_8;
    offset['marginBottom'] = foxtra;
    tangon['slider'] = offset;
    offset = {'flexDirection': 'row', 'justifyContent': 'space-between'};
    tangon['sliderTitle'] = offset;
    offset = {};
    foxtra = 26;
    offset['top'] = foxtra;
    tangon['radioSettingHighlight'] = offset;
    offset = {'width': 32, 'height': 32, 'backgroundColor': null, 'borderRadius': 10, 'justifyContent': 'center', 'alignItems': 'center'};
    yankee = golfie[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BG_BRAND;
    offset['backgroundColor'] = yankee;
    tangon['defaultIcon'] = offset;
    tangon = report.bind(option)(tangon);
    var _closure1_slot20 = tangon;
    tangon = new Array(0);
    var _closure1_slot21 = tangon;
    report = verify.memo;
    tangon = function(argFoo) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            zuuluu = tangon.useTrailing;
            michal = tangon.useTrailingDismissibleContent;
            result = tangon.preNavigationAction;
            var _closure2_slot0 = result;
            echoed = tangon.screen;
            var _closure2_slot1 = echoed;
            kiloes = tangon.title;
            offset = tangon.useDescription;
            golfie = tangon.useIsDisabled;
            romeon = tangon.variant;
            oscard = tangon.start;
            report = tangon.end;
            sizing = tangon.IconComponent;
            tangon = undefined;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            yankee = _closure1_slot0;
            foxtra = _closure1_slot2;
            option = 14;
            option = foxtra[option];
            yankee = yankee.bind(tangon)(option);
            option = yankee.useStackNavigation;
            update = option.bind(yankee)();
            var _closure2_slot2 = update;
            option = null;
            yankee = option == offset;
            backup = undefined;
            if(yankee) { _fun00012_ip = 141; continue _fun00011 }
 137:
            backup = offset.bind(tangon)();
 141:
            offset = option == golfie;
            foxtra = undefined;
            if(offset) { _fun00012_ip = 154; continue _fun00011 }
 150:
            foxtra = golfie.bind(tangon)();
 154:
            golfie = option == zuuluu;
            offset = undefined;
            if(golfie) { _fun00012_ip = 167; continue _fun00011 }
 163:
            offset = zuuluu.bind(tangon)();
 167:
            zuuluu = option == michal;
            ctrled = undefined;
            if(zuuluu) { _fun00012_ip = 180; continue _fun00011 }
 176:
            ctrled = michal.bind(tangon)();
 180:
            _closure2_slot3 = ctrled;
            output = _closure1_slot7;
            yankee = output.useMemo;
            golfie = new Array(1);
            golfie[0] = ctrled;
            zuuluu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    entity = null;
                    if(!(entity == zuuluu)) { _fun00014_ip = 22; continue _fun00013 }
 13:
                    entity = _closure1_slot21;
                    _fun00014_ip = 26; continue _fun00013;
 22:
                    entity = _closure2_slot3;
 26:
                    return entity;
                }
            };
            yankee = yankee.bind(output)(zuuluu, golfie);
            golfie = _closure1_slot0;
            output = _closure1_slot2;
            zuuluu = 15;
            zuuluu = output[zuuluu];
            golfie = golfie.bind(tangon)(zuuluu);
            zuuluu = golfie.useSelectedDismissibleContent;
            yankee = zuuluu.bind(golfie)(yankee);
            golfie = _closure1_slot6;
            zuuluu = 2;
            golfie = golfie.bind(tangon)(yankee, zuuluu);
            zuuluu = 0;
            source = golfie[zuuluu];
            zuuluu = 1;
            output = golfie[zuuluu];
            _closure2_slot4 = output;
            yankee = option == michal;
            if(yankee) { _fun00012_ip = 314; continue _fun00011 }
 282:
            michal = option != source;
            if(!michal) { _fun00012_ip = 311; continue _fun00011 }
 289:
            golfie = option == ctrled;
            zuuluu = undefined;
            if(golfie) { _fun00012_ip = 308; continue _fun00011 }
 298:
            golfie = ctrled.includes;
            zuuluu = golfie.bind(ctrled)(source);
 308:
            michal = zuuluu;
 311:
            yankee = michal;
 314:
            _closure2_slot5 = yankee;
            golfie = _closure1_slot7;
            zuuluu = golfie.useCallback;
            michal = new Array(5);
            michal[0] = yankee;
            michal[1] = update;
            michal[2] = echoed;
            michal[3] = result;
            michal[4] = output;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot5;
                    if(!entity) { _fun00016_ip = 34; continue _fun00015 }
 10:
                    zuuluu = _closure2_slot4;
                    entity = _closure1_slot16;
                    michal = entity.TAKE_ACTION;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 34:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 16;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.onRouteSettingOnPress;
                    michal = {};
                    oscard = _closure2_slot2;
                    michal['navigation'] = oscard;
                    oscard = _closure2_slot1;
                    michal['screen'] = oscard;
                    report = _closure2_slot0;
                    michal['preNavigationAction'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            golfie = zuuluu.bind(golfie)(entity, michal);
            zuuluu = _closure1_slot17;
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            output = 13;
            entity = entity[output];
            entity = michal.bind(tangon)(entity);
            michal = entity.TableRow;
            entity = {};
            entity['label'] = kiloes;
            entity['subLabel'] = backup;
            entity['disabled'] = foxtra;
            foxtra = true;
            entity['arrow'] = foxtra;
            entity['variant'] = romeon;
            foxtra = option != sizing;
            romeon = null;
            if(!foxtra) { _fun00012_ip = 475; continue _fun00011 }
 429:
            kiloes = _closure1_slot17;
            backup = _closure1_slot0;
            foxtra = _closure1_slot2;
            foxtra = foxtra[output];
            foxtra = backup.bind(tangon)(foxtra);
            foxtra = foxtra.TableRow;
            backup = foxtra.Icon;
            foxtra = {};
            foxtra['IconComponent'] = sizing;
            romeon = kiloes.bind(tangon)(backup, foxtra);
 475:
            entity['icon'] = romeon;
            option = null;
            if(!yankee) { _fun00012_ip = 493; continue _fun00011 }
 484:
            verify = _closure1_slot32;
            option = verify.bind(tangon)(offset);
 493:
            entity['trailing'] = option;
            entity['onPress'] = golfie;
            entity['start'] = oscard;
            entity['end'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    tangon = report.bind(verify)(tangon);
    var _closure1_slot22 = tangon;
    tangon = function() { // Original name: GuildSelectDefaultIcon
        entity = _closure1_slot20;
        tangon = undefined;
        oscard = entity.bind(tangon)();
        zuuluu = _closure1_slot17;
        michal = _closure1_slot8;
        entity = {};
        oscard = oscard.defaultIcon;
        entity['style'] = oscard;
        golfie = _closure1_slot17;
        oscard = _closure1_slot0;
        option = _closure1_slot2;
        report = 19;
        report = option[report];
        report = oscard.bind(tangon)(report);
        oscard = report.ClydeIcon;
        report = {};
        option = 'white';
        report['color'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot23 = tangon;
    option = verify.memo;
    report = function(argFoo) {
        report = argFoo;
        michal = report.useSelectedGuildId;
        zuuluu = null;
        tangon = Object.create(zuuluu);
        zuuluu = 0;
        tangon['useSelectedGuildId'] = zuuluu;
        romeon = {};
        yankee = report;
        offset = tangon;
        option = copyDataProperties(romeon, yankee, offset);
        tangon = undefined;
        zuuluu = michal.bind(tangon)();
        var _closure2_slot0 = zuuluu;
        oscard = _closure1_slot0;
        golfie = _closure1_slot2;
        michal = 17;
        michal = golfie[michal];
        verify = oscard.bind(tangon)(michal);
        golfie = verify.useStateFromStores;
        michal = _closure1_slot12;
        oscard = new Array(1);
        oscard[0] = michal;
        michal = function() {
            zuuluu = _closure1_slot12;
            michal = zuuluu.getGuild;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = golfie.bind(verify)(oscard, michal);
        var _closure2_slot1 = michal;
        michal = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = argFoo;
                var _closure3_slot0 = zuuluu;
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                tangon = 17;
                tangon = oscard[tangon];
                oscard = undefined;
                golfie = report.bind(oscard)(tangon);
                report = golfie.useStateFromStores;
                option = _closure1_slot12;
                tangon = new Array(1);
                tangon[0] = option;
                entity = function() {
                    zuuluu = _closure1_slot12;
                    michal = zuuluu.getGuild;
                    entity = _closure3_slot0;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                tangon = report.bind(golfie)(tangon, entity);
                entity = _closure1_slot13;
                if(!(zuuluu !== entity)) { _fun00018_ip = 151; continue _fun00017 }
 72:
                zuuluu = null;
                report = zuuluu == tangon;
                entity = undefined;
                if(report) { _fun00018_ip = 88; continue _fun00017 }
 83:
                entity = tangon.name;
 88:
                if(!(zuuluu == entity)) { _fun00018_ip = 149; continue _fun00017 }
 92:
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                zuuluu = 18;
                tangon = option[zuuluu];
                tangon = golfie.bind(oscard)(tangon);
                report = tangon.intl;
                tangon = report.string;
                zuuluu = option[zuuluu];
                zuuluu = golfie.bind(oscard)(zuuluu);
                zuuluu = zuuluu.t;
                zuuluu = zuuluu.XBwns7;
                entity = tangon.bind(report)(zuuluu);
 149:
                _fun00018_ip = 208; continue _fun00017;
 151:
                report = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 18;
                zuuluu = golfie[michal];
                zuuluu = report.bind(oscard)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.string;
                michal = golfie[michal];
                michal = report.bind(oscard)(michal);
                michal = michal.t;
                michal = michal.OMVg29;
                entity = zuuluu.bind(tangon)(michal);
 208:
                return entity;
            }
        };
        golfie = michal.bind(tangon)(zuuluu);
        zuuluu = _closure1_slot7;
        michal = zuuluu.memo;
        entity = function() {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = _closure2_slot1;
                entity = null;
                if(!(entity != michal)) { _fun00020_ip = 89; continue _fun00019 }
 13:
                tangon = _closure1_slot17;
                michal = _closure1_slot1;
                option = _closure1_slot2;
                oscard = 20;
                entity = option[oscard];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                golfie = _closure1_slot0;
                oscard = option[oscard];
                oscard = golfie.bind(zuuluu)(oscard);
                oscard = oscard.GuildIconSizes;
                oscard = oscard.SMALL_32;
                entity['size'] = oscard;
                report = _closure2_slot1;
                entity['guild'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                _fun00020_ip = 110; continue _fun00019;
 89:
                report = _closure1_slot17;
                tangon = _closure1_slot23;
                zuuluu = undefined;
                michal = {};
                entity = report.bind(zuuluu)(tangon, michal);
 110:
                return entity;
            }
        };
        oscard = michal.bind(zuuluu)(entity);
        zuuluu = _closure1_slot17;
        michal = _closure1_slot25;
        entity = {};
        romeon = entity;
        yankee = option;
        option = copyDataProperties(romeon, yankee);
        report = _closure1_slot14;
        option = report.PRESSABLE;
        report = 'type';
        entity[report] = option;
        report = 'title';
        entity[report] = golfie;
        golfie = true;
        report = 'withArrow';
        entity[report] = golfie;
        report = 'IconComponent';
        entity[report] = oscard;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    report = option.bind(verify)(report);
    var _closure1_slot24 = report;
    option = verify.memo;
    report = function(argFoo) {
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tangon = argFoo;
            option = tangon.setting;
            backup = tangon.onPress;
            result = tangon.title;
            zuuluu = tangon.useDescription;
            michal = tangon.useIsDisabled;
            entity = tangon.useTrailing;
            echoed = tangon.variant;
            sizing = tangon.withArrow;
            yankee = tangon.start;
            offset = tangon.end;
            update = tangon.IconComponent;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 21;
            report = report[tangon];
            tangon = undefined;
            oscard = oscard.bind(tangon)(report);
            report = oscard.useHighlightSettingItem;
            oscard = report.bind(oscard)(option);
            kiloes = null;
            report = kiloes == zuuluu;
            output = undefined;
            if(report) { _fun00022_ip = 115; continue _fun00021 }
 111:
            output = zuuluu.bind(tangon)();
 115:
            zuuluu = kiloes == michal;
            romeon = undefined;
            if(zuuluu) { _fun00022_ip = 128; continue _fun00021 }
 124:
            romeon = michal.bind(tangon)();
 128:
            michal = kiloes == entity;
            foxtra = undefined;
            if(michal) { _fun00022_ip = 141; continue _fun00021 }
 137:
            foxtra = entity.bind(tangon)();
 141:
            zuuluu = _closure1_slot19;
            michal = _closure1_slot18;
            entity = {};
            verify = _closure1_slot17;
            option = _closure1_slot0;
            report = _closure1_slot2;
            source = 13;
            report = report[source];
            report = option.bind(tangon)(report);
            option = report.TableRow;
            report = {};
            report['label'] = result;
            report['subLabel'] = output;
            report['arrow'] = sizing;
            report['variant'] = echoed;
            sizing = kiloes != update;
            kiloes = null;
            if(!sizing) { _fun00022_ip = 260; continue _fun00021 }
 210:
            result = _closure1_slot17;
            output = _closure1_slot0;
            sizing = _closure1_slot2;
            sizing = sizing[source];
            sizing = output.bind(tangon)(sizing);
            sizing = sizing.TableRow;
            output = sizing.Icon;
            sizing = {};
            sizing['IconComponent'] = update;
            sizing['variant'] = echoed;
            kiloes = result.bind(tangon)(output, sizing);
 260:
            report['icon'] = kiloes;
            report['onPress'] = backup;
            report['disabled'] = romeon;
            romeon = _closure1_slot32;
            romeon = romeon.bind(tangon)(foxtra);
            report['trailing'] = romeon;
            report['start'] = yankee;
            report['end'] = offset;
            option = verify.bind(tangon)(option, report);
            report = new Array(2);
            report[0] = option;
            if(!oscard) { _fun00022_ip = 351; continue _fun00021 }
 311:
            verify = _closure1_slot17;
            option = _closure1_slot1;
            romeon = _closure1_slot2;
            golfie = 22;
            golfie = romeon[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            golfie['start'] = yankee;
            golfie['end'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 351:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    report = option.bind(verify)(report);
    var _closure1_slot25 = report;
    option = verify.memo;
    report = function(argFoo) {
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            tangon = argFoo;
            option = tangon.setting;
            romeon = tangon.onValueChange;
            result = tangon.title;
            michal = tangon.useDescription;
            entity = tangon.useIsDisabled;
            zuuluu = tangon.useValue;
            backup = tangon.variant;
            yankee = tangon.start;
            offset = tangon.end;
            update = tangon.IconComponent;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 21;
            report = report[tangon];
            tangon = undefined;
            oscard = oscard.bind(tangon)(report);
            report = oscard.useHighlightSettingItem;
            oscard = report.bind(oscard)(option);
            kiloes = zuuluu.bind(tangon)();
            sizing = null;
            zuuluu = sizing == michal;
            output = undefined;
            if(zuuluu) { _fun00024_ip = 114; continue _fun00023 }
 110:
            output = michal.bind(tangon)();
 114:
            michal = sizing == entity;
            foxtra = undefined;
            if(michal) { _fun00024_ip = 127; continue _fun00023 }
 123:
            foxtra = entity.bind(tangon)();
 127:
            zuuluu = _closure1_slot19;
            michal = _closure1_slot18;
            entity = {};
            verify = _closure1_slot17;
            option = _closure1_slot0;
            echoed = _closure1_slot2;
            report = 23;
            report = echoed[report];
            report = option.bind(tangon)(report);
            option = report.TableSwitchRow;
            report = {};
            report['label'] = result;
            report['subLabel'] = output;
            output = sizing != update;
            sizing = null;
            if(!output) { _fun00024_ip = 240; continue _fun00023 }
 187:
            echoed = _closure1_slot17;
            result = _closure1_slot0;
            source = _closure1_slot2;
            output = 13;
            output = source[output];
            output = result.bind(tangon)(output);
            output = output.TableRow;
            result = output.Icon;
            output = {};
            output['IconComponent'] = update;
            output['variant'] = backup;
            sizing = echoed.bind(tangon)(result, output);
 240:
            report['icon'] = sizing;
            report['value'] = kiloes;
            report['variant'] = backup;
            report['disabled'] = foxtra;
            report['onValueChange'] = romeon;
            report['start'] = yankee;
            report['end'] = offset;
            option = verify.bind(tangon)(option, report);
            report = new Array(2);
            report[0] = option;
            if(!oscard) { _fun00024_ip = 326; continue _fun00023 }
 286:
            verify = _closure1_slot17;
            option = _closure1_slot1;
            romeon = _closure1_slot2;
            golfie = 22;
            golfie = romeon[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            golfie['start'] = yankee;
            golfie['end'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 326:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    report = option.bind(verify)(report);
    var _closure1_slot26 = report;
    option = verify.memo;
    report = function(argFoo) {
        entity = argFoo;
        oscard = entity.title;
        offset = entity.setting;
        zuuluu = entity.useOptions;
        michal = _closure1_slot0;
        option = _closure1_slot2;
        tangon = 21;
        golfie = option[tangon];
        tangon = undefined;
        verify = michal.bind(tangon)(golfie);
        golfie = verify.useHighlightSettingItem;
        golfie = golfie.bind(verify)(offset);
        var _closure2_slot0 = golfie;
        golfie = zuuluu.bind(tangon)();
        var _closure2_slot1 = golfie;
        zuuluu = _closure1_slot17;
        entity = 24;
        entity = option[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.TableRowGroup;
        entity = {};
        entity['title'] = oscard;
        oscard = false;
        entity['hasIcons'] = oscard;
        oscard = golfie.map;
        report = function(argFoo, argBar) {
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = argFoo;
                romeon = argBar;
                report = _closure1_slot19;
                tangon = _closure1_slot8;
                zuuluu = {};
                offset = _closure1_slot17;
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 25;
                oscard = oscard[michal];
                michal = undefined;
                oscard = golfie.bind(michal)(oscard);
                verify = oscard.TableCheckboxRow;
                golfie = {};
                oscard = entity.label;
                golfie['label'] = oscard;
                oscard = entity.label;
                golfie['accessibilityLabel'] = oscard;
                oscard = entity.subLabel;
                golfie['subLabel'] = oscard;
                oscard = entity.checked;
                golfie['checked'] = oscard;
                oscard = entity.onPress;
                golfie['onPress'] = oscard;
                oscard = 0;
                backup = oscard === romeon;
                golfie['start'] = backup;
                oscard = _closure2_slot1;
                oscard = oscard.length;
                foxtra = 1;
                oscard = oscard - foxtra;
                oscard = romeon === oscard;
                golfie['end'] = oscard;
                oscard = entity.label;
                golfie = offset.bind(michal)(verify, golfie, oscard);
                oscard = new Array(2);
                oscard[0] = golfie;
                golfie = _closure2_slot0;
                if(!golfie) { _fun00026_ip = 223; continue _fun00025 }
 166:
                offset = _closure1_slot17;
                verify = _closure1_slot1;
                kiloes = _closure1_slot2;
                option = 22;
                option = kiloes[option];
                verify = verify.bind(michal)(option);
                option = {};
                option['start'] = backup;
                yankee = _closure2_slot1;
                yankee = yankee.length;
                yankee = yankee - foxtra;
                yankee = romeon === yankee;
                option['end'] = yankee;
                golfie = offset.bind(michal)(verify, option);
 223:
                oscard[1] = golfie;
                zuuluu['children'] = oscard;
                entity = entity.label;
                entity = report.bind(michal)(tangon, zuuluu, entity);
                return entity;
            }
        };
        report = oscard.bind(golfie)(report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    report = option.bind(verify)(report);
    var _closure1_slot27 = report;
    option = verify.memo;
    report = function(argFoo) {
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            zuuluu = argFoo;
            oscard = zuuluu.setting;
            foxtra = zuuluu.title;
            michal = zuuluu.useValue;
            entity = zuuluu.useOptions;
            romeon = zuuluu.onValueChange;
            zuuluu = _closure1_slot20;
            tangon = undefined;
            offset = zuuluu.bind(tangon)();
            report = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 21;
            zuuluu = option[zuuluu];
            report = report.bind(tangon)(zuuluu);
            zuuluu = report.useHighlightSettingItem;
            oscard = zuuluu.bind(report)(oscard);
            zuuluu = michal.bind(tangon)();
            backup = entity.bind(tangon)();
            michal = 'number';
            entity = typeof zuuluu;
            yankee = zuuluu;
            if(!(michal === entity)) { _fun00028_ip = 120; continue _fun00027 }
 98:
            entity = global;
            entity = entity.HermesInternal;
            michal = entity.concat;
            entity = '';
            yankee = michal.bind(entity)(zuuluu);
 120:
            zuuluu = _closure1_slot19;
            michal = _closure1_slot18;
            entity = {};
            verify = _closure1_slot17;
            option = _closure1_slot0;
            kiloes = _closure1_slot2;
            report = 26;
            report = kiloes[report];
            report = option.bind(tangon)(report);
            option = report.TableRadioGroup;
            report = {};
            report['title'] = foxtra;
            report['value'] = yankee;
            report['onChange'] = romeon;
            romeon = false;
            report['hasIcons'] = romeon;
            foxtra = backup.map;
            romeon = function(argFoo) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = argFoo;
                    michal = entity.value;
                    zuuluu = 'number';
                    michal = typeof michal;
                    if(!(zuuluu !== michal)) { _fun00030_ip = 26; continue _fun00029 }
 19:
                    oscard = entity.value;
                    _fun00030_ip = 53; continue _fun00029;
 26:
                    tangon = entity.value;
                    michal = global;
                    michal = michal.HermesInternal;
                    zuuluu = michal.concat;
                    michal = '';
                    oscard = zuuluu.bind(michal)(tangon);
 53:
                    report = _closure1_slot17;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 27;
                    michal = tangon[michal];
                    tangon = undefined;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = michal.TableRadioRow;
                    michal = {};
                    michal['value'] = oscard;
                    oscard = entity.label;
                    michal['label'] = oscard;
                    oscard = entity.subLabel;
                    michal['subLabel'] = oscard;
                    oscard = entity.disabled;
                    michal['disabled'] = oscard;
                    entity = entity.value;
                    entity = report.bind(tangon)(zuuluu, michal, entity);
                    return entity;
                }
            };
            romeon = foxtra.bind(backup)(romeon);
            report['children'] = romeon;
            option = verify.bind(tangon)(option, report, yankee);
            report = new Array(2);
            report[0] = option;
            if(!oscard) { _fun00028_ip = 273; continue _fun00027 }
 223:
            verify = _closure1_slot17;
            option = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 22;
            golfie = yankee[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {'start': true, 'end': true};
            offset = offset.radioSettingHighlight;
            golfie['style'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 273:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    report = option.bind(verify)(report);
    var _closure1_slot28 = report;
    option = verify.memo;
    report = function(argFoo) {
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            tangon = argFoo;
            verify = tangon.setting;
            result = tangon.title;
            echoed = tangon.variant;
            report = tangon.useTrailing;
            michal = tangon.useIsDisabled;
            zuuluu = tangon.useDescription;
            yankee = tangon.start;
            offset = tangon.end;
            update = tangon.IconComponent;
            tangon = undefined;
            var _closure2_slot0 = tangon;
            option = _closure1_slot0;
            romeon = _closure1_slot2;
            oscard = 21;
            oscard = romeon[oscard];
            option = option.bind(tangon)(oscard);
            oscard = option.useHighlightSettingItem;
            oscard = oscard.bind(option)(verify);
            romeon = null;
            option = romeon == report;
            sizing = undefined;
            if(option) { _fun00032_ip = 110; continue _fun00031 }
 106:
            sizing = report.bind(tangon)();
 110:
            _closure2_slot0 = sizing;
            report = romeon == zuuluu;
            backup = undefined;
            if(report) { _fun00032_ip = 127; continue _fun00031 }
 123:
            backup = zuuluu.bind(tangon)();
 127:
            zuuluu = romeon == michal;
            foxtra = undefined;
            if(zuuluu) { _fun00032_ip = 140; continue _fun00031 }
 136:
            foxtra = michal.bind(tangon)();
 140:
            report = _closure1_slot7;
            zuuluu = report.useCallback;
            michal = new Array(1);
            michal[0] = sizing;
            entity = function() {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00034_ip = 75; continue _fun00033 }
 13:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 28;
                    report = tangon[michal];
                    michal = undefined;
                    oscard = zuuluu.bind(michal)(report);
                    report = oscard.copy;
                    entity = _closure2_slot0;
                    entity = report.bind(oscard)(entity);
                    entity = 29;
                    entity = tangon[entity];
                    michal = zuuluu.bind(michal)(entity);
                    entity = michal.presentCopiedToClipboard;
                    entity = entity.bind(michal)();
 75:
                    entity = undefined;
                    return entity;
                }
            };
            kiloes = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot19;
            michal = _closure1_slot18;
            entity = {};
            verify = _closure1_slot17;
            option = _closure1_slot0;
            report = _closure1_slot2;
            output = 13;
            report = report[output];
            report = option.bind(tangon)(report);
            option = report.TableRow;
            report = {};
            report['label'] = result;
            report['subLabel'] = backup;
            result = romeon != sizing;
            backup = null;
            if(!result) { _fun00032_ip = 233; continue _fun00031 }
 230:
            backup = kiloes;
 233:
            report['onPress'] = backup;
            report['variant'] = echoed;
            report['disabled'] = foxtra;
            backup = romeon != update;
            foxtra = null;
            if(!backup) { _fun00032_ip = 304; continue _fun00031 }
 254:
            result = _closure1_slot17;
            kiloes = _closure1_slot0;
            backup = _closure1_slot2;
            backup = backup[output];
            backup = kiloes.bind(tangon)(backup);
            backup = backup.TableRow;
            kiloes = backup.Icon;
            backup = {};
            backup['IconComponent'] = update;
            backup['variant'] = echoed;
            foxtra = result.bind(tangon)(kiloes, backup);
 304:
            report['icon'] = foxtra;
            foxtra = romeon != sizing;
            romeon = null;
            if(!foxtra) { _fun00032_ip = 362; continue _fun00031 }
 317:
            kiloes = _closure1_slot17;
            backup = _closure1_slot0;
            foxtra = _closure1_slot2;
            foxtra = foxtra[output];
            foxtra = backup.bind(tangon)(foxtra);
            foxtra = foxtra.TableRow;
            backup = foxtra.TrailingText;
            foxtra = {};
            foxtra['text'] = sizing;
            romeon = kiloes.bind(tangon)(backup, foxtra);
 362:
            report['trailing'] = romeon;
            report['start'] = yankee;
            report['end'] = offset;
            option = verify.bind(tangon)(option, report);
            report = new Array(2);
            report[0] = option;
            if(!oscard) { _fun00032_ip = 432; continue _fun00031 }
 392:
            verify = _closure1_slot17;
            option = _closure1_slot1;
            romeon = _closure1_slot2;
            golfie = 22;
            golfie = romeon[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            golfie['start'] = yankee;
            golfie['end'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 432:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    report = option.bind(verify)(report);
    var _closure1_slot29 = report;
    option = verify.memo;
    report = function(argFoo) {
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            michal = argFoo;
            report = michal.setting;
            romeon = michal.title;
            entity = michal.useValue;
            result = michal.onValueChange;
            echoed = michal.maximum;
            yankee = michal.start;
            offset = michal.end;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 21;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useHighlightSettingItem;
            oscard = michal.bind(zuuluu)(report);
            michal = _closure1_slot20;
            kiloes = michal.bind(tangon)();
            michal = null;
            michal = michal == entity;
            update = undefined;
            if(michal) { _fun00036_ip = 101; continue _fun00035 }
 97:
            update = entity.bind(tangon)();
 101:
            zuuluu = _closure1_slot19;
            michal = _closure1_slot18;
            entity = {};
            verify = _closure1_slot17;
            option = _closure1_slot0;
            source = _closure1_slot2;
            report = 13;
            report = source[report];
            report = option.bind(tangon)(report);
            option = report.TableRow;
            report = {};
            report['label'] = romeon;
            report['start'] = yankee;
            report['end'] = offset;
            backup = _closure1_slot17;
            foxtra = _closure1_slot8;
            romeon = {};
            kiloes = kiloes.slider;
            romeon['style'] = kiloes;
            output = _closure1_slot17;
            sizing = _closure1_slot1;
            kiloes = 30;
            kiloes = source[kiloes];
            sizing = sizing.bind(tangon)(kiloes);
            kiloes = {};
            kiloes['value'] = update;
            kiloes['maxVolume'] = echoed;
            kiloes['onValueChange'] = result;
            kiloes = output.bind(tangon)(sizing, kiloes);
            romeon['children'] = kiloes;
            romeon = backup.bind(tangon)(foxtra, romeon);
            report['subLabel'] = romeon;
            option = verify.bind(tangon)(option, report);
            report = new Array(2);
            report[0] = option;
            if(!oscard) { _fun00036_ip = 289; continue _fun00035 }
 249:
            verify = _closure1_slot17;
            option = _closure1_slot1;
            romeon = _closure1_slot2;
            golfie = 22;
            golfie = romeon[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            golfie['start'] = yankee;
            golfie['end'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 289:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    report = option.bind(verify)(report);
    var _closure1_slot30 = report;
    option = verify.memo;
    report = function(argFoo) {
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            entity = argFoo;
            equals = entity.title;
            oscard = entity.start;
            report = entity.end;
            zuuluu = entity.useProps;
            entity = entity.useTrailing;
            tangon = undefined;
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            offset = zuuluu.bind(tangon)();
            zuuluu = offset.onSlidingComplete;
            var _closure2_slot0 = zuuluu;
            golfie = offset.step;
            whisks = 0.1;
            if(!(tangon !== golfie)) { _fun00038_ip = 103; continue _fun00037 }
 100:
            whisks = golfie;
 103:
            _closure2_slot1 = whisks;
            target = offset.startIcon;
            config = offset.endIcon;
            golfie = offset.minimumValue;
            option = 0;
            sierra = 0;
            if(!(tangon !== golfie)) { _fun00038_ip = 136; continue _fun00037 }
 133:
            sierra = golfie;
 136:
            _closure2_slot2 = sierra;
            golfie = offset.maximumValue;
            sizing = 1;
            papara = sizing;
            if(!(tangon !== golfie)) { _fun00038_ip = 159; continue _fun00037 }
 156:
            papara = golfie;
 159:
            _closure2_slot3 = papara;
            verify = _closure1_slot5;
            golfie = _closure1_slot3;
            ctrled = verify.bind(tangon)(offset, golfie);
            _closure2_slot4 = ctrled;
            golfie = _closure1_slot20;
            output = golfie.bind(tangon)();
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 17;
            golfie = offset[golfie];
            yankee = verify.bind(tangon)(golfie);
            offset = yankee.useStateFromStores;
            golfie = _closure1_slot9;
            verify = new Array(1);
            verify[0] = golfie;
            golfie = function() {
                entity = _closure1_slot9;
                entity = entity.locale;
                return entity;
            };
            variable36 = offset.bind(yankee)(verify, golfie);
            offset = _closure1_slot7;
            verify = offset.useState;
            golfie = function() {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    entity = _closure2_slot4;
                    michal = entity.value;
                    entity = null;
                    zuuluu = entity != michal;
                    entity = 1;
                    if(!zuuluu) { _fun00040_ip = 27; continue _fun00039 }
 24:
                    entity = michal;
 27:
                    return entity;
                }
            };
            golfie = verify.bind(offset)(golfie);
            offset = _closure1_slot6;
            verify = 2;
            golfie = offset.bind(tangon)(golfie, verify);
            kiloes = golfie[option];
            _closure2_slot5 = kiloes;
            limora = golfie[sizing];
            _closure2_slot6 = limora;
            yankee = _closure1_slot7;
            golfie = yankee.useState;
            cntext = false;
            golfie = golfie.bind(yankee)(cntext);
            golfie = offset.bind(tangon)(golfie, verify);
            backup = golfie[option];
            golfie = golfie[sizing];
            _closure2_slot7 = golfie;
            offset = _closure1_slot7;
            verify = offset.useCallback;
            option = function() {
                zuuluu = _closure2_slot7;
                entity = undefined;
                michal = true;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            golfie = new Array(0);
            sequen = verify.bind(offset)(option, golfie);
            offset = _closure1_slot7;
            verify = offset.useCallback;
            option = new Array(1);
            option[0] = zuuluu;
            golfie = function(argFoo) {
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    tangon = _closure2_slot7;
                    entity = undefined;
                    zuuluu = false;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    tangon = _closure2_slot0;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00042_ip = 38; continue _fun00041 }
 26:
                    zuuluu = _closure2_slot0;
                    michal = argFoo;
                    michal = zuuluu.bind(entity)(michal);
 38:
                    return entity;
                }
            };
            vacuum = verify.bind(offset)(golfie, option);
            verify = _closure1_slot7;
            option = verify.useCallback;
            golfie = new Array(1);
            golfie[0] = zuuluu;
            zuuluu = function(argFoo) {
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure2_slot6;
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    report = _closure2_slot0;
                    tangon = null;
                    if(!(tangon != report)) { _fun00044_ip = 36; continue _fun00043 }
 27:
                    michal = _closure2_slot0;
                    michal = michal.bind(entity)(zuuluu);
 36:
                    return entity;
                }
            };
            verify = option.bind(verify)(zuuluu, golfie);
            _closure2_slot8 = verify;
            offset = _closure1_slot7;
            option = offset.useCallback;
            golfie = new Array(1);
            golfie[0] = verify;
            zuuluu = function() {
                zuuluu = _closure2_slot8;
                michal = undefined;
                entity = 1;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            romeon = option.bind(offset)(zuuluu, golfie);
            offset = _closure1_slot7;
            option = offset.useCallback;
            golfie = new Array(4);
            golfie[0] = verify;
            golfie[1] = papara;
            golfie[2] = whisks;
            golfie[3] = kiloes;
            zuuluu = function() {
                zuuluu = _closure2_slot8;
                michal = global;
                report = michal.Math;
                tangon = report.min;
                michal = _closure2_slot3;
                oscard = _closure2_slot5;
                entity = _closure2_slot1;
                entity = oscard + entity;
                michal = tangon.bind(report)(michal, entity);
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                tangon = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 31;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.triggerHapticFeedback;
                report = _closure1_slot1;
                michal = 32;
                michal = oscard[michal];
                michal = report.bind(entity)(michal);
                michal = michal.IMPACT_LIGHT;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            record = option.bind(offset)(zuuluu, golfie);
            option = _closure1_slot7;
            golfie = option.useCallback;
            zuuluu = new Array(4);
            zuuluu[0] = verify;
            zuuluu[1] = sierra;
            zuuluu[2] = whisks;
            zuuluu[3] = kiloes;
            michal = function() {
                zuuluu = _closure2_slot8;
                michal = global;
                report = michal.Math;
                tangon = report.max;
                michal = _closure2_slot2;
                oscard = _closure2_slot5;
                entity = _closure2_slot1;
                entity = oscard - entity;
                michal = tangon.bind(report)(michal, entity);
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                tangon = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 31;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.triggerHapticFeedback;
                report = _closure1_slot1;
                michal = 32;
                michal = oscard[michal];
                michal = report.bind(entity)(michal);
                michal = michal.IMPACT_LIGHT;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            status = golfie.bind(option)(michal, zuuluu);
            yankee = null;
            michal = yankee == entity;
            source = undefined;
            if(michal) { _fun00038_ip = 545; continue _fun00037 }
 541:
            source = entity.bind(tangon)();
 545:
            zuuluu = _closure1_slot17;
            quebec = _closure1_slot0;
            update = _closure1_slot2;
            entity = 33;
            entity = update[entity];
            entity = quebec.bind(tangon)(entity);
            michal = entity.Card;
            entity = {};
            entity['start'] = oscard;
            entity['end'] = report;
            report = 'none';
            entity['shadow'] = report;
            entity['border'] = report;
            golfie = _closure1_slot19;
            option = 34;
            report = update[option];
            report = quebec.bind(tangon)(report);
            oscard = report.Stack;
            report = {};
            option = update[option];
            option = quebec.bind(tangon)(option);
            verify = option.Stack;
            option = {'direction': 'horizontal', 'justify': 'space-between'};
            echoed = _closure1_slot8;
            offset = {};
            result = output.sliderTitle;
            offset['style'] = result;
            variable37 = _closure1_slot17;
            result = 35;
            update = update[result];
            update = quebec.bind(tangon)(update);
            quebec = update.Text;
            update = {};
            variable38 = 'text-md/semibold';
            update['variant'] = variable38;
            update['children'] = equals;
            quebec = variable37.bind(tangon)(quebec, update);
            update = new Array(2);
            update[0] = quebec;
            update[1] = source;
            offset['children'] = update;
            echoed = golfie.bind(tangon)(echoed, offset);
            offset = new Array(2);
            offset[0] = echoed;
            yankee = yankee != kiloes;
            if(!yankee) { _fun00038_ip = 820; continue _fun00037 }
 746:
            update = _closure1_slot17;
            quebec = _closure1_slot0;
            variable37 = _closure1_slot2;
            result = variable37[result];
            result = quebec.bind(tangon)(result);
            echoed = result.Text;
            result = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            source = 36;
            source = variable37[source];
            quebec = quebec.bind(tangon)(source);
            source = quebec.formatPercent;
            source = source.bind(quebec)(variable36, kiloes);
            result['children'] = source;
            yankee = update.bind(tangon)(echoed, result);
 820:
            offset[1] = yankee;
            option['children'] = offset;
            verify = golfie.bind(tangon)(verify, option);
            option = new Array(3);
            option[0] = verify;
            result = _closure1_slot17;
            yankee = _closure1_slot8;
            verify = {};
            echoed = _closure1_slot0;
            update = _closure1_slot2;
            offset = 37;
            offset = update[offset];
            echoed = echoed.bind(tangon)(offset);
            offset = echoed.isAndroid;
            echoed = offset.bind(echoed)();
            offset = undefined;
            if(!echoed) { _fun00038_ip = 892; continue _fun00037 }
 886:
            offset = output.slider;
 892:
            verify['style'] = offset;
            source = _closure1_slot17;
            offset = _closure1_slot0;
            output = _closure1_slot2;
            echoed = 38;
            echoed = output[echoed];
            echoed = offset.bind(tangon)(echoed);
            update = echoed.Slider;
            echoed = {};
            variable40 = echoed;
            variable39 = ctrled;
            ctrled = copyDataProperties(variable40, variable39);
            ctrled = 'accessibilityLabel';
            echoed[ctrled] = equals;
            ctrled = 'step';
            echoed[ctrled] = whisks;
            ctrled = 'onValueChange';
            echoed[ctrled] = limora;
            ctrled = 'value';
            echoed[ctrled] = kiloes;
            ctrled = 'minimumValue';
            echoed[ctrled] = sierra;
            ctrled = 'maximumValue';
            echoed[ctrled] = papara;
            ctrled = 'onSlidingStart';
            echoed[ctrled] = sequen;
            ctrled = 'onSlidingComplete';
            echoed[ctrled] = vacuum;
            papara = _closure1_slot17;
            ctrled = 39;
            vacuum = output[ctrled];
            vacuum = offset.bind(tangon)(vacuum);
            sequen = vacuum.PressableOpacity;
            vacuum = {};
            vacuum['accessible'] = cntext;
            vacuum['onPress'] = status;
            vacuum['children'] = target;
            sequen = papara.bind(tangon)(sequen, vacuum);
            vacuum = 'startIcon';
            echoed[vacuum] = sequen;
            sequen = _closure1_slot17;
            ctrled = output[ctrled];
            ctrled = offset.bind(tangon)(ctrled);
            vacuum = ctrled.PressableOpacity;
            ctrled = {};
            ctrled['accessible'] = cntext;
            ctrled['onPress'] = record;
            ctrled['children'] = config;
            vacuum = sequen.bind(tangon)(vacuum, ctrled);
            ctrled = 'endIcon';
            echoed[ctrled] = vacuum;
            echoed = source.bind(tangon)(update, echoed);
            verify['children'] = echoed;
            verify = result.bind(tangon)(yankee, verify);
            option[1] = verify;
            yankee = _closure1_slot17;
            verify = 40;
            verify = output[verify];
            verify = offset.bind(tangon)(verify);
            offset = verify.Button;
            verify = {};
            backup = !backup;
            if(!backup) { _fun00038_ip = 1165; continue _fun00037 }
 1161:
            backup = sizing === kiloes;
 1165:
            verify['disabled'] = backup;
            backup = 'secondary';
            verify['variant'] = backup;
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            foxtra = 18;
            backup = output[foxtra];
            backup = sizing.bind(tangon)(backup);
            kiloes = backup.intl;
            backup = kiloes.string;
            foxtra = output[foxtra];
            foxtra = sizing.bind(tangon)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.3b//lJ;
            foxtra = backup.bind(kiloes)(foxtra);
            verify['text'] = foxtra;
            verify['onPress'] = romeon;
            verify = yankee.bind(tangon)(offset, verify);
            option[2] = verify;
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    report = option.bind(verify)(report);
    var _closure1_slot31 = report;
    report = 42;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/settings/renderer/SettingRenderer.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['GuildSelectDefaultIcon'] = tangon;
    tangon = function(argFoo) { // Original name: renderSettingItem
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            michal = argFoo;
            golfie = michal.setting;
            entity = michal.settingData;
            oscard = michal.start;
            report = michal.end;
            tangon = entity.type;
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.GUILD_SELECTOR;
            if(!(tangon !== zuuluu)) { _fun00046_ip = 692; continue _fun00045 }
 50:
            tangon = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 16;
            zuuluu = option[zuuluu];
            verify = undefined;
            option = tangon.bind(verify)(zuuluu);
            tangon = option.transformSettingTitle;
            zuuluu = entity.title;
            yankee = tangon.bind(option)(zuuluu);
            tangon = entity.type;
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.ROUTE;
            if(!(zuuluu !== tangon)) { _fun00046_ip = 637; continue _fun00045 }
 110:
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.PRESSABLE;
            if(!(zuuluu !== tangon)) { _fun00046_ip = 573; continue _fun00045 }
 127:
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.TOGGLE;
            if(!(zuuluu !== tangon)) { _fun00046_ip = 509; continue _fun00045 }
 144:
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.STATIC;
            if(!(zuuluu !== tangon)) { _fun00046_ip = 445; continue _fun00045 }
 161:
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.VOLUME_SLIDER;
            if(!(zuuluu !== tangon)) { _fun00046_ip = 381; continue _fun00045 }
 178:
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.RADIO;
            if(!(zuuluu !== tangon)) { _fun00046_ip = 335; continue _fun00045 }
 195:
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.CHECKBOX;
            if(!(zuuluu !== tangon)) { _fun00046_ip = 289; continue _fun00045 }
 209:
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.SLIDER;
            if(!(zuuluu !== tangon)) { _fun00046_ip = 225; continue _fun00045 }
 223:
            return verify;
 225:
            option = _closure1_slot17;
            tangon = _closure1_slot31;
            zuuluu = {};
            foxtra = zuuluu;
            romeon = entity;
            offset = copyDataProperties(foxtra, romeon);
            offset = 'title';
            zuuluu[offset] = yankee;
            offset = 'start';
            zuuluu[offset] = oscard;
            offset = 'end';
            zuuluu[offset] = report;
            offset = 'setting';
            zuuluu[offset] = golfie;
            zuuluu = option.bind(verify)(tangon, zuuluu);
            return zuuluu;
 289:
            option = _closure1_slot17;
            tangon = _closure1_slot27;
            zuuluu = {};
            foxtra = zuuluu;
            romeon = entity;
            offset = copyDataProperties(foxtra, romeon);
            offset = 'title';
            zuuluu[offset] = yankee;
            offset = 'setting';
            zuuluu[offset] = golfie;
            zuuluu = option.bind(verify)(tangon, zuuluu);
            return zuuluu;
 335:
            option = _closure1_slot17;
            tangon = _closure1_slot28;
            zuuluu = {};
            foxtra = zuuluu;
            romeon = entity;
            offset = copyDataProperties(foxtra, romeon);
            offset = 'title';
            zuuluu[offset] = yankee;
            offset = 'setting';
            zuuluu[offset] = golfie;
            zuuluu = option.bind(verify)(tangon, zuuluu);
            return zuuluu;
 381:
            option = _closure1_slot17;
            tangon = _closure1_slot30;
            zuuluu = {};
            foxtra = zuuluu;
            romeon = entity;
            offset = copyDataProperties(foxtra, romeon);
            offset = 'title';
            zuuluu[offset] = yankee;
            offset = 'start';
            zuuluu[offset] = oscard;
            offset = 'end';
            zuuluu[offset] = report;
            offset = 'setting';
            zuuluu[offset] = golfie;
            zuuluu = option.bind(verify)(tangon, zuuluu);
            return zuuluu;
 445:
            option = _closure1_slot17;
            tangon = _closure1_slot29;
            zuuluu = {};
            foxtra = zuuluu;
            romeon = entity;
            offset = copyDataProperties(foxtra, romeon);
            offset = 'title';
            zuuluu[offset] = yankee;
            offset = 'start';
            zuuluu[offset] = oscard;
            offset = 'end';
            zuuluu[offset] = report;
            offset = 'setting';
            zuuluu[offset] = golfie;
            zuuluu = option.bind(verify)(tangon, zuuluu);
            return zuuluu;
 509:
            option = _closure1_slot17;
            tangon = _closure1_slot26;
            zuuluu = {};
            foxtra = zuuluu;
            romeon = entity;
            offset = copyDataProperties(foxtra, romeon);
            offset = 'title';
            zuuluu[offset] = yankee;
            offset = 'start';
            zuuluu[offset] = oscard;
            offset = 'end';
            zuuluu[offset] = report;
            offset = 'setting';
            zuuluu[offset] = golfie;
            zuuluu = option.bind(verify)(tangon, zuuluu);
            return zuuluu;
 573:
            option = _closure1_slot17;
            tangon = _closure1_slot25;
            zuuluu = {};
            foxtra = zuuluu;
            romeon = entity;
            offset = copyDataProperties(foxtra, romeon);
            offset = 'title';
            zuuluu[offset] = yankee;
            offset = 'start';
            zuuluu[offset] = oscard;
            offset = 'end';
            zuuluu[offset] = report;
            offset = 'setting';
            zuuluu[offset] = golfie;
            zuuluu = option.bind(verify)(tangon, zuuluu);
            return zuuluu;
 637:
            option = _closure1_slot17;
            tangon = _closure1_slot22;
            zuuluu = {};
            foxtra = zuuluu;
            romeon = entity;
            offset = copyDataProperties(foxtra, romeon);
            offset = 'title';
            zuuluu[offset] = yankee;
            offset = 'start';
            zuuluu[offset] = oscard;
            offset = 'end';
            zuuluu[offset] = report;
            zuuluu = option.bind(verify)(tangon, zuuluu);
            return zuuluu;
 692:
            tangon = _closure1_slot17;
            zuuluu = _closure1_slot24;
            michal = {};
            foxtra = michal;
            romeon = entity;
            entity = copyDataProperties(foxtra, romeon);
            entity = 'setting';
            michal[entity] = golfie;
            entity = 'start';
            michal[entity] = oscard;
            entity = 'end';
            michal[entity] = report;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['renderSettingItem'] = tangon;
    michal = function(argFoo) { // Original name: renderSettingSearchResultItem
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            zuuluu = argFoo;
            oscard = zuuluu.searchResultData;
            report = _closure1_slot5;
            michal = _closure1_slot4;
            tangon = undefined;
            report = report.bind(tangon)(zuuluu, michal);
            golfie = oscard.type;
            michal = _closure1_slot14;
            michal = michal.ROUTE;
            if(!(michal !== golfie)) { _fun00048_ip = 202; continue _fun00047 }
 50:
            michal = _closure1_slot14;
            michal = michal.PRESSABLE;
            if(!(michal !== golfie)) { _fun00048_ip = 169; continue _fun00047 }
 64:
            michal = _closure1_slot14;
            michal = michal.STATIC;
            if(!(michal !== golfie)) { _fun00048_ip = 136; continue _fun00047 }
 78:
            michal = global;
            golfie = michal.Error;
            option = zuuluu.setting;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = '[SettingRenderer] Found unsupported renderer type for setting: ';
            offset = zuuluu.bind(michal)(option);
            zuuluu = golfie.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: golfie}});
            yankee = zuuluu;
            michal = new yankee[golfie](offset, verify);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 136:
            golfie = _closure1_slot17;
            zuuluu = _closure1_slot37;
            michal = {};
            michal['searchResultData'] = oscard;
            offset = michal;
            verify = report;
            option = copyDataProperties(offset, verify);
            michal = golfie.bind(tangon)(zuuluu, michal);
            return michal;
 169:
            golfie = _closure1_slot17;
            zuuluu = _closure1_slot36;
            michal = {};
            michal['searchResultData'] = oscard;
            offset = michal;
            verify = report;
            option = copyDataProperties(offset, verify);
            michal = golfie.bind(tangon)(zuuluu, michal);
            return michal;
 202:
            zuuluu = _closure1_slot17;
            michal = _closure1_slot35;
            entity = {};
            entity['searchResultData'] = oscard;
            offset = entity;
            verify = report;
            report = copyDataProperties(offset, verify);
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['renderSettingSearchResultItem'] = michal;
    return entity;
})();