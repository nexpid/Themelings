// app/modules/quests/hooks/RewardCodeClaimHooks.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot5 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/hooks/RewardCodeClaimHooks.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useClaimOrFetchRewardCode
        michal = argFoo;
        sizing = michal.isClaimingReward;
        var _closure2_slot0 = sizing;
        kiloes = michal.isFetchingRewardCode;
        var _closure2_slot1 = kiloes;
        backup = michal.questContent;
        var _closure2_slot2 = backup;
        foxtra = michal.quest;
        var _closure2_slot3 = foxtra;
        romeon = michal.requiresPlatformSelection;
        var _closure2_slot4 = romeon;
        yankee = michal.rewardCode;
        var _closure2_slot5 = yankee;
        offset = michal.selectedPlatformType;
        var _closure2_slot6 = offset;
        verify = michal.preview;
        var _closure2_slot7 = verify;
        option = _closure1_slot5;
        tangon = option.useState;
        zuuluu = false;
        tangon = tangon.bind(option)(zuuluu);
        zuuluu = _closure1_slot4;
        report = undefined;
        michal = 2;
        tangon = zuuluu.bind(report)(tangon, michal);
        michal = 0;
        zuuluu = tangon[michal];
        var _closure2_slot8 = zuuluu;
        michal = 1;
        michal = tangon[michal];
        var _closure2_slot9 = michal;
        oscard = option.useCallback;
        tangon = function() {
            tangon = _closure1_slot3;
            zuuluu = undefined;
            michal = function* (argFoo, argBar, argBaz) {
                entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                        if(report) { _fun00002_ip = 106; continue _fun00001 }
 7:
                        tangon = argFoo;
                        zuuluu = argBar;
                        michal = argBaz;
 16: // try_start_0
                        golfie = _closure1_slot0;
                        oscard = _closure1_slot2;
                        report = 3;
                        oscard = oscard[report];
                        report = undefined;
                        golfie = golfie.bind(report)(oscard);
                        oscard = golfie.claimQuestReward;
                        michal = oscard.bind(golfie)(tangon, zuuluu, michal);
                        SaveGenerator(address=58);
 56:
                        return michal;
 58:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zuuluu) { _fun00002_ip = 80; continue _fun00001 }
 64:
                        tangon = _closure2_slot9;
                        zuuluu = false;
                        zuuluu = tangon.bind(report)(zuuluu);
 78: // try_end0
                        _fun00002_ip = 101; continue _fun00001;
 80:
                        return michal;
 83: // catch_target0
                        CatchBlockStart(arg_register=1);
                        tangon = _closure2_slot9;
                        zuuluu = undefined;
                        michal = true;
                        michal = tangon.bind(zuuluu)(michal);
 101:
                        michal = undefined;
                        return michal;
 106:
                        return entity;
                    }
                };
                return entity;
            };
            michal = tangon.bind(zuuluu)(michal);
            var _closure3_slot0 = michal;
            entity = function() {
                entity = undefined;
                tangon = _closure3_slot0;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            return entity;
        };
        report = tangon.bind(report)();
        tangon = new Array(0);
        report = oscard.bind(option)(report, tangon);
        var _closure2_slot10 = report;
        golfie = option.useCallback;
        oscard = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
 3: // try_start_0
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 3;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.fetchQuestRewardCode;
                entity = michal.bind(zuuluu)(entity);
 39: // try_end0
                _fun00004_ip = 59; continue _fun00003;
 41: // catch_target0
                CatchBlockStart(arg_register=0);
                zuuluu = _closure2_slot9;
                michal = undefined;
                entity = true;
                entity = zuuluu.bind(michal)(entity);
 59:
                entity = undefined;
                return entity;
            }
        };
        tangon = new Array(0);
        tangon = golfie.bind(option)(oscard, tangon);
        var _closure2_slot11 = tangon;
        golfie = option.useEffect;
        oscard = new Array(11);
        oscard[0] = report;
        oscard[1] = tangon;
        oscard[2] = zuuluu;
        oscard[3] = sizing;
        oscard[4] = kiloes;
        oscard[5] = backup;
        oscard[6] = foxtra;
        oscard[7] = romeon;
        oscard[8] = yankee;
        oscard[9] = offset;
        oscard[10] = verify;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure2_slot7;
                michal = true;
                michal = michal === zuuluu;
                if(michal) { _fun00006_ip = 26; continue _fun00005 }
 16:
                tangon = _closure2_slot5;
                zuuluu = null;
                michal = zuuluu != tangon;
 26:
                if(michal) { _fun00006_ip = 33; continue _fun00005 }
 29:
                michal = _closure2_slot8;
 33:
                if(michal) { _fun00006_ip = 40; continue _fun00005 }
 36:
                michal = _closure2_slot0;
 40:
                if(michal) { _fun00006_ip = 47; continue _fun00005 }
 43:
                michal = _closure2_slot1;
 47:
                if(michal) { _fun00006_ip = 54; continue _fun00005 }
 50:
                michal = _closure2_slot4;
 54:
                if(michal) { _fun00006_ip = 189; continue _fun00005 }
 60:
                zuuluu = _closure2_slot9;
                report = undefined;
                michal = false;
                michal = zuuluu.bind(report)(michal);
                michal = _closure2_slot3;
                tangon = michal.userStatus;
                zuuluu = null;
                oscard = zuuluu == tangon;
                michal = undefined;
                if(oscard) { _fun00006_ip = 100; continue _fun00005 }
 94:
                michal = tangon.claimedAt;
 100:
                if(!(zuuluu == michal)) { _fun00006_ip = 112; continue _fun00005 }
 104:
                michal = _closure2_slot6;
                if(!(zuuluu == michal)) { _fun00006_ip = 161; continue _fun00005 }
 112:
                michal = _closure2_slot3;
                tangon = michal.userStatus;
                oscard = zuuluu == tangon;
                michal = undefined;
                if(oscard) { _fun00006_ip = 137; continue _fun00005 }
 131:
                michal = tangon.claimedAt;
 137:
                if(!(zuuluu != michal)) { _fun00006_ip = 189; continue _fun00005 }
 141:
                zuuluu = _closure2_slot11;
                michal = _closure2_slot3;
                michal = michal.id;
                michal = zuuluu.bind(report)(michal);
                _fun00006_ip = 189; continue _fun00005;
 161:
                tangon = _closure2_slot10;
                michal = _closure2_slot3;
                zuuluu = michal.id;
                michal = _closure2_slot6;
                entity = _closure2_slot2;
                entity = tangon.bind(report)(zuuluu, michal, entity);
 189:
                entity = undefined;
                return entity;
            }
        };
        entity = golfie.bind(option)(entity, oscard);
        entity = {};
        entity['claimCode'] = report;
        entity['fetchCode'] = tangon;
        entity['hasError'] = zuuluu;
        entity['setHasError'] = michal;
        return entity;
    };
    zuuluu['useClaimOrFetchRewardCode'] = tangon;
    michal = function(argFoo) { // Original name: useClaimRewardCodePrimaryCtaClickHandler
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            output = michal.claimCode;
            var _closure2_slot0 = output;
            sizing = michal.fetchCode;
            var _closure2_slot1 = sizing;
            kiloes = michal.hasError;
            var _closure2_slot2 = kiloes;
            backup = michal.onDismiss;
            var _closure2_slot3 = backup;
            foxtra = michal.quest;
            var _closure2_slot4 = foxtra;
            yankee = michal.questContent;
            var _closure2_slot5 = yankee;
            offset = michal.questContentCTA;
            romeon = undefined;
            if(!(romeon === offset)) { _fun00008_ip = 112; continue _fun00007 }
 77:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 4;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(romeon)(zuuluu);
            zuuluu = zuuluu.QuestContentCTA;
            offset = zuuluu.GET_REWARD_CODE;
 112:
            var _closure2_slot6 = offset;
            verify = michal.questContentPosition;
            var _closure2_slot7 = verify;
            option = michal.requiresPlatformSelection;
            var _closure2_slot8 = option;
            golfie = michal.selectedPlatformType;
            var _closure2_slot9 = golfie;
            report = michal.redemptionLink;
            var _closure2_slot10 = report;
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 4;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(romeon)(zuuluu);
            zuuluu = tangon.useTrackQuestContentClickedWithImpression;
            oscard = zuuluu.bind(tangon)();
            var _closure2_slot11 = oscard;
            tangon = _closure1_slot5;
            zuuluu = tangon.useCallback;
            michal = new Array(13);
            michal[0] = output;
            michal[1] = sizing;
            michal[2] = kiloes;
            michal[3] = backup;
            backup = foxtra.id;
            michal[4] = backup;
            foxtra = foxtra.userStatus;
            backup = null;
            backup = backup == foxtra;
            romeon = undefined;
            if(backup) { _fun00008_ip = 254; continue _fun00007 }
 248:
            romeon = foxtra.claimedAt;
 254:
            michal[5] = romeon;
            michal[6] = yankee;
            michal[7] = offset;
            michal[8] = verify;
            michal[9] = option;
            michal[10] = golfie;
            michal[11] = oscard;
            michal[12] = report;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot8;
                    if(!entity) { _fun00010_ip = 23; continue _fun00009 }
 10:
                    michal = _closure2_slot9;
                    entity = null;
                    if(!(entity == michal)) { _fun00010_ip = 332; continue _fun00009 }
 23:
                    entity = _closure2_slot2;
                    if(entity) { _fun00010_ip = 194; continue _fun00009 }
 33:
                    michal = _closure2_slot10;
                    entity = null;
                    if(!(entity != michal)) { _fun00010_ip = 179; continue _fun00009 }
 46:
                    oscard = _closure2_slot11;
                    entity = {};
                    michal = _closure2_slot4;
                    michal = michal.id;
                    entity['questId'] = michal;
                    michal = _closure2_slot5;
                    entity['questContent'] = michal;
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 4;
                    golfie = report[michal];
                    michal = undefined;
                    golfie = zuuluu.bind(michal)(golfie);
                    golfie = golfie.QuestContentCTA;
                    golfie = golfie.REDEEM_REWARD;
                    entity['questContentCTA'] = golfie;
                    golfie = _closure2_slot7;
                    entity['questContentPosition'] = golfie;
                    entity = oscard.bind(michal)(entity);
                    entity = 5;
                    entity = report[entity];
                    zuuluu = zuuluu.bind(michal)(entity);
                    michal = zuuluu.handleClick;
                    entity = {};
                    report = _closure2_slot10;
                    entity['href'] = report;
                    report = function() { // Original name: onConfirm
                        oscard = _closure2_slot11;
                        tangon = {};
                        entity = _closure2_slot4;
                        entity = entity.id;
                        tangon['questId'] = entity;
                        entity = _closure2_slot5;
                        tangon['questContent'] = entity;
                        option = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 4;
                        golfie = report[entity];
                        entity = undefined;
                        golfie = option.bind(entity)(golfie);
                        golfie = golfie.QuestContentCTA;
                        golfie = golfie.VISIT_REDEMPTION_LINK;
                        tangon['questContentCTA'] = golfie;
                        golfie = _closure2_slot7;
                        tangon['questContentPosition'] = golfie;
                        tangon = oscard.bind(entity)(tangon);
                        tangon = _closure1_slot1;
                        zuuluu = 6;
                        zuuluu = report[zuuluu];
                        zuuluu = tangon.bind(entity)(zuuluu);
                        michal = _closure2_slot10;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    entity['onConfirm'] = report;
                    entity = michal.bind(zuuluu)(entity);
 179:
                    michal = _closure2_slot3;
                    entity = undefined;
                    entity = michal.bind(entity)();
                    _fun00010_ip = 406; continue _fun00009;
 194:
                    entity = _closure2_slot4;
                    report = entity.userStatus;
                    michal = null;
                    oscard = michal == report;
                    zuuluu = undefined;
                    entity = undefined;
                    if(oscard) { _fun00010_ip = 223; continue _fun00009 }
 217:
                    entity = report.claimedAt;
 223:
                    if(!(michal == entity)) { _fun00010_ip = 312; continue _fun00009 }
 227:
                    entity = _closure2_slot9;
                    if(!(michal != entity)) { _fun00010_ip = 406; continue _fun00009 }
 238:
                    golfie = _closure2_slot0;
                    oscard = _closure2_slot4;
                    michal = oscard.id;
                    entity = _closure2_slot9;
                    report = _closure2_slot5;
                    entity = golfie.bind(zuuluu)(michal, entity, report);
                    michal = _closure2_slot11;
                    entity = {};
                    oscard = oscard.id;
                    entity['questId'] = oscard;
                    entity['questContent'] = report;
                    report = _closure2_slot6;
                    entity['questContentCTA'] = report;
                    report = _closure2_slot7;
                    entity['questContentPosition'] = report;
                    entity = michal.bind(zuuluu)(entity);
                    _fun00010_ip = 406; continue _fun00009;
 312:
                    michal = _closure2_slot1;
                    entity = _closure2_slot4;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
                    _fun00010_ip = 406; continue _fun00009;
 332:
                    golfie = _closure2_slot0;
                    oscard = _closure2_slot4;
                    michal = oscard.id;
                    entity = _closure2_slot9;
                    report = _closure2_slot5;
                    zuuluu = undefined;
                    entity = golfie.bind(zuuluu)(michal, entity, report);
                    michal = _closure2_slot11;
                    entity = {};
                    oscard = oscard.id;
                    entity['questId'] = oscard;
                    entity['questContent'] = report;
                    report = _closure2_slot6;
                    entity['questContentCTA'] = report;
                    tangon = _closure2_slot7;
                    entity['questContentPosition'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 406:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['useClaimRewardCodePrimaryCtaClickHandler'] = michal;
    return entity;
})();