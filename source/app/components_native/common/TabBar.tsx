// app/components_native/common/TabBar.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    offset = 0;
    tangon = oscard[offset];
    entity = undefined;
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot4 = golfie;
    golfie = tangon.TouchableWithoutFeedback;
    var _closure1_slot5 = golfie;
    option = tangon.StyleSheet;
    tangon = tangon.FlatList;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NOOP;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot8 = tangon;
    golfie = option.create;
    tangon = {};
    verify = {'flexDirection': 'row', 'alignItems': 'stretch'};
    tangon['innerContainer'] = verify;
    verify = {'flexGrow': 1, 'flexBasis': 'auto', 'flexShrink': 0, 'alignItems': 'center', 'justifyContent': 'center', 'marginBottom': 1, 'marginHorizontal': 1, 'padding': 10, 'borderBottomWidth': 2, 'borderBottomColor': 'transparent'};
    tangon['tab'] = verify;
    verify = {};
    yankee = 'rgba(0,0,0,0.1)';
    verify['backgroundColor'] = yankee;
    tangon['tabActive'] = verify;
    verify = {};
    yankee = 5;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.unsafe_rawColors;
    yankee = yankee.BRAND_600;
    verify['borderBottomColor'] = yankee;
    tangon['tabSelected'] = verify;
    verify = {};
    verify['flex'] = offset;
    tangon['container'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot9 = tangon;
    tangon = function(argFoo) { // Original name: Tab
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            golfie = michal.children;
            romeon = michal.index;
            var _closure2_slot0 = romeon;
            backup = michal.isSelected;
            verify = michal.tabStyle;
            offset = michal.tabStyleActive;
            foxtra = michal.tabStyleSelected;
            sizing = michal.onSelect;
            var _closure2_slot1 = sizing;
            report = _closure1_slot3;
            zuuluu = report.useState;
            michal = function() {
                entity = false;
                return entity;
            };
            oscard = zuuluu.bind(report)(michal);
            zuuluu = _closure1_slot2;
            tangon = undefined;
            michal = 2;
            zuuluu = zuuluu.bind(tangon)(oscard, michal);
            michal = 0;
            yankee = zuuluu[michal];
            michal = 1;
            michal = zuuluu[michal];
            var _closure2_slot2 = michal;
            option = report.useCallback;
            oscard = new Array(1);
            oscard[0] = michal;
            zuuluu = function() {
                zuuluu = _closure2_slot2;
                michal = undefined;
                entity = true;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            option = option.bind(report)(zuuluu, oscard);
            oscard = report.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                zuuluu = _closure2_slot2;
                michal = undefined;
                entity = false;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            oscard = oscard.bind(report)(michal, zuuluu);
            zuuluu = report.useCallback;
            michal = new Array(2);
            michal[0] = sizing;
            michal[1] = romeon;
            entity = function() {
                zuuluu = _closure2_slot1;
                michal = _closure2_slot0;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            report = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot8;
            michal = _closure1_slot5;
            entity = {};
            romeon = 'tab';
            entity['accessibilityRole'] = romeon;
            entity['onPressIn'] = option;
            entity['onPressOut'] = oscard;
            entity['onPress'] = report;
            oscard = _closure1_slot4;
            report = {};
            option = _closure1_slot9;
            romeon = option.tab;
            option = new Array(6);
            option[0] = romeon;
            option[1] = verify;
            romeon = null;
            if(!backup) { _fun00002_ip = 266; continue _fun00001 }
 256:
            sizing = _closure1_slot9;
            romeon = sizing.tabSelected;
 266:
            option[2] = romeon;
            romeon = null;
            if(!yankee) { _fun00002_ip = 285; continue _fun00001 }
 275:
            kiloes = _closure1_slot9;
            romeon = kiloes.tabActive;
 285:
            option[3] = romeon;
            romeon = null;
            if(!backup) { _fun00002_ip = 297; continue _fun00001 }
 294:
            romeon = foxtra;
 297:
            option[4] = romeon;
            verify = null;
            if(!yankee) { _fun00002_ip = 309; continue _fun00001 }
 306:
            verify = offset;
 309:
            option[5] = verify;
            report['style'] = option;
            report['children'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'components_native/common/TabBar.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            verify = michal.initialNumTabsToRender;
            romeon = michal.tabs;
            echoed = michal.tabIndexSelected;
            var _closure2_slot0 = echoed;
            result = michal.tabStyle;
            var _closure2_slot1 = result;
            output = michal.tabStyleActive;
            var _closure2_slot2 = output;
            sizing = michal.tabStyleSelected;
            var _closure2_slot3 = sizing;
            yankee = michal.onSelect;
            var _closure2_slot4 = yankee;
            kiloes = michal.containerStyle;
            golfie = michal.hideHorizontalScrollbar;
            tangon = undefined;
            if(!(golfie === tangon)) { _fun00004_ip = 87; continue _fun00003 }
 85:
            golfie = false;
 87:
            backup = michal.scrollToSelectedIndex;
            if(!(backup === tangon)) { _fun00004_ip = 101; continue _fun00003 }
 99:
            backup = false;
 101:
            var _closure2_slot5 = backup;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            report = _closure1_slot3;
            zuuluu = report.useRef;
            michal = null;
            michal = zuuluu.bind(report)(michal);
            _closure2_slot6 = michal;
            zuuluu = report.useRef;
            zuuluu = zuuluu.bind(report)(echoed);
            _closure2_slot7 = zuuluu;
            offset = report.useEffect;
            oscard = new Array(1);
            oscard[0] = echoed;
            zuuluu = function() {
                michal = _closure2_slot7;
                entity = _closure2_slot0;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            zuuluu = offset.bind(report)(zuuluu, oscard);
            oscard = report.useCallback;
            zuuluu = new Array(2);
            zuuluu[0] = michal;
            zuuluu[1] = yankee;
            michal = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = argFoo;
                    zuuluu = _closure2_slot4;
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(report);
                    michal = _closure2_slot6;
                    tangon = michal.current;
                    michal = null;
                    if(!(michal != tangon)) { _fun00006_ip = 49; continue _fun00005 }
 32:
                    zuuluu = tangon.scrollToIndex;
                    michal = {};
                    michal['index'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 49:
                    return entity;
                }
            };
            oscard = oscard.bind(report)(michal, zuuluu);
            _closure2_slot8 = oscard;
            michal = function(argFoo) {
                michal = argFoo;
                var _closure3_slot0 = michal;
                tangon = _closure1_slot3;
                report = tangon.useState;
                zuuluu = function() {
                    entity = _closure3_slot0;
                    return entity;
                };
                oscard = report.bind(tangon)(zuuluu);
                report = _closure1_slot2;
                zuuluu = undefined;
                michal = 1;
                zuuluu = report.bind(zuuluu)(oscard, michal);
                michal = 0;
                report = zuuluu[michal];
                var _closure3_slot1 = report;
                zuuluu = tangon.useEffect;
                michal = new Array(1);
                michal[0] = report;
                entity = function() {
                    michal = global;
                    report = michal.setTimeout;
                    tangon = undefined;
                    zuuluu = function() {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            michal = _closure2_slot7;
                            zuuluu = michal.current;
                            michal = _closure3_slot1;
                            if(!(zuuluu === michal)) { _fun00008_ip = 67; continue _fun00007 }
 23:
                            entity = _closure2_slot6;
                            zuuluu = entity.current;
                            entity = null;
                            if(!(entity != zuuluu)) { _fun00008_ip = 67; continue _fun00007 }
 38:
                            michal = zuuluu.scrollToIndex;
                            entity = {};
                            tangon = _closure3_slot1;
                            entity['index'] = tangon;
                            tangon = 1;
                            entity['viewPosition'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 67:
                            entity = undefined;
                            return entity;
                        }
                    };
                    michal = 500;
                    michal = report.bind(tangon)(zuuluu, michal);
                    var _closure4_slot0 = michal;
                    entity = function() {
                        entity = global;
                        zuuluu = entity.clearTimeout;
                        michal = _closure4_slot0;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    return entity;
                };
                entity = zuuluu.bind(tangon)(entity, michal);
                entity = _closure2_slot6;
                return entity;
            };
            foxtra = michal.bind(tangon)(echoed);
            offset = report.useCallback;
            zuuluu = function(argFoo, argBar) {
                entity = global;
                entity = entity.HermesInternal;
                zuuluu = entity.concat;
                michal = 'tab-';
                entity = argBar;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            michal = new Array(0);
            offset = offset.bind(report)(zuuluu, michal);
            zuuluu = report.useCallback;
            michal = new Array(7);
            michal[0] = echoed;
            michal[1] = result;
            michal[2] = output;
            michal[3] = sizing;
            michal[4] = backup;
            michal[5] = yankee;
            michal[6] = oscard;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    entity = michal.item;
                    golfie = michal.index;
                    tangon = _closure1_slot8;
                    zuuluu = _closure1_slot10;
                    michal = {};
                    michal['index'] = golfie;
                    report = _closure2_slot0;
                    report = golfie === report;
                    michal['isSelected'] = report;
                    report = _closure2_slot1;
                    michal['tabStyle'] = report;
                    report = _closure2_slot2;
                    michal['tabStyleActive'] = report;
                    report = _closure2_slot3;
                    michal['tabStyleSelected'] = report;
                    report = _closure2_slot5;
                    if(report) { _fun00010_ip = 86; continue _fun00009 }
 80:
                    report = _closure2_slot4;
                    _fun00010_ip = 90; continue _fun00009;
 86:
                    report = _closure2_slot8;
 90:
                    michal['onSelect'] = report;
                    michal['children'] = entity;
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                }
            };
            yankee = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot8;
            michal = _closure1_slot4;
            entity = {};
            backup = _closure1_slot9;
            report = backup.container;
            entity['style'] = report;
            report = 'tablist';
            entity['accessibilityRole'] = report;
            output = _closure1_slot0;
            result = _closure1_slot1;
            report = 6;
            oscard = result[report];
            oscard = output.bind(tangon)(oscard);
            sizing = oscard.intl;
            oscard = sizing.string;
            report = result[report];
            report = output.bind(tangon)(report);
            report = report.t;
            report = report.t1qXlJ;
            report = oscard.bind(sizing)(report);
            entity['accessibilityLabel'] = report;
            oscard = _closure1_slot6;
            report = {};
            report['ref'] = foxtra;
            foxtra = new Array(2);
            foxtra[0] = kiloes;
            backup = backup.innerContainer;
            foxtra[1] = backup;
            report['contentContainerStyle'] = foxtra;
            foxtra = true;
            report['horizontal'] = foxtra;
            report['data'] = romeon;
            report['renderItem'] = yankee;
            report['keyExtractor'] = offset;
            report['initialNumToRender'] = verify;
            option = _closure1_slot7;
            report['onScrollToIndexFailed'] = option;
            golfie = !golfie;
            report['showsHorizontalScrollIndicator'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();