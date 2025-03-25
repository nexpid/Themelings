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
    tangon = 11;
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
            romeon = zuuluu.width;
            golfie = zuuluu.style;
            yankee = zuuluu.paused;
            tangon = undefined;
            if(!(yankee === tangon)) { _fun00002_ip = 44; continue _fun00001 }
 42:
            yankee = false;
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
            offset = option.bind(verify)(report, zuuluu);
            report = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 8;
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
            backup = report.bind(tangon)(michal, zuuluu);
            _closure2_slot1 = backup;
            michal = _closure1_slot11;
            foxtra = michal.bind(tangon)();
            report = _closure1_slot4;
            zuuluu = report.useState;
            michal = _closure1_slot6;
            option = michal.currentState;
            michal = 'active';
            michal = michal === option;
            option = zuuluu.bind(report)(michal);
            zuuluu = _closure1_slot3;
            michal = 2;
            zuuluu = zuuluu.bind(tangon)(option, michal);
            michal = 0;
            verify = zuuluu[michal];
            michal = 1;
            michal = zuuluu[michal];
            _closure2_slot2 = michal;
            zuuluu = report.useEffect;
            option = backup.isAnimated;
            michal = new Array(1);
            michal[0] = option;
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
            entity = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot10;
            michal = _closure1_slot7;
            entity = {};
            option = foxtra.container;
            report = new Array(3);
            report[0] = option;
            option = {};
            option['height'] = kiloes;
            option['width'] = romeon;
            report[1] = option;
            report[2] = golfie;
            entity['style'] = report;
            report = backup.isAnimated;
            if(report) { _fun00002_ip = 353; continue _fun00001 }
 290:
            option = _closure1_slot10;
            golfie = _closure1_slot1;
            romeon = _closure1_slot2;
            report = 10;
            report = romeon[report];
            golfie = golfie.bind(tangon)(report);
            report = {};
            romeon = {};
            kiloes = backup.url;
            romeon['uri'] = kiloes;
            report['source'] = romeon;
            romeon = foxtra.image;
            report['style'] = romeon;
            report = option.bind(tangon)(golfie, report);
            _fun00002_ip = 507; continue _fun00001;
 353:
            output = backup.url;
            sizing = output.replace;
            golfie = _closure1_slot0;
            kiloes = _closure1_slot2;
            option = 8;
            option = kiloes[option];
            option = golfie.bind(tangon)(option);
            romeon = option.EXTENSION_RE;
            option = '.png';
            romeon = sizing.bind(output)(romeon, option);
            option = _closure1_slot10;
            oscard = 9;
            oscard = kiloes[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.VideoComponent;
            oscard = {};
            foxtra = foxtra.video;
            oscard['style'] = foxtra;
            foxtra = {};
            backup = backup.url;
            foxtra['uri'] = backup;
            oscard['source'] = foxtra;
            oscard['poster'] = romeon;
            romeon = 'cover';
            oscard['resizeMode'] = romeon;
            verify = !verify;
            if(verify) { _fun00002_ip = 474; continue _fun00001 }
 471:
            verify = yankee;
 474:
            if(verify) { _fun00002_ip = 480; continue _fun00001 }
 477:
            verify = offset;
 480:
            oscard['paused'] = verify;
            verify = 'mix';
            oscard['mixWithOthers'] = verify;
            verify = true;
            oscard['muted'] = verify;
            report = option.bind(tangon)(golfie, oscard);
 507:
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();