// app/modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useVideoQuestUIStore;
    var _closure1_slot4 = tangon;
    tangon = 3;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot5 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'flex-start'};
    tangon['videoContentHeaderWrapper'] = verify;
    verify = {};
    offset = 'column';
    verify['flexDirection'] = offset;
    offset = 5;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_4;
    verify['gap'] = romeon;
    tangon['videoContentHeading'] = verify;
    verify = {'margin': 4294967281, 'padding': 15, 'textShadowColor': null, 'textShadowOffset': null, 'textShadowRadius': 15};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BLACK;
    verify['textShadowColor'] = offset;
    offset = {'width': 0, 'height': 0};
    verify['textShadowOffset'] = offset;
    tangon['textShadow'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: VideoQuestModalHeader
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            verify = michal.onClose;
            golfie = michal.style;
            zuuluu = michal.showCurrentVideoTime;
            tangon = undefined;
            backup = tangon !== zuuluu;
            if(!backup) { _fun00002_ip = 34; continue _fun00001 }
 31:
            backup = zuuluu;
 34:
            michal = michal.withTextShadow;
            romeon = tangon !== michal;
            if(!romeon) { _fun00002_ip = 50; continue _fun00001 }
 47:
            romeon = michal;
 50:
            michal = _closure1_slot7;
            output = michal.bind(tangon)();
            report = _closure1_slot0;
            option = _closure1_slot2;
            michal = 6;
            michal = option[michal];
            zuuluu = report.bind(tangon)(michal);
            michal = zuuluu.useVideoQuestModalContext;
            michal = michal.bind(zuuluu)();
            foxtra = michal.quest;
            var _closure2_slot0 = foxtra;
            michal = 7;
            michal = option[michal];
            zuuluu = report.bind(tangon)(michal);
            michal = zuuluu.useQuestTaskDetails;
            michal = michal.bind(zuuluu)(foxtra);
            var _closure2_slot1 = michal;
            zuuluu = _closure1_slot4;
            michal = 9;
            michal = option[michal];
            michal = report.bind(tangon)(michal);
            michal = michal.shallow;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    michal = entity.videoProgress;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = michal[entity];
                    michal = null;
                    if(!(michal == entity)) { _fun00004_ip = 65; continue _fun00003 }
 31:
                    michal = {};
                    tangon = _closure2_slot1;
                    tangon = tangon.progressSeconds;
                    michal['timestampSec'] = tangon;
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu.targetSeconds;
                    michal['duration'] = zuuluu;
                    entity = michal;
 65:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 8;
                    oscard = report[michal];
                    zuuluu = undefined;
                    golfie = tangon.bind(zuuluu)(oscard);
                    oscard = golfie.parseMinutesAndSecondsFromSeconds;
                    entity = entity.timestampSec;
                    entity = oscard.bind(golfie)(entity);
                    michal = report[michal];
                    tangon = tangon.bind(zuuluu)(michal);
                    zuuluu = tangon.formatWatchTaskTime;
                    michal = entity.minutes;
                    entity = entity.seconds;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            kiloes = zuuluu.bind(tangon)(entity, michal);
            zuuluu = foxtra.userStatus;
            michal = null;
            report = michal == zuuluu;
            entity = undefined;
            if(report) { _fun00002_ip = 186; continue _fun00001 }
 180:
            entity = zuuluu.completedAt;
 186:
            sizing = michal != entity;
            zuuluu = _closure1_slot6;
            michal = _closure1_slot3;
            entity = {};
            option = output.videoContentHeaderWrapper;
            report = new Array(2);
            report[0] = option;
            report[1] = golfie;
            entity['style'] = report;
            report = {};
            golfie = output.videoContentHeading;
            report['style'] = golfie;
            echoed = _closure1_slot5;
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            result = 10;
            golfie = golfie[result];
            golfie = option.bind(tangon)(golfie);
            yankee = golfie.Text;
            golfie = {'variant': 'heading-md/semibold', 'color': 'white'};
            option = romeon;
            if(!romeon) { _fun00002_ip = 289; continue _fun00001 }
 283:
            option = output.textShadow;
 289:
            golfie['style'] = option;
            offset = _closure1_slot0;
            option = _closure1_slot2;
            update = 11;
            source = option[update];
            source = offset.bind(tangon)(source);
            vacuum = source.intl;
            ctrled = vacuum.formatToPlainString;
            update = option[update];
            update = offset.bind(tangon)(update);
            update = update.t;
            source = update.EQa7oq;
            update = {};
            sequen = foxtra.config;
            sequen = sequen.messages;
            sequen = sequen.questName;
            update['questName'] = sequen;
            update = ctrled.bind(vacuum)(source, update);
            golfie['children'] = update;
            yankee = echoed.bind(tangon)(yankee, golfie);
            golfie = new Array(2);
            golfie[0] = yankee;
            yankee = _closure1_slot5;
            option = option[result];
            option = offset.bind(tangon)(option);
            offset = option.Text;
            option = {'variant': 'heading-md/semibold', 'color': 'interactive-normal'};
            if(!romeon) { _fun00002_ip = 432; continue _fun00001 }
 426:
            romeon = output.textShadow;
 432:
            option['style'] = romeon;
            romeon = kiloes;
            if(!sizing) { _fun00002_ip = 465; continue _fun00001 }
 442:
            romeon = kiloes;
            if(backup) { _fun00002_ip = 465; continue _fun00001 }
 448:
            foxtra = foxtra.config;
            foxtra = foxtra.messages;
            romeon = foxtra.gamePublisher;
 465:
            option['children'] = romeon;
            option = yankee.bind(tangon)(offset, option);
            golfie[1] = option;
            report['children'] = golfie;
            golfie = zuuluu.bind(tangon)(michal, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot5;
            golfie = _closure1_slot1;
            offset = _closure1_slot2;
            oscard = 12;
            oscard = offset[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            oscard['onClose'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();