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
            equals = zuuluu.bind(oscard)(entity, michal);
            oscard = _closure1_slot4;
            zuuluu = oscard.useState;
            entity = equals.rewardPlatforms;
            entity = entity.length;
            michal = 1;
            golfie = entity > michal;
            kiloes = null;
            entity = null;
            if(golfie) { _fun00004_ip = 158; continue _fun00003 }
 146:
            option = equals.rewardPlatforms;
            golfie = 0;
            entity = option[golfie];
 158:
            oscard = zuuluu.bind(oscard)(entity);
            zuuluu = _closure1_slot3;
            entity = 2;
            entity = zuuluu.bind(tangon)(oscard, entity);
            zuuluu = 0;
            quebec = entity[zuuluu];
            variable37 = entity[michal];
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
            entity = equals.rewardPlatforms;
            entity = entity.length;
            result = entity > michal;
            if(!result) { _fun00004_ip = 302; continue _fun00003 }
 277:
            michal = report.userStatus;
            zuuluu = kiloes == michal;
            entity = undefined;
            if(zuuluu) { _fun00004_ip = 298; continue _fun00003 }
 292:
            entity = michal.claimedAt;
 298:
            result = kiloes == entity;
 302:
            if(!result) { _fun00004_ip = 309; continue _fun00003 }
 305:
            result = kiloes == cntext;
 309:
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
            zuuluu['selectedPlatformType'] = quebec;
            zuuluu = golfie.bind(option)(zuuluu);
            backup = zuuluu.claimCode;
            foxtra = zuuluu.fetchCode;
            yankee = zuuluu.hasError;
            zuuluu = 18;
            entity = entity[zuuluu];
            golfie = michal.bind(tangon)(entity);
            michal = golfie.isTieredRewardCodeQuest;
            entity = {};
            entity['quest'] = report;
            entity = michal.bind(golfie)(entity);
            _closure2_slot2 = entity;
            option = _closure1_slot4;
            golfie = option.useMemo;
            michal = new Array(3);
            michal[0] = entity;
            michal[1] = report;
            output = kiloes == cntext;
            entity = undefined;
            if(output) { _fun00004_ip = 465; continue _fun00003 }
 459:
            entity = cntext.tier;
 465:
            michal[2] = entity;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot2;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 18;
                    michal = tangon[michal];
                    report = undefined;
                    tangon = zuuluu.bind(report)(michal);
                    zuuluu = tangon.getRewardCodeQuestReward;
                    michal = {};
                    golfie = _closure2_slot0;
                    michal['quest'] = golfie;
                    if(entity) { _fun00006_ip = 66; continue _fun00005 }
 52:
                    entity = 0;
                    michal['idx'] = entity;
                    entity = zuuluu.bind(tangon)(michal);
                    _fun00006_ip = 101; continue _fun00005;
 66:
                    option = _closure2_slot1;
                    golfie = null;
                    golfie = golfie == option;
                    report = undefined;
                    if(golfie) { _fun00006_ip = 91; continue _fun00005 }
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
            _closure2_slot3 = entity;
            option = _closure1_slot4;
            golfie = option.useMemo;
            michal = new Array(2);
            michal[0] = entity;
            michal[1] = cntext;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot3;
                    tangon = null;
                    zuuluu = tangon == entity;
                    golfie = undefined;
                    entity = undefined;
                    if(zuuluu) { _fun00008_ip = 30; continue _fun00007 }
 20:
                    zuuluu = _closure2_slot3;
                    entity = zuuluu.redemptionLink;
 30:
                    if(!(tangon != entity)) { _fun00008_ip = 52; continue _fun00007 }
 34:
                    entity = _closure2_slot3;
                    entity = entity.redemptionLink;
                    zuuluu = '';
                    if(!(zuuluu === entity)) { _fun00008_ip = 54; continue _fun00007 }
 52:
                    return golfie;
 54:
                    entity = _closure2_slot1;
                    report = tangon == entity;
                    entity = undefined;
                    if(report) { _fun00008_ip = 76; continue _fun00007 }
 67:
                    report = _closure2_slot1;
                    entity = report.code;
 76:
                    if(!(tangon != entity)) { _fun00008_ip = 145; continue _fun00007 }
 80:
                    entity = _closure2_slot1;
                    entity = entity.code;
                    if(!(zuuluu !== entity)) { _fun00008_ip = 145; continue _fun00007 }
 93:
                    entity = _closure2_slot3;
                    report = entity.redemptionLink;
                    tangon = report.replace;
                    zuuluu = _closure1_slot8;
                    entity = global;
                    oscard = entity.encodeURIComponent;
                    entity = _closure2_slot1;
                    entity = entity.code;
                    entity = oscard.bind(golfie)(entity);
                    entity = tangon.bind(report)(zuuluu, entity);
                    _fun00008_ip = 155; continue _fun00007;
 145:
                    michal = _closure2_slot3;
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
            yankee = 19;
            yankee = entity[yankee];
            yankee = foxtra.bind(tangon)(yankee);
            yankee = yankee.hideActionSheet;
            oscard['onDismiss'] = yankee;
            oscard['quest'] = report;
            oscard['questContent'] = offset;
            oscard['questContentPosition'] = verify;
            oscard['requiresPlatformSelection'] = result;
            oscard['selectedPlatformType'] = quebec;
            oscard['redemptionLink'] = output;
            source = golfie.bind(option)(oscard);
            verify = _closure1_slot4;
            option = verify.useCallback;
            golfie = new Array(1);
            golfie[0] = cntext;
            oscard = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00010_ip = 166; continue _fun00009 }
 16:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 20;
                    zuuluu = verify[zuuluu];
                    golfie = undefined;
                    tangon = option.bind(golfie)(zuuluu);
                    zuuluu = tangon.copy;
                    michal = _closure2_slot1;
                    michal = michal.code;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = _closure1_slot1;
                    entity = 21;
                    entity = verify[entity];
                    zuuluu = michal.bind(golfie)(entity);
                    michal = zuuluu.open;
                    entity = {};
                    tangon = 'TOAST_QUEST_REWARD_CODE_COPIED';
                    entity['key'] = tangon;
                    tangon = 22;
                    report = verify[tangon];
                    report = option.bind(golfie)(report);
                    oscard = report.intl;
                    report = oscard.string;
                    tangon = verify[tangon];
                    tangon = option.bind(golfie)(tangon);
                    tangon = tangon.t;
                    tangon = tangon.MSaeTU;
                    tangon = report.bind(oscard)(tangon);
                    entity['content'] = tangon;
                    tangon = function() { // Original name: icon
                        tangon = _closure1_slot9;
                        michal = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 23;
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
 166:
                    entity = undefined;
                    return entity;
                }
            };
            variable40 = option.bind(verify)(oscard, golfie);
            entity = entity[zuuluu];
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.getRewardCodeRedemptionInstructions;
            entity = {};
            entity['quest'] = report;
            entity['rewardCode'] = cntext;
            entity['selectedPlatformType'] = quebec;
            entity['sharedQuestFields'] = equals;
            target = michal.bind(zuuluu)(entity);
            if(ctrled) { _fun00004_ip = 700; continue _fun00003 }
 697:
            ctrled = record;
 700:
            if(ctrled) { _fun00004_ip = 723; continue _fun00003 }
 703:
            entity = result;
            if(!entity) { _fun00004_ip = 713; continue _fun00003 }
 709:
            entity = kiloes == quebec;
 713:
            if(!entity) { _fun00004_ip = 720; continue _fun00003 }
 716:
            entity = kiloes == cntext;
 720:
            ctrled = entity;
 723:
            if(ctrled) { _fun00004_ip = 753; continue _fun00003 }
 726:
            entity = !result;
            if(result) { _fun00004_ip = 750; continue _fun00003 }
 732:
            zuuluu = kiloes == cntext;
            michal = undefined;
            if(zuuluu) { _fun00004_ip = 746; continue _fun00003 }
 741:
            michal = cntext.code;
 746:
            entity = kiloes == michal;
 750:
            ctrled = entity;
 753:
            zuuluu = _closure1_slot9;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            status = 24;
            entity = option[status];
            entity = oscard.bind(tangon)(entity);
            michal = entity.BottomSheet;
            entity = {};
            golfie = _closure1_slot9;
            report = 25;
            report = option[report];
            report = oscard.bind(tangon)(report);
            oscard = report.BottomSheetTitleHeader;
            report = {};
            verify = _closure1_slot0;
            option = _closure1_slot2;
            update = 22;
            offset = option[update];
            offset = verify.bind(tangon)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            option = option[update];
            option = verify.bind(tangon)(option);
            verify = option.t;
            if(result) { _fun00004_ip = 871; continue _fun00003 }
 856:
            option = verify.srzsU1;
            option = offset.bind(yankee)(option);
            _fun00004_ip = 884; continue _fun00003;
 871:
            verify = verify.JRU8dn;
            option = offset.bind(yankee)(verify);
 884:
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
            if(result) { _fun00004_ip = 1423; continue _fun00003 }
 935:
            verify = _closure1_slot6;
            option = {};
            foxtra = kiloes != cntext;
            if(!foxtra) { _fun00004_ip = 952; continue _fun00003 }
 948:
            foxtra = kiloes != target;
 952:
            if(!foxtra) { _fun00004_ip = 1056; continue _fun00003 }
 955:
            vacuum = _closure1_slot9;
            backup = _closure1_slot0;
            papara = _closure1_slot2;
            offset = 26;
            offset = papara[offset];
            offset = backup.bind(tangon)(offset);
            backup = offset.Text;
            offset = {'style': null, 'variant': 'text-md/normal', 'color': 'text-normal'};
            sequen = romeon.redemptionInstructions;
            offset['style'] = sequen;
            config = _closure1_slot1;
            sequen = 29;
            sequen = papara[sequen];
            papara = config.bind(tangon)(sequen);
            config = papara.parse;
            sequen = {};
            sequen['allowLinks'] = echoed;
            sequen = config.bind(papara)(target, echoed, sequen);
            offset['children'] = sequen;
            foxtra = vacuum.bind(tangon)(backup, offset);
 1056:
            offset = new Array(2);
            offset[0] = foxtra;
            vacuum = _closure1_slot10;
            backup = _closure1_slot6;
            foxtra = {};
            config = _closure1_slot9;
            sequen = {};
            target = kiloes == cntext;
            papara = undefined;
            if(target) { _fun00004_ip = 1094; continue _fun00003 }
 1089:
            papara = cntext.code;
 1094:
            papara = kiloes == papara;
            if(!papara) { _fun00004_ip = 1107; continue _fun00003 }
 1101:
            papara = romeon.codeCopyWrapperLoading;
 1107:
            sequen['style'] = papara;
            sierra = _closure1_slot9;
            variable36 = _closure1_slot0;
            limora = _closure1_slot2;
            papara = 30;
            papara = limora[papara];
            papara = variable36.bind(tangon)(papara);
            target = papara.TableRowGroup;
            papara = {};
            variable38 = _closure1_slot9;
            variable41 = 31;
            limora = limora[variable41];
            limora = variable36.bind(tangon)(limora);
            variable36 = limora.TableRow;
            limora = {};
            variable42 = kiloes == cntext;
            variable39 = undefined;
            if(variable42) { _fun00004_ip = 1181; continue _fun00003 }
 1176:
            variable39 = cntext.code;
 1181:
            limora['label'] = variable39;
            variable42 = kiloes == cntext;
            variable39 = undefined;
            if(variable42) { _fun00004_ip = 1199; continue _fun00003 }
 1194:
            variable39 = cntext.code;
 1199:
            variable39 = kiloes != variable39;
            if(!variable39) { _fun00004_ip = 1270; continue _fun00003 }
 1206:
            variable43 = _closure1_slot9;
            variable45 = _closure1_slot0;
            variable46 = _closure1_slot2;
            variable41 = variable46[variable41];
            variable41 = variable45.bind(tangon)(variable41);
            variable41 = variable41.TableRow;
            variable42 = variable41.Icon;
            variable41 = {};
            variable44 = 23;
            variable44 = variable46[variable44];
            variable44 = variable45.bind(tangon)(variable44);
            variable44 = variable44.CopyIcon;
            variable41['IconComponent'] = variable44;
            variable39 = variable43.bind(tangon)(variable42, variable41);
 1270:
            limora['trailing'] = variable39;
            variable41 = kiloes == cntext;
            variable39 = undefined;
            if(variable41) { _fun00004_ip = 1289; continue _fun00003 }
 1284:
            variable39 = cntext.code;
 1289:
            variable41 = kiloes != variable39;
            variable39 = undefined;
            if(!variable41) { _fun00004_ip = 1301; continue _fun00003 }
 1298:
            variable39 = variable40;
 1301:
            limora['onPress'] = variable39;
            limora = variable38.bind(tangon)(variable36, limora);
            papara['children'] = limora;
            papara = sierra.bind(tangon)(target, papara);
            sequen['children'] = papara;
            config = config.bind(tangon)(backup, sequen);
            sequen = new Array(2);
            sequen[0] = config;
            papara = kiloes == cntext;
            config = undefined;
            if(papara) { _fun00004_ip = 1353; continue _fun00003 }
 1348:
            config = cntext.code;
 1353:
            config = kiloes == config;
            if(!config) { _fun00004_ip = 1390; continue _fun00003 }
 1360:
            target = _closure1_slot9;
            papara = _closure1_slot5;
            cntext = {};
            sierra = romeon.claimingIndicator;
            cntext['style'] = sierra;
            cntext['size'] = status;
            config = target.bind(tangon)(papara, cntext);
 1390:
            sequen[1] = config;
            foxtra['children'] = sequen;
            foxtra = vacuum.bind(tangon)(backup, foxtra);
            offset[1] = foxtra;
            option['children'] = offset;
            verify = yankee.bind(tangon)(verify, option);
            _fun00004_ip = 1813; continue _fun00003;
 1423:
            offset = _closure1_slot11;
            option = {};
            vacuum = _closure1_slot9;
            config = _closure1_slot0;
            sequen = _closure1_slot2;
            foxtra = 26;
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
            target = equals.defaultReward;
            target = target.messages;
            target = target.name;
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
            if(!record) { _fun00004_ip = 1601; continue _fun00003 }
 1595:
            target = romeon.platformSelectClaiming;
 1601:
            config['style'] = target;
            limora = _closure1_slot9;
            variable39 = _closure1_slot0;
            variable36 = _closure1_slot2;
            target = 27;
            target = variable36[target];
            target = variable39.bind(tangon)(target);
            sierra = target.TableRadioGroup;
            target = {};
            target['onChange'] = variable37;
            variable37 = variable36[update];
            variable37 = variable39.bind(tangon)(variable37);
            variable38 = variable37.intl;
            variable37 = variable38.string;
            variable36 = variable36[update];
            variable36 = variable39.bind(tangon)(variable36);
            variable36 = variable36.t;
            variable36 = variable36.vVcTtL;
            variable36 = variable37.bind(variable38)(variable36);
            target['title'] = variable36;
            target['value'] = quebec;
            target['hasIcons'] = echoed;
            quebec = equals.rewardPlatforms;
            equals = quebec.map;
            whisks = function(argFoo) {
                report = argFoo;
                tangon = _closure1_slot9;
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                entity = 28;
                entity = option[entity];
                zuuluu = undefined;
                entity = golfie.bind(zuuluu)(entity);
                michal = entity.TableRadioRow;
                entity = {};
                oscard = _closure1_slot13;
                oscard = oscard.bind(zuuluu)(report);
                entity['icon'] = oscard;
                oscard = 18;
                oscard = option[oscard];
                golfie = golfie.bind(zuuluu)(oscard);
                oscard = golfie.getPlatformString;
                oscard = oscard.bind(golfie)(report);
                entity['label'] = oscard;
                entity['value'] = report;
                entity = tangon.bind(zuuluu)(michal, entity, report);
                return entity;
            };
            whisks = equals.bind(quebec)(whisks);
            target['children'] = whisks;
            target = limora.bind(tangon)(sierra, target);
            config['children'] = target;
            cntext = papara.bind(tangon)(cntext, config);
            config = new Array(2);
            config[0] = cntext;
            if(!record) { _fun00004_ip = 1785; continue _fun00003 }
 1755:
            target = _closure1_slot9;
            papara = _closure1_slot5;
            cntext = {};
            sierra = romeon.claimingIndicator;
            cntext['style'] = sierra;
            cntext['size'] = status;
            record = target.bind(tangon)(papara, cntext);
 1785:
            config[1] = record;
            backup['children'] = config;
            backup = sequen.bind(tangon)(vacuum, backup);
            foxtra[1] = backup;
            option['children'] = foxtra;
            verify = yankee.bind(tangon)(offset, option);
 1813:
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
            romeon = 32;
            romeon = vacuum[romeon];
            romeon = foxtra.bind(tangon)(romeon);
            foxtra = romeon.Button;
            romeon = {};
            romeon['disabled'] = ctrled;
            romeon['onPress'] = source;
            romeon['grow'] = echoed;
            if(result) { _fun00004_ip = 2014; continue _fun00003 }
 1892:
            if(!(kiloes != output)) { _fun00004_ip = 1904; continue _fun00003 }
 1896:
            kiloes = '';
            if(!(kiloes === output)) { _fun00004_ip = 1960; continue _fun00003 }
 1904:
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
            _fun00004_ip = 2012; continue _fun00003;
 1960:
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
 2012:
            _fun00004_ip = 2068; continue _fun00003;
 2014:
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
 2068:
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
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot9 = golfie;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsxs;
    var _closure1_slot10 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
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
    tangon = 34;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: QuestRewardCodeClaimBottomSheetConnected
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
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
            if(!(michal != offset)) { _fun00012_ip = 173; continue _fun00011 }
 100:
            oscard = _closure1_slot9;
            tangon = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 33;
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
            _fun00012_ip = 205; continue _fun00011;
 173:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 19;
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