// app/modules/notifications/native/GuildHighlightsNotificationsActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: GuildPill
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            offset = entity.guild;
            entity = _closure1_slot14;
            tangon = undefined;
            verify = entity.bind(tangon)();
            zuuluu = _closure1_slot12;
            michal = _closure1_slot5;
            entity = {};
            report = verify.guildPill;
            entity['style'] = report;
            romeon = _closure1_slot11;
            golfie = _closure1_slot1;
            yankee = _closure1_slot2;
            foxtra = 10;
            report = yankee[foxtra];
            option = golfie.bind(tangon)(report);
            report = {};
            report['guild'] = offset;
            golfie = _closure1_slot0;
            foxtra = yankee[foxtra];
            foxtra = golfie.bind(tangon)(foxtra);
            foxtra = foxtra.GuildIconSizes;
            foxtra = foxtra.SMALL_32;
            report['size'] = foxtra;
            foxtra = true;
            report['animate'] = foxtra;
            option = romeon.bind(tangon)(option, report);
            report = new Array(2);
            report[0] = option;
            option = _closure1_slot11;
            oscard = 11;
            oscard = yankee[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.Text;
            oscard = {'style': null, 'variant': 'heading-md/semibold', 'color': 'header-primary'};
            verify = verify.guildName;
            oscard['style'] = verify;
            verify = null;
            yankee = verify == offset;
            verify = undefined;
            if(yankee) { _fun00002_ip = 184; continue _fun00001 }
 179:
            verify = offset.name;
 184:
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: isFeedbackComplete
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00004_ip = 11; continue _fun00003 }
 9:
            entity = {};
 11:
            tangon = entity.rating;
            michal = entity.reason;
            entity = _closure1_slot10;
            entity = entity.GOOD;
            entity = tangon === entity;
            if(entity) { _fun00004_ip = 47; continue _fun00003 }
 43:
            entity = zuuluu != michal;
 47:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: isFeedbackGood
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = null;
            if(!(michal == entity)) { _fun00006_ip = 11; continue _fun00005 }
 9:
            entity = {};
 11:
            michal = entity.rating;
            entity = _closure1_slot10;
            entity = entity.GOOD;
            entity = michal === entity;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
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
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    foxtra = 4;
    tangon = oscard[foxtra];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.HelpdeskArticles;
    var _closure1_slot8 = golfie;
    tangon = tangon.HighlightSettings;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FeedbackRating;
    var _closure1_slot10 = tangon;
    tangon = 7;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot11 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot12 = tangon;
    offset = 8;
    tangon = oscard[offset];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    yankee = 'center';
    verify = {'padding': 24, 'alignItems': 'center', 'justifyContent': 'center'};
    tangon['contentContainer'] = verify;
    verify = {'alignItems': 'center', 'paddingBottom': 24};
    tangon['header'] = verify;
    verify = {};
    verify['marginBottom'] = foxtra;
    tangon['headerTitle'] = verify;
    verify = {};
    verify['textAlign'] = yankee;
    tangon['centerText'] = verify;
    verify = {'marginTop': 16, 'alignItems': 'stretch', 'alignSelf': 'stretch', 'paddingBottom': 16};
    tangon['feedback'] = verify;
    verify = {'height': 40, 'textAlign': 'center', 'textAlignVertical': 'center'};
    tangon['thanks'] = verify;
    verify = {'flex': 1, 'backgroundColor': null, 'marginVertical': 8, 'padding': 0};
    yankee = 9;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = foxtra;
    tangon['settings'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot13 = tangon;
    tangon = oscard[offset];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flexDirection': 'row', 'padding': 8, 'marginBottom': 16, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND;
    verify['backgroundColor'] = foxtra;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.round;
    verify['borderRadius'] = foxtra;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.shadows;
    kiloes = yankee.SHADOW_LOW;
    sizing = verify;
    yankee = copyDataProperties(sizing, kiloes);
    tangon['guildPill'] = verify;
    verify = {};
    verify['paddingHorizontal'] = offset;
    tangon['guildName'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 27;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/notifications/native/GuildHighlightsNotificationsActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: SummaryFeedbackActionSheet
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            entity = michal.guildId;
            var _closure2_slot0 = entity;
            sizing = michal.feedbackSettings;
            var _closure2_slot1 = sizing;
            michal = _closure1_slot13;
            tangon = undefined;
            output = michal.bind(tangon)();
            yankee = _closure1_slot4;
            michal = yankee.useRef;
            backup = null;
            oscard = michal.bind(yankee)(backup);
            var _closure2_slot2 = oscard;
            michal = yankee.useState;
            michal = michal.bind(yankee)(tangon);
            verify = _closure1_slot3;
            option = 2;
            michal = verify.bind(tangon)(michal, option);
            report = 0;
            kiloes = michal[report];
            var _closure2_slot3 = kiloes;
            zuuluu = 1;
            michal = michal[zuuluu];
            var _closure2_slot4 = michal;
            michal = yankee.useState;
            offset = false;
            michal = michal.bind(yankee)(offset);
            michal = verify.bind(tangon)(michal, option);
            golfie = michal[report];
            var _closure2_slot5 = golfie;
            michal = michal[zuuluu];
            var _closure2_slot6 = michal;
            michal = yankee.useState;
            michal = michal.bind(yankee)(offset);
            michal = verify.bind(tangon)(michal, option);
            offset = michal[report];
            michal = michal[zuuluu];
            var _closure2_slot7 = michal;
            option = yankee.useCallback;
            zuuluu = new Array(2);
            zuuluu[0] = golfie;
            zuuluu[1] = sizing;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = argFoo;
                    michal = _closure2_slot5;
                    if(michal) { _fun00010_ip = 34; continue _fun00009 }
 13:
                    report = null;
                    oscard = report == tangon;
                    zuuluu = undefined;
                    if(oscard) { _fun00010_ip = 30; continue _fun00009 }
 24:
                    zuuluu = tangon.rating;
 30:
                    michal = report == zuuluu;
 34:
                    if(michal) { _fun00010_ip = 128; continue _fun00009 }
 37:
                    michal = _closure2_slot1;
                    report = null;
                    michal = report == michal;
                    if(michal) { _fun00010_ip = 64; continue _fun00009 }
 50:
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu.onFeedbackCompleted;
                    michal = report == zuuluu;
 64:
                    if(michal) { _fun00010_ip = 82; continue _fun00009 }
 67:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.onFeedbackCompleted;
                    michal = michal.bind(zuuluu)(tangon);
 82:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 12;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    tangon = tangon.bind(zuuluu)(michal);
                    michal = tangon.handleSurveyCleanup;
                    michal = michal.bind(tangon)();
                    michal = _closure2_slot6;
                    entity = true;
                    entity = michal.bind(zuuluu)(entity);
 128:
                    entity = undefined;
                    return entity;
                }
            };
            michal = option.bind(yankee)(michal, zuuluu);
            var _closure2_slot8 = michal;
            verify = yankee.useEffect;
            option = new Array(2);
            option[0] = kiloes;
            option[1] = michal;
            zuuluu = function() {
                entity = function() {
                    zuuluu = _closure2_slot8;
                    michal = _closure2_slot3;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                return entity;
            };
            zuuluu = verify.bind(yankee)(zuuluu, option);
            option = yankee.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    report = argFoo;
                    michal = _closure2_slot4;
                    entity = undefined;
                    michal = michal.bind(entity)(report);
                    tangon = _closure1_slot16;
                    tangon = tangon.bind(entity)(report);
                    if(tangon) { _fun00012_ip = 45; continue _fun00011 }
 32:
                    oscard = _closure2_slot7;
                    tangon = true;
                    tangon = oscard.bind(entity)(tangon);
                    _fun00012_ip = 65; continue _fun00011;
 45:
                    tangon = _closure2_slot8;
                    tangon = tangon.bind(entity)(report);
                    tangon = _closure2_slot7;
                    zuuluu = false;
                    zuuluu = tangon.bind(entity)(zuuluu);
 65:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 12;
                    michal = tangon[michal];
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.handleSurveyCleanup;
                    michal = michal.bind(zuuluu)();
                    return entity;
                }
            };
            option = option.bind(yankee)(michal, zuuluu);
            verify = yankee.useCallback;
            zuuluu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure2_slot2;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00014_ip = 28; continue _fun00013 }
 18:
                    michal = zuuluu.expandActionSheet;
                    michal = michal.bind(zuuluu)();
 28:
                    zuuluu = _closure2_slot7;
                    entity = undefined;
                    michal = false;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            michal = new Array(0);
            verify = verify.bind(yankee)(zuuluu, michal);
            zuuluu = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 13;
            michal = yankee[michal];
            romeon = zuuluu.bind(tangon)(michal);
            yankee = romeon.useStateFromStoresObject;
            michal = _closure1_slot7;
            zuuluu = new Array(2);
            zuuluu[0] = michal;
            michal = _closure1_slot6;
            zuuluu[1] = michal;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                entity = {};
                report = _closure1_slot6;
                zuuluu = report.getGuild;
                tangon = _closure2_slot0;
                zuuluu = zuuluu.bind(report)(tangon);
                entity['guild'] = zuuluu;
                zuuluu = _closure1_slot7;
                michal = zuuluu.isMuted;
                michal = michal.bind(zuuluu)(tangon);
                entity['muted'] = michal;
                michal = zuuluu.getNotifyHighlights;
                michal = michal.bind(zuuluu)(tangon);
                entity['notifyHighlights'] = michal;
                return entity;
            };
            entity = yankee.bind(romeon)(zuuluu, entity, michal);
            update = entity.guild;
            sequen = entity.muted;
            record = entity.notifyHighlights;
            michal = backup == sizing;
            entity = undefined;
            if(michal) { _fun00008_ip = 375; continue _fun00007 }
 369:
            entity = sizing.reasons;
 375:
            entity = backup != entity;
            ctrled = null;
            if(!entity) { _fun00008_ip = 723; continue _fun00007 }
 387:
            michal = _closure1_slot16;
            michal = michal.bind(tangon)(kiloes);
            yankee = _closure1_slot11;
            source = _closure1_slot0;
            vacuum = _closure1_slot2;
            if(michal) { _fun00008_ip = 600; continue _fun00007 }
 414:
            michal = 15;
            michal = vacuum[michal];
            michal = source.bind(tangon)(michal);
            zuuluu = michal.FeedbackForm;
            michal = {};
            romeon = 14;
            result = vacuum[romeon];
            result = source.bind(tangon)(result);
            cntext = result.intl;
            config = cntext.string;
            result = vacuum[romeon];
            result = source.bind(tangon)(result);
            result = result.t;
            result = result.Yzl7Oj;
            result = config.bind(cntext)(result);
            michal['ratingsBodyLabel'] = result;
            result = vacuum[romeon];
            result = source.bind(tangon)(result);
            config = result.intl;
            result = config.string;
            romeon = vacuum[romeon];
            romeon = source.bind(tangon)(romeon);
            romeon = romeon.t;
            romeon = romeon.g1q5fn;
            romeon = result.bind(config)(romeon);
            michal['reasonsHeaderLabel'] = romeon;
            result = backup == sizing;
            romeon = undefined;
            if(result) { _fun00008_ip = 550; continue _fun00007 }
 544:
            romeon = sizing.reasons;
 550:
            if(!(backup == romeon)) { _fun00008_ip = 558; continue _fun00007 }
 554:
            romeon = new Array(0);
 558:
            michal['reasons'] = romeon;
            if(!(backup == sizing)) { _fun00008_ip = 576; continue _fun00007 }
 567:
            romeon = function() {
                entity = undefined;
                return entity;
            };
            _fun00008_ip = 582; continue _fun00007;
 576:
            romeon = sizing.onFeedbackShown;
 582:
            michal['trackOpen'] = romeon;
            michal['onFeedbackChanged'] = option;
            michal = yankee.bind(tangon)(zuuluu, michal);
            _fun00008_ip = 720; continue _fun00007;
 600:
            zuuluu = 11;
            zuuluu = vacuum[zuuluu];
            zuuluu = source.bind(tangon)(zuuluu);
            option = zuuluu.Text;
            zuuluu = {'style': null, 'variant': 'heading-md/semibold', 'color': 'text-brand'};
            sizing = output.centerText;
            romeon = new Array(2);
            romeon[0] = sizing;
            sizing = output.thanks;
            romeon[1] = sizing;
            zuuluu['style'] = romeon;
            romeon = 14;
            sizing = vacuum[romeon];
            sizing = source.bind(tangon)(sizing);
            result = sizing.intl;
            sizing = result.string;
            romeon = vacuum[romeon];
            romeon = source.bind(tangon)(romeon);
            romeon = romeon.t;
            romeon = romeon.kZbFIC;
            romeon = sizing.bind(result)(romeon);
            zuuluu['children'] = romeon;
            michal = yankee.bind(tangon)(option, zuuluu);
 720:
            ctrled = michal;
 723:
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            michal = 16;
            michal = option[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            zuuluu = michal.bottom;
            report = 0;
            if(!entity) { _fun00008_ip = 769; continue _fun00007 }
 757:
            michal = 148;
            if(!golfie) { _fun00008_ip = 766; continue _fun00007 }
 763:
            michal = 64;
 766:
            report = michal;
 769:
            michal = 316;
            michal = michal + report;
            report = michal + zuuluu;
            golfie = !entity;
            if(!entity) { _fun00008_ip = 798; continue _fun00007 }
 789:
            entity = _closure1_slot16;
            golfie = entity.bind(tangon)(kiloes);
 798:
            if(golfie) { _fun00008_ip = 820; continue _fun00007 }
 801:
            michal = backup == kiloes;
            entity = undefined;
            if(michal) { _fun00008_ip = 816; continue _fun00007 }
 810:
            entity = kiloes.rating;
 816:
            golfie = backup == entity;
 820:
            zuuluu = _closure1_slot11;
            michal = _closure1_slot0;
            option = _closure1_slot2;
            entity = 17;
            entity = option[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.BottomSheet;
            entity = {};
            option = true;
            entity['scrollable'] = option;
            entity['ref'] = oscard;
            oscard = undefined;
            if(!golfie) { _fun00008_ip = 871; continue _fun00007 }
 868:
            oscard = report;
 871:
            entity['contentHeight'] = oscard;
            entity['startHeight'] = report;
            golfie = _closure1_slot11;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            report = 18;
            report = option[report];
            report = oscard.bind(tangon)(report);
            oscard = report.BottomSheetScrollView;
            report = {};
            option = output.contentContainer;
            report['contentContainerStyle'] = option;
            option = undefined;
            if(!offset) { _fun00008_ip = 932; continue _fun00007 }
 929:
            option = verify;
 932:
            report['onLayout'] = option;
            offset = _closure1_slot12;
            verify = _closure1_slot5;
            option = {};
            yankee = {};
            romeon = output.header;
            yankee['style'] = romeon;
            result = _closure1_slot11;
            sizing = _closure1_slot15;
            romeon = {};
            romeon['guild'] = update;
            romeon = result.bind(tangon)(sizing, romeon);
            sizing = new Array(3);
            sizing[0] = romeon;
            source = _closure1_slot11;
            cntext = _closure1_slot0;
            limora = _closure1_slot2;
            romeon = 11;
            romeon = limora[romeon];
            romeon = cntext.bind(tangon)(romeon);
            result = romeon.Text;
            romeon = {'style': null, 'variant': 'heading-lg/semibold', 'color': 'header-primary'};
            update = output.headerTitle;
            romeon['style'] = update;
            update = 14;
            vacuum = limora[update];
            vacuum = cntext.bind(tangon)(vacuum);
            papara = vacuum.intl;
            config = papara.string;
            vacuum = limora[update];
            vacuum = cntext.bind(tangon)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.o8Bypq;
            vacuum = config.bind(papara)(vacuum);
            romeon['children'] = vacuum;
            romeon = source.bind(tangon)(result, romeon);
            sizing[1] = romeon;
            vacuum = _closure1_slot11;
            romeon = 19;
            result = limora[romeon];
            result = cntext.bind(tangon)(result);
            source = result.TextWithIOSLinkWorkaround;
            result = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            config = output.centerText;
            result['style'] = config;
            config = limora[update];
            config = cntext.bind(tangon)(config);
            target = config.intl;
            papara = target.format;
            config = limora[update];
            config = cntext.bind(tangon)(config);
            config = config.t;
            cntext = config.enfuur;
            config = {};
            sierra = _closure1_slot1;
            status = 20;
            status = limora[status];
            limora = sierra.bind(tangon)(status);
            sierra = limora.getArticleURL;
            status = _closure1_slot8;
            status = status.HIGHLIGHTS_NOTIFICATIONS;
            status = sierra.bind(limora)(status);
            config['helpUrl'] = status;
            config = papara.bind(target)(cntext, config);
            result['children'] = config;
            result = vacuum.bind(tangon)(source, result);
            sizing[2] = result;
            yankee['children'] = sizing;
            sizing = offset.bind(tangon)(verify, yankee);
            yankee = new Array(4);
            yankee[0] = sizing;
            backup = backup != ctrled;
            if(!backup) { _fun00008_ip = 1331; continue _fun00007 }
 1280:
            source = _closure1_slot11;
            result = _closure1_slot1;
            vacuum = _closure1_slot2;
            sizing = 21;
            sizing = vacuum[sizing];
            sizing = result.bind(tangon)(sizing);
            result = sizing.View;
            sizing = {};
            vacuum = output.feedback;
            sizing['style'] = vacuum;
            sizing['children'] = ctrled;
            backup = source.bind(tangon)(result, sizing);
 1331:
            yankee[1] = backup;
            backup = _closure1_slot17;
            kiloes = backup.bind(tangon)(kiloes);
            backup = !kiloes;
            if(kiloes) { _fun00008_ip = 1536; continue _fun00007 }
 1353:
            result = _closure1_slot11;
            target = _closure1_slot0;
            config = _closure1_slot2;
            kiloes = 22;
            kiloes = config[kiloes];
            kiloes = target.bind(tangon)(kiloes);
            sizing = kiloes.Card;
            kiloes = {'style': null, 'shadow': 'low', 'border': 'subtle'};
            source = output.settings;
            kiloes['style'] = source;
            vacuum = _closure1_slot11;
            source = 23;
            source = config[source];
            source = target.bind(tangon)(source);
            ctrled = source.FormSwitchRow;
            source = {};
            source['disabled'] = sequen;
            cntext = config[update];
            cntext = target.bind(tangon)(cntext);
            papara = cntext.intl;
            cntext = papara.string;
            config = config[update];
            config = target.bind(tangon)(config);
            config = config.t;
            config = config.MVi7LS;
            config = cntext.bind(papara)(config);
            source['label'] = config;
            if(sequen) { _fun00008_ip = 1504; continue _fun00007 }
 1490:
            config = _closure1_slot9;
            config = config.DISABLED;
            sequen = record === config;
 1504:
            source['value'] = sequen;
            sequen = function(argFoo) { // Original name: onValueChange
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = argFoo;
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 24;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    oscard = tangon.bind(entity)(zuuluu);
                    report = oscard.updateGuildNotificationSettings;
                    tangon = _closure2_slot0;
                    zuuluu = {};
                    verify = _closure1_slot9;
                    if(michal) { _fun00016_ip = 58; continue _fun00015 }
 50:
                    option = verify.ENABLED;
                    _fun00016_ip = 64; continue _fun00015;
 58:
                    option = verify.DISABLED;
 64:
                    zuuluu['notify_highlights'] = option;
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    golfie = 25;
                    golfie = verify[golfie];
                    golfie = option.bind(entity)(golfie);
                    option = golfie.NotificationLabel;
                    golfie = option.highlights;
                    michal = !michal;
                    michal = golfie.bind(option)(michal);
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    return entity;
                }
            };
            source['onValueChange'] = sequen;
            source = vacuum.bind(tangon)(ctrled, source);
            kiloes['children'] = source;
            backup = result.bind(tangon)(sizing, kiloes);
 1536:
            yankee[2] = backup;
            backup = _closure1_slot11;
            sizing = _closure1_slot0;
            kiloes = _closure1_slot2;
            romeon = kiloes[romeon];
            romeon = sizing.bind(tangon)(romeon);
            foxtra = romeon.TextWithIOSLinkWorkaround;
            romeon = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            output = output.centerText;
            romeon['style'] = output;
            output = kiloes[update];
            output = sizing.bind(tangon)(output);
            result = output.intl;
            output = result.format;
            kiloes = kiloes[update];
            kiloes = sizing.bind(tangon)(kiloes);
            kiloes = kiloes.t;
            sizing = kiloes.F9rfLS;
            kiloes = {};
            echoed = function() { // Original name: notifSettingsHook
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 26;
                michal = tangon[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                michal = report.hideActionSheet;
                michal = michal.bind(report)();
                michal = 24;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.open;
                michal = _closure2_slot0;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            kiloes['notifSettingsHook'] = echoed;
            kiloes = output.bind(result)(sizing, kiloes);
            romeon['children'] = kiloes;
            romeon = backup.bind(tangon)(foxtra, romeon);
            yankee[3] = romeon;
            option['children'] = yankee;
            option = offset.bind(tangon)(verify, option);
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();