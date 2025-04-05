// app/modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: Item
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = michal.item;
            zuuluu = michal.index;
            var _closure2_slot0 = zuuluu;
            zuuluu = michal.choices;
            var _closure2_slot1 = zuuluu;
            michal = michal.onChoiceSelect;
            var _closure2_slot2 = michal;
            oscard = undefined;
            var _closure2_slot3 = oscard;
            var _closure2_slot4 = oscard;
            var _closure2_slot5 = oscard;
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 17;
            michal = golfie[michal];
            golfie = zuuluu.bind(oscard)(michal);
            zuuluu = tangon.type;
            michal = _closure1_slot8;
            michal = michal.CHOICE;
            zuuluu = zuuluu === michal;
            if(zuuluu) { _fun00002_ip = 117; continue _fun00001 }
 98:
            option = tangon.type;
            michal = _closure1_slot8;
            michal = michal.CHOICE_LOADING;
            zuuluu = option === michal;
 117:
            if(zuuluu) { _fun00002_ip = 139; continue _fun00001 }
 120:
            option = tangon.type;
            michal = _closure1_slot8;
            michal = michal.LABEL;
            zuuluu = option === michal;
 139:
            michal = 'Invalid autocomplete result type';
            michal = golfie.bind(oscard)(zuuluu, michal);
            michal = _closure1_slot12;
            michal = michal.bind(oscard)();
            _closure2_slot3 = michal;
            option = _closure1_slot4;
            golfie = option.useMemo;
            zuuluu = function() {
                entity = global;
                michal = entity.Math;
                entity = michal.random;
                michal = entity.bind(michal)();
                entity = 100;
                michal = entity * michal;
                entity = 50;
                entity = michal + entity;
                return entity;
            };
            michal = new Array(0);
            michal = golfie.bind(option)(zuuluu, michal);
            _closure2_slot4 = michal;
            michal = function(argFoo) { // Original name: ListItem
                entity = argFoo;
                oscard = entity.label;
                report = entity.onPress;
                tangon = _closure1_slot9;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 18;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.TableRow;
                entity = {};
                entity['label'] = oscard;
                entity['onPress'] = report;
                oscard = _closure2_slot0;
                golfie = 0;
                golfie = golfie === oscard;
                entity['start'] = golfie;
                report = _closure2_slot1;
                golfie = report.length;
                report = 1;
                report = golfie - report;
                report = oscard === report;
                entity['end'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            _closure2_slot5 = michal;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 19;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = zuuluu.match;
            oscard = michal.bind(zuuluu)(tangon);
            tangon = oscard.with;
            zuuluu = {};
            michal = _closure1_slot8;
            michal = michal.CHOICE;
            zuuluu['type'] = michal;
            michal = function(argFoo) {
                option = argFoo;
                var _closure3_slot0 = option;
                tangon = _closure1_slot9;
                zuuluu = _closure2_slot5;
                michal = {};
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 20;
                oscard = oscard[entity];
                entity = undefined;
                oscard = golfie.bind(entity)(oscard);
                golfie = oscard.Text;
                oscard = {'lineClamp': 1, 'variant': 'text-md/normal', 'color': 'header-primary'};
                option = option.choice;
                option = option.displayName;
                oscard['children'] = option;
                oscard = tangon.bind(entity)(golfie, oscard);
                michal['label'] = oscard;
                report = function() { // Original name: onPress
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = _closure2_slot2;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00004_ip = 37; continue _fun00003 }
 13:
                        zuuluu = _closure2_slot2;
                        entity = _closure3_slot0;
                        michal = entity.choice;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
 37:
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 13;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.hideActionSheet;
                        michal = michal.bind(zuuluu)();
                        return entity;
                    }
                };
                michal['onPress'] = report;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            oscard = tangon.bind(oscard)(zuuluu, michal);
            tangon = oscard.with;
            zuuluu = {};
            michal = _closure1_slot8;
            michal = michal.LABEL;
            zuuluu['type'] = michal;
            michal = function(argFoo) {
                verify = argFoo;
                var _closure3_slot0 = verify;
                tangon = _closure1_slot9;
                zuuluu = _closure2_slot5;
                michal = {};
                option = _closure1_slot10;
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 20;
                oscard = oscard[entity];
                entity = undefined;
                oscard = golfie.bind(entity)(oscard);
                golfie = oscard.Text;
                oscard = {'lineClamp': 1, 'variant': 'text-md/normal', 'color': 'header-primary'};
                offset = verify.label;
                verify = ['"'];
                verify[1] = offset;
                offset = '"';
                verify[2] = offset;
                oscard['children'] = verify;
                oscard = option.bind(entity)(golfie, oscard);
                michal['label'] = oscard;
                report = function() { // Original name: onPress
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = _closure2_slot2;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00006_ip = 60; continue _fun00005 }
 13:
                        zuuluu = _closure2_slot2;
                        michal = {};
                        entity = _closure3_slot0;
                        tangon = entity.label;
                        michal['name'] = tangon;
                        tangon = entity.label;
                        michal['value'] = tangon;
                        entity = entity.label;
                        michal['displayName'] = entity;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
 60:
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 13;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.hideActionSheet;
                        michal = michal.bind(zuuluu)();
                        return entity;
                    }
                };
                michal['onPress'] = report;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            tangon = tangon.bind(oscard)(zuuluu, michal);
            zuuluu = tangon.with;
            michal = {};
            report = _closure1_slot8;
            report = report.CHOICE_LOADING;
            michal['type'] = report;
            entity = function() {
                tangon = _closure1_slot9;
                zuuluu = _closure2_slot5;
                michal = {};
                oscard = _closure1_slot5;
                report = {};
                golfie = _closure2_slot3;
                golfie = golfie.commandChoiceLoadingContainer;
                report['style'] = golfie;
                verify = _closure1_slot9;
                option = _closure1_slot5;
                golfie = {};
                entity = _closure2_slot3;
                offset = entity.commandChoiceLoadingItem;
                entity = new Array(2);
                entity[0] = offset;
                offset = {};
                yankee = _closure2_slot4;
                offset['width'] = yankee;
                entity[1] = offset;
                golfie['style'] = entity;
                entity = undefined;
                golfie = verify.bind(entity)(option, golfie);
                report['children'] = golfie;
                report = tangon.bind(entity)(oscard, report);
                michal['label'] = report;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal, entity);
            entity = michal.exhaustive;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: AutocompleteFailedEmptyState
        entity = _closure1_slot12;
        tangon = undefined;
        oscard = entity.bind(tangon)();
        zuuluu = _closure1_slot9;
        golfie = _closure1_slot1;
        verify = _closure1_slot2;
        entity = 21;
        entity = verify[entity];
        michal = golfie.bind(tangon)(entity);
        entity = {};
        oscard = oscard.emptyState;
        entity['style'] = oscard;
        oscard = 22;
        option = verify[oscard];
        option = golfie.bind(tangon)(option);
        entity['lightSource'] = option;
        oscard = verify[oscard];
        oscard = golfie.bind(tangon)(oscard);
        entity['darkSource'] = oscard;
        option = _closure1_slot0;
        report = 16;
        oscard = verify[report];
        oscard = option.bind(tangon)(oscard);
        golfie = oscard.intl;
        oscard = golfie.string;
        report = verify[report];
        report = option.bind(tangon)(report);
        report = report.t;
        report = report.rTAbPj;
        report = oscard.bind(golfie)(report);
        entity['title'] = report;
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
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AutoCompleteResultTypes;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    offset = tangon.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot9 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    verify = yankee.bind(entity)(tangon);
    option = verify.debounce;
    tangon = 9;
    tangon = oscard[tangon];
    golfie = yankee.bind(entity)(tangon);
    tangon = {'leading': true, 'trailing': true};
    tangon = option.bind(verify)(golfie, offset, tangon);
    var _closure1_slot11 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flex': 1, 'justifyContent': 'center'};
    tangon['commandChoiceLoadingContainer'] = verify;
    verify = {};
    offset = 11;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BACKGROUND_ACCENT;
    verify['backgroundColor'] = romeon;
    romeon = 16;
    verify['height'] = romeon;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.lg;
    verify['borderRadius'] = offset;
    offset = 'flex-start';
    verify['alignSelf'] = offset;
    tangon['commandChoiceLoadingItem'] = verify;
    verify = {};
    offset = 'transparent';
    verify['backgroundColor'] = offset;
    tangon['emptyState'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 23;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: AppLauncherAutocompleteActionSheet
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            verify = michal.option;
            var _closure2_slot0 = verify;
            entity = michal.initChoice;
            sizing = michal.onChoiceSelect;
            var _closure2_slot1 = sizing;
            report = michal.onDismissAutocompleteSheet;
            result = michal.channel;
            var _closure2_slot2 = result;
            output = michal.activeCommand;
            var _closure2_slot3 = output;
            michal = michal.optionValues;
            var _closure2_slot4 = michal;
            tangon = undefined;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            oscard = _closure1_slot4;
            zuuluu = oscard.useState;
            offset = null;
            yankee = offset == entity;
            option = undefined;
            if(yankee) { _fun00008_ip = 116; continue _fun00007 }
 111:
            option = entity.name;
 116:
            yankee = offset != option;
            entity = '';
            if(!yankee) { _fun00008_ip = 130; continue _fun00007 }
 127:
            entity = option;
 130:
            oscard = zuuluu.bind(oscard)(entity);
            zuuluu = _closure1_slot3;
            entity = 2;
            oscard = zuuluu.bind(tangon)(oscard, entity);
            option = 0;
            entity = oscard[option];
            _closure2_slot5 = entity;
            zuuluu = 1;
            yankee = oscard[zuuluu];
            oscard = _closure1_slot4;
            zuuluu = oscard.useRef;
            kiloes = zuuluu.bind(oscard)(offset);
            _closure2_slot6 = kiloes;
            oscard = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = 12;
            zuuluu = offset[zuuluu];
            foxtra = oscard.bind(tangon)(zuuluu);
            romeon = foxtra.useStateFromStoresObject;
            zuuluu = _closure1_slot6;
            offset = new Array(1);
            offset[0] = zuuluu;
            zuuluu = result.id;
            oscard = new Array(3);
            oscard[0] = zuuluu;
            zuuluu = verify.name;
            oscard[1] = zuuluu;
            oscard[2] = entity;
            zuuluu = function() {
                entity = {};
                tangon = _closure1_slot6;
                golfie = tangon.getAutocompleteChoices;
                michal = _closure2_slot2;
                oscard = michal.id;
                report = _closure2_slot0;
                report = report.name;
                zuuluu = _closure2_slot5;
                zuuluu = golfie.bind(tangon)(oscard, report, zuuluu);
                entity['autocompleteResults'] = zuuluu;
                zuuluu = tangon.getLastErrored;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                entity['lastErrored'] = michal;
                return entity;
            };
            oscard = romeon.bind(foxtra)(offset, zuuluu, oscard);
            zuuluu = oscard.autocompleteResults;
            _closure2_slot7 = zuuluu;
            oscard = oscard.lastErrored;
            _closure2_slot8 = oscard;
            foxtra = _closure1_slot4;
            romeon = foxtra.useMemo;
            offset = new Array(3);
            offset[0] = entity;
            offset[1] = zuuluu;
            offset[2] = oscard;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = new Array(0);
                    tangon = _closure2_slot5;
                    zuuluu = '';
                    if(!(zuuluu !== tangon)) { _fun00010_ip = 56; continue _fun00009 }
 19:
                    tangon = entity.push;
                    zuuluu = {};
                    report = _closure1_slot8;
                    report = report.LABEL;
                    zuuluu['type'] = report;
                    report = _closure2_slot5;
                    zuuluu['label'] = report;
                    zuuluu = tangon.bind(entity)(zuuluu);
 56:
                    zuuluu = _closure2_slot7;
                    tangon = null;
                    if(!(tangon == zuuluu)) { _fun00010_ip = 167; continue _fun00009 }
 66:
                    zuuluu = _closure2_slot8;
                    if(zuuluu) { _fun00010_ip = 167; continue _fun00009 }
 73:
                    report = entity.push;
                    zuuluu = global;
                    golfie = zuuluu.Array;
                    zuuluu = golfie.prototype;
                    oscard = Object.create(zuuluu, {constructor: {value: golfie}});
                    yankee = 4;
                    romeon = oscard;
                    zuuluu = new romeon[golfie](yankee, offset);
                    golfie = zuuluu instanceof Object ? zuuluu : oscard;
                    oscard = golfie.fill;
                    zuuluu = {};
                    option = _closure1_slot8;
                    option = option.CHOICE_LOADING;
                    zuuluu['type'] = option;
                    offset = oscard.bind(golfie)(zuuluu);
                    zuuluu = new Array(0);
                    verify = 0;
                    yankee = zuuluu;
                    oscard = arraySpread(yankee, offset, verify);
                    yankee = report;
                    offset = zuuluu;
                    verify = entity;
                    zuuluu = apply(yankee, offset, verify);
                    _fun00010_ip = 229; continue _fun00009;
 167:
                    zuuluu = _closure2_slot7;
                    if(!(tangon != zuuluu)) { _fun00010_ip = 229; continue _fun00009 }
 175:
                    zuuluu = entity.push;
                    report = _closure2_slot7;
                    tangon = report.map;
                    michal = function(argFoo) {
                        entity = {};
                        michal = _closure1_slot8;
                        michal = michal.CHOICE;
                        entity['type'] = michal;
                        michal = argFoo;
                        entity['choice'] = michal;
                        return entity;
                    };
                    offset = tangon.bind(report)(michal);
                    michal = new Array(0);
                    verify = 0;
                    yankee = michal;
                    tangon = arraySpread(yankee, offset, verify);
                    yankee = zuuluu;
                    offset = michal;
                    verify = entity;
                    michal = apply(yankee, offset, verify);
 229:
                    return entity;
                }
            };
            foxtra = romeon.bind(foxtra)(zuuluu, offset);
            _closure2_slot9 = foxtra;
            zuuluu = foxtra.length;
            option = option === zuuluu;
            if(!option) { _fun00008_ip = 338; continue _fun00007 }
 335:
            option = !oscard;
 338:
            romeon = _closure1_slot4;
            offset = romeon.useEffect;
            zuuluu = new Array(5);
            zuuluu[0] = result;
            result = verify.name;
            zuuluu[1] = result;
            zuuluu[2] = output;
            zuuluu[3] = michal;
            zuuluu[4] = entity;
            michal = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    report = _closure1_slot7;
                    tangon = report.getGuild;
                    oscard = _closure2_slot2;
                    zuuluu = oscard.guild_id;
                    report = tangon.bind(report)(zuuluu);
                    tangon = _closure1_slot11;
                    zuuluu = {};
                    entity = _closure2_slot3;
                    zuuluu['command'] = entity;
                    entity = _closure2_slot4;
                    zuuluu['optionValues'] = entity;
                    entity = {};
                    entity['channel'] = oscard;
                    entity['guild'] = report;
                    report = {};
                    oscard = _closure2_slot0;
                    oscard = oscard.name;
                    report['name'] = oscard;
                    oscard = _closure2_slot5;
                    report['query'] = oscard;
                    entity['autocomplete'] = report;
                    zuuluu['context'] = entity;
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    michal = _closure2_slot6;
                    tangon = michal.current;
                    michal = null;
                    if(!(michal != tangon)) { _fun00012_ip = 138; continue _fun00011 }
 117:
                    zuuluu = tangon.scrollToOffset;
                    michal = {'offset': 0, 'animated': false};
                    michal = zuuluu.bind(tangon)(michal);
 138:
                    return entity;
                }
            };
            michal = offset.bind(romeon)(michal, zuuluu);
            romeon = _closure1_slot4;
            offset = romeon.useCallback;
            zuuluu = new Array(2);
            zuuluu[0] = sizing;
            zuuluu[1] = foxtra;
            michal = function(argFoo) {
                entity = argFoo;
                report = entity.item;
                entity = entity.index;
                tangon = _closure1_slot9;
                zuuluu = _closure1_slot13;
                michal = {};
                michal['item'] = report;
                michal['index'] = entity;
                report = _closure2_slot1;
                michal['onChoiceSelect'] = report;
                entity = _closure2_slot9;
                michal['choices'] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            romeon = offset.bind(romeon)(michal, zuuluu);
            offset = _closure1_slot4;
            zuuluu = offset.useCallback;
            michal = new Array(2);
            michal[0] = sizing;
            michal[1] = entity;
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot5;
                    michal = '';
                    if(!(michal !== zuuluu)) { _fun00014_ip = 97; continue _fun00013 }
 15:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00014_ip = 62; continue _fun00013 }
 25:
                    zuuluu = _closure2_slot1;
                    michal = {};
                    tangon = _closure2_slot5;
                    michal['name'] = tangon;
                    tangon = _closure2_slot5;
                    michal['value'] = tangon;
                    entity = _closure2_slot5;
                    michal['displayName'] = entity;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 62:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.hideActionSheet;
                    entity = entity.bind(michal)();
 97:
                    entity = undefined;
                    return entity;
                }
            };
            output = zuuluu.bind(offset)(entity, michal);
            zuuluu = _closure1_slot10;
            source = _closure1_slot0;
            ctrled = _closure1_slot2;
            entity = 14;
            entity = ctrled[entity];
            entity = source.bind(tangon)(entity);
            michal = entity.AppLauncherCommandOptionActionSheet;
            entity = {};
            entity['option'] = verify;
            entity['onDismiss'] = report;
            offset = _closure1_slot9;
            sizing = 15;
            report = ctrled[sizing];
            report = source.bind(tangon)(report);
            verify = report.AppLauncherListSearchBar;
            report = {};
            result = 16;
            echoed = ctrled[result];
            echoed = source.bind(tangon)(echoed);
            update = echoed.intl;
            echoed = update.string;
            result = ctrled[result];
            result = source.bind(tangon)(result);
            result = result.t;
            result = result.Wuie9P;
            result = echoed.bind(update)(result);
            report['placeholder'] = result;
            report['onChange'] = yankee;
            yankee = true;
            report['autoFocus'] = yankee;
            result = 'done';
            report['returnKeyType'] = result;
            report['onSubmitEditing'] = output;
            verify = offset.bind(tangon)(verify, report);
            report = new Array(4);
            report[0] = verify;
            if(!option) { _fun00008_ip = 655; continue _fun00007 }
 620:
            output = _closure1_slot9;
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[sizing];
            verify = offset.bind(tangon)(verify);
            offset = verify.AppLauncherListEmptyState;
            verify = {};
            option = output.bind(tangon)(offset, verify);
 655:
            report[1] = option;
            offset = _closure1_slot9;
            verify = _closure1_slot0;
            option = _closure1_slot2;
            option = option[sizing];
            option = verify.bind(tangon)(option);
            verify = option.AppLauncherList;
            option = {};
            option['ref'] = kiloes;
            backup = function(argFoo, argBar) { // Original name: keyExtractor
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.type;
                    michal = _closure1_slot8;
                    michal = michal.CHOICE;
                    report = 'placeholder';
                    if(!(zuuluu === michal)) { _fun00016_ip = 40; continue _fun00015 }
 29:
                    entity = entity.choice;
                    report = entity.name;
 40:
                    entity = global;
                    entity = entity.HermesInternal;
                    tangon = entity.concat;
                    zuuluu = '';
                    michal = '_';
                    entity = argBar;
                    entity = tangon.bind(zuuluu)(report, michal, entity);
                    return entity;
                }
            };
            option['keyExtractor'] = backup;
            option['data'] = foxtra;
            option['renderItem'] = romeon;
            option['scrollEnabled'] = yankee;
            option = offset.bind(tangon)(verify, option);
            report[2] = option;
            if(!oscard) { _fun00008_ip = 747; continue _fun00007 }
 731:
            verify = _closure1_slot9;
            option = _closure1_slot14;
            golfie = {};
            oscard = verify.bind(tangon)(option, golfie);
 747:
            report[3] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();