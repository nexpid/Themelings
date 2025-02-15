// app/modules/main_tabs_v2/native/settings/renderer/SettingListRenderer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: SearchListSectionLabel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.label;
            entity = _closure1_slot11;
            tango = undefined;
            report = entity.bind(tango)();
            zulu = _closure1_slot10;
            mike = _closure1_slot4;
            entity = {};
            report = report.spacer;
            entity['style'] = report;
            options = 'string';
            golf = typeof verify;
            report = verify;
            if(!(options === golf)) { _fun00002_ip = 97; continue _fun00001 }
 55:
            options = _closure1_slot10;
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 8;
            oscar = offset[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.TableRowGroupTitle;
            oscar = {};
            oscar['title'] = verify;
            report = options.bind(tango)(golf, oscar);
 97:
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
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
            tango = undefined;
            report = entity.bind(tango)();
            zulu = _closure1_slot10;
            mike = _closure1_slot4;
            entity = {};
            report = report.subLabel;
            entity['style'] = report;
            golf = 'string';
            report = typeof verify;
            if(!(golf !== report)) { _fun00004_ip = 77; continue _fun00003 }
 53:
            report = global;
            golf = report.Array;
            report = golf.isArray;
            golf = report.bind(golf)(verify);
            report = verify;
            if(!golf) { _fun00004_ip = 130; continue _fun00003 }
 77:
            options = _closure1_slot10;
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 9;
            oscar = offset[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.Text;
            oscar = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            oscar['children'] = verify;
            report = options.bind(tango)(golf, oscar);
 130:
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: getItemType
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zulu = entity.type;
            tango = _closure1_slot8;
            tango = tango.SECTION_LABEL;
            if(!(tango !== zulu)) { _fun00006_ip = 112; continue _fun00005 }
 25:
            tango = _closure1_slot8;
            tango = tango.SECTION_SUBLABEL;
            if(!(tango !== zulu)) { _fun00006_ip = 112; continue _fun00005 }
 39:
            tango = _closure1_slot8;
            tango = tango.SETTING;
            if(!(tango !== zulu)) { _fun00006_ip = 71; continue _fun00005 }
 53:
            mike = _closure1_slot8;
            mike = mike.SETTING_SEARCH_RESULT;
            if(!(mike !== zulu)) { _fun00006_ip = 71; continue _fun00005 }
 67:
            mike = undefined;
            return mike;
 71:
            oscar = entity.type;
            report = entity.setting;
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = '';
            mike = '-';
            mike = tango.bind(zulu)(oscar, mike, report);
            return mike;
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
            tango = entity.type;
            zulu = _closure1_slot8;
            zulu = zulu.SECTION_LABEL;
            if(!(zulu !== tango)) { _fun00008_ip = 180; continue _fun00007 }
 33:
            zulu = _closure1_slot8;
            zulu = zulu.SECTION_SUBLABEL;
            if(!(zulu !== tango)) { _fun00008_ip = 149; continue _fun00007 }
 47:
            zulu = _closure1_slot8;
            zulu = zulu.SETTING_SEARCH_RESULT;
            if(!(zulu !== tango)) { _fun00008_ip = 114; continue _fun00007 }
 61:
            zulu = _closure1_slot8;
            zulu = zulu.SETTING;
            if(!(zulu !== tango)) { _fun00008_ip = 79; continue _fun00007 }
 75:
            zulu = undefined;
            return zulu;
 79:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 10;
            tango = tango[zulu];
            zulu = undefined;
            tango = report.bind(zulu)(tango);
            zulu = tango.renderSettingItem;
            zulu = zulu.bind(tango)(entity);
            return zulu;
 114:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 10;
            tango = tango[zulu];
            zulu = undefined;
            tango = report.bind(zulu)(tango);
            zulu = tango.renderSettingSearchResultItem;
            zulu = zulu.bind(tango)(entity);
            return zulu;
 149:
            oscar = _closure1_slot10;
            report = _closure1_slot13;
            tango = {};
            zulu = entity.subLabel;
            tango['subLabel'] = zulu;
            zulu = undefined;
            zulu = oscar.bind(zulu)(report, tango);
            return zulu;
 180:
            tango = _closure1_slot10;
            zulu = _closure1_slot12;
            mike = {};
            entity = entity.label;
            mike['label'] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: keyExtractor
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            report = argBar;
            zulu = entity.type;
            tango = _closure1_slot8;
            tango = tango.SECTION_LABEL;
            if(!(tango !== zulu)) { _fun00010_ip = 179; continue _fun00009 }
 31:
            tango = _closure1_slot8;
            tango = tango.SECTION_SUBLABEL;
            if(!(tango !== zulu)) { _fun00010_ip = 118; continue _fun00009 }
 45:
            tango = _closure1_slot8;
            tango = tango.SETTING;
            if(!(tango !== zulu)) { _fun00010_ip = 77; continue _fun00009 }
 59:
            mike = _closure1_slot8;
            mike = mike.SETTING_SEARCH_RESULT;
            if(!(mike !== zulu)) { _fun00010_ip = 77; continue _fun00009 }
 73:
            mike = undefined;
            return mike;
 77:
            golf = entity.type;
            oscar = entity.setting;
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = '';
            mike = '-';
            mike = tango.bind(zulu)(golf, mike, oscar);
            return mike;
 118:
            golf = entity.type;
            mike = entity.subLabel;
            zulu = 'string';
            mike = typeof mike;
            oscar = report;
            if(!(zulu === mike)) { _fun00010_ip = 149; continue _fun00009 }
 143:
            oscar = entity.subLabel;
 149:
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = '';
            mike = '-';
            mike = tango.bind(zulu)(golf, mike, oscar);
            return mike;
 179:
            tango = entity.type;
            mike = entity.label;
            zulu = 'string';
            mike = typeof mike;
            if(!(zulu === mike)) { _fun00010_ip = 205; continue _fun00009 }
 200:
            report = entity.label;
 205:
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            mike = '';
            entity = '-';
            entity = zulu.bind(mike)(tango, entity, report);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    report = golf[entity];
    tango = argCorge;
    entity = undefined;
    options = tango.bind(entity)(report);
    var _closure1_slot3 = options;
    yankee = 1;
    tango = golf[yankee];
    tango = oscar.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    report = tango.useIsSettingSearchQueryEmpty;
    var _closure1_slot5 = report;
    tango = tango.useSettingSearchQuery;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = golf[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    report = tango.ListRendererType;
    var _closure1_slot8 = report;
    tango = tango.SETTINGS_LIST_ITEM_ESTIMATED_SIZE;
    var _closure1_slot9 = tango;
    tango = 5;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot10 = tango;
    tango = 6;
    tango = golf[tango];
    verify = oscar.bind(entity)(tango);
    report = verify.createStyles;
    tango = {};
    offset = {};
    romeo = 7;
    romeo = golf[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BG_BASE_SECONDARY;
    offset['backgroundColor'] = romeo;
    offset['flexGrow'] = yankee;
    tango['container'] = offset;
    offset = {};
    yankee = 16;
    offset['paddingHorizontal'] = yankee;
    tango['contentContainer'] = offset;
    offset = {};
    yankee = 24;
    offset['paddingBottom'] = yankee;
    tango['searchResultsHeader'] = offset;
    offset = {};
    offset['paddingTop'] = yankee;
    tango['spacer'] = offset;
    offset = {};
    yankee = 8;
    offset['marginTop'] = yankee;
    tango['subLabel'] = offset;
    tango = report.bind(verify)(tango);
    var _closure1_slot11 = tango;
    report = options.memo;
    tango = function(argFoo) {
        mike = argFoo;
        oscar = mike.sections;
        var _closure2_slot0 = oscar;
        foxtrot = mike.ListHeaderComponent;
        offset = mike.ListFooterComponent;
        golf = mike.containerStyle;
        mike = _closure1_slot11;
        tango = undefined;
        yankee = mike.bind(tango)();
        zulu = _closure1_slot1;
        kilo = _closure1_slot2;
        mike = 11;
        mike = kilo[mike];
        mike = zulu.bind(tango)(mike);
        mike = mike.bind(tango)();
        romeo = mike.bottom;
        report = _closure1_slot7;
        zulu = report.useField;
        mike = 'blocklist';
        verify = zulu.bind(report)(mike);
        var _closure2_slot1 = verify;
        zulu = _closure1_slot3;
        report = zulu.useMemo;
        mike = new Array(2);
        mike[0] = verify;
        mike[1] = oscar;
        entity = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.getSettingListItems;
            mike = _closure2_slot0;
            entity = _closure2_slot1;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        verify = report.bind(zulu)(entity, mike);
        mike = zulu.useRef;
        entity = null;
        backup = mike.bind(zulu)(entity);
        oscar = _closure1_slot0;
        entity = 13;
        entity = kilo[entity];
        mike = oscar.bind(tango)(entity);
        entity = mike.useAutoScrollToSearchResultSetting;
        entity = entity.bind(mike)(backup, verify);
        zulu = _closure1_slot10;
        mike = _closure1_slot4;
        entity = {};
        sizing = yankee.container;
        report = new Array(2);
        report[0] = sizing;
        report[1] = golf;
        entity['style'] = report;
        golf = _closure1_slot10;
        report = 14;
        report = kilo[report];
        report = oscar.bind(tango)(report);
        oscar = report.FlashList;
        report = {};
        report['ref'] = backup;
        report['ListHeaderComponent'] = foxtrot;
        report['ListFooterComponent'] = offset;
        offset = _closure1_slot9;
        report['estimatedItemSize'] = offset;
        offset = {};
        output = yankee.contentContainer;
        result = offset;
        yankee = copyDataProperties(result, output);
        yankee = 'paddingBottom';
        offset[yankee] = romeo;
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
        options = _closure1_slot14;
        report['getItemType'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    tango = report.bind(options)(tango);
    report = options.memo;
    mike = function(argFoo) {
        mike = argFoo;
        zulu = mike.sections;
        var _closure2_slot0 = zulu;
        oscar = mike.containerStyle;
        mike = _closure1_slot11;
        tango = undefined;
        kilo = mike.bind(tango)();
        var _closure2_slot1 = kilo;
        foxtrot = _closure1_slot1;
        romeo = _closure1_slot2;
        mike = 11;
        mike = romeo[mike];
        mike = foxtrot.bind(tango)(mike);
        mike = mike.bind(tango)();
        sizing = mike.bottom;
        report = _closure1_slot3;
        golf = report.useRef;
        mike = null;
        backup = golf.bind(report)(mike);
        mike = _closure1_slot6;
        golf = mike.bind(tango)();
        mike = report.useDeferredValue;
        verify = mike.bind(report)(golf);
        yankee = _closure1_slot0;
        mike = 15;
        mike = romeo[mike];
        golf = yankee.bind(tango)(mike);
        mike = golf.useSettingSearchResults;
        mike = mike.bind(golf)(verify);
        var _closure2_slot2 = mike;
        golf = _closure1_slot5;
        golf = golf.bind(tango)();
        var _closure2_slot3 = golf;
        output = _closure1_slot7;
        offset = output.useField;
        verify = 'blocklist';
        output = offset.bind(output)(verify);
        var _closure2_slot4 = output;
        offset = report.useMemo;
        verify = new Array(2);
        verify[0] = output;
        verify[1] = zulu;
        zulu = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.getSettingListItems;
            mike = _closure2_slot0;
            entity = _closure2_slot4;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        offset = offset.bind(report)(zulu, verify);
        var _closure2_slot5 = offset;
        verify = report.useMemo;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.getSettingListSearchResultItems;
            entity = _closure2_slot2;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = verify.bind(report)(mike, zulu);
        var _closure2_slot6 = mike;
        verify = report.useMemo;
        zulu = new Array(3);
        zulu[0] = offset;
        zulu[1] = mike;
        zulu[2] = golf;
        mike = function() {
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
        verify = verify.bind(report)(mike, zulu);
        zulu = report.useMemo;
        offset = kilo.searchResultsHeader;
        mike = new Array(2);
        mike[0] = offset;
        mike[1] = golf;
        entity = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                mike = _closure2_slot3;
                if(mike) { _fun00014_ip = 22; continue _fun00013 }
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
        offset = zulu.bind(report)(entity, mike);
        zulu = _closure1_slot10;
        entity = 16;
        entity = romeo[entity];
        mike = foxtrot.bind(tango)(entity);
        entity = {};
        golf = kilo.container;
        report = new Array(2);
        report[0] = golf;
        report[1] = oscar;
        entity['style'] = report;
        golf = _closure1_slot10;
        report = 14;
        report = romeo[report];
        report = yankee.bind(tango)(report);
        oscar = report.AnimatedFlashList;
        report = {};
        report['ref'] = backup;
        backup = 'always';
        report['keyboardShouldPersistTaps'] = backup;
        backup = {};
        result = kilo.contentContainer;
        echo = backup;
        kilo = copyDataProperties(echo, result);
        kilo = 'paddingBottom';
        backup[kilo] = sizing;
        report['contentContainerStyle'] = backup;
        report['ListHeaderComponentStyle'] = offset;
        offset = _closure1_slot9;
        report['estimatedItemSize'] = offset;
        backup = _closure1_slot10;
        offset = 17;
        offset = romeo[offset];
        foxtrot = foxtrot.bind(tango)(offset);
        offset = {};
        offset = backup.bind(tango)(foxtrot, offset);
        report['ListHeaderComponent'] = offset;
        offset = 18;
        offset = romeo[offset];
        offset = yankee.bind(tango)(offset);
        offset = offset.dismissGlobalKeyboard;
        report['onScroll'] = offset;
        offset = {};
        yankee = 0.01;
        offset['right'] = yankee;
        report['scrollIndicatorInsets'] = offset;
        offset = _closure1_slot16;
        report['keyExtractor'] = offset;
        offset = _closure1_slot15;
        report['renderItem'] = offset;
        report['data'] = verify;
        options = _closure1_slot14;
        report['getItemType'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike = report.bind(options)(mike);
    report = 19;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/settings/renderer/SettingListRenderer.tsx';
    report = oscar.bind(golf)(report);
    zulu['SettingsList'] = tango;
    zulu['SearchableSettingsList'] = mike;
    return entity;
})();