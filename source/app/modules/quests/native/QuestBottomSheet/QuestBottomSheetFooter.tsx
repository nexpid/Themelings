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
            yankee = entity.quest;
            var _closure2_slot0 = yankee;
            option = entity.hideActionSheet;
            romeon = undefined;
            if(!(option === romeon)) { _fun00002_ip = 29; continue _fun00001 }
 27:
            option = true;
 29:
            var _closure2_slot1 = option;
            golfie = entity.questContent;
            if(!(golfie === romeon)) { _fun00002_ip = 78; continue _fun00001 }
 43:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 9;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(romeon)(zuuluu);
            zuuluu = zuuluu.QuestContent;
            golfie = zuuluu.QUEST_BOTTOM_SHEET;
 78:
            var _closure2_slot2 = golfie;
            oscard = entity.onSuccess;
            var _closure2_slot3 = oscard;
            var _closure2_slot4 = romeon;
            var _closure2_slot5 = romeon;
            var _closure2_slot6 = romeon;
            var _closure2_slot7 = romeon;
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 10;
            tangon = backup[entity];
            report = foxtra.bind(romeon)(tangon);
            tangon = report.useProgressState;
            kiloes = tangon.bind(report)(yankee);
            offset = _closure1_slot4;
            verify = offset.useMemo;
            report = new Array(1);
            report[0] = yankee;
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
            verify = verify.bind(offset)(tangon, report);
            tangon = 12;
            tangon = backup[tangon];
            offset = foxtra.bind(romeon)(tangon);
            report = offset.hasCollectiblesQuestReward;
            tangon = yankee.config;
            offset = report.bind(offset)(tangon);
            tangon = 13;
            tangon = backup[tangon];
            report = foxtra.bind(romeon)(tangon);
            tangon = report.useFetchCollectiblesProduct;
            entity = backup[entity];
            entity = foxtra.bind(romeon)(entity);
            entity = entity.QuestProgressState;
            backup = entity.COMPLETED;
            entity = null;
            if(!(kiloes === backup)) { _fun00002_ip = 253; continue _fun00001 }
 245:
            entity = null;
            if(!offset) { _fun00002_ip = 253; continue _fun00001 }
 250:
            entity = verify;
 253:
            entity = tangon.bind(report)(entity);
            offset = entity.product;
            _closure2_slot4 = offset;
            kiloes = entity.isFetching;
            _closure2_slot5 = kiloes;
            verify = _closure1_slot0;
            foxtra = _closure1_slot2;
            entity = 14;
            tangon = foxtra[entity];
            sizing = verify.bind(romeon)(tangon);
            backup = sizing.useStateFromStoresObject;
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
            report = backup.bind(sizing)(report, tangon);
            tangon = report.isClaimingReward;
            report = report.isFetchingRewardCode;
            _closure2_slot6 = report;
            entity = foxtra[entity];
            foxtra = verify.bind(romeon)(entity);
            romeon = foxtra.useStateFromStores;
            entity = _closure1_slot7;
            verify = new Array(1);
            verify[0] = entity;
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
            verify = romeon.bind(foxtra)(verify, entity);
            _closure2_slot7 = verify;
            entity = {};
            backup = _closure1_slot4;
            foxtra = backup.useMemo;
            romeon = new Array(2);
            romeon[0] = kiloes;
            romeon[1] = report;
            report = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot5;
                    if(entity) { _fun00006_ip = 14; continue _fun00005 }
 10:
                    entity = _closure2_slot6;
 14:
                    return entity;
                }
            };
            report = foxtra.bind(backup)(report, romeon);
            entity['isLoading'] = report;
            entity['isClaiming'] = tangon;
            report = _closure1_slot4;
            tangon = report.useCallback;
            zuuluu = new Array(6);
            zuuluu[0] = yankee;
            zuuluu[1] = offset;
            zuuluu[2] = verify;
            zuuluu[3] = option;
            zuuluu[4] = golfie;
            zuuluu[5] = oscard;
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
                report = _closure2_slot4;
                entity['product'] = report;
                report = _closure2_slot1;
                entity['hideActionSheet'] = report;
                report = _closure2_slot2;
                entity['questContent'] = report;
                report = _closure2_slot7;
                entity['currentUserHasVerifiedEmailOrPhone'] = report;
                tangon = _closure2_slot3;
                entity['onSuccess'] = tangon;
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
        oscard = entity.questId;
        yankee = entity.taskDetails;
        offset = _closure1_slot0;
        romeon = _closure1_slot2;
        michal = 16;
        michal = romeon[michal];
        tangon = undefined;
        report = offset.bind(tangon)(michal);
        zuuluu = report.useWatchTaskPressHandler;
        michal = {};
        michal['questId'] = oscard;
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
        entity = entity.onPress;
        var _closure2_slot1 = entity;
        option = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 23;
        entity = verify[entity];
        tangon = undefined;
        michal = option.bind(tangon)(entity);
        entity = michal.useTrackQuestContentClickedWithImpression;
        entity = entity.bind(michal)();
        var _closure2_slot2 = entity;
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
                tangon = _closure2_slot2;
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
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = _closure2_slot1;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00008_ip = 116; continue _fun00007 }
 104:
                zuuluu = _closure2_slot1;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
 116:
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
        offset = entity.location;
        option = entity.disabled;
        golfie = entity.loading;
        entity = entity.onPress;
        var _closure2_slot1 = entity;
        michal = _closure1_slot0;
        verify = _closure1_slot2;
        zuuluu = 23;
        zuuluu = verify[zuuluu];
        tangon = undefined;
        report = michal.bind(tangon)(zuuluu);
        zuuluu = report.useTrackQuestContentClickedWithImpression;
        zuuluu = zuuluu.bind(report)();
        var _closure2_slot2 = zuuluu;
        zuuluu = 25;
        zuuluu = verify[zuuluu];
        report = michal.bind(tangon)(zuuluu);
        zuuluu = report.useClaimRewardCopy;
        report = zuuluu.bind(report)(offset);
        zuuluu = _closure1_slot9;
        entity = 17;
        entity = verify[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.Button;
        entity = {'grow': true, 'size': 'lg'};
        entity['disabled'] = option;
        entity['loading'] = golfie;
        oscard = function() { // Original name: onPress
            tangon = _closure2_slot2;
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
            zuuluu = tangon.bind(entity)(zuuluu);
            michal = _closure2_slot1;
            michal = michal.bind(entity)();
            return entity;
        };
        entity['onPress'] = oscard;
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
            michal = 26;
            michal = zuuluu[michal];
            michal = offset.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            sizing = michal.bottom;
            michal = _closure1_slot12;
            oscard = michal.bind(tangon)();
            michal = 27;
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
            yankee = 28;
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
                    entity = 29;
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
            michal = function() { // Original name: p
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
            entity = function() { // Original name: b
                entity = {};
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                zuuluu = 28;
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
                michal = 30;
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
            foxtra = 30;
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
    report = 31;
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
            source = michal.location;
            output = michal.onConnectConsoleNext;
            romeon = michal.onBack;
            result = michal.onDefib;
            golfie = michal.style;
            oscard = michal.withSafeArea;
            var _closure2_slot1 = report;
            zuuluu = _closure1_slot15;
            michal = {};
            michal['quest'] = ctrled;
            update = zuuluu.bind(report)(michal);
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            tangon = 10;
            option = zuuluu[tangon];
            offset = michal.bind(report)(option);
            option = offset.useQuestTaskDetails;
            vacuum = option.bind(offset)(ctrled);
            option = zuuluu[tangon];
            offset = michal.bind(report)(option);
            option = offset.useIsQuestProgressing;
            offset = option.bind(offset)(ctrled);
            option = zuuluu[tangon];
            yankee = michal.bind(report)(option);
            option = yankee.useTaskPlatformScreen;
            backup = option.bind(yankee)(ctrled, vacuum);
            yankee = _closure1_slot3;
            option = 1;
            option = yankee.bind(report)(backup, option);
            sizing = 0;
            backup = option[sizing];
            tangon = zuuluu[tangon];
            option = michal.bind(report)(tangon);
            tangon = option.useConnectedAccounts;
            tangon = tangon.bind(option)();
            kiloes = tangon.xboxAndPlaystationAccounts;
            _closure2_slot1 = kiloes;
            yankee = _closure1_slot4;
            option = yankee.useMemo;
            tangon = new Array(2);
            tangon[0] = ctrled;
            tangon[1] = kiloes;
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
            kiloes = option.bind(yankee)(entity, tangon);
            entity = 19;
            entity = zuuluu[entity];
            tangon = michal.bind(report)(entity);
            zuuluu = tangon.useShouldAllowMobileVideoTask;
            michal = ctrled.config;
            entity = {};
            entity['location'] = source;
            yankee = zuuluu.bind(tangon)(michal, entity);
            michal = ctrled.userStatus;
            option = null;
            zuuluu = option == michal;
            entity = undefined;
            if(zuuluu) { _fun00014_ip = 310; continue _fun00013 }
 304:
            entity = michal.completedAt;
 310:
            config = option != entity;
            michal = ctrled.userStatus;
            zuuluu = option == michal;
            entity = undefined;
            if(zuuluu) { _fun00014_ip = 335; continue _fun00013 }
 329:
            entity = michal.claimedAt;
 335:
            echoed = option != entity;
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            papara = 20;
            entity = entity[papara];
            entity = michal.bind(report)(entity);
            entity = entity.QuestBottomSheetStep;
            michal = entity.TASK_SELECT;
            entity = null;
            if(!(cntext !== michal)) { _fun00014_ip = 922; continue _fun00013 }
 380:
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
            if(!(cntext !== verify)) { _fun00014_ip = 711; continue _fun00013 }
 431:
            record = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[papara];
            verify = record.bind(report)(verify);
            verify = verify.QuestBottomSheetStep;
            record = verify.TASK_STATUS;
            verify = undefined;
            if(!(cntext === record)) { _fun00014_ip = 709; continue _fun00013 }
 469:
            if(config) { _fun00014_ip = 642; continue _fun00013 }
 475:
            if(yankee) { _fun00014_ip = 609; continue _fun00013 }
 481:
            config = _closure1_slot0;
            record = _closure1_slot2;
            yankee = 9;
            yankee = record[yankee];
            yankee = config.bind(report)(yankee);
            yankee = yankee.TaskPlatformScreen;
            yankee = yankee.CONSOLE;
            if(!(backup === yankee)) { _fun00014_ip = 561; continue _fun00013 }
 517:
            if(offset) { _fun00014_ip = 561; continue _fun00013 }
 520:
            backup = _closure1_slot9;
            yankee = _closure1_slot18;
            offset = {};
            config = ctrled.id;
            offset['questId'] = config;
            offset['loading'] = sequen;
            offset['disabled'] = sequen;
            offset['onPress'] = result;
            offset = backup.bind(report)(yankee, offset);
            _fun00014_ip = 607; continue _fun00013;
 561:
            result = _closure1_slot9;
            backup = _closure1_slot19;
            yankee = {};
            sequen = ctrled.id;
            yankee['questId'] = sequen;
            yankee['location'] = source;
            sequen = update.claim;
            yankee['onPress'] = sequen;
            sequen = true;
            yankee['disabled'] = sequen;
            offset = result.bind(report)(backup, yankee);
 607:
            _fun00014_ip = 640; continue _fun00013;
 609:
            result = _closure1_slot9;
            backup = _closure1_slot16;
            yankee = {};
            sequen = ctrled.id;
            yankee['questId'] = sequen;
            yankee['taskDetails'] = vacuum;
            offset = result.bind(report)(backup, yankee);
 640:
            _fun00014_ip = 706; continue _fun00013;
 642:
            result = _closure1_slot9;
            backup = _closure1_slot19;
            yankee = {};
            ctrled = ctrled.id;
            yankee['questId'] = ctrled;
            yankee['location'] = source;
            source = update.claim;
            yankee['onPress'] = source;
            yankee['disabled'] = echoed;
            echoed = update.isLoading;
            if(echoed) { _fun00014_ip = 695; continue _fun00013 }
 689:
            echoed = update.isClaiming;
 695:
            yankee['loading'] = echoed;
            offset = result.bind(report)(backup, yankee);
 706:
            verify = offset;
 709:
            _fun00014_ip = 744; continue _fun00013;
 711:
            backup = _closure1_slot9;
            yankee = _closure1_slot17;
            offset = {};
            offset['onPress'] = output;
            kiloes = kiloes.length;
            kiloes = sizing === kiloes;
            offset['disabled'] = kiloes;
            verify = backup.bind(report)(yankee, offset);
 744:
            michal['ctaButton'] = verify;
            option = option != romeon;
            if(!option) { _fun00014_ip = 902; continue _fun00013 }
 759:
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
 902:
            michal['backButton'] = option;
            michal['style'] = golfie;
            michal['withSafeArea'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 922:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['useQuestRewardClaimHandler'] = michal;
    return entity;
})();