// app/modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = golfie;
    michal = function(argFoo) { // Original name: useQuestRewardClaimHandler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeon = entity.quest;
            var _closure2_slot0 = romeon;
            verify = entity.hideActionSheet;
            foxtra = undefined;
            if(!(verify === foxtra)) { _fun00002_ip = 29; continue _fun00001 }
 27:
            verify = true;
 29:
            var _closure2_slot1 = verify;
            option = entity.questContent;
            if(!(option === foxtra)) { _fun00002_ip = 78; continue _fun00001 }
 43:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 9;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(foxtra)(zuuluu);
            zuuluu = zuuluu.QuestContent;
            option = zuuluu.QUEST_BOTTOM_SHEET;
 78:
            var _closure2_slot2 = option;
            golfie = entity.onSuccess;
            var _closure2_slot3 = golfie;
            oscard = entity.sourceQuestContent;
            var _closure2_slot4 = oscard;
            var _closure2_slot5 = foxtra;
            var _closure2_slot6 = foxtra;
            var _closure2_slot7 = foxtra;
            var _closure2_slot8 = foxtra;
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            entity = 10;
            tangon = kiloes[entity];
            report = backup.bind(foxtra)(tangon);
            tangon = report.useProgressState;
            sizing = tangon.bind(report)(romeon);
            yankee = _closure1_slot4;
            offset = yankee.useMemo;
            report = new Array(1);
            report[0] = romeon;
            tangon = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 11;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                zuuluu = entity.SharedQuestFields;
                michal = zuuluu.build;
                entity = _closure2_slot0;
                entity = entity.config;
                entity = michal.bind(zuuluu)(entity);
                entity = entity.defaultReward;
                entity = entity.skuId;
                return entity;
            };
            offset = offset.bind(yankee)(tangon, report);
            tangon = 12;
            tangon = kiloes[tangon];
            yankee = backup.bind(foxtra)(tangon);
            report = yankee.hasCollectiblesQuestReward;
            tangon = romeon.config;
            yankee = report.bind(yankee)(tangon);
            tangon = 13;
            tangon = kiloes[tangon];
            report = backup.bind(foxtra)(tangon);
            tangon = report.useFetchCollectiblesProduct;
            entity = kiloes[entity];
            entity = backup.bind(foxtra)(entity);
            entity = entity.QuestProgressState;
            kiloes = entity.COMPLETED;
            entity = null;
            if(!(sizing === kiloes)) { _fun00002_ip = 263; continue _fun00001 }
 255:
            entity = null;
            if(!yankee) { _fun00002_ip = 263; continue _fun00001 }
 260:
            entity = offset;
 263:
            entity = tangon.bind(report)(entity);
            yankee = entity.product;
            _closure2_slot5 = yankee;
            sizing = entity.isFetching;
            _closure2_slot6 = sizing;
            offset = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 14;
            tangon = backup[entity];
            output = offset.bind(foxtra)(tangon);
            kiloes = output.useStateFromStoresObject;
            tangon = _closure1_slot8;
            report = new Array(1);
            report[0] = tangon;
            tangon = function() {
                entity = {};
                oscard = _closure1_slot8;
                report = oscard.isFetchingRewardCode;
                michal = _closure2_slot0;
                tangon = michal.id;
                tangon = report.bind(oscard)(tangon);
                entity['isFetchingRewardCode'] = tangon;
                tangon = _closure1_slot8;
                zuuluu = tangon.isClaimingReward;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                entity['isClaimingReward'] = michal;
                return entity;
            };
            report = kiloes.bind(output)(report, tangon);
            tangon = report.isClaimingReward;
            report = report.isFetchingRewardCode;
            _closure2_slot7 = report;
            entity = backup[entity];
            backup = offset.bind(foxtra)(entity);
            foxtra = backup.useStateFromStores;
            entity = _closure1_slot7;
            offset = new Array(1);
            offset[0] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure1_slot7;
                    entity = michal.getCurrentUser;
                    zuuluu = entity.bind(michal)();
                    entity = null;
                    michal = entity == zuuluu;
                    entity = undefined;
                    if(michal) { _fun00004_ip = 37; continue _fun00003 }
 27:
                    michal = zuuluu.hasVerifiedEmailOrPhone;
                    entity = michal.bind(zuuluu)();
 37:
                    return entity;
                }
            };
            offset = foxtra.bind(backup)(offset, entity);
            _closure2_slot8 = offset;
            entity = {};
            kiloes = _closure1_slot4;
            backup = kiloes.useMemo;
            foxtra = new Array(2);
            foxtra[0] = sizing;
            foxtra[1] = report;
            report = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot6;
                    if(entity) { _fun00006_ip = 14; continue _fun00005 }
 10:
                    entity = _closure2_slot7;
 14:
                    return entity;
                }
            };
            report = backup.bind(kiloes)(report, foxtra);
            entity['isLoading'] = report;
            entity['isClaiming'] = tangon;
            report = _closure1_slot4;
            tangon = report.useCallback;
            zuuluu = new Array(7);
            zuuluu[0] = romeon;
            zuuluu[1] = yankee;
            zuuluu[2] = offset;
            zuuluu[3] = verify;
            zuuluu[4] = option;
            zuuluu[5] = golfie;
            zuuluu[6] = oscard;
            michal = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 15;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.handleRewardClaimThenView;
                entity = {};
                report = _closure2_slot0;
                entity['quest'] = report;
                report = _closure2_slot5;
                entity['product'] = report;
                report = _closure2_slot1;
                entity['hideActionSheet'] = report;
                report = _closure2_slot2;
                entity['questContent'] = report;
                report = _closure2_slot8;
                entity['currentUserHasVerifiedEmailOrPhone'] = report;
                report = _closure2_slot3;
                entity['onSuccess'] = report;
                tangon = _closure2_slot4;
                entity['sourceQuestContent'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = tangon.bind(report)(michal, zuuluu);
            entity['claim'] = michal;
            return entity;
        }
    };
    var _closure1_slot15 = michal;
    entity = function(argFoo) { // Original name: WatchTaskButton
        entity = argFoo;
        golfie = entity.questId;
        oscard = entity.sourceQuestContent;
        yankee = entity.taskDetails;
        offset = _closure1_slot0;
        romeon = _closure1_slot2;
        michal = 16;
        michal = romeon[michal];
        tangon = undefined;
        report = offset.bind(tangon)(michal);
        zuuluu = report.useWatchTaskPressHandler;
        michal = {};
        michal['questId'] = golfie;
        michal['sourceQuestContent'] = oscard;
        report = zuuluu.bind(report)(michal);
        zuuluu = _closure1_slot9;
        entity = 17;
        entity = romeon[entity];
        entity = offset.bind(tangon)(entity);
        michal = entity.Button;
        entity = {'grow': true, 'size': 'lg'};
        entity['onPress'] = report;
        report = 18;
        oscard = romeon[report];
        oscard = offset.bind(tangon)(oscard);
        option = oscard.intl;
        golfie = option.formatToPlainString;
        report = romeon[report];
        report = offset.bind(tangon)(report);
        report = report.t;
        oscard = report.GNsKiY;
        report = {};
        verify = 12;
        verify = romeon[verify];
        offset = offset.bind(tangon)(verify);
        verify = offset.formatWatchTaskRemainingTime;
        verify = verify.bind(offset)(yankee);
        report['remainTime'] = verify;
        report = golfie.bind(option)(oscard, report);
        entity['text'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: NextButton
        entity = argFoo;
        oscard = entity.onPress;
        report = entity.disabled;
        tangon = _closure1_slot9;
        option = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 17;
        entity = verify[entity];
        zuuluu = undefined;
        entity = option.bind(zuuluu)(entity);
        michal = entity.Button;
        entity = {'grow': true, 'size': 'lg'};
        entity['onPress'] = oscard;
        entity['disabled'] = report;
        report = 18;
        oscard = verify[report];
        oscard = option.bind(zuuluu)(oscard);
        golfie = oscard.intl;
        oscard = golfie.string;
        report = verify[report];
        report = option.bind(zuuluu)(report);
        report = report.t;
        report = report.a9OfTE;
        report = oscard.bind(golfie)(report);
        entity['text'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: DefibButton
        entity = argFoo;
        michal = entity.questId;
        var _closure2_slot0 = michal;
        offset = entity.loading;
        golfie = entity.disabled;
        michal = entity.onPress;
        var _closure2_slot1 = michal;
        entity = entity.sourceQuestContent;
        var _closure2_slot2 = entity;
        option = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 23;
        entity = verify[entity];
        tangon = undefined;
        michal = option.bind(tangon)(entity);
        entity = michal.useTrackQuestContentClickedWithImpression;
        entity = entity.bind(michal)();
        var _closure2_slot3 = entity;
        zuuluu = _closure1_slot9;
        entity = 17;
        entity = verify[entity];
        entity = option.bind(tangon)(entity);
        michal = entity.Button;
        entity = {'grow': true, 'size': 'lg', 'variant': 'secondary'};
        entity['loading'] = offset;
        entity['disabled'] = golfie;
        offset = _closure1_slot9;
        oscard = 24;
        oscard = verify[oscard];
        oscard = option.bind(tangon)(oscard);
        golfie = oscard.RefreshIcon;
        oscard = {};
        oscard = offset.bind(tangon)(golfie, oscard);
        entity['icon'] = oscard;
        oscard = 'end';
        entity['iconPosition'] = oscard;
        report = function(argFoo) { // Original name: onPress
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = _closure2_slot3;
                zuuluu = {};
                entity = _closure2_slot0;
                zuuluu['questId'] = entity;
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 9;
                report = golfie[entity];
                entity = undefined;
                report = oscard.bind(entity)(report);
                report = report.QuestContent;
                report = report.QUEST_BOTTOM_SHEET;
                zuuluu['questContent'] = report;
                report = 23;
                report = golfie[report];
                report = oscard.bind(entity)(report);
                report = report.QuestContentCTA;
                report = report.DEFIBRILLATOR;
                zuuluu['questContentCTA'] = report;
                report = _closure2_slot2;
                zuuluu['sourceQuestContent'] = report;
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = _closure2_slot1;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00008_ip = 125; continue _fun00007 }
 113:
                zuuluu = _closure2_slot1;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
 125:
                return entity;
            }
        };
        entity['onPress'] = report;
        report = 18;
        oscard = verify[report];
        oscard = option.bind(tangon)(oscard);
        golfie = oscard.intl;
        oscard = golfie.string;
        report = verify[report];
        report = option.bind(tangon)(report);
        report = report.t;
        report = report.nPThNT;
        report = oscard.bind(golfie)(report);
        entity['text'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: ClaimButton
        entity = argFoo;
        michal = entity.questId;
        var _closure2_slot0 = michal;
        golfie = entity.disabled;
        oscard = entity.loading;
        michal = entity.onPress;
        var _closure2_slot1 = michal;
        entity = entity.sourceQuestContent;
        var _closure2_slot2 = entity;
        option = _closure1_slot0;
        verify = _closure1_slot2;
        michal = 23;
        michal = verify[michal];
        tangon = undefined;
        zuuluu = option.bind(tangon)(michal);
        michal = zuuluu.useTrackQuestContentClickedWithImpression;
        michal = michal.bind(zuuluu)();
        var _closure2_slot3 = michal;
        zuuluu = _closure1_slot9;
        entity = 17;
        entity = verify[entity];
        entity = option.bind(tangon)(entity);
        michal = entity.Button;
        entity = {'grow': true, 'size': 'lg'};
        entity['disabled'] = golfie;
        entity['loading'] = oscard;
        report = function() { // Original name: onPress
            tangon = _closure2_slot3;
            zuuluu = {};
            entity = _closure2_slot0;
            zuuluu['questId'] = entity;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 9;
            report = golfie[entity];
            entity = undefined;
            report = oscard.bind(entity)(report);
            report = report.QuestContent;
            report = report.QUEST_BOTTOM_SHEET;
            zuuluu['questContent'] = report;
            report = 23;
            report = golfie[report];
            report = oscard.bind(entity)(report);
            report = report.QuestContentCTA;
            report = report.CLAIM_REWARD;
            zuuluu['questContentCTA'] = report;
            report = _closure2_slot2;
            zuuluu['sourceQuestContent'] = report;
            zuuluu = tangon.bind(entity)(zuuluu);
            michal = _closure2_slot1;
            michal = michal.bind(entity)();
            return entity;
        };
        entity['onPress'] = report;
        report = 18;
        oscard = verify[report];
        oscard = option.bind(tangon)(oscard);
        golfie = oscard.intl;
        oscard = golfie.string;
        report = verify[report];
        report = option.bind(tangon)(report);
        report = report.t;
        report = report.cfY4PD;
        report = oscard.bind(golfie)(report);
        entity['text'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: AnimatedFooter
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            report = michal.onLayout;
            verify = michal.ctaButton;
            backup = michal.backButton;
            golfie = michal.style;
            romeon = michal.withSafeArea;
            tangon = undefined;
            if(!(romeon === tangon)) { _fun00010_ip = 42; continue _fun00009 }
 40:
            romeon = true;
 42:
            var _closure2_slot0 = tangon;
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            michal = null;
            output = michal != backup;
            if(!output) { _fun00010_ip = 73; continue _fun00009 }
 67:
            michal = false;
            output = michal !== backup;
 73:
            _closure2_slot0 = output;
            offset = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 25;
            michal = zuuluu[michal];
            michal = offset.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            sizing = michal.bottom;
            michal = _closure1_slot12;
            oscard = michal.bind(tangon)();
            michal = 26;
            michal = zuuluu[michal];
            michal = offset.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            foxtra = michal.width;
            _closure2_slot1 = foxtra;
            michal = function() { // Original name: useReducedMotion
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 14;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.useStateFromStores;
                entity = _closure1_slot6;
                michal = new Array(1);
                michal[0] = entity;
                entity = function() {
                    entity = _closure1_slot6;
                    entity = entity.useReducedMotion;
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal = michal.bind(tangon)();
            _closure2_slot2 = michal;
            offset = _closure1_slot0;
            yankee = 27;
            zuuluu = zuuluu[yankee];
            kiloes = offset.bind(tangon)(zuuluu);
            offset = kiloes.useSharedValue;
            zuuluu = 0;
            if(!output) { _fun00010_ip = 186; continue _fun00009 }
 183:
            zuuluu = 1;
 186:
            echoed = offset.bind(kiloes)(zuuluu);
            _closure2_slot3 = echoed;
            kiloes = _closure1_slot4;
            offset = kiloes.useEffect;
            zuuluu = new Array(3);
            zuuluu[0] = output;
            zuuluu[1] = michal;
            zuuluu[2] = echoed;
            michal = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = _closure2_slot3;
                    zuuluu = tangon.set;
                    report = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 28;
                    michal = michal[entity];
                    entity = undefined;
                    golfie = report.bind(entity)(michal);
                    oscard = golfie.withTiming;
                    michal = _closure2_slot0;
                    report = 0;
                    if(!michal) { _fun00012_ip = 54; continue _fun00011 }
 51:
                    report = 1;
 54:
                    michal = {};
                    offset = _closure2_slot2;
                    option = 200;
                    if(!offset) { _fun00012_ip = 68; continue _fun00011 }
 66:
                    option = 0;
 68:
                    michal['duration'] = option;
                    michal = oscard.bind(golfie)(report, michal);
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            michal = offset.bind(kiloes)(michal, zuuluu);
            output = _closure1_slot0;
            result = _closure1_slot2;
            michal = result[yankee];
            offset = output.bind(tangon)(michal);
            zuuluu = offset.useAnimatedStyle;
            michal = function() { // Original name: B
                entity = {'opacity': null, 'position': 'absolute', 'top': 0, 'left': 0};
                zuuluu = _closure2_slot3;
                michal = zuuluu.get;
                michal = michal.bind(zuuluu)();
                entity['opacity'] = michal;
                zuuluu = {};
                michal = _closure1_slot11;
                zuuluu['translateX'] = michal;
                michal = new Array(1);
                michal[0] = zuuluu;
                entity['transform'] = michal;
                return entity;
            };
            kiloes = {};
            kiloes['animation'] = echoed;
            update = _closure1_slot11;
            kiloes['H_PADDING_PX'] = update;
            michal['__closure'] = kiloes;
            kiloes = 7564903336036.0;
            michal['__workletHash'] = kiloes;
            kiloes = _closure1_slot13;
            michal['__initData'] = kiloes;
            kiloes = zuuluu.bind(offset)(michal);
            michal = result[yankee];
            zuuluu = output.bind(tangon)(michal);
            michal = zuuluu.useAnimatedStyle;
            entity = function() { // Original name: p
                entity = {};
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                zuuluu = 27;
                zuuluu = offset[zuuluu];
                option = undefined;
                oscard = verify.bind(option)(zuuluu);
                report = oscard.interpolate;
                tangon = _closure2_slot3;
                zuuluu = tangon.get;
                tangon = zuuluu.bind(tangon)();
                yankee = _closure2_slot1;
                romeon = _closure1_slot11;
                zuuluu = 2;
                zuuluu = zuuluu * romeon;
                yankee = yankee - zuuluu;
                zuuluu = new Array(2);
                zuuluu[0] = yankee;
                golfie = _closure2_slot1;
                yankee = _closure1_slot11;
                michal = 2.5;
                michal = michal * yankee;
                golfie = golfie - michal;
                michal = 29;
                michal = offset[michal];
                michal = verify.bind(option)(michal);
                michal = michal.LARGE_BUTTON_HEIGHT;
                michal = golfie - michal;
                zuuluu[1] = michal;
                michal = [0, 1];
                michal = report.bind(oscard)(tangon, michal, zuuluu);
                entity['width'] = michal;
                michal = 'flex-end';
                entity['alignSelf'] = michal;
                return entity;
            };
            offset = {};
            update = result[yankee];
            update = output.bind(tangon)(update);
            update = update.interpolate;
            offset['interpolate'] = update;
            offset['animation'] = echoed;
            offset['windowWidth'] = foxtra;
            foxtra = _closure1_slot11;
            offset['H_PADDING_PX'] = foxtra;
            foxtra = 29;
            foxtra = result[foxtra];
            foxtra = output.bind(tangon)(foxtra);
            foxtra = foxtra.LARGE_BUTTON_HEIGHT;
            offset['ICON_SIZE_PX'] = foxtra;
            entity['__closure'] = offset;
            offset = 9095621288509.0;
            entity['__workletHash'] = offset;
            offset = _closure1_slot14;
            entity['__initData'] = offset;
            offset = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot10;
            michal = _closure1_slot5;
            entity = {};
            foxtra = oscard.container;
            oscard = new Array(3);
            oscard[0] = foxtra;
            if(!romeon) { _fun00010_ip = 477; continue _fun00009 }
 467:
            foxtra = {};
            foxtra['paddingBottom'] = sizing;
            romeon = foxtra;
 477:
            oscard[1] = romeon;
            oscard[2] = golfie;
            entity['style'] = oscard;
            entity['onLayout'] = report;
            foxtra = _closure1_slot9;
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            report = oscard[yankee];
            report = golfie.bind(tangon)(report);
            romeon = report.View;
            report = {};
            report['style'] = kiloes;
            report['children'] = backup;
            romeon = foxtra.bind(tangon)(romeon, report);
            report = new Array(2);
            report[0] = romeon;
            option = _closure1_slot9;
            oscard = oscard[yankee];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.View;
            oscard = {};
            oscard['style'] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = romeon.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    option = golfie[report];
    report = argCor;
    report = report.bind(entity)(option);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.View;
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.jsx;
    var _closure1_slot9 = option;
    report = report.jsxs;
    var _closure1_slot10 = report;
    yankee = 7;
    report = golfie[yankee];
    report = romeon.bind(entity)(report);
    report = report.spacing;
    report = report.PX_16;
    var _closure1_slot11 = report;
    report = 8;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.createStyles;
    report = {};
    offset = {'display': 'flex', 'flexGrow': 1, 'flexShrink': 1};
    yankee = golfie[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_16;
    offset['paddingHorizontal'] = yankee;
    report['container'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot12 = report;
    report = {};
    option = "function QuestBottomSheetFooterTsx1(){const{animation,H_PADDING_PX}=this.__closure;return{opacity:animation.get(),position:'absolute',top:0,left:0,transform:[{translateX:H_PADDING_PX}]};}";
    report['code'] = option;
    var _closure1_slot13 = report;
    report = {};
    option = "function QuestBottomSheetFooterTsx2(){const{interpolate,animation,windowWidth,H_PADDING_PX,ICON_SIZE_PX}=this.__closure;return{width:interpolate(animation.get(),[0,1],[windowWidth-H_PADDING_PX*2,windowWidth-H_PADDING_PX*2.5-ICON_SIZE_PX]),alignSelf:'flex-end'};}";
    report['code'] = option;
    var _closure1_slot14 = report;
    report = 30;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: QuestBottomSheetFooter
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            ctrled = michal.quest;
            var _closure2_slot0 = ctrled;
            verify = michal.onLayout;
            cntext = michal.step;
            sequen = michal.isDefibrilating;
            report = undefined;
            if(!(sequen === report)) { _fun00014_ip = 41; continue _fun00013 }
 39:
            sequen = false;
 41:
            option = michal.location;
            output = michal.onConnectConsoleNext;
            romeon = michal.onBack;
            result = michal.onDefib;
            golfie = michal.style;
            oscard = michal.withSafeArea;
            echoed = michal.sourceQuestContent;
            var _closure2_slot1 = report;
            zuuluu = _closure1_slot15;
            michal = {};
            michal['quest'] = ctrled;
            michal['sourceQuestContent'] = echoed;
            source = zuuluu.bind(report)(michal);
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            tangon = 10;
            offset = zuuluu[tangon];
            yankee = michal.bind(report)(offset);
            offset = yankee.useQuestTaskDetails;
            vacuum = offset.bind(yankee)(ctrled);
            offset = zuuluu[tangon];
            yankee = michal.bind(report)(offset);
            offset = yankee.useIsQuestProgressing;
            offset = offset.bind(yankee)(ctrled);
            yankee = zuuluu[tangon];
            backup = michal.bind(report)(yankee);
            yankee = backup.useTaskPlatformScreen;
            kiloes = yankee.bind(backup)(ctrled, vacuum);
            backup = _closure1_slot3;
            yankee = 1;
            yankee = backup.bind(report)(kiloes, yankee);
            sizing = 0;
            backup = yankee[sizing];
            tangon = zuuluu[tangon];
            yankee = michal.bind(report)(tangon);
            tangon = yankee.useConnectedAccounts;
            tangon = tangon.bind(yankee)();
            update = tangon.xboxAndPlaystationAccounts;
            _closure2_slot1 = update;
            kiloes = _closure1_slot4;
            yankee = kiloes.useMemo;
            tangon = new Array(2);
            tangon[0] = ctrled;
            tangon[1] = update;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 12;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.supportedConsoles;
                entity = _closure2_slot0;
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.find;
                    entity = function(argFoo) {
                        entity = argFoo;
                        michal = entity.type;
                        entity = _closure4_slot0;
                        entity = michal === entity;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            kiloes = yankee.bind(kiloes)(entity, tangon);
            entity = 19;
            entity = zuuluu[entity];
            tangon = michal.bind(report)(entity);
            zuuluu = tangon.useShouldAllowMobileVideoTask;
            michal = ctrled.config;
            entity = {};
            entity['location'] = option;
            yankee = zuuluu.bind(tangon)(michal, entity);
            michal = ctrled.userStatus;
            option = null;
            zuuluu = option == michal;
            entity = undefined;
            if(zuuluu) { _fun00014_ip = 321; continue _fun00013 }
 315:
            entity = michal.completedAt;
 321:
            config = option != entity;
            michal = ctrled.userStatus;
            zuuluu = option == michal;
            entity = undefined;
            if(zuuluu) { _fun00014_ip = 346; continue _fun00013 }
 340:
            entity = michal.claimedAt;
 346:
            update = option != entity;
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            papara = 20;
            entity = entity[papara];
            entity = michal.bind(report)(entity);
            entity = entity.QuestBottomSheetStep;
            michal = entity.TASK_SELECT;
            entity = null;
            if(!(cntext !== michal)) { _fun00014_ip = 945; continue _fun00013 }
 391:
            tangon = _closure1_slot9;
            zuuluu = _closure1_slot20;
            michal = {};
            michal['onLayout'] = verify;
            record = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[papara];
            verify = record.bind(report)(verify);
            verify = verify.QuestBottomSheetStep;
            verify = verify.CONSOLE_CONNECT;
            if(!(cntext !== verify)) { _fun00014_ip = 734; continue _fun00013 }
 442:
            record = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[papara];
            verify = record.bind(report)(verify);
            verify = verify.QuestBottomSheetStep;
            record = verify.TASK_STATUS;
            verify = undefined;
            if(!(cntext === record)) { _fun00014_ip = 732; continue _fun00013 }
 480:
            if(config) { _fun00014_ip = 664; continue _fun00013 }
 486:
            if(yankee) { _fun00014_ip = 626; continue _fun00013 }
 492:
            config = _closure1_slot0;
            record = _closure1_slot2;
            yankee = 9;
            yankee = record[yankee];
            yankee = config.bind(report)(yankee);
            yankee = yankee.TaskPlatformScreen;
            yankee = yankee.CONSOLE;
            if(!(backup === yankee)) { _fun00014_ip = 577; continue _fun00013 }
 528:
            if(offset) { _fun00014_ip = 577; continue _fun00013 }
 531:
            backup = _closure1_slot9;
            yankee = _closure1_slot18;
            offset = {};
            config = ctrled.id;
            offset['questId'] = config;
            offset['loading'] = sequen;
            offset['disabled'] = sequen;
            offset['onPress'] = result;
            offset['sourceQuestContent'] = echoed;
            offset = backup.bind(report)(yankee, offset);
            _fun00014_ip = 624; continue _fun00013;
 577:
            result = _closure1_slot9;
            backup = _closure1_slot19;
            yankee = {};
            sequen = ctrled.id;
            yankee['questId'] = sequen;
            sequen = source.claim;
            yankee['onPress'] = sequen;
            sequen = true;
            yankee['disabled'] = sequen;
            yankee['sourceQuestContent'] = echoed;
            offset = result.bind(report)(backup, yankee);
 624:
            _fun00014_ip = 662; continue _fun00013;
 626:
            result = _closure1_slot9;
            backup = _closure1_slot16;
            yankee = {};
            sequen = ctrled.id;
            yankee['questId'] = sequen;
            yankee['taskDetails'] = vacuum;
            yankee['sourceQuestContent'] = echoed;
            offset = result.bind(report)(backup, yankee);
 662:
            _fun00014_ip = 729; continue _fun00013;
 664:
            result = _closure1_slot9;
            backup = _closure1_slot19;
            yankee = {};
            ctrled = ctrled.id;
            yankee['questId'] = ctrled;
            ctrled = source.claim;
            yankee['onPress'] = ctrled;
            yankee['disabled'] = update;
            update = source.isLoading;
            if(update) { _fun00014_ip = 713; continue _fun00013 }
 707:
            update = source.isClaiming;
 713:
            yankee['loading'] = update;
            yankee['sourceQuestContent'] = echoed;
            offset = result.bind(report)(backup, yankee);
 729:
            verify = offset;
 732:
            _fun00014_ip = 767; continue _fun00013;
 734:
            backup = _closure1_slot9;
            yankee = _closure1_slot17;
            offset = {};
            offset['onPress'] = output;
            kiloes = kiloes.length;
            kiloes = sizing === kiloes;
            offset['disabled'] = kiloes;
            verify = backup.bind(report)(yankee, offset);
 767:
            michal['ctaButton'] = verify;
            option = option != romeon;
            if(!option) { _fun00014_ip = 925; continue _fun00013 }
 782:
            yankee = _closure1_slot9;
            backup = _closure1_slot0;
            sizing = _closure1_slot2;
            verify = 21;
            verify = sizing[verify];
            verify = backup.bind(report)(verify);
            offset = verify.IconButton;
            verify = {};
            kiloes = 18;
            output = sizing[kiloes];
            output = backup.bind(report)(output);
            result = output.intl;
            output = result.string;
            kiloes = sizing[kiloes];
            kiloes = backup.bind(report)(kiloes);
            kiloes = kiloes.t;
            kiloes = kiloes.13/7kZ;
            kiloes = output.bind(result)(kiloes);
            verify['accessibilityLabel'] = kiloes;
            kiloes = 'secondary';
            verify['variant'] = kiloes;
            kiloes = _closure1_slot9;
            foxtra = 22;
            foxtra = sizing[foxtra];
            foxtra = backup.bind(report)(foxtra);
            backup = foxtra.ArrowLargeLeftIcon;
            foxtra = {};
            foxtra = kiloes.bind(report)(backup, foxtra);
            verify['icon'] = foxtra;
            verify['onPress'] = romeon;
            romeon = 'lg';
            verify['size'] = romeon;
            option = yankee.bind(report)(offset, verify);
 925:
            michal['backButton'] = option;
            michal['style'] = golfie;
            michal['withSafeArea'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 945:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['useQuestRewardClaimHandler'] = michal;
    return entity;
})();