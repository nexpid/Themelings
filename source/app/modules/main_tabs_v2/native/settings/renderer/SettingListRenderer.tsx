// app/modules/main_tabs_v2/native/settings/renderer/SettingListRenderer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: SearchListSectionLabel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.label;
            entity = _closure1_slot11;
            tangon = undefined;
            report = entity.bind(tangon)();
            zuuluu = _closure1_slot10;
            michal = _closure1_slot4;
            entity = {};
            report = report.spacer;
            entity['style'] = report;
            option = 'string';
            golfie = typeof verify;
            report = verify;
            if(!(option === golfie)) { _fun00002_ip = 97; continue _fun00001 }
 55:
            option = _closure1_slot10;
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 8;
            oscard = offset[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.TableRowGroupTitle;
            oscard = {};
            oscard['title'] = verify;
            report = option.bind(tangon)(golfie, oscard);
 97:
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: SearchListSectionSubLabel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            verify = entity.subLabel;
            entity = _closure1_slot11;
            tangon = undefined;
            report = entity.bind(tangon)();
            zuuluu = _closure1_slot10;
            michal = _closure1_slot4;
            entity = {};
            report = report.subLabel;
            entity['style'] = report;
            golfie = 'string';
            report = typeof verify;
            if(!(golfie !== report)) { _fun00004_ip = 77; continue _fun00003 }
 53:
            report = global;
            golfie = report.Array;
            report = golfie.isArray;
            golfie = report.bind(golfie)(verify);
            report = verify;
            if(!golfie) { _fun00004_ip = 130; continue _fun00003 }
 77:
            option = _closure1_slot10;
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 9;
            oscard = offset[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.Text;
            oscard = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            oscard['children'] = verify;
            report = option.bind(tangon)(golfie, oscard);
 130:
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: getItemType
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.type;
            tangon = _closure1_slot8;
            tangon = tangon.SECTION_LABEL;
            if(!(tangon !== zuuluu)) { _fun00006_ip = 112; continue _fun00005 }
 25:
            tangon = _closure1_slot8;
            tangon = tangon.SECTION_SUBLABEL;
            if(!(tangon !== zuuluu)) { _fun00006_ip = 112; continue _fun00005 }
 39:
            tangon = _closure1_slot8;
            tangon = tangon.SETTING;
            if(!(tangon !== zuuluu)) { _fun00006_ip = 71; continue _fun00005 }
 53:
            michal = _closure1_slot8;
            michal = michal.SETTING_SEARCH_RESULT;
            if(!(michal !== zuuluu)) { _fun00006_ip = 71; continue _fun00005 }
 67:
            michal = undefined;
            return michal;
 71:
            oscard = entity.type;
            report = entity.setting;
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = '-';
            michal = tangon.bind(zuuluu)(oscard, michal, report);
            return michal;
 112:
            entity = entity.type;
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: renderItem
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            entity = entity.item;
            tangon = entity.type;
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.SECTION_LABEL;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 180; continue _fun00007 }
 33:
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.SECTION_SUBLABEL;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 149; continue _fun00007 }
 47:
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.SETTING_SEARCH_RESULT;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 114; continue _fun00007 }
 61:
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.SETTING;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 79; continue _fun00007 }
 75:
            zuuluu = undefined;
            return zuuluu;
 79:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 10;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = report.bind(zuuluu)(tangon);
            zuuluu = tangon.renderSettingItem;
            zuuluu = zuuluu.bind(tangon)(entity);
            return zuuluu;
 114:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 10;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = report.bind(zuuluu)(tangon);
            zuuluu = tangon.renderSettingSearchResultItem;
            zuuluu = zuuluu.bind(tangon)(entity);
            return zuuluu;
 149:
            oscard = _closure1_slot10;
            report = _closure1_slot13;
            tangon = {};
            zuuluu = entity.subLabel;
            tangon['subLabel'] = zuuluu;
            zuuluu = undefined;
            zuuluu = oscard.bind(zuuluu)(report, tangon);
            return zuuluu;
 180:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot12;
            michal = {};
            entity = entity.label;
            michal['label'] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: keyExtractor
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            report = argBar;
            zuuluu = entity.type;
            tangon = _closure1_slot8;
            tangon = tangon.SECTION_LABEL;
            if(!(tangon !== zuuluu)) { _fun00010_ip = 179; continue _fun00009 }
 31:
            tangon = _closure1_slot8;
            tangon = tangon.SECTION_SUBLABEL;
            if(!(tangon !== zuuluu)) { _fun00010_ip = 118; continue _fun00009 }
 45:
            tangon = _closure1_slot8;
            tangon = tangon.SETTING;
            if(!(tangon !== zuuluu)) { _fun00010_ip = 77; continue _fun00009 }
 59:
            michal = _closure1_slot8;
            michal = michal.SETTING_SEARCH_RESULT;
            if(!(michal !== zuuluu)) { _fun00010_ip = 77; continue _fun00009 }
 73:
            michal = undefined;
            return michal;
 77:
            golfie = entity.type;
            oscard = entity.setting;
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = '-';
            michal = tangon.bind(zuuluu)(golfie, michal, oscard);
            return michal;
 118:
            golfie = entity.type;
            michal = entity.subLabel;
            zuuluu = 'string';
            michal = typeof michal;
            oscard = report;
            if(!(zuuluu === michal)) { _fun00010_ip = 149; continue _fun00009 }
 143:
            oscard = entity.subLabel;
 149:
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = '-';
            michal = tangon.bind(zuuluu)(golfie, michal, oscard);
            return michal;
 179:
            tangon = entity.type;
            michal = entity.label;
            zuuluu = 'string';
            michal = typeof michal;
            if(!(zuuluu === michal)) { _fun00010_ip = 205; continue _fun00009 }
 200:
            report = entity.label;
 205:
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = '';
            entity = '-';
            entity = zuuluu.bind(michal)(tangon, entity, report);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    report = golfie[entity];
    tangon = argCor;
    entity = undefined;
    option = tangon.bind(entity)(report);
    var _closure1_slot3 = option;
    yankee = 1;
    tangon = golfie[yankee];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.useIsSettingSearchQueryEmpty;
    var _closure1_slot5 = report;
    tangon = tangon.useSettingSearchQuery;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.ListRendererType;
    var _closure1_slot8 = report;
    tangon = tangon.SETTINGS_LIST_ITEM_ESTIMATED_SIZE;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    verify = oscard.bind(entity)(tangon);
    report = verify.createStyles;
    tangon = {};
    offset = {};
    romeon = 7;
    romeon = golfie[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BG_BASE_SECONDARY;
    offset['backgroundColor'] = romeon;
    offset['flexGrow'] = yankee;
    tangon['container'] = offset;
    offset = {};
    yankee = 16;
    offset['paddingHorizontal'] = yankee;
    tangon['contentContainer'] = offset;
    offset = {};
    yankee = 24;
    offset['paddingBottom'] = yankee;
    tangon['searchResultsHeader'] = offset;
    offset = {};
    offset['paddingTop'] = yankee;
    tangon['spacer'] = offset;
    offset = {};
    yankee = 8;
    offset['marginTop'] = yankee;
    tangon['subLabel'] = offset;
    tangon = report.bind(verify)(tangon);
    var _closure1_slot11 = tangon;
    report = option.memo;
    tangon = function(argFoo) {
        michal = argFoo;
        oscard = michal.sections;
        var _closure2_slot0 = oscard;
        foxtra = michal.ListHeaderComponent;
        offset = michal.ListFooterComponent;
        golfie = michal.containerStyle;
        michal = _closure1_slot11;
        tangon = undefined;
        yankee = michal.bind(tangon)();
        zuuluu = _closure1_slot1;
        kiloes = _closure1_slot2;
        michal = 11;
        michal = kiloes[michal];
        michal = zuuluu.bind(tangon)(michal);
        michal = michal.bind(tangon)();
        romeon = michal.bottom;
        report = _closure1_slot7;
        zuuluu = report.useField;
        michal = 'blocklist';
        verify = zuuluu.bind(report)(michal);
        var _closure2_slot1 = verify;
        zuuluu = _closure1_slot3;
        report = zuuluu.useMemo;
        michal = new Array(2);
        michal[0] = verify;
        michal[1] = oscard;
        entity = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.getSettingListItems;
            michal = _closure2_slot0;
            entity = _closure2_slot1;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        verify = report.bind(zuuluu)(entity, michal);
        michal = zuuluu.useRef;
        entity = null;
        backup = michal.bind(zuuluu)(entity);
        oscard = _closure1_slot0;
        entity = 13;
        entity = kiloes[entity];
        michal = oscard.bind(tangon)(entity);
        entity = michal.useAutoScrollToSearchResultSetting;
        entity = entity.bind(michal)(backup, verify);
        zuuluu = _closure1_slot10;
        michal = _closure1_slot4;
        entity = {};
        sizing = yankee.container;
        report = new Array(2);
        report[0] = sizing;
        report[1] = golfie;
        entity['style'] = report;
        golfie = _closure1_slot10;
        report = 14;
        report = kiloes[report];
        report = oscard.bind(tangon)(report);
        oscard = report.FlashList;
        report = {};
        report['ref'] = backup;
        report['ListHeaderComponent'] = foxtra;
        report['ListFooterComponent'] = offset;
        offset = _closure1_slot9;
        report['estimatedItemSize'] = offset;
        offset = {};
        output = yankee.contentContainer;
        result = offset;
        yankee = copyDataProperties(result, output);
        yankee = 'paddingBottom';
        offset[yankee] = romeon;
        report['contentContainerStyle'] = offset;
        offset = {};
        yankee = 0.01;
        offset['right'] = yankee;
        report['scrollIndicatorInsets'] = offset;
        offset = _closure1_slot16;
        report['keyExtractor'] = offset;
        offset = _closure1_slot15;
        report['renderItem'] = offset;
        report['data'] = verify;
        option = _closure1_slot14;
        report['getItemType'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    tangon = report.bind(option)(tangon);
    report = option.memo;
    michal = function(argFoo) {
        michal = argFoo;
        zuuluu = michal.sections;
        var _closure2_slot0 = zuuluu;
        michal = _closure1_slot11;
        tangon = undefined;
        romeon = michal.bind(tangon)();
        var _closure2_slot1 = romeon;
        offset = _closure1_slot1;
        verify = _closure1_slot2;
        michal = 11;
        michal = verify[michal];
        michal = offset.bind(tangon)(michal);
        michal = michal.bind(tangon)();
        foxtra = michal.bottom;
        golfie = _closure1_slot3;
        oscard = golfie.useRef;
        michal = null;
        yankee = oscard.bind(golfie)(michal);
        michal = _closure1_slot6;
        oscard = michal.bind(tangon)();
        michal = golfie.useDeferredValue;
        backup = michal.bind(golfie)(oscard);
        option = _closure1_slot0;
        michal = 15;
        michal = verify[michal];
        oscard = option.bind(tangon)(michal);
        michal = oscard.useSettingSearchResults;
        michal = michal.bind(oscard)(backup);
        var _closure2_slot2 = michal;
        oscard = _closure1_slot5;
        backup = oscard.bind(tangon)();
        var _closure2_slot3 = backup;
        sizing = _closure1_slot7;
        kiloes = sizing.useField;
        oscard = 'blocklist';
        sizing = kiloes.bind(sizing)(oscard);
        var _closure2_slot4 = sizing;
        kiloes = golfie.useMemo;
        oscard = new Array(2);
        oscard[0] = sizing;
        oscard[1] = zuuluu;
        zuuluu = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.getSettingListItems;
            michal = _closure2_slot0;
            entity = _closure2_slot4;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        kiloes = kiloes.bind(golfie)(zuuluu, oscard);
        var _closure2_slot5 = kiloes;
        oscard = golfie.useMemo;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getSettingListSearchResultItems;
            entity = _closure2_slot2;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = oscard.bind(golfie)(michal, zuuluu);
        var _closure2_slot6 = michal;
        oscard = golfie.useMemo;
        zuuluu = new Array(3);
        zuuluu[0] = kiloes;
        zuuluu[1] = michal;
        zuuluu[2] = backup;
        michal = function() {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = _closure2_slot3;
                if(entity) { _fun00012_ip = 16; continue _fun00011 }
 10:
                entity = _closure2_slot6;
                _fun00012_ip = 20; continue _fun00011;
 16:
                entity = _closure2_slot5;
 20:
                return entity;
            }
        };
        oscard = oscard.bind(golfie)(michal, zuuluu);
        zuuluu = golfie.useMemo;
        kiloes = romeon.searchResultsHeader;
        michal = new Array(2);
        michal[0] = kiloes;
        michal[1] = backup;
        entity = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = _closure2_slot3;
                if(michal) { _fun00014_ip = 22; continue _fun00013 }
 10:
                entity = _closure2_slot1;
                entity = entity.searchResultsHeader;
                _fun00014_ip = 24; continue _fun00013;
 22:
                entity = {};
 24:
                return entity;
            }
        };
        golfie = zuuluu.bind(golfie)(entity, michal);
        zuuluu = _closure1_slot10;
        entity = 14;
        entity = verify[entity];
        entity = option.bind(tangon)(entity);
        michal = entity.AnimatedFlashList;
        entity = {};
        entity['ref'] = yankee;
        yankee = 'always';
        entity['keyboardShouldPersistTaps'] = yankee;
        yankee = romeon.container;
        entity['style'] = yankee;
        yankee = {};
        output = romeon.contentContainer;
        result = yankee;
        romeon = copyDataProperties(result, output);
        romeon = 7;
        romeon = verify[romeon];
        romeon = offset.bind(tangon)(romeon);
        romeon = romeon.spacing;
        romeon = romeon.PX_16;
        foxtra = foxtra + romeon;
        romeon = 'paddingBottom';
        yankee[romeon] = foxtra;
        entity['contentContainerStyle'] = yankee;
        entity['ListHeaderComponentStyle'] = golfie;
        golfie = _closure1_slot9;
        entity['estimatedItemSize'] = golfie;
        yankee = _closure1_slot10;
        golfie = 16;
        golfie = verify[golfie];
        offset = offset.bind(tangon)(golfie);
        golfie = {};
        golfie = yankee.bind(tangon)(offset, golfie);
        entity['ListHeaderComponent'] = golfie;
        golfie = 17;
        golfie = verify[golfie];
        golfie = option.bind(tangon)(golfie);
        golfie = golfie.dismissGlobalKeyboard;
        entity['onScroll'] = golfie;
        golfie = {};
        option = 0.01;
        golfie['right'] = option;
        entity['scrollIndicatorInsets'] = golfie;
        golfie = _closure1_slot16;
        entity['keyExtractor'] = golfie;
        golfie = _closure1_slot15;
        entity['renderItem'] = golfie;
        entity['data'] = oscard;
        report = _closure1_slot14;
        entity['getItemType'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal = report.bind(option)(michal);
    report = 18;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/settings/renderer/SettingListRenderer.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['SettingsList'] = tangon;
    zuuluu['SearchableSettingsList'] = michal;
    return entity;
})();