// app/modules/quests/hooks/QuestCopyHooks.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot7;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot7;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: formatWithOrWithoutMarkdown
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            tango = argBar;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.intl;
            entity = argBaz;
            if(entity) { _fun00008_ip = 55; continue _fun00007 }
 42:
            entity = zulu.formatToPlainString;
            entity = entity.bind(zulu)(report, tango);
            _fun00008_ip = 67; continue _fun00007;
 55:
            mike = zulu.formatToParts;
            entity = mike.bind(zulu)(report, tango);
 67:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: _getQuestsInstructionsToWinReward
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            oscar = entity.quest;
            golf = entity.taskDetails;
            zulu = entity.thirdPartyTaskDetails;
            report = entity.withoutMarkdown;
            entity = entity.withSimplifiedCopy;
            if(!entity) { _fun00010_ip = 101; continue _fun00009 }
 36:
            mike = _closure1_slot11;
            tango = undefined;
            options = mike.bind(tango)(oscar);
            mike = _closure1_slot5;
            mike = mike.PLAY;
            if(!(mike !== options)) { _fun00010_ip = 2119; continue _fun00009 }
 67:
            mike = _closure1_slot5;
            mike = mike.STREAM;
            if(!(mike !== options)) { _fun00010_ip = 2038; continue _fun00009 }
 84:
            mike = _closure1_slot5;
            mike = mike.WATCH_VIDEO;
            if(!(mike !== options)) { _fun00010_ip = 1926; continue _fun00009 }
 101:
            mike = oscar.config;
            mike = mike.messages;
            backup = mike.gameTitle;
            foxtrot = golf.targetMinutes;
            verify = _closure1_slot0;
            options = _closure1_slot1;
            output = 4;
            yankee = options[output];
            offset = undefined;
            kilo = verify.bind(offset)(yankee);
            romeo = kilo.getCollectibleQuestRewardDuration;
            yankee = oscar.config;
            romeo = romeo.bind(kilo)(yankee);
            options = options[output];
            verify = verify.bind(offset)(options);
            options = verify.isConsoleQuest;
            options = options.bind(verify)(oscar);
            if(!options) { _fun00010_ip = 222; continue _fun00009 }
 188:
            verify = _closure1_slot0;
            options = _closure1_slot1;
            options = options[output];
            verify = verify.bind(offset)(options);
            options = verify.shouldUsePlayOnDesktopTask;
            options = options.bind(verify)(oscar);
            if(options) { _fun00010_ip = 1612; continue _fun00009 }
 222:
            verify = _closure1_slot0;
            options = _closure1_slot1;
            options = options[output];
            verify = verify.bind(offset)(options);
            options = verify.isConsoleQuest;
            options = options.bind(verify)(oscar);
            if(options) { _fun00010_ip = 1334; continue _fun00009 }
 256:
            verify = _closure1_slot0;
            options = _closure1_slot1;
            options = options[output];
            verify = verify.bind(offset)(options);
            options = verify.shouldUsePlayOnDesktopTask;
            options = options.bind(verify)(oscar);
            if(options) { _fun00010_ip = 1045; continue _fun00009 }
 290:
            verify = _closure1_slot0;
            options = _closure1_slot1;
            options = options[output];
            yankee = verify.bind(offset)(options);
            verify = yankee.isTieredRewardCodeQuest;
            options = {};
            options['quest'] = oscar;
            options = verify.bind(yankee)(options);
            if(options) { _fun00010_ip = 929; continue _fun00009 }
 331:
            verify = _closure1_slot0;
            options = _closure1_slot1;
            options = options[output];
            verify = verify.bind(offset)(options);
            options = verify.hasWatchVideoTasks;
            options = options.bind(verify)(oscar);
            if(options) { _fun00010_ip = 771; continue _fun00009 }
 365:
            verify = _closure1_slot0;
            options = _closure1_slot1;
            options = options[output];
            verify = verify.bind(offset)(options);
            options = verify.hasPlayActivityTask;
            options = options.bind(verify)(oscar);
            if(options) { _fun00010_ip = 620; continue _fun00009 }
 399:
            options = null;
            if(!(options == zulu)) { _fun00010_ip = 613; continue _fun00009 }
 408:
            yankee = _closure1_slot0;
            verify = _closure1_slot1;
            verify = verify[output];
            kilo = yankee.bind(offset)(verify);
            yankee = kilo.isCollectibleQuestRewardPremiumExtendable;
            verify = oscar.config;
            yankee = yankee.bind(kilo)(verify);
            kilo = _closure1_slot0;
            verify = _closure1_slot1;
            sizing = 2;
            verify = verify[sizing];
            verify = kilo.bind(offset)(verify);
            verify = verify.t;
            if(yankee) { _fun00010_ip = 479; continue _fun00009 }
 469:
            yankee = verify.BLyDvL;
            _fun00010_ip = 487; continue _fun00009;
 479:
            yankee = verify.KYP2pa;
 487:
            verify = _closure1_slot8;
            if(!(options == romeo)) { _fun00010_ip = 523; continue _fun00009 }
 495:
            kilo = _closure1_slot0;
            options = _closure1_slot1;
            options = options[sizing];
            options = kilo.bind(offset)(options);
            options = options.t;
            yankee = options.hkJ+Gh;
 523:
            options = {};
            options['gameTitle'] = backup;
            options['streamingDurationRequirement'] = foxtrot;
            backup = _closure1_slot0;
            kilo = _closure1_slot1;
            foxtrot = 3;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(offset)(foxtrot);
            kilo = foxtrot.SharedQuestFields;
            backup = kilo.build;
            foxtrot = oscar.config;
            foxtrot = backup.bind(kilo)(foxtrot);
            foxtrot = foxtrot.defaultReward;
            foxtrot = foxtrot.messages;
            foxtrot = foxtrot.nameWithArticle;
            options['questReward'] = foxtrot;
            options['duration'] = romeo;
            options = verify.bind(offset)(yankee, options, report);
            return options;
 613:
            zulu = zulu.description;
            return zulu;
 620:
            verify = {};
            verify['quest'] = oscar;
            verify['taskDetails'] = golf;
            verify['withoutMarkdown'] = report;
            zulu = verify.quest;
            options = verify.taskDetails;
            yankee = verify.withoutMarkdown;
            foxtrot = options.targetMinutes;
            options = _closure1_slot0;
            backup = _closure1_slot1;
            verify = 3;
            verify = backup[verify];
            verify = options.bind(offset)(verify);
            romeo = verify.SharedQuestFields;
            verify = romeo.build;
            zulu = zulu.config;
            zulu = verify.bind(romeo)(zulu);
            zulu = zulu.defaultReward;
            zulu = zulu.messages;
            romeo = zulu.nameWithArticle;
            verify = _closure1_slot8;
            zulu = 2;
            zulu = backup[zulu];
            zulu = options.bind(offset)(zulu);
            zulu = zulu.t;
            options = zulu.VYwSSk;
            zulu = {};
            zulu['streamingDurationRequirement'] = foxtrot;
            zulu['questReward'] = romeo;
            zulu = verify.bind(offset)(options, zulu, yankee);
            return zulu;
 771:
            zulu = oscar.config;
            verify = zulu.videoMetadata;
            options = null;
            yankee = options == verify;
            zulu = undefined;
            if(yankee) { _fun00010_ip = 805; continue _fun00009 }
 793:
            verify = verify.messages;
            zulu = verify.videoTitle;
 805:
            options = options != zulu;
            romeo = 'video';
            if(!options) { _fun00010_ip = 819; continue _fun00009 }
 816:
            romeo = zulu;
 819:
            options = _closure1_slot0;
            foxtrot = _closure1_slot1;
            zulu = 3;
            zulu = foxtrot[zulu];
            zulu = options.bind(offset)(zulu);
            yankee = zulu.SharedQuestFields;
            verify = yankee.build;
            zulu = oscar.config;
            zulu = verify.bind(yankee)(zulu);
            zulu = zulu.defaultReward;
            zulu = zulu.messages;
            yankee = zulu.nameWithArticle;
            verify = _closure1_slot8;
            zulu = 2;
            zulu = foxtrot[zulu];
            zulu = options.bind(offset)(zulu);
            zulu = zulu.t;
            options = zulu.yMsQ7e;
            zulu = {};
            zulu['videoTitle'] = romeo;
            zulu['rewardNameWithArticle'] = yankee;
            zulu = verify.bind(offset)(options, zulu, report);
            return zulu;
 929:
            verify = {};
            verify['quest'] = oscar;
            verify['taskDetails'] = golf;
            verify['withoutMarkdown'] = report;
            zulu = verify.quest;
            options = verify.taskDetails;
            yankee = verify.withoutMarkdown;
            romeo = options.targetMinutes;
            zulu = zulu.config;
            zulu = zulu.messages;
            foxtrot = zulu.gameTitle;
            verify = _closure1_slot8;
            options = _closure1_slot0;
            backup = _closure1_slot1;
            zulu = 2;
            zulu = backup[zulu];
            zulu = options.bind(offset)(zulu);
            zulu = zulu.t;
            options = zulu.a/ia7O;
            zulu = {};
            zulu['gameTitle'] = foxtrot;
            zulu['streamingDurationRequirement'] = romeo;
            zulu = verify.bind(offset)(options, zulu, yankee);
            return zulu;
 1045:
            options = {};
            options['quest'] = oscar;
            options['taskDetails'] = golf;
            options['withoutMarkdown'] = report;
            zulu = options.quest;
            backup = options.taskDetails;
            yankee = options.withoutMarkdown;
            verify = _closure1_slot0;
            options = _closure1_slot1;
            romeo = 3;
            romeo = options[romeo];
            romeo = verify.bind(offset)(romeo);
            kilo = romeo.SharedQuestFields;
            foxtrot = kilo.build;
            romeo = zulu.config;
            romeo = foxtrot.bind(kilo)(romeo);
            romeo = romeo.defaultReward;
            romeo = romeo.messages;
            romeo = romeo.nameWithArticle;
            foxtrot = options[output];
            sizing = verify.bind(offset)(foxtrot);
            kilo = sizing.getCollectibleQuestRewardDuration;
            foxtrot = zulu.config;
            foxtrot = kilo.bind(sizing)(foxtrot);
            backup = backup.targetMinutes;
            kilo = zulu.config;
            kilo = kilo.messages;
            kilo = kilo.gameTitle;
            options = options[output];
            verify = verify.bind(offset)(options);
            options = verify.isCollectibleQuestRewardPremiumExtendable;
            zulu = zulu.config;
            options = options.bind(verify)(zulu);
            verify = _closure1_slot0;
            zulu = _closure1_slot1;
            result = 2;
            zulu = zulu[result];
            zulu = verify.bind(offset)(zulu);
            zulu = zulu.t;
            if(options) { _fun00010_ip = 1251; continue _fun00009 }
 1241:
            verify = zulu.AwuMRU;
            _fun00010_ip = 1259; continue _fun00009;
 1251:
            verify = zulu.Lc6EpK;
 1259:
            options = _closure1_slot8;
            zulu = null;
            if(!(zulu == foxtrot)) { _fun00010_ip = 1299; continue _fun00009 }
 1269:
            sizing = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[result];
            zulu = sizing.bind(offset)(zulu);
            zulu = zulu.t;
            verify = zulu.FZL5Q0;
 1299:
            zulu = {};
            zulu['gameTitle'] = kilo;
            zulu['streamingDurationRequirement'] = backup;
            zulu['rewardNameWithArticle'] = romeo;
            zulu['duration'] = foxtrot;
            zulu['questReward'] = romeo;
            zulu = options.bind(offset)(verify, zulu, yankee);
            return zulu;
 1334:
            options = {};
            options['quest'] = oscar;
            options['taskDetails'] = golf;
            options['withoutMarkdown'] = report;
            zulu = options.quest;
            backup = options.taskDetails;
            yankee = options.withoutMarkdown;
            verify = _closure1_slot0;
            options = _closure1_slot1;
            romeo = 3;
            romeo = options[romeo];
            romeo = verify.bind(offset)(romeo);
            kilo = romeo.SharedQuestFields;
            foxtrot = kilo.build;
            romeo = zulu.config;
            romeo = foxtrot.bind(kilo)(romeo);
            romeo = romeo.defaultReward;
            romeo = romeo.messages;
            foxtrot = romeo.nameWithArticle;
            romeo = options[output];
            sizing = verify.bind(offset)(romeo);
            kilo = sizing.getCollectibleQuestRewardDuration;
            romeo = zulu.config;
            romeo = kilo.bind(sizing)(romeo);
            backup = backup.targetMinutes;
            kilo = zulu.config;
            kilo = kilo.messages;
            kilo = kilo.gameTitle;
            options = options[output];
            verify = verify.bind(offset)(options);
            options = verify.isCollectibleQuestRewardPremiumExtendable;
            zulu = zulu.config;
            options = options.bind(verify)(zulu);
            verify = _closure1_slot0;
            zulu = _closure1_slot1;
            result = 2;
            zulu = zulu[result];
            zulu = verify.bind(offset)(zulu);
            zulu = zulu.t;
            if(options) { _fun00010_ip = 1538; continue _fun00009 }
 1530:
            verify = zulu.Ta44ur;
            _fun00010_ip = 1544; continue _fun00009;
 1538:
            verify = zulu.fSYpaW;
 1544:
            options = _closure1_slot8;
            zulu = null;
            if(!(zulu == romeo)) { _fun00010_ip = 1582; continue _fun00009 }
 1554:
            sizing = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[result];
            zulu = sizing.bind(offset)(zulu);
            zulu = zulu.t;
            verify = zulu.NIimTk;
 1582:
            zulu = {};
            zulu['gameTitle'] = kilo;
            zulu['targetMinutes'] = backup;
            zulu['rewardNameWithArticle'] = foxtrot;
            zulu['duration'] = romeo;
            zulu = options.bind(offset)(verify, zulu, yankee);
            return zulu;
 1612:
            verify = {};
            verify['quest'] = oscar;
            verify['taskDetails'] = golf;
            verify['withoutMarkdown'] = report;
            zulu = verify.quest;
            options = verify.taskDetails;
            verify = verify.withoutMarkdown;
            sizing = _closure1_slot0;
            kilo = _closure1_slot1;
            yankee = 3;
            yankee = kilo[yankee];
            yankee = sizing.bind(offset)(yankee);
            foxtrot = yankee.SharedQuestFields;
            romeo = foxtrot.build;
            yankee = zulu.config;
            yankee = romeo.bind(foxtrot)(yankee);
            yankee = yankee.defaultReward;
            yankee = yankee.messages;
            foxtrot = yankee.nameWithArticle;
            yankee = kilo[output];
            backup = sizing.bind(offset)(yankee);
            romeo = backup.getCollectibleQuestRewardDuration;
            yankee = zulu.config;
            yankee = romeo.bind(backup)(yankee);
            romeo = options.targetMinutes;
            options = zulu.config;
            options = options.messages;
            backup = options.gameTitle;
            options = _closure1_slot8;
            kilo = kilo[output];
            sizing = sizing.bind(offset)(kilo);
            kilo = sizing.isCollectibleQuestRewardPremiumExtendable;
            zulu = zulu.config;
            zulu = kilo.bind(sizing)(zulu);
            if(!zulu) { _fun00010_ip = 1793; continue _fun00009 }
 1787:
            zulu = null;
            if(!(zulu == yankee)) { _fun00010_ip = 1865; continue _fun00009 }
 1793:
            zulu = null;
            if(!(zulu == yankee)) { _fun00010_ip = 1832; continue _fun00009 }
 1799:
            kilo = _closure1_slot0;
            sizing = _closure1_slot1;
            zulu = 2;
            zulu = sizing[zulu];
            zulu = kilo.bind(offset)(zulu);
            zulu = zulu.t;
            zulu = zulu.NIimTk;
            _fun00010_ip = 1863; continue _fun00009;
 1832:
            sizing = _closure1_slot0;
            output = _closure1_slot1;
            kilo = 2;
            kilo = output[kilo];
            kilo = sizing.bind(offset)(kilo);
            kilo = kilo.t;
            zulu = kilo.Ta44ur;
 1863:
            _fun00010_ip = 1896; continue _fun00009;
 1865:
            kilo = _closure1_slot0;
            sizing = _closure1_slot1;
            mike = 2;
            mike = sizing[mike];
            mike = kilo.bind(offset)(mike);
            mike = mike.t;
            zulu = mike.fSYpaW;
 1896:
            mike = {};
            mike['gameTitle'] = backup;
            mike['rewardNameWithArticle'] = foxtrot;
            mike['targetMinutes'] = romeo;
            mike['duration'] = yankee;
            mike = options.bind(offset)(zulu, mike, verify);
            return mike;
 1926:
            options = _closure1_slot8;
            zulu = _closure1_slot0;
            verify = _closure1_slot1;
            mike = 2;
            mike = verify[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.t;
            zulu = mike.zus71N;
            mike = {};
            verify = golf.targetMinutes;
            mike['targetMinutes'] = verify;
            verify = oscar.config;
            yankee = verify.videoMetadata;
            verify = null;
            romeo = verify == yankee;
            offset = undefined;
            if(romeo) { _fun00010_ip = 2010; continue _fun00009 }
 1998:
            yankee = yankee.messages;
            offset = yankee.videoTitle;
 2010:
            yankee = verify != offset;
            verify = 'video';
            if(!yankee) { _fun00010_ip = 2024; continue _fun00009 }
 2021:
            verify = offset;
 2024:
            mike['videoTitle'] = verify;
            mike = options.bind(tango)(zulu, mike, report);
            return mike;
 2038:
            options = _closure1_slot8;
            zulu = _closure1_slot0;
            verify = _closure1_slot1;
            mike = 2;
            mike = verify[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.t;
            zulu = mike.NmzoDg;
            mike = {};
            verify = golf.targetMinutes;
            mike['targetMinutes'] = verify;
            verify = oscar.config;
            verify = verify.messages;
            verify = verify.gameTitle;
            mike['gameTitle'] = verify;
            mike = options.bind(tango)(zulu, mike, report);
            return mike;
 2119:
            zulu = _closure1_slot8;
            mike = _closure1_slot0;
            options = _closure1_slot1;
            entity = 2;
            entity = options[entity];
            entity = mike.bind(tango)(entity);
            entity = entity.t;
            mike = entity.goA6o6;
            entity = {};
            golf = golf.targetMinutes;
            entity['targetMinutes'] = golf;
            oscar = oscar.config;
            oscar = oscar.messages;
            oscar = oscar.gameTitle;
            entity['gameTitle'] = oscar;
            entity = zulu.bind(tango)(mike, entity, report);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    tango = function(argFoo) { // Original name: getQuestsInstructionsToWinReward
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            zulu = _closure1_slot9;
            tango = undefined;
            zulu = zulu.bind(tango)(entity);
            report = entity.withoutMarkdown;
            entity = zulu;
            if(!report) { _fun00012_ip = 38; continue _fun00011 }
 29:
            mike = _closure1_slot4;
            entity = mike.bind(tango)(zulu);
 38:
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    entity = function(argFoo) { // Original name: getSimplifiedQuestTaskType
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            oscar = 4;
            entity = entity[oscar];
            report = undefined;
            zulu = zulu.bind(report)(entity);
            entity = zulu.isConsoleQuest;
            entity = entity.bind(zulu)(tango);
            if(entity) { _fun00014_ip = 177; continue _fun00013 }
 45:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscar];
            zulu = zulu.bind(report)(entity);
            entity = zulu.hasPlayActivityTask;
            entity = entity.bind(zulu)(tango);
            if(entity) { _fun00014_ip = 177; continue _fun00013 }
 76:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscar];
            golf = zulu.bind(report)(entity);
            zulu = golf.hasStreamOnDesktopTask;
            entity = {};
            entity['quest'] = tango;
            entity = zulu.bind(golf)(entity);
            if(entity) { _fun00014_ip = 165; continue _fun00013 }
 114:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscar];
            zulu = zulu.bind(report)(entity);
            entity = zulu.hasWatchVideoTasks;
            entity = entity.bind(zulu)(tango);
            zulu = _closure1_slot5;
            if(entity) { _fun00014_ip = 157; continue _fun00013 }
 149:
            entity = zulu.PLAY;
            _fun00014_ip = 163; continue _fun00013;
 157:
            entity = zulu.WATCH_VIDEO;
 163:
            _fun00014_ip = 175; continue _fun00013;
 165:
            zulu = _closure1_slot5;
            entity = zulu.STREAM;
 175:
            _fun00014_ip = 187; continue _fun00013;
 177:
            mike = _closure1_slot5;
            entity = mike.PLAY;
 187:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    offset = 0;
    options = golf[offset];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot2 = report;
    verify = 1;
    report = golf[verify];
    yankee = oscar.bind(entity)(report);
    options = yankee.getQuestLogger;
    report = {};
    report = options.bind(yankee)(report);
    var _closure1_slot3 = report;
    report = function(argFoo) { // Original name: astNodeToString
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            report = undefined;
            mike = undefined;
            oscar = undefined;
            golf = undefined;
 11: // try_start_0
            mike = '';
            zulu = entity;
            tango = 'string';
            zulu = typeof zulu;
            if(!(tango !== zulu)) { _fun00016_ip = 157; continue _fun00015 }
 32:
            zulu = global;
            options = zulu.Array;
            tango = options.isArray;
            zulu = entity;
            zulu = tango.bind(options)(zulu);
            if(zulu) { _fun00016_ip = 78; continue _fun00015 }
 59:
            options = _closure1_slot4;
            zulu = entity;
            zulu = zulu.content;
            zulu = options.bind(report)(zulu);
 76: // try_end0
            return zulu;
 78: // try_start_1
            options = _closure1_slot6;
            zulu = entity;
            zulu = options.bind(report)(zulu);
            golf = zulu;
            zulu = zulu.bind(report)();
            oscar = zulu;
            zulu = zulu.done;
            if(zulu) { _fun00016_ip = 155; continue _fun00015 }
 108:
            zulu = oscar;
            zulu = zulu.value;
            options = mike;
            verify = _closure1_slot4;
            zulu = zulu.content;
            zulu = verify.bind(report)(zulu);
            mike = options + zulu;
            zulu = golf;
            zulu = zulu.bind(report)();
            oscar = zulu;
            zulu = zulu.done;
            if(!zulu) { _fun00016_ip = 108; continue _fun00015 }
 155: // try_end1
            return mike;
 157:
            return entity;
 159: // catch_target0 // catch_target1
            CatchBlockStart(arg_register=3);
            zulu = _closure1_slot3;
            mike = zulu.error;
            entity = 'Failed to convert ASTNode to string';
            entity = mike.bind(zulu)(entity, tango);
            entity = '';
            return entity;
        }
    };
    var _closure1_slot4 = report;
    report = {};
    report['PLAY'] = offset;
    options = 'PLAY';
    report[offset] = options;
    report['STREAM'] = verify;
    options = 'STREAM';
    report[verify] = options;
    verify = 2;
    report['WATCH_VIDEO'] = verify;
    options = 'WATCH_VIDEO';
    report[verify] = options;
    var _closure1_slot5 = report;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/quests/hooks/QuestCopyHooks.tsx';
    report = oscar.bind(golf)(report);
    zulu['getQuestsInstructionsToWinReward'] = tango;
    tango = function(argFoo) { // Original name: useQuestsInstructionsToWinReward
        tango = argFoo;
        yankee = tango.quest;
        golf = tango.location;
        offset = tango.questContent;
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        mike = 5;
        mike = oscar[mike];
        zulu = undefined;
        verify = report.bind(zulu)(mike);
        options = verify.useConnectedConsoleLinkOnClick;
        mike = {};
        mike['quest'] = yankee;
        mike['questContent'] = offset;
        options = options.bind(verify)(mike);
        mike = _closure1_slot10;
        entity = {};
        foxtrot = entity;
        romeo = tango;
        tango = copyDataProperties(foxtrot, romeo);
        tango = 'connectedConsoleLinkOnClick';
        entity[tango] = options;
        options = false;
        tango = 'withoutMarkdown';
        entity[tango] = options;
        tango = 6;
        tango = oscar[tango];
        oscar = report.bind(zulu)(tango);
        report = oscar.useIsQuestBarCopySimplificationEnabled;
        tango = {};
        tango['location'] = golf;
        report = report.bind(oscar)(tango);
        tango = 'withSimplifiedCopy';
        entity[tango] = report;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['useQuestsInstructionsToWinReward'] = tango;
    tango = function(argFoo) { // Original name: usePrimaryCtaCopy
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            mike = entity.quest;
            options = entity.location;
            golf = entity.autoTrackExposure;
            oscar = undefined;
            if(!(golf === oscar)) { _fun00018_ip = 28; continue _fun00017 }
 26:
            golf = true;
 28:
            entity = function(argFoo) { // Original name: useSimplifiedQuestTaskType
                report = argFoo;
                var _closure3_slot0 = report;
                tango = _closure1_slot2;
                zulu = tango.useMemo;
                mike = new Array(1);
                mike[0] = report;
                entity = function() {
                    zulu = _closure1_slot11;
                    mike = _closure3_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            tango = entity.bind(oscar)(mike);
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            entity = 6;
            entity = report[entity];
            report = zulu.bind(oscar)(entity);
            zulu = report.useIsQuestBarCopySimplificationEnabled;
            entity = {};
            entity['location'] = options;
            entity['autoTrackExposure'] = golf;
            entity = zulu.bind(report)(entity);
            zulu = _closure1_slot5;
            zulu = zulu.PLAY;
            if(!(zulu !== tango)) { _fun00018_ip = 266; continue _fun00017 }
 102:
            zulu = _closure1_slot5;
            zulu = zulu.STREAM;
            if(!(zulu !== tango)) { _fun00018_ip = 191; continue _fun00017 }
 116:
            zulu = _closure1_slot5;
            zulu = zulu.WATCH_VIDEO;
            if(!(zulu !== tango)) { _fun00018_ip = 132; continue _fun00017 }
 130:
            return oscar;
 132:
            golf = _closure1_slot0;
            options = _closure1_slot1;
            zulu = 2;
            tango = options[zulu];
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.umdNio;
            zulu = tango.bind(report)(zulu);
            return zulu;
 191:
            tango = _closure1_slot0;
            options = _closure1_slot1;
            zulu = 2;
            report = options[zulu];
            report = tango.bind(oscar)(report);
            golf = report.intl;
            report = golf.string;
            zulu = options[zulu];
            zulu = tango.bind(oscar)(zulu);
            tango = zulu.t;
            if(entity) { _fun00018_ip = 251; continue _fun00017 }
 238:
            zulu = tango.l7E81t;
            zulu = report.bind(golf)(zulu);
            _fun00018_ip = 264; continue _fun00017;
 251:
            tango = tango.hyrGU1;
            zulu = report.bind(golf)(tango);
 264:
            return zulu;
 266:
            report = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 2;
            zulu = golf[mike];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = report.bind(oscar)(mike);
            mike = mike.t;
            if(entity) { _fun00018_ip = 326; continue _fun00017 }
 313:
            entity = mike.l7E81t;
            entity = zulu.bind(tango)(entity);
            _fun00018_ip = 339; continue _fun00017;
 326:
            mike = mike.Y7LIPT;
            entity = zulu.bind(tango)(mike);
 339:
            return entity;
        }
    };
    zulu['usePrimaryCtaCopy'] = tango;
    mike = function(argFoo) { // Original name: usePremiumExtendableCopy
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            golf = argFoo;
            var _closure2_slot0 = golf;
            oscar = _closure1_slot2;
            report = oscar.useMemo;
            tango = new Array(1);
            tango[0] = golf;
            mike = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.isCollectibleQuestRewardPremiumExtendable;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = report.bind(oscar)(mike, tango);
            report = oscar.useMemo;
            mike = new Array(1);
            mike[0] = golf;
            entity = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.isCollectibleQuestRewardPermanentWithPremiumSubscription;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = report.bind(oscar)(entity, mike);
            entity = null;
            if(!tango) { _fun00020_ip = 149; continue _fun00019 }
 69:
            golf = _closure1_slot0;
            options = _closure1_slot1;
            zulu = 2;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            if(mike) { _fun00020_ip = 133; continue _fun00019 }
 118:
            mike = zulu.GYGb3N;
            mike = tango.bind(report)(mike);
            _fun00020_ip = 146; continue _fun00019;
 133:
            zulu = zulu.hh7Rb2;
            mike = tango.bind(report)(zulu);
 146:
            entity = mike;
 149:
            return entity;
        }
    };
    zulu['usePremiumExtendableCopy'] = mike;
    return entity;
})();