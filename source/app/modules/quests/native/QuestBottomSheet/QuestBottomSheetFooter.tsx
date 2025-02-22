// app/modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: WatchTaskButton
        entity = argFoo;
        oscard = entity.questId;
        var _closure2_slot0 = oscard;
        yankee = entity.taskDetails;
        report = _closure1_slot4;
        tangon = report.useCallback;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 16;
            michal = tangon[entity];
            entity = undefined;
            oscard = zuuluu.bind(entity)(michal);
            report = oscard.hideActionSheet;
            michal = 'QuestBottomSheet';
            michal = report.bind(oscard)(michal);
            michal = 17;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = {};
            tangon = _closure2_slot0;
            michal['questId'] = tangon;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        report = tangon.bind(report)(michal, zuuluu);
        tangon = _closure1_slot9;
        offset = _closure1_slot0;
        romeon = _closure1_slot2;
        entity = 18;
        entity = romeon[entity];
        zuuluu = undefined;
        entity = offset.bind(zuuluu)(entity);
        michal = entity.Button;
        entity = {'grow': true, 'size': 'lg'};
        entity['onPress'] = report;
        report = 19;
        oscard = romeon[report];
        oscard = offset.bind(zuuluu)(oscard);
        option = oscard.intl;
        golfie = option.formatToPlainString;
        report = romeon[report];
        report = offset.bind(zuuluu)(report);
        report = report.t;
        oscard = report.GNsKiY;
        report = {};
        verify = 11;
        verify = romeon[verify];
        offset = offset.bind(zuuluu)(verify);
        verify = offset.formatWatchTaskRemainingTime;
        verify = verify.bind(offset)(yankee);
        report['remainTime'] = verify;
        report = golfie.bind(option)(oscard, report);
        entity['text'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
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
        entity = 18;
        entity = verify[entity];
        zuuluu = undefined;
        entity = option.bind(zuuluu)(entity);
        michal = entity.Button;
        entity = {'grow': true, 'size': 'lg'};
        entity['onPress'] = oscard;
        entity['disabled'] = report;
        report = 19;
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
        entity = 24;
        entity = verify[entity];
        tangon = undefined;
        michal = option.bind(tangon)(entity);
        entity = michal.useTrackQuestContentClickedWithImpression;
        entity = entity.bind(michal)();
        var _closure2_slot2 = entity;
        zuuluu = _closure1_slot9;
        entity = 18;
        entity = verify[entity];
        entity = option.bind(tangon)(entity);
        michal = entity.Button;
        entity = {'grow': true, 'size': 'lg', 'variant': 'secondary'};
        entity['loading'] = offset;
        entity['disabled'] = golfie;
        offset = _closure1_slot9;
        oscard = 25;
        oscard = verify[oscard];
        oscard = option.bind(tangon)(oscard);
        golfie = oscard.RefreshIcon;
        oscard = {};
        oscard = offset.bind(tangon)(golfie, oscard);
        entity['icon'] = oscard;
        oscard = 'end';
        entity['iconPosition'] = oscard;
        report = function(argFoo) { // Original name: onPress
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure2_slot2;
                zuuluu = {};
                entity = _closure2_slot0;
                zuuluu['questId'] = entity;
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 15;
                report = golfie[entity];
                entity = undefined;
                report = oscard.bind(entity)(report);
                report = report.QuestContent;
                report = report.QUEST_BOTTOM_SHEET;
                zuuluu['questContent'] = report;
                report = 24;
                report = golfie[report];
                report = oscard.bind(entity)(report);
                report = report.QuestContentCTA;
                report = report.DEFIBRILLATOR;
                zuuluu['questContentCTA'] = report;
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = _closure2_slot1;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00002_ip = 116; continue _fun00001 }
 104:
                zuuluu = _closure2_slot1;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
 116:
                return entity;
            }
        };
        entity['onPress'] = report;
        report = 19;
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
        entity = entity.onPress;
        var _closure2_slot1 = entity;
        option = _closure1_slot0;
        verify = _closure1_slot2;
        michal = 24;
        michal = verify[michal];
        tangon = undefined;
        zuuluu = option.bind(tangon)(michal);
        michal = zuuluu.useTrackQuestContentClickedWithImpression;
        michal = michal.bind(zuuluu)();
        var _closure2_slot2 = michal;
        zuuluu = _closure1_slot9;
        entity = 18;
        entity = verify[entity];
        entity = option.bind(tangon)(entity);
        michal = entity.Button;
        entity = {'grow': true, 'size': 'lg'};
        entity['disabled'] = golfie;
        entity['loading'] = oscard;
        report = function() { // Original name: onPress
            tangon = _closure2_slot2;
            zuuluu = {};
            entity = _closure2_slot0;
            zuuluu['questId'] = entity;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 15;
            report = golfie[entity];
            entity = undefined;
            report = oscard.bind(entity)(report);
            report = report.QuestContent;
            report = report.QUEST_BOTTOM_SHEET;
            zuuluu['questContent'] = report;
            report = 24;
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
        entity['onPress'] = report;
        report = 19;
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
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            report = michal.onLayout;
            verify = michal.ctaButton;
            backup = michal.backButton;
            golfie = michal.style;
            romeon = michal.withSafeArea;
            tangon = undefined;
            if(!(romeon === tangon)) { _fun00004_ip = 42; continue _fun00003 }
 40:
            romeon = true;
 42:
            var _closure2_slot0 = tangon;
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            michal = null;
            output = michal != backup;
            if(!output) { _fun00004_ip = 73; continue _fun00003 }
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
            michal = _closure1_slot13;
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
                michal = 13;
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
            if(!output) { _fun00004_ip = 186; continue _fun00003 }
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
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
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
                    if(!michal) { _fun00006_ip = 54; continue _fun00005 }
 51:
                    report = 1;
 54:
                    michal = {};
                    offset = _closure2_slot2;
                    option = 0;
                    if(offset) { _fun00006_ip = 69; continue _fun00005 }
 65:
                    option = _closure1_slot12;
 69:
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
            kiloes = _closure1_slot14;
            michal['__initData'] = kiloes;
            kiloes = zuuluu.bind(offset)(michal);
            michal = result[yankee];
            zuuluu = output.bind(tangon)(michal);
            michal = zuuluu.useAnimatedStyle;
            entity = function() { // Original name: E
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
            offset = _closure1_slot15;
            entity['__initData'] = offset;
            offset = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot10;
            michal = _closure1_slot5;
            entity = {};
            foxtra = oscard.container;
            oscard = new Array(3);
            oscard[0] = foxtra;
            if(!romeon) { _fun00004_ip = 477; continue _fun00003 }
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
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot9 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot10 = tangon;
    offset = 7;
    tangon = oscard[offset];
    tangon = yankee.bind(entity)(tangon);
    tangon = tangon.spacing;
    tangon = tangon.PX_16;
    var _closure1_slot11 = tangon;
    tangon = 200;
    var _closure1_slot12 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    romeon = 'flex';
    verify['display'] = romeon;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_16;
    verify['paddingHorizontal'] = offset;
    tangon['container'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot13 = tangon;
    tangon = {};
    golfie = "function QuestBottomSheetFooterTsx1(){const{animation,H_PADDING_PX}=this.__closure;return{opacity:animation.get(),position:'absolute',top:0,left:0,transform:[{translateX:H_PADDING_PX}]};}";
    tangon['code'] = golfie;
    var _closure1_slot14 = tangon;
    tangon = {};
    golfie = "function QuestBottomSheetFooterTsx2(){const{interpolate,animation,windowWidth,H_PADDING_PX,ICON_SIZE_PX}=this.__closure;return{width:interpolate(animation.get(),[0,1],[windowWidth-H_PADDING_PX*2,windowWidth-H_PADDING_PX*2.5-ICON_SIZE_PX]),alignSelf:'flex-end'};}";
    tangon['code'] = golfie;
    var _closure1_slot15 = tangon;
    tangon = 31;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/native/QuestBottomSheet/QuestBottomSheetFooter.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: QuestBottomSheetFooter
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            source = michal.quest;
            var _closure2_slot0 = source;
            verify = michal.onLayout;
            record = michal.step;
            vacuum = michal.isDefibrilating;
            report = undefined;
            if(!(vacuum === report)) { _fun00008_ip = 41; continue _fun00007 }
 39:
            vacuum = false;
 41:
            option = michal.location;
            output = michal.onConnectConsoleNext;
            romeon = michal.onBack;
            result = michal.onDefib;
            golfie = michal.style;
            oscard = michal.withSafeArea;
            var _closure2_slot1 = report;
            michal = function(argFoo) { // Original name: useQuestReward
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    option = argFoo;
                    var _closure3_slot0 = option;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    entity = 9;
                    tangon = yankee[entity];
                    verify = undefined;
                    report = offset.bind(verify)(tangon);
                    tangon = report.useProgressState;
                    romeon = tangon.bind(report)(option);
                    golfie = _closure1_slot4;
                    oscard = golfie.useMemo;
                    report = new Array(1);
                    report[0] = option;
                    tangon = function() {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 10;
                        michal = michal[entity];
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        zuuluu = entity.SharedQuestFields;
                        michal = zuuluu.build;
                        entity = _closure3_slot0;
                        entity = entity.config;
                        entity = michal.bind(zuuluu)(entity);
                        entity = entity.defaultReward;
                        entity = entity.skuId;
                        return entity;
                    };
                    oscard = oscard.bind(golfie)(tangon, report);
                    tangon = 11;
                    tangon = yankee[tangon];
                    golfie = offset.bind(verify)(tangon);
                    report = golfie.hasCollectiblesQuestReward;
                    tangon = option.config;
                    golfie = report.bind(golfie)(tangon);
                    tangon = 12;
                    tangon = yankee[tangon];
                    report = offset.bind(verify)(tangon);
                    tangon = report.useFetchCollectiblesProduct;
                    entity = yankee[entity];
                    entity = offset.bind(verify)(entity);
                    entity = entity.QuestProgressState;
                    yankee = entity.COMPLETED;
                    entity = null;
                    if(!(romeon === yankee)) { _fun00010_ip = 156; continue _fun00009 }
 148:
                    entity = null;
                    if(!golfie) { _fun00010_ip = 156; continue _fun00009 }
 153:
                    entity = oscard;
 156:
                    entity = tangon.bind(report)(entity);
                    golfie = entity.product;
                    var _closure3_slot1 = golfie;
                    romeon = entity.isFetching;
                    var _closure3_slot2 = romeon;
                    oscard = _closure1_slot0;
                    offset = _closure1_slot2;
                    entity = 13;
                    tangon = offset[entity];
                    foxtra = oscard.bind(verify)(tangon);
                    yankee = foxtra.useStateFromStoresObject;
                    tangon = _closure1_slot8;
                    report = new Array(1);
                    report[0] = tangon;
                    tangon = function() {
                        entity = {};
                        tangon = _closure1_slot8;
                        report = tangon.isFetchingRewardCode;
                        michal = _closure3_slot0;
                        zuuluu = michal.id;
                        zuuluu = report.bind(tangon)(zuuluu);
                        entity['isFetchingRewardCode'] = zuuluu;
                        zuuluu = tangon.isClaimingReward;
                        michal = michal.id;
                        michal = zuuluu.bind(tangon)(michal);
                        entity['isClaimingReward'] = michal;
                        return entity;
                    };
                    report = yankee.bind(foxtra)(report, tangon);
                    tangon = report.isClaimingReward;
                    report = report.isFetchingRewardCode;
                    var _closure3_slot3 = report;
                    entity = offset[entity];
                    offset = oscard.bind(verify)(entity);
                    verify = offset.useStateFromStores;
                    entity = _closure1_slot7;
                    oscard = new Array(1);
                    oscard[0] = entity;
                    entity = function() {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            michal = _closure1_slot7;
                            entity = michal.getCurrentUser;
                            zuuluu = entity.bind(michal)();
                            entity = null;
                            michal = entity == zuuluu;
                            entity = undefined;
                            if(michal) { _fun00012_ip = 37; continue _fun00011 }
 27:
                            michal = zuuluu.hasVerifiedEmailOrPhone;
                            entity = michal.bind(zuuluu)();
 37:
                            return entity;
                        }
                    };
                    oscard = verify.bind(offset)(oscard, entity);
                    var _closure3_slot4 = oscard;
                    entity = {};
                    yankee = _closure1_slot4;
                    offset = yankee.useMemo;
                    verify = new Array(2);
                    verify[0] = romeon;
                    verify[1] = report;
                    report = function() {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            entity = _closure3_slot2;
                            if(entity) { _fun00014_ip = 14; continue _fun00013 }
 10:
                            entity = _closure3_slot3;
 14:
                            return entity;
                        }
                    };
                    report = offset.bind(yankee)(report, verify);
                    entity['isLoading'] = report;
                    entity['isClaiming'] = tangon;
                    report = _closure1_slot4;
                    tangon = report.useCallback;
                    zuuluu = new Array(3);
                    zuuluu[0] = option;
                    zuuluu[1] = golfie;
                    zuuluu[2] = oscard;
                    michal = function() {
                        golfie = _closure1_slot0;
                        option = _closure1_slot2;
                        entity = 14;
                        michal = option[entity];
                        entity = undefined;
                        tangon = golfie.bind(entity)(michal);
                        zuuluu = tangon.handleRewardClaimThenView;
                        michal = {};
                        oscard = _closure3_slot0;
                        michal['quest'] = oscard;
                        oscard = _closure3_slot1;
                        michal['product'] = oscard;
                        oscard = true;
                        michal['hideActionSheet'] = oscard;
                        oscard = 15;
                        oscard = option[oscard];
                        oscard = golfie.bind(entity)(oscard);
                        oscard = oscard.QuestContent;
                        oscard = oscard.QUEST_BOTTOM_SHEET;
                        michal['questContent'] = oscard;
                        report = _closure3_slot4;
                        michal['currentUserHasVerifiedEmailOrPhone'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    michal = tangon.bind(report)(michal, zuuluu);
                    entity['claim'] = michal;
                    return entity;
                }
            };
            update = michal.bind(report)(source);
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            tangon = 9;
            offset = zuuluu[tangon];
            yankee = michal.bind(report)(offset);
            offset = yankee.useQuestTaskDetails;
            ctrled = offset.bind(yankee)(source);
            offset = zuuluu[tangon];
            yankee = michal.bind(report)(offset);
            offset = yankee.useIsQuestProgressing;
            offset = offset.bind(yankee)(source);
            yankee = zuuluu[tangon];
            backup = michal.bind(report)(yankee);
            yankee = backup.useTaskPlatformScreen;
            kiloes = yankee.bind(backup)(source, ctrled);
            backup = _closure1_slot3;
            yankee = 1;
            yankee = backup.bind(report)(kiloes, yankee);
            sizing = 0;
            backup = yankee[sizing];
            tangon = zuuluu[tangon];
            yankee = michal.bind(report)(tangon);
            tangon = yankee.useConnectedAccounts;
            tangon = tangon.bind(yankee)();
            echoed = tangon.xboxAndPlaystationAccounts;
            _closure2_slot1 = echoed;
            kiloes = _closure1_slot4;
            yankee = kiloes.useMemo;
            tangon = new Array(2);
            tangon[0] = source;
            tangon[1] = echoed;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 11;
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
            entity = 20;
            entity = zuuluu[entity];
            tangon = michal.bind(report)(entity);
            zuuluu = tangon.useShouldAllowMobileVideoTask;
            michal = source.config;
            entity = {};
            entity['location'] = option;
            yankee = zuuluu.bind(tangon)(michal, entity);
            michal = source.userStatus;
            option = null;
            zuuluu = option == michal;
            entity = undefined;
            if(zuuluu) { _fun00008_ip = 306; continue _fun00007 }
 300:
            entity = michal.completedAt;
 306:
            sequen = option != entity;
            michal = source.userStatus;
            zuuluu = option == michal;
            entity = undefined;
            if(zuuluu) { _fun00008_ip = 331; continue _fun00007 }
 325:
            entity = michal.claimedAt;
 331:
            echoed = option != entity;
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            cntext = 21;
            entity = entity[cntext];
            entity = michal.bind(report)(entity);
            entity = entity.QuestBottomSheetStep;
            michal = entity.TASK_SELECT;
            entity = null;
            if(!(record !== michal)) { _fun00008_ip = 910; continue _fun00007 }
 376:
            tangon = _closure1_slot9;
            zuuluu = _closure1_slot20;
            michal = {};
            michal['onLayout'] = verify;
            config = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[cntext];
            verify = config.bind(report)(verify);
            verify = verify.QuestBottomSheetStep;
            verify = verify.CONSOLE_CONNECT;
            if(!(record !== verify)) { _fun00008_ip = 699; continue _fun00007 }
 427:
            config = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[cntext];
            verify = config.bind(report)(verify);
            verify = verify.QuestBottomSheetStep;
            config = verify.TASK_STATUS;
            verify = undefined;
            if(!(record === config)) { _fun00008_ip = 697; continue _fun00007 }
 465:
            if(sequen) { _fun00008_ip = 634; continue _fun00007 }
 471:
            if(yankee) { _fun00008_ip = 601; continue _fun00007 }
 477:
            sequen = _closure1_slot0;
            config = _closure1_slot2;
            yankee = 15;
            yankee = config[yankee];
            yankee = sequen.bind(report)(yankee);
            yankee = yankee.TaskPlatformScreen;
            yankee = yankee.CONSOLE;
            if(!(backup === yankee)) { _fun00008_ip = 557; continue _fun00007 }
 513:
            if(offset) { _fun00008_ip = 557; continue _fun00007 }
 516:
            backup = _closure1_slot9;
            yankee = _closure1_slot18;
            offset = {};
            sequen = source.id;
            offset['questId'] = sequen;
            offset['loading'] = vacuum;
            offset['disabled'] = vacuum;
            offset['onPress'] = result;
            offset = backup.bind(report)(yankee, offset);
            _fun00008_ip = 599; continue _fun00007;
 557:
            result = _closure1_slot9;
            backup = _closure1_slot19;
            yankee = {};
            vacuum = source.id;
            yankee['questId'] = vacuum;
            vacuum = update.claim;
            yankee['onPress'] = vacuum;
            vacuum = true;
            yankee['disabled'] = vacuum;
            offset = result.bind(report)(backup, yankee);
 599:
            _fun00008_ip = 632; continue _fun00007;
 601:
            result = _closure1_slot9;
            backup = _closure1_slot16;
            yankee = {};
            vacuum = source.id;
            yankee['questId'] = vacuum;
            yankee['taskDetails'] = ctrled;
            offset = result.bind(report)(backup, yankee);
 632:
            _fun00008_ip = 694; continue _fun00007;
 634:
            result = _closure1_slot9;
            backup = _closure1_slot19;
            yankee = {};
            source = source.id;
            yankee['questId'] = source;
            source = update.claim;
            yankee['onPress'] = source;
            yankee['disabled'] = echoed;
            echoed = update.isLoading;
            if(echoed) { _fun00008_ip = 683; continue _fun00007 }
 677:
            echoed = update.isClaiming;
 683:
            yankee['loading'] = echoed;
            offset = result.bind(report)(backup, yankee);
 694:
            verify = offset;
 697:
            _fun00008_ip = 732; continue _fun00007;
 699:
            backup = _closure1_slot9;
            yankee = _closure1_slot17;
            offset = {};
            offset['onPress'] = output;
            kiloes = kiloes.length;
            kiloes = sizing === kiloes;
            offset['disabled'] = kiloes;
            verify = backup.bind(report)(yankee, offset);
 732:
            michal['ctaButton'] = verify;
            option = option != romeon;
            if(!option) { _fun00008_ip = 890; continue _fun00007 }
 747:
            yankee = _closure1_slot9;
            backup = _closure1_slot0;
            sizing = _closure1_slot2;
            verify = 22;
            verify = sizing[verify];
            verify = backup.bind(report)(verify);
            offset = verify.IconButton;
            verify = {};
            kiloes = 19;
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
            foxtra = 23;
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
 890:
            michal['backButton'] = option;
            michal['style'] = golfie;
            michal['withSafeArea'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 910:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();