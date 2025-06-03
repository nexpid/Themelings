// app/modules/search_v2/native/components/layout/autocomplete/SearchFilterSuggestions.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: SearchFilterPrefixRow
        report = argFoo;
        offset = report.text;
        var _closure2_slot0 = offset;
        michal = report.searchTokenType;
        var _closure2_slot1 = michal;
        option = report.onPress;
        var _closure2_slot2 = option;
        tangon = {'text': 0, 'searchTokenType': 0, 'onPress': 0};
        backup = null;
        kiloes = tangon;
        zuuluu = silentSetPrototypeOf(kiloes, backup);
        kiloes = {};
        backup = report;
        foxtra = tangon;
        report = copyDataProperties(kiloes, backup, foxtra);
        verify = _closure1_slot4;
        oscard = verify.useMemo;
        tangon = new Array(1);
        tangon[0] = michal;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 8;
                entity = tangon[entity];
                report = undefined;
                tangon = zuuluu.bind(report)(entity);
                zuuluu = tangon.getSearchTokenIcon;
                entity = _closure2_slot1;
                tangon = zuuluu.bind(tangon)(entity);
                entity = null;
                zuuluu = entity != tangon;
                if(!zuuluu) { _fun00002_ip = 72; continue _fun00001 }
 52:
                zuuluu = _closure1_slot8;
                michal = {};
                oscard = 'sm';
                michal['size'] = oscard;
                entity = zuuluu.bind(report)(tangon, michal);
 72:
                return entity;
            }
        };
        romeon = oscard.bind(verify)(zuuluu, tangon);
        oscard = _closure1_slot4;
        tangon = oscard.useMemo;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getSearchTokenSubLabel;
            entity = _closure2_slot1;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard = tangon.bind(oscard)(michal, zuuluu);
        tangon = _closure1_slot4;
        zuuluu = tangon.useCallback;
        michal = new Array(2);
        michal[0] = option;
        michal[1] = offset;
        entity = function() {
            zuuluu = _closure2_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        verify = zuuluu.bind(tangon)(entity, michal);
        tangon = _closure1_slot8;
        option = _closure1_slot0;
        yankee = _closure1_slot2;
        entity = 9;
        entity = yankee[entity];
        zuuluu = undefined;
        entity = option.bind(zuuluu)(entity);
        michal = entity.TableRow;
        entity = {};
        entity['icon'] = romeon;
        entity['onPress'] = verify;
        verify = _closure1_slot8;
        golfie = 10;
        golfie = yankee[golfie];
        golfie = option.bind(zuuluu)(golfie);
        option = golfie.Text;
        golfie = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
        golfie['children'] = offset;
        golfie = verify.bind(zuuluu)(option, golfie);
        entity['label'] = golfie;
        entity['subLabel'] = oscard;
        kiloes = entity;
        backup = report;
        report = copyDataProperties(kiloes, backup);
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: getSuggestionsKey
        zuuluu = argFoo;
        michal = zuuluu.map;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.text;
            return entity;
        };
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.join;
        entity = ' ';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: AnimatedEnterExitContainer
        entity = argFoo;
        report = entity.children;
        yankee = entity.state;
        var _closure2_slot0 = yankee;
        foxtra = entity.cleanUp;
        var _closure2_slot1 = foxtra;
        kiloes = _closure1_slot0;
        golfie = _closure1_slot2;
        entity = 11;
        oscard = golfie[entity];
        tangon = undefined;
        verify = kiloes.bind(tangon)(oscard);
        option = verify.useSharedValue;
        oscard = 0;
        romeon = option.bind(verify)(oscard);
        var _closure2_slot2 = romeon;
        oscard = golfie[entity];
        verify = kiloes.bind(tangon)(oscard);
        option = verify.useAnimatedStyle;
        oscard = function() { // Original name: u
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = {};
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                tangon = 12;
                zuuluu = oscard[tangon];
                option = undefined;
                backup = report.bind(option)(zuuluu);
                foxtra = backup.withSpring;
                golfie = _closure2_slot2;
                zuuluu = golfie.get;
                romeon = zuuluu.bind(golfie)();
                verify = 13;
                zuuluu = oscard[verify];
                zuuluu = report.bind(option)(zuuluu);
                echoed = zuuluu.springStandard;
                offset = function(argFoo) { // Original name: t
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = argFoo;
                        if(!entity) { _fun00006_ip = 54; continue _fun00005 }
 6:
                        zuuluu = _closure2_slot0;
                        report = _closure1_slot0;
                        tangon = _closure1_slot2;
                        michal = 14;
                        tangon = tangon[michal];
                        michal = undefined;
                        michal = report.bind(michal)(tangon);
                        michal = michal.TransitionStates;
                        michal = michal.YEETED;
                        entity = zuuluu === michal;
 54:
                        if(!entity) { _fun00006_ip = 103; continue _fun00005 }
 57:
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 11;
                        entity = michal[entity];
                        michal = undefined;
                        tangon = zuuluu.bind(michal)(entity);
                        zuuluu = tangon.runOnJS;
                        entity = _closure2_slot1;
                        entity = zuuluu.bind(tangon)(entity);
                        entity = entity.bind(michal)();
 103:
                        entity = undefined;
                        return entity;
                    }
                };
                zuuluu = {};
                sizing = _closure2_slot0;
                zuuluu['state'] = sizing;
                sizing = 14;
                sizing = oscard[sizing];
                sizing = report.bind(option)(sizing);
                sizing = sizing.TransitionStates;
                zuuluu['TransitionStates'] = sizing;
                sizing = 11;
                sizing = oscard[sizing];
                sizing = report.bind(option)(sizing);
                sizing = sizing.runOnJS;
                zuuluu['runOnJS'] = sizing;
                kiloes = _closure2_slot1;
                zuuluu['cleanUp'] = kiloes;
                offset['__closure'] = zuuluu;
                zuuluu = 10696166249954.0;
                offset['__workletHash'] = zuuluu;
                zuuluu = _closure1_slot11;
                offset['__initData'] = zuuluu;
                result = 'respect-motion-settings';
                source = backup;
                update = romeon;
                output = offset;
                zuuluu = source[foxtra](update, echoed, result, output, sizing);
                entity['opacity'] = zuuluu;
                zuuluu = {};
                tangon = oscard[tangon];
                oscard = report.bind(option)(tangon);
                report = oscard.withSpring;
                tangon = golfie.get;
                offset = tangon.bind(golfie)();
                tangon = -15;
                golfie = 1;
                if(!(golfie === offset)) { _fun00004_ip = 233; continue _fun00003 }
 231:
                tangon = 0;
 233:
                golfie = _closure1_slot0;
                michal = _closure1_slot2;
                michal = michal[verify];
                michal = golfie.bind(option)(michal);
                michal = michal.springStandard;
                michal = report.bind(oscard)(tangon, michal);
                zuuluu['translateY'] = michal;
                michal = new Array(1);
                michal[0] = zuuluu;
                entity['transform'] = michal;
                return entity;
            }
        };
        offset = {};
        backup = 12;
        backup = golfie[backup];
        backup = kiloes.bind(tangon)(backup);
        backup = backup.withSpring;
        offset['withSpring'] = backup;
        offset['opacity'] = romeon;
        backup = 13;
        backup = golfie[backup];
        backup = kiloes.bind(tangon)(backup);
        backup = backup.springStandard;
        offset['springStandard'] = backup;
        offset['state'] = yankee;
        backup = 14;
        backup = golfie[backup];
        backup = kiloes.bind(tangon)(backup);
        backup = backup.TransitionStates;
        offset['TransitionStates'] = backup;
        backup = golfie[entity];
        backup = kiloes.bind(tangon)(backup);
        backup = backup.runOnJS;
        offset['runOnJS'] = backup;
        offset['cleanUp'] = foxtra;
        oscard['__closure'] = offset;
        offset = 334512108462.0;
        oscard['__workletHash'] = offset;
        offset = _closure1_slot10;
        oscard['__initData'] = offset;
        oscard = option.bind(verify)(oscard);
        offset = _closure1_slot4;
        verify = offset.useEffect;
        option = new Array(2);
        option[0] = romeon;
        option[1] = yankee;
        zuuluu = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = _closure2_slot2;
                zuuluu = tangon.set;
                oscard = _closure2_slot0;
                report = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 14;
                michal = michal[entity];
                entity = undefined;
                michal = report.bind(entity)(michal);
                michal = michal.TransitionStates;
                report = michal.YEETED;
                michal = 1;
                if(!(oscard === report)) { _fun00008_ip = 62; continue _fun00007 }
 60:
                michal = 0;
 62:
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        zuuluu = verify.bind(offset)(zuuluu, option);
        zuuluu = _closure1_slot8;
        michal = _closure1_slot1;
        entity = golfie[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.View;
        entity = {};
        entity['style'] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    foxtra = 1;
    golfie = oscard[foxtra];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SearchFilterAddLocations;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    yankee = 7;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BG_SURFACE_OVERLAY;
    offset['backgroundColor'] = backup;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    offset['borderRadius'] = backup;
    backup = oscard[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BORDER_SUBTLE;
    offset['borderColor'] = backup;
    offset['borderWidth'] = foxtra;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.shadows;
    sizing = yankee.SHADOW_LOW;
    output = offset;
    yankee = copyDataProperties(output, sizing);
    tangon['card'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot9 = tangon;
    tangon = {};
    option = "function SearchFilterSuggestionsTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}),transform:[{translateY:withSpring(opacity.get()===1?0:-15,springStandard)}]};}";
    tangon['code'] = option;
    var _closure1_slot10 = tangon;
    tangon = {};
    option = 'function SearchFilterSuggestionsTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    tangon['code'] = option;
    var _closure1_slot11 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        entity = argFoo;
        result = entity.searchContext;
        var _closure2_slot0 = result;
        golfie = entity.onLayoutMeasure;
        var _closure2_slot1 = golfie;
        foxtra = entity.containerStyle;
        var _closure2_slot2 = foxtra;
        romeon = entity.dismissed;
        michal = _closure1_slot9;
        tangon = undefined;
        verify = michal.bind(tangon)();
        var _closure2_slot3 = verify;
        michal = _closure1_slot0;
        option = _closure1_slot2;
        report = 16;
        report = option[report];
        oscard = michal.bind(tangon)(report);
        report = oscard.useEligibleFilterTokensSet;
        yankee = report.bind(oscard)(result);
        offset = _closure1_slot4;
        oscard = offset.useState;
        report = new Array(0);
        offset = oscard.bind(offset)(report);
        oscard = _closure1_slot3;
        report = 2;
        offset = oscard.bind(tangon)(offset, report);
        report = 0;
        oscard = offset[report];
        var _closure2_slot4 = oscard;
        report = 1;
        report = offset[report];
        var _closure2_slot5 = report;
        kiloes = _closure1_slot4;
        backup = kiloes.useRef;
        report = _closure1_slot13;
        offset = report.bind(tangon)(oscard);
        backup = backup.bind(kiloes)(offset);
        var _closure2_slot6 = backup;
        sizing = _closure1_slot6;
        kiloes = sizing.useState;
        offset = function(argFoo) {
            michal = argFoo;
            entity = michal.isAutocompleteVisible;
            entity = entity.bind(michal)();
            return entity;
        };
        kiloes = kiloes.bind(sizing)(result, offset);
        var _closure2_slot7 = kiloes;
        sizing = _closure1_slot1;
        offset = 17;
        offset = option[offset];
        offset = sizing.bind(tangon)(offset);
        sizing = offset.bind(tangon)(romeon);
        var _closure2_slot8 = sizing;
        echoed = _closure1_slot4;
        output = echoed.useCallback;
        romeon = function(argFoo) {
            tangon = argFoo;
            zuuluu = _closure2_slot5;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(tangon);
            zuuluu = _closure2_slot6;
            michal = _closure1_slot13;
            michal = michal.bind(entity)(tangon);
            zuuluu['current'] = michal;
            return entity;
        };
        offset = new Array(0);
        offset = output.bind(echoed)(romeon, offset);
        var _closure2_slot9 = offset;
        romeon = function(argFoo, argBar, argBaz, argCor) { // Original name: useDebouncedGenerateSuggestions
            oscard = argFoo;
            golfie = argBar;
            option = argBaz;
            report = argCor;
            var _closure3_slot0 = oscard;
            var _closure3_slot1 = golfie;
            var _closure3_slot2 = option;
            var _closure3_slot3 = report;
            tangon = _closure1_slot4;
            zuuluu = tangon.useMemo;
            michal = new Array(4);
            michal[0] = option;
            michal[1] = golfie;
            michal[2] = oscard;
            michal[3] = report;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 15;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.debounce;
                michal = function(argFoo, argBar) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        oscard = argFoo;
                        michal = argBar;
                        if(!(oscard !== michal)) { _fun00010_ip = 171; continue _fun00009 }
 15:
                        michal = oscard.trim;
                        zuuluu = michal.bind(oscard)();
                        michal = '';
                        if(!(michal === zuuluu)) { _fun00010_ip = 53; continue _fun00009 }
 33:
                        tangon = _closure3_slot1;
                        zuuluu = undefined;
                        michal = new Array(0);
                        michal = tangon.bind(zuuluu)(michal);
                        _fun00010_ip = 171; continue _fun00009;
 53:
                        report = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 8;
                        michal = zuuluu[michal];
                        zuuluu = undefined;
                        report = report.bind(zuuluu)(michal);
                        michal = report.getSearchFilterSuggestions;
                        oscard = michal.bind(report)(oscard);
                        var _closure5_slot0 = oscard;
                        michal = new Array(0);
                        var _closure5_slot1 = michal;
                        report = oscard.forEach;
                        entity = function(argFoo, argBar) {
                            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                entity = argFoo;
                                oscard = argBar;
                                golfie = entity.text;
                                option = entity.token;
                                michal = _closure3_slot0;
                                entity = michal.has;
                                entity = entity.bind(michal)(option);
                                if(!entity) { _fun00012_ip = 155; continue _fun00011 }
 37:
                                zuuluu = _closure5_slot1;
                                michal = zuuluu.push;
                                entity = {};
                                entity['text'] = golfie;
                                entity['searchTokenType'] = option;
                                golfie = 0;
                                golfie = golfie === oscard;
                                entity['start'] = golfie;
                                tangon = _closure5_slot0;
                                golfie = tangon.length;
                                tangon = 1;
                                tangon = golfie - tangon;
                                tangon = oscard === tangon;
                                entity['end'] = tangon;
                                verify = _closure1_slot0;
                                golfie = _closure1_slot2;
                                oscard = 8;
                                golfie = golfie[oscard];
                                oscard = undefined;
                                golfie = verify.bind(oscard)(golfie);
                                oscard = golfie.getSearchTokenPressHandler;
                                report = _closure3_slot2;
                                tangon = _closure1_slot7;
                                tangon = tangon.SEARCH_INPUT_DROPDOWN;
                                tangon = oscard.bind(golfie)(report, option, tangon);
                                entity['onPress'] = tangon;
                                entity = michal.bind(zuuluu)(entity);
 155:
                                entity = undefined;
                                return entity;
                            }
                        };
                        entity = report.bind(oscard)(entity);
                        report = _closure3_slot3;
                        oscard = report.current;
                        report = _closure1_slot13;
                        report = report.bind(zuuluu)(michal);
                        if(!(oscard !== report)) { _fun00010_ip = 171; continue _fun00009 }
 143:
                        report = _closure3_slot3;
                        tangon = _closure1_slot13;
                        tangon = tangon.bind(zuuluu)(michal);
                        report['current'] = tangon;
                        entity = _closure3_slot1;
                        entity = entity.bind(zuuluu)(michal);
 171:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = 500;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        sequen = undefined;
        vacuum = yankee;
        ctrled = offset;
        source = result;
        update = backup;
        echoed = sequen[romeon](vacuum, ctrled, source, update, echoed);
        var _closure2_slot10 = echoed;
        output = _closure1_slot4;
        backup = output.useEffect;
        romeon = new Array(4);
        romeon[0] = echoed;
        romeon[1] = result;
        romeon[2] = offset;
        romeon[3] = yankee;
        yankee = function() {
            tangon = _closure1_slot6;
            zuuluu = tangon.subscribeTextInputValue;
            michal = _closure2_slot0;
            entity = _closure2_slot10;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        yankee = backup.bind(output)(yankee, romeon);
        backup = _closure1_slot4;
        romeon = backup.useEffect;
        yankee = new Array(3);
        yankee[0] = sizing;
        yankee[1] = kiloes;
        yankee[2] = offset;
        offset = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = _closure2_slot7;
                if(michal) { _fun00014_ip = 14; continue _fun00013 }
 10:
                michal = _closure2_slot8;
 14:
                if(!michal) { _fun00014_ip = 32; continue _fun00013 }
 17:
                zuuluu = _closure2_slot9;
                michal = undefined;
                entity = new Array(0);
                entity = zuuluu.bind(michal)(entity);
 32:
                entity = undefined;
                return entity;
            }
        };
        offset = romeon.bind(backup)(offset, yankee);
        romeon = _closure1_slot4;
        yankee = romeon.useMemo;
        offset = new Array(2);
        offset[0] = foxtra;
        verify = verify.card;
        offset[1] = verify;
        verify = function() {
            entity = _closure2_slot3;
            zuuluu = entity.card;
            entity = new Array(2);
            entity[0] = zuuluu;
            michal = _closure2_slot2;
            entity[1] = michal;
            return entity;
        };
        romeon = yankee.bind(romeon)(verify, offset);
        var _closure2_slot11 = romeon;
        yankee = _closure1_slot4;
        offset = yankee.useRef;
        verify = null;
        verify = offset.bind(yankee)(verify);
        var _closure2_slot12 = verify;
        yankee = _closure1_slot4;
        offset = yankee.useCallback;
        verify = new Array(1);
        verify[0] = golfie;
        golfie = function() {
            entity = global;
            zuuluu = entity.setTimeout;
            entity = undefined;
            michal = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot12;
                    zuuluu = entity.current;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00016_ip = 38; continue _fun00015 }
 18:
                    michal = zuuluu.measure;
                    entity = function(argFoo, argBar, argBaz, argCor, argGra, argFre) {
                        tangon = argGra;
                        report = argFre;
                        zuuluu = _closure2_slot1;
                        michal = {};
                        michal['top'] = report;
                        entity = argCor;
                        entity = report + entity;
                        michal['bottom'] = entity;
                        michal['left'] = tangon;
                        entity = argBaz;
                        entity = tangon + entity;
                        michal['right'] = entity;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
 38:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        yankee = offset.bind(yankee)(golfie, verify);
        var _closure2_slot13 = yankee;
        offset = _closure1_slot4;
        verify = offset.useMemo;
        golfie = new Array(1);
        golfie[0] = oscard;
        oscard = function() {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = _closure2_slot4;
                zuuluu = entity.length;
                entity = 0;
                if(!(!(zuuluu > entity))) { _fun00018_ip = 24; continue _fun00017 }
 18:
                entity = new Array(0);
                _fun00018_ip = 39; continue _fun00017;
 24:
                zuuluu = _closure2_slot4;
                michal = new Array(1);
                michal[0] = zuuluu;
                entity = michal;
 39:
                return entity;
            }
        };
        golfie = verify.bind(offset)(oscard, golfie);
        offset = _closure1_slot4;
        verify = offset.useCallback;
        oscard = new Array(2);
        oscard[0] = romeon;
        oscard[1] = yankee;
        zuuluu = function(argFoo, argBar, argBaz, argCor) {
            verify = argBar;
            report = _closure1_slot8;
            tangon = _closure1_slot14;
            zuuluu = {};
            michal = argBaz;
            zuuluu['state'] = michal;
            michal = argCor;
            zuuluu['cleanUp'] = michal;
            golfie = _closure1_slot8;
            oscard = _closure1_slot5;
            entity = {};
            option = _closure2_slot12;
            entity['ref'] = option;
            option = _closure2_slot11;
            entity['style'] = option;
            option = false;
            entity['collapsable'] = option;
            michal = _closure2_slot13;
            entity['onLayout'] = michal;
            option = verify.map;
            michal = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot8;
                tangon = _closure1_slot12;
                zuuluu = {};
                option = zuuluu;
                golfie = entity;
                michal = copyDataProperties(option, golfie);
                michal = entity.text;
                entity = undefined;
                entity = report.bind(entity)(tangon, zuuluu, michal);
                return entity;
            };
            michal = option.bind(verify)(michal);
            entity['children'] = michal;
            michal = undefined;
            entity = golfie.bind(michal)(oscard, entity);
            zuuluu['children'] = entity;
            entity = argFoo;
            entity = report.bind(michal)(tangon, zuuluu, entity);
            return entity;
        };
        oscard = verify.bind(offset)(zuuluu, oscard);
        zuuluu = _closure1_slot8;
        entity = 14;
        entity = option[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.TransitionGroup;
        entity = {};
        entity['items'] = golfie;
        entity['renderItem'] = oscard;
        entity['getItemKey'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/layout/autocomplete/SearchFilterSuggestions.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();