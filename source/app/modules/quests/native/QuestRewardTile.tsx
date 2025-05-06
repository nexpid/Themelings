// app/modules/quests/native/QuestRewardTile.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = oscard[tangon];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useMemo;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.AppState;
    var _closure1_slot6 = option;
    option = tangon.View;
    var _closure1_slot7 = option;
    tangon = tangon.StyleSheet;
    var _closure1_slot8 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot10 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = function() {
        entity = {};
        michal = {'borderRadius': null, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
        oscard = _closure1_slot1;
        report = _closure1_slot2;
        tangon = 6;
        report = report[tangon];
        tangon = undefined;
        tangon = oscard.bind(tangon)(report);
        tangon = tangon.radii;
        tangon = tangon.sm;
        michal['borderRadius'] = tangon;
        tangon = 'center';
        entity['container'] = michal;
        michal = {'overflow': 'hidden', 'height': '100%', 'width': '100%'};
        entity['video'] = michal;
        michal = {'height': '100%', 'width': '100%'};
        entity['image'] = michal;
        michal = {};
        zuuluu = _closure1_slot8;
        golfie = zuuluu.absoluteFillObject;
        option = michal;
        zuuluu = copyDataProperties(option, golfie);
        zuuluu = 'justifyContent';
        michal[zuuluu] = tangon;
        zuuluu = 'alignItems';
        michal[zuuluu] = tangon;
        entity['loader'] = michal;
        return entity;
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/native/QuestRewardTile.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: QuestRewardTile
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.quest;
            var _closure2_slot0 = michal;
            kiloes = zuuluu.height;
            foxtra = zuuluu.width;
            golfie = zuuluu.style;
            romeon = zuuluu.paused;
            tangon = undefined;
            if(!(romeon === tangon)) { _fun00002_ip = 44; continue _fun00001 }
 42:
            romeon = false;
 44:
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            report = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 7;
            zuuluu = option[zuuluu];
            verify = report.bind(tangon)(zuuluu);
            option = verify.useStateFromStores;
            zuuluu = _closure1_slot9;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                entity = _closure1_slot9;
                entity = entity.useReducedMotion;
                return entity;
            };
            yankee = option.bind(verify)(report, zuuluu);
            option = _closure1_slot5;
            report = new Array(1);
            report[0] = michal;
            zuuluu = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 8;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getQuestPrimaryReward;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = option.bind(tangon)(zuuluu, report);
            option = zuuluu.name;
            report = null;
            if(!(report == option)) { _fun00002_ip = 154; continue _fun00001 }
 141:
            report = zuuluu.messages;
            report = report.name;
            _fun00002_ip = 159; continue _fun00001;
 154:
            report = zuuluu.name;
 159:
            option = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 9;
                michal = golfie[entity];
                report = undefined;
                tangon = oscard.bind(report)(michal);
                zuuluu = tangon.getQuestAsset;
                michal = _closure2_slot0;
                entity = golfie[entity];
                entity = oscard.bind(report)(entity);
                entity = entity.QuestAssetType;
                entity = entity.REWARD;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            backup = option.bind(tangon)(michal, zuuluu);
            _closure2_slot1 = backup;
            michal = _closure1_slot11;
            verify = michal.bind(tangon)();
            option = _closure1_slot4;
            zuuluu = option.useState;
            michal = _closure1_slot6;
            offset = michal.currentState;
            michal = 'active';
            michal = michal === offset;
            offset = zuuluu.bind(option)(michal);
            zuuluu = _closure1_slot3;
            michal = 2;
            zuuluu = zuuluu.bind(tangon)(offset, michal);
            michal = 0;
            offset = zuuluu[michal];
            michal = 1;
            michal = zuuluu[michal];
            _closure2_slot2 = michal;
            zuuluu = option.useEffect;
            sizing = backup.isAnimated;
            michal = new Array(1);
            michal[0] = sizing;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    michal = michal.isAnimated;
                    if(michal) { _fun00004_ip = 22; continue _fun00003 }
 18:
                    michal = undefined;
                    return michal;
 22:
                    report = _closure1_slot6;
                    tangon = report.addEventListener;
                    zuuluu = 'change';
                    michal = function(argFoo) {
                        zuuluu = _closure2_slot2;
                        entity = undefined;
                        tangon = 'active';
                        michal = argFoo;
                        michal = tangon === michal;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    michal = tangon.bind(report)(zuuluu, michal);
                    var _closure3_slot0 = michal;
                    entity = function() {
                        michal = _closure3_slot0;
                        entity = michal.remove;
                        entity = entity.bind(michal)();
                        entity = undefined;
                        return entity;
                    };
                    return entity;
                }
            };
            entity = zuuluu.bind(option)(entity, michal);
            zuuluu = _closure1_slot10;
            michal = _closure1_slot7;
            entity = {};
            entity['accessibilityLabel'] = report;
            option = verify.container;
            report = new Array(3);
            report[0] = option;
            option = {};
            option['height'] = kiloes;
            option['width'] = foxtra;
            report[1] = option;
            report[2] = golfie;
            entity['style'] = report;
            report = backup.isAnimated;
            if(report) { _fun00002_ip = 411; continue _fun00001 }
 348:
            option = _closure1_slot10;
            golfie = _closure1_slot1;
            foxtra = _closure1_slot2;
            report = 11;
            report = foxtra[report];
            golfie = golfie.bind(tangon)(report);
            report = {};
            foxtra = {};
            kiloes = backup.url;
            foxtra['uri'] = kiloes;
            report['source'] = foxtra;
            foxtra = verify.image;
            report['style'] = foxtra;
            report = option.bind(tangon)(golfie, report);
            _fun00002_ip = 573; continue _fun00001;
 411:
            output = backup.url;
            sizing = output.replace;
            golfie = _closure1_slot0;
            kiloes = _closure1_slot2;
            option = 9;
            option = kiloes[option];
            option = golfie.bind(tangon)(option);
            foxtra = option.EXTENSION_RE;
            option = '.png';
            foxtra = sizing.bind(output)(foxtra, option);
            option = _closure1_slot10;
            oscard = 10;
            oscard = kiloes[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.VideoComponent;
            oscard = {'style': null, 'source': null, 'disableFocus': true, 'importantForAccessibility': 'no-hide-descendants', 'poster': null, 'resizeMode': 'cover'};
            verify = verify.video;
            oscard['style'] = verify;
            verify = {};
            backup = backup.url;
            verify['uri'] = backup;
            oscard['source'] = verify;
            verify = true;
            oscard['poster'] = foxtra;
            offset = !offset;
            if(offset) { _fun00002_ip = 542; continue _fun00001 }
 539:
            offset = romeon;
 542:
            if(offset) { _fun00002_ip = 548; continue _fun00001 }
 545:
            offset = yankee;
 548:
            oscard['paused'] = offset;
            offset = 'mix';
            oscard['mixWithOthers'] = offset;
            oscard['muted'] = verify;
            report = option.bind(tangon)(golfie, oscard);
 573:
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();