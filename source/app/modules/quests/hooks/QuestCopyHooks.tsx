// app/modules/quests/hooks/QuestCopyHooks.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun70540: for(var _fun70540_ip = 0; ; ) switch(_fun70540_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun70540_ip = 46; continue _fun70540 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun70540_ip = 55; continue _fun70540 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun70540_ip = 345; continue _fun70540 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun70540_ip = 323; continue _fun70540 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun70540_ip = 283; continue _fun70540 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun70540_ip = 270; continue _fun70540 }
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
            if(!golf) { _fun70540_ip = 163; continue _fun70540 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun70540_ip = 179; continue _fun70540 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun70540_ip = 249; continue _fun70540 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun70540_ip = 249; continue _fun70540 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun70540_ip = 234; continue _fun70540 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun70540_ip = 247; continue _fun70540 }
 234:
            verify = _closure1_slot7;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun70540_ip = 265; continue _fun70540;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun70540_ip = 283; continue _fun70540;
 270:
            golf = _closure1_slot7;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun70540_ip = 323; continue _fun70540 }
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
            if(!tango) { _fun70540_ip = 330; continue _fun70540 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun70541: for(var _fun70541_ip = 0; ; ) switch(_fun70541_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun70541_ip = 56; continue _fun70541 }
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
                    _fun70541_ip = 67; continue _fun70541;
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
 345:
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
        _fun70542: for(var _fun70542_ip = 0; ; ) switch(_fun70542_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun70542_ip = 23; continue _fun70542 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun70542_ip = 33; continue _fun70542 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun70542_ip = 70; continue _fun70542 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun70542_ip = 55; continue _fun70542 }
 70:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: formatWithOrWithoutMarkdown
        _fun70543: for(var _fun70543_ip = 0; ; ) switch(_fun70543_ip) {
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
            if(entity) { _fun70543_ip = 55; continue _fun70543 }
 42:
            entity = zulu.formatToPlainString;
            entity = entity.bind(zulu)(report, tango);
            _fun70543_ip = 67; continue _fun70543;
 55:
            mike = zulu.formatToParts;
            entity = mike.bind(zulu)(report, tango);
 67:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: _getQuestsInstructionsToWinReward
        _fun70544: for(var _fun70544_ip = 0; ; ) switch(_fun70544_ip) {
 0:
            entity = argFoo;
            oscar = entity.quest;
            golf = entity.taskDetails;
            zulu = entity.thirdPartyTaskDetails;
            report = entity.withoutMarkdown;
            entity = entity.withSimplifiedCopy;
            if(!entity) { _fun70544_ip = 101; continue _fun70544 }
 36:
            mike = _closure1_slot11;
            tango = undefined;
            options = mike.bind(tango)(oscar);
            mike = _closure1_slot5;
            mike = mike.PLAY;
            if(!(mike !== options)) { _fun70544_ip = 2099; continue _fun70544 }
 67:
            mike = _closure1_slot5;
            mike = mike.STREAM;
            if(!(mike !== options)) { _fun70544_ip = 2020; continue _fun70544 }
 84:
            mike = _closure1_slot5;
            mike = mike.WATCH_VIDEO;
            if(!(mike !== options)) { _fun70544_ip = 1910; continue _fun70544 }
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
            if(!options) { _fun70544_ip = 222; continue _fun70544 }
 188:
            verify = _closure1_slot0;
            options = _closure1_slot1;
            options = options[output];
            verify = verify.bind(offset)(options);
            options = verify.shouldUsePlayOnDesktopTask;
            options = options.bind(verify)(oscar);
            if(options) { _fun70544_ip = 1596; continue _fun70544 }
 222:
            verify = _closure1_slot0;
            options = _closure1_slot1;
            options = options[output];
            verify = verify.bind(offset)(options);
            options = verify.isConsoleQuest;
            options = options.bind(verify)(oscar);
            if(options) { _fun70544_ip = 1318; continue _fun70544 }
 256:
            verify = _closure1_slot0;
            options = _closure1_slot1;
            options = options[output];
            verify = verify.bind(offset)(options);
            options = verify.shouldUsePlayOnDesktopTask;
            options = options.bind(verify)(oscar);
            if(options) { _fun70544_ip = 1035; continue _fun70544 }
 290:
            verify = _closure1_slot0;
            options = _closure1_slot1;
            options = options[output];
            yankee = verify.bind(offset)(options);
            verify = yankee.isTieredRewardCodeQuest;
            options = {};
            options['quest'] = oscar;
            options = verify.bind(yankee)(options);
            if(options) { _fun70544_ip = 921; continue _fun70544 }
 331:
            verify = _closure1_slot0;
            options = _closure1_slot1;
            options = options[output];
            verify = verify.bind(offset)(options);
            options = verify.hasWatchVideoTasks;
            options = options.bind(verify)(oscar);
            if(options) { _fun70544_ip = 765; continue _fun70544 }
 365:
            verify = _closure1_slot0;
            options = _closure1_slot1;
            options = options[output];
            verify = verify.bind(offset)(options);
            options = verify.hasPlayActivityTask;
            options = options.bind(verify)(oscar);
            if(options) { _fun70544_ip = 616; continue _fun70544 }
 399:
            options = null;
            if(!(options == zulu)) { _fun70544_ip = 609; continue _fun70544 }
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
            if(yankee) { _fun70544_ip = 477; continue _fun70544 }
 469:
            yankee = verify.BLyDvL;
            _fun70544_ip = 483; continue _fun70544;
 477:
            yankee = verify.KYP2pa;
 483:
            verify = _closure1_slot8;
            if(!(options == romeo)) { _fun70544_ip = 519; continue _fun70544 }
 491:
            kilo = _closure1_slot0;
            options = _closure1_slot1;
            options = options[sizing];
            options = kilo.bind(offset)(options);
            options = options.t;
            yankee = options.hkJ+Gh;
 519:
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
 609:
            zulu = zulu.description;
            return zulu;
 616:
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
 765:
            zulu = oscar.config;
            verify = zulu.videoMetadata;
            options = null;
            yankee = options == verify;
            zulu = undefined;
            if(yankee) { _fun70544_ip = 799; continue _fun70544 }
 787:
            verify = verify.messages;
            zulu = verify.videoTitle;
 799:
            options = options != zulu;
            romeo = 'video';
            if(!options) { _fun70544_ip = 813; continue _fun70544 }
 810:
            romeo = zulu;
 813:
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
 921:
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
 1035:
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
            if(options) { _fun70544_ip = 1239; continue _fun70544 }
 1231:
            verify = zulu.AwuMRU;
            _fun70544_ip = 1245; continue _fun70544;
 1239:
            verify = zulu.Lc6EpK;
 1245:
            options = _closure1_slot8;
            zulu = null;
            if(!(zulu == foxtrot)) { _fun70544_ip = 1283; continue _fun70544 }
 1255:
            sizing = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[result];
            zulu = sizing.bind(offset)(zulu);
            zulu = zulu.t;
            verify = zulu.FZL5Q0;
 1283:
            zulu = {};
            zulu['gameTitle'] = kilo;
            zulu['streamingDurationRequirement'] = backup;
            zulu['rewardNameWithArticle'] = romeo;
            zulu['duration'] = foxtrot;
            zulu['questReward'] = romeo;
            zulu = options.bind(offset)(verify, zulu, yankee);
            return zulu;
 1318:
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
            if(options) { _fun70544_ip = 1522; continue _fun70544 }
 1514:
            verify = zulu.Ta44ur;
            _fun70544_ip = 1528; continue _fun70544;
 1522:
            verify = zulu.fSYpaW;
 1528:
            options = _closure1_slot8;
            zulu = null;
            if(!(zulu == romeo)) { _fun70544_ip = 1566; continue _fun70544 }
 1538:
            sizing = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[result];
            zulu = sizing.bind(offset)(zulu);
            zulu = zulu.t;
            verify = zulu.NIimTk;
 1566:
            zulu = {};
            zulu['gameTitle'] = kilo;
            zulu['targetMinutes'] = backup;
            zulu['rewardNameWithArticle'] = foxtrot;
            zulu['duration'] = romeo;
            zulu = options.bind(offset)(verify, zulu, yankee);
            return zulu;
 1596:
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
            if(!zulu) { _fun70544_ip = 1777; continue _fun70544 }
 1771:
            zulu = null;
            if(!(zulu == yankee)) { _fun70544_ip = 1849; continue _fun70544 }
 1777:
            zulu = null;
            if(!(zulu == yankee)) { _fun70544_ip = 1816; continue _fun70544 }
 1783:
            kilo = _closure1_slot0;
            sizing = _closure1_slot1;
            zulu = 2;
            zulu = sizing[zulu];
            zulu = kilo.bind(offset)(zulu);
            zulu = zulu.t;
            zulu = zulu.NIimTk;
            _fun70544_ip = 1847; continue _fun70544;
 1816:
            sizing = _closure1_slot0;
            output = _closure1_slot1;
            kilo = 2;
            kilo = output[kilo];
            kilo = sizing.bind(offset)(kilo);
            kilo = kilo.t;
            zulu = kilo.Ta44ur;
 1847:
            _fun70544_ip = 1880; continue _fun70544;
 1849:
            kilo = _closure1_slot0;
            sizing = _closure1_slot1;
            mike = 2;
            mike = sizing[mike];
            mike = kilo.bind(offset)(mike);
            mike = mike.t;
            zulu = mike.fSYpaW;
 1880:
            mike = {};
            mike['gameTitle'] = backup;
            mike['rewardNameWithArticle'] = foxtrot;
            mike['targetMinutes'] = romeo;
            mike['duration'] = yankee;
            mike = options.bind(offset)(zulu, mike, verify);
            return mike;
 1910:
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
            if(romeo) { _fun70544_ip = 1992; continue _fun70544 }
 1980:
            yankee = yankee.messages;
            offset = yankee.videoTitle;
 1992:
            yankee = verify != offset;
            verify = 'video';
            if(!yankee) { _fun70544_ip = 2006; continue _fun70544 }
 2003:
            verify = offset;
 2006:
            mike['videoTitle'] = verify;
            mike = options.bind(tango)(zulu, mike, report);
            return mike;
 2020:
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
 2099:
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
        _fun70545: for(var _fun70545_ip = 0; ; ) switch(_fun70545_ip) {
 0:
            entity = argFoo;
            zulu = _closure1_slot9;
            tango = undefined;
            zulu = zulu.bind(tango)(entity);
            report = entity.withoutMarkdown;
            entity = zulu;
            if(!report) { _fun70545_ip = 38; continue _fun70545 }
 29:
            mike = _closure1_slot4;
            entity = mike.bind(tango)(zulu);
 38:
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    entity = function(argFoo) { // Original name: getSimplifiedQuestTaskType
        _fun70546: for(var _fun70546_ip = 0; ; ) switch(_fun70546_ip) {
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
            if(entity) { _fun70546_ip = 177; continue _fun70546 }
 45:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscar];
            zulu = zulu.bind(report)(entity);
            entity = zulu.hasPlayActivityTask;
            entity = entity.bind(zulu)(tango);
            if(entity) { _fun70546_ip = 177; continue _fun70546 }
 76:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscar];
            golf = zulu.bind(report)(entity);
            zulu = golf.hasStreamOnDesktopTask;
            entity = {};
            entity['quest'] = tango;
            entity = zulu.bind(golf)(entity);
            if(entity) { _fun70546_ip = 165; continue _fun70546 }
 114:
            zulu = _closure1_slot0;
            entity = _closure1_slot1;
            entity = entity[oscar];
            zulu = zulu.bind(report)(entity);
            entity = zulu.hasWatchVideoTasks;
            entity = entity.bind(zulu)(tango);
            zulu = _closure1_slot5;
            if(entity) { _fun70546_ip = 157; continue _fun70546 }
 149:
            entity = zulu.PLAY;
            _fun70546_ip = 163; continue _fun70546;
 157:
            entity = zulu.WATCH_VIDEO;
 163:
            _fun70546_ip = 175; continue _fun70546;
 165:
            zulu = _closure1_slot5;
            entity = zulu.STREAM;
 175:
            _fun70546_ip = 187; continue _fun70546;
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
        _fun70547: for(var _fun70547_ip = 0; ; ) switch(_fun70547_ip) {
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
            if(!(tango !== zulu)) { _fun70547_ip = 157; continue _fun70547 }
 32:
            zulu = global;
            options = zulu.Array;
            tango = options.isArray;
            zulu = entity;
            zulu = tango.bind(options)(zulu);
            if(zulu) { _fun70547_ip = 78; continue _fun70547 }
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
            if(zulu) { _fun70547_ip = 155; continue _fun70547 }
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
            if(!zulu) { _fun70547_ip = 108; continue _fun70547 }
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
        _fun70549: for(var _fun70549_ip = 0; ; ) switch(_fun70549_ip) {
 0:
            entity = argFoo;
            mike = entity.quest;
            options = entity.location;
            golf = entity.autoTrackExposure;
            oscar = undefined;
            if(!(golf === oscar)) { _fun70549_ip = 28; continue _fun70549 }
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
            if(!(zulu !== tango)) { _fun70549_ip = 264; continue _fun70549 }
 104:
            zulu = _closure1_slot5;
            zulu = zulu.STREAM;
            if(!(zulu !== tango)) { _fun70549_ip = 191; continue _fun70549 }
 118:
            zulu = _closure1_slot5;
            zulu = zulu.WATCH_VIDEO;
            if(!(zulu !== tango)) { _fun70549_ip = 134; continue _fun70549 }
 132:
            return oscar;
 134:
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
            if(entity) { _fun70549_ip = 251; continue _fun70549 }
 238:
            zulu = tango.l7E81t;
            zulu = report.bind(golf)(zulu);
            _fun70549_ip = 262; continue _fun70549;
 251:
            tango = tango.hyrGU1;
            zulu = report.bind(golf)(tango);
 262:
            return zulu;
 264:
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
            if(entity) { _fun70549_ip = 324; continue _fun70549 }
 311:
            entity = mike.l7E81t;
            entity = zulu.bind(tango)(entity);
            _fun70549_ip = 335; continue _fun70549;
 324:
            mike = mike.Y7LIPT;
            entity = zulu.bind(tango)(mike);
 335:
            return entity;
        }
    };
    zulu['usePrimaryCtaCopy'] = tango;
    mike = function(argFoo) { // Original name: usePremiumExtendableCopy
        _fun70552: for(var _fun70552_ip = 0; ; ) switch(_fun70552_ip) {
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
            if(!tango) { _fun70552_ip = 149; continue _fun70552 }
 73:
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
            if(mike) { _fun70552_ip = 135; continue _fun70552 }
 122:
            mike = zulu.GYGb3N;
            mike = tango.bind(report)(mike);
            _fun70552_ip = 146; continue _fun70552;
 135:
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