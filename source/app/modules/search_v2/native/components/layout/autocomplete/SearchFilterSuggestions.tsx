// app/modules/search_v2/native/components/layout/autocomplete/SearchFilterSuggestions.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: SearchFilterPrefixRow
        report = argFoo;
        offset = report.text;
        var _closure2_slot0 = offset;
        mike = report.searchTokenType;
        var _closure2_slot1 = mike;
        options = report.onPress;
        var _closure2_slot2 = options;
        tango = {'text': 0, 'searchTokenType': 0, 'onPress': 0};
        backup = null;
        kilo = tango;
        zulu = silentSetPrototypeOf(kilo, backup);
        kilo = {};
        backup = report;
        foxtrot = tango;
        report = copyDataProperties(kilo, backup, foxtrot);
        verify = _closure1_slot4;
        oscar = verify.useMemo;
        tango = new Array(1);
        tango[0] = mike;
        zulu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 8;
                entity = tango[entity];
                report = undefined;
                tango = zulu.bind(report)(entity);
                zulu = tango.getSearchTokenIcon;
                entity = _closure2_slot1;
                tango = zulu.bind(tango)(entity);
                entity = null;
                zulu = entity != tango;
                if(!zulu) { _fun00002_ip = 72; continue _fun00001 }
 52:
                zulu = _closure1_slot9;
                mike = {};
                oscar = 'sm';
                mike['size'] = oscar;
                entity = zulu.bind(report)(tango, mike);
 72:
                return entity;
            }
        };
        romeo = oscar.bind(verify)(zulu, tango);
        oscar = _closure1_slot4;
        tango = oscar.useMemo;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.getSearchTokenSubLabel;
            entity = _closure2_slot1;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar = tango.bind(oscar)(mike, zulu);
        tango = _closure1_slot4;
        zulu = tango.useCallback;
        mike = new Array(2);
        mike[0] = options;
        mike[1] = offset;
        entity = function() {
            zulu = _closure2_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        verify = zulu.bind(tango)(entity, mike);
        tango = _closure1_slot9;
        options = _closure1_slot0;
        yankee = _closure1_slot2;
        entity = 9;
        entity = yankee[entity];
        zulu = undefined;
        entity = options.bind(zulu)(entity);
        mike = entity.TableRow;
        entity = {};
        entity['icon'] = romeo;
        entity['onPress'] = verify;
        verify = _closure1_slot9;
        golf = 10;
        golf = yankee[golf];
        golf = options.bind(zulu)(golf);
        options = golf.Text;
        golf = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
        golf['children'] = offset;
        golf = verify.bind(zulu)(options, golf);
        entity['label'] = golf;
        entity['subLabel'] = oscar;
        kilo = entity;
        backup = report;
        report = copyDataProperties(kilo, backup);
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: getSuggestionsKey
        zulu = argFoo;
        mike = zulu.map;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.text;
            return entity;
        };
        zulu = mike.bind(zulu)(entity);
        mike = zulu.join;
        entity = ' ';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: AnimatedEnterExitContainer
        entity = argFoo;
        report = entity.children;
        yankee = entity.state;
        var _closure2_slot0 = yankee;
        foxtrot = entity.cleanUp;
        var _closure2_slot1 = foxtrot;
        kilo = _closure1_slot0;
        golf = _closure1_slot2;
        entity = 11;
        oscar = golf[entity];
        tango = undefined;
        verify = kilo.bind(tango)(oscar);
        options = verify.useSharedValue;
        oscar = 0;
        romeo = options.bind(verify)(oscar);
        var _closure2_slot2 = romeo;
        oscar = golf[entity];
        verify = kilo.bind(tango)(oscar);
        options = verify.useAnimatedStyle;
        oscar = function() { // Original name: u
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = {};
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                tango = 12;
                zulu = oscar[tango];
                options = undefined;
                backup = report.bind(options)(zulu);
                foxtrot = backup.withSpring;
                golf = _closure2_slot2;
                zulu = golf.get;
                romeo = zulu.bind(golf)();
                verify = 13;
                zulu = oscar[verify];
                zulu = report.bind(options)(zulu);
                echo = zulu.springStandard;
                offset = function(argFoo) { // Original name: t
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = argFoo;
                        if(!entity) { _fun00006_ip = 54; continue _fun00005 }
 6:
                        zulu = _closure2_slot0;
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        mike = 14;
                        tango = tango[mike];
                        mike = undefined;
                        mike = report.bind(mike)(tango);
                        mike = mike.TransitionStates;
                        mike = mike.YEETED;
                        entity = zulu === mike;
 54:
                        if(!entity) { _fun00006_ip = 103; continue _fun00005 }
 57:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 11;
                        entity = mike[entity];
                        mike = undefined;
                        tango = zulu.bind(mike)(entity);
                        zulu = tango.runOnJS;
                        entity = _closure2_slot1;
                        entity = zulu.bind(tango)(entity);
                        entity = entity.bind(mike)();
 103:
                        entity = undefined;
                        return entity;
                    }
                };
                zulu = {};
                sizing = _closure2_slot0;
                zulu['state'] = sizing;
                sizing = 14;
                sizing = oscar[sizing];
                sizing = report.bind(options)(sizing);
                sizing = sizing.TransitionStates;
                zulu['TransitionStates'] = sizing;
                sizing = 11;
                sizing = oscar[sizing];
                sizing = report.bind(options)(sizing);
                sizing = sizing.runOnJS;
                zulu['runOnJS'] = sizing;
                kilo = _closure2_slot1;
                zulu['cleanUp'] = kilo;
                offset['__closure'] = zulu;
                zulu = 10696166249954.0;
                offset['__workletHash'] = zulu;
                zulu = _closure1_slot12;
                offset['__initData'] = zulu;
                result = 'respect-motion-settings';
                source = backup;
                update = romeo;
                output = offset;
                zulu = source[foxtrot](update, echo, result, output, sizing);
                entity['opacity'] = zulu;
                zulu = {};
                tango = oscar[tango];
                oscar = report.bind(options)(tango);
                report = oscar.withSpring;
                tango = golf.get;
                offset = tango.bind(golf)();
                tango = -15;
                golf = 1;
                if(!(golf === offset)) { _fun00004_ip = 233; continue _fun00003 }
 231:
                tango = 0;
 233:
                golf = _closure1_slot0;
                mike = _closure1_slot2;
                mike = mike[verify];
                mike = golf.bind(options)(mike);
                mike = mike.springStandard;
                mike = report.bind(oscar)(tango, mike);
                zulu['translateY'] = mike;
                mike = new Array(1);
                mike[0] = zulu;
                entity['transform'] = mike;
                return entity;
            }
        };
        offset = {};
        backup = 12;
        backup = golf[backup];
        backup = kilo.bind(tango)(backup);
        backup = backup.withSpring;
        offset['withSpring'] = backup;
        offset['opacity'] = romeo;
        backup = 13;
        backup = golf[backup];
        backup = kilo.bind(tango)(backup);
        backup = backup.springStandard;
        offset['springStandard'] = backup;
        offset['state'] = yankee;
        backup = 14;
        backup = golf[backup];
        backup = kilo.bind(tango)(backup);
        backup = backup.TransitionStates;
        offset['TransitionStates'] = backup;
        backup = golf[entity];
        backup = kilo.bind(tango)(backup);
        backup = backup.runOnJS;
        offset['runOnJS'] = backup;
        offset['cleanUp'] = foxtrot;
        oscar['__closure'] = offset;
        offset = 334512108462.0;
        oscar['__workletHash'] = offset;
        offset = _closure1_slot11;
        oscar['__initData'] = offset;
        oscar = options.bind(verify)(oscar);
        offset = _closure1_slot4;
        verify = offset.useEffect;
        options = new Array(2);
        options[0] = romeo;
        options[1] = yankee;
        zulu = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = _closure2_slot2;
                zulu = tango.set;
                oscar = _closure2_slot0;
                report = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                mike = report.bind(entity)(mike);
                mike = mike.TransitionStates;
                report = mike.YEETED;
                mike = 1;
                if(!(oscar === report)) { _fun00008_ip = 62; continue _fun00007 }
 60:
                mike = 0;
 62:
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        zulu = verify.bind(offset)(zulu, options);
        zulu = _closure1_slot9;
        mike = _closure1_slot1;
        entity = golf[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.View;
        entity = {};
        entity['style'] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = romeo.bind(entity)(tango);
    var _closure1_slot3 = tango;
    foxtrot = 1;
    golf = oscar[foxtrot];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.subscribeTextInputValue;
    var _closure1_slot6 = options;
    tango = tango.useIsAutocompleteVisible;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SearchFilterAddLocations;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    yankee = 7;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_SURFACE_OVERLAY;
    offset['backgroundColor'] = backup;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    offset['borderRadius'] = backup;
    backup = oscar[yankee];
    backup = romeo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BORDER_SUBTLE;
    offset['borderColor'] = backup;
    offset['borderWidth'] = foxtrot;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.shadows;
    sizing = yankee.SHADOW_LOW;
    output = offset;
    yankee = copyDataProperties(output, sizing);
    tango['card'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot10 = tango;
    tango = {};
    options = "function SearchFilterSuggestionsTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};}";
    tango['code'] = options;
    var _closure1_slot11 = tango;
    tango = {};
    options = 'function SearchFilterSuggestionsTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    tango['code'] = options;
    var _closure1_slot12 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        entity = argFoo;
        result = entity.searchContext;
        var _closure2_slot0 = result;
        golf = entity.onLayoutMeasure;
        var _closure2_slot1 = golf;
        foxtrot = entity.containerStyle;
        var _closure2_slot2 = foxtrot;
        romeo = entity.dismissed;
        mike = _closure1_slot10;
        tango = undefined;
        verify = mike.bind(tango)();
        var _closure2_slot3 = verify;
        mike = _closure1_slot0;
        options = _closure1_slot2;
        report = 16;
        report = options[report];
        oscar = mike.bind(tango)(report);
        report = oscar.useEligibleFilterTokensSet;
        yankee = report.bind(oscar)(result);
        offset = _closure1_slot4;
        oscar = offset.useState;
        report = new Array(0);
        offset = oscar.bind(offset)(report);
        oscar = _closure1_slot3;
        report = 2;
        offset = oscar.bind(tango)(offset, report);
        report = 0;
        oscar = offset[report];
        var _closure2_slot4 = oscar;
        report = 1;
        report = offset[report];
        var _closure2_slot5 = report;
        kilo = _closure1_slot4;
        backup = kilo.useRef;
        report = _closure1_slot14;
        offset = report.bind(tango)(oscar);
        backup = backup.bind(kilo)(offset);
        var _closure2_slot6 = backup;
        offset = _closure1_slot7;
        kilo = offset.bind(tango)(result);
        var _closure2_slot7 = kilo;
        sizing = _closure1_slot1;
        offset = 17;
        offset = options[offset];
        offset = sizing.bind(tango)(offset);
        sizing = offset.bind(tango)(romeo);
        var _closure2_slot8 = sizing;
        echo = _closure1_slot4;
        output = echo.useCallback;
        romeo = function(argFoo) {
            tango = argFoo;
            zulu = _closure2_slot5;
            entity = undefined;
            zulu = zulu.bind(entity)(tango);
            zulu = _closure2_slot6;
            mike = _closure1_slot14;
            mike = mike.bind(entity)(tango);
            zulu['current'] = mike;
            return entity;
        };
        offset = new Array(0);
        offset = output.bind(echo)(romeo, offset);
        var _closure2_slot9 = offset;
        romeo = function(argFoo, argBar, argBaz, argCorge) { // Original name: useDebouncedGenerateSuggestions
            oscar = argFoo;
            golf = argBar;
            options = argBaz;
            report = argCorge;
            var _closure3_slot0 = oscar;
            var _closure3_slot1 = golf;
            var _closure3_slot2 = options;
            var _closure3_slot3 = report;
            tango = _closure1_slot4;
            zulu = tango.useMemo;
            mike = new Array(4);
            mike[0] = options;
            mike[1] = golf;
            mike[2] = oscar;
            mike[3] = report;
            entity = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 15;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.debounce;
                mike = function(argFoo, argBar) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        oscar = argFoo;
                        mike = argBar;
                        if(!(oscar !== mike)) { _fun00010_ip = 171; continue _fun00009 }
 15:
                        mike = oscar.trim;
                        zulu = mike.bind(oscar)();
                        mike = '';
                        if(!(mike === zulu)) { _fun00010_ip = 53; continue _fun00009 }
 33:
                        tango = _closure3_slot1;
                        zulu = undefined;
                        mike = new Array(0);
                        mike = tango.bind(zulu)(mike);
                        _fun00010_ip = 171; continue _fun00009;
 53:
                        report = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 8;
                        mike = zulu[mike];
                        zulu = undefined;
                        report = report.bind(zulu)(mike);
                        mike = report.getSearchFilterSuggestions;
                        oscar = mike.bind(report)(oscar);
                        var _closure5_slot0 = oscar;
                        mike = new Array(0);
                        var _closure5_slot1 = mike;
                        report = oscar.forEach;
                        entity = function(argFoo, argBar) {
                            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                entity = argFoo;
                                oscar = argBar;
                                golf = entity.text;
                                options = entity.token;
                                mike = _closure3_slot0;
                                entity = mike.has;
                                entity = entity.bind(mike)(options);
                                if(!entity) { _fun00012_ip = 155; continue _fun00011 }
 37:
                                zulu = _closure5_slot1;
                                mike = zulu.push;
                                entity = {};
                                entity['text'] = golf;
                                entity['searchTokenType'] = options;
                                golf = 0;
                                golf = golf === oscar;
                                entity['start'] = golf;
                                tango = _closure5_slot0;
                                golf = tango.length;
                                tango = 1;
                                tango = golf - tango;
                                tango = oscar === tango;
                                entity['end'] = tango;
                                verify = _closure1_slot0;
                                golf = _closure1_slot2;
                                oscar = 8;
                                golf = golf[oscar];
                                oscar = undefined;
                                golf = verify.bind(oscar)(golf);
                                oscar = golf.getSearchTokenPressHandler;
                                report = _closure3_slot2;
                                tango = _closure1_slot8;
                                tango = tango.SEARCH_INPUT_DROPDOWN;
                                tango = oscar.bind(golf)(report, options, tango);
                                entity['onPress'] = tango;
                                entity = mike.bind(zulu)(entity);
 155:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = report.bind(oscar)(entity);
                        report = _closure3_slot3;
                        oscar = report.current;
                        report = _closure1_slot14;
                        report = report.bind(zulu)(mike);
                        if(!(oscar !== report)) { _fun00010_ip = 171; continue _fun00009 }
 143:
                        report = _closure3_slot3;
                        tango = _closure1_slot14;
                        tango = tango.bind(zulu)(mike);
                        report['current'] = tango;
                        entity = _closure3_slot1;
                        entity = entity.bind(zulu)(mike);
 171:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = 500;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        sequence = undefined;
        vacuum = yankee;
        control = offset;
        source = result;
        update = backup;
        echo = sequence[romeo](vacuum, control, source, update, echo);
        var _closure2_slot10 = echo;
        output = _closure1_slot4;
        backup = output.useEffect;
        romeo = new Array(4);
        romeo[0] = echo;
        romeo[1] = result;
        romeo[2] = offset;
        romeo[3] = yankee;
        yankee = function() {
            tango = _closure1_slot6;
            zulu = _closure2_slot0;
            mike = _closure2_slot10;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        yankee = backup.bind(output)(yankee, romeo);
        backup = _closure1_slot4;
        romeo = backup.useEffect;
        yankee = new Array(3);
        yankee[0] = sizing;
        yankee[1] = kilo;
        yankee[2] = offset;
        offset = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                mike = _closure2_slot7;
                if(mike) { _fun00014_ip = 14; continue _fun00013 }
 10:
                mike = _closure2_slot8;
 14:
                if(!mike) { _fun00014_ip = 32; continue _fun00013 }
 17:
                zulu = _closure2_slot9;
                mike = undefined;
                entity = new Array(0);
                entity = zulu.bind(mike)(entity);
 32:
                entity = undefined;
                return entity;
            }
        };
        offset = romeo.bind(backup)(offset, yankee);
        romeo = _closure1_slot4;
        yankee = romeo.useMemo;
        offset = new Array(2);
        offset[0] = foxtrot;
        verify = verify.card;
        offset[1] = verify;
        verify = function() {
            entity = _closure2_slot3;
            zulu = entity.card;
            entity = new Array(2);
            entity[0] = zulu;
            mike = _closure2_slot2;
            entity[1] = mike;
            return entity;
        };
        romeo = yankee.bind(romeo)(verify, offset);
        var _closure2_slot11 = romeo;
        yankee = _closure1_slot4;
        offset = yankee.useRef;
        verify = null;
        verify = offset.bind(yankee)(verify);
        var _closure2_slot12 = verify;
        yankee = _closure1_slot4;
        offset = yankee.useCallback;
        verify = new Array(1);
        verify[0] = golf;
        golf = function() {
            entity = global;
            zulu = entity.setTimeout;
            entity = undefined;
            mike = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot12;
                    zulu = entity.current;
                    entity = null;
                    if(!(entity != zulu)) { _fun00016_ip = 38; continue _fun00015 }
 18:
                    mike = zulu.measure;
                    entity = function(argFoo, argBar, argBaz, argCorge, argGrault, argFred) {
                        tango = argGrault;
                        report = argFred;
                        zulu = _closure2_slot1;
                        mike = {};
                        mike['top'] = report;
                        entity = argCorge;
                        entity = report + entity;
                        mike['bottom'] = entity;
                        mike['left'] = tango;
                        entity = argBaz;
                        entity = tango + entity;
                        mike['right'] = entity;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
 38:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        yankee = offset.bind(yankee)(golf, verify);
        var _closure2_slot13 = yankee;
        offset = _closure1_slot4;
        verify = offset.useMemo;
        golf = new Array(1);
        golf[0] = oscar;
        oscar = function() {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = _closure2_slot4;
                zulu = entity.length;
                entity = 0;
                if(!(!(zulu > entity))) { _fun00018_ip = 24; continue _fun00017 }
 18:
                entity = new Array(0);
                _fun00018_ip = 39; continue _fun00017;
 24:
                zulu = _closure2_slot4;
                mike = new Array(1);
                mike[0] = zulu;
                entity = mike;
 39:
                return entity;
            }
        };
        golf = verify.bind(offset)(oscar, golf);
        offset = _closure1_slot4;
        verify = offset.useCallback;
        oscar = new Array(2);
        oscar[0] = romeo;
        oscar[1] = yankee;
        zulu = function(argFoo, argBar, argBaz, argCorge) {
            verify = argBar;
            report = _closure1_slot9;
            tango = _closure1_slot15;
            zulu = {};
            mike = argBaz;
            zulu['state'] = mike;
            mike = argCorge;
            zulu['cleanUp'] = mike;
            golf = _closure1_slot9;
            oscar = _closure1_slot5;
            entity = {};
            options = _closure2_slot12;
            entity['ref'] = options;
            options = _closure2_slot11;
            entity['style'] = options;
            options = false;
            entity['collapsable'] = options;
            mike = _closure2_slot13;
            entity['onLayout'] = mike;
            options = verify.map;
            mike = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot9;
                tango = _closure1_slot13;
                zulu = {};
                options = zulu;
                golf = entity;
                mike = copyDataProperties(options, golf);
                mike = entity.text;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            mike = options.bind(verify)(mike);
            entity['children'] = mike;
            mike = undefined;
            entity = golf.bind(mike)(oscar, entity);
            zulu['children'] = entity;
            entity = argFoo;
            entity = report.bind(mike)(tango, zulu, entity);
            return entity;
        };
        oscar = verify.bind(offset)(zulu, oscar);
        zulu = _closure1_slot9;
        entity = 14;
        entity = options[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.TransitionGroup;
        entity = {};
        entity['items'] = golf;
        entity['renderItem'] = oscar;
        entity['getItemKey'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/components/layout/autocomplete/SearchFilterSuggestions.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();