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
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot5 = golfie;
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
    verify = {};
    romeon = 0.6;
    verify['opacity'] = romeon;
    tangon['subheader'] = verify;
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
            offset = michal.closeButtonIconColor;
            verify = michal.onClose;
            golfie = michal.style;
            zuuluu = michal.showCurrentVideoTime;
            tangon = undefined;
            kiloes = tangon !== zuuluu;
            if(!kiloes) { _fun00002_ip = 40; continue _fun00001 }
 37:
            kiloes = zuuluu;
 40:
            michal = michal.withTextShadow;
            result = tangon !== michal;
            if(!result) { _fun00002_ip = 56; continue _fun00001 }
 53:
            result = michal;
 56:
            michal = _closure1_slot7;
            echoed = michal.bind(tangon)();
            report = _closure1_slot0;
            option = _closure1_slot2;
            michal = 6;
            michal = option[michal];
            zuuluu = report.bind(tangon)(michal);
            michal = zuuluu.useVideoQuestModalContext;
            michal = michal.bind(zuuluu)();
            backup = michal.quest;
            var _closure2_slot0 = backup;
            michal = 7;
            michal = option[michal];
            zuuluu = report.bind(tangon)(michal);
            michal = zuuluu.useQuestTaskDetails;
            michal = michal.bind(zuuluu)(backup);
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
                    option = entity.duration;
                    entity = entity.timestampSec;
                    entity = option - entity;
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
            sizing = zuuluu.bind(tangon)(entity, michal);
            zuuluu = backup.userStatus;
            michal = null;
            report = michal == zuuluu;
            entity = undefined;
            if(report) { _fun00002_ip = 192; continue _fun00001 }
 186:
            entity = zuuluu.completedAt;
 192:
            output = michal != entity;
            zuuluu = _closure1_slot6;
            michal = _closure1_slot3;
            entity = {};
            option = echoed.videoContentHeaderWrapper;
            report = new Array(2);
            report[0] = option;
            report[1] = golfie;
            entity['style'] = report;
            report = {};
            golfie = echoed.videoContentHeading;
            report['style'] = golfie;
            update = _closure1_slot5;
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            foxtra = 10;
            golfie = golfie[foxtra];
            golfie = option.bind(tangon)(golfie);
            romeon = golfie.Text;
            golfie = {'variant': 'heading-md/semibold', 'color': 'white'};
            option = result;
            if(!result) { _fun00002_ip = 295; continue _fun00001 }
 289:
            option = echoed.textShadow;
 295:
            golfie['style'] = option;
            yankee = _closure1_slot0;
            option = _closure1_slot2;
            source = 11;
            ctrled = option[source];
            ctrled = yankee.bind(tangon)(ctrled);
            sequen = ctrled.intl;
            vacuum = sequen.formatToPlainString;
            source = option[source];
            source = yankee.bind(tangon)(source);
            source = source.t;
            ctrled = source.EQa7oq;
            source = {};
            config = backup.config;
            config = config.messages;
            config = config.questName;
            source['questName'] = config;
            source = vacuum.bind(sequen)(ctrled, source);
            golfie['children'] = source;
            romeon = update.bind(tangon)(romeon, golfie);
            golfie = new Array(2);
            golfie[0] = romeon;
            romeon = _closure1_slot5;
            option = option[foxtra];
            option = yankee.bind(tangon)(option);
            yankee = option.Text;
            option = {'variant': 'heading-sm/semibold', 'color': 'white'};
            update = echoed.subheader;
            foxtra = new Array(2);
            foxtra[0] = update;
            if(!result) { _fun00002_ip = 452; continue _fun00001 }
 446:
            result = echoed.textShadow;
 452:
            foxtra[1] = result;
            option['style'] = foxtra;
            foxtra = sizing;
            if(!output) { _fun00002_ip = 489; continue _fun00001 }
 466:
            foxtra = sizing;
            if(kiloes) { _fun00002_ip = 489; continue _fun00001 }
 472:
            backup = backup.config;
            backup = backup.messages;
            foxtra = backup.gamePublisher;
 489:
            option['children'] = foxtra;
            option = romeon.bind(tangon)(yankee, option);
            golfie[1] = option;
            report['children'] = golfie;
            golfie = zuuluu.bind(tangon)(michal, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot5;
            golfie = _closure1_slot1;
            yankee = _closure1_slot2;
            oscard = 12;
            oscard = yankee[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            oscard['iconColor'] = offset;
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