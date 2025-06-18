// app/modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: getPlatformIcon
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            report = _closure1_slot0;
            michal = _closure1_slot2;
            oscard = 6;
            michal = michal[oscard];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            michal = michal.QuestRewardCodePlatforms;
            michal = michal.CROSS_PLATFORM;
            if(!(michal !== zuuluu)) { _fun00002_ip = 349; continue _fun00001 }
 47:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(tangon)(michal);
            michal = michal.QuestRewardCodePlatforms;
            michal = michal.PC;
            if(!(michal !== zuuluu)) { _fun00002_ip = 309; continue _fun00001 }
 83:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(tangon)(michal);
            michal = michal.QuestRewardCodePlatforms;
            michal = michal.PLAYSTATION;
            if(!(michal !== zuuluu)) { _fun00002_ip = 269; continue _fun00001 }
 119:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(tangon)(michal);
            michal = michal.QuestRewardCodePlatforms;
            michal = michal.SWITCH;
            if(!(michal !== zuuluu)) { _fun00002_ip = 229; continue _fun00001 }
 152:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(tangon)(michal);
            michal = michal.QuestRewardCodePlatforms;
            michal = michal.XBOX;
            if(!(michal !== zuuluu)) { _fun00002_ip = 189; continue _fun00001 }
 185:
            michal = null;
            return michal;
 189:
            report = _closure1_slot9;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 11;
            michal = oscard[michal];
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.XboxNeutralIcon;
            michal = {};
            michal = report.bind(tangon)(zuuluu, michal);
            return michal;
 229:
            report = _closure1_slot9;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 10;
            michal = oscard[michal];
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.NintendoSwitchNeutralIcon;
            michal = {};
            michal = report.bind(tangon)(zuuluu, michal);
            return michal;
 269:
            report = _closure1_slot9;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 9;
            michal = oscard[michal];
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.PlaystationNeutralIcon;
            michal = {};
            michal = report.bind(tangon)(zuuluu, michal);
            return michal;
 309:
            report = _closure1_slot9;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 8;
            michal = oscard[michal];
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.ScreenIcon;
            michal = {};
            michal = report.bind(tangon)(zuuluu, michal);
            return michal;
 349:
            zuuluu = _closure1_slot9;
            michal = _closure1_slot0;
            report = _closure1_slot2;
            entity = 7;
            entity = report[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.ScienceIcon;
            entity = {};
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: QuestRewardCodeClaimBottomSheet
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            report = entity.quest;
            var _closure2_slot0 = report;
            offset = entity.questContent;
            verify = entity.questContentPosition;
            tangon = undefined;
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 14;
            entity = zuuluu[entity];
            entity = michal.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            michal = entity.bottom;
            entity = _closure1_slot12;
            romeon = entity.bind(tangon)(michal);
            oscard = _closure1_slot4;
            zuuluu = oscard.useMemo;
            michal = new Array(1);
            michal[0] = report;
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 15;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                zuuluu = entity.SharedQuestFields;
                michal = zuuluu.build;
                entity = _closure2_slot0;
                entity = entity.config;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            whisks = zuuluu.bind(oscard)(entity, michal);
            oscard = _closure1_slot4;
            zuuluu = oscard.useState;
            entity = whisks.rewardPlatforms;
            entity = entity.length;
            michal = 1;
            golfie = entity > michal;
            kiloes = null;
            entity = null;
            if(golfie) { _fun00004_ip = 162; continue _fun00003 }
 150:
            option = whisks.rewardPlatforms;
            golfie = 0;
            entity = option[golfie];
 162:
            oscard = zuuluu.bind(oscard)(entity);
            zuuluu = _closure1_slot3;
            entity = 2;
            entity = zuuluu.bind(tangon)(oscard, entity);
            zuuluu = 0;
            equals = entity[zuuluu];
            variable36 = entity[michal];
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 16;
            entity = oscard[entity];
            golfie = zuuluu.bind(tangon)(entity);
            oscard = golfie.useStateFromStoresObject;
            entity = _closure1_slot7;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                entity = {};
                oscard = _closure1_slot7;
                report = oscard.getRewardCode;
                michal = _closure2_slot0;
                tangon = michal.id;
                tangon = report.bind(oscard)(tangon);
                entity['rewardCode'] = tangon;
                oscard = _closure1_slot7;
                report = oscard.isFetchingRewardCode;
                tangon = michal.id;
                tangon = report.bind(oscard)(tangon);
                entity['isFetchingRewardCode'] = tangon;
                tangon = _closure1_slot7;
                zuuluu = tangon.isClaimingReward;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                entity['isClaimingReward'] = michal;
                return entity;
            };
            entity = oscard.bind(golfie)(zuuluu, entity);
            cntext = entity.rewardCode;
            _closure2_slot1 = cntext;
            ctrled = entity.isFetchingRewardCode;
            record = entity.isClaimingReward;
            entity = whisks.rewardPlatforms;
            entity = entity.length;
            result = entity > michal;
            if(!result) { _fun00004_ip = 306; continue _fun00003 }
 281:
            michal = report.userStatus;
            zuuluu = kiloes == michal;
            entity = undefined;
            if(zuuluu) { _fun00004_ip = 302; continue _fun00003 }
 296:
            entity = michal.claimedAt;
 302:
            result = kiloes == entity;
 306:
            if(!result) { _fun00004_ip = 313; continue _fun00003 }
 309:
            result = kiloes == cntext;
 313:
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 17;
            zuuluu = entity[oscard];
            option = michal.bind(tangon)(zuuluu);
            golfie = option.useClaimOrFetchRewardCode;
            zuuluu = {};
            zuuluu['isClaimingReward'] = record;
            zuuluu['isFetchingRewardCode'] = ctrled;
            zuuluu['quest'] = report;
            zuuluu['questContent'] = offset;
            zuuluu['requiresPlatformSelection'] = result;
            zuuluu['rewardCode'] = cntext;
            zuuluu['selectedPlatformType'] = equals;
            zuuluu = golfie.bind(option)(zuuluu);
            backup = zuuluu.claimCode;
            foxtra = zuuluu.fetchCode;
            yankee = zuuluu.hasError;
            _closure2_slot2 = yankee;
            output = _closure1_slot4;
            option = output.useEffect;
            golfie = new Array(1);
            golfie[0] = yankee;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot2;
                    if(!entity) { _fun00006_ip = 154; continue _fun00005 }
 13:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    entity = 18;
                    entity = tangon[entity];
                    michal = undefined;
                    oscard = zuuluu.bind(michal)(entity);
                    report = oscard.open;
                    entity = {};
                    option = 'CLAIM_QUEST_REWARD_ERROR';
                    entity['key'] = option;
                    offset = _closure1_slot0;
                    golfie = 19;
                    option = tangon[golfie];
                    option = offset.bind(michal)(option);
                    verify = option.intl;
                    option = verify.string;
                    golfie = tangon[golfie];
                    golfie = offset.bind(michal)(golfie);
                    golfie = golfie.t;
                    golfie = golfie.CKsXk5;
                    golfie = option.bind(verify)(golfie);
                    entity['content'] = golfie;
                    golfie = 20;
                    golfie = tangon[golfie];
                    golfie = zuuluu.bind(michal)(golfie);
                    entity['icon'] = golfie;
                    entity = report.bind(oscard)(entity);
                    entity = 21;
                    entity = tangon[entity];
                    michal = zuuluu.bind(michal)(entity);
                    entity = michal.hideActionSheet;
                    entity = entity.bind(michal)();
 154:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = option.bind(output)(zuuluu, golfie);
            zuuluu = 22;
            entity = entity[zuuluu];
            golfie = michal.bind(tangon)(entity);
            michal = golfie.isTieredRewardCodeQuest;
            entity = {};
            entity['quest'] = report;
            entity = michal.bind(golfie)(entity);
            _closure2_slot3 = entity;
            option = _closure1_slot4;
            golfie = option.useMemo;
            michal = new Array(3);
            michal[0] = entity;
            michal[1] = report;
            output = kiloes == cntext;
            entity = undefined;
            if(output) { _fun00004_ip = 503; continue _fun00003 }
 497:
            entity = cntext.tier;
 503:
            michal[2] = entity;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot3;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 22;
                    michal = tangon[michal];
                    report = undefined;
                    tangon = zuuluu.bind(report)(michal);
                    zuuluu = tangon.getRewardCodeQuestReward;
                    michal = {};
                    golfie = _closure2_slot0;
                    michal['quest'] = golfie;
                    if(entity) { _fun00008_ip = 66; continue _fun00007 }
 52:
                    entity = 0;
                    michal['idx'] = entity;
                    entity = zuuluu.bind(tangon)(michal);
                    _fun00008_ip = 101; continue _fun00007;
 66:
                    option = _closure2_slot1;
                    golfie = null;
                    golfie = golfie == option;
                    report = undefined;
                    if(golfie) { _fun00008_ip = 91; continue _fun00007 }
 81:
                    oscard = _closure2_slot1;
                    report = oscard.tier;
 91:
                    michal['idx'] = report;
                    entity = zuuluu.bind(tangon)(michal);
 101:
                    return entity;
                }
            };
            entity = golfie.bind(option)(entity, michal);
            _closure2_slot4 = entity;
            option = _closure1_slot4;
            golfie = option.useMemo;
            michal = new Array(2);
            michal[0] = entity;
            michal[1] = cntext;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot4;
                    tangon = null;
                    zuuluu = tangon == entity;
                    golfie = undefined;
                    entity = undefined;
                    if(zuuluu) { _fun00010_ip = 30; continue _fun00009 }
 20:
                    zuuluu = _closure2_slot4;
                    entity = zuuluu.redemptionLink;
 30:
                    if(!(tangon != entity)) { _fun00010_ip = 52; continue _fun00009 }
 34:
                    entity = _closure2_slot4;
                    entity = entity.redemptionLink;
                    zuuluu = '';
                    if(!(zuuluu === entity)) { _fun00010_ip = 54; continue _fun00009 }
 52:
                    return golfie;
 54:
                    entity = _closure2_slot1;
                    report = tangon == entity;
                    entity = undefined;
                    if(report) { _fun00010_ip = 76; continue _fun00009 }
 67:
                    report = _closure2_slot1;
                    entity = report.code;
 76:
                    if(!(tangon != entity)) { _fun00010_ip = 145; continue _fun00009 }
 80:
                    entity = _closure2_slot1;
                    entity = entity.code;
                    if(!(zuuluu !== entity)) { _fun00010_ip = 145; continue _fun00009 }
 93:
                    entity = _closure2_slot4;
                    report = entity.redemptionLink;
                    tangon = report.replace;
                    zuuluu = _closure1_slot8;
                    entity = global;
                    oscard = entity.encodeURIComponent;
                    entity = _closure2_slot1;
                    entity = entity.code;
                    entity = oscard.bind(golfie)(entity);
                    entity = tangon.bind(report)(zuuluu, entity);
                    _fun00010_ip = 155; continue _fun00009;
 145:
                    michal = _closure2_slot4;
                    entity = michal.redemptionLink;
 155:
                    return entity;
                }
            };
            output = golfie.bind(option)(entity, michal);
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = entity[oscard];
            option = michal.bind(tangon)(oscard);
            golfie = option.useClaimRewardCodePrimaryCtaClickHandler;
            oscard = {};
            oscard['claimCode'] = backup;
            oscard['fetchCode'] = foxtra;
            oscard['hasError'] = yankee;
            foxtra = _closure1_slot1;
            yankee = 21;
            yankee = entity[yankee];
            yankee = foxtra.bind(tangon)(yankee);
            yankee = yankee.hideActionSheet;
            oscard['onDismiss'] = yankee;
            oscard['quest'] = report;
            oscard['questContent'] = offset;
            oscard['questContentPosition'] = verify;
            oscard['requiresPlatformSelection'] = result;
            oscard['selectedPlatformType'] = equals;
            oscard['redemptionLink'] = output;
            source = golfie.bind(option)(oscard);
            verify = _closure1_slot4;
            option = verify.useCallback;
            golfie = new Array(1);
            golfie[0] = cntext;
            oscard = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00012_ip = 68; continue _fun00011 }
 13:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 23;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.copy;
                    entity = _closure2_slot1;
                    michal = entity.code;
                    entity = function() {
                        michal = _closure1_slot1;
                        verify = _closure1_slot2;
                        entity = 18;
                        entity = verify[entity];
                        option = undefined;
                        zuuluu = michal.bind(option)(entity);
                        michal = zuuluu.open;
                        entity = {};
                        report = 'TOAST_QUEST_REWARD_CODE_COPIED';
                        entity['key'] = report;
                        golfie = _closure1_slot0;
                        tangon = 19;
                        report = verify[tangon];
                        report = golfie.bind(option)(report);
                        oscard = report.intl;
                        report = oscard.string;
                        tangon = verify[tangon];
                        tangon = golfie.bind(option)(tangon);
                        tangon = tangon.t;
                        tangon = tangon.MSaeTU;
                        tangon = report.bind(oscard)(tangon);
                        entity['content'] = tangon;
                        tangon = function() { // Original name: icon
                            tangon = _closure1_slot9;
                            michal = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            entity = 24;
                            entity = zuuluu[entity];
                            zuuluu = undefined;
                            entity = michal.bind(zuuluu)(entity);
                            michal = entity.CopyIcon;
                            entity = {};
                            entity = tangon.bind(zuuluu)(michal, entity);
                            return entity;
                        };
                        entity['icon'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(michal, entity);
 68:
                    entity = undefined;
                    return entity;
                }
            };
            variable39 = option.bind(verify)(oscard, golfie);
            entity = entity[zuuluu];
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.getRewardCodeRedemptionInstructions;
            entity = {};
            entity['quest'] = report;
            entity['rewardCode'] = cntext;
            entity['selectedPlatformType'] = equals;
            entity['sharedQuestFields'] = whisks;
            target = michal.bind(zuuluu)(entity);
            if(ctrled) { _fun00004_ip = 738; continue _fun00003 }
 735:
            ctrled = record;
 738:
            if(ctrled) { _fun00004_ip = 761; continue _fun00003 }
 741:
            entity = result;
            if(!entity) { _fun00004_ip = 751; continue _fun00003 }
 747:
            entity = kiloes == equals;
 751:
            if(!entity) { _fun00004_ip = 758; continue _fun00003 }
 754:
            entity = kiloes == cntext;
 758:
            ctrled = entity;
 761:
            if(ctrled) { _fun00004_ip = 791; continue _fun00003 }
 764:
            entity = !result;
            if(result) { _fun00004_ip = 788; continue _fun00003 }
 770:
            zuuluu = kiloes == cntext;
            michal = undefined;
            if(zuuluu) { _fun00004_ip = 784; continue _fun00003 }
 779:
            michal = cntext.code;
 784:
            entity = kiloes == michal;
 788:
            ctrled = entity;
 791:
            zuuluu = _closure1_slot9;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            entity = 25;
            entity = option[entity];
            entity = oscard.bind(tangon)(entity);
            michal = entity.BottomSheet;
            entity = {};
            golfie = _closure1_slot9;
            report = 26;
            report = option[report];
            report = oscard.bind(tangon)(report);
            oscard = report.BottomSheetTitleHeader;
            report = {};
            verify = _closure1_slot0;
            option = _closure1_slot2;
            update = 19;
            offset = option[update];
            offset = verify.bind(tangon)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            option = option[update];
            option = verify.bind(tangon)(option);
            verify = option.t;
            if(result) { _fun00004_ip = 909; continue _fun00003 }
 894:
            option = verify.srzsU1;
            option = offset.bind(yankee)(option);
            _fun00004_ip = 922; continue _fun00003;
 909:
            verify = verify.JRU8dn;
            option = offset.bind(yankee)(verify);
 922:
            report['title'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['header'] = report;
            echoed = true;
            entity['startExpanded'] = echoed;
            golfie = _closure1_slot10;
            oscard = _closure1_slot6;
            report = {};
            option = romeon.wrapper;
            report['style'] = option;
            yankee = _closure1_slot10;
            if(result) { _fun00004_ip = 1464; continue _fun00003 }
 973:
            verify = _closure1_slot6;
            option = {};
            foxtra = kiloes != cntext;
            if(!foxtra) { _fun00004_ip = 990; continue _fun00003 }
 986:
            foxtra = kiloes != target;
 990:
            if(!foxtra) { _fun00004_ip = 1094; continue _fun00003 }
 993:
            vacuum = _closure1_slot9;
            backup = _closure1_slot0;
            papara = _closure1_slot2;
            offset = 27;
            offset = papara[offset];
            offset = backup.bind(tangon)(offset);
            backup = offset.Text;
            offset = {'style': null, 'variant': 'text-md/normal', 'color': 'text-normal'};
            sequen = romeon.redemptionInstructions;
            offset['style'] = sequen;
            config = _closure1_slot1;
            sequen = 30;
            sequen = papara[sequen];
            papara = config.bind(tangon)(sequen);
            config = papara.parse;
            sequen = {};
            sequen['allowLinks'] = echoed;
            sequen = config.bind(papara)(target, echoed, sequen);
            offset['children'] = sequen;
            foxtra = vacuum.bind(tangon)(backup, offset);
 1094:
            offset = new Array(2);
            offset[0] = foxtra;
            vacuum = _closure1_slot10;
            backup = _closure1_slot6;
            foxtra = {};
            config = _closure1_slot9;
            sequen = {};
            target = kiloes == cntext;
            papara = undefined;
            if(target) { _fun00004_ip = 1132; continue _fun00003 }
 1127:
            papara = cntext.code;
 1132:
            papara = kiloes == papara;
            if(!papara) { _fun00004_ip = 1145; continue _fun00003 }
 1139:
            papara = romeon.codeCopyWrapperLoading;
 1145:
            sequen['style'] = papara;
            status = _closure1_slot9;
            quebec = _closure1_slot0;
            sierra = _closure1_slot2;
            papara = 31;
            papara = sierra[papara];
            papara = quebec.bind(tangon)(papara);
            target = papara.TableRowGroup;
            papara = {};
            variable37 = _closure1_slot9;
            variable40 = 32;
            sierra = sierra[variable40];
            sierra = quebec.bind(tangon)(sierra);
            quebec = sierra.TableRow;
            sierra = {};
            variable41 = kiloes == cntext;
            variable38 = undefined;
            if(variable41) { _fun00004_ip = 1219; continue _fun00003 }
 1214:
            variable38 = cntext.code;
 1219:
            sierra['label'] = variable38;
            variable41 = kiloes == cntext;
            variable38 = undefined;
            if(variable41) { _fun00004_ip = 1237; continue _fun00003 }
 1232:
            variable38 = cntext.code;
 1237:
            variable38 = kiloes != variable38;
            if(!variable38) { _fun00004_ip = 1308; continue _fun00003 }
 1244:
            variable42 = _closure1_slot9;
            variable44 = _closure1_slot0;
            variable45 = _closure1_slot2;
            variable40 = variable45[variable40];
            variable40 = variable44.bind(tangon)(variable40);
            variable40 = variable40.TableRow;
            variable41 = variable40.Icon;
            variable40 = {};
            variable43 = 24;
            variable43 = variable45[variable43];
            variable43 = variable44.bind(tangon)(variable43);
            variable43 = variable43.CopyIcon;
            variable40['IconComponent'] = variable43;
            variable38 = variable42.bind(tangon)(variable41, variable40);
 1308:
            sierra['trailing'] = variable38;
            variable40 = kiloes == cntext;
            variable38 = undefined;
            if(variable40) { _fun00004_ip = 1327; continue _fun00003 }
 1322:
            variable38 = cntext.code;
 1327:
            variable40 = kiloes != variable38;
            variable38 = undefined;
            if(!variable40) { _fun00004_ip = 1339; continue _fun00003 }
 1336:
            variable38 = variable39;
 1339:
            sierra['onPress'] = variable38;
            sierra = variable37.bind(tangon)(quebec, sierra);
            papara['children'] = sierra;
            papara = status.bind(tangon)(target, papara);
            sequen['children'] = papara;
            config = config.bind(tangon)(backup, sequen);
            sequen = new Array(2);
            sequen[0] = config;
            papara = kiloes == cntext;
            config = undefined;
            if(papara) { _fun00004_ip = 1391; continue _fun00003 }
 1386:
            config = cntext.code;
 1391:
            config = kiloes == config;
            if(!config) { _fun00004_ip = 1431; continue _fun00003 }
 1398:
            target = _closure1_slot9;
            papara = _closure1_slot5;
            cntext = {};
            status = romeon.claimingIndicator;
            cntext['style'] = status;
            status = 24;
            cntext['size'] = status;
            config = target.bind(tangon)(papara, cntext);
 1431:
            sequen[1] = config;
            foxtra['children'] = sequen;
            foxtra = vacuum.bind(tangon)(backup, foxtra);
            offset[1] = foxtra;
            option['children'] = offset;
            verify = yankee.bind(tangon)(verify, option);
            _fun00004_ip = 1847; continue _fun00003;
 1464:
            offset = _closure1_slot11;
            option = {};
            vacuum = _closure1_slot9;
            config = _closure1_slot0;
            sequen = _closure1_slot2;
            foxtra = 27;
            foxtra = sequen[foxtra];
            foxtra = config.bind(tangon)(foxtra);
            backup = foxtra.Text;
            foxtra = {};
            cntext = 'text-md/normal';
            foxtra['variant'] = cntext;
            cntext = sequen[update];
            cntext = config.bind(tangon)(cntext);
            papara = cntext.intl;
            cntext = papara.format;
            sequen = sequen[update];
            sequen = config.bind(tangon)(sequen);
            sequen = sequen.t;
            config = sequen.ZUA/Ul;
            sequen = {};
            target = whisks.defaultRewardName;
            sequen['rewardName'] = target;
            sequen = cntext.bind(papara)(config, sequen);
            foxtra['children'] = sequen;
            backup = vacuum.bind(tangon)(backup, foxtra);
            foxtra = new Array(2);
            foxtra[0] = backup;
            sequen = _closure1_slot10;
            vacuum = _closure1_slot6;
            backup = {};
            config = romeon.platformSelectWrapper;
            backup['style'] = config;
            papara = _closure1_slot9;
            cntext = _closure1_slot6;
            config = {};
            target = record;
            if(!record) { _fun00004_ip = 1631; continue _fun00003 }
 1625:
            target = romeon.platformSelectClaiming;
 1631:
            config['style'] = target;
            sierra = _closure1_slot9;
            variable38 = _closure1_slot0;
            quebec = _closure1_slot2;
            target = 28;
            target = quebec[target];
            target = variable38.bind(tangon)(target);
            status = target.TableRadioGroup;
            target = {};
            target['onChange'] = variable36;
            variable36 = quebec[update];
            variable36 = variable38.bind(tangon)(variable36);
            variable37 = variable36.intl;
            variable36 = variable37.string;
            quebec = quebec[update];
            quebec = variable38.bind(tangon)(quebec);
            quebec = quebec.t;
            quebec = quebec.vVcTtL;
            quebec = variable36.bind(variable37)(quebec);
            target['title'] = quebec;
            target['defaultValue'] = equals;
            target['hasIcons'] = echoed;
            equals = whisks.rewardPlatforms;
            whisks = equals.map;
            limora = function(argFoo) {
                report = argFoo;
                tangon = _closure1_slot9;
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                entity = 29;
                entity = option[entity];
                zuuluu = undefined;
                entity = golfie.bind(zuuluu)(entity);
                michal = entity.TableRadioRow;
                entity = {};
                oscard = _closure1_slot13;
                oscard = oscard.bind(zuuluu)(report);
                entity['icon'] = oscard;
                oscard = 22;
                oscard = option[oscard];
                golfie = golfie.bind(zuuluu)(oscard);
                oscard = golfie.getPlatformString;
                oscard = oscard.bind(golfie)(report);
                entity['label'] = oscard;
                entity['value'] = report;
                entity = tangon.bind(zuuluu)(michal, entity, report);
                return entity;
            };
            limora = whisks.bind(equals)(limora);
            target['children'] = limora;
            target = sierra.bind(tangon)(status, target);
            config['children'] = target;
            cntext = papara.bind(tangon)(cntext, config);
            config = new Array(2);
            config[0] = cntext;
            if(!record) { _fun00004_ip = 1819; continue _fun00003 }
 1786:
            target = _closure1_slot9;
            papara = _closure1_slot5;
            cntext = {};
            status = romeon.claimingIndicator;
            cntext['style'] = status;
            status = 24;
            cntext['size'] = status;
            record = target.bind(tangon)(papara, cntext);
 1819:
            config[1] = record;
            backup['children'] = config;
            backup = sequen.bind(tangon)(vacuum, backup);
            foxtra[1] = backup;
            option['children'] = foxtra;
            verify = yankee.bind(tangon)(offset, option);
 1847:
            option = new Array(2);
            option[0] = verify;
            yankee = _closure1_slot9;
            offset = _closure1_slot6;
            verify = {};
            romeon = romeon.footer;
            verify['style'] = romeon;
            backup = _closure1_slot9;
            foxtra = _closure1_slot0;
            vacuum = _closure1_slot2;
            romeon = 33;
            romeon = vacuum[romeon];
            romeon = foxtra.bind(tangon)(romeon);
            foxtra = romeon.Button;
            romeon = {};
            romeon['disabled'] = ctrled;
            romeon['onPress'] = source;
            romeon['grow'] = echoed;
            if(result) { _fun00004_ip = 2048; continue _fun00003 }
 1926:
            if(!(kiloes != output)) { _fun00004_ip = 1938; continue _fun00003 }
 1930:
            kiloes = '';
            if(!(kiloes === output)) { _fun00004_ip = 1994; continue _fun00003 }
 1938:
            echoed = _closure1_slot0;
            kiloes = _closure1_slot2;
            output = kiloes[update];
            output = echoed.bind(tangon)(output);
            result = output.intl;
            output = result.string;
            kiloes = kiloes[update];
            kiloes = echoed.bind(tangon)(kiloes);
            kiloes = kiloes.t;
            kiloes = kiloes.23SS+/;
            kiloes = output.bind(result)(kiloes);
            _fun00004_ip = 2046; continue _fun00003;
 1994:
            source = _closure1_slot0;
            output = _closure1_slot2;
            result = output[update];
            result = source.bind(tangon)(result);
            echoed = result.intl;
            result = echoed.string;
            output = output[update];
            output = source.bind(tangon)(output);
            output = output.t;
            output = output.+zx47e;
            kiloes = result.bind(echoed)(output);
 2046:
            _fun00004_ip = 2102; continue _fun00003;
 2048:
            echoed = _closure1_slot0;
            sizing = _closure1_slot2;
            output = sizing[update];
            output = echoed.bind(tangon)(output);
            result = output.intl;
            output = result.string;
            sizing = sizing[update];
            sizing = echoed.bind(tangon)(sizing);
            sizing = sizing.t;
            sizing = sizing.SLZMi4;
            kiloes = output.bind(result)(sizing);
 2102:
            romeon['text'] = kiloes;
            romeon = backup.bind(tangon)(foxtra, romeon);
            verify['children'] = romeon;
            verify = yankee.bind(tangon)(offset, verify);
            option[1] = verify;
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
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
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.ActivityIndicator;
    var _closure1_slot5 = option;
    tangon = tangon.View;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.REWARD_CODE_PLACEHOLDER;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot9 = golfie;
    golfie = tangon.jsxs;
    var _closure1_slot10 = golfie;
    tangon = tangon.Fragment;
    var _closure1_slot11 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = function(argFoo) {
        entity = {};
        michal = {};
        zuuluu = 'flex';
        michal['display'] = zuuluu;
        report = _closure1_slot1;
        oscard = _closure1_slot2;
        zuuluu = 13;
        golfie = oscard[zuuluu];
        tangon = undefined;
        golfie = report.bind(tangon)(golfie);
        golfie = golfie.spacing;
        golfie = golfie.PX_16;
        michal['paddingHorizontal'] = golfie;
        zuuluu = oscard[zuuluu];
        zuuluu = report.bind(tangon)(zuuluu);
        zuuluu = zuuluu.spacing;
        zuuluu = zuuluu.PX_24;
        michal['gap'] = zuuluu;
        entity['wrapper'] = michal;
        michal = {};
        zuuluu = argFoo;
        michal['paddingBottom'] = zuuluu;
        entity['footer'] = michal;
        michal = {};
        zuuluu = 0.8;
        michal['opacity'] = zuuluu;
        entity['platformSelectClaiming'] = michal;
        michal = {};
        zuuluu = 'relative';
        michal['position'] = zuuluu;
        entity['platformSelectWrapper'] = michal;
        michal = {'position': 'absolute', 'left': '50%', 'top': '50%', 'marginLeft': 4294967284, 'marginTop': 4294967284};
        entity['claimingIndicator'] = michal;
        michal = {};
        zuuluu = 0.5;
        michal['opacity'] = zuuluu;
        entity['codeCopyWrapperLoading'] = michal;
        michal = {};
        zuuluu = 24;
        michal['marginBottom'] = zuuluu;
        entity['redemptionInstructions'] = michal;
        return entity;
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 35;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: QuestRewardCodeClaimBottomSheetConnected
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            michal = entity.questId;
            var _closure2_slot0 = michal;
            verify = entity.questContent;
            var _closure2_slot1 = verify;
            option = entity.questContentPosition;
            var _closure2_slot2 = option;
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 16;
            entity = tangon[entity];
            report = undefined;
            oscard = michal.bind(report)(entity);
            tangon = oscard.useStateFromStores;
            entity = _closure1_slot7;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getQuest;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            offset = tangon.bind(oscard)(michal, entity);
            var _closure2_slot3 = offset;
            michal = null;
            if(!(michal != offset)) { _fun00014_ip = 173; continue _fun00013 }
 100:
            oscard = _closure1_slot9;
            tangon = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 34;
            entity = yankee[entity];
            entity = tangon.bind(report)(entity);
            tangon = entity.QuestContentImpressionTrackerNative;
            entity = {};
            yankee = true;
            entity['overrideVisibility'] = yankee;
            entity['questOrQuests'] = offset;
            entity['questContent'] = verify;
            entity['questContentPosition'] = option;
            golfie = function() { // Original name: children
                tangon = _closure1_slot9;
                zuuluu = _closure1_slot14;
                michal = {};
                report = _closure2_slot3;
                michal['quest'] = report;
                report = _closure2_slot1;
                michal['questContent'] = report;
                entity = _closure2_slot2;
                michal['questContentPosition'] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            entity['children'] = golfie;
            entity = oscard.bind(report)(tangon, entity);
            _fun00014_ip = 205; continue _fun00013;
 173:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 21;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.hideActionSheet;
            zuuluu = zuuluu.bind(tangon)();
            entity = null;
 205:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();