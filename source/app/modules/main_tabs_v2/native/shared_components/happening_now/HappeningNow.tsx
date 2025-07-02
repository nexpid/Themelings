// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    kiloes = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = kiloes;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: shouldTrackViewedEvent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.loading;
            entity = !entity;
            if(!entity) { _fun00002_ip = 31; continue _fun00001 }
 15:
            michal = michal.data;
            zuuluu = michal.length;
            michal = 0;
            entity = zuuluu > michal;
 31:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = global;
    report = entity.Object;
    tangon = report.defineProperty;
    michal = {};
    offset = true;
    michal['value'] = offset;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = kiloes.bind(entity)(michal);
    var _closure1_slot3 = michal;
    foxtra = 1;
    tangon = golfie[foxtra];
    michal = argCor;
    verify = michal.bind(entity)(tangon);
    var _closure1_slot4 = verify;
    michal = 2;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    tangon = michal.ScrollView;
    var _closure1_slot5 = tangon;
    michal = michal.View;
    var _closure1_slot6 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    tangon = michal.HAPPENING_NOW_CARD_HEIGHT;
    var _closure1_slot7 = tangon;
    tangon = michal.HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN;
    var _closure1_slot8 = tangon;
    tangon = michal.HAPPENING_NOW_CARD_WIDTH_XSMALL_WITH_MARGIN;
    var _closure1_slot9 = tangon;
    backup = michal.HAPPENING_NOW_PANELS_CONTAINER_PADDING;
    michal = michal.HappeningNowKindIds;
    var _closure1_slot10 = michal;
    michal = 4;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.AnalyticEvents;
    var _closure1_slot11 = michal;
    michal = 5;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.jsx;
    var _closure1_slot12 = michal;
    tangon = verify.createContext;
    michal = 6;
    michal = golfie[michal];
    yankee = oscard.bind(entity)(michal);
    report = yankee.createFakeSharedValue;
    michal = new Array(0);
    michal = report.bind(yankee)(michal);
    michal = tangon.bind(verify)(michal);
    var _closure1_slot13 = michal;
    tangon = 7;
    tangon = golfie[tangon];
    yankee = oscard.bind(entity)(tangon);
    report = yankee.createStyles;
    tangon = {};
    romeon = {};
    romeon['paddingLeft'] = backup;
    romeon['paddingRight'] = backup;
    tangon['containerInner'] = romeon;
    romeon = {};
    backup = 8;
    backup = golfie[backup];
    backup = kiloes.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_8;
    romeon['paddingHorizontal'] = backup;
    romeon['flex'] = foxtra;
    tangon['loading'] = romeon;
    tangon = report.bind(yankee)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 9;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.Gesture;
    tangon = report.Native;
    report = tangon.bind(report)();
    tangon = report.disallowInterruption;
    tangon = tangon.bind(report)(offset);
    var _closure1_slot15 = tangon;
    report = verify.forwardRef;
    tangon = function(argFoo, argBar) {
        tangon = _closure1_slot12;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 9;
        entity = zuuluu[entity];
        zuuluu = undefined;
        entity = michal.bind(zuuluu)(entity);
        michal = entity.GestureDetector;
        entity = {};
        oscard = _closure1_slot15;
        entity['gesture'] = oscard;
        oscard = _closure1_slot5;
        report = {};
        golfie = argBar;
        report['ref'] = golfie;
        option = argFoo;
        verify = report;
        golfie = copyDataProperties(verify, option);
        report = tangon.bind(zuuluu)(oscard, report);
        entity['children'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    report = report.bind(verify)(tangon);
    var _closure1_slot16 = report;
    tangon = 'HappeningNowScrollView';
    report['displayName'] = tangon;
    report = verify.memo;
    tangon = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            report = michal.cards;
            sequen = michal.listRef;
            var _closure2_slot0 = sequen;
            oscard = undefined;
            var _closure2_slot6 = oscard;
            var _closure2_slot7 = oscard;
            var _closure2_slot8 = oscard;
            michal = _closure1_slot14;
            verify = michal.bind(oscard)();
            zuuluu = _closure1_slot0;
            kiloes = _closure1_slot2;
            michal = 14;
            michal = kiloes[michal];
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = zuuluu.useIsFocused;
            michal = michal.bind(zuuluu)();
            var _closure2_slot1 = michal;
            romeon = _closure1_slot1;
            zuuluu = 15;
            zuuluu = kiloes[zuuluu];
            tangon = romeon.bind(oscard)(zuuluu);
            zuuluu = {};
            zuuluu['withoutUserCards'] = oscard;
            zuuluu['guildId'] = oscard;
            update = true;
            zuuluu['showMultipleActivitiesPerChannel'] = update;
            zuuluu['isFocused'] = michal;
            tangon = tangon.bind(oscard)(report, zuuluu);
            zuuluu = _closure1_slot3;
            backup = 2;
            zuuluu = zuuluu.bind(oscard)(tangon, backup);
            yankee = 0;
            golfie = zuuluu[yankee];
            var _closure2_slot2 = golfie;
            report = 1;
            offset = zuuluu[report];
            var _closure2_slot3 = offset;
            tangon = 16;
            zuuluu = kiloes[tangon];
            foxtra = romeon.bind(oscard)(zuuluu);
            zuuluu = 17;
            zuuluu = kiloes[zuuluu];
            zuuluu = romeon.bind(oscard)(zuuluu);
            zuuluu = zuuluu.ACTIVITIES_HAPPENING_NOW;
            zuuluu = foxtra.bind(oscard)(zuuluu);
            foxtra = zuuluu.analyticsLocations;
            zuuluu = 18;
            zuuluu = kiloes[zuuluu];
            zuuluu = romeon.bind(oscard)(zuuluu);
            zuuluu = zuuluu.bind(oscard)();
            config = zuuluu.width;
            kiloes = _closure1_slot4;
            zuuluu = kiloes.useRef;
            sizing = zuuluu.bind(kiloes)(yankee);
            var _closure2_slot4 = sizing;
            romeon = {};
            romeon['data'] = golfie;
            romeon['isFocused'] = michal;
            romeon['loading'] = offset;
            zuuluu = function(argFoo, argBar) { // Original name: useTrackActivityCardsView
                tangon = argFoo;
                var _closure3_slot0 = tangon;
                entity = argBar;
                var _closure3_slot1 = entity;
                verify = tangon.isFocused;
                var _closure3_slot2 = verify;
                option = _closure1_slot4;
                zuuluu = option.useRef;
                zuuluu = zuuluu.bind(option)(tangon);
                var _closure3_slot3 = zuuluu;
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                entity = 10;
                zuuluu = report[entity];
                entity = undefined;
                oscard = tangon.bind(entity)(zuuluu);
                zuuluu = function() {
                    entity = {};
                    michal = 'messages';
                    entity['context'] = michal;
                    michal = _closure3_slot3;
                    tangon = michal.current;
                    tangon = tangon.data;
                    tangon = tangon.length;
                    entity['num_cards'] = tangon;
                    tangon = global;
                    oscard = tangon.Math;
                    report = oscard.min;
                    zuuluu = _closure3_slot1;
                    tangon = zuuluu.current;
                    zuuluu = michal.current;
                    zuuluu = zuuluu.data;
                    zuuluu = zuuluu.length;
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    entity['max_viewed_card_index'] = zuuluu;
                    zuuluu = michal.current;
                    report = zuuluu.data;
                    tangon = report.map;
                    zuuluu = function(argFoo) {
                        michal = _closure1_slot10;
                        entity = argFoo;
                        entity = entity.kind;
                        entity = michal[entity];
                        return entity;
                    };
                    zuuluu = tangon.bind(report)(zuuluu);
                    entity['card_types'] = zuuluu;
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 11;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.getAffinityProperties;
                    michal = michal.current;
                    michal = michal.data;
                    golfie = zuuluu.bind(tangon)(michal);
                    option = entity;
                    michal = copyDataProperties(option, golfie);
                    return entity;
                };
                zuuluu = oscard.bind(entity)(zuuluu);
                var _closure3_slot4 = zuuluu;
                golfie = option.useEffect;
                oscard = function() {
                    michal = _closure3_slot3;
                    entity = _closure3_slot0;
                    michal['current'] = entity;
                    entity = undefined;
                    return entity;
                };
                oscard = golfie.bind(option)(oscard);
                golfie = option.useEffect;
                oscard = new Array(2);
                oscard[0] = verify;
                oscard[1] = zuuluu;
                zuuluu = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = _closure3_slot2;
                        michal = !michal;
                        if(!michal) { _fun00006_ip = 36; continue _fun00005 }
 13:
                        report = _closure1_slot21;
                        zuuluu = _closure3_slot3;
                        tangon = zuuluu.current;
                        zuuluu = undefined;
                        michal = report.bind(zuuluu)(tangon);
 36:
                        if(!michal) { _fun00006_ip = 93; continue _fun00005 }
 39:
                        tangon = _closure1_slot1;
                        report = _closure1_slot2;
                        zuuluu = 12;
                        zuuluu = report[zuuluu];
                        report = undefined;
                        tangon = tangon.bind(report)(zuuluu);
                        zuuluu = tangon.track;
                        michal = _closure1_slot11;
                        michal = michal.ACTIVITY_CARDS_VIEWED;
                        entity = _closure3_slot4;
                        entity = entity.bind(report)();
                        entity = zuuluu.bind(tangon)(michal, entity);
 93:
                        entity = undefined;
                        return entity;
                    }
                };
                zuuluu = golfie.bind(option)(zuuluu, oscard);
                zuuluu = 13;
                zuuluu = report[zuuluu];
                zuuluu = tangon.bind(entity)(zuuluu);
                michal = function() {
                    entity = function() {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            report = _closure1_slot21;
                            entity = _closure3_slot3;
                            tangon = entity.current;
                            entity = undefined;
                            tangon = report.bind(entity)(tangon);
                            if(!tangon) { _fun00008_ip = 78; continue _fun00007 }
 29:
                            report = _closure1_slot1;
                            oscard = _closure1_slot2;
                            tangon = 12;
                            tangon = oscard[tangon];
                            report = report.bind(entity)(tangon);
                            tangon = report.track;
                            zuuluu = _closure1_slot11;
                            zuuluu = zuuluu.ACTIVITY_CARDS_VIEWED;
                            michal = _closure3_slot4;
                            michal = michal.bind(entity)();
                            michal = tangon.bind(report)(zuuluu, michal);
 78:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            zuuluu = zuuluu.bind(oscard)(romeon, sizing);
            romeon = kiloes.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = michal;
            zuuluu[1] = sequen;
            michal = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot1;
                    if(michal) { _fun00010_ip = 62; continue _fun00009 }
 10:
                    michal = _closure2_slot0;
                    tangon = michal.current;
                    michal = null;
                    if(!(michal != tangon)) { _fun00010_ip = 50; continue _fun00009 }
 25:
                    zuuluu = tangon.scrollToOffset;
                    michal = {'offset': 0, 'animated': false};
                    michal = zuuluu.bind(tangon)(michal);
 50:
                    michal = _closure2_slot4;
                    entity = 0;
                    michal['current'] = entity;
 62:
                    entity = undefined;
                    return entity;
                }
            };
            michal = romeon.bind(kiloes)(michal, zuuluu);
            zuuluu = golfie.findIndex;
            michal = function(argFoo) {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 19;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.cardSize;
                michal = argFoo;
                michal = zuuluu.bind(tangon)(michal);
                entity = _closure1_slot9;
                entity = michal === entity;
                return entity;
            };
            michal = zuuluu.bind(golfie)(michal);
            var _closure2_slot5 = michal;
            zuuluu = michal >= yankee;
            kiloes = inf;
            if(!zuuluu) { _fun00004_ip = 345; continue _fun00003 }
 337:
            zuuluu = _closure1_slot8;
            kiloes = zuuluu * michal;
 345:
            _closure2_slot6 = kiloes;
            sizing = _closure1_slot4;
            romeon = sizing.useCallback;
            zuuluu = new Array(2);
            zuuluu[0] = michal;
            zuuluu[1] = kiloes;
            michal = function(argFoo, argBar) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = argBar;
                    entity = argFoo;
                    tangon = michal + entity;
                    michal = _closure2_slot6;
                    if(!(!(tangon < michal))) { _fun00012_ip = 53; continue _fun00011 }
 21:
                    zuuluu = _closure2_slot5;
                    michal = _closure2_slot6;
                    report = tangon - michal;
                    michal = _closure1_slot9;
                    michal = report / michal;
                    michal = michal | 0;
                    michal = zuuluu + michal;
                    _fun00012_ip = 67; continue _fun00011;
 53:
                    zuuluu = _closure1_slot8;
                    zuuluu = tangon / zuuluu;
                    michal = zuuluu | 0;
 67:
                    zuuluu = _closure2_slot4;
                    zuuluu = zuuluu.current;
                    if(!(michal > zuuluu)) { _fun00012_ip = 90; continue _fun00011 }
 80:
                    entity = _closure2_slot4;
                    entity['current'] = michal;
 90:
                    entity = undefined;
                    return entity;
                }
            };
            romeon = romeon.bind(sizing)(michal, zuuluu);
            sizing = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 20;
            zuuluu = zuuluu[michal];
            zuuluu = sizing.bind(oscard)(zuuluu);
            romeon = zuuluu.bind(oscard)(kiloes, romeon);
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.bind(oscard)(romeon, backup);
            vacuum = zuuluu[yankee];
            zuuluu = zuuluu[report];
            echoed = undefined;
            if(!zuuluu) { _fun00004_ip = 436; continue _fun00003 }
 432:
            echoed = _closure1_slot8;
 436:
            report = _closure1_slot4;
            backup = report.useMemo;
            romeon = new Array(1);
            romeon[0] = golfie;
            zuuluu = function() {
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                entity = 19;
                zuuluu = report[entity];
                michal = undefined;
                golfie = tangon.bind(michal)(zuuluu);
                oscard = golfie.filterHappeningNowCards;
                zuuluu = _closure2_slot2;
                zuuluu = oscard.bind(golfie)(zuuluu);
                entity = report[entity];
                michal = tangon.bind(michal)(entity);
                entity = michal.sortHappeningNowCards;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            };
            output = backup.bind(report)(zuuluu, romeon);
            zuuluu = _closure1_slot0;
            romeon = _closure1_slot2;
            michal = romeon[michal];
            backup = zuuluu.bind(oscard)(michal);
            michal = backup.useHappeningNowScrollSnapping;
            result = michal.bind(backup)(sequen);
            kiloes = report.useCallback;
            backup = new Array(1);
            backup[0] = offset;
            michal = function(argFoo) {
                entity = argFoo;
                tangon = entity.item;
                entity = entity.index;
                zuuluu = _closure1_slot17;
                michal = {};
                michal['index'] = entity;
                entity = _closure2_slot3;
                michal['loading'] = entity;
                entity = true;
                michal['panelVariant'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(tangon, michal);
                return entity;
            };
            sizing = kiloes.bind(report)(michal, backup);
            michal = 21;
            michal = romeon[michal];
            romeon = zuuluu.bind(oscard)(michal);
            zuuluu = romeon.useSharedValue;
            michal = new Array(0);
            romeon = zuuluu.bind(romeon)(michal);
            _closure2_slot7 = romeon;
            backup = report.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = romeon;
            michal = function(argFoo) {
                entity = argFoo;
                golfie = entity.viewableItems;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 22;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.updateSharedValueArrayIfChanged;
                zuuluu = _closure2_slot7;
                oscard = golfie.map;
                michal = function(argFoo) {
                    zuuluu = _closure1_slot18;
                    entity = argFoo;
                    michal = entity.item;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal = oscard.bind(golfie)(michal);
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            backup = backup.bind(report)(michal, zuuluu);
            _closure2_slot8 = backup;
            zuuluu = report.useMemo;
            michal = new Array(1);
            michal[0] = backup;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 23;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.debounce;
                michal = _closure2_slot8;
                entity = 130;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            kiloes = zuuluu.bind(report)(entity, michal);
            entity = golfie.length;
            if(!(yankee === entity)) { _fun00004_ip = 639; continue _fun00003 }
 615:
            if(offset) { _fun00004_ip = 639; continue _fun00003 }
 618:
            zuuluu = _closure1_slot12;
            michal = _closure1_slot6;
            entity = {};
            entity = zuuluu.bind(oscard)(michal, entity);
            _fun00004_ip = 1019; continue _fun00003;
 639:
            report = _closure1_slot12;
            if(offset) { _fun00004_ip = 931; continue _fun00003 }
 649:
            michal = _closure1_slot13;
            zuuluu = michal.Provider;
            michal = {};
            michal['value'] = romeon;
            source = _closure1_slot0;
            ctrled = _closure1_slot2;
            tangon = ctrled[tangon];
            tangon = source.bind(oscard)(tangon);
            romeon = tangon.AnalyticsLocationProvider;
            tangon = {};
            tangon['value'] = foxtra;
            foxtra = 24;
            foxtra = ctrled[foxtra];
            foxtra = source.bind(oscard)(foxtra);
            backup = foxtra.FlashList;
            foxtra = {};
            foxtra['ref'] = sequen;
            foxtra['horizontal'] = update;
            sequen = _closure1_slot16;
            foxtra['renderScrollComponent'] = sequen;
            sequen = {};
            sequen['width'] = config;
            config = _closure1_slot7;
            sequen['height'] = config;
            foxtra['estimatedListSize'] = sequen;
            sequen = _closure1_slot8;
            foxtra['estimatedItemSize'] = sequen;
            sequen = _closure1_slot19;
            foxtra['overrideItemLayout'] = sequen;
            sequen = 'fast';
            foxtra['decelerationRate'] = sequen;
            foxtra['onScroll'] = vacuum;
            foxtra['disableHorizontalListHeightMeasurement'] = update;
            foxtra['snapToInterval'] = echoed;
            foxtra['snapToOffsets'] = result;
            result = false;
            foxtra['showsHorizontalScrollIndicator'] = result;
            result = 25;
            echoed = ctrled[result];
            echoed = source.bind(oscard)(echoed);
            update = echoed.intl;
            echoed = update.string;
            result = ctrled[result];
            result = source.bind(oscard)(result);
            result = result.t;
            result = result.1+boPj;
            result = echoed.bind(update)(result);
            foxtra['accessibilityLabel'] = result;
            result = verify.containerInner;
            foxtra['contentContainerStyle'] = result;
            foxtra['data'] = output;
            foxtra['renderItem'] = sizing;
            foxtra['onViewableItemsChanged'] = kiloes;
            kiloes = _closure1_slot18;
            foxtra['keyExtractor'] = kiloes;
            kiloes = _closure1_slot20;
            foxtra['getItemType'] = kiloes;
            foxtra = report.bind(oscard)(backup, foxtra);
            tangon['children'] = foxtra;
            tangon = report.bind(oscard)(romeon, tangon);
            michal['children'] = tangon;
            michal = report.bind(oscard)(zuuluu, michal);
            _fun00004_ip = 1016; continue _fun00003;
 931:
            tangon = _closure1_slot6;
            zuuluu = {};
            verify = verify.loading;
            zuuluu['style'] = verify;
            verify = _closure1_slot17;
            option = golfie.length;
            if(!(!(option > yankee))) { _fun00004_ip = 976; continue _fun00003 }
 960:
            option = {'kind': 'placeholder', 'index': 0};
            _fun00004_ip = 980; continue _fun00003;
 976:
            option = golfie[yankee];
 980:
            golfie = {'index': 0, 'loading': null, 'fullwidth': true, 'panelVariant': true};
            golfie['loading'] = offset;
            golfie = verify.bind(oscard)(option, golfie);
            zuuluu['children'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 1016:
            entity = michal;
 1019:
            return entity;
        }
    };
    tangon = report.bind(verify)(tangon);
    report = function(argFoo, argBar) { // Original name: renderCard
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            michal = oscard.kind;
            entity = 'placeholder';
            if(!(entity !== michal)) { _fun00014_ip = 990; continue _fun00013 }
 22:
            entity = report.loading;
            if(entity) { _fun00014_ip = 990; continue _fun00013 }
 34:
            michal = oscard.kind;
            entity = 'live-guild-stage';
            if(!(entity !== michal)) { _fun00014_ip = 931; continue _fun00013 }
 52:
            entity = 'guild-event';
            if(!(entity !== michal)) { _fun00014_ip = 872; continue _fun00013 }
 65:
            entity = 'active-channel';
            if(!(entity !== michal)) { _fun00014_ip = 813; continue _fun00013 }
 78:
            entity = 'user';
            if(!(entity !== michal)) { _fun00014_ip = 754; continue _fun00013 }
 89:
            entity = 'activity';
            if(!(entity !== michal)) { _fun00014_ip = 695; continue _fun00013 }
 100:
            entity = 'voice';
            if(!(entity !== michal)) { _fun00014_ip = 636; continue _fun00013 }
 111:
            entity = 'invite';
            if(!(entity !== michal)) { _fun00014_ip = 571; continue _fun00013 }
 122:
            entity = 'customize-guild';
            if(!(entity !== michal)) { _fun00014_ip = 506; continue _fun00013 }
 135:
            entity = 'create-channel';
            if(!(entity !== michal)) { _fun00014_ip = 441; continue _fun00013 }
 148:
            entity = 'student-hub-add-channel';
            if(!(entity !== michal)) { _fun00014_ip = 376; continue _fun00013 }
 161:
            entity = 'embedded-activity';
            if(!(entity !== michal)) { _fun00014_ip = 299; continue _fun00013 }
 174:
            entity = 'unified-vc';
            if(!(entity !== michal)) { _fun00014_ip = 222; continue _fun00013 }
 184:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 36;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.assertNever;
            michal = michal.bind(zuuluu)(oscard);
            return entity;
 222:
            tangon = _closure1_slot12;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 35;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            offset = entity;
            verify = oscard;
            option = copyDataProperties(offset, verify);
            offset = entity;
            verify = report;
            option = copyDataProperties(offset, verify);
            golfie = _closure1_slot18;
            option = golfie.bind(zuuluu)(oscard);
            golfie = 'cardKey';
            entity[golfie] = option;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
 299:
            tangon = _closure1_slot12;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 34;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            offset = entity;
            verify = oscard;
            option = copyDataProperties(offset, verify);
            offset = entity;
            verify = report;
            option = copyDataProperties(offset, verify);
            golfie = _closure1_slot18;
            option = golfie.bind(zuuluu)(oscard);
            golfie = 'cardKey';
            entity[golfie] = option;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
 376:
            tangon = _closure1_slot12;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 33;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = michal.bind(zuuluu)(entity);
            michal = entity.HappeningNowStudentHubAddServer;
            entity = {};
            offset = entity;
            verify = oscard;
            golfie = copyDataProperties(offset, verify);
            offset = entity;
            verify = report;
            golfie = copyDataProperties(offset, verify);
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
 441:
            tangon = _closure1_slot12;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 33;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = michal.bind(zuuluu)(entity);
            michal = entity.HappeningNowCardCreateChannel;
            entity = {};
            offset = entity;
            verify = oscard;
            golfie = copyDataProperties(offset, verify);
            offset = entity;
            verify = report;
            golfie = copyDataProperties(offset, verify);
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
 506:
            tangon = _closure1_slot12;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 33;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = michal.bind(zuuluu)(entity);
            michal = entity.HappeningNowCardCustomizeGuild;
            entity = {};
            offset = entity;
            verify = oscard;
            golfie = copyDataProperties(offset, verify);
            offset = entity;
            verify = report;
            golfie = copyDataProperties(offset, verify);
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
 571:
            tangon = _closure1_slot12;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 33;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = michal.bind(zuuluu)(entity);
            michal = entity.HappeningNowCardInvite;
            entity = {};
            offset = entity;
            verify = oscard;
            golfie = copyDataProperties(offset, verify);
            offset = entity;
            verify = report;
            golfie = copyDataProperties(offset, verify);
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
 636:
            tangon = _closure1_slot12;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 32;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            offset = entity;
            verify = oscard;
            golfie = copyDataProperties(offset, verify);
            offset = entity;
            verify = report;
            golfie = copyDataProperties(offset, verify);
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
 695:
            tangon = _closure1_slot12;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 31;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            offset = entity;
            verify = oscard;
            golfie = copyDataProperties(offset, verify);
            offset = entity;
            verify = report;
            golfie = copyDataProperties(offset, verify);
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
 754:
            tangon = _closure1_slot12;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 30;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            offset = entity;
            verify = oscard;
            golfie = copyDataProperties(offset, verify);
            offset = entity;
            verify = report;
            golfie = copyDataProperties(offset, verify);
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
 813:
            tangon = _closure1_slot12;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 29;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            offset = entity;
            verify = oscard;
            golfie = copyDataProperties(offset, verify);
            offset = entity;
            verify = report;
            golfie = copyDataProperties(offset, verify);
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
 872:
            tangon = _closure1_slot12;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 28;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            offset = entity;
            verify = oscard;
            golfie = copyDataProperties(offset, verify);
            offset = entity;
            verify = report;
            golfie = copyDataProperties(offset, verify);
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
 931:
            tangon = _closure1_slot12;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 27;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            offset = entity;
            verify = oscard;
            oscard = copyDataProperties(offset, verify);
            offset = entity;
            verify = report;
            oscard = copyDataProperties(offset, verify);
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
 990:
            tangon = _closure1_slot12;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 26;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = michal.bind(zuuluu)(entity);
            michal = entity.HappeningNowCardPlaceholder;
            entity = {};
            oscard = report.fullwidth;
            entity['fullWidth'] = oscard;
            report = report.panelVariant;
            entity['panelVariant'] = report;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot17 = report;
    report = function(argFoo) { // Original name: keyExtractor
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.kind;
            michal = 'placeholder';
            if(!(michal !== zuuluu)) { _fun00016_ip = 569; continue _fun00015 }
 19:
            michal = 'live-guild-stage';
            if(!(michal !== zuuluu)) { _fun00016_ip = 523; continue _fun00015 }
 32:
            michal = 'guild-event';
            if(!(michal !== zuuluu)) { _fun00016_ip = 477; continue _fun00015 }
 45:
            michal = 'active-channel';
            if(!(michal !== zuuluu)) { _fun00016_ip = 437; continue _fun00015 }
 58:
            michal = 'user';
            if(!(michal !== zuuluu)) { _fun00016_ip = 397; continue _fun00015 }
 69:
            michal = 'activity';
            if(!(michal !== zuuluu)) { _fun00016_ip = 397; continue _fun00015 }
 80:
            michal = 'voice';
            if(!(michal !== zuuluu)) { _fun00016_ip = 340; continue _fun00015 }
 91:
            michal = 'invite';
            if(!(michal !== zuuluu)) { _fun00016_ip = 333; continue _fun00015 }
 102:
            michal = 'customize-guild';
            if(!(michal !== zuuluu)) { _fun00016_ip = 333; continue _fun00015 }
 115:
            michal = 'create-channel';
            if(!(michal !== zuuluu)) { _fun00016_ip = 333; continue _fun00015 }
 128:
            michal = 'student-hub-add-channel';
            if(!(michal !== zuuluu)) { _fun00016_ip = 333; continue _fun00015 }
 141:
            michal = 'embedded-activity';
            if(!(michal !== zuuluu)) { _fun00016_ip = 256; continue _fun00015 }
 151:
            michal = 'unified-vc';
            if(!(michal !== zuuluu)) { _fun00016_ip = 199; continue _fun00015 }
 161:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 36;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.assertNever;
            zuuluu = zuuluu.bind(tangon)(entity);
            return michal;
 199:
            oscard = entity.kind;
            michal = entity.voiceState;
            report = michal.channelId;
            michal = null;
            if(!(michal == report)) { _fun00016_ip = 226; continue _fun00015 }
 221:
            report = entity.userId;
 226:
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = '-';
            michal = tangon.bind(zuuluu)(oscard, michal, report);
            return michal;
 256:
            golfie = entity.kind;
            michal = entity.voiceState;
            oscard = michal.channelId;
            michal = null;
            if(!(michal == oscard)) { _fun00016_ip = 283; continue _fun00015 }
 278:
            oscard = entity.userId;
 283:
            michal = entity.activity;
            option = michal.applicationId;
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            foxtra = '';
            michal = '-';
            romeon = golfie;
            yankee = michal;
            offset = oscard;
            verify = michal;
            michal = foxtra[tangon](romeon, yankee, offset, verify, option, golfie);
            return michal;
 333:
            michal = entity.kind;
            return michal;
 340:
            oscard = entity.kind;
            michal = entity.voiceState;
            report = michal.channelId;
            michal = null;
            if(!(michal == report)) { _fun00016_ip = 367; continue _fun00015 }
 362:
            report = entity.userId;
 367:
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = '-';
            michal = tangon.bind(zuuluu)(oscard, michal, report);
            return michal;
 397:
            oscard = entity.kind;
            report = entity.userId;
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = '-';
            michal = tangon.bind(zuuluu)(oscard, michal, report);
            return michal;
 437:
            oscard = entity.kind;
            report = entity.channelId;
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = '-';
            michal = tangon.bind(zuuluu)(oscard, michal, report);
            return michal;
 477:
            oscard = entity.kind;
            michal = entity.event;
            report = michal.id;
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = '-';
            michal = tangon.bind(zuuluu)(oscard, michal, report);
            return michal;
 523:
            oscard = entity.kind;
            michal = entity.stage;
            report = michal.id;
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = '-';
            michal = tangon.bind(zuuluu)(oscard, michal, report);
            return michal;
 569:
            report = entity.kind;
            tangon = entity.index;
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = '';
            entity = '-';
            entity = zuuluu.bind(michal)(report, entity, tangon);
            return entity;
        }
    };
    var _closure1_slot18 = report;
    report = function(argFoo, argBar) { // Original name: overrideItemLayout
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 19;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.cardSize;
        michal = argBar;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = argFoo;
        michal['size'] = zuuluu;
        return entity;
    };
    var _closure1_slot19 = report;
    report = function(argFoo) { // Original name: getItemType
        entity = argFoo;
        entity = entity.kind;
        return entity;
    };
    var _closure1_slot20 = report;
    report = 37;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNow.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['ViewableHappeningNowCardKeysContext'] = michal;
    return entity;
})();