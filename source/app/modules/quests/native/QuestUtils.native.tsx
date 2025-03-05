// app/modules/quests/native/QuestUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    report = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = report;
    var _closure1_slot2 = option;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    report = tangon.QuestsExperimentLocations;
    var _closure1_slot4 = report;
    tangon = tangon.QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.UserSettingsSections;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.GlobalDiscoveryTab;
    var _closure1_slot7 = tangon;
    report = function(argFoo) { // Original name: viewReward
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            option = entity.quest;
            verify = entity.product;
            golfie = entity.questContent;
            michal = entity.questContentPosition;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 4;
            zuuluu = zuuluu[entity];
            entity = undefined;
            oscard = report.bind(entity)(zuuluu);
            report = oscard.hasQuestRewardCode;
            zuuluu = option.config;
            zuuluu = report.bind(oscard)(zuuluu);
            if(zuuluu) { _fun00002_ip = 116; continue _fun00001 }
 71:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 8;
            zuuluu = oscard[zuuluu];
            oscard = report.bind(entity)(zuuluu);
            report = oscard.openQuestCollectibleRewardModal;
            zuuluu = {};
            zuuluu['quest'] = option;
            zuuluu['product'] = verify;
            zuuluu = report.bind(oscard)(zuuluu);
            _fun00002_ip = 211; continue _fun00001;
 116:
            oscard = _closure1_slot1;
            zuuluu = _closure1_slot2;
            report = 5;
            report = zuuluu[report];
            oscard = oscard.bind(entity)(report);
            report = oscard.openLazy;
            verify = _closure1_slot0;
            tangon = 7;
            tangon = zuuluu[tangon];
            verify = verify.bind(entity)(tangon);
            tangon = 6;
            tangon = zuuluu[tangon];
            zuuluu = zuuluu.paths;
            tangon = verify.bind(entity)(tangon, zuuluu);
            zuuluu = {};
            option = option.id;
            zuuluu['questId'] = option;
            zuuluu['questContent'] = golfie;
            zuuluu['questContentPosition'] = michal;
            michal = 'QuestRewardCodeClaimBottomSheet';
            michal = report.bind(oscard)(tangon, michal, zuuluu);
 211:
            return entity;
        }
    };
    var _closure1_slot8 = report;
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 342; continue _fun00003 }
 13:
                    tangon = oscard;
                    golfie = undefined;
                    michal = undefined;
                    zuuluu = undefined;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 9;
                    option = offset[option];
                    romeon = verify.bind(golfie)(option);
                    yankee = romeon.getQuestLogger;
                    option = {};
                    foxtra = _closure1_slot4;
                    foxtra = foxtra.QUEST_HOME_MOBILE;
                    option['location'] = foxtra;
                    michal = yankee.bind(romeon)(option);
                    option = 10;
                    option = offset[option];
                    option = verify.bind(golfie)(option);
                    verify = option.SharedQuestFields;
                    option = verify.build;
                    oscard = oscard.config;
                    oscard = option.bind(verify)(oscard);
                    option = oscard.rewardPlatforms;
                    oscard = 0;
                    zuuluu = option[oscard];
 118: // try_start_0
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscard = 11;
                    oscard = yankee[oscard];
                    verify = offset.bind(golfie)(oscard);
                    option = verify.claimQuestReward;
                    oscard = tangon.id;
                    tangon = zuuluu;
                    zuuluu = 12;
                    zuuluu = yankee[zuuluu];
                    zuuluu = offset.bind(golfie)(zuuluu);
                    zuuluu = zuuluu.QuestContent;
                    zuuluu = zuuluu.QUEST_HOME_MOBILE;
                    zuuluu = option.bind(verify)(oscard, tangon, zuuluu);
                    SaveGenerator(address=187);
 185:
                    return zuuluu;
 187:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 198; continue _fun00003 }
 193: // try_end0
                    tangon = true;
                    return tangon;
 198:
                    return zuuluu;
 201: // catch_target0
                    CatchBlockStart(arg_register=5);
                    tangon = michal;
                    zuuluu = tangon.error;
                    michal = 'Error claiming reward';
                    michal = zuuluu.bind(tangon)(michal, oscard);
                    oscard = _closure1_slot1;
                    option = _closure1_slot2;
                    michal = 13;
                    michal = option[michal];
                    tangon = oscard.bind(golfie)(michal);
                    zuuluu = tangon.open;
                    michal = {};
                    verify = 'CLAIM_QUEST_REWARD_ERROR';
                    michal['key'] = verify;
                    yankee = _closure1_slot0;
                    report = 14;
                    verify = option[report];
                    verify = yankee.bind(golfie)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    report = option[report];
                    report = yankee.bind(golfie)(report);
                    report = report.t;
                    report = report.CKsXk5;
                    report = verify.bind(offset)(report);
                    michal['content'] = report;
                    report = 15;
                    report = option[report];
                    report = oscard.bind(golfie)(report);
                    michal['icon'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = false;
                    return michal;
 342:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot9 = tangon;
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 424; continue _fun00005 }
 13:
                    yankee = michal.quest;
                    offset = michal.questContent;
                    verify = michal.questContentPosition;
                    option = michal.product;
                    tangon = michal.hideActionSheet;
                    report = michal.currentUserHasVerifiedEmailOrPhone;
                    foxtra = undefined;
                    SaveGenerator(address=55);
 53:
                    return foxtra;
 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 421; continue _fun00005 }
 64:
                    zuuluu = true;
                    if(!(zuuluu === tangon)) { _fun00006_ip = 103; continue _fun00005 }
 70:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 5;
                    tangon = golfie[tangon];
                    oscard = oscard.bind(foxtra)(tangon);
                    tangon = oscard.hideActionSheet;
                    tangon = tangon.bind(oscard)();
 103:
                    if(report) { _fun00006_ip = 230; continue _fun00005 }
 109:
                    backup = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    report = 13;
                    report = kiloes[report];
                    golfie = backup.bind(foxtra)(report);
                    oscard = golfie.open;
                    report = {};
                    romeon = 'CLAIM_QUEST_REWARD_ERROR';
                    report['key'] = romeon;
                    result = _closure1_slot0;
                    romeon = 14;
                    sizing = kiloes[romeon];
                    sizing = result.bind(foxtra)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    romeon = kiloes[romeon];
                    romeon = result.bind(foxtra)(romeon);
                    romeon = romeon.t;
                    romeon = romeon.HZlu09;
                    romeon = sizing.bind(output)(romeon);
                    report['content'] = romeon;
                    romeon = 15;
                    romeon = kiloes[romeon];
                    romeon = backup.bind(foxtra)(romeon);
                    report['icon'] = romeon;
                    report = oscard.bind(golfie)(report);
                    report = false;
                    return report;
 230:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = 4;
                    report = golfie[report];
                    golfie = oscard.bind(foxtra)(report);
                    oscard = golfie.hasQuestRewardCode;
                    report = yankee.config;
                    report = oscard.bind(golfie)(report);
                    if(report) { _fun00006_ip = 325; continue _fun00005 }
 269:
                    report = _closure1_slot9;
                    report = report.bind(foxtra)(yankee);
                    SaveGenerator(address=282);
 280:
                    return report;
 282:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscard) { _fun00006_ip = 322; continue _fun00005 }
 288:
                    golfie = _closure1_slot8;
                    oscard = {};
                    oscard['quest'] = yankee;
                    oscard['product'] = option;
                    oscard['questContent'] = offset;
                    oscard['questContentPosition'] = verify;
                    oscard = golfie.bind(foxtra)(oscard);
                    return report;
 322:
                    return report;
 325:
                    golfie = _closure1_slot1;
                    report = _closure1_slot2;
                    oscard = 5;
                    oscard = report[oscard];
                    option = golfie.bind(foxtra)(oscard);
                    golfie = option.openLazy;
                    romeon = _closure1_slot0;
                    oscard = 7;
                    oscard = report[oscard];
                    romeon = romeon.bind(foxtra)(oscard);
                    oscard = 6;
                    oscard = report[oscard];
                    report = report.paths;
                    oscard = romeon.bind(foxtra)(oscard, report);
                    report = _closure1_slot5;
                    tangon = {};
                    yankee = yankee.id;
                    tangon['questId'] = yankee;
                    tangon['questContent'] = offset;
                    tangon['questContentPosition'] = verify;
                    tangon = golfie.bind(option)(oscard, report, tangon);
                    return zuuluu;
 421:
                    return michal;
 424:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    tangon = tangon.bind(entity)();
    oscard = 20;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/quests/native/QuestUtils.native.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['viewReward'] = report;
    zuuluu['handleRewardClaimThenView'] = tangon;
    michal = function() {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = arguments[0];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00008_ip = 13; continue _fun00007 }
 11:
            zuuluu = {};
 13:
            oscard = zuuluu.scrollToQuestId;
            var _closure2_slot0 = oscard;
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 16;
            zuuluu = golfie[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = zuuluu.bind(entity)();
            tangon = _closure1_slot0;
            zuuluu = 17;
            zuuluu = golfie[zuuluu];
            golfie = tangon.bind(entity)(zuuluu);
            tangon = golfie.getIsMobileGlobalDiscoveryEnabled;
            zuuluu = {};
            option = 'openQuestHome';
            zuuluu['location'] = option;
            zuuluu = tangon.bind(golfie)(zuuluu);
            if(zuuluu) { _fun00008_ip = 116; continue _fun00007 }
 90:
            zuuluu = global;
            tangon = zuuluu.setTimeout;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 19;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.openUserSettings;
                    michal = {};
                    report = _closure1_slot6;
                    report = report.QUESTS;
                    michal['screen'] = report;
                    golfie = _closure2_slot0;
                    report = null;
                    golfie = report != golfie;
                    report = '';
                    if(!golfie) { _fun00010_ip = 72; continue _fun00009 }
 68:
                    report = _closure2_slot0;
 72:
                    michal['subsection'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            michal = 1;
            michal = tangon.bind(entity)(zuuluu, michal);
            _fun00008_ip = 175; continue _fun00007;
 116:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 18;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.navigateToGlobalDiscovery;
            michal = {};
            report = _closure1_slot7;
            report = report.QUESTS;
            michal['initialTab'] = report;
            report = {};
            report['scrollToQuestId'] = oscard;
            michal['options'] = report;
            michal = zuuluu.bind(tangon)(michal);
 175:
            return entity;
        }
    };
    zuuluu['openQuestHome'] = michal;
    return entity;
})();