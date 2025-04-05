// app/modules/quests/native/VideoQuestModal/VideoQuestTranscriptActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ActivityIndicator;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.FetchStatus;
    var _closure1_slot5 = golfie;
    tangon = tangon.useVideoQuestUIStore;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot7 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    offset = 'center';
    verify = {'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center'};
    tangon['container'] = verify;
    verify = {};
    verify['textAlign'] = offset;
    tangon['headerText'] = verify;
    verify = {};
    offset = 100;
    verify['height'] = offset;
    tangon['loadingSpinner'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/native/VideoQuestModal/VideoQuestTranscriptActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: VideoQuestTranscriptActionSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.quest;
            var _closure2_slot0 = entity;
            michal = _closure1_slot9;
            tangon = undefined;
            sizing = michal.bind(tangon)();
            zuuluu = _closure1_slot6;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.transcript;
                return entity;
            };
            yankee = zuuluu.bind(tangon)(michal);
            var _closure2_slot1 = yankee;
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 5;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            verify = michal.bottom;
            report = _closure1_slot3;
            zuuluu = report.useEffect;
            michal = new Array(2);
            michal[0] = entity;
            michal[1] = yankee;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    michal = michal != zuuluu;
                    if(!michal) { _fun00004_ip = 39; continue _fun00003 }
 16:
                    zuuluu = _closure2_slot1;
                    tangon = zuuluu.questId;
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.id;
                    michal = tangon === zuuluu;
 39:
                    if(!michal) { _fun00004_ip = 69; continue _fun00003 }
 42:
                    zuuluu = _closure2_slot1;
                    tangon = zuuluu.fetchStatus;
                    zuuluu = _closure1_slot5;
                    zuuluu = zuuluu.NONE;
                    michal = tangon !== zuuluu;
 69:
                    if(michal) { _fun00004_ip = 112; continue _fun00003 }
 72:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 6;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.fetchVideoTranscript;
                    entity = _closure2_slot0;
                    entity = michal.bind(zuuluu)(entity);
 112:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zuuluu.bind(report)(entity, michal);
            zuuluu = report.useMemo;
            foxtra = null;
            michal = foxtra == yankee;
            entity = undefined;
            if(michal) { _fun00002_ip = 132; continue _fun00001 }
 127:
            entity = yankee.text;
 132:
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    tangon = null;
                    report = tangon == zuuluu;
                    zuuluu = undefined;
                    if(report) { _fun00006_ip = 29; continue _fun00005 }
 20:
                    report = _closure2_slot1;
                    zuuluu = report.text;
 29:
                    if(!(tangon != zuuluu)) { _fun00006_ip = 92; continue _fun00005 }
 33:
                    michal = _closure2_slot1;
                    tangon = michal.text;
                    zuuluu = tangon.split;
                    michal = '\n';
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.map;
                    michal = function(argFoo) {
                        michal = argFoo;
                        entity = michal.trim;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.filter;
                    entity = function(argFoo) {
                        entity = argFoo;
                        michal = entity.length;
                        entity = 0;
                        entity = michal > entity;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    _fun00006_ip = 96; continue _fun00005;
 92:
                    entity = new Array(0);
 96:
                    return entity;
                }
            };
            backup = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot7;
            option = _closure1_slot0;
            kiloes = _closure1_slot2;
            entity = 7;
            entity = kiloes[entity];
            entity = option.bind(tangon)(entity);
            michal = entity.ActionSheet;
            entity = {};
            report = true;
            entity['scrollable'] = report;
            report = 8;
            report = kiloes[report];
            report = option.bind(tangon)(report);
            oscard = report.BottomSheetTitleHeader;
            report = {};
            golfie = 9;
            output = kiloes[golfie];
            output = option.bind(tangon)(output);
            result = output.intl;
            output = result.string;
            golfie = kiloes[golfie];
            golfie = option.bind(tangon)(golfie);
            golfie = golfie.t;
            golfie = golfie.1YS809;
            golfie = output.bind(result)(golfie);
            report['title'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['header'] = report;
            report = 10;
            report = kiloes[report];
            report = option.bind(tangon)(report);
            oscard = report.BottomSheetScrollView;
            report = {};
            golfie = {};
            golfie['paddingBottom'] = verify;
            report['contentContainerStyle'] = golfie;
            verify = _closure1_slot8;
            golfie = 11;
            golfie = kiloes[golfie];
            golfie = option.bind(tangon)(golfie);
            option = golfie.Stack;
            golfie = {};
            kiloes = 16;
            golfie['spacing'] = kiloes;
            kiloes = foxtra == yankee;
            foxtra = undefined;
            if(kiloes) { _fun00002_ip = 353; continue _fun00001 }
 347:
            foxtra = yankee.fetchStatus;
 353:
            yankee = _closure1_slot5;
            yankee = yankee.FETCHING;
            yankee = foxtra === yankee;
            if(!yankee) { _fun00002_ip = 404; continue _fun00001 }
 370:
            kiloes = _closure1_slot7;
            foxtra = _closure1_slot4;
            offset = {};
            sizing = sizing.loadingSpinner;
            offset['style'] = sizing;
            sizing = 'large';
            offset['size'] = sizing;
            yankee = kiloes.bind(tangon)(foxtra, offset);
 404:
            offset = new Array(2);
            offset[0] = yankee;
            foxtra = backup.length;
            yankee = 0;
            yankee = foxtra > yankee;
            if(!yankee) { _fun00002_ip = 443; continue _fun00001 }
 426:
            foxtra = backup.map;
            romeon = function(argFoo, argBar) {
                report = _closure1_slot7;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 12;
                entity = zuuluu[entity];
                tangon = undefined;
                entity = michal.bind(tangon)(entity);
                zuuluu = entity.Text;
                michal = {'variant': 'heading-md/normal', 'color': 'text-muted'};
                entity = argFoo;
                michal['children'] = entity;
                entity = argBar;
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            };
            yankee = foxtra.bind(backup)(romeon);
 443:
            offset[1] = yankee;
            golfie['children'] = offset;
            golfie = verify.bind(tangon)(option, golfie);
            report['children'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();