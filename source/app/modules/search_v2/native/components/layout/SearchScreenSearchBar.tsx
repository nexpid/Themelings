// app/modules/search_v2/native/components/layout/SearchScreenSearchBar.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    yankee = 0;
    golf = oscar[yankee];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot2 = tango;
    tango = 2;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot3 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'flexDirection': 'row', 'alignItems': 'center', 'paddingLeft': 16, 'zIndex': 10};
    tango['header'] = offset;
    offset = {};
    offset['paddingLeft'] = yankee;
    tango['headerWithBackButton'] = offset;
    offset = {'flex': 1, 'flexGrow': 1};
    tango['headerSearch'] = offset;
    offset = {'paddingRight': 16, 'paddingLeft': 12};
    tango['headerControlsRight'] = offset;
    offset = {};
    offset['height'] = yankee;
    tango['suggestionsAnchor'] = offset;
    offset = {'position': 'absolute', 'left': 0, 'right': 4294967246, 'top': 8};
    tango['suggestions'] = offset;
    offset = {};
    yankee = -28;
    offset['left'] = yankee;
    tango['suggestionsWithBackButton'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot5 = tango;
    tango = golf.forwardRef;
    mike = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            yankee = entity.searchContext;
            update = entity.onSuggestionsLayoutMesure;
            output = entity.suggestionsDismissed;
            kilo = entity.setSuggestionsDismissed;
            echo = entity.backButton;
            entity = _closure1_slot5;
            tango = undefined;
            offset = entity.bind(tango)();
            zulu = _closure1_slot4;
            mike = _closure1_slot2;
            entity = {};
            oscar = offset.header;
            report = new Array(2);
            report[0] = oscar;
            result = null;
            oscar = result != echo;
            if(!oscar) { _fun00002_ip = 84; continue _fun00001 }
 78:
            oscar = offset.headerWithBackButton;
 84:
            report[1] = oscar;
            entity['style'] = report;
            report = new Array(3);
            report[0] = echo;
            options = _closure1_slot4;
            golf = _closure1_slot2;
            oscar = {};
            romeo = offset.headerSearch;
            oscar['style'] = romeo;
            backup = _closure1_slot3;
            sizing = _closure1_slot0;
            source = _closure1_slot1;
            romeo = 4;
            romeo = source[romeo];
            foxtrot = sizing.bind(tango)(romeo);
            romeo = {};
            control = argBar;
            romeo['ref'] = control;
            romeo['searchContext'] = yankee;
            romeo['setSuggestionsDismissed'] = kilo;
            foxtrot = backup.bind(tango)(foxtrot, romeo);
            romeo = new Array(2);
            romeo[0] = foxtrot;
            foxtrot = {};
            kilo = offset.suggestionsAnchor;
            foxtrot['style'] = kilo;
            kilo = 5;
            kilo = source[kilo];
            sizing = sizing.bind(tango)(kilo);
            kilo = {};
            kilo['searchContext'] = yankee;
            kilo['onLayoutMeasure'] = update;
            kilo['dismissed'] = output;
            update = offset.suggestions;
            output = new Array(2);
            output[0] = update;
            result = result != echo;
            if(!result) { _fun00002_ip = 245; continue _fun00001 }
 239:
            result = offset.suggestionsWithBackButton;
 245:
            output[1] = result;
            kilo['containerStyle'] = output;
            kilo = backup.bind(tango)(sizing, kilo);
            foxtrot['children'] = kilo;
            foxtrot = backup.bind(tango)(golf, foxtrot);
            romeo[1] = foxtrot;
            oscar['children'] = romeo;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            options = _closure1_slot3;
            golf = _closure1_slot2;
            oscar = {};
            offset = offset.headerControlsRight;
            oscar['style'] = offset;
            offset = _closure1_slot0;
            romeo = _closure1_slot1;
            verify = 6;
            verify = romeo[verify];
            offset = offset.bind(tango)(verify);
            verify = {};
            verify['searchContext'] = yankee;
            verify = options.bind(tango)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = tango.bind(golf)(mike);
    mike = golf.memo;
    mike = mike.bind(golf)(tango);
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/components/layout/SearchScreenSearchBar.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();