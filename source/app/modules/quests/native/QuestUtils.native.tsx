// app/modules/quests/native/QuestUtils.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    report = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = report;
    var _closure1_slot2 = options;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = options[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    report = tango.QuestsExperimentLocations;
    var _closure1_slot4 = report;
    tango = tango.QUEST_REWARD_CODE_CLAIM_BOTTOM_SHEET_KEY;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.UserSettingsSections;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.GlobalDiscoveryTab;
    var _closure1_slot7 = tango;
    report = function(argFoo) { // Original name: viewReward
        _fun91196: for(var _fun91196_ip = 0; ; ) switch(_fun91196_ip) {
 0:
            entity = argFoo;
            options = entity.quest;
            verify = entity.product;
            golf = entity.questContent;
            mike = entity.questContentPosition;
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 4;
            zulu = zulu[entity];
            entity = undefined;
            oscar = report.bind(entity)(zulu);
            report = oscar.hasQuestRewardCode;
            zulu = options.config;
            zulu = report.bind(oscar)(zulu);
            if(zulu) { _fun91196_ip = 116; continue _fun91196 }
 71:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 8;
            zulu = oscar[zulu];
            oscar = report.bind(entity)(zulu);
            report = oscar.openQuestCollectibleRewardModal;
            zulu = {};
            zulu['quest'] = options;
            zulu['product'] = verify;
            zulu = report.bind(oscar)(zulu);
            _fun91196_ip = 211; continue _fun91196;
 116:
            oscar = _closure1_slot1;
            zulu = _closure1_slot2;
            report = 5;
            report = zulu[report];
            oscar = oscar.bind(entity)(report);
            report = oscar.openLazy;
            verify = _closure1_slot0;
            tango = 7;
            tango = zulu[tango];
            verify = verify.bind(entity)(tango);
            tango = 6;
            tango = zulu[tango];
            zulu = zulu.paths;
            tango = verify.bind(entity)(tango, zulu);
            zulu = {};
            options = options.id;
            zulu['questId'] = options;
            zulu['questContent'] = golf;
            zulu['questContentPosition'] = mike;
            mike = 'QuestRewardCodeClaimBottomSheet';
            mike = report.bind(oscar)(tango, mike, zulu);
 211:
            return entity;
        }
    };
    var _closure1_slot8 = report;
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun91199: for(var _fun91199_ip = 0; ; ) switch(_fun91199_ip) {
 0:
                    StartGenerator();
                    golf = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun91199_ip = 340; continue _fun91199 }
 13:
                    report = golf;
                    mike = undefined;
                    zulu = undefined;
                    tango = undefined;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    options = 9;
                    options = offset[options];
                    romeo = verify.bind(mike)(options);
                    yankee = romeo.getQuestLogger;
                    options = {};
                    foxtrot = _closure1_slot4;
                    foxtrot = foxtrot.QUEST_HOME_MOBILE;
                    options['location'] = foxtrot;
                    zulu = yankee.bind(romeo)(options);
                    options = 10;
                    options = offset[options];
                    options = verify.bind(mike)(options);
                    verify = options.SharedQuestFields;
                    options = verify.build;
                    golf = golf.config;
                    golf = options.bind(verify)(golf);
                    options = golf.rewardPlatforms;
                    golf = 0;
                    tango = options[golf];
 118: // try_start_0
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    golf = 11;
                    golf = yankee[golf];
                    verify = offset.bind(mike)(golf);
                    options = verify.claimQuestReward;
                    golf = report.id;
                    report = tango;
                    tango = 12;
                    tango = yankee[tango];
                    tango = offset.bind(mike)(tango);
                    tango = tango.QuestContent;
                    tango = tango.QUEST_HOME_MOBILE;
                    tango = options.bind(verify)(golf, report, tango);
                    SaveGenerator(address=187);
 185:
                    return tango;
 187:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun91199_ip = 198; continue _fun91199 }
 193: // try_end0
                    _fun91199_ip = 337; continue _fun91199;
 198:
                    return tango;
 201: // catch_target0
                    CatchBlockStart(arg_register=6);
                    report = zulu;
                    tango = report.error;
                    zulu = 'Error claiming reward';
                    zulu = tango.bind(report)(zulu, golf);
                    golf = _closure1_slot1;
                    options = _closure1_slot2;
                    zulu = 13;
                    zulu = options[zulu];
                    report = golf.bind(mike)(zulu);
                    tango = report.open;
                    zulu = {};
                    verify = 'CLAIM_QUEST_REWARD_ERROR';
                    zulu['key'] = verify;
                    yankee = _closure1_slot0;
                    oscar = 14;
                    verify = options[oscar];
                    verify = yankee.bind(mike)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    oscar = options[oscar];
                    oscar = yankee.bind(mike)(oscar);
                    oscar = oscar.t;
                    oscar = oscar.CKsXk5;
                    oscar = verify.bind(offset)(oscar);
                    zulu['content'] = oscar;
                    oscar = 15;
                    oscar = options[oscar];
                    oscar = golf.bind(mike)(oscar);
                    zulu['icon'] = oscar;
                    zulu = tango.bind(report)(zulu);
 337:
                    return mike;
 340:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot9 = tango;
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun91203: for(var _fun91203_ip = 0; ; ) switch(_fun91203_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun91203_ip = 293; continue _fun91203 }
 13:
                    yankee = mike.quest;
                    offset = mike.questContent;
                    verify = mike.questContentPosition;
                    options = mike.product;
                    report = mike.hideActionSheet;
                    zulu = undefined;
                    SaveGenerator(address=49);
 47:
                    return zulu;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun91203_ip = 290; continue _fun91203 }
 58:
                    tango = true;
                    if(!(tango === report)) { _fun91203_ip = 97; continue _fun91203 }
 64:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 5;
                    tango = oscar[tango];
                    report = report.bind(zulu)(tango);
                    tango = report.hideActionSheet;
                    tango = tango.bind(report)();
 97:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    report = 4;
                    report = golf[report];
                    golf = oscar.bind(zulu)(report);
                    oscar = golf.hasQuestRewardCode;
                    report = yankee.config;
                    report = oscar.bind(golf)(report);
                    if(report) { _fun91203_ip = 194; continue _fun91203 }
 139:
                    report = _closure1_slot9;
                    report = report.bind(zulu)(yankee);
                    SaveGenerator(address=152);
 150:
                    return report;
 152:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscar) { _fun91203_ip = 191; continue _fun91203 }
 158:
                    golf = _closure1_slot8;
                    oscar = {};
                    oscar['quest'] = yankee;
                    oscar['product'] = options;
                    oscar['questContent'] = offset;
                    oscar['questContentPosition'] = verify;
                    oscar = golf.bind(zulu)(oscar);
                    _fun91203_ip = 287; continue _fun91203;
 191:
                    return report;
 194:
                    golf = _closure1_slot1;
                    report = _closure1_slot2;
                    oscar = 5;
                    oscar = report[oscar];
                    options = golf.bind(zulu)(oscar);
                    golf = options.openLazy;
                    romeo = _closure1_slot0;
                    oscar = 7;
                    oscar = report[oscar];
                    romeo = romeo.bind(zulu)(oscar);
                    oscar = 6;
                    oscar = report[oscar];
                    report = report.paths;
                    oscar = romeo.bind(zulu)(oscar, report);
                    report = _closure1_slot5;
                    tango = {};
                    yankee = yankee.id;
                    tango['questId'] = yankee;
                    tango['questContent'] = offset;
                    tango['questContentPosition'] = verify;
                    tango = golf.bind(options)(oscar, report, tango);
 287:
                    return zulu;
 290:
                    return mike;
 293:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    tango = tango.bind(entity)();
    oscar = 20;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/quests/native/QuestUtils.native.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['viewReward'] = report;
    zulu['handleRewardClaimThenView'] = tango;
    mike = function() {
        _fun91205: for(var _fun91205_ip = 0; ; ) switch(_fun91205_ip) {
 0:
            zulu = arguments[0];
            entity = undefined;
            if(!(zulu === entity)) { _fun91205_ip = 13; continue _fun91205 }
 11:
            zulu = {};
 13:
            oscar = zulu.scrollToQuestId;
            var _closure2_slot0 = oscar;
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 16;
            zulu = golf[zulu];
            zulu = tango.bind(entity)(zulu);
            zulu = zulu.bind(entity)();
            tango = _closure1_slot0;
            zulu = 17;
            zulu = golf[zulu];
            golf = tango.bind(entity)(zulu);
            tango = golf.getIsMobileGlobalDiscoveryEnabled;
            zulu = {};
            options = 'openQuestHome';
            zulu['location'] = options;
            zulu = tango.bind(golf)(zulu);
            if(zulu) { _fun91205_ip = 116; continue _fun91205 }
 90:
            zulu = global;
            tango = zulu.setTimeout;
            zulu = function() {
                _fun91206: for(var _fun91206_ip = 0; ; ) switch(_fun91206_ip) {
 0:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 19;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.openUserSettings;
                    mike = {};
                    report = _closure1_slot6;
                    report = report.QUESTS;
                    mike['screen'] = report;
                    golf = _closure2_slot0;
                    report = null;
                    golf = report != golf;
                    report = '';
                    if(!golf) { _fun91206_ip = 72; continue _fun91206 }
 68:
                    report = _closure2_slot0;
 72:
                    mike['subsection'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            mike = 1;
            mike = tango.bind(entity)(zulu, mike);
            _fun91205_ip = 175; continue _fun91205;
 116:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 18;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.navigateToGlobalDiscovery;
            mike = {};
            report = _closure1_slot7;
            report = report.QUESTS;
            mike['initialTab'] = report;
            report = {};
            report['scrollToQuestId'] = oscar;
            mike['options'] = report;
            mike = zulu.bind(tango)(mike);
 175:
            return entity;
        }
    };
    zulu['openQuestHome'] = mike;
    return entity;
})();